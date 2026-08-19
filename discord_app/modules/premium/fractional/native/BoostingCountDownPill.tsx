// === Module 12948: handlePress ===

// Module 12948 (handlePress)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

function handlePress() {
  const obj = { aboutText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["07lzz7"]);
  obj.openLazy(asyncRequireImpl(12949, dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: ThemesDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, marginBottom: 12 };
obj[0] = obj;
obj[1] = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.xxl, justifyContent: "center" };
obj[2] = { textAlign: "center", color: "#FFEAA0" };
obj[3] = { flex: 1, justifyContent: "center" };
obj[4] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
  ({ fpDurationText, isInReverseTrial } = style);
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.fractionalPremiumBanner, style.style];
  let tmp2Result = !isInReverseTrial;
  if (!isInReverseTrial) {
    obj = { style: null, children: null };
    obj[0] = tmp.fpDurationPill;
    obj1 = { variant: "text-sm/bold", style: null, children: null };
    obj1[1] = tmp.fpDurationText;
    obj1[2] = fpDurationText.toUpperCase();
    obj[1] = callback(Text.Text, obj1);
    tmp2Result = callback(closure_4, obj);
  }
  const items1 = [tmp2Result, ];
  const obj2 = { style: tmp.fpUnavailable, children: null };
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  const obj3 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.string(getSystemLocale.t["5nrJDO"]);
  obj2[1] = callback(Text.Text, obj3);
  items1[1] = callback(closure_4, obj2);
  obj[1] = items1;
  obj[2] = callback2(closure_4, obj);
  return callback(closure_3, obj);
};