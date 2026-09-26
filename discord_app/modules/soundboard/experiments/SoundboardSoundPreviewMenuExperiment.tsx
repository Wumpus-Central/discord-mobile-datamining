// === Module 16893: SoundboardSoundPreviewMenuExperiment ===

// Module 16893 (SoundboardSoundPreviewMenuExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-08-mobile-soundboard-sound-preview-menu", defaultConfig: { enabled: false, returnOnUpsellDismiss: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true, returnOnUpsellDismiss: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export const useSoundboardSoundPreviewMenuEnabled = function useSoundboardSoundPreviewMenuEnabled(SoundboardSoundPreviewActionSheet) {
  return apexExperiment.useConfig({ location: SoundboardSoundPreviewActionSheet }).enabled;
};