// _runtime/00264_registerObserver.js
import _modAll46 from "metro/00046__.js";
import nullthrowsDefault from "00070_nullthrows.js";
import _mod136 from "metro/00136__.js";
import NativeIntersectionObserverCxxDefault from "00265_NativeIntersectionObserverCxx.js";
import _mod266 from "metro/00266__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

function getTargetFromInstanceHandle(targetInstanceHandle) {
  return weakMap.get(targetInstanceHandle);
}
function notifyIntersectionObservers() {
  function doNotifyIntersectionObservers() {
    let callback;
    let observer;
    if (null == NativeIntersectionObserverCxxDefault) {
      throwIfNoNativeIntersectionObserver();
    } else {
      const tmpResult = NativeIntersectionObserverCxxDefault;
      const _Map = Map;
      const self = this;
      const self2 = this;
      const takeRecordsResult = tmpResult.takeRecords();
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
        let tmp13 = getTargetFromInstanceHandle(tmp7.targetInstanceHandle);
        if (null != tmp13) {
          let push = arr.push;
          let obj = _mod266;
          let arr2 = push(obj.createIntersectionObserverEntry(tmp7, tmp14));
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
        let value2 = closure_1_7.get(tmp28[0]);
        let tmp32 = value2;
        if (tmp32) {
          ({ observer, callback } = tmp32);
          let callResult = callback.call(observer, tmp29, observer);
          continue;
        } else {
          obj2.return();
        }
      }
    }
  }
  let obj = _modAll46;
  obj.beginEvent("IntersectionObserverManager.notifyIntersectionObservers");
  try {
    doNotifyIntersectionObservers();
    let tmpResult = _modAll46;
    tmpResult.endEvent();
  } catch (tmp6) {
    const tmpResult2 = _modAll46;
    tmpResult2.endEvent();
    throw tmp6;
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
  const obj = { observer, callback };
  const result = map.set(closure_5, obj);
  return closure_5;
};
export const unregisterObserver = function unregisterObserver(_intersectionObserverId) {
  const deleteResult = map.delete(_intersectionObserverId) && 0 === map.size;
  if (deleteResult) {
    const obj = NativeIntersectionObserverCxxDefault;
    if (obj != null) {
      obj.disconnect();
    }
    c6 = false;
  }
};
export const observe = function observe(arg0) {
  let intersectionObserverId;
  let root;
  let target;
  ({ intersectionObserverId, root, target } = arg0);
  if (null == NativeIntersectionObserverCxxDefault) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  } else {
    const value = map.get(intersectionObserverId);
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
      const obj4 = _mod136;
      const nativeNodeReference = obj4.getNativeNodeReference(target);
      if (null == nativeNodeReference) {
        return false;
      } else {
        const tmp23Result = _mod136;
        const instanceHandle = tmp23Result.getInstanceHandle(target);
        if (null == instanceHandle) {
          const _console2 = console;
          console.error("IntersectionObserverManager: could not find reference to instance handle from target");
          return false;
        } else {
          let nativeNodeReference1 = null;
          if (null != root) {
            const tmp23Result2 = _mod136;
            nativeNodeReference1 = tmp23Result2.getNativeNodeReference(root);
          }
          if (null != root) {
            if (null == nativeNodeReference1) {
              const _console = console;
              console.error("IntersectionObserverManager: could not find shadow node for observation root");
              return false;
            }
          }
          const result = weakMap.set(instanceHandle, target);
          const tmp6 = c6;
          if (!tmp6) {
            const tmpResult = NativeIntersectionObserverCxxDefault;
            tmpResult.connect(notifyIntersectionObservers);
            c6 = true;
          }
          const obj = {
            intersectionObserverId,
            rootShadowNode: nativeNodeReference1,
            targetShadowNode: nativeNodeReference,
            thresholds: value.observer.thresholds,
            rootThresholds: value.observer.rnRootThresholds,
            rootMargin: value.observer.rootMargin,
          };
          const tmpResult2 = nullthrowsDefault;
          const result1 = weakMap1.set(target, tmpResult2(NativeIntersectionObserverCxxDefault.observeV2)(obj));
          return true;
        }
      }
    }
  }
};
export const unobserve = function unobserve(_intersectionObserverId, arg1) {
  if (null != NativeIntersectionObserverCxxDefault) {
    if (null != map.get(_intersectionObserverId)) {
      const value = weakMap1.get(arg1);
      if (null != value) {
        const tmpResult = nullthrowsDefault;
        tmpResult(NativeIntersectionObserverCxxDefault.unobserveV2)(_intersectionObserverId, value);
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
    const self = this;
    const self2 = this;
    const error = new Error("Missing native implementation of IntersectionObserver");
    throw error;
  }
};
