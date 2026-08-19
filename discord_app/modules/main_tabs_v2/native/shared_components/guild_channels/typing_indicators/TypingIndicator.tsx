// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../../hooks/useTheme.tsx";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0) => {
  const obj = { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  obj[1] = { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 };
  const unsafe_rawColors2 = ThemesDefault.unsafe_rawColors;
  obj[2] = { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = function TypingIndicator(style) {
  let obj = AccessibilityAnnouncer;
  const tmp2 = callback(obj.isThemeLight(useThemeDefault()));
  { style: items, children: jsx(Button.Ellipsis, obj) };
  items = [tmp2.ellipsisWrapper, style.style];
  obj = { style: items1, dotStyle: tmp2.ellipsisDot, disableScale: true };
  items1 = [tmp2.ellipsis];
  return <View style={items1} dotStyle={tmp2.ellipsisDot} disableScale />;
};