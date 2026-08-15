// discord_app/modules/lurker_mode/native/ServerPreviewBannerControls.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { MOBILE_GUILD_UPSELL_LIST } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/06317_registerAsset.js";
import { IconButton } from "../../../design/components/Button/native/IconButton.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { ServerPreviewPill } from "ServerPreviewPill.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { row: null };
createCacheKey = { position: "absolute", top: require("Themes").space.PX_16, left: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  let obj = { style: createCacheKey().row, children: null };
  const callback = React.useCallback(() => {
    callback(table[6]).transitionToGuild(closure_5);
  }, []);
  obj = { size: "md", variant: "secondary-overlay", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  obj[2] = registerAsset;
  obj[3] = callback;
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["13/7kX"]);
  const items = [callback(IconButton.IconButton, obj), callback(ServerPreviewPill, {})];
  obj[1] = items;
  return callback2(View, obj);
};