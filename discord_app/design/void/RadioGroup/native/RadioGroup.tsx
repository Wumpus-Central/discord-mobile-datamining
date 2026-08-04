// discord_app/design/void/RadioGroup/native/RadioGroup.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { NOOP } from "sum";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let require = arg1;
function RadioEmpty(size) {
  let MEDIUM = size.size;
  const style = [callback2().radioIcon, , ];
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  obj = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: dependencyMap[MEDIUM] };
  style[1] = obj;
  style[2] = size.style;
  return closure_6(View, { style });
}
function RadioSelected(style) {
  let active;
  let size;
  ({ size, active } = style);
  const tmp = callback2();
  const items = [tmp.radioIcon, , , ];
  let MEDIUM = size;
  if (size === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  obj = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: dependencyMap[MEDIUM] };
  items[1] = obj;
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
  obj[1] = closure_6(View, { style: items1 });
  return closure_6(View, obj);
}
class RadioIndicator {
  constructor(arg0) {
    ({ size, active, style } = global);
    tmp = jsx;
    if (active) {
      tmp4 = RadioSelected;
      obj = { size: null, active: null, style: null };
      obj[0] = size;
      obj[1] = active;
      obj[2] = style;
      tmpResult = tmp(RadioSelected, obj);
    } else {
      tmp2 = RadioEmpty;
      obj = { size: null, style: null };
      obj[0] = size;
      obj[1] = style;
      tmpResult = tmp(RadioEmpty, obj);
    }
    return tmpResult;
  }
}
function RadioBar(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let disabled;
  let indicatorLeft;
  let onPress;
  let option;
  let showIndicator;
  let size;
  let style;
  ({ checked, option, disabled, indicatorLeft, showIndicator } = arg0);
  ({ style, size, onPress } = arg0);
  const tmp = callback2();
  const tmp3 = callback(RadioIndicator, { size, active: checked });
  let obj = require(3911) /* useCheckboxA11yNative */;
  const radioA11yNative = obj.useRadioA11yNative({ selected: checked, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { accessibilityRole, accessibilityState, disabled, onPress: null, DEPRECATED_style: null, label: null, subLabel: null, trailing: null, leading: null };
  let tmp7;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj[3] = tmp7;
  const items = [style, , ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[1] = disabled;
  items[2] = null != option.collapsibleContent && (checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground);
  obj[4] = items;
  ({ name: obj2[5], desc: obj2[6] } = option);
  let tmp8 = null;
  if (!indicatorLeft) {
    tmp8 = null;
    if (showIndicator) {
      tmp8 = tmp3;
    }
  }
  obj[7] = tmp8;
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
  obj[8] = leading;
  return callback(importDefault(5217), obj);
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
    tmp = LARGE();
    if (!disabled) {
      disabled = option.disabled;
    }
    if (null != option.collapsibleContent) {
      tmp5 = onPress;
      tmp6 = indicatorLeft;
      obj = { style: null, children: null };
      obj[0] = tmp.collapsibleContainer;
      tmp7 = checked;
      tmp8 = style;
      obj1 = { isExpanded: null, collapsibleContent: null, style: null, children: null };
      obj1[0] = checked;
      obj1[1] = option.collapsibleContent;
      obj1[2] = tmp.collapsibleStyle;
      obj1[3] = function children(onPress) {
        onPress = onPress.onPress;
        return onPress(outer1_14, {
          option: onPress,
          checked,
          style,
          size,
          disabled,
          onPress(preventDefault) {
            preventDefault.preventDefault();
            if (outer1_6 != null) {
              tmp2(onPress);
            }
            onPress(preventDefault);
          },
          indicatorLeft,
          showIndicator
        });
      };
      obj[1] = onPress(require("Collapsible"), obj1);
      tmp4 = onPress(indicatorLeft, obj);
    } else {
      tmp2 = onPress;
      tmp3 = RadioBar;
      obj = { option: null, checked: null, style: null, size: null, disabled: null, onPress: null, indicatorLeft: null, showIndicator: null };
      obj[0] = option;
      obj[1] = checked;
      obj[2] = style;
      obj[3] = size;
      obj[4] = disabled;
      obj[5] = function handlePress(preventDefault) {
        preventDefault.preventDefault();
        let tmp2Result;
        if (onPress != null) {
          tmp2Result = tmp2(option);
        }
        return tmp2Result;
      };
      obj[6] = indicatorLeft;
      obj[7] = showIndicator;
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
    onChange = undefined;
    onChange = onChange();
    obj = {
      children: options.map((option) => {
            let obj = { option, checked: closure_0 === option.value, style: null, size: null, disabled: null, onPress: null, indicatorLeft: null, showIndicator: null };
            const items = [closure_2, ];
            if (arg1 === options.length - 1) {
              obj = { marginBottom: 0 };
            } else {
              obj = flag2 ? { marginBottom: 8 } : {};
            }
            items[1] = obj;
            obj[2] = items;
            obj[3] = size;
            obj[4] = flag;
            obj[5] = onChange;
            obj[6] = flag3;
            obj[7] = flag4;
            const children = [flag3(outer1_15, obj, "radio-option-" + JSON.stringify(option.value) + "-" + arg1), ];
            let tmp2Result = null;
            if (arg1 !== options.length - 1) {
              tmp2Result = null;
              if (flag5) {
                obj = { style: null };
                obj[0] = divider.divider;
                tmp2Result = tmp2(flag, obj);
              }
            }
            children[1] = tmp2Result;
            return flag4(size.Fragment, { children }, "radio-option-" + JSON.stringify(option.value) + "-" + arg1);
          })
    };
    return c6(c4, obj);
  }
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
let closure_9 = { [obj.SMALL]: 2, [obj.MEDIUM]: 3, [obj.LARGE]: 4 };
obj = { radioIcon: null, radioIconSelected: null, radioTick: null, disabled: null, divider: null, collapsibleStyle: null, collapsibleBackgroundSelected: null, collapsibleBackground: null, collapsibleContainer: null };
obj = { flex: 0, marginRight: 8, borderRadius: require("Themes").radii.round, borderColor: require("Themes").colors.TEXT_MUTED, borderWidth: 2 };
obj[0] = obj;
createCacheKey = { borderColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
obj[1] = createCacheKey;
obj[2] = { borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_BRAND_FOREGROUND };
obj[3] = { opacity: 0.3 };
const obj2 = { borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_BRAND_FOREGROUND };
obj[4] = { height: 1, alignSelf: "stretch", backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 16 };
const obj3 = { height: 1, alignSelf: "stretch", backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 16 };
obj[5] = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
const obj4 = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
obj[6] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
const obj5 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj[7] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[8] = { paddingVertical: 4, paddingHorizontal: 12 };
let closure_10 = createCacheKey.createStyles(obj);
RadioIndicator.Sizes = obj;
RadioGroup.Sizes = obj;
const obj6 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const result = require("sum").fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default RadioGroup;
export { RadioIndicator };
export { RadioItem };