// === Module 10434: SoundmojiSendingExperiment ===

// Module 10434 (SoundmojiSendingExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-soundmoji-sending", kind: "user", defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj2[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiSendExperiment = function useSoundmojiSendExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const useSoundmojiEmojiPickerSectionExperiment = function useSoundmojiEmojiPickerSectionExperiment(location) {
  return closure_0.useConfig({ location: location.location }).showSoundmojiInEmojiPicker;
};