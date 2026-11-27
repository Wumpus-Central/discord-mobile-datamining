// === Module 10747: useTrackFavoritesGuildUpsellModalOpened ===

// Module 10747 (useTrackFavoritesGuildUpsellModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6379 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1071).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened() {
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
  }, []);
  return { analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};