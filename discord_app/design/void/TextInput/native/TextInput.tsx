// === Module 8602: VoidTextInput ===

// Module 8602 (VoidTextInput)
import { TextInput } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let Fonts;
let c4;
const require = arg1;
({ KeyboardThemes: c4, Fonts } = ME);
let obj = { input: null, placeholderTextColor: null };
obj = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_DEFAULT };
obj[0] = obj;
createCacheKey = { color: require("Themes").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const forwardRefResult = require("noop").forwardRef((style, ref) => {
  const merged = Object.assign(style, Object.create(null));
  const tmp2 = callback();
  let obj = require(4101) /* AccessibilityAnnouncer */;
  const theme = obj.useThemeContext().theme;
  const obj2 = require(4101) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  const tmp6 = require(4101) /* AccessibilityAnnouncer */.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  obj = { ref, style: items, keyboardAppearance: null, placeholderTextColor: null, selectionColor: null };
  items = [tmp2.input, style.style];
  let tmp3Result = tmp3(4101);
  obj[2] = tmp3Result.isThemeDark(theme) ? closure_4.DARK : closure_4.LIGHT;
  obj[3] = tmp2.placeholderTextColor.color;
  tmp3Result = tmp3(500);
  let hexWithOpacityResult = tmp6;
  if (tmp3Result.isAndroid()) {
    hexWithOpacityResult = tmp3(4099).hexWithOpacity(tmp6, 0.5);
    const tmp3Result1 = tmp3(4099);
  }
  obj[4] = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return <TextInput ref={arg1} style={items} keyboardAppearance={null} placeholderTextColor={null} selectionColor={null} />;
});
forwardRefResult.displayName = "VoidTextInput";
const result = require("ME").fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;