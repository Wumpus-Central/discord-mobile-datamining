// discord_app/modules/premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2025-09-premium-trial-offer-action-sheet-ks",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx",
);

export const PremiumTrialOfferActionSheetKillSwitchExperiment = apexExperiment;
