// === Module 2098: TryLoad ===

// Module 2098 (TryLoad)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, closure_4, closure_5, closure_6;

let obj = function _tryLoadAsync() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj4 = { value: closure_0(), done: false };
            return obj4;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          closure_130_3.log("database load failed.", closure_0);
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp13) {
        closure_3 = tmp13;
        if (0 === c4) {
          c6 = 3;
          throw tmp13;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _tryLoadOrResetCacheGatewayAsync() {
  obj = _asyncToGenerator(async (arg0, arg1, error) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let tmp15;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp15;
              closure_1 = error;
              c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: closure_1(), done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
            c7 = 0;
            error = closure_6;
            const _HermesInternal = HermesInternal;
            closure_133_3.log("" + closure_0 + ": exception thrown, resetting socket.", error, error.stack);
            tmp15 = closure_133_0(closure_133_1[2]);
            const _HermesInternal2 = HermesInternal;
            const dispatch = tmp15.dispatch;
            const obj5 = { error, action: "tryLoadOrResetCacheGatewayAsync (" + closure_0 + ")", metricAction: "tryLoadOrResetCacheGatewayAsync (" + closure_3 + ")" };
            closure_3 = closure_1;
            if (closure_1 == null) {
              closure_3 = closure_0;
            }
            const _HermesInternal3 = HermesInternal;
            const obj6 = { type: "RESET_SOCKET", args: obj5 };
            dispatch(obj6);
            c9 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          }
        } catch (tmp26) {
          closure_6 = tmp26;
          if (0 === c7) {
            c9 = 3;
            throw tmp26;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const tmp2 = new LoggerDefault("TryLoad");
const logger = tmp2;
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
  return obj(...arguments);
};
export const tryLoadOrResetCacheGateway = function tryLoadOrResetCacheGateway(arg0, fn, ensureGuildLoaded) {
  try {
    return fn();
  } catch (tmp2) {
    let tmp4 = ensureGuildLoaded;
    const _HermesInternal = HermesInternal;
    logger.log("" + arg0 + ": exception thrown, resetting socket.", tmp2, tmp2.stack);
    const _HermesInternal2 = HermesInternal;
    obj = { error: tmp2, action: "tryLoadOrResetCacheGateway (" + arg0 + ")", metricAction: "tryLoadOrResetCacheGateway (" + tmp4 + ")" };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (ensureGuildLoaded == null) {
      tmp4 = arg0;
    }
    const _HermesInternal3 = HermesInternal;
    const obj2 = { type: "RESET_SOCKET", args: obj };
    dispatch(obj2);
    return null;
  }
};
export const tryLoadOrResetCacheGatewayAsync = function tryLoadOrResetCacheGatewayAsync() {
  return obj(...arguments);
};