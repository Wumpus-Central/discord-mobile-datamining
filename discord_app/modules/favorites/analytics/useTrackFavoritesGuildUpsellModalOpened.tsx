// === Module 11902: useTrackFavoritesGuildUpsellModalOpened ===

// Module 11902 (useTrackFavoritesGuildUpsellModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7928 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7947 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened() {
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
  }, []);
  return { analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};