// === Module 11357: styles ===

// Module 11357 (styles)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

noopAll;
createCacheKey = { iconWrapper: null };
createCacheKey = { justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  const obj = { style: null, children: null };
  const items = [createCacheKey().iconWrapper, wrapperSize.wrapperStyle, { height: num, width: num }];
  obj[0] = items;
  obj[1] = wrapperSize.icon;
  return <View style={null}>{null}</View>;
};
export const useAppLauncherOptionIconStyles = createCacheKey;