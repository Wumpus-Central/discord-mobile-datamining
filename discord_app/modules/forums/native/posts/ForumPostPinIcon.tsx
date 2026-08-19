// === Module 11179: ForumPostPinIcon ===

// Module 11179 (ForumPostPinIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import registerAssetDefault from "registerAsset" /* 11180 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 14, width: 14, tintColor: ThemesDefault.colors.WHITE };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = callback();
  const items = [tmp.pin, containerStyle.containerStyle];
  const obj = { source: registerAssetDefault, style: tmp.pinIcon };
  obj[1] = jsx(Button.Icon, { source: registerAssetDefault, style: tmp.pinIcon });
  return <View source={registerAssetDefault} style={tmp.pinIcon} />;
};