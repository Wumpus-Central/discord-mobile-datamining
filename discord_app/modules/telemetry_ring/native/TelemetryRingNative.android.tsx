// === Module 13562: TelemetryChannel ===

// Module 13562 (TelemetryChannel)
import obj132 from "obj132" /* 2 */;
import enforcingDefault from "enforcing" /* 13563 */;

const result = obj132.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

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