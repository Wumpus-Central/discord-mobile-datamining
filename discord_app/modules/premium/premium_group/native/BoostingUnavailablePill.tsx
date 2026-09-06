// discord_app/modules/premium/premium_group/native/BoostingUnavailablePill.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef3063 from "../PremiumGroup.messages.js";
import PremiumGroupConstants from "../PremiumGroupConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  let obj = { aboutText: null };
  const intl = util.intl;
  obj = { premiumGroupProductName: closure_5() };
  obj.aboutText = intl.formatToPlainString(_modDef3063["5xN/C1"], obj);
  obj.openLazy(asyncRequireImpl(13516, dependencyMap.paths), "PremiumGroupEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
let closure_5 = PremiumGroupConstants.getPremiumGroupProductName;
const jsx = jsxProd.jsx;
let obj = { premiumGroupBanner: null, pgUnavailable: null, pgUnavailableText: null };
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
obj.premiumGroupBanner = obj;
obj.pgUnavailable = { flex: 1, justifyContent: "center" };
obj.pgUnavailableText = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  const tmp = closure_7();
  let obj = { activeOpacity: 0.7, onPress: handlePress, children: null };
  obj = { style: null, children: null };
  const items = [tmp.premiumGroupBanner, style.style];
  obj.style = items;
  obj = { style: tmp.pgUnavailable, children: null };
  const obj1 = {
    variant: "text-md/normal",
    color: "interactive-text-active",
    style: tmp.pgUnavailableText,
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t["5nrJDO"]);
  obj.children = jsx(Text_Text.Text, {
    variant: "text-md/normal",
    color: "interactive-text-active",
    style: tmp.pgUnavailableText,
    children: null,
  });
  obj.children = <React4 style={tmp.pgUnavailable}>{null}</React4>;
  obj.children = <React4 style={tmp.pgUnavailable}>{null}</React4>;
  return <React3 style={tmp.pgUnavailable}>{null}</React3>;
}
