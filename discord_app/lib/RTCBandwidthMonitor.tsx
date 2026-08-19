// === Module 5065: create ===

// Module 5065 (create)
import obj132 from "obj132" /* 2 */;
import applyDefault from "apply" /* 12 */;

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
  if (typeof RTCBandwidthMonitor !== "function") {
    HermesBuiltin.throwTypeError();
  }
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
  return obj.record;
};
RTCBandwidthMonitor.prototype["getTotalBytes"] = function getTotalBytes() {
  return applyDefault.sum(Object.values(this.bytes));
};
const result = obj132.fileFinishedImporting("lib/RTCBandwidthMonitor.tsx");

export default RTCBandwidthMonitor;
export const getRTCTotalBytes = function getRTCTotalBytes() {
  return applyDefault.sum(arr.map((item, index) => item.getTotalBytes()));
};