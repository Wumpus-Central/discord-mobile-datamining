// discord_app/modules/guild_role_subscriptions/native/components/StepsIndicator.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
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
  code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[0.4,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}",
};
const __initData2 = {
  code: "function StepsIndicatorTsx2(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}",
};
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StepNode(arg0) {
      const cResult = isCurrent(num2[7]).c(14);
      ({ label, isCurrent } = arg0);
      ({ isDone, useReducedMotion } = arg0);
      const tmp4 = closure_7();
      let obj = isCurrent(num2[7]);
      let num = 0;
      if (isCurrent) {
        num = 1;
      }
      const sharedValue = isCurrent(num2[8]).useSharedValue(num);
      num2 = 180;
      if (useReducedMotion) {
        num2 = 0;
      }
      let obj2 = isCurrent(num2[8]);
      const fn = function i() {
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
      const tmpResult = isCurrent(num2[8]);
      fn.__closure = {
        interpolate: isCurrent(num2[8]).interpolate,
        state: sharedValue,
        withTiming: isCurrent(num2[9]).withTiming,
        duration: num2,
        Easing: isCurrent(num2[8]).Easing,
      };
      fn.__workletHash = 15717385942716;
      fn.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[0] === isCurrent) {
        if (cResult[1] === sharedValue) {
          let tmp7 = cResult[2];
          let tmp8 = cResult[3];
        }
        const effect = noop.useEffect(tmp7, tmp8);
        if (!isDone) {
          if (!isCurrent) {
            let filledNode = tmp4.emptyNode;
          }
          if (cResult[4] === animatedStyle) {
            if (cResult[5] === filledNode) {
              if (cResult[6] === tmp4.node) {
                let tmp11 = cResult[7];
              }
              if (cResult[8] === isCurrent) {
                if (cResult[9] === label) {
                  let tmp12 = cResult[10];
                }
                if (cResult[11] === tmp11) {
                  if (cResult[12] === tmp12) {
                    let tmp15 = cResult[13];
                  }
                  return tmp15;
                }
                let obj4 = { style: tmp11, children: tmp12 };
                const tmp18 = jsx(sharedValue(tmp2[8]).View, { style: tmp11, children: tmp12 });
                cResult[11] = tmp11;
                cResult[12] = tmp12;
                cResult[13] = tmp18;
                tmp15 = tmp18;
              }
              let tmp13 = isCurrent;
              if (isCurrent) {
                let obj5 = {
                  variant: "heading-deprecated-12/extrabold",
                  color: "interactive-text-active",
                  children: label,
                };
                tmp13 = jsx(isCurrent(tmp2[10]).Text, {
                  variant: "heading-deprecated-12/extrabold",
                  color: "interactive-text-active",
                  children: label,
                });
              }
              cResult[8] = isCurrent;
              cResult[9] = label;
              cResult[10] = tmp13;
              tmp12 = tmp13;
            }
          }
          let items = [tmp4.node, animatedStyle, filledNode];
          cResult[4] = animatedStyle;
          cResult[5] = filledNode;
          cResult[6] = tmp4.node;
          cResult[7] = items;
          tmp11 = items;
        }
        filledNode = tmp4.filledNode;
      }
      const fn2 = function c() {
        let num = 0;
        if (isCurrent) {
          num = 1;
        }
        const result = sharedValue.set(num);
      };
      const items1 = [sharedValue, isCurrent];
      cResult[0] = isCurrent;
      cResult[1] = sharedValue;
      cResult[2] = fn2;
      cResult[3] = items1;
      tmp8 = items1;
      tmp7 = fn2;
      let obj3 = {
        interpolate: isCurrent(num2[8]).interpolate,
        state: sharedValue,
        withTiming: isCurrent(num2[9]).withTiming,
        duration: num2,
        Easing: isCurrent(num2[8]).Easing,
      };
    }
  : function StepNode(isCurrent) {
      isCurrent = isCurrent.isCurrent;
      let sharedValue;
      let num2;
      ({ label, isDone, useReducedMotion } = isCurrent);
      const tmp = closure_7();
      let num = 0;
      if (isCurrent) {
        num = 1;
      }
      sharedValue = isCurrent(num2[8]).useSharedValue(num);
      num2 = 180;
      if (useReducedMotion) {
        num2 = 0;
      }
      let obj = isCurrent(num2[8]);
      const fn = function h() {
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
      const tmp2Result = isCurrent(num2[8]);
      fn.__closure = {
        interpolate: isCurrent(num2[8]).interpolate,
        state: sharedValue,
        withTiming: isCurrent(num2[9]).withTiming,
        duration: num2,
        Easing: isCurrent(num2[8]).Easing,
      };
      fn.__workletHash = 8261096577536;
      fn.__initData = __initData2;
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
          isCurrent = jsx(tmp2(tmp3[10]).Text, {
            variant: "heading-deprecated-12/extrabold",
            color: "interactive-text-active",
            children: label,
          });
        }
        obj3.children = isCurrent;
        return jsx(sharedValue(tmp3[8]).View, { style: null, children: null });
      }
      filledNode = tmp.filledNode;
      let obj2 = {
        interpolate: isCurrent(num2[8]).interpolate,
        state: sharedValue,
        withTiming: isCurrent(num2[9]).withTiming,
        duration: num2,
        Easing: isCurrent(num2[8]).Easing,
      };
    };
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StepsIndicator(arg0) {
      let sum;
      const cResult = c.c(12);
      ({ current, style, total } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function c() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === current) {
        if (cResult[3] === total) {
          if (cResult[4] === stateFromStores) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === style) {
            if (cResult[7] === tmp4.container) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              if (cResult[10] === tmp14) {
                let tmp15 = cResult[11];
              }
              return tmp15;
            }
            const obj2 = { style: tmp14, children: tmp9 };
            const tmp18 = <View style={tmp14}>{tmp9}</View>;
            cResult[9] = tmp9;
            cResult[10] = tmp14;
            cResult[11] = tmp18;
            tmp15 = tmp18;
          }
          const items1 = [tmp4.container, style];
          cResult[6] = style;
          cResult[7] = tmp4.container;
          cResult[8] = items1;
          tmp14 = items1;
        }
      }
      const items2 = [];
      let num3 = 0;
      if (0 < total) {
        do {
          sum = num3 + 1;
          let obj3 = {
            useReducedMotion: stateFromStores,
            isCurrent: sum === current,
            isDone: sum < current,
            label: sum,
          };
          let arr = items2.push(
            <closure_10
              key={num3}
              useReducedMotion={stateFromStores}
              isCurrent={sum === current}
              isDone={sum < current}
              label={sum}
            />,
          );
          num3 = sum;
        } while (sum < total);
      }
      cResult[2] = current;
      cResult[3] = total;
      cResult[4] = stateFromStores;
      cResult[5] = items2;
      tmp9 = items2;
      const tmpResult = initialize;
    }
  : function StepsIndicator(current) {
      current = current.current;
      const total = current.total;
      let stateFromStores;
      const tmp = closure_7();
      let items = [AccessibilityStore];
      stateFromStores = current(stateFromStores[11]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
                <closure_10
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
                  <closure_10
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
    };
