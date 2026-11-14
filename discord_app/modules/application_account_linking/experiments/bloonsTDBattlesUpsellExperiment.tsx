// discord_app/modules/application_account_linking/experiments/bloonsTDBattlesUpsellExperiment.tsx
import accountLinkUpsellExperimentConfig from "accountLinkUpsellExperimentConfig.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { 0: { enabled: true, orbQuantity: 100 }, 1: { enabled: true, orbQuantity: 200 } };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-11-bloons-td-battles-account-linking-upsell",
  kind: "user",
  defaultConfig: accountLinkUpsellExperimentConfig.ACCOUNT_LINK_UPSELL_EXPERIMENT_DEFAULT_CONFIG,
  variations: obj,
});
const result = size.fileFinishedImporting(
  "modules/application_account_linking/experiments/bloonsTDBattlesUpsellExperiment.tsx",
);

export const BLOONS_TD_BATTLES_UPSELL_EXPERIMENT_VARIATIONS = obj;
export const bloonsTDBattlesUpsellExperiment = apexExperiment;
