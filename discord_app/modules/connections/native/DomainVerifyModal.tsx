// discord_app/modules/connections/native/DomainVerifyModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import DomainVerifyUtils from "../DomainVerifyUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Endpoints: metroRequire, PlatformTypes: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { padding: 16 },
  description: { textAlign: "center" },
  input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 },
  dns: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.xs,
    padding: 8,
    marginTop: 16,
  },
  error: { marginTop: 16 },
  code: { fontFamily: "monospace", marginBottom: 4 },
  button: { marginTop: 16 },
};
let closure_10 = createStyles.createStyles(obj2);
const constants2 = { DOMAIN: "DOMAIN", PROOF_DNS: "PROOF_DNS", PROOF_HTTP: "PROOF_HTTP" };
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DomainScreen(onClose) {
      const cResult = onClose(first[8]).c(22);
      onClose = onClose.onClose;
      const tmp4 = closure_10();
      let obj = onClose(first[8]);
      const navigation = onClose(first[9]).useNavigation();
      const tmp6 = _slicedToArray(noop.useState(""), 2);
      first = tmp6[0];
      const obj2 = onClose(first[9]);
      [tmp9, _slicedToArray] = noop.useState(null);
      const tmp8 = _slicedToArray(noop.useState(null), 2);
      [tmp11, noop] = noop.useState(false);
      if (cResult[0] === first) {
        if (cResult[1] === navigation) {
          if (cResult[2] === onClose) {
            let tmp12 = cResult[3];
          }
          const _Symbol = Symbol;
          ({ container, description } = tmp4);
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[11]).intl;
            const stringResult = intl.string(tmp(tmp2[11]).t.NxPUqY);
            cResult[4] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[4];
          }
          if (cResult[5] !== tmp4.description) {
            const obj3 = { variant: "text-md/normal", color: "text-default", style: description, children: tmp14 };
            const tmp18 = closure_8(tmp(tmp2[12]).Text, obj3);
            cResult[5] = tmp4.description;
            cResult[6] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[11]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[11]).t["4jIAa+"]);
            cResult[7] = stringResult1;
            let tmp19 = stringResult1;
          } else {
            tmp19 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            if (cResult[9] === tmp4.input) {
              if (cResult[10] === tmp12) {
                let tmp21 = cResult[11];
              }
              const _Symbol3 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[11]).intl;
                const stringResult2 = intl3.string(tmp(tmp2[11]).t.PDTjLN);
                cResult[12] = stringResult2;
                let tmp26 = stringResult2;
              } else {
                tmp26 = cResult[12];
              }
              if (cResult[13] === tmp11) {
                if (cResult[14] === tmp28) {
                  if (cResult[15] === tmp12) {
                    let tmp29 = cResult[16];
                  }
                  if (cResult[17] === tmp4.container) {
                    if (cResult[18] === tmp29) {
                      if (cResult[19] === tmp16) {
                        if (cResult[20] === tmp21) {
                          let tmp32 = cResult[21];
                        }
                        return tmp32;
                      }
                    }
                  }
                  const obj4 = { bottom: true, style: container, children: null };
                  const items = [tmp16, tmp21, tmp29];
                  obj4.children = items;
                  const tmp34 = closure_9(tmp(tmp2[16]).SafeAreaPaddingView, obj4);
                  cResult[17] = tmp4.container;
                  cResult[18] = tmp29;
                  cResult[19] = tmp16;
                  cResult[20] = tmp21;
                  cResult[21] = tmp34;
                  tmp32 = tmp34;
                }
              }
              const obj5 = { loading: tmp11, disabled: "" === first, text: tmp26, onPress: tmp12 };
              const tmp31 = closure_8(tmp(tmp2[15]).Button, obj5);
              cResult[13] = tmp11;
              cResult[14] = "" === first;
              cResult[15] = tmp12;
              cResult[16] = tmp31;
              tmp29 = tmp31;
            }
          }
          const obj6 = {
            autoFocus: true,
            style: tmp4.input,
            label: tmp19,
            placeholder: tmp(tmp2[14]).EXAMPLE_DOMAIN,
            error: tmp9,
            returnKeyType: "done",
            onChangeText: tmp6[1],
            onSubmitEditing: tmp12,
          };
          const tmp25 = closure_8(navigation(tmp2[13]), obj6);
          cResult[8] = tmp9;
          cResult[9] = tmp4.input;
          cResult[10] = tmp12;
          cResult[11] = tmp25;
          tmp21 = tmp25;
          const tmp24 = navigation(tmp2[13]);
        }
      }
      function verify() {
        noop(true);
        _slicedToArray(null);
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: timestampProducer.CONNECTION(constants.DOMAIN, first),
          body: {},
          rejectWithError: false,
        };
        const postResult = HTTP.post(request);
        const nextPromise = HTTP.post(request).then(() => {
          onClose();
        });
        HTTP.post(request)
          .then(() => {
            onClose();
          })
          .catch((error) => {
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
          })
          .finally(() => {
            closure_1_4(false);
          });
      }
      cResult[0] = first;
      cResult[1] = navigation;
      cResult[2] = onClose;
      cResult[3] = verify;
      tmp12 = verify;
      const tmp10 = _slicedToArray(noop.useState(false), 2);
    }
  : function DomainScreen(onClose) {
      onClose = onClose.onClose;
      first = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      function verify() {
        closure_4(true);
        closure_3(null);
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: timestampProducer.CONNECTION(constants.DOMAIN, first),
          body: {},
          rejectWithError: false,
        };
        const postResult = HTTP.post(request);
        const nextPromise = HTTP.post(request).then(() => {
          onClose();
        });
        HTTP.post(request)
          .then(() => {
            onClose();
          })
          .catch((error) => {
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
          })
          .finally(() => {
            closure_1_4(false);
          });
      }
      const tmp = closure_10();
      importDefault = onClose(first[9]).useNavigation();
      [first, obj4.onChangeText] = noop.useState("");
      const tmp4 = _slicedToArray(noop.useState(null), 2);
      _slicedToArray = tmp4[1];
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      noop = tmp5[1];
      const obj2 = { bottom: true, style: tmp.container, children: null };
      const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
      const intl = onClose(first[11]).intl;
      obj3.children = intl.string(onClose(first[11]).t.NxPUqY);
      const items = [closure_8(onClose(first[12]).Text, obj3), ,];
      const obj4 = {
        autoFocus: true,
        style: tmp.input,
        label: null,
        placeholder: null,
        error: null,
        returnKeyType: "done",
        onChangeText: null,
        onSubmitEditing: null,
      };
      let obj = onClose(first[9]);
      const intl2 = onClose(first[11]).intl;
      obj4.label = intl2.string(onClose(first[11]).t["4jIAa+"]);
      obj4.placeholder = onClose(first[14]).EXAMPLE_DOMAIN;
      obj4.error = tmp4[0];
      obj4.onSubmitEditing = verify;
      items[1] = closure_8(require("FreeFormInputGroup"), obj4);
      const obj5 = { loading: tmp5[0], disabled: "" === first, text: null, onPress: null };
      const intl3 = onClose(first[11]).intl;
      obj5.text = intl3.string(onClose(first[11]).t.PDTjLN);
      obj5.onPress = verify;
      items[2] = closure_8(onClose(first[15]).Button, obj5);
      obj2.children = items;
      return closure_9(onClose(first[16]).SafeAreaPaddingView, obj2);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DNSProofScreen(onClose) {
      const cResult = onClose(proof[8]).c(46);
      onClose = onClose.onClose;
      let domain = onClose.domain;
      proof = onClose.proof;
      const tmp4 = closure_10();
      const obj = onClose(proof[8]);
      const navigation = onClose(proof[9]).useNavigation();
      const obj2 = onClose(proof[9]);
      [tmp7, noop] = navigation(noop.useState(null), 2);
      const tmp6 = navigation(noop.useState(null), 2);
      [tmp9, View] = navigation(noop.useState(false), 2);
      if (cResult[0] === domain) {
        if (cResult[1] === onClose) {
          let tmp10 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/normal", children: null };
          const intl = tmp(tmp2[11]).intl;
          obj3.children = intl.string(tmp(tmp2[11]).t.cSURbq);
          const tmp14 = closure_8(tmp(tmp2[12]).Text, obj3);
          cResult[3] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-md/normal", children: null };
          const intl2 = tmp(tmp2[11]).intl;
          obj4.children = intl2.string(tmp(tmp2[11]).t.GL3q7k);
          const tmp17 = closure_8(tmp(tmp2[12]).Text, obj4);
          cResult[4] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== domain) {
          const dnsName = tmp(tmp2[14]).getDnsName(domain);
          cResult[5] = domain;
          cResult[6] = dnsName;
          let tmp18 = dnsName;
          const tmpResult = tmp(tmp2[14]);
        } else {
          tmp18 = cResult[6];
        }
        if (cResult[7] === tmp4.code) {
          if (cResult[8] === tmp18) {
            let tmp20 = cResult[9];
          }
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "text-md/normal", children: null };
            const intl3 = tmp(tmp2[11]).intl;
            obj5.children = intl3.string(tmp(tmp2[11]).t.Ccmixu);
            const tmp25 = closure_8(tmp(tmp2[12]).Text, obj5);
            cResult[10] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] !== tmp4.code) {
            const obj6 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: "TXT" };
            const tmp28 = closure_8(tmp(tmp2[12]).Text, obj6);
            cResult[11] = tmp4.code;
            cResult[12] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[12];
          }
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-md/normal", children: null };
            const intl4 = tmp(tmp2[11]).intl;
            obj7.children = intl4.string(tmp(tmp2[11]).t.PVLriT);
            const tmp31 = closure_8(tmp(tmp2[12]).Text, obj7);
            cResult[13] = tmp31;
            let tmp29 = tmp31;
          } else {
            tmp29 = cResult[13];
          }
          if (cResult[14] === proof) {
            if (cResult[15] === tmp4.code) {
              let tmp32 = cResult[16];
            }
            if (cResult[17] === tmp4.dns) {
              if (cResult[18] === tmp26) {
                if (cResult[19] === tmp32) {
                  if (cResult[20] === tmp20) {
                    let tmp35 = cResult[21];
                  }
                  if (cResult[22] === tmp7) {
                    if (cResult[23] === tmp4.error) {
                      let tmp39 = cResult[24];
                    }
                    const _Symbol5 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl5 = tmp(tmp2[11]).intl;
                      const stringResult = intl5.string(tmp(tmp2[11]).t["13ofGu"]);
                      cResult[25] = stringResult;
                      let tmp42 = stringResult;
                    } else {
                      tmp42 = cResult[25];
                    }
                    if (cResult[26] === tmp9) {
                      if (cResult[27] === tmp10) {
                        let tmp44 = cResult[28];
                      }
                      if (cResult[29] === tmp4.button) {
                        if (cResult[30] === tmp44) {
                          let tmp47 = cResult[31];
                        }
                        const _Symbol6 = Symbol;
                        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl6 = tmp(tmp2[11]).intl;
                          const stringResult1 = intl6.string(tmp(tmp2[11]).t.CkfdNx);
                          cResult[32] = stringResult1;
                          let tmp51 = stringResult1;
                        } else {
                          tmp51 = cResult[32];
                        }
                        if (cResult[33] === domain) {
                          if (cResult[34] === navigation) {
                            if (cResult[35] === proof) {
                              let tmp53 = cResult[36];
                            }
                            if (cResult[37] === tmp4.button) {
                              if (cResult[38] === tmp53) {
                                let tmp56 = cResult[39];
                              }
                              if (cResult[40] === tmp4.container) {
                                if (cResult[41] === tmp35) {
                                  if (cResult[42] === tmp39) {
                                    if (cResult[43] === tmp47) {
                                      if (cResult[44] === tmp56) {
                                        let tmp60 = cResult[45];
                                      }
                                      return tmp60;
                                    }
                                  }
                                }
                              }
                              const obj8 = { bottom: true, style: tmp4.container, children: null };
                              const items = [tmp12, tmp35, tmp39, tmp47, tmp56];
                              obj8.children = items;
                              const tmp62 = closure_9(tmp(tmp2[16]).SafeAreaPaddingView, obj8);
                              cResult[40] = tmp4.container;
                              cResult[41] = tmp35;
                              cResult[42] = tmp39;
                              cResult[43] = tmp47;
                              cResult[44] = tmp56;
                              cResult[45] = tmp62;
                              tmp60 = tmp62;
                            }
                            const obj9 = { style: tmp4.button, children: tmp53 };
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
                            navigation.push(constants.PROOF_HTTP, { proof, domain });
                          },
                        };
                        const tmp55 = closure_8(tmp(tmp2[15]).Button, obj10);
                        cResult[33] = domain;
                        cResult[34] = navigation;
                        cResult[35] = proof;
                        cResult[36] = tmp55;
                        tmp53 = tmp55;
                      }
                      const obj11 = { style: tmp4.button, children: tmp44 };
                      const tmp50 = closure_8(View, obj11);
                      cResult[29] = tmp4.button;
                      cResult[30] = tmp44;
                      cResult[31] = tmp50;
                      tmp47 = tmp50;
                    }
                    const obj12 = { loading: tmp9, text: tmp42, onPress: tmp10 };
                    const tmp46 = closure_8(tmp(tmp2[15]).Button, obj12);
                    cResult[26] = tmp9;
                    cResult[27] = tmp10;
                    cResult[28] = tmp46;
                    tmp44 = tmp46;
                  }
                  let tmp40 = null != tmp7;
                  if (tmp40) {
                    const obj13 = {
                      variant: "text-md/normal",
                      color: "text-feedback-critical",
                      style: tmp4.error,
                      children: tmp7,
                    };
                    tmp40 = closure_8(tmp(tmp2[12]).Text, obj13);
                  }
                  cResult[22] = tmp7;
                  cResult[23] = tmp4.error;
                  cResult[24] = tmp40;
                  tmp39 = tmp40;
                }
              }
            }
            const obj14 = { style: tmp4.dns, children: null };
            const items1 = [tmp15, tmp20, tmp23, tmp26, tmp29, tmp32];
            obj14.children = items1;
            const tmp38 = closure_9(View, obj14);
            cResult[17] = tmp4.dns;
            cResult[18] = tmp26;
            cResult[19] = tmp32;
            cResult[20] = tmp20;
            cResult[21] = tmp38;
            tmp35 = tmp38;
          }
          const obj15 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: proof };
          const tmp34 = closure_8(tmp(tmp2[12]).Text, obj15);
          cResult[14] = proof;
          cResult[15] = tmp4.code;
          cResult[16] = tmp34;
          tmp32 = tmp34;
        }
        const obj16 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: tmp18 };
        const tmp22 = closure_8(tmp(tmp2[12]).Text, obj16);
        cResult[7] = tmp4.code;
        cResult[8] = tmp18;
        cResult[9] = tmp22;
        tmp20 = tmp22;
      }
      function verify() {
        View(true);
        noop(null);
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: timestampProducer.CONNECTION(constants.DOMAIN, domain),
          body: {},
          rejectWithError: false,
        };
        const postResult = HTTP.post(request);
        const nextPromise = HTTP.post(request).then(() => {
          onClose();
        });
        HTTP.post(request)
          .then(() => {
            onClose();
          })
          .catch((error) => {
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
          })
          .finally(() => {
            closure_1_5(false);
          });
      }
      cResult[0] = domain;
      cResult[1] = onClose;
      cResult[2] = verify;
      tmp10 = verify;
      const tmp8 = navigation(noop.useState(false), 2);
    }
  : function DNSProofScreen(proof) {
      ({ onClose: require, domain } = proof);
      proof = proof.proof;
      noop = undefined;
      c5 = undefined;
      const tmp = closure_10();
      _slicedToArray = require("useNavigation").useNavigation();
      const obj = require("useNavigation");
      [tmp5, c4] = noop.useState(null);
      const tmp4 = _slicedToArray(noop.useState(null), 2);
      [tmp7, c5] = noop.useState(false);
      const obj2 = { bottom: true, style: tmp.container, children: null };
      const obj3 = { variant: "text-md/normal", children: null };
      const intl = require("util").intl;
      obj3.children = intl.string(require("util").t.cSURbq);
      const items = [closure_8(require("Text/Text").Text, obj3), , , ,];
      const obj4 = { style: tmp.dns, children: null };
      const obj5 = { variant: "text-md/normal", children: null };
      const intl2 = require("util").intl;
      obj5.children = intl2.string(require("util").t.GL3q7k);
      const items1 = [closure_8(require("Text/Text").Text, obj5), , , , ,];
      const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
      const tmp6 = _slicedToArray(noop.useState(false), 2);
      obj6.children = require("DomainVerifyUtils").getDnsName(domain);
      items1[1] = closure_8(require("Text/Text").Text, obj6);
      const obj8 = { variant: "text-md/normal", children: null };
      const intl3 = require("util").intl;
      obj8.children = intl3.string(require("util").t.Ccmixu);
      items1[2] = closure_8(require("Text/Text").Text, obj8);
      items1[3] = closure_8(require("Text/Text").Text, {
        variant: "text-md/normal",
        selectable: true,
        style: tmp.code,
        children: "TXT",
      });
      const obj10 = { variant: "text-md/normal", children: null };
      const intl4 = require("util").intl;
      obj10.children = intl4.string(require("util").t.PVLriT);
      items1[4] = closure_8(require("Text/Text").Text, obj10);
      items1[5] = closure_8(require("Text/Text").Text, {
        variant: "text-md/normal",
        selectable: true,
        style: tmp.code,
        children: proof,
      });
      obj4.children = items1;
      items[1] = closure_9(c5, obj4);
      let tmp9Result = null != tmp5;
      if (tmp9Result) {
        const obj12 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
        tmp9Result = closure_8(require("Text/Text").Text, obj12);
      }
      items[2] = tmp9Result;
      const obj13 = { style: tmp.button, children: null };
      const obj14 = { loading: tmp7, text: null, onPress: null };
      const intl5 = require("util").intl;
      obj14.text = intl5.string(require("util").t["13ofGu"]);
      obj14.onPress = function verify() {
        _undefined2(true);
        _undefined(null);
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: timestampProducer.CONNECTION(constants.DOMAIN, domain),
          body: {},
          rejectWithError: false,
        };
        const postResult = HTTP.post(request);
        const nextPromise = HTTP.post(request).then(() => {
          closure_1_0();
        });
        HTTP.post(request)
          .then(() => {
            closure_1_0();
          })
          .catch((error) => {
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
          })
          .finally(() => {
            _undefined2(false);
          });
      };
      obj13.children = closure_8(require("components/Button/Button").Button, obj14);
      items[3] = closure_8(c5, obj13);
      const obj15 = { style: tmp.button, children: null };
      const obj16 = { variant: "secondary", text: null, onPress: null };
      const intl6 = require("util").intl;
      obj16.text = intl6.string(require("util").t.CkfdNx);
      obj16.onPress = function onPress() {
        closure_3.push(constants.PROOF_HTTP, { proof, domain });
      };
      obj15.children = closure_8(require("components/Button/Button").Button, obj16);
      items[4] = closure_8(c5, obj15);
      obj2.children = items;
      return closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj2);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HTTPProofScreen(onClose) {
      const cResult = onClose(navigation[8]).c(40);
      onClose = onClose.onClose;
      let domain = onClose.domain;
      const proof = onClose.proof;
      const tmp4 = closure_10();
      const obj = onClose(navigation[8]);
      navigation = onClose(navigation[9]).useNavigation();
      const obj2 = onClose(navigation[9]);
      [tmp7, _slicedToArray] = noop.useState(null);
      const tmp6 = _slicedToArray(noop.useState(null), 2);
      [tmp9, noop] = noop.useState(false);
      if (cResult[0] === domain) {
        if (cResult[1] === onClose) {
          let tmp10 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/normal", children: null };
          const intl = tmp(tmp2[11]).intl;
          obj3.children = intl.string(tmp(tmp2[11]).t.p4ql7y);
          const tmp14 = closure_8(tmp(tmp2[12]).Text, obj3);
          cResult[3] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-md/normal", children: null };
          const intl2 = tmp(tmp2[11]).intl;
          obj4.children = intl2.string(tmp(tmp2[11]).t.GL3q7k);
          const tmp17 = closure_8(tmp(tmp2[12]).Text, obj4);
          cResult[4] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== domain) {
          const httpName = tmp(tmp2[14]).getHttpName(domain);
          cResult[5] = domain;
          cResult[6] = httpName;
          let tmp18 = httpName;
          const tmpResult = tmp(tmp2[14]);
        } else {
          tmp18 = cResult[6];
        }
        if (cResult[7] === tmp4.code) {
          if (cResult[8] === tmp18) {
            let tmp20 = cResult[9];
          }
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "text-md/normal", children: null };
            const intl3 = tmp(tmp2[11]).intl;
            obj5.children = intl3.string(tmp(tmp2[11]).t.PVLriT);
            const tmp25 = closure_8(tmp(tmp2[12]).Text, obj5);
            cResult[10] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] === proof) {
            if (cResult[12] === tmp4.code) {
              let tmp26 = cResult[13];
            }
            if (cResult[14] === tmp4.dns) {
              if (cResult[15] === tmp26) {
                if (cResult[16] === tmp20) {
                  let tmp29 = cResult[17];
                }
                if (cResult[18] === tmp7) {
                  if (cResult[19] === tmp4.error) {
                    let tmp33 = cResult[20];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(tmp2[11]).intl;
                    const stringResult = intl4.string(tmp(tmp2[11]).t["13ofGu"]);
                    cResult[21] = stringResult;
                    let tmp36 = stringResult;
                  } else {
                    tmp36 = cResult[21];
                  }
                  if (cResult[22] === tmp9) {
                    if (cResult[23] === tmp10) {
                      let tmp38 = cResult[24];
                    }
                    if (cResult[25] === tmp4.button) {
                      if (cResult[26] === tmp38) {
                        let tmp41 = cResult[27];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = tmp(tmp2[11]).intl;
                        const stringResult1 = intl5.string(tmp(tmp2[11]).t.RhJMVQ);
                        cResult[28] = stringResult1;
                        let tmp45 = stringResult1;
                      } else {
                        tmp45 = cResult[28];
                      }
                      if (cResult[29] !== navigation) {
                        const obj6 = {
                          variant: "secondary",
                          text: tmp45,
                          onPress() {
                            navigation.pop();
                          },
                        };
                        const tmp49 = closure_8(tmp(tmp2[15]).Button, obj6);
                        cResult[29] = navigation;
                        cResult[30] = tmp49;
                        let tmp47 = tmp49;
                      } else {
                        tmp47 = cResult[30];
                      }
                      if (cResult[31] === tmp4.button) {
                        if (cResult[32] === tmp47) {
                          let tmp50 = cResult[33];
                        }
                        if (cResult[34] === tmp4.container) {
                          if (cResult[35] === tmp29) {
                            if (cResult[36] === tmp33) {
                              if (cResult[37] === tmp41) {
                                if (cResult[38] === tmp50) {
                                  let tmp54 = cResult[39];
                                }
                                return tmp54;
                              }
                            }
                          }
                        }
                        const obj7 = { bottom: true, style: tmp4.container, children: null };
                        const items = [tmp12, tmp29, tmp33, tmp41, tmp50];
                        obj7.children = items;
                        const tmp56 = closure_9(tmp(tmp2[16]).SafeAreaPaddingView, obj7);
                        cResult[34] = tmp4.container;
                        cResult[35] = tmp29;
                        cResult[36] = tmp33;
                        cResult[37] = tmp41;
                        cResult[38] = tmp50;
                        cResult[39] = tmp56;
                        tmp54 = tmp56;
                      }
                      const obj8 = { style: tmp4.button, children: tmp47 };
                      const tmp53 = closure_8(View, obj8);
                      cResult[31] = tmp4.button;
                      cResult[32] = tmp47;
                      cResult[33] = tmp53;
                      tmp50 = tmp53;
                    }
                    const obj9 = { style: tmp4.button, children: tmp38 };
                    const tmp44 = closure_8(View, obj9);
                    cResult[25] = tmp4.button;
                    cResult[26] = tmp38;
                    cResult[27] = tmp44;
                    tmp41 = tmp44;
                  }
                  const obj10 = { loading: tmp9, text: tmp36, onPress: tmp10 };
                  const tmp40 = closure_8(tmp(tmp2[15]).Button, obj10);
                  cResult[22] = tmp9;
                  cResult[23] = tmp10;
                  cResult[24] = tmp40;
                  tmp38 = tmp40;
                }
                let tmp34 = null != tmp7;
                if (tmp34) {
                  const obj11 = {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    style: tmp4.error,
                    children: tmp7,
                  };
                  tmp34 = closure_8(tmp(tmp2[12]).Text, obj11);
                }
                cResult[18] = tmp7;
                cResult[19] = tmp4.error;
                cResult[20] = tmp34;
                tmp33 = tmp34;
              }
            }
            const obj12 = { style: tmp4.dns, children: null };
            const items1 = [tmp15, tmp20, tmp23, tmp26];
            obj12.children = items1;
            const tmp32 = closure_9(View, obj12);
            cResult[14] = tmp4.dns;
            cResult[15] = tmp26;
            cResult[16] = tmp20;
            cResult[17] = tmp32;
            tmp29 = tmp32;
          }
          const obj13 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: proof };
          const tmp28 = closure_8(tmp(tmp2[12]).Text, obj13);
          cResult[11] = proof;
          cResult[12] = tmp4.code;
          cResult[13] = tmp28;
          tmp26 = tmp28;
        }
        const obj14 = { variant: "text-md/normal", selectable: true, style: tmp4.code, children: tmp18 };
        const tmp22 = closure_8(tmp(tmp2[12]).Text, obj14);
        cResult[7] = tmp4.code;
        cResult[8] = tmp18;
        cResult[9] = tmp22;
        tmp20 = tmp22;
      }
      function verify() {
        noop(true);
        _slicedToArray(null);
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: timestampProducer.CONNECTION(constants.DOMAIN, domain),
          body: {},
          rejectWithError: false,
        };
        const postResult = HTTP.post(request);
        const nextPromise = HTTP.post(request).then(() => {
          onClose();
        });
        HTTP.post(request)
          .then(() => {
            onClose();
          })
          .catch((error) => {
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
          })
          .finally(() => {
            closure_1_4(false);
          });
      }
      cResult[0] = domain;
      cResult[1] = onClose;
      cResult[2] = verify;
      tmp10 = verify;
      const tmp8 = _slicedToArray(noop.useState(false), 2);
    }
  : function HTTPProofScreen(children) {
      ({ onClose: require, domain } = children);
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_10();
      dependencyMap = useNavigation.useNavigation();
      [tmp5, c3] = noop.useState(null);
      const tmp4 = _slicedToArray(noop.useState(null), 2);
      [tmp7, c4] = noop.useState(false);
      const obj2 = { bottom: true, style: tmp.container, children: null };
      const obj3 = { variant: "text-md/normal", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.p4ql7y);
      const items = [closure_8(Text_Text.Text, obj3), , , ,];
      const obj4 = { style: tmp.dns, children: null };
      const obj5 = { variant: "text-md/normal", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.GL3q7k);
      const items1 = [closure_8(Text_Text.Text, obj5), , ,];
      const obj6 = { variant: "text-md/normal", selectable: true, style: tmp.code, children: null };
      const tmp6 = _slicedToArray(noop.useState(false), 2);
      obj6.children = DomainVerifyUtils.getHttpName(domain);
      items1[1] = closure_8(Text_Text.Text, obj6);
      const obj8 = { variant: "text-md/normal", children: null };
      const intl3 = util.intl;
      obj8.children = intl3.string(util.t.PVLriT);
      items1[2] = closure_8(Text_Text.Text, obj8);
      items1[3] = closure_8(Text_Text.Text, {
        variant: "text-md/normal",
        selectable: true,
        style: tmp.code,
        children: children.proof,
      });
      obj4.children = items1;
      items[1] = closure_9(View, obj4);
      let tmp9Result = null != tmp5;
      if (tmp9Result) {
        const obj10 = { variant: "text-md/normal", color: "text-feedback-critical", style: tmp.error, children: tmp5 };
        tmp9Result = closure_8(Text_Text.Text, obj10);
      }
      items[2] = tmp9Result;
      const obj11 = { style: tmp.button, children: null };
      const obj12 = { loading: tmp7, text: null, onPress: null };
      const intl4 = util.intl;
      obj12.text = intl4.string(util.t["13ofGu"]);
      obj12.onPress = function verify() {
        _undefined2(true);
        _undefined(null);
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: timestampProducer.CONNECTION(constants.DOMAIN, domain),
          body: {},
          rejectWithError: false,
        };
        const postResult = HTTP.post(request);
        const nextPromise = HTTP.post(request).then(() => {
          closure_1_0();
        });
        HTTP.post(request)
          .then(() => {
            closure_1_0();
          })
          .catch((error) => {
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
          })
          .finally(() => {
            _undefined2(false);
          });
      };
      obj11.children = closure_8(components_Button_Button.Button, obj12);
      items[3] = closure_8(View, obj11);
      const obj13 = { style: tmp.button, children: null };
      const obj14 = { variant: "secondary", text: null, onPress: null };
      const intl5 = util.intl;
      obj14.text = intl5.string(util.t.RhJMVQ);
      obj14.onPress = function onPress() {
        closure_2.pop();
      };
      obj13.children = closure_8(components_Button_Button.Button, obj14);
      items[4] = closure_8(View, obj13);
      obj2.children = items;
      return closure_9(common_SafeAreaView.SafeAreaPaddingView, obj2);
    };
ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginTop: 16,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/DomainVerifyModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DomainVerifyModal() {
      const cResult = onClose(576).c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        onClose = function onClose() {
          return ModalActionCreatorsDefault.pop();
        };
        cResult[0] = onClose;
      } else {
        onClose = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { headerTitle: null, headerLeft: null, render: null };
        const intl = tmp(1126).intl;
        obj2.headerTitle = intl.string(tmp(1126).t["7lo8+e"]);
        obj2.headerLeft = tmp(6203).getHeaderBackButton(onClose);
        obj2.render = function render() {
          return closure_2_8(closure_12, { onClose });
        };
        cResult[1] = obj2;
        let tmp5 = obj2;
        const tmpResult = tmp(6203);
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { headerTitle: null, headerLeft: null, render: null };
        const intl2 = tmp(1126).intl;
        obj3.headerTitle = intl2.string(tmp(1126).t["7lo8+e"]);
        obj3.headerLeft = tmp(6203).getHeaderBackButton(onClose);
        obj3.render = function render(domain) {
          return closure_2_8(closure_13, { domain: domain.domain, proof: domain.proof, onClose });
        };
        cResult[2] = obj3;
        let tmp6 = obj3;
        const tmpResult3 = tmp(6203);
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {};
        obj4[constants2.DOMAIN] = tmp5;
        obj4[constants2.PROOF_DNS] = tmp6;
        const obj5 = { headerTitle: null, headerLeft: null, render: null };
        const intl3 = tmp(1126).intl;
        obj5.headerTitle = intl3.string(tmp(1126).t["7lo8+e"]);
        obj5.headerLeft = tmp(6203).getHeaderBackButton(onClose);
        obj5.render = function render(domain) {
          return closure_2_8(closure_14, { domain: domain.domain, proof: domain.proof, onClose });
        };
        obj4[constants2.PROOF_HTTP] = obj5;
        cResult[3] = obj4;
        let tmp7 = obj4;
        const tmpResult4 = tmp(6203);
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { screens: tmp7, initialRouteName: constants2.DOMAIN, headerBackTitle: null };
        const intl4 = tmp(1126).intl;
        obj6.headerBackTitle = intl4.string(tmp(1126).t["13/7kX"]);
        const tmp12 = closure_8(tmp(6679).Navigator, obj6);
        cResult[4] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : function DomainVerifyModal(arg0) {
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        function onClose() {
          return ModalActionCreatorsDefault.pop();
        }
        const obj = {};
        const obj2 = { headerTitle: null, headerLeft: null, render: null };
        const intl = onClose(1126).intl;
        obj2.headerTitle = intl.string(onClose(1126).t["7lo8+e"]);
        obj2.headerLeft = onClose(6203).getHeaderBackButton(onClose);
        obj2.render = function render() {
          return closure_2_8(closure_12, { onClose });
        };
        obj[constants2.DOMAIN] = obj2;
        const obj4 = { headerTitle: null, headerLeft: null, render: null };
        const intl2 = onClose(1126).intl;
        obj4.headerTitle = intl2.string(onClose(1126).t["7lo8+e"]);
        const obj3 = onClose(6203);
        obj4.headerLeft = onClose(6203).getHeaderBackButton(onClose);
        obj4.render = function render(domain) {
          return closure_2_8(closure_13, { domain: domain.domain, proof: domain.proof, onClose });
        };
        obj[constants2.PROOF_DNS] = obj4;
        const obj6 = { headerTitle: null, headerLeft: null, render: null };
        const intl3 = onClose(1126).intl;
        obj6.headerTitle = intl3.string(onClose(1126).t["7lo8+e"]);
        const obj5 = onClose(6203);
        obj6.headerLeft = onClose(6203).getHeaderBackButton(onClose);
        obj6.render = function render(domain) {
          return closure_2_8(closure_14, { domain: domain.domain, proof: domain.proof, onClose });
        };
        obj[constants2.PROOF_HTTP] = obj6;
        const obj8 = { screens: obj, initialRouteName: constants2.DOMAIN, headerBackTitle: null };
        const intl4 = onClose(1126).intl;
        obj8.headerBackTitle = intl4.string(onClose(1126).t["13/7kX"]);
        return closure_8(onClose(6679).Navigator, obj8);
      }
    };
