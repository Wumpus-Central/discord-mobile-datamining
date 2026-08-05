import { Themes } from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { AccessibilityAnnouncer } from "../../../../../../design/shared.tsx";
import { Button } from "../../../../../../design/void/native.tsx";
import { useTheme } from "../../../../../../hooks/useTheme.tsx";
// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { ellipsisWrapper: null, ellipsis: null, ellipsisDot: null };
  obj = { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: Themes.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  const unsafe_rawColors = Themes.unsafe_rawColors;
  obj[1] = { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 };
  const unsafe_rawColors2 = Themes.unsafe_rawColors;
  obj[2] = { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = function TypingIndicator(style) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  const tmp2 = callback(obj.isThemeLight(useTheme()));
  obj = { style: items, children: jsx(Button /* Button */.Ellipsis, obj) };
  items = [tmp2.ellipsisWrapper, style.style];
  obj = { style: items1, dotStyle: tmp2.ellipsisDot, disableScale: true };
  items1 = [tmp2.ellipsis];
  return <View style={items1} dotStyle={tmp2.ellipsisDot} disableScale />;
};