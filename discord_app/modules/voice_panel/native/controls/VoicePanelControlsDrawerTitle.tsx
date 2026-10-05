// === Module 11910: VoicePanelControlsDrawerTitle ===

// Module 11910 (VoicePanelControlsDrawerTitle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6570 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 11911 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const CONTROLS_DRAWER_HEADER_SIZE = VoicePanelControlsConstants.CONTROLS_DRAWER_HEADER_SIZE;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: CONTROLS_DRAWER_HEADER_SIZE }, titlePill: obj2, titlePillBG: obj3 };
obj2 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles(obj);
const __initData = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:\"transparent\"};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTitleTsx2(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let blurStyle;
  let disablePill;
  let items;
  let shown;
  let style;
  let title;
  const obj = react2;
  const cResult = obj.c(18);
  ({ title, shown } = arg0);
  ({ disablePill, style, blurStyle } = arg0);
  let closure_1 = tmp4;
  const tmp5 = closure_6();
  const tmpResult = ReanimatedRexport;
  const sharedValue = tmpResult.useSharedValue(true);
  let backgroundColor = tmp5.titlePillBG.backgroundColor;
  const fn = function o() {
    let value;
    if (null != shown) {
      value = shown.get();
    } else {
      value = sharedValue.get();
    }
    backgroundColor = "transparent";
    if (value) {
      backgroundColor = "transparent";
    }
    return { backgroundColor };
  };
  fn.__closure = { shown, _shown: sharedValue, disablePill: undefined !== disablePill && disablePill, backgroundColor };
  fn.__workletHash = 3467825285135;
  fn.__initData = __initData;
  const tmpResult2 = ReanimatedRexport;
  const animatedStyle = tmpResult2.useAnimatedStyle(fn);
  if (cResult[0] === style) {
    let tmp8;
    if (cResult[1] === tmp5.titleWrapper) {
      tmp8 = cResult[2];
    }
    if (shown == null) {
      shown = sharedValue;
    }
    if (cResult[3] === blurStyle) {
      let tmp10;
      if (cResult[4] === shown) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp5.titlePill) {
        let tmp15;
        let tmp16;
        if (cResult[7] === animatedStyle) {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== title) {
          const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
          const tmp18 = React3(Text_Text.Text, obj2);
          cResult[9] = title;
          cResult[10] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] === tmp15) {
          let tmp19;
          if (cResult[12] === tmp16) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp8) {
            if (cResult[15] === tmp10) {
              let tmp23;
              if (cResult[16] === tmp19) {
                tmp23 = cResult[17];
              }
              return tmp23;
            }
          }
          const obj3 = { style: tmp8, children: items };
          items = [tmp10, tmp19];
          const tmp26 = hasOwnProperty(NativeViewDefault, obj3);
          cResult[14] = tmp8;
          cResult[15] = tmp10;
          cResult[16] = tmp19;
          cResult[17] = tmp26;
          tmp23 = tmp26;
        }
        const obj4 = { style: tmp15, children: tmp16 };
        const tmp22 = React3(ReanimatedNativeViewDefault, obj4);
        cResult[11] = tmp15;
        cResult[12] = tmp16;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      const items1 = [tmp5.titlePill, animatedStyle];
      cResult[6] = tmp5.titlePill;
      cResult[7] = animatedStyle;
      cResult[8] = items1;
      tmp15 = items1;
    }
    const obj5 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
    const tmp14 = React3(VoicePanelHeaderGlassBlurDefault, obj5);
    cResult[3] = blurStyle;
    cResult[4] = shown;
    cResult[5] = tmp14;
    tmp10 = tmp14;
  }
  const items2 = [tmp5.titleWrapper, style];
  cResult[0] = style;
  cResult[1] = tmp5.titleWrapper;
  cResult[2] = items2;
  tmp8 = items2;
}) : ((shown) => {
  let blurStyle;
  let items;
  let items1;
  let items2;
  let style;
  shown = shown.shown;
  let flag = shown.disablePill;
  const title = shown.title;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, blurStyle } = shown);
  const tmp = closure_6();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  const fn = function p() {
    let value;
    if (null != shown) {
      value = shown.get();
    } else {
      value = sharedValue.get();
    }
    backgroundColor = "transparent";
    if (value) {
      backgroundColor = "transparent";
    }
    return { backgroundColor };
  };
  fn.__closure = { shown, _shown: sharedValue, disablePill: flag, backgroundColor };
  fn.__workletHash = 4774701317100;
  fn.__initData = __initData2;
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items, children: items1 };
  items = [tmp.titleWrapper, style];
  const tmp8 = NativeViewDefault;
  const tmp10 = VoicePanelHeaderGlassBlurDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  items1 = [, ];
  const obj4 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  items1[0] = React3(tmp10, obj4);
  const obj5 = { style: items2, children: React3(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }) };
  items2 = [tmp.titlePill, animatedStyle];
  const tmp7Result = ReanimatedNativeViewDefault;
  items1[1] = React3(tmp7Result, obj5);
  return hasOwnProperty(tmp8, obj3);
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default memoResult;