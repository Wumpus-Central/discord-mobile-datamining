// discord_app/modules/device/hasPerformanceForKrispFullband.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getMediaPerformanceClassDefault from "getMediaPerformanceClass.android.tsx";

const result = obj132.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};