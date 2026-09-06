// === Module 1899: ZoomedInTelemetry ===

// Module 1899 (ZoomedInTelemetry)
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1900 */;
import TelemetryRingNative2 from "TelemetryRingNative" /* 1903 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BaseTelemetryExportChannel from "BaseTelemetryExportChannel" /* 1901 */;

const TelemetryRingNative = TelemetryRingNative2;

require = fn;
let closure_4 = { type: "ROWS", limit: 250 };
let closure_5 = { type: "ROWS", limit: 10000 };
class ZoomedInTelemetryImpl extends tmp3 {
  constructor() {
    tmp2 = closure_1(closure_2[3]);
    items = [];
    items[0] = closure_0(closure_2[3]).TelemetryChannel.ZOOMED;
    tmp = new tmp(tmp2, items, closure_1, new.target);
    return tmp;
  }
}
const prototype = ZoomedInTelemetryImpl.prototype;
prototype["shouldRun"] = function shouldRun() {
  return ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled();
};
prototype["getBudget"] = function getBudget(mode) {
  return "backlog" === mode ? closure_5 : closure_4;
};
prototype["getAckedEndOffsetStorageKey"] = function getAckedEndOffsetStorageKey() {
  return "telemetry_ring_zoomed_acked_end_offset_v1";
};
prototype["getExportBatchSize"] = function getExportBatchSize() {
  return 250;
};
prototype["exportEntries"] = function exportEntries(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c2 = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 1;
            let items = [];
            closure_1 = closure_0;
            closure_0 = closure_0[Symbol.iterator]();
            while (closure_0 !== undefined) {
              c5 = 2;
              let obj1 = closure_0(c2[4]);
              let zoomedInAnalyticsEvent = obj1.buildZoomedInAnalyticsEvent(tmp9);
              if (null != zoomedInAnalyticsEvent) {
                obj1 = { key: null, props: null };
                ({ key: obj3.key, props: obj3.props } = zoomedInAnalyticsEvent);
                let arr = items.push(obj1);
              }
              c5 = 1;
              continue;
            }
            if (0 === items.length) {
              c5 = 0;
              c2 = 3;
              return { value: true, done: true };
            } else {
              let _Promise = Promise;
              c3 = 3;
              c2 = 1;
              let obj2 = {
                value: Promise.all(items.map((item, index) => {
                            let flush = closure_1;
                            ({ key, props } = item);
                            if (closure_1) {
                              flush = index === items.length - 1;
                            }
                            return closure_1(dependencyMap[5]).track(key, props, { flush });
                          })),
                done: false
              };
              return obj2;
            }
          }
        } else if (1 === tmp3) {
          c5 = 0;
          c2 = 3;
          return { value: false, done: true };
        } else if (2 === tmp3) {
          c5 = 1;
          closure_0.return();
          throw closure_1_4;
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
          c2 = 3;
          return { value: true, done: true };
        }
      }
    }
  })();
};
let items = [fn(1903).TelemetryChannel.ZOOMED];
const size = fn(2);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx");

export default new "exportEntries"(TelemetryRingNative, items, tmp, prototype, ZoomedInTelemetryImpl, "exportEntries", TelemetryRingNative);