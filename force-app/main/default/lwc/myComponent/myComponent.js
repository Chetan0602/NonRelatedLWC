import { LightningElement,track } from 'lwc';
import { registerListener, unregisterAllListeners} from 'c/pubsub';
export default class MyComponent extends LightningElement {

    @track Message;
    connectedCallback() {
        registerListener('messageFromSpace', this.handleMessage, this);
    }
   
    handleMessage(myMessage) {
        this.Message = myMessage;
        //Add your code here
    }
   
    disconnectCallback() {
        unregisterAllListeners(this);
    }
}