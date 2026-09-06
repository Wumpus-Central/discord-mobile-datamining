// === Module 4624: pollConnectionStats ===

// Module 4624 (pollConnectionStats)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/pollConnectionStats.tsx");

export default function pollConnectionStats(on) {
  _require = on;
  function pollStats() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_3 = async function _pollStats(arg0, value) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp;
            closure_2 = tmp2;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            if (!dependencyMap) {
              let items = [];
              closure_130_0 = items;
              let eachConnectionResult = on.eachConnection((connection) => closure_1_0.push({ connection, stats: connection.emitStats() }));
              closure_130_1 = [];
              on = items[Symbol.iterator]();
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp5) {
          c5 = 0;
          on.return();
          throw closure_1_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          on.return();
          c7 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          closure_130_3 = value;
          if (null != closure_130_3) {
            obj = { connection: null, stats: null };
            obj.connection = closure_130_2.connection;
            obj.stats = closure_130_3;
            let arr = closure_130_1.push(obj);
          }
          c5 = 0;
        }
        if (on === undefined) {
          let emitResult = closure_131_0.emit(on(items[1]).MediaEngineEvent.ConnectionStats, closure_130_1);
          let _setTimeout = setTimeout;
          let timerId = setTimeout(closure_131_2, on(items[2]).STATS_INTERVAL);
        } else {
          c5 = 1;
          closure_130_2 = tmp22;
          c6 = 2;
          c7 = 1;
          let obj2 = { value: closure_130_2.stats, done: false };
          return obj2;
        }
      }
    }
  };
  dependencyMap = false;
  on.on(require("BaseConnectionEvent").MediaEngineEvent.Destroy, () => {
    c1 = true;
    return true;
  });
  let timerId = setTimeout(pollStats, require("Stats").STATS_INTERVAL);
};