// discord_app/modules/user_settings/voice/AudioSettingsPending.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

let dependencyMap = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsPending.tsx");

export const getPendingAudioSettings = function getPendingAudioSettings(STREAM, arg1) {
  return dependencyMap["" + STREAM + ":" + arg1];
};
export const updatePendingSettings = function updatePendingSettings(context, userId, arg2) {
  const combined = "" + context + ":" + userId;
  const merged = Object.assign(dependencyMap[combined]);
  const merged1 = Object.assign(arg2);
  dependencyMap[combined] = {};
};
export const drainPendingAudioSettings = function drainPendingAudioSettings(fn) {
  for (const key10006 in closure_1) {
    let tmp3 = _slicedToArray(key10006.split(":"), 2);
    let items = [,];
    [arr[0], arr[1]] = tmp3;
    let tmp4 = _slicedToArray(items, 2);
    let tmp6 = arg0(tmp4[0], tmp4[1], dependencyMap[key10006]);
    continue;
  }
  dependencyMap = {};
};
