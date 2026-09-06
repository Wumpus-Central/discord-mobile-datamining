// discord_app/modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx
import apex_ApexExperimentDefault from "../../../experiments/apex/ApexExperiment.tsx";

let obj = {
  name: "2026-04-server-boost-copy-1440p",
  kind: "user",
  defaultConfig: { streamQualityMarketingResolution: "1080p" },
  variations: null,
};
obj = { 1: null };
obj[1] = { streamQualityMarketingResolution: "1440p" };
obj.variations = obj;
const tmp2 = apex_ApexExperimentDefault(obj);
const config = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx",
);

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(
  GuildBoostingMarketingTierCards,
) {
  return config.getConfig({ location: GuildBoostingMarketingTierCards }).streamQualityMarketingResolution;
};
