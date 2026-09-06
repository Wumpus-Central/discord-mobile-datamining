// === Module 10980: useTrackFavoritesGuildAddModalOpened ===

// Module 10980 (useTrackFavoritesGuildAddModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(source) {
  const items = [source];
  const effect = noop.useEffect(() => {
    const obj = { source };
    obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
};