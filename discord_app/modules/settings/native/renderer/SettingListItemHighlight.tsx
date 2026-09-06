// discord_app/modules/settings/native/renderer/SettingListItemHighlight.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { background: null };
obj = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
obj.background = obj;
let closure_7 = createStyles.createStyles(obj);
const __initData = {
  code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}",
};
let closure_9 = {
  code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default noop.memo((start) => {
  start = start.start;
  const end = start.end;
  const items = [end, start];
  const memo = noop.useMemo(() => {
    let lg;
    if (start) {
      lg = nativeDefault.radii.lg;
    }
    const obj = {
      borderTopStartRadius: lg,
      borderTopEndRadius: null,
      borderBottomStartRadius: null,
      borderBottomEndRadius: null,
    };
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
  start(clearSelectedSearchResult[6]);
  let fn = function _() {
    let obj = { opacity: null };
    const obj3 = ReanimatedRexport;
    const withDelayResult = obj3.withDelay(500, timing.withTiming(0, { duration: 0 }));
    obj = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    const withTimingResult = timing.withTiming(0.2, obj);
    obj = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    const fn = function t(arg0) {
      if (arg0) {
        start(callback[6]).runOnJS(closure_1_2);
        const obj = start(callback[6]);
      }
    };
    const obj1 = { runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult };
    fn.__closure = obj1;
    fn.__workletHash = 13391094209244;
    fn.__initData = __initData;
    obj.opacity = obj1.withSequence(
      withDelayResult,
      withTimingResult,
      timing.withTiming(0, obj, "respect-motion-settings", fn),
    );
    return obj;
  };
  let obj = {
    withSequence: start(clearSelectedSearchResult[6]).withSequence,
    withDelay: start(clearSelectedSearchResult[6]).withDelay,
    withTiming: start(clearSelectedSearchResult[7]).withTiming,
    Easing: start(clearSelectedSearchResult[6]).Easing,
    runOnJS: start(clearSelectedSearchResult[6]).runOnJS,
    clearSelectedSearchResult,
  };
  fn.__closure = obj;
  fn.__workletHash = 13630242918990;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { pointerEvents: "none", style: null };
  const items1 = [StyleSheet.absoluteFill, closure_7().background, memo, animatedStyle, start.style];
  obj.style = items1;
  return jsx(end(clearSelectedSearchResult[6]).View, { pointerEvents: "none", style: null });
});
