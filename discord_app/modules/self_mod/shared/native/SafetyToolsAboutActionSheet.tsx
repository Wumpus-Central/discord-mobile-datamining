// === Module 9859: SafetyToolsAboutActionSheet ===

// Module 9859 (SafetyToolsAboutActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Constants2 from "Constants" /* 9797 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9811 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9812 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let catchPromise, channelId, flag, tmp5;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let View = react_native.View;
let isNudgeWarning = Constants2.getSafetyToolsActionSheetKey;
let HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { aboutContainer: obj2, description: obj3, reportFalsePositive: obj4 };
obj2 = { marginHorizontal: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj4 = { alignSelf: "center", textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let aboutContainer;
  let closure_5;
  let description;
  let disabled;
  let items;
  let items1;
  let onPress;
  let warningId;
  const tmp2 = warningId;
  let obj = channelId(warningId[9]);
  const cResult = obj.c(35);
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const onClose = channelId.onClose;
  const tmp4 = warningType(disabled.useState(false), 2);
  disabled = tmp4[0];
  View = tmp4[1];
  const tmp6 = closure_10();
  let obj2 = channelId(warningId[10]);
  const tmp7 = null != obj2.useSafetyToolsButtonTooltipForChannel(channelId);
  isNudgeWarning = tmp7;
  if (cResult[0] === channelId) {
    if (cResult[1] === tmp7) {
      if (cResult[2] === recipientId) {
        if (cResult[3] === warningId) {
          let tmp8;
          if (cResult[4] === warningType) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === channelId) {
            let tmp9;
            let tmp10;
            let tmp12;
            let tmp18;
            let tmp21;
            if (cResult[7] === disabled) {
              tmp9 = cResult[8];
            }
            HelpdeskArticles = tmp9;
            class P {
              constructor() {
                tmp = closure_4;
                if (!tmp) {
                  tmp2 = closure_5;
                  flag = true;
                  tmp3 = closure_5(true);
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[13]);
                  tmp6 = channelId;
                  reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                  nextPromise = reportFalsePositiveResult.then(() => {
                    let intl;
                    closure_1_5(false);
                    const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                    const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                    channelId(warningId[14]);
                    intl = channelId(warningId[15]).intl;
                    showSafetyToast(obj);
                    const obj2 = recipientId(warningId[11]);
                    obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                  });
                  catchPromise = nextPromise.catch(() => {
                    closure_1_5(false);
                    const presentError = channelId(warningId[16]).presentError;
                    channelId(warningId[16]);
                    const intl = channelId(warningId[15]).intl;
                    presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                  });
                }
                return;
              }
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const string = tmp(tmp2[15]).intl.string;
              class P {
                constructor() {
                  tmp = closure_4;
                  if (!tmp) {
                    tmp2 = closure_5;
                    flag = true;
                    tmp3 = closure_5(true);
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp6 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      let intl;
                      closure_1_5(false);
                      const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                      const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                      channelId(warningId[14]);
                      intl = channelId(warningId[15]).intl;
                      showSafetyToast(obj);
                      const obj2 = recipientId(warningId[11]);
                      obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const presentError = channelId(warningId[16]).presentError;
                      channelId(warningId[16]);
                      const intl = channelId(warningId[15]).intl;
                      presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              cResult[9] = tmp11;
              tmp10 = tmp11;
            } else {
              tmp10 = cResult[9];
            }
            const _Symbol2 = Symbol;
            ({ aboutContainer, description } = tmp6);
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[15]).intl;
              const format = intl.format;
              class P {
                constructor() {
                  tmp = closure_4;
                  if (!tmp) {
                    tmp2 = closure_5;
                    flag = true;
                    tmp3 = closure_5(true);
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp6 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      let intl;
                      closure_1_5(false);
                      const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                      const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                      channelId(warningId[14]);
                      intl = channelId(warningId[15]).intl;
                      showSafetyToast(obj);
                      const obj2 = recipientId(warningId[11]);
                      obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const presentError = channelId(warningId[16]).presentError;
                      channelId(warningId[16]);
                      const intl = channelId(warningId[15]).intl;
                      presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              const prop = tmp(tmp2[15]).t["njJ/Cg"];
              let obj3 = recipientId(tmp2[17]);
              tmp14[0] = obj3.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
              const formatResult = format(prop, tmp14);
              cResult[10] = formatResult;
              tmp12 = formatResult;
            } else {
              tmp12 = cResult[10];
            }
            if (cResult[11] !== tmp6.description) {
              const obj4 = { variant: "text-md/medium", style: null, children: tmp12 };
              class P {
                constructor() {
                  tmp = closure_4;
                  if (!tmp) {
                    tmp2 = closure_5;
                    flag = true;
                    tmp3 = closure_5(true);
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp6 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      let intl;
                      closure_1_5(false);
                      const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                      const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                      channelId(warningId[14]);
                      intl = channelId(warningId[15]).intl;
                      showSafetyToast(obj);
                      const obj2 = recipientId(warningId[11]);
                      obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const presentError = channelId(warningId[16]).presentError;
                      channelId(warningId[16]);
                      const intl = channelId(warningId[15]).intl;
                      presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              const tmp20 = closure_8(channelId(tmp2[18]).Text, obj4);
              cResult[11] = tmp6.description;
              cResult[12] = tmp20;
              tmp18 = tmp20;
            } else {
              tmp18 = cResult[12];
            }
            const _Symbol3 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const string2 = tmp(tmp2[15]).intl.string;
              class P {
                constructor() {
                  tmp = closure_4;
                  if (!tmp) {
                    tmp2 = closure_5;
                    flag = true;
                    tmp3 = closure_5(true);
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp6 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      let intl;
                      closure_1_5(false);
                      const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                      const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                      channelId(warningId[14]);
                      intl = channelId(warningId[15]).intl;
                      showSafetyToast(obj);
                      const obj2 = recipientId(warningId[11]);
                      obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const presentError = channelId(warningId[16]).presentError;
                      channelId(warningId[16]);
                      const intl = channelId(warningId[15]).intl;
                      presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              cResult[13] = tmp22;
              tmp21 = tmp22;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[14] === tmp8) {
              let tmp23;
              if (cResult[15] === disabled) {
                tmp23 = cResult[16];
              }
              if (cResult[17] === tmp6.aboutContainer) {
                if (cResult[18] === tmp18) {
                  let tmp26;
                  if (cResult[19] === tmp23) {
                    tmp26 = cResult[20];
                  }
                  if (cResult[21] === tmp9) {
                    let tmp30;
                    if (cResult[22] === disabled) {
                      tmp30 = cResult[23];
                    }
                    if (cResult[24] === tmp6.reportFalsePositive) {
                      let tmp32;
                      if (cResult[25] === tmp30) {
                        tmp32 = cResult[26];
                      }
                      if (cResult[27] === channelId) {
                        if (cResult[28] === onClose) {
                          if (cResult[29] === recipientId) {
                            if (cResult[30] === tmp26) {
                              if (cResult[31] === tmp32) {
                                if (cResult[32] === warningId) {
                                  let tmp34;
                                  if (cResult[33] === warningType) {
                                    tmp34 = cResult[34];
                                  }
                                  return tmp34;
                                }
                              }
                            }
                          }
                        }
                      }
                      class P {
                        constructor() {
                          tmp = closure_4;
                          if (!tmp) {
                            tmp2 = closure_5;
                            flag = true;
                            tmp3 = closure_5(true);
                            tmp4 = closure_0;
                            tmp5 = closure_2;
                            obj = closure_0(closure_2[13]);
                            tmp6 = channelId;
                            reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                            nextPromise = reportFalsePositiveResult.then(() => {
                              let intl;
                              closure_1_5(false);
                              const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                              const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                              channelId(warningId[14]);
                              intl = channelId(warningId[15]).intl;
                              showSafetyToast(obj);
                              const obj2 = recipientId(warningId[11]);
                              obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                            });
                            catchPromise = nextPromise.catch(() => {
                              closure_1_5(false);
                              const presentError = channelId(warningId[16]).presentError;
                              channelId(warningId[16]);
                              const intl = channelId(warningId[15]).intl;
                              presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                            });
                          }
                          return;
                        }
                      }
                      const obj5 = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: tmp10, channelId, onClose, children: items };
                      items = [tmp26, tmp32];
                      cResult[27] = channelId;
                      cResult[28] = onClose;
                      cResult[29] = recipientId;
                      cResult[30] = tmp26;
                      cResult[31] = tmp32;
                      cResult[32] = warningId;
                      cResult[33] = warningType;
                      const tmp36 = closure_9(recipientId(tmp2[20]), obj5);
                      class T {
                        constructor() {
                          const obj = ActionSheetActionCreatorsDefault;
                          obj.hideActionSheet(isNudgeWarning(channelId));
                          const obj2 = SafetyWarningUtils;
                          const obj3 = { channelId, warningId, warningType, senderId: recipientId, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning };
                          obj2.trackCtaEvent(obj3);
                        }
                      }
                      tmp34 = tmp36;
                    }
                    class P {
                      constructor() {
                        tmp = closure_4;
                        if (!tmp) {
                          tmp2 = closure_5;
                          flag = true;
                          tmp3 = closure_5(true);
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          obj = closure_0(closure_2[13]);
                          tmp6 = channelId;
                          reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                          nextPromise = reportFalsePositiveResult.then(() => {
                            let intl;
                            closure_1_5(false);
                            const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                            const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                            channelId(warningId[14]);
                            intl = channelId(warningId[15]).intl;
                            showSafetyToast(obj);
                            const obj2 = recipientId(warningId[11]);
                            obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                          });
                          catchPromise = nextPromise.catch(() => {
                            closure_1_5(false);
                            const presentError = channelId(warningId[16]).presentError;
                            channelId(warningId[16]);
                            const intl = channelId(warningId[15]).intl;
                            presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                          });
                        }
                        return;
                      }
                    }
                    const obj6 = { variant: "text-md/medium", style: tmp29, children: tmp30 };
                    const tmp33 = closure_8(channelId(tmp2[18]).Text, obj6);
                    cResult[24] = tmp6.reportFalsePositive;
                    cResult[25] = tmp30;
                    cResult[26] = tmp33;
                    tmp32 = tmp33;
                  }
                  class P {
                    constructor() {
                      tmp = closure_4;
                      if (!tmp) {
                        tmp2 = closure_5;
                        flag = true;
                        tmp3 = closure_5(true);
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[13]);
                        tmp6 = channelId;
                        reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                        nextPromise = reportFalsePositiveResult.then(() => {
                          let intl;
                          closure_1_5(false);
                          const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                          const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                          channelId(warningId[14]);
                          intl = channelId(warningId[15]).intl;
                          showSafetyToast(obj);
                          const obj2 = recipientId(warningId[11]);
                          obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                        });
                        catchPromise = nextPromise.catch(() => {
                          closure_1_5(false);
                          const presentError = channelId(warningId[16]).presentError;
                          channelId(warningId[16]);
                          const intl = channelId(warningId[15]).intl;
                          presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                        });
                      }
                      return;
                    }
                  }
                  const obj8 = {
                    reportFalsePositiveHook(children, id) {
                                      const obj = { variant: "text-sm/medium", color: "text-link", disabled, onPress, children };
                                      return metroImportAll(Text_Text.Text, obj, id);
                                    }
                  };
                  const formatResult1 = obj7.format(channelId(tmp2[15]).t["2uYViD"], obj8);
                  cResult[21] = tmp9;
                  cResult[22] = disabled;
                  cResult[23] = formatResult1;
                  tmp30 = formatResult1;
                }
              }
              class P {
                constructor() {
                  tmp = closure_4;
                  if (!tmp) {
                    tmp2 = closure_5;
                    flag = true;
                    tmp3 = closure_5(true);
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp6 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      let intl;
                      closure_1_5(false);
                      const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                      const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                      channelId(warningId[14]);
                      intl = channelId(warningId[15]).intl;
                      showSafetyToast(obj);
                      const obj2 = recipientId(warningId[11]);
                      obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const presentError = channelId(warningId[16]).presentError;
                      channelId(warningId[16]);
                      const intl = channelId(warningId[15]).intl;
                      presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              const obj9 = { style: aboutContainer, children: items1 };
              items1 = [tmp18, tmp23];
              const tmp28 = closure_9(View, obj9);
              cResult[17] = tmp6.aboutContainer;
              cResult[18] = tmp18;
              cResult[19] = tmp23;
              cResult[20] = tmp28;
              tmp26 = tmp28;
            }
            const obj10 = { variant: "secondary", size: "lg", disabled, text: tmp21, onPress: tmp8 };
            const tmp25 = closure_8(channelId(tmp2[19]).Button, obj10);
            cResult[14] = tmp8;
            cResult[15] = disabled;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
          class P {
            constructor() {
              tmp = closure_4;
              if (!tmp) {
                tmp2 = closure_5;
                flag = true;
                tmp3 = closure_5(true);
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp6 = channelId;
                reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                nextPromise = reportFalsePositiveResult.then(() => {
                  let intl;
                  closure_1_5(false);
                  const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
                  const showSafetyToast = channelId(warningId[14]).showSafetyToast;
                  channelId(warningId[14]);
                  intl = channelId(warningId[15]).intl;
                  showSafetyToast(obj);
                  const obj2 = recipientId(warningId[11]);
                  obj2.hideActionSheet(isNudgeWarning(closure_1_0));
                });
                catchPromise = nextPromise.catch(() => {
                  closure_1_5(false);
                  const presentError = channelId(warningId[16]).presentError;
                  channelId(warningId[16]);
                  const intl = channelId(warningId[15]).intl;
                  presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                });
              }
              return;
            }
          }
          cResult[6] = channelId;
          cResult[7] = disabled;
          cResult[8] = P;
          tmp9 = P;
        }
      }
    }
  }
  class T {
    constructor() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(isNudgeWarning(channelId));
      const obj2 = SafetyWarningUtils;
      const obj3 = { channelId, warningId, warningType, senderId: recipientId, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning };
      obj2.trackCtaEvent(obj3);
    }
  }
  cResult[0] = channelId;
  cResult[1] = tmp7;
  cResult[2] = recipientId;
  cResult[3] = warningId;
  cResult[4] = warningType;
  cResult[5] = T;
  tmp8 = T;
}) : ((channelId) => {
  let format;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj5;
  let obj6;
  let obj9;
  let onPress;
  let prop;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let disabled;
  const onClose = channelId.onClose;
  const tmp = warningType(disabled.useState(false), 2);
  disabled = tmp[0];
  let closure_5 = tmp[1];
  const tmp3 = closure_10();
  let obj = channelId(warningId[10]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  isNudgeWarning = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, disabled];
  const callback = disabled.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(isNudgeWarning(channelId));
    const obj2 = SafetyWarningUtils;
    const obj3 = { channelId, warningId, warningType, senderId: recipientId, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning };
    obj2.trackCtaEvent(obj3);
  }, items);
  HelpdeskArticles = disabled.useCallback(() => {
    if (!first) {
      closure_5(true);
      let obj = ChannelSafetyWarningsActionCreators;
      const reportFalsePositiveResult = obj.reportFalsePositive(channelId);
      const nextPromise = reportFalsePositiveResult.then(() => {
        let intl;
        closure_1_5(false);
        const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[15]).t.FhgVWi) };
        const showSafetyToast = channelId(warningId[14]).showSafetyToast;
        channelId(warningId[14]);
        intl = channelId(warningId[15]).intl;
        showSafetyToast(obj);
        const obj2 = recipientId(warningId[11]);
        obj2.hideActionSheet(isNudgeWarning(closure_1_0));
      });
      nextPromise.catch(() => {
        closure_1_5(false);
        const presentError = channelId(warningId[16]).presentError;
        channelId(warningId[16]);
        const intl = channelId(warningId[15]).intl;
        presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
      });
    }
  }, items1);
  let obj2 = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: intl.string(channelId(warningId[15]).t.qI14KM), channelId, onClose, children: items3 };
  const tmp6 = recipientId(warningId[20]);
  intl = channelId(warningId[15]).intl;
  let obj3 = { style: tmp3.aboutContainer, children: items2 };
  const obj4 = { variant: "text-md/medium", style: tmp3.description, children: format(prop, obj5) };
  const Text = channelId(warningId[18]).Text;
  const intl2 = channelId(warningId[15]).intl;
  format = intl2.format;
  obj5 = { learnMoreLink: obj6.getArticleURL(HelpdeskArticles.SAFETY_ALERTS) };
  prop = channelId(warningId[15]).t["njJ/Cg"];
  obj6 = recipientId(warningId[17]);
  items2 = [closure_8(Text, obj4), ];
  const obj7 = { variant: "secondary", size: "lg", disabled, text: intl3.string(channelId(warningId[15]).t.Xb2REN), onPress: callback };
  const Button = channelId(warningId[19]).Button;
  intl3 = channelId(warningId[15]).intl;
  items2[1] = closure_8(Button, obj7);
  items3 = [closure_9(closure_5, obj3), ];
  const obj8 = { variant: "text-md/medium", style: tmp3.reportFalsePositive, children: intl4.format(channelId(warningId[15]).t["2uYViD"], obj9) };
  const Text2 = channelId(warningId[18]).Text;
  intl4 = channelId(warningId[15]).intl;
  obj9 = {
    reportFalsePositiveHook(children, id) {
      const obj = { variant: "text-sm/medium", color: "text-link", disabled, onPress, children };
      return metroImportAll(Text_Text.Text, obj, id);
    }
  };
  items3[1] = closure_8(Text2, obj8);
  return closure_9(tmp6, obj2);
});
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default tmp4;