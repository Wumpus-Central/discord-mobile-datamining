// === Module 6583: MultipleChoiceField ===

// Module 6583 (MultipleChoiceField)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5915 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
let obj3 = {};
const merged = Object.assign(TextStyles(fn(1096).Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
obj3.paddingBottom = 16;
obj2.formHeader = obj3;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((hasIcons) => {
  const cResult = onChange(576).c(20);
  ({ field, onChange } = hasIcons);
  hasIcons = hasIcons.hasIcons;
  const tmp4 = closure_6();
  ({ label, choices, response } = field);
  if (cResult[0] !== choices) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function t(name, value) {
        return { name, value };
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = choices.map(tmp6);
    cResult[0] = choices;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === label) {
      if (response == null) {
        response = -1;
      }
      if (cResult[6] !== onChange) {
        class C {
          constructor(arg0) {
            return onChange(hasIcons);
          }
        }
        cResult[6] = onChange;
        cResult[7] = C;
      } else {
        class C {
          constructor(arg0) {
            return onChange(hasIcons);
          }
        }
      }
      if (cResult[8] !== arr) {
        class C {
          constructor(arg0) {
            return onChange(hasIcons);
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(arg0) {
              obj = { label: hasIcons.name, value: hasIcons.value };
              return closure_1_4(onChange(closure_1_1[10]).TableRadioRow, obj, hasIcons.value);
            }
          }
          cResult[10] = M;
        } else {
          class M {
            constructor(arg0) {
              obj = { label: hasIcons.name, value: hasIcons.value };
              return closure_1_4(onChange(closure_1_1[10]).TableRadioRow, obj, hasIcons.value);
            }
          }
        }
        const mapped1 = arr.map(M);
        cResult[8] = arr;
        cResult[9] = mapped1;
      } else {
        class M {
          constructor(arg0) {
            obj = { label: hasIcons.name, value: hasIcons.value };
            return closure_1_4(onChange(closure_1_1[10]).TableRadioRow, obj, hasIcons.value);
          }
        }
        if (cResult[11] === hasIcons) {
          class M {
            constructor(arg0) {
              obj = { label: hasIcons.name, value: hasIcons.value };
              return closure_1_4(onChange(closure_1_1[10]).TableRadioRow, obj, hasIcons.value);
            }
          }
        }
        const obj2 = { defaultValue: response, onChange: C, hasIcons, children: tmp14 };
        const tmp20 = closure_4(onChange(6072).TableRadioGroup, obj2);
        cResult[11] = hasIcons;
        cResult[12] = response;
        cResult[13] = C;
        cResult[14] = tmp14;
        cResult[15] = tmp20;
      }
    }
    const obj3 = { style: tmp4.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: label };
    const tmp11 = closure_4(onChange(4886).Text, obj3);
    cResult[3] = label;
    cResult[4] = tmp4.formHeader;
    cResult[5] = tmp11;
  }
  const obj = onChange(576);
}) : ((hasIcons) => {
  ({ field, onChange: require } = hasIcons);
  const tmp = closure_6();
  const choices = field.choices;
  let num = field.response;
  const items = [choices];
  const memo = noop.useMemo(() => choices.map((name, value) => ({ name, value })), items);
  const obj = { style: tmp.container, children: null };
  const items1 = [closure_4(require("Text/Text").Text, { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), ];
  if (num == null) {
    num = -1;
  }
  items1[1] = closure_4(require("TableRadioGroup").TableRadioGroup, {
    defaultValue: num,
    onChange(arg0) {
      return require(arg0);
    },
    hasIcons: hasIcons.hasIcons,
    children: memo.map((label) => closure_1_4(require("TableRadioRow").TableRadioRow, { label: label.name, value: label.value }, label.value))
  });
  obj.children = items1;
  return closure_5(View, obj);
});