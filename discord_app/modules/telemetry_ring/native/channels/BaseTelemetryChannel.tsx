// === Module 13654: append ===

// Module 13654 (append)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryChannel.tsx");
class BaseTelemetryChannel {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.native = global;
    obj.channels = require;
    return obj;
  }
}
const prototype = BaseTelemetryChannel.prototype;
prototype["append"] = function append(arg0, arg1, arg2, arg3) {
  let timestamp = arg3;
  if (arg3 == null) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = arg2;
  const native = this.native;
  if (arg2 == null) {
    tmp3 = null;
  }
  let tmp4 = arg1;
  if (arg1 == null) {
    tmp4 = null;
  }
  native.append(arg0, timestamp, tmp3, tmp4, this.channels);
};
prototype["snapshot"] = function snapshot(arg0, arg1, arg2) {
  const native = this.native;
  return native.snapshot(this.channels, arg0, arg1, arg2);
};
prototype["clearAll"] = function clearAll() {
  const native = this.native;
  native.clear();
};

export default BaseTelemetryChannel;