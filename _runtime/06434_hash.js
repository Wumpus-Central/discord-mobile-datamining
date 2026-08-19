// === Module 6434: hash ===

// Module 6434 (hash)
import _mod6420 from "module_6420" /* 6420 */;
import items2 from "items2" /* 6435 */;
import isComposedGesture from "isComposedGesture" /* 6444 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

require = fn;
function hash(str) {
  let num = 5381;
  let num2 = 0;
  let num3 = 5381;
  if (0 < str.length) {
    do {
      num = 33 * num ^ str.charCodeAt(num2);
      num2 = num2 + 1;
      num3 = num;
    } while (num2 < length);
  }
  return num3 >>> 0;
}
hash.__closure = {};
hash.__workletHash = 9993568053208;
hash.__initData = { code: "function hash_Pnpm_reanimatedUtilsTs1(str){const len=str.length;let h=5381;for(let i=0;i<len;i++){h=h*33^str.charCodeAt(i);}return h>>>0;}" };
let c4 = 1.618;
let closure_5 = require("n").NativeProxy.updateGestureHandlerConfig;
let closure_6 = { code: "function pnpm_reanimatedUtilsTs2(sharedValue,configKey){const{hash,baseListenerId,updateGestureHandlerConfig,handlerTag,shouldUseReanimatedDetector}=this.__closure;const keyHash=hash(configKey);const listenerId=baseListenerId+keyHash;sharedValue.addListener(listenerId,function(value){updateGestureHandlerConfig(handlerTag,configKey==='runOnJS'?{dispatchesReanimatedEvents:shouldUseReanimatedDetector&&!value}:{[configKey]:value});});}" };
let closure_7 = { code: "function pnpm_reanimatedUtilsTs3(){const{maybeSharedValue,listenerId}=this.__closure;maybeSharedValue.removeListener(listenerId);}" };
function maybeUnpackValue(enabled) {
  const Reanimated = _mod6420.Reanimated;
  let isSharedValueResult;
  if (Reanimated != null) {
    isSharedValueResult = Reanimated.isSharedValue(enabled);
  }
  let value = enabled;
  if (isSharedValueResult) {
    value = enabled.value;
  }
  return value;
}
maybeUnpackValue.__closure = { Reanimated: require("module_6420").Reanimated };
maybeUnpackValue.__workletHash = 6251032010993;
maybeUnpackValue.__initData = { code: "function maybeUnpackValue_Pnpm_reanimatedUtilsTs4(v){const{Reanimated}=this.__closure;var _Reanimated;return(_Reanimated=Reanimated)!==null&&_Reanimated!==void 0&&_Reanimated.isSharedValue(v)?v.value:v;}" };
function getEnabledSharedValues(Reanimated) {
  if (undefined === _mod6420.Reanimated) {
    return [];
  } else {
    if (tmpResult.isComposedGesture(Reanimated)) {
      const gestures = Reanimated.gestures;
      return gestures.flatMap(getEnabledSharedValues);
    } else {
      const enabled = Reanimated.config.enabled;
      Reanimated = _mod6420.Reanimated;
      if (Reanimated.isSharedValue(enabled)) {
        const items = [enabled];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
    tmpResult = isComposedGesture;
  }
}

export const SHARED_VALUE_OFFSET = 1.618;
export const bindSharedValues = function bindSharedValues(closure_1, closure_2) {
  const _require = closure_2;
  if (undefined !== _require(6420).Reanimated) {
    const sum = closure_2 + c4;
    dependencyMap = sum;
    const shouldUseReanimatedDetector = dependencyMap.shouldUseReanimatedDetector;
    const fn = function c(addListener, str) {
      closure_0 = str;
      if (typeof hash !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let num = 5381;
      let num2 = 0;
      let num3 = 5381;
      if (0 < str.length) {
        do {
          num = 33 * num ^ str.charCodeAt(num2);
          num2 = num2 + 1;
          num3 = num;
        } while (num2 < length);
      }
      addListener.addListener(closure_1 + (num3 >>> 0), (arg0) => {
        if ("runOnJS" === closure_0) {
          let tmp4 = shouldUseReanimatedDetector;
          if (shouldUseReanimatedDetector) {
            tmp4 = !arg0;
          }
          let obj = { dispatchesReanimatedEvents: null };
          obj[0] = tmp4;
        } else {
          obj = {};
          obj[tmp3] = arg0;
        }
        closure_2_5(closure_0, obj);
      });
    };
    let obj = { hash: null, baseListenerId: null, updateGestureHandlerConfig: null, handlerTag: null, shouldUseReanimatedDetector: null };
    obj[0] = hash;
    obj[1] = sum;
    obj[2] = closure_5;
    obj[3] = closure_2;
    obj[4] = shouldUseReanimatedDetector;
    fn.__closure = obj;
    fn.__workletHash = 16966290399534;
    fn.__initData = closure_6;
    const _Object = Object;
    const entries = Object.entries(dependencyMap);
    const tmp27 = entries[Symbol.iterator]();
    while (tmp27 !== undefined) {
      let tmp5 = shouldUseReanimatedDetector(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      let tmp10 = _require;
      let Reanimated = _require(6420).Reanimated;
      if (Reanimated.isSharedValue(tmp7)) {
        let Reanimated2 = tmp10(6420).Reanimated;
        let tmp17 = Reanimated2.runOnUI(fn)(tmp7, tmp6);
      }
      continue;
    }
  }
};
export const unbindSharedValues = function unbindSharedValues(closure_1, closure_2) {
  if (undefined !== _require(6420).Reanimated) {
    _require = closure_2 + c4;
    const _Object = Object;
    function _loop(iter) {
      const callback = iter;
      const Reanimated = callback(6420).Reanimated;
      if (Reanimated.isSharedValue(iter)) {
        if (typeof hash !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let num3 = 5381;
        let num6 = 0;
        let num7 = 5381;
        if (0 < dependencyMap.length) {
          do {
            num3 = 33 * num3 ^ arr.charCodeAt(num6);
            num6 = num6 + 1;
            num7 = num3;
          } while (num6 < length);
        }
        const sum = callback + (num7 >>> 0);
        dependencyMap = sum;
        const Reanimated2 = callback(6420).Reanimated;
        const fn = function t() {
          iter.removeListener(closure_1);
        };
        const obj = { maybeSharedValue: null, listenerId: null };
        obj[0] = iter;
        obj[1] = sum;
        fn.__closure = obj;
        fn.__workletHash = 11226855247881;
        fn.__initData = closure_1_7;
        Reanimated2.runOnUI(fn)();
      } else {
        return 1;
      }
    }
    const entries = Object.entries(closure_1);
    const tmp7 = entries[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp12 = callback(tmp9, 2);
      dependencyMap = tmp12[0];
      let _loopResult = _loop(tmp12[1]);
      continue;
    }
  }
};
export const hasWorkletEventHandlers = function hasWorkletEventHandlers(useAnimated) {
  const iter = items2.HandlerCallbacks[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp = useAnimated[iter.next()];
    if (typeof tmp === "function") {
      if ("__workletHash" in tmp2) {
        iter.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export { maybeUnpackValue };
export { getEnabledSharedValues };