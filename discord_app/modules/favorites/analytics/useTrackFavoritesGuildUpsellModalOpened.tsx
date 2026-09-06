// === Module 10229: useTrackFavoritesGuildUpsellModalOpened ===

// Module 10229 (useTrackFavoritesGuildUpsellModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(source) {
  importDefault = source;
  const items = [source];
  const effect = noop.useEffect(() => {
    const obj = { source };
    obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};