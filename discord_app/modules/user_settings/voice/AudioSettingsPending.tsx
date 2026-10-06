// === Module 13904: AudioSettingsPending ===

// Module 13904 (AudioSettingsPending)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_1 = {};
const result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsPending.tsx");

export const getPendingAudioSettings = function getPendingAudioSettings(STREAM, arg1) {
  return closure_1["" + STREAM + ":" + arg1];
};
export const updatePendingSettings = function updatePendingSettings(context, userId, arg2) {
  const combined = "" + context + ":" + userId;
  const obj = {};
  const merged = Object.assign(closure_1[combined]);
  const merged1 = Object.assign(arg2);
  closure_1[combined] = obj;
};
export const drainPendingAudioSettings = function drainPendingAudioSettings(fn) {
  for (const key10006 in closure_1) {
    let tmp3 = _slicedToArray(key10006.split(":"), 2);
    let items = [, ];
    [arr[0], arr[1]] = tmp3;
    let tmp4 = _slicedToArray(items, 2);
    let tmp6 = fn(tmp4[0], tmp4[1], closure_1[key10006]);
    continue;
  }
  closure_1 = {};
};