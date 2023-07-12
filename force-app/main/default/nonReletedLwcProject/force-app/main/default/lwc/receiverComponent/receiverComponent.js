import {LightningElement,wire} from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';
export default class ReceiverComponent extends LightningElement {
    @wire(MessageContext)
    messageContext;
    child = false;
    receivedMessage = '';

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            MY_MESSAGE_CHANNEL,
            (message) => {
                this.handleMessage(message);
            }
        );
    }

    handleMessage(message) {
        this.receivedMessage = message ? message.message : 'no message payload';
    }
    openChildHandle() {
        this.child = true;
    }
}