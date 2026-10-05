// === Module 10710: useTrackFavoritesGuildAddModalOpened ===

// Module 10710 (useTrackFavoritesGuildAddModalOpened)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  let tmp2;
  let tmp3;
  _require = source;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== source) {
    const fn = function n() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source };
      obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj2);
    };
    const items = [source];
    cResult[0] = source;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((source) => {
  const items = [source];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source };
    obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj2);
  }, items);
});
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default tmp2;