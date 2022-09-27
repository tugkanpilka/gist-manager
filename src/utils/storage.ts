import * as vscode from 'vscode';

class StorageManager {
	private _context: vscode.ExtensionContext;

	constructor(context: vscode.ExtensionContext) {
		 this._context = context;
	}

	async getFromSecretDb(key: string) {
		return await this._context.secrets.get(key);
	}

	async saveToSecretDb(key: string, value: string) {
		await this._context.secrets.store(key, value);
	}
}

export default StorageManager;