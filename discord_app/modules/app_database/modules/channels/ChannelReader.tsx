// === Module 1976: getSync ===

// Module 1976 (getSync)
import timestampDefault from "timestamp" /* 3 */;
import itemsDefault from "items" /* 1955 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

let closure_3 = new timestampDefault("ChannelReader");
const tmp2 = new timestampDefault("ChannelReader");
const result = require("set").fileFinishedImporting("modules/app_database/modules/channels/ChannelReader.tsx");
const prototype = function ChannelReader() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["getSync"] = function getSync(closure_1, closure_0) {
  const nowResult = performance.now();
  const obj = itemsDefault;
  const manySyncUnsafe = itemsDefault.channels(closure_1).getManySyncUnsafe(closure_0);
  const diff = performance.now() - nowResult;
  logger.log("synchronously loaded in " + diff + "ms (guild: " + closure_0 + ", channels: " + manySyncUnsafe.length + ")");
  const items = [manySyncUnsafe, diff];
  return items;
};
prototype["getAsync"] = function getAsync(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return callback(function*() {
    let length = tmp5;
    closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = closure_1_0(closure_1_1[2]);
    length = yield closure_1_0(closure_1_1[2]).channels(closure_1_0).getMany(closure_1_1);
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    c3.verbose("loaded in " + closure_2 + "ms (guild: " + length + ", channels: " + length.length + ")");
    return length;
  })();
};
prototype["getGuildIds"] = function getGuildIds() {
  return callback(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_0 = undefined;
            c4 = 1;
            const channelsResult = closure_1_0(closure_1_1[2]).channels();
            if (null == channelsResult) {
              const _Set3 = Set;
              const set = new Set();
              c4 = 0;
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = set;
              return obj1;
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = channelsResult.getGuildIds();
              return obj2;
            }
            const obj8 = closure_1_0(closure_1_1[2]);
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_1 = logger;
          logger.warn("couldn't get guild ids", closure_1);
          const _Set2 = Set;
          const set1 = new Set();
          c6 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = set1;
          return obj3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          if (arg1 == null) {
            closure_0 = [];
          }
          closure_0 = closure_0.filter((str) => null !== str && typeof str === "string");
          const _Set = Set;
          const set2 = new Set(closure_0);
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = set2;
          return obj;
        }
      } catch (tmp30) {
        logger = tmp30;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp30;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};

export default prototype;