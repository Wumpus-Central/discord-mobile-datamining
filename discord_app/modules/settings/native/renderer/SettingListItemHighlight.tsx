// === Module 14949: SettingListItemHighlight ===

// Module 14949 (SettingListItemHighlight)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14944 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { background: { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER } };
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},\"respect-motion-settings\",function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
const __initData2 = { code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
const __initData3 = { code: "function SettingListItemHighlightTsx3(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
let closure_11 = { code: "function SettingListItemHighlightTsx4(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SettingListItemHighlight(arg0) {
  const cResult = c.c(10);
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
        if (cResult[3] === lg3) {
          let tmp13 = cResult[4];
        }
        function clearSelectedSearchResult() {
          state.setState({ selected: null });
        }
        const require = clearSelectedSearchResult;
        class O {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[8]);
            obj3 = closure_0(closure_2[8]);
            obj4 = closure_0(closure_2[9]);
            withDelayResult = obj3.withDelay(500, obj4.withTiming(0, { duration: 0 }));
            obj5 = closure_0(closure_2[9]);
            obj1 = { duration: 300, easing: closure_0(closure_2[8]).Easing.ease };
            withTimingResult = obj5.withTiming(0.2, obj1);
            obj7 = closure_0(closure_2[9]);
            obj10 = { duration: 300, easing: closure_0(closure_2[8]).Easing.ease };
            fn = function t(arg0) {
              if (arg0) {
                clearSelectedSearchResult(dependencyMap[8]).runOnJS(closure_1_0);
                const obj = clearSelectedSearchResult(dependencyMap[8]);
              }
            };
            obj11 = { runOnJS: closure_0(closure_2[8]).runOnJS, clearSelectedSearchResult };
            fn.__closure = obj11;
            fn.__workletHash = 13391094209244;
            fn.__initData = closure_9;
            obj.opacity = obj2.withSequence(withDelayResult, withTimingResult, obj7.withTiming(0, obj10, "respect-motion-settings", fn));
            return obj;
          }
        }
        let obj2 = { withSequence: tmp(4850).withSequence, withDelay: tmp(4850).withDelay, withTiming: tmp(5093).withTiming, Easing: tmp(4850).Easing, runOnJS: tmp(4850).runOnJS, clearSelectedSearchResult };
        O.__closure = obj2;
        O.__workletHash = 11780002409998;
        O.__initData = __initData;
        const animatedStyle = tmp(4850).useAnimatedStyle(O);
        if (cResult[5] === animatedStyle) {
          if (cResult[6] === tmp13) {
            if (cResult[7] === style) {
              if (cResult[8] === tmp4.background) {
                let tmp16 = cResult[9];
              }
              return tmp16;
            }
          }
        }
        let obj3 = { pointerEvents: "none", style: null };
        const items = [StyleSheet.absoluteFill, tmp4.background, tmp13, animatedStyle, style];
        obj3.style = items;
        const tmp20 = jsx(ReanimatedRexportDefault.View, { pointerEvents: "none", style: null });
        cResult[5] = animatedStyle;
        cResult[6] = tmp13;
        cResult[7] = style;
        cResult[8] = tmp4.background;
        cResult[9] = tmp20;
        tmp16 = tmp20;
        const tmpResult = tmp(4850);
      }
    }
  }
  let obj4 = { borderTopStartRadius: lg, borderTopEndRadius: lg1, borderBottomStartRadius: lg2, borderBottomEndRadius: lg3 };
  cResult[0] = lg;
  cResult[1] = lg1;
  cResult[2] = lg2;
  cResult[3] = lg3;
  cResult[4] = obj4;
  tmp13 = obj4;
}) : (function SettingListItemHighlight(start) {
  start = start.start;
  const end = start.end;
  const items = [end, start];
  const memo = noop.useMemo(() => {
    let lg;
    if (start) {
      lg = nativeDefault.radii.lg;
    }
    const obj = { borderTopStartRadius: lg, borderTopEndRadius: null, borderBottomStartRadius: null, borderBottomEndRadius: null };
    let lg1;
    if (start) {
      lg1 = nativeDefault.radii.lg;
    }
    obj.borderTopEndRadius = lg1;
    let lg2;
    if (end) {
      lg2 = nativeDefault.radii.lg;
    }
    obj.borderBottomStartRadius = lg2;
    let lg3;
    if (end) {
      lg3 = nativeDefault.radii.lg;
    }
    obj.borderBottomEndRadius = lg3;
    return obj;
  }, items);
  const clearSelectedSearchResult = noop.useCallback(() => {
    state.setState({ selected: null });
  }, []);
  const tmp = closure_7();
  let fn = function _() {
    let obj = { opacity: null };
    const obj2 = ReanimatedRexport;
    const obj3 = ReanimatedRexport;
    const withDelayResult = obj3.withDelay(500, timing.withTiming(0, { duration: 0 }));
    const obj5 = timing;
    const obj6 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    const withTimingResult = obj5.withTiming(0.2, { duration: 300, easing: ReanimatedRexport.Easing.ease });
    const obj7 = timing;
    const fn = function t(arg0) {
      if (arg0) {
        start(callback[8]).runOnJS(closure_1_2);
        const obj = start(callback[8]);
      }
    };
    const obj8 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult };
    fn.__workletHash = 10128329378010;
    fn.__initData = __initData;
    obj.opacity = obj2.withSequence(withDelayResult, withTimingResult, obj7.withTiming(0, obj8, "respect-motion-settings", fn));
    return obj;
  };
  let obj = start(clearSelectedSearchResult[8]);
  fn.__closure = { withSequence: start(clearSelectedSearchResult[8]).withSequence, withDelay: start(clearSelectedSearchResult[8]).withDelay, withTiming: start(clearSelectedSearchResult[9]).withTiming, Easing: start(clearSelectedSearchResult[8]).Easing, runOnJS: start(clearSelectedSearchResult[8]).runOnJS, clearSelectedSearchResult };
  fn.__workletHash = 8516165731404;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { pointerEvents: "none", style: null };
  const items1 = [StyleSheet.absoluteFill, tmp.background, memo, animatedStyle, start.style];
  obj3.style = items1;
  return jsx(end(clearSelectedSearchResult[8]).View, { pointerEvents: "none", style: null });
}));