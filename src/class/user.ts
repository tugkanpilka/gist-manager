// Libraries
import * as vscode from 'vscode';

// Utils
import { AUTH_SCOPES, PROVIDERS } from "../utils/constants";

export default class UserManager {

    async signIn() {
        return await vscode.authentication.getSession(
            PROVIDERS.github,
            AUTH_SCOPES[PROVIDERS.github],
            {
                createIfNone: true
            }
        );
    }
}