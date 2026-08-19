// === Module 9984: useTrackFavoritesGuildUpsellModalOpened ===

// Module 9984 (useTrackFavoritesGuildUpsellModalOpened)
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import noop from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(arg0) {
  importDefault = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    callback(dependencyMap[4]);
    const obj = { source: callback };
    obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: contextDefault(QUICK_SWITCHERDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};