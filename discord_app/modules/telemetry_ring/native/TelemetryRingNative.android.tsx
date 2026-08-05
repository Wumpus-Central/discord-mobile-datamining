// discord_app/modules/telemetry_ring/native/TelemetryRingNative.android.tsx
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    require("../../../../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx").append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return require("../../../../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx").snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    require("../../../../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx").clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };