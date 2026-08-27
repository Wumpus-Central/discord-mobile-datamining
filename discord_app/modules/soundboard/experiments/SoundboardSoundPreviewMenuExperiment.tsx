// discord_app/modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true, returnOnUpsellDismiss: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-mobile-soundboard-sound-preview-menu", defaultConfig: { enabled: false, returnOnUpsellDismiss: false }, variations: obj });
const result = set.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export const useSoundboardSoundPreviewMenuEnabled = function useSoundboardSoundPreviewMenuEnabled(SoundboardSoundPreviewActionSheet) {
  return apexExperiment.useConfig({ location: SoundboardSoundPreviewActionSheet }).enabled;
};