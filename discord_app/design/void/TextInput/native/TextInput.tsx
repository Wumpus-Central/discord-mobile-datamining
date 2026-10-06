// === Module 9272: void/TextInput/TextInput ===

// Module 9272 (void/TextInput/TextInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import shared from "shared" /* 4735 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let Fonts;
let metroRequire;
let obj2;
let obj3;
let closure_3 = ["style"];
const TextInput = react_native.TextInput;
({ KeyboardThemes: metroRequire, Fonts } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { input: obj2, placeholderTextColor: obj3 };
obj2 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let closure_8 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((style, ref) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== style) {
    style = style.style;
    const tmp8 = _objectWithoutProperties(style, closure_3);
    cResult[0] = style;
    cResult[1] = tmp8;
    cResult[2] = style;
    tmp5 = style;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_8();
  const tmpResult = shared;
  const theme = tmpResult.useThemeContext().theme;
  const tmpResult5 = shared;
  const isThemeDarkResult = tmpResult5.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp11 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  if (cResult[3] === tmp5) {
    let tmp12;
    let tmp15;
    if (cResult[4] === tmp9.input) {
      tmp12 = cResult[5];
    }
    const tmpResult6 = shared;
    const tmp14 = tmpResult6.isThemeDark(theme) ? metroRequire.DARK : metroRequire.LIGHT;
    if (cResult[6] !== tmp11) {
      let hexWithOpacityResult = tmp11;
      const tmpResult7 = PlatformUtils;
      if (tmpResult7.isAndroid()) {
        const tmpResult8 = ColorUtils;
        hexWithOpacityResult = tmpResult8.hexWithOpacity(tmp11, 0.5);
      }
      cResult[6] = tmp11;
      cResult[7] = hexWithOpacityResult;
      tmp15 = hexWithOpacityResult;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === ref) {
        if (cResult[10] === tmp9.placeholderTextColor.color) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp14) {
              let tmp18;
              if (cResult[13] === tmp15) {
                tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const merged = Object.assign(tmp4);
    const tmp24 = <TextInput ref={ref} style={tmp12} keyboardAppearance={tmp14} placeholderTextColor={tmp9.placeholderTextColor.color} selectionColor={tmp15} />;
    cResult[8] = tmp4;
    cResult[9] = ref;
    cResult[10] = tmp9.placeholderTextColor.color;
    cResult[11] = tmp12;
    cResult[12] = tmp14;
    cResult[13] = tmp15;
    cResult[14] = tmp24;
    tmp18 = tmp24;
  }
  const items = [tmp9.input, tmp5];
  cResult[3] = tmp5;
  cResult[4] = tmp9.input;
  cResult[5] = items;
  tmp12 = items;
}) : ((style, ref) => {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp2 = closure_8();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  const items = [tmp2.input, style];
  let hexWithOpacityResult = tmp6;
  const tmp3Result = shared;
  const tmp3Result3 = PlatformUtils;
  if (tmp3Result3.isAndroid()) {
    const tmp3Result4 = ColorUtils;
    hexWithOpacityResult = tmp3Result4.hexWithOpacity(tmp6, 0.5);
  }
  const merged1 = Object.assign(merged);
  return <TextInput ref={ref} style={items} keyboardAppearance={tmp3Result.isThemeDark(theme) ? metroRequire.DARK : metroRequire.LIGHT} placeholderTextColor={tmp2.placeholderTextColor.color} selectionColor={hexWithOpacityResult} />;
}));
forwardRefResult.displayName = "VoidTextInput";
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;