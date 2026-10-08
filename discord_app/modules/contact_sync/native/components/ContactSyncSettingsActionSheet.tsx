// === Module 12447: ContactSyncSettingsActionSheet ===

// Module 12447 (ContactSyncSettingsActionSheet)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContactSyncModalStore = fn(12437);
({ setAllowEmail: c3, setAllowPhone: closure_4, setAllowSync: hasOwnProperty, useContactSyncModalStore: metroRequire } = ContactSyncModalStore);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 }, formRow: null, syncRow: null, formText: null, info: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
obj2.formRow = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.syncRow = { marginTop: 24 };
let obj4 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.formText = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj5 = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.info = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncSettingsActionSheet() {
  const cResult = allowPhone(allowEmail[8]).c(59);
  const tmp4 = closure_9();
  const tmp5 = closure_6();
  allowPhone = tmp5.allowPhone;
  allowEmail = tmp5.allowEmail;
  let tmp6 = allowPhone;
  if (!allowPhone) {
    tmp6 = allowEmail;
  }
  allowEmail = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSetAllowSync(arg0) {
      closure_5(arg0);
    }
    cResult[0] = handleSetAllowSync;
    let first = handleSetAllowSync;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSetAllowPhone(arg0) {
      closure_4(arg0);
    }
    cResult[1] = handleSetAllowPhone;
    let tmp8 = handleSetAllowPhone;
  } else {
    tmp8 = cResult[1];
  }
  closure_4 = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSetAllowEmail(dependencyMap) {
      first(dependencyMap);
    }
    cResult[2] = handleSetAllowEmail;
    let tmp9 = handleSetAllowEmail;
  } else {
    tmp9 = cResult[2];
  }
  closure_5 = tmp9;
  if (cResult[3] === tmp4.formRow) {
    if (cResult[4] === tmp4.syncRow) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[9]).intl;
      const stringResult = intl.string(tmp(tmp2[9]).t.a5QL24);
      cResult[6] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp4.formText) {
      const obj2 = { style: tmp4.formText, text: tmp11 };
      const tmp15 = closure_7(tmp(tmp2[10]).FormRow.Label, obj2);
      cResult[7] = tmp4.formText;
      cResult[8] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== tmp6) {
      const fn = function p() {
        return first(!allowEmail);
      };
      const obj3 = { selected: tmp6 };
      const tmp19 = closure_7(tmp(tmp2[10]).FormRow.Checkbox, obj3);
      cResult[9] = tmp6;
      cResult[10] = fn;
      cResult[11] = tmp19;
      let tmp17 = tmp19;
      let tmp16 = fn;
    } else {
      tmp16 = cResult[10];
      tmp17 = cResult[11];
    }
    if (cResult[12] === tmp10) {
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp16) {
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[9]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[9]).t.pfjsB5);
            cResult[17] = stringResult1;
            let tmp23 = stringResult1;
          } else {
            tmp23 = cResult[17];
          }
          if (cResult[18] !== tmp4.info) {
            const obj4 = { style: tmp4.info, children: tmp23 };
            const tmp27 = closure_7(tmp(tmp2[10]).FormText, obj4);
            cResult[18] = tmp4.info;
            cResult[19] = tmp27;
          }
          const _Symbol3 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[9]).intl;
            const stringResult2 = intl3.string(tmp(tmp2[9]).t.cW1nr9);
            cResult[20] = stringResult2;
            let tmp28 = stringResult2;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] !== tmp4.info) {
            const obj5 = { style: tmp4.info, children: tmp28 };
            const tmp32 = closure_7(tmp(tmp2[10]).FormText, obj5);
            cResult[21] = tmp4.info;
            cResult[22] = tmp32;
          }
          const _Symbol4 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[9]).intl;
            const obj6 = {
              learnMoreHook: function LearnMore(children, arg1) {
                          return closure_1_7(allowPhone(allowEmail[11]).Text, { onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
                        }
            };
            const formatResult = intl4.format(tmp(tmp2[9]).t.eswIfi, obj6);
            cResult[23] = formatResult;
            let tmp33 = formatResult;
          } else {
            tmp33 = cResult[23];
          }
          if (cResult[24] !== tmp4.info) {
            const obj7 = { style: tmp4.info, children: tmp33 };
            const tmp37 = closure_7(tmp(tmp2[10]).FormText, obj7);
            cResult[24] = tmp4.info;
            cResult[25] = tmp37;
          }
          const _Symbol5 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { title: null, thinTitle: true };
            const intl5 = tmp(tmp2[9]).intl;
            obj8.title = intl5.string(tmp(tmp2[9]).t["0t2wRW"]);
            const tmp40 = closure_7(tmp(tmp2[10]).FormTitle, obj8);
            cResult[26] = tmp40;
          }
          const _Symbol6 = Symbol;
          ({ formRow, formText } = tmp4);
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = tmp(tmp2[9]).intl;
            const stringResult3 = intl6.string(tmp(tmp2[9]).t["eJnn0+"]);
            cResult[27] = stringResult3;
            let tmp41 = stringResult3;
          } else {
            tmp41 = cResult[27];
          }
          if (cResult[28] !== tmp4.formText) {
            const obj9 = { style: formText, text: tmp41 };
            const tmp45 = closure_7(tmp(tmp2[10]).FormRow.Label, obj9);
            cResult[28] = tmp4.formText;
            cResult[29] = tmp45;
            let tmp43 = tmp45;
          } else {
            tmp43 = cResult[29];
          }
          const _Symbol7 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-sm/medium", color: "text-default", children: null };
            const intl7 = tmp(tmp2[9]).intl;
            obj10.children = intl7.string(tmp(tmp2[9]).t.X7pIKN);
            const tmp48 = closure_7(tmp(tmp2[11]).Text, obj10);
            cResult[30] = tmp48;
            let tmp46 = tmp48;
          } else {
            tmp46 = cResult[30];
          }
          if (cResult[31] !== allowPhone) {
            class J {
              constructor() {
                return closure_4(!allowPhone);
              }
            }
            const obj11 = { selected: allowPhone };
            const tmp52 = closure_7(tmp(tmp2[10]).FormRow.Checkbox, obj11);
            cResult[31] = allowPhone;
            cResult[32] = J;
            cResult[33] = tmp52;
            let tmp50 = tmp52;
          } else {
            class J {
              constructor() {
                return closure_4(!allowPhone);
              }
            }
            tmp50 = cResult[33];
          }
          if (cResult[34] === tmp4.formRow) {
            class J {
              constructor() {
                return closure_4(!allowPhone);
              }
            }
          }
          const obj12 = { DEPRECATED_style: formRow, label: tmp43, subLabel: tmp46, onPress: J, trailing: tmp50 };
          const tmp55 = closure_7(tmp(tmp2[10]).FormRow, obj12);
          cResult[34] = tmp4.formRow;
          cResult[35] = tmp43;
          cResult[36] = J;
          cResult[37] = tmp50;
          cResult[38] = tmp55;
        }
      }
    }
    const obj13 = { DEPRECATED_style: tmp10, label: tmp13, onPress: tmp16, trailing: tmp17 };
    const tmp22 = closure_7(tmp(tmp2[10]).FormRow, obj13);
    cResult[12] = tmp10;
    cResult[13] = tmp13;
    cResult[14] = tmp16;
    cResult[15] = tmp17;
    cResult[16] = tmp22;
  }
  const items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp4);
  cResult[3] = tmp4.formRow;
  cResult[4] = tmp4.syncRow;
  cResult[5] = items;
  tmp10 = items;
  const obj = allowPhone(allowEmail[8]);
}) : (function ContactSyncSettingsActionSheet() {
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
  const intl = allowPhone(allowEmail[9]).intl;
  obj3.text = intl.string(allowPhone(allowEmail[9]).t.a5QL24);
  obj2.label = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj3);
  obj2.onPress = function onPress() {
    hasOwnProperty(!allowEmail);
  };
  obj2.trailing = closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: tmp3 });
  const items1 = [closure_7(allowPhone(allowEmail[10]).FormRow, obj2), , , , , , ];
  const obj4 = { style: tmp.info, children: null };
  const intl2 = allowPhone(allowEmail[9]).intl;
  obj4.children = intl2.string(allowPhone(allowEmail[9]).t.pfjsB5);
  items1[1] = closure_7(allowPhone(allowEmail[10]).FormText, obj4);
  const obj5 = { style: tmp.info, children: null };
  const intl3 = allowPhone(allowEmail[9]).intl;
  obj5.children = intl3.string(allowPhone(allowEmail[9]).t.cW1nr9);
  items1[2] = closure_7(allowPhone(allowEmail[10]).FormText, obj5);
  const obj6 = { style: tmp.info, children: null };
  const intl4 = allowPhone(allowEmail[9]).intl;
  obj6.children = intl4.format(allowPhone(allowEmail[9]).t.eswIfi, {
    learnMoreHook: function LearnMore(children, arg1) {
      return closure_1_7(allowPhone(allowEmail[11]).Text, { onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  items1[3] = closure_7(allowPhone(allowEmail[10]).FormText, obj6);
  const obj8 = { title: null, thinTitle: true };
  const intl5 = allowPhone(allowEmail[9]).intl;
  obj8.title = intl5.string(allowPhone(allowEmail[9]).t["0t2wRW"]);
  items1[4] = closure_7(allowPhone(allowEmail[10]).FormTitle, obj8);
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl6 = allowPhone(allowEmail[9]).intl;
  obj10.text = intl6.string(allowPhone(allowEmail[9]).t["eJnn0+"]);
  obj9.label = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj10);
  const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = allowPhone(allowEmail[9]).intl;
  obj11.children = intl7.string(allowPhone(allowEmail[9]).t.X7pIKN);
  obj9.subLabel = closure_7(allowPhone(allowEmail[11]).Text, obj11);
  obj9.onPress = function onPress() {
    React4(!allowPhone);
  };
  obj9.trailing = closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone });
  items1[5] = closure_7(allowPhone(allowEmail[10]).FormRow, obj9);
  const obj12 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
  const obj13 = { style: tmp.formText, text: null };
  const intl8 = allowPhone(allowEmail[9]).intl;
  obj13.text = intl8.string(allowPhone(allowEmail[9]).t.dI4d4S);
  obj12.label = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj13);
  const obj14 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = allowPhone(allowEmail[9]).intl;
  obj14.children = intl9.string(allowPhone(allowEmail[9]).t.ilGsHE);
  obj12.subLabel = closure_7(allowPhone(allowEmail[11]).Text, obj14);
  obj12.onPress = function onPress() {
    React3(!allowEmail);
  };
  obj12.trailing = closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowEmail });
  items1[6] = closure_7(allowPhone(allowEmail[10]).FormRow, obj12);
  obj.children = items1;
  const children = closure_8(allowEmail, obj);
  return closure_7(allowPhone(allowEmail[13]).ActionSheet, { startExpanded: true, children });
});