// discord_app/modules/guild/native/InvitesDisabledBadge.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import registerAssetDefault from "../../../../_runtime/11903_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = fn;
let obj = { borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, padding: require("Button").BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
obj[1] = obj;
const createCacheKey = { borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -require("Button").BADGE_PADDING, right: -require("Button").BADGE_PADDING, padding: require("Button").BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function InvitesDisabledBadge(style) {
  const tmp = callback();
  const items = [tmp.pauseRing, style.style];
  const obj = { style: tmp.pause, themedColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: registerAssetDefault };
  obj[1] = jsx(Button.ThemedIcon, { style: tmp.pause, themedColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: registerAssetDefault });
  obj[1] = <View style={tmp.pause} themedColor={ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={registerAssetDefault} />;
  return <View style={tmp.pause} themedColor={ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={registerAssetDefault} />;
});
const result = require("obj132").fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;