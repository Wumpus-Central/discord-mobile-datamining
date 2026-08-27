// === Module 11496: ForumPostPinIcon ===

// Module 11496 (ForumPostPinIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import registerAssetDefault from "registerAsset" /* 11497 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
createCacheKey = { pin: null, pinIcon: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 14, width: 14, tintColor: ThemesDefault.colors.WHITE };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 14, width: 14, tintColor: ThemesDefault.colors.WHITE };
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.pin, containerStyle.containerStyle];
  obj = { source: registerAssetDefault, style: tmp.pinIcon };
  obj[1] = jsx(Button.Icon, { source: registerAssetDefault, style: tmp.pinIcon });
  return <View source={registerAssetDefault} style={tmp.pinIcon} />;
};