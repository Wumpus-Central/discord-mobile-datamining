// === Module 16494: GameServerTabAlwaysOnExperiment ===

// Module 16494 (GameServerTabAlwaysOnExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGameServerTabAlwaysOnEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsGameServerTabAlwaysOnEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});