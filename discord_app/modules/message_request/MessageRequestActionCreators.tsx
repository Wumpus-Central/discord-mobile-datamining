// discord_app/modules/message_request/MessageRequestActionCreators.tsx
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import handleLogoutDefault from "../../actions/AuthenticationActionCreators.tsx";
import MessageRequestConsentStatusTypes from "MessageRequestTypes.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
function _acceptMessageRequest() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              const callback2 = tmp5;
              const HTTP = callback(closure_1_2[2]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = c4.CHANNEL_RECIPIENT_ME(callback);
              const obj2 = { consent_status: null };
              obj2[0] = callback(closure_1_2[3]).MessageRequestConsentStatusTypes.ACCEPTED;
              obj1[1] = obj2;
              obj1[2] = callback(closure_1_2[2]).rejectWithMigratedError();
              c3 = 1;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.put(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = callback2(table[4]);
            const obj5 = { type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: null };
            obj5[1] = callback;
            obj.dispatch(obj5);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/message_request/MessageRequestActionCreators.tsx");

export const acceptMessageRequest = function acceptMessageRequest(arg0) {
  const self = this;
  const apply = _acceptMessageRequest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearMessageRequestState = function clearMessageRequestState(id) {
  const HTTP = sendRequest.HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: null, rejectWithError: null };
  obj = { consent_status: MessageRequestConsentStatusTypes.MessageRequestConsentStatusTypes.UNSPECIFIED };
  obj[1] = obj;
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.put(obj);
};
export const markAsMessageRequest = function markAsMessageRequest(id) {
  const HTTP = sendRequest.HTTP;
  let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: null, rejectWithError: null };
  obj = { consent_status: MessageRequestConsentStatusTypes.MessageRequestConsentStatusTypes.PENDING };
  obj[1] = obj;
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.put(obj);
};
export const rejectMessageRequest = function rejectMessageRequest(closure_0) {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(closure_0), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const rejectMessageRequestBatch = function rejectMessageRequestBatch(closure_0) {
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(), body: obj, rejectWithError: null };
  obj = { channel_ids: closure_0 };
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.put(obj);
};
export const fetchUserCountryCode = function fetchUserCountryCode() {
  const locationMetadata = handleLogoutDefault.getLocationMetadata();
};