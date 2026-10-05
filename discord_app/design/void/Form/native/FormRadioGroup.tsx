// === Module 8909: FormRadioGroup ===

// Module 8909 (FormRadioGroup)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import RedesignCompat from "RedesignCompat" /* 6073 */;
import FormSectionDefault from "FormSection" /* 8902 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let closure_3 = ["title", "hasIcons", "accessibilityLabel", "children", "value", "hint", "icon"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let children;
  let hasIcons;
  let hint;
  let icon;
  let items;
  let obj6;
  let title;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let value;
  const obj = react2;
  const cResult = obj.c(27);
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
    tmp11 = value;
    tmp10 = title;
    tmp9 = tmp14;
    tmp8 = icon;
    tmp7 = hint;
    tmp6 = hasIcons;
    tmp5 = children;
    tmp4 = accessibilityLabel;
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
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    let tmp24;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { marginBottom: 24, marginHorizontal: 12 };
      cResult[9] = obj2;
      tmp24 = obj2;
    } else {
      tmp24 = cResult[9];
    }
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp6) {
          if (cResult[13] === tmp10) {
            let tmp25;
            let tmp29;
            if (cResult[14] === tmp11) {
              tmp25 = cResult[15];
            }
            if (cResult[16] !== tmp7) {
              let tmp30 = null;
              if (null != tmp7) {
                const obj3 = { style: { marginTop: 8 }, children: tmp7 };
                tmp30 = metroImportDefault(View, obj3);
              }
              cResult[16] = tmp7;
              cResult[17] = tmp30;
              tmp29 = tmp30;
            } else {
              tmp29 = cResult[17];
            }
            if (cResult[18] === tmp25) {
              let tmp33;
              if (cResult[19] === tmp29) {
                tmp33 = cResult[20];
              }
              tmp15 = tmp33;
            }
            const obj4 = { style: tmp24, children: items };
            items = [tmp25, tmp29];
            const tmp36 = metroImportAll(View, obj4);
            cResult[18] = tmp25;
            cResult[19] = tmp29;
            cResult[20] = tmp36;
            tmp33 = tmp36;
          }
        }
      }
    }
    const obj5 = { children: metroImportDefault(TableRadioGroup.TableRadioGroup, obj6) };
    obj6 = { defaultValue: tmp11, hasIcons: tmp6, title: tmp10, accessibilityLabel: tmp4, children: tmp5 };
    const tmp28 = metroImportDefault(View, obj5);
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp6;
    cResult[13] = tmp10;
    cResult[14] = tmp11;
    cResult[15] = tmp28;
    tmp25 = tmp28;
  } else {
    if (cResult[21] === tmp5) {
      if (cResult[22] === tmp7) {
        if (cResult[23] === tmp8) {
          if (cResult[24] === tmp9) {
            if (cResult[25] === tmp10) {
              tmp15 = cResult[26];
            }
          }
        }
      }
    }
    const obj7 = { title: tmp10, accessibilityRole: "radiogroup", accessibilityLabel: tmp10, hint: tmp7, icon: tmp8, children: tmp5 };
    const tmp18 = FormSectionDefault;
    const merged = Object.assign(tmp9);
    const tmp22 = metroImportDefault(tmp18, obj7);
    cResult[21] = tmp5;
    cResult[22] = tmp7;
    cResult[23] = tmp8;
    cResult[24] = tmp9;
    cResult[25] = tmp10;
    cResult[26] = tmp22;
    tmp15 = tmp22;
  }
  return tmp15;
}) : ((arg0) => {
  let accessibilityLabel;
  let children;
  let hasIcons;
  let hint;
  let icon;
  let items;
  let obj4;
  let title;
  let tmp11Result;
  let value;
  ({ title, children, hint } = arg0);
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, hasIcons: 0, accessibilityLabel: 0, children: 0, value: 0, hint: 0, icon: 0 }));
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: { marginBottom: 24, marginHorizontal: 12 }, children: items };
    const obj3 = { children: metroImportDefault(TableRadioGroup.TableRadioGroup, obj4) };
    obj4 = { defaultValue: value, hasIcons, title, accessibilityLabel, children };
    items = [metroImportDefault(View, obj3), ];
    let tmp13Result = null;
    if (null != hint) {
      const obj5 = { style: { marginTop: 8 }, children: hint };
      tmp13Result = metroImportDefault(View, obj5);
    }
    items[1] = tmp13Result;
    tmp11Result = metroImportAll(View, obj2);
  } else {
    const obj = { title, accessibilityRole: "radiogroup", accessibilityLabel: title, hint, icon, children };
    const tmp6 = FormSectionDefault;
    const merged1 = Object.assign(merged);
    tmp11Result = metroImportDefault(tmp6, obj);
  }
  return tmp11Result;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default tmp3;