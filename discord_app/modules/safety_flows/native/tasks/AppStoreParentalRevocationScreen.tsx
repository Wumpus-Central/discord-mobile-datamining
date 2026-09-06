// === Module 17887: AppStoreParentalRevocationScreen ===

// Module 17887 (AppStoreParentalRevocationScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2690 from "module_2690" /* 2690 */;
import LinkingDefault from "Linking" /* 4255 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import ModalScreen from "ModalScreen" /* 8421 */;
import ModalContent from "ModalContent" /* 8422 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8580 */;
import ModalActionButton from "ModalActionButton" /* 10996 */;
import ModalFooter from "ModalFooter" /* 11926 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 17874 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { content: { flexGrow: 1, width: "100%" }, upperHalf: { flex: 1, justifyContent: "flex-end", alignItems: "center" }, lowerHalf: { flex: 1 }, text: { textAlign: "center" }, body: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.body = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx");

export default function AppStoreParentalRevocationScreen() {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    LinkingDefault.openURL("https://support.discord.com/hc/en-us/articles/42855178312087");
  }, []);
  let obj = { children: null };
  obj = { children: null };
  obj = { style: tmp.content, children: null };
  const obj1 = { style: tmp.upperHalf, children: null };
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_16, children: null };
  const obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef2690.Z87TFb);
  const items = [hasOwnProperty(Text_Text.Text, obj3), ];
  const obj4 = { align: "center", spacing: nativeDefault.space.PX_16, style: tmp.body, children: null };
  const obj5 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(_modDef2690.VS98dM);
  const items1 = [hasOwnProperty(Text_Text.Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(_modDef2690.BaI6L4);
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj4);
  obj2.children = items;
  obj1.children = timestampProducer(Stack_Stack.Stack, obj2);
  const items2 = [hasOwnProperty(View, obj1), hasOwnProperty(View, { style: tmp.lowerHalf })];
  obj.children = items2;
  obj.children = timestampProducer(View, obj);
  const items3 = [hasOwnProperty(ModalContent.ModalContent, obj), ];
  const obj8 = { children: null };
  const items4 = [hasOwnProperty(LogOutDisclaimerDefault, {}), ];
  const obj9 = { variant: "primary", text: null, icon: null, iconPosition: "end", onPress: null };
  const intl4 = util.intl;
  obj9.text = intl4.string(_modDef2690["6FXIU6"]);
  obj9.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  obj9.onPress = callback;
  items4[1] = hasOwnProperty(ModalActionButton.ModalActionButton, obj9);
  obj8.children = items4;
  items3[1] = timestampProducer(ModalFooter.ModalFooter, obj8);
  obj.children = items3;
  return timestampProducer(ModalScreen.ModalScreen, obj);
};