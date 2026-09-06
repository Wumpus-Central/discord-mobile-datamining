// === Module 7474: RTCBandwidthMonitor ===

// Module 7474 (RTCBandwidthMonitor)
import _modDef12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

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
            let tmp2 = item10009;
            let combined = "inbound-" + key10007 + "-" + item10009.type;
            let tmp4 = combined;
            let tmp6 = obj;
            if (!(combined in obj.bytes)) {
              tmp6.bytes[tmp4] = 0;
            }
            tmp6.bytes[tmp4] = tmp2.bytesReceived;
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
          let tmp20 = obj;
          if (!(combined1 in obj.bytes)) {
            tmp20.bytes[tmp18] = 0;
          }
          tmp20.bytes[tmp18] = tmp16.bytesSent;
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
            let tmp2 = item10009;
            let combined = "inbound-" + key10007 + "-" + item10009.type;
            let tmp4 = combined;
            let tmp6 = obj;
            if (!(combined in obj.bytes)) {
              tmp6.bytes[tmp4] = 0;
            }
            tmp6.bytes[tmp4] = tmp2.bytesReceived;
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
          let tmp20 = obj;
          if (!(combined1 in obj.bytes)) {
            tmp20.bytes[tmp18] = 0;
          }
          tmp20.bytes[tmp18] = tmp16.bytesSent;
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