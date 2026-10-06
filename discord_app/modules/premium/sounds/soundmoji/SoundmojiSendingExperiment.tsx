// === Module 9889: SoundmojiSendingExperiment ===

// Module 9889 (SoundmojiSendingExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-soundmoji-sending", kind: "user", defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj2[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : ((location) => {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).showSoundmojiInEmojiPicker;
}) : ((location) => {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).showSoundmojiInEmojiPicker;
});
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj).enabled;
};
export const useSoundmojiSendExperiment = tmp2;
export const useSoundmojiEmojiPickerSectionExperiment = tmp3;