// === Module 7303: FormRow ===

// Module 7303 (FormRow)
import nativeDefault from "native" /* 575 */;
import FormLabelDefault from "FormLabel" /* 7305 */;
import FormSubLabelDefault from "FormSubLabel" /* 7306 */;
import FormArrowDefault from "FormArrow" /* 7307 */;
import Form_FormRadioDefault from "Form/FormRadio" /* 7309 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 7312 */;
import FormCheckmarkDefault from "FormCheckmark" /* 7313 */;
import FormIconDefault from "FormIcon" /* 7314 */;
import noop from "module_19" /* 19 */;

const require = fn;
class FormRow {
  constructor(arg0) {
    label = global.label;
    leading = global.leading;
    ({ onPress, onLongPress, DEPRECATED_style, subLabel } = global);
    trailing = global.trailing;
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.hasError;
    if (flag2 === undefined) {
      flag2 = false;
    }
    flag3 = global.accessible;
    if (flag3 === undefined) {
      flag3 = true;
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = global);
    ({ style, labelStyle, trailingWrapperStyle, leadingStyle, delayLongPress, start } = global);
    if (start === undefined) {
      start = false;
    }
    flag4 = global.end;
    if (flag4 === undefined) {
      flag4 = false;
    }
    ref = global.ref;
    closure_8 = undefined;
    tmp = leadingStyle();
    closure_8 = tmp;
    obj = trailing;
    tmp2 = label;
    tmp3 = subLabel;
    if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
      if (typeof label === "function") {
        tmp14 = null;
        if (null != label) {
          tmp15 = label;
          if (!obj.isValidElement(label)) {
            tmp16 = labelStyle;
            tmp15 = labelStyle(label, {});
          }
          tmp14 = tmp15;
        }
        tmp17 = tmp14;
      } else {
        tmp17 = label;
      }
      if (typeof subLabel !== "function") {
        if (!obj.isValidElement(subLabel)) {
          tmp18 = null;
          if (null != subLabel) {
            tmp18 = subLabel;
          }
        }
        if (typeof leading === "function") {
          tmp22 = null;
          if (null != leading) {
            tmp23 = leading;
            if (!obj.isValidElement(leading)) {
              tmp24 = labelStyle;
              tmp23 = labelStyle(leading, {});
            }
            tmp22 = tmp23;
          }
          tmp25 = tmp22;
        } else {
          tmp25 = leading;
        }
        if (typeof trailing === "function") {
          tmp26 = null;
          if (null != trailing) {
            tmp27 = trailing;
            if (!obj.isValidElement(trailing)) {
              tmp28 = labelStyle;
              tmp27 = labelStyle(trailing, {});
            }
            tmp26 = tmp27;
          }
          tmp29 = tmp26;
        } else {
          tmp29 = trailing;
        }
        tmp30 = labelStyle;
        obj1 = { variant: null, start: null, end: null, label: null, subLabel: null, icon: null, trailing: null, disabled: null, accessible: null, accessibilityLabel: null, accessibilityHint: null, accessibilityRole: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, labelLineClamp: null, delayLongPress: null, onPress: null, onLongPress: null };
        obj1.variant = global.variant;
        obj1.start = start;
        obj1.end = flag4;
        obj1.label = tmp17;
        obj1.subLabel = tmp18;
        obj1.icon = tmp25;
        obj1.trailing = tmp29;
        obj1.disabled = flag;
        obj1.accessible = flag3;
        obj1.accessibilityLabel = accessibilityLabel;
        obj1.accessibilityHint = accessibilityHint;
        obj1.accessibilityRole = accessibilityRole;
        obj1.accessibilityState = accessibilityState;
        obj1.accessibilityActions = accessibilityActions;
        obj1.onAccessibilityAction = onAccessibilityAction;
        obj1.onAccessibilityTap = onAccessibilityTap;
        obj1.labelLineClamp = numberOfLines;
        obj1.delayLongPress = delayLongPress;
        obj1.onPress = onPress;
        obj1.onLongPress = onLongPress;
        return labelStyle(tmp2(tmp3[7]).TableRow, obj1);
      }
      tmp19 = null;
      if (null != subLabel) {
        tmp20 = subLabel;
        if (!obj.isValidElement(subLabel)) {
          tmp21 = labelStyle;
          tmp20 = labelStyle(subLabel, {});
        }
        tmp19 = tmp20;
      }
      tmp18 = tmp19;
    } else {
      renderInnerView = function renderInnerView() {
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
      };
      obj6 = { disabled: null };
      obj6.disabled = flag;
      tmp4 = obj6;
      tmp5 = accessibilityState;
      merged = Object.assign(accessibilityState);
      tmp7 = null;
      if (null == onPress) {
        if (null == onLongPress) {
          obj7 = { ref: null, style: null, accessible: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, children: null };
          obj7.ref = ref;
          items = [, , , , ];
          items[0] = tmp.container;
          items[1] = DEPRECATED_style;
          items[2] = style;
          error = flag2;
          tmp31 = labelStyle;
          tmp32 = numberOfLines;
          if (flag2) {
            error = tmp.error;
          }
          items[3] = error;
          disabled = null;
          if (flag) {
            disabled = tmp.disabled;
          }
          items[4] = disabled;
          obj7.style = items;
          obj7.accessible = flag3;
          obj7.accessibilityRole = accessibilityRole;
          obj7.accessibilityState = obj6;
          obj7.accessibilityLabel = accessibilityLabel;
          obj7.accessibilityHint = accessibilityHint;
          obj7.accessibilityActions = accessibilityActions;
          obj7.onAccessibilityAction = onAccessibilityAction;
          obj7.onAccessibilityTap = onAccessibilityTap;
          num = 0;
          obj7.children = renderInnerView();
          tmp31Result = tmp31(tmp32, obj7);
        }
        return tmp31Result;
      }
      tmp10 = labelStyle;
      obj8 = { ref: null, style: null, disabled: null, accessible: true, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onAccessibilityTap: null, onPress: null, onLongPress: null, onPressOut: null, delayLongPress: null, unstable_pressDelay: null, children: null };
      obj8.ref = ref;
      items1 = [, , , , ];
      items1[0] = tmp.container;
      items1[1] = DEPRECATED_style;
      items1[2] = style;
      if (flag2) {
        flag2 = tmp.error;
      }
      items1[3] = flag2;
      disabled1 = null;
      if (flag) {
        disabled1 = tmp.disabled;
      }
      items1[4] = disabled1;
      obj8.style = items1;
      obj8.disabled = flag;
      str = accessibilityRole;
      if (accessibilityRole == null) {
        str = "button";
      }
      obj8.accessibilityRole = str;
      obj8.accessibilityState = obj6;
      obj8.accessibilityLabel = accessibilityLabel;
      obj8.accessibilityHint = accessibilityHint;
      obj8.accessibilityActions = accessibilityActions;
      obj8.onAccessibilityAction = onAccessibilityAction;
      tmp12 = undefined;
      if (!flag) {
        tmp12 = onAccessibilityTap;
      }
      obj8.onAccessibilityTap = tmp12;
      tmp13 = undefined;
      if (!flag) {
        tmp13 = onPress;
      }
      obj8.onPress = tmp13;
      obj8.onLongPress = onLongPress;
      obj8.onPressOut = global.onPressOut;
      obj8.delayLongPress = delayLongPress;
      num2 = undefined;
      if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
        num2 = 130;
      }
      obj8.unstable_pressDelay = num2;
      num3 = 0;
      obj8.children = renderInnerView();
      tmp31Result = tmp10(tmp2(tmp3[10]).PressableHighlight, obj8);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
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
FormRow.Arrow = FormArrowDefault;
FormRow.Label = FormLabelDefault;
FormRow.SubLabel = FormSubLabelDefault;
FormRow.Radio = Form_FormRadioDefault;
FormRow.Checkbox = Form_FormCheckboxDefault;
FormRow.Checkmark = FormCheckmarkDefault;
FormRow.Icon = FormIconDefault;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default FormRow;