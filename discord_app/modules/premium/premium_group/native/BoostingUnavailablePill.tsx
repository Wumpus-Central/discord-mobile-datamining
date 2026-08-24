// === Module 13001: handlePress ===

// Module 13001 (handlePress)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import messagesProxyDefault from "messagesProxy" /* 2920 */;
import SubscriptionStatusTypes from "SubscriptionStatusTypes" /* 4056 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import Text from "Text" /* 4739 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createCacheKey from "createCacheKey" /* 4668 */;

function handlePress() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { aboutText: null };
  const intl = getSystemLocale.intl;
  obj = { premiumGroupProductName: callback() };
  obj[0] = intl.formatToPlainString(messagesProxyDefault["5xN/C1"], obj);
  obj.openLazy(asyncRequireImpl(13002, dependencyMap.paths), "PremiumGroupEducationActionSheet", obj);
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