// _runtime/metro/00269__.js
import _modAll46 from "00046__.js";
import renderElement from "../00114_renderElement.js";
import _mod136 from "00136__.js";
import warnOnceDefault from "../00165_warnOnce.js";
import _mod270 from "00270__.js";
import NativeMutationObserverCxxDefault from "../00271_NativeMutationObserverCxx.js";
import _slicedToArray from "00032__slicedToArray.js";

function notifyMutationObservers() {
  function doNotifyMutationObservers() {
    let callback;
    let observer;
    if (null == NativeMutationObserverCxxDefault) {
      warnNoNativeMutationObserver();
    } else {
      const tmpResult = NativeMutationObserverCxxDefault;
      const _Map = Map;
      const self = this;
      const self2 = this;
      const takeRecordsResult = tmpResult.takeRecords();
      map = new Map();
      for (const item10013 of takeRecordsResult) {
        let value = map.get(item10013.mutationObserverId);
        let arr = value;
        if (null == value) {
          let items = [];
          arr = items;
          let result = map.set(item10013.mutationObserverId, items);
        }
        let arr2 = arr.push(createMutationRecord(item10013));
        continue;
      }
      const obj = map[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp17 = _slicedToArray(tmp14, 2);
        let tmp18 = tmp17[1];
        let value2 = closure_1_8.get(tmp17[0]);
        let tmp21 = value2;
        if (tmp21) {
          ({ observer, callback } = tmp21);
          let callResult = callback.call(observer, tmp18, observer);
          continue;
        } else {
          obj.return();
        }
      }
    }
  }
  let obj = _modAll46;
  obj.beginEvent("MutationObserverManager.notifyMutationObservers");
  try {
    doNotifyMutationObservers();
    let tmpResult = _modAll46;
    tmpResult.endEvent();
  } catch (tmp6) {
    const tmpResult2 = _modAll46;
    tmpResult2.endEvent();
    throw tmp6;
  }
}
function warnNoNativeMutationObserver() {
  warnOnceDefault("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
}
const createMutationRecord = _mod270.createMutationRecord;
let closure_6 = 1;
let c7 = false;
let map = new Map();

export const registerObserver = function registerObserver(observer, callback) {
  closure_6 = closure_6 + 1;
  const obj = { observer, callback };
  const result = map.set(closure_6, obj);
  return closure_6;
};
export const unregisterObserver = function unregisterObserver(_mutationObserverId) {
  const deleteResult = map.delete(_mutationObserverId) && 0 === map.size;
  if (deleteResult) {
    const obj = NativeMutationObserverCxxDefault;
    if (obj != null) {
      obj.disconnect();
    }
    c7 = false;
  }
};
export const observe = function observe(mutationObserverId) {
  let subtree;
  let target;
  mutationObserverId = mutationObserverId.mutationObserverId;
  ({ target, subtree } = mutationObserverId);
  if (null != NativeMutationObserverCxxDefault) {
    if (null != map.get(mutationObserverId)) {
      const obj = _mod136;
      const nativeNodeReference = obj.getNativeNodeReference(target);
      if (null != nativeNodeReference) {
        const tmp9 = c7;
        if (!tmp9) {
          const tmpResult = NativeMutationObserverCxxDefault;
          tmpResult.connect(notifyMutationObservers, renderElement.getPublicInstanceFromInternalInstanceHandle);
          c7 = true;
        }
        const obj2 = { mutationObserverId, targetShadowNode: nativeNodeReference, subtree };
        const tmpResult2 = NativeMutationObserverCxxDefault;
        tmpResult2.observe(obj2);
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "MutationObserverManager: could not start observing target because MutationObserver with ID " +
          mutationObserverId +
          " was not registered.",
      );
    }
  } else {
    warnOnceDefault("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
  }
};
export const unobserveAll = function unobserveAll(_mutationObserverId) {
  if (null != NativeMutationObserverCxxDefault) {
    if (null != map.get(_mutationObserverId)) {
      const tmpResult = NativeMutationObserverCxxDefault;
      tmpResult.unobserveAll(_mutationObserverId);
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "MutationObserverManager: could not disconnect MutationObserver with ID " +
          _mutationObserverId +
          " because it was not registered.",
      );
    }
  } else {
    warnOnceDefault("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
  }
};
