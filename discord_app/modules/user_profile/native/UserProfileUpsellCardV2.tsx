// discord_app/modules/user_profile/native/UserProfileUpsellCardV2.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Gradients = fn(7140).Gradients;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { outer: { borderRadius: nativeDefault.radii.lg, padding: 1 }, inner: null, text: null, textCenter: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
obj2.inner = {
  borderRadius: nativeDefault.radii.lg - 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: nativeDefault.space.PX_16,
};
let obj4 = {
  borderRadius: nativeDefault.radii.lg - 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: nativeDefault.space.PX_16,
};
obj2.text = { marginBottom: nativeDefault.space.PX_12 };
obj2.textCenter = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCardV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileUpsellCardV2(arg0) {
      const cResult = c.c(28);
      ({
        text,
        textAlign,
        buttonText,
        onButtonPress,
        buttonVariant,
        disabled,
        loading,
        children,
        style,
        innerStyle,
        onLayout,
      } = arg0);
      let str = "left";
      if (undefined !== textAlign) {
        str = textAlign;
      }
      let str2 = "primary";
      if (undefined !== buttonVariant) {
        str2 = buttonVariant;
      }
      let tmp4 = undefined !== disabled && disabled;
      const tmp6 = closure_7();
      if (cResult[0] === style) {
        if (cResult[1] === tmp6.outer) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === innerStyle) {
          if (cResult[4] === tmp6.inner) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp6.text) {
            if (cResult[7] === tmp9) {
              let tmp10 = cResult[8];
            }
            if (cResult[9] === tmp10) {
              if (cResult[10] === text) {
                let tmp11 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { color: nativeDefault.colors.WHITE, size: "xs" };
                const tmp18 = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj2);
                cResult[12] = tmp18;
                let tmp15 = tmp18;
              } else {
                tmp15 = cResult[12];
              }
              if (!tmp4) {
                tmp4 = tmp5;
              }
              if (cResult[13] === buttonText) {
                if (cResult[14] === str2) {
                  if (cResult[15] === tmp5) {
                    if (cResult[16] === onButtonPress) {
                      if (cResult[17] === tmp4) {
                        let tmp19 = cResult[18];
                      }
                      if (cResult[19] === children) {
                        if (cResult[20] === tmp19) {
                          if (cResult[21] === tmp8) {
                            if (cResult[22] === tmp11) {
                              let tmp22 = cResult[23];
                            }
                            if (cResult[24] === onLayout) {
                              if (cResult[25] === tmp22) {
                                if (cResult[26] === tmp7) {
                                  let tmp26 = cResult[27];
                                }
                                return tmp26;
                              }
                            }
                            const obj3 = {
                              start: ConstantsIOS.HorizontalGradient.START,
                              end: ConstantsIOS.HorizontalGradient.END,
                              colors: Gradients.PREMIUM_TIER_2,
                              style: tmp7,
                              onLayout,
                              children: tmp22,
                            };
                            const tmp31 = hasOwnProperty(LinearGradientDefault, obj3);
                            cResult[24] = onLayout;
                            cResult[25] = tmp22;
                            cResult[26] = tmp7;
                            cResult[27] = tmp31;
                            tmp26 = tmp31;
                          }
                        }
                      }
                      const obj4 = { style: tmp8, children: null };
                      const items = [tmp11, tmp19, children];
                      obj4.children = items;
                      const tmp25 = timestampProducer(View, obj4);
                      cResult[19] = children;
                      cResult[20] = tmp19;
                      cResult[21] = tmp8;
                      cResult[22] = tmp11;
                      cResult[23] = tmp25;
                      tmp22 = tmp25;
                    }
                  }
                }
              }
              const obj5 = {
                icon: tmp15,
                text: buttonText,
                onPress: onButtonPress,
                variant: str2,
                loading: tmp5,
                disabled: tmp4,
                grow: true,
              };
              const tmp21 = hasOwnProperty(components_Button_Button.Button, obj5);
              cResult[13] = buttonText;
              cResult[14] = str2;
              cResult[15] = tmp5;
              cResult[16] = onButtonPress;
              cResult[17] = tmp4;
              cResult[18] = tmp21;
              tmp19 = tmp21;
            }
            const obj6 = {
              style: tmp10,
              variant: "text-md/normal",
              color: "text-default",
              maxFontSizeMultiplier: 2.5,
              children: text,
            };
            const tmp13 = hasOwnProperty(Text_Text.Text, obj6);
            cResult[9] = tmp10;
            cResult[10] = text;
            cResult[11] = tmp13;
            tmp11 = tmp13;
          }
          const items1 = [tmp6.text, "center" === str && tmp6.textCenter];
          cResult[6] = tmp6.text;
          cResult[7] = "center" === str && tmp6.textCenter;
          cResult[8] = items1;
          tmp10 = items1;
        }
        const items2 = [tmp6.inner, innerStyle];
        cResult[3] = innerStyle;
        cResult[4] = tmp6.inner;
        cResult[5] = items2;
        tmp8 = items2;
      }
      const items3 = [tmp6.outer, style];
      cResult[0] = style;
      cResult[1] = tmp6.outer;
      cResult[2] = items3;
      tmp7 = items3;
    }
  : function UserProfileUpsellCardV2(children) {
      let str = children.textAlign;
      if (str === undefined) {
        str = "left";
      }
      ({ buttonVariant, buttonText, onButtonPress } = children);
      if (buttonVariant === undefined) {
        buttonVariant = "primary";
      }
      let flag = children.disabled;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = children.loading;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ children, style, innerStyle, onLayout } = children);
      const tmp = closure_7();
      const obj = {
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: Gradients.PREMIUM_TIER_2,
        style: null,
        onLayout,
        children: null,
      };
      const items = [tmp.outer, style];
      obj.style = items;
      const obj2 = { style: null, children: null };
      const items1 = [tmp.inner, innerStyle];
      obj2.style = items1;
      const items2 = [tmp.text];
      let textCenter = "center" === str;
      if (textCenter) {
        textCenter = tmp.textCenter;
      }
      items2[1] = textCenter;
      const items3 = [
        hasOwnProperty(Text_Text.Text, {
          style: items2,
          variant: "text-md/normal",
          color: "text-default",
          maxFontSizeMultiplier: 2.5,
          children: children.text,
        }),
        ,
      ];
      const obj3 = { icon: null, text: null, onPress: null, variant: null, loading: null, disabled: null, grow: true };
      const tmp5 = LinearGradientDefault;
      obj3.icon = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
      obj3.text = buttonText;
      obj3.onPress = onButtonPress;
      obj3.variant = buttonVariant;
      obj3.loading = flag2;
      if (!flag) {
        flag = flag2;
      }
      obj3.disabled = flag;
      items3[1] = hasOwnProperty(components_Button_Button.Button, obj3);
      items3[2] = children;
      obj2.children = items3;
      obj.children = timestampProducer(View, obj2);
      return hasOwnProperty(tmp5, obj);
    };
export const GRADIENT_BORDER_WIDTH = 1;
