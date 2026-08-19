// === Module 8864: VoidTextInput ===

// Module 8864 (VoidTextInput)
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import { TextInput } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ KeyboardThemes: c4, Fonts } = ME);
let obj = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: ThemesDefault.colors.TEXT_DEFAULT };
obj[0] = obj;
const createCacheKey = { color: ThemesDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((style, ref) => {
  const merged = Object.assign(style, Object.create(null));
  const tmp2 = callback();
  let obj = AccessibilityAnnouncer;
  const theme = obj.useThemeContext().theme;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  const tmp6 = AccessibilityAnnouncer.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  obj = { ref, style: items, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  items = [tmp2.input, style.style];
  let tmp3Result = AccessibilityAnnouncer;
  obj[2] = tmp3Result.isThemeDark(theme) ? constants.DARK : constants.LIGHT;
  obj[3] = tmp2.placeholderTextColor.color;
  tmp3Result = obj132;
  let hexWithOpacityResult = tmp6;
  if (tmp3Result.isAndroid()) {
    hexWithOpacityResult = hexToRgba.hexWithOpacity(tmp6, 0.5);
    const tmp3Result1 = hexToRgba;
  }
  obj[4] = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return <TextInput ref={ref} style={items} keyboardAppearance={null} placeholderTextColor={null} selectionColor={null} />;
});
forwardRefResult.displayName = "VoidTextInput";
const result = require("obj132").fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;