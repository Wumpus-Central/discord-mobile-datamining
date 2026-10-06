// === Module 4863: Patterns ===

// Module 4863 (Patterns)
import _modDef4864 from "module_4864" /* 4864 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4865 */;
import _mod4867 from "module_4867" /* 4867 */;
import playHaptic from "playHaptic" /* 4868 */;
import _mod4869 from "module_4869" /* 4869 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 4870 */;
import TouchableHaptic from "TouchableHaptic" /* 4871 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef4864;
export const useHaptics = _mod4867.useHaptics;
export const Patterns = _mod4869.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef4864.trigger;
export const stop = _modDef4864.stop;
export const isSupported = _modDef4864.isSupported;
export const triggerPattern = _modDef4864.triggerPattern;
export const getSystemHapticStatus = _modDef4864.getSystemHapticStatus;
export const setEnabled = _modDef4864.setEnabled;
export const isEnabled = _modDef4864.isEnabled;
export const impact = _modDef4864.impact;
export const playAHAP = _modDef4864.playAHAP;