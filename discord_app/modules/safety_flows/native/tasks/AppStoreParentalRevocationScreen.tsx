// === Module 17431: AppStoreParentalRevocationScreen ===

// Module 17431 (AppStoreParentalRevocationScreen)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2633 */;
import Text from "Text" /* 4444 */;
import Stack from "Stack" /* 4894 */;
import ModalScreen from "ModalScreen" /* 8660 */;
import ModalContent from "ModalContent" /* 8661 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8691 */;
import ModalActionButton from "ModalActionButton" /* 10695 */;
import ModalFooter from "ModalFooter" /* 11466 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 17418 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: { flexGrow: 1, width: "100%" }, upperHalf: { flex: 1, justifyContent: "flex-end", alignItems: "center" }, lowerHalf: { flex: 1 }, text: { textAlign: "center" }, body: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx");

export default function AppStoreParentalRevocationScreen() {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    callback(table[5]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  let obj = { children: null };
  obj = { children: null };
  obj = { style: tmp.content, children: null };
  obj1 = { style: tmp.upperHalf, children: null };
  const obj2 = { align: "center", spacing: ThemesDefault.space.PX_16, children: null };
  const obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  obj3[4] = intl.string(messagesProxyDefault.Z87TFb);
  const items = [callback(Text.Text, obj3), ];
  const obj4 = { align: "center", spacing: ThemesDefault.space.PX_16, style: tmp.body, children: null };
  const obj5 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl2 = getSystemLocale.intl;
  obj5[3] = intl2.string(messagesProxyDefault.VS98dM);
  const items1 = [callback(Text.Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl3 = getSystemLocale.intl;
  obj6[3] = intl3.string(messagesProxyDefault.BaI6L4);
  items1[1] = callback(Text.Text, obj6);
  obj4[3] = items1;
  items[1] = callback2(Stack.Stack, obj4);
  obj2[2] = items;
  obj1[1] = callback2(Stack.Stack, obj2);
  const items2 = [callback(View, obj1), callback(View, { style: tmp.lowerHalf })];
  obj[1] = items2;
  obj[0] = callback2(View, obj);
  const items3 = [callback(ModalContent.ModalContent, obj), ];
  const obj8 = { children: null };
  const items4 = [callback(LogOutDisclaimerDefault, {}), ];
  const obj9 = { variant: "primary", text: null, icon: null, iconPosition: "end", onPress: null };
  const intl4 = getSystemLocale.intl;
  obj9[1] = intl4.string(messagesProxyDefault["6FXIU6"]);
  obj9[2] = callback(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: ThemesDefault.colors.WHITE });
  obj9[4] = callback;
  items4[1] = callback(ModalActionButton.ModalActionButton, obj9);
  obj8[0] = items4;
  items3[1] = callback2(ModalFooter.ModalFooter, obj8);
  obj[0] = items3;
  return callback2(ModalScreen.ModalScreen, obj);
};