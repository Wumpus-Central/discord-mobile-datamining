// === Module 9263: PlayStationLinkSuccess ===

// Module 9263 (PlayStationLinkSuccess)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9226 */;
import _modDef9264 from "module_9264" /* 9264 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = function PlayStationLinkSuccess(onClose) {
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = closure_8();
  const items = [timestampProducer(React4, { source: noop.useMemo(() => ({ uri: _modDef9264 }), []), style: closure_8().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.e6SOl0);
  items[1] = timestampProducer(Text_Text.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.QjAZAQ);
  items[2] = timestampProducer(Text_Text.Text, obj3);
  obj.children = items;
  const items1 = [React5(hasOwnProperty, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = timestampProducer(components_Button_Button.Button, obj6);
  obj4.children = timestampProducer(hasOwnProperty, obj5);
  items1[1] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return React5(hasOwnProperty, obj);
};