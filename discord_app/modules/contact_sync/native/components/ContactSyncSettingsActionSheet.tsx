// discord_app/modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ContactSyncModalStore from "../ContactSyncModalStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({
  setAllowEmail: c3,
  setAllowPhone: closure_4,
  setAllowSync: hasOwnProperty,
  useContactSyncModalStore: metroRequire,
} = ContactSyncModalStore);
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, formRow: obj3, syncRow: { marginTop: 24 }, formText: obj4, info: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let allowEmail;
      let allowPhone;
      let tmp8;
      let tmp9;
      let obj = allowPhone(allowEmail[8]);
      const cResult = obj.c(59);
      const tmp4 = closure_9();
      const tmp5 = closure_6();
      allowPhone = tmp5.allowPhone;
      allowEmail = tmp5.allowEmail;
      let closure_2 = tmp6;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arg0) {
          S(arg0);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u(arg0) {
          closure_4(arg0);
        };
        cResult[1] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[1];
      }
      let closure_4 = tmp8;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(dependencyMap) {
            first(dependencyMap);
          }
        }
        cResult[2] = S;
        tmp9 = S;
      } else {
        class S {
          constructor(dependencyMap) {
            first(dependencyMap);
          }
        }
      }
      S = tmp9;
      if (cResult[3] === tmp4.formRow) {
        let tmp11;
        let tmp16;
        class S {
          constructor(dependencyMap) {
            first(dependencyMap);
          }
        }
        const _Symbol = Symbol;
        const formText = tmp4.formText;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
          const stringResult = obj2.string(allowPhone(allowEmail[9]).t.a5QL24);
          cResult[6] = stringResult;
          tmp11 = stringResult;
        } else {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
        }
        if (cResult[7] !== tmp4.formText) {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
          const obj3 = { style: formText, text: tmp11 };
          cResult[7] = tmp4.formText;
          cResult[8] = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj3);
          const tmp14 = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj3);
        } else {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
        }
        if (cResult[9] !== (allowPhone || allowEmail)) {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
          const obj4 = { selected: allowPhone || allowEmail };
          const tmp19 = closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, obj4);
          cResult[9] = allowPhone || allowEmail;
          cResult[10] = tmp17;
          cResult[11] = tmp19;
          tmp16 = tmp19;
        } else {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
          tmp16 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          class S {
            constructor(dependencyMap) {
              first(dependencyMap);
            }
          }
        }
        const obj5 = { DEPRECATED_style: tmp10, label: tmp13, onPress: tmp17, trailing: tmp16 };
        cResult[12] = tmp10;
        cResult[13] = tmp13;
        cResult[14] = tmp17;
        cResult[15] = tmp16;
        cResult[16] = closure_7(allowPhone(allowEmail[10]).FormRow, obj5);
        const tmp22 = closure_7(allowPhone(allowEmail[10]).FormRow, obj5);
      }
      const items = [,];
      ({ formRow: arr[0], syncRow: arr[1] } = tmp4);
      cResult[3] = tmp4.formRow;
      cResult[4] = tmp4.syncRow;
      cResult[5] = items;
    }
  : () => {
      let Label;
      let Label2;
      let Label3;
      let Text;
      let Text2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items;
      let items1;
      let obj10;
      let obj11;
      let obj13;
      let obj14;
      let obj3;
      let obj7;
      const tmp = closure_9();
      const tmp2 = closure_6();
      const allowPhone = tmp2.allowPhone;
      const allowEmail = tmp2.allowEmail;
      let closure_2 = tmp3;
      let obj = { style: tmp.container, children: items1 };
      const obj2 = {
        DEPRECATED_style: items,
        label: closure_7(Label, obj3),
        onPress() {
          hasOwnProperty(!closure_2);
        },
        trailing: closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone || allowEmail }),
      };
      items = [,];
      ({ formRow: arr[0], syncRow: arr[1] } = tmp);
      const FormRow = allowPhone(allowEmail[10]).FormRow;
      obj3 = { style: tmp.formText, text: intl.string(allowPhone(allowEmail[9]).t.a5QL24) };
      Label = allowPhone(allowEmail[10]).FormRow.Label;
      intl = allowPhone(allowEmail[9]).intl;
      items1 = [closure_7(FormRow, obj2), , , , , ,];
      const obj4 = { style: tmp.info, children: intl2.string(allowPhone(allowEmail[9]).t.pfjsB5) };
      const FormText = allowPhone(allowEmail[10]).FormText;
      intl2 = allowPhone(allowEmail[9]).intl;
      items1[1] = closure_7(FormText, obj4);
      const obj5 = { style: tmp.info, children: intl3.string(allowPhone(allowEmail[9]).t.cW1nr9) };
      const FormText2 = allowPhone(allowEmail[10]).FormText;
      intl3 = allowPhone(allowEmail[9]).intl;
      items1[2] = closure_7(FormText2, obj5);
      const obj6 = { style: tmp.info, children: intl4.format(allowPhone(allowEmail[9]).t.eswIfi, obj7) };
      const FormText3 = allowPhone(allowEmail[10]).FormText;
      intl4 = allowPhone(allowEmail[9]).intl;
      obj7 = {
        learnMoreHook(children, arg1) {
          const obj = {
            onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink,
            variant: "text-sm/medium",
            color: "text-link",
            children,
          };
          const Text = allowPhone(allowEmail[11]).Text;
          return closure_1_7(Text, obj, arg1);
        },
      };
      items1[3] = closure_7(FormText3, obj6);
      const obj8 = { title: intl5.string(allowPhone(allowEmail[9]).t["0t2wRW"]), thinTitle: true };
      const FormTitle = allowPhone(allowEmail[10]).FormTitle;
      intl5 = allowPhone(allowEmail[9]).intl;
      items1[4] = closure_7(FormTitle, obj8);
      const obj9 = {
        DEPRECATED_style: tmp.formRow,
        label: closure_7(Label2, obj10),
        subLabel: closure_7(Text, obj11),
        onPress() {
          React3(!allowPhone);
        },
        trailing: closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone }),
      };
      const FormRow2 = allowPhone(allowEmail[10]).FormRow;
      obj10 = { style: tmp.formText, text: intl6.string(allowPhone(allowEmail[9]).t["eJnn0+"]) };
      Label2 = allowPhone(allowEmail[10]).FormRow.Label;
      intl6 = allowPhone(allowEmail[9]).intl;
      obj11 = {
        variant: "text-sm/medium",
        color: "text-default",
        children: intl7.string(allowPhone(allowEmail[9]).t.X7pIKN),
      };
      Text = allowPhone(allowEmail[11]).Text;
      intl7 = allowPhone(allowEmail[9]).intl;
      items1[5] = closure_7(FormRow2, obj9);
      const obj12 = {
        DEPRECATED_style: tmp.formRow,
        label: closure_7(Label3, obj13),
        subLabel: closure_7(Text2, obj14),
        onPress() {
          _false(!allowEmail);
        },
        trailing: closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowEmail }),
      };
      const FormRow3 = allowPhone(allowEmail[10]).FormRow;
      obj13 = { style: tmp.formText, text: intl8.string(allowPhone(allowEmail[9]).t.dI4d4S) };
      Label3 = allowPhone(allowEmail[10]).FormRow.Label;
      intl8 = allowPhone(allowEmail[9]).intl;
      obj14 = {
        variant: "text-sm/medium",
        color: "text-default",
        children: intl9.string(allowPhone(allowEmail[9]).t.ilGsHE),
      };
      Text2 = allowPhone(allowEmail[11]).Text;
      intl9 = allowPhone(allowEmail[9]).intl;
      items1[6] = closure_7(FormRow3, obj12);
      const children = closure_8(closure_2, obj);
      return closure_7(allowPhone(allowEmail[13]).ActionSheet, { startExpanded: true, children });
    };
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default tmp6;
