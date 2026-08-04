// discord_app/modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx
import expandEventProperties from "expandEventProperties";
import "getIntervalMs";
import importDefaultResult1 from "TelemetryChannel";

const require = arg1;
let closure_4 = { type: "ROWS", limit: 250 };
let closure_5 = { type: "ROWS", limit: 10000 };
class ZoomedInTelemetryImpl extends tmp3 {
  constructor() {
    tmp2 = require("TelemetryChannel");
    items = [];
    items[0] = require("TelemetryChannel").TelemetryChannel.ZOOMED;
    tmp = new tmp(tmp2, items, closure_1, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = ZoomedInTelemetryImpl.prototype;
prototype["shouldRun"] = function shouldRun() {
  return require(13267) /* apexExperiment */.isZoomedExperimentEnabled();
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
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let num = 2;
        table = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            let num9 = 3;
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num8 = 3;
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c5 = 1;
            let items = [];
            let closure_0 = items;
            let tmp20 = outer1_0;
            let closure_1 = outer1_0;
            let tmp21 = outer1_0;
            closure_1 = outer1_0;
            closure_0 = outer1_0[Symbol.iterator]();
            let tmp7 = closure_1;
            let tmp8 = closure_0;
            while (closure_0 !== undefined) {
              c5 = 2;
              let tmp10 = outer1_0;
              let tmp11 = table;
              let obj1 = outer1_0(table[4]);
              let zoomedInAnalyticsEvent = obj1.buildZoomedInAnalyticsEvent(tmp9);
              if (null != zoomedInAnalyticsEvent) {
                obj1 = { key: null, props: null };
                ({ key: obj3[0], props: obj3[1] } = zoomedInAnalyticsEvent);
                let arr = items.push(obj1);
              }
              c5 = 1;
              continue;
            }
            if (0 === items.length) {
              c5 = 0;
              let num7 = 3;
              table = 3;
              return { value: true, done: true };
            } else {
              let _Promise = Promise;
              c3 = 3;
              let num6 = 1;
              table = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = Promise.all(items.map((arg0, arg1) => {
                let key;
                let props;
                let flush = closure_1;
                ({ key, props } = arg0);
                if (closure_1) {
                  flush = arg1 === length.length - 1;
                }
                return outer2_1(table[5]).track(key, props, { flush });
              }));
              return obj2;
            }
          }
        } else if (1 === tmp3) {
          c5 = 0;
          let num5 = 3;
          table = 3;
          return { value: false, done: true };
        } else if (2 === tmp3) {
          let tmp4 = closure_4;
          let tmp5 = closure_4;
          c5 = 1;
          let tmp6 = closure_0;
          closure_0.return();
          throw closure_4;
        } else if (arg0 === 1) {
          let num4 = 3;
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          let num3 = 3;
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c5 = 0;
          let num2 = 3;
          table = 3;
          return { value: true, done: true };
        }
      }
    }
  })();
};
let items = [require("TelemetryChannel").TelemetryChannel.ZOOMED];
// ThrowIfThisInitialized (0x7c)
let tmp5 = new "exportEntries"(importDefaultResult1, items, tmp, prototype, ZoomedInTelemetryImpl, "exportEntries", importDefaultResult1);
const result = require("getIntervalMs").fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx");

export default tmp5;