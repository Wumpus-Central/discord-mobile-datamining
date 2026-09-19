// === Module 13775: BoostingCountDownPill ===

// Module 13775 (BoostingCountDownPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4756 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj2 = { aboutText: null };
  const obj = ActionSheetActionCreatorsDefault;
  const intl = util.intl;
  obj2.aboutText = intl.string(util.t["07lzz7"]);
  obj.openLazy(asyncRequireImpl(13776, dependencyMap.paths), "NitroCreditEducationActionSheet", obj2);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { fractionalPremiumBanner: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 }, fpDurationPill: null, fpDurationText: null, fpUnavailable: null, fpUnavailableTextNoCountdown: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
obj.fpDurationPill = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.xxl, justifyContent: "center" };
obj.fpDurationText = { textAlign: "center", color: "#FFEAA0" };
obj.fpUnavailable = { flex: 1, justifyContent: "center" };
obj.fpUnavailableTextNoCountdown = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
  ({ fpDurationText, isInReverseTrial } = style);
  const tmp = closure_7();
  let tmp4;
  if (!isInReverseTrial) {
    tmp4 = handlePress;
  }
  const obj = { activeOpacity: 0.7, onPress: tmp4, children: null };
  const obj2 = { style: null, children: null };
  const items = [tmp.fractionalPremiumBanner, style.style];
  obj2.style = items;
  let tmp2Result = !isInReverseTrial;
  if (!isInReverseTrial) {
    const obj3 = { style: tmp.fpDurationPill, children: null };
    const obj4 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
    obj3.children = hasOwnProperty(Text_Text.Text, obj4);
    tmp2Result = hasOwnProperty(React4, obj3);
  }
  const items1 = [tmp2Result, ];
  const obj5 = { style: tmp.fpUnavailable, children: null };
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  const obj6 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["5nrJDO"]);
  obj5.children = hasOwnProperty(Text_Text.Text, obj6);
  items1[1] = hasOwnProperty(React4, obj5);
  obj2.children = items1;
  obj.children = timestampProducer(React4, obj2);
  return hasOwnProperty(React3, obj);
};