// === Module 14641: CrunchyrollLinkSuccess ===

// Module 14641 (CrunchyrollLinkSuccess)
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9730 */;
import _modDef14642 from "module_14642" /* 14642 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  const tmp = closure_6();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: null };
  const obj3 = { style: twoWayLinkStyles.content, children: null };
  const obj4 = { source: null, style: null };
  obj4.source = _modDef14642;
  obj4.style = tmp.image;
  const items = [React4(FastImageDefault, obj4), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.Fnvxvk);
  items[1] = React4(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.YwXceg);
  items[2] = React4(Text_Text.Text, obj6);
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t.i4jeWR);
  obj9.onPress = onClose.onClose;
  obj8.children = React4(components_Button_Button.Button, obj9);
  obj7.children = React4(View, obj8);
  items1[1] = React4(common_SafeAreaView.SafeAreaPaddingView, obj7);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
};