// === Module 5650: signalAllAcceptedCredentials ===

// Module 5650 (signalAllAcceptedCredentials)
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
let c4 = new require("encodeUserIdForWebAuthn")("SignalHelpers.native");
const prototype = function SignalHelpers() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["signalAllAcceptedCredentials"] = function signalAllAcceptedCredentials(c0, id, found) {
  let closure_0 = c0;
  let closure_1 = id;
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
        return { value: "HermesInternal", done: null };
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
          } else if (undefined !== outer1_3.DCDSecurityKeyManager.signalAllAcceptedCredentials) {
            let obj1 = v0(table[3]);
            const result = obj1.encodeUserIdForWebAuthn(table);
            const mapped = v0.map((cred_id) => cred_id.cred_id);
            const found = mapped.filter((arg0) => "" !== arg0);
            obj1 = { rpId: null, encodedId: null, allAcceptedCredentialIds: null, credentials: null };
            obj1[0] = outer1_5;
            obj1[1] = result;
            obj1[2] = found;
            obj1[3] = v0;
            outer1_4.info("signalAllAcceptedCredentials", obj1);
            const DCDSecurityKeyManager = tmp20.DCDSecurityKeyManager;
            const result1 = DCDSecurityKeyManager.signalAllAcceptedCredentials(outer1_5, result, found);
            table = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = result1.catch(outer1_4.warn);
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp14) {
        v0 = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype["signalCurrentUserDetails"] = function signalCurrentUserDetails(c0, result, username, username2) {
  let closure_0 = c0;
  return callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === obj) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (undefined !== obj.DCDSecurityKeyManager.signalCurrentUserDetails) {
            let obj1 = outer1_0(outer1_1[3]);
            const result = obj1.encodeUserIdForWebAuthn(outer1_0.id);
            const email = outer1_0.email;
            let global_name = email;
            if (email == null) {
              global_name = tmp7.global_name;
            }
            let username = global_name;
            if (global_name == null) {
              username = tmp7.username;
            }
            username = tmp7.username;
            obj1 = { rpId: null, encodedId: null, name: null, displayName: null };
            obj1[0] = outer1_5;
            obj1[1] = result;
            obj1[2] = username;
            obj1[3] = username;
            outer1_4.info("signalCurrentUserDetails", obj1);
            const DCDSecurityKeyManager = tmp26.DCDSecurityKeyManager;
            const result1 = DCDSecurityKeyManager.signalCurrentUserDetails(outer1_5, result, username, username);
            obj = 1;
            c2 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = result1.catch(outer1_4.warn);
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
prototype["signalUnknownCredential"] = function signalUnknownCredential(c0, cred_id) {
  let closure_0 = c0;
  return callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let _catch = outer1_3;
            if (undefined !== outer1_3.DCDSecurityKeyManager.signalUnknownCredential) {
              let obj1 = c0;
              if (typeof c0 === "y") {
                const _JSON = JSON;
                let cred_id = JSON.parse(obj1).id;
              } else {
                cred_id = obj1.cred_id;
              }
              obj1 = { rpId: null, credentialId: null };
              obj1[0] = outer1_5;
              obj1[1] = cred_id;
              outer1_4.info("signalUnknownCredential", obj1);
              const DCDSecurityKeyManager = _catch.DCDSecurityKeyManager;
              const result = DCDSecurityKeyManager.signalUnknownCredential(outer1_5, cred_id);
              _catch = result.catch;
              _catch(outer1_4.warn);
              c1 = 1;
              c0 = 1;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
const tmp2 = new require("encodeUserIdForWebAuthn")("SignalHelpers.native");
let result = require("timestamp").fileFinishedImporting("modules/webauthn/SignalHelpers.native.tsx");

export default prototype;