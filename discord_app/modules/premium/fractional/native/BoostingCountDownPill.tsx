// discord_app/modules/premium/fractional/native/BoostingCountDownPill.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
function handlePress() {
  let obj = importDefault(4161);
  obj = { aboutText: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["07lzz7"]);
  obj.openLazy(require(1959) /* asyncRequireImpl */(12568, dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { fractionalPremiumBanner: null, fpDurationPill: null, fpDurationText: null, fpUnavailable: null, fpUnavailableTextNoCountdown: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: require("Themes").colors.STATUS_WARNING, borderWidth: 1, borderRadius: require("Themes").radii.lg, marginBottom: 12 };
obj[0] = obj;
obj[1] = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.xxl, justifyContent: "center" };
obj[2] = { textAlign: "center", color: "#FFEAA0" };
obj[3] = { flex: 1, justifyContent: "center" };
obj[4] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.xxl, justifyContent: "center" };
const result = require("createCacheKey").fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
  let fpDurationText;
  let isInReverseTrial;
  ({ fpDurationText, isInReverseTrial } = style);
  const tmp = callback();
  let tmp4;
  if (!isInReverseTrial) {
    tmp4 = handlePress;
  }
  let obj = { activeOpacity: 0.7, onPress: tmp4, children: null };
  obj = { style: items, children: null };
  items = [tmp.fractionalPremiumBanner, style.style];
  let tmp2Result = !isInReverseTrial;
  if (!isInReverseTrial) {
    obj = { style: null, children: null };
    obj[0] = tmp.fpDurationPill;
    const obj1 = { variant: "text-sm/bold", style: null, children: null };
    obj1[1] = tmp.fpDurationText;
    obj1[2] = fpDurationText.toUpperCase();
    obj[1] = tmp2(require(4189) /* Text */.Text, obj1);
    tmp2Result = tmp2(tmp6, obj);
  }
  const items1 = [tmp2Result, ];
  const obj2 = { style: tmp.fpUnavailable, children: null };
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  const obj3 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: null };
  const intl = tmp10(1236).intl;
  obj3[3] = intl.string(require(1236) /* getSystemLocale */.t["5nrJDO"]);
  obj2[1] = closure_5(require(4189) /* Text */.Text, obj3);
  items1[1] = closure_5(closure_4, obj2);
  obj[1] = items1;
  obj[2] = closure_6(closure_4, obj);
  return closure_5(closure_3, obj);
};