import get_ActivityIndicator from "get ActivityIndicator";
import { getPremiumGroupProductName as closure_5 } from "SubscriptionStatusTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
function handlePress() {
  let obj = importDefault(4253);
  obj = { aboutText: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { premiumGroupProductName: null };
  obj[0] = callback();
  obj[0] = intl.formatToPlainString(importDefault(2867)["5xN/C1"], obj);
  obj.openLazy(require(1959) /* asyncRequireImpl */(12693, dependencyMap.paths), "PremiumGroupEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
let obj = { premiumGroupBanner: null, pgUnavailable: null, pgUnavailableText: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: require("Themes").colors.STATUS_WARNING, borderWidth: 1, borderRadius: require("Themes").radii.lg, marginBottom: 12 };
obj[0] = obj;
obj[1] = { flex: 1, justifyContent: "center" };
obj[2] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  const tmp = callback2();
  let obj = { activeOpacity: 0.7, onPress: handlePress, children: null };
  obj = { style: items, children: null };
  items = [tmp.premiumGroupBanner, style.style];
  obj = { style: tmp.pgUnavailable, children: null };
  const obj1 = { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl.string(require(1236) /* getSystemLocale */.t["5nrJDO"]);
  obj[1] = jsx(require(4281) /* Text */.Text, { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: null });
  obj[1] = <closure_4 style={tmp.pgUnavailable}>{null}</closure_4>;
  obj[2] = <closure_4 style={tmp.pgUnavailable}>{null}</closure_4>;
  return <closure_3 style={tmp.pgUnavailable}>{null}</closure_3>;
};