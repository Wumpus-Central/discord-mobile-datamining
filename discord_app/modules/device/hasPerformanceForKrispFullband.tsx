// discord_app/modules/device/hasPerformanceForKrispFullband.tsx
import set from "../../../_runtime/00002_set.js";
import getMediaPerformanceClassDefault from "getMediaPerformanceClass.android.tsx";

const result = set.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};