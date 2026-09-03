// === Module 12181: DiceRollBar ===

// Module 12181 (DiceRollBar)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { useDiceRollState } from "INITIAL_STATE" /* 11760 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { animatedContainer: { overflow: "hidden" }, container: null };
createCacheKey = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
let closure_11 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
let result = require("set").fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let stateFromStores;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  closure_4 = undefined;
  let flag;
  const tmp = callback3();
  const tmp2 = useDiceRollState(channelId.channelId);
  let obj = stateFromStores(sharedValue1[7]);
  let items = [flag];
  stateFromStores = obj.useStateFromStores(items, () => flag.useReducedMotion);
  obj1 = stateFromStores(sharedValue1[8]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = stateFromStores(sharedValue1[8]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[8]);
  sharedValue2 = obj3.useSharedValue(0);
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
        let obj = stateFromStores(sharedValue1[8]);
        obj = { duration: 800, easing: null };
        obj[1] = stateFromStores(sharedValue1[8]).Easing.linear;
        const result = sharedValue2.set(obj.withRepeat(stateFromStores(sharedValue1[9]).withTiming(360, obj), -1, false));
        const obj2 = stateFromStores(sharedValue1[9]);
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  let tmp3Result = tmp3(tmp4[8]);
  const fn = function w() {
    let obj = { height: null, opacity: null };
    if (stateFromStores) {
      obj[0] = sharedValue.get();
      obj[1] = sharedValue1.get();
      let tmp7 = obj;
    } else {
      obj = { duration: 300, easing: null };
      let value = sharedValue.get();
      obj[1] = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
      obj[0] = stateFromStores(sharedValue1[9]).withTiming(value, obj);
      const obj2 = stateFromStores(sharedValue1[9]);
      obj = { duration: 300, easing: null };
      value = sharedValue1.get();
      obj[1] = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
      obj[1] = stateFromStores(sharedValue1[9]).withTiming(value, obj);
      tmp7 = obj;
      const obj4 = stateFromStores(sharedValue1[9]);
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: tmp3(tmp4[9]).withTiming, ANIMATION_DURATION_MS: 300, DECELERATED_EASING: tmp3(tmp4[10]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 2405066513233;
  fn.__initData = closure_10;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  tmp3Result = tmp3(tmp4[8]);
  const fn2 = function p() {
    let obj = { transform: null };
    obj = { rotate: "" + sharedValue2.get() + "deg" };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 12265072947874;
  fn2.__initData = closure_11;
  if (null == tmp2) {
    return null;
  } else {
    const barText = tmp3(tmp4[11]).getBarText(flag, tmp2.results);
    obj = { style: null, children: null };
    const items3 = [animatedStyle, tmp.animatedContainer];
    obj[0] = items3;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    obj2 = { style: null, children: null };
    obj2[0] = tmp14;
    obj2[1] = callback(tmp3(tmp4[12]).DiceIcon, { size: "md" });
    const items4 = [callback(sharedValue(tmp4[8]).View, obj2), ];
    obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
    obj3[2] = barText;
    items4[1] = callback(tmp3(tmp4[13]).Text, obj3);
    obj1[1] = items4;
    obj[1] = callback2(closure_4, obj1);
    return callback(sharedValue(tmp4[8]).View, obj);
  }
};