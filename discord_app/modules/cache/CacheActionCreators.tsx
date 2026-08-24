// discord_app/modules/cache/CacheActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_2 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { ChannelLoader } from "../../stores/ChannelStore.tsx";
import closure_4 from "CacheStore.tsx";

function _writeCaches() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      if (c4 === 2) {
        c4 = 3;
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
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              let table = tmp2;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              table = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (c4.canWriteCaches(flag)) {
                c3 = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = c3.loadAllMissingChannels();
                return obj2;
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                table = [];
                obj1 = flag(table[3]);
                const obj4 = { type: "WRITE_CACHES", promisesToWaitOn: null };
                obj4[1] = table;
                obj1.dispatch(obj4);
                c3 = 3;
                c4 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = Promise.all(table);
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/cache/CacheActionCreators.tsx");

export const writeCaches = function writeCaches(arg0) {
  const self = this;
  const apply = _writeCaches.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearCaches = function clearCaches() {
  dispatcherDefault.dispatch({ type: "CLEAR_CACHES", reason: "Requested by user", preventWritingCachesAgainThisSession: true, resetSocket: true });
};