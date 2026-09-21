// === Module 9392: CrunchyrollLinkSuccess ===

// Module 9392 (CrunchyrollLinkSuccess)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7368 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9351 */;
import _modDef9393 from "module_9393" /* 9393 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  const tmp = closure_7();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: null };
  const obj3 = { style: twoWayLinkStyles.content, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef9393, style: tmp.image }), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.Fnvxvk);
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.YwXceg);
  items[2] = hasOwnProperty(Text_Text.Text, obj6);
  obj3.children = items;
  const items1 = [timestampProducer(React4, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t.i4jeWR);
  obj9.onPress = onClose.onClose;
  obj8.children = hasOwnProperty(components_Button_Button.Button, obj9);
  obj7.children = hasOwnProperty(React4, obj8);
  items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj7);
  obj2.children = items1;
  return timestampProducer(React4, obj2);
};