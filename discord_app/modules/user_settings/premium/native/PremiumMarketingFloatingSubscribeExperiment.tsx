// discord_app/modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-07-nitro-floating-subscribe",
  kind: "user",
  defaultConfig: { enabled: false, showAfterLastCard: false },
  variations: {
    0: { enabled: false, showAfterLastCard: false },
    1: { enabled: true, showAfterLastCard: false },
    2: { enabled: true, showAfterLastCard: true },
  },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx",
);

export default apexExperiment;
