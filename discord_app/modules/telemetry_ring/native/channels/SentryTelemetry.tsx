// discord_app/modules/telemetry_ring/native/channels/SentryTelemetry.tsx
import TelemetryRingNative2 from "../TelemetryRingNative.android.tsx";
import BaseTelemetryChannel from "BaseTelemetryChannel.tsx";

const TelemetryRingNative = TelemetryRingNative2;

require = fn;
let closure_3 = { type: "BYTES", limit: 1048576 };
class SentryTelemetryImpl extends tmp3 {
  constructor() {
    tmp2 = closure_1(closure_2[1]);
    items = [];
    items[0] = closure_0(closure_2[1]).TelemetryChannel.SENTRY;
    tmp = new tmp(tmp2, items, closure_1, new.target);
    return tmp;
  }
}
const prototype = SentryTelemetryImpl.prototype;
prototype["snapshotForBreadcrumbs"] = function snapshotForBreadcrumbs() {
  return this.snapshot(-1, closure_3);
};
let items = [fn(1903).TelemetryChannel.SENTRY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/SentryTelemetry.tsx");

export default new "snapshotForBreadcrumbs"(
  TelemetryRingNative,
  items,
  tmp,
  prototype,
  SentryTelemetryImpl,
  "snapshotForBreadcrumbs",
  TelemetryRingNative,
);
