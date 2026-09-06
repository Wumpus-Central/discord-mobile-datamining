// === Module 9278: CrunchyrollLinkSuccess ===

// Module 9278 (CrunchyrollLinkSuccess)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9226 */;
import _modDef9279 from "module_9279" /* 9279 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = closure_7();
  const items = [hasOwnProperty(React3, { source: _modDef9279, style: closure_7().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Fnvxvk);
  items[1] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.YwXceg);
  items[2] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  const items1 = [timestampProducer(React4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = hasOwnProperty(components_Button_Button.Button, obj6);
  obj4.children = hasOwnProperty(React4, obj5);
  items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return timestampProducer(React4, obj);
};