// discord_app/modules/stage_channels/StageInstanceActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _startStageInstance() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = constants.STAGE_INSTANCES;
      const obj2 = { channel_id: null, topic: null, privacy_level: null, guild_scheduled_event_id: null, send_start_notification: null };
      obj2[0] = callback;
      obj2[1] = dependencyMap;
      obj2[2] = asyncGeneratorStep;
      obj2[3] = closure_4;
      obj2[4] = constants;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return body.body;
    })();
  });
  const _startStageInstance = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = c3.STAGE_INSTANCE(callback);
      const obj2 = { topic: null, privacy_level: null };
      obj2[0] = dependencyMap;
      obj2[1] = asyncGeneratorStep;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.patch(obj1);
      return body.body;
    })();
  });
  const _updateStageInstance = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/stage_channels/StageInstanceActionCreators.tsx");

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
  const HTTP = require(530) /* sendRequest */.HTTP;
  const obj = { url: Endpoints.STAGE_INSTANCE(id), rejectWithError: null };
  obj[1] = require(530) /* sendRequest */.rejectWithMigratedError();
  return HTTP.del(obj);
};