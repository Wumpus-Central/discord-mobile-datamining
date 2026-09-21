// === Module 14971: SettingListItemHighlight ===

// Module 14971 (SettingListItemHighlight)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14966 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = { background: { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER } };
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
let closure_9 = { code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
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
        start(callback[6]).runOnJS(closure_1_2);
        const obj = start(callback[6]);
      }
    };
    const obj8 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult };
    fn.__workletHash = 13391094209244;
    fn.__initData = __initData;
    obj.opacity = obj2.withSequence(withDelayResult, withTimingResult, obj7.withTiming(0, obj8, "respect-motion-settings", fn));
    return obj;
  };
  let obj = start(clearSelectedSearchResult[6]);
  fn.__closure = { withSequence: start(clearSelectedSearchResult[6]).withSequence, withDelay: start(clearSelectedSearchResult[6]).withDelay, withTiming: start(clearSelectedSearchResult[7]).withTiming, Easing: start(clearSelectedSearchResult[6]).Easing, runOnJS: start(clearSelectedSearchResult[6]).runOnJS, clearSelectedSearchResult };
  fn.__workletHash = 13630242918990;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { pointerEvents: "none", style: null };
  const items1 = [StyleSheet.absoluteFill, tmp.background, memo, animatedStyle, start.style];
  obj3.style = items1;
  return jsx(end(clearSelectedSearchResult[6]).View, { pointerEvents: "none", style: null });
});