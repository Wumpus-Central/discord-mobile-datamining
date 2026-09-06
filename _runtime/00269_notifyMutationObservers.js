// _runtime/00269_notifyMutationObservers.js
import _modAll46 from "metro/00046__.js";
import renderElement from "00114_renderElement.js";
import _mod136 from "metro/00136__.js";
import warnOnceDefault from "00165_warnOnce.js";
import NativeMutationObserverCxxDefault from "00271_NativeMutationObserverCxx.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
function notifyMutationObservers() {
  _modAll46.beginEvent("MutationObserverManager.notifyMutationObservers");
  try {
    (function doNotifyMutationObservers() {
      if (null == NativeMutationObserverCxxDefault) {
        warnNoNativeMutationObserver();
      } else {
        const takeRecordsResult = NativeMutationObserverCxxDefault.takeRecords();
        const _Map = Map;
        map = new Map();
        for (const item10013 of takeRecordsResult) {
          value = map.get(item10013.mutationObserverId);
          let arr = value;
          if (null == value) {
            let items = [];
            arr = items;
            let result = map.set(item10013.mutationObserverId, items);
          }
          arr = arr.push(createMutationRecord(item10013));
          continue;
        }
        const obj = map[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp17 = _slicedToArray(tmp14, 2);
          let tmp18 = tmp17[1];
          value = closure_1_8.get(tmp17[0]);
          let tmp21 = value;
          if (value) {
            ({ observer, callback } = tmp21);
            let call = callback.call;
            if (typeof call === "unknown") {
              let callbackResult = callback(tmp18, observer);
            } else {
              let callResult = call(observer, tmp18, observer);
            }
            continue;
          } else {
            obj.return();
          }
        }
        const tmpResult = NativeMutationObserverCxxDefault;
      }
    })();
    _modAll46.endEvent();
    const tmp4Result = _modAll46;
  } catch (tmp9) {
    tmp3(tmp[5]).endEvent();
    throw tmp9;
  }
}
function warnNoNativeMutationObserver() {
  warnOnceDefault("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
}
const createMutationRecord = fn(270).createMutationRecord;
let closure_6 = 1;
let c7 = false;
let map = new Map();

export const registerObserver = function registerObserver(observer, callback) {
  closure_6 = closure_6 + 1;
  const result = map.set(closure_6, { observer, callback });
  return closure_6;
};
export const unregisterObserver = function unregisterObserver(_mutationObserverId) {
  let deleteResult = map.delete(_mutationObserverId);
  if (deleteResult) {
    deleteResult = 0 === map.size;
  }
  if (deleteResult) {
    const obj = NativeMutationObserverCxxDefault;
    if (obj != null) {
      obj.disconnect();
    }
    c7 = false;
  }
};
export const observe = function observe(mutationObserverId) {
  mutationObserverId = mutationObserverId.mutationObserverId;
  ({ target, subtree } = mutationObserverId);
  if (null != NativeMutationObserverCxxDefault) {
    if (null != map.get(mutationObserverId)) {
      let obj = _mod136;
      const nativeNodeReference = obj.getNativeNodeReference(target);
      if (null != nativeNodeReference) {
        if (!c7) {
          let tmpResult = NativeMutationObserverCxxDefault;
          tmpResult.connect(notifyMutationObservers, renderElement.getPublicInstanceFromInternalInstanceHandle);
          c7 = true;
        }
        tmpResult = NativeMutationObserverCxxDefault;
        obj = { mutationObserverId, targetShadowNode: nativeNodeReference, subtree };
        tmpResult.observe(obj);
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
      NativeMutationObserverCxxDefault.unobserveAll(_mutationObserverId);
      const tmpResult = NativeMutationObserverCxxDefault;
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
