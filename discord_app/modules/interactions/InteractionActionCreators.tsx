// discord_app/modules/interactions/InteractionActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function _fetchMessageInteractionData() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let body = tmp2;
      let closure_2 = tmp5;
      const HTTP = callback(outer1_2[3]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = c4.MESSAGE_INTERACTION_DATA(callback, callback2);
      obj1[2] = callback(outer1_2[3]).rejectWithMigratedError();
      closure_2 = yield HTTP.get(obj1);
      if (closure_2.ok) {
        body = closure_2.body;
        const obj = callback2(closure_2[2]);
        const obj4 = { type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS", channelId: null, messageId: null, interactionData: null };
        obj4[1] = callback;
        obj4[2] = callback2;
        obj4[3] = body;
        obj.dispatch(obj4);
        return body;
      }
      return null;
    })();
  });
  const _fetchMessageInteractionData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("dispatcher").fileFinishedImporting("modules/interactions/InteractionActionCreators.tsx");

export const queueInteractionComponentState = function queueInteractionComponentState(c1, closure_9, c8, c4) {
  let obj = dispatcher;
  obj = { type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: c1, nonce: closure_9, state: c8, componentId: c4 };
  obj.dispatch(obj);
};
export const addQueued = function addQueued(closure_9, arg1) {
  let data;
  let messageId;
  let onCreate;
  let onFailure;
  let onSuccess;
  let preflight;
  ({ data, messageId, preflight, onCreate, onSuccess, onFailure } = arg1);
  let obj = dispatcher;
  obj = { type: "INTERACTION_QUEUE", data, nonce: closure_9, messageId, preflight, onCreate, onSuccess, onFailure };
  obj.dispatch(obj);
};
export const setFailed = function setFailed(closure_1, code, message, status) {
  let obj = dispatcher;
  obj = { type: "INTERACTION_FAILURE", nonce: closure_1, errorMessage: message, errorCode: code, status };
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