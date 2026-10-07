// discord_app/modules/telemetry_ring/native/TelemetryRingNative.android.tsx
import NativeTelemetryRingModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  },
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
