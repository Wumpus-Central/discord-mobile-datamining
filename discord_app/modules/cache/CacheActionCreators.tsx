// === Module 15635: CacheActionCreators ===

// Module 15635 (CacheActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import CacheStore from "CacheStore" /* 7549 */;

let closure_5 = async function _writeCaches() {
  if (c4 === 2) {
    c4 = 3;
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
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_129_0 = flag;
          closure_129_1 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: null };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else if (closure_130_4.canWriteCaches(closure_129_0)) {
            c3 = 2;
            c4 = 1;
            const obj2 = { value: closure_130_3.loadAllMissingChannels(), done: false };
            return obj2;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_1 = [];
            obj1 = closure_130_0(closure_130_1[3]);
            const obj4 = { type: "WRITE_CACHES", promisesToWaitOn: closure_129_1 };
            obj1.dispatch(obj4);
            c3 = 3;
            c4 = 1;
            const obj5 = { value: Promise.all(closure_129_1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
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
};
const ChannelLoader = fn(1957).ChannelLoader;
const size = fn(2);
const result = size.fileFinishedImporting("modules/cache/CacheActionCreators.tsx");

export const writeCaches = function writeCaches() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearCaches = function clearCaches() {
  DispatcherDefault.dispatch({ type: "CLEAR_CACHES", reason: "Requested by user", preventWritingCachesAgainThisSession: true, resetSocket: true });
};