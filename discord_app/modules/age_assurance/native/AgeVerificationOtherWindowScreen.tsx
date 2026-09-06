// discord_app/modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2946 from "../AgeAssurance.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import MobilePhoneIcon from "../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import ModalScreen from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../design/components/Modal/native/ModalContent.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  container: { flex: 1, alignSelf: "stretch" },
  text: { textAlign: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx");

export default function AgeVerificationOtherWindowScreen(copy) {
  copy = copy.copy;
  const tmp = closure_5();
  let title;
  if (copy != null) {
    title = copy.title;
  }
  if (title == null) {
    const intl = util.intl;
    title = intl.string(_modDef2946.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = util.intl;
    description = intl2.string(_modDef2946.VcZF1q);
  }
  let obj = { children: null };
  obj = { children: null };
  obj = { align: "center", justify: "center", spacing: 16, style: tmp.container, children: null };
  const items = [
    React3(MobilePhoneIcon.MobilePhoneIcon, { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT }),
  ];
  const obj2 = { align: "center", justify: "center", spacing: 8, children: null };
  const items1 = [
    React3(Text_Text.Text, {
      accessibilityRole: "header",
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.text,
      children: title,
    }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description }),
  ];
  obj2.children = items1;
  items[1] = React4(Stack_Stack.Stack, obj2);
  obj.children = items;
  obj.children = React4(Stack_Stack.Stack, obj);
  obj.children = React3(ModalContent.ModalContent, obj);
  return React3(ModalScreen.ModalScreen, obj);
}
