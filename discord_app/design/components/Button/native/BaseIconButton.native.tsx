// === Module 7576: BaseIconButton ===

// Module 7576 (BaseIconButton)
import c from "c" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import IconDefault from "Icon" /* 5596 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import ButtonHooks from "ButtonHooks" /* 5601 */;
import ButtonPill from "ButtonPill" /* 5603 */;
import Button_BaseButton from "Button/BaseButton" /* 5610 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    const obj2 = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
    let obj = obj2;
  } else if ("md" === arg1) {
    const obj3 = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
    obj = obj3;
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj4 = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
      obj = obj4;
    }
  }
  const obj5 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: null };
  const merged = Object.assign(obj);
  obj5.pill = {};
  return obj5;
});
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((maxFontSizeMultiplier, ref) => {
  const cResult = c.c(28);
  ({ style, pillStyle, variant, size, loading, icon, scaleAmountInPx } = maxFontSizeMultiplier);
  let str = "primary";
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
  let num2 = 0;
  const sharedValue = ReanimatedRexport2.useSharedValue(0);
  const tmpResult = ReanimatedRexport2;
  const iconTintStyles = ButtonHooks.useIconTintStyles(str, sharedValue);
  const tmpResult3 = ButtonHooks;
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(size, true, maxFontSizeMultiplier.maxFontSizeMultiplier);
  if (cResult[0] !== size) {
    let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
    if ("sm" === size) {
      MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
    } else if ("md" === size) {
      MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
    }
    const _Math = Math;
    const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, num2);
    cResult[num2] = size;
    num2 = 1;
    cResult[1] = bound;
  } else {
    if (cResult[2] === style) {
      if (cResult[3] === tmp4.button) {
        let tmp12 = cResult[4];
      }
      if (cResult[5] === pillStyle) {
        if (cResult[6] === tmp4.pill) {
          let tmp13 = cResult[7];
        }
        let str4 = "xs";
        if ("lg" === size) {
          str4 = "sm";
        }
        if (cResult[8] === icon) {
          if (cResult[9] === iconTintStyles) {
            if (cResult[10] === iconSizeStyles) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] === loading) {
              if (cResult[13] === sharedValue) {
                if (cResult[14] === size) {
                  if (cResult[15] === tmp13) {
                    if (cResult[16] === str4) {
                      if (cResult[17] === tmp14) {
                        if (cResult[18] === str) {
                          let tmp19 = cResult[19];
                        }
                        if (cResult[20] === tmp8) {
                          if (cResult[21] === sharedValue) {
                            if (cResult[22] === maxFontSizeMultiplier) {
                              if (cResult[23] === ref) {
                                if (cResult[24] === num) {
                                  if (cResult[25] === tmp12) {
                                    if (cResult[26] === tmp19) {
                                      let tmp23 = cResult[27];
                                    }
                                    return tmp23;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj2 = {};
                        const merged = Object.assign(maxFontSizeMultiplier);
                        obj2.ref = ref;
                        obj2.style = tmp12;
                        obj2.pressed = sharedValue;
                        obj2.scaleAmountInPx = num;
                        obj2.hitSlop = tmp8;
                        obj2.children = tmp19;
                        const tmp28 = jsx(Button_BaseButton.BaseButton, {});
                        cResult[20] = tmp8;
                        cResult[21] = sharedValue;
                        cResult[22] = maxFontSizeMultiplier;
                        cResult[23] = ref;
                        cResult[24] = num;
                        cResult[25] = tmp12;
                        cResult[26] = tmp19;
                        cResult[27] = tmp28;
                        tmp23 = tmp28;
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp13, variant: str, size, loading, loaderSize: str4, pressed: sharedValue, children: tmp14 };
            const tmp21 = jsx(ButtonPill.ButtonPill, { style: tmp13, variant: str, size, loading, loaderSize: str4, pressed: sharedValue, children: tmp14 });
            cResult[12] = loading;
            cResult[13] = sharedValue;
            cResult[14] = size;
            cResult[15] = tmp13;
            cResult[16] = str4;
            cResult[17] = tmp14;
            cResult[18] = str;
            cResult[19] = tmp21;
            tmp19 = tmp21;
          }
        }
        let tmp16 = icon;
        if (!noop.isValidElement(icon)) {
          const obj4 = { source: icon, style: null };
          const items = [iconTintStyles, iconSizeStyles];
          obj4.style = items;
          tmp16 = <Icon source={icon} style={null} />;
        }
        cResult[8] = icon;
        cResult[9] = iconTintStyles;
        cResult[10] = iconSizeStyles;
        cResult[11] = tmp16;
        tmp14 = tmp16;
      }
      const items1 = [tmp4.pill, pillStyle];
      cResult[5] = pillStyle;
      cResult[6] = tmp4.pill;
      cResult[7] = items1;
      tmp13 = items1;
    }
    const items2 = [tmp4.button, style];
    cResult[2] = style;
    cResult[3] = tmp4.button;
    cResult[4] = items2;
    tmp12 = items2;
  }
  const tmpResult4 = ButtonHooks;
}) : ((variant, ref) => {
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
  const sharedValue = ReanimatedRexport2.useSharedValue(0);
  const iconTintStyles = ButtonHooks.useIconTintStyles(str, sharedValue);
  const iconSizeStyles = ButtonHooks.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  const obj4 = {};
  const merged = Object.assign(variant);
  obj4.ref = ref;
  const items = [tmp3.button, style];
  obj4.style = items;
  obj4.pressed = sharedValue;
  obj4.scaleAmountInPx = num;
  obj4.hitSlop = bound;
  const obj5 = { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null };
  const items1 = [tmp3.pill, pillStyle];
  obj5.style = items1;
  let str3 = "xs";
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  obj5.loaderSize = str3;
  obj5.pressed = sharedValue;
  let tmp10Result = icon;
  if (!noop.isValidElement(icon)) {
    const obj6 = { source: icon, style: null };
    const items2 = [iconTintStyles, iconSizeStyles];
    obj6.style = items2;
    tmp10Result = <Icon source={icon} style={null} />;
  }
  obj5.children = tmp10Result;
  obj4.children = jsx(ButtonPill.ButtonPill, { style: null, variant: str, size: DEFAULT_BUTTON_SIZE, loading, loaderSize: null, pressed: null, children: null });
  return jsx(Button_BaseButton.BaseButton, {});
}));