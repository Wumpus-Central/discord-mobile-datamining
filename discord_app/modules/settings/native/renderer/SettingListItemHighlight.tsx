// === Module 16738: SettingListItemHighlight ===

// Module 16738 (SettingListItemHighlight)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16733 */;

const require = globalThis.__r;

const require = fn;
let StyleSheet = fn(17).StyleSheet;
let jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj = { background: { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER } };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = { code: "(function SettingListItemHighlightTsx1(finished){let[scheduleOnRN,clearSelectedSearchResult]=this.__closure;if(finished){scheduleOnRN(clearSelectedSearchResult);}})" };
let closure_9 = { code: "(function SettingListItemHighlightTsx2(){let[withSequence,withDelay,withTiming,Easing,_worklet_13822801574758_init_data,scheduleOnRN,clearSelectedSearchResult]=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function SettingListItemHighlightTsx1Factory([_worklet_13822801574758_init_data,scheduleOnRN,clearSelectedSearchResult]){const SettingListItemHighlightTsx1=function(finished){if(finished){scheduleOnRN(clearSelectedSearchResult);}};SettingListItemHighlightTsx1.__closure=[scheduleOnRN,clearSelectedSearchResult];SettingListItemHighlightTsx1.__workletHash=13822801574758;SettingListItemHighlightTsx1.__initData=_worklet_13822801574758_init_data;return SettingListItemHighlightTsx1;}([_worklet_13822801574758_init_data,scheduleOnRN,clearSelectedSearchResult])))};})" };
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default noop.memo(function SettingListItemHighlight(start) {
  start = start.start;
  _require = start;
  const end = start.end;
  items = [end, start];
  const memo = noop.useMemo(() => {
    let lg;
    if (c0) {
      lg = nativeDefault.radii.lg;
    }
    const obj = { borderTopStartRadius: lg, borderTopEndRadius: null, borderBottomStartRadius: null, borderBottomEndRadius: null };
    let lg1;
    if (c0) {
      lg1 = nativeDefault.radii.lg;
    }
    obj.borderTopEndRadius = lg1;
    let lg2;
    if (c1) {
      lg2 = nativeDefault.radii.lg;
    }
    obj.borderBottomStartRadius = lg2;
    let lg3;
    if (c1) {
      lg3 = nativeDefault.radii.lg;
    }
    obj.borderBottomEndRadius = lg3;
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    _undefined5.setState({ selected: null });
  }, []);
  let tmp = closure_7();
  let items1 = [closure_9, require("module_1652").withSequence, require("module_1652").withDelay, require("timing/timing").withTiming, require("module_1652").Easing, closure_8, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  jsx = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class SettingListItemHighlightTsx2 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = { duration: 300, easing: closure_3.ease };
      tmp3 = closure_1(500, closure_2(0, { duration: 0 }));
      obj1 = { duration: 300, easing: closure_3.ease };
      items = [, , ];
      items[0] = closure_4;
      items[1] = closure_5;
      items[2] = closure_6;
      closure_0 = undefined;
      closure_1 = undefined;
      [tmp5, tmp6, tmp7] = items;
      obj4 = { opacity: null };
      class SettingListItemHighlightTsx1 {
        constructor(arg0) {
          if (start) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp6;
      items1[1] = tmp7;
      SettingListItemHighlightTsx1.__closure = items1;
      SettingListItemHighlightTsx1.__workletHash = 13822801574758;
      SettingListItemHighlightTsx1.__initData = tmp5;
      tmp4 = closure_2(0.2, obj);
      obj4.opacity = tmp(tmp3, tmp4, tmp2(0, obj1, "respect-motion-settings", SettingListItemHighlightTsx1));
      return obj4;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  SettingListItemHighlightTsx2.__closure = items2;
  SettingListItemHighlightTsx2.__workletHash = 15031503673005;
  SettingListItemHighlightTsx2.__initData = tmp5;
  const animatedStyle = require("module_1652").useAnimatedStyle(SettingListItemHighlightTsx2);
  let obj2 = { pointerEvents: "none", style: null };
  const items3 = [StyleSheet.absoluteFill, tmp.background, memo, animatedStyle, start.style];
  obj2.style = items3;
  return jsx(_modDef1652.View, { pointerEvents: "none", style: null });
});