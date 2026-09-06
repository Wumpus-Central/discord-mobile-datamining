// discord_app/modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";

const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx",
);

export default apex_ApexExperimentDefault({
  name: "2026-03-boost-to-unlock-mobile-coachmark",
  kind: "user",
  defaultConfig: { showCoachmark: false },
  variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } },
});
