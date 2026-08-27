// === Module 8608: _startStageInstance ===

// Module 8608 (_startStageInstance)
import sendRequest from "sendRequest" /* 530 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

require = arg1;
function _startStageInstance() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = constants.STAGE_INSTANCES;
      const obj2 = { channel_id: null, topic: null, privacy_level: null, guild_scheduled_event_id: null, send_start_notification: null };
      obj2[0] = callback;
      obj2[1] = dependencyMap;
      obj2[2] = closure_2;
      obj2[3] = closure_4;
      obj2[4] = constants;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return body.body;
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateStageInstance() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = c3.STAGE_INSTANCE(callback);
      const obj2 = { topic: null, privacy_level: null };
      obj2[0] = dependencyMap;
      obj2[1] = closure_2;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.patch(obj1);
      return body.body;
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
const result = require("set").fileFinishedImporting("modules/stage_channels/StageInstanceActionCreators.tsx");

export const startStageInstance = function startStageInstance(channel_id, c4, GUILD_ONLY, flag, c5) {
  const self = this;
  const apply = _startStageInstance.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateStageInstance = function updateStageInstance(id, arg1, arg2) {
  const self = this;
  const apply = _updateStageInstance.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endStageInstance = function endStageInstance(id) {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.STAGE_INSTANCE(id), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.del(obj);
};