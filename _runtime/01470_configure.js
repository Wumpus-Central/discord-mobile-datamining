// === Module 1470: configure ===

// Module 1470 (configure)
import react_native from "react-native" /* 17 */;
import _modDef1472 from "module_1472" /* 1472 */;
import NetInfoStateType from "NetInfoStateType" /* 1477 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_1471_mod from "module_1471" /* 1471 */;

const require = globalThis.__r;
const NetInfoStateTypeAll = NetInfoStateType;
let importAll, importDefault;

let closure_4;
let hasOwnProperty;
let metroRequire;
function configure(arg0) {
  const obj = {};
  const merged = Object.assign(module_1471);
  const merged1 = Object.assign(arg0);
  module_1471 = obj;
  if (closure_8) {
    closure_8.tearDown();
    if (typeof createState === "function") {
      const self = this;
      const self2 = this;
      closure_8 = new _modDef1472(module_1471);
      const tmp8 = new _modDef1472(module_1471);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function fetch(arg0) {
  let obj = closure_8;
  if (!obj) {
    if (typeof createState === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new _modDef1472(module_1471);
      closure_8 = tmp5;
      obj = tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return obj.latest(arg0);
}
function refresh() {
  let promise;
  let obj = closure_8;
  if (!obj) {
    if (typeof createState === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new _modDef1472(module_1471);
      closure_8 = tmp5;
      obj = tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const tmp7 = c10;
  if (tmp7) {
    const self3 = this;
    const self4 = this;
    promise = new Promise((arg0) => {
      closure_11.push(arg0);
    });
  } else {
    c10 = true;
    const _fetchCurrentStateResult = obj._fetchCurrentState();
    const nextPromise = _fetchCurrentStateResult.then((result) => {
      let closure_0 = result;
      const item = closure_11.forEach((fn) => fn(closure_0));
      closure_11 = [];
      return result;
    });
    promise = nextPromise.finally(() => {
      c10 = false;
    });
  }
  return promise;
}
function addEventListener(notifyListeners) {
  importDefault = notifyListeners;
  let obj = closure_8;
  if (!obj) {
    if (typeof createState === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new _modDef1472(module_1471);
      closure_8 = tmp5;
      obj = tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  obj.add(notifyListeners);
  return () => {
    if (closure_2_8) {
      closure_2_8.remove(f84216);
    }
  };
}
function useNetInfo(arg0) {
  let closure_0;
  let first;
  const tmp = arg0;
  if (tmp) {
    let obj = {};
    const merged = Object.assign(module_1471);
    let tmp6 = obj;
    const merged1 = Object.assign(arg0);
    const tmp2 = importDefault;
    if (closure_8) {
      closure_8.tearDown();
      if (typeof createState === "function") {
        let self = this;
        let self2 = this;
        closure_8 = new tmp2(1472)(obj);
        const tmp12 = new tmp2(1472)(obj);
      } else {
        const str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj3 = { type: NetInfoStateTypeAll.NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  [first, importDefault] = closure_4(obj3);
  closure_5(function() {
    obj = closure_8;
    if (!obj) {
      if (typeof createState === "function") {
        const self = this;
        const self2 = this;
        const tmp6 = new _modDef1472(module_1471);
        closure_8 = tmp6;
        obj = tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj.add(closure_0);
    const f84216 = () => {
      if (closure_2_8) {
        closure_2_8.remove(f84216);
      }
    };
    return () => {
      if (typeof f84216 === "function") {
        if (closure_1_8) {
          closure_1_8.remove(closure_128_0);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }, []);
  return first;
}
function useNetInfoInstance() {
  let closure_1;
  let closure_3;
  let closure_4;
  let first;
  let first1;
  let items1;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  importAll = arg1;
  first = undefined;
  _slicedToArray = undefined;
  closure_4 = undefined;
  [first, _slicedToArray] = closure_4();
  let obj = { type: require("NetInfoStateType").NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  [first1, closure_4] = closure_4(obj);
  const items = [flag, arg1];
  closure_5(function() {
    if (!flag) {
      const obj = {};
      const merged = Object.assign(module_1471);
      const merged1 = Object.assign(closure_1);
      const self = this;
      const self2 = this;
      const obj2 = new _modDef1472(obj);
      closure_3(obj2);
      obj2.add(closure_4);
      return obj2.tearDown;
    }
  }, items);
  let obj2 = {
    netInfo: first1,
    refresh: closure_6(() => {
      const tmp = first && !c10;
      if (tmp) {
        c10 = true;
        const _fetchCurrentStateResult = first._fetchCurrentState();
        _fetchCurrentStateResult.finally(() => {
          c10 = false;
        });
      }
    }, items1)
  };
  items1 = [first];
  return obj2;
}
let _slicedToArray = _slicedToArray_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire } = react);
const Platform = react_native.Platform;
let module_1471 = module_1471_mod;
let closure_8 = null;
function createState() {

}
let c10 = false;
let closure_11 = [];
for (const key10038 in NetInfoStateType) {
  exports[key10038] = NetInfoStateType[key10038];
  continue;
}

export default { configure, fetch, refresh, addEventListener, useNetInfo, useNetInfoInstance };
export { configure };
export { fetch };
export { refresh };
export { addEventListener };
export { useNetInfo };
export { useNetInfoInstance };