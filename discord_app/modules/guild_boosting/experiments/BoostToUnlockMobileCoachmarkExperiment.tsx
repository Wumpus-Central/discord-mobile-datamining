// discord_app/modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-03-boost-to-unlock-mobile-coachmark",
  kind: "user",
  defaultConfig: { showCoachmark: false },
  variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } },
};
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx",
);

export default tmp2;
