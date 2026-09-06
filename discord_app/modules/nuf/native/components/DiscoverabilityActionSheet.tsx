// === Module 12749: DiscoverabilityActionSheet ===

// Module 12749 (DiscoverabilityActionSheet)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContactSyncModalStore = fn(12677);
({ useContactSyncModalStore: closure_4, setAllowSync: hasOwnProperty, setAllowPhone: metroRequire, setAllowEmail: closure_7 } = ContactSyncModalStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
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
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityActionSheet.tsx");

export default function DiscoverabilityActionSheet() {
  const tmp = closure_10();
  const tmp2 = closure_4();
  const allowPhone = tmp2.allowPhone;
  let allowEmail = tmp2.allowEmail;
  let tmp3 = allowPhone;
  if (!allowPhone) {
    tmp3 = allowEmail;
  }
  allowEmail = tmp3;
  const items = [tmp3];
  const items1 = [allowPhone];
  const callback = allowEmail.useCallback(() => {
    hasOwnProperty(!allowEmail);
  }, items);
  const items2 = [allowEmail];
  const callback1 = allowEmail.useCallback(() => {
    timestampProducer(!allowPhone);
  }, items1);
  let obj = { style: tmp.container, children: null };
  const callback2 = allowEmail.useCallback(() => {
    React5(!allowEmail);
  }, items2);
  obj = { DEPRECATED_style: null, label: null, onPress: null, trailing: null };
  const items3 = [, ];
  ({ formRow: arr4[0], syncRow: arr4[1] } = tmp);
  obj.DEPRECATED_style = items3;
  obj = { style: tmp.formText, text: null };
  const intl = allowPhone(allowEmail[8]).intl;
  obj.text = intl.string(allowPhone(allowEmail[8]).t.gMUgpv);
  obj.label = closure_8(allowPhone(allowEmail[7]).FormRow.Label, obj);
  obj.onPress = callback;
  obj.trailing = closure_8(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: tmp3 });
  const items4 = [closure_8(allowPhone(allowEmail[7]).FormRow, obj), , , , , , ];
  const obj1 = { style: tmp.info, children: null };
  const intl2 = allowPhone(allowEmail[8]).intl;
  obj1.children = intl2.string(allowPhone(allowEmail[8]).t.pfjsB5);
  items4[1] = closure_8(allowPhone(allowEmail[7]).FormText, obj1);
  const obj2 = { style: tmp.info, children: null };
  const intl3 = allowPhone(allowEmail[8]).intl;
  obj2.children = intl3.string(allowPhone(allowEmail[8]).t.cW1nr9);
  items4[2] = closure_8(allowPhone(allowEmail[7]).FormText, obj2);
  const obj3 = { style: tmp.info, children: null };
  const intl4 = allowPhone(allowEmail[8]).intl;
  obj3.children = intl4.format(allowPhone(allowEmail[8]).t.eswIfi, {
    learnMoreHook(children, arg1) {
      return closure_1_8(allowPhone(allowEmail[9]).Text, { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  items4[3] = closure_8(allowPhone(allowEmail[7]).FormText, obj3);
  const obj5 = { title: null, thinTitle: true };
  const intl5 = allowPhone(allowEmail[8]).intl;
  obj5.title = intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]);
  items4[4] = closure_8(allowPhone(allowEmail[7]).FormTitle, obj5);
  const obj6 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj7 = { style: tmp.formText, text: null };
  const intl6 = allowPhone(allowEmail[8]).intl;
  obj7.text = intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]);
  obj6.label = closure_8(allowPhone(allowEmail[7]).FormRow.Label, obj7);
  const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = allowPhone(allowEmail[8]).intl;
  obj8.children = intl7.string(allowPhone(allowEmail[8]).t.X7pIKN);
  obj6.subLabel = closure_8(allowPhone(allowEmail[9]).Text, obj8);
  obj6.onPress = callback1;
  obj6.trailing = closure_8(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone });
  items4[5] = closure_8(allowPhone(allowEmail[7]).FormRow, obj6);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl8 = allowPhone(allowEmail[8]).intl;
  obj10.text = intl8.string(allowPhone(allowEmail[8]).t.dI4d4S);
  obj9.label = closure_8(allowPhone(allowEmail[7]).FormRow.Label, obj10);
  const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = allowPhone(allowEmail[8]).intl;
  obj11.children = intl9.string(allowPhone(allowEmail[8]).t.ilGsHE);
  obj9.subLabel = closure_8(allowPhone(allowEmail[9]).Text, obj11);
  obj9.onPress = callback2;
  obj9.trailing = closure_8(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail });
  items4[6] = closure_8(allowPhone(allowEmail[7]).FormRow, obj9);
  obj.children = items4;
  const children = closure_9(View, obj);
  return closure_8(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};