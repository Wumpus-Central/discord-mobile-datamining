// === Module 15570: CacheActionCreators ===

// Module 15570 (CacheActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import CacheStore from "CacheStore" /* 7476 */;

let closure_5 = async function _writeCaches(arg0, value) {
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
      return { value: closure_130_3.loadAllMissingChannels(), done: false };
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_129_1 = [];
      obj1 = closure_130_0(closure_130_1[3]);
      obj1.dispatch({ type: "WRITE_CACHES", promisesToWaitOn: closure_129_1 });
      c3 = 3;
      c4 = 1;
      return { value: Promise.all(closure_129_1), done: false };
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_1 = tmp2;
  let flag = closure_0;
  if (closure_0 === undefined) {
    flag = false;
  }
  closure_129_0 = flag;
  return "PX_16";
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