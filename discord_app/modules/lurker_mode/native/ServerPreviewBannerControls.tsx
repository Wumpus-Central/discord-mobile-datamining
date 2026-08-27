// discord_app/modules/lurker_mode/native/ServerPreviewBannerControls.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import registerAssetDefault from "../../../../_runtime/05452_registerAsset.js";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import ServerPreviewPillDefault from "ServerPreviewPill.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MOBILE_GUILD_UPSELL_LIST } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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