// === Module 9369: SoundmojiSendingExperiment ===

// Module 9369 (SoundmojiSendingExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-soundmoji-sending", kind: "user", defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj2[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundmojiSendExperiment(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useSoundmojiSendExperiment(location) {
  return closure_2.useConfig({ location: location.location }).enabled;
});
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  return closure_2.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiSendExperiment = tmp2;
export const useSoundmojiEmojiPickerSectionExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundmojiEmojiPickerSectionExperiment(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).showSoundmojiInEmojiPicker;
}) : (function useSoundmojiEmojiPickerSectionExperiment(location) {
  return closure_2.useConfig({ location: location.location }).showSoundmojiInEmojiPicker;
});