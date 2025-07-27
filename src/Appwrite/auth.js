import { useNavigate } from "react-router-dom";
import conf from "../conf/conf"
import {Client, Account, ID} from "appwrite"

export class AuthService{
    client = new Client();
    account;
    
    constructor(){ // syntax from appwrite docs
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){ 
                return this.login({email, password});
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }
    
    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(error){
            throw error;
        }
    }
    
    async logout(){
        try{
            await this.account.deleteSessions(); // deletes all the login sessions
        }
        catch(error){
            console.log("Appwrite service :: logout :: error", error);
            throw error
        }
    }
    
    async getCurrentUser(){
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }
    }
}

const authService = new AuthService(); // An object

export default authService // exporting the object directly
