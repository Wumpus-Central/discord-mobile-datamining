// discord_app/modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx
import apex_ApexExperimentDefault from "../../../experiments/apex/ApexExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-04-server-boost-copy-1440p",
  kind: "user",
  defaultConfig: { streamQualityMarketingResolution: "1080p" },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { streamQualityMarketingResolution: "1440p" };
const tmp2 = apex_ApexExperimentDefault(obj);
const config = tmp2;
const result = size.fileFinishedImporting(
  "modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx",
);

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(
  GuildBoostingMarketingTierCards,
) {
  const obj = { location: GuildBoostingMarketingTierCards };
  return config.getConfig(obj).streamQualityMarketingResolution;
};
