// discord_app/modules/webauthn/WebAuthnSignalManager.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

class WebAuthnSignalManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {
      AUTHENTICATOR_DELETE: applyArgumentsResult.handleAuthenticatorDelete,
      MFA_WEBAUTHN_CREDENTIALS_LOADED: applyArgumentsResult.handleWebAuthnCredentialsLoaded,
      CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate,
    };
    return applyArgumentsResult;
  }
}
const prototype = WebAuthnSignalManager.prototype;
prototype["handleAuthenticatorDelete"] = function handleAuthenticatorDelete(credential) {
  credential = credential.credential;
  return (async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v3(c1[3]);
            c1 = 1;
            v3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.signalUnknownCredential(credential);
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
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
  return (async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            id = id.getId();
            let obj1 = v3(c1[3]);
            c1 = 1;
            v3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.signalAllAcceptedCredentials(credentials, id);
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
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
  return (async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v3(c1[3]);
            c1 = 1;
            v3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.signalCurrentUserDetails(user);
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
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
