// === Module 20037: AppStoreParentalRevocationScreen ===

// Module 20037 (AppStoreParentalRevocationScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef2835 from "module_2835" /* 2835 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkingDefault from "Linking" /* 5704 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import ModalScreen from "ModalScreen" /* 7964 */;
import ModalContent from "ModalContent" /* 7965 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8153 */;
import ModalFooter from "ModalFooter" /* 13158 */;
import ModalActionButton from "ModalActionButton" /* 13370 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 20021 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { content: { flexGrow: 1, width: "100%" }, upperHalf: { flex: 1, justifyContent: "flex-end", alignItems: "center" }, lowerHalf: { flex: 1 }, text: { textAlign: "center" }, body: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx");

export default function AppStoreParentalRevocationScreen() {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    LinkingDefault.openURL("https://support.discord.com/hc/en-us/articles/42855178312087");
  }, []);
  const obj = { children: null };
  const obj2 = { children: null };
  const obj3 = { style: tmp.content, children: null };
  const obj4 = { style: tmp.upperHalf, children: null };
  const obj5 = { align: "center", spacing: nativeDefault.space.PX_16, children: null };
  const obj6 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj6.children = intl.string(_modDef2835.Z87TFb);
  const items = [hasOwnProperty(Text_Text.Text, obj6), ];
  const obj7 = { align: "center", spacing: nativeDefault.space.PX_16, style: tmp.body, children: null };
  const obj8 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(_modDef2835.VS98dM);
  const items1 = [hasOwnProperty(Text_Text.Text, obj8), ];
  const obj9 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl3 = util.intl;
  obj9.children = intl3.string(_modDef2835.BaI6L4);
  items1[1] = hasOwnProperty(Text_Text.Text, obj9);
  obj7.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj7);
  obj5.children = items;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  const items2 = [hasOwnProperty(View, obj4), hasOwnProperty(View, { style: tmp.lowerHalf })];
  obj3.children = items2;
  obj2.children = timestampProducer(View, obj3);
  const items3 = [hasOwnProperty(ModalContent.ModalContent, obj2), ];
  const obj11 = { children: null };
  const items4 = [hasOwnProperty(LogOutDisclaimerDefault, {}), ];
  const obj12 = { variant: "primary", text: null, icon: null, iconPosition: "end", onPress: null };
  const intl4 = util.intl;
  obj12.text = intl4.string(_modDef2835["6FXIU6"]);
  obj12.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  obj12.onPress = callback;
  items4[1] = hasOwnProperty(ModalActionButton.ModalActionButton, obj12);
  obj11.children = items4;
  items3[1] = timestampProducer(ModalFooter.ModalFooter, obj11);
  obj.children = items3;
  return timestampProducer(ModalScreen.ModalScreen, obj);
};