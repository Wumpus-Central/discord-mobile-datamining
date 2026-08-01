// === Module 5735: create ===

// Module 5735 (create)
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
          let tmp27 = key10007;
          let tmp28 = arg0.rtp.inbound[key10007];
          let tmp29 = tmp28;
          let tmp = tmp28;
          for (const item10009 of tmp28) {
            let _HermesInternal = HermesInternal;
            let tmp2 = item10009;
            let combined = "inbound-" + key10007 + "-" + item10009.type;
            let tmp4 = combined;
            let tmp5 = obj;
            let tmp6 = obj;
            if (!(combined in obj.bytes)) {
              let tmp7 = tmp5;
              let tmp8 = combined;
              tmp6.bytes[tmp4] = 0;
            }
            let tmp9 = tmp5;
            let tmp10 = combined;
            let tmp11 = item10009;
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
          let tmp19 = obj;
          let tmp20 = obj;
          if (!(combined1 in obj.bytes)) {
            let tmp21 = tmp19;
            let tmp22 = combined1;
            tmp20.bytes[tmp18] = 0;
          }
          let tmp23 = tmp19;
          let tmp24 = combined1;
          let tmp25 = nextResult;
          tmp20.bytes[tmp18] = tmp16.bytesSent;
          continue;
        }
      }
    };
    return obj;
  }
}
RTCBandwidthMonitor["create"] = function create() {
  if (typeof RTCBandwidthMonitor !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(RTCBandwidthMonitor.prototype);
  obj.bytes = {};
  obj.record = function record(rtp) {
    if (null != rtp) {
      for (const key10007 in arg0.rtp.inbound) {
        let tmp27 = key10007;
        let tmp28 = arg0.rtp.inbound[key10007];
        let tmp29 = tmp28;
        let tmp = tmp28;
        for (const item10009 of tmp28) {
          let _HermesInternal = HermesInternal;
          let tmp2 = item10009;
          let combined = "inbound-" + key10007 + "-" + item10009.type;
          let tmp4 = combined;
          let tmp5 = obj;
          let tmp6 = obj;
          if (!(combined in obj.bytes)) {
            let tmp7 = tmp5;
            let tmp8 = combined;
            tmp6.bytes[tmp4] = 0;
          }
          let tmp9 = tmp5;
          let tmp10 = combined;
          let tmp11 = item10009;
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
        let tmp19 = obj;
        let tmp20 = obj;
        if (!(combined1 in obj.bytes)) {
          let tmp21 = tmp19;
          let tmp22 = combined1;
          tmp20.bytes[tmp18] = 0;
        }
        let tmp23 = tmp19;
        let tmp24 = combined1;
        let tmp25 = nextResult;
        tmp20.bytes[tmp18] = tmp16.bytesSent;
        continue;
      }
    }
  };
  return obj.record;
};
RTCBandwidthMonitor.prototype["getTotalBytes"] = function getTotalBytes() {
  return importDefault(12).sum(Object.values(this.bytes));
};
const result = require("set").fileFinishedImporting("lib/RTCBandwidthMonitor.tsx");

export default RTCBandwidthMonitor;
export const getRTCTotalBytes = function getRTCTotalBytes() {
  return importDefault(12).sum(arr.map((getTotalBytes) => getTotalBytes.getTotalBytes()));
};