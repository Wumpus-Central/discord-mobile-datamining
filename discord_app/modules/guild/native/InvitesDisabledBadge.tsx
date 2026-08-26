// discord_app/modules/guild/native/InvitesDisabledBadge.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import registerAssetDefault from "../../../../_runtime/12353_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
let obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 }, pauseBackground: null, pauseRing: null };
obj = { borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, padding: require("Button").BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
obj[1] = obj;
createCacheKey = { borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -require("Button").BADGE_PADDING, right: -require("Button").BADGE_PADDING, padding: require("Button").BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function InvitesDisabledBadge(style) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.pauseRing, style.style];
  obj = { style: tmp.pauseBackground, children: null };
  obj = { style: tmp.pause, themedColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: registerAssetDefault };
  obj[1] = jsx(Button.ThemedIcon, { style: tmp.pause, themedColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: registerAssetDefault });
  obj[1] = <View style={tmp.pause} themedColor={ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={registerAssetDefault} />;
  return <View style={tmp.pause} themedColor={ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={registerAssetDefault} />;
});
const result = require("set").fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;