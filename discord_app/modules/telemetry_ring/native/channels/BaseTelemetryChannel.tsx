// === Module 1993: BaseTelemetryChannel ===

// Module 1993 (BaseTelemetryChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryChannel.tsx");
class BaseTelemetryChannel {
  constructor(TelemetryRingNative, items) {
    const obj = Object.create(new.target.prototype);
    obj.native = TelemetryRingNative;
    obj.channels = items;
    return obj;
  }
  append(arg0, arg1, arg2, arg3) {
    let timestamp = arg3;
    if (arg3 == null) {
      const _Date = Date;
      timestamp = Date.now();
    }
    let tmp3 = arg2;
    const native = this.native;
    const append = native.append;
    if (arg2 == null) {
      tmp3 = null;
    }
    let tmp4 = arg1;
    if (arg1 == null) {
      tmp4 = null;
    }
    append(arg0, timestamp, tmp3, tmp4, this.channels);
  }
  snapshot(arg0, arg1, arg2) {
    const native = this.native;
    return native.snapshot(this.channels, arg0, arg1, arg2);
  }
  clearAll() {
    const native = this.native;
    native.clear();
  }
}
const prototype = BaseTelemetryChannel.prototype;

export default BaseTelemetryChannel;