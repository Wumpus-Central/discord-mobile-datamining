// === Module 9267: TwoWayLinkError ===

// Module 9267 (TwoWayLinkError)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9226 */;
import _modDef9268 from "module_9268" /* 9268 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  ({ onClose, title, body, onRetry } = arg0);
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = closure_7();
  const items = [hasOwnProperty(React3, { source: _modDef9268, style: closure_7().image }), hasOwnProperty(Text_Text.Text, { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body })];
  obj.children = items;
  const items1 = [timestampProducer(React4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl = util.intl;
  obj6.text = intl.string(util.t["5911Lb"]);
  obj6.onPress = onRetry;
  const items2 = [hasOwnProperty(components_Button_Button.Button, obj6), ];
  const obj7 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t["ETE/oC"]);
  obj7.onPress = onClose;
  items2[1] = hasOwnProperty(components_Button_Button.Button, obj7);
  obj5.children = items2;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return timestampProducer(React4, obj);
};