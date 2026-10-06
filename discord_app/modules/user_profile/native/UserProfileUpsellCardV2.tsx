// === Module 14490: UserProfileUpsellCardV2 ===

// Module 14490 (UserProfileUpsellCardV2)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import ColorConstants from "ColorConstants" /* 6951 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8346 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { outer: obj2, inner: obj3, text: obj4, textCenter: { textAlign: "center" } };
obj2 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buttonText;
  let buttonVariant;
  let children;
  let disabled;
  let items;
  let loading;
  let onButtonPress;
  let onLayout;
  let style;
  let text;
  let textAlign;
  const obj = react2;
  const cResult = obj.c(25);
  ({ text, textAlign, buttonText, onButtonPress, buttonVariant, disabled, loading, children, style, onLayout } = arg0);
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
    let tmp7;
    if (cResult[1] === tmp6.outer) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp6.text) {
      let tmp9;
      if (cResult[4] === ("center" === str && tmp6.textCenter)) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        let tmp10;
        let tmp14;
        if (cResult[7] === text) {
          tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { color: nativeDefault.colors.WHITE, size: "xs" };
          const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
          const tmp17 = hasOwnProperty(NitroWheelIcon, obj2);
          cResult[9] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[9];
        }
        if (!tmp4) {
          tmp4 = tmp5;
        }
        if (cResult[10] === buttonText) {
          if (cResult[11] === str2) {
            if (cResult[12] === (undefined !== loading && loading)) {
              if (cResult[13] === onButtonPress) {
                let tmp18;
                if (cResult[14] === tmp4) {
                  tmp18 = cResult[15];
                }
                if (cResult[16] === children) {
                  if (cResult[17] === tmp6.inner) {
                    if (cResult[18] === tmp18) {
                      let tmp21;
                      if (cResult[19] === tmp10) {
                        tmp21 = cResult[20];
                      }
                      if (cResult[21] === onLayout) {
                        if (cResult[22] === tmp21) {
                          let tmp25;
                          if (cResult[23] === tmp7) {
                            tmp25 = cResult[24];
                          }
                          return tmp25;
                        }
                      }
                      const obj3 = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: tmp7, onLayout, children: tmp21 };
                      const tmp28 = LinearGradientDefault;
                      const tmp30 = hasOwnProperty(tmp28, obj3);
                      cResult[21] = onLayout;
                      cResult[22] = tmp21;
                      cResult[23] = tmp7;
                      cResult[24] = tmp30;
                      tmp25 = tmp30;
                    }
                  }
                }
                const obj4 = { style: tmp6.inner, children: items };
                items = [tmp10, tmp18, children];
                const tmp24 = metroRequire(View, obj4);
                cResult[16] = children;
                cResult[17] = tmp6.inner;
                cResult[18] = tmp18;
                cResult[19] = tmp10;
                cResult[20] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
        }
        const obj5 = { icon: tmp14, text: buttonText, onPress: onButtonPress, variant: str2, loading: undefined !== loading && loading, disabled: tmp4, grow: true };
        const tmp20 = hasOwnProperty(components_Button_Button.Button, obj5);
        cResult[10] = buttonText;
        cResult[11] = str2;
        cResult[12] = undefined !== loading && loading;
        cResult[13] = onButtonPress;
        cResult[14] = tmp4;
        cResult[15] = tmp20;
        tmp18 = tmp20;
      }
      const obj6 = { style: tmp9, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: text };
      const tmp12 = hasOwnProperty(Text_Text.Text, obj6);
      cResult[6] = tmp9;
      cResult[7] = text;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
    const items1 = [tmp6.text, "center" === str && tmp6.textCenter];
    cResult[3] = tmp6.text;
    cResult[4] = "center" === str && tmp6.textCenter;
    cResult[5] = items1;
    tmp9 = items1;
  }
  const items2 = [tmp6.outer, style];
  cResult[0] = style;
  cResult[1] = tmp6.outer;
  cResult[2] = items2;
  tmp7 = items2;
}) : ((textAlign) => {
  let NitroWheelIcon;
  let buttonText;
  let buttonVariant;
  let children;
  let items;
  let items2;
  let obj2;
  let obj4;
  let onButtonPress;
  let onLayout;
  let style;
  let str = textAlign.textAlign;
  const text = textAlign.text;
  if (str === undefined) {
    str = "left";
  }
  ({ buttonVariant, buttonText, onButtonPress } = textAlign);
  if (buttonVariant === undefined) {
    buttonVariant = "primary";
  }
  let flag = textAlign.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = textAlign.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ children, style, onLayout } = textAlign);
  const tmp = closure_7();
  const obj = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: items, onLayout, children: metroRequire(View, obj2) };
  items = [tmp.outer, style];
  const items1 = [tmp.text, ];
  let textCenter = "center" === str;
  obj2 = { style: tmp.inner, children: items2 };
  const tmp5 = LinearGradientDefault;
  const Text = Text_Text.Text;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items1[1] = textCenter;
  items2 = [hasOwnProperty(Text, { style: items1, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: text }), , ];
  const obj3 = { icon: hasOwnProperty(NitroWheelIcon, obj4), text: buttonText, onPress: onButtonPress, variant: buttonVariant, loading: flag2, disabled: flag, grow: true };
  const Button = components_Button_Button.Button;
  obj4 = { color: nativeDefault.colors.WHITE, size: "xs" };
  NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  if (!flag) {
    flag = flag2;
  }
  items2[1] = hasOwnProperty(Button, obj3);
  items2[2] = children;
  return hasOwnProperty(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCardV2.tsx");

export default tmp5;
export const GRADIENT_BORDER_WIDTH = 1;