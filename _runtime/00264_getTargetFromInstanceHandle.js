// _runtime/00264_getTargetFromInstanceHandle.js
import isEnabledAll from "00046_isEnabled.js";
import nullthrowsDefault from "00070_nullthrows.js";
import getInstanceHandle from "00136_getInstanceHandle.js";
import NativeIntersectionObserverCxxDefault from "00265_NativeIntersectionObserverCxx.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

require = arg1;
function getTargetFromInstanceHandle(arg0) {
  return weakMap.get(arg0);
}
function notifyIntersectionObservers() {
  isEnabledAll.beginEvent("IntersectionObserverManager.notifyIntersectionObservers");
  try {
    (function doNotifyIntersectionObservers() {
      if (null == callback2(265)) {
        callback5();
      } else {
        const takeRecordsResult = callback2(265).takeRecords();
        const _Map = Map;
        map = new Map();
        const iter = takeRecordsResult[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp7 = nextResult;
          let value = map.get(nextResult.intersectionObserverId);
          let arr = value;
          if (null == value) {
            let items = [];
            arr = items;
            let result = map.set(tmp7.intersectionObserverId, items);
          }
          let tmp13 = callback4(tmp7.targetInstanceHandle);
          if (null != tmp13) {
            let obj = callback(266);
            arr = arr.push(obj.createIntersectionObserverEntry(tmp7, tmp14));
          } else {
            let _console = console;
            let warnResult = console.warn("Could not find target to create IntersectionObserverEntry");
          }
          continue;
        }
        const obj2 = map[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp28 = callback3(tmp25, 2);
          let tmp29 = tmp28[1];
          value = closure_7.get(tmp28[0]);
          let tmp32 = value;
          if (value) {
            ({ observer, callback } = tmp32);
            let call = callback.call;
            if (typeof call === "unknown") {
              let callbackResult = callback(tmp29, observer);
            } else {
              let callResult = call(observer, tmp29, observer);
            }
            continue;
          } else {
            obj2.return();
          }
        }
        const tmpResult = callback2(265);
      }
    })();
    isEnabledAll.endEvent();
    const tmp4Result = isEnabledAll;
  } catch (tmp9) {
    tmp3(tmp[4]).endEvent();
    throw tmp9;
  }
}
function throwIfNoNativeIntersectionObserver() {
  error = new Error("Missing native implementation of IntersectionObserver");
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
    const obj = NativeIntersectionObserverCxxDefault;
    if (obj != null) {
      obj.disconnect();
    }
    c6 = false;
  }
};
export const observe = function observe(arg0) {
  ({ intersectionObserverId, root, target } = arg0);
  if (null == NativeIntersectionObserverCxxDefault) {
    const _Error = Error;
    error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  } else {
    const value = map.get(intersectionObserverId);
    if (null == value) {
      const _console3 = console;
      const _HermesInternal = HermesInternal;
      console.error("IntersectionObserverManager: could not start observing target because IntersectionObserver with ID " + intersectionObserverId + " was not registered.");
      return false;
    } else {
      const nativeNodeReference = getInstanceHandle.getNativeNodeReference(target);
      if (null == nativeNodeReference) {
        return false;
      } else {
        let tmp25Result = getInstanceHandle;
        const instanceHandle = tmp25Result.getInstanceHandle(target);
        if (null == instanceHandle) {
          const _console2 = console;
          console.error("IntersectionObserverManager: could not find reference to instance handle from target");
          return false;
        } else {
          let nativeNodeReference1 = null;
          if (null != root) {
            tmp25Result = getInstanceHandle;
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
            let tmpResult = NativeIntersectionObserverCxxDefault;
            tmpResult.connect(notifyIntersectionObservers);
            c6 = true;
          }
          tmpResult = nullthrowsDefault;
          const obj = { intersectionObserverId: null, rootShadowNode: null, targetShadowNode: null, thresholds: null, rootThresholds: null, rootMargin: null };
          obj[0] = intersectionObserverId;
          obj[1] = nativeNodeReference1;
          obj[2] = nativeNodeReference;
          obj[3] = value.observer.thresholds;
          obj[4] = value.observer.rnRootThresholds;
          obj[5] = value.observer.rootMargin;
          const result1 = weakMap1.set(target, tmpResult(NativeIntersectionObserverCxxDefault.observeV2)(obj));
          return true;
        }
      }
    }
  }
};
export const unobserve = function unobserve(arg0, arg1) {
  if (null != NativeIntersectionObserverCxxDefault) {
    if (null != map.get(arg0)) {
      const value = weakMap1.get(arg1);
      if (null != value) {
        nullthrowsDefault(NativeIntersectionObserverCxxDefault.unobserveV2)(arg0, value);
        const tmpResult = nullthrowsDefault;
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
    error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  }
};