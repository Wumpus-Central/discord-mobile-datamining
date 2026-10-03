// === Module 14470: UserProfileUpsellCardV2 ===

// Module 14470 (UserProfileUpsellCardV2)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8313 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Gradients = fn(6938).Gradients;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { outer: { borderRadius: nativeDefault.radii.lg, padding: 1 }, inner: null, text: null, textCenter: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
obj2.inner = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
let obj4 = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
obj2.text = { marginBottom: nativeDefault.space.PX_12 };
obj2.textCenter = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCardV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(25);
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
    if (cResult[1] === tmp6.outer) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === tmp6.text) {
      if (cResult[4] === tmp8) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        if (cResult[7] === text) {
          let tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { color: nativeDefault.colors.WHITE, size: "xs" };
          const tmp17 = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj2);
          cResult[9] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[9];
        }
        if (!tmp4) {
          tmp4 = tmp5;
        }
        if (cResult[10] === buttonText) {
          if (cResult[11] === str2) {
            if (cResult[12] === tmp5) {
              if (cResult[13] === onButtonPress) {
                if (cResult[14] === tmp4) {
                  let tmp18 = cResult[15];
                }
                if (cResult[16] === children) {
                  if (cResult[17] === tmp6.inner) {
                    if (cResult[18] === tmp18) {
                      if (cResult[19] === tmp10) {
                        let tmp21 = cResult[20];
                      }
                      if (cResult[21] === onLayout) {
                        if (cResult[22] === tmp21) {
                          if (cResult[23] === tmp7) {
                            let tmp25 = cResult[24];
                          }
                          return tmp25;
                        }
                      }
                      const obj3 = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: tmp7, onLayout, children: tmp21 };
                      const tmp30 = hasOwnProperty(LinearGradientDefault, obj3);
                      cResult[21] = onLayout;
                      cResult[22] = tmp21;
                      cResult[23] = tmp7;
                      cResult[24] = tmp30;
                      tmp25 = tmp30;
                    }
                  }
                }
                const obj4 = { style: tmp6.inner, children: null };
                const items = [tmp10, tmp18, children];
                obj4.children = items;
                const tmp24 = timestampProducer(View, obj4);
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
        const obj5 = { icon: tmp14, text: buttonText, onPress: onButtonPress, variant: str2, loading: tmp5, disabled: tmp4, grow: true };
        const tmp20 = hasOwnProperty(components_Button_Button.Button, obj5);
        cResult[10] = buttonText;
        cResult[11] = str2;
        cResult[12] = tmp5;
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
}) : ((children) => {
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
  ({ children, style, onLayout } = children);
  const tmp = closure_7();
  const obj = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: null, onLayout, children: null };
  const items = [tmp.outer, style];
  obj.style = items;
  const obj2 = { style: tmp.inner, children: null };
  const items1 = [tmp.text, ];
  let textCenter = "center" === str;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items1[1] = textCenter;
  const items2 = [hasOwnProperty(Text_Text.Text, { style: items1, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: children.text }), , ];
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
  items2[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  items2[2] = children;
  obj2.children = items2;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(tmp5, obj);
});
export const GRADIENT_BORDER_WIDTH = 1;