// === Module 11284: FeedbackModal ===

// Module 11284 (FeedbackModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

let require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({ helpDeskLabel: { lineHeight: 16, marginTop: 8 }, bottomContainer: { paddingHorizontal: 16 }, submitButton: { marginTop: 24, marginBottom: 24 } });
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((result) => {
  const cResult = require("c").c(35);
  result = result.result;
  require = result;
  const trackReport = result.trackReport;
  ({ titleLabel, descriptionLabel, hideHelpdeskLink } = result);
  const tmp4 = closure_9();
  const reason = result.reason;
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  value = tmp5[0];
  let label;
  if (reason != null) {
    label = reason.label;
  }
  if (cResult[0] !== titleLabel) {
    let stringResult = titleLabel;
    if (titleLabel == null) {
      const intl = tmp(tmp2[7]).intl;
      stringResult = intl.string(tmp(tmp2[7]).t.vcqwCj);
    }
    cResult[0] = titleLabel;
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === label) {
    if (cResult[3] === tmp8) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = closure_7(tmp(tmp2[8]).FormDivider, {});
      cResult[5] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] !== descriptionLabel) {
      let stringResult1 = descriptionLabel;
      if (descriptionLabel == null) {
        const intl2 = tmp(tmp2[7]).intl;
        stringResult1 = intl2.string(tmp(tmp2[7]).t.h95hcn);
      }
      cResult[6] = descriptionLabel;
      cResult[7] = stringResult1;
      let tmp16 = stringResult1;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === value) {
      if (cResult[9] === tmp16) {
        let tmp18 = cResult[10];
      }
      if (cResult[11] === tmp10) {
        if (cResult[12] === tmp18) {
          let tmp20 = cResult[13];
        }
        if (cResult[14] === hideHelpdeskLink) {
          if (cResult[15] === tmp4.helpDeskLabel) {
            let tmp24 = cResult[16];
          }
          let tmp29 = null == value;
          if (!tmp29) {
            tmp29 = "" === value;
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[7]).intl;
            const stringResult2 = intl4.string(tmp(tmp2[7]).t.geKm7t);
            cResult[17] = stringResult2;
            let tmp30 = stringResult2;
          } else {
            tmp30 = cResult[17];
          }
          if (cResult[18] === value) {
            if (cResult[19] === result) {
              if (cResult[20] === trackReport) {
                let tmp32 = cResult[21];
              }
              if (cResult[22] === tmp29) {
                if (cResult[23] === tmp32) {
                  let tmp33 = cResult[24];
                }
                if (cResult[25] === tmp4.submitButton) {
                  if (cResult[26] === tmp33) {
                    let tmp36 = cResult[27];
                  }
                  if (cResult[28] === tmp4.bottomContainer) {
                    if (cResult[29] === tmp36) {
                      if (cResult[30] === tmp24) {
                        let tmp40 = cResult[31];
                      }
                      if (cResult[32] === tmp40) {
                        if (cResult[33] === tmp20) {
                          let tmp44 = cResult[34];
                        }
                        return tmp44;
                      }
                      const items = [tmp20, tmp40];
                      class U {
                        constructor() {
                          arr = closure_1(closure_2[11]);
                          arr1 = arr.pop();
                          obj = {};
                          merged = Object.assign(result);
                          obj.feedback = closure_2;
                          tmp3 = trackReport(obj);
                          return;
                        }
                      }
                      const tmp47 = closure_8(closure_6, { keyboardShouldPersistTaps: "handled", children: null });
                      cResult[32] = tmp40;
                      cResult[33] = tmp20;
                      cResult[34] = tmp47;
                      tmp44 = tmp47;
                      const obj2 = { keyboardShouldPersistTaps: "handled", children: null };
                    }
                  }
                  const obj3 = { style: tmp23, children: null };
                  const items1 = [tmp24, ];
                  class U {
                    constructor() {
                      arr = closure_1(closure_2[11]);
                      arr1 = arr.pop();
                      obj = {};
                      merged = Object.assign(result);
                      obj.feedback = closure_2;
                      tmp3 = trackReport(obj);
                      return;
                    }
                  }
                  obj3.children = items1;
                  const tmp43 = closure_8(closure_5, obj3);
                  cResult[28] = tmp4.bottomContainer;
                  cResult[29] = tmp36;
                  cResult[30] = tmp24;
                  cResult[31] = tmp43;
                  tmp40 = tmp43;
                }
                const obj4 = { style: tmp4.submitButton, children: tmp33 };
                const tmp39 = closure_7(closure_5, obj4);
                class U {
                  constructor() {
                    arr = closure_1(closure_2[11]);
                    arr1 = arr.pop();
                    obj = {};
                    merged = Object.assign(result);
                    obj.feedback = closure_2;
                    tmp3 = trackReport(obj);
                    return;
                  }
                }
                cResult[25] = tmp4.submitButton;
                cResult[26] = tmp33;
                cResult[27] = tmp39;
                tmp36 = tmp39;
              }
              const obj5 = { disabled: tmp29, text: tmp30, onPress: tmp32 };
              const tmp35 = closure_7(tmp(tmp2[12]).Button, obj5);
              class U {
                constructor() {
                  arr = closure_1(closure_2[11]);
                  arr1 = arr.pop();
                  obj = {};
                  merged = Object.assign(result);
                  obj.feedback = closure_2;
                  tmp3 = trackReport(obj);
                  return;
                }
              }
              cResult[22] = tmp29;
              cResult[23] = tmp32;
              cResult[24] = tmp35;
              tmp33 = tmp35;
            }
          }
          class U {
            constructor() {
              arr = closure_1(closure_2[11]);
              arr1 = arr.pop();
              obj = {};
              merged = Object.assign(result);
              obj.feedback = closure_2;
              tmp3 = trackReport(obj);
              return;
            }
          }
          cResult[18] = value;
          cResult[19] = result;
          cResult[20] = trackReport;
          cResult[21] = U;
          tmp32 = U;
        }
        let tmp25 = !hideHelpdeskLink;
        if (!hideHelpdeskLink) {
          const obj7 = { style: tmp4.helpDeskLabel, variant: "text-xs/medium", color: "text-muted", children: null };
          const intl3 = tmp(tmp2[7]).intl;
          const obj8 = { helpdeskURL: null };
          class U {
            constructor() {
              arr = closure_1(closure_2[11]);
              arr1 = arr.pop();
              obj = {};
              merged = Object.assign(result);
              obj.feedback = closure_2;
              tmp3 = trackReport(obj);
              return;
            }
          }
          obj8.helpdeskURL = trackReport(tmp2[10]).getSubmitRequestURL();
          obj7.children = intl3.format(tmp27, obj8);
          tmp25 = closure_7(tmp(tmp2[9]).Text, obj7);
          const obj6 = trackReport(tmp2[10]);
        }
        cResult[14] = hideHelpdeskLink;
        cResult[15] = tmp4.helpDeskLabel;
        cResult[16] = tmp25;
        tmp24 = tmp25;
      }
      const items2 = [tmp10, tmp13, tmp18];
      const tmp22 = closure_8(tmp(tmp2[8]).FormSection, { children: null });
      cResult[11] = tmp10;
      cResult[12] = tmp18;
      cResult[13] = tmp22;
      tmp20 = tmp22;
      const obj9 = { children: null };
    }
    const obj10 = { value, title: tmp16, onChange: tmp5[1], multiline: true, numberOfLines: 4, autoCorrect: true };
    const tmp19 = closure_7(tmp(tmp2[8]).FormInput, obj10);
    cResult[8] = value;
    cResult[9] = tmp16;
    cResult[10] = tmp19;
    tmp18 = tmp19;
  }
  const tmp11 = closure_7(require("Form").FormInput, { value: label, title: tmp8, disabled: true }, "channel-input");
  cResult[2] = label;
  cResult[3] = tmp8;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  let obj = require("c");
}) : ((result) => {
  result = result.result;
  const require = result;
  ({ trackReport: importDefault, titleLabel, descriptionLabel, hideHelpdeskLink } = result);
  value = undefined;
  const tmp = closure_9();
  const reason = result.reason;
  [value, obj2.onChange] = noop.useState("");
  let label;
  if (reason != null) {
    label = reason.label;
  }
  let obj = { value: label, title: null, disabled: true };
  if (titleLabel == null) {
    const intl = tmp6(tmp7[7]).intl;
    titleLabel = intl.string(tmp6(tmp7[7]).t.vcqwCj);
  }
  obj.title = titleLabel;
  const items = [closure_7(require("Form").FormInput, obj, "channel-input"), closure_7(require("Form").FormDivider, {}), ];
  const obj2 = { value, title: null, onChange: null, multiline: true, numberOfLines: 4, autoCorrect: true };
  if (descriptionLabel == null) {
    const intl2 = tmp6(tmp7[7]).intl;
    descriptionLabel = intl2.string(tmp6(tmp7[7]).t.h95hcn);
  }
  const obj3 = { children: null };
  obj2.title = descriptionLabel;
  items[2] = closure_7(require("Form").FormInput, obj2);
  obj3.children = items;
  const items1 = [closure_8(require("Form").FormSection, obj3), ];
  const obj4 = { style: tmp.bottomContainer, children: null };
  let tmp8Result = !hideHelpdeskLink;
  if (!hideHelpdeskLink) {
    const obj5 = { style: tmp.helpDeskLabel, variant: "text-xs/medium", color: "text-muted", children: null };
    const intl3 = tmp6(tmp7[7]).intl;
    const obj6 = { helpdeskURL: require("HelpdeskUtils").getSubmitRequestURL() };
    obj5.children = intl3.format(tmp6(tmp7[7]).t.ybi2tD, obj6);
    tmp8Result = closure_7(tmp6(tmp7[9]).Text, obj5);
    const obj7 = require("HelpdeskUtils");
  }
  const items2 = [tmp8Result, ];
  const obj8 = { style: tmp.submitButton, children: null };
  let tmp13 = null == value;
  if (!tmp13) {
    tmp13 = "" === value;
  }
  const obj9 = { keyboardShouldPersistTaps: "handled", children: null };
  const obj10 = { disabled: tmp13, text: null, onPress: null };
  const intl4 = tmp6(tmp7[7]).intl;
  obj10.text = intl4.string(require("util").t.geKm7t);
  obj10.onPress = function onPress() {
    ModalActionCreatorsDefault.pop();
    const obj = {};
    const merged = Object.assign(result);
    obj.feedback = feedback;
    closure_1_1(obj);
  };
  obj8.children = closure_7(require("components/Button/Button").Button, obj10);
  items2[1] = closure_7(closure_5, obj8);
  obj4.children = items2;
  items1[1] = closure_8(closure_5, obj4);
  obj9.children = items1;
  return closure_8(closure_6, obj9);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  _require = result;
  result = result.result;
  importDefault = result;
  const trackReport = result.trackReport;
  noop.useRef({ result, trackReport });
  const effect = noop.useEffect(() => {
    closure_3.current = { result, trackReport };
  });
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  const obj = { initialRouteName: "Feedback", screens: null };
  const obj2 = { Feedback: null };
  const obj3 = { title: null, headerLeft: null, render: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t["dBx+Cn"]);
  obj3.headerLeft = require("NavigatorHeader").getHeaderCloseButton(callback);
  obj3.render = function render() {
    const merged = Object.assign(closure_0);
    return React5(closure_10, {});
  };
  obj2.Feedback = obj3;
  obj.screens = obj2;
  return closure_7(require("Navigator").Navigator, obj);
};