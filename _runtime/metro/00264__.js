// _runtime/metro/00264__.js
import _modAll46 from "00046__.js";
import nullthrowsDefault from "../00070_nullthrows.js";
import _mod136 from "00136__.js";
import NativeIntersectionObserverCxxDefault from "../00265_NativeIntersectionObserverCxx.js";
import IntersectionObserverEntry from "../00266_IntersectionObserverEntry.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getTargetFromInstanceHandle(targetInstanceHandle) {
  return weakMap.get(targetInstanceHandle);
}
function notifyIntersectionObservers() {
  _modAll46.beginEvent("IntersectionObserverManager.notifyIntersectionObservers");
  try {
    (function doNotifyIntersectionObservers() {
      if (null == NativeIntersectionObserverCxxDefault) {
        throwIfNoNativeIntersectionObserver();
      } else {
        const takeRecordsResult = NativeIntersectionObserverCxxDefault.takeRecords();
        const _Map = Map;
        map = new Map();
        const iter = takeRecordsResult[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp7 = nextResult;
          value = map.get(nextResult.intersectionObserverId);
          let arr = value;
          if (null == value) {
            let items = [];
            arr = items;
            let result = map.set(tmp7.intersectionObserverId, items);
          }
          let tmp13 = getTargetFromInstanceHandle(tmp7.targetInstanceHandle);
          if (null != tmp13) {
            let obj = IntersectionObserverEntry;
            arr = arr.push(obj.createIntersectionObserverEntry(tmp7, tmp14));
          } else {
            let _console = console;
            let warnResult = console.warn("Could not find target to create IntersectionObserverEntry");
          }
          continue;
        }
        const obj2 = map[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp28 = _slicedToArray(tmp25, 2);
          let tmp29 = tmp28[1];
          value = closure_1_7.get(tmp28[0]);
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
        const tmpResult = NativeIntersectionObserverCxxDefault;
      }
    })();
    _modAll46.endEvent();
    const tmp4Result = _modAll46;
  } catch (tmp9) {
    tmp3(tmp[4]).endEvent();
    throw tmp9;
  }
}
function throwIfNoNativeIntersectionObserver() {
  const error = new Error("Missing native implementation of IntersectionObserver");
  throw error;
}
let closure_5 = 1;
let c6 = false;
let map = new Map();
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();

export const registerObserver = function registerObserver(observer, callback) {
  closure_5 = closure_5 + 1;
  const result = map.set(closure_5, { observer, callback });
  return closure_5;
};
export const unregisterObserver = function unregisterObserver(_intersectionObserverId) {
  let deleteResult = map.delete(_intersectionObserverId);
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
    const error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  } else {
    value = map.get(intersectionObserverId);
    if (null == value) {
      const _console3 = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "IntersectionObserverManager: could not start observing target because IntersectionObserver with ID " +
          intersectionObserverId +
          " was not registered.",
      );
      return false;
    } else {
      const nativeNodeReference = _mod136.getNativeNodeReference(target);
      if (null == nativeNodeReference) {
        return false;
      } else {
        let tmp25Result = _mod136;
        const instanceHandle = tmp25Result.getInstanceHandle(target);
        if (null == instanceHandle) {
          const _console2 = console;
          console.error("IntersectionObserverManager: could not find reference to instance handle from target");
          return false;
        } else {
          let nativeNodeReference1 = null;
          if (null != root) {
            tmp25Result = _mod136;
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
          const obj = {
            intersectionObserverId,
            rootShadowNode: nativeNodeReference1,
            targetShadowNode: nativeNodeReference,
            thresholds: value.observer.thresholds,
            rootThresholds: value.observer.rnRootThresholds,
            rootMargin: value.observer.rootMargin,
          };
          const result1 = weakMap1.set(target, tmpResult(NativeIntersectionObserverCxxDefault.observeV2)(obj));
          return true;
        }
      }
    }
  }
};
export const unobserve = function unobserve(_intersectionObserverId, arg1) {
  if (null != NativeIntersectionObserverCxxDefault) {
    if (null != map.get(_intersectionObserverId)) {
      value = weakMap1.get(arg1);
      if (null != value) {
        nullthrowsDefault(NativeIntersectionObserverCxxDefault.unobserveV2)(_intersectionObserverId, value);
        const tmpResult = nullthrowsDefault;
      } else {
        const _console2 = console;
        console.error("IntersectionObserverManager: could not find registration data for target");
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "IntersectionObserverManager: could not stop observing target because IntersectionObserver with ID " +
          _intersectionObserverId +
          " was not registered.",
      );
    }
  } else {
    const _Error = Error;
    const error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  }
};
