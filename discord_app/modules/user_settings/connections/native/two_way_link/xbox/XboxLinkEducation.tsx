// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx
import util from "../../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import _modDef9264 from "../../../../../../../discord_assets/assets/connections/console_setup_confirmation.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx",
);

export default function XboxLinkEducation(onClose) {
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = HelpdeskUtilsDefault;
  const articleURL = obj1.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: noop.useMemo(() => ({ uri: _modDef9264 }), []), style: closure_9().image };
  const items = [React5(React4, obj1), ,];
  const obj2 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: twoWayLinkStyles.title,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.jHytat);
  items[1] = React5(Text_Text.Text, obj2);
  const obj3 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = React5(Text_Text.Text, obj3);
  obj.children = items;
  const items1 = [React6(hasOwnProperty, obj)];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = React5(components_Button_Button.Button, obj6);
  obj4.children = React5(hasOwnProperty, obj5);
  items1[1] = React5(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return React6(hasOwnProperty, obj);
}
