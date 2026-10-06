// === Module 12361: ContactSyncNameInput ===

// Module 12361 (ContactSyncNameInput)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import ContactSyncErrorDefault from "ContactSyncError" /* 12358 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, content: { flex: 1, padding: 16, paddingBottom: 0 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center", marginBottom: 16 }, input: obj2, formSubtitle: { lineHeight: 16 }, button: obj3, error: { marginTop: 8 } };
obj2 = { width: "100%", marginTop: 8, marginBottom: 12, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 0, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onRemoveName) => {
  let Button;
  let error;
  let first;
  let first1;
  let intl5;
  let loading;
  let onNext;
  let prefilledFromContactBook;
  let tmp12;
  let tmp16;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(53);
  ({ loading, error, prefilledFromContactBook, onNext } = onRemoveName);
  onRemoveName = onRemoveName.onRemoveName;
  let tmp4 = undefined !== prefilledFromContactBook;
  const initialName = onRemoveName.initialName;
  if (tmp4) {
    tmp4 = prefilledFromContactBook;
  }
  const tmp5 = closure_8();
  [first, tmp8] = react.useState(initialName);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first1).insets;
  if (null != onRemoveName) {
    let tmp14;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl7.intl;
      const stringResult = intl2.string(intl7.t.i4jeWR);
      cResult[1] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[1];
    }
    tmp12 = tmp14;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl7.intl;
      const stringResult1 = intl.string(intl7.t.PDTjLN);
      cResult[2] = stringResult1;
      tmp12 = stringResult1;
    } else {
      tmp12 = cResult[2];
    }
  }
  if (cResult[3] !== insets.bottom) {
    const obj3 = { paddingBottom: insets.bottom };
    cResult[3] = insets.bottom;
    cResult[4] = obj3;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === tmp5.content) {
    let tmp17;
    let tmp18;
    if (cResult[6] === tmp16) {
      tmp17 = cResult[7];
    }
    if (cResult[8] !== (null != onRemoveName)) {
      let stringResult2;
      const intl3 = intl7.intl;
      const string = intl3.string;
      const t = intl7.t;
      if (null != onRemoveName) {
        stringResult2 = string(t["/OywGQ"]);
      } else {
        stringResult2 = string(t["sO+NI5"]);
      }
      cResult[8] = null != onRemoveName;
      cResult[9] = stringResult2;
      tmp18 = stringResult2;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] === tmp5.title) {
      let tmp20;
      let tmp24;
      if (cResult[11] === tmp18) {
        tmp20 = cResult[12];
      }
      if (cResult[13] !== (null != onRemoveName)) {
        let string2Result;
        const intl4 = intl7.intl;
        const string2 = intl4.string;
        const t2 = intl7.t;
        if (null != onRemoveName) {
          string2Result = string2(t2["xCHh/t"]);
        } else {
          string2Result = string2(t2.xI496M);
        }
        cResult[13] = null != onRemoveName;
        cResult[14] = string2Result;
        tmp24 = string2Result;
      } else {
        tmp24 = cResult[14];
      }
      if (cResult[15] === tmp5.subtitle) {
        let tmp26;
        let tmp30;
        if (cResult[16] === tmp24) {
          tmp26 = cResult[17];
        }
        const _Symbol3 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "eyebrow", color: "interactive-text-default", children: intl5.string(intl7.t["42/D2U"]) };
          const Text = Text_Text.Text;
          intl5 = intl7.intl;
          const tmp32 = metroRequire(Text, obj4);
          cResult[18] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[18];
        }
        if (cResult[19] === first) {
          let tmp33;
          if (cResult[20] === tmp5.input) {
            tmp33 = cResult[21];
          }
          if (cResult[22] === tmp4) {
            let tmp36;
            if (cResult[23] === tmp5.formSubtitle) {
              tmp36 = cResult[24];
            }
            if (cResult[25] === tmp5.flex) {
              if (cResult[26] === tmp33) {
                if (cResult[27] === tmp36) {
                  if (cResult[28] === tmp20) {
                    let tmp39;
                    if (cResult[29] === tmp26) {
                      tmp39 = cResult[30];
                    }
                    let str = "lg";
                    if (null != onRemoveName) {
                      str = "md";
                    }
                    if (cResult[31] === first) {
                      let tmp44;
                      if (cResult[32] === onNext) {
                        tmp44 = cResult[33];
                      }
                      if (cResult[34] === loading) {
                        if (cResult[35] === tmp12) {
                          if (cResult[36] === str) {
                            if (cResult[37] === tmp44) {
                              let tmp46;
                              if (cResult[38] === "" === first) {
                                tmp46 = cResult[39];
                              }
                              if (cResult[40] === null != onRemoveName) {
                                if (cResult[41] === onRemoveName) {
                                  let tmp48;
                                  if (cResult[42] === tmp5.button) {
                                    tmp48 = cResult[43];
                                  }
                                  if (cResult[44] === error) {
                                    let tmp53;
                                    if (cResult[45] === tmp5.error) {
                                      tmp53 = cResult[46];
                                    }
                                    if (cResult[47] === tmp39) {
                                      if (cResult[48] === tmp46) {
                                        if (cResult[49] === tmp48) {
                                          if (cResult[50] === tmp53) {
                                            let tmp56;
                                            if (cResult[51] === tmp17) {
                                              tmp56 = cResult[52];
                                            }
                                            return tmp56;
                                          }
                                        }
                                      }
                                    }
                                    class Q {
                                      constructor() {
                                        return onNext(first);
                                      }
                                    }
                                    tmp59[0] = tmp17;
                                    const items = [tmp39, tmp46, tmp48, tmp53];
                                    tmp59[1] = items;
                                    const tmp60 = metroImportDefault(View, tmp59);
                                    cResult[47] = tmp39;
                                    cResult[48] = tmp46;
                                    cResult[49] = tmp48;
                                    cResult[50] = tmp53;
                                    cResult[51] = tmp17;
                                    cResult[52] = tmp60;
                                    tmp56 = tmp60;
                                  }
                                  const obj5 = { style: null, error };
                                  class Q {
                                    constructor() {
                                      return onNext(first);
                                    }
                                  }
                                  const tmp55 = metroRequire(ContactSyncErrorDefault, obj5);
                                  cResult[44] = error;
                                  cResult[45] = tmp5.error;
                                  cResult[46] = tmp55;
                                  tmp53 = tmp55;
                                }
                              }
                              let tmp49 = null;
                              if (null != onRemoveName) {
                                const obj6 = { style: tmp5.button, children: metroRequire(Button, tmp52) };
                                class Q {
                                  constructor() {
                                    return onNext(first);
                                  }
                                }
                                Button = components_Button_Button.Button;
                                const intl6 = intl7.intl;
                                tmp52[2] = intl6.string(intl7.t["91RssO"]);
                                tmp52[3] = function onPress() {
                                  let tmp;
                                  if (onRemoveName != null) {
                                    tmp = onRemoveName();
                                  }
                                  return tmp;
                                };
                                tmp49 = metroRequire(View, obj6);
                              }
                              class Q {
                                constructor() {
                                  return onNext(first);
                                }
                              }
                              cResult[40] = null != onRemoveName;
                              cResult[41] = onRemoveName;
                              cResult[42] = tmp5.button;
                              cResult[43] = tmp49;
                              tmp48 = tmp49;
                            }
                          }
                        }
                      }
                      class Q {
                        constructor() {
                          return onNext(first);
                        }
                      }
                      const obj8 = { variant: "primary", size: str, text: tmp12, onPress: tmp44, loading, disabled: "" === first };
                      const tmp47 = metroRequire(components_Button_Button.Button, obj8);
                      cResult[34] = loading;
                      cResult[35] = tmp12;
                      cResult[36] = str;
                      cResult[37] = tmp44;
                      cResult[38] = "" === first;
                      cResult[39] = tmp47;
                      tmp46 = tmp47;
                    }
                    class Q {
                      constructor() {
                        return onNext(first);
                      }
                    }
                    cResult[31] = first;
                    cResult[32] = onNext;
                    cResult[33] = Q;
                    tmp44 = Q;
                  }
                }
              }
            }
            tmp42[0] = tmp5.flex;
            const items1 = [tmp20, tmp26, tmp30, tmp33, tmp36];
            tmp42[1] = items1;
            const tmp43 = metroImportDefault(View, tmp42);
            cResult[25] = tmp5.flex;
            cResult[26] = tmp33;
            cResult[27] = tmp36;
            cResult[28] = tmp20;
            cResult[29] = tmp26;
            cResult[30] = tmp43;
            tmp39 = tmp43;
          }
          let tmp37 = null;
          if (tmp4) {
            const obj9 = { style: tmp5.formSubtitle, variant: "text-xs/medium", color: "text-default", children: obj7.string(intl7.t.bCQt9K) };
            const Text2 = Text_Text.Text;
            class Q {
              constructor() {
                return onNext(first);
              }
            }
            tmp37 = metroRequire(Text2, obj9);
          }
          cResult[22] = tmp4;
          cResult[23] = tmp5.formSubtitle;
          cResult[24] = tmp37;
          tmp36 = tmp37;
        }
        const obj10 = { value: first, onChangeText: tmp8, style: tmp5.input, autoFocus: true, showBorder: false, showTopContainer: false, clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" };
        const InputView = native.InputView;
        const tmp35 = metroRequire(InputView, obj10);
        cResult[19] = first;
        cResult[20] = tmp5.input;
        cResult[21] = tmp35;
        tmp33 = tmp35;
      }
      tmp28[0] = tmp5.subtitle;
      tmp28[3] = tmp24;
      const tmp29 = metroRequire(Text_Text.Text, tmp28);
      cResult[15] = tmp5.subtitle;
      cResult[16] = tmp24;
      cResult[17] = tmp29;
      tmp26 = tmp29;
    }
    tmp22[0] = tmp5.title;
    tmp22[4] = tmp18;
    const tmp23 = metroRequire(Text_Text.Text, tmp22);
    cResult[10] = tmp5.title;
    cResult[11] = tmp18;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const items2 = [tmp5.content, tmp16];
  cResult[5] = tmp5.content;
  cResult[6] = tmp16;
  cResult[7] = items2;
  tmp17 = items2;
}) : ((prefilledFromContactBook) => {
  let Button2;
  let closure_129_0;
  let error;
  let first;
  let initialName;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let loading;
  let obj10;
  let onRemoveName;
  let string2Result;
  let string3Result;
  let stringResult;
  let tmp10;
  let tmp4;
  let flag = prefilledFromContactBook.prefilledFromContactBook;
  ({ loading, error, initialName } = prefilledFromContactBook);
  if (flag === undefined) {
    flag = false;
  }
  ({ onNext: closure_129_0, onRemoveName } = prefilledFromContactBook);
  first = undefined;
  let tmp = closure_8();
  [first, tmp4] = react.useState(initialName);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (null != onRemoveName) {
    stringResult = string(t.i4jeWR);
    tmp10 = require;
  } else {
    stringResult = string(t.PDTjLN);
    tmp10 = require;
  }
  const obj = { style: items, children: items2 };
  items = [tmp.content, { paddingBottom: insets.bottom }];
  const obj2 = { style: tmp.flex, children: items1 };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: string2Result };
  const Text = tmp10(4892).Text;
  const intl2 = tmp10(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp10(1126).t;
  if (null != onRemoveName) {
    string2Result = string2(t2["/OywGQ"]);
  } else {
    string2Result = string2(t2["sO+NI5"]);
  }
  items1 = [metroRequire(Text, obj3), , , , ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: string3Result };
  const Text2 = tmp10(4892).Text;
  const intl3 = tmp10(1126).intl;
  const string3 = intl3.string;
  const t3 = tmp10(1126).t;
  if (null != onRemoveName) {
    string3Result = string3(t3["xCHh/t"]);
  } else {
    string3Result = string3(t3.xI496M);
  }
  items1[1] = metroRequire(Text2, obj4);
  const obj5 = { variant: "eyebrow", color: "interactive-text-default", children: intl4.string(tmp10(1126).t["42/D2U"]) };
  const Text3 = tmp10(4892).Text;
  intl4 = tmp10(1126).intl;
  items1[2] = metroRequire(Text3, obj5);
  const obj6 = { value: first, onChangeText: tmp4, style: tmp.input, autoFocus: true, showBorder: false, showTopContainer: false, clearButtonVisibility: tmp10(1188).ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" };
  const InputView = tmp10(1188).InputView;
  items1[3] = metroRequire(InputView, obj6);
  let tmp13Result = null;
  if (flag) {
    const obj7 = { style: tmp.formSubtitle, variant: "text-xs/medium", color: "text-default", children: intl5.string(tmp10(1126).t.bCQt9K) };
    const Text4 = tmp10(4892).Text;
    intl5 = tmp10(1126).intl;
    tmp13Result = metroRequire(Text4, obj7);
  }
  items1[4] = tmp13Result;
  items2 = [metroImportDefault(View, obj2), , , ];
  let str = "lg";
  const Button = tmp10(5601).Button;
  if (null != onRemoveName) {
    str = "md";
  }
  const obj8 = {
    variant: "primary",
    size: str,
    text: stringResult,
    onPress() {
      return closure_1_0(first);
    },
    loading,
    disabled: "" === first
  };
  items2[1] = metroRequire(Button, obj8);
  let tmp13Result2 = null;
  if (null != onRemoveName) {
    const obj9 = { style: tmp.button, children: metroRequire(Button2, obj10) };
    obj10 = {
      variant: "secondary",
      size: "md",
      text: intl6.string(tmp10(1126).t["91RssO"]),
      onPress() {
          let tmp;
          if (onRemoveName != null) {
            tmp = onRemoveName();
          }
          return tmp;
        }
    };
    Button2 = tmp10(5601).Button;
    intl6 = tmp10(1126).intl;
    tmp13Result2 = metroRequire(View, obj9);
  }
  items2[2] = tmp13Result2;
  const obj11 = { style: tmp.error, error };
  items2[3] = metroRequire(ContactSyncErrorDefault, obj11);
  return metroImportDefault(View, obj);
});
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default tmp4;