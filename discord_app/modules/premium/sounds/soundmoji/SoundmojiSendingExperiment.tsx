// discord_app/modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-soundmoji-sending", kind: "user", defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiSendExperiment = function useSoundmojiSendExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const useSoundmojiEmojiPickerSectionExperiment = function useSoundmojiEmojiPickerSectionExperiment(location) {
  return closure_0.useConfig({ location: location.location }).showSoundmojiInEmojiPicker;
};