// _runtime/05483_reanimatedUtils.js
import reanimatedWrapper from "05469_reanimatedWrapper.js";
import allowedNativeProps from "05484_allowedNativeProps.js";
import _mod5493 from "metro/05493__.js";
import _slicedToArray from "metro/00032__.js";

const require = globalThis.__r;

require = fn;
let items = [
  {
    code: "(function hash_Pnpm_reanimatedUtilsTs1(str){const len=str.length;let h=5381;for(let i=0;i<len;i++){h=h*33^str.charCodeAt(i);}return h>>>0;})",
  },
];
[tmp2] = items;
function hash(str) {
  let num = 5381;
  let num2 = 0;
  let num3 = 5381;
  if (0 < str.length) {
    do {
      num = (33 * num) ^ str.charCodeAt(num2);
      num2 = num2 + 1;
      num3 = num;
    } while (num2 < length);
  }
  return num3 >>> 0;
}
hash.__workletHash = 16019670961817;
hash.__initData = tmp2;
let c4 = 1.618;
let closure_5 = fn(5470).NativeProxy.updateGestureHandlerConfig;
let closure_6 = {
  code: "(function pnpm_reanimatedUtilsTs2(sharedValue,configKey){let[hash,baseListenerId,updateGestureHandlerConfig,handlerTag,shouldUseReanimatedDetector]=this.__closure;const keyHash=hash(configKey);const listenerId=baseListenerId+keyHash;sharedValue.addListener(listenerId,function(value){updateGestureHandlerConfig(handlerTag,configKey==='runOnJS'?{dispatchesReanimatedEvents:shouldUseReanimatedDetector&&!value}:{[configKey]:value});});})",
};
let closure_7 = {
  code: "(function pnpm_reanimatedUtilsTs3(){let[maybeSharedValue,listenerId]=this.__closure;maybeSharedValue.removeListener(listenerId);})",
};
let items1 = [
  {
    code: "(function maybeUnpackValue_Pnpm_reanimatedUtilsTs4(v){let[Reanimated]=this.__closure;var _Reanimated;return(_Reanimated=Reanimated)!==null&&_Reanimated!==void 0&&_Reanimated.isSharedValue(v)?v.value:v;})",
  },
  fn(5469).Reanimated,
];
let closure_129_0;
[tmp3, tmp4] = items1;
function maybeUnpackValue(enabled) {
  let isSharedValueResult;
  if (require != null) {
    isSharedValueResult = require.isSharedValue(enabled);
  }
  value = enabled;
  if (isSharedValueResult) {
    value = enabled.value;
  }
  return value;
}
const items2 = [tmp4];
maybeUnpackValue.__closure = items2;
maybeUnpackValue.__workletHash = 12365350526152;
maybeUnpackValue.__initData = tmp3;
function getEnabledSharedValues(c0) {
  if (undefined === reanimatedWrapper.Reanimated) {
    return [];
  } else {
    if (tmpResult.isComposedGesture(_require)) {
      const gestures = _require.gestures;
      return gestures.flatMap(getEnabledSharedValues);
    } else {
      const enabled = _require.config.enabled;
      const Reanimated = reanimatedWrapper.Reanimated;
      if (Reanimated.isSharedValue(enabled)) {
        items = [enabled];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
    tmpResult = _mod5493;
  }
}

export const SHARED_VALUE_OFFSET = 1.618;
export function bindSharedValues(shouldUseReanimatedDetector, arg1) {
  if (undefined !== reanimatedWrapper.Reanimated) {
    items = [closure_6, hash, arg1 + c4, closure_5, arg1, shouldUseReanimatedDetector.shouldUseReanimatedDetector];
    const _Object = Object;
    const entries = Object.entries(shouldUseReanimatedDetector);
    const tmp28 = entries[Symbol.iterator]();
    while (tmp28 !== undefined) {
      let tmp5 = _slicedToArray(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      let Reanimated = reanimatedWrapper.Reanimated;
      if (Reanimated.isSharedValue(tmp7)) {
        let Reanimated2 = reanimatedWrapper.Reanimated;
        let tmp17 = Reanimated2.runOnUI(tmp24)(tmp7, tmp6);
      }
      continue;
    }
    tmp24 = (function pnpm_reanimatedUtilsTs2Factory(items) {
      [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
      function pnpm_reanimatedUtilsTs2(addListener, arg1) {
        closure_0 = arg1;
        addListener.addListener(closure_1 + closure_0(arg1), (arg0) => {
          if ("runOnJS" === closure_0) {
            let tmp4 = closure_2_4;
            if (closure_2_4) {
              tmp4 = !arg0;
            }
            const obj2 = { dispatchesReanimatedEvents: tmp4 };
            let obj = obj2;
          } else {
            obj = {};
            obj[tmp3] = arg0;
          }
          closure_2_2(closure_2_3, obj);
        });
      }
      items = [tmp2, tmp3, tmp4, tmp5, tmp6];
      pnpm_reanimatedUtilsTs2.__closure = items;
      pnpm_reanimatedUtilsTs2.__workletHash = 57681744503;
      pnpm_reanimatedUtilsTs2.__initData = tmp;
      return pnpm_reanimatedUtilsTs2;
    })(items);
  }
}
export function unbindSharedValues(dependencyMap, handlerTag) {
  if (undefined !== require("reanimatedWrapper").Reanimated) {
    _require = handlerTag + c4;
    const _Object = Object;
    function _loop(iter) {
      const Reanimated = reanimatedWrapper.Reanimated;
      if (Reanimated.isSharedValue(iter)) {
        if (typeof hash === "function") {
          let num3 = 5381;
          let num6 = 0;
          let num7 = 5381;
          if (0 < closure_1.length) {
            do {
              num3 = (33 * num3) ^ closure_1.charCodeAt(num6);
              num6 = num6 + 1;
              num7 = num3;
            } while (num6 < length);
          }
          const Reanimated2 = reanimatedWrapper.Reanimated;
          items = [closure_7, iter, _undefined + (num7 >>> 0)];
          c0 = undefined;
          c1 = undefined;
          [tmp7, tmp8, tmp9] = items;
          function pnpm_reanimatedUtilsTs3() {
            _undefined.removeListener(c1);
          }
          const items1 = [tmp8, tmp9];
          pnpm_reanimatedUtilsTs3.__closure = items1;
          pnpm_reanimatedUtilsTs3.__workletHash = 1558258493200;
          pnpm_reanimatedUtilsTs3.__initData = tmp7;
          Reanimated2.runOnUI(pnpm_reanimatedUtilsTs3)();
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
}
export function hasWorkletEventHandlers(useAnimated) {
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
}
export { maybeUnpackValue };
export { getEnabledSharedValues };
