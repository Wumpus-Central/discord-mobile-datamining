// discord_app/modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../AgeAssurance.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import MobilePhoneIcon from "../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import ModalScreen from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../design/components/Modal/native/ModalContent.native.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({
  container: { flex: 1, alignSelf: "stretch" },
  text: { textAlign: "center" },
});
const result = require("set").fileFinishedImporting(
  "modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx",
);

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
  const items = [
    callback(MobilePhoneIcon.MobilePhoneIcon, { size: "lg", color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT }),
  ];
  const obj2 = { align: "center", justify: "center", spacing: 8, children: null };
  const items1 = [
    callback(Text.Text, {
      accessibilityRole: "header",
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.text,
      children: title,
    }),
    callback(Text.Text, { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description }),
  ];
  obj2[3] = items1;
  items[1] = callback2(Stack.Stack, obj2);
  obj[4] = items;
  obj[0] = callback2(Stack.Stack, obj);
  obj[0] = callback(ModalContent.ModalContent, obj);
  return callback(ModalScreen.ModalScreen, obj);
}
