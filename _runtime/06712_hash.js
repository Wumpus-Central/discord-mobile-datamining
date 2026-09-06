// === Module 6712: hash ===

// Module 6712 (hash)
import _mod6698 from "module_6698" /* 6698 */;
import allowedNativeProps from "allowedNativeProps" /* 6713 */;
import _mod6722 from "module_6722" /* 6722 */;
import _slicedToArray from "module_32" /* 32 */;

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
fn(6699).NativeProxy.updateGestureHandlerConfig;
const __initData = { code: "function pnpm_reanimatedUtilsTs2(sharedValue,configKey){const{hash,baseListenerId,updateGestureHandlerConfig,handlerTag,shouldUseReanimatedDetector}=this.__closure;const keyHash=hash(configKey);const listenerId=baseListenerId+keyHash;sharedValue.addListener(listenerId,function(value){updateGestureHandlerConfig(handlerTag,configKey==='runOnJS'?{dispatchesReanimatedEvents:shouldUseReanimatedDetector&&!value}:{[configKey]:value});});}" };
let closure_7 = { code: "function pnpm_reanimatedUtilsTs3(){const{maybeSharedValue,listenerId}=this.__closure;maybeSharedValue.removeListener(listenerId);}" };
function maybeUnpackValue(enabled) {
  const Reanimated = _mod6698.Reanimated;
  let isSharedValueResult;
  if (Reanimated != null) {
    isSharedValueResult = Reanimated.isSharedValue(enabled);
  }
  value = enabled;
  if (isSharedValueResult) {
    value = enabled.value;
  }
  return value;
}
maybeUnpackValue.__closure = { Reanimated: fn(6698).Reanimated };
maybeUnpackValue.__workletHash = 6251032010993;
maybeUnpackValue.__initData = { code: "function maybeUnpackValue_Pnpm_reanimatedUtilsTs4(v){const{Reanimated}=this.__closure;var _Reanimated;return(_Reanimated=Reanimated)!==null&&_Reanimated!==void 0&&_Reanimated.isSharedValue(v)?v.value:v;}" };
function getEnabledSharedValues(Reanimated) {
  if (undefined === _mod6698.Reanimated) {
    return [];
  } else {
    if (tmpResult.isComposedGesture(Reanimated)) {
      const gestures = Reanimated.gestures;
      return gestures.flatMap(getEnabledSharedValues);
    } else {
      const enabled = Reanimated.config.enabled;
      Reanimated = _mod6698.Reanimated;
      if (Reanimated.isSharedValue(enabled)) {
        const items = [enabled];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
    tmpResult = _mod6722;
  }
}

export const SHARED_VALUE_OFFSET = 1.618;
export const bindSharedValues = function bindSharedValues(shouldUseReanimatedDetector, handlerTag) {
  _require = handlerTag;
  if (undefined !== require("module_6698").Reanimated) {
    const sum = handlerTag + c4;
    dependencyMap = sum;
    shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
    const fn = function c(addListener, str) {
      closure_0 = str;
      if (typeof hash === "function") {
        let num2 = 5381;
        let num5 = 0;
        let num6 = 5381;
        if (0 < str.length) {
          do {
            num2 = 33 * num2 ^ str.charCodeAt(num5);
            num5 = num5 + 1;
            num6 = num2;
          } while (num5 < length);
        }
        addListener.addListener(closure_1 + (num6 >>> 0), (arg0) => {
          if ("runOnJS" === closure_0) {
            let tmp4 = shouldUseReanimatedDetector;
            if (shouldUseReanimatedDetector) {
              tmp4 = !arg0;
            }
            let obj = { dispatchesReanimatedEvents: tmp4 };
          } else {
            obj = {};
            obj[tmp3] = arg0;
          }
          closure_5(closure_0, obj);
        });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let obj = { hash, baseListenerId: sum, updateGestureHandlerConfig, handlerTag, shouldUseReanimatedDetector };
    fn.__closure = obj;
    fn.__workletHash = 16966290399534;
    fn.__initData = __initData;
    const _Object = Object;
    const entries = Object.entries(shouldUseReanimatedDetector);
    const tmp27 = entries[Symbol.iterator]();
    while (tmp27 !== undefined) {
      let tmp5 = shouldUseReanimatedDetector(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      let tmp10 = _require;
      let Reanimated = require("module_6698").Reanimated;
      if (Reanimated.isSharedValue(tmp7)) {
        let Reanimated2 = tmp10(6698).Reanimated;
        let tmp17 = Reanimated2.runOnUI(fn)(tmp7, tmp6);
      }
      continue;
    }
  }
};
export const unbindSharedValues = function unbindSharedValues(dependencyMap, handlerTag) {
  if (undefined !== require("module_6698").Reanimated) {
    _require = handlerTag + c4;
    const _Object = Object;
    function _loop(maybeSharedValue) {
      const Reanimated = _mod6698.Reanimated;
      if (Reanimated.isSharedValue(maybeSharedValue)) {
        if (typeof hash === "function") {
          let num3 = 5381;
          let num6 = 0;
          let num7 = 5381;
          if (0 < arr.length) {
            do {
              num3 = 33 * num3 ^ arr.charCodeAt(num6);
              num6 = num6 + 1;
              num7 = num3;
            } while (num6 < length);
          }
          const sum = maybeSharedValue + (num7 >>> 0);
          closure_1 = sum;
          const Reanimated2 = _mod6698.Reanimated;
          const fn = function t() {
            maybeSharedValue.removeListener(sum);
          };
          const obj = { maybeSharedValue, listenerId: sum };
          fn.__closure = obj;
          fn.__workletHash = 11226855247881;
          fn.__initData = __initData;
          Reanimated2.runOnUI(fn)();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        return 1;
      }
    }
    const entries = Object.entries(dependencyMap);
    const tmp7 = entries[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp12 = _slicedToArray(tmp9, 2);
      dependencyMap = tmp12[0];
      let _loopResult = _loop(tmp12[1]);
      continue;
    }
  }
};
export const hasWorkletEventHandlers = function hasWorkletEventHandlers(useAnimated) {
  const iter = allowedNativeProps.HandlerCallbacks[Symbol.iterator]();
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