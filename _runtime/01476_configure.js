// _runtime/01476_configure.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Platform } from "get ActivityIndicator";
import 01477__ from "metro/01477__.js";
import { State } from "01478_State.js";
import { 01477__ } from "metro/01477__.js";

let c4;
let c5;
let closure_6;
function configure(arg0) {
  const obj = {};
  const merged = Object.assign(01477__);
  const merged1 = Object.assign(arg0);
  if (c8) {
    c8.tearDown();
    if (typeof createState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp10 = new State(obj);
    c8 = tmp10;
  }
}
function fetch(arg0) {
  let obj = c8;
  if (!c8) {
    if (typeof createState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp7 = new State(module_1477);
    c8 = tmp7;
    obj = tmp7;
  }
  return obj.latest(arg0);
}
function refresh() {
  let obj = c8;
  if (!c8) {
    if (typeof createState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp7 = new State(module_1477);
    c8 = tmp7;
    obj = tmp7;
  }
  if (c10) {
    let cleanupPromise = new Promise((arg0) => {

    });
  } else {
    c10 = true;
    const _fetchCurrentStateResult = obj._fetchCurrentState();
    cleanupPromise = obj._fetchCurrentState().then((arg0) => {
      let closure_0 = arg0;
      const item = arr.forEach((arg0) => arg0(closure_0));
      return arg0;
    }).finally(() => {
      let c10 = false;
    });
    const nextPromise = obj._fetchCurrentState().then((arg0) => {
      let closure_0 = arg0;
      const item = arr.forEach((arg0) => arg0(closure_0));
      return arg0;
    });
  }
  return cleanupPromise;
}
function addEventListener(arg0) {
  const importDefault = arg0;
  let obj = c8;
  if (!c8) {
    if (typeof createState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp7 = new State(module_1477);
    c8 = tmp7;
    obj = tmp7;
  }
  obj.add(arg0);
  return () => {
    if (outer1_8) {
      outer1_8.remove(f70320);
    }
  };
}
function useNetInfo(arg0) {
  if (arg0) {
    let obj = {};
    const merged = Object.assign(01477__);
    const merged1 = Object.assign(arg0);
    if (c8) {
      obj2.tearDown();
      if (typeof createState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const tmp13 = new tmp(1478)(obj);
      c8 = tmp13;
    }
    obj2 = c8;
    tmp = importDefault;
  }
  obj = { type: importAll(1483).NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  const tmp15 = callback(callback2(obj), 2);
  importDefault = tmp15[1];
  callback3(() => {
    let obj = closure_8;
    if (!closure_8) {
      if (typeof outer1_9 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const tmp8 = new callback(outer1_2[4])(obj);
      closure_8 = tmp8;
      obj = tmp8;
    }
    obj.add(f70320);
    f70320 = () => {
      if (outer1_8) {
        outer1_8.remove(f70320);
      }
    };
    return () => {
      if (typeof f70320 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (outer1_8) {
        outer1_8.remove(f70320);
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
  const importAll = arg1;
  let first;
  let callback;
  let callback2;
  let tmp = callback(callback2(), 2);
  first = tmp[0];
  callback = tmp[1];
  let obj = { type: importAll(first[5]).NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  const tmp3 = callback(callback2(obj), 2);
  callback2 = tmp3[1];
  const items = [flag, arg1];
  callback3(() => {
    if (!flag) {
      const obj = {};
      const merged = Object.assign(flag(first[3]));
      const merged1 = Object.assign(closure_1);
      const obj2 = new flag(first[4])(obj);
      callback(obj2);
      obj2.add(closure_4);
      return obj2.tearDown;
    }
  }, items);
  obj = {
    netInfo: tmp3[0],
    refresh: callback4(() => {
      let tmp = first;
      if (first) {
        tmp = !outer1_10;
      }
      if (tmp) {
        outer1_10 = true;
        first._fetchCurrentState().finally(() => {
          let c10 = false;
        });
        const _fetchCurrentStateResult = first._fetchCurrentState();
      }
    }, items1)
  };
  items1 = [first];
  return obj;
}
({ useState: c4, useEffect: c5, useCallback: closure_6 } = noop);
let c8 = null;
function createState() {

}
let c10 = false;
let closure_11 = [];
for (const key10038 in require("module_1483")) {
  let tmp3 = key10038;
  arg5[key10038] = require("module_1483")[key10038];
  continue;
}

export default { configure, fetch, refresh, addEventListener, useNetInfo, useNetInfoInstance };
export { configure };
export { fetch };
export { refresh };
export { addEventListener };
export { useNetInfo };
export { useNetInfoInstance };