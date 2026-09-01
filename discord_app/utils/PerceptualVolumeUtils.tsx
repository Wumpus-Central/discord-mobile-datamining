// discord_app/utils/PerceptualVolumeUtils.tsx
import set from "../../_runtime/00002_set.js";
import perceptualToAmplitude from "../modules/perceptual_volume/PerceptualVolumeUtils.tsx";

const result = set.fileFinishedImporting("utils/PerceptualVolumeUtils.tsx");

export const perceptualToAmplitude = perceptualToAmplitude.perceptualToAmplitude;
export const amplitudeToPerceptual = perceptualToAmplitude.amplitudeToPerceptual;
