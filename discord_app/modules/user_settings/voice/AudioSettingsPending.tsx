import _slicedToArray from "_slicedToArray";

let closure_1 = {};
const result = require("set").fileFinishedImporting("modules/user_settings/voice/AudioSettingsPending.tsx");

export const getPendingAudioSettings = function getPendingAudioSettings(_slicedToArray, _slicedToArray) {
  return dependencyMap["" + _slicedToArray + ":" + _slicedToArray];
};
export const updatePendingSettings = function updatePendingSettings(context, userId, arg2) {
  const combined = "" + context + ":" + userId;
  const merged = Object.assign(dependencyMap[combined]);
  const merged1 = Object.assign(arg2);
  dependencyMap[combined] = {};
};
export const drainPendingAudioSettings = function drainPendingAudioSettings(arg0) {
  for (const key10006 in closure_1) {
    let tmp = key10006;
    let tmp2 = callback;
    let tmp3 = callback(key10006.split(":"), 2);
    let items = [, ];
    [arr[0], arr[1]] = tmp3;
    let tmp4 = callback(items, 2);
    let tmp5 = dependencyMap;
    let tmp6 = arg0(tmp4[0], tmp4[1], dependencyMap[key10006]);
    continue;
  }
  const dependencyMap = {};
};