import conf from '../conf/conf.js';

import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async signup({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name,
            )
            // console.log(userAccount);
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite signup service error:", error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Appwrite login service error: ", error);
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite logout service error:", error);
        }
    }

    async getUserAuthenticationState() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite getUserAuthenticationState service error:", error);
        }
    }
}

const authService = new AuthService();

export default authService;