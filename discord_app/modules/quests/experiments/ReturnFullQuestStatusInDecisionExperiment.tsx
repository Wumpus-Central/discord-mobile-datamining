// discord_app/modules/quests/experiments/ReturnFullQuestStatusInDecisionExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-11-return-full-quest-status-in-decision",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: {
    0: { enabled: false },
    1: { enabled: true },
    2: { enabled: true },
    3: { enabled: true },
    4: { enabled: true },
    5: { enabled: true },
    6: { enabled: true },
    7: { enabled: true },
    8: { enabled: true },
    9: { enabled: true },
  },
});
const result = size.fileFinishedImporting("modules/quests/experiments/ReturnFullQuestStatusInDecisionExperiment.tsx");

export function getReturnFullQuestStatusInDecision(location) {
  return config.getConfig({ location }).enabled;
}
