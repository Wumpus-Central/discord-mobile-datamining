// === Module 8627: TextInput/TextInput ===

// Module 8627 (TextInput/TextInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import shared from "shared" /* 4969 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["style", "ref"];
const TextInput = fn(17).TextInput;
const Constants = fn(1085);
({ KeyboardThemes: metroRequire, Fonts } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { input: { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT }, placeholderTextColor: null };
let obj3 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.placeholderTextColor = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoidTextInput(arg0) {
  const cResult = c.c(16);
  if (cResult[0] !== arg0) {
    ({ style, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = ref;
    cResult[3] = style;
    let tmp6 = style;
    let tmp5 = ref;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_8();
  const theme = shared.useThemeContext().theme;
  const tmpResult = shared;
  const tmpResult5 = shared;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp12 = shared.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp10.input) {
      let tmp13 = cResult[6];
    }
    const tmp15 = shared.isThemeDark(theme) ? timestampProducer.DARK : timestampProducer.LIGHT;
    if (cResult[7] !== tmp12) {
      let hexWithOpacityResult = tmp12;
      if (tmpResult7.isAndroid()) {
        hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp12, 0.5);
        const tmpResult8 = ColorUtils;
      }
      cResult[7] = tmp12;
      cResult[8] = hexWithOpacityResult;
      let tmp16 = hexWithOpacityResult;
      tmpResult7 = PlatformUtils;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp10.placeholderTextColor.color) {
          if (cResult[12] === tmp13) {
            if (cResult[13] === tmp15) {
              if (cResult[14] === tmp16) {
                let tmp18 = cResult[15];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const obj2 = { ref: tmp5, style: tmp13, keyboardAppearance: tmp15, placeholderTextColor: tmp10.placeholderTextColor.color, selectionColor: tmp16 };
    const merged = Object.assign(tmp4);
    const tmp24 = <TextInput ref={tmp5} style={tmp13} keyboardAppearance={tmp15} placeholderTextColor={tmp10.placeholderTextColor.color} selectionColor={tmp16} />;
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp10.placeholderTextColor.color;
    cResult[12] = tmp13;
    cResult[13] = tmp15;
    cResult[14] = tmp16;
    cResult[15] = tmp24;
    tmp18 = tmp24;
    const tmpResult6 = shared;
  }
  const items = [tmp10.input, tmp6];
  cResult[4] = tmp6;
  cResult[5] = tmp10.input;
  cResult[6] = items;
  tmp13 = items;
  const isThemeDarkResult = shared.isThemeDark(theme);
}) : (function VoidTextInput(arg0) {
  ({ style, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, ref: 0 }));
  const tmp2 = closure_8();
  const theme = shared.useThemeContext().theme;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = shared.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  const obj3 = { ref, style: null, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  const items = [tmp2.input, style];
  obj3.style = items;
  const isThemeDarkResult = shared.isThemeDark(theme);
  obj3.keyboardAppearance = shared.isThemeDark(theme) ? timestampProducer.DARK : timestampProducer.LIGHT;
  obj3.placeholderTextColor = tmp2.placeholderTextColor.color;
  const tmp3Result = shared;
  let hexWithOpacityResult = tmp6;
  if (tmp3Result3.isAndroid()) {
    hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp6, 0.5);
    const tmp3Result4 = ColorUtils;
  }
  obj3.selectionColor = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return <TextInput ref={ref} style={null} keyboardAppearance={null} placeholderTextColor={null} selectionColor={null} />;
});
tmp4.displayName = "VoidTextInput";
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default tmp4;