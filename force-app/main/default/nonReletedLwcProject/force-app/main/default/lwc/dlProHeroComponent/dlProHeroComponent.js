import {LightningElement,api} from 'lwc';
import COMMUNITY_BASE_PATH from '@salesforce/community/basePath';
import {DlProCookieUtility} from 'c/dlProUtilities';
export default class DlProHeroComponent extends LightningElement {
    @api heroImageURL;
    get backgroundStyle() {
        // return `background-image:url(${ COMMUNITY_BASE_PATH }/sfsites/c/cms/delivery/media/${ this.heroImageURL });
        //     display: flex;
        //     align-items: center;`;
    }
    userCookies = '{"accountLocked": false || cma || "dlproUserId": 0|| cma || "lastUpdatedSessionTimestamp": "2023-05-03T09:31:39.050Z"|| cma || "lastLogin": "2023-05-02 06:05:44.0"|| cma || "userStatus": "ACV"|| cma || "adminLevel": "1"|| cma || "profile":{"firstName": "psadmin" || cma || "lastName": "dlprotestthreezeroone" || cma || "preferredLanguage": "EN" || cma || "preferredSite": "us" || cma || "roleCode": "OW" || cma || "preferredCountry": "US" || cma || "login": "dlprojecttest+PS301@gmail.com" || cma || "userId": 1431885 || cma || "email": "dlprojecttest+PS301@gmail.com"}|| cma || "orgAccess": "All" || cma || "wmAppId": "1000090" || cma || "sessionCookie": "20111aipovvtt9DHCn3WC8RrFzif9SYcsISk17D6EA4MZaXJx307Ykw" || cma || "adminInd": "Y" || cma || "invalidLoginAttempts": 0 || cma || "encKey": "YWJjZGVmZ2hpamtsbW5vcA==" || cma || "wmEncInd": "N" || cma || "wmEncKey": "YWJjZGVmZ2hpamtsbW5vcA==" || cma || "myAccount": {"lastName": "hassenstab" || cma || "salesAccountId": "1032090" || cma || "managedIndicator": "Y" || cma || "agencyLinks": [] || cma || "arcIata": "33531665" || cma || "spid": "3000000014844" || cma || "agencyName": "AMERICAN EXPRESS TVL SVC" || cma || "firstName": "paul" || cma || "phone": "(612) 266-5643" || cma || "sfdcAccountId": "A-0000009" || cma || "agencylogo": "" || cma || "displayAcctManagerInd": "Y" || cma || "email": "paul.hassenstab=delta.com@example.com" || cma || "salesAccountType": "AY"}|| cma || "dashboard": [ "1000090" || cma || "1000150" || cma || "1000960" || cma || "1000990" || cma || "1001200" ] || cma || "key": ""}';
    connectedCallback() {
        this.handleCookieCreate();
        setTimeout(() => {
            window.addEventListener('message',this.receiveMessage);
        },3000);

    }
    handleCookieCreate() {
        var value = JSON.stringify(this.userCookies);
        this.createCookie(this.cookieName,value,1);
    }
    createCookie(name,value,days) {
        var expires;

        if(days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }

        document.cookie = name + "=" + escape(value) + expires + "; path=/";
    }
    receiveMessage = (event) => {
        DlProCookieUtility.createUser(event.data);
        this.user = DlProCookieUtility.getUser();
        this.userFirstName = this.user.firstName;
        this.agencyName = this.user.agencyName;
        console.log('event.data....from...hero..' + JSON.stringify(event.data));
    }

} 