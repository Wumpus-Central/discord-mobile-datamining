// === Module 8566: FormCTAButton ===

// Module 8566 (FormCTAButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import RedesignCompat from "RedesignCompat" /* 6268 */;
import RowButton from "RowButton" /* 8565 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5903 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, Pressable: closure_4, Platform, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const FormConstants = fn(1204);
({ ANDROID_FOREGROUND_RIPPLE: metroRequire, getThemedRippleConfig: closure_7 } = FormConstants);
const Fonts = fn(1085).Fonts;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { rowButton: { paddingHorizontal: 16 }, sectionBody: {}, button: { minHeight: 44, justifyContent: "center" }, text: { lineHeight: 44, paddingHorizontal: 17, textAlign: "left" }, textBrand: null, textDanger: null, textWarning: null, alignLeft: null, disabled: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
obj2.textBrand = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, 16));
obj2.textDanger = {};
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.STATUS_WARNING, 16));
obj2.textWarning = {};
obj2.alignLeft = { textAlign: "left" };
obj2.disabled = { opacity: 0.5 };
let closure_9 = createStyles.createStyles(obj2);
let obj6 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
const ReactCompilerGating = fn(558);
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormCTAButton(arg0) {
  const cResult = c.c(39);
  ({ color, label, fontSize, alignLeft, disabled, loading, testID, style, onPress } = arg0);
  if (undefined === color) {
    color = obj6.BRAND;
  }
  let num = 16;
  if (undefined !== fontSize) {
    num = fontSize;
  }
  let alignLeft2 = undefined !== alignLeft && alignLeft;
  let tmp5 = undefined !== disabled && disabled;
  const tmp7 = closure_9();
  if (cResult[0] === color) {
    if (cResult[1] === tmp7) {
      if (cResult[3] !== num) {
        const obj2 = { fontSize: num };
        cResult[3] = num;
        cResult[4] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[4];
      }
      if (alignLeft2) {
        alignLeft2 = tmp7.alignLeft;
      }
      if (cResult[5] === tmp7.text) {
        if (cResult[6] === tmp9) {
          if (cResult[7] === tmp12) {
            if (cResult[8] === alignLeft2) {
              let tmp13 = cResult[9];
            }
            if (cResult[10] === label) {
              if (cResult[11] === tmp13) {
                let tmp14 = cResult[12];
              }
              if (cResult[13] === color) {
                if (cResult[14] === tmp6) {
                  if (cResult[15] === tmp14) {
                    let tmp17 = cResult[16];
                  }
                  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
                    if (!tmp5) {
                      tmp5 = tmp6;
                    }
                    if (cResult[17] === tmp17) {
                      if (cResult[18] === onPress) {
                        if (cResult[19] === tmp5) {
                          if (cResult[20] === testID) {
                            let tmp37 = cResult[21];
                          }
                          if (cResult[22] === tmp7.rowButton) {
                            if (cResult[23] === tmp37) {
                              let tmp40 = cResult[24];
                            }
                            return tmp40;
                          }
                          const obj3 = { style: tmp7.rowButton, children: tmp37 };
                          const tmp43 = <hasOwnProperty style={tmp7.rowButton}>{tmp37}</hasOwnProperty>;
                          cResult[22] = tmp7.rowButton;
                          cResult[23] = tmp37;
                          cResult[24] = tmp43;
                          tmp40 = tmp43;
                        }
                      }
                    }
                    const obj4 = { label: tmp17, onPress, arrow: false, disabled: tmp5, testID };
                    const tmp39 = jsx(RowButton.RowButton, { label: tmp17, onPress, arrow: false, disabled: tmp5, testID });
                    cResult[17] = tmp17;
                    cResult[18] = onPress;
                    cResult[19] = tmp5;
                    cResult[20] = testID;
                    cResult[21] = tmp39;
                    tmp37 = tmp39;
                  } else {
                    let disabled2 = tmp5;
                    if (tmp5) {
                      disabled2 = tmp7.disabled;
                    }
                    if (cResult[25] === style) {
                      if (cResult[26] === tmp7.sectionBody) {
                        if (cResult[27] === disabled2) {
                          let tmp22 = cResult[28];
                        }
                        let tmp23 = tmp5;
                        if (!tmp5) {
                          tmp23 = tmp6;
                        }
                        const _Symbol = Symbol;
                        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp28 = React5(timestampProducer);
                          cResult[29] = tmp28;
                          let tmp25 = tmp28;
                        } else {
                          tmp25 = cResult[29];
                        }
                        if (cResult[30] === tmp17) {
                          if (cResult[31] === onPress) {
                            if (cResult[32] === tmp7.button) {
                              if (cResult[33] === tmp23) {
                                if (cResult[34] === testID) {
                                  let tmp29 = cResult[35];
                                }
                                if (cResult[36] === tmp22) {
                                  if (cResult[37] === tmp29) {
                                    let tmp33 = cResult[38];
                                  }
                                  return tmp33;
                                }
                                const obj5 = { style: tmp22, children: tmp29 };
                                const tmp36 = <hasOwnProperty style={tmp22}>{tmp29}</hasOwnProperty>;
                                cResult[36] = tmp22;
                                cResult[37] = tmp29;
                                cResult[38] = tmp36;
                                tmp33 = tmp36;
                              }
                            }
                          }
                        }
                        obj6 = { testID, accessibilityRole: "button", onPress, style: tmp7.button, disabled: tmp23, android_ripple: tmp25, children: tmp17 };
                        const tmp32 = <React4 testID={testID} accessibilityRole="button" onPress={onPress} style={tmp7.button} disabled={tmp23} android_ripple={tmp25}>{tmp17}</React4>;
                        cResult[30] = tmp17;
                        cResult[31] = onPress;
                        cResult[32] = tmp7.button;
                        cResult[33] = tmp23;
                        cResult[34] = testID;
                        cResult[35] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                    const items = [tmp7.sectionBody, disabled2, style];
                    cResult[25] = style;
                    cResult[26] = tmp7.sectionBody;
                    cResult[27] = disabled2;
                    cResult[28] = items;
                    tmp22 = items;
                  }
                }
              }
              let tmp18 = tmp14;
              if (tmp6) {
                const obj7 = { color };
                tmp18 = <React3 color={color} />;
              }
              cResult[13] = color;
              cResult[14] = tmp6;
              cResult[15] = tmp14;
              cResult[16] = tmp18;
              tmp17 = tmp18;
            }
            const obj8 = { style: tmp13, children: label };
            const tmp16 = jsx(native.LegacyText, { style: tmp13, children: label });
            cResult[10] = label;
            cResult[11] = tmp13;
            cResult[12] = tmp16;
            tmp14 = tmp16;
          }
        }
      }
      const items1 = [tmp8, cResult[2], tmp12, alignLeft2];
      cResult[5] = tmp7.text;
      cResult[6] = cResult[2];
      cResult[7] = tmp12;
      cResult[8] = alignLeft2;
      cResult[9] = items1;
      tmp13 = items1;
    }
  }
  if (obj6.BRAND === color) {
    let textDanger = tmp7.textBrand;
    cResult[0] = color;
    cResult[1] = tmp7;
    cResult[2] = textDanger;
  } else if (tmp10.DANGER !== color) {
    if (tmp10.WARNING === color) {
      textDanger = tmp7.textWarning;
    }
  }
  textDanger = tmp7.textDanger;
}) : (function FormCTAButton(children) {
  let BRAND = children.color;
  if (undefined === BRAND) {
    BRAND = obj6.BRAND;
  }
  const fontSize = children.fontSize;
  let num = 16;
  if (undefined !== fontSize) {
    num = fontSize;
  }
  const alignLeft = children.alignLeft;
  let alignLeft2 = undefined !== alignLeft && alignLeft;
  const disabled = children.disabled;
  let tmp2 = undefined !== disabled && disabled;
  const loading = children.loading;
  ({ testID, onPress } = children);
  const tmp4 = closure_9();
  const items = [tmp4.text, , , ];
  if (obj6.BRAND === BRAND) {
    let textWarning = tmp4.textBrand;
  } else if (obj6.DANGER === BRAND) {
    textWarning = tmp4.textDanger;
  } else if (obj6.WARNING === BRAND) {
    textWarning = tmp4.textWarning;
  }
  items[1] = textWarning;
  items[2] = { fontSize: num };
  if (alignLeft2) {
    alignLeft2 = tmp4.alignLeft;
  }
  items[3] = alignLeft2;
  let tmp5Result = jsx(native.LegacyText, { style: items, children: children.label });
  if (undefined !== loading && loading) {
    const obj = { color: BRAND };
    tmp5Result = <React3 color={BRAND} />;
  }
  const obj2 = { style: null, children: null };
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    obj2.style = tmp4.rowButton;
    const obj3 = { label: tmp5Result, onPress, arrow: false, disabled: null, testID: null };
    if (!tmp2) {
      tmp2 = tmp3;
    }
    obj3.disabled = tmp2;
    obj3.testID = testID;
    obj2.children = jsx(RowButton.RowButton, { label: tmp5Result, onPress, arrow: false, disabled: null, testID: null });
    let tmp16 = obj2;
  } else {
    const items1 = [tmp4.sectionBody, , ];
    let disabled2 = tmp2;
    if (tmp2) {
      disabled2 = tmp4.disabled;
    }
    items1[1] = disabled2;
    items1[2] = children.style;
    obj2.style = items1;
    const obj4 = { testID, accessibilityRole: "button", onPress, style: tmp4.button, disabled: null, android_ripple: null, children: null };
    let tmp13 = tmp2;
    if (!tmp2) {
      tmp13 = tmp3;
    }
    obj4.disabled = tmp13;
    obj4.android_ripple = React5(timestampProducer);
    obj4.children = tmp5Result;
    obj2.children = <React4 testID={testID} accessibilityRole="button" onPress={onPress} style={tmp4.button} disabled={null} android_ripple={null}>{null}</React4>;
    tmp16 = obj2;
  }
  return <hasOwnProperty {...tmp16} />;
});
tmp10.Colors = obj6;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default tmp10;
export const FormCTAButtonColors = obj6;