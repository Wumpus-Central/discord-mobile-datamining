// === Module 15682: GuildThemeNuxPreviewGraphic ===

// Module 15682 (GuildThemeNuxPreviewGraphic)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import PreviewOverlayDefault from "PreviewOverlay" /* 15683 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

noopAll;
createCacheKey = { container: null };
createCacheKey = { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  ({ themeSettings, isPersonal } = arg0);
  const obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: callback().container, children: null };
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj[3] = jsx(PreviewOverlayDefault, { themeSettings: tmp4 });
  return <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={callback().container}>{null}</View>;
};