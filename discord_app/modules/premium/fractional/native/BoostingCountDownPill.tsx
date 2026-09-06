// === Module 13517: BoostingCountDownPill ===

// Module 13517 (BoostingCountDownPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = { aboutText: null };
  const intl = util.intl;
  obj.aboutText = intl.string(util.t["07lzz7"]);
  obj.openLazy(asyncRequireImpl(13518, dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { fractionalPremiumBanner: null, fpDurationPill: null, fpDurationText: null, fpUnavailable: null, fpUnavailableTextNoCountdown: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
obj.fractionalPremiumBanner = obj;
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
  let obj = { activeOpacity: 0.7, onPress: tmp4, children: null };
  obj = { style: null, children: null };
  const items = [tmp.fractionalPremiumBanner, style.style];
  obj.style = items;
  let tmp2Result = !isInReverseTrial;
  if (!isInReverseTrial) {
    obj = { style: tmp.fpDurationPill, children: null };
    const obj1 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
    obj.children = tmp2(Text_Text.Text, obj1);
    tmp2Result = tmp2(tmp6, obj);
  }
  const items1 = [tmp2Result, ];
  const obj2 = { style: tmp.fpUnavailable, children: null };
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  const obj3 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: null };
  const intl = tmp10(1114).intl;
  obj3.children = intl.string(util.t["5nrJDO"]);
  obj2.children = hasOwnProperty(Text_Text.Text, obj3);
  items1[1] = hasOwnProperty(React4, obj2);
  obj.children = items1;
  obj.children = timestampProducer(React4, obj);
  return hasOwnProperty(React3, obj);
};