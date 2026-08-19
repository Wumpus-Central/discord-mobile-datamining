// discord_app/modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../Constants.tsx";

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