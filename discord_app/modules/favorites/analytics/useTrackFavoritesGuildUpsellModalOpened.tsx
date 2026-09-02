// === Module 10334: useTrackFavoritesGuildUpsellModalOpened ===

// Module 10334 (useTrackFavoritesGuildUpsellModalOpened)
import contextDefault from "context" /* 5961 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import closure_2 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(arg0) {
  importDefault = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(closure_1_1[4]);
    obj = { source: callback };
    obj.track(closure_1_3.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: contextDefault(QUICK_SWITCHERDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};