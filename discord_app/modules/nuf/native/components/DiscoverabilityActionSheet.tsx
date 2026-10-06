// === Module 12433: DiscoverabilityActionSheet ===

// Module 12433 (DiscoverabilityActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react_mod from "react" /* 19 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12341 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
const View = react_native.View;
({ useContactSyncModalStore: closure_4, setAllowSync: hasOwnProperty, setAllowPhone: metroRequire, setAllowEmail: metroImportDefault } = ContactSyncModalStore);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, formRow: obj3, syncRow: { marginTop: 24 }, formText: obj4, info: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let allowEmail;
  let allowPhone;
  let tmp7;
  let obj = allowPhone(allowEmail[8]);
  const cResult = obj.c(59);
  const tmp4 = closure_10();
  const tmp5 = closure_4();
  allowPhone = tmp5.allowPhone;
  allowEmail = tmp5.allowEmail;
  let closure_2 = tmp6;
  if (cResult[0] !== (allowPhone || allowEmail)) {
    const fn = function t() {
      hasOwnProperty(!closure_2);
    };
    cResult[0] = allowPhone || allowEmail;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== allowPhone) {
    const fn2 = function u() {
      metroRequire(!allowPhone);
    };
    cResult[2] = allowPhone;
    cResult[3] = fn2;
  }
  if (cResult[4] !== allowEmail) {
    class F {
      constructor() {
        metroImportDefault(!allowEmail);
      }
    }
    cResult[4] = allowEmail;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        metroImportDefault(!allowEmail);
      }
    }
  }
  if (cResult[6] === tmp4.formRow) {
    let tmp12;
    class F {
      constructor() {
        metroImportDefault(!allowEmail);
      }
    }
    const _Symbol = Symbol;
    const formText = tmp4.formText;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
      const stringResult = obj2.string(allowPhone(allowEmail[9]).t.gMUgpv);
      cResult[9] = stringResult;
      tmp12 = stringResult;
    } else {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
    }
    if (cResult[10] !== tmp4.formText) {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
      const obj3 = { style: formText, text: tmp12 };
      cResult[10] = tmp4.formText;
      cResult[11] = closure_8(allowPhone(allowEmail[10]).FormRow.Label, obj3);
      const tmp15 = closure_8(allowPhone(allowEmail[10]).FormRow.Label, obj3);
    } else {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
    }
    if (cResult[12] !== (allowPhone || allowEmail)) {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
      const obj4 = { selected: allowPhone || allowEmail };
      cResult[12] = allowPhone || allowEmail;
      cResult[13] = closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, obj4);
      const tmp17 = closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, obj4);
    } else {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
    }
    if (cResult[14] === tmp7) {
      class F {
        constructor() {
          metroImportDefault(!allowEmail);
        }
      }
    }
    const obj5 = { DEPRECATED_style: tmp10, label: tmp14, onPress: tmp7, trailing: tmp16 };
    cResult[14] = tmp7;
    cResult[15] = tmp10;
    cResult[16] = tmp14;
    cResult[17] = tmp16;
    cResult[18] = closure_8(allowPhone(allowEmail[10]).FormRow, obj5);
    const tmp20 = closure_8(allowPhone(allowEmail[10]).FormRow, obj5);
  }
  const items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp4);
  cResult[6] = tmp4.formRow;
  cResult[7] = tmp4.syncRow;
  cResult[8] = items;
}) : (() => {
  let Label;
  let Label2;
  let Label3;
  let Text;
  let Text2;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items3;
  let items4;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj3;
  let obj7;
  const tmp = closure_10();
  const tmp2 = closure_4();
  const allowPhone = tmp2.allowPhone;
  const allowEmail = tmp2.allowEmail;
  react = tmp3;
  const items = [allowPhone || allowEmail];
  const items1 = [allowPhone];
  const callback = react.useCallback(() => {
    hasOwnProperty(!closure_2);
  }, items);
  const items2 = [allowEmail];
  const callback1 = react.useCallback(() => {
    metroRequire(!allowPhone);
  }, items1);
  let obj = { style: tmp.container, children: items4 };
  const callback2 = react.useCallback(() => {
    metroImportDefault(!allowEmail);
  }, items2);
  const obj2 = { DEPRECATED_style: items3, label: closure_8(Label, obj3), onPress: callback, trailing: closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone || allowEmail }) };
  items3 = [, ];
  ({ formRow: arr4[0], syncRow: arr4[1] } = tmp);
  const FormRow = allowPhone(allowEmail[10]).FormRow;
  obj3 = { style: tmp.formText, text: intl.string(allowPhone(allowEmail[9]).t.gMUgpv) };
  Label = allowPhone(allowEmail[10]).FormRow.Label;
  intl = allowPhone(allowEmail[9]).intl;
  items4 = [closure_8(FormRow, obj2), , , , , , ];
  const obj4 = { style: tmp.info, children: intl2.string(allowPhone(allowEmail[9]).t.pfjsB5) };
  const FormText = allowPhone(allowEmail[10]).FormText;
  intl2 = allowPhone(allowEmail[9]).intl;
  items4[1] = closure_8(FormText, obj4);
  const obj5 = { style: tmp.info, children: intl3.string(allowPhone(allowEmail[9]).t.cW1nr9) };
  const FormText2 = allowPhone(allowEmail[10]).FormText;
  intl3 = allowPhone(allowEmail[9]).intl;
  items4[2] = closure_8(FormText2, obj5);
  const obj6 = { style: tmp.info, children: intl4.format(allowPhone(allowEmail[9]).t.eswIfi, obj7) };
  const FormText3 = allowPhone(allowEmail[10]).FormText;
  intl4 = allowPhone(allowEmail[9]).intl;
  obj7 = {
    learnMoreHook(children, arg1) {
      const obj = { onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      const Text = allowPhone(allowEmail[11]).Text;
      return closure_1_8(Text, obj, arg1);
    }
  };
  items4[3] = closure_8(FormText3, obj6);
  const obj8 = { title: intl5.string(allowPhone(allowEmail[9]).t["0t2wRW"]), thinTitle: true };
  const FormTitle = allowPhone(allowEmail[10]).FormTitle;
  intl5 = allowPhone(allowEmail[9]).intl;
  items4[4] = closure_8(FormTitle, obj8);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: closure_8(Label2, obj10), subLabel: closure_8(Text, obj11), onPress: callback1, trailing: closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone }) };
  const FormRow2 = allowPhone(allowEmail[10]).FormRow;
  obj10 = { style: tmp.formText, text: intl6.string(allowPhone(allowEmail[9]).t["eJnn0+"]) };
  Label2 = allowPhone(allowEmail[10]).FormRow.Label;
  intl6 = allowPhone(allowEmail[9]).intl;
  obj11 = { variant: "text-sm/medium", color: "text-default", children: intl7.string(allowPhone(allowEmail[9]).t.X7pIKN) };
  Text = allowPhone(allowEmail[11]).Text;
  intl7 = allowPhone(allowEmail[9]).intl;
  items4[5] = closure_8(FormRow2, obj9);
  const obj12 = { DEPRECATED_style: tmp.formRow, label: closure_8(Label3, obj13), subLabel: closure_8(Text2, obj14), onPress: callback2, trailing: closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowEmail }) };
  const FormRow3 = allowPhone(allowEmail[10]).FormRow;
  obj13 = { style: tmp.formText, text: intl8.string(allowPhone(allowEmail[9]).t.dI4d4S) };
  Label3 = allowPhone(allowEmail[10]).FormRow.Label;
  intl8 = allowPhone(allowEmail[9]).intl;
  obj14 = { variant: "text-sm/medium", color: "text-default", children: intl9.string(allowPhone(allowEmail[9]).t.ilGsHE) };
  Text2 = allowPhone(allowEmail[11]).Text;
  intl9 = allowPhone(allowEmail[9]).intl;
  items4[6] = closure_8(FormRow3, obj12);
  const children = closure_9(View, obj);
  return closure_8(allowPhone(allowEmail[13]).ActionSheet, { startExpanded: true, children });
});
const result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityActionSheet.tsx");

export default tmp5;