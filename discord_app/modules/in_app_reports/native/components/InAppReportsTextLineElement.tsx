// === Module 7743: InAppReportsTextLineElement ===

// Module 7743 (InAppReportsTextLineElement)
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import CustomMarkupAll from "CustomMarkup" /* 5399 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, Linking: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, smsNumberContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 }, smsNumberContainerSuccess: null, startButtonContainer: null };
let obj3 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
obj2.smsNumberContainerSuccess = { borderColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj2.startButtonContainer = { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TextLineElement(element) {
  const cResult = require("c").c(51);
  const data = element.element.data;
  ({ title, body, sms } = data);
  _require = sms;
  const sms_body = data.sms_body;
  const tmp4 = closure_11();
  let obj = require("c");
  [tmp6, importAll] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return CustomMarkupAll.getParser();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp8 = sms_body(6169)(first);
  if (data.is_localized) {
    if (cResult[1] !== sms) {
      function handleCopyPress() {
        ClipboardUtils.copy(closure_0);
        const result = ToastUtils.presentCopiedToClipboard();
        importAll(true);
      }
      cResult[1] = sms;
      cResult[2] = handleCopyPress;
      let tmp10 = handleCopyPress;
    } else {
      tmp10 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function buildSmsUrl(arg0, arg1) {
        let str = "?";
        if (obj.isIOS()) {
          let str2 = "&";
          if (tmpResult.getSystemVersionMajor() < 8) {
            str2 = ";";
          }
          str = str2;
          tmpResult = closure_0(5068);
        }
        let str3 = "";
        const combined = "sms:" + arg0;
        if (null != arg1) {
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          str3 = "" + str + "body=" + encodeURIComponent(arg1);
        }
        return combined + str3;
      }
      cResult[3] = buildSmsUrl;
      let tmp11 = buildSmsUrl;
    } else {
      tmp11 = cResult[3];
    }
    dependencyMap = tmp11;
    if (cResult[4] === sms) {
      if (cResult[5] === sms_body) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === tmp6) {
        if (cResult[8] === tmp4.smsNumberContainerSuccess) {
          if (cResult[10] === tmp4.header) {
            if (cResult[11] === title) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === body) {
              if (cResult[14] === tmp8) {
                let tmp22 = cResult[15];
              }
              if (cResult[16] === tmp4.description) {
                if (cResult[17] === tmp22) {
                  let tmp24 = cResult[18];
                }
                if (cResult[19] === tmp14) {
                  if (cResult[20] === tmp4.smsNumberContainer) {
                    let tmp28 = cResult[21];
                  }
                  if (cResult[22] !== sms) {
                    let obj2 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
                    const tmp31 = closure_9(tmp(5088).Text, obj2);
                    cResult[22] = sms;
                    cResult[23] = tmp31;
                    let tmp29 = tmp31;
                  } else {
                    tmp29 = cResult[23];
                  }
                  if (cResult[24] !== tmp6) {
                    const intl = tmp(1126).intl;
                    const string = intl.string;
                    let t5VZ88 = tmp(1126).t;
                    if (tmp6) {
                      t5VZ88 = t5VZ88.t5VZ88;
                      let stringResult = string(t5VZ88);
                    } else {
                      stringResult = string(t5VZ88.OpuAlK);
                    }
                    cResult[24] = tmp6;
                    cResult[25] = stringResult;
                  } else {
                    if (cResult[26] === tmp10) {
                      if (cResult[27] === tmp32) {
                        let tmp35 = cResult[28];
                      }
                      if (cResult[29] === tmp4.trailingButtonContainer) {
                        if (cResult[30] === tmp35) {
                          let tmp38 = cResult[31];
                        }
                        if (cResult[32] === tmp28) {
                          if (cResult[33] === tmp29) {
                            if (cResult[34] === tmp38) {
                              let tmp42 = cResult[35];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl2 = tmp(1126).intl;
                              const stringResult1 = intl2.string(tmp(1126).t.BDYHSe);
                              cResult[36] = stringResult1;
                              let tmp46 = stringResult1;
                            } else {
                              tmp46 = cResult[36];
                            }
                            if (cResult[37] !== tmp12) {
                              let obj3 = { text: tmp46, size: "md", onPress: tmp12 };
                              const tmp50 = closure_9(tmp(5379).Button, obj3);
                              cResult[37] = tmp12;
                              cResult[38] = tmp50;
                              let tmp48 = tmp50;
                            } else {
                              tmp48 = cResult[38];
                            }
                            if (cResult[39] === tmp4.startButtonContainer) {
                              if (cResult[40] === tmp48) {
                                let tmp51 = cResult[41];
                              }
                              if (cResult[42] === tmp4.smsInfoContainer) {
                                if (cResult[43] === tmp42) {
                                  if (cResult[44] === tmp51) {
                                    let tmp55 = cResult[45];
                                  }
                                  if (cResult[46] === tmp4.container) {
                                    if (cResult[47] === tmp24) {
                                      if (cResult[48] === tmp55) {
                                        if (cResult[49] === tmp18) {
                                          let tmp59 = cResult[50];
                                        }
                                        return tmp59;
                                      }
                                    }
                                  }
                                  let obj4 = { style: tmp17, children: null };
                                  const items = [tmp18, tmp24, tmp55];
                                  obj4.children = items;
                                  const tmp62 = closure_10(closure_7, obj4);
                                  cResult[46] = tmp4.container;
                                  cResult[47] = tmp24;
                                  cResult[48] = tmp55;
                                  cResult[49] = tmp18;
                                  cResult[50] = tmp62;
                                  tmp59 = tmp62;
                                }
                              }
                              let obj5 = { style: tmp27, children: null };
                              const items1 = [tmp42, tmp51];
                              obj5.children = items1;
                              const tmp58 = closure_10(closure_7, obj5);
                              cResult[42] = tmp4.smsInfoContainer;
                              cResult[43] = tmp42;
                              cResult[44] = tmp51;
                              cResult[45] = tmp58;
                              tmp55 = tmp58;
                            }
                            const obj6 = { style: tmp4.startButtonContainer, children: tmp48 };
                            const tmp54 = closure_9(closure_7, obj6);
                            cResult[39] = tmp4.startButtonContainer;
                            cResult[40] = tmp48;
                            cResult[41] = tmp54;
                            tmp51 = tmp54;
                          }
                        }
                        const obj7 = { style: tmp28, children: null };
                        const items2 = [tmp29, tmp38];
                        obj7.children = items2;
                        const tmp45 = closure_10(closure_7, obj7);
                        cResult[32] = tmp28;
                        cResult[33] = tmp29;
                        cResult[34] = tmp38;
                        cResult[35] = tmp45;
                        tmp42 = tmp45;
                      }
                      const obj8 = { style: tmp4.trailingButtonContainer, children: tmp35 };
                      const tmp41 = closure_9(closure_7, obj8);
                      cResult[29] = tmp4.trailingButtonContainer;
                      cResult[30] = tmp35;
                      cResult[31] = tmp41;
                      tmp38 = tmp41;
                    }
                    const obj9 = { text: cResult[25], size: "sm", onPress: tmp10, variant: "secondary" };
                    const tmp37 = closure_9(tmp(5379).Button, obj9);
                    cResult[26] = tmp10;
                    cResult[27] = cResult[25];
                    cResult[28] = tmp37;
                    tmp35 = tmp37;
                  }
                }
                const items3 = [tmp4.smsNumberContainer, tmp14];
                cResult[19] = tmp14;
                cResult[20] = tmp4.smsNumberContainer;
                cResult[21] = items3;
                tmp28 = items3;
              }
              const obj10 = { style: tmp21, variant: "text-md/medium", children: tmp22 };
              const tmp26 = closure_9(tmp(5088).Text, obj10);
              cResult[16] = tmp4.description;
              cResult[17] = tmp22;
              cResult[18] = tmp26;
              tmp24 = tmp26;
            }
            const tmp8Result = tmp8(body);
            cResult[13] = body;
            cResult[14] = tmp8;
            cResult[15] = tmp8Result;
            tmp22 = tmp8Result;
          }
          const obj11 = { style: tmp4.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
          const tmp20 = closure_9(tmp(5088).Text, obj11);
          cResult[10] = tmp4.header;
          cResult[11] = title;
          cResult[12] = tmp20;
          tmp18 = tmp20;
        }
      }
      let tmp15 = tmp6 ? tmp4.smsNumberContainerSuccess : {};
      cResult[7] = tmp6;
      cResult[8] = tmp4.smsNumberContainerSuccess;
      cResult[9] = tmp15;
    }
    _require = asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              const tmp15 = dependencyMap(closure_0, closure_1);
              closure_128_0 = tmp15;
              c2 = 1;
              dependencyMap = 1;
              const obj4 = { value: closure_2_8.canOpenURL(tmp15), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              sms_body(4806).openURL(closure_128_0);
              const obj = sms_body(4806);
            }
            dependencyMap = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp17) {
          dependencyMap = tmp;
          throw tmp17;
        }
      }
    });
    function handleOpenSms() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[4] = sms;
    cResult[5] = sms_body;
    cResult[6] = handleOpenSms;
    tmp12 = handleOpenSms;
  } else {
    return null;
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : (function TextLineElement(element) {
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  c2 = undefined;
  dependencyMap = async function _handleOpenSms2() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            const tmp15 = (function buildSmsUrl(sms, sms_body) {
              let str = "?";
              if (obj.isIOS()) {
                let str2 = "&";
                if (tmpResult.getSystemVersionMajor() < 8) {
                  str2 = ";";
                }
                str = str2;
                tmpResult = closure_1_0(dependencyMap[14]);
              }
              let str3 = "";
              const combined = "sms:" + sms;
              if (null != sms_body) {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                str3 = "" + str + "body=" + encodeURIComponent(sms_body);
              }
              return combined + str3;
            })(sms, sms_body);
            closure_128_0 = tmp15;
            c2 = 1;
            dependencyMap = 1;
            const obj4 = { value: closure_1_8.canOpenURL(tmp15), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            tmp3(dependencyMap[15]).openURL(closure_128_0);
            const obj = tmp3(dependencyMap[15]);
          }
          dependencyMap = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
      }
    }
  };
  ({ title, body, is_localized } = data);
  const tmp = closure_11();
  [tmp3, c2] = noop.useState(false);
  if (is_localized) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    const items = [closure_9(sms(tmp4[16]).Text, obj2), , ];
    let obj3 = { style: tmp.description, variant: "text-md/medium", children: tmp5(body) };
    items[1] = closure_9(sms(tmp4[16]).Text, obj3);
    let obj4 = { style: tmp.smsInfoContainer, children: null };
    let obj5 = { style: null, children: null };
    const items1 = [tmp.smsNumberContainer, tmp3 ? tmp.smsNumberContainerSuccess : {}];
    obj5.style = items1;
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
    const items2 = [closure_9(sms(tmp4[16]).Text, obj6), ];
    const obj7 = { style: tmp.trailingButtonContainer, children: null };
    const intl = sms(tmp4[17]).intl;
    const string = intl.string;
    const t = sms(tmp4[17]).t;
    if (tmp3) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    const obj8 = {
      text: stringResult,
      size: "sm",
      onPress: function handleCopyPress() {
          ClipboardUtils.copy(sms);
          const result = ToastUtils.presentCopiedToClipboard();
          _undefined(true);
        },
      variant: "secondary"
    };
    obj7.children = closure_9(sms(tmp4[18]).Button, obj8);
    items2[1] = closure_9(closure_7, obj7);
    obj5.children = items2;
    const items3 = [closure_10(closure_7, obj5), ];
    const obj9 = { style: tmp.startButtonContainer, children: null };
    const obj10 = { text: null, size: "md", onPress: null };
    const intl2 = tmp11(tmp4[17]).intl;
    obj10.text = intl2.string(sms(tmp4[17]).t.BDYHSe);
    obj10.onPress = function handleOpenSms() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj9.children = closure_9(sms(tmp4[18]).Button, obj10);
    items3[1] = closure_9(closure_7, obj9);
    obj4.children = items3;
    items[2] = closure_10(closure_7, obj4);
    obj.children = items;
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
});