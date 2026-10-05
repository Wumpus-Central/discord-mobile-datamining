// discord_app/modules/telemetry_ring/native/channels/NormalTelemetry.tsx
import TelemetryRingNative2 from "../TelemetryRingNative.android.tsx";
import BaseTelemetryChannel from "BaseTelemetryChannel.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
const importDefaultResult2 = new BaseTelemetryChannel(
  TelemetryRingNative,
  items,
  tmp,
  Object,
  NormalTelemetryImpl,
  BaseTelemetryChannel,
  TelemetryRingNative,
);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/NormalTelemetry.tsx");

export default importDefaultResult2;
