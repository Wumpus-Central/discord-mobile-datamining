// === Module 17074: SoundboardSoundPreviewMenuExperiment ===

// Module 17074 (SoundboardSoundPreviewMenuExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-mobile-soundboard-sound-preview-menu", defaultConfig: { enabled: false, returnOnUpsellDismiss: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true, returnOnUpsellDismiss: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export const useSoundboardSoundPreviewMenuEnabled = function useSoundboardSoundPreviewMenuEnabled(SoundboardSoundPreviewActionSheet) {
  return apexExperiment.useConfig({ location: SoundboardSoundPreviewActionSheet }).enabled;
};