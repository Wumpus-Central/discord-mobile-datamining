// === Module 11924: VoicePanelControlsDrawerTitle ===

// Module 11924 (VoicePanelControlsDrawerTitle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6577 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 11925 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: fn(11914).CONTROLS_DRAWER_HEADER_SIZE }, titlePill: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 }, titlePillBG: null };
let obj3 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj.titlePillBG = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:\"transparent\"};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTitleTsx2(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ title, shown } = arg0);
  ({ disablePill, style, blurStyle } = arg0);
  closure_1 = tmp4;
  const tmp5 = closure_6();
  const sharedValue = ReanimatedRexport.useSharedValue(true);
  let backgroundColor = tmp5.titlePillBG.backgroundColor;
  const tmpResult = ReanimatedRexport;
  const fn = function o() {
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
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (cResult[0] === style) {
    if (cResult[1] === tmp5.titleWrapper) {
      let tmp8 = cResult[2];
    }
    if (shown == null) {
      shown = sharedValue;
    }
    if (cResult[3] === blurStyle) {
      if (cResult[4] === shown) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === tmp5.titlePill) {
        if (cResult[7] === animatedStyle) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] !== title) {
          const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
          const tmp18 = React4(Text_Text.Text, obj2);
          cResult[9] = title;
          cResult[10] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] === tmp15) {
          if (cResult[12] === tmp16) {
            let tmp19 = cResult[13];
          }
          if (cResult[14] === tmp8) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp19) {
                let tmp23 = cResult[17];
              }
              return tmp23;
            }
          }
          const obj3 = { style: tmp8, children: null };
          const items = [tmp10, tmp19];
          obj3.children = items;
          const tmp26 = hasOwnProperty(NativeViewDefault, obj3);
          cResult[14] = tmp8;
          cResult[15] = tmp10;
          cResult[16] = tmp19;
          cResult[17] = tmp26;
          tmp23 = tmp26;
        }
        const obj4 = { style: tmp15, children: tmp16 };
        const tmp22 = React4(ReanimatedNativeViewDefault, obj4);
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
    const tmp14 = React4(VoicePanelHeaderGlassBlurDefault, obj5);
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
  const tmpResult2 = ReanimatedRexport;
}) : ((children) => {
  let shown = children.shown;
  let flag = children.disablePill;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, blurStyle } = children);
  const tmp = closure_6();
  const sharedValue = ReanimatedRexport.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  const fn = function p() {
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
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [tmp.titleWrapper, style];
  obj3.style = items;
  const tmp8 = NativeViewDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  const items1 = [React4(VoicePanelHeaderGlassBlurDefault, { shown, style: StyleSheet.absoluteFillObject, blurStyle }), ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.titlePill, animatedStyle];
  obj5.style = items2;
  const obj4 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  obj5.children = React4(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: children.title });
  items1[1] = React4(ReanimatedNativeViewDefault, obj5);
  obj3.children = items1;
  return hasOwnProperty(tmp8, obj3);
}));