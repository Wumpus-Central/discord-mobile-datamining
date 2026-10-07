// discord_app/lib/RTCBandwidthMonitor.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import size from "../../_runtime/metro/00002__.js";

let closure_2 = [];
let RTCBandwidthMonitor;
class RTCBandwidthMonitor {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.bytes = {};
    obj.record = function record(rtp) {
      if (null != rtp) {
        for (const key10007 in arg0.rtp.inbound) {
          let tmp28 = arg0.rtp.inbound[key10007];
          for (const item10009 of tmp28) {
            let _HermesInternal = HermesInternal;
            let combined = "inbound-" + key10007 + "-" + item10009.type;
            let tmp4 = combined;
            if (!(combined in obj.bytes)) {
              obj.bytes[tmp4] = 0;
            }
            obj.bytes[tmp4] = item10009.bytesReceived;
            continue;
          }
        }
        const outbound = rtp.rtp.outbound;
        const iter = outbound[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _HermesInternal2 = HermesInternal;
          let tmp16 = nextResult;
          let combined1 = "outbound-" + nextResult.type;
          let tmp18 = combined1;
          if (!(combined1 in obj.bytes)) {
            obj.bytes[tmp18] = 0;
          }
          obj.bytes[tmp18] = tmp16.bytesSent;
          continue;
        }
      }
    };
    return obj;
  }
}
RTCBandwidthMonitor["create"] = function create() {
  if (typeof RTCBandwidthMonitor === "function") {
    const obj = Object.create(RTCBandwidthMonitor.prototype);
    obj.bytes = {};
    obj.record = function record(rtp) {
      if (null != rtp) {
        for (const key10007 in arg0.rtp.inbound) {
          let tmp28 = arg0.rtp.inbound[key10007];
          for (const item10009 of tmp28) {
            let _HermesInternal = HermesInternal;
            let combined = "inbound-" + key10007 + "-" + item10009.type;
            let tmp4 = combined;
            if (!(combined in obj.bytes)) {
              obj.bytes[tmp4] = 0;
            }
            obj.bytes[tmp4] = item10009.bytesReceived;
            continue;
          }
        }
        const outbound = rtp.rtp.outbound;
        const iter = outbound[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _HermesInternal2 = HermesInternal;
          let tmp16 = nextResult;
          let combined1 = "outbound-" + nextResult.type;
          let tmp18 = combined1;
          if (!(combined1 in obj.bytes)) {
            obj.bytes[tmp18] = 0;
          }
          obj.bytes[tmp18] = tmp16.bytesSent;
          continue;
        }
      }
    };
    closure_2.push(obj);
    return obj.record;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
RTCBandwidthMonitor.prototype["getTotalBytes"] = function getTotalBytes() {
  return _modDef12.sum(Object.values(this.bytes));
};
const result = size.fileFinishedImporting("lib/RTCBandwidthMonitor.tsx");

export default RTCBandwidthMonitor;
export const getRTCTotalBytes = function getRTCTotalBytes() {
  return _modDef12.sum(closure_2.map((getTotalBytes) => getTotalBytes.getTotalBytes()));
};
