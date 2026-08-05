// discord_app/modules/telemetry_ring/native/TelemetryRingNative.android.tsx
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx";
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    enforcing.append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return enforcing.snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    enforcing.clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };