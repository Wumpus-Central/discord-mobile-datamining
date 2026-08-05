// discord_app/modules/device/hasPerformanceForKrispFullband.tsx
import { getMediaPerformanceClass } from "getMediaPerformanceClass.android.tsx";
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClass();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};