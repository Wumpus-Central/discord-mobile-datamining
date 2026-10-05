// === Module 8786: DomainVerifyModal ===

// Module 8786 (DomainVerifyModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import useNavigation from "useNavigation" /* 1490 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import DomainVerifyUtils from "DomainVerifyUtils" /* 8787 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ Endpoints: metroRequire, PlatformTypes: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 }, dns: obj2, error: { marginTop: 16 }, code: { fontFamily: "monospace", marginBottom: 4 }, button: { marginTop: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginTop: 16 };
let closure_10 = createStyles.createStyles(obj);
const constants2 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let container;
  let description;
  let first;
  let items;
  let tmp10;
  let tmp12;
  let tmp8;
  const tmp = onClose;
  let obj = onClose(first[8]);
  const cResult = obj.c(22);
  onClose = onClose.onClose;
  const tmp4 = closure_10();
  const obj2 = onClose(first[9]);
  navigation = obj2.useNavigation();
  [first, tmp8] = react.useState("");
  const tmp9 = _slicedToArray(react.useState(null), 2);
  [tmp10, _slicedToArray] = tmp9;
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp12, react] = tmp11;
  if (cResult[0] === first) {
    if (cResult[1] === navigation) {
      let tmp13;
      let tmp15;
      let tmp17;
      let tmp20;
      if (cResult[2] === onClose) {
        tmp13 = cResult[3];
      }
      const _Symbol = Symbol;
      ({ container, description } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[11]).intl;
        const stringResult = intl.string(tmp(first[11]).t.NxPUqY);
        cResult[4] = stringResult;
        tmp15 = stringResult;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== tmp4.description) {
        const obj3 = { variant: "text-md/normal", color: "text-default", style: description, children: tmp15 };
        const tmp19 = closure_8(tmp(first[12]).Text, obj3);
        cResult[5] = tmp4.description;
        cResult[6] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      const _Symbol2 = Symbol;
      const input = tmp4.input;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[11]).intl;
        const stringResult1 = intl2.string(tmp(first[11]).t["4jIAa+"]);
        cResult[7] = stringResult1;
        tmp20 = stringResult1;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp4.input) {
          let tmp22;
          let tmp27;
          if (cResult[10] === tmp13) {
            tmp22 = cResult[11];
          }
          const _Symbol3 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[11]).intl;
            const stringResult2 = intl3.string(tmp(first[11]).t.PDTjLN);
            cResult[12] = stringResult2;
            tmp27 = stringResult2;
          } else {
            tmp27 = cResult[12];
          }
          if (cResult[13] === tmp12) {
            if (cResult[14] === "" === first) {
              let tmp30;
              if (cResult[15] === tmp13) {
                tmp30 = cResult[16];
              }
              if (cResult[17] === tmp4.container) {
                if (cResult[18] === tmp30) {
                  if (cResult[19] === tmp17) {
                    let tmp33;
                    if (cResult[20] === tmp22) {
                      tmp33 = cResult[21];
                    }
                    return tmp33;
                  }
                }
              }
              const obj4 = { bottom: true, style: container, children: items };
              items = [tmp17, tmp22, tmp30];
              const tmp35 = closure_9(tmp(first[16]).SafeAreaPaddingView, obj4);
              cResult[17] = tmp4.container;
              cResult[18] = tmp30;
              cResult[19] = tmp17;
              cResult[20] = tmp22;
              cResult[21] = tmp35;
              tmp33 = tmp35;
            }
          }
          const obj5 = { loading: tmp12, disabled: "" === first, text: tmp27, onPress: tmp13 };
          const tmp32 = closure_8(tmp(first[15]).Button, obj5);
          cResult[13] = tmp12;
          cResult[14] = "" === first;
          cResult[15] = tmp13;
          cResult[16] = tmp32;
          tmp30 = tmp32;
        }
      }
      const obj6 = { autoFocus: true, style: input, label: tmp20, placeholder: tmp(first[14]).EXAMPLE_DOMAIN, error: tmp10, returnKeyType: "done", onChangeText: tmp8, onSubmitEditing: tmp13 };
      const tmp25 = navigation(first[13]);
      const tmp26 = closure_8(tmp25, obj6);
      cResult[8] = tmp10;
      cResult[9] = tmp4.input;
      cResult[10] = tmp13;
      cResult[11] = tmp26;
      tmp22 = tmp26;
    }
  }
  const fn = function o() {
    react(true);
    _slicedToArray(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      onClose();
    });
    const catchPromise = nextPromise.catch((error) => {
      const body = error.body;
      let proof;
      if (body != null) {
        proof = body.proof;
      }
      if (proof) {
        const obj = { proof: error.body.proof, domain };
        navigation.push(constants.PROOF_DNS, obj);
      } else {
        const body2 = error.body;
        let message;
        if (body2 != null) {
          const errors = body2.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body3 = error.body;
          let message1;
          if (body3 != null) {
            message1 = body3.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        closure_1_3(message);
      }
    });
    catchPromise.finally(() => {
      closure_1_4(false);
    });
  };
  cResult[0] = first;
  cResult[1] = navigation;
  cResult[2] = onClose;
  cResult[3] = fn;
  tmp13 = fn;
}) : ((onClose) => {
  let closure_1;
  let closure_3;
  let closure_4;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let tmp4;
  onClose = onClose.onClose;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  function verify() {
    closure_4(true);
    closure_3(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, first), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      onClose();
    });
    const catchPromise = nextPromise.catch((error) => {
      const body = error.body;
      let proof;
      if (body != null) {
        proof = body.proof;
      }
      if (proof) {
        const obj = { proof: error.body.proof, domain };
        closure_1_1.push(constants.PROOF_DNS, obj);
      } else {
        const body2 = error.body;
        let message;
        if (body2 != null) {
          const errors = body2.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body3 = error.body;
          let message1;
          if (body3 != null) {
            message1 = body3.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        closure_1_3(message);
      }
    });
    catchPromise.finally(() => {
      closure_1_4(false);
    });
  }
  const tmp = closure_10();
  let obj = onClose(first[9]);
  importDefault = obj.useNavigation();
  [first, tmp4] = react.useState("");
  [first1, _slicedToArray] = react.useState(null);
  [first2, react] = react.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: items };
  const SafeAreaPaddingView = onClose(first[16]).SafeAreaPaddingView;
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: intl.string(onClose(first[11]).t.NxPUqY) };
  const Text = onClose(first[12]).Text;
  intl = onClose(first[11]).intl;
  items = [closure_8(Text, obj3), , ];
  const obj4 = { autoFocus: true, style: tmp.input, label: intl2.string(onClose(first[11]).t["4jIAa+"]), placeholder: onClose(first[14]).EXAMPLE_DOMAIN, error: first1, returnKeyType: "done", onChangeText: tmp4, onSubmitEditing: verify };
  const tmp9 = require("FreeFormInputGroup");
  intl2 = onClose(first[11]).intl;
  items[1] = closure_8(tmp9, obj4);
  const obj5 = { loading: first2, disabled: "" === first, text: intl3.string(onClose(first[11]).t.PDTjLN), onPress: verify };
  const Button = onClose(first[15]).Button;
  intl3 = onClose(first[11]).intl;
  items[2] = closure_8(Button, obj5);
  return closure_9(SafeAreaPaddingView, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let proof;
  let tmp7;
  let tmp9;
  const tmp = onClose;
  let obj = onClose(proof[8]);
  const cResult = obj.c(46);
  onClose = onClose.onClose;
  let domain = onClose.domain;
  proof = onClose.proof;
  const tmp4 = closure_10();
  const obj2 = onClose(proof[9]);
  navigation = obj2.useNavigation();
  const tmp6 = navigation(react.useState(null), 2);
  [tmp7, react] = tmp6;
  [tmp9, View] = navigation(react.useState(false), 2);
  navigation(react.useState(false), 2);
  if (cResult[0] === domain) {
    let tmp10;
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[1] === onClose) {
      tmp10 = cResult[2];
    }
    const _Symbol = Symbol;
    const container = tmp4.container;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/normal", children: intl.string(tmp(proof[11]).t.cSURbq) };
      const Text = tmp(tmp2[12]).Text;
      intl = tmp(tmp2[11]).intl;
      const tmp14 = closure_8(Text, obj3);
      cResult[3] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[3];
    }
    const _Symbol2 = Symbol;
    const dns = tmp4.dns;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-md/normal", children: intl2.string(tmp(proof[11]).t.GL3q7k) };
      const Text2 = tmp(tmp2[12]).Text;
      intl2 = tmp(tmp2[11]).intl;
      const tmp17 = closure_8(Text2, obj4);
      cResult[4] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[4];
    }
    const code = tmp4.code;
    if (cResult[5] !== domain) {
      const tmpResult = tmp(proof[14]);
      const dnsName = tmpResult.getDnsName(domain);
      cResult[5] = domain;
      cResult[6] = dnsName;
      tmp18 = dnsName;
    } else {
      tmp18 = cResult[6];
    }
    if (cResult[7] === tmp4.code) {
      let tmp20;
      let tmp23;
      let tmp26;
      let tmp29;
      if (cResult[8] === tmp18) {
        tmp20 = cResult[9];
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-md/normal", children: intl3.string(tmp(proof[11]).t.Ccmixu) };
        const Text3 = tmp(tmp2[12]).Text;
        intl3 = tmp(tmp2[11]).intl;
        const tmp25 = closure_8(Text3, obj5);
        cResult[10] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] !== tmp4.code) {
        const obj6 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: "TXT" };
        const tmp28 = closure_8(tmp(proof[12]).Text, obj6);
        cResult[11] = tmp4.code;
        cResult[12] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[12];
      }
      const _Symbol4 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { variant: "text-md/normal", children: intl4.string(tmp(proof[11]).t.PVLriT) };
        const Text4 = tmp(tmp2[12]).Text;
        intl4 = tmp(tmp2[11]).intl;
        const tmp31 = closure_8(Text4, obj7);
        cResult[13] = tmp31;
        tmp29 = tmp31;
      } else {
        tmp29 = cResult[13];
      }
      if (cResult[14] === proof) {
        let tmp32;
        if (cResult[15] === tmp4.code) {
          tmp32 = cResult[16];
        }
        if (cResult[17] === tmp4.dns) {
          if (cResult[18] === tmp26) {
            if (cResult[19] === tmp32) {
              let tmp35;
              if (cResult[20] === tmp20) {
                tmp35 = cResult[21];
              }
              if (cResult[22] === tmp7) {
                let tmp39;
                let tmp42;
                if (cResult[23] === tmp4.error) {
                  tmp39 = cResult[24];
                }
                const _Symbol5 = Symbol;
                const button = tmp4.button;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(tmp2[11]).intl;
                  const stringResult = intl5.string(tmp(proof[11]).t["13ofGu"]);
                  cResult[25] = stringResult;
                  tmp42 = stringResult;
                } else {
                  tmp42 = cResult[25];
                }
                if (cResult[26] === tmp9) {
                  let tmp44;
                  if (cResult[27] === tmp10) {
                    tmp44 = cResult[28];
                  }
                  if (cResult[29] === tmp4.button) {
                    let tmp47;
                    let tmp51;
                    if (cResult[30] === tmp44) {
                      tmp47 = cResult[31];
                    }
                    const _Symbol6 = Symbol;
                    const button2 = tmp4.button;
                    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(tmp2[11]).intl;
                      const stringResult1 = intl6.string(tmp(proof[11]).t.CkfdNx);
                      cResult[32] = stringResult1;
                      tmp51 = stringResult1;
                    } else {
                      tmp51 = cResult[32];
                    }
                    if (cResult[33] === domain) {
                      if (cResult[34] === navigation) {
                        let tmp53;
                        if (cResult[35] === proof) {
                          tmp53 = cResult[36];
                        }
                        if (cResult[37] === tmp4.button) {
                          let tmp56;
                          if (cResult[38] === tmp53) {
                            tmp56 = cResult[39];
                          }
                          if (cResult[40] === tmp4.container) {
                            if (cResult[41] === tmp35) {
                              if (cResult[42] === tmp39) {
                                if (cResult[43] === tmp47) {
                                  let tmp60;
                                  if (cResult[44] === tmp56) {
                                    tmp60 = cResult[45];
                                  }
                                  return tmp60;
                                }
                              }
                            }
                          }
                          const obj8 = { bottom: true, style: container, children: items };
                          items = [tmp12, tmp35, tmp39, tmp47, tmp56];
                          const tmp62 = closure_9(tmp(proof[16]).SafeAreaPaddingView, obj8);
                          cResult[40] = tmp4.container;
                          cResult[41] = tmp35;
                          cResult[42] = tmp39;
                          cResult[43] = tmp47;
                          cResult[44] = tmp56;
                          cResult[45] = tmp62;
                          tmp60 = tmp62;
                        }
                        const obj9 = { style: button2, children: tmp53 };
                        const tmp59 = closure_8(View, obj9);
                        cResult[37] = tmp4.button;
                        cResult[38] = tmp53;
                        cResult[39] = tmp59;
                        tmp56 = tmp59;
                      }
                    }
                    const obj10 = {
                      variant: "secondary",
                      text: tmp51,
                      onPress() {
                                          const obj = { proof, domain };
                                          navigation.push(constants.PROOF_HTTP, obj);
                                        }
                    };
                    const tmp55 = closure_8(tmp(proof[15]).Button, obj10);
                    cResult[33] = domain;
                    cResult[34] = navigation;
                    cResult[35] = proof;
                    cResult[36] = tmp55;
                    tmp53 = tmp55;
                  }
                  const obj11 = { style: button, children: tmp44 };
                  const tmp50 = closure_8(View, obj11);
                  cResult[29] = tmp4.button;
                  cResult[30] = tmp44;
                  cResult[31] = tmp50;
                  tmp47 = tmp50;
                }
                const obj12 = { loading: tmp9, text: tmp42, onPress: tmp10 };
                const tmp46 = closure_8(tmp(proof[15]).Button, obj12);
                cResult[26] = tmp9;
                cResult[27] = tmp10;
                cResult[28] = tmp46;
                tmp44 = tmp46;
              }
              let tmp40 = null != tmp7;
              if (tmp40) {
                const obj13 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp4.error, children: tmp7 };
                tmp40 = closure_8(tmp(tmp2[12]).Text, obj13);
              }
              cResult[22] = tmp7;
              cResult[23] = tmp4.error;
              cResult[24] = tmp40;
              tmp39 = tmp40;
            }
          }
        }
        const obj14 = { style: dns, children: items1 };
        items1 = [tmp15, tmp20, tmp23, tmp26, tmp29, tmp32];
        const tmp38 = closure_9(View, obj14);
        cResult[17] = tmp4.dns;
        cResult[18] = tmp26;
        cResult[19] = tmp32;
        cResult[20] = tmp20;
        cResult[21] = tmp38;
        tmp35 = tmp38;
      }
      const obj15 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: proof };
      const tmp34 = closure_8(tmp(proof[12]).Text, obj15);
      cResult[14] = proof;
      cResult[15] = tmp4.code;
      cResult[16] = tmp34;
      tmp32 = tmp34;
    }
    const obj16 = { variant: "text-md/normal", selectable: true, style: code, children: tmp18 };
    const tmp22 = closure_8(tmp(proof[12]).Text, obj16);
    cResult[7] = tmp4.code;
    cResult[8] = tmp18;
    cResult[9] = tmp22;
    tmp20 = tmp22;
  }
  const fn = function c() {
    View(true);
    react(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      onClose();
    });
    const catchPromise = nextPromise.catch((error) => {
      const body = error.body;
      let message;
      if (body != null) {
        const errors = body.errors;
        if (errors != null) {
          domain = errors.domain;
          if (domain != null) {
            const _errors = domain._errors;
            if (_errors != null) {
              const first = _errors[0];
              if (first != null) {
                message = first.message;
              }
            }
          }
        }
      }
      if (!message) {
        const body2 = error.body;
        let message1;
        if (body2 != null) {
          message1 = body2.message;
        }
        message = message1;
      }
      if (!message) {
        message = error.message;
      }
      closure_1_4(message);
    });
    catchPromise.finally(() => {
      closure_1_5(false);
    });
  };
  cResult[0] = domain;
  cResult[1] = onClose;
  cResult[2] = fn;
  tmp10 = fn;
}) : ((proof) => {
  let Button;
  let Button2;
  let _undefined;
  let _undefined2;
  let c4;
  let c5;
  let closure_3;
  let domain;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let obj14;
  let obj16;
  let obj7;
  let tmp5;
  let tmp7;
  ({ onClose: require, domain } = proof);
  proof = proof.proof;
  react = undefined;
  c5 = undefined;
  const tmp = closure_10();
  let obj = require("useNavigation");
  _slicedToArray = obj.useNavigation();
  [tmp5, c4] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  [tmp7, c5] = react.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: items };
  _slicedToArray(react.useState(false), 2);
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj3 = { variant: "text-md/normal", children: intl.string(require("intl").t.cSURbq) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_8(Text, obj3), , , , ];
  const obj4 = { style: tmp.dns, children: items1 };
  const obj5 = { variant: "text-md/normal", children: intl2.string(require("intl").t.GL3q7k) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1 = [closure_8(Text2, obj5), , , , , ];
  const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: obj7.getDnsName(domain) };
  const Text3 = require("Text/Text").Text;
  obj7 = require("DomainVerifyUtils");
  items1[1] = closure_8(Text3, obj6);
  const obj8 = { variant: "text-md/normal", children: intl3.string(require("intl").t.Ccmixu) };
  const Text4 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items1[2] = closure_8(Text4, obj8);
  const obj9 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: "TXT" };
  items1[3] = closure_8(require("Text/Text").Text, obj9);
  const obj10 = { variant: "text-md/normal", children: intl4.string(require("intl").t.PVLriT) };
  const Text5 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  items1[4] = closure_8(Text5, obj10);
  const obj11 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof };
  items1[5] = closure_8(require("Text/Text").Text, obj11);
  items[1] = closure_9(c5, obj4);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    const obj12 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = closure_8(require("Text/Text").Text, obj12);
  }
  items[2] = tmp9Result;
  const obj13 = { style: tmp.button, children: closure_8(Button, obj14) };
  obj14 = {
    loading: tmp7,
    text: intl5.string(require("intl").t["13ofGu"]),
    onPress() {
      _undefined2(true);
      _undefined(null);
      const HTTP = HTTPUtils.HTTP;
      const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, domain), body: {}, rejectWithError: false };
      const postResult = HTTP.post(request);
      const nextPromise = postResult.then(() => {
        closure_1_0();
      });
      const catchPromise = nextPromise.catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          const errors = body.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                const first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body2 = error.body;
          let message1;
          if (body2 != null) {
            message1 = body2.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        _undefined(message);
      });
      catchPromise.finally(() => {
        _undefined2(false);
      });
    }
  };
  Button = require("components/Button/Button").Button;
  intl5 = require("intl").intl;
  items[3] = closure_8(c5, obj13);
  const obj15 = { style: tmp.button, children: closure_8(Button2, obj16) };
  obj16 = {
    variant: "secondary",
    text: intl6.string(require("intl").t.CkfdNx),
    onPress() {
      const obj = { proof, domain };
      closure_3.push(constants.PROOF_HTTP, obj);
    }
  };
  Button2 = require("components/Button/Button").Button;
  intl6 = require("intl").intl;
  items[4] = closure_8(c5, obj15);
  return closure_9(SafeAreaPaddingView, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let tmp7;
  let tmp9;
  const tmp = onClose;
  const obj = onClose(navigation[8]);
  const cResult = obj.c(40);
  onClose = onClose.onClose;
  let domain = onClose.domain;
  const proof = onClose.proof;
  const tmp4 = closure_10();
  const obj2 = onClose(navigation[9]);
  navigation = obj2.useNavigation();
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [tmp7, _slicedToArray] = tmp6;
  const tmp8 = _slicedToArray(react.useState(false), 2);
  [tmp9, react] = tmp8;
  if (cResult[0] === domain) {
    let tmp10;
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[1] === onClose) {
      tmp10 = cResult[2];
    }
    const _Symbol = Symbol;
    const container = tmp4.container;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/normal", children: intl.string(tmp(navigation[11]).t.p4ql7y) };
      const Text = tmp(tmp2[12]).Text;
      intl = tmp(tmp2[11]).intl;
      const tmp14 = closure_8(Text, obj3);
      cResult[3] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[3];
    }
    const _Symbol2 = Symbol;
    const dns = tmp4.dns;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-md/normal", children: intl2.string(tmp(navigation[11]).t.GL3q7k) };
      const Text2 = tmp(tmp2[12]).Text;
      intl2 = tmp(tmp2[11]).intl;
      const tmp17 = closure_8(Text2, obj4);
      cResult[4] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[4];
    }
    const code = tmp4.code;
    if (cResult[5] !== domain) {
      const tmpResult = tmp(navigation[14]);
      const httpName = tmpResult.getHttpName(domain);
      cResult[5] = domain;
      cResult[6] = httpName;
      tmp18 = httpName;
    } else {
      tmp18 = cResult[6];
    }
    if (cResult[7] === tmp4.code) {
      let tmp20;
      let tmp23;
      if (cResult[8] === tmp18) {
        tmp20 = cResult[9];
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-md/normal", children: intl3.string(tmp(navigation[11]).t.PVLriT) };
        const Text3 = tmp(tmp2[12]).Text;
        intl3 = tmp(tmp2[11]).intl;
        const tmp25 = closure_8(Text3, obj5);
        cResult[10] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] === proof) {
        let tmp26;
        if (cResult[12] === tmp4.code) {
          tmp26 = cResult[13];
        }
        if (cResult[14] === tmp4.dns) {
          if (cResult[15] === tmp26) {
            let tmp29;
            if (cResult[16] === tmp20) {
              tmp29 = cResult[17];
            }
            if (cResult[18] === tmp7) {
              let tmp33;
              let tmp36;
              if (cResult[19] === tmp4.error) {
                tmp33 = cResult[20];
              }
              const _Symbol4 = Symbol;
              const button = tmp4.button;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[11]).intl;
                const stringResult = intl4.string(tmp(navigation[11]).t["13ofGu"]);
                cResult[21] = stringResult;
                tmp36 = stringResult;
              } else {
                tmp36 = cResult[21];
              }
              if (cResult[22] === tmp9) {
                let tmp38;
                if (cResult[23] === tmp10) {
                  tmp38 = cResult[24];
                }
                if (cResult[25] === tmp4.button) {
                  let tmp41;
                  let tmp45;
                  let tmp47;
                  if (cResult[26] === tmp38) {
                    tmp41 = cResult[27];
                  }
                  const _Symbol5 = Symbol;
                  const button2 = tmp4.button;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(tmp2[11]).intl;
                    const stringResult1 = intl5.string(tmp(navigation[11]).t.RhJMVQ);
                    cResult[28] = stringResult1;
                    tmp45 = stringResult1;
                  } else {
                    tmp45 = cResult[28];
                  }
                  if (cResult[29] !== navigation) {
                    const obj6 = {
                      variant: "secondary",
                      text: tmp45,
                      onPress() {
                                          navigation.pop();
                                        }
                    };
                    const tmp49 = closure_8(tmp(navigation[15]).Button, obj6);
                    cResult[29] = navigation;
                    cResult[30] = tmp49;
                    tmp47 = tmp49;
                  } else {
                    tmp47 = cResult[30];
                  }
                  if (cResult[31] === tmp4.button) {
                    let tmp50;
                    if (cResult[32] === tmp47) {
                      tmp50 = cResult[33];
                    }
                    if (cResult[34] === tmp4.container) {
                      if (cResult[35] === tmp29) {
                        if (cResult[36] === tmp33) {
                          if (cResult[37] === tmp41) {
                            let tmp54;
                            if (cResult[38] === tmp50) {
                              tmp54 = cResult[39];
                            }
                            return tmp54;
                          }
                        }
                      }
                    }
                    const obj7 = { bottom: true, style: container, children: items };
                    items = [tmp12, tmp29, tmp33, tmp41, tmp50];
                    const tmp56 = closure_9(tmp(navigation[16]).SafeAreaPaddingView, obj7);
                    cResult[34] = tmp4.container;
                    cResult[35] = tmp29;
                    cResult[36] = tmp33;
                    cResult[37] = tmp41;
                    cResult[38] = tmp50;
                    cResult[39] = tmp56;
                    tmp54 = tmp56;
                  }
                  const obj8 = { style: button2, children: tmp47 };
                  const tmp53 = closure_8(View, obj8);
                  cResult[31] = tmp4.button;
                  cResult[32] = tmp47;
                  cResult[33] = tmp53;
                  tmp50 = tmp53;
                }
                const obj9 = { style: button, children: tmp38 };
                const tmp44 = closure_8(View, obj9);
                cResult[25] = tmp4.button;
                cResult[26] = tmp38;
                cResult[27] = tmp44;
                tmp41 = tmp44;
              }
              const obj10 = { loading: tmp9, text: tmp36, onPress: tmp10 };
              const tmp40 = closure_8(tmp(navigation[15]).Button, obj10);
              cResult[22] = tmp9;
              cResult[23] = tmp10;
              cResult[24] = tmp40;
              tmp38 = tmp40;
            }
            let tmp34 = null != tmp7;
            if (tmp34) {
              const obj11 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp4.error, children: tmp7 };
              tmp34 = closure_8(tmp(tmp2[12]).Text, obj11);
            }
            cResult[18] = tmp7;
            cResult[19] = tmp4.error;
            cResult[20] = tmp34;
            tmp33 = tmp34;
          }
        }
        const obj12 = { style: dns, children: items1 };
        items1 = [tmp15, tmp20, tmp23, tmp26];
        const tmp32 = closure_9(View, obj12);
        cResult[14] = tmp4.dns;
        cResult[15] = tmp26;
        cResult[16] = tmp20;
        cResult[17] = tmp32;
        tmp29 = tmp32;
      }
      const obj13 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: proof };
      const tmp28 = closure_8(tmp(navigation[12]).Text, obj13);
      cResult[11] = proof;
      cResult[12] = tmp4.code;
      cResult[13] = tmp28;
      tmp26 = tmp28;
    }
    const obj14 = { variant: "text-md/normal", selectable: true, style: code, children: tmp18 };
    const tmp22 = closure_8(tmp(navigation[12]).Text, obj14);
    cResult[7] = tmp4.code;
    cResult[8] = tmp18;
    cResult[9] = tmp22;
    tmp20 = tmp22;
  }
  const fn = function c() {
    react(true);
    _slicedToArray(null);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, domain), body: {}, rejectWithError: false };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      onClose();
    });
    const catchPromise = nextPromise.catch((error) => {
      const body = error.body;
      let message;
      if (body != null) {
        const errors = body.errors;
        if (errors != null) {
          domain = errors.domain;
          if (domain != null) {
            const _errors = domain._errors;
            if (_errors != null) {
              const first = _errors[0];
              if (first != null) {
                message = first.message;
              }
            }
          }
        }
      }
      if (!message) {
        const body2 = error.body;
        let message1;
        if (body2 != null) {
          message1 = body2.message;
        }
        message = message1;
      }
      if (!message) {
        message = error.message;
      }
      closure_1_3(message);
    });
    catchPromise.finally(() => {
      closure_1_4(false);
    });
  };
  cResult[0] = domain;
  cResult[1] = onClose;
  cResult[2] = fn;
  tmp10 = fn;
}) : ((proof) => {
  let Button;
  let Button2;
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let closure_2;
  let domain;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj12;
  let obj14;
  let obj7;
  let tmp5;
  let tmp7;
  ({ onClose: require, domain } = proof);
  _slicedToArray = undefined;
  react = undefined;
  proof = proof.proof;
  const tmp = closure_10();
  const obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [tmp5, c3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  [tmp7, c4] = react.useState(false);
  const obj2 = { bottom: true, style: tmp.container, children: items };
  _slicedToArray(react.useState(false), 2);
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj3 = { variant: "text-md/normal", children: intl.string(intl7.t.p4ql7y) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items = [closure_8(Text, obj3), , , , ];
  const obj4 = { style: tmp.dns, children: items1 };
  const obj5 = { variant: "text-md/normal", children: intl2.string(intl7.t.GL3q7k) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items1 = [closure_8(Text2, obj5), , , ];
  const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: obj7.getHttpName(domain) };
  const Text3 = Text_Text.Text;
  obj7 = DomainVerifyUtils;
  items1[1] = closure_8(Text3, obj6);
  const obj8 = { variant: "text-md/normal", children: intl3.string(intl7.t.PVLriT) };
  const Text4 = Text_Text.Text;
  intl3 = intl7.intl;
  items1[2] = closure_8(Text4, obj8);
  const obj9 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: proof };
  items1[3] = closure_8(Text_Text.Text, obj9);
  items[1] = closure_9(View, obj4);
  let tmp9Result = null != tmp5;
  if (tmp9Result) {
    const obj10 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
    tmp9Result = closure_8(Text_Text.Text, obj10);
  }
  items[2] = tmp9Result;
  const obj11 = { style: tmp.button, children: closure_8(Button, obj12) };
  obj12 = {
    loading: tmp7,
    text: intl4.string(intl7.t["13ofGu"]),
    onPress() {
      _undefined2(true);
      _undefined(null);
      const HTTP = HTTPUtils.HTTP;
      const request = { url: metroRequire.CONNECTION(metroImportDefault.DOMAIN, domain), body: {}, rejectWithError: false };
      const postResult = HTTP.post(request);
      const nextPromise = postResult.then(() => {
        closure_1_0();
      });
      const catchPromise = nextPromise.catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          const errors = body.errors;
          if (errors != null) {
            domain = errors.domain;
            if (domain != null) {
              const _errors = domain._errors;
              if (_errors != null) {
                const first = _errors[0];
                if (first != null) {
                  message = first.message;
                }
              }
            }
          }
        }
        if (!message) {
          const body2 = error.body;
          let message1;
          if (body2 != null) {
            message1 = body2.message;
          }
          message = message1;
        }
        if (!message) {
          message = error.message;
        }
        _undefined(message);
      });
      catchPromise.finally(() => {
        _undefined2(false);
      });
    }
  };
  Button = components_Button_Button.Button;
  intl4 = intl7.intl;
  items[3] = closure_8(View, obj11);
  const obj13 = { style: tmp.button, children: closure_8(Button2, obj14) };
  obj14 = {
    variant: "secondary",
    text: intl5.string(intl7.t.RhJMVQ),
    onPress() {
      closure_2.pop();
    }
  };
  Button2 = components_Button_Button.Button;
  intl5 = intl7.intl;
  items[4] = closure_8(View, obj13);
  return closure_9(SafeAreaPaddingView, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onClose;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmpResult;
  let tmpResult3;
  let tmpResult4;
  let obj = onClose(576);
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function e() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    };
    cResult[0] = fn;
    onClose = fn;
  } else {
    onClose = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      headerTitle: intl.string(onClose(1126).t["7lo8+e"]),
      headerLeft: tmpResult.getHeaderBackButton(onClose),
      render() {
          const obj = { onClose };
          return metroImportAll(closure_12, obj);
        }
    };
    intl = tmp(1126).intl;
    cResult[1] = obj2;
    tmp5 = obj2;
    tmpResult = onClose(6010);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      headerTitle: intl2.string(onClose(1126).t["7lo8+e"]),
      headerLeft: tmpResult3.getHeaderBackButton(onClose),
      render(domain) {
          const obj = { domain: domain.domain, proof: domain.proof, onClose };
          return metroImportAll(closure_13, obj);
        }
    };
    intl2 = tmp(1126).intl;
    cResult[2] = obj3;
    tmp6 = obj3;
    tmpResult3 = onClose(6010);
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {};
    obj4[constants2.DOMAIN] = tmp5;
    obj4[constants2.PROOF_DNS] = tmp6;
    const PROOF_HTTP = constants2.PROOF_HTTP;
    const obj5 = {
      headerTitle: intl3.string(onClose(1126).t["7lo8+e"]),
      headerLeft: tmpResult4.getHeaderBackButton(onClose),
      render(domain) {
          const obj = { domain: domain.domain, proof: domain.proof, onClose };
          return metroImportAll(closure_14, obj);
        }
    };
    intl3 = tmp(1126).intl;
    obj4[PROOF_HTTP] = obj5;
    cResult[3] = obj4;
    tmp7 = obj4;
    tmpResult4 = onClose(6010);
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { screens: tmp7, initialRouteName: constants2.DOMAIN, headerBackTitle: intl4.string(onClose(1126).t["13/7kX"]) };
    const Navigator = tmp(6496).Navigator;
    intl4 = tmp(1126).intl;
    const tmp12 = closure_8(Navigator, obj6);
    cResult[4] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : ((arg0) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  let obj5;
  let obj7;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    function onClose() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    }
    let obj = {};
    const DOMAIN = constants2.DOMAIN;
    const obj2 = {
      headerTitle: intl.string(onClose(1126).t["7lo8+e"]),
      headerLeft: obj3.getHeaderBackButton(onClose),
      render() {
          const obj = { onClose };
          return metroImportAll(closure_12, obj);
        }
    };
    intl = onClose(1126).intl;
    obj[DOMAIN] = obj2;
    obj3 = onClose(6010);
    const PROOF_DNS = constants2.PROOF_DNS;
    const obj4 = {
      headerTitle: intl2.string(onClose(1126).t["7lo8+e"]),
      headerLeft: obj5.getHeaderBackButton(onClose),
      render(domain) {
          const obj = { domain: domain.domain, proof: domain.proof, onClose };
          return metroImportAll(closure_13, obj);
        }
    };
    intl2 = onClose(1126).intl;
    obj[PROOF_DNS] = obj4;
    obj5 = onClose(6010);
    const PROOF_HTTP = constants2.PROOF_HTTP;
    const obj6 = {
      headerTitle: intl3.string(onClose(1126).t["7lo8+e"]),
      headerLeft: obj7.getHeaderBackButton(onClose),
      render(domain) {
          const obj = { domain: domain.domain, proof: domain.proof, onClose };
          return metroImportAll(closure_14, obj);
        }
    };
    intl3 = onClose(1126).intl;
    obj[PROOF_HTTP] = obj6;
    obj7 = onClose(6010);
    const obj8 = { screens: obj, initialRouteName: constants2.DOMAIN, headerBackTitle: intl4.string(onClose(1126).t["13/7kX"]) };
    const Navigator = onClose(6496).Navigator;
    intl4 = onClose(1126).intl;
    return closure_8(Navigator, obj8);
  }
});
const result = size.fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default tmp4;