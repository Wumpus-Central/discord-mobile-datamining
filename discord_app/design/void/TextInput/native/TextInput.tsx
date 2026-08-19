// discord_app/design/void/TextInput/native/TextInput.tsx
import obj132 from "../../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer from "../../../shared.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import { TextInput } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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