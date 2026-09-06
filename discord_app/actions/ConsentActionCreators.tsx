// === Module 14855: ConsentActionCreators ===

// Module 14855 (ConsentActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import size from "module_2" /* 2 */;

function handleRequestSuccess(body) {
  if (tmp) {
    let obj = { type: "UPDATE_CONSENTS", consents: null };
    obj = {};
    const merged = Object.assign(body.body);
    obj.consents = obj;
    obj.dispatch(obj);
  }
  return body.body;
}
function handleRequestFailure(status) {
  if (status.status >= 500) {
    if (status.status <= 599) {
      const intl2 = util.intl;
      let message = intl2.string(util.t.cvJdtg);
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
  const intl = util.intl;
  message = intl.string(util.t.cvJdtg);
}
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.SETTINGS_CONSENT, body: { grant: items, revoke: items2 }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  const obj = { grant: items, revoke: items2 };
  return HTTP.post(request).then(handleRequestSuccess, handleRequestFailure);
};