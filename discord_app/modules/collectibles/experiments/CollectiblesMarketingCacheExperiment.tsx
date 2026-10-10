// === Module 14792: CollectiblesMarketingCacheExperiment ===

// Module 14792 (CollectiblesMarketingCacheExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-10-collectibles-marketing-client-cache", kind: "user", defaultConfig: { ttlMs: null }, variations: { 0: { ttlMs: null }, 1: { ttlMs: 3600000 }, 2: { ttlMs: 10800000 }, 3: { ttlMs: 21600000 }, 4: { ttlMs: 86400000 } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesMarketingCacheExperiment.tsx");

export const getCollectiblesMarketingCacheTTL = function getCollectiblesMarketingCacheTTL(CollectiblesMarketingManager) {
  return config.getConfig({ location: CollectiblesMarketingManager }).ttlMs;
};