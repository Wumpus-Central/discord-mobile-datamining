// === Module 13777: snapshotForBreadcrumbs ===

// Module 13777 (snapshotForBreadcrumbs)
import appendDefault from "append" /* 13773 */;
import TelemetryChannel from "TelemetryChannel" /* 13774 */;
import importDefaultResult1 from "TelemetryChannel" /* 13774 */;

require = arg1;
let closure_3 = { type: "BYTES", limit: 1048576 };
appendDefault;
class SentryTelemetryImpl extends tmp3 {
  constructor() {
    tmp2 = require("TelemetryChannel");
    items = [];
    items[0] = require("TelemetryChannel").TelemetryChannel.SENTRY;
    tmp = new tmp(tmp2, items, closure_1, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = SentryTelemetryImpl.prototype;
prototype["snapshotForBreadcrumbs"] = function snapshotForBreadcrumbs() {
  return this.snapshot(-1, closure_3);
};
let items = [require("TelemetryChannel").TelemetryChannel.SENTRY];
// ThrowIfThisInitialized (0x7c)
const tmp5 = new "snapshotForBreadcrumbs"(importDefaultResult1, items, tmp, prototype, SentryTelemetryImpl, "snapshotForBreadcrumbs", importDefaultResult1);
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/channels/SentryTelemetry.tsx");

export default tmp5;