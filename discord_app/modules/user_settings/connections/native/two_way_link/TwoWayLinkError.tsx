// === Module 9369: TwoWayLinkError ===

// Module 9369 (TwoWayLinkError)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import Stack_Stack from "Stack/Stack" /* 5184 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7363 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9350 */;
import _modDef9370 from "module_9370" /* 9370 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  ({ onClose, title, body, onRetry } = arg0);
  const tmp = closure_7();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: null };
  const obj3 = { style: twoWayLinkStyles.content, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef9370, style: tmp.image }), hasOwnProperty(Text_Text.Text, { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body })];
  obj3.children = items;
  const items1 = [timestampProducer(React4, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl = util.intl;
  obj9.text = intl.string(util.t["5911Lb"]);
  obj9.onPress = onRetry;
  const items2 = [hasOwnProperty(components_Button_Button.Button, obj9), ];
  const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj10.text = intl2.string(util.t["ETE/oC"]);
  obj10.onPress = onClose;
  items2[1] = hasOwnProperty(components_Button_Button.Button, obj10);
  obj8.children = items2;
  obj7.children = timestampProducer(Stack_Stack.Stack, obj8);
  items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj7);
  obj2.children = items1;
  return timestampProducer(React4, obj2);
};