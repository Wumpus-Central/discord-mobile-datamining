// discord_app/modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let closure_7 = createStyles.createStyles({ content: { width: "100%" } });
let closure_8 = {
  code: "(function FadeOutLottieAnimationTsx1(finished){let[scheduleOnRN,setIsFadeOut]=this.__closure;if(finished)scheduleOnRN(setIsFadeOut,false);})",
};
let closure_9 = {
  code: "(function FadeOutLottieAnimationTsx2(){let[isAnimationComplete,isFadeOut,withTiming,_worklet_16247045492721_init_data,scheduleOnRN,setIsFadeOut]=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function FadeOutLottieAnimationTsx1Factory([_worklet_16247045492721_init_data,scheduleOnRN,setIsFadeOut]){const FadeOutLottieAnimationTsx1=function(finished){if(finished)scheduleOnRN(setIsFadeOut,false);};FadeOutLottieAnimationTsx1.__closure=[scheduleOnRN,setIsFadeOut];FadeOutLottieAnimationTsx1.__workletHash=16247045492721;FadeOutLottieAnimationTsx1.__initData=_worklet_16247045492721_init_data;return FadeOutLottieAnimationTsx1;}([_worklet_16247045492721_init_data,scheduleOnRN,setIsFadeOut]))};}return{opacity:0};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  _require = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.assign({ onComplete: 0 }));
  const tmp2 = closure_7();
  [tmp4, c1] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(true), 2);
  const first = tmp5[0];
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  items = [c5];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined4.useReducedMotion);
  const effect = noop.useEffect(() => {
    _undefined2(false);
  }, []);
  require("../../../../../_runtime/metro/01652__.js");
  let items1 = [
    closure_9,
    tmp4,
    first,
    require("timing/timing").withTiming,
    closure_8,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    tmp5[1],
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
  class FadeOutLottieAnimationTsx2 {
    constructor() {
      if (closure_0) {
        tmp = closure_1;
        if (closure_1) {
          tmp2 = closure_3;
          items = [, ,];
          items[0] = closure_3;
          tmp3 = closure_4;
          items[1] = closure_4;
          tmp4 = closure_5;
          items[2] = closure_5;
          tmp5 = items;
          [tmp6, tmp7, tmp8] = items;
          obj1 = { opacity: null };
          class FadeOutLottieAnimationTsx1 {
            constructor(arg0) {
              if (onComplete) {
                tmp = closure_0;
                tmp2 = closure_1;
                flag = false;
                tmp3 = closure_0(closure_1, false);
              }
              return;
            }
          }
          items1 = [,];
          items1[0] = tmp7;
          items1[1] = tmp8;
          FadeOutLottieAnimationTsx1.__closure = items1;
          num = 16247045492721;
          FadeOutLottieAnimationTsx1.__workletHash = 16247045492721;
          FadeOutLottieAnimationTsx1.__initData = tmp6;
          str = "respect-motion-settings";
          num2 = 0;
          tmp9 = FadeOutLottieAnimationTsx1;
          obj1.opacity = closure_2(0, { duration: 300 }, "respect-motion-settings", FadeOutLottieAnimationTsx1);
          obj = obj1;
        } else {
          obj = { opacity: 0 };
        }
        tmp10 = obj;
      } else {
        return { opacity: 1 };
      }
      return;
    }
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  FadeOutLottieAnimationTsx2.__closure = items2;
  FadeOutLottieAnimationTsx2.__workletHash = 15919475449507;
  FadeOutLottieAnimationTsx2.__initData = tmp11;
  if (!tmp4) {
    let obj2 = { style: tmp18, children: null };
    const obj3 = { style: tmp2.content, speed: null, onAnimationFinish: null };
    let num = 1;
    if (stateFromStores) {
      num = 0.5;
    }
    obj3.speed = num;
    obj3.onAnimationFinish = function onAnimationFinish(isCancelled) {
      if (c0 != null) {
        tmp(isCancelled);
      }
      _undefined2(true);
    };
    const merged1 = Object.assign(merged);
    obj2.children = jsx(LottieAnimationViewDefault, { style: tmp2.content, speed: null, onAnimationFinish: null });
    let tmp20Result = jsx(_modDef1652.View, { style: tmp18, children: null });
  } else {
    tmp20Result = null;
  }
  return tmp20Result;
}
