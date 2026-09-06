// discord_app/modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-03-soundmoji-rendering", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export const getSoundmojiRenderingExperiment = function getSoundmojiRenderingExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiRenderingExperiment = function useSoundmojiRenderingExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
