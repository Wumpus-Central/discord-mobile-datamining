// === Module 17771: components/StepsIndicator ===

// Module 17771 (components/StepsIndicator)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function StepNode(isCurrent) {
  isCurrent = isCurrent.isCurrent;
  let sharedValue;
  let num2;
  ({ label, isDone, useReducedMotion } = isCurrent);
  const tmp = closure_7();
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
    let obj1 = timing;
    let obj = { duration: num2, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const interpolateResult = obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
    const withTimingResult = obj1.withTiming(obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]), obj);
    obj = { marginHorizontal: null, transform: null };
    const interpolateResult1 = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [-2, 6]);
    obj1 = { duration: num2, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj1.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj.marginHorizontal = timing.withTiming(interpolateResult1, obj1);
    const items = [{ scale: withTimingResult }];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: tmp2(tmp3[6]).interpolate, state: sharedValue, withTiming: tmp2(tmp3[7]).withTiming, duration: num2, Easing: tmp2(tmp3[6]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 4051275727555;
  fn.__initData = __initData;
  let items = [sharedValue, isCurrent];
  const animatedStyle = isCurrent(num2[6]).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
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
    obj.style = items1;
    if (isCurrent) {
      let obj1 = { variant: "heading-deprecated-12/extrabold", color: "interactive-text-active", children: label };
      isCurrent = tmp7(tmp2(tmp3[8]).Text, obj1);
    }
    obj.children = isCurrent;
    return jsx(sharedValue(tmp3[6]).View, { style: null, children: null });
  }
  filledNode = tmp.filledNode;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 }, filledNode: null, emptyNode: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
createStyles.filledNode = createStyles;
createStyles.emptyNode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles.createStyles(createStyles);
const __initData = { code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  current = current.current;
  const total = current.total;
  let stateFromStores;
  let obj = current(stateFromStores[9]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [current, total, stateFromStores];
  obj = {
    style: null,
    children: noop.useMemo(() => {
      let sum;
      const items = [];
      let num = 0;
      if (0 < total) {
        do {
          sum = num + 1;
          let obj = { useReducedMotion: null, isCurrent: null, isDone: null, label: null };
          obj.useReducedMotion = stateFromStores;
          obj.isCurrent = sum === current;
          obj.isDone = sum < current;
          obj.label = sum;
          let arr = items.push(<StepNode key={num} useReducedMotion={null} isCurrent={null} isDone={null} label={null} />);
          num = sum;
        } while (sum < total);
      }
      return items;
    }, items1)
  };
  const items2 = [closure_7().container, current.style];
  obj.style = items2;
  return <View style={null}>{noop.useMemo(() => {
    let sum;
    const items = [];
    let num = 0;
    if (0 < total) {
      do {
        sum = num + 1;
        let obj = { useReducedMotion: null, isCurrent: null, isDone: null, label: null };
        obj.useReducedMotion = stateFromStores;
        obj.isCurrent = sum === current;
        obj.isDone = sum < current;
        obj.label = sum;
        let arr = items.push(<StepNode key={num} useReducedMotion={null} isCurrent={null} isDone={null} label={null} />);
        num = sum;
      } while (sum < total);
    }
    return items;
  }, items1)}</View>;
};