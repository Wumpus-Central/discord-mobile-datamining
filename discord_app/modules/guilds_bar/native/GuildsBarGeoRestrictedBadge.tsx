// discord_app/modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../_runtime/12264_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

let obj = { badgeImageContainer: null, badgeImage: null };
obj = {
  position: "absolute",
  bottom: -3,
  right: -3,
  height: 22,
  width: 22,
  borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  backgroundColor: ThemesDefault.colors.STATUS_WARNING_BACKGROUND,
  borderWidth: 3,
  borderRadius: 11,
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
obj[0] = obj;
createCacheKey = {
  height: 16,
  width: 16,
  opacity: require("result").DARK_1_LIGHT_08,
  tintColor: ThemesDefault.colors.BLACK,
};
obj[1] = createCacheKey;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedBadge(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.badgeImageContainer, style.style];
  obj = { source: registerAssetDefault, style: tmp.badgeImage };
  obj[2] = jsx(preloadDefault, { source: registerAssetDefault, style: tmp.badgeImage });
  return <View source={registerAssetDefault} style={tmp.badgeImage} />;
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;
