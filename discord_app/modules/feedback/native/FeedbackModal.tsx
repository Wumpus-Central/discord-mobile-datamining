// discord_app/modules/feedback/native/FeedbackModal.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _require, arr1, importDefault, tmp3;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({
  helpDeskLabel: { lineHeight: 16, marginTop: 8 },
  bottomContainer: { paddingHorizontal: 16 },
  submitButton: { marginTop: 24, marginBottom: 24 },
});
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (result) => {
      let descriptionLabel;
      let first;
      let format;
      let hideHelpdeskLink;
      let items1;
      let obj6;
      let obj8;
      let require;
      let titleLabel;
      let tmp7;
      let tmp9;
      let value;
      let obj = require("react");
      const cResult = obj.c(35);
      result = result.result;
      require = result;
      const trackReport = result.trackReport;
      ({ titleLabel, descriptionLabel, hideHelpdeskLink } = result);
      const tmp4 = closure_9();
      const reason = result.reason;
      [value, tmp7] = react.useState("");
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
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === label) {
        let tmp11;
        let tmp14;
        let tmp17;
        if (cResult[3] === tmp9) {
          tmp11 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = closure_7(require("Form").FormDivider, {});
          cResult[5] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] !== descriptionLabel) {
          let stringResult1 = descriptionLabel;
          if (descriptionLabel == null) {
            const intl2 = tmp(tmp2[7]).intl;
            stringResult1 = intl2.string(tmp(tmp2[7]).t.h95hcn);
          }
          cResult[6] = descriptionLabel;
          cResult[7] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] === value) {
          let tmp19;
          if (cResult[9] === tmp17) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === tmp11) {
            let tmp21;
            if (cResult[12] === tmp19) {
              tmp21 = cResult[13];
            }
            if (cResult[14] === hideHelpdeskLink) {
              let tmp25;
              let tmp31;
              if (cResult[15] === tmp4.helpDeskLabel) {
                tmp25 = cResult[16];
              }
              let tmp30 = null == value;
              const submitButton = tmp4.submitButton;
              if (!tmp30) {
                tmp30 = "" === value;
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[7]).intl;
                const stringResult2 = intl4.string(require("intl").t.geKm7t);
                cResult[17] = stringResult2;
                tmp31 = stringResult2;
              } else {
                tmp31 = cResult[17];
              }
              if (cResult[18] === value) {
                if (cResult[19] === result) {
                  let tmp33;
                  if (cResult[20] === trackReport) {
                    tmp33 = cResult[21];
                  }
                  if (cResult[22] === tmp30) {
                    let tmp34;
                    if (cResult[23] === tmp33) {
                      tmp34 = cResult[24];
                    }
                    if (cResult[25] === tmp4.submitButton) {
                      let tmp37;
                      if (cResult[26] === tmp34) {
                        tmp37 = cResult[27];
                      }
                      if (cResult[28] === tmp4.bottomContainer) {
                        if (cResult[29] === tmp37) {
                          let tmp41;
                          if (cResult[30] === tmp25) {
                            tmp41 = cResult[31];
                          }
                          if (cResult[32] === tmp41) {
                            let tmp45;
                            if (cResult[33] === tmp21) {
                              tmp45 = cResult[34];
                            }
                            return tmp45;
                          }
                          const items = [,];
                          const obj2 = { keyboardShouldPersistTaps: "handled", children: null };
                          items[0] = tmp21;
                          items[1] = tmp41;
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
                          const tmp48 = closure_8(closure_6, obj2);
                          cResult[32] = tmp41;
                          cResult[33] = tmp21;
                          cResult[34] = tmp48;
                          tmp45 = tmp48;
                        }
                      }
                      const obj3 = { style: tmp24, children: items1 };
                      items1 = [tmp25];
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
                      const tmp44 = closure_8(closure_5, obj3);
                      cResult[28] = tmp4.bottomContainer;
                      cResult[29] = tmp37;
                      cResult[30] = tmp25;
                      cResult[31] = tmp44;
                      tmp41 = tmp44;
                    }
                    const obj4 = { style: submitButton, children: tmp34 };
                    const tmp40 = closure_7(closure_5, obj4);
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
                    cResult[26] = tmp34;
                    cResult[27] = tmp40;
                    tmp37 = tmp40;
                  }
                  const obj5 = { disabled: tmp30, text: tmp31, onPress: tmp33 };
                  const tmp36 = closure_7(require("components/Button/Button").Button, obj5);
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
                  cResult[22] = tmp30;
                  cResult[23] = tmp33;
                  cResult[24] = tmp36;
                  tmp34 = tmp36;
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
              tmp33 = U;
            }
            let tmp26 = !hideHelpdeskLink;
            if (tmp26) {
              const obj7 = {
                style: tmp4.helpDeskLabel,
                variant: "text-xs/medium",
                color: "text-muted",
                children: format(tmp28, obj8),
              };
              const Text = tmp(tmp2[9]).Text;
              const intl3 = tmp(tmp2[7]).intl;
              format = intl3.format;
              obj8 = { helpdeskURL: obj6.getSubmitRequestURL() };
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
              obj6 = trackReport(value[10]);
              tmp26 = closure_7(Text, obj7);
            }
            cResult[14] = hideHelpdeskLink;
            cResult[15] = tmp4.helpDeskLabel;
            cResult[16] = tmp26;
            tmp25 = tmp26;
          }
          const items2 = [, ,];
          const obj9 = { children: null };
          items2[0] = tmp11;
          items2[1] = tmp14;
          items2[2] = tmp19;
          const tmp23 = closure_8(require("Form").FormSection, obj9);
          cResult[11] = tmp11;
          cResult[12] = tmp19;
          cResult[13] = tmp23;
          tmp21 = tmp23;
        }
        const obj10 = { value, title: tmp17, onChange: tmp7, multiline: true, numberOfLines: 4, autoCorrect: true };
        const tmp20 = closure_7(require("Form").FormInput, obj10);
        cResult[8] = value;
        cResult[9] = tmp17;
        cResult[10] = tmp20;
        tmp19 = tmp20;
      }
      const tmp12 = closure_7(
        require("Form").FormInput,
        { value: label, title: tmp9, disabled: true },
        "channel-input",
      );
      cResult[2] = label;
      cResult[3] = tmp9;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : (result) => {
      let Button;
      let descriptionLabel;
      let first;
      let format;
      let hideHelpdeskLink;
      let intl4;
      let items2;
      let obj10;
      let obj6;
      let obj7;
      let titleLabel;
      let tmp4;
      let value;
      let ybi2tD;
      result = result.result;
      const require = result;
      ({ trackReport: importDefault, titleLabel, descriptionLabel, hideHelpdeskLink } = result);
      value = undefined;
      const tmp = closure_9();
      const reason = result.reason;
      [value, tmp4] = react.useState("");
      const FormSection = require("Form").FormSection;
      let label;
      const FormInput = require("Form").FormInput;
      if (reason != null) {
        label = reason.label;
      }
      let obj = { value: label, title: titleLabel, disabled: true };
      if (titleLabel == null) {
        const intl = tmp7(tmp8[7]).intl;
        titleLabel = intl.string(tmp7(tmp8[7]).t.vcqwCj);
      }
      const items = [closure_7(FormInput, obj, "channel-input"), closure_7(require("Form").FormDivider, {})];
      const obj2 = {
        value,
        title: descriptionLabel,
        onChange: tmp4,
        multiline: true,
        numberOfLines: 4,
        autoCorrect: true,
      };
      const FormInput2 = tmp7(tmp8[8]).FormInput;
      if (descriptionLabel == null) {
        const intl2 = tmp7(tmp8[7]).intl;
        descriptionLabel = intl2.string(tmp7(tmp8[7]).t.h95hcn);
      }
      const obj3 = { children: items };
      items[2] = closure_7(FormInput2, obj2);
      const items1 = [closure_8(FormSection, obj3)];
      let tmp9Result = !hideHelpdeskLink;
      const obj4 = { style: tmp.bottomContainer, children: items2 };
      if (tmp9Result) {
        const obj5 = {
          style: tmp.helpDeskLabel,
          variant: "text-xs/medium",
          color: "text-muted",
          children: format(ybi2tD, obj6),
        };
        const Text = tmp7(tmp8[9]).Text;
        const intl3 = tmp7(tmp8[7]).intl;
        format = intl3.format;
        obj6 = { helpdeskURL: obj7.getSubmitRequestURL() };
        ybi2tD = tmp7(tmp8[7]).t.ybi2tD;
        obj7 = require("HelpdeskUtils");
        tmp9Result = closure_7(Text, obj5);
      }
      items2 = [tmp9Result];
      let tmp14 = null == value;
      const obj8 = { style: tmp.submitButton, children: closure_7(Button, obj10) };
      Button = tmp7(tmp8[12]).Button;
      if (!tmp14) {
        tmp14 = "" === value;
      }
      const obj9 = { keyboardShouldPersistTaps: "handled", children: items1 };
      obj10 = {
        disabled: tmp14,
        text: intl4.string(require("intl").t.geKm7t),
        onPress() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
          const obj = { feedback };
          const merged = Object.assign(require);
          importDefault(obj);
        },
      };
      intl4 = tmp7(tmp8[7]).intl;
      items2[1] = closure_7(closure_5, obj8);
      items1[1] = closure_8(closure_5, obj4);
      return closure_8(closure_6, obj9);
    };
let result = size.fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  let intl;
  let obj2;
  let obj3;
  let obj4;
  _require = result;
  result = result.result;
  importDefault = result;
  const trackReport = result.trackReport;
  const ref = react.useRef({ result, trackReport });
  const effect = react.useEffect(() => {
    const obj = { result: importDefault, trackReport };
    ref.current = obj;
  });
  const callback = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  let obj = { initialRouteName: "Feedback", screens: obj2 };
  obj2 = { Feedback: obj3 };
  obj3 = {
    title: intl.string(require("intl").t["dBx+Cn"]),
    headerLeft: obj4.getHeaderCloseButton(callback),
    render() {
      const obj = {};
      const merged = Object.assign(_require);
      return metroImportDefault(closure_10, obj);
    },
  };
  const Navigator = require("Navigator").Navigator;
  intl = require("intl").intl;
  obj4 = require("NavigatorHeader");
  return closure_7(Navigator, obj);
}
