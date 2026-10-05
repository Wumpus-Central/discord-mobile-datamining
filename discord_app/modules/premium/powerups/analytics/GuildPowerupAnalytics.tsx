// === Module 12202: GuildPowerupAnalytics ===

// Module 12202 (GuildPowerupAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, skuId, type) => {
  _require = guild_id;
  dependencyMap = type;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === guild_id) {
    if (cResult[1] === skuId.skuId) {
      let tmp2;
      let tmp3;
      if (cResult[2] === type) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  }
  const fn = function l() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type, sku_id: skuId.skuId, guild_id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  };
  const items = [type, guild_id, skuId.skuId];
  cResult[0] = guild_id;
  cResult[1] = skuId.skuId;
  cResult[2] = type;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((guild_id, skuId, type) => {
  const items = [type, guild_id, skuId.skuId];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type, sku_id: skuId.skuId, guild_id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = tmp2;