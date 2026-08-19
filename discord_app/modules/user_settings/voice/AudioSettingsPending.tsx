// discord_app/modules/user_settings/voice/AudioSettingsPending.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";

let closure_1 = {};
const result = require("obj132").fileFinishedImporting("modules/user_settings/voice/AudioSettingsPending.tsx");

export const getPendingAudioSettings = function getPendingAudioSettings(closure_0, closure_0) {
  return dependencyMap["" + closure_0 + ":" + closure_0];
};
export const updatePendingSettings = function updatePendingSettings(context, userId, arg2) {
  const combined = "" + context + ":" + userId;
  const merged = Object.assign(dependencyMap[combined]);
  const merged1 = Object.assign(arg2);
  dependencyMap[combined] = {};
};
export const drainPendingAudioSettings = function drainPendingAudioSettings(fn) {
  for (const key10006 in closure_1) {
    let tmp3 = callback(key10006.split(":"), 2);
    let items = [, ];
    [arr[0], arr[1]] = tmp3;
    let tmp4 = callback(items, 2);
    let tmp6 = arg0(tmp4[0], tmp4[1], dependencyMap[key10006]);
    continue;
  }
  const dependencyMap = {};
};