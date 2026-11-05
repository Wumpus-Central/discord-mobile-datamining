// === Module 14854: XboxLinkEducation ===

// Module 14854 (XboxLinkEducation)
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import Text_Text from "Text/Text" /* 5763 */;
import components_Button_Button from "components/Button/Button" /* 5770 */;
import FastImageDefault from "FastImage" /* 5854 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7431 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9886 */;
import _modDef14855 from "module_14855" /* 14855 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  const tmp = closure_8();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const memo = noop.useMemo(() => ({ uri: _modDef14855 }), []);
  items = [timestampProducer(FastImageDefault, { source: memo, style: tmp.image }), , ];
  const obj6 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.jHytat);
  items[1] = timestampProducer(Text_Text.Text, obj6);
  const obj7 = { variant: "body-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = timestampProducer(Text_Text.Text, obj7);
  obj4.children = items;
  const items1 = [metroImportDefault(View, obj4), ];
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
  return metroImportDefault(View, obj3);
};