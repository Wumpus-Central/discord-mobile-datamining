// === Module 8569: FormRadioGroup ===

// Module 8569 (FormRadioGroup)
import c from "c" /* 576 */;
import TableRadioGroup from "TableRadioGroup" /* 6265 */;
import RedesignCompat from "RedesignCompat" /* 6266 */;
import FormSectionDefault from "FormSection" /* 8562 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["title", "hasIcons", "accessibilityLabel", "children", "value", "hint", "icon"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormRadioGroup(arg0) {
  const cResult = c.c(27);
  if (cResult[0] !== arg0) {
    ({ title, hasIcons, accessibilityLabel, children, value, hint, icon } = arg0);
    const tmp14 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = children;
    cResult[3] = hasIcons;
    cResult[4] = hint;
    cResult[5] = icon;
    cResult[6] = tmp14;
    cResult[7] = title;
    cResult[8] = value;
    let tmp11 = value;
    let tmp10 = title;
    let tmp9 = tmp14;
    let tmp8 = icon;
    let tmp7 = hint;
    let tmp6 = hasIcons;
    let tmp5 = children;
    let tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
  }
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { marginBottom: 24, marginHorizontal: 12 };
      cResult[9] = obj2;
      let items = obj2;
    } else {
      items = cResult[9];
    }
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp6) {
          if (cResult[13] === tmp10) {
            if (cResult[14] === tmp11) {
              let tmp24 = cResult[15];
            }
            if (cResult[16] !== tmp7) {
              let tmp29 = null;
              if (null != tmp7) {
                const obj3 = { style: { marginTop: 8 }, children: tmp7 };
                tmp29 = React5(View, obj3);
              }
              cResult[16] = tmp7;
              cResult[17] = tmp29;
              let tmp28 = tmp29;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] === tmp24) {
            }
            const obj4 = { style: items, children: null };
            items = [tmp24, tmp28];
            obj4.children = items;
            const tmp35 = closure_1_8(View, obj4);
            cResult[18] = tmp24;
            cResult[19] = tmp28;
            cResult[20] = tmp35;
          }
        }
      }
    }
    const obj5 = { children: null };
    const obj6 = { defaultValue: tmp11, hasIcons: tmp6, title: tmp10, accessibilityLabel: tmp4, children: tmp5 };
    obj5.children = React5(TableRadioGroup.TableRadioGroup, obj6);
    const tmp27 = React5(View, obj5);
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp6;
    cResult[13] = tmp10;
    cResult[14] = tmp11;
    cResult[15] = tmp27;
    tmp24 = tmp27;
  } else {
    if (cResult[21] === tmp5) {
      if (cResult[22] === tmp7) {
        if (cResult[23] === tmp8) {
          if (cResult[24] === tmp9) {
            if (cResult[25] === tmp10) {
              let tmp15 = cResult[26];
            }
            return tmp15;
          }
        }
      }
    }
    const obj7 = { title: tmp10, accessibilityRole: "radiogroup", accessibilityLabel: tmp10, hint: tmp7, icon: tmp8 };
    const merged = Object.assign(tmp9);
    obj7.children = tmp5;
    const tmp22 = React5(FormSectionDefault, obj7);
    cResult[21] = tmp5;
    cResult[22] = tmp7;
    cResult[23] = tmp8;
    cResult[24] = tmp9;
    cResult[25] = tmp10;
    cResult[26] = tmp22;
    tmp15 = tmp22;
  }
}) : (function FormRadioGroup(arg0) {
  ({ title, children, hint } = arg0);
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, hasIcons: 0, accessibilityLabel: 0, children: 0, value: 0, hint: 0, icon: 0 }));
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: { marginBottom: 24, marginHorizontal: 12 }, children: null };
    const obj3 = { children: null };
    const obj4 = { defaultValue: value, hasIcons, title, accessibilityLabel, children };
    obj3.children = React5(TableRadioGroup.TableRadioGroup, obj4);
    const items = [React5(View, obj3), ];
    let tmp13Result = null;
    if (null != hint) {
      const obj5 = { style: { marginTop: 8 }, children: hint };
      tmp13Result = React5(View, obj5);
    }
    items[1] = tmp13Result;
    obj2.children = items;
    let tmp11Result = closure_1_8(View, obj2);
  } else {
    const obj = { title, accessibilityRole: "radiogroup", accessibilityLabel: title, hint, icon };
    const merged1 = Object.assign(merged);
    obj.children = children;
    tmp11Result = React5(FormSectionDefault, obj);
  }
  return tmp11Result;
});