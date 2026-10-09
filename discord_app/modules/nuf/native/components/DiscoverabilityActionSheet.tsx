// discord_app/modules/nuf/native/components/DiscoverabilityActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContactSyncModalStore = fn(12355);
({
  useContactSyncModalStore: closure_4,
  setAllowSync: hasOwnProperty,
  setAllowPhone: metroRequire,
  setAllowEmail: closure_7,
} = ContactSyncModalStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 },
  formRow: null,
  syncRow: null,
  formText: null,
  info: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
obj2.formRow = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.syncRow = { marginTop: 24 };
let obj4 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.formText = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj5 = { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.info = {
  marginTop: 8,
  fontSize: 14,
  lineHeight: 18,
  paddingHorizontal: 16,
  color: nativeDefault.colors.TEXT_SUBTLE,
};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = {
  marginTop: 8,
  fontSize: 14,
  lineHeight: 18,
  paddingHorizontal: 16,
  color: nativeDefault.colors.TEXT_SUBTLE,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DiscoverabilityActionSheet() {
      const cResult = allowPhone(allowEmail[8]).c(59);
      const tmp4 = closure_10();
      const tmp5 = closure_4();
      allowPhone = tmp5.allowPhone;
      allowEmail = tmp5.allowEmail;
      let tmp6 = allowPhone;
      if (!allowPhone) {
        tmp6 = allowEmail;
      }
      allowEmail = tmp6;
      if (cResult[0] !== tmp6) {
        const fn = function t() {
          hasOwnProperty(!allowEmail);
        };
        cResult[0] = tmp6;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== allowPhone) {
        const fn2 = function u() {
          timestampProducer(!allowPhone);
        };
        cResult[2] = allowPhone;
        cResult[3] = fn2;
      }
      if (cResult[4] !== allowEmail) {
        class F {
          constructor() {
            tmp = setAllowEmail(!allowEmail);
            return;
          }
        }
        cResult[4] = allowEmail;
        cResult[5] = F;
      } else {
        class F {
          constructor() {
            tmp = setAllowEmail(!allowEmail);
            return;
          }
        }
      }
      if (cResult[6] === tmp4.formRow) {
        class F {
          constructor() {
            tmp = setAllowEmail(!allowEmail);
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
          const stringResult = obj2.string(tmp(tmp2[9]).t.gMUgpv);
          cResult[9] = stringResult;
          const tmp12 = stringResult;
        } else {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
        }
        if (cResult[10] !== tmp4.formText) {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
          const obj3 = { style: tmp4.formText, text: tmp12 };
          const tmp15 = closure_8(tmp(tmp2[10]).FormRow.Label, obj3);
          cResult[10] = tmp4.formText;
          cResult[11] = tmp15;
        } else {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
        }
        if (cResult[12] !== tmp6) {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
          const obj4 = { selected: tmp6 };
          const tmp17 = closure_8(tmp(tmp2[10]).FormRow.Checkbox, obj4);
          cResult[12] = tmp6;
          cResult[13] = tmp17;
        } else {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
        }
        if (cResult[14] === tmp7) {
          class F {
            constructor() {
              tmp = setAllowEmail(!allowEmail);
              return;
            }
          }
        }
        const obj5 = { DEPRECATED_style: tmp10, label: tmp14, onPress: tmp7, trailing: tmp16 };
        const tmp20 = closure_8(tmp(tmp2[10]).FormRow, obj5);
        cResult[14] = tmp7;
        cResult[15] = tmp10;
        cResult[16] = tmp14;
        cResult[17] = tmp16;
        cResult[18] = tmp20;
      }
      const items = [,];
      ({ formRow: arr[0], syncRow: arr[1] } = tmp4);
      cResult[6] = tmp4.formRow;
      cResult[7] = tmp4.syncRow;
      cResult[8] = items;
      const obj = allowPhone(allowEmail[8]);
    }
  : function DiscoverabilityActionSheet() {
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
      const obj = { style: tmp.container, children: null };
      const callback2 = allowEmail.useCallback(() => {
        React5(!allowEmail);
      }, items2);
      const obj2 = { DEPRECATED_style: null, label: null, onPress: null, trailing: null };
      const items3 = [,];
      ({ formRow: arr4[0], syncRow: arr4[1] } = tmp);
      obj2.DEPRECATED_style = items3;
      const obj3 = { style: tmp.formText, text: null };
      const intl = allowPhone(allowEmail[9]).intl;
      obj3.text = intl.string(allowPhone(allowEmail[9]).t.gMUgpv);
      obj2.label = closure_8(allowPhone(allowEmail[10]).FormRow.Label, obj3);
      obj2.onPress = callback;
      obj2.trailing = closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: tmp3 });
      const items4 = [closure_8(allowPhone(allowEmail[10]).FormRow, obj2), , , , , ,];
      const obj4 = { style: tmp.info, children: null };
      const intl2 = allowPhone(allowEmail[9]).intl;
      obj4.children = intl2.string(allowPhone(allowEmail[9]).t.pfjsB5);
      items4[1] = closure_8(allowPhone(allowEmail[10]).FormText, obj4);
      const obj5 = { style: tmp.info, children: null };
      const intl3 = allowPhone(allowEmail[9]).intl;
      obj5.children = intl3.string(allowPhone(allowEmail[9]).t.cW1nr9);
      items4[2] = closure_8(allowPhone(allowEmail[10]).FormText, obj5);
      const obj6 = { style: tmp.info, children: null };
      const intl4 = allowPhone(allowEmail[9]).intl;
      obj6.children = intl4.format(allowPhone(allowEmail[9]).t.eswIfi, {
        learnMoreHook: function LearnMore(children, arg1) {
          return closure_1_8(
            allowPhone(allowEmail[11]).Text,
            {
              onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink,
              variant: "text-sm/medium",
              color: "text-link",
              children,
            },
            arg1,
          );
        },
      });
      items4[3] = closure_8(allowPhone(allowEmail[10]).FormText, obj6);
      const obj8 = { title: null, thinTitle: true };
      const intl5 = allowPhone(allowEmail[9]).intl;
      obj8.title = intl5.string(allowPhone(allowEmail[9]).t["0t2wRW"]);
      items4[4] = closure_8(allowPhone(allowEmail[10]).FormTitle, obj8);
      const obj9 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
      const obj10 = { style: tmp.formText, text: null };
      const intl6 = allowPhone(allowEmail[9]).intl;
      obj10.text = intl6.string(allowPhone(allowEmail[9]).t["eJnn0+"]);
      obj9.label = closure_8(allowPhone(allowEmail[10]).FormRow.Label, obj10);
      const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl7 = allowPhone(allowEmail[9]).intl;
      obj11.children = intl7.string(allowPhone(allowEmail[9]).t.X7pIKN);
      obj9.subLabel = closure_8(allowPhone(allowEmail[11]).Text, obj11);
      obj9.onPress = callback1;
      obj9.trailing = closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone });
      items4[5] = closure_8(allowPhone(allowEmail[10]).FormRow, obj9);
      const obj12 = { DEPRECATED_style: tmp.formRow, label: null, subLabel: null, onPress: null, trailing: null };
      const obj13 = { style: tmp.formText, text: null };
      const intl8 = allowPhone(allowEmail[9]).intl;
      obj13.text = intl8.string(allowPhone(allowEmail[9]).t.dI4d4S);
      obj12.label = closure_8(allowPhone(allowEmail[10]).FormRow.Label, obj13);
      const obj14 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl9 = allowPhone(allowEmail[9]).intl;
      obj14.children = intl9.string(allowPhone(allowEmail[9]).t.ilGsHE);
      obj12.subLabel = closure_8(allowPhone(allowEmail[11]).Text, obj14);
      obj12.onPress = callback2;
      obj12.trailing = closure_8(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowEmail });
      items4[6] = closure_8(allowPhone(allowEmail[10]).FormRow, obj12);
      obj.children = items4;
      const children = closure_9(View, obj);
      return closure_8(allowPhone(allowEmail[13]).ActionSheet, { startExpanded: true, children });
    };
