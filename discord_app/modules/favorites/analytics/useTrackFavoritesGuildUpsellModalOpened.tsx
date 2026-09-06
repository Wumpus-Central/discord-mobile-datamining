// discord_app/modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  return {
    analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL)
      .analyticsLocations,
  };
}
