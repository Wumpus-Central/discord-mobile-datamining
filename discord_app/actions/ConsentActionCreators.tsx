// === Module 14663: ConsentActionCreators ===

// Module 14663 (ConsentActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

function handleRequestSuccess(body) {
  let obj2;
  const tmp = null != body && null != body.body;
  if (tmp) {
    const obj = { type: "UPDATE_CONSENTS", consents: obj2 };
    obj2 = {};
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(body.body);
    dispatch(obj);
  }
  return body.body;
}
function handleRequestFailure(status) {
  let message;
  if (status.status >= 500) {
    if (status.status <= 599) {
      const intl2 = intl3.intl;
      message = intl2.string(intl3.t.cvJdtg);
    }
    const _Error = Error;
    const self = this;
    const self2 = this;
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
  const intl = intl3.intl;
  message = intl.string(intl3.t.cvJdtg);
}
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const get = HTTP.get;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  const value = get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  let obj;
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.SETTINGS_CONSENT, body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  const post = HTTP.post;
  obj = { grant: items, revoke: items2 };
  obj3 = HTTPUtils;
  const postResult = post(request);
  return postResult.then(handleRequestSuccess, handleRequestFailure);
};