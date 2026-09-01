// discord_app/modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../Constants.tsx";

const result = require("set").fileFinishedImporting(
  "modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx",
);

export default function useTrackFavoritesGuildAddModalOpened(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(closure_1_1[2]);
    obj = { source: callback };
    obj.track(closure_1_3.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
}
