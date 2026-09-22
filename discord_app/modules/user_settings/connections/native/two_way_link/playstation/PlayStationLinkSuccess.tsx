// === Module 9388: PlayStationLinkSuccess ===

// Module 9388 (PlayStationLinkSuccess)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7370 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9357 */;
import _modDef9373 from "module_9373" /* 9373 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = function PlayStationLinkSuccess(onClose) {
  const tmp = closure_8();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: null };
  const obj3 = { style: twoWayLinkStyles.content, children: null };
  const items = [timestampProducer(React4, { source: noop.useMemo(() => ({ uri: _modDef9373 }), []), style: tmp.image }), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.e6SOl0);
  items[1] = timestampProducer(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.QjAZAQ);
  items[2] = timestampProducer(Text_Text.Text, obj6);
  obj3.children = items;
  const items1 = [React5(hasOwnProperty, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t.i4jeWR);
  obj9.onPress = onClose.onClose;
  obj8.children = timestampProducer(components_Button_Button.Button, obj9);
  obj7.children = timestampProducer(hasOwnProperty, obj8);
  items1[1] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj7);
  obj2.children = items1;
  return React5(hasOwnProperty, obj2);
};