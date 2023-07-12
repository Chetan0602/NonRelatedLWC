import {getDataConnectorSourceFields} from 'lightning/analyticsWaveApi';
import { LightningElement } from 'lwc';

export default class CustomValidationUsingLWC extends LightningElement {

    submitData() {
        let inputName = this.template.querySelector(".nameCmp");
        let inputDate = this.template.querySelector(".dateCmp");
        let namevalue = inputName.value;
        let dateValue = inputDate.value;
        var d1 = new Date(dateValue);
        
        var today=new Date();
        
        !namevalue? inputName.setCustomValidity("Name value is required test"):inputName.setCustomValidity("");
        inputName.reportValidity();
        //    if (!namevalue) {                 
        //         inputName.setCustomValidity("Name value is required");
        //     } else {
        //         inputName.setCustomValidity("");
        //     }
        
        !dateValue? inputDate.setCustomValidity("Date value is required"):(d1<today)? inputDate.setCustomValidity("Date value can not be less than today"):inputDate.setCustomValidity("");
        inputDate.reportValidity();
        // if (!dateValue) {
        //     inputDate.setCustomValidity("Date value is required");
        // }
        
        // else if(d1 < today)
        // {
        //    inputDate.setCustomValidity("Date value can not be less than today");
        // }
        
        // else {
        //     inputDate.setCustomValidity("");
        // }
        
         
    }
}