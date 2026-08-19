// discord_app/modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx
import apexExperiment from "../ZoomedInAnalyticsExperiment.tsx";
import getIntervalMsDefault from "BaseTelemetryExportChannel.tsx";
import TelemetryChannel from "../TelemetryRingNative.android.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import importDefaultResult1 from "../TelemetryRingNative.android.tsx";

require = fn;
let closure_4 = { type: "ROWS", limit: 250 };
let closure_5 = { type: "ROWS", limit: 10000 };
getIntervalMsDefault;
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
  return apexExperiment.isZoomedExperimentEnabled();
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        table = 2;
        let tmp3 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 1;
            let items = [];
            closure_1 = closure_1_0;
            closure_0 = closure_1_0[Symbol.iterator]();
            while (closure_0 !== undefined) {
              c5 = 2;
              obj1 = closure_1_0(table[4]);
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
              table = 3;
              return { value: true, done: true };
            } else {
              let _Promise = Promise;
              c3 = 3;
              table = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = Promise.all(items.map((item, index) => {
                let flush = closure_1;
                ({ key, props } = item);
                if (closure_1) {
                  flush = index === length.length - 1;
                }
                return closure_2_1(table[5]).track(key, props, { flush });
              }));
              return obj2;
            }
          }
        } else if (1 === tmp3) {
          c5 = 0;
          table = 3;
          return { value: false, done: true };
        } else if (2 === tmp3) {
          c5 = 1;
          closure_0.return();
          throw closure_4;
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 0;
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c5 = 0;
          table = 3;
          return { value: true, done: true };
        }
      }
    }
  })();
};
let items = [require("TelemetryChannel").TelemetryChannel.ZOOMED];
// ThrowIfThisInitialized (0x7c)
const tmp5 = new "exportEntries"(importDefaultResult1, items, tmp, prototype, ZoomedInTelemetryImpl, "exportEntries", importDefaultResult1);
const result = require("obj132").fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx");

export default tmp5;