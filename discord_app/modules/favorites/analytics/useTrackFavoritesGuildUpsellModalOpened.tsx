// discord_app/modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx
import c from "../../../../_runtime/00576_c.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1087).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrackFavoritesGuildUpsellModalOpened() {
      const cResult = c.c(4);
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL,
      ).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          AnalyticsUtilsDefault.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp3 = fn;
        tmp4 = items;
      } else {
        [tmp3, tmp4] = cResult;
      }
      const effect = noop.useEffect(tmp3, tmp4);
      if (cResult[2] !== analyticsLocations) {
        const obj2 = { analyticsLocations };
        cResult[2] = analyticsLocations;
        cResult[3] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : function useTrackFavoritesGuildUpsellModalOpened() {
      const effect = noop.useEffect(() => {
        AnalyticsUtilsDefault.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
      }, []);
      return {
        analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL)
          .analyticsLocations,
      };
    };
