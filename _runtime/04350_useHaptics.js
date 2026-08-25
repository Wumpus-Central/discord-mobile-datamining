// _runtime/04350_useHaptics.js
import setEnabledDefault from "04351_setEnabled.js";

for (const key10016 in require("isRingerSilent")) {
  let tmp2 = key10016;
  arg5[key10016] = require("isRingerSilent")[key10016];
  continue;
}

export default setEnabledDefault;
export const useHaptics = require("useHaptics").useHaptics;
export const Patterns = require("Patterns").Patterns;
export const pattern = require("set").pattern;
export const PATTERN_CHARS = require("set").PATTERN_CHARS;
export const playHaptic = require("_playHaptic").playHaptic;
export const TouchableHaptic = require("TouchableHaptic").TouchableHaptic;
export const trigger = setEnabledDefault.trigger;
export const stop = setEnabledDefault.stop;
export const isSupported = setEnabledDefault.isSupported;
export const triggerPattern = setEnabledDefault.triggerPattern;
export const getSystemHapticStatus = setEnabledDefault.getSystemHapticStatus;
export const setEnabled = setEnabledDefault.setEnabled;
export const isEnabled = setEnabledDefault.isEnabled;
export const impact = setEnabledDefault.impact;
export const playAHAP = setEnabledDefault.playAHAP;