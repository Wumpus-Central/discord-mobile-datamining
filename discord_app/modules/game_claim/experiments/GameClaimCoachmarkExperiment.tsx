// === Module 16684: GameClaimCoachmarkExperiment ===

// Module 16684 (GameClaimCoachmarkExperiment)
import c from "c" /* 576 */;
import createExperiment from "module_5014" /* 5014 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { kind: "guild", id: "2026-02_game_claim_coachmark", label: "Game Claim Coachmark", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameClaimCoachmarkEnabled(guildId, location) {
  const cResult = c.c(4);
  if (cResult[0] === guildId) {
    if (cResult[1] === location) {
      let tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: false };
      cResult[3] = obj2;
      let tmp4 = obj2;
    } else {
      tmp4 = cResult[3];
    }
    return experiment.useExperiment(tmp2, tmp4).enabled;
  }
  const obj3 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj3;
  tmp2 = obj3;
}) : (function useGameClaimCoachmarkEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
});