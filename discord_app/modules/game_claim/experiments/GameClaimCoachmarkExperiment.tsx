// discord_app/modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx
import createExperiment from "../../experiments/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2026-02_game_claim_coachmark",
  label: "Game Claim Coachmark",
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(
  guildId,
  useCanShowGameClaimCoachmark,
) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false })
    .enabled;
};
