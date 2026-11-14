// discord_app/modules/application_account_linking/experiments/accountLinkUpsellExperimentConfig.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/application_account_linking/experiments/accountLinkUpsellExperimentConfig.tsx",
);

export const ACCOUNT_LINK_UPSELL_EXPERIMENT_VARIATIONS = {
  0: { enabled: true, orbQuantity: 0 },
  1: { enabled: true, orbQuantity: 100 },
  2: { enabled: true, orbQuantity: 200 },
};
export const ACCOUNT_LINK_UPSELL_EXPERIMENT_DEFAULT_CONFIG = { enabled: false, orbQuantity: 0 };
