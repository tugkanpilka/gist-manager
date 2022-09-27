import { Octokit } from "octokit";

class GistManager {
    _octokit;

    constructor(userAccessToken: string) {
        this._octokit = new Octokit({ auth: userAccessToken });
    }

    fetchAll() {
       return this._octokit.rest.gists.list();
    }

    create() {

    }
}

export default GistManager;