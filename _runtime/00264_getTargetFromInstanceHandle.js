// _runtime/00264_getTargetFromInstanceHandle.js
import _slicedToArray from "_slicedToArray";

const require = arg1;
function getTargetFromInstanceHandle(arg0) {
  return weakMap.get(arg0);
}
function notifyIntersectionObservers() {
  importAll(46).beginEvent("IntersectionObserverManager.notifyIntersectionObservers");
  try {
    (function doNotifyIntersectionObservers() {
      let callback;
      let observer;
      if (null == callback2(265)) {
        callback5();
      } else {
        const takeRecordsResult = tmp(265).takeRecords();
        const _Map = Map;
        const map = new Map();
        const iter = takeRecordsResult[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp7 = nextResult;
          let value = map.get(nextResult.intersectionObserverId);
          let arr = value;
          if (null == value) {
            let items = [];
            arr = items;
            let tmp9 = nextResult;
            let result = map.set(tmp7.intersectionObserverId, items);
          }
          let tmp11 = callback4;
          let tmp12 = nextResult;
          let tmp13 = callback4(tmp7.targetInstanceHandle);
          if (null != tmp13) {
            let tmp16 = arr;
            let tmp17 = callback;
            let tmp18 = dependencyMap;
            let tmp19 = dependencyMap;
            let obj = callback(266);
            let tmp20 = nextResult;
            let tmp21 = tmp13;
            arr = arr.push(obj.createIntersectionObserverEntry(tmp7, tmp14));
          } else {
            let _console = console;
            let warnResult = console.warn("Could not find target to create IntersectionObserverEntry");
          }
          continue;
        }
        const obj2 = map[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp27 = callback3;
          let tmp28 = callback3(tmp25, 2);
          let tmp29 = tmp28[1];
          let tmp30 = closure_7;
          value = closure_7.get(tmp28[0]);
          let tmp32 = value;
          if (value) {
            let tmp34 = value;
            ({ observer, callback } = tmp32);
            let tmp35 = callback;
            let call = callback.call;
            let tmp36 = observer;
            let tmp37 = tmp29;
            if (typeof call === "unknown") {
              let callbackResult = callback(tmp29, observer);
            } else {
              let callResult = call(observer, tmp29, observer);
            }
            continue;
          } else {
            let tmp33 = obj2;
            obj2.return();
          }
        }
      }
      tmp = callback2;
      const tmp2 = dependencyMap;
    })();
    importAll(46).endEvent();
  } catch (tmp9) {
    tmp3(tmp[4]).endEvent();
    throw tmp9;
  }
}
function throwIfNoNativeIntersectionObserver() {
  const error = new Error("Missing native implementation of IntersectionObserver");
  throw error;
}
let c5 = 1;
let c6 = false;
let map = new Map();
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();

export const registerObserver = function registerObserver(observer, callback) {
  closure_5 = closure_5 + 1;
  const result = map.set(closure_5, { observer, callback });
  return closure_5;
};
export const unregisterObserver = function unregisterObserver(arg0) {
  let deleteResult = map.delete(arg0);
  if (deleteResult) {
    deleteResult = 0 === map.size;
  }
  if (deleteResult) {
    const obj = importDefault(265);
    if (obj != null) {
      obj.disconnect();
    }
    let c6 = false;
  }
};
export const observe = function observe(arg0) {
  let intersectionObserverId;
  let root;
  let target;
  ({ intersectionObserverId, root, target } = arg0);
  if (null == importDefault(265)) {
    const _Error = Error;
    const error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  } else {
    const value = map.get(intersectionObserverId);
    if (null == value) {
      const _console3 = console;
      const _HermesInternal = HermesInternal;
      console.error("IntersectionObserverManager: could not start observing target because IntersectionObserver with ID " + intersectionObserverId + " was not registered.");
      return false;
    } else {
      const nativeNodeReference = require(136) /* getInstanceHandle */.getNativeNodeReference(target);
      if (null == nativeNodeReference) {
        return false;
      } else {
        let tmp25Result = tmp25(136);
        const instanceHandle = tmp25Result.getInstanceHandle(target);
        if (null == instanceHandle) {
          const _console2 = console;
          console.error("IntersectionObserverManager: could not find reference to instance handle from target");
          return false;
        } else {
          let nativeNodeReference1 = null;
          if (null != root) {
            tmp25Result = tmp25(136);
            nativeNodeReference1 = tmp25Result.getNativeNodeReference(root);
          }
          if (null != root) {
            if (null == nativeNodeReference1) {
              const _console = console;
              console.error("IntersectionObserverManager: could not find shadow node for observation root");
              return false;
            }
          }
          const result = weakMap.set(instanceHandle, target);
          if (!c6) {
            let tmpResult = tmp(265);
            tmpResult.connect(notifyIntersectionObservers);
            c6 = true;
          }
          tmpResult = tmp(70);
          const obj = { intersectionObserverId: null, rootShadowNode: null, targetShadowNode: null, thresholds: null, rootThresholds: null, rootMargin: null };
          obj[0] = intersectionObserverId;
          obj[1] = nativeNodeReference1;
          obj[2] = nativeNodeReference;
          obj[3] = value.observer.thresholds;
          obj[4] = value.observer.rnRootThresholds;
          obj[5] = value.observer.rootMargin;
          const result1 = weakMap1.set(target, tmpResult(tmp(265).observeV2)(obj));
          return true;
        }
      }
      const obj4 = require(136) /* getInstanceHandle */;
    }
  }
};
export const unobserve = function unobserve(arg0, arg1) {
  if (null != importDefault(265)) {
    if (null != map.get(arg0)) {
      const value = weakMap1.get(arg1);
      if (null != value) {
        tmp(70)(tmp(265).unobserveV2)(arg0, value);
        const tmpResult = tmp(70);
      } else {
        const _console2 = console;
        console.error("IntersectionObserverManager: could not find registration data for target");
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("IntersectionObserverManager: could not stop observing target because IntersectionObserver with ID " + arg0 + " was not registered.");
    }
  } else {
    const _Error = Error;
    const error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  }
};