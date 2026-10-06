// === Module 12036: DiceRollBar ===

// Module 12036 (DiceRollBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import DiceRollStore from "DiceRollStore" /* 11586 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, set, set2;

let metroImportAll;
let metroImportDefault;
let obj2;
let View = react_native.View;
const useDiceRollState = DiceRollStore.useDiceRollState;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 300;
let obj = { animatedContainer: { overflow: "hidden" }, container: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
let closure_12 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
const __initData = { code: "function DiceRollBarTsx3(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
const __initData2 = { code: "function DiceRollBarTsx4(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let duration;
  let flag;
  let sharedValue1;
  let stateFromStores;
  let tmp6;
  let tmp7;
  let tmp = stateFromStores;
  let obj = stateFromStores(sharedValue1[8]);
  const cResult = obj.c(30);
  channelId = channelId.channelId;
  closure_10();
  const tmp5 = useDiceRollState(channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [flag];
    class D {
      constructor() {
        return flag.useReducedMotion;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = D;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(sharedValue1[9]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, D);
  const tmpResult4 = tmp(sharedValue1[10]);
  const sharedValue = tmpResult4.useSharedValue(0);
  const tmpResult5 = tmp(sharedValue1[10]);
  sharedValue1 = tmpResult5.useSharedValue(0);
  const tmpResult6 = tmp(sharedValue1[10]);
  const sharedValue2 = tmpResult6.useSharedValue(0);
  let closure_4 = tmp13;
  flag = undefined;
  if (tmp5 != null) {
    flag = tmp5.rolling;
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[2] === sharedValue) {
    if (cResult[3] === (null != tmp5 && !tmp5.dismissing)) {
      let tmp14;
      let tmp15;
      if (cResult[4] === sharedValue1) {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect = sharedValue2.useEffect(tmp14, tmp15);
      class D {
        constructor() {
          return flag.useReducedMotion;
        }
      }
      const fn = function w() {
        const tmp = flag;
        if (tmp) {
          if (!stateFromStores) {
            set = sharedValue2.set;
            const withRepeat = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const obj = { duration: 800, easing: ReanimatedRexport.Easing.linear };
            const withTiming = timing.withTiming;
            timing;
            const result = set(withRepeat(withTiming(360, obj), -1, false));
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
      let num = 0;
      set = sharedValue.set;
      if (closure_4) {
        num = 56;
      }
      const result = set(num);
      let num2 = 0;
      set2 = sharedValue1.set;
      if (closure_4) {
        num2 = 1;
      }
      set2(num2);
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
}) : ((channelId) => {
  let duration;
  let items3;
  let items4;
  let obj7;
  let stateFromStores;
  let sharedValue1;
  let flag;
  channelId = channelId.channelId;
  let tmp = closure_10();
  const tmp2 = useDiceRollState(channelId);
  const tmp3 = stateFromStores;
  let obj = stateFromStores(sharedValue1[9]);
  let items = [flag];
  stateFromStores = obj.useStateFromStores(items, () => flag.useReducedMotion);
  let obj2 = stateFromStores(sharedValue1[10]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[10]);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = stateFromStores(sharedValue1[10]);
  const sharedValue2 = obj4.useSharedValue(0);
  let closure_4 = tmp9;
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
    set = sharedValue.set;
    if (closure_4) {
      num = 56;
    }
    const result = set(num);
    let num2 = 0;
    set2 = sharedValue1.set;
    if (closure_4) {
      num2 = 1;
    }
    set2(num2);
  }, items1);
  const items2 = [flag, stateFromStores, sharedValue2];
  const effect1 = sharedValue2.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      if (!stateFromStores) {
        set = sharedValue2.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const obj = { duration: 800, easing: ReanimatedRexport.Easing.linear };
        const withTiming = timing.withTiming;
        timing;
        const result = set(withRepeat(withTiming(360, obj), -1, false));
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  const fn = function w() {
    let tmp10;
    const obj = { height: null, opacity: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      tmp10 = obj;
    } else {
      const withTiming = timing.withTiming;
      const obj2 = { duration, easing: native.DECELERATED_EASING };
      timing;
      const value = sharedValue.get();
      obj.height = withTiming(value, obj2);
      const withTiming2 = timing.withTiming;
      const obj3 = { duration, easing: native.DECELERATED_EASING };
      timing;
      const value2 = sharedValue1.get();
      obj.opacity = withTiming2(value2, obj3);
      tmp10 = obj;
    }
    return tmp10;
  };
  const tmp3Result = tmp3(sharedValue1[10]);
  fn.__closure = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: tmp3(sharedValue1[11]).withTiming, ANIMATION_DURATION_MS, DECELERATED_EASING: tmp3(sharedValue1[12]).DECELERATED_EASING };
  fn.__workletHash = 16638560059795;
  fn.__initData = __initData;
  ({ useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: tmp3(sharedValue1[11]).withTiming, ANIMATION_DURATION_MS, DECELERATED_EASING: tmp3(sharedValue1[12]).DECELERATED_EASING });
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  tmp3(sharedValue1[10]);
  const fn2 = function p() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue2.get() + "deg" }];
    ({ rotate: "" + sharedValue2.get() + "deg" });
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 13860284266724;
  fn2.__initData = __initData2;
  if (null == tmp2) {
    return null;
  } else {
    const tmp3Result4 = tmp3(sharedValue1[13]);
    const barText = tmp3Result4.getBarText(flag, tmp2.results);
    const obj6 = { style: items3, children: closure_8(closure_4, obj7) };
    items3 = [animatedStyle, tmp.animatedContainer];
    obj7 = { style: tmp.container, children: items4 };
    View = sharedValue(tmp4[10]).View;
    const obj8 = { style: tmp14, children: closure_7(tmp3(sharedValue1[14]).DiceIcon, { size: "md" }) };
    const View2 = sharedValue(tmp4[10]).View;
    items4 = [closure_7(View2, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: barText };
    items4[1] = closure_7(tmp3(sharedValue1[15]).Text, obj9);
    return closure_7(View, obj6);
  }
});
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default tmp3;