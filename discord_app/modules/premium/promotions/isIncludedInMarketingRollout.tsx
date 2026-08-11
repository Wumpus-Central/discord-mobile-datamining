// discord_app/modules/premium/promotions/isIncludedInMarketingRollout.tsx
import { MurmurHashV3 } from "../../../../_runtime/01217_MurmurHashV3.js";
import { set } from "../../../utils/Durations.tsx";
let result = require("set").fileFinishedImporting("modules/premium/promotions/isIncludedInMarketingRollout.tsx");

export default function isIncludedInMarketingRollout(isTimed, arg1, getTime) {
  if (isTimed.isTimed) {
    if (null != isTimed.effectiveStartDate) {
      const effectiveStartDate = isTimed.effectiveStartDate;
      const time = getTime.getTime();
      const diff = time - effectiveStartDate.getTime();
      const _Math = Math;
      const _Math2 = Math;
      const result = 10000 * Math.min(1, Math.max(0, 0.2 * (diff / set.Millis.HOUR)));
      const _HermesInternal = HermesInternal;
      return MurmurHashV3.v3("" + isTimed.promotionId + ":" + arg1) % 10000 < result;
    }
  }
  return true;
};