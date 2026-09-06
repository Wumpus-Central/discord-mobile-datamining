// discord_app/actions/ConsentActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import util from "../intl/index.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  const obj = {
    url: Endpoints.SETTINGS_CONSENT,
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.SETTINGS_CONSENT,
    body: { grant: items, revoke: items2 },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  const obj = { grant: items, revoke: items2 };
  return HTTP.post(request).then(handleRequestSuccess, handleRequestFailure);
};
