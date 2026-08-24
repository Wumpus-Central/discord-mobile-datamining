// discord_app/modules/settings/native/renderer/SettingListItemHighlight.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../user_settings/UserSettingSearchStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
let obj = { background: null };
obj = { backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_HOVER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
let closure_8 = { code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
let closure_9 = { code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
const memoResult = importAllResult.memo((start) => {
  start = start.start;
  const end = start.end;
  let callback;
  const items = [end, start];
  const memo = importAllResult.useMemo(() => {
    let lg;
    if (start) {
      lg = end(callback[5]).radii.lg;
    }
    const obj = { borderTopStartRadius: lg, borderTopEndRadius: null, borderBottomStartRadius: null, borderBottomEndRadius: null };
    let lg1;
    if (start) {
      lg1 = end(callback[5]).radii.lg;
    }
    obj[1] = lg1;
    let lg2;
    if (end) {
      lg2 = end(callback[5]).radii.lg;
    }
    obj[2] = lg2;
    let lg3;
    if (end) {
      lg3 = end(callback[5]).radii.lg;
    }
    obj[3] = lg3;
    return obj;
  }, items);
  callback = importAllResult.useCallback(() => {
    state.setState({ selected: null });
  }, []);
  let obj = start(callback[6]);
  let fn = function _() {
    let obj = { opacity: null };
    obj1 = start(callback[6]);
    const obj3 = start(callback[6]);
    const obj4 = start(callback[7]);
    const withDelayResult = obj3.withDelay(500, start(callback[7]).withTiming(0, { duration: 0 }));
    obj = { duration: 300, easing: start(callback[6]).Easing.ease };
    const obj5 = start(callback[7]);
    const withTimingResult = start(callback[7]).withTiming(0.2, obj);
    obj = { duration: 300, easing: start(callback[6]).Easing.ease };
    const fn = function t(arg0) {
      if (arg0) {
        closure_1_0(closure_1_2[6]).runOnJS(closure_2);
        const obj = closure_1_0(closure_1_2[6]);
      }
    };
    obj1 = { runOnJS: start(callback[6]).runOnJS, clearSelectedSearchResult: callback };
    fn.__closure = obj1;
    fn.__workletHash = 13391094209244;
    fn.__initData = closure_1_9;
    obj[0] = obj1.withSequence(withDelayResult, withTimingResult, start(callback[7]).withTiming(0, obj, "respect-motion-settings", fn));
    return obj;
  };
  obj = { withSequence: start(callback[6]).withSequence, withDelay: start(callback[6]).withDelay, withTiming: start(callback[7]).withTiming, Easing: start(callback[6]).Easing, runOnJS: start(callback[6]).runOnJS, clearSelectedSearchResult: callback };
  fn.__closure = obj;
  fn.__workletHash = 13630242918990;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [StyleSheet.absoluteFill, callback().background, memo, animatedStyle, start.style];
  return jsx(end(callback[6]).View, { pointerEvents: "none", style });
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default memoResult;