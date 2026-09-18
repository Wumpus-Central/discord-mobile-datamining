// discord_app/modules/premium/premium_group/native/BoostingUnavailablePill.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import _modDef3160 from "../PremiumGroup.messages.js";
import PremiumGroupConstants from "../PremiumGroupConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  const obj2 = { aboutText: null };
  const obj = ActionSheetActionCreatorsDefault;
  const intl = util.intl;
  const tmp = asyncRequireImpl(13719, dependencyMap.paths);
  obj2.aboutText = intl.formatToPlainString(_modDef3160["5xN/C1"], { premiumGroupProductName: closure_5() });
  obj.openLazy(tmp, "PremiumGroupEducationActionSheet", obj2);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
let closure_5 = PremiumGroupConstants.getPremiumGroupProductName;
const jsx = jsxProd.jsx;
let obj = {
  premiumGroupBanner: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    flexDirection: "row",
    gap: 12,
    padding: 12,
    justifyContent: "center",
    borderColor: nativeDefault.colors.STATUS_WARNING,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
    marginBottom: 12,
  },
  pgUnavailable: { flex: 1, justifyContent: "center" },
  pgUnavailableText: { textAlign: "center" },
};
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  const tmp = closure_7();
  const obj = { activeOpacity: 0.7, onPress: handlePress, children: null };
  const obj2 = { style: null, children: null };
  const items = [tmp.premiumGroupBanner, style.style];
  obj2.style = items;
  const obj3 = { style: tmp.pgUnavailable, children: null };
  const obj4 = {
    variant: "text-md/normal",
    color: "interactive-text-active",
    style: tmp.pgUnavailableText,
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t["5nrJDO"]);
  obj3.children = jsx(Text_Text.Text, {
    variant: "text-md/normal",
    color: "interactive-text-active",
    style: tmp.pgUnavailableText,
    children: null,
  });
  obj2.children = <React4 style={tmp.pgUnavailable}>{null}</React4>;
  obj.children = <React4 style={null}>{null}</React4>;
  return (
    <React3 activeOpacity={0.7} onPress={handlePress}>
      {null}
    </React3>
  );
}
