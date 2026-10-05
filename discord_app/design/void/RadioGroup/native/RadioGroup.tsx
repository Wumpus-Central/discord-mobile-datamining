// discord_app/design/void/RadioGroup/native/RadioGroup.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import FormRowDefault from "../../Form/native/FormRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const NOOP = fn(1096).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let Sizes = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
let onPress = { [Sizes.SMALL]: 2, [Sizes.MEDIUM]: 3, [Sizes.LARGE]: 4 };
const createStyles = fn(4890);
let obj3 = {
  radioIcon: {
    flex: 0,
    marginRight: 8,
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.TEXT_MUTED,
    borderWidth: 2,
  },
  radioIconSelected: null,
  radioTick: null,
  disabled: null,
  divider: null,
  collapsibleStyle: null,
  collapsibleBackgroundSelected: null,
  collapsibleBackground: null,
  collapsibleContainer: null,
};
let obj4 = {
  flex: 0,
  marginRight: 8,
  borderRadius: nativeDefault.radii.round,
  borderColor: nativeDefault.colors.TEXT_MUTED,
  borderWidth: 2,
};
obj3.radioIconSelected = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const obj5 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj3.radioTick = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND,
};
obj3.disabled = { opacity: 0.3 };
const obj6 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND,
};
obj3.divider = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
const obj7 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
obj3.collapsibleStyle = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const obj8 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.collapsibleBackgroundSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.collapsibleBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3.collapsibleContainer = { paddingVertical: 4, paddingHorizontal: 12 };
let closure_10 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = c;
      const cResult = obj.c(6);
      ({ size, style } = arg0);
      const tmp2 = closure_10();
      if (cResult[0] !== size) {
        let MEDIUM = size;
        if (size === undefined) {
          MEDIUM = obj.MEDIUM;
        }
        const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
        cResult[0] = size;
        cResult[1] = size1;
        let tmp3 = size1;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp2.radioIcon) {
          if (cResult[4] === tmp3) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
      const obj2 = { style: null };
      const items = [tmp2.radioIcon, tmp3, style];
      obj2.style = items;
      const tmp7 = timestampProducer(View, obj2);
      cResult[2] = style;
      cResult[3] = tmp2.radioIcon;
      cResult[4] = tmp3;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : (size) => {
      let MEDIUM = size.size;
      const style = [closure_10().radioIcon, ,];
      if (MEDIUM === undefined) {
        MEDIUM = obj.MEDIUM;
      }
      size = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
      style[1] = size;
      style[2] = size.style;
      return timestampProducer(View, { style });
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = c;
      const cResult = obj.c(15);
      ({ size, active, style } = arg0);
      const tmp2 = closure_10();
      if (cResult[0] !== size) {
        let MEDIUM = size;
        if (size === undefined) {
          MEDIUM = obj.MEDIUM;
        }
        const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
        cResult[0] = size;
        cResult[1] = size1;
        let tmp3 = size1;
      } else {
        tmp3 = cResult[1];
      }
      if (active) {
        active = tmp2.radioIconSelected;
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp2.radioIcon) {
          if (cResult[4] === tmp3) {
            if (cResult[5] === active) {
              let tmp6 = cResult[6];
            }
            if (cResult[7] !== size) {
              let MEDIUM2 = size;
              if (size === undefined) {
                MEDIUM2 = obj.MEDIUM;
              }
              const size2 = { width: MEDIUM2, height: MEDIUM2 };
              cResult[7] = size;
              cResult[8] = size2;
              let tmp7 = size2;
            } else {
              tmp7 = cResult[8];
            }
            if (cResult[9] === tmp2.radioTick) {
              if (cResult[10] === tmp7) {
                let tmp9 = cResult[11];
              }
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp9) {
                  let tmp13 = cResult[14];
                }
                return tmp13;
              }
              const obj2 = { style: tmp6, children: tmp9 };
              const tmp16 = timestampProducer(View, obj2);
              cResult[12] = tmp6;
              cResult[13] = tmp9;
              cResult[14] = tmp16;
              tmp13 = tmp16;
            }
            const obj3 = { style: null };
            const items = [tmp2.radioTick, tmp7];
            obj3.style = items;
            const tmp12 = timestampProducer(View, obj3);
            cResult[9] = tmp2.radioTick;
            cResult[10] = tmp7;
            cResult[11] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
      const items1 = [tmp2.radioIcon, tmp3, active, style];
      cResult[2] = style;
      cResult[3] = tmp2.radioIcon;
      cResult[4] = tmp3;
      cResult[5] = active;
      cResult[6] = items1;
      tmp6 = items1;
    }
  : (style) => {
      ({ size, active } = style);
      const tmp = closure_10();
      const items = [tmp.radioIcon, , ,];
      let MEDIUM = size;
      if (size === undefined) {
        MEDIUM = obj.MEDIUM;
      }
      const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
      items[1] = size1;
      if (active) {
        active = tmp.radioIconSelected;
      }
      obj = { style: items, children: null };
      items[2] = active;
      items[3] = style.style;
      const items1 = [tmp.radioTick];
      if (size === undefined) {
        size = obj.MEDIUM;
      }
      items1[1] = { width: size, height: size };
      obj.children = timestampProducer(View, { style: items1 });
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ size, active, style } = arg0);
      if (active) {
        if (cResult[0] === active) {
          if (cResult[1] === size) {
          }
        }
        const obj2 = { size, active, style };
        const tmp9 = timestampProducer(closure_12, obj2);
        cResult[0] = active;
        cResult[1] = size;
        cResult[2] = style;
        cResult[3] = tmp9;
      } else {
        if (cResult[4] === size) {
          if (cResult[5] === style) {
            let tmp2 = cResult[6];
          }
          return tmp2;
        }
        const obj3 = { size, style };
        const tmp5 = timestampProducer(closure_11, obj3);
        cResult[4] = size;
        cResult[5] = style;
        cResult[6] = tmp5;
        tmp2 = tmp5;
      }
    }
  : (arg0) => {
      ({ size, active, style } = arg0);
      if (active) {
        const obj2 = { size, active, style };
        let tmpResult = timestampProducer(closure_12, obj2);
      } else {
        const obj = { size, style };
        tmpResult = timestampProducer(closure_11, obj);
      }
      return tmpResult;
    };
let closure_13 = tmp3;
tmp3.Sizes = Sizes;
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      const cResult = c.c(20);
      ({ checked, option, style, size, disabled, indicatorLeft, showIndicator } = onPress);
      if (cResult[0] === checked) {
        if (cResult[1] === size) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === checked) {
          if (cResult[4] === disabled) {
            let tmp8 = cResult[5];
          }
          const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp8);
          ({ accessibilityRole, accessibilityState } = radioA11yNative);
          if (!disabled) {
            onPress = onPress.onPress;
          }
          let disabled2 = disabled;
          if (disabled) {
            disabled2 = tmp4.disabled;
          }
          if (cResult[6] === style) {
            if (cResult[7] === disabled2) {
              if (cResult[8] === tmp11) {
                let tmp12 = cResult[9];
              }
              let tmp13 = null;
              if (!indicatorLeft) {
                tmp13 = null;
                if (showIndicator) {
                  tmp13 = tmp5;
                }
              }
              if (null == option.leading) {
                let tmp14 = null;
                if (indicatorLeft) {
                  tmp14 = null;
                  if (showIndicator) {
                    tmp14 = tmp5;
                  }
                }
                let leading = tmp14;
              } else {
                leading = option.leading;
              }
              if (cResult[10] === accessibilityRole) {
                if (cResult[11] === accessibilityState) {
                  if (cResult[12] === disabled) {
                    if (cResult[13] === option.desc) {
                      if (cResult[14] === option.name) {
                        if (cResult[15] === onPress) {
                          if (cResult[16] === tmp12) {
                            if (cResult[17] === tmp13) {
                              if (cResult[18] === leading) {
                                let tmp15 = cResult[19];
                              }
                              return tmp15;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = {
                accessibilityRole,
                accessibilityState,
                disabled,
                onPress,
                DEPRECATED_style: tmp12,
                label: null,
                subLabel: null,
                trailing: null,
                leading: null,
              };
              ({ name: obj4.label, desc: obj4.subLabel } = option);
              obj2.trailing = tmp13;
              obj2.leading = leading;
              const tmp18 = timestampProducer(FormRowDefault, obj2);
              cResult[10] = accessibilityRole;
              cResult[11] = accessibilityState;
              cResult[12] = disabled;
              cResult[13] = option.desc;
              cResult[14] = option.name;
              cResult[15] = onPress;
              cResult[16] = tmp12;
              cResult[17] = tmp13;
              cResult[18] = leading;
              cResult[19] = tmp18;
              tmp15 = tmp18;
            }
          }
          const items = [style, disabled2, null != option.collapsibleContent && tmp7];
          cResult[6] = style;
          cResult[7] = disabled2;
          cResult[8] = null != option.collapsibleContent && tmp7;
          cResult[9] = items;
          tmp12 = items;
          const tmpResult = useA11yRolesNative;
        }
        const obj3 = { selected: checked, disabled };
        cResult[3] = checked;
        cResult[4] = disabled;
        cResult[5] = obj3;
        tmp8 = obj3;
      }
      const tmp6 = timestampProducer(closure_13, { size, active: checked });
      cResult[0] = checked;
      cResult[1] = size;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      tmp4 = closure_10();
    }
  : (arg0) => {
      ({ checked, option, disabled, indicatorLeft, showIndicator } = arg0);
      ({ style, size, onPress } = arg0);
      const tmp = closure_10();
      const tmp3 = timestampProducer(closure_13, { size, active: checked });
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: checked, disabled });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const obj3 = {
        accessibilityRole,
        accessibilityState,
        disabled,
        onPress: null,
        DEPRECATED_style: null,
        label: null,
        subLabel: null,
        trailing: null,
        leading: null,
      };
      let tmp7;
      const tmp4 = checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground;
      if (!disabled) {
        tmp7 = onPress;
      }
      obj3.onPress = tmp7;
      const items = [style, ,];
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
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      let tmp = style;
      const cResult = option(style[7]).c(13);
      option = option.option;
      const checked = option.checked;
      style = option.style;
      const size = option.size;
      ({ disabled, indicatorLeft } = option);
      const showIndicator = option.showIndicator;
      onPress = option.onPress;
      const tmp3 = closure_10();
      if (cResult[0] === onPress) {
        if (cResult[1] === option) {
          let tmp4 = cResult[2];
        }
        closure_7 = tmp4;
        if (!disabled) {
          disabled = option.disabled;
        }
        if (cResult[3] === checked) {
          if (cResult[4] === tmp4) {
            if (cResult[5] === indicatorLeft) {
              if (cResult[6] === disabled) {
                if (cResult[7] === option) {
                  if (cResult[8] === showIndicator) {
                    if (cResult[9] === size) {
                      if (cResult[10] === style) {
                        if (cResult[11] === tmp3) {
                          return cResult[12];
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null != option.collapsibleContent) {
          const obj2 = { style: tmp3.collapsibleContainer, children: null };
          const obj3 = {
            isExpanded: checked,
            collapsibleContent: option.collapsibleContent,
            style: tmp3.collapsibleStyle,
            children(onPress) {
              onPress = onPress.onPress;
              return onPress(closure_1_14, {
                option: onPress,
                checked,
                style,
                size,
                disabled,
                onPress(arg0) {
                  closure_7(arg0);
                  onPress(arg0);
                },
                indicatorLeft,
                showIndicator,
              });
            },
          };
          tmp = onPress(checked(tmp[10]), obj3);
          obj2.children = tmp;
          let tmp8 = onPress(indicatorLeft, obj2);
        } else {
          const obj4 = { option, checked, style, size, disabled, onPress: tmp4, indicatorLeft, showIndicator };
          tmp8 = onPress(closure_14, obj4);
        }
        cResult[3] = checked;
        cResult[4] = tmp4;
        cResult[5] = indicatorLeft;
        cResult[6] = disabled;
        cResult[7] = option;
        cResult[8] = showIndicator;
        cResult[9] = size;
        cResult[10] = style;
        cResult[11] = tmp3;
        cResult[12] = tmp8;
      }
      const fn = function t(preventDefault) {
        preventDefault.preventDefault();
        let tmp2Result;
        if (onPress != null) {
          tmp2Result = tmp2(option);
        }
        return tmp2Result;
      };
      cResult[0] = onPress;
      cResult[1] = option;
      cResult[2] = fn;
      tmp4 = fn;
      const obj = option(style[7]);
    }
  : (option) => {
      option = option.option;
      const checked = option.checked;
      const style = option.style;
      const size = option.size;
      ({ disabled, indicatorLeft } = option);
      const showIndicator = option.showIndicator;
      onPress = option.onPress;
      disabled = undefined;
      const tmp = closure_10();
      if (!disabled) {
        disabled = option.disabled;
      }
      if (null != option.collapsibleContent) {
        const obj2 = { style: tmp.collapsibleContainer, children: null };
        const obj3 = {
          isExpanded: checked,
          collapsibleContent: option.collapsibleContent,
          style: tmp.collapsibleStyle,
          children(onPress) {
            onPress = onPress.onPress;
            return onPress(closure_1_14, {
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
              showIndicator,
            });
          },
        };
        obj2.children = onPress(checked(style[10]), obj3);
        let tmp4 = onPress(indicatorLeft, obj2);
      } else {
        const obj = {
          option,
          checked,
          style,
          size,
          disabled,
          onPress: function handlePress(preventDefault) {
            preventDefault.preventDefault();
            let tmp2Result;
            if (onPress != null) {
              tmp2Result = tmp2(option);
            }
            return tmp2Result;
          },
          indicatorLeft,
          showIndicator,
        };
        tmp4 = onPress(closure_14, obj);
      }
      return tmp4;
    };
let closure_15 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(28);
      ({ value, options, style, size, disabled, withSpacing, indicatorLeft, showIndicator, withDividers, onChange } =
        arg0);
      let tmp2 = null;
      if (undefined !== value) {
        tmp2 = value;
      }
      require = tmp2;
      if (cResult[0] !== options) {
        let items = options;
        if (undefined === options) {
          items = [];
        }
        cResult[0] = options;
        cResult[1] = items;
        let arr = items;
      } else {
        arr = cResult[1];
      }
      let tmp3;
      if (undefined !== style) {
        tmp3 = style;
      }
      style = tmp3;
      if (undefined === size) {
        size = Sizes.MEDIUM;
      }
      disabled = tmp5;
      closure_5 = tmp6;
      indicatorLeft = tmp7;
      showIndicator = tmp8;
      Sizes = tmp9;
      if (undefined === onChange) {
        onChange = closure_5;
      }
      const tmp10 = divider();
      divider = tmp10;
      if (cResult[2] === (undefined !== disabled && disabled)) {
        if (cResult[3] === tmp7) {
          if (cResult[4] === onChange) {
            if (cResult[5] === arr) {
              if (cResult[6] === tmp8) {
                if (cResult[7] === size) {
                  if (cResult[8] === tmp3) {
                    if (cResult[9] === tmp10) {
                      if (cResult[10] === tmp2) {
                        if (cResult[11] === tmp9) {
                          if (cResult[12] === tmp6) {
                            if (cResult[26] !== cResult[13]) {
                              let obj2 = { children: tmp11 };
                              const tmp18 = indicatorLeft(disabled, obj2);
                              cResult[26] = tmp11;
                              cResult[27] = tmp18;
                              let tmp15 = tmp18;
                            } else {
                              tmp15 = cResult[27];
                            }
                            return tmp15;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (cResult[14] === (undefined !== disabled && disabled)) {
        if (cResult[15] === tmp7) {
          if (cResult[16] === onChange) {
            if (cResult[17] === arr.length) {
              if (cResult[18] === tmp8) {
                if (cResult[19] === size) {
                  if (cResult[20] === tmp3) {
                    if (cResult[21] === tmp10) {
                      if (cResult[22] === tmp2) {
                        if (cResult[23] === tmp9) {
                          if (cResult[24] === tmp6) {
                            let tmp12 = cResult[25];
                          }
                          const mapped = arr.map(tmp12);
                          cResult[2] = tmp5;
                          cResult[3] = tmp7;
                          cResult[4] = onChange;
                          cResult[5] = arr;
                          cResult[6] = tmp8;
                          cResult[7] = size;
                          cResult[8] = tmp3;
                          cResult[9] = tmp10;
                          cResult[10] = tmp2;
                          cResult[11] = tmp9;
                          cResult[12] = tmp6;
                          cResult[13] = mapped;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      class P {
        constructor(arg0, arg1) {
          tmp2 = jsx;
          obj = {
            option: arg0,
            checked: value === arg0.value,
            style: null,
            size: null,
            disabled: null,
            onPress: null,
            indicatorLeft: null,
            showIndicator: null,
          };
          items = [,];
          items[0] = style;
          tmp = jsxs;
          tmp3 = f65842;
          arr2 = closure_1;
          if (arg1 === closure_1.length - 1) {
            obj1 = { marginBottom: 0 };
          } else {
            tmp4 = withSpacing;
            obj1 = withSpacing ? { marginBottom: 8 } : {};
          }
          items[1] = obj1;
          obj.style = items;
          obj.size = MEDIUM;
          obj.disabled = disabled;
          obj.onPress = closure_9;
          obj.indicatorLeft = indicatorLeft;
          obj.showIndicator = showIndicator;
          items1 = [,];
          items1[0] = tmp2(tmp3, obj, "radio-option-" + JSON.stringify(arg0.value) + "-" + arg1);
          tmp2Result = null;
          if (arg1 !== arr2.length - 1) {
            tmp6 = withDividers;
            tmp2Result = null;
            if (withDividers) {
              tmp7 = View;
              obj4 = { style: null };
              tmp8 = closure_10;
              obj4.style = closure_10.divider;
              tmp2Result = tmp2(View, obj4);
            }
          }
          items1[1] = tmp2Result;
          return tmp(
            closure_3.Fragment,
            { children: items1 },
            "radio-option-" + JSON.stringify(arg0.value) + "-" + arg1,
          );
        }
      }
      cResult[14] = undefined !== disabled && disabled;
      cResult[15] = undefined !== indicatorLeft && indicatorLeft;
      cResult[16] = onChange;
      cResult[17] = arr.length;
      cResult[18] = undefined === showIndicator || showIndicator;
      cResult[19] = size;
      cResult[20] = tmp3;
      cResult[21] = tmp10;
      cResult[22] = tmp2;
      cResult[23] = undefined === withDividers || withDividers;
      cResult[24] = undefined !== withSpacing && withSpacing;
      cResult[25] = P;
      tmp12 = P;
    }
  : (value) => {
      value = value.value;
      if (value === undefined) {
        value = null;
      }
      require = value;
      options = value.options;
      if (options === undefined) {
        options = [];
      }
      ({ style: dependencyMap, size } = value);
      if (size === undefined) {
        size = flag5.MEDIUM;
      }
      let flag = value.disabled;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = value.withSpacing;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = value.indicatorLeft;
      if (flag3 === undefined) {
        flag3 = false;
      }
      let flag4 = value.showIndicator;
      if (flag4 === undefined) {
        flag4 = true;
      }
      flag5 = value.withDividers;
      if (flag5 === undefined) {
        flag5 = true;
      }
      let onChange = value.onChange;
      if (onChange === undefined) {
        onChange = flag2;
      }
      let divider;
      divider = divider();
      return flag3(flag, {
        children: options.map((option, index) => {
          const obj = {
            option,
            checked: value === option.value,
            style: null,
            size: null,
            disabled: null,
            onPress: null,
            indicatorLeft: null,
            showIndicator: null,
          };
          const items = [dependencyMap];
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
          const children = [
            timestampProducer(closure_15, obj, "radio-option-" + JSON.stringify(option.value) + "-" + index),
          ];
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
        }),
      });
    };
tmp5.Sizes = Sizes;
let size = fn(2);
const result = size.fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default tmp5;
export const RadioIndicator = tmp3;
export const RadioItem = tmp4;
