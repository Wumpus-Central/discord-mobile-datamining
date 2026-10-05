// discord_app/modules/webauthn/WebAuthnActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AnalyticsSchema from "../../../discord_common/js/packages/analytics-utils/AnalyticsSchema.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_2, closure_3, closure_4;

let obj = function _fetchWebAuthnConditionalChallenge() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let closure_0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = {
      url: constants.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
      headers: { authorization: "" },
      rejectWithError: true,
    };
    await HTTP.post(obj4);
    const body = value.body;
    obj = { challenge: body.challenge, ticket: body.ticket };
    return obj;
  });
  return obj(...arguments);
};
obj = function _fetchWebAuthnPasswordlessChallenge() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let closure_0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: true };
    await HTTP.post(obj4);
    const body = value.body;
    obj = { challenge: body.challenge, ticket: body.ticket };
    return obj;
  });
  return obj(...arguments);
};
obj = function _deleteWebAuthnCredential() {
  obj = _asyncToGenerator(async (arg0) => {
    const id = arg0;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let delResult;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c2 = 1;
              c1 = 1;
              const obj4 = { url: Endpoints.MFA_WEBAUTHN_CREDENTIAL(id.id), rejectWithError: true };
              const obj5 = {
                value: delResult.then(() => {
                  obj = closure_2_1(closure_2_2[3]);
                  const obj2 = { type: "AUTHENTICATOR_DELETE", credential };
                  obj.dispatch(obj2);
                }),
                done: false,
              };
              delResult = del(obj4);
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          } else {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _editWebAuthnCredential() {
  obj = _asyncToGenerator(async (arg0, name) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function (arg0, value) {
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          let date;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              closure_0 = undefined;
              body = undefined;
              date = undefined;
              obj = undefined;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.MFA_WEBAUTHN_CREDENTIAL(closure_0), body: obj5, rejectWithError: false };
              const patch = HTTP.patch;
              c4 = 1;
              c5 = 1;
              obj5 = { name };
              const obj6 = { value: patch(request), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            if (null != closure_0.body) {
              body = closure_0.body;
              date = null;
              if (null != body.last_used) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                date = new Date(body.last_used);
              }
              obj = { last_used: date };
              const merged = Object.assign(body);
              const obj8 = { type: "AUTHENTICATOR_UPDATE", credential: obj };
              const obj2 = closure_131_1(closure_131_2[3]);
              obj2.dispatch(obj8);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c5 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _startRegisterWebAuthnCredential() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let closure_0;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: false };
    await HTTP.post(request);
    const body = value.body;
    obj = { ticket: body.ticket, challenge: body.challenge };
    return obj;
  });
  return obj(...arguments);
};
obj = function _finishRegisterWebAuthnCredential() {
  obj = _asyncToGenerator(async (name, ticket, credential) => {
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              name = undefined;
              const request = {
                url: constants.MFA_WEBAUTHN_CREDENTIALS,
                body: obj4,
                trackedActionData: obj6,
                rejectWithError: true,
              };
              obj4 = { name, ticket, credential };
              obj6 = { event: AnalyticsSchema.NetworkActionNames.WEBAUTHN_REGISTER };
              const post = TrackedHTTPUtilsDefault.post;
              TrackedHTTPUtilsDefault;
              c5 = 1;
              c6 = 1;
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            name = value;
            const obj9 = { type: "AUTHENTICATOR_CREATE", credential: name.body };
            const obj5 = closure_132_1(closure_132_2[3]);
            obj5.dispatch(obj9);
            const obj10 = { type: "MFA_ENABLE_SUCCESS", codes: name.body.backup_codes };
            const obj7 = closure_132_1(closure_132_2[3]);
            obj7.dispatch(obj10);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c6 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnActionCreators.tsx");

export const fetchWebAuthnConditionalChallenge = function fetchWebAuthnConditionalChallenge() {
  return obj(...arguments);
};
export const fetchWebAuthnPasswordlessChallenge = function fetchWebAuthnPasswordlessChallenge() {
  return obj(...arguments);
};
export const fetchWebAuthnCredentials = function fetchWebAuthnCredentials() {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: Endpoints.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: true };
  const value = HTTP.get(obj);
  value.then((body) => {
    if (null != body.body) {
      body = body.body;
      const mapped = body.map(function (last_used) {
        let date = null;
        if (null != last_used.last_used) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date(last_used.last_used);
        }
        obj = { last_used: date };
        const merged = Object.assign(last_used);
        return obj;
      });
      obj = DispatcherDefault;
      const obj2 = { type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: mapped };
      obj.dispatch(obj2);
    }
  });
};
export const deleteWebAuthnCredential = function deleteWebAuthnCredential() {
  return obj(...arguments);
};
export const editWebAuthnCredential = function editWebAuthnCredential() {
  return obj(...arguments);
};
export const startRegisterWebAuthnCredential = function startRegisterWebAuthnCredential() {
  return obj(...arguments);
};
export const finishRegisterWebAuthnCredential = function finishRegisterWebAuthnCredential() {
  return obj(...arguments);
};
export const triggerWebAuthnRegister = function triggerWebAuthnRegister() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
};
export const clearWebAuthnRegisterTrigger = function clearWebAuthnRegisterTrigger() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
};
