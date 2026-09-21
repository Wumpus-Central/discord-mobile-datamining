// === Module 18284: WebAuthnSignalManager ===

// Module 18284 (WebAuthnSignalManager)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

class WebAuthnSignalManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { AUTHENTICATOR_DELETE: applyArgumentsResult.handleAuthenticatorDelete, MFA_WEBAUTHN_CREDENTIALS_LOADED: applyArgumentsResult.handleWebAuthnCredentialsLoaded, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate };
    return applyArgumentsResult;
  }
}
const prototype = WebAuthnSignalManager.prototype;
prototype["handleAuthenticatorDelete"] = function handleAuthenticatorDelete(credential) {
  credential = credential.credential;
  return (async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
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
            c1 = 1;
            v3 = 1;
            const obj5 = { value: v3(c1[3]).signalUnknownCredential(credential), done: false };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v3 = tmp;
        throw tmp8;
      }
    }
  })();
};
prototype["handleWebAuthnCredentialsLoaded"] = function handleWebAuthnCredentialsLoaded(credentials) {
  credentials = credentials.credentials;
  return (async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
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
            c1 = 1;
            v3 = 1;
            const obj5 = { value: v3(c1[3]).signalAllAcceptedCredentials(credentials, id), done: false };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        v3 = tmp;
        throw tmp10;
      }
    }
  })();
};
prototype["handleCurrentUserUpdate"] = function handleCurrentUserUpdate(user) {
  user = user.user;
  return (async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
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
            c1 = 1;
            v3 = 1;
            const obj5 = { value: v3(c1[3]).signalCurrentUserDetails(user), done: false };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v3 = tmp;
        throw tmp8;
      }
    }
  })();
};
const webAuthnSignalManager = new WebAuthnSignalManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnSignalManager.tsx");

export default webAuthnSignalManager;