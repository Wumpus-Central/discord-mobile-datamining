// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx
import util from "../../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import _modDef14578 from "../../../../../../../discord_assets/assets/connections/console_setup_confirmation.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx",
);

export default function XboxLinkEducation(onClose) {
  const tmp = closure_8();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const memo = noop.useMemo(() => ({ uri: _modDef14578 }), []);
  const items = [timestampProducer(FastImageDefault, { source: memo, style: tmp.image }), ,];
  const obj6 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: twoWayLinkStyles.title,
    children: null,
  };
  const intl = util.intl;
  obj6.children = intl.string(util.t.jHytat);
  items[1] = timestampProducer(Text_Text.Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = timestampProducer(Text_Text.Text, obj7);
  obj4.children = items;
  const items1 = [React5(View, obj4)];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj9 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj10 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.i4jeWR);
  obj10.onPress = onClose.onClose;
  obj9.children = timestampProducer(components_Button_Button.Button, obj10);
  obj8.children = timestampProducer(View, obj9);
  items1[1] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj8);
  obj3.children = items1;
  return React5(View, obj3);
}
