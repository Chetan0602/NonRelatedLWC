import { LightningElement } from 'lwc';

export default class VoiceLwc extends LightningElement {
    if(a == 1){
        this.template.querySelector('c-common-toast').showToast('success','<strong>Enter Valid Email and License Id<strong/>','utility:warning',10000);
    }else{
        this.template.querySelector('c-common-toast').showToast('error','<strong>Error Massage/>','utility:warning',10000);
    }
}