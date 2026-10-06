// === Module 11491: AutomodSubmitFeedbackModal ===

// Module 11491 (AutomodSubmitFeedbackModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import Text_Text from "Text/Text" /* 4892 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6890 */;
import AutomodAlert from "AutomodAlert" /* 7039 */;
import AutomodFeedback from "AutomodFeedback" /* 7040 */;
import GuildAutomodActionCreators from "GuildAutomodActionCreators" /* 11492 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let React, dependencyMap, onClose, onCloseModal, value;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
function customNavbar() {
  const obj = { onClose };
  return closure_2_7(closure_2_12, obj);
}
function headerLeft() {
  return null;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
let c10 = 16;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, headerTitle: { textAlign: "center" }, headerSubtitle: { textAlign: "center", marginTop: 8 }, closeButtonContainer: { marginVertical: 14 }, formBody: obj4, formRow: { paddingVertical: 2 }, radioIndicator: { marginRight: 0 }, submitButtonContainer: rect };
obj2 = { flex: 1, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { marginTop: 24, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let closeButtonContainer;
  let first;
  let header;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(9);
  onClose = onClose.onClose;
  const tmp4 = closure_11();
  ({ header, closeButtonContainer } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.cpT0Cq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onClose) {
    const obj2 = { accessibilityLabel: first, onPress: onClose, source: AssetRegistryDefault };
    const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
    const tmp10 = metroImportDefault(HeaderActionButton, obj2);
    cResult[1] = onClose;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.closeButtonContainer) {
    let tmp11;
    if (cResult[4] === tmp7) {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.header) {
      let tmp13;
      if (cResult[7] === tmp11) {
        tmp13 = cResult[8];
      }
      return tmp13;
    }
    const rect = { top: true, left: true, right: true, style: header, children: tmp11 };
    const tmp15 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, rect);
    cResult[6] = tmp4.header;
    cResult[7] = tmp11;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const tmp12 = metroImportDefault(View, { style: closeButtonContainer, children: tmp7 });
  cResult[3] = tmp4.closeButtonContainer;
  cResult[4] = tmp7;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((onClose) => {
  let HeaderActionButton;
  let intl;
  let obj;
  let obj2;
  onClose = onClose.onClose;
  const tmp = closure_11();
  const rect = { top: true, left: true, right: true, style: tmp.header, children: metroImportDefault(View, obj) };
  obj = { style: tmp.closeButtonContainer, children: metroImportDefault(HeaderActionButton, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { accessibilityLabel: intl.string(intl4.t.cpT0Cq), onPress: onClose, source: AssetRegistryDefault };
  HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  intl = intl4.intl;
  return metroImportDefault(SafeAreaPaddingView, rect);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottom;
  let closure_2;
  let items;
  let left;
  let onSubmit;
  let require;
  let right;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(38);
  ({ feedback: require, onChange: importDefault, onSubmit } = arg0);
  const tmp4 = closure_11();
  dependencyMap = tmp4;
  let obj2 = AutomodFeedback;
  const feedbackOptions = obj2.generateFeedbackOptions();
  const tmp5 = useSafeAreaInsetsDefault();
  ({ left, right, bottom } = tmp5);
  if (cResult[0] !== tmp4.formRow) {
    const fn = function l(children) {
      const obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children };
      return metroImportDefault(Text_Text.Text, obj);
    };
    cResult[0] = tmp4.formRow;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  React = tmp6;
  const sum = c10 + left;
  const sum1 = c10 + right;
  if (cResult[2] === sum) {
    let tmp11;
    if (cResult[3] === sum1) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      let tmp12;
      let tmp14;
      let tmp16;
      let tmp19;
      let tmp21;
      if (cResult[6] === tmp11) {
        tmp12 = cResult[7];
      }
      const _Symbol = Symbol;
      const headerTitle = tmp4.headerTitle;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t["7bdzNo"]);
        cResult[8] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== tmp4.headerTitle) {
        const obj3 = { style: headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp14 };
        const tmp18 = closure_7(Text_Text.Text, obj3);
        cResult[9] = tmp4.headerTitle;
        cResult[10] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[10];
      }
      const _Symbol2 = Symbol;
      const headerSubtitle = tmp4.headerSubtitle;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.Lbpk6m);
        cResult[11] = stringResult1;
        tmp19 = stringResult1;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] !== tmp4.headerSubtitle) {
        const obj4 = { style: headerSubtitle, variant: "text-sm/medium", color: "text-default", children: tmp19 };
        const tmp23 = closure_7(Text_Text.Text, obj4);
        cResult[12] = tmp4.headerSubtitle;
        cResult[13] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[13];
      }
      const formBody = tmp4.formBody;
      const mapped = feedbackOptions.map((value, index) => {
        let obj2;
        value = value.value;
        const require = value;
        const name = value.name;
        const Fragment = React.Fragment;
        const obj = {
          onPress() {
            return importDefault(closure_0);
          },
          trailing: closure_1_7(require("native").RadioIndicator, obj2),
          label: React(name)
        };
        const FormRow = require("Form").FormRow;
        obj2 = { active: require === value, style: closure_2.radioIndicator };
        const children = [closure_1_7(FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {})];
        index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {});
        return closure_1_8(Fragment, { children }, value);
      });
      if (cResult[14] === View) {
        if (cResult[15] === tmp4.formBody) {
          let tmp25;
          if (cResult[16] === mapped) {
            tmp25 = cResult[17];
          }
          const sum2 = bottom + 16;
          const sum3 = c10 + left;
          const sum4 = c10 + right;
          if (cResult[18] === sum2) {
            if (cResult[19] === sum3) {
              let tmp31;
              if (cResult[20] === sum4) {
                tmp31 = cResult[21];
              }
              if (cResult[22] === tmp4.submitButtonContainer) {
                let tmp32;
                let tmp33;
                let tmp35;
                if (cResult[23] === tmp31) {
                  tmp32 = cResult[24];
                }
                const _Symbol3 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = intl4.intl;
                  const stringResult2 = intl3.string(intl4.t.Z6DZZ6);
                  cResult[25] = stringResult2;
                  tmp33 = stringResult2;
                } else {
                  tmp33 = cResult[25];
                }
                if (cResult[26] !== onSubmit) {
                  const obj5 = { size: "md", text: tmp33, onPress: onSubmit };
                  const tmp37 = closure_7(components_Button_Button.Button, obj5);
                  cResult[26] = onSubmit;
                  cResult[27] = tmp37;
                  tmp35 = tmp37;
                } else {
                  tmp35 = cResult[27];
                }
                if (cResult[28] === tmp32) {
                  let tmp38;
                  if (cResult[29] === tmp35) {
                    tmp38 = cResult[30];
                  }
                  if (cResult[31] === View) {
                    if (cResult[32] === tmp21) {
                      if (cResult[33] === tmp25) {
                        if (cResult[34] === tmp38) {
                          if (cResult[35] === tmp12) {
                            let tmp41;
                            if (cResult[36] === tmp16) {
                              tmp41 = cResult[37];
                            }
                            return tmp41;
                          }
                        }
                      }
                    }
                  }
                  const obj6 = { style: tmp12, children: items };
                  items = [tmp16, tmp21, tmp25, tmp38];
                  const tmp43 = closure_8(View, obj6);
                  cResult[31] = View;
                  cResult[32] = tmp21;
                  cResult[33] = tmp25;
                  cResult[34] = tmp38;
                  cResult[35] = tmp12;
                  cResult[36] = tmp16;
                  cResult[37] = tmp43;
                  tmp41 = tmp43;
                }
                const obj7 = { style: tmp32, children: tmp35 };
                const tmp40 = closure_7(View, obj7);
                cResult[28] = tmp32;
                cResult[29] = tmp35;
                cResult[30] = tmp40;
                tmp38 = tmp40;
              }
              const items1 = [tmp4.submitButtonContainer, tmp31];
              cResult[22] = tmp4.submitButtonContainer;
              cResult[23] = tmp31;
              cResult[24] = items1;
              tmp32 = items1;
            }
          }
          const obj8 = { paddingBottom: sum2, paddingLeft: sum3, paddingRight: sum4 };
          cResult[18] = sum2;
          cResult[19] = sum3;
          cResult[20] = sum4;
          cResult[21] = obj8;
          tmp31 = obj8;
        }
      }
      const obj9 = { style: formBody, children: mapped };
      const tmp27 = closure_7(View, obj9);
      cResult[14] = View;
      cResult[15] = tmp4.formBody;
      cResult[16] = mapped;
      cResult[17] = tmp27;
      tmp25 = tmp27;
    }
    const items2 = [tmp4.container, tmp11];
    cResult[5] = tmp4.container;
    cResult[6] = tmp11;
    cResult[7] = items2;
    tmp12 = items2;
  }
  const obj10 = { paddingLeft: sum, paddingRight: sum1 };
  cResult[2] = sum;
  cResult[3] = sum1;
  cResult[4] = obj10;
  tmp11 = obj10;
}) : ((onSubmit) => {
  let Button;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let left;
  let obj9;
  let require;
  let right;
  ({ feedback: require, onChange: importDefault } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const tmp = closure_11();
  dependencyMap = tmp;
  let obj = AutomodFeedback;
  const feedbackOptions = obj.generateFeedbackOptions();
  const tmp2 = useSafeAreaInsetsDefault();
  ({ left, right } = tmp2);
  let obj2 = { style: items, children: items1 };
  items = [tmp.container, ];
  let obj3 = { paddingLeft: c10 + left, paddingRight: c10 + right };
  items[1] = obj3;
  const bottom = tmp2.bottom;
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["7bdzNo"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [closure_7(Text, obj4), , , ];
  const obj5 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.Lbpk6m) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = closure_7(Text2, obj5);
  const obj6 = {
    style: tmp.formBody,
    children: feedbackOptions.map((value, index) => {
      let obj2;
      let obj3;
      value = value.value;
      const require = value;
      const name = value.name;
      const Fragment = React.Fragment;
      const obj = {
        onPress() {
          return importDefault(closure_0);
        },
        trailing: closure_1_7(require("native").RadioIndicator, obj2),
        label: closure_1_7(require("Text/Text").Text, obj3)
      };
      const FormRow = require("Form").FormRow;
      obj2 = { active: require === value, style: closure_2.radioIndicator };
      obj3 = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: name };
      const children = [closure_1_7(FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {})];
      index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {});
      return closure_1_8(Fragment, { children }, value);
    })
  };
  items1[2] = closure_7(View, obj6);
  const obj7 = { style: items2, children: closure_7(Button, obj9) };
  items2 = [tmp.submitButtonContainer, ];
  const obj8 = { paddingBottom: bottom + 16, paddingLeft: c10 + left, paddingRight: c10 + right };
  items2[1] = obj8;
  obj9 = { size: "md", text: intl3.string(intl4.t.Z6DZZ6), onPress: onSubmit };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[3] = closure_7(View, obj7);
  return closure_8(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCloseModal) => {
  let closure_3;
  let feedback_type;
  let obj = onCloseModal(feedback_type[8]);
  const cResult = obj.c(12);
  const tmp = onCloseModal;
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  const top = automodDecision(feedback_type[14])().top;
  const tmp4 = _slicedToArray(react.useState(onCloseModal(feedback_type[13]).Feedback.BUG), 2);
  const tmp2 = feedback_type;
  feedback_type = tmp4[0];
  _slicedToArray = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(arg0) {
      closure_3(arg0);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === automodDecision) {
    if (cResult[2] === feedback_type) {
      let tmp7;
      if (cResult[3] === onCloseModal) {
        tmp7 = cResult[4];
      }
      if (cResult[5] === feedback_type) {
        if (cResult[6] === tmp7) {
          let tmp8;
          if (cResult[7] === onCloseModal) {
            tmp8 = cResult[8];
          }
          if (cResult[9] === tmp8) {
            let tmp10;
            if (cResult[10] === top) {
              tmp10 = cResult[11];
            }
            return tmp10;
          }
          let obj2 = { screens: tmp8, initialRouteName: SUBMIT_FEEDBACK, headerStatusBarHeight: top };
          const tmp13 = closure_7(tmp(tmp2[23]).Navigator, obj2);
          cResult[9] = tmp8;
          cResult[10] = top;
          cResult[11] = tmp13;
          tmp10 = tmp13;
        }
      }
      _slicedToArray = tmp7;
      let obj3 = {};
      let obj4 = {
        ignoreKeyboard: true,
        title: "",
        customNavbar,
        headerLeft,
        render() {
              const obj = { feedback, onChange, onSubmit };
              return closure_2_7(closure_2_13, obj);
            }
      };
      obj3[SUBMIT_FEEDBACK] = obj4;
      cResult[5] = feedback_type;
      cResult[6] = tmp7;
      cResult[7] = onCloseModal;
      cResult[8] = obj3;
      tmp8 = obj3;
    }
  }
  class S {
    constructor() {
      let channel;
      let messageId;
      const obj = AppAnalyticsUtils;
      const obj2 = { feedback_type, message_id: automodDecision.messageId, content: automodDecision.messageContent, decision_id: automodDecision.decisionId };
      obj.trackWithMetadata(AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, obj2);
      ({ messageId, channel } = automodDecision);
      const obj3 = GuildAutomodActionCreators;
      obj3.executeAlertAction(messageId, channel, AutomodAlert.AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj4 = ToastUtils;
      obj4.presentFeedbackSent();
      onCloseModal();
    }
  }
  cResult[1] = automodDecision;
  cResult[2] = feedback_type;
  cResult[3] = onCloseModal;
  cResult[4] = S;
  tmp7 = S;
}) : ((onCloseModal) => {
  let closure_3;
  let first;
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  first = undefined;
  _slicedToArray = undefined;
  const top = automodDecision(first[14])().top;
  [first, _slicedToArray] = react.useState(onCloseModal(first[13]).Feedback.BUG);
  const items = [first, onCloseModal, automodDecision];
  const memo = react.useMemo(() => {
    let closure_1 = first;
    function onChange(arg0) {
      onSubmit(arg0);
    }
    function onSubmit() {
      let channel;
      let messageId;
      const obj = onCloseModal(first[19]);
      const obj2 = { feedback_type: onChange, message_id: feedback.messageId, content: feedback.messageContent, decision_id: feedback.decisionId };
      obj.trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, obj2);
      ({ messageId, channel } = feedback);
      const obj3 = onCloseModal(first[20]);
      obj3.executeAlertAction(messageId, channel, onCloseModal(first[21]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj4 = onCloseModal(first[22]);
      obj4.presentFeedbackSent();
      onClose();
    }
    let obj = {
      ignoreKeyboard: true,
      title: "",
      customNavbar,
      headerLeft,
      render() {
        const obj = { feedback, onChange, onSubmit };
        return closure_2_7(closure_2_13, obj);
      }
    };
    return { [closure_2_9]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: SUBMIT_FEEDBACK, headerStatusBarHeight: top };
  return closure_7(onCloseModal(first[23]).Navigator, obj);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default tmp4;