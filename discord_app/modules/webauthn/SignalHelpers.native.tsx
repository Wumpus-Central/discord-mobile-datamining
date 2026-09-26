// discord_app/modules/webauthn/SignalHelpers.native.tsx
import LoggerDefault from "../debug/Logger.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        credentials = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            credentials = 3;
            throw value;
          } else if (arg0 === 2) {
            credentials = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const result = credentials(6016).encodeUserIdForWebAuthn(closure_1);
            const mapped = credentials.map((cred_id) => cred_id.cred_id);
            const found = mapped.filter((item) => "" !== item);
            const obj4 = { rpId, encodedId: result, allAcceptedCredentialIds: found, credentials };
            logger.info("signalAllAcceptedCredentials", obj4);
            const obj5 = credentials(6016);
            const result1 = v1(6017).signalAllAcceptedCredentials(rpId, result, found);
            v1 = 1;
            credentials = 1;
            const obj6 = { value: result1.catch(logger.warn), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          credentials = 3;
          throw value;
        } else if (arg0 === 2) {
          credentials = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          credentials = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        credentials = tmp;
        throw tmp5;
      }
    }
  })();
};
prototype["signalCurrentUserDetails"] = function signalCurrentUserDetails(user) {
  closure_0 = user;
  return (async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = username(dependencyMap[2]).encodeUserIdForWebAuthn(username.id);
            const email = username.email;
            let global_name = email;
            if (email == null) {
              global_name = tmp23.global_name;
            }
            username = global_name;
            if (global_name == null) {
              username = tmp23.username;
            }
            username = tmp23.username;
            const obj5 = { rpId, encodedId: result, name: username, displayName: username };
            logger.info("signalCurrentUserDetails", obj5);
            const obj3 = global_name(dependencyMap[3]);
            const result1 = obj3.signalCurrentUserDetails(rpId, result, username, username);
            c3 = 1;
            dependencyMap = 1;
            const obj6 = { value: result1.catch(logger.warn), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp7 = closure_0;
            if (typeof closure_0 === "string") {
              const _JSON = JSON;
              let cred_id = JSON.parse(tmp7).id;
            } else {
              cred_id = tmp7.cred_id;
            }
            const obj5 = { rpId: null, credentialId: null };
            tmp7 = rpId;
            obj5.rpId = rpId;
            obj5.credentialId = cred_id;
            logger.info("signalUnknownCredential", obj5);
            const result = v1(dependencyMap[3]).signalUnknownCredential(rpId, cred_id);
            result.catch(logger.warn);
            v1 = 1;
            c0 = 1;
            const obj3 = v1(dependencyMap[3]);
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c0 = tmp;
        throw tmp12;
      }
    }
  })();
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/SignalHelpers.native.tsx");

export default prototype;
