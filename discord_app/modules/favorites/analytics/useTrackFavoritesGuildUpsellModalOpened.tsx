// discord_app/modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackFavoritesGuildUpsellModalOpened(source) {
      _require = source;
      const cResult = require("c").c(5);
      const obj = require("c");
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL,
      ).analyticsLocations;
      if (cResult[0] !== source) {
        const fn = function n() {
          AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source });
        };
        const items = [source];
        cResult[0] = source;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(tmp3, tmp4);
      if (cResult[3] !== analyticsLocations) {
        const obj2 = { analyticsLocations };
        cResult[3] = analyticsLocations;
        cResult[4] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[4];
      }
      return tmp6;
    }
  : function useTrackFavoritesGuildUpsellModalOpened(source) {
      const items = [source];
      const effect = noop.useEffect(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source });
      }, items);
      return {
        analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL)
          .analyticsLocations,
      };
    };
