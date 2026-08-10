// discord_app/modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(outer1_1[2]);
    obj = { source: callback };
    obj.track(outer1_3.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
};