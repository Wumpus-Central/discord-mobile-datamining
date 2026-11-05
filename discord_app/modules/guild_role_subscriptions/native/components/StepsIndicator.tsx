// === Module 20305: components/StepsIndicator ===

// Module 20305 (components/StepsIndicator)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import Text_Text from "Text/Text" /* 5763 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

const _modDef1652 = _mod1652;

require = fn;
function StepNode(isCurrent) {
  isCurrent = isCurrent.isCurrent;
  c0 = isCurrent;
  c1 = undefined;
  ({ label, isDone, useReducedMotion } = isCurrent);
  let tmp = closure_7();
  let num = 0;
  if (isCurrent) {
    num = 1;
  }
  const sharedValue = _mod1652.useSharedValue(num);
  c1 = sharedValue;
  let num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  items = [closure_8, _mod1652.interpolate, sharedValue, timing_timing.withTiming, num2, _mod1652.Easing];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class StepsIndicatorTsx1 {
    constructor() {
      obj = { duration: closure_3, easing: null };
      tmp = closure_0(closure_1.get(), [0, 1], [0.4, 1]);
      obj.easing = closure_4.out(closure_4.ease);
      tmp2 = closure_2(tmp, obj);
      obj1 = { marginHorizontal: null, transform: null };
      obj4 = { duration: closure_3, easing: null };
      tmp3 = closure_0(closure_1.get(), [0, 1], [-2, 6]);
      obj4.easing = closure_4.out(closure_4.ease);
      obj1.marginHorizontal = closure_2(tmp3, obj4);
      items = [];
      items[0] = { scale: tmp2 };
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  StepsIndicatorTsx1.__closure = items1;
  StepsIndicatorTsx1.__workletHash = 3353878627962;
  StepsIndicatorTsx1.__initData = tmp5;
  const items2 = [sharedValue, isCurrent];
  const animatedStyle = _mod1652.useAnimatedStyle(StepsIndicatorTsx1);
  const effect = noop.useEffect(() => {
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = _undefined2.set(num);
  }, items2);
  if (!isDone) {
    if (!isCurrent) {
      let filledNode = tmp.emptyNode;
    }
    let obj2 = { style: null, children: null };
    const items3 = [tmp.node, animatedStyle, filledNode];
    obj2.style = items3;
    if (isCurrent) {
      let obj3 = { variant: "body-xs/semibold", color: "interactive-text-active", children: label };
      isCurrent = jsx(Text_Text.Text, { variant: "body-xs/semibold", color: "interactive-text-active", children: label });
    }
    obj2.children = isCurrent;
    return jsx(_modDef1652.View, { style: null, children: null });
  }
  filledNode = tmp.filledNode;
  const tmp2Result = _mod1652;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 }, filledNode: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" }, emptyNode: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
obj2.emptyNode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = { code: "(function StepsIndicatorTsx1(){let[interpolate,state,withTiming,duration,Easing]=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  current = current.current;
  const total = current.total;
  let stateFromStores;
  const tmp = closure_7();
  items = [AccessibilityStore];
  stateFromStores = current(stateFromStores[9]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [current, total, stateFromStores];
  const obj2 = {
    style: null,
    children: noop.useMemo(() => {
      let sum;
      items = [];
      let num = 0;
      if (0 < total) {
        do {
          sum = num + 1;
          let obj = { useReducedMotion: stateFromStores, isCurrent: sum === current, isDone: sum < current, label: sum };
          let arr = items.push(<StepNode key={num} useReducedMotion={stateFromStores} isCurrent={sum === current} isDone={sum < current} label={sum} />);
          num = sum;
        } while (sum < total);
      }
      return items;
    }, items1)
  };
  const items2 = [tmp.container, current.style];
  obj2.style = items2;
  return <View style={null}>{noop.useMemo(() => {
    let sum;
    items = [];
    let num = 0;
    if (0 < total) {
      do {
        sum = num + 1;
        let obj = { useReducedMotion: stateFromStores, isCurrent: sum === current, isDone: sum < current, label: sum };
        let arr = items.push(<StepNode key={num} useReducedMotion={stateFromStores} isCurrent={sum === current} isDone={sum < current} label={sum} />);
        num = sum;
      } while (sum < total);
    }
    return items;
  }, items1)}</View>;
};