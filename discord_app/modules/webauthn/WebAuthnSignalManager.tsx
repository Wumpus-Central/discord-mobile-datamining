// discord_app/modules/webauthn/WebAuthnSignalManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";

initializeDefault;
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
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj1 = v0(table[3]);
            table = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.signalUnknownCredential(v0);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  })();
};
prototype["handleWebAuthnCredentialsLoaded"] = function handleWebAuthnCredentialsLoaded(credentials) {
  credentials = credentials.credentials;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const id = closure_1_3.getId();
            obj1 = v0(table[3]);
            table = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.signalAllAcceptedCredentials(v0, id);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        v0 = tmp;
        throw tmp10;
      }
    }
  })();
};
prototype["handleCurrentUserUpdate"] = function handleCurrentUserUpdate(user) {
  user = user.user;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj1 = v0(table[3]);
            table = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.signalCurrentUserDetails(v0);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  })();
};
const webAuthnSignalManager = new WebAuthnSignalManager();
const result = require("obj132").fileFinishedImporting("modules/webauthn/WebAuthnSignalManager.tsx");

export default webAuthnSignalManager;