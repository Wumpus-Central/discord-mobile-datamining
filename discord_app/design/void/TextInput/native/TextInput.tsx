// === Module 9757: TextInput/TextInput ===

// Module 9757 (TextInput/TextInput)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import shared from "shared" /* 4411 */;
import noop from "module_19" /* 19 */;

require = fn;
const TextInput = fn(17).TextInput;
const Constants = fn(1074);
({ KeyboardThemes: closure_4, Fonts } = Constants);
const jsx = fn(21).jsx;
fn(4560);
let obj = { input: null, placeholderTextColor: null };
obj = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
obj.input = obj;
const createStyles = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.placeholderTextColor = createStyles;
let closure_6 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((style, ref) => {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp2 = closure_6();
  let obj = shared;
  const theme = obj.useThemeContext().theme;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = shared.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  obj = { ref, style: null, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  const items = [tmp2.input, style.style];
  obj.style = items;
  let tmp3Result = shared;
  obj.keyboardAppearance = tmp3Result.isThemeDark(theme) ? React4.DARK : React4.LIGHT;
  obj.placeholderTextColor = tmp2.placeholderTextColor.color;
  tmp3Result = PlatformUtils;
  let hexWithOpacityResult = tmp6;
  if (tmp3Result.isAndroid()) {
    hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp6, 0.5);
    const tmp3Result1 = ColorUtils;
  }
  obj.selectionColor = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return <TextInput ref={ref} style={null} keyboardAppearance={null} placeholderTextColor={null} selectionColor={null} />;
});
forwardRefResult.displayName = "VoidTextInput";
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;