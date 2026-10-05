// discord_app/design/components/Navigator/native/HeaderActionButton.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FormConstants from "../../../void/Form/native/FormConstants.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import ButtonConstants from "../../Button/native/ButtonConstants.native.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  button: { alignSelf: "stretch", alignItems: "center", justifyContent: "center", flexDirection: "row" },
  text: obj2,
  buttonFont: { fontSize: 16, maxWidth: 80 },
  buttonDisabled: { opacity: 0.6 },
};
obj2 = { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" };
let closure_6 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (foregroundRipple, ref) => {
        let IconComponent;
        let IconComponentSize;
        let accessibilityActions;
        let accessibilityHint;
        let accessibilityLabel;
        let disabled;
        let hitSlop;
        let icon;
        let iconSize;
        let imageStyle;
        let items1;
        let onAccessibilityAction;
        let onPress;
        let source;
        let style;
        let text;
        let textStyle;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(31);
        ({
          style,
          textStyle,
          imageStyle,
          text,
          source,
          accessibilityLabel,
          accessibilityHint,
          accessibilityActions,
          onAccessibilityAction,
          icon,
          IconComponent,
          IconComponentSize,
          onPress,
          disabled,
          iconSize,
          hitSlop,
        } = foregroundRipple);
        foregroundRipple = foregroundRipple.foregroundRipple;
        const tmp4 = closure_6();
        if (null != text) {
          if (cResult[0] === tmp4.buttonFont) {
            if (cResult[1] === tmp4.text) {
              let tmp13;
              if (cResult[2] === textStyle) {
                tmp13 = cResult[3];
              }
              if (cResult[4] === tmp13) {
                let tmp14;
                if (cResult[5] === text) {
                  tmp14 = cResult[6];
                }
                tmp9 = tmp14;
              }
              const obj2 = {
                style: tmp13,
                variant: "text-md/semibold",
                lineClamp: 1,
                maxFontSizeMultiplier: ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER,
                children: text,
              };
              const Text = Text_Text.Text;
              const tmp16 = React3(Text, obj2);
              cResult[4] = tmp13;
              cResult[5] = text;
              cResult[6] = tmp16;
              tmp14 = tmp16;
            }
          }
          const items = [, ,];
          ({ text: arr[0], buttonFont: arr[1] } = tmp4);
          items[2] = textStyle;
          cResult[0] = tmp4.buttonFont;
          cResult[1] = tmp4.text;
          cResult[2] = textStyle;
          cResult[3] = items;
          tmp13 = items;
        } else if (null != IconComponent) {
          if (cResult[7] === IconComponent) {
            let tmp10;
            if (cResult[8] === IconComponentSize) {
              tmp10 = cResult[9];
            }
            tmp9 = tmp10;
          }
          const obj3 = { size: IconComponentSize };
          const tmp12 = React3(IconComponent, obj3);
          cResult[7] = IconComponent;
          cResult[8] = IconComponentSize;
          cResult[9] = tmp12;
          tmp10 = tmp12;
        } else if (null != source) {
          if (cResult[10] === iconSize) {
            if (cResult[11] === imageStyle) {
              let tmp5;
              if (cResult[12] === source) {
                tmp5 = cResult[13];
              }
              tmp9 = tmp5;
            }
          }
          const obj4 = { source, style: imageStyle, size: iconSize };
          const tmp8 = React3(IconDefault, obj4);
          cResult[10] = iconSize;
          cResult[11] = imageStyle;
          cResult[12] = source;
          cResult[13] = tmp8;
          tmp5 = tmp8;
        }
        if (accessibilityLabel == null) {
          accessibilityLabel = text;
        }
        if (cResult[14] === style) {
          if (cResult[15] === tmp4.button) {
            let tmp19;
            if (cResult[16] === (disabled && tmp4.buttonDisabled)) {
              tmp19 = cResult[17];
            }
            if (cResult[18] === accessibilityActions) {
              if (cResult[19] === accessibilityHint) {
                if (cResult[20] === tmp9) {
                  if (cResult[21] === disabled) {
                    if (cResult[22] === hitSlop) {
                      if (cResult[23] === icon) {
                        if (cResult[24] === onAccessibilityAction) {
                          if (cResult[25] === onPress) {
                            if (cResult[26] === ref) {
                              if (cResult[27] === accessibilityLabel) {
                                if (cResult[28] === ANDROID_FOREGROUND_RIPPLE) {
                                  let tmp21;
                                  if (cResult[29] === tmp19) {
                                    tmp21 = cResult[30];
                                  }
                                  return tmp21;
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
            const obj5 = {
              ref,
              accessibilityLabel,
              accessibilityHint,
              accessibilityActions,
              onAccessibilityAction,
              accessibilityRole: "button",
              onPress,
              activeOpacity: 0.6,
              androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
              style: tmp19,
              hitSlop,
              disabled,
              children: items1,
            };
            items1 = [tmp9, icon];
            const tmp23 = hasOwnProperty(Pressables.PressableOpacity, obj5);
            cResult[18] = accessibilityActions;
            cResult[19] = accessibilityHint;
            cResult[20] = tmp9;
            cResult[21] = disabled;
            cResult[22] = hitSlop;
            cResult[23] = icon;
            cResult[24] = onAccessibilityAction;
            cResult[25] = onPress;
            cResult[26] = ref;
            cResult[27] = accessibilityLabel;
            cResult[28] = ANDROID_FOREGROUND_RIPPLE;
            cResult[29] = tmp19;
            cResult[30] = tmp23;
            tmp21 = tmp23;
          }
        }
        const items2 = [tmp4.button, style, disabled && tmp4.buttonDisabled];
        cResult[14] = style;
        cResult[15] = tmp4.button;
        cResult[16] = disabled && tmp4.buttonDisabled;
        cResult[17] = items2;
        tmp19 = items2;
      }
    : (arg0, ref) => {
        let IconComponent;
        let IconComponentSize;
        let accessibilityActions;
        let accessibilityHint;
        let accessibilityLabel;
        let disabled;
        let foregroundRipple;
        let hitSlop;
        let icon;
        let iconSize;
        let imageStyle;
        let items;
        let items1;
        let items2;
        let onAccessibilityAction;
        let onPress;
        let source;
        let style;
        let text;
        let textStyle;
        let tmp11;
        let tmp2;
        ({ text, source, accessibilityLabel, IconComponent, disabled } = arg0);
        ({
          style,
          textStyle,
          imageStyle,
          accessibilityHint,
          accessibilityActions,
          onAccessibilityAction,
          icon,
          IconComponentSize,
          onPress,
          foregroundRipple,
          iconSize,
          hitSlop,
        } = arg0);
        const tmp = closure_6();
        if (null != text) {
          const obj2 = {
            style: items,
            variant: "text-md/semibold",
            lineClamp: 1,
            maxFontSizeMultiplier: ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER,
            children: text,
          };
          items = [, ,];
          ({ text: arr[0], buttonFont: arr[1] } = tmp);
          items[2] = textStyle;
          const Text = Text_Text.Text;
          tmp2 = React3(Text, obj2);
        } else if (null != IconComponent) {
          const obj3 = { size: IconComponentSize };
          tmp2 = React3(IconComponent, obj3);
        } else if (null != source) {
          const obj = { source, style: imageStyle, size: iconSize };
          tmp2 = React3(IconDefault, obj);
        }
        const obj4 = {
          ref,
          accessibilityLabel,
          accessibilityHint,
          accessibilityActions,
          onAccessibilityAction,
          accessibilityRole: "button",
          onPress,
          activeOpacity: 0.6,
          androidRippleConfig: tmp11,
          style: items1,
          hitSlop,
          disabled,
          children: items2,
        };
        const PressableOpacity = Pressables.PressableOpacity;
        if (accessibilityLabel == null) {
          accessibilityLabel = text;
        }
        tmp11 = undefined;
        if (foregroundRipple) {
          tmp11 = ANDROID_FOREGROUND_RIPPLE;
        }
        items1 = [tmp.button, style, disabled && tmp.buttonDisabled];
        items2 = [tmp2, icon];
        return hasOwnProperty(PressableOpacity, obj4);
      },
);
const result = size.fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = forwardRefResult;
