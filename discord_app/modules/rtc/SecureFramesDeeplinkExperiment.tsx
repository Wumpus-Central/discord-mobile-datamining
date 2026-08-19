// discord_app/modules/rtc/SecureFramesDeeplinkExperiment.tsx
import createExperimentDefault from "../experiments/createExperiment.tsx";

const items = [{ id: 1, label: "Enabled.", config: { enabled: true } }];
let closure_0 = createExperimentDefault({ kind: "user", id: "2024-09_secure_frames_deeplink", label: "Secure Frames Deeplinks", defaultConfig: { enabled: false }, treatments: items });
const result = require("obj132").fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = function useSecureFramesDeeplinkExperiment(location) {
  return closure_0.useExperiment({ location: location.location }, { autoTrackExposure: true });
};
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  return closure_0.getCurrentConfig({ location: location.location }, { autoTrackExposure: true });
};