// discord_app/modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackFavoritesGuildAddModalOpened(source) {
      _require = source;
      const cResult = require("c").c(3);
      if (cResult[0] !== source) {
        const fn = function u() {
          AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, { source });
        };
        const items = [source];
        cResult[0] = source;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useTrackFavoritesGuildAddModalOpened(source) {
      const items = [source];
      const effect = noop.useEffect(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, { source });
      }, items);
    };
