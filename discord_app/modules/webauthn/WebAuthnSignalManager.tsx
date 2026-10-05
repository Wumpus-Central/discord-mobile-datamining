// === Module 18021: WebAuthnSignalManager ===

// Module 18021 (WebAuthnSignalManager)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c1;

class WebAuthnSignalManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { AUTHENTICATOR_DELETE: applyArgumentsResult.handleAuthenticatorDelete, MFA_WEBAUTHN_CREDENTIALS_LOADED: applyArgumentsResult.handleWebAuthnCredentialsLoaded, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate };
    return applyArgumentsResult;
  }
  handleAuthenticatorDelete(credential) {
    credential = credential.credential;
    return (async () => {
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj2 = v3(c1[3]);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: obj2.signalUnknownCredential(credential), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          v3 = 3;
          throw tmp7;
        }
      }
    })();
  }
  handleWebAuthnCredentialsLoaded(credentials) {
    credentials = credentials.credentials;
    return (async () => {
      let id;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = id.getId();
              const obj2 = v3(c1[3]);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: obj2.signalAllAcceptedCredentials(credentials, id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          v3 = 3;
          throw tmp9;
        }
      }
    })();
  }
  handleCurrentUserUpdate(user) {
    user = user.user;
    return (async () => {
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj2 = v3(c1[3]);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: obj2.signalCurrentUserDetails(user), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          v3 = 3;
          throw tmp7;
        }
      }
    })();
  }
}
const prototype = WebAuthnSignalManager.prototype;
const webAuthnSignalManager = new WebAuthnSignalManager();
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnSignalManager.tsx");

export default webAuthnSignalManager;