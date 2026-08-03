const obj = { 1: null };
obj[1] = { streamQualityMarketingResolution: "1440p" };
const tmp2 = require("getUnitId")({ name: "2026-04-server-boost-copy-1440p", kind: "user", defaultConfig: { streamQualityMarketingResolution: "1080p" }, variations: obj });
let c0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx");

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(GuildBoostingMarketingTierCards) {
  return tmp2.getConfig({ location: GuildBoostingMarketingTierCards }).streamQualityMarketingResolution;
};