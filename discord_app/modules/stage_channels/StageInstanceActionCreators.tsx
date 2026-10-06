// === Module 8115: StageInstanceActionCreators ===

// Module 8115 (StageInstanceActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _startStageInstance() {
  obj = _asyncToGenerator(async (channel_id, topic, privacy_level, send_start_notification, guild_scheduled_event_id) => {
    let c6 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2, arg3, arg4) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.STAGE_INSTANCES, body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
      const post = HTTP.post;
      obj4 = { channel_id, topic, privacy_level, guild_scheduled_event_id, send_start_notification };
      obj8 = HTTPUtils;
      await post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
obj = function _updateStageInstance() {
  obj = _asyncToGenerator(async (arg0, topic, privacy_level) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.STAGE_INSTANCE(closure_0), body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
      const patch = HTTP.patch;
      obj4 = { topic, privacy_level };
      obj8 = HTTPUtils;
      await patch(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/stage_channels/StageInstanceActionCreators.tsx");

export const startStageInstance = function startStageInstance() {
  return obj(...arguments);
};
export const updateStageInstance = function updateStageInstance() {
  return obj(...arguments);
};
export const endStageInstance = function endStageInstance(id) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const del = HTTP.del;
  obj = { url: Endpoints.STAGE_INSTANCE(id), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return del(obj);
};