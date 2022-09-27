enum PROVIDERS {
    github = 'github'
}

const AUTH_SCOPES = {
    [PROVIDERS.github]: [
        'GIST'
    ],
};

export { PROVIDERS, AUTH_SCOPES };