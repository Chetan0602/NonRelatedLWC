export default class DlProCookieUtility {
    static cookieName = "dlus_session_id";

    static user;

    static createUser(data) {
        this.user = new User();
        this.user.firstName = data?.profile?.firstName;
        this.user.userId = data?.profile?.userId;
        this.user.agencyName = data?.myAccount?.agencyName;
    }

    static getUser() {
        return this.user;
    }

    static getCookie() {
        var tr = this.retriveCookie();
        var cookieData = tr.replaceAll('||cma||',',');
        if(tr != '') {
            return JSON.parse(cookieData);
        } else {
            return null;
        }
    }

    static retriveCookie() {
        var cookieString = "; " + document.cookie;
        var parts = cookieString.split("; " + this.cookieName + "=");
        return decodeURIComponent(parts.pop().split(";").shift());
    }
}


export class User {
    firstName;
    userId;
    agencyName;
}