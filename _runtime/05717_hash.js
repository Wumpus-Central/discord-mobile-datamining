// === Module 5717: hash ===

// Module 5717 (hash)
import _mod5703 from "module_5703" /* 5703 */;
import items2 from "items2" /* 5718 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
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
  const Reanimated = _mod5703.Reanimated;
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
maybeUnpackValue.__closure = { Reanimated: require("module_5703").Reanimated };
maybeUnpackValue.__workletHash = 6251032010993;
maybeUnpackValue.__initData = { code: "function maybeUnpackValue_Pnpm_reanimatedUtilsTs4(v){const{Reanimated}=this.__closure;var _Reanimated;return(_Reanimated=Reanimated)!==null&&_Reanimated!==void 0&&_Reanimated.isSharedValue(v)?v.value:v;}" };
function getEnabledSharedValues(Reanimated) {
  if (undefined === _mod5703.Reanimated) {
    return [];
  } else {
    if (tmpResult.isComposedGesture(Reanimated)) {
      const gestures = Reanimated.gestures;
      return gestures.flatMap(getEnabledSharedValues);
    } else {
      const enabled = Reanimated.config.enabled;
      Reanimated = tmp(5703).Reanimated;
      if (Reanimated.isSharedValue(enabled)) {
        const items = [enabled];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
    tmpResult = tmp(5727);
  }
}

export const SHARED_VALUE_OFFSET = 1.618;
export const bindSharedValues = function bindSharedValues(closure_1, closure_2) {
  const _require = closure_2;
  if (undefined !== _require(5703).Reanimated) {
    const sum = closure_2 + c4;
    dependencyMap = sum;
    const shouldUseReanimatedDetector = closure_1.shouldUseReanimatedDetector;
    const fn = function c(addListener, str) {
      closure_0 = str;
      if (typeof closure_1_3 !== "function") {
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
          let tmp4 = closure_1_2;
          if (closure_1_2) {
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
    const entries = Object.entries(closure_1);
    const tmp27 = entries[Symbol.iterator]();
    while (tmp27 !== undefined) {
      let tmp4 = shouldUseReanimatedDetector;
      let tmp5 = shouldUseReanimatedDetector(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      let tmp8 = tmp7;
      let tmp9 = _require;
      let tmp10 = _require;
      let tmp11 = dependencyMap;
      let tmp12 = dependencyMap;
      let Reanimated = _require(5703).Reanimated;
      if (Reanimated.isSharedValue(tmp7)) {
        let tmp13 = tmp9;
        let tmp14 = tmp11;
        let Reanimated2 = tmp10(5703).Reanimated;
        let tmp15 = tmp7;
        let tmp16 = tmp6;
        let tmp17 = Reanimated2.runOnUI(fn)(tmp8, tmp6);
      }
      continue;
    }
  }
};
export const unbindSharedValues = function unbindSharedValues(closure_1, closure_2) {
  if (undefined !== _require(5703).Reanimated) {
    _require = closure_2 + c4;
    const _Object = Object;
    function _loop(iter) {
      const callback = iter;
      const Reanimated = callback(5703).Reanimated;
      if (Reanimated.isSharedValue(iter)) {
        if (typeof closure_1_3 !== "function") {
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
        const Reanimated2 = callback(5703).Reanimated;
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
      let tmp11 = callback;
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
      let tmp4 = tmp;
      if ("__workletHash" in tmp2) {
        let tmp3 = iter;
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