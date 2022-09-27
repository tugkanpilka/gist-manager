import * as vscode from 'vscode';


import SessionManager from "./proxy/sessionManager";
import GistManager from "./proxy/gistManager";



export async function activate(context: vscode.ExtensionContext) {
    const sessionManager = new SessionManager(context);
    const session = await sessionManager.startSession();

    if (session) {
        const gistManager = new GistManager(session.accessToken);
        const gists = await gistManager.fetchAll();

    }
}

export function deactivate() {}
