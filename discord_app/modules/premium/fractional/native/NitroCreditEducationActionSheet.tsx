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
  aboutContainer: null,
  warningIcon: null,
  aboutTextContainer: null,
  helpdeskText: null,
};
obj = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  marginBottom: 12,
};
obj.aboutContainer = obj;
obj.warningIcon = { margin: 16 };
obj.aboutTextContainer = { justifyContent: "center", flex: 1, marginRight: 30 };
obj.helpdeskText = { textAlign: "center", marginBottom: 24 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(children) {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.aboutContainer, children: null };
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
  obj.children = items;
  const items1 = [timestampProducer(View, obj)];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = util.intl;
  const obj4 = { helpCenterLink: null };
  const obj1 = { size: "lg", style: tmp.warningIcon };
  const obj2 = {
    style: tmp.aboutTextContainer,
    children: hasOwnProperty(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "text-overlay-light",
      children: children.aboutText,
    }),
  };
  obj4.helpCenterLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj3.children = intl.format(util.t.bg3jBj, obj4);
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items1;
  obj.children = timestampProducer(View, obj);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
}
