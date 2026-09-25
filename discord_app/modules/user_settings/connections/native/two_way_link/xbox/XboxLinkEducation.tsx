// === Module 8545: XboxLinkEducation ===

// Module 8545 (XboxLinkEducation)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6539 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8530 */;
import _modDef8546 from "module_8546" /* 8546 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  const tmp = closure_9();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const items = [React5(React4, { source: noop.useMemo(() => ({ uri: _modDef8546 }), []), style: tmp.image }), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.jHytat);
  items[1] = React5(Text_Text.Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = React5(Text_Text.Text, obj7);
  obj4.children = items;
  const items1 = [React6(hasOwnProperty, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj9 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj10 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.i4jeWR);
  obj10.onPress = onClose.onClose;
  obj9.children = React5(components_Button_Button.Button, obj10);
  obj8.children = React5(hasOwnProperty, obj9);
  items1[1] = React5(common_SafeAreaView.SafeAreaPaddingView, obj8);
  obj3.children = items1;
  return React6(hasOwnProperty, obj3);
};