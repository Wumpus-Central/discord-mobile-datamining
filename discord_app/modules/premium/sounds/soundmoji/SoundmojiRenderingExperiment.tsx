// === Module 4970: getSoundmojiRenderingExperiment ===

// Module 4970 (getSoundmojiRenderingExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-soundmoji-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export const getSoundmojiRenderingExperiment = function getSoundmojiRenderingExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiRenderingExperiment = function useSoundmojiRenderingExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};