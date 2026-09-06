// discord_app/modules/stage_channels/StageInstanceActionCreators.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _startStageInstance(
  channel_id,
  topic,
  privacy_level,
  send_start_notification,
  guild_scheduled_event_id,
) {
  c6 = 0;
  c5 = 0;
  return (async (arg0, value, arg2, arg3, arg4) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: constants.STAGE_INSTANCES,
      body: { channel_id, topic, privacy_level, guild_scheduled_event_id, send_start_notification },
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.post(request);
    return value.body;
  })();
};
let closure_5 = async function _updateStageInstance(arg0, topic, privacy_level) {
  closure_0 = arg0;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.STAGE_INSTANCE(closure_0),
      body: { topic, privacy_level },
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.patch(request);
    return value.body;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageInstanceActionCreators.tsx");

export const startStageInstance = function startStageInstance() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateStageInstance = function updateStageInstance() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endStageInstance = function endStageInstance(id) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.STAGE_INSTANCE(id), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.del(obj);
};
