// discord_common/js/packages/media-engine/pollConnectionStats.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/media-engine/pollConnectionStats.tsx");

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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = undefined;
              let items;
              c2 = undefined;
              closure_3 = undefined;
              if (!closure_1_1) {
                items = [];
                let eachConnectionResult = closure_1_0.eachConnection((connection) => arr.push({ connection, stats: connection.emitStats() }));
                items = [];
                closure_0 = items[Symbol.iterator]();
              }
              c7 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === tmp5) {
            c5 = 0;
            closure_0.return();
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            closure_3 = arg1;
            if (null != closure_3) {
              obj = { connection: null, stats: null };
              obj[0] = c2.connection;
              obj[1] = closure_3;
              let arr = items.push(obj);
            }
            c5 = 0;
          }
          if (closure_0 === undefined) {
            let emitResult = closure_0.emit(closure_1_0(closure_1_1[1]).MediaEngineEvent.ConnectionStats, items);
            let _setTimeout = setTimeout;
            let timerId = setTimeout(c2, closure_1_0(closure_1_1[2]).STATS_INTERVAL);
          } else {
            c5 = 1;
            c2 = tmp22;
            c6 = 2;
            c7 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = c2.stats;
            return obj2;
          }
        }
      }
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  dependencyMap = false;
  on.on(require("index.tsx").MediaEngineEvent.Destroy, () => {
    c1 = true;
    return true;
  });
  let timerId = setTimeout(pollStats, require("Stats.tsx").STATS_INTERVAL);
};