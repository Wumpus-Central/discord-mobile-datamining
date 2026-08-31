// === Module 8682: AgeVerificationOtherWindowScreen ===

// Module 8682 (AgeVerificationOtherWindowScreen)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2889 */;
import Text from "Text" /* 4444 */;
import Stack from "Stack" /* 4894 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7701 */;
import ModalScreen from "ModalScreen" /* 8660 */;
import ModalContent from "ModalContent" /* 8661 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { flex: 1, alignSelf: "stretch" }, text: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx");

export default function AgeVerificationOtherWindowScreen(copy) {
  copy = copy.copy;
  const tmp = callback3();
  let title;
  if (copy != null) {
    title = copy.title;
  }
  if (title == null) {
    const intl = getSystemLocale.intl;
    title = intl.string(messagesProxyDefault.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = getSystemLocale.intl;
    description = intl2.string(messagesProxyDefault.VcZF1q);
  }
  let obj = { children: null };
  obj = { children: null };
  obj = { align: "center", justify: "center", spacing: 16, style: tmp.container, children: null };
  const items = [callback(MobilePhoneIcon.MobilePhoneIcon, { size: "lg", color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT }), ];
  const obj2 = { align: "center", justify: "center", spacing: 8, children: null };
  const items1 = [callback(Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: title }), callback(Text.Text, { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description })];
  obj2[3] = items1;
  items[1] = callback2(Stack.Stack, obj2);
  obj[4] = items;
  obj[0] = callback2(Stack.Stack, obj);
  obj[0] = callback(ModalContent.ModalContent, obj);
  return callback(ModalScreen.ModalScreen, obj);
};