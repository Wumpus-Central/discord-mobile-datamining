// discord_app/modules/app_database/app/TryLoad.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

let closure_4 = async function _tryLoadAsync(arg0) {
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
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj1 = { value: importDefault(), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        closure_130_3.log("database load failed.", closure_129_0);
        c6 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp16) {
      closure_3 = tmp16;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp16;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_5 = async function _tryLoadOrResetCacheGatewayAsync(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp5;
          closure_132_0 = closure_0;
          closure_132_1 = closure_2;
          c7 = 1;
          c8 = 2;
          c9 = 1;
          const obj1 = { value: dependencyMap(), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        c7 = 0;
        closure_132_2 = closure_6;
        const _HermesInternal = HermesInternal;
        closure_133_3.log(
          "" + closure_132_0 + ": exception thrown, resetting socket.",
          closure_132_2,
          closure_132_2.stack,
        );
        let obj2 = closure_133_0(closure_133_1[2]);
        obj2 = { error: closure_132_2, action: null, metricAction: null };
        const _HermesInternal2 = HermesInternal;
        obj2.action = "tryLoadOrResetCacheGatewayAsync (" + closure_132_0 + ")";
        closure_3 = closure_132_1;
        if (closure_132_1 == null) {
          closure_3 = closure_132_0;
        }
        const obj3 = { type: "RESET_SOCKET", args: null };
        const _HermesInternal3 = HermesInternal;
        obj2.metricAction = "tryLoadOrResetCacheGatewayAsync (" + closure_3 + ")";
        obj3.args = obj2;
        obj2.dispatch(obj3);
        c9 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c7 = 0;
        c9 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp29) {
      closure_6 = tmp29;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp29;
      } else {
        c8 = tmp;
      }
    }
  }
};
const logger = new LoggerDefault("TryLoad");
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/app/TryLoad.tsx");

export const tryLoad = function tryLoad(fn) {
  try {
    return fn();
  } catch (tmp2) {
    logger.log("database load failed.", tmp2);
    return null;
  }
};
export const tryLoadAsync = function tryLoadAsync() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const tryLoadOrResetCacheGateway = function tryLoadOrResetCacheGateway(arg0, fn, ensureGuildLoaded) {
  try {
    return fn();
  } catch (tmp2) {
    let tmp4 = ensureGuildLoaded;
    const _HermesInternal = HermesInternal;
    logger.log("" + arg0 + ": exception thrown, resetting socket.", tmp2, tmp2.stack);
    let obj = DispatcherDefault;
    obj = { error: tmp2, action: null, metricAction: null };
    const _HermesInternal2 = HermesInternal;
    obj.action = "tryLoadOrResetCacheGateway (" + arg0 + ")";
    if (ensureGuildLoaded == null) {
      tmp4 = arg0;
    }
    obj = { type: "RESET_SOCKET", args: null };
    const _HermesInternal3 = HermesInternal;
    obj.metricAction = "tryLoadOrResetCacheGateway (" + tmp4 + ")";
    obj.args = obj;
    obj.dispatch(obj);
    return null;
  }
};
export const tryLoadOrResetCacheGatewayAsync = function tryLoadOrResetCacheGatewayAsync() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
