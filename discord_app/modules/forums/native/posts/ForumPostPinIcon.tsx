// discord_app/modules/forums/native/posts/ForumPostPinIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import registerAssetDefault from "../../../../../_runtime/12004_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { pin: null, pinIcon: null };
createCacheKey = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.round,
  width: 23,
  height: 23,
  marginEnd: 4,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
};
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
}
