import { dispatcher } from "../../../Dispatcher.tsx";
// discord_app/modules/app_database/app/TryLoad.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

function _tryLoadAsync() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
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
              let c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback();
              return obj1;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = logger;
            logger.log("database load failed.", callback);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp16) {
          logger = tmp16;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp16;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _tryLoadAsync = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _tryLoadOrResetCacheGatewayAsync() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_5 = tmp3;
              let closure_4 = tmp5;
              const dependencyMap = stack;
              let c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = dependencyMap();
              return obj1;
            }
          } else if (1 === tmp8) {
            c7 = 0;
            stack = closure_6;
            const _HermesInternal = HermesInternal;
            logger.log("" + callback + ": exception thrown, resetting socket.", stack, stack.stack);
            let obj2 = callback(709);
            obj2 = { error: null, action: null, metricAction: null };
            obj2[0] = stack;
            const _HermesInternal2 = HermesInternal;
            obj2[1] = "tryLoadOrResetCacheGatewayAsync (" + callback + ")";
            logger = dependencyMap;
            if (dependencyMap == null) {
              logger = callback;
            }
            const obj3 = { type: "RESET_SOCKET", args: null };
            const _HermesInternal3 = HermesInternal;
            obj2[2] = "tryLoadOrResetCacheGatewayAsync (" + logger + ")";
            obj3[1] = obj2;
            obj2.dispatch(obj3);
            c9 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c7 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  const _tryLoadOrResetCacheGatewayAsync = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c3 = new require("set")("TryLoad");
const tmp2 = new require("set")("TryLoad");
const result = require("dispatcher").fileFinishedImporting("modules/app_database/app/TryLoad.tsx");

export const tryLoad = function tryLoad(arg0) {
  try {
    return arg0();
  } catch (tmp2) {
    tmp2.log("database load failed.", tmp2);
    return null;
  }
};
export const tryLoadAsync = function tryLoadAsync(arg0) {
  const self = this;
  const apply = _tryLoadAsync.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const tryLoadOrResetCacheGateway = function tryLoadOrResetCacheGateway(arg0, arg1, ensureGuildLoaded) {
  try {
    return arg1();
  } catch (tmp2) {
    let tmp4 = ensureGuildLoaded;
    const _HermesInternal = HermesInternal;
    tmp2.log("" + arg0 + ": exception thrown, resetting socket.", tmp2, tmp2.stack);
    let obj = dispatcher;
    obj = { error: null, action: null, metricAction: null };
    obj[0] = tmp2;
    const _HermesInternal2 = HermesInternal;
    obj[1] = "tryLoadOrResetCacheGateway (" + arg0 + ")";
    if (ensureGuildLoaded == null) {
      tmp4 = arg0;
    }
    obj = { type: "RESET_SOCKET", args: null };
    const _HermesInternal3 = HermesInternal;
    obj[2] = "tryLoadOrResetCacheGateway (" + tmp4 + ")";
    obj[1] = obj;
    obj.dispatch(obj);
    return null;
  }
};
export const tryLoadOrResetCacheGatewayAsync = function tryLoadOrResetCacheGatewayAsync(loadChannels, arg1) {
  const self = this;
  const apply = _tryLoadOrResetCacheGatewayAsync.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};