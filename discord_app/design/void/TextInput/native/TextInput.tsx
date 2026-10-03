// === Module 9237: TextInput/TextInput ===

// Module 9237 (TextInput/TextInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import shared from "shared" /* 4729 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["style"];
const TextInput = fn(17).TextInput;
const Constants = fn(1085);
({ KeyboardThemes: metroRequire, Fonts } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { input: { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT }, placeholderTextColor: null };
let obj3 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
obj.placeholderTextColor = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((style, ref) => {
  const cResult = c.c(15);
  if (cResult[0] !== style) {
    style = style.style;
    const tmp8 = _objectWithoutProperties(style, closure_3);
    cResult[0] = style;
    cResult[1] = tmp8;
    cResult[2] = style;
    let tmp5 = style;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_8();
  const theme = shared.useThemeContext().theme;
  const tmpResult = shared;
  const tmpResult5 = shared;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp11 = shared.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  if (cResult[3] === tmp5) {
    if (cResult[4] === tmp9.input) {
      let tmp12 = cResult[5];
    }
    const tmp14 = shared.isThemeDark(theme) ? timestampProducer.DARK : timestampProducer.LIGHT;
    if (cResult[6] !== tmp11) {
      let hexWithOpacityResult = tmp11;
      if (tmpResult7.isAndroid()) {
        hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp11, 0.5);
        const tmpResult8 = ColorUtils;
      }
      cResult[6] = tmp11;
      cResult[7] = hexWithOpacityResult;
      let tmp15 = hexWithOpacityResult;
      tmpResult7 = PlatformUtils;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === ref) {
        if (cResult[10] === tmp9.placeholderTextColor.color) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp15) {
                let tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const obj2 = { ref, style: tmp12, keyboardAppearance: tmp14, placeholderTextColor: tmp9.placeholderTextColor.color, selectionColor: tmp15 };
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
    const tmpResult6 = shared;
  }
  const items = [tmp9.input, tmp5];
  cResult[3] = tmp5;
  cResult[4] = tmp9.input;
  cResult[5] = items;
  tmp12 = items;
  const isThemeDarkResult = shared.isThemeDark(theme);
}) : ((style, ref) => {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp2 = closure_8();
  const theme = shared.useThemeContext().theme;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = shared.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  const obj3 = { ref, style: null, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  const items = [tmp2.input, style.style];
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
}));
forwardRefResult.displayName = "VoidTextInput";
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;