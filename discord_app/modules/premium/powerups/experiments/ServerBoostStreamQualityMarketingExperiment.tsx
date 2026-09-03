// === Module 13482: CONTROL_RESOLUTION ===

// Module 13482 (CONTROL_RESOLUTION)
import getUnitIdDefault from "getUnitId" /* 1468 */;

const obj = { 1: null };
obj[1] = { streamQualityMarketingResolution: "1440p" };
const tmp2 = getUnitIdDefault({ name: "2026-04-server-boost-copy-1440p", kind: "user", defaultConfig: { streamQualityMarketingResolution: "1080p" }, variations: obj });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx");

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(GuildBoostingMarketingTierCards) {
  return config.getConfig({ location: GuildBoostingMarketingTierCards }).streamQualityMarketingResolution;
};