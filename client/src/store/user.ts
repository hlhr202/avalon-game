import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

interface IUserInfo {
    name: string;
    room: string;
}

class UserStore {
    userInfo: IUserInfo | null = null;

    constructor() {
        makeAutoObservable(this);
        makePersistable(this, {
            name: "UserStore",
            properties: ["userInfo"],
            storage: window.sessionStorage,
        });
    }

    updateUserInfo = (userInfo: IUserInfo | null) => {
        this.userInfo = userInfo;
    };
}

export const userStore = new UserStore();
