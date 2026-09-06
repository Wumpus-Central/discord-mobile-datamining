// discord_app/modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-08-mobile-soundboard-sound-preview-menu",
  defaultConfig: { enabled: false, returnOnUpsellDismiss: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true, returnOnUpsellDismiss: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export const useSoundboardSoundPreviewMenuEnabled = function useSoundboardSoundPreviewMenuEnabled(
  SoundboardSoundPreviewActionSheet,
) {
  return apexExperiment.useConfig({ location: SoundboardSoundPreviewActionSheet }).enabled;
};
