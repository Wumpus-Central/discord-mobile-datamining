// === Module 5359: CollectiblesShopPerfCheckpoint ===

// Module 5359 (CollectiblesShopPerfCheckpoint)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/collectibles/utils/CollectiblesPerfLogging.tsx");

export const CollectiblesShopPerfCheckpoint = { SHOP_MOUNTED: "shop_mounted", CATEGORIES_FETCH_STARTED: "categories_fetch_started", CATEGORIES_FETCH_COMPLETED: "categories_fetch_completed", SHOP_HOME_FETCH_STARTED: "shop_home_fetch_started", SHOP_HOME_FETCH_COMPLETED: "shop_home_fetch_completed", SHOP_RENDERED: "shop_rendered" };
export const trackShopPerf = function trackShopPerf(arg0) {
  ({ sessionId, checkpoint, tab, unpublishedCategoriesShown, cacheDisabled } = arg0);
  expandEventPropertiesDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_PERF_TRACKED, { page_session_id: sessionId, checkpoint, tab, unpublished_categories_shown: unpublishedCategoriesShown, cache_disabled: cacheDisabled });
};