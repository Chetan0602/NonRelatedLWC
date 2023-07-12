import { LightningElement, track} from 'lwc';

export default class ParentWlc extends LightningElement {
    @track myData; 
    input1;
    inputChangeHandel(event) {
        console.log(event);
        this.input1=event.target.value;
    }
}