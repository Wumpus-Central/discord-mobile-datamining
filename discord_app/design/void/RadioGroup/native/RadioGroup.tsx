// === Module 14187: RadioGroup ===

// Module 14187 (RadioGroup)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4358 */;
import FormRowDefault from "FormRow" /* 7244 */;
import noop from "module_19" /* 19 */;

require = fn;
function RadioEmpty(size) {
  let MEDIUM = size.size;
  const style = [closure_10().radioIcon, , ];
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  size = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: dependencyMap[MEDIUM] };
  style[1] = size;
  style[2] = size.style;
  return timestampProducer(View, { style });
}
function RadioSelected(style) {
  ({ size, active } = style);
  const tmp = closure_10();
  const items = [tmp.radioIcon, , , ];
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: dependencyMap[MEDIUM] };
  items[1] = size1;
  if (active) {
    active = tmp.radioIconSelected;
  }
  obj = { style: items, children: null };
  items[2] = active;
  items[3] = style.style;
  const items1 = [tmp.radioTick, ];
  if (size === undefined) {
    size = obj.MEDIUM;
  }
  items1[1] = { width: size, height: size };
  obj.children = timestampProducer(View, { style: items1 });
  return timestampProducer(View, obj);
}
class RadioIndicator {
  constructor(arg0) {
    ({ size, active, style } = global);
    tmp = jsx;
    if (active) {
      tmp4 = RadioSelected;
      obj1 = { size: null, active: null, style: null };
      obj1.size = size;
      obj1.active = active;
      obj1.style = style;
      tmpResult = tmp(RadioSelected, obj1);
    } else {
      tmp2 = RadioEmpty;
      obj = { size: null, style: null };
      obj.size = size;
      obj.style = style;
      tmpResult = tmp(RadioEmpty, obj);
    }
    return tmpResult;
  }
}
function RadioBar(arg0) {
  ({ checked, option, disabled, indicatorLeft, showIndicator } = arg0);
  ({ style, size, onPress } = arg0);
  const tmp = closure_10();
  const tmp3 = timestampProducer(RadioIndicator, { size, active: checked });
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: checked, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj3 = { accessibilityRole, accessibilityState, disabled, onPress: null, DEPRECATED_style: null, label: null, subLabel: null, trailing: null, leading: null };
  let tmp7;
  const tmp4 = checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj3.onPress = tmp7;
  const items = [style, , ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  items[2] = null != option.collapsibleContent && tmp4;
  obj3.DEPRECATED_style = items;
  ({ name: obj2.label, desc: obj2.subLabel } = option);
  let tmp8 = null;
  if (!indicatorLeft) {
    tmp8 = null;
    if (showIndicator) {
      tmp8 = tmp3;
    }
  }
  obj3.trailing = tmp8;
  if (null == option.leading) {
    let tmp9 = null;
    if (indicatorLeft) {
      tmp9 = null;
      if (showIndicator) {
        tmp9 = tmp3;
      }
    }
    let leading = tmp9;
  } else {
    leading = option.leading;
  }
  obj3.leading = leading;
  return timestampProducer(FormRowDefault, obj3);
}
class RadioItem {
  constructor(arg0) {
    option = global.option;
    checked = global.checked;
    style = global.style;
    size = global.size;
    ({ disabled, indicatorLeft } = global);
    showIndicator = global.showIndicator;
    onPress = global.onPress;
    disabled = undefined;
    tmp = closure_10();
    if (!disabled) {
      disabled = option.disabled;
    }
    if (null != option.collapsibleContent) {
      tmp5 = onPress;
      tmp6 = indicatorLeft;
      obj1 = { style: null, children: null };
      obj1.style = tmp.collapsibleContainer;
      tmp7 = checked;
      tmp8 = style;
      obj4 = { isExpanded: null, collapsibleContent: null, style: null, children: null };
      obj4.isExpanded = checked;
      obj4.collapsibleContent = option.collapsibleContent;
      obj4.style = tmp.collapsibleStyle;
      obj4.children = function children(onPress) {
        onPress = onPress.onPress;
        return onPress(RadioBar, {
          option: onPress,
          checked,
          style,
          size,
          disabled,
          onPress(preventDefault) {
            preventDefault.preventDefault();
            if (onPress != null) {
              tmp2(option);
            }
            onPress(preventDefault);
          },
          indicatorLeft,
          showIndicator
        });
      };
      obj1.children = onPress(checked(style[8]), obj4);
      tmp4 = onPress(indicatorLeft, obj1);
    } else {
      tmp2 = onPress;
      tmp3 = RadioBar;
      obj = { option: null, checked: null, style: null, size: null, disabled: null, onPress: null, indicatorLeft: null, showIndicator: null };
      obj.option = option;
      obj.checked = checked;
      obj.style = style;
      obj.size = size;
      obj.disabled = disabled;
      obj.onPress = function handlePress(preventDefault) {
        preventDefault.preventDefault();
        let tmp2Result;
        if (onPress != null) {
          tmp2Result = tmp2(option);
        }
        return tmp2Result;
      };
      obj.indicatorLeft = indicatorLeft;
      obj.showIndicator = showIndicator;
      tmp4 = onPress(RadioBar, obj);
    }
    return tmp4;
  }
}
class RadioGroup {
  constructor(arg0) {
    value = global.value;
    if (value === undefined) {
      value = null;
    }
    c0 = value;
    options = global.options;
    if (options === undefined) {
      options = [];
    }
    closure_1 = options;
    ({ style, size } = global);
    if (size === undefined) {
      tmp2 = c8;
      size = c8.MEDIUM;
    }
    MEDIUM = size;
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    c4 = flag;
    flag2 = global.withSpacing;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c5 = flag2;
    flag3 = global.indicatorLeft;
    if (flag3 === undefined) {
      flag3 = false;
    }
    c6 = flag3;
    flag4 = global.showIndicator;
    if (flag4 === undefined) {
      flag4 = true;
    }
    c7 = flag4;
    flag5 = global.withDividers;
    if (flag5 === undefined) {
      flag5 = true;
    }
    c8 = flag5;
    onChange = global.onChange;
    if (onChange === undefined) {
      onChange = c5;
    }
    closure_9 = onChange;
    closure_10 = undefined;
    closure_10 = closure_10();
    obj = {
      children: options.map((option, index) => {
            const obj = { option, checked: value === option.value, style: null, size: null, disabled: null, onPress: null, indicatorLeft: null, showIndicator: null };
            const items = [dependencyMap, ];
            if (index === options.length - 1) {
              let obj2 = { marginBottom: 0 };
            } else {
              obj2 = flag2 ? { marginBottom: 8 } : {};
            }
            items[1] = obj2;
            obj.style = items;
            obj.size = size;
            obj.disabled = flag;
            obj.onPress = onChange;
            obj.indicatorLeft = flag3;
            obj.showIndicator = flag4;
            const children = [timestampProducer(RadioItem, obj, "radio-option-" + JSON.stringify(option.value) + "-" + index), ];
            let tmp2Result = null;
            if (index !== options.length - 1) {
              tmp2Result = null;
              if (flag5) {
                const obj3 = { style: divider.divider };
                tmp2Result = timestampProducer(View, obj3);
              }
            }
            children[1] = tmp2Result;
            return React5(noop.Fragment, { children }, "radio-option-" + JSON.stringify(option.value) + "-" + index);
          })
    };
    return c6(c4, obj);
  }
}
const View = fn(17).View;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const Sizes = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
const dependencyMap = { [Sizes.SMALL]: 2, [Sizes.MEDIUM]: 3, [Sizes.LARGE]: 4 };
const createStyles = fn(4639);
let obj3 = { radioIcon: { flex: 0, marginRight: 8, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.TEXT_MUTED, borderWidth: 2 }, radioIconSelected: null, radioTick: null, disabled: null, divider: null, collapsibleStyle: null, collapsibleBackgroundSelected: null, collapsibleBackground: null, collapsibleContainer: null };
const obj4 = { flex: 0, marginRight: 8, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.TEXT_MUTED, borderWidth: 2 };
obj3.radioIconSelected = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const obj5 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj3.radioTick = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj3.disabled = { opacity: 0.3 };
const obj6 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj3.divider = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
const obj7 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
obj3.collapsibleStyle = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const obj8 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.collapsibleBackgroundSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.collapsibleBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3.collapsibleContainer = { paddingVertical: 4, paddingHorizontal: 12 };
let closure_10 = createStyles.createStyles(obj3);
RadioIndicator.Sizes = Sizes;
RadioGroup.Sizes = Sizes;
let size = fn(2);
const result = size.fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default RadioGroup;
export { RadioIndicator };
export { RadioItem };