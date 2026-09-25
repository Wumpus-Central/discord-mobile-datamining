// === Module 12166: ContactSyncSettingsActionSheet ===

// Module 12166 (ContactSyncSettingsActionSheet)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContactSyncModalStore = fn(12156);
({ setAllowEmail: c3, setAllowPhone: closure_4, setAllowSync: hasOwnProperty, useContactSyncModalStore: metroRequire } = ContactSyncModalStore);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 }, formRow: null, syncRow: null, formText: null, info: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
obj2.formRow = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.syncRow = { marginTop: 24 };
let obj4 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.formText = { fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj5 = { fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.info = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
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
  const obj = { style: tmp.container, children: null };
  const obj2 = { DEPRECATED_style: null, label: null, onPress: null, trailing: null };
  const items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp);
  obj2.DEPRECATED_style = items;
  const obj3 = { style: tmp.formText, text: null };
  const intl = allowPhone(allowEmail[8]).intl;
  obj3.text = intl.string(allowPhone(allowEmail[8]).t.a5QL24);
  obj2.label = closure_7(allowPhone(allowEmail[7]).FormRow.Label, obj3);
  obj2.onPress = function onPress() {
    hasOwnProperty(!allowEmail);
  };
  obj2.trailing = closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: tmp3 });
  const items1 = [closure_7(allowPhone(allowEmail[7]).FormRow, obj2), , , , , , ];
  const obj4 = { style: tmp.info, children: null };
  const intl2 = allowPhone(allowEmail[8]).intl;
  obj4.children = intl2.string(allowPhone(allowEmail[8]).t.pfjsB5);
  items1[1] = closure_7(allowPhone(allowEmail[7]).FormText, obj4);
  const obj5 = { style: tmp.info, children: null };
  const intl3 = allowPhone(allowEmail[8]).intl;
  obj5.children = intl3.string(allowPhone(allowEmail[8]).t.cW1nr9);
  items1[2] = closure_7(allowPhone(allowEmail[7]).FormText, obj5);
  const obj6 = { style: tmp.info, children: null };
  const intl4 = allowPhone(allowEmail[8]).intl;
  obj6.children = intl4.format(allowPhone(allowEmail[8]).t.eswIfi, {
    learnMoreHook(children, arg1) {
      return closure_1_7(allowPhone(allowEmail[9]).Text, { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  items1[3] = closure_7(allowPhone(allowEmail[7]).FormText, obj6);
  const obj8 = { title: null, thinTitle: true };
  const intl5 = allowPhone(allowEmail[8]).intl;
  obj8.title = intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]);
  items1[4] = closure_7(allowPhone(allowEmail[7]).FormTitle, obj8);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl6 = allowPhone(allowEmail[8]).intl;
  obj10.text = intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]);
  obj9.label = closure_7(allowPhone(allowEmail[7]).FormRow.Label, obj10);
  const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = allowPhone(allowEmail[8]).intl;
  obj11.children = intl7.string(allowPhone(allowEmail[8]).t.X7pIKN);
  obj9.subLabel = closure_7(allowPhone(allowEmail[9]).Text, obj11);
  obj9.onPress = function onPress() {
    React4(!allowPhone);
  };
  obj9.trailing = closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone });
  items1[5] = closure_7(allowPhone(allowEmail[7]).FormRow, obj9);
  const obj12 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj13 = { style: tmp.formText, text: null };
  const intl8 = allowPhone(allowEmail[8]).intl;
  obj13.text = intl8.string(allowPhone(allowEmail[8]).t.dI4d4S);
  obj12.label = closure_7(allowPhone(allowEmail[7]).FormRow.Label, obj13);
  const obj14 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = allowPhone(allowEmail[8]).intl;
  obj14.children = intl9.string(allowPhone(allowEmail[8]).t.ilGsHE);
  obj12.subLabel = closure_7(allowPhone(allowEmail[9]).Text, obj14);
  obj12.onPress = function onPress() {
    React3(!allowEmail);
  };
  obj12.trailing = closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail });
  items1[6] = closure_7(allowPhone(allowEmail[7]).FormRow, obj12);
  obj.children = items1;
  const children = closure_8(allowEmail, obj);
  return closure_7(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};