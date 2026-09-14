// discord_app/modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3074 from "../PremiumGroup.messages.js";
import PremiumGroupConstants from "../PremiumGroupConstants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const HELP_CENTER_LINK = PremiumGroupConstants.HELP_CENTER_LINK;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  container: { marginTop: 32, marginHorizontal: 30 },
  aboutContainer: {
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    justifyContent: "center",
    borderRadius: nativeDefault.radii.lg,
    marginBottom: 12,
  },
  warningIcon: { margin: 16 },
  aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 },
  helpdeskText: { textAlign: "center", marginBottom: 24 },
};
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(children) {
  const tmp = closure_7();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.aboutContainer, children: null };
  const items = [
    hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }),
    hasOwnProperty(View, {
      style: tmp.aboutTextContainer,
      children: hasOwnProperty(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        children: children.aboutText,
      }),
    }),
  ];
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3)];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = util.intl;
  obj6.children = intl.format(_modDef3074.ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
}
