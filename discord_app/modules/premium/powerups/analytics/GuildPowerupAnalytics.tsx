// discord_app/modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id, skuId, type) => {
      _require = guild_id;
      dependencyMap = type;
      const cResult = require("c").c(5);
      if (cResult[0] === guild_id) {
        if (cResult[1] === skuId.skuId) {
          if (cResult[2] === type) {
            let tmp2 = cResult[3];
            let tmp3 = cResult[4];
          }
          const effect = noop.useEffect(tmp2, tmp3);
        }
      }
      const fn = function l() {
        AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, sku_id: skuId.skuId, guild_id });
      };
      const items = [type, guild_id, skuId.skuId];
      cResult[0] = guild_id;
      cResult[1] = skuId.skuId;
      cResult[2] = type;
      cResult[3] = fn;
      cResult[4] = items;
      tmp3 = items;
      tmp2 = fn;
      const obj = require("c");
    }
  : (guild_id, skuId, type) => {
      const items = [type, guild_id, skuId.skuId];
      const effect = noop.useEffect(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, sku_id: skuId.skuId, guild_id });
      }, items);
    };
