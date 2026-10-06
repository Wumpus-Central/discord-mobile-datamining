// === Module 13913: NormalTelemetry ===

// Module 13913 (NormalTelemetry)
import TelemetryRingNative2 from "TelemetryRingNative" /* 1994 */;
import BaseTelemetryChannel from "BaseTelemetryChannel" /* 1993 */;
import size from "module_2" /* 2 */;

const TelemetryRingNative = TelemetryRingNative2;

class NormalTelemetryImpl extends BaseTelemetryChannel {
  constructor() {
    const items = [];
    const tmp2 = TelemetryRingNative;
    items[0] = TelemetryRingNative2.TelemetryChannel.NORMAL;
    const tmp3 = new tmp(tmp2, items, importDefault, new.target);
    return tmp3;
  }
}
let items = [TelemetryRingNative2.TelemetryChannel.NORMAL];
const importDefaultResult2 = new BaseTelemetryChannel(TelemetryRingNative, items, tmp, Object, NormalTelemetryImpl, BaseTelemetryChannel, TelemetryRingNative);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/NormalTelemetry.tsx");

export default importDefaultResult2;