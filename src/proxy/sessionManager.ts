import * as vscode from 'vscode';

// Classes
import UserManager from '../class/user';

// Managers
import StorageManager from "../utils/storage";


export default class SessionManager {

    private _userManager;
    private _storageManager;

    constructor(context: vscode.ExtensionContext) {
        this._userManager = new UserManager();
        this._storageManager = new StorageManager(context);
    }

    async startSession() {
        const session = await this._userManager.signIn();
        if (session) {
            return session;
        }

        vscode.window.showInformationMessage('There was an error during login process');
    }
}

