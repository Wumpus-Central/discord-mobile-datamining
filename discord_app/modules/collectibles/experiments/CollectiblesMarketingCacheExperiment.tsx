// discord_app/modules/collectibles/experiments/CollectiblesMarketingCacheExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-10-collectibles-marketing-client-cache",
  kind: "user",
  defaultConfig: { ttlMs: null },
  variations: {
    0: { ttlMs: null },
    1: { ttlMs: 3600000 },
    2: { ttlMs: 10800000 },
    3: { ttlMs: 21600000 },
    4: { ttlMs: 86400000 },
  },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesMarketingCacheExperiment.tsx");

export const getCollectiblesMarketingCacheTTL = function getCollectiblesMarketingCacheTTL(
  CollectiblesMarketingManager,
) {
  return config.getConfig({ location: CollectiblesMarketingManager }).ttlMs;
};
