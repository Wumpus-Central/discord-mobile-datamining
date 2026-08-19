// === Module 11962: useTrackFavoritesGuildAddModalOpened ===

// Module 11962 (useTrackFavoritesGuildAddModalOpened)
import noop from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    callback(dependencyMap[2]);
    const obj = { source: callback };
    obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
};