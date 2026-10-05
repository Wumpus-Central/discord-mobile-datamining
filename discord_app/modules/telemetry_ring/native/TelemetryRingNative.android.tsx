// discord_app/modules/telemetry_ring/native/TelemetryRingNative.android.tsx
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  append(arg0, arg1, arg2, arg3, arg4) {
    const obj = react_nativeDefault;
    obj.append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    const obj = react_nativeDefault;
    return obj.snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    const obj = react_nativeDefault;
    obj.clear();
  },
};
const result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default obj;
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
