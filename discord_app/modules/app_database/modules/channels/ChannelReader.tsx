// discord_app/modules/app_database/modules/channels/ChannelReader.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import DatabaseDaosDefault from "../../DatabaseDaos.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const logger = new LoggerDefault("ChannelReader");
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/modules/channels/ChannelReader.tsx");
const prototype = function ChannelReader() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["getSync"] = function getSync(databaseResult, arg1) {
  const nowResult = performance.now();
  const manySyncUnsafe = DatabaseDaosDefault.channels(databaseResult).getManySyncUnsafe(arg1);
  const diff = performance.now() - nowResult;
  logger.log("synchronously loaded in " + diff + "ms (guild: " + arg1 + ", channels: " + manySyncUnsafe.length + ")");
  const items = [manySyncUnsafe, diff];
  return items;
};
prototype["getAsync"] = function getAsync(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    const _performance2 = performance;
    closure_128_0 = performance.now();
    tmp2(tmp5[2]);
    await tmp2(tmp5[2]).channels(tmp2).getMany(tmp5);
    closure_128_1 = value;
    const _performance = performance;
    closure_128_2 = performance.now() - closure_128_0;
    const _HermesInternal = HermesInternal;
    c3.verbose(
      "loaded in " + closure_128_2 + "ms (guild: " + closure_129_1 + ", channels: " + closure_128_1.length + ")",
    );
    return closure_128_1;
  })();
};
prototype["getGuildIds"] = function getGuildIds() {
  return (async () => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            const channelsResult = DatabaseDaosDefault.channels();
            if (null == channelsResult) {
              const _Set3 = Set;
              const set = new Set();
              c4 = 0;
              c6 = 3;
              const obj1 = { value: set, done: true };
              return obj1;
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = { value: channelsResult.getGuildIds(), done: false };
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          closure_130_3.warn("couldn't get guild ids", closure_129_1);
          const _Set2 = Set;
          const set1 = new Set();
          c6 = 3;
          const obj3 = { value: set1, done: true };
          return obj3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = value;
          if (value == null) {
            closure_0 = [];
          }
          closure_129_0 = closure_0.filter((item) => null !== item && typeof item === "string");
          const _Set = Set;
          const set2 = new Set(closure_129_0);
          c4 = 0;
          c6 = 3;
          obj = { value: set2, done: true };
          return obj;
        }
      } catch (tmp30) {
        closure_3 = tmp30;
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
