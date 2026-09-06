// === Module 12383: DiceRollBar ===

// Module 12383 (DiceRollBar)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const useDiceRollState = fn(11959).useDiceRollState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { animatedContainer: { overflow: "hidden" }, container: null };
createStyles = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.container = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const __initData = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
const __initData2 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let stateFromStores;
  let sharedValue1;
  let flag;
  const tmp = closure_9();
  const tmp2 = useDiceRollState(channelId.channelId);
  let obj = stateFromStores(sharedValue1[7]);
  let items = [flag];
  stateFromStores = obj.useStateFromStores(items, () => flag.useReducedMotion);
  let obj1 = stateFromStores(sharedValue1[8]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = stateFromStores(sharedValue1[8]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[8]);
  const sharedValue2 = obj3.useSharedValue(0);
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
        const obj = { duration: 800, easing: ReanimatedRexport.Easing.linear };
        const result = sharedValue2.set(obj.withRepeat(timing.withTiming(360, obj), -1, false));
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  let tmp3Result = tmp3(tmp4[8]);
  const fn = function w() {
    let obj = { height: null, opacity: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      let tmp7 = obj;
    } else {
      obj = { duration: 300, easing: null };
      value = sharedValue.get();
      obj.easing = native.DECELERATED_EASING;
      obj.height = timing.withTiming(value, obj);
      obj = { duration: 300, easing: null };
      value = sharedValue1.get();
      obj.easing = native.DECELERATED_EASING;
      obj.opacity = timing.withTiming(value, obj);
      tmp7 = obj;
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: tmp3(tmp4[9]).withTiming, ANIMATION_DURATION_MS: 300, DECELERATED_EASING: tmp3(tmp4[10]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 2405066513233;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  tmp3Result = tmp3(tmp4[8]);
  const fn2 = function p() {
    let obj = { transform: null };
    obj = { rotate: "" + sharedValue2.get() + "deg" };
    const items = [obj];
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
    obj = { style: null, children: null };
    const items3 = [animatedStyle, tmp.animatedContainer];
    obj.style = items3;
    obj1 = { style: tmp.container, children: null };
    obj2 = { style: tmp14, children: closure_7(tmp3(tmp4[12]).DiceIcon, { size: "md" }) };
    const items4 = [closure_7(sharedValue(tmp4[8]).View, obj2), ];
    obj3 = { variant: "text-sm/normal", color: "text-default", children: barText };
    items4[1] = closure_7(tmp3(tmp4[13]).Text, obj3);
    obj1.children = items4;
    obj.children = closure_8(closure_4, obj1);
    return closure_7(sharedValue(tmp4[8]).View, obj);
  }
};