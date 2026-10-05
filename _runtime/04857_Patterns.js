// === Module 4857: Patterns ===

// Module 4857 (Patterns)
import _modDef4858 from "module_4858" /* 4858 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4859 */;
import _mod4861 from "module_4861" /* 4861 */;
import playHaptic from "playHaptic" /* 4862 */;
import _mod4863 from "module_4863" /* 4863 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 4864 */;
import TouchableHaptic from "TouchableHaptic" /* 4865 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef4858;
export const useHaptics = _mod4861.useHaptics;
export const Patterns = _mod4863.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef4858.trigger;
export const stop = _modDef4858.stop;
export const isSupported = _modDef4858.isSupported;
export const triggerPattern = _modDef4858.triggerPattern;
export const getSystemHapticStatus = _modDef4858.getSystemHapticStatus;
export const setEnabled = _modDef4858.setEnabled;
export const isEnabled = _modDef4858.isEnabled;
export const impact = _modDef4858.impact;
export const playAHAP = _modDef4858.playAHAP;