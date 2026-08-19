// === Module 8331: _fetchMessageInteractionData ===

// Module 8331 (_fetchMessageInteractionData)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function _fetchMessageInteractionData() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp2;
      body = tmp5;
      const HTTP = callback(closure_1_2[3]).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = c4.MESSAGE_INTERACTION_DATA(callback, callback2);
      obj1[2] = callback(closure_1_2[3]).rejectWithMigratedError();
      yield HTTP.get(obj1);
      body = body.body;
      const obj = callback2(body[2]);
      const obj4 = { type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS", channelId: null, messageId: null, interactionData: null };
      obj4[1] = callback;
      obj4[2] = callback2;
      obj4[3] = body;
      obj.dispatch(obj4);
      return body;
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
const result = require("obj132").fileFinishedImporting("modules/interactions/InteractionActionCreators.tsx");

export const queueInteractionComponentState = function queueInteractionComponentState(c1, closure_9, c8, c4) {
  const obj = { type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: c1, nonce: closure_9, state: c8, componentId: c4 };
  obj.dispatch(obj);
};
export const addQueued = function addQueued(closure_9, arg1) {
  ({ data, messageId, preflight, onCreate, onSuccess, onFailure } = arg1);
  const obj = { type: "INTERACTION_QUEUE", data, nonce: closure_9, messageId, preflight, onCreate, onSuccess, onFailure };
  obj.dispatch(obj);
};
export const setFailed = function setFailed(closure_1, code, message, status) {
  const obj = { type: "INTERACTION_FAILURE", nonce: closure_1, errorMessage: message, errorCode: code, status };
  obj.dispatch(obj);
};
export const fetchMessageInteractionData = function fetchMessageInteractionData(channelId, messageId) {
  const self = this;
  const apply = _fetchMessageInteractionData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};