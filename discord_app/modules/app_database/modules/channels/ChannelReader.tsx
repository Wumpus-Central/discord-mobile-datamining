// discord_app/modules/app_database/modules/channels/ChannelReader.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

let c3 = new require("set")("ChannelReader");
const tmp2 = new require("set")("ChannelReader");
const result = require("items").fileFinishedImporting("modules/app_database/modules/channels/ChannelReader.tsx");
const prototype = function ChannelReader() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["getSync"] = function getSync(closure_1, closure_0) {
  const nowResult = performance.now();
  const obj = require("../../DatabaseDaos.tsx");
  const manySyncUnsafe = require("../../DatabaseDaos.tsx").channels(closure_1).getManySyncUnsafe(closure_0);
  const diff = performance.now() - nowResult;
  tmp2.log("synchronously loaded in " + diff + "ms (guild: " + closure_0 + ", channels: " + manySyncUnsafe.length + ")");
  const items = [manySyncUnsafe, diff];
  return items;
};
prototype["getAsync"] = function getAsync(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback(function*() {
    let length = tmp5;
    let closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = outer1_0(outer1_1[2]);
    length = yield outer1_0(outer1_1[2]).channels(outer1_0).getMany(outer1_1);
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    c3.verbose("loaded in " + asyncGeneratorStep + "ms (guild: " + length + ", channels: " + length.length + ")");
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
            let asyncGeneratorStep = tmp3;
            let closure_1 = tmp7;
            let closure_0;
            let c4 = 1;
            const channelsResult = outer1_0(outer1_1[2]).channels();
            if (null == channelsResult) {
              const _Set3 = Set;
              const set = new Set();
              c4 = 0;
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = set;
              return obj1;
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = channelsResult.getGuildIds();
              return obj2;
            }
            const obj8 = outer1_0(outer1_1[2]);
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