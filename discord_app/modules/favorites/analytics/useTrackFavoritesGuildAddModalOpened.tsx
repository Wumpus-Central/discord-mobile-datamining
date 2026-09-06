// discord_app/modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(source) {
  const items = [source];
  const effect = noop.useEffect(() => {
    const obj = { source };
    obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
}
