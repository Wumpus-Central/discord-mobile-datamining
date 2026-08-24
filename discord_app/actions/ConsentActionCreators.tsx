// discord_app/actions/ConsentActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import getSystemLocale from "../intl/index.native.tsx";

function handleRequestSuccess(body) {
  if (tmp) {
    let obj = dispatcherDefault;
    obj = { type: "UPDATE_CONSENTS", consents: null };
    obj = {};
    const merged = Object.assign(body.body);
    obj[1] = obj;
    obj.dispatch(obj);
  }
  return body.body;
}
function handleRequestFailure(status) {
  if (status.status >= 500) {
    if (status.status <= 599) {
      const intl2 = getSystemLocale.intl;
      let message = intl2.string(getSystemLocale.t.cvJdtg);
    }
    const _Error = Error;
    error = new Error(message);
    throw error;
  }
  if (null != status) {
    if (null != status.body) {
      if (null != status.body.message) {
        message = status.body.message;
      }
    }
  }
  const intl = getSystemLocale.intl;
  message = intl.string(getSystemLocale.t.cvJdtg);
}
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.SETTINGS_CONSENT, body: obj, oldFormErrors: true, rejectWithError: null };
  obj = { grant: items, revoke: items2 };
  obj[3] = sendRequest.rejectWithMigratedError();
  const obj3 = sendRequest;
  return HTTP.post(obj).then(handleRequestSuccess, handleRequestFailure);
};