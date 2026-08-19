// === Module 11677: useIsNewGamesCoachmarkEnabled ===

// Module 11677 (useIsNewGamesCoachmarkEnabled)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-new-games-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/game_server/experiments/NewGamesCoachmarkExperiment.tsx");

export const useIsNewGamesCoachmarkEnabled = function useIsNewGamesCoachmarkEnabled(useGuildPowerupsChannelListPopout) {
  return closure_0.useConfig({ location: useGuildPowerupsChannelListPopout }).enabled;
};