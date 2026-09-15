// === Module 9889: TextInput/TextInput ===

// Module 9889 (TextInput/TextInput)
import nativeDefault from "native" /* 576 */;
import ColorUtils from "ColorUtils" /* 4489 */;
import shared from "shared" /* 4491 */;
import noop from "module_19" /* 19 */;

require = fn;
const TextInput = fn(17).TextInput;
const Constants = fn(1074);
({ KeyboardThemes: closure_4, Fonts } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj = { input: { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT }, placeholderTextColor: null };
let obj3 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
obj.placeholderTextColor = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let closure_6 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((style, ref) => {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp2 = closure_6();
  const theme = shared.useThemeContext().theme;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = shared.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  const obj3 = { ref, style: null, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  const items = [tmp2.input, style.style];
  obj3.style = items;
  const isThemeDarkResult = shared.isThemeDark(theme);
  obj3.keyboardAppearance = shared.isThemeDark(theme) ? React4.DARK : React4.LIGHT;
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
forwardRefResult.displayName = "VoidTextInput";
const size = fn(2);
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;