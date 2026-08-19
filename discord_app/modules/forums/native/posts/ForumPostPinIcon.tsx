// discord_app/modules/forums/native/posts/ForumPostPinIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import registerAssetDefault from "../../../../../_runtime/11180_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
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