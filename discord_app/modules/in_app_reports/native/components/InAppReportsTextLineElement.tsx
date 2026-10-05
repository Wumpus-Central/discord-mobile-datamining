// === Module 8300: InAppReportsTextLineElement ===

// Module 8300 (InAppReportsTextLineElement)
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import CustomMarkupAll from "CustomMarkup" /* 5784 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c3, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ View: metroImportDefault, Linking: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, smsNumberContainer: obj2, smsNumberContainerSuccess: obj3, startButtonContainer: { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 } };
obj2 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((element) => {
  let body;
  let closure_3;
  let first;
  let items;
  let sms;
  let title;
  let tmp14;
  let tmp6;
  let obj = sms(576);
  const cResult = obj.c(51);
  const data = element.element.data;
  ({ title, body, sms } = data);
  const sms_body = data.sms_body;
  const is_localized = data.is_localized;
  const tmp4 = closure_11();
  [tmp6, importAll] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const obj = CustomMarkupAll;
      return obj.getParser();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp8 = sms_body(5984)(first);
  if (is_localized) {
    if (cResult[1] !== sms) {
      class T {
        constructor() {
          const obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          importAll(true);
        }
      }
      cResult[1] = sms;
      cResult[2] = T;
    } else {
      class T {
        constructor() {
          const obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          importAll(true);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          const obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          importAll(true);
        }
      }
      cResult[3] = tmp11;
    } else {
      class T {
        constructor() {
          const obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          importAll(true);
        }
      }
    }
    dependencyMap = tmp11;
    if (cResult[4] === sms) {
      class T {
        constructor() {
          const obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          importAll(true);
        }
      }
      if (cResult[7] === tmp6) {
        class T {
          constructor() {
            const obj = ClipboardUtils;
            obj.copy(sms);
            const obj2 = ToastUtils;
            const result = obj2.presentCopiedToClipboard();
            importAll(true);
          }
        }
        if (cResult[10] === tmp4.header) {
          class T {
            constructor() {
              const obj = ClipboardUtils;
              obj.copy(sms);
              const obj2 = ToastUtils;
              const result = obj2.presentCopiedToClipboard();
              importAll(true);
            }
          }
          if (cResult[13] === body) {
            class T {
              constructor() {
                const obj = ClipboardUtils;
                obj.copy(sms);
                const obj2 = ToastUtils;
                const result = obj2.presentCopiedToClipboard();
                importAll(true);
              }
            }
            if (cResult[16] === tmp4.description) {
              class T {
                constructor() {
                  const obj = ClipboardUtils;
                  obj.copy(sms);
                  const obj2 = ToastUtils;
                  const result = obj2.presentCopiedToClipboard();
                  importAll(true);
                }
              }
              if (cResult[19] === tmp14) {
                class T {
                  constructor() {
                    const obj = ClipboardUtils;
                    obj.copy(sms);
                    const obj2 = ToastUtils;
                    const result = obj2.presentCopiedToClipboard();
                    importAll(true);
                  }
                }
                if (cResult[22] !== sms) {
                  class T {
                    constructor() {
                      const obj = ClipboardUtils;
                      obj.copy(sms);
                      const obj2 = ToastUtils;
                      const result = obj2.presentCopiedToClipboard();
                      importAll(true);
                    }
                  }
                  let obj2 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
                  cResult[22] = sms;
                  cResult[23] = closure_9(sms(4886).Text, obj2);
                  const tmp27 = closure_9(sms(4886).Text, obj2);
                } else {
                  class T {
                    constructor() {
                      const obj = ClipboardUtils;
                      obj.copy(sms);
                      const obj2 = ToastUtils;
                      const result = obj2.presentCopiedToClipboard();
                      importAll(true);
                    }
                  }
                }
                if (cResult[24] !== tmp6) {
                  class T {
                    constructor() {
                      const obj = ClipboardUtils;
                      obj.copy(sms);
                      const obj2 = ToastUtils;
                      const result = obj2.presentCopiedToClipboard();
                      importAll(true);
                    }
                  }
                  const string = tmp29.string;
                  const t = sms(1126).t;
                  if (tmp6) {
                    class T {
                      constructor() {
                        const obj = ClipboardUtils;
                        obj.copy(sms);
                        const obj2 = ToastUtils;
                        const result = obj2.presentCopiedToClipboard();
                        importAll(true);
                      }
                    }
                  } else {
                    class T {
                      constructor() {
                        const obj = ClipboardUtils;
                        obj.copy(sms);
                        const obj2 = ToastUtils;
                        const result = obj2.presentCopiedToClipboard();
                        importAll(true);
                      }
                    }
                  }
                  cResult[24] = tmp6;
                  cResult[25] = tmp30;
                } else {
                  class T {
                    constructor() {
                      const obj = ClipboardUtils;
                      obj.copy(sms);
                      const obj2 = ToastUtils;
                      const result = obj2.presentCopiedToClipboard();
                      importAll(true);
                    }
                  }
                }
                if (cResult[26] === T) {
                  class T {
                    constructor() {
                      const obj = ClipboardUtils;
                      obj.copy(sms);
                      const obj2 = ToastUtils;
                      const result = obj2.presentCopiedToClipboard();
                      importAll(true);
                    }
                  }
                  if (cResult[29] === tmp4.trailingButtonContainer) {
                    class T {
                      constructor() {
                        const obj = ClipboardUtils;
                        obj.copy(sms);
                        const obj2 = ToastUtils;
                        const result = obj2.presentCopiedToClipboard();
                        importAll(true);
                      }
                    }
                    if (cResult[32] === tmp25) {
                      class T {
                        constructor() {
                          const obj = ClipboardUtils;
                          obj.copy(sms);
                          const obj2 = ToastUtils;
                          const result = obj2.presentCopiedToClipboard();
                          importAll(true);
                        }
                      }
                    }
                    let obj3 = { style: tmp25, children: items };
                    items = [tmp26, tmp34];
                    cResult[32] = tmp25;
                    cResult[33] = tmp26;
                    cResult[34] = tmp34;
                    cResult[35] = closure_10(closure_7, obj3);
                    const tmp41 = closure_10(closure_7, obj3);
                  }
                  let obj4 = { style: tmp4.trailingButtonContainer, children: tmp31 };
                  cResult[29] = tmp4.trailingButtonContainer;
                  cResult[30] = tmp31;
                  cResult[31] = closure_9(closure_7, obj4);
                  const tmp37 = closure_9(closure_7, obj4);
                }
                let obj5 = { text: tmp30, size: "sm", onPress: T, variant: "secondary" };
                cResult[26] = T;
                cResult[27] = tmp30;
                cResult[28] = closure_9(sms(5594).Button, obj5);
                const tmp33 = closure_9(sms(5594).Button, obj5);
              }
              const items1 = [tmp4.smsNumberContainer, tmp14];
              cResult[19] = tmp14;
              cResult[20] = tmp4.smsNumberContainer;
              cResult[21] = items1;
            }
            const obj6 = { style: tmp19, variant: "text-md/medium", children: tmp20 };
            cResult[16] = tmp4.description;
            cResult[17] = tmp20;
            cResult[18] = closure_9(sms(4886).Text, obj6);
            const tmp24 = closure_9(sms(4886).Text, obj6);
          }
          cResult[13] = body;
          cResult[14] = tmp8;
          cResult[15] = tmp8(body);
          const tmp8Result = tmp8(body);
        }
        const obj7 = { style: tmp4.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
        const tmp18 = closure_9(sms(4886).Text, obj7);
        cResult[10] = tmp4.header;
        cResult[11] = title;
        cResult[12] = tmp18;
        const tmp16 = tmp18;
      }
      const tmp15 = tmp6 ? tmp4.smsNumberContainerSuccess : {};
      cResult[7] = tmp6;
      cResult[8] = tmp4.smsNumberContainerSuccess;
      cResult[9] = tmp15;
      tmp14 = tmp15;
    }
    _require = _asyncToGenerator(async () => {
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              closure_0 = undefined;
              const tmp14 = v3(closure_0, closure_1);
              closure_0 = tmp14;
              c2 = 1;
              v3 = 1;
              const obj4 = { value: closure_2_8.canOpenURL(tmp14), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              const obj = sms_body(dependencyMap[15]);
              obj.openURL(closure_0);
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          v3 = 3;
          throw tmp16;
        }
      }
    });
    function handleOpenSms() {
      return closure_0(...arguments);
    }
    cResult[4] = sms;
    cResult[5] = sms_body;
    cResult[6] = handleOpenSms;
  } else {
    class T {
      constructor() {
        const obj = ClipboardUtils;
        obj.copy(sms);
        const obj2 = ToastUtils;
        const result = obj2.presentCopiedToClipboard();
        importAll(true);
      }
    }
    return null;
  }
}) : ((element) => {
  let Button;
  let Button2;
  let _undefined;
  let body;
  let c2;
  let intl2;
  let is_localized;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj8;
  let title;
  let tmp3;
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  c2 = undefined;
  let obj = function _handleOpenSms2() {
    obj = _asyncToGenerator(async () => {
      let closure_1;
      function buildSmsUrl(sms, sms_body) {
        let str = "?";
        obj = closure_1_0(closure_1_3[13]);
        if (obj.isIOS()) {
          let str2 = "&";
          const tmpResult = closure_1_0(closure_1_3[14]);
          if (tmpResult.getSystemVersionMajor() < 8) {
            str2 = ";";
          }
          str = str2;
        }
        let str3 = "";
        const combined = "sms:" + sms;
        if (null != sms_body) {
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          str3 = "" + str + "body=" + encodeURIComponent(sms_body);
        }
        return combined + str3;
      }
      if (c3 === 2) {
        c3 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp14 = buildSmsUrl(sms, sms_body);
              closure_0 = tmp14;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: closure_1_8.canOpenURL(tmp14), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              obj = tmp2(c3[15]);
              obj.openURL(closure_0);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  ({ title, body, is_localized } = data);
  const tmp = closure_11();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const tmp4 = obj;
  if (is_localized) {
    let stringResult;
    obj = { style: tmp.container, children: items };
    let obj2 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    const tmp7 = tmp3 ? tmp.smsNumberContainerSuccess : {};
    items = [closure_9(sms(tmp4[16]).Text, obj2), , ];
    let obj3 = { style: tmp.description, variant: "text-md/medium", children: tmp5(body) };
    const Text = sms(tmp4[16]).Text;
    items[1] = closure_9(Text, obj3);
    let obj4 = { style: tmp.smsInfoContainer, children: items3 };
    let obj5 = { style: items1, children: items2 };
    items1 = [tmp.smsNumberContainer, tmp7];
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
    items2 = [closure_9(sms(tmp4[16]).Text, obj6), ];
    const obj7 = { style: tmp.trailingButtonContainer, children: closure_9(Button, obj8) };
    Button = sms(tmp4[18]).Button;
    const intl = sms(tmp4[17]).intl;
    const string = intl.string;
    const t = sms(tmp4[17]).t;
    if (tmp3) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj8 = {
      text: stringResult,
      size: "sm",
      onPress: function handleCopyPress() {
          obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          _undefined(true);
        },
      variant: "secondary"
    };
    items2[1] = closure_9(closure_7, obj7);
    items3 = [closure_10(closure_7, obj5), ];
    const obj9 = { style: tmp.startButtonContainer, children: closure_9(Button2, obj10) };
    obj10 = {
      text: intl2.string(sms(tmp4[17]).t.BDYHSe),
      size: "md",
      onPress: function handleOpenSms() {
          return obj(...arguments);
        }
    };
    Button2 = tmp11(tmp4[18]).Button;
    intl2 = tmp11(tmp4[17]).intl;
    items3[1] = closure_9(closure_7, obj9);
    items[2] = closure_10(closure_7, obj4);
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default tmp5;