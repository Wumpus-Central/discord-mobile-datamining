// discord_app/modules/premium/powerups/utils/getBoostLifecyclePhase.tsx
import set from "../../../../../_runtime/00002_set.js";
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";

let c2 = 259200000;
const result = set.fileFinishedImporting("modules/premium/powerups/utils/getBoostLifecyclePhase.tsx");

export const BOOST_EXPIRING_DISPLAY_WINDOW_DAYS = 3;
export const BOOST_EXPIRING_DISPLAY_WINDOW_MS = 259200000;
export const getBoostLifecycleInfo = function getBoostLifecycleInfo(ended, closure_3) {
  if (!ended.ended) {
    if (null != ended.endsAt) {
      const endsAt = ended.endsAt;
      return { phase: "expired" };
    }
    if (null != ended.endsAt) {
      const endsAt2 = ended.endsAt;
      if (endsAt2.getTime() - closure_3 <= c2) {
        let obj = { phase: "expiring", endsAt: null };
        obj[1] = ended.endsAt;
      }
    }
    obj = { phase: "gave" };
  }
};
export const getBoostLifecycleTimestamp = function getBoostLifecycleTimestamp(id, boostLifecycleInfo) {
  const phase = boostLifecycleInfo.phase;
  if ("gave" === phase) {
    return DISCORD_EPOCHDefault.extractTimestamp(id.id);
  } else if ("expiring" === phase) {
    const endsAt2 = boostLifecycleInfo.endsAt;
    return endsAt2.getTime() - c2;
  } else if ("expired" === phase) {
    const endsAt = id.endsAt;
    let time;
    if (endsAt != null) {
      time = endsAt.getTime();
    }
    if (time == null) {
      time = DISCORD_EPOCHDefault.extractTimestamp(id.id);
      const obj = DISCORD_EPOCHDefault;
    }
    return time;
  }
};