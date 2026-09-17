// === Module 13700: ServerBoostStreamQualityMarketingExperiment ===

// Module 13700 (ServerBoostStreamQualityMarketingExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { name: "2026-04-server-boost-copy-1440p", kind: "user", defaultConfig: { streamQualityMarketingResolution: "1080p" }, variations: null };
const obj2 = { 1: null };
obj2[1] = { streamQualityMarketingResolution: "1440p" };
obj.variations = obj2;
const tmp2 = apex_ApexExperimentDefault(obj);
const config = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx");

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(GuildBoostingMarketingTierCards) {
  return config.getConfig({ location: GuildBoostingMarketingTierCards }).streamQualityMarketingResolution;
};