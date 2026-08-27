// discord_app/modules/premium/fractional/native/BoostingCountDownPill.tsx
import set from "../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function handlePress() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { aboutText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["07lzz7"]);
  obj.openLazy(asyncRequireImpl(13089, dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { fractionalPremiumBanner: null, fpDurationPill: null, fpDurationText: null, fpUnavailable: null, fpUnavailableTextNoCountdown: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: ThemesDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, marginBottom: 12 };
obj[0] = obj;
obj[1] = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.xxl, justifyContent: "center" };
obj[2] = { textAlign: "center", color: "#FFEAA0" };
obj[3] = { flex: 1, justifyContent: "center" };
obj[4] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.xxl, justifyContent: "center" };
const result = set.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
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
    obj1 = { variant: "text-sm/bold", style: null, children: null };
    obj1[1] = tmp.fpDurationText;
    obj1[2] = fpDurationText.toUpperCase();
    obj[1] = tmp2(Text.Text, obj1);
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
  obj3[3] = intl.string(getSystemLocale.t["5nrJDO"]);
  obj2[1] = closure_5(Text.Text, obj3);
  items1[1] = closure_5(closure_4, obj2);
  obj[1] = items1;
  obj[2] = closure_6(closure_4, obj);
  return closure_5(closure_3, obj);
};