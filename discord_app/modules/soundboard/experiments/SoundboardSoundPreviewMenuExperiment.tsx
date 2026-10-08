// === Module 17551: SoundboardSoundPreviewMenuExperiment ===

// Module 17551 (SoundboardSoundPreviewMenuExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-08-mobile-soundboard-sound-preview-menu", defaultConfig: { enabled: false, returnOnUpsellDismiss: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true, returnOnUpsellDismiss: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export const useSoundboardSoundPreviewMenuEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundboardSoundPreviewMenuEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useSoundboardSoundPreviewMenuEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
});