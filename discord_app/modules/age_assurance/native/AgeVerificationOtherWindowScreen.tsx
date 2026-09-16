// === Module 8584: AgeVerificationOtherWindowScreen ===

// Module 8584 (AgeVerificationOtherWindowScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2947 from "module_2947" /* 2947 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7068 */;
import ModalScreen from "ModalScreen" /* 8551 */;
import ModalContent from "ModalContent" /* 8552 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4638);
let closure_5 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch" }, text: { textAlign: "center" } });
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
    title = intl.string(_modDef2947.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = util.intl;
    description = intl2.string(_modDef2947.VcZF1q);
  }
  const obj = { children: null };
  const obj2 = { children: null };
  const obj3 = { align: "center", justify: "center", spacing: 16, style: tmp.container, children: null };
  const items = [React3(MobilePhoneIcon.MobilePhoneIcon, { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT }), ];
  const obj5 = { align: "center", justify: "center", spacing: 8, children: null };
  const items1 = [React3(Text_Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: title }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description })];
  obj5.children = items1;
  items[1] = React4(Stack_Stack.Stack, obj5);
  obj3.children = items;
  obj2.children = React4(Stack_Stack.Stack, obj3);
  obj.children = React3(ModalContent.ModalContent, obj2);
  return React3(ModalScreen.ModalScreen, obj);
};