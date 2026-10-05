// discord_app/modules/settings/native/renderer/SettingListItemHighlight.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj1, obj7, obj8, tmp2, tmp5;

let obj2;
let tmp;
const ReanimatedRexport = tmp(4612);
const timing = tmp(4891);
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let obj = { background: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
let closure_7 = createStyles.createStyles(obj);
const __initData = {
  code: 'function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},"respect-motion-settings",function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}',
};
const __initData2 = {
  code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}",
};
const __initData3 = {
  code: "function SettingListItemHighlightTsx3(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}",
};
let closure_11 = {
  code: "function SettingListItemHighlightTsx4(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}",
};
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let end;
        let require;
        let start;
        let state;
        let style;
        let tmp = require;
        let obj = react2;
        const cResult = obj.c(10);
        ({ start, end, style } = arg0);
        const tmp4 = closure_7();
        let lg;
        if (start) {
          lg = nativeDefault.radii.lg;
        }
        let lg1;
        if (start) {
          lg1 = nativeDefault.radii.lg;
        }
        let lg2;
        if (end) {
          lg2 = nativeDefault.radii.lg;
        }
        let lg3;
        if (end) {
          lg3 = nativeDefault.radii.lg;
        }
        if (cResult[0] === lg) {
          if (cResult[1] === lg1) {
            if (cResult[2] === lg2) {
              let tmp13;
              if (cResult[3] === lg3) {
                tmp13 = cResult[4];
              }
              function clearSelectedSearchResult() {
                state.setState({ selected: null });
              }
              require = clearSelectedSearchResult;
              const tmpResult = ReanimatedRexport;
              class O {
                constructor() {
                  obj = { opacity: null };
                  tmp = closure_0(closure_2[8]);
                  withSequence = tmp.withSequence;
                  tmp2 = closure_0(closure_2[8]);
                  withDelay = tmp2.withDelay;
                  obj2 = closure_0(closure_2[9]);
                  withDelayResult = withDelay(500, obj2.withTiming(0, { duration: 0 }));
                  obj3 = closure_0(closure_2[9]);
                  obj1 = { duration: 300, easing: closure_0(closure_2[8]).Easing.ease };
                  withTimingResult = obj3.withTiming(0.2, obj1);
                  tmp5 = closure_0(closure_2[9]);
                  obj7 = { duration: 300, easing: closure_0(closure_2[8]).Easing.ease };
                  withTiming = tmp5.withTiming;
                  fn = function t(arg0) {
                    const tmp = arg0;
                    if (tmp) {
                      const obj = ReanimatedRexport;
                      obj.runOnJS(closure_1_0);
                    }
                  };
                  obj8 = { runOnJS: closure_0(closure_2[8]).runOnJS, clearSelectedSearchResult };
                  fn.__closure = obj8;
                  fn.__workletHash = 13391094209244;
                  fn.__initData = closure_9;
                  obj.opacity = withSequence(
                    withDelayResult,
                    withTimingResult,
                    withTiming(0, obj7, "respect-motion-settings", fn),
                  );
                  return obj;
                }
              }
              let obj2 = {
                withSequence: ReanimatedRexport.withSequence,
                withDelay: ReanimatedRexport.withDelay,
                withTiming: timing.withTiming,
                Easing: ReanimatedRexport.Easing,
                runOnJS: ReanimatedRexport.runOnJS,
                clearSelectedSearchResult,
              };
              const useAnimatedStyle = tmpResult.useAnimatedStyle;
              O.__closure = obj2;
              O.__workletHash = 11780002409998;
              O.__initData = __initData;
              const animatedStyle = useAnimatedStyle(O);
              if (cResult[5] === animatedStyle) {
                if (cResult[6] === tmp13) {
                  if (cResult[7] === style) {
                    let tmp17;
                    if (cResult[8] === tmp4.background) {
                      tmp17 = cResult[9];
                    }
                    return tmp17;
                  }
                }
              }
              const items = [StyleSheet.absoluteFill, tmp4.background, tmp13, animatedStyle, style];
              const tmp21 = jsx(ReanimatedRexportDefault.View, { pointerEvents: "none", style: items });
              cResult[5] = animatedStyle;
              cResult[6] = tmp13;
              cResult[7] = style;
              cResult[8] = tmp4.background;
              cResult[9] = tmp21;
              tmp17 = tmp21;
            }
          }
        }
        let obj4 = {
          borderTopStartRadius: lg,
          borderTopEndRadius: lg1,
          borderBottomStartRadius: lg2,
          borderBottomEndRadius: lg3,
        };
        cResult[0] = lg;
        cResult[1] = lg1;
        cResult[2] = lg2;
        cResult[3] = lg3;
        cResult[4] = obj4;
        tmp13 = obj4;
      }
    : (start) => {
        let state;
        start = start.start;
        const end = start.end;
        const style = start.style;
        const items = [end, start];
        let tmp = closure_7();
        const memo = react.useMemo(() => {
          let lg1;
          let lg2;
          let lg3;
          let lg;
          if (start) {
            lg = nativeDefault.radii.lg;
          }
          const obj = {
            borderTopStartRadius: lg,
            borderTopEndRadius: lg1,
            borderBottomStartRadius: lg2,
            borderBottomEndRadius: lg3,
          };
          lg1 = undefined;
          if (start) {
            lg1 = nativeDefault.radii.lg;
          }
          lg2 = undefined;
          if (end) {
            lg2 = nativeDefault.radii.lg;
          }
          lg3 = undefined;
          if (end) {
            lg3 = nativeDefault.radii.lg;
          }
          return obj;
        }, items);
        const clearSelectedSearchResult = react.useCallback(() => {
          state.setState({ selected: null });
        }, []);
        let obj = start(clearSelectedSearchResult[8]);
        let fn = function _() {
          let fn;
          let obj5;
          let withDelayResult;
          let withSequence;
          let withTiming;
          let withTimingResult;
          let obj = {
            opacity: withSequence(
              withDelayResult,
              withTimingResult,
              withTiming(0, obj5, "respect-motion-settings", fn),
            ),
          };
          let tmp = ReanimatedRexport;
          withSequence = tmp.withSequence;
          const withDelay = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj2 = timing;
          withDelayResult = withDelay(500, obj2.withTiming(0, { duration: 0 }));
          const obj3 = timing;
          const obj4 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
          withTimingResult = obj3.withTiming(0.2, obj4);
          withTiming = timing.withTiming;
          fn = function t(arg0) {
            const tmp = arg0;
            if (tmp) {
              const obj = start(callback[8]);
              obj.runOnJS(closure_1_2);
            }
          };
          obj5 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult };
          fn.__workletHash = 10128329378010;
          fn.__initData = __initData;
          ({ runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult });
          return obj;
        };
        let obj2 = {
          withSequence: start(clearSelectedSearchResult[8]).withSequence,
          withDelay: start(clearSelectedSearchResult[8]).withDelay,
          withTiming: start(clearSelectedSearchResult[9]).withTiming,
          Easing: start(clearSelectedSearchResult[8]).Easing,
          runOnJS: start(clearSelectedSearchResult[8]).runOnJS,
          clearSelectedSearchResult,
        };
        fn.__closure = obj2;
        fn.__workletHash = 8516165731404;
        fn.__initData = __initData3;
        const animatedStyle = obj.useAnimatedStyle(fn);
        const items1 = [StyleSheet.absoluteFill, tmp.background, memo, animatedStyle, style];
        return jsx(end(clearSelectedSearchResult[8]).View, { pointerEvents: "none", style: items1 });
      },
);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default memoResult;
