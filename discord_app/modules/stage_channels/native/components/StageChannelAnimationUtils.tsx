// === Module 10125: useStageActionBarAnimation ===

// Module 10125 (useStageActionBarAnimation)
import set from "set" /* 2 */;
import _mod4217 from "module_4217" /* 4217 */;

let obj = { duration: 250, easing: null };
const Easing = _mod4217.Easing;
obj[1] = Easing.bezier(0.66, 0, 0.2, 1);
let closure_4 = { code: "function StageChannelAnimationUtilsTsx1(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}" };
let closure_5 = { code: "function StageChannelAnimationUtilsTsx2(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}" };
const result = set.fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export const useStageActionBarAnimation = function useStageActionBarAnimation(channelId, controlPadding) {
  const _require = controlPadding;
  const tmp = importDefault(getActionBarHeight[1])();
  importDefault = tmp;
  obj = _require(getActionBarHeight[2]);
  getActionBarHeight = obj.useGetActionBarHeight(channelId);
  const top = importDefault(getActionBarHeight[3])().top;
  class A {
    constructor() {
      if (closure_1) {
        tmp2 = closure_2;
        num = 10;
        tmp3 = top;
        sum = closure_2 + 10 + top;
      } else {
        sum = closure_0;
      }
      return sum;
    }
  }
  A.__closure = { isInvited: tmp, actionBarHeight: getActionBarHeight, ACTION_BAR_SAFE_AREA_PADDING: 10, safeAreaTop: top, controlPadding };
  A.__workletHash = 2568370943746;
  A.__initData = derivedValue;
  derivedValue = _require(getActionBarHeight[0]).useDerivedValue(A);
  const obj2 = _require(getActionBarHeight[0]);
  const fn = function c() {
    obj = { paddingTop: controlPadding(getActionBarHeight[4]).withTiming(derivedValue.get(), top) };
    return obj;
  };
  obj = { withTiming: _require(getActionBarHeight[4]).withTiming, paddingTop: derivedValue, TIMING_CONFIG: top };
  fn.__closure = obj;
  fn.__workletHash = 16816216105718;
  fn.__initData = closure_5;
  return _require(getActionBarHeight[0]).useAnimatedStyle(fn);
};