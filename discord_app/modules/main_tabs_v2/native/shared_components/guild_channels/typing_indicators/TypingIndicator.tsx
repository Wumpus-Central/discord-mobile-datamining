// === Module 15519: TypingIndicator ===

// Module 15519 (TypingIndicator)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useThemeDefault from "useTheme" /* 4379 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { ellipsisWrapper: null, ellipsis: null, ellipsisDot: null };
  obj = { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  obj[1] = { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 };
  const unsafe_rawColors2 = ThemesDefault.unsafe_rawColors;
  obj[2] = { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = function TypingIndicator(style) {
  let obj = AccessibilityAnnouncer;
  const tmp2 = callback(obj.isThemeLight(useThemeDefault()));
  obj = { style: items, children: jsx(Button.Ellipsis, obj) };
  items = [tmp2.ellipsisWrapper, style.style];
  obj = { style: items1, dotStyle: tmp2.ellipsisDot, disableScale: true };
  items1 = [tmp2.ellipsis];
  return <View style={items1} dotStyle={tmp2.ellipsisDot} disableScale />;
};