// === Module 4955: pollConnectionStats ===

// Module 4955 (pollConnectionStats)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c6, c7, dependencyMap;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/pollConnectionStats.tsx");

export default function pollConnectionStats(on) {
  _require = on;
  function pollStats() {
    return obj(...arguments);
  }
  let obj = function _pollStats() {
    obj = _asyncToGenerator(async () => {
      let tmp2;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let items;
          let stats;
          let closure_0;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp2;
              items = undefined;
              tmp2 = undefined;
              stats = undefined;
              if (!closure_2_1) {
                items = [];
                let eachConnectionResult = on.eachConnection((connection) => {
                  obj = { connection, stats: connection.emitStats() };
                  return closure_1_0.push(obj);
                });
                items = [];
                closure_0 = items[Symbol.iterator]();
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp5) {
            let c5 = 0;
            closure_0.return();
            throw closure_1_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            stats = value;
            if (null != stats) {
              obj = { connection: tmp2.connection, stats };
              let arr = items.push(obj);
            }
            c5 = 0;
          }
          if (closure_0 === undefined) {
            let emitResult = closure_131_0.emit(closure_0(items[1]).MediaEngineEvent.ConnectionStats, items);
            let _setTimeout = setTimeout;
            let timerId = setTimeout(closure_131_2, closure_0(items[2]).STATS_INTERVAL);
          } else {
            c5 = 1;
            tmp2 = tmp22;
            c6 = 2;
            c7 = 1;
            let obj5 = { value: tmp2.stats, done: false };
            return obj5;
          }
        }
      }
    });
    return obj(...arguments);
  };
  dependencyMap = false;
  on.on(require("MediaEngineEvent").MediaEngineEvent.Destroy, () => {
    c1 = true;
    return true;
  });
  let timerId = setTimeout(pollStats, require("Stats").STATS_INTERVAL);
};