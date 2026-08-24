// === Module 269: notifyMutationObservers ===

// Module 269 (notifyMutationObservers)
import isEnabledAll from "isEnabled" /* 46 */;
import getInstanceHandle from "getInstanceHandle" /* 136 */;
import warnOnceDefault from "warnOnce" /* 165 */;
import NativeMutationObserverCxxDefault from "NativeMutationObserverCxx" /* 271 */;
import closure_4 from "_slicedToArray" /* 32 */;
import { createMutationRecord } from "MutationRecord" /* 270 */;

require = arg1;
function notifyMutationObservers() {
  isEnabledAll.beginEvent("MutationObserverManager.notifyMutationObservers");
  try {
    (function doNotifyMutationObservers() {
      if (null == callback(table[2])) {
        callback4();
      } else {
        const takeRecordsResult = tmp(tmp2[2]).takeRecords();
        const _Map = Map;
        map = new Map();
        for (const item10013 of takeRecordsResult) {
          let tmp4 = item10013;
          let value = map.get(item10013.mutationObserverId);
          let arr = value;
          if (null == value) {
            let items = [];
            arr = items;
            let tmp6 = item10013;
            let result = map.set(tmp4.mutationObserverId, items);
          }
          let tmp8 = arr;
          let tmp9 = callback3;
          let tmp10 = item10013;
          arr = arr.push(callback3(tmp4));
          continue;
        }
        const obj = map[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp16 = callback2;
          let tmp17 = callback2(tmp14, 2);
          let tmp18 = tmp17[1];
          let tmp19 = closure_8;
          value = closure_8.get(tmp17[0]);
          let tmp21 = value;
          if (value) {
            let tmp23 = value;
            ({ observer, callback } = tmp21);
            let tmp24 = callback;
            let call = callback.call;
            let tmp25 = observer;
            let tmp26 = tmp18;
            if (typeof call === "unknown") {
              let callbackResult = callback(tmp18, observer);
            } else {
              let callResult = call(observer, tmp18, observer);
            }
            continue;
          } else {
            let tmp22 = obj;
            obj.return();
          }
        }
      }
      tmp = callback;
      tmp2 = table;
    })();
    isEnabledAll.endEvent();
  } catch (tmp9) {
    tmp3(tmp[5]).endEvent();
    throw tmp9;
  }
}
function warnNoNativeMutationObserver() {
  warnOnceDefault("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
}
let c6 = 1;
let c7 = false;
let map = new Map();

export const registerObserver = function registerObserver(observer, callback) {
  closure_6 = closure_6 + 1;
  const result = map.set(closure_6, { observer, callback });
  return closure_6;
};
export const unregisterObserver = function unregisterObserver(arg0) {
  let deleteResult = map.delete(arg0);
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
      let obj = getInstanceHandle;
      const nativeNodeReference = obj.getNativeNodeReference(target);
      if (null != nativeNodeReference) {
        if (!c7) {
          let tmpResult = tmp(271);
          tmpResult.connect(notifyMutationObservers, tmp7(114).getPublicInstanceFromInternalInstanceHandle);
          c7 = true;
        }
        tmpResult = tmp(271);
        obj = { mutationObserverId: null, targetShadowNode: null, subtree: null };
        obj[0] = mutationObserverId;
        obj[1] = nativeNodeReference;
        obj[2] = subtree;
        tmpResult.observe(obj);
      }
      tmp7 = require;
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("MutationObserverManager: could not start observing target because MutationObserver with ID " + mutationObserverId + " was not registered.");
    }
  } else {
    tmp(165)("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
  }
};
export const unobserveAll = function unobserveAll(_mutationObserverId) {
  if (null != NativeMutationObserverCxxDefault) {
    if (null != map.get(_mutationObserverId)) {
      tmp(271).unobserveAll(_mutationObserverId);
      const tmpResult = tmp(271);
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("MutationObserverManager: could not disconnect MutationObserver with ID " + _mutationObserverId + " because it was not registered.");
    }
  } else {
    tmp(165)("missing-native-mutation-observer", "Missing native implementation of MutationObserver");
  }
};