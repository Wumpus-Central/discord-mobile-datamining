// discord_app/modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import _modDef4809 from "../../../../_runtime/metro/04809__.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import AutomodAlert from "../AutomodAlert.tsx";
import AutomodFeedback from "../AutomodFeedback.tsx";
import GuildAutomodActionCreators from "../GuildAutomodActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
let c10 = 16;
const createStyles = fn(4890);
let obj2 = {
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    flexDirection: "column",
    height: "100%",
    paddingTop: 8,
  },
  header: null,
  headerTitle: null,
  headerSubtitle: null,
  closeButtonContainer: null,
  formBody: null,
  formRow: null,
  radioIndicator: null,
  submitButtonContainer: null,
};
let obj3 = {
  flex: 1,
  paddingVertical: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "column",
  height: "100%",
  paddingTop: 8,
};
obj2.header = {
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingHorizontal: 16,
  paddingVertical: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.headerTitle = { textAlign: "center" };
obj2.headerSubtitle = { textAlign: "center", marginTop: 8 };
obj2.closeButtonContainer = { marginVertical: 14 };
let obj4 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingHorizontal: 16,
  paddingVertical: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.formBody = {
  marginTop: 24,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.formRow = { paddingVertical: 2 };
obj2.radioIndicator = { marginRight: 0 };
let rect = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.submitButtonContainer = rect;
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      const cResult = c.c(9);
      onClose = onClose.onClose;
      const tmp4 = closure_11();
      ({ header, closeButtonContainer } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.cpT0Cq);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const obj2 = { accessibilityLabel: first, onPress: onClose, source: _modDef4809 };
        const tmp10 = React5(HeaderActionButton.HeaderActionButton, obj2);
        cResult[1] = onClose;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.closeButtonContainer) {
        if (cResult[4] === tmp7) {
          let tmp11 = cResult[5];
        }
        if (cResult[6] === tmp4.header) {
          if (cResult[7] === tmp11) {
            let tmp13 = cResult[8];
          }
          return tmp13;
        }
        const rect = { top: true, left: true, right: true, style: header, children: tmp11 };
        const tmp15 = React5(common_SafeAreaView.SafeAreaPaddingView, rect);
        cResult[6] = tmp4.header;
        cResult[7] = tmp11;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const tmp12 = React5(View, { style: closeButtonContainer, children: tmp7 });
      cResult[3] = tmp4.closeButtonContainer;
      cResult[4] = tmp7;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : (onClose) => {
      const tmp = closure_11();
      const rect = { top: true, left: true, right: true, style: tmp.header, children: null };
      const obj = { style: tmp.closeButtonContainer, children: null };
      const obj2 = { accessibilityLabel: null, onPress: null, source: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
      obj2.onPress = onClose.onClose;
      obj2.source = _modDef4809;
      obj.children = React5(HeaderActionButton.HeaderActionButton, obj2);
      rect.children = React5(View, obj);
      return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(38);
      ({ feedback: require, onChange: importDefault, onSubmit } = arg0);
      const tmp4 = closure_11();
      dependencyMap = tmp4;
      const feedbackOptions = AutomodFeedback.generateFeedbackOptions();
      ({ left, right, bottom } = useSafeAreaInsetsDefault());
      if (cResult[0] !== tmp4.formRow) {
        const fn = function l(children) {
          return React5(Text_Text.Text, {
            style: closure_2.formRow,
            variant: "text-md/semibold",
            color: "interactive-text-active",
            children,
          });
        };
        cResult[0] = tmp4.formRow;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      React = tmp6;
      const sum = c10 + left;
      const sum1 = c10 + right;
      if (cResult[2] === sum) {
        if (cResult[3] === sum1) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === tmp4.container) {
          if (cResult[6] === tmp11) {
            let tmp12 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t["7bdzNo"]);
            cResult[8] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== tmp4.headerTitle) {
            const obj3 = {
              style: tmp4.headerTitle,
              variant: "heading-xl/bold",
              color: "mobile-text-heading-primary",
              children: tmp14,
            };
            const tmp18 = closure_7(Text_Text.Text, obj3);
            cResult[9] = tmp4.headerTitle;
            cResult[10] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult1 = intl2.string(util.t.Lbpk6m);
            cResult[11] = stringResult1;
            let tmp19 = stringResult1;
          } else {
            tmp19 = cResult[11];
          }
          if (cResult[12] !== tmp4.headerSubtitle) {
            const obj4 = {
              style: tmp4.headerSubtitle,
              variant: "text-sm/medium",
              color: "text-default",
              children: tmp19,
            };
            const tmp23 = closure_7(Text_Text.Text, obj4);
            cResult[12] = tmp4.headerSubtitle;
            cResult[13] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[13];
          }
          const mapped = feedbackOptions.map((value, index) => {
            value = value.value;
            closure_0 = value;
            const obj = {
              onPress() {
                return importDefault(value);
              },
              trailing: closure_1_7(require("native").RadioIndicator, {
                active: closure_0 === value,
                style: closure_2.radioIndicator,
              }),
              label: React(value.name),
            };
            const children = [
              closure_1_7(require("Form").FormRow, obj),
              index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {}),
            ];
            return closure_1_8(React.Fragment, { children }, value);
          });
          if (cResult[14] === View) {
            if (cResult[15] === tmp4.formBody) {
              if (cResult[16] === mapped) {
                let tmp25 = cResult[17];
              }
              const sum2 = bottom + 16;
              const sum3 = c10 + left;
              const sum4 = c10 + right;
              if (cResult[18] === sum2) {
                if (cResult[19] === sum3) {
                  if (cResult[20] === sum4) {
                    let tmp31 = cResult[21];
                  }
                  if (cResult[22] === tmp4.submitButtonContainer) {
                    if (cResult[23] === tmp31) {
                      let tmp32 = cResult[24];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = util.intl;
                      const stringResult2 = intl3.string(util.t.Z6DZZ6);
                      cResult[25] = stringResult2;
                      let tmp33 = stringResult2;
                    } else {
                      tmp33 = cResult[25];
                    }
                    if (cResult[26] !== onSubmit) {
                      const obj5 = { size: "md", text: tmp33, onPress: onSubmit };
                      const tmp37 = closure_7(components_Button_Button.Button, obj5);
                      cResult[26] = onSubmit;
                      cResult[27] = tmp37;
                      let tmp35 = tmp37;
                    } else {
                      tmp35 = cResult[27];
                    }
                    if (cResult[28] === tmp32) {
                      if (cResult[29] === tmp35) {
                        let tmp38 = cResult[30];
                      }
                      if (cResult[31] === View) {
                        if (cResult[32] === tmp21) {
                          if (cResult[33] === tmp25) {
                            if (cResult[34] === tmp38) {
                              if (cResult[35] === tmp12) {
                                if (cResult[36] === tmp16) {
                                  let tmp41 = cResult[37];
                                }
                                return tmp41;
                              }
                            }
                          }
                        }
                      }
                      const obj6 = { style: tmp12, children: null };
                      const items = [tmp16, tmp21, tmp25, tmp38];
                      obj6.children = items;
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
          const obj9 = { style: tmp4.formBody, children: mapped };
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
      const tmp5 = useSafeAreaInsetsDefault();
    }
  : (onSubmit) => {
      ({ feedback: require, onChange: importDefault } = onSubmit);
      const tmp = closure_11();
      dependencyMap = tmp;
      const feedbackOptions = AutomodFeedback.generateFeedbackOptions();
      const tmp2 = useSafeAreaInsetsDefault();
      ({ left, right } = tmp2);
      const obj2 = { style: null, children: null };
      const items = [tmp.container, { paddingLeft: c10 + left, paddingRight: c10 + right }];
      obj2.style = items;
      const obj4 = {
        style: tmp.headerTitle,
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t["7bdzNo"]);
      const items1 = [closure_7(Text_Text.Text, obj4), , ,];
      const obj5 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.Lbpk6m);
      items1[1] = closure_7(Text_Text.Text, obj5);
      const obj3 = { paddingLeft: c10 + left, paddingRight: c10 + right };
      items1[2] = closure_7(View, {
        style: tmp.formBody,
        children: feedbackOptions.map((children, index) => {
          value = children.value;
          closure_0 = value;
          const obj = {
            onPress() {
              return importDefault(value);
            },
            trailing: closure_1_7(require("native").RadioIndicator, {
              active: closure_0 === value,
              style: closure_2.radioIndicator,
            }),
            label: closure_1_7(require("Text/Text").Text, {
              style: closure_2.formRow,
              variant: "text-md/semibold",
              color: "interactive-text-active",
              children: children.name,
            }),
          };
          children = [
            closure_1_7(require("Form").FormRow, obj),
            index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {}),
          ];
          return closure_1_8(React.Fragment, { children }, value);
        }),
      });
      const obj7 = { style: null, children: null };
      const items2 = [
        tmp.submitButtonContainer,
        { paddingBottom: tmp2.bottom + 16, paddingLeft: c10 + left, paddingRight: c10 + right },
      ];
      obj7.style = items2;
      const obj9 = { size: "md", text: null, onPress: null };
      const intl3 = util.intl;
      obj9.text = intl3.string(util.t.Z6DZZ6);
      obj9.onPress = onSubmit.onSubmit;
      obj7.children = closure_7(components_Button_Button.Button, obj9);
      items1[3] = closure_7(View, obj7);
      obj2.children = items1;
      return closure_8(View, obj2);
    };
ReactCompilerGating = fn(558);
let obj5 = {
  marginTop: 24,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onCloseModal) => {
      const cResult = onCloseModal(feedback_type[8]).c(12);
      onCloseModal = onCloseModal.onCloseModal;
      const automodDecision = onCloseModal.automodDecision;
      const top = automodDecision(feedback_type[14])().top;
      [feedback_type, _slicedToArray] = noop.useState(onCloseModal(feedback_type[13]).Feedback.BUG);
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
          if (cResult[3] === onCloseModal) {
            let tmp7 = cResult[4];
          }
          if (cResult[5] === feedback_type) {
            if (cResult[6] === tmp7) {
              if (cResult[7] === onCloseModal) {
                let tmp8 = cResult[8];
              }
              if (cResult[9] === tmp8) {
                if (cResult[10] === top) {
                  let tmp10 = cResult[11];
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
          closure_129_0 = onCloseModal;
          closure_129_1 = feedback_type;
          closure_129_2 = first1;
          closure_129_3 = tmp7;
          let obj3 = {};
          const obj4 = {
            ignoreKeyboard: true,
            title: "",
            customNavbar() {
              return closure_2_7(closure_2_12, { onClose });
            },
            headerLeft() {
              return null;
            },
            render() {
              return closure_2_7(closure_2_13, { feedback, onChange, onSubmit });
            },
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
          obj = closure_0(closure_2[19]);
          obj1 = {
            feedback_type: closure_2,
            message_id: automodDecision.messageId,
            content: automodDecision.messageContent,
            decision_id: automodDecision.decisionId,
          };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, obj1);
          obj3 = closure_0(closure_2[20]);
          ({ messageId, channel } = automodDecision);
          executeAlertActionResult = obj3.executeAlertAction(
            messageId,
            channel,
            closure_0(closure_2[21]).AutomodAlertActionType.SUBMIT_FEEDBACK,
          );
          obj4 = closure_0(closure_2[22]);
          presentFeedbackSentResult = obj4.presentFeedbackSent();
          tmp4 = onCloseModal();
          return;
        }
      }
      cResult[1] = automodDecision;
      cResult[2] = feedback_type;
      cResult[3] = onCloseModal;
      cResult[4] = S;
      tmp7 = S;
      let obj = onCloseModal(feedback_type[8]);
      tmp = onCloseModal;
      tmp2 = feedback_type;
    }
  : (onCloseModal) => {
      onCloseModal = onCloseModal.onCloseModal;
      const automodDecision = onCloseModal.automodDecision;
      first = undefined;
      _slicedToArray = undefined;
      [first, _slicedToArray] = noop.useState(onCloseModal(first[13]).Feedback.BUG);
      const items = [first, onCloseModal, automodDecision];
      const memo = noop.useMemo(() => {
        const onClose = onCloseModal;
        const feedback = first;
        function onChange(arg0) {
          onSubmit(arg0);
        }
        function onSubmit() {
          onCloseModal(first[19]).trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: onChange,
            message_id: feedback.messageId,
            content: feedback.messageContent,
            decision_id: feedback.decisionId,
          });
          const obj = onCloseModal(first[19]);
          const obj2 = {
            feedback_type: onChange,
            message_id: feedback.messageId,
            content: feedback.messageContent,
            decision_id: feedback.decisionId,
          };
          ({ messageId, channel } = feedback);
          onCloseModal(first[20]).executeAlertAction(
            messageId,
            channel,
            onCloseModal(first[21]).AutomodAlertActionType.SUBMIT_FEEDBACK,
          );
          const obj3 = onCloseModal(first[20]);
          onCloseModal(first[22]).presentFeedbackSent();
          onClose();
        }
        return {
          [closure_2_9]: {
            ignoreKeyboard: true,
            title: "",
            customNavbar() {
              return closure_2_7(closure_2_12, { onClose });
            },
            headerLeft() {
              return null;
            },
            render() {
              return closure_2_7(closure_2_13, { feedback, onChange, onSubmit });
            },
          },
        };
      }, items);
      return closure_7(onCloseModal(first[23]).Navigator, {
        screens: memo,
        initialRouteName: SUBMIT_FEEDBACK,
        headerStatusBarHeight: automodDecision(first[14])().top,
      });
    };
