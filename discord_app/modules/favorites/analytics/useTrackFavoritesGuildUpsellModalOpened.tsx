// discord_app/modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (source) => {
      let tmp3;
      let tmp4;
      let tmp6;
      _require = source;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp2 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp2(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
      if (cResult[0] !== source) {
        const fn = function n() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { source };
          obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj2);
        };
        const items = [source];
        cResult[0] = source;
        cResult[1] = fn;
        cResult[2] = items;
        tmp4 = items;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = react.useEffect(tmp3, tmp4);
      if (cResult[3] !== analyticsLocations) {
        let obj2 = { analyticsLocations };
        cResult[3] = analyticsLocations;
        cResult[4] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[4];
      }
      return tmp6;
    }
  : (source) => {
      const items = [source];
      const tmp = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
      const effect = react.useEffect(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { source };
        obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj2);
      }, items);
      return { analyticsLocations };
    };
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default tmp2;
