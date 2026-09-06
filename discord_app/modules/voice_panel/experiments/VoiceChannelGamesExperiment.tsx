// === Module 9178: VoiceChannelGamesExperiment ===

// Module 9178 (VoiceChannelGamesExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const tmp2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-08-mobile-voice-channel-games", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default function useIsVoiceChannelGamesExperimentEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const VoiceChannelGamesExperiment = tmp2;