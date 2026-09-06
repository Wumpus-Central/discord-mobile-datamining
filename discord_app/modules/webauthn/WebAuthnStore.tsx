// === Module 14656: WebAuthnStore ===

// Module 14656 (WebAuthnStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Server from "Server" /* 1894 */;

require = fn;
let c2 = false;
let closure_3 = [];
let c4 = false;
const Store = initializeDefault.Store;
class WebAuthnStore extends Store {
}
const prototype = WebAuthnStore.prototype;
prototype["hasFetchedCredentials"] = function hasFetchedCredentials() {
  return c2;
};
Object.defineProperty(prototype, "hasCredentials", {
  get: function hasCredentials() {
    return closure_3.length > 0;
  },
  set: undefined
});
prototype["getCredentials"] = function getCredentials() {
  return closure_3;
};
prototype["hasPendingRegisterTrigger"] = function hasPendingRegisterTrigger() {
  return c4;
};
WebAuthnStore.displayName = "WebAuthnStore";
const webAuthnStore = new WebAuthnStore(DispatcherDefault, {
  LOGOUT: function handleReset() {
    closure_3 = [];
    c2 = false;
    c4 = false;
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED: function handleWebAuthnCredentialsLoaded(credentials) {
    credentials = credentials.credentials;
    let flag = false;
    if (closure_3 !== credentials) {
      closure_3 = credentials;
      flag = true;
    }
    if (!c2) {
      c2 = true;
      flag = true;
    }
    return flag;
  },
  AUTHENTICATOR_CREATE: function handleAuthenticatorCreate(credential) {
    credential = credential.credential;
    if (credential.type === Server.AuthenticatorType.WEBAUTHN) {
      const tmp2 = undefined === closure_3.find((id) => id.id === credential.id);
      if (tmp2) {
        const items = [];
        items[HermesBuiltin.arraySpread(closure_3, 0)] = credential;
        closure_3 = items;
      }
      let flag = tmp2;
    } else {
      const type = credential.type;
      flag = false;
    }
    return flag;
  },
  AUTHENTICATOR_UPDATE: function handleAuthenticatorUpdate(credential) {
    credential = credential.credential;
    if (credential.type !== Server.AuthenticatorType.WEBAUTHN) {
      const type = credential.type;
      return false;
    } else {
      closure_3 = closure_3.map((id) => {
        let tmp = id;
        if (id.id === credential.id) {
          tmp = credential;
        }
        return tmp;
      });
    }
  },
  AUTHENTICATOR_DELETE: function handleAuthenticatorDelete(credential) {
    credential = credential.credential;
    if (credential.type !== Server.AuthenticatorType.WEBAUTHN) {
      const type = credential.type;
      return false;
    } else {
      closure_3 = closure_3.filter((id) => id.id !== credential.id);
    }
  },
  WEBAUTHN_TRIGGER_REGISTER: function handleTriggerRegister() {
    if (c4) {
      return false;
    } else {
      c4 = true;
    }
  },
  WEBAUTHN_CLEAR_REGISTER_TRIGGER: function handleClearRegisterTrigger() {
    if (c4) {
      c4 = false;
    } else {
      return false;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnStore.tsx");

export default webAuthnStore;