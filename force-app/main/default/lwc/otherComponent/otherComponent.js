import { LightningElement, track, wire } from 'lwc';
import {  fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class OtherComponent extends LightningElement {
     @track myMessage;
     @wire(CurrentPageReference) pageRef;

     sendMessage() {
          fireEvent(this.pageRef, 'messageFromSpace', this.myMessage);
     }
}