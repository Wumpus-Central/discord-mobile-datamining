// discord_app/modules/premium/powerups/utils/getBoostLifecyclePhase.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2 = 259200000;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getBoostLifecyclePhase.tsx");

export const BOOST_EXPIRING_DISPLAY_WINDOW_DAYS = 3;
export const BOOST_EXPIRING_DISPLAY_WINDOW_MS = 259200000;
export const getBoostLifecycleInfo = function getBoostLifecycleInfo(ended, first1) {
  if (!ended.ended) {
    if (null != ended.endsAt) {
      const endsAt = ended.endsAt;
      return { phase: "expired" };
    }
    if (null != ended.endsAt) {
      const endsAt2 = ended.endsAt;
    }
  }
};
export const getBoostLifecycleTimestamp = function getBoostLifecycleTimestamp(id, boostLifecycleInfo) {
  const phase = boostLifecycleInfo.phase;
  if ("gave" === phase) {
    const obj2 = SnowflakeUtilsDefault;
    return obj2.extractTimestamp(id.id);
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
      const obj = SnowflakeUtilsDefault;
      time = obj.extractTimestamp(id.id);
    }
    return time;
  }
};
