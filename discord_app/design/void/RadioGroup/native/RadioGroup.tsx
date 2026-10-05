// discord_app/design/void/RadioGroup/native/RadioGroup.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import react_native2 from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import FormRowDefault from "../../Form/native/FormRow.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let arr2, constants, obj1;

let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
const View = react_native.View;
const NOOP = Constants.NOOP;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { SMALL: 8, [8]: "SMALL", MEDIUM: 10, [10]: "MEDIUM", LARGE: 12, [12]: "LARGE" };
let onPress = { [obj.SMALL]: 2, [obj.MEDIUM]: 3, [obj.LARGE]: 4 };
let createStyles = createStyles_mod;
let obj2 = {
  radioIcon: obj3,
  radioIconSelected: obj4,
  radioTick: {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND,
  },
  disabled: { opacity: 0.3 },
  divider: { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 },
  collapsibleStyle: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" },
  collapsibleBackgroundSelected: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  collapsibleBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  collapsibleContainer: { paddingVertical: 4, paddingHorizontal: 12 },
};
obj3 = {
  flex: 0,
  marginRight: 8,
  borderRadius: nativeDefault.radii.round,
  borderColor: nativeDefault.colors.TEXT_MUTED,
  borderWidth: 2,
};
createStyles = createStyles.createStyles;
obj4 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
({ borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND });
({ height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 });
({ borderRadius: nativeDefault.radii.sm, overflow: "hidden" });
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
let closure_10 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let style;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(6);
      ({ size, style } = arg0);
      const tmp2 = closure_10();
      const radioIcon = tmp2.radioIcon;
      if (cResult[0] !== size) {
        let MEDIUM = size;
        if (size === undefined) {
          MEDIUM = obj.MEDIUM;
        }
        const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
        cResult[0] = size;
        cResult[1] = size1;
        tmp3 = size1;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp2.radioIcon) {
          let tmp6;
          if (cResult[4] === tmp3) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
      const obj2 = { style: items };
      items = [radioIcon, tmp3, style];
      const tmp7 = metroRequire(View, obj2);
      cResult[2] = style;
      cResult[3] = tmp2.radioIcon;
      cResult[4] = tmp3;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : (size) => {
      let MEDIUM = size.size;
      const style = size.style;
      const style1 = [closure_10().radioIcon, ,];
      if (MEDIUM === undefined) {
        MEDIUM = obj.MEDIUM;
      }
      size = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
      style1[1] = size;
      style1[2] = style;
      return metroRequire(View, { style: style1 });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let active;
      let items;
      let style;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(15);
      ({ size, active, style } = arg0);
      const tmp2 = closure_10();
      const radioIcon = tmp2.radioIcon;
      if (cResult[0] !== size) {
        let MEDIUM = size;
        if (size === undefined) {
          MEDIUM = obj.MEDIUM;
        }
        const size1 = { width: 2 * MEDIUM, height: 2 * MEDIUM, padding: onPress[MEDIUM] };
        cResult[0] = size;
        cResult[1] = size1;
        tmp3 = size1;
      } else {
        tmp3 = cResult[1];
      }
      if (active) {
        active = tmp2.radioIconSelected;
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp2.radioIcon) {
          if (cResult[4] === tmp3) {
            let tmp6;
            let tmp7;
            if (cResult[5] === active) {
              tmp6 = cResult[6];
            }
            const radioTick = tmp2.radioTick;
            if (cResult[7] !== size) {
              let MEDIUM2 = size;
              if (size === undefined) {
                MEDIUM2 = obj.MEDIUM;
              }
              const size2 = { width: MEDIUM2, height: MEDIUM2 };
              cResult[7] = size;
              cResult[8] = size2;
              tmp7 = size2;
            } else {
              tmp7 = cResult[8];
            }
            if (cResult[9] === tmp2.radioTick) {
              let tmp9;
              if (cResult[10] === tmp7) {
                tmp9 = cResult[11];
              }
              if (cResult[12] === tmp6) {
                let tmp13;
                if (cResult[13] === tmp9) {
                  tmp13 = cResult[14];
                }
                return tmp13;
              }
              const obj2 = { style: tmp6, children: tmp9 };
              const tmp16 = metroRequire(View, obj2);
              cResult[12] = tmp6;
              cResult[13] = tmp9;
              cResult[14] = tmp16;
              tmp13 = tmp16;
            }
            const obj3 = { style: items };
            items = [radioTick, tmp7];
            const tmp12 = metroRequire(View, obj3);
            cResult[9] = tmp2.radioTick;
            cResult[10] = tmp7;
            cResult[11] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
      const items1 = [radioIcon, tmp3, active, style];
      cResult[2] = style;
      cResult[3] = tmp2.radioIcon;
      cResult[4] = tmp3;
      cResult[5] = active;
      cResult[6] = items1;
      tmp6 = items1;
    }
  : (style) => {
      let active;
      let items1;
      let obj;
      ({ size, active } = style);
      style = style.style;
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
      obj = { style: items, children: metroRequire(View, { style: items1 }) };
      items[2] = active;
      items[3] = style;
      items1 = [tmp.radioTick];
      if (size === undefined) {
        size = obj.MEDIUM;
      }
      items1[1] = { width: size, height: size };
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let active;
      let style;
      let tmp2;
      const obj = react2;
      const cResult = obj.c(7);
      ({ size, active, style } = arg0);
      if (active) {
        if (cResult[0] === active) {
          if (cResult[1] === size) {
            let tmp6;
            if (cResult[2] === style) {
              tmp6 = cResult[3];
            }
            tmp2 = tmp6;
          }
        }
        const obj2 = { size, active, style };
        const tmp9 = metroRequire(closure_12, obj2);
        cResult[0] = active;
        cResult[1] = size;
        cResult[2] = style;
        cResult[3] = tmp9;
        tmp6 = tmp9;
      } else {
        if (cResult[4] === size) {
          if (cResult[5] === style) {
            tmp2 = cResult[6];
          }
        }
        const obj3 = { size, style };
        const tmp5 = metroRequire(closure_11, obj3);
        cResult[4] = size;
        cResult[5] = style;
        cResult[6] = tmp5;
        tmp2 = tmp5;
      }
      return tmp2;
    }
  : (arg0) => {
      let active;
      let style;
      let tmpResult;
      ({ size, active, style } = arg0);
      if (active) {
        const obj2 = { size, active, style };
        tmpResult = metroRequire(closure_12, obj2);
      } else {
        const obj = { size, style };
        tmpResult = metroRequire(closure_11, obj);
      }
      return tmpResult;
    };
let closure_13 = tmp4;
tmp4.Sizes = obj;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let accessibilityRole;
      let accessibilityState;
      let checked;
      let disabled;
      let indicatorLeft;
      let option;
      let showIndicator;
      let style;
      const obj = react2;
      const cResult = obj.c(20);
      ({ checked, option, style, size, disabled, indicatorLeft, showIndicator } = onPress);
      onPress = onPress.onPress;
      const tmp4 = closure_10();
      if (cResult[0] === checked) {
        let tmp5;
        if (cResult[1] === size) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === checked) {
          let tmp8;
          if (cResult[4] === disabled) {
            tmp8 = cResult[5];
          }
          const tmpResult = react_native2;
          const radioA11yNative = tmpResult.useRadioA11yNative(tmp8);
          ({ accessibilityRole, accessibilityState } = radioA11yNative);
          if (cResult[6] === style) {
            if (cResult[7] === (disabled && tmp4.disabled)) {
              let tmp14;
              let leading;
              if (cResult[8] === (null != option.collapsibleContent && tmp7)) {
                tmp14 = cResult[9];
              }
              let tmp15 = null;
              if (!indicatorLeft) {
                tmp15 = null;
                if (showIndicator) {
                  tmp15 = tmp5;
                }
              }
              if (null == option.leading) {
                let tmp16 = null;
                if (indicatorLeft) {
                  tmp16 = null;
                  if (showIndicator) {
                    tmp16 = tmp5;
                  }
                }
                leading = tmp16;
              } else {
                leading = option.leading;
              }
              if (cResult[10] === accessibilityRole) {
                if (cResult[11] === accessibilityState) {
                  if (cResult[12] === disabled) {
                    if (cResult[13] === option.desc) {
                      if (cResult[14] === option.name) {
                        if (cResult[15] === tmp10) {
                          if (cResult[16] === tmp14) {
                            if (cResult[17] === tmp15) {
                              let tmp17;
                              if (cResult[18] === leading) {
                                tmp17 = cResult[19];
                              }
                              return tmp17;
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
                onPress: tmp10,
                DEPRECATED_style: tmp14,
                label: null,
                subLabel: null,
                trailing: tmp15,
                leading,
              };
              ({ name: obj4.label, desc: obj4.subLabel } = option);
              const tmp20 = metroRequire(FormRowDefault, obj2);
              cResult[10] = accessibilityRole;
              cResult[11] = accessibilityState;
              cResult[12] = disabled;
              cResult[13] = option.desc;
              cResult[14] = option.name;
              cResult[15] = tmp10;
              cResult[16] = tmp14;
              cResult[17] = tmp15;
              cResult[18] = leading;
              cResult[19] = tmp20;
              tmp17 = tmp20;
            }
          }
          const items = [style, disabled && tmp4.disabled, null != option.collapsibleContent && tmp7];
          cResult[6] = style;
          cResult[7] = disabled && tmp4.disabled;
          cResult[8] = null != option.collapsibleContent && tmp7;
          cResult[9] = items;
          tmp14 = items;
        }
        const obj3 = { selected: checked, disabled };
        cResult[3] = checked;
        cResult[4] = disabled;
        cResult[5] = obj3;
        tmp8 = obj3;
      }
      const tmp6 = metroRequire(closure_13, { size, active: checked });
      cResult[0] = checked;
      cResult[1] = size;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let accessibilityRole;
      let accessibilityState;
      let checked;
      let disabled;
      let indicatorLeft;
      let items;
      let leading;
      let option;
      let showIndicator;
      let style;
      let tmp7;
      let tmp8;
      ({ checked, option, disabled, indicatorLeft, showIndicator } = arg0);
      ({ style, size, onPress } = arg0);
      const tmp = closure_10();
      const tmp3 = metroRequire(closure_13, { size, active: checked });
      const tmp4 = checked ? tmp.collapsibleBackgroundSelected : tmp.collapsibleBackground;
      const obj = react_native2;
      const radioA11yNative = obj.useRadioA11yNative({ selected: checked, disabled });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const obj3 = {
        accessibilityRole,
        accessibilityState,
        disabled,
        onPress: tmp7,
        DEPRECATED_style: items,
        label: null,
        subLabel: null,
        trailing: tmp8,
        leading,
      };
      tmp7 = undefined;
      const tmp6 = FormRowDefault;
      if (!disabled) {
        tmp7 = onPress;
      }
      items = [style, ,];
      if (disabled) {
        disabled = tmp.disabled;
      }
      items[1] = disabled;
      items[2] = null != option.collapsibleContent && tmp4;
      ({ name: obj2.label, desc: obj2.subLabel } = option);
      tmp8 = null;
      if (!indicatorLeft) {
        tmp8 = null;
        if (showIndicator) {
          tmp8 = tmp3;
        }
      }
      if (null == option.leading) {
        let tmp9 = null;
        if (indicatorLeft) {
          tmp9 = null;
          if (showIndicator) {
            tmp9 = tmp3;
          }
        }
        leading = tmp9;
      } else {
        leading = option.leading;
      }
      return metroRequire(tmp6, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      let disabled;
      let indicatorLeft;
      let obj3;
      let style;
      let obj = option(style[7]);
      const cResult = obj.c(13);
      option = option.option;
      const checked = option.checked;
      const tmp = style;
      style = option.style;
      size = option.size;
      ({ disabled, indicatorLeft } = option);
      const showIndicator = option.showIndicator;
      onPress = option.onPress;
      const tmp3 = closure_10();
      if (cResult[0] === onPress) {
        let tmp4;
        let tmp9;
        if (cResult[1] === option) {
          tmp4 = cResult[2];
        }
        let closure_7 = tmp4;
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
                        let tmp5;
                        if (cResult[11] === tmp3) {
                          tmp5 = cResult[12];
                        }
                        return tmp5;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null != option.collapsibleContent) {
          const obj2 = { style: tmp3.collapsibleContainer, children: onPress(checked(tmp[10]), obj3) };
          obj3 = {
            isExpanded: checked,
            collapsibleContent: option.collapsibleContent,
            style: tmp3.collapsibleStyle,
            children(onPress) {
              onPress = onPress.onPress;
              const obj = {
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
              };
              return onPress(closure_1_14, obj);
            },
          };
          tmp9 = onPress(indicatorLeft, obj2);
        } else {
          const obj4 = { option, checked, style, size, disabled, onPress: tmp4, indicatorLeft, showIndicator };
          tmp9 = onPress(closure_14, obj4);
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
        cResult[12] = tmp9;
        tmp5 = tmp9;
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
    }
  : (option) => {
      let disabled;
      let indicatorLeft;
      let obj3;
      let tmp4;
      option = option.option;
      const checked = option.checked;
      const style = option.style;
      size = option.size;
      ({ disabled, indicatorLeft } = option);
      const showIndicator = option.showIndicator;
      onPress = option.onPress;
      disabled = undefined;
      const tmp = closure_10();
      if (!disabled) {
        disabled = option.disabled;
      }
      if (null != option.collapsibleContent) {
        const obj2 = { style: tmp.collapsibleContainer, children: onPress(checked(style[10]), obj3) };
        obj3 = {
          isExpanded: checked,
          collapsibleContent: option.collapsibleContent,
          style: tmp.collapsibleStyle,
          children(onPress) {
            onPress = onPress.onPress;
            const obj = {
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
            };
            return onPress(closure_1_14, obj);
          },
        };
        tmp4 = onPress(indicatorLeft, obj2);
      } else {
        const tmp2 = onPress;
        let obj = {
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
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let arr;
      let closure_8;
      let disabled;
      let divider;
      let indicatorLeft;
      let onChange;
      let options;
      let showIndicator;
      let style;
      let tmp11;
      let value;
      let withDividers;
      let withSpacing;
      let obj = require("react");
      const cResult = obj.c(28);
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
        arr = items;
      } else {
        arr = cResult[1];
      }
      let tmp3;
      if (undefined !== style) {
        tmp3 = style;
      }
      style = tmp3;
      if (undefined === size) {
        size = constants.MEDIUM;
      }
      disabled = tmp5;
      let closure_5 = tmp6;
      indicatorLeft = tmp7;
      showIndicator = tmp8;
      constants = tmp9;
      if (undefined === onChange) {
        onChange = closure_5;
      }
      const tmp10 = divider();
      divider = tmp10;
      if (cResult[2] === (undefined !== disabled && disabled)) {
        if (cResult[3] === (undefined !== indicatorLeft && indicatorLeft)) {
          if (cResult[4] === onChange) {
            if (cResult[5] === arr) {
              if (cResult[6] === (undefined === showIndicator || showIndicator)) {
                if (cResult[7] === size) {
                  if (cResult[8] === tmp3) {
                    if (cResult[9] === tmp10) {
                      if (cResult[10] === tmp2) {
                        if (cResult[11] === (undefined === withDividers || withDividers)) {
                          let tmp14;
                          if (cResult[12] === (undefined !== withSpacing && withSpacing)) {
                            tmp11 = cResult[13];
                          }
                          if (cResult[26] !== tmp11) {
                            let obj2 = { children: tmp11 };
                            const tmp17 = indicatorLeft(disabled, obj2);
                            cResult[26] = tmp11;
                            cResult[27] = tmp17;
                            tmp14 = tmp17;
                          } else {
                            tmp14 = cResult[27];
                          }
                          return tmp14;
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
        if (cResult[15] === (undefined !== indicatorLeft && indicatorLeft)) {
          if (cResult[16] === onChange) {
            if (cResult[17] === arr.length) {
              if (cResult[18] === (undefined === showIndicator || showIndicator)) {
                if (cResult[19] === size) {
                  if (cResult[20] === tmp3) {
                    if (cResult[21] === tmp10) {
                      if (cResult[22] === tmp2) {
                        if (cResult[23] === (undefined === withDividers || withDividers)) {
                          let tmp12;
                          if (cResult[24] === (undefined !== withSpacing && withSpacing)) {
                            tmp12 = cResult[25];
                          }
                          const mapped = arr.map(tmp12);
                          cResult[2] = undefined !== disabled && disabled;
                          cResult[3] = undefined !== indicatorLeft && indicatorLeft;
                          cResult[4] = onChange;
                          cResult[5] = arr;
                          cResult[6] = undefined === showIndicator || showIndicator;
                          cResult[7] = size;
                          cResult[8] = tmp3;
                          cResult[9] = tmp10;
                          cResult[10] = tmp2;
                          cResult[11] = undefined === withDividers || withDividers;
                          cResult[12] = undefined !== withSpacing && withSpacing;
                          cResult[13] = mapped;
                          tmp11 = mapped;
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
          Fragment = closure_3.Fragment;
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
          return tmp(Fragment, { children: items1 }, "radio-option-" + JSON.stringify(arg0.value) + "-" + arg1);
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
      let flag5;
      value = value.value;
      if (value === undefined) {
        value = null;
      }
      require = value;
      let options = value.options;
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
      let obj = {
        children: options.map((option, index) => {
          let items;
          let obj2;
          const obj = {
            option,
            checked: require === option.value,
            style: items,
            size,
            disabled: flag,
            onPress: onChange,
            indicatorLeft: flag3,
            showIndicator: flag4,
          };
          items = [dependencyMap];
          const Fragment = react.Fragment;
          if (index === options.length - 1) {
            obj2 = { marginBottom: 0 };
          } else {
            obj2 = flag2 ? { marginBottom: 8 } : {};
          }
          items[1] = obj2;
          const children = [
            metroRequire(closure_15, obj, "radio-option-" + JSON.stringify(option.value) + "-" + index),
          ];
          let tmp2Result = null;
          if (index !== options.length - 1) {
            tmp2Result = null;
            if (flag5) {
              const obj3 = { style: divider.divider };
              tmp2Result = metroRequire(View, obj3);
            }
          }
          children[1] = tmp2Result;
          return metroImportDefault(
            Fragment,
            { children },
            "radio-option-" + JSON.stringify(option.value) + "-" + index,
          );
        }),
      };
      return flag3(flag, obj);
    };
tmp6.Sizes = obj;
let size = size_mod;
const result = size.fileFinishedImporting("design/void/RadioGroup/native/RadioGroup.tsx");

export default tmp6;
export const RadioIndicator = tmp4;
export const RadioItem = tmp5;
