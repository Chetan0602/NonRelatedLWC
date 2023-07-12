import {LightningElement,api} from 'lwc';
// Test
export default class ChildLwc extends LightningElement {
    @api get getidfromparent() {
        return this.getidfromparent;
    }
    set getidfromparent(val) {
        this.data1 = val;
    }
    data1;
}