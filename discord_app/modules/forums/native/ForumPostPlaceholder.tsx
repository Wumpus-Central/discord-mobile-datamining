// discord_app/modules/forums/native/ForumPostPlaceholder.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj = { postPlaceholder: { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = {
  code: "(function ForumPostPlaceholderTsx1(){let[reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig]=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};})",
};
let obj3 = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default noop.memo(function ForumPostPlaceholder() {
  const tmp = closure_7();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined4.useReducedMotion);
  const items1 = [
    closure_8,
    stateFromStores,
    0.55,
    _mod1652.withDelay,
    1000,
    _mod1652.withRepeat,
    _mod1652.withSequence,
    timing_timing.withTiming,
    _slicedToArray(
      noop.useState(() => {
        const obj = { timingConfig: null };
        const obj2 = { duration: 1000 + 500 * Math.random(), easing: null };
        const Easing = _undefined(_undefined2[7]).Easing;
        obj2.easing = Easing.inOut(_undefined(_undefined2[7]).Easing.sin);
        obj.timingConfig = obj2;
        return obj;
      }),
      1,
    )[0].timingConfig,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class ForumPostPlaceholderTsx1 {
    constructor() {
      obj = { opacity: null };
      if (closure_0) {
        tmp10 = closure_1;
        obj.opacity = closure_1;
        tmp9 = obj;
      } else {
        tmp = closure_2;
        tmp2 = closure_3;
        tmp3 = closure_4;
        tmp4 = closure_5;
        tmp5 = closure_6;
        tmp6 = closure_1;
        tmp7 = closure_7;
        num = 1;
        tmp8 = closure_6(closure_1, closure_7);
        flag = true;
        num2 = -1;
        obj.opacity = closure_2(closure_3, closure_4(closure_5(tmp8, closure_6(1, closure_7)), -1, true));
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  ForumPostPlaceholderTsx1.__closure = items2;
  ForumPostPlaceholderTsx1.__workletHash = 3389663500091;
  ForumPostPlaceholderTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(ForumPostPlaceholderTsx1);
  const obj3 = {
    style: animatedStyle,
    pointerEvents: "none",
    children: jsx(Card.Card, { variant: "secondary", style: tmp.postPlaceholder }),
  };
  return jsx(_modDef1652.View, {
    style: animatedStyle,
    pointerEvents: "none",
    children: jsx(Card.Card, { variant: "secondary", style: tmp.postPlaceholder }),
  });
});
