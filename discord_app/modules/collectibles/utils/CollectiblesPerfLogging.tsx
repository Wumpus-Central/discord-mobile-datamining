// === Module 7590: CollectiblesPerfLogging ===

// Module 7590 (CollectiblesPerfLogging)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPerfLogging.tsx");

export const CollectiblesShopPerfCheckpoint = { SHOP_MOUNTED: "shop_mounted", CATEGORIES_FETCH_STARTED: "categories_fetch_started", CATEGORIES_FETCH_COMPLETED: "categories_fetch_completed", SHOP_HOME_FETCH_STARTED: "shop_home_fetch_started", SHOP_HOME_FETCH_COMPLETED: "shop_home_fetch_completed", SHOP_RENDERED: "shop_rendered" };
export const trackShopPerf = function trackShopPerf(arg0) {
  ({ sessionId, checkpoint, tab, unpublishedCategoriesShown, cacheDisabled } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_PERF_TRACKED, { page_session_id: sessionId, checkpoint, tab, unpublished_categories_shown: unpublishedCategoriesShown, cache_disabled: cacheDisabled });
};