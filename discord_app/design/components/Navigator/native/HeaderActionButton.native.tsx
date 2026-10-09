// discord_app/design/components/Navigator/native/HeaderActionButton.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import ButtonConstants from "../../Button/native/ButtonConstants.native.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ANDROID_FOREGROUND_RIPPLE = fn(1204).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  button: { alignSelf: "stretch", alignItems: "center", justifyContent: "center", flexDirection: "row" },
  text: { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" },
  buttonFont: { fontSize: 16, maxWidth: 80 },
  buttonDisabled: { opacity: 0.6 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderActionButton(foregroundRipple) {
      const cResult = c.c(31);
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
        ref,
      } = foregroundRipple);
      const tmp4 = closure_6();
      if (null != text) {
        if (cResult[0] === tmp4.buttonFont) {
          if (cResult[1] === tmp4.text) {
            if (cResult[2] === textStyle) {
              let tmp13 = cResult[3];
            }
            if (cResult[4] === tmp13) {
            }
            const obj2 = {
              style: tmp13,
              variant: "text-md/semibold",
              lineClamp: 1,
              maxFontSizeMultiplier: ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER,
              children: text,
            };
            const tmp16 = React4(Text_Text.Text, obj2);
            cResult[4] = tmp13;
            cResult[5] = text;
            cResult[6] = tmp16;
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
      } else {
        if (null != IconComponent) {
          if (cResult[7] === IconComponent) {
            if (cResult[8] === IconComponentSize) {
              let tmp10 = cResult[9];
            }
            let tmp9 = tmp10;
          }
          const obj3 = { size: IconComponentSize };
          const tmp12 = React4(IconComponent, obj3);
          cResult[7] = IconComponent;
          cResult[8] = IconComponentSize;
          cResult[9] = tmp12;
          tmp10 = tmp12;
        } else if (null != source) {
          if (cResult[10] === iconSize) {
            if (cResult[11] === imageStyle) {
              if (cResult[12] === source) {
                let tmp5 = cResult[13];
              }
              tmp9 = tmp5;
            }
          }
          const obj4 = { source, style: imageStyle, size: iconSize };
          const tmp8 = React4(IconDefault, obj4);
          cResult[10] = iconSize;
          cResult[11] = imageStyle;
          cResult[12] = source;
          cResult[13] = tmp8;
          tmp5 = tmp8;
        }
        if (accessibilityLabel == null) {
          accessibilityLabel = text;
        }
        let buttonDisabled = disabled;
        if (disabled) {
          buttonDisabled = tmp4.buttonDisabled;
        }
        if (cResult[14] === style) {
          if (cResult[15] === tmp4.button) {
            if (cResult[16] === buttonDisabled) {
              let tmp19 = cResult[17];
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
                                  if (cResult[29] === tmp19) {
                                    let tmp20 = cResult[30];
                                  }
                                  return tmp20;
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
              children: null,
            };
            const items1 = [tmp9, icon];
            obj5.children = items1;
            const tmp22 = hasOwnProperty(Pressables.PressableOpacity, obj5);
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
            cResult[30] = tmp22;
            tmp20 = tmp22;
          }
        }
        const items2 = [tmp4.button, style, buttonDisabled];
        cResult[14] = style;
        cResult[15] = tmp4.button;
        cResult[16] = buttonDisabled;
        cResult[17] = items2;
        tmp19 = items2;
      }
    }
  : function HeaderActionButton(arg0) {
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
        ref,
      } = arg0);
      const tmp = closure_6();
      if (null != text) {
        const obj2 = {
          style: null,
          variant: "text-md/semibold",
          lineClamp: 1,
          maxFontSizeMultiplier: null,
          children: null,
        };
        const items = [, ,];
        ({ text: arr[0], buttonFont: arr[1] } = tmp);
        items[2] = textStyle;
        obj2.style = items;
        obj2.maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
        obj2.children = text;
        let tmp2 = React4(Text_Text.Text, obj2);
      } else if (null != IconComponent) {
        const obj3 = { size: IconComponentSize };
        tmp2 = React4(IconComponent, obj3);
      } else if (null != source) {
        const obj = { source, style: imageStyle, size: iconSize };
        tmp2 = React4(IconDefault, obj);
      }
      const obj4 = {
        ref,
        accessibilityLabel: null,
        accessibilityHint: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
        accessibilityRole: "button",
        onPress: null,
        activeOpacity: 0.6,
        androidRippleConfig: null,
        style: null,
        hitSlop: null,
        disabled: null,
        children: null,
      };
      if (accessibilityLabel == null) {
        accessibilityLabel = text;
      }
      obj4.accessibilityLabel = accessibilityLabel;
      obj4.accessibilityHint = accessibilityHint;
      obj4.accessibilityActions = accessibilityActions;
      obj4.onAccessibilityAction = onAccessibilityAction;
      obj4.onPress = onPress;
      let tmp11;
      if (foregroundRipple) {
        tmp11 = ANDROID_FOREGROUND_RIPPLE;
      }
      obj4.androidRippleConfig = tmp11;
      const items1 = [tmp.button, style];
      let buttonDisabled = disabled;
      if (disabled) {
        buttonDisabled = tmp.buttonDisabled;
      }
      items1[2] = buttonDisabled;
      obj4.style = items1;
      obj4.hitSlop = hitSlop;
      obj4.disabled = disabled;
      const items2 = [tmp2, icon];
      obj4.children = items2;
      return hasOwnProperty(Pressables.PressableOpacity, obj4);
    };
