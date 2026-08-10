// discord_app/modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";
import { QUICK_SWITCHER } from "../../app_analytics/AnalyticsLocation.tsx";
import { context } from "../../app_analytics/useAnalyticsLocations.tsx";

const result = require("context").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(arg0) {
  const importDefault = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(outer1_1[4]);
    obj = { source: callback };
    obj.track(outer1_3.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: context(QUICK_SWITCHER.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};