// === Module 14095: RadioGroup ===

// Module 14095 (RadioGroup)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import FormRowDefault from "FormRow" /* 7137 */;
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
  size = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: dependencyMap[MEDIUM] };
  items[1] = size;
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
      obj = { size: null, active: null, style: null };
      obj.size = size;
      obj.active = active;
      obj.style = style;
      tmpResult = tmp(RadioSelected, obj);
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
  obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected: checked, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { accessibilityRole, accessibilityState, disabled, onPress: null, DEPRECATED_style: null, label: null, subLabel: null, trailing: null, leading: null };
  let tmp7;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj.onPress = tmp7;
  const items = [style, , ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  items[2] = null != option.collapsibleContent && (checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground);
  obj.DEPRECATED_style = items;
  ({ name: obj2.label, desc: obj2.subLabel } = option);
  let tmp8 = null;
  if (!indicatorLeft) {
    tmp8 = null;
    if (showIndicator) {
      tmp8 = tmp3;
    }
  }
  obj.trailing = tmp8;
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
  obj.leading = leading;
  return timestampProducer(FormRowDefault, obj);
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
      obj = { style: null, children: null };
      obj.style = tmp.collapsibleContainer;
      tmp7 = checked;
      tmp8 = style;
      obj1 = { isExpanded: null, collapsibleContent: null, style: null, children: null };
      obj1.isExpanded = checked;
      obj1.collapsibleContent = option.collapsibleContent;
      obj1.style = tmp.collapsibleStyle;
      obj1.children = function children(onPress) {
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
      obj.children = onPress(checked(style[8]), obj1);
      tmp4 = onPress(indicatorLeft, obj);
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
            obj = { option, checked: value === option.value, style: null, size: null, disabled: null, onPress: null, indicatorLeft: null, showIndicator: null };
            const items = [dependencyMap, ];
            if (index === options.length - 1) {
              obj = { marginBottom: 0 };
            } else {
              obj = flag2 ? { marginBottom: 8 } : {};
            }
            items[1] = obj;
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
                obj = { style: divider.divider };
                tmp2Result = timestampProducer(View, obj);
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
let Sizes = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
const dependencyMap = { [Sizes.SMALL]: 2, [Sizes.MEDIUM]: 3, [Sizes.LARGE]: 4 };
fn(4560);
Sizes = { radioIcon: null, radioIconSelected: null, radioTick: null, disabled: null, divider: null, collapsibleStyle: null, collapsibleBackgroundSelected: null, collapsibleBackground: null, collapsibleContainer: null };
Sizes = { flex: 0, marginRight: 8, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.TEXT_MUTED, borderWidth: 2 };
Sizes.radioIcon = Sizes;
const createStyles = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
Sizes.radioIconSelected = createStyles;
Sizes.radioTick = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
Sizes.disabled = { opacity: 0.3 };
const obj2 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
Sizes.divider = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
const obj3 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
Sizes.collapsibleStyle = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const obj4 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
Sizes.collapsibleBackgroundSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
Sizes.collapsibleBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
Sizes.collapsibleContainer = { paddingVertical: 4, paddingHorizontal: 12 };
let closure_10 = createStyles.createStyles(Sizes);
RadioIndicator.Sizes = Sizes;
RadioGroup.Sizes = Sizes;
let size = fn(2);
const result = size.fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default RadioGroup;
export { RadioIndicator };
export { RadioItem };