// discord_app/modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx
import react from "../../../../../_runtime/00576_react.js";
import ApexExperiment from "../../../experiments/apex/index.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-03-soundmoji-sending",
  kind: "user",
  defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false },
  variations: obj2,
};
obj2 = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj2[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
    }
  : (location) => {
      const obj = { location: location.location };
      return closure_2.useConfig(obj).enabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
    }
  : (location) => {
      const obj = { location: location.location };
      return closure_2.useConfig(obj).showSoundmojiInEmojiPicker;
    };
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj).enabled;
};
export const useSoundmojiSendExperiment = tmp2;
export const useSoundmojiEmojiPickerSectionExperiment = tmp3;
