// discord_app/modules/premium/fractional/native/BoostingCountDownPill.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  const obj = { aboutText: null };
  const intl = util.intl;
  obj.aboutText = intl.string(util.t["07lzz7"]);
  obj.openLazy(asyncRequireImpl(13518, dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  fractionalPremiumBanner: null,
  fpDurationPill: null,
  fpDurationText: null,
  fpUnavailable: null,
  fpUnavailableTextNoCountdown: null,
};
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  flexDirection: "row",
  gap: 12,
  padding: 12,
  justifyContent: "center",
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  marginBottom: 12,
};
obj.fractionalPremiumBanner = obj;
obj.fpDurationPill = {
  flex: 1,
  paddingVertical: 12,
  paddingHorizontal: 27,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.xxl,
  justifyContent: "center",
};
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
    obj.children = hasOwnProperty(Text_Text.Text, obj1);
    tmp2Result = hasOwnProperty(React4, obj);
  }
  const items1 = [tmp2Result];
  const obj2 = { style: tmp.fpUnavailable, children: null };
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  const obj3 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["5nrJDO"]);
  obj2.children = hasOwnProperty(Text_Text.Text, obj3);
  items1[1] = hasOwnProperty(React4, obj2);
  obj.children = items1;
  obj.children = timestampProducer(React4, obj);
  return hasOwnProperty(React3, obj);
}
