// discord_app/modules/webauthn/SignalHelpers.native.tsx
import LoggerDefault from "../debug/Logger.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const NativeModules = fn(17).NativeModules;
let closure_4 = new LoggerDefault("SignalHelpers.native");
const prototype = function SignalHelpers() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["signalAllAcceptedCredentials"] = function signalAllAcceptedCredentials(credentials, id) {
  closure_0 = credentials;
  closure_1 = id;
  return (async () => {
    if (credentials === 2) {
      credentials = 3;
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
        credentials = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            credentials = 3;
            throw value;
          } else if (arg0 === 2) {
            credentials = 3;
            obj = { value, done: true };
            return obj;
          } else if (undefined !== NativeModules.DCDSecurityKeyManager.signalAllAcceptedCredentials) {
            let obj1 = credentials(c1[3]);
            const result = obj1.encodeUserIdForWebAuthn(closure_1);
            const mapped = credentials.map((cred_id) => cred_id.cred_id);
            const found = mapped.filter((item) => "" !== item);
            obj1 = { rpId, encodedId: result, allAcceptedCredentialIds: found, credentials };
            logger.info("signalAllAcceptedCredentials", obj1);
            const DCDSecurityKeyManager = tmp19.DCDSecurityKeyManager;
            const result1 = DCDSecurityKeyManager.signalAllAcceptedCredentials(rpId, result, found);
            c1 = 1;
            credentials = 1;
            const obj2 = { value: result1.catch(logger.warn), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          credentials = 3;
          throw value;
        } else if (arg0 === 2) {
          credentials = 3;
          obj = { value, done: true };
          return obj;
        }
        credentials = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp14) {
        credentials = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype["signalCurrentUserDetails"] = function signalCurrentUserDetails(user) {
  closure_0 = user;
  return (async () => {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (undefined !== c3.DCDSecurityKeyManager.signalCurrentUserDetails) {
            let obj1 = username(global_name[3]);
            const result = obj1.encodeUserIdForWebAuthn(username.id);
            const email = username.email;
            global_name = email;
            if (email == null) {
              global_name = tmp7.global_name;
            }
            username = global_name;
            if (global_name == null) {
              username = tmp7.username;
            }
            username = tmp7.username;
            obj1 = { rpId, encodedId: result, name: username, displayName: username };
            logger.info("signalCurrentUserDetails", obj1);
            const DCDSecurityKeyManager = tmp25.DCDSecurityKeyManager;
            const result1 = DCDSecurityKeyManager.signalCurrentUserDetails(rpId, result, username, username);
            c3 = 1;
            c2 = 1;
            const obj2 = { value: result1.catch(logger.warn), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp20) {
        c2 = tmp;
        throw tmp20;
      }
    }
  })();
};
prototype["signalUnknownCredential"] = function signalUnknownCredential(credential) {
  closure_0 = credential;
  return (async () => {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let _catch = NativeModules;
            if (undefined !== NativeModules.DCDSecurityKeyManager.signalUnknownCredential) {
              let obj1 = closure_0;
              if (typeof closure_0 === "string") {
                const _JSON = JSON;
                let cred_id = JSON.parse(obj1).id;
              } else {
                cred_id = obj1.cred_id;
              }
              obj1 = { rpId, credentialId: cred_id };
              logger.info("signalUnknownCredential", obj1);
              const DCDSecurityKeyManager = _catch.DCDSecurityKeyManager;
              const result = DCDSecurityKeyManager.signalUnknownCredential(rpId, cred_id);
              _catch = result.catch;
              _catch(logger.warn);
              c1 = 1;
              c0 = 1;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        c0 = tmp;
        throw tmp10;
      }
    }
  })();
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/SignalHelpers.native.tsx");

export default prototype;
