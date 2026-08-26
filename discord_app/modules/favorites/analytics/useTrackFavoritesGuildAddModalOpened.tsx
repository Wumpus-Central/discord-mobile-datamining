// === Module 12411: useTrackFavoritesGuildAddModalOpened ===

// Module 12411 (useTrackFavoritesGuildAddModalOpened)
import closure_2 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(closure_1_1[2]);
    obj = { source: callback };
    obj.track(closure_1_3.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
};