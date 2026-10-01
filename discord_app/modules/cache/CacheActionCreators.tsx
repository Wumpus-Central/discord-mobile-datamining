// discord_app/modules/cache/CacheActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import CacheStore from "CacheStore.tsx";

let closure_5 = async function _writeCaches() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
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
          return { value: "flex", done: null };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (closure_130_4.canWriteCaches(closure_129_0)) {
            c3 = 2;
            c4 = 1;
            const obj6 = { value: closure_130_3.loadAllMissingChannels(), done: false };
            return obj6;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_129_1 = [];
            const obj8 = { type: "WRITE_CACHES", promisesToWaitOn: closure_129_1 };
            closure_130_0(closure_130_1[3]).dispatch(obj8);
            c3 = 3;
            c4 = 1;
            const obj9 = { value: Promise.all(closure_129_1), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
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
const ChannelLoader = fn(2044).ChannelLoader;
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
  DispatcherDefault.dispatch({
    type: "CLEAR_CACHES",
    reason: "Requested by user",
    preventWritingCachesAgainThisSession: true,
    resetSocket: true,
  });
};
