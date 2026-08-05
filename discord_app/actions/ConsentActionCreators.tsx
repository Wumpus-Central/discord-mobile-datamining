// discord_app/actions/ConsentActionCreators.tsx
import { Endpoints } from "ME";

function handleRequestSuccess(body) {
  if (tmp) {
    let obj = require("../Dispatcher.tsx");
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
      const intl2 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
      let message = intl2.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.cvJdtg);
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
  const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
  message = intl.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.cvJdtg);
}
const result = require("getSystemLocale").fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: null };
  obj[2] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
  const value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  obj = { url: Endpoints.SETTINGS_CONSENT, body: obj, oldFormErrors: true, rejectWithError: null };
  obj = { grant: items, revoke: items2 };
  obj[3] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
  const obj3 = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */;
  return HTTP.post(obj).then(handleRequestSuccess, handleRequestFailure);
};