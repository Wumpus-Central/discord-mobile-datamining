// discord_app/design/void/Form/native/FormRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FormLabelDefault from "FormLabel.tsx";
import FormSubLabelDefault from "FormSubLabel.tsx";
import FormArrowDefault from "FormArrow.tsx";
import Form_FormRadioDefault from "FormRadio.tsx";
import Form_FormCheckboxDefault from "FormCheckbox.tsx";
import FormCheckmarkDefault from "FormCheckmark.tsx";
import FormIconDefault from "FormIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles(() => {
  let obj = { container: null, label: null, leading: null, trailing: null, disabled: null, error: null };
  obj = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  obj = { paddingHorizontal: 16, paddingVertical: 16 };
  const merged = Object.assign(obj);
  obj.container = obj;
  obj.label = { flexShrink: 1, flexGrow: 1, flexBasis: "30%" };
  obj.leading = { flexGrow: 0, marginRight: 16 };
  obj.trailing = { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 };
  obj.disabled = { opacity: 0.5 };
  const merged1 = Object.assign({ paddingHorizontal: 14, paddingVertical: 14 });
  obj.error = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  return obj;
});
let obj = {
  Arrow: FormArrowDefault,
  Label: FormLabelDefault,
  SubLabel: FormSubLabelDefault,
  Radio: Form_FormRadioDefault,
  Checkbox: Form_FormCheckboxDefault,
  Checkmark: FormCheckmarkDefault,
  Icon: FormIconDefault,
};
let merged = Object.assign(
  {},
  noop.forwardRef((label, ref) => {
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
    ({
      accessibilityLabel,
      accessibilityHint,
      accessibilityRole,
      accessibilityState,
      accessibilityActions,
      onAccessibilityAction,
      onAccessibilityTap,
      numberOfLines,
    } = label);
    ({
      style,
      labelStyle: closure_5,
      trailingWrapperStyle: closure_6,
      leadingStyle: closure_7,
      delayLongPress,
      start,
    } = label);
    if (start === undefined) {
      start = false;
    }
    let flag4 = label.end;
    if (flag4 === undefined) {
      flag4 = false;
    }
    const tmp = closure_7();
    closure_8 = tmp;
    let obj = trailing;
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
        obj = {
          variant: label.variant,
          start,
          end: flag4,
          label: tmp18,
          subLabel: tmp19,
          icon: tmp26,
          trailing: tmp30,
          disabled: flag,
          accessible: flag3,
          accessibilityLabel,
          accessibilityHint,
          accessibilityRole,
          accessibilityState,
          accessibilityActions,
          onAccessibilityAction,
          onAccessibilityTap,
          labelLineClamp: numberOfLines,
          delayLongPress,
          onPress,
          onLongPress,
        };
        return style(tmp2(tmp3[7]).TableRow, obj);
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
          if (!noop.isValidElement(tmp)) {
            let obj = { numberOfLines, text: tmp, style };
            let tmp7 = hasOwnProperty(FormLabelDefault, obj);
          }
          if (typeof subLabel !== "function") {
            if (!noop.isValidElement(tmp12)) {
              let tmp13 = null;
              if (null != tmp12) {
                obj = { text: tmp12, numberOfLines };
                tmp13 = hasOwnProperty(FormSubLabelDefault, obj);
              }
            }
            if (typeof leading === "function") {
              let tmp23 = null;
              if (null != tmp22) {
                let tmp25 = tmp22;
                if (!noop.isValidElement(tmp22)) {
                  tmp25 = hasOwnProperty(tmp22, {});
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
                if (!noop.isValidElement(tmp28)) {
                  tmp31 = hasOwnProperty(tmp28, {});
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
              const items = [closure_8.leading, closure_1_7];
              obj.style = items;
              obj.children = tmp27;
              tmp37 = hasOwnProperty(React4, obj);
            }
            const items1 = [tmp37, ,];
            const obj1 = { style: closure_8.label, children: null };
            const items2 = [tmp7, tmp13];
            obj1.children = items2;
            items1[1] = timestampProducer(React4, obj1);
            let tmp44 = null;
            if (null != trailing) {
              const obj2 = { style: null, children: null };
              const items3 = [closure_8.trailing, closure_1_6];
              obj2.style = items3;
              obj2.children = tmp33;
              tmp44 = hasOwnProperty(React4, obj2);
            }
            const obj3 = { children: null };
            items1[2] = tmp44;
            obj3.children = items1;
            return timestampProducer(noop.Fragment, obj3);
          }
          let tmp18 = null;
          if (null != subLabel) {
            let tmp20 = tmp12;
            if (!noop.isValidElement(tmp12)) {
              tmp20 = hasOwnProperty(tmp12, {});
            }
            tmp18 = tmp20;
          }
          tmp13 = tmp18;
        }
        let tmp8 = null;
        if (null != label) {
          let tmp10 = tmp;
          if (!noop.isValidElement(tmp)) {
            tmp10 = hasOwnProperty(tmp, {});
          }
          tmp8 = tmp10;
        }
        tmp7 = tmp8;
      }
      obj = { disabled: flag };
      const merged = Object.assign(accessibilityState);
      if (null == onPress) {
        if (null == onLongPress) {
          let obj1 = {
            ref,
            style: null,
            accessible: null,
            accessibilityRole: null,
            accessibilityState: null,
            accessibilityLabel: null,
            accessibilityHint: null,
            accessibilityActions: null,
            onAccessibilityAction: null,
            onAccessibilityTap: null,
            children: null,
          };
          let items = [tmp.container, DEPRECATED_style, style, ,];
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
          obj1.style = items;
          obj1.accessible = flag3;
          obj1.accessibilityRole = accessibilityRole;
          obj1.accessibilityState = obj;
          obj1.accessibilityLabel = accessibilityLabel;
          obj1.accessibilityHint = accessibilityHint;
          obj1.accessibilityActions = accessibilityActions;
          obj1.onAccessibilityAction = onAccessibilityAction;
          obj1.onAccessibilityTap = onAccessibilityTap;
          obj1.children = renderInnerView();
          let tmp11Result = style(numberOfLines, obj1);
        }
        return tmp11Result;
      }
      let obj2 = {
        ref,
        style: null,
        disabled: null,
        accessible: true,
        accessibilityRole: null,
        accessibilityState: null,
        accessibilityLabel: null,
        accessibilityHint: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
        onAccessibilityTap: null,
        onPress: null,
        onLongPress: null,
        onPressOut: null,
        delayLongPress: null,
        unstable_pressDelay: null,
        children: null,
      };
      let items1 = [tmp.container, DEPRECATED_style, style, ,];
      if (flag2) {
        flag2 = tmp.error;
      }
      items1[3] = flag2;
      let disabled1 = null;
      if (flag) {
        disabled1 = tmp.disabled;
      }
      items1[4] = disabled1;
      obj2.style = items1;
      obj2.disabled = flag;
      let str = accessibilityRole;
      if (accessibilityRole == null) {
        str = "button";
      }
      obj2.accessibilityRole = str;
      obj2.accessibilityState = obj;
      obj2.accessibilityLabel = accessibilityLabel;
      obj2.accessibilityHint = accessibilityHint;
      obj2.accessibilityActions = accessibilityActions;
      obj2.onAccessibilityAction = onAccessibilityAction;
      let tmp13;
      if (!flag) {
        tmp13 = onAccessibilityTap;
      }
      obj2.onAccessibilityTap = tmp13;
      let tmp14;
      if (!flag) {
        tmp14 = onPress;
      }
      obj2.onPress = tmp14;
      obj2.onLongPress = onLongPress;
      obj2.onPressOut = label.onPressOut;
      obj2.delayLongPress = delayLongPress;
      let num2;
      if (trailing.useContext(label(subLabel[5]).FormContext).isForm) {
        num2 = 130;
      }
      obj2.unstable_pressDelay = num2;
      obj2.children = renderInnerView();
      tmp11Result = style(tmp2(tmp3[10]).PressableHighlight, obj2);
    }
  }),
  obj,
);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default merged;
