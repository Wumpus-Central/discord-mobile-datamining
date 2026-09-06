// === Module 10959: MessageRequestActionCreators ===

// Module 10959 (MessageRequestActionCreators)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import MessageRequestTypes from "MessageRequestTypes" /* 10960 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _acceptMessageRequest(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(closure_0), body: null, rejectWithError: null };
          const obj1 = { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.ACCEPTED };
          request.body = obj1;
          request.rejectWithError = HTTPUtils.rejectWithMigratedError();
          c3 = 1;
          c4 = 1;
          const obj2 = { value: HTTP.put(request), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        obj = closure_130_1(closure_130_2[4]);
        const obj4 = { type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC", channelId: closure_129_0 };
        obj.dispatch(obj4);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c4 = tmp;
      throw tmp12;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestActionCreators.tsx");

export const acceptMessageRequest = function acceptMessageRequest() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearMessageRequestState = function clearMessageRequestState(id) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.UNSPECIFIED }, rejectWithError: null };
  const obj = { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.UNSPECIFIED };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.put(request);
};
export const markAsMessageRequest = function markAsMessageRequest(id) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.PENDING }, rejectWithError: null };
  const obj = { consent_status: MessageRequestTypes.MessageRequestConsentStatusTypes.PENDING };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.put(request);
};
export const rejectMessageRequest = function rejectMessageRequest(id) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.del(obj);
};
export const rejectMessageRequestBatch = function rejectMessageRequestBatch(channel_ids) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(), body: { channel_ids }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.put(request);
};
export const fetchUserCountryCode = function fetchUserCountryCode() {
  const locationMetadata = AuthenticationActionCreatorsDefault.getLocationMetadata();
};