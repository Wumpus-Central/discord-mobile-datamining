// === Module 9731: useIsVoiceChannelGamesExperimentEnabled ===

// Module 9731 (useIsVoiceChannelGamesExperimentEnabled)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-08-mobile-voice-channel-games", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default function useIsVoiceChannelGamesExperimentEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const VoiceChannelGamesExperiment = tmp2;