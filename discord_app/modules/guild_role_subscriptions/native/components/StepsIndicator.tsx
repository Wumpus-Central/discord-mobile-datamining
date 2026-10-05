// discord_app/modules/guild_role_subscriptions/native/components/StepsIndicator.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let set;

let obj2;
let obj3;
let View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  container: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  node: { width: 20, height: 20, borderRadius: 10, marginHorizontal: -2 },
  filledNode: obj2,
  emptyNode: obj3,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles(obj);
const __initData = {
  code: "function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[0.4,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}",
};
const __initData2 = {
  code: "function StepsIndicatorTsx2(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isCurrent;
      let isDone;
      let label;
      let num2;
      let useReducedMotion;
      const tmp2 = num2;
      let obj = isCurrent(num2[7]);
      const cResult = obj.c(14);
      ({ label, isCurrent } = arg0);
      ({ isDone, useReducedMotion } = arg0);
      const tmp4 = closure_7();
      const tmp5 = isCurrent(num2[8]);
      let num = 0;
      const useSharedValue = tmp5.useSharedValue;
      if (isCurrent) {
        num = 1;
      }
      const sharedValue = useSharedValue(num);
      num2 = 180;
      if (useReducedMotion) {
        num2 = 0;
      }
      const fn = function i() {
        let Easing;
        let Easing2;
        let interpolateResult1;
        let items;
        let obj5;
        let withTiming2;
        const obj = ReanimatedRexport;
        const interpolateResult = obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
        const obj2 = { duration: num2, easing: Easing.out(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const withTimingResult = withTiming(interpolateResult, obj2);
        const obj4 = { marginHorizontal: withTiming2(interpolateResult1, obj5), transform: items };
        const obj3 = ReanimatedRexport;
        interpolateResult1 = obj3.interpolate(sharedValue.get(), [0, 1], [-2, 6]);
        obj5 = { duration: num2, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
        withTiming2 = timing.withTiming;
        timing;
        Easing2 = ReanimatedRexport.Easing;
        items = [{ scale: withTimingResult }];
        return obj4;
      };
      const tmpResult = isCurrent(tmp2[8]);
      let obj2 = {
        interpolate: isCurrent(tmp2[8]).interpolate,
        state: sharedValue,
        withTiming: isCurrent(tmp2[9]).withTiming,
        duration: num2,
        Easing: isCurrent(tmp2[8]).Easing,
      };
      fn.__closure = obj2;
      fn.__workletHash = 15717385942716;
      fn.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[0] === isCurrent) {
        let tmp8;
        let tmp9;
        if (cResult[1] === sharedValue) {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        const effect = react.useEffect(tmp8, tmp9);
        if (!isDone) {
          let filledNode;
          if (!isCurrent) {
            filledNode = tmp4.emptyNode;
          }
          if (cResult[4] === animatedStyle) {
            if (cResult[5] === filledNode) {
              let tmp12;
              if (cResult[6] === tmp4.node) {
                tmp12 = cResult[7];
              }
              if (cResult[8] === isCurrent) {
                let tmp13;
                if (cResult[9] === label) {
                  tmp13 = cResult[10];
                }
                if (cResult[11] === tmp12) {
                  let tmp16;
                  if (cResult[12] === tmp13) {
                    tmp16 = cResult[13];
                  }
                  return tmp16;
                }
                const tmp19 = jsx(sharedValue(tmp2[8]).View, { style: tmp12, children: tmp13 });
                cResult[11] = tmp12;
                cResult[12] = tmp13;
                cResult[13] = tmp19;
                tmp16 = tmp19;
              }
              const tmp14 =
                isCurrent &&
                jsx(isCurrent(tmp2[10]).Text, {
                  variant: "heading-deprecated-12/extrabold",
                  color: "interactive-text-active",
                  children: label,
                });
              cResult[8] = isCurrent;
              cResult[9] = label;
              cResult[10] = tmp14;
              tmp13 = tmp14;
            }
          }
          let items = [tmp4.node, animatedStyle, filledNode];
          cResult[4] = animatedStyle;
          cResult[5] = filledNode;
          cResult[6] = tmp4.node;
          cResult[7] = items;
          tmp12 = items;
        }
        filledNode = tmp4.filledNode;
      }
      const fn2 = function c() {
        let num = 0;
        set = sharedValue.set;
        if (isCurrent) {
          num = 1;
        }
        const result = set(num);
      };
      const items1 = [sharedValue, isCurrent];
      cResult[0] = isCurrent;
      cResult[1] = sharedValue;
      cResult[2] = fn2;
      cResult[3] = items1;
      tmp9 = items1;
      tmp8 = fn2;
    }
  : (isCurrent) => {
      let isDone;
      let label;
      let useReducedMotion;
      isCurrent = isCurrent.isCurrent;
      let sharedValue;
      let num2;
      ({ label, isDone, useReducedMotion } = isCurrent);
      const tmp = closure_7();
      const tmp2 = isCurrent;
      let num = 0;
      const useSharedValue = isCurrent(num2[8]).useSharedValue;
      isCurrent(num2[8]);
      if (isCurrent) {
        num = 1;
      }
      sharedValue = useSharedValue(num);
      num2 = 180;
      if (useReducedMotion) {
        num2 = 0;
      }
      const fn = function h() {
        let Easing;
        let Easing2;
        let interpolateResult1;
        let items;
        let obj5;
        let withTiming2;
        const obj = ReanimatedRexport;
        const interpolateResult = obj.interpolate(sharedValue.get(), [0, 1], [0.4, 1]);
        const obj2 = { duration: num2, easing: Easing.out(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const withTimingResult = withTiming(interpolateResult, obj2);
        const obj4 = { marginHorizontal: withTiming2(interpolateResult1, obj5), transform: items };
        const obj3 = ReanimatedRexport;
        interpolateResult1 = obj3.interpolate(sharedValue.get(), [0, 1], [-2, 6]);
        obj5 = { duration: num2, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
        withTiming2 = timing.withTiming;
        timing;
        Easing2 = ReanimatedRexport.Easing;
        items = [{ scale: withTimingResult }];
        return obj4;
      };
      const tmp2Result = tmp2(num2[8]);
      let obj = {
        interpolate: tmp2(tmp3[8]).interpolate,
        state: sharedValue,
        withTiming: tmp2(tmp3[9]).withTiming,
        duration: num2,
        Easing: tmp2(tmp3[8]).Easing,
      };
      fn.__closure = obj;
      fn.__workletHash = 8261096577536;
      fn.__initData = __initData2;
      let items = [sharedValue, isCurrent];
      const animatedStyle = tmp2Result.useAnimatedStyle(fn);
      const effect = react.useEffect(() => {
        let num = 0;
        set = sharedValue.set;
        if (isCurrent) {
          num = 1;
        }
        const result = set(num);
      }, items);
      if (!isDone) {
        let filledNode;
        if (!isCurrent) {
          filledNode = tmp.emptyNode;
        }
        const items1 = [tmp.node, animatedStyle, filledNode];
        View = sharedValue(tmp3[8]).View;
        if (isCurrent) {
          isCurrent = jsx(tmp2(tmp3[10]).Text, {
            variant: "heading-deprecated-12/extrabold",
            color: "interactive-text-active",
            children: label,
          });
        }
        return <View style={items1}>{isCurrent}</View>;
      }
      filledNode = tmp.filledNode;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let current;
      let style;
      let sum;
      let tmp5;
      let tmp6;
      let total;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(12);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === current) {
        if (cResult[3] === total) {
          let tmp9;
          if (cResult[4] === stateFromStores) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === style) {
            let tmp14;
            if (cResult[7] === tmp4.container) {
              tmp14 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              let tmp15;
              if (cResult[10] === tmp14) {
                tmp15 = cResult[11];
              }
              return tmp15;
            }
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
    }
  : (current) => {
      let useReducedMotion;
      current = current.current;
      const total = current.total;
      let stateFromStores;
      const style = current.style;
      const tmp = closure_7();
      let items = [AccessibilityStore];
      const obj = current(stateFromStores[11]);
      stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const items1 = [current, total, stateFromStores];
      const items2 = [tmp.container, style];
      return (
        <View style={items2}>
          {react.useMemo(() => {
            let sum;
            const items = [];
            let num = 0;
            if (0 < total) {
              do {
                sum = num + 1;
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
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/StepsIndicator.tsx");

export default tmp3;
