// Restricted globals again so 
/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';

// constants that help with authentication routing.
const LOGIN_SUCCESS_PAGE = '/secret';
const LOGIN_FAILURE_PAGE = '/';

export default class Auth {
  // initalizes this object w/ default properties from auth0 webpage.
  auth0 = new auth0.WebAuth({
    domain: "keolazy.auth0.com",
    clientID: "BlEmsZUx64pbwGNCintCfkJrgttAvwic",
    redirectUri: "http://localhost:3000/callback",
    // endpoint to get user information
    audience: "https://keolazy.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"

  });

  constructor() {
    this.login = this.login.bind(this);
  }

  // Method: redirects user to login page
  login() {
    this.auth0.authorize();
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResults) => {
      if(authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
        // store access token, id_token, expires_at in localStorage of browser.
          localStorage.setItem('acess_token', authResults.accessToken);
          localStorage.setItem('id_token', authResults.idToken);
          localStorage.setItem('expires_at', expiresAt);
          console.log(localStorage)
          // removes all that information from query string.
          location.hash = "";
          // redirect to page upon success.
          location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    })
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}