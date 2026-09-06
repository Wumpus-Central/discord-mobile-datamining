// discord_app/modules/interactions/InteractionActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _fetchMessageInteractionData() {
  closure_3 = tmp2;
  closure_2 = tmp5;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: Endpoints.MESSAGE_INTERACTION_DATA(closure_0, closure_1), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() });
  const body = value.body;
  { url: Endpoints.MESSAGE_INTERACTION_DATA(closure_0, closure_1), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  closure_131_1(closure_131_2[2]).dispatch({ type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS", channelId: closure_130_0, messageId: closure_130_1, interactionData: body });
  return body;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interactions/InteractionActionCreators.tsx");

export const queueInteractionComponentState = function queueInteractionComponentState(messageId, nonce, state, componentId) {
  const obj = { type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId, nonce, state, componentId };
  obj.dispatch(obj);
};
export const addQueued = function addQueued(nonce, message) {
  ({ data, messageId, preflight, onCreate, onSuccess, onFailure } = message);
  const obj = { type: "INTERACTION_QUEUE", data, nonce, messageId, preflight, onCreate, onSuccess, onFailure };
  obj.dispatch(obj);
};
export const setFailed = function setFailed(nonce, code, message, status) {
  const obj = { type: "INTERACTION_FAILURE", nonce, errorMessage: message, errorCode: code, status };
  obj.dispatch(obj);
};
export const fetchMessageInteractionData = function fetchMessageInteractionData() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};