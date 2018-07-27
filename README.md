## Signup for Auth0

Create Application. Obtain ClientID + Domain(custom domains can be used in non-free version)

## "Auth Component"

Initialize auth0 object w/ default properties from auth0 webpage

```
auth0 = new auth0.WebAuth() {
    domain: "auth_userName_here.auth0.com",
    clientID: "BlEmsZUx64pbwGNCintCfkJrgttAvwic",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://auth_userName_here.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
}
```

## Setup "CallBack Component"

Auth0 uses this in conjunction with it's builtin "auth.login" method.

Upon componentDidMount(), new auth object is initalized and auth.handleAuthentication() is called.
