// === Module 9757: VoidTextInput ===

// Module 9757 (VoidTextInput)
import ThemesDefault from "Themes" /* 576 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import { TextInput } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ KeyboardThemes: c4, Fonts } = ME);
let obj = { input: null, placeholderTextColor: null };
obj = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: ThemesDefault.colors.TEXT_DEFAULT };
obj[0] = obj;
createCacheKey = { color: ThemesDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((style, ref) => {
  const merged = Object.assign(style, Object.create(null));
  const tmp2 = callback();
  let obj = AccessibilityAnnouncer;
  const theme = obj.useThemeContext().theme;
  const obj2 = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  const tmp6 = AccessibilityAnnouncer.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  obj = { ref, style: items, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  items = [tmp2.input, style.style];
  let tmp3Result = tmp3(4411);
  obj[2] = tmp3Result.isThemeDark(theme) ? closure_4.DARK : closure_4.LIGHT;
  obj[3] = tmp2.placeholderTextColor.color;
  tmp3Result = tmp3(1115);
  let hexWithOpacityResult = tmp6;
  if (tmp3Result.isAndroid()) {
    hexWithOpacityResult = tmp3(4409).hexWithOpacity(tmp6, 0.5);
    const tmp3Result1 = tmp3(4409);
  }
  obj[4] = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return <TextInput ref={arg1} style={items} keyboardAppearance={null} placeholderTextColor={null} selectionColor={null} />;
});
forwardRefResult.displayName = "VoidTextInput";
const result = require("set").fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;