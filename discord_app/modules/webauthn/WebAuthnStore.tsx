// === Module 14508: WebAuthnStore ===

// Module 14508 (WebAuthnStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Server from "Server" /* 1985 */;
import size from "module_2" /* 2 */;

let c2 = false;
let closure_3 = [];
let c4 = false;
const Store = get_initializedDefault.Store;
class WebAuthnStore extends Store {
  hasFetchedCredentials() {
    return c2;
  }
  getCredentials() {
    return closure_3;
  }
  hasPendingRegisterTrigger() {
    return c4;
  }
}
Object.defineProperty(WebAuthnStore.prototype, "hasCredentials", {
  get: function hasCredentials() {
    return closure_3.length > 0;
  },
  set: undefined
});
WebAuthnStore.displayName = "WebAuthnStore";
const obj = {
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
    const tmp = c2;
    if (!tmp) {
      c2 = true;
      flag = true;
    }
    return flag;
  },
  AUTHENTICATOR_CREATE: function handleAuthenticatorCreate(credential) {
    let flag;
    credential = credential.credential;
    if (credential.type === Server.AuthenticatorType.WEBAUTHN) {
      const tmp3 = undefined === closure_3.find((id) => id.id === credential.id);
      if (tmp3) {
        const items = [];
        items[HermesBuiltin.arraySpread(items, closure_3, 0)] = credential;
        closure_3 = items;
      }
      flag = tmp3;
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
      let tmp = closure_3;
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
    const tmp = c4;
    if (tmp) {
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
};
const webAuthnStore = new WebAuthnStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnStore.tsx");

export default webAuthnStore;