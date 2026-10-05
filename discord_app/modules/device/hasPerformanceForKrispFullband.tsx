// discord_app/modules/device/hasPerformanceForKrispFullband.tsx
import getMediaPerformanceClassDefault from "getMediaPerformanceClass.android.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  return null === tmp || tmp >= 31;
}
