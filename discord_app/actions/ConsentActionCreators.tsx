// === Module 13972: handleRequestSuccess ===

// Module 13972 (handleRequestSuccess)
import { Endpoints } from "ME";

function handleRequestSuccess(body) {
  if (tmp) {
    let obj = importDefault(709);
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
      const intl2 = require(1236) /* getSystemLocale */.intl;
      let message = intl2.string(require(1236) /* getSystemLocale */.t.cvJdtg);
    }
    const _Error = Error;
    const error = new Error(message);
    throw error;
  }
  if (null != status) {
    if (null != status.body) {
      if (null != status.body.message) {
        message = status.body.message;
      }
    }
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  message = intl.string(require(1236) /* getSystemLocale */.t.cvJdtg);
}
const result = require("getSystemLocale").fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: null };
  obj[2] = require(530) /* sendRequest */.rejectWithMigratedError();
  const value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: Endpoints.SETTINGS_CONSENT, body: obj, oldFormErrors: true, rejectWithError: null };
  obj = { grant: items, revoke: items2 };
  obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
  const obj3 = require(530) /* sendRequest */;
  return HTTP.post(obj).then(handleRequestSuccess, handleRequestFailure);
};