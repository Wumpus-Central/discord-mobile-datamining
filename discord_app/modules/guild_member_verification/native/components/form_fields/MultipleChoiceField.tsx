// discord_app/modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../discord_common/js/shared/Constants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let hasIcons;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: obj2 };
obj2 = { paddingBottom: 16 };
createStyles = createStyles.createStyles;
const DISPLAY_SEMIBOLD = Fonts.DISPLAY_SEMIBOLD;
const merged = Object.assign(
  TextStyles(DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }),
);
let closure_6 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasIcons) => {
      let arr;
      let choices;
      let field;
      let label;
      let onChange;
      let response;
      let obj = onChange(576);
      const cResult = obj.c(20);
      ({ field, onChange } = hasIcons);
      hasIcons = hasIcons.hasIcons;
      const tmp4 = closure_6();
      ({ label, choices, response } = field);
      if (cResult[0] !== choices) {
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t(name, value) {
            return { name, value };
          };
          cResult[2] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const mapped = choices.map(tmp6);
        cResult[0] = choices;
        cResult[1] = mapped;
        arr = mapped;
      } else {
        arr = cResult[1];
      }
      if (cResult[3] === label) {
        if (response == null) {
          response = -1;
        }
        if (cResult[6] !== onChange) {
          class C {
            constructor(arg0) {
              return onChange(arg0);
            }
          }
          cResult[6] = onChange;
          cResult[7] = C;
        } else {
          class C {
            constructor(arg0) {
              return onChange(arg0);
            }
          }
        }
        if (cResult[8] !== arr) {
          class C {
            constructor(arg0) {
              return onChange(arg0);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(label) {
                const obj = { label: label.name, value: label.value };
                return closure_1_4(onChange(dependencyMap[10]).TableRadioRow, obj, label.value);
              }
            }
            cResult[10] = M;
          } else {
            class M {
              constructor(label) {
                const obj = { label: label.name, value: label.value };
                return closure_1_4(onChange(dependencyMap[10]).TableRadioRow, obj, label.value);
              }
            }
          }
          const mapped1 = arr.map(M);
          cResult[8] = arr;
          cResult[9] = mapped1;
        } else {
          class M {
            constructor(label) {
              const obj = { label: label.name, value: label.value };
              return closure_1_4(onChange(dependencyMap[10]).TableRadioRow, obj, label.value);
            }
          }
        }
        if (cResult[11] === hasIcons) {
          class M {
            constructor(label) {
              const obj = { label: label.name, value: label.value };
              return closure_1_4(onChange(dependencyMap[10]).TableRadioRow, obj, label.value);
            }
          }
        }
        const obj2 = { defaultValue: response, onChange: C, hasIcons, children: tmp12 };
        cResult[11] = hasIcons;
        cResult[12] = response;
        cResult[13] = C;
        cResult[14] = tmp12;
        cResult[15] = closure_4(onChange(6072).TableRadioGroup, obj2);
        const tmp17 = closure_4(onChange(6072).TableRadioGroup, obj2);
      }
      const obj3 = {
        style: tmp4.formHeader,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: label,
      };
      cResult[3] = label;
      cResult[4] = tmp4.formHeader;
      cResult[5] = closure_4(onChange(4886).Text, obj3);
      closure_4(onChange(4886).Text, obj3);
    }
  : (hasIcons) => {
      let field;
      let items1;
      ({ field, onChange: require } = hasIcons);
      hasIcons = hasIcons.hasIcons;
      const tmp = closure_6();
      const choices = field.choices;
      let num = field.response;
      const items = [choices];
      const label = field.label;
      const memo = react.useMemo(() => choices.map((name, value) => ({ name, value })), items);
      let obj = { style: tmp.container, children: items1 };
      items1 = [,];
      const obj2 = {
        style: tmp.formHeader,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: label,
      };
      items1[0] = closure_4(require("Text/Text").Text, obj2);
      const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
      if (num == null) {
        num = -1;
      }
      const obj3 = {
        defaultValue: num,
        onChange(arg0) {
          return require(arg0);
        },
        hasIcons,
        children: memo.map((label) => {
          const obj = { label: label.name, value: label.value };
          return closure_1_4(require("TableRadioRow").TableRadioRow, obj, label.value);
        }),
      };
      items1[1] = closure_4(TableRadioGroup, obj3);
      return closure_5(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx",
);

export default tmp6;
