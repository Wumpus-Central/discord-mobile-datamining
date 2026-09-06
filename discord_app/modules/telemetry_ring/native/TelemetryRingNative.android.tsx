// === Module 1903: TelemetryChannel ===

// Module 1903 (TelemetryChannel)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 1904 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    enforcingDefault.append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return enforcingDefault.snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    enforcingDefault.clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };