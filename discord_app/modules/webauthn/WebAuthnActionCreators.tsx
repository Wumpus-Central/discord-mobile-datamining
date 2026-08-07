// discord_app/modules/webauthn/WebAuthnActionCreators.tsx
import ImpressionNames from "ImpressionNames";
import { Endpoints } from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function _fetchWebAuthnConditionalChallenge() {
  const self = this;
  const tmp = callback(function*() {
    let body = tmp4;
    const HTTP = outer1_0(table[2]).HTTP;
    const obj1 = { url: null, headers: null, rejectWithError: true };
    obj1[0] = outer1_4.WEBAUTHN_CONDITIONAL_UI_CHALLENGE;
    obj1[1] = { authorization: "" };
    yield HTTP.post(obj1);
    body = arg1.body;
    const obj = { challenge: null, ticket: null };
    obj[0] = body.challenge;
    obj[1] = body.ticket;
    return obj;
  });
  const _fetchWebAuthnConditionalChallenge = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchWebAuthnPasswordlessChallenge() {
  const self = this;
  const tmp = callback(function*() {
    let body = tmp4;
    const HTTP = outer1_0(table[2]).HTTP;
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = outer1_4.WEBAUTHN_PASSWORDLESS_CHALLENGE;
    yield HTTP.post(obj1);
    body = arg1.body;
    const obj = { challenge: null, ticket: null };
    obj[0] = body.challenge;
    obj[1] = body.ticket;
    return obj;
  });
  const _fetchWebAuthnPasswordlessChallenge = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteWebAuthnCredential() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      const HTTP = lib(table[2]).HTTP;
      const obj1 = { url: null, rejectWithError: true };
      obj1[0] = outer1_4.MFA_WEBAUTHN_CREDENTIAL(lib.id);
      yield HTTP.del(obj1).then(() => {
        let obj = v3(table[3]);
        obj = { type: "AUTHENTICATOR_DELETE", credential: closure_0 };
        obj.dispatch(obj);
      });
      return arg1;
    })();
  });
  const _deleteWebAuthnCredential = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _editWebAuthnCredential() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = tmp2;
              let date = tmp5;
              let lib;
              let body;
              date = undefined;
              obj = undefined;
              const HTTP = lib(outer1_2[2]).HTTP;
              let obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = c4.MFA_WEBAUTHN_CREDENTIAL(lib);
              const obj2 = { name: null };
              obj2[0] = body;
              obj1[1] = obj2;
              c4 = 1;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            if (null != lib.body) {
              body = lib.body;
              date = null;
              if (null != body.last_used) {
                const _Date = Date;
                date = new Date(body.last_used);
              }
              obj = {};
              const merged = Object.assign(body);
              obj.last_used = date;
              obj1 = body(date[3]);
              const obj5 = { type: "AUTHENTICATOR_UPDATE", credential: null };
              obj5[1] = obj;
              obj1.dispatch(obj5);
            }
            c5 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp22) {
          c5 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  const _editWebAuthnCredential = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _startRegisterWebAuthnCredential() {
  const self = this;
  const tmp = callback(function*() {
    let body = tmp4;
    const HTTP = outer1_0(table[2]).HTTP;
    const obj1 = { url: null, body: null, rejectWithError: false };
    obj1[0] = outer1_4.MFA_WEBAUTHN_CREDENTIALS;
    obj1[1] = {};
    yield HTTP.post(obj1);
    body = arg1.body;
    const obj = { ticket: null, challenge: null };
    obj[0] = body.ticket;
    obj[1] = body.challenge;
    return obj;
  });
  const _startRegisterWebAuthnCredential = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _finishRegisterWebAuthnCredential() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp2;
              let ImpressionNames = tmp5;
              let lib;
              const obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: true };
              obj1[0] = outer1_4.MFA_WEBAUTHN_CREDENTIALS;
              const obj2 = { name: null, ticket: null, credential: null };
              obj2[0] = lib;
              obj2[1] = callback;
              obj2[2] = dependencyMap;
              obj1[1] = obj2;
              const obj3 = { event: null };
              obj3[0] = lib(663).NetworkActionNames.WEBAUTHN_REGISTER;
              obj1[2] = obj3;
              c5 = 1;
              c6 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = callback(5126).post(obj1);
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            obj4 = callback(709);
            const obj5 = { type: "AUTHENTICATOR_CREATE", credential: null };
            obj5[1] = lib.body;
            obj4.dispatch(obj5);
            let obj6 = callback(709);
            obj6 = { type: "MFA_ENABLE_SUCCESS", codes: null };
            obj6[1] = lib.body.backup_codes;
            obj6.dispatch(obj6);
            c6 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp6) {
          c6 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  const _finishRegisterWebAuthnCredential = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/webauthn/WebAuthnActionCreators.tsx");

export const fetchWebAuthnConditionalChallenge = function fetchWebAuthnConditionalChallenge() {
  const self = this;
  const apply = _fetchWebAuthnConditionalChallenge.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchWebAuthnPasswordlessChallenge = function fetchWebAuthnPasswordlessChallenge() {
  const self = this;
  const apply = _fetchWebAuthnPasswordlessChallenge.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchWebAuthnCredentials = function fetchWebAuthnCredentials() {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: Endpoints.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: true });
  value.then((body) => {
    if (null != body.body) {
      body = body.body;
      const mapped = body.map((last_used) => {
        let date = null;
        if (null != last_used.last_used) {
          const _Date = Date;
          date = new Date(last_used.last_used);
        }
        const obj = {};
        const merged = Object.assign(last_used);
        obj.last_used = date;
        return obj;
      });
      let obj = callback(table[3]);
      obj = { type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: null };
      obj[1] = mapped;
      obj.dispatch(obj);
    }
  });
};
export const deleteWebAuthnCredential = function deleteWebAuthnCredential(credential) {
  const self = this;
  const apply = _deleteWebAuthnCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const editWebAuthnCredential = function editWebAuthnCredential(id, first) {
  const self = this;
  const apply = _editWebAuthnCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const startRegisterWebAuthnCredential = function startRegisterWebAuthnCredential() {
  const self = this;
  const apply = _startRegisterWebAuthnCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishRegisterWebAuthnCredential = function finishRegisterWebAuthnCredential(intl, closure_0, c1) {
  const self = this;
  const apply = _finishRegisterWebAuthnCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const triggerWebAuthnRegister = function triggerWebAuthnRegister() {
  dispatcher.dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
};
export const clearWebAuthnRegisterTrigger = function clearWebAuthnRegisterTrigger() {
  dispatcher.dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
};