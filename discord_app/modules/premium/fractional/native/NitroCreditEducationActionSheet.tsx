// discord_app/modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
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
const result = size.fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(children) {
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
  const obj7 = { helpCenterLink: null };
  const obj4 = { size: "lg", style: tmp.warningIcon };
  const obj5 = {
    style: tmp.aboutTextContainer,
    children: hasOwnProperty(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "text-overlay-light",
      children: children.aboutText,
    }),
  };
  obj7.helpCenterLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj6.children = intl.format(util.t.bg3jBj, obj7);
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
}
