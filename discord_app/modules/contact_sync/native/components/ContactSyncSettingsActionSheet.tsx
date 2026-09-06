// === Module 12687: ContactSyncSettingsActionSheet ===

// Module 12687 (ContactSyncSettingsActionSheet)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContactSyncModalStore = fn(12677);
({ setAllowEmail: c3, setAllowPhone: closure_4, setAllowSync: hasOwnProperty, useContactSyncModalStore: metroRequire } = ContactSyncModalStore);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, formRow: null, syncRow: null, formText: null, info: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
createStyles.container = createStyles;
createStyles.formRow = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.syncRow = { marginTop: 24 };
let obj1 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.formText = { fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj2 = { fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles.info = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default function ContactSyncSettingsActionSheet() {
  const tmp = closure_9();
  const tmp2 = closure_6();
  const allowPhone = tmp2.allowPhone;
  let allowEmail = tmp2.allowEmail;
  let tmp3 = allowPhone;
  if (!allowPhone) {
    tmp3 = allowEmail;
  }
  allowEmail = tmp3;
  let obj = { style: tmp.container, children: null };
  obj = { DEPRECATED_style: null, label: null, onPress: null, trailing: null };
  const items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp);
  obj.DEPRECATED_style = items;
  obj = { style: tmp.formText, text: null };
  const intl = allowPhone(allowEmail[8]).intl;
  obj.text = intl.string(allowPhone(allowEmail[8]).t.a5QL24);
  obj.label = closure_7(allowPhone(allowEmail[7]).FormRow.Label, obj);
  obj.onPress = function onPress() {
    hasOwnProperty(!allowEmail);
  };
  obj.trailing = closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: tmp3 });
  const items1 = [closure_7(allowPhone(allowEmail[7]).FormRow, obj), , , , , , ];
  const obj1 = { style: tmp.info, children: null };
  const intl2 = allowPhone(allowEmail[8]).intl;
  obj1.children = intl2.string(allowPhone(allowEmail[8]).t.pfjsB5);
  items1[1] = closure_7(allowPhone(allowEmail[7]).FormText, obj1);
  const obj2 = { style: tmp.info, children: null };
  const intl3 = allowPhone(allowEmail[8]).intl;
  obj2.children = intl3.string(allowPhone(allowEmail[8]).t.cW1nr9);
  items1[2] = closure_7(allowPhone(allowEmail[7]).FormText, obj2);
  const obj3 = { style: tmp.info, children: null };
  const intl4 = allowPhone(allowEmail[8]).intl;
  obj3.children = intl4.format(allowPhone(allowEmail[8]).t.eswIfi, {
    learnMoreHook(children, arg1) {
      return closure_1_7(allowPhone(allowEmail[9]).Text, { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  items1[3] = closure_7(allowPhone(allowEmail[7]).FormText, obj3);
  const obj5 = { title: null, thinTitle: true };
  const intl5 = allowPhone(allowEmail[8]).intl;
  obj5.title = intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]);
  items1[4] = closure_7(allowPhone(allowEmail[7]).FormTitle, obj5);
  const obj6 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj7 = { style: tmp.formText, text: null };
  const intl6 = allowPhone(allowEmail[8]).intl;
  obj7.text = intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]);
  obj6.label = closure_7(allowPhone(allowEmail[7]).FormRow.Label, obj7);
  const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = allowPhone(allowEmail[8]).intl;
  obj8.children = intl7.string(allowPhone(allowEmail[8]).t.X7pIKN);
  obj6.subLabel = closure_7(allowPhone(allowEmail[9]).Text, obj8);
  obj6.onPress = function onPress() {
    React4(!allowPhone);
  };
  obj6.trailing = closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone });
  items1[5] = closure_7(allowPhone(allowEmail[7]).FormRow, obj6);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl8 = allowPhone(allowEmail[8]).intl;
  obj10.text = intl8.string(allowPhone(allowEmail[8]).t.dI4d4S);
  obj9.label = closure_7(allowPhone(allowEmail[7]).FormRow.Label, obj10);
  const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = allowPhone(allowEmail[8]).intl;
  obj11.children = intl9.string(allowPhone(allowEmail[8]).t.ilGsHE);
  obj9.subLabel = closure_7(allowPhone(allowEmail[9]).Text, obj11);
  obj9.onPress = function onPress() {
    React3(!allowEmail);
  };
  obj9.trailing = closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail });
  items1[6] = closure_7(allowPhone(allowEmail[7]).FormRow, obj9);
  obj.children = items1;
  const children = closure_8(allowEmail, obj);
  return closure_7(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};