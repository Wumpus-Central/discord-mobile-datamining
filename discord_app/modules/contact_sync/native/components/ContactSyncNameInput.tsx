// discord_app/modules/contact_sync/native/components/ContactSyncNameInput.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import ContactSyncErrorDefault from "ContactSyncError.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  flex: { flex: 1 },
  content: { flex: 1, padding: 16, paddingBottom: 0 },
  title: { marginBottom: 8, textAlign: "center" },
  subtitle: { lineHeight: 18, textAlign: "center", marginBottom: 16 },
  input: {
    width: "100%",
    marginTop: 8,
    marginBottom: 12,
    padding: 12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.lg,
  },
  formSubtitle: { lineHeight: 16 },
  button: null,
  error: null,
};
let obj3 = {
  width: "100%",
  marginTop: 8,
  marginBottom: 12,
  padding: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.lg,
};
obj2.button = { flexGrow: 0, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
obj2.error = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexGrow: 0, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ContactSyncNameInput(onRemoveName) {
      const cResult = c.c(53);
      ({ loading, error, prefilledFromContactBook, onNext } = onRemoveName);
      onRemoveName = onRemoveName.onRemoveName;
      let tmp4 = undefined !== prefilledFromContactBook;
      if (tmp4) {
        tmp4 = prefilledFromContactBook;
      }
      const tmp5 = closure_8();
      const tmp6 = _slicedToArray(noop.useState(onRemoveName.initialName), 2);
      value = tmp6[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        let first1 = obj2;
      } else {
        first1 = cResult[0];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(first1).insets;
      if (null != onRemoveName) {
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t.i4jeWR);
          cResult[1] = stringResult;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult1 = intl.string(util.t.PDTjLN);
          cResult[2] = stringResult1;
          let tmp11 = stringResult1;
        } else {
          tmp11 = cResult[2];
        }
        if (cResult[3] !== insets.bottom) {
          const obj3 = { paddingBottom: insets.bottom };
          cResult[3] = insets.bottom;
          cResult[4] = obj3;
          let tmp16 = obj3;
        } else {
          tmp16 = cResult[4];
        }
        if (cResult[5] === tmp5.content) {
          if (cResult[6] === tmp16) {
            let tmp17 = cResult[7];
          }
          if (cResult[8] !== tmp10) {
            const intl3 = util.intl;
            const string = intl3.string;
            let t = util.t;
            if (tmp10) {
              t = t["/OywGQ"];
              let stringResult2 = string(t);
            } else {
              stringResult2 = string(t["sO+NI5"]);
            }
            cResult[8] = tmp10;
            cResult[9] = stringResult2;
          } else {
            if (cResult[10] === tmp5.title) {
              if (cResult[11] === tmp18) {
                let tmp22 = cResult[12];
              }
              if (cResult[13] !== tmp10) {
                const intl4 = util.intl;
                const string2 = intl4.string;
                let t1 = util.t;
                if (tmp10) {
                  t1 = t1["xCHh/t"];
                  let string2Result = string2(t1);
                } else {
                  string2Result = string2(t1.xI496M);
                }
                cResult[13] = tmp10;
                cResult[14] = string2Result;
              } else {
                if (cResult[15] === tmp5.subtitle) {
                  if (cResult[16] === tmp25) {
                    let tmp29 = cResult[17];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj4 = { variant: "eyebrow", color: "interactive-text-default", children: null };
                    const intl5 = util.intl;
                    obj4.children = intl5.string(util.t["42/D2U"]);
                    const tmp34 = timestampProducer(Text_Text.Text, obj4);
                    cResult[18] = tmp34;
                    let tmp32 = tmp34;
                  } else {
                    tmp32 = cResult[18];
                  }
                  if (cResult[19] === value) {
                    if (cResult[20] === tmp5.input) {
                      let tmp35 = cResult[21];
                    }
                    if (cResult[22] === tmp4) {
                      if (cResult[23] === tmp5.formSubtitle) {
                        let tmp38 = cResult[24];
                      }
                      if (cResult[25] === tmp5.flex) {
                        if (cResult[26] === tmp35) {
                          if (cResult[27] === tmp38) {
                            if (cResult[28] === tmp22) {
                              if (cResult[29] === tmp29) {
                                let tmp41 = cResult[30];
                              }
                              let str = "lg";
                              if (tmp10) {
                                str = "md";
                              }
                              if (cResult[31] === value) {
                                if (cResult[32] === onNext) {
                                  let tmp46 = cResult[33];
                                }
                                if (cResult[34] === loading) {
                                  if (cResult[35] === tmp11) {
                                    if (cResult[36] === str) {
                                      if (cResult[37] === tmp46) {
                                        if (cResult[38] === tmp47) {
                                          let tmp48 = cResult[39];
                                        }
                                        if (cResult[40] === tmp10) {
                                          if (cResult[41] === onRemoveName) {
                                            if (cResult[42] === tmp5.button) {
                                              let tmp50 = cResult[43];
                                            }
                                            if (cResult[44] === error) {
                                              if (cResult[45] === tmp5.error) {
                                                let tmp55 = cResult[46];
                                              }
                                              if (cResult[47] === tmp41) {
                                                if (cResult[48] === tmp48) {
                                                  if (cResult[49] === tmp50) {
                                                    if (cResult[50] === tmp55) {
                                                      if (cResult[51] === tmp17) {
                                                        let tmp58 = cResult[52];
                                                      }
                                                      return tmp58;
                                                    }
                                                  }
                                                }
                                              }
                                              class Q {
                                                constructor() {
                                                  return onNext(closure_2);
                                                }
                                              }
                                              tmp61[0] = tmp17;
                                              const items = [tmp41, tmp48, tmp50, tmp55];
                                              tmp61[1] = items;
                                              const tmp62 = React5(View, tmp61);
                                              cResult[47] = tmp41;
                                              cResult[48] = tmp48;
                                              cResult[49] = tmp50;
                                              cResult[50] = tmp55;
                                              cResult[51] = tmp17;
                                              cResult[52] = tmp62;
                                              tmp58 = tmp62;
                                            }
                                            const obj5 = { style: null, error: null };
                                            class Q {
                                              constructor() {
                                                return onNext(closure_2);
                                              }
                                            }
                                            obj5.error = error;
                                            const tmp57 = timestampProducer(ContactSyncErrorDefault, obj5);
                                            cResult[44] = error;
                                            cResult[45] = tmp5.error;
                                            cResult[46] = tmp57;
                                            tmp55 = tmp57;
                                          }
                                        }
                                        let tmp51 = null;
                                        if (tmp10) {
                                          const obj6 = { style: tmp5.button, children: null };
                                          class Q {
                                            constructor() {
                                              return onNext(closure_2);
                                            }
                                          }
                                          const intl6 = util.intl;
                                          tmp54[2] = intl6.string(util.t["91RssO"]);
                                          tmp54[3] = function onPress() {
                                            let tmp;
                                            if (onRemoveName != null) {
                                              tmp = onRemoveName();
                                            }
                                            return tmp;
                                          };
                                          obj6.children = timestampProducer(components_Button_Button.Button, tmp54);
                                          tmp51 = timestampProducer(View, obj6);
                                        }
                                        class Q {
                                          constructor() {
                                            return onNext(closure_2);
                                          }
                                        }
                                        cResult[40] = tmp10;
                                        cResult[41] = onRemoveName;
                                        cResult[42] = tmp5.button;
                                        cResult[43] = tmp51;
                                        tmp50 = tmp51;
                                      }
                                    }
                                  }
                                }
                                class Q {
                                  constructor() {
                                    return onNext(closure_2);
                                  }
                                }
                                const obj7 = {
                                  variant: "primary",
                                  size: str,
                                  text: tmp11,
                                  onPress: tmp46,
                                  loading,
                                  disabled: "" === value,
                                };
                                const tmp49 = timestampProducer(components_Button_Button.Button, obj7);
                                cResult[34] = loading;
                                cResult[35] = tmp11;
                                cResult[36] = str;
                                cResult[37] = tmp46;
                                cResult[38] = "" === value;
                                cResult[39] = tmp49;
                                tmp48 = tmp49;
                              }
                              class Q {
                                constructor() {
                                  return onNext(closure_2);
                                }
                              }
                              cResult[31] = value;
                              cResult[32] = onNext;
                              cResult[33] = Q;
                              tmp46 = Q;
                            }
                          }
                        }
                      }
                      tmp44[0] = tmp5.flex;
                      const items1 = [tmp22, tmp29, tmp32, tmp35, tmp38];
                      tmp44[1] = items1;
                      const tmp45 = React5(View, tmp44);
                      cResult[25] = tmp5.flex;
                      cResult[26] = tmp35;
                      cResult[27] = tmp38;
                      cResult[28] = tmp22;
                      cResult[29] = tmp29;
                      cResult[30] = tmp45;
                      tmp41 = tmp45;
                    }
                    let tmp39 = null;
                    if (tmp4) {
                      const obj8 = {
                        style: tmp5.formSubtitle,
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: null,
                      };
                      class Q {
                        constructor() {
                          return onNext(closure_2);
                        }
                      }
                      obj8.children = obj9.string(util.t.bCQt9K);
                      tmp39 = timestampProducer(Text_Text.Text, obj8);
                    }
                    cResult[22] = tmp4;
                    cResult[23] = tmp5.formSubtitle;
                    cResult[24] = tmp39;
                    tmp38 = tmp39;
                  }
                  const obj10 = {
                    value,
                    onChangeText: tmp6[1],
                    style: tmp5.input,
                    autoFocus: true,
                    showBorder: false,
                    showTopContainer: false,
                    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
                    autoCorrect: true,
                    autoComplete: "name",
                    textContentType: "name",
                  };
                  const tmp37 = timestampProducer(native.InputView, obj10);
                  cResult[19] = value;
                  cResult[20] = tmp5.input;
                  cResult[21] = tmp37;
                  tmp35 = tmp37;
                }
                const obj11 = { style: null, variant: "text-sm/medium", color: "text-default", children: cResult[14] };
                const tmp31 = timestampProducer(Text_Text.Text, obj11);
                cResult[15] = tmp5.subtitle;
                cResult[16] = cResult[14];
                cResult[17] = tmp31;
                tmp29 = tmp31;
              }
            }
            const obj12 = {
              style: null,
              accessibilityRole: "header",
              variant: "heading-xl/extrabold",
              color: "mobile-text-heading-primary",
              children: cResult[9],
            };
            const tmp24 = timestampProducer(Text_Text.Text, obj12);
            cResult[10] = tmp5.title;
            cResult[11] = cResult[9];
            cResult[12] = tmp24;
            tmp22 = tmp24;
          }
        }
        const items2 = [tmp5.content, tmp16];
        cResult[5] = tmp5.content;
        cResult[6] = tmp16;
        cResult[7] = items2;
        tmp17 = items2;
      }
    }
  : function ContactSyncNameInput(prefilledFromContactBook) {
      let flag = prefilledFromContactBook.prefilledFromContactBook;
      ({ loading, error, initialName } = prefilledFromContactBook);
      if (flag === undefined) {
        flag = false;
      }
      ({ onNext: require, onRemoveName } = prefilledFromContactBook);
      let tmp = closure_8();
      const tmp2 = _slicedToArray(noop.useState(initialName), 2);
      value = tmp2[0];
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (null != onRemoveName) {
        let stringResult = string(t.i4jeWR);
        let tmp9 = require;
      } else {
        stringResult = string(t.PDTjLN);
        tmp9 = require;
      }
      const obj = { style: null, children: null };
      const items = [
        tmp.content,
        { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom },
      ];
      obj.style = items;
      const obj2 = { style: tmp.flex, children: null };
      const obj3 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl2 = tmp9(1126).intl;
      const string2 = intl2.string;
      const t2 = tmp9(1126).t;
      if (null != onRemoveName) {
        let string2Result = string2(t2["/OywGQ"]);
      } else {
        string2Result = string2(t2["sO+NI5"]);
      }
      obj3.children = string2Result;
      const items1 = [timestampProducer(tmp9(5086).Text, obj3), , , ,];
      const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
      const intl3 = tmp9(1126).intl;
      const string3 = intl3.string;
      const t3 = tmp9(1126).t;
      if (null != onRemoveName) {
        let string3Result = string3(t3["xCHh/t"]);
      } else {
        string3Result = string3(t3.xI496M);
      }
      obj4.children = string3Result;
      items1[1] = timestampProducer(tmp9(5086).Text, obj4);
      const obj5 = { variant: "eyebrow", color: "interactive-text-default", children: null };
      const intl4 = tmp9(1126).intl;
      obj5.children = intl4.string(tmp9(1126).t["42/D2U"]);
      items1[2] = timestampProducer(tmp9(5086).Text, obj5);
      items1[3] = timestampProducer(tmp9(1200).InputView, {
        value,
        onChangeText: tmp2[1],
        style: tmp.input,
        autoFocus: true,
        showBorder: false,
        showTopContainer: false,
        clearButtonVisibility: tmp9(1200).ClearButtonVisibility.WITH_CONTENT,
        autoCorrect: true,
        autoComplete: "name",
        textContentType: "name",
      });
      let tmp12Result = null;
      if (flag) {
        const obj7 = { style: tmp.formSubtitle, variant: "text-xs/medium", color: "text-default", children: null };
        const intl5 = tmp9(1126).intl;
        obj7.children = intl5.string(tmp9(1126).t.bCQt9K);
        tmp12Result = timestampProducer(tmp9(5086).Text, obj7);
      }
      items1[4] = tmp12Result;
      obj2.children = items1;
      const items2 = [React5(View, obj2), , ,];
      let str = "lg";
      if (null != onRemoveName) {
        str = "md";
      }
      items2[1] = timestampProducer(tmp9(5375).Button, {
        variant: "primary",
        size: str,
        text: stringResult,
        onPress() {
          return require(first);
        },
        loading,
        disabled: "" === value,
      });
      let tmp12Result2 = null;
      if (null != onRemoveName) {
        const obj9 = { style: tmp.button, children: null };
        const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl6 = tmp9(1126).intl;
        obj10.text = intl6.string(tmp9(1126).t["91RssO"]);
        obj10.onPress = function onPress() {
          let tmp;
          if (onRemoveName != null) {
            tmp = onRemoveName();
          }
          return tmp;
        };
        obj9.children = timestampProducer(tmp9(5375).Button, obj10);
        tmp12Result2 = timestampProducer(View, obj9);
      }
      items2[2] = tmp12Result2;
      items2[3] = timestampProducer(ContactSyncErrorDefault, { style: tmp.error, error });
      obj.children = items2;
      return React5(View, obj);
    };
