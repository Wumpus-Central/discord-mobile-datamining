// === Module 10358: useTrackFavoritesGuildUpsellModalOpened ===

// Module 10358 (useTrackFavoritesGuildUpsellModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7265 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(source) {
  importDefault = source;
  const items = [source];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source });
  }, items);
  return { analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};