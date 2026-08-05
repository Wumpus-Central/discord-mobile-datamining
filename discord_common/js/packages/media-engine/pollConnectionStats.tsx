// discord_common/js/packages/media-engine/pollConnectionStats.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { BaseConnectionEvent } from "index.tsx";
import { STATS_INTERVAL } from "Stats.tsx";

const require = arg1;
const result = require("STATS_INTERVAL").fileFinishedImporting("../discord_common/js/packages/media-engine/pollConnectionStats.tsx");

export default function pollConnectionStats(on) {
  const _require = on;
  function pollStats(arg0) {
    const self = this;
    const apply = _pollStats.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _pollStats() {
    const self = this;
    const tmp = pollStats(function*() {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              let num7 = 3;
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp;
              let c2 = tmp2;
              let closure_0;
              let items;
              c2 = undefined;
              closure_3 = undefined;
              let tmp40 = outer1_1;
              if (!outer1_1) {
                items = [];
                closure_0 = items;
                let tmp17 = outer1_0;
                let eachConnectionResult = outer1_0.eachConnection((connection) => arr.push({ connection, stats: connection.emitStats() }));
                items = [];
                let tmp19 = items;
                closure_0 = items[Symbol.iterator]();
              }
              let num5 = 3;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp5) {
            let tmp14 = closure_4;
            let tmp15 = closure_4;
            let c5 = 0;
            let tmp16 = closure_0;
            closure_0.return();
            throw closure_4;
          } else if (arg0 === 1) {
            let num3 = 3;
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            let tmp13 = closure_0;
            closure_0.return();
            let num2 = 3;
            c7 = 3;
            let obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp6 = c2;
            closure_3 = arg1;
            let tmp7 = closure_3;
            if (null != closure_3) {
              let tmp8 = c2;
              let tmp9 = items;
              obj = { connection: null, stats: null };
              let tmp10 = c2;
              obj[0] = c2.connection;
              let tmp11 = closure_3;
              obj[1] = closure_3;
              let arr = items.push(obj);
            }
            c5 = 0;
          }
          let tmp20 = items;
          let tmp21 = closure_0;
          if (closure_0 === undefined) {
            let tmp25 = c2;
            let tmp26 = closure_3;
            let tmp27 = closure_0;
            let tmp28 = outer1_0;
            let tmp29 = outer1_1;
            let tmp30 = items;
            let emitResult = closure_0.emit(outer1_0(outer1_1[1]).MediaEngineEvent.ConnectionStats, items);
            let _setTimeout = setTimeout;
            let tmp32 = c2;
            let timerId = setTimeout(c2, outer1_0(outer1_1[2]).STATS_INTERVAL);
          } else {
            let tmp23 = c2;
            c5 = 1;
            c2 = tmp22;
            let tmp24 = c2;
            c6 = 2;
            let num4 = 1;
            c7 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = c2.stats;
            return obj2;
          }
        }
      }
    });
    const _pollStats = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const dependencyMap = false;
  on.on(_BaseConnectionEvent.MediaEngineEvent.Destroy, () => {
    let c1 = true;
    return true;
  });
  let timerId = setTimeout(pollStats, _STATS_INTERVAL.STATS_INTERVAL);
};