// === Module 13763: useTrackFavoritesGuildAddModalOpened ===

// Module 13763 (useTrackFavoritesGuildAddModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1071).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(source) {
  items = [source];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, { source });
  }, items);
};