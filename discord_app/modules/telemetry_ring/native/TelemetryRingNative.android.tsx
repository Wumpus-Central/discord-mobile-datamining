// === Module 1903: TelemetryRingNative ===

// Module 1903 (TelemetryRingNative)
import NativeTelemetryRingModuleDefault from "NativeTelemetryRingModule" /* 1904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    NativeTelemetryRingModuleDefault.append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return NativeTelemetryRingModuleDefault.snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    NativeTelemetryRingModuleDefault.clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };