// === Module 14593: PlayStationLinkSuccess ===

// Module 14593 (PlayStationLinkSuccess)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9710 */;
import _modDef14578 from "module_14578" /* 14578 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export function PlayStationLinkSuccess(onClose) {
  const tmp = closure_7();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: null };
  const obj3 = { style: twoWayLinkStyles.content, children: null };
  const memo = noop.useMemo(() => ({ uri: _modDef14578 }), []);
  const items = [hasOwnProperty(FastImageDefault, { source: memo, style: tmp.image }), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.e6SOl0);
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.QjAZAQ);
  items[2] = hasOwnProperty(Text_Text.Text, obj6);
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t.i4jeWR);
  obj9.onPress = onClose.onClose;
  obj8.children = hasOwnProperty(components_Button_Button.Button, obj9);
  obj7.children = hasOwnProperty(View, obj8);
  items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj7);
  obj2.children = items1;
  return timestampProducer(View, obj2);
}