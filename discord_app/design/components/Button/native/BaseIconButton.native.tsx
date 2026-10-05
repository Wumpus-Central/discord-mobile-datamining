// === Module 7576: BaseIconButton ===

// Module 7576 (BaseIconButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import IconDefault from "Icon" /* 5596 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import ButtonHooks from "ButtonHooks" /* 5601 */;
import ButtonPill2 from "ButtonPill" /* 5603 */;
import Button_BaseButton from "Button/BaseButton" /* 5610 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0, arg1) => {
  let obj;
  let obj6;
  if ("sm" === arg1) {
    obj = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
    const obj2 = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
  } else if ("md" === arg1) {
    obj = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
    const obj3 = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
  } else {
    obj = {};
    if ("lg" === arg1) {
      obj = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
      const obj4 = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
    }
  }
  const obj5 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: obj6 };
  obj6 = {};
  const merged = Object.assign(obj);
  return obj5;
});
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((maxFontSizeMultiplier, ref) => {
  let icon;
  let loading;
  let pillStyle;
  let scaleAmountInPx;
  let style;
  let tmp8;
  let variant;
  const obj = react2;
  const cResult = obj.c(28);
  ({ style, pillStyle, variant, size, loading, icon, scaleAmountInPx } = maxFontSizeMultiplier);
  let str = "primary";
  maxFontSizeMultiplier = maxFontSizeMultiplier.maxFontSizeMultiplier;
  if (undefined !== variant) {
    str = variant;
  }
  if (undefined === size) {
    size = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  let num = 4;
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp4 = closure_4(str, size);
  const tmpResult = ReanimatedRexport2;
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult3 = ButtonHooks;
  const iconTintStyles = tmpResult3.useIconTintStyles(str, sharedValue);
  const tmpResult4 = ButtonHooks;
  const iconSizeStyles = tmpResult4.useIconSizeStyles(size, true, maxFontSizeMultiplier);
  if (cResult[0] !== size) {
    let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
    if ("sm" === size) {
      MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
    } else if ("md" === size) {
      MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
    }
    const _Math = Math;
    const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
    cResult[0] = size;
    cResult[1] = bound;
    tmp8 = bound;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp11;
    if (cResult[3] === tmp4.button) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === pillStyle) {
      let tmp12;
      if (cResult[6] === tmp4.pill) {
        tmp12 = cResult[7];
      }
      let str4 = "xs";
      if ("lg" === size) {
        str4 = "sm";
      }
      if (cResult[8] === icon) {
        if (cResult[9] === iconTintStyles) {
          let tmp13;
          if (cResult[10] === iconSizeStyles) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === loading) {
            if (cResult[13] === sharedValue) {
              if (cResult[14] === size) {
                if (cResult[15] === tmp12) {
                  if (cResult[16] === str4) {
                    if (cResult[17] === tmp13) {
                      let tmp18;
                      if (cResult[18] === str) {
                        tmp18 = cResult[19];
                      }
                      if (cResult[20] === tmp8) {
                        if (cResult[21] === sharedValue) {
                          if (cResult[22] === maxFontSizeMultiplier) {
                            if (cResult[23] === ref) {
                              if (cResult[24] === num) {
                                if (cResult[25] === tmp11) {
                                  let tmp22;
                                  if (cResult[26] === tmp18) {
                                    tmp22 = cResult[27];
                                  }
                                  return tmp22;
                                }
                              }
                            }
                          }
                        }
                      }
                      const BaseButton = Button_BaseButton.BaseButton;
                      const merged = Object.assign(maxFontSizeMultiplier);
                      const tmp27 = <BaseButton ref={ref} style={tmp11} pressed={sharedValue} scaleAmountInPx={num} hitSlop={tmp8}>{tmp18}</BaseButton>;
                      cResult[20] = tmp8;
                      cResult[21] = sharedValue;
                      cResult[22] = maxFontSizeMultiplier;
                      cResult[23] = ref;
                      cResult[24] = num;
                      cResult[25] = tmp11;
                      cResult[26] = tmp18;
                      cResult[27] = tmp27;
                      tmp22 = tmp27;
                    }
                  }
                }
              }
            }
          }
          const tmp20 = jsx(ButtonPill2.ButtonPill, { style: tmp12, variant: str, size, loading, loaderSize: str4, pressed: sharedValue, children: tmp13 });
          cResult[12] = loading;
          cResult[13] = sharedValue;
          cResult[14] = size;
          cResult[15] = tmp12;
          cResult[16] = str4;
          cResult[17] = tmp13;
          cResult[18] = str;
          cResult[19] = tmp20;
          tmp18 = tmp20;
        }
      }
      let tmp15 = icon;
      if (!react.isValidElement(icon)) {
        const items = [iconTintStyles, iconSizeStyles];
        tmp15 = <Icon source={icon} style={items} />;
      }
      cResult[8] = icon;
      cResult[9] = iconTintStyles;
      cResult[10] = iconSizeStyles;
      cResult[11] = tmp15;
      tmp13 = tmp15;
    }
    const items1 = [tmp4.pill, pillStyle];
    cResult[5] = pillStyle;
    cResult[6] = tmp4.pill;
    cResult[7] = items1;
    tmp12 = items1;
  }
  const items2 = [tmp4.button, style];
  cResult[2] = style;
  cResult[3] = tmp4.button;
  cResult[4] = items2;
  tmp11 = items2;
}) : ((variant, ref) => {
  let icon;
  let loading;
  let maxFontSizeMultiplier;
  let pillStyle;
  let scaleAmountInPx;
  let style;
  variant = variant.variant;
  let str = "primary";
  ({ style, pillStyle } = variant);
  if (undefined !== variant) {
    str = variant;
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (undefined === DEFAULT_BUTTON_SIZE) {
    DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = variant);
  let num = 4;
  ({ maxFontSizeMultiplier, loading } = variant);
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp3 = closure_4(str, DEFAULT_BUTTON_SIZE);
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ButtonHooks;
  const iconTintStyles = obj2.useIconTintStyles(str, sharedValue);
  const obj3 = ButtonHooks;
  const iconSizeStyles = obj3.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  const BaseButton = Button_BaseButton.BaseButton;
  const merged = Object.assign(variant);
  const items = [tmp3.button, style];
  const items1 = [tmp3.pill, pillStyle];
  let str3 = "xs";
  const ButtonPill = ButtonPill2.ButtonPill;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  let tmp10Result = icon;
  if (!react.isValidElement(icon)) {
    const items2 = [iconTintStyles, iconSizeStyles];
    tmp10Result = <Icon source={icon} style={items2} />;
  }
  return <BaseButton ref={ref} style={items} pressed={sharedValue} scaleAmountInPx={num} hitSlop={bound}><ButtonPill style={items1} variant={str} size={DEFAULT_BUTTON_SIZE} loading={loading} loaderSize={str3} pressed={sharedValue}>{tmp10Result}</ButtonPill></BaseButton>;
}));
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = forwardRefResult;