// === Module 12090: DiceRollBar ===

// Module 12090 (DiceRollBar)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
const View = fn(17).View;
const useDiceRollState = fn(11631).useDiceRollState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 300;
const createStyles = fn(5092);
let obj2 = { animatedContainer: { overflow: "hidden" }, container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
let closure_12 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
const __initData = { code: "function DiceRollBarTsx3(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
const __initData2 = { code: "function DiceRollBarTsx4(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DiceRollBar(channelId) {
  const cResult = stateFromStores(sharedValue1[8]).c(30);
  closure_10();
  const tmp5 = useDiceRollState(channelId.channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [flag];
    class D {
      constructor() {
        return c5.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = D;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = stateFromStores(sharedValue1[8]);
  stateFromStores = stateFromStores(sharedValue1[9]).useStateFromStores(tmp6, D);
  const tmpResult = stateFromStores(sharedValue1[9]);
  const sharedValue = stateFromStores(sharedValue1[10]).useSharedValue(0);
  const tmpResult4 = stateFromStores(sharedValue1[10]);
  sharedValue1 = stateFromStores(sharedValue1[10]).useSharedValue(0);
  const tmpResult5 = stateFromStores(sharedValue1[10]);
  const sharedValue2 = stateFromStores(sharedValue1[10]).useSharedValue(0);
  closure_4 = tmp13;
  flag = undefined;
  if (tmp5 != null) {
    flag = tmp5.rolling;
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[2] === sharedValue) {
    if (cResult[3] === tmp13) {
      if (cResult[4] === sharedValue1) {
        let tmp14 = cResult[5];
        let tmp15 = cResult[6];
      }
      const effect = sharedValue2.useEffect(tmp14, tmp15);
      class D {
        constructor() {
          return c5.useReducedMotion;
        }
      }
      const fn = function w() {
        if (flag) {
          if (!stateFromStores) {
            const obj = ReanimatedRexport;
            const obj3 = { duration: 800, easing: ReanimatedRexport.Easing.linear };
            const result = sharedValue2.set(obj.withRepeat(timing.withTiming(360, obj3), -1, false));
          }
        }
        const result1 = sharedValue2.set(0);
      };
      const items1 = [flag, stateFromStores, sharedValue2];
      cResult[7] = flag;
      cResult[8] = sharedValue2;
      cResult[9] = stateFromStores;
      cResult[10] = fn;
      cResult[11] = items1;
    }
  }
  class N {
    constructor() {
      num = 0;
      tmp = closure_1;
      tmp2 = closure_4;
      if (closure_4) {
        num = 56;
      }
      result = closure_1.set(num);
      num2 = 0;
      tmp4 = closure_2;
      if (tmp2) {
        num2 = 1;
      }
      result1 = closure_2.set(num2);
      return;
    }
  }
  const items2 = [null != tmp5 && !tmp5.dismissing, sharedValue, sharedValue1];
  cResult[2] = sharedValue;
  cResult[3] = null != tmp5 && !tmp5.dismissing;
  cResult[4] = sharedValue1;
  cResult[5] = N;
  cResult[6] = items2;
  tmp15 = items2;
  tmp14 = N;
  const tmpResult6 = stateFromStores(sharedValue1[10]);
}) : (function DiceRollBar(channelId) {
  let stateFromStores;
  let sharedValue1;
  let flag;
  const tmp = closure_10();
  const tmp2 = useDiceRollState(channelId.channelId);
  let items = [flag];
  stateFromStores = stateFromStores(sharedValue1[9]).useStateFromStores(items, () => flag.useReducedMotion);
  let obj = stateFromStores(sharedValue1[9]);
  const sharedValue = stateFromStores(sharedValue1[10]).useSharedValue(0);
  let obj2 = stateFromStores(sharedValue1[10]);
  sharedValue1 = stateFromStores(sharedValue1[10]).useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[10]);
  const sharedValue2 = stateFromStores(sharedValue1[10]).useSharedValue(0);
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
  let obj4 = stateFromStores(sharedValue1[10]);
  const fn = function w() {
    const obj = { height: null, opacity: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      let tmp8 = obj;
    } else {
      const obj3 = { duration, easing: null };
      value = sharedValue.get();
      obj3.easing = native.DECELERATED_EASING;
      obj.height = timing.withTiming(value, obj3);
      const obj5 = { duration, easing: null };
      value2 = sharedValue1.get();
      obj5.easing = native.DECELERATED_EASING;
      obj.opacity = timing.withTiming(value2, obj5);
      tmp8 = obj;
    }
    return tmp8;
  };
  const tmp3Result = stateFromStores(sharedValue1[10]);
  fn.__closure = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: stateFromStores(sharedValue1[11]).withTiming, ANIMATION_DURATION_MS, DECELERATED_EASING: stateFromStores(sharedValue1[12]).DECELERATED_EASING };
  fn.__workletHash = 16638560059795;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  stateFromStores(sharedValue1[10]);
  const fn2 = function p() {
    const obj = { transform: null };
    const items = [{ rotate: "" + sharedValue2.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 13860284266724;
  fn2.__initData = __initData2;
  if (null == tmp2) {
    return null;
  } else {
    const barText = tmp3(tmp4[13]).getBarText(flag, tmp2.results);
    const obj6 = { style: null, children: null };
    const items3 = [animatedStyle, tmp.animatedContainer];
    obj6.style = items3;
    const obj7 = { style: tmp.container, children: null };
    const obj8 = { style: tmp14, children: closure_7(tmp3(tmp4[14]).DiceIcon, { size: "md" }) };
    const items4 = [closure_7(sharedValue(tmp4[10]).View, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: barText };
    items4[1] = closure_7(tmp3(tmp4[15]).Text, obj9);
    obj7.children = items4;
    obj6.children = closure_8(closure_4, obj7);
    return closure_7(sharedValue(tmp4[10]).View, obj6);
  }
  let obj5 = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: stateFromStores(sharedValue1[11]).withTiming, ANIMATION_DURATION_MS, DECELERATED_EASING: stateFromStores(sharedValue1[12]).DECELERATED_EASING };
});