// discord_app/modules/webauthn/WebAuthnActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AnalyticsSchema from "../../../discord_common/js/packages/analytics-utils/AnalyticsSchema.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _fetchWebAuthnConditionalChallenge() {
  closure_0 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({
    url: constants.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
    headers: { authorization: "" },
    rejectWithError: true,
  });
  const body = arg1.body;
  return { challenge: body.challenge, ticket: body.ticket };
};
let closure_6 = async function _fetchWebAuthnPasswordlessChallenge() {
  closure_0 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: true });
  const body = arg1.body;
  return { challenge: body.challenge, ticket: body.ticket };
};
let closure_7 = async function _deleteWebAuthnCredential(arg0) {
  let id = arg0;
  c2 = 0;
  c1 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    await HTTP.del({ url: Endpoints.MFA_WEBAUTHN_CREDENTIAL(id.id), rejectWithError: true }).then(() => {
      c1(c2[3]);
      const obj = { type: "AUTHENTICATOR_DELETE", credential };
      obj.dispatch(obj);
    });
    return value;
  })();
};
let closure_8 = async function _editWebAuthnCredential(arg0, name) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp5;
            closure_130_0 = undefined;
            let body;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.MFA_WEBAUTHN_CREDENTIAL(closure_0), body: null, rejectWithError: false };
            let obj1 = { name };
            request.body = obj1;
            c4 = 1;
            c5 = 1;
            const obj2 = { value: HTTP.patch(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_130_0 = value;
          if (null != closure_130_0.body) {
            body = closure_130_0.body;
            let date = null;
            if (null != body.last_used) {
              const _Date = Date;
              date = new Date(body.last_used);
            }
            closure_130_2 = date;
            obj = {};
            const merged = Object.assign(body);
            obj.last_used = closure_130_2;
            closure_130_3 = obj;
            obj1 = closure_131_1(closure_131_2[3]);
            const obj4 = { type: "AUTHENTICATOR_UPDATE", credential: closure_130_3 };
            obj1.dispatch(obj4);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp22) {
        c5 = tmp;
        throw tmp22;
      }
    }
  })();
};
let closure_9 = async function _startRegisterWebAuthnCredential() {
  closure_0 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: false };
  await HTTP.post(request);
  const body = arg1.body;
  return { ticket: body.ticket, challenge: body.challenge };
};
let closure_10 = async function _finishRegisterWebAuthnCredential(name, ticket, credential) {
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp2;
            closure_3 = tmp5;
            closure_131_0 = undefined;
            const request = {
              url: constants.MFA_WEBAUTHN_CREDENTIALS,
              body: null,
              trackedActionData: null,
              rejectWithError: true,
            };
            const obj1 = { name, ticket, credential };
            request.body = obj1;
            const obj2 = { event: AnalyticsSchema.NetworkActionNames.WEBAUTHN_REGISTER };
            request.trackedActionData = obj2;
            c5 = 1;
            c6 = 1;
            const obj3 = { value: TrackedHTTPUtilsDefault.post(request), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_131_0 = value;
          let obj4 = closure_132_1(closure_132_2[3]);
          obj4 = { type: "AUTHENTICATOR_CREATE", credential: closure_131_0.body };
          obj4.dispatch(obj4);
          const obj5 = { type: "MFA_ENABLE_SUCCESS", codes: closure_131_0.body.backup_codes };
          closure_132_1(closure_132_2[3]).dispatch(obj5);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c6 = tmp;
        throw tmp6;
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnActionCreators.tsx");

export const fetchWebAuthnConditionalChallenge = function fetchWebAuthnConditionalChallenge() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchWebAuthnPasswordlessChallenge = function fetchWebAuthnPasswordlessChallenge() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchWebAuthnCredentials = function fetchWebAuthnCredentials() {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: true });
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
      let obj = { type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: mapped };
      obj.dispatch(obj);
    }
  });
};
export const deleteWebAuthnCredential = function deleteWebAuthnCredential() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const editWebAuthnCredential = function editWebAuthnCredential() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const startRegisterWebAuthnCredential = function startRegisterWebAuthnCredential() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishRegisterWebAuthnCredential = function finishRegisterWebAuthnCredential() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const triggerWebAuthnRegister = function triggerWebAuthnRegister() {
  DispatcherDefault.dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
};
export const clearWebAuthnRegisterTrigger = function clearWebAuthnRegisterTrigger() {
  DispatcherDefault.dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
};
