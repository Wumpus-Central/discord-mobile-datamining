// === Module 1990: ZoomedInTelemetry ===

// Module 1990 (ZoomedInTelemetry)
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1991 */;
import TelemetryRingNative2 from "TelemetryRingNative" /* 1994 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BaseTelemetryExportChannel from "BaseTelemetryExportChannel" /* 1992 */;
import size from "module_2" /* 2 */;

const TelemetryRingNative = TelemetryRingNative2;
let c2, c3;

let closure_4 = { type: "ROWS", limit: 250 };
let closure_5 = { type: "ROWS", limit: 10000 };
class ZoomedInTelemetryImpl extends BaseTelemetryExportChannel {
  constructor() {
    const items = [];
    const tmp2 = TelemetryRingNative;
    items[0] = TelemetryRingNative2.TelemetryChannel.ZOOMED;
    const tmp3 = new tmp(tmp2, items, importDefault, new.target);
    return tmp3;
  }
  shouldRun() {
    const obj = ZoomedInAnalyticsExperiment;
    return obj.isZoomedExperimentEnabled();
  }
  getBudget(mode) {
    return "backlog" === mode ? closure_5 : closure_4;
  }
  getAckedEndOffsetStorageKey() {
    return "telemetry_ring_zoomed_acked_end_offset_v1";
  }
  getExportBatchSize() {
    return 250;
  }
  exportEntries(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
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
              let obj5 = { value, done: true };
              return obj5;
            } else {
              let c5 = 1;
              let items = [];
              closure_1 = closure_0;
              closure_0 = closure_0[Symbol.iterator]();
              while (closure_0 !== undefined) {
                c5 = 2;
                let obj2 = closure_0(c2[4]);
                let zoomedInAnalyticsEvent = obj2.buildZoomedInAnalyticsEvent(tmp9);
                if (null != zoomedInAnalyticsEvent) {
                  let obj6 = { key: null, props: null };
                  ({ key: obj3.key, props: obj3.props } = zoomedInAnalyticsEvent);
                  let arr = items.push(obj6);
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
                let obj10 = {
                  value: Promise.all(items.map((item, index) => {
                              let key;
                              let props;
                              let flush = closure_2_1;
                              const track = closure_1(c2[5]).track;
                              ({ key, props } = item);
                              closure_1(c2[5]);
                              if (closure_2_1) {
                                flush = index === items.length - 1;
                              }
                              return track(key, props, { flush });
                            })),
                  done: false
                };
                return obj10;
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
            let obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
            c2 = 3;
            return { value: true, done: true };
          }
        }
      }
    })();
  }
}
const prototype = ZoomedInTelemetryImpl.prototype;
let items = [TelemetryRingNative2.TelemetryChannel.ZOOMED];
const tmp5 = new "exportEntries"(TelemetryRingNative, items, tmp, prototype, ZoomedInTelemetryImpl, "exportEntries", TelemetryRingNative);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx");

export default tmp5;