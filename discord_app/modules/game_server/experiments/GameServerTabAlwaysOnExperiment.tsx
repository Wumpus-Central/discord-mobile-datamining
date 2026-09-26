// === Module 15892: GameServerTabAlwaysOnExperiment ===

// Module 15892 (GameServerTabAlwaysOnExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  return closure_0.useConfig({ location: useGuildActionRows }).enabled;
};