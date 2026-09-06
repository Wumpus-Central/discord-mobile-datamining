// === Module 1463: configure ===

// Module 1463 (configure)
import StateDefault from "State" /* 1465 */;
import NetInfoStateTypeAll from "NetInfoStateType" /* 1470 */;
import _slicedToArray from "module_32" /* 32 */;
import module_1464 from "module_1464" /* 1464 */;

function configure(arg0) {
  const merged = Object.assign(module_1464);
  const merged1 = Object.assign(arg0);
  module_1464 = {};
  if (closure_8) {
    obj2.tearDown();
    if (typeof createState === "function") {
      const tmp10 = new StateDefault(module_1464);
      closure_8 = tmp10;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const obj = {};
  obj2 = closure_8;
}
function fetch(arg0) {
  let obj = closure_8;
  if (!closure_8) {
    if (typeof createState === "function") {
      const tmp7 = new StateDefault(module_1464);
      closure_8 = tmp7;
      obj = tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return obj.latest(arg0);
}
function refresh() {
  let obj = closure_8;
  if (!closure_8) {
    if (typeof createState === "function") {
      const tmp7 = new StateDefault(module_1464);
      closure_8 = tmp7;
      obj = tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if (c10) {
    let cleanupPromise = new Promise((arg0) => {
      closure_11.push(arg0);
    });
  } else {
    c10 = true;
    const _fetchCurrentStateResult = obj._fetchCurrentState();
    cleanupPromise = obj._fetchCurrentState().then((result) => {
      closure_0 = result;
      const item = closure_11.forEach((fn) => fn(closure_0));
      closure_11 = [];
      return result;
    }).finally(() => {
      c10 = false;
    });
    const nextPromise = obj._fetchCurrentState().then((result) => {
      closure_0 = result;
      const item = closure_11.forEach((fn) => fn(closure_0));
      closure_11 = [];
      return result;
    });
  }
  return cleanupPromise;
}
function addEventListener(notifyListeners) {
  importDefault = notifyListeners;
  let obj = closure_8;
  if (!closure_8) {
    if (typeof createState === "function") {
      const tmp7 = new StateDefault(module_1464);
      closure_8 = tmp7;
      obj = tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  obj.add(notifyListeners);
  return () => {
    if (closure_8) {
      closure_8.remove(f73164);
    }
  };
}
function useNetInfo(arg0) {
  if (arg0) {
    let obj = {};
    const merged = Object.assign(module_1464);
    const merged1 = Object.assign(arg0);
    if (closure_8) {
      obj2.tearDown();
      if (typeof createState === "function") {
        const tmp13 = new tmp(1465)(obj);
        closure_8 = tmp13;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj2 = closure_8;
    tmp = importDefault;
  }
  obj = { type: NetInfoStateTypeAll.NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  const tmp15 = _slicedToArray(closure_4(obj), 2);
  importDefault = tmp15[1];
  closure_5(() => {
    let f73164 = closure_0;
    obj = closure_8;
    if (!closure_8) {
      if (typeof createState === "function") {
        const tmp8 = new StateDefault(module_1464);
        closure_8 = tmp8;
        obj = tmp8;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj.add(closure_0);
    f73164 = () => {
      if (closure_8) {
        closure_8.remove(f73164);
      }
    };
    return () => {
      if (typeof f73164 === "function") {
        if (closure_1_8) {
          closure_1_8.remove(closure_128_0);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }, []);
  return tmp15[0];
}
function useNetInfoInstance() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  importAll = arg1;
  _slicedToArray = undefined;
  closure_4 = undefined;
  let tmp = _slicedToArray(closure_4(), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  let obj = { type: require("NetInfoStateType").NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  const tmp3 = _slicedToArray(closure_4(obj), 2);
  closure_4 = tmp3[1];
  const items = [flag, arg1];
  closure_5(() => {
    if (!flag) {
      const obj = {};
      const merged = Object.assign(module_1464);
      const merged1 = Object.assign(closure_1);
      const obj2 = new StateDefault(obj);
      closure_3(obj2);
      obj2.add(closure_4);
      return obj2.tearDown;
    }
  }, items);
  obj = { netInfo: tmp3[0], refresh: null };
  const items1 = [first];
  obj.refresh = closure_6(() => {
    let tmp = first;
    if (first) {
      tmp = !c10;
    }
    if (tmp) {
      c10 = true;
      first._fetchCurrentState().finally(() => {
        c10 = false;
      });
      const _fetchCurrentStateResult = first._fetchCurrentState();
    }
  }, items1);
  return obj;
}
const noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire } = noop);
const Platform = fn(17).Platform;
let closure_8 = null;
function createState() {

}
let c10 = false;
let closure_11 = [];
for (const key10038 in require("NetInfoStateType")) {
  arg5[key10038] = require("NetInfoStateType")[key10038];
  continue;
}

export default { configure, fetch, refresh, addEventListener, useNetInfo, useNetInfoInstance };
export { configure };
export { fetch };
export { refresh };
export { addEventListener };
export { useNetInfo };
export { useNetInfoInstance };