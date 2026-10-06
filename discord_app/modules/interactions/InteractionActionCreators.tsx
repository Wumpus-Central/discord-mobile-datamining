// === Module 7811: InteractionActionCreators ===

// Module 7811 (InteractionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _fetchMessageInteractionData() {
  obj = _asyncToGenerator(async (channelId, messageId) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj9;
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: Endpoints.MESSAGE_INTERACTION_DATA(channelId, messageId), oldFormErrors: true, rejectWithError: obj9.rejectWithMigratedError() };
      obj9 = HTTPUtils;
      await get(obj4);
      const body = value.body;
      const obj7 = { type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS", channelId, messageId, interactionData: body };
      obj = closure_131_1(closure_131_2[2]);
      obj.dispatch(obj7);
      return body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/interactions/InteractionActionCreators.tsx");

export const queueInteractionComponentState = function queueInteractionComponentState(c1, nonce, c8, c4) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: importDefault, nonce, state, componentId };
  obj.dispatch(obj2);
};
export const addQueued = function addQueued(nonce2, arg1) {
  let data;
  let messageId;
  let onCreate;
  let onFailure;
  let onSuccess;
  let preflight;
  ({ data, messageId, preflight, onCreate, onSuccess, onFailure } = arg1);
  obj = DispatcherDefault;
  const obj2 = { type: "INTERACTION_QUEUE", data, nonce: nonce2, messageId, preflight, onCreate, onSuccess, onFailure };
  obj.dispatch(obj2);
};
export const setFailed = function setFailed(nonce, code, message, status) {
  obj = DispatcherDefault;
  const obj2 = { type: "INTERACTION_FAILURE", nonce, errorMessage: message, errorCode: code, status };
  obj.dispatch(obj2);
};
export const fetchMessageInteractionData = function fetchMessageInteractionData() {
  return obj(...arguments);
};