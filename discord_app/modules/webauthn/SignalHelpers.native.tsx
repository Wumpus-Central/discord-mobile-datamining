// === Module 6094: SignalHelpers ===

// Module 6094 (SignalHelpers)
import LoggerDefault from "Logger" /* 3 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c0, c2, c3, credentials;

const tmp2 = new LoggerDefault("SignalHelpers.native");
let closure_4 = tmp2;
class SignalHelpers {
  static signalAllAcceptedCredentials(credentials, id) {
    let closure_0 = credentials;
    let closure_1 = id;
    return (async () => {
      let v1;
      if (credentials === 2) {
        credentials = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj5 = credentials(dependencyMap[2]);
              const result = obj5.encodeUserIdForWebAuthn(id);
              const mapped = credentials.map((cred_id) => cred_id.cred_id);
              const found = mapped.filter((item) => "" !== item);
              const obj4 = { rpId, encodedId: result, allAcceptedCredentialIds: found, credentials };
              logger.info("signalAllAcceptedCredentials", obj4);
              const obj7 = v1(dependencyMap[3]);
              const result1 = obj7.signalAllAcceptedCredentials(rpId, result, found);
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          credentials = 3;
          throw tmp4;
        }
      }
    })();
  }
  static signalCurrentUserDetails(user) {
    let closure_0 = user;
    return (async () => {
      let username;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj7 = username(c2[2]);
              const result = obj7.encodeUserIdForWebAuthn(username.id);
              const email = username.email;
              let global_name = email;
              const tmp20 = c2;
              if (email == null) {
                global_name = tmp21.global_name;
              }
              username = global_name;
              if (global_name == null) {
                username = tmp21.username;
              }
              username = tmp21.username;
              const obj5 = { rpId, encodedId: result, name: username, displayName: username };
              logger.info("signalCurrentUserDetails", obj5);
              const obj3 = global_name(tmp20[3]);
              const result1 = obj3.signalCurrentUserDetails(rpId, result, username, username);
              c3 = 1;
              c2 = 1;
              const obj6 = { value: result1.catch(logger.warn), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    })();
  }
  static signalUnknownCredential(credential) {
    let closure_0 = credential;
    return (async () => {
      let cred_id;
      let v1;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              if (typeof cred_id === "string") {
                const _JSON = JSON;
                cred_id = JSON.parse(cred_id).id;
              } else {
                cred_id = cred_id.cred_id;
              }
              const obj5 = { rpId, credentialId: cred_id };
              logger.info("signalUnknownCredential", obj5);
              const obj3 = v1(dependencyMap[3]);
              const result = obj3.signalUnknownCredential(rpId, cred_id);
              v1 = 1;
              c0 = 1;
              const obj6 = { value: result.catch(logger.warn), done: false };
              return obj6;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c0 = 3;
          throw tmp10;
        }
      }
    })();
  }
}
let result = size.fileFinishedImporting("modules/webauthn/SignalHelpers.native.tsx");

export default SignalHelpers;