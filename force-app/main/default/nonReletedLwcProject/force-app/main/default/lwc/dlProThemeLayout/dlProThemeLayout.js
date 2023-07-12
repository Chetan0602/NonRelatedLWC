import {LightningElement,api} from 'lwc';
/**
 * @slot globalheader
 * @slot globalfooter
 */
export default class DlProThemeLayout extends LightningElement {
    @api
    showGlobalHeader;

    @api
    showGlobalFooter;
}