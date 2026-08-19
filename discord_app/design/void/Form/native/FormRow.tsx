// === Module 6937: ? ===

// Module 6937
import ThemesDefault from "Themes" /* 712 */;
import FormLabelDefault from "FormLabel" /* 6940 */;
import FormSubLabelDefault from "FormSubLabel" /* 6941 */;
import FormArrowDefault from "FormArrow" /* 6942 */;
import FormRadioDefault from "FormRadio" /* 6943 */;
import FormCheckboxDefault from "FormCheckbox" /* 6946 */;
import RowCheckmarkDefault from "RowCheckmark" /* 6947 */;
import FormIconDefault from "FormIcon" /* 6948 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c3 = importAllResult;
({ Platform, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => {
  let obj = { container: null, label: null, leading: null, trailing: null, disabled: null, error: null };
  obj = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  obj = { paddingHorizontal: 16, paddingVertical: 16 };
  const merged = Object.assign(obj);
  obj[0] = obj;
  obj[1] = { flexShrink: 1, flexGrow: 1, flexBasis: "30%" };
  obj[2] = { flexGrow: 0, marginRight: 16 };
  obj[3] = { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 };
  obj[4] = { opacity: 0.5 };
  const merged1 = Object.assign({ paddingHorizontal: 14, paddingVertical: 14 });
  obj[5] = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  return obj;
});
let obj = { Arrow: FormArrowDefault, Label: FormLabelDefault, SubLabel: FormSubLabelDefault, Radio: FormRadioDefault, Checkbox: FormCheckboxDefault, Checkmark: RowCheckmarkDefault, Icon: FormIconDefault };
let merged = Object.assign({}, importAllResult.forwardRef((label) => {
  label = label.label;
  const leading = label.leading;
  ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
  const trailing = label.trailing;
  let flag = label.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = label.hasError;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = label.accessible;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = label);
  ({ style, labelStyle: closure_5, trailingWrapperStyle: closure_6, leadingStyle: closure_7, delayLongPress, start } = label);
  if (start === undefined) {
    start = false;
  }
  let flag4 = label.end;
  if (flag4 === undefined) {
    flag4 = false;
  }
  closure_8 = undefined;
  const tmp = callback2();
  closure_8 = tmp;
  let obj = trailing;
  if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
    if (typeof label === "function") {
      let tmp15 = null;
      if (null != label) {
        let tmp16 = label;
        if (!obj.isValidElement(label)) {
          tmp16 = callback(label, {});
        }
        tmp15 = tmp16;
      }
      let tmp18 = tmp15;
    } else {
      tmp18 = label;
    }
    if (typeof subLabel !== "function") {
      if (!obj.isValidElement(subLabel)) {
        let tmp19 = null;
        if (null != subLabel) {
          tmp19 = subLabel;
        }
      }
      if (typeof leading === "function") {
        let tmp23 = null;
        if (null != leading) {
          let tmp24 = leading;
          if (!obj.isValidElement(leading)) {
            tmp24 = callback(leading, {});
          }
          tmp23 = tmp24;
        }
        let tmp26 = tmp23;
      } else {
        tmp26 = leading;
      }
      if (typeof trailing === "function") {
        let tmp27 = null;
        if (null != trailing) {
          let tmp28 = trailing;
          if (!obj.isValidElement(trailing)) {
            tmp28 = callback(trailing, {});
          }
          tmp27 = tmp28;
        }
        let tmp30 = tmp27;
      } else {
        tmp30 = trailing;
      }
      obj = { variant: null, start: null, end: null, label: null, subLabel: null, icon: null, trailing: null, disabled: null, accessible: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, labelLineClamp: null, delayLongPress: null, onPress: null, onLongPress: null };
      obj[0] = label.variant;
      obj[1] = start;
      obj[2] = flag4;
      obj[3] = tmp18;
      obj[4] = tmp19;
      obj[5] = tmp26;
      obj[6] = tmp30;
      obj[7] = flag;
      obj[8] = flag3;
      obj[9] = accessibilityLabel;
      obj[10] = accessibilityHint;
      obj[11] = accessibilityRole;
      obj[12] = accessibilityState;
      obj[13] = accessibilityActions;
      obj[14] = onAccessibilityAction;
      obj[15] = onAccessibilityTap;
      obj[16] = numberOfLines;
      obj[17] = delayLongPress;
      obj[18] = onPress;
      obj[19] = onLongPress;
      return callback(tmp2(tmp3[7]).TableRow, obj);
    }
    let tmp20 = null;
    if (null != subLabel) {
      let tmp21 = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp21 = callback(subLabel, {});
      }
      tmp20 = tmp21;
    }
    tmp19 = tmp20;
  } else {
    function renderInnerView() {
      if (typeof label !== "function") {
        if (!trailing.isValidElement(tmp)) {
          let obj = { numberOfLines: null, text: null, style: null };
          obj[0] = numberOfLines;
          obj[1] = tmp;
          obj[2] = closure_5;
          let tmp7 = closure_1_5(leading(subLabel[8]), obj);
        }
        if (typeof subLabel !== "function") {
          if (!trailing.isValidElement(tmp12)) {
            let tmp13 = null;
            if (null != tmp12) {
              obj = { text: null, numberOfLines: null };
              obj[0] = tmp12;
              obj[1] = numberOfLines;
              tmp13 = closure_1_5(leading(subLabel[9]), obj);
            }
          }
          if (typeof leading === "function") {
            let tmp23 = null;
            if (null != tmp22) {
              let tmp25 = tmp22;
              if (!trailing.isValidElement(tmp22)) {
                tmp25 = closure_1_5(tmp22, {});
              }
              tmp23 = tmp25;
            }
            let tmp27 = tmp23;
          } else {
            tmp27 = tmp22;
          }
          if (typeof trailing === "function") {
            let tmp29 = null;
            if (null != tmp28) {
              let tmp31 = tmp28;
              if (!trailing.isValidElement(tmp28)) {
                tmp31 = closure_1_5(tmp28, {});
              }
              tmp29 = tmp31;
            }
            let tmp33 = tmp29;
          } else {
            tmp33 = tmp28;
          }
          let tmp37 = null;
          if (null != leading) {
            obj = { style: null, children: null };
            const items = [closure_8.leading, closure_7];
            obj[0] = items;
            obj[1] = tmp27;
            tmp37 = closure_1_5(numberOfLines, obj);
          }
          const items1 = [tmp37, , ];
          obj1 = { style: null, children: null };
          obj1[0] = closure_8.label;
          const items2 = [tmp7, tmp13];
          obj1[1] = items2;
          items1[1] = closure_1_6(numberOfLines, obj1);
          let tmp44 = null;
          if (null != trailing) {
            const obj2 = { style: null, children: null };
            const items3 = [closure_8.trailing, closure_6];
            obj2[0] = items3;
            obj2[1] = tmp33;
            tmp44 = closure_1_5(numberOfLines, obj2);
          }
          const obj3 = { children: null };
          items1[2] = tmp44;
          obj3[0] = items1;
          return closure_1_6(trailing.Fragment, obj3);
        }
        let tmp18 = null;
        if (null != subLabel) {
          let tmp20 = tmp12;
          if (!trailing.isValidElement(tmp12)) {
            tmp20 = closure_1_5(tmp12, {});
          }
          tmp18 = tmp20;
        }
        tmp13 = tmp18;
      }
      let tmp8 = null;
      if (null != label) {
        let tmp10 = tmp;
        if (!trailing.isValidElement(tmp)) {
          tmp10 = closure_1_5(tmp, {});
        }
        tmp8 = tmp10;
      }
      tmp7 = tmp8;
    }
    obj = { disabled: null };
    obj[0] = flag;
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        obj1 = { ref: null, style: null, accessible: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, children: null };
        obj1[0] = arg1;
        let items = [tmp.container, DEPRECATED_style, style, , ];
        error = flag2;
        if (flag2) {
          error = tmp.error;
        }
        items[3] = error;
        let disabled = null;
        if (flag) {
          disabled = tmp.disabled;
        }
        items[4] = disabled;
        obj1[1] = items;
        obj1[2] = flag3;
        obj1[3] = accessibilityRole;
        obj1[4] = obj;
        obj1[5] = accessibilityLabel;
        obj1[6] = accessibilityHint;
        obj1[7] = accessibilityActions;
        obj1[8] = onAccessibilityAction;
        obj1[9] = onAccessibilityTap;
        obj1[10] = renderInnerView();
        let tmp11Result = callback(numberOfLines, obj1);
        const tmp32 = callback;
        let tmp33 = numberOfLines;
      }
      return tmp11Result;
    }
    let obj2 = { ref: null, style: null, disabled: null, accessible: true, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, onPress: null, onLongPress: null, onPressOut: null, delayLongPress: null, unstable_pressDelay: null, children: null };
    obj2[0] = arg1;
    let items1 = [tmp.container, DEPRECATED_style, style, , ];
    if (flag2) {
      flag2 = tmp.error;
    }
    items1[3] = flag2;
    let disabled1 = null;
    if (flag) {
      disabled1 = tmp.disabled;
    }
    items1[4] = disabled1;
    obj2[1] = items1;
    obj2[2] = flag;
    let str = accessibilityRole;
    if (accessibilityRole == null) {
      str = "button";
    }
    obj2[4] = str;
    obj2[5] = obj;
    obj2[6] = accessibilityLabel;
    obj2[7] = accessibilityHint;
    obj2[8] = accessibilityActions;
    obj2[9] = onAccessibilityAction;
    let tmp13;
    if (!flag) {
      tmp13 = onAccessibilityTap;
    }
    obj2[10] = tmp13;
    let tmp14;
    if (!flag) {
      tmp14 = onPress;
    }
    obj2[11] = tmp14;
    obj2[12] = onLongPress;
    obj2[13] = label.onPressOut;
    obj2[14] = delayLongPress;
    let num2;
    if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj2[15] = num2;
    obj2[16] = renderInnerView();
    tmp11Result = callback(tmp2(tmp3[10]).PressableHighlight, obj2);
    const tmp11 = callback;
  }
}), obj);
const forwardRefResult = importAllResult.forwardRef((label) => {
  label = label.label;
  const leading = label.leading;
  ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
  const trailing = label.trailing;
  let flag = label.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = label.hasError;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = label.accessible;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = label);
  ({ style, labelStyle: closure_5, trailingWrapperStyle: closure_6, leadingStyle: closure_7, delayLongPress, start } = label);
  if (start === undefined) {
    start = false;
  }
  let flag4 = label.end;
  if (flag4 === undefined) {
    flag4 = false;
  }
  closure_8 = undefined;
  const tmp = callback2();
  closure_8 = tmp;
  let obj = trailing;
  if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
    if (typeof label === "function") {
      let tmp15 = null;
      if (null != label) {
        let tmp16 = label;
        if (!obj.isValidElement(label)) {
          tmp16 = callback(label, {});
        }
        tmp15 = tmp16;
      }
      let tmp18 = tmp15;
    } else {
      tmp18 = label;
    }
    if (typeof subLabel !== "function") {
      if (!obj.isValidElement(subLabel)) {
        let tmp19 = null;
        if (null != subLabel) {
          tmp19 = subLabel;
        }
      }
      if (typeof leading === "function") {
        let tmp23 = null;
        if (null != leading) {
          let tmp24 = leading;
          if (!obj.isValidElement(leading)) {
            tmp24 = callback(leading, {});
          }
          tmp23 = tmp24;
        }
        let tmp26 = tmp23;
      } else {
        tmp26 = leading;
      }
      if (typeof trailing === "function") {
        let tmp27 = null;
        if (null != trailing) {
          let tmp28 = trailing;
          if (!obj.isValidElement(trailing)) {
            tmp28 = callback(trailing, {});
          }
          tmp27 = tmp28;
        }
        let tmp30 = tmp27;
      } else {
        tmp30 = trailing;
      }
      obj = { variant: null, start: null, end: null, label: null, subLabel: null, icon: null, trailing: null, disabled: null, accessible: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, labelLineClamp: null, delayLongPress: null, onPress: null, onLongPress: null };
      obj[0] = label.variant;
      obj[1] = start;
      obj[2] = flag4;
      obj[3] = tmp18;
      obj[4] = tmp19;
      obj[5] = tmp26;
      obj[6] = tmp30;
      obj[7] = flag;
      obj[8] = flag3;
      obj[9] = accessibilityLabel;
      obj[10] = accessibilityHint;
      obj[11] = accessibilityRole;
      obj[12] = accessibilityState;
      obj[13] = accessibilityActions;
      obj[14] = onAccessibilityAction;
      obj[15] = onAccessibilityTap;
      obj[16] = numberOfLines;
      obj[17] = delayLongPress;
      obj[18] = onPress;
      obj[19] = onLongPress;
      return callback(tmp2(tmp3[7]).TableRow, obj);
    }
    let tmp20 = null;
    if (null != subLabel) {
      let tmp21 = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp21 = callback(subLabel, {});
      }
      tmp20 = tmp21;
    }
    tmp19 = tmp20;
  } else {
    function renderInnerView() {
      if (typeof label !== "function") {
        if (!trailing.isValidElement(tmp)) {
          let obj = { numberOfLines: null, text: null, style: null };
          obj[0] = numberOfLines;
          obj[1] = tmp;
          obj[2] = closure_5;
          let tmp7 = closure_1_5(leading(subLabel[8]), obj);
        }
        if (typeof subLabel !== "function") {
          if (!trailing.isValidElement(tmp12)) {
            let tmp13 = null;
            if (null != tmp12) {
              obj = { text: null, numberOfLines: null };
              obj[0] = tmp12;
              obj[1] = numberOfLines;
              tmp13 = closure_1_5(leading(subLabel[9]), obj);
            }
          }
          if (typeof leading === "function") {
            let tmp23 = null;
            if (null != tmp22) {
              let tmp25 = tmp22;
              if (!trailing.isValidElement(tmp22)) {
                tmp25 = closure_1_5(tmp22, {});
              }
              tmp23 = tmp25;
            }
            let tmp27 = tmp23;
          } else {
            tmp27 = tmp22;
          }
          if (typeof trailing === "function") {
            let tmp29 = null;
            if (null != tmp28) {
              let tmp31 = tmp28;
              if (!trailing.isValidElement(tmp28)) {
                tmp31 = closure_1_5(tmp28, {});
              }
              tmp29 = tmp31;
            }
            let tmp33 = tmp29;
          } else {
            tmp33 = tmp28;
          }
          let tmp37 = null;
          if (null != leading) {
            obj = { style: null, children: null };
            const items = [closure_8.leading, closure_7];
            obj[0] = items;
            obj[1] = tmp27;
            tmp37 = closure_1_5(numberOfLines, obj);
          }
          const items1 = [tmp37, , ];
          obj1 = { style: null, children: null };
          obj1[0] = closure_8.label;
          const items2 = [tmp7, tmp13];
          obj1[1] = items2;
          items1[1] = closure_1_6(numberOfLines, obj1);
          let tmp44 = null;
          if (null != trailing) {
            const obj2 = { style: null, children: null };
            const items3 = [closure_8.trailing, closure_6];
            obj2[0] = items3;
            obj2[1] = tmp33;
            tmp44 = closure_1_5(numberOfLines, obj2);
          }
          const obj3 = { children: null };
          items1[2] = tmp44;
          obj3[0] = items1;
          return closure_1_6(trailing.Fragment, obj3);
        }
        let tmp18 = null;
        if (null != subLabel) {
          let tmp20 = tmp12;
          if (!trailing.isValidElement(tmp12)) {
            tmp20 = closure_1_5(tmp12, {});
          }
          tmp18 = tmp20;
        }
        tmp13 = tmp18;
      }
      let tmp8 = null;
      if (null != label) {
        let tmp10 = tmp;
        if (!trailing.isValidElement(tmp)) {
          tmp10 = closure_1_5(tmp, {});
        }
        tmp8 = tmp10;
      }
      tmp7 = tmp8;
    }
    obj = { disabled: null };
    obj[0] = flag;
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        obj1 = { ref: null, style: null, accessible: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, children: null };
        obj1[0] = arg1;
        let items = [tmp.container, DEPRECATED_style, style, , ];
        error = flag2;
        if (flag2) {
          error = tmp.error;
        }
        items[3] = error;
        let disabled = null;
        if (flag) {
          disabled = tmp.disabled;
        }
        items[4] = disabled;
        obj1[1] = items;
        obj1[2] = flag3;
        obj1[3] = accessibilityRole;
        obj1[4] = obj;
        obj1[5] = accessibilityLabel;
        obj1[6] = accessibilityHint;
        obj1[7] = accessibilityActions;
        obj1[8] = onAccessibilityAction;
        obj1[9] = onAccessibilityTap;
        obj1[10] = renderInnerView();
        let tmp11Result = callback(numberOfLines, obj1);
        const tmp32 = callback;
        let tmp33 = numberOfLines;
      }
      return tmp11Result;
    }
    let obj2 = { ref: null, style: null, disabled: null, accessible: true, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, onPress: null, onLongPress: null, onPressOut: null, delayLongPress: null, unstable_pressDelay: null, children: null };
    obj2[0] = arg1;
    let items1 = [tmp.container, DEPRECATED_style, style, , ];
    if (flag2) {
      flag2 = tmp.error;
    }
    items1[3] = flag2;
    let disabled1 = null;
    if (flag) {
      disabled1 = tmp.disabled;
    }
    items1[4] = disabled1;
    obj2[1] = items1;
    obj2[2] = flag;
    let str = accessibilityRole;
    if (accessibilityRole == null) {
      str = "button";
    }
    obj2[4] = str;
    obj2[5] = obj;
    obj2[6] = accessibilityLabel;
    obj2[7] = accessibilityHint;
    obj2[8] = accessibilityActions;
    obj2[9] = onAccessibilityAction;
    let tmp13;
    if (!flag) {
      tmp13 = onAccessibilityTap;
    }
    obj2[10] = tmp13;
    let tmp14;
    if (!flag) {
      tmp14 = onPress;
    }
    obj2[11] = tmp14;
    obj2[12] = onLongPress;
    obj2[13] = label.onPressOut;
    obj2[14] = delayLongPress;
    let num2;
    if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj2[15] = num2;
    obj2[16] = renderInnerView();
    tmp11Result = callback(tmp2(tmp3[10]).PressableHighlight, obj2);
    const tmp11 = callback;
  }
});
const result = require("set").fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default merged;