// discord_app/modules/saved_messages/SavedMessagesActions.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";

require = fn;
let closure_6 = async function _upsertSavedMessage() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.PUT_SAVED_MESSAGE(_require.channelId, _require.messageId),
    body: { due_at: null, source: null },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  ({ dueAt: obj8.due_at, source: obj8.source } = _require);
  closure_129_0 = await HTTP.put(request);
  return closure_130_0(closure_130_2[4]).savedMessageCreateObjectToClient(closure_129_0.body);
};
let closure_7 = async function _deleteSavedMessage() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.del({
    url: Endpoints.DELETE_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId),
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  });
  return true;
};
let closure_8 = async function _fetchAndUpdateSavedMessages() {
  closure_1 = tmp3;
  if (!isStale.getIsStale()) {
    return Promise.resolve();
  }
  const HTTP = HTTPUtils.HTTP;
  const obj1 = { url: constants.GET_SAVED_MESSAGES, rejectWithError: null };
  let obj10 = HTTPUtils;
  obj1.rejectWithError = obj10.rejectWithMigratedError();
  await HTTP.get(obj1);
  await closure_129_1(closure_129_2[5]).dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: [] });
  closure_128_0 = await "HermesInternal";
  const results = closure_128_0.body.results;
  closure_128_1 = results.map((message) => {
    let messageRecord = null;
    if (null != message.message) {
      let obj = closure_1_0(4783);
      messageRecord = obj.createMessageRecord(message.message);
    }
    obj = { message: messageRecord, saveData: closure_1_0(7860).savedMessageDataToClient(message.save_data) };
    return obj;
  });
  obj10 = { type: "SAVED_MESSAGES_UPDATE", savedMessages: closure_128_1 };
  await closure_129_1(closure_129_2[5]).dispatch(obj10);
  closure_129_1(closure_129_2[5]);
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

export const upsertSavedMessage = function upsertSavedMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSavedMessage = function deleteSavedMessage() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAndUpdateSavedMessages = function fetchAndUpdateSavedMessages() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
