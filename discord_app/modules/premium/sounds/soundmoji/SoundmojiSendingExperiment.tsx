// discord_app/modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-03-soundmoji-sending",
  kind: "user",
  defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false },
  variations: null,
};
obj = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
obj.variations = obj;
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
