// discord_app/modules/guild_role_subscriptions/native/components/StepsIndicator.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function StepNode(isCurrent) {
  let isDone;
  let label;
  let useReducedMotion;
  isCurrent = isCurrent.isCurrent;
  let sharedValue;
  let num2;
  ({ label, isDone, useReducedMotion } = isCurrent);
  const tmp = createCacheKey();
  let obj = isCurrent(num2[6]);
  let num = 0;
  if (isCurrent) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  const fn = function p() {
    let obj = isCurrent(num2[6]);
    let obj1 = isCurrent(num2[7]);
    obj = { duration: num2, easing: null };
    const Easing = isCurrent(num2[6]).Easing;
    obj[1] = Easing.out(isCurrent(num2[6]).Easing.ease);
    const interpolateResult = obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
    const withTimingResult = obj1.withTiming(obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]), obj);
    obj = { marginHorizontal: null, transform: null };
    const obj4 = isCurrent(num2[6]);
    const interpolateResult1 = isCurrent(num2[6]).interpolate(sharedValue.get(), [0, 1], [-2, 6]);
    obj1 = { duration: num2, easing: null };
    const Easing2 = isCurrent(num2[6]).Easing;
    obj1[1] = Easing2.out(isCurrent(num2[6]).Easing.ease);
    obj[0] = isCurrent(num2[7]).withTiming(interpolateResult1, obj1);
    const items = [{ scale: withTimingResult }];
    obj[1] = items;
    return obj;
  };
  obj = { interpolate: tmp2(tmp3[6]).interpolate, state: sharedValue, withTiming: tmp2(tmp3[7]).withTiming, duration: num2, Easing: tmp2(tmp3[6]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 4051275727555;
  fn.__initData = closure_8;
  let items = [sharedValue, isCurrent];
  const animatedStyle = isCurrent(num2[6]).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    let num = 0;
    if (isCurrent) {
      num = 1;
    }
    const result = sharedValue.set(num);
  }, items);
  if (!isDone) {
    if (!isCurrent) {
      let filledNode = tmp.emptyNode;
    }
    obj = { style: null, children: null };
    const items1 = [tmp.node, animatedStyle, filledNode];
    obj[0] = items1;
    if (isCurrent) {
      let obj1 = { variant: "heading-deprecated-12/extrabold", color: "interactive-text-active", children: null };
      obj1[2] = label;
      isCurrent = tmp7(tmp2(tmp3[8]).Text, obj1);
    }
    obj[1] = isCurrent;
    return jsx(sharedValue(tmp3[6]).View, { style: null, children: null });
  }
  filledNode = tmp.filledNode;
}
createCacheKey = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 }, filledNode: null, emptyNode: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}" };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  current = current.current;
  const total = current.total;
  let stateFromStores;
  let obj = current(stateFromStores[9]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [current, total, stateFromStores];
  obj = {
    style: items2,
    children: React.useMemo(() => {
      let sum;
      const items = [];
      let num = 0;
      if (0 < total) {
        do {
          sum = num + 1;
          let tmp2 = outer1_6;
          let tmp3 = outer1_9;
          let obj = { useReducedMotion: null, isCurrent: null, isDone: null, label: null };
          let tmp4 = stateFromStores;
          obj[0] = stateFromStores;
          let tmp5 = current;
          obj[1] = sum === current;
          obj[2] = sum < current;
          obj[3] = sum;
          let arr = items.push(outer1_6(outer1_9, obj, num));
          let tmp7 = total;
          num = sum;
        } while (sum < total);
      }
      return items;
    }, items1)
  };
  items2 = [createCacheKey().container, current.style];
  return <View style={items2}>{React.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < total) {
      do {
        sum = num + 1;
        let tmp2 = outer1_6;
        let tmp3 = outer1_9;
        let obj = { useReducedMotion: null, isCurrent: null, isDone: null, label: null };
        let tmp4 = stateFromStores;
        obj[0] = stateFromStores;
        let tmp5 = current;
        obj[1] = sum === current;
        obj[2] = sum < current;
        obj[3] = sum;
        let arr = items.push(outer1_6(outer1_9, obj, num));
        let tmp7 = total;
        num = sum;
      } while (sum < total);
    }
    return items;
  }, items1)}</View>;
};