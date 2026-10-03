// discord_app/design/void/Form/native/FreeFormInputGroup.tsx
import c from "../../../../../_runtime/00576_c.js";
import native from "../../native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import TextInput from "../../../components/TextInput/native/TextInput.native.tsx";
import FreeFormLabelDefault from "FreeFormLabel.tsx";
import FreeFormTextInputDefault from "FreeFormTextInput.tsx";
import FreeFormErrorLabelDefault from "FreeFormErrorLabel.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "style",
  "label",
  "error",
  "value",
  "hint",
  "textStyle",
  "enableAndroidSanitizedInputWorkaround",
  "secureTextEntry",
  "keyboardType",
  "accessibilityLabel",
];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({
  label: { marginBottom: 8 },
  input: { flexGrow: 1, marginBottom: 8 },
  error: { marginBottom: 8 },
  hint: { marginBottom: 8 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(56);
        if (cResult[0] !== arg0) {
          ({
            style,
            label,
            error,
            value,
            hint,
            textStyle,
            enableAndroidSanitizedInputWorkaround,
            secureTextEntry,
            keyboardType,
            accessibilityLabel,
          } = arg0);
          const tmp17 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = accessibilityLabel;
          cResult[2] = error;
          cResult[3] = hint;
          cResult[4] = keyboardType;
          cResult[5] = label;
          cResult[6] = tmp17;
          cResult[7] = secureTextEntry;
          cResult[8] = style;
          cResult[9] = enableAndroidSanitizedInputWorkaround;
          cResult[10] = textStyle;
          cResult[11] = value;
          let tmp14 = value;
          let tmp13 = textStyle;
          let tmp12 = enableAndroidSanitizedInputWorkaround;
          let tmp11 = style;
          let tmp10 = secureTextEntry;
          let tmp9 = tmp17;
          let tmp8 = label;
          let tmp7 = keyboardType;
          let tmp6 = hint;
          let tmp5 = error;
          let tmp4 = accessibilityLabel;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
          tmp9 = cResult[6];
          tmp10 = cResult[7];
          tmp11 = cResult[8];
          tmp12 = cResult[9];
          tmp13 = cResult[10];
          tmp14 = cResult[11];
        }
        const tmp19 = closure_9();
        if (cResult[12] === (undefined !== tmp12 && tmp12)) {
          if (cResult[13] === tmp10) {
            let tmp20 = cResult[14];
          }
          if (!tmp18) {
            let str = tmp7;
          } else {
            PlatformUtils;
            str = "visible-password";
          }
          const context = noop.useContext(RedesignCompat.RedesignCompatContext);
          const id = noop.useId();
          if (context) {
            ({ placeholder, onChangeText, clearButtonVisibility } = tmp9);
            const tmp53 = clearButtonVisibility !== native.ClearButtonVisibility.WITH_CONTENT;
            if (cResult[15] === str) {
              if (cResult[16] === tmp20) {
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp6) {
                    if (cResult[19] === tmp8) {
                      if (cResult[20] === onChangeText) {
                        if (cResult[21] === placeholder) {
                          if (cResult[22] === tmp9.autoCapitalize) {
                            if (cResult[23] === tmp11) {
                              if (cResult[24] === tmp53) {
                                if (cResult[25] === tmp14) {
                                  let tmp54 = cResult[26];
                                }
                                return tmp54;
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
            const obj2 = {
              containerStyle: tmp11,
              value: tmp14,
              label: tmp8,
              errorMessage: tmp5,
              description: tmp6,
              placeholder,
              onChange: onChangeText,
              clearable: tmp53,
              keyboardType: str,
              secureTextEntry: tmp20,
              autoCapitalize: tmp9.autoCapitalize,
            };
            const tmp56 = React5(TextInput.TextInput, obj2);
            cResult[15] = str;
            cResult[16] = tmp20;
            cResult[17] = tmp5;
            cResult[18] = tmp6;
            cResult[19] = tmp8;
            cResult[20] = onChangeText;
            cResult[21] = placeholder;
            cResult[22] = tmp9.autoCapitalize;
            cResult[23] = tmp11;
            cResult[24] = tmp53;
            cResult[25] = tmp14;
            cResult[26] = tmp56;
            tmp54 = tmp56;
          } else {
            if (cResult[27] === tmp8) {
              if (cResult[28] === id) {
                if (cResult[29] === tmp19.label) {
                  let tmp25 = cResult[30];
                }
                if (tmp4 == null) {
                  if (null == tmp8) {
                    const tmp30 = tmp8;
                  } else {
                    PlatformUtils;
                  }
                  tmp4 = tmp30;
                }
                if (cResult[31] === tmp19.input) {
                  if (cResult[32] === tmp13) {
                    let tmp32 = cResult[33];
                  }
                  if (cResult[34] === str) {
                    if (cResult[35] === tmp20) {
                      if (cResult[36] === id) {
                        if (cResult[37] === ref) {
                          if (cResult[38] === tmp9) {
                            if (cResult[39] === tmp4) {
                              if (cResult[40] === tmp31) {
                                if (cResult[41] === tmp32) {
                                  if (cResult[42] === tmp14) {
                                    let tmp34 = cResult[43];
                                  }
                                  if (cResult[44] === tmp5) {
                                    if (cResult[45] === tmp19.error) {
                                      let tmp42 = cResult[46];
                                    }
                                    if (cResult[47] === tmp6) {
                                      if (cResult[48] === tmp19.hint) {
                                        let tmp46 = cResult[49];
                                      }
                                      if (cResult[50] === tmp11) {
                                        if (cResult[51] === tmp25) {
                                          if (cResult[52] === tmp34) {
                                            if (cResult[53] === tmp42) {
                                              if (cResult[54] === tmp46) {
                                                let tmp49 = cResult[55];
                                              }
                                              return tmp49;
                                            }
                                          }
                                        }
                                      }
                                      const obj3 = { style: tmp11, children: null };
                                      const items = [tmp25, tmp34, tmp42, tmp46];
                                      obj3.children = items;
                                      const tmp52 = closure_1_8(View, obj3);
                                      cResult[50] = tmp11;
                                      cResult[51] = tmp25;
                                      cResult[52] = tmp34;
                                      cResult[53] = tmp42;
                                      cResult[54] = tmp46;
                                      cResult[55] = tmp52;
                                      tmp49 = tmp52;
                                    }
                                    let tmp47 = null;
                                    if (null != tmp6) {
                                      const obj4 = {
                                        style: tmp19.hint,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: tmp6,
                                      };
                                      tmp47 = React5(Text_Text.Text, obj4);
                                    }
                                    cResult[47] = tmp6;
                                    cResult[48] = tmp19.hint;
                                    cResult[49] = tmp47;
                                    tmp46 = tmp47;
                                  }
                                  let tmp43 = null;
                                  if (null != tmp5) {
                                    const obj5 = { style: tmp19.error, children: tmp5 };
                                    tmp43 = React5(FreeFormErrorLabelDefault, obj5);
                                  }
                                  cResult[44] = tmp5;
                                  cResult[45] = tmp19.error;
                                  cResult[46] = tmp43;
                                  tmp42 = tmp43;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj6 = {};
                  const merged = Object.assign(tmp9);
                  obj6.accessibilityLabel = tmp4;
                  obj6.accessibilityLabelledBy = id;
                  obj6.error = tmp31;
                  obj6.ref = ref;
                  obj6.value = tmp14;
                  obj6.secureTextEntry = tmp20;
                  obj6.keyboardType = str;
                  obj6.style = tmp32;
                  const tmp41 = React5(FreeFormTextInputDefault, obj6);
                  cResult[34] = str;
                  cResult[35] = tmp20;
                  cResult[36] = id;
                  cResult[37] = ref;
                  cResult[38] = tmp9;
                  cResult[39] = tmp4;
                  cResult[40] = tmp31;
                  cResult[41] = tmp32;
                  cResult[42] = tmp14;
                  cResult[43] = tmp41;
                  tmp34 = tmp41;
                }
                const items1 = [tmp19.input, tmp13];
                cResult[31] = tmp19.input;
                cResult[32] = tmp13;
                cResult[33] = items1;
                tmp32 = items1;
              }
            }
            let tmp26 = null;
            if (null != tmp8) {
              const obj7 = { style: tmp19.label, nativeID: id, children: tmp8 };
              tmp26 = React5(FreeFormLabelDefault, obj7);
            }
            cResult[27] = tmp8;
            cResult[28] = id;
            cResult[29] = tmp19.label;
            cResult[30] = tmp26;
            tmp25 = tmp26;
          }
        }
        let isAndroidResult = tmp18;
        if (undefined !== tmp12 && tmp12) {
          isAndroidResult = PlatformUtils.isAndroid();
          const tmpResult4 = PlatformUtils;
        }
        if (!isAndroidResult) {
          isAndroidResult = tmp10;
        }
        cResult[12] = undefined !== tmp12 && tmp12;
        cResult[13] = tmp10;
        cResult[14] = isAndroidResult;
        tmp20 = isAndroidResult;
      }
    : (accessibilityLabel, ref) => {
        ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = accessibilityLabel);
        if (enableAndroidSanitizedInputWorkaround === undefined) {
          enableAndroidSanitizedInputWorkaround = false;
        }
        accessibilityLabel = accessibilityLabel.accessibilityLabel;
        ({ secureTextEntry, keyboardType } = accessibilityLabel);
        const merged = Object.assign(
          accessibilityLabel,
          Object.assign({
            style: 0,
            label: 0,
            error: 0,
            value: 0,
            hint: 0,
            textStyle: 0,
            enableAndroidSanitizedInputWorkaround: 0,
            secureTextEntry: 0,
            keyboardType: 0,
            accessibilityLabel: 0,
          }),
        );
        const tmp2 = closure_9();
        let isAndroidResult = enableAndroidSanitizedInputWorkaround;
        if (enableAndroidSanitizedInputWorkaround) {
          isAndroidResult = PlatformUtils.isAndroid();
        }
        if (!isAndroidResult) {
          isAndroidResult = secureTextEntry;
        }
        if (!enableAndroidSanitizedInputWorkaround) {
          let str = keyboardType;
        } else {
          PlatformUtils;
          str = "visible-password";
        }
        const context = noop.useContext(RedesignCompat.RedesignCompatContext);
        const id = noop.useId();
        if (context) {
          ({ placeholder, onChangeText, clearButtonVisibility } = merged);
          const obj3 = {
            containerStyle: style,
            value,
            label,
            errorMessage: error,
            description: hint,
            placeholder,
            onChange: onChangeText,
            clearable: clearButtonVisibility !== native.ClearButtonVisibility.WITH_CONTENT,
            keyboardType: str,
            secureTextEntry: isAndroidResult,
            autoCapitalize: merged.autoCapitalize,
          };
          return React5(TextInput.TextInput, obj3);
        } else {
          const obj4 = { style, children: null };
          let tmp14 = null;
          if (null != label) {
            const obj5 = { style: tmp2.label, nativeID: id, children: label };
            tmp14 = React5(FreeFormLabelDefault, obj5);
          }
          const items = [tmp14, , ,];
          const obj6 = {};
          const merged1 = Object.assign(merged);
          if (accessibilityLabel == null) {
            if (null != label) {
              PlatformUtils;
            }
            accessibilityLabel = label;
          }
          obj6.accessibilityLabel = accessibilityLabel;
          obj6.accessibilityLabelledBy = id;
          obj6.error = null != error;
          obj6.ref = ref;
          obj6.value = value;
          obj6.secureTextEntry = isAndroidResult;
          obj6.keyboardType = str;
          const items1 = [tmp2.input, accessibilityLabel.textStyle];
          obj6.style = items1;
          items[1] = React5(FreeFormTextInputDefault, obj6);
          let tmp17Result = null;
          if (null != error) {
            const obj7 = { style: tmp2.error, children: error };
            tmp17Result = React5(FreeFormErrorLabelDefault, obj7);
          }
          items[2] = tmp17Result;
          let tmp17Result2 = null;
          if (null != hint) {
            const obj8 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
            tmp17Result2 = React5(Text_Text.Text, obj8);
          }
          items[3] = tmp17Result2;
          obj4.children = items;
          return closure_1_8(View, obj4);
        }
      },
);
