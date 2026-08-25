// discord_app/modules/premium/premium_group/native/BoostingUnavailablePill.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import messagesProxyDefault from "../PremiumGroup.messages.js";
import SubscriptionStatusTypes from "../PremiumGroupConstants.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function handlePress() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { aboutText: null };
  const intl = getSystemLocale.intl;
  obj = { premiumGroupProductName: callback() };
  obj[0] = intl.formatToPlainString(messagesProxyDefault["5xN/C1"], obj);
  obj.openLazy(asyncRequireImpl(12990, dependencyMap.paths), "PremiumGroupEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
let closure_5 = SubscriptionStatusTypes.getPremiumGroupProductName;
const jsx = jsxProd.jsx;
let obj = { premiumGroupBanner: null, pgUnavailable: null, pgUnavailableText: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: ThemesDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, marginBottom: 12 };
obj[0] = obj;
obj[1] = { flex: 1, justifyContent: "center" };
obj[2] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  const tmp = callback2();
  let obj = { activeOpacity: 0.7, onPress: handlePress, children: null };
  obj = { style: items, children: null };
  items = [tmp.premiumGroupBanner, style.style];
  obj = { style: tmp.pgUnavailable, children: null };
  obj1 = { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t["5nrJDO"]);
  obj[1] = jsx(Text.Text, { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: null });
  obj[1] = <closure_4 style={tmp.pgUnavailable}>{null}</closure_4>;
  obj[2] = <closure_4 style={tmp.pgUnavailable}>{null}</closure_4>;
  return <closure_3 style={tmp.pgUnavailable}>{null}</closure_3>;
};