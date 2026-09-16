// discord_app/modules/guild_role_subscriptions/native/components/StepsIndicator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function StepNode(isCurrent) {
  isCurrent = isCurrent.isCurrent;
  let sharedValue;
  let num2;
  ({ label, isDone, useReducedMotion } = isCurrent);
  const tmp = closure_7();
  let num = 0;
  if (isCurrent) {
    num = 1;
  }
  sharedValue = isCurrent(num2[6]).useSharedValue(num);
  num2 = 180;
  if (useReducedMotion) {
    num2 = 0;
  }
  let obj = isCurrent(num2[6]);
  const fn = function p() {
    const interpolateResult = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
    const obj3 = { duration: num2, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const withTimingResult = timing.withTiming(interpolateResult, obj3);
    const obj5 = { marginHorizontal: null, transform: null };
    const interpolateResult1 = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [-2, 6]);
    const obj7 = { duration: num2, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj7.easing = Easing2.out(ReanimatedRexport.Easing.ease);
    obj5.marginHorizontal = timing.withTiming(interpolateResult1, obj7);
    const items = [{ scale: withTimingResult }];
    obj5.transform = items;
    return obj5;
  };
  const tmp2Result = isCurrent(num2[6]);
  fn.__closure = {
    interpolate: isCurrent(num2[6]).interpolate,
    state: sharedValue,
    withTiming: isCurrent(num2[7]).withTiming,
    duration: num2,
    Easing: isCurrent(num2[6]).Easing,
  };
  fn.__workletHash = 4051275727555;
  fn.__initData = __initData;
  let items = [sharedValue, isCurrent];
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
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
    let obj3 = { style: null, children: null };
    const items1 = [tmp.node, animatedStyle, filledNode];
    obj3.style = items1;
    if (isCurrent) {
      let obj4 = { variant: "heading-deprecated-12/extrabold", color: "interactive-text-active", children: label };
      isCurrent = jsx(tmp2(tmp3[8]).Text, {
        variant: "heading-deprecated-12/extrabold",
        color: "interactive-text-active",
        children: label,
      });
    }
    obj3.children = isCurrent;
    return jsx(sharedValue(tmp3[6]).View, { style: null, children: null });
  }
  filledNode = tmp.filledNode;
  let obj2 = {
    interpolate: isCurrent(num2[6]).interpolate,
    state: sharedValue,
    withTiming: isCurrent(num2[7]).withTiming,
    duration: num2,
    Easing: isCurrent(num2[6]).Easing,
  };
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 },
  filledNode: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyNode: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
obj2.emptyNode = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default function StepsIndicator(current) {
  current = current.current;
  const total = current.total;
  let stateFromStores;
  const tmp = closure_7();
  let items = [AccessibilityStore];
  stateFromStores = current(stateFromStores[9]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [current, total, stateFromStores];
  const obj2 = {
    style: null,
    children: noop.useMemo(() => {
      let sum;
      const items = [];
      let num = 0;
      if (0 < total) {
        do {
          sum = num + 1;
          let obj = {
            useReducedMotion: stateFromStores,
            isCurrent: sum === current,
            isDone: sum < current,
            label: sum,
          };
          let arr = items.push(
            <StepNode
              key={num}
              useReducedMotion={stateFromStores}
              isCurrent={sum === current}
              isDone={sum < current}
              label={sum}
            />,
          );
          num = sum;
        } while (sum < total);
      }
      return items;
    }, items1),
  };
  const items2 = [tmp.container, current.style];
  obj2.style = items2;
  return (
    <View style={null}>
      {noop.useMemo(() => {
        let sum;
        const items = [];
        let num = 0;
        if (0 < total) {
          do {
            sum = num + 1;
            let obj = {
              useReducedMotion: stateFromStores,
              isCurrent: sum === current,
              isDone: sum < current,
              label: sum,
            };
            let arr = items.push(
              <StepNode
                key={num}
                useReducedMotion={stateFromStores}
                isCurrent={sum === current}
                isDone={sum < current}
                label={sum}
              />,
            );
            num = sum;
          } while (sum < total);
        }
        return items;
      }, items1)}
    </View>
  );
}
