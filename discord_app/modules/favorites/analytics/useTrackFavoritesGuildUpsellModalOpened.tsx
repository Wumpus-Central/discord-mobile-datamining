// discord_app/modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../Constants.tsx";

const result = require("set").fileFinishedImporting(
  "modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx",
);

export default function useTrackFavoritesGuildUpsellModalOpened(arg0) {
  importDefault = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(closure_1_1[4]);
    obj = { source: callback };
    obj.track(closure_1_3.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: contextDefault(QUICK_SWITCHERDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
}
