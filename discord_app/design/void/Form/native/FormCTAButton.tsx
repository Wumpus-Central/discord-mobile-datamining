// discord_app/design/void/Form/native/FormCTAButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import native from "../../native.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import RowButton2 from "../../../components/TableRow/native/RowButton.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import FormConstants from "FormConstants.tsx";
import createStyles_mod from "../../../components/Styles/native/createStyles.tsx";
import TextStyles_mod from "../../../../modules/rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Platform;
let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ ActivityIndicator: c3, Pressable: closure_4, Platform, StyleSheet, View: hasOwnProperty } = react_native);
({ ANDROID_FOREGROUND_RIPPLE: metroRequire, getThemedRippleConfig: metroImportDefault } = FormConstants);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  rowButton: { paddingHorizontal: 16 },
  sectionBody: {},
  button: { minHeight: 44, justifyContent: "center" },
  text: { lineHeight: 44, paddingHorizontal: 17, textAlign: "left" },
  textBrand: obj2,
  textDanger: obj3,
  textWarning: obj4,
  alignLeft: { textAlign: "left" },
  disabled: { opacity: 0.5 },
};
obj2 = {};
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
obj3 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.STATUS_WARNING, 16));
let closure_9 = createStyles(obj);
const obj5 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let alignLeft;
      let color;
      let disabled;
      let fontSize;
      let label;
      let loading;
      let onPress;
      let style;
      let testID;
      let textWarning;
      const obj = react2;
      const cResult = obj.c(39);
      ({ color, label, fontSize, alignLeft, disabled, loading, testID, style, onPress } = arg0);
      if (undefined === color) {
        color = obj5.BRAND;
      }
      let num = 16;
      if (undefined !== fontSize) {
        num = fontSize;
      }
      let alignLeft2 = undefined !== alignLeft && alignLeft;
      let tmp5 = undefined !== disabled && disabled;
      const tmp7 = closure_9();
      if (cResult[0] === color) {
        let tmp9;
        let tmp11;
        if (cResult[1] === tmp7) {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== num) {
          const obj2 = { fontSize: num };
          cResult[3] = num;
          cResult[4] = obj2;
          tmp11 = obj2;
        } else {
          tmp11 = cResult[4];
        }
        if (alignLeft2) {
          alignLeft2 = tmp7.alignLeft;
        }
        if (cResult[5] === tmp7.text) {
          if (cResult[6] === tmp9) {
            if (cResult[7] === tmp11) {
              let tmp12;
              if (cResult[8] === alignLeft2) {
                tmp12 = cResult[9];
              }
              if (cResult[10] === label) {
                let tmp13;
                if (cResult[11] === tmp12) {
                  tmp13 = cResult[12];
                }
                if (cResult[13] === color) {
                  if (cResult[14] === (undefined !== loading && loading)) {
                    let tmp16;
                    if (cResult[15] === tmp13) {
                      tmp16 = cResult[16];
                    }
                    if (react.useContext(RedesignCompat.RedesignCompatContext)) {
                      if (!tmp5) {
                        tmp5 = tmp6;
                      }
                      if (cResult[17] === tmp16) {
                        if (cResult[18] === onPress) {
                          if (cResult[19] === tmp5) {
                            let tmp37;
                            if (cResult[20] === testID) {
                              tmp37 = cResult[21];
                            }
                            if (cResult[22] === tmp7.rowButton) {
                              let tmp40;
                              if (cResult[23] === tmp37) {
                                tmp40 = cResult[24];
                              }
                              return tmp40;
                            }
                            const tmp43 = <hasOwnProperty style={tmp7.rowButton}>{tmp37}</hasOwnProperty>;
                            cResult[22] = tmp7.rowButton;
                            cResult[23] = tmp37;
                            cResult[24] = tmp43;
                            tmp40 = tmp43;
                          }
                        }
                      }
                      const tmp39 = jsx(RowButton2.RowButton, {
                        label: tmp16,
                        onPress,
                        arrow: false,
                        disabled: tmp5,
                        testID,
                      });
                      cResult[17] = tmp16;
                      cResult[18] = onPress;
                      cResult[19] = tmp5;
                      cResult[20] = testID;
                      cResult[21] = tmp39;
                      tmp37 = tmp39;
                    } else {
                      if (cResult[25] === style) {
                        if (cResult[26] === tmp7.sectionBody) {
                          let tmp22;
                          let tmp25;
                          if (cResult[27] === (tmp5 && tmp7.disabled)) {
                            tmp22 = cResult[28];
                          }
                          let tmp23 = tmp5;
                          const button = tmp7.button;
                          if (!tmp5) {
                            tmp23 = tmp6;
                          }
                          const _Symbol = Symbol;
                          if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp28 = metroImportDefault(metroRequire);
                            cResult[29] = tmp28;
                            tmp25 = tmp28;
                          } else {
                            tmp25 = cResult[29];
                          }
                          if (cResult[30] === tmp16) {
                            if (cResult[31] === onPress) {
                              if (cResult[32] === tmp7.button) {
                                if (cResult[33] === tmp23) {
                                  let tmp29;
                                  if (cResult[34] === testID) {
                                    tmp29 = cResult[35];
                                  }
                                  if (cResult[36] === tmp22) {
                                    let tmp33;
                                    if (cResult[37] === tmp29) {
                                      tmp33 = cResult[38];
                                    }
                                    return tmp33;
                                  }
                                  const tmp36 = <hasOwnProperty style={tmp22}>{tmp29}</hasOwnProperty>;
                                  cResult[36] = tmp22;
                                  cResult[37] = tmp29;
                                  cResult[38] = tmp36;
                                  tmp33 = tmp36;
                                }
                              }
                            }
                          }
                          const tmp32 = (
                            <React3
                              testID={testID}
                              accessibilityRole="button"
                              onPress={onPress}
                              style={button}
                              disabled={tmp23}
                              android_ripple={tmp25}
                            >
                              {tmp16}
                            </React3>
                          );
                          cResult[30] = tmp16;
                          cResult[31] = onPress;
                          cResult[32] = tmp7.button;
                          cResult[33] = tmp23;
                          cResult[34] = testID;
                          cResult[35] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                      const items = [tmp7.sectionBody, tmp5 && tmp7.disabled, style];
                      cResult[25] = style;
                      cResult[26] = tmp7.sectionBody;
                      cResult[27] = tmp5 && tmp7.disabled;
                      cResult[28] = items;
                      tmp22 = items;
                    }
                  }
                }
                let tmp17 = tmp13;
                if (undefined !== loading && loading) {
                  tmp17 = <_false color={color} />;
                }
                cResult[13] = color;
                cResult[14] = undefined !== loading && loading;
                cResult[15] = tmp13;
                cResult[16] = tmp17;
                tmp16 = tmp17;
              }
              const tmp15 = jsx(native.LegacyText, { style: tmp12, children: label });
              cResult[10] = label;
              cResult[11] = tmp12;
              cResult[12] = tmp15;
              tmp13 = tmp15;
            }
          }
        }
        const items1 = [tmp8, tmp9, tmp11, alignLeft2];
        cResult[5] = tmp7.text;
        cResult[6] = tmp9;
        cResult[7] = tmp11;
        cResult[8] = alignLeft2;
        cResult[9] = items1;
        tmp12 = items1;
      }
      if (obj5.BRAND === color) {
        textWarning = tmp7.textBrand;
      } else if (obj5.DANGER === color) {
        textWarning = tmp7.textDanger;
      } else if (obj5.WARNING === color) {
        textWarning = tmp7.textWarning;
      }
      cResult[0] = color;
      cResult[1] = tmp7;
      cResult[2] = textWarning;
      tmp9 = textWarning;
    }
  : (color) => {
      let onPress;
      let testID;
      let textWarning;
      let tmp16;
      let BRAND = color.color;
      if (undefined === BRAND) {
        BRAND = obj5.BRAND;
      }
      const fontSize = color.fontSize;
      let num = 16;
      const label = color.label;
      if (undefined !== fontSize) {
        num = fontSize;
      }
      const alignLeft = color.alignLeft;
      let alignLeft2 = undefined !== alignLeft && alignLeft;
      const disabled = color.disabled;
      let tmp2 = undefined !== disabled && disabled;
      const loading = color.loading;
      ({ testID, onPress } = color);
      const style = color.style;
      const tmp4 = closure_9();
      const items = [tmp4.text, , ,];
      const LegacyText = native.LegacyText;
      if (obj5.BRAND === BRAND) {
        textWarning = tmp4.textBrand;
      } else if (obj5.DANGER === BRAND) {
        textWarning = tmp4.textDanger;
      } else if (obj5.WARNING === BRAND) {
        textWarning = tmp4.textWarning;
      }
      items[1] = textWarning;
      items[2] = { fontSize: num };
      if (alignLeft2) {
        alignLeft2 = tmp4.alignLeft;
      }
      items[3] = alignLeft2;
      let tmp5Result = <LegacyText style={items}>{label}</LegacyText>;
      if (undefined !== loading && loading) {
        tmp5Result = <_false color={BRAND} />;
      }
      const obj2 = { style: null, children: null };
      if (react.useContext(RedesignCompat.RedesignCompatContext)) {
        obj2.style = tmp4.rowButton;
        const RowButton = RowButton2.RowButton;
        if (!tmp2) {
          tmp2 = tmp3;
        }
        obj2.children = (
          <RowButton label={tmp5Result} onPress={onPress} arrow={false} disabled={tmp2} testID={testID} />
        );
        tmp16 = obj2;
      } else {
        const items1 = [tmp4.sectionBody, tmp2 && tmp4.disabled, style];
        obj2.style = items1;
        const tmp13 = tmp2 || tmp3;
        obj2.children = (
          <React3
            testID={testID}
            accessibilityRole="button"
            onPress={onPress}
            style={tmp4.button}
            disabled={tmp13}
            android_ripple={metroImportDefault(metroRequire)}
          >
            {tmp5Result}
          </React3>
        );
        tmp16 = obj2;
      }
      return <hasOwnProperty {...tmp16} />;
    };
tmp11.Colors = obj5;
const result = size.fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default tmp11;
export const FormCTAButtonColors = obj5;
