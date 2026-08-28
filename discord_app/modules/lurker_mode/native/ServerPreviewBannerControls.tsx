// === Module 15697: ServerPreviewBannerControls ===

// Module 15697 (ServerPreviewBannerControls)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import registerAssetDefault from "registerAsset" /* 5465 */;
import IconButton from "IconButton" /* 7952 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 15698 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MOBILE_GUILD_UPSELL_LIST } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { row: null };
createCacheKey = { position: "absolute", top: ThemesDefault.space.PX_16, left: ThemesDefault.space.PX_16, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  let obj = { style: callback3().row, children: null };
  const callback = React.useCallback(() => {
    callback(table[6]).transitionToGuild(closure_5);
  }, []);
  obj = { size: "md", variant: "secondary-overlay", icon: registerAssetDefault, onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["13/7kX"]);
  const items = [callback(IconButton.IconButton, obj), callback(ServerPreviewPillDefault, {})];
  obj[1] = items;
  return callback2(View, obj);
};