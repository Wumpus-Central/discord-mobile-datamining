// discord_app/modules/dice_roll/native/DiceRollBar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const useDiceRollState = fn(11441).useDiceRollState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  animatedContainer: { overflow: "hidden" },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
    borderTopWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
};
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}",
};
const __initData2 = {
  code: 'function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+"deg"}]};}',
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let stateFromStores;
  let sharedValue1;
  let flag;
  const tmp = closure_9();
  const tmp2 = useDiceRollState(channelId.channelId);
  let items = [flag];
  stateFromStores = stateFromStores(sharedValue1[7]).useStateFromStores(items, () => flag.useReducedMotion);
  let obj = stateFromStores(sharedValue1[7]);
  const sharedValue = stateFromStores(sharedValue1[8]).useSharedValue(0);
  let obj2 = stateFromStores(sharedValue1[8]);
  sharedValue1 = stateFromStores(sharedValue1[8]).useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[8]);
  const sharedValue2 = stateFromStores(sharedValue1[8]).useSharedValue(0);
  closure_4 = tmp9;
  flag = undefined;
  if (tmp2 != null) {
    flag = tmp2.rolling;
  }
  if (flag == null) {
    flag = false;
  }
  const items1 = [null != tmp2 && !tmp2.dismissing, sharedValue, sharedValue1];
  const effect = sharedValue2.useEffect(() => {
    let num = 0;
    if (closure_4) {
      num = 56;
    }
    const result = sharedValue.set(num);
    let num2 = 0;
    if (closure_4) {
      num2 = 1;
    }
    const result1 = sharedValue1.set(num2);
  }, items1);
  const items2 = [flag, stateFromStores, sharedValue2];
  const effect1 = sharedValue2.useEffect(() => {
    if (flag) {
      if (!stateFromStores) {
        const obj = ReanimatedRexport;
        const obj3 = { duration: 800, easing: ReanimatedRexport.Easing.linear };
        const result = sharedValue2.set(obj.withRepeat(timing.withTiming(360, obj3), -1, false));
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  let obj4 = stateFromStores(sharedValue1[8]);
  const fn = function w() {
    const obj = { height: null, opacity: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      let tmp7 = obj;
    } else {
      const obj3 = { duration: 300, easing: null };
      value = sharedValue.get();
      obj3.easing = native.DECELERATED_EASING;
      obj.height = timing.withTiming(value, obj3);
      const obj5 = { duration: 300, easing: null };
      value2 = sharedValue1.get();
      obj5.easing = native.DECELERATED_EASING;
      obj.opacity = timing.withTiming(value2, obj5);
      tmp7 = obj;
    }
    return tmp7;
  };
  const tmp3Result = stateFromStores(sharedValue1[8]);
  fn.__closure = {
    useReducedMotion: stateFromStores,
    height: sharedValue,
    opacity: sharedValue1,
    withTiming: stateFromStores(sharedValue1[9]).withTiming,
    ANIMATION_DURATION_MS: 300,
    DECELERATED_EASING: stateFromStores(sharedValue1[10]).DECELERATED_EASING,
  };
  fn.__workletHash = 2405066513233;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  stateFromStores(sharedValue1[8]);
  const fn2 = function p() {
    const obj = { transform: null };
    const items = [{ rotate: "" + sharedValue2.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 12265072947874;
  fn2.__initData = __initData2;
  if (null == tmp2) {
    return null;
  } else {
    const barText = tmp3(tmp4[11]).getBarText(flag, tmp2.results);
    const obj6 = { style: null, children: null };
    const items3 = [animatedStyle, tmp.animatedContainer];
    obj6.style = items3;
    const obj7 = { style: tmp.container, children: null };
    const obj8 = { style: tmp14, children: closure_7(tmp3(tmp4[12]).DiceIcon, { size: "md" }) };
    const items4 = [closure_7(sharedValue(tmp4[8]).View, obj8)];
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: barText };
    items4[1] = closure_7(tmp3(tmp4[13]).Text, obj9);
    obj7.children = items4;
    obj6.children = closure_8(closure_4, obj7);
    return closure_7(sharedValue(tmp4[8]).View, obj6);
  }
  let obj5 = {
    useReducedMotion: stateFromStores,
    height: sharedValue,
    opacity: sharedValue1,
    withTiming: stateFromStores(sharedValue1[9]).withTiming,
    ANIMATION_DURATION_MS: 300,
    DECELERATED_EASING: stateFromStores(sharedValue1[10]).DECELERATED_EASING,
  };
}
