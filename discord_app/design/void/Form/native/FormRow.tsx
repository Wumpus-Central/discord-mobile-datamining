// === Module 7244: FormRow ===

// Module 7244 (FormRow)
import nativeDefault from "native" /* 576 */;
import FormLabelDefault from "FormLabel" /* 7246 */;
import FormSubLabelDefault from "FormSubLabel" /* 7247 */;
import FormArrowDefault from "FormArrow" /* 7248 */;
import Form_FormRadioDefault from "Form/FormRadio" /* 7250 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 7253 */;
import FormCheckmarkDefault from "FormCheckmark" /* 7254 */;
import FormIconDefault from "FormIcon" /* 7255 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let closure_7 = createStyles.createStyles(() => {
  const obj = { container: null, label: null, leading: null, trailing: null, disabled: null, error: null };
  const merged = Object.assign({ paddingHorizontal: 16, paddingVertical: 16 });
  obj.container = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  obj.label = { flexShrink: 1, flexGrow: 1, flexBasis: "30%" };
  obj.leading = { flexGrow: 0, marginRight: 16 };
  obj.trailing = { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 };
  obj.disabled = { opacity: 0.5 };
  const merged1 = Object.assign({ paddingHorizontal: 14, paddingVertical: 14 });
  obj.error = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  return obj;
});
let obj = { Arrow: FormArrowDefault, Label: FormLabelDefault, SubLabel: FormSubLabelDefault, Radio: Form_FormRadioDefault, Checkbox: Form_FormCheckboxDefault, Checkmark: FormCheckmarkDefault, Icon: FormIconDefault };
let merged = Object.assign({}, noop.forwardRef((label, ref) => {
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
  const tmp = closure_7();
  closure_8 = tmp;
  if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
    if (typeof label === "function") {
      let tmp15 = null;
      if (null != label) {
        let tmp16 = label;
        if (!obj.isValidElement(label)) {
          tmp16 = style(label, {});
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
            tmp24 = style(leading, {});
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
            tmp28 = style(trailing, {});
          }
          tmp27 = tmp28;
        }
        let tmp30 = tmp27;
      } else {
        tmp30 = trailing;
      }
      let obj2 = { variant: label.variant, start, end: flag4, label: tmp18, subLabel: tmp19, icon: tmp26, trailing: tmp30, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
      return style(tmp2(subLabel[7]).TableRow, obj2);
    }
    let tmp20 = null;
    if (null != subLabel) {
      let tmp21 = subLabel;
      if (!obj.isValidElement(subLabel)) {
        tmp21 = style(subLabel, {});
      }
      tmp20 = tmp21;
    }
    tmp19 = tmp20;
  } else {
    function renderInnerView() {
      if (typeof label !== "function") {
        if (!noop.isValidElement(label)) {
          const obj = { numberOfLines, text: label, style };
          let tmp7 = hasOwnProperty(FormLabelDefault, obj);
        }
        if (typeof subLabel !== "function") {
          if (!noop.isValidElement(subLabel)) {
            let tmp13 = null;
            if (null != subLabel) {
              const obj2 = { text: subLabel, numberOfLines };
              tmp13 = hasOwnProperty(FormSubLabelDefault, obj2);
            }
          }
          if (typeof leading === "function") {
            let tmp23 = null;
            if (null != leading) {
              let tmp25 = leading;
              if (!noop.isValidElement(leading)) {
                tmp25 = hasOwnProperty(leading, {});
              }
              tmp23 = tmp25;
            }
            let tmp27 = tmp23;
          } else {
            tmp27 = leading;
          }
          if (typeof trailing === "function") {
            let tmp29 = null;
            if (null != trailing) {
              let tmp31 = trailing;
              if (!noop.isValidElement(trailing)) {
                tmp31 = hasOwnProperty(trailing, {});
              }
              tmp29 = tmp31;
            }
            let tmp33 = tmp29;
          } else {
            tmp33 = trailing;
          }
          let tmp37 = null;
          if (null != leading) {
            const obj3 = { style: null, children: null };
            const items = [closure_8.leading, closure_1_7];
            obj3.style = items;
            obj3.children = tmp27;
            tmp37 = hasOwnProperty(React4, obj3);
          }
          const items1 = [tmp37, , ];
          const obj4 = { style: closure_8.label, children: null };
          const items2 = [tmp7, tmp13];
          obj4.children = items2;
          items1[1] = timestampProducer(React4, obj4);
          let tmp44 = null;
          if (null != trailing) {
            const obj5 = { style: null, children: null };
            const items3 = [closure_8.trailing, closure_1_6];
            obj5.style = items3;
            obj5.children = tmp33;
            tmp44 = hasOwnProperty(React4, obj5);
          }
          const obj6 = { children: null };
          items1[2] = tmp44;
          obj6.children = items1;
          return timestampProducer(noop.Fragment, obj6);
        }
        let tmp18 = null;
        if (null != subLabel) {
          let tmp20 = subLabel;
          if (!noop.isValidElement(subLabel)) {
            tmp20 = hasOwnProperty(subLabel, {});
          }
          tmp18 = tmp20;
        }
        tmp13 = tmp18;
      }
      let tmp8 = null;
      if (null != label) {
        let tmp10 = label;
        if (!noop.isValidElement(label)) {
          tmp10 = hasOwnProperty(label, {});
        }
        tmp8 = tmp10;
      }
      tmp7 = tmp8;
    }
    let obj3 = { disabled: flag };
    const merged = Object.assign(accessibilityState);
    if (null == onPress) {
      if (null == onLongPress) {
        let obj4 = { ref, style: null, accessible: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, children: null };
        let items = [tmp.container, DEPRECATED_style, style, , ];
        let error = flag2;
        if (flag2) {
          error = tmp.error;
        }
        items[3] = error;
        let disabled = null;
        if (flag) {
          disabled = tmp.disabled;
        }
        items[4] = disabled;
        obj4.style = items;
        obj4.accessible = flag3;
        obj4.accessibilityRole = accessibilityRole;
        obj4.accessibilityState = obj3;
        obj4.accessibilityLabel = accessibilityLabel;
        obj4.accessibilityHint = accessibilityHint;
        obj4.accessibilityActions = accessibilityActions;
        obj4.onAccessibilityAction = onAccessibilityAction;
        obj4.onAccessibilityTap = onAccessibilityTap;
        obj4.children = renderInnerView();
        let tmp11Result = style(numberOfLines, obj4);
      }
      return tmp11Result;
    }
    let obj5 = { ref, style: null, disabled: null, accessible: true, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, onPress: null, onLongPress: null, onPressOut: null, delayLongPress: null, unstable_pressDelay: null, children: null };
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
    obj5.style = items1;
    obj5.disabled = flag;
    let str = accessibilityRole;
    if (accessibilityRole == null) {
      str = "button";
    }
    obj5.accessibilityRole = str;
    obj5.accessibilityState = obj3;
    obj5.accessibilityLabel = accessibilityLabel;
    obj5.accessibilityHint = accessibilityHint;
    obj5.accessibilityActions = accessibilityActions;
    obj5.onAccessibilityAction = onAccessibilityAction;
    let tmp13;
    if (!flag) {
      tmp13 = onAccessibilityTap;
    }
    obj5.onAccessibilityTap = tmp13;
    let tmp14;
    if (!flag) {
      tmp14 = onPress;
    }
    obj5.onPress = tmp14;
    obj5.onLongPress = onLongPress;
    obj5.onPressOut = label.onPressOut;
    obj5.delayLongPress = delayLongPress;
    let num2;
    if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
      num2 = 130;
    }
    obj5.unstable_pressDelay = num2;
    obj5.children = renderInnerView();
    tmp11Result = style(tmp2(subLabel[10]).PressableHighlight, obj5);
  }
}), obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default merged;