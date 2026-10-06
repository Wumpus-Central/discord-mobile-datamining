// === Module 8165: AgeVerificationOtherWindowScreen ===

// Module 8165 (AgeVerificationOtherWindowScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import _modDef3073 from "module_3073" /* 3073 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import MobilePhoneIcon2 from "MobilePhoneIcon" /* 6455 */;
import ModalScreen2 from "ModalScreen" /* 8128 */;
import ModalContent2 from "ModalContent" /* 8129 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let copy;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch" }, text: { textAlign: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((copy) => {
  let ModalContent;
  let items;
  let items1;
  let obj4;
  let obj5;
  let tmp13;
  let tmp17;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(17);
  copy = copy.copy;
  const tmp4 = closure_5();
  let title;
  const first = cResult[0];
  if (copy != null) {
    title = copy.title;
  }
  if (first !== title) {
    let title1;
    if (copy != null) {
      title1 = copy.title;
    }
    if (title1 == null) {
      const intl = intl3.intl;
      title1 = intl.string(_modDef3073.MLPgsX);
    }
    let title2;
    if (copy != null) {
      title2 = copy.title;
    }
    cResult[0] = title2;
    cResult[1] = title1;
    tmp7 = title1;
  } else {
    tmp7 = cResult[1];
  }
  let description;
  const tmp11 = cResult[2];
  if (copy != null) {
    description = copy.description;
  }
  if (tmp11 !== description) {
    let description1;
    if (copy != null) {
      description1 = copy.description;
    }
    if (description1 == null) {
      const intl2 = intl3.intl;
      description1 = intl2.string(_modDef3073.VcZF1q);
    }
    let description2;
    if (copy != null) {
      description2 = copy.description;
    }
    cResult[2] = description2;
    cResult[3] = description1;
    tmp13 = description1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const MobilePhoneIcon = MobilePhoneIcon2.MobilePhoneIcon;
    const tmp20 = _false(MobilePhoneIcon, obj2);
    cResult[4] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === tmp4.text) {
    let tmp21;
    if (cResult[6] === tmp7) {
      tmp21 = cResult[7];
    }
    if (cResult[8] === tmp13) {
      let tmp23;
      if (cResult[9] === tmp4.text) {
        tmp23 = cResult[10];
      }
      if (cResult[11] === tmp21) {
        let tmp26;
        if (cResult[12] === tmp23) {
          tmp26 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          let tmp29;
          if (cResult[15] === tmp26) {
            tmp29 = cResult[16];
          }
          return tmp29;
        }
        const obj3 = { children: _false(ModalContent, obj4) };
        const ModalScreen = ModalScreen2.ModalScreen;
        obj4 = { children: React3(Stack_Stack.Stack, obj5) };
        ModalContent = ModalContent2.ModalContent;
        obj5 = { align: "center", justify: "center", spacing: 16, style: tmp4.container, children: items };
        items = [tmp17, tmp26];
        const tmp32 = _false(ModalScreen, obj3);
        cResult[14] = tmp4.container;
        cResult[15] = tmp26;
        cResult[16] = tmp32;
        tmp29 = tmp32;
      }
      const obj6 = { align: "center", justify: "center", spacing: 8, children: items1 };
      items1 = [tmp21, tmp23];
      const tmp28 = React3(Stack_Stack.Stack, obj6);
      cResult[11] = tmp21;
      cResult[12] = tmp23;
      cResult[13] = tmp28;
      tmp26 = tmp28;
    }
    const obj7 = { variant: "text-md/medium", color: "text-muted", style: tmp4.text, children: tmp13 };
    const tmp25 = _false(Text_Text.Text, obj7);
    cResult[8] = tmp13;
    cResult[9] = tmp4.text;
    cResult[10] = tmp25;
    tmp23 = tmp25;
  }
  const obj8 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.text, children: tmp7 };
  const tmp22 = _false(Text_Text.Text, obj8);
  cResult[5] = tmp4.text;
  cResult[6] = tmp7;
  cResult[7] = tmp22;
  tmp21 = tmp22;
}) : ((copy) => {
  let ModalContent;
  let Stack;
  let items;
  let items1;
  let obj2;
  let obj3;
  copy = copy.copy;
  const tmp = closure_5();
  let title;
  if (copy != null) {
    title = copy.title;
  }
  if (title == null) {
    const intl = intl3.intl;
    title = intl.string(_modDef3073.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = intl3.intl;
    description = intl2.string(_modDef3073.VcZF1q);
  }
  const obj = { children: _false(ModalContent, obj2) };
  const ModalScreen = ModalScreen2.ModalScreen;
  obj2 = { children: React3(Stack, obj3) };
  ModalContent = ModalContent2.ModalContent;
  obj3 = { align: "center", justify: "center", spacing: 16, style: tmp.container, children: items };
  Stack = Stack_Stack.Stack;
  const obj4 = { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
  const MobilePhoneIcon = MobilePhoneIcon2.MobilePhoneIcon;
  items = [_false(MobilePhoneIcon, obj4), ];
  const obj5 = { align: "center", justify: "center", spacing: 8, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [, ];
  const obj6 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: title };
  items1[0] = _false(Text_Text.Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description };
  items1[1] = _false(Text_Text.Text, obj7);
  items[1] = React3(Stack2, obj5);
  return _false(ModalScreen, obj);
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx");

export default tmp4;