// === Module 10441: SafetyToolsAboutActionSheet ===

// Module 10441 (SafetyToolsAboutActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10395 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let View = fn(17).View;
let isNudgeWarning = fn(10381).getSafetyToolsActionSheetKey;
let HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { aboutContainer: { marginHorizontal: nativeDefault.space.PX_32 }, description: null, reportFalsePositive: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_32 };
obj2.description = { alignSelf: "center", textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
let obj4 = { alignSelf: "center", textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj2.reportFalsePositive = { alignSelf: "center", textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "center", textAlign: "center", marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyToolsAboutScreen(channelId) {
  const cResult = channelId(warningId[9]).c(35);
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const onClose = channelId.onClose;
  const tmp4 = warningType(disabled.useState(false), 2);
  disabled = tmp4[0];
  View = tmp4[1];
  const tmp6 = closure_10();
  let obj = channelId(warningId[9]);
  const tmp7 = null != channelId(warningId[10]).useSafetyToolsButtonTooltipForChannel(channelId);
  isNudgeWarning = tmp7;
  if (cResult[0] === channelId) {
    if (cResult[1] === tmp7) {
      if (cResult[2] === recipientId) {
        if (cResult[3] === warningId) {
          if (cResult[4] === warningType) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === channelId) {
            if (cResult[7] === disabled) {
              let tmp9 = cResult[8];
            }
            HelpdeskArticles = tmp9;
            class P {
              constructor() {
                if (!closure_4) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[13]);
                  tmp5 = channelId;
                  reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                  nextPromise = reportFalsePositiveResult.then(() => {
                    closure_1_5(false);
                    const obj2 = { id: "safety-tools-report-false-positive", text: null };
                    const intl = channelId(warningId[15]).intl;
                    obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                    channelId(warningId[14]).showSafetyToast(obj2);
                    const obj = channelId(warningId[14]);
                    recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                  });
                  catchPromise = nextPromise.catch(() => {
                    closure_1_5(false);
                    const intl = channelId(warningId[15]).intl;
                    channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
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
                  if (!closure_4) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp5 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      closure_1_5(false);
                      const obj2 = { id: "safety-tools-report-false-positive", text: null };
                      const intl = channelId(warningId[15]).intl;
                      obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                      channelId(warningId[14]).showSafetyToast(obj2);
                      const obj = channelId(warningId[14]);
                      recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const intl = channelId(warningId[15]).intl;
                      channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              cResult[9] = tmp11;
              let tmp10 = tmp11;
            } else {
              tmp10 = cResult[9];
            }
            const _Symbol2 = Symbol;
            ({ aboutContainer, description } = tmp6);
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[15]).intl;
              class P {
                constructor() {
                  if (!closure_4) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp5 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      closure_1_5(false);
                      const obj2 = { id: "safety-tools-report-false-positive", text: null };
                      const intl = channelId(warningId[15]).intl;
                      obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                      channelId(warningId[14]).showSafetyToast(obj2);
                      const obj = channelId(warningId[14]);
                      recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const intl = channelId(warningId[15]).intl;
                      channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              tmp13[0] = recipientId(tmp2[17]).getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
              const formatResult = intl.format(tmp(tmp2[15]).t["njJ/Cg"], tmp13);
              cResult[10] = formatResult;
              let tmp12 = formatResult;
              const obj3 = recipientId(tmp2[17]);
            } else {
              tmp12 = cResult[10];
            }
            if (cResult[11] !== tmp6.description) {
              const obj4 = { variant: "text-md/medium", style: null, children: null };
              class P {
                constructor() {
                  if (!closure_4) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp5 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      closure_1_5(false);
                      const obj2 = { id: "safety-tools-report-false-positive", text: null };
                      const intl = channelId(warningId[15]).intl;
                      obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                      channelId(warningId[14]).showSafetyToast(obj2);
                      const obj = channelId(warningId[14]);
                      recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const intl = channelId(warningId[15]).intl;
                      channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              obj4.children = tmp12;
              const tmp19 = closure_8(tmp(tmp2[18]).Text, obj4);
              cResult[11] = tmp6.description;
              cResult[12] = tmp19;
              let tmp17 = tmp19;
            } else {
              tmp17 = cResult[12];
            }
            const _Symbol3 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const string2 = tmp(tmp2[15]).intl.string;
              class P {
                constructor() {
                  if (!closure_4) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp5 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      closure_1_5(false);
                      const obj2 = { id: "safety-tools-report-false-positive", text: null };
                      const intl = channelId(warningId[15]).intl;
                      obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                      channelId(warningId[14]).showSafetyToast(obj2);
                      const obj = channelId(warningId[14]);
                      recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const intl = channelId(warningId[15]).intl;
                      channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              cResult[13] = tmp21;
              let tmp20 = tmp21;
            } else {
              tmp20 = cResult[13];
            }
            if (cResult[14] === tmp8) {
              if (cResult[15] === disabled) {
                let tmp22 = cResult[16];
              }
              if (cResult[17] === tmp6.aboutContainer) {
                if (cResult[18] === tmp17) {
                  if (cResult[19] === tmp22) {
                    let tmp25 = cResult[20];
                  }
                  if (cResult[21] === tmp9) {
                    if (cResult[22] === disabled) {
                      let tmp29 = cResult[23];
                    }
                    if (cResult[24] === tmp6.reportFalsePositive) {
                      if (cResult[25] === tmp29) {
                        let tmp31 = cResult[26];
                      }
                      if (cResult[27] === channelId) {
                        if (cResult[28] === onClose) {
                          if (cResult[29] === recipientId) {
                            if (cResult[30] === tmp25) {
                              if (cResult[31] === tmp31) {
                                if (cResult[32] === warningId) {
                                  if (cResult[33] === warningType) {
                                    let tmp33 = cResult[34];
                                  }
                                  return tmp33;
                                }
                              }
                            }
                          }
                        }
                      }
                      class P {
                        constructor() {
                          if (!closure_4) {
                            tmp = closure_5;
                            flag = true;
                            tmp2 = closure_5(true);
                            tmp3 = closure_0;
                            tmp4 = closure_2;
                            obj = closure_0(closure_2[13]);
                            tmp5 = channelId;
                            reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                            nextPromise = reportFalsePositiveResult.then(() => {
                              closure_1_5(false);
                              const obj2 = { id: "safety-tools-report-false-positive", text: null };
                              const intl = channelId(warningId[15]).intl;
                              obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                              channelId(warningId[14]).showSafetyToast(obj2);
                              const obj = channelId(warningId[14]);
                              recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                            });
                            catchPromise = nextPromise.catch(() => {
                              closure_1_5(false);
                              const intl = channelId(warningId[15]).intl;
                              channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                            });
                          }
                          return;
                        }
                      }
                      const obj5 = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: tmp10, channelId, onClose, children: null };
                      const items = [tmp25, tmp31];
                      obj5.children = items;
                      cResult[27] = channelId;
                      cResult[28] = onClose;
                      cResult[29] = recipientId;
                      cResult[30] = tmp25;
                      cResult[31] = tmp31;
                      cResult[32] = warningId;
                      cResult[33] = warningType;
                      class T {
                        constructor() {
                          obj = closure_1(closure_2[11]);
                          hideActionSheetResult = obj.hideActionSheet(closure_6(channelId));
                          obj2 = closure_0(closure_2[12]);
                          obj1 = { channelId, warningId, warningType, senderId: recipientId, cta: closure_0(closure_2[12]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning: closure_6 };
                          trackCtaEventResult = obj2.trackCtaEvent(obj1);
                          return;
                        }
                      }
                      tmp33 = closure_9(recipientId(tmp2[20]), obj5);
                      const tmp35 = closure_9(recipientId(tmp2[20]), obj5);
                    }
                    class P {
                      constructor() {
                        if (!closure_4) {
                          tmp = closure_5;
                          flag = true;
                          tmp2 = closure_5(true);
                          tmp3 = closure_0;
                          tmp4 = closure_2;
                          obj = closure_0(closure_2[13]);
                          tmp5 = channelId;
                          reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                          nextPromise = reportFalsePositiveResult.then(() => {
                            closure_1_5(false);
                            const obj2 = { id: "safety-tools-report-false-positive", text: null };
                            const intl = channelId(warningId[15]).intl;
                            obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                            channelId(warningId[14]).showSafetyToast(obj2);
                            const obj = channelId(warningId[14]);
                            recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                          });
                          catchPromise = nextPromise.catch(() => {
                            closure_1_5(false);
                            const intl = channelId(warningId[15]).intl;
                            channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                          });
                        }
                        return;
                      }
                    }
                    const obj6 = { variant: "text-md/medium", style: tmp28, children: tmp29 };
                    const tmp32 = closure_8(tmp(tmp2[18]).Text, obj6);
                    cResult[24] = tmp6.reportFalsePositive;
                    cResult[25] = tmp29;
                    cResult[26] = tmp32;
                    tmp31 = tmp32;
                  }
                  class P {
                    constructor() {
                      if (!closure_4) {
                        tmp = closure_5;
                        flag = true;
                        tmp2 = closure_5(true);
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj = closure_0(closure_2[13]);
                        tmp5 = channelId;
                        reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                        nextPromise = reportFalsePositiveResult.then(() => {
                          closure_1_5(false);
                          const obj2 = { id: "safety-tools-report-false-positive", text: null };
                          const intl = channelId(warningId[15]).intl;
                          obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                          channelId(warningId[14]).showSafetyToast(obj2);
                          const obj = channelId(warningId[14]);
                          recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                        });
                        catchPromise = nextPromise.catch(() => {
                          closure_1_5(false);
                          const intl = channelId(warningId[15]).intl;
                          channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                        });
                      }
                      return;
                    }
                  }
                  const obj8 = {
                    reportFalsePositiveHook(children, arg1) {
                                      return closure_2_8(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", disabled, onPress, children }, arg1);
                                    }
                  };
                  const formatResult1 = obj7.format(tmp(tmp2[15]).t["2uYViD"], obj8);
                  cResult[21] = tmp9;
                  cResult[22] = disabled;
                  cResult[23] = formatResult1;
                  tmp29 = formatResult1;
                }
              }
              class P {
                constructor() {
                  if (!closure_4) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp5 = channelId;
                    reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                    nextPromise = reportFalsePositiveResult.then(() => {
                      closure_1_5(false);
                      const obj2 = { id: "safety-tools-report-false-positive", text: null };
                      const intl = channelId(warningId[15]).intl;
                      obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                      channelId(warningId[14]).showSafetyToast(obj2);
                      const obj = channelId(warningId[14]);
                      recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                    });
                    catchPromise = nextPromise.catch(() => {
                      closure_1_5(false);
                      const intl = channelId(warningId[15]).intl;
                      channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
                    });
                  }
                  return;
                }
              }
              const obj9 = { style: aboutContainer, children: null };
              const items1 = [tmp17, tmp22];
              obj9.children = items1;
              const tmp27 = closure_9(View, obj9);
              cResult[17] = tmp6.aboutContainer;
              cResult[18] = tmp17;
              cResult[19] = tmp22;
              cResult[20] = tmp27;
              tmp25 = tmp27;
            }
            const obj10 = { variant: "secondary", size: "lg", disabled, text: tmp20, onPress: tmp8 };
            const tmp24 = closure_8(tmp(tmp2[19]).Button, obj10);
            cResult[14] = tmp8;
            cResult[15] = disabled;
            cResult[16] = tmp24;
            tmp22 = tmp24;
          }
          class P {
            constructor() {
              if (!closure_4) {
                tmp = closure_5;
                flag = true;
                tmp2 = closure_5(true);
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp5 = channelId;
                reportFalsePositiveResult = obj.reportFalsePositive(channelId);
                nextPromise = reportFalsePositiveResult.then(() => {
                  closure_1_5(false);
                  const obj2 = { id: "safety-tools-report-false-positive", text: null };
                  const intl = channelId(warningId[15]).intl;
                  obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
                  channelId(warningId[14]).showSafetyToast(obj2);
                  const obj = channelId(warningId[14]);
                  recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
                });
                catchPromise = nextPromise.catch(() => {
                  closure_1_5(false);
                  const intl = channelId(warningId[15]).intl;
                  channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
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
      obj = closure_1(closure_2[11]);
      hideActionSheetResult = obj.hideActionSheet(closure_6(channelId));
      obj2 = closure_0(closure_2[12]);
      obj1 = { channelId, warningId, warningType, senderId: recipientId, cta: closure_0(closure_2[12]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning: closure_6 };
      trackCtaEventResult = obj2.trackCtaEvent(obj1);
      return;
    }
  }
  cResult[0] = channelId;
  cResult[1] = tmp7;
  cResult[2] = recipientId;
  cResult[3] = warningId;
  cResult[4] = warningType;
  cResult[5] = T;
  tmp8 = T;
  let obj2 = channelId(warningId[10]);
}) : (function SafetyToolsAboutScreen(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let disabled;
  const tmp = warningType(disabled.useState(false), 2);
  disabled = tmp[0];
  closure_5 = tmp[1];
  const tmp3 = closure_10();
  const tmp4 = null != channelId(warningId[10]).useSafetyToolsButtonTooltipForChannel(channelId);
  isNudgeWarning = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, disabled];
  const callback = disabled.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(isNudgeWarning(channelId));
    const obj2 = SafetyWarningUtils;
    obj2.trackCtaEvent({ channelId, warningId, warningType, senderId: recipientId, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning });
  }, items);
  HelpdeskArticles = disabled.useCallback(() => {
    if (!first) {
      closure_5(true);
      const reportFalsePositiveResult = ChannelSafetyWarningsActionCreators.reportFalsePositive(channelId);
      ChannelSafetyWarningsActionCreators.reportFalsePositive(channelId).then(() => {
        closure_1_5(false);
        const obj2 = { id: "safety-tools-report-false-positive", text: null };
        const intl = channelId(warningId[15]).intl;
        obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
        channelId(warningId[14]).showSafetyToast(obj2);
        const obj = channelId(warningId[14]);
        recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
      }).catch(() => {
        closure_1_5(false);
        const intl = channelId(warningId[15]).intl;
        channelId(warningId[16]).presentError(intl.string(channelId(warningId[15]).t.R0RpRX));
      });
      const nextPromise = ChannelSafetyWarningsActionCreators.reportFalsePositive(channelId).then(() => {
        closure_1_5(false);
        const obj2 = { id: "safety-tools-report-false-positive", text: null };
        const intl = channelId(warningId[15]).intl;
        obj2.text = intl.string(channelId(warningId[15]).t.FhgVWi);
        channelId(warningId[14]).showSafetyToast(obj2);
        const obj = channelId(warningId[14]);
        recipientId(warningId[11]).hideActionSheet(closure_6(closure_1_0));
      });
    }
  }, items1);
  let obj2 = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  let obj = channelId(warningId[10]);
  let intl = channelId(warningId[15]).intl;
  obj2.headerTitle = intl.string(channelId(warningId[15]).t.qI14KM);
  obj2.channelId = channelId;
  obj2.onClose = channelId.onClose;
  const obj3 = { style: tmp3.aboutContainer, children: null };
  const obj4 = { variant: "text-md/medium", style: tmp3.description, children: null };
  const intl2 = channelId(warningId[15]).intl;
  const obj5 = { learnMoreLink: null };
  const tmp6 = recipientId(warningId[20]);
  obj5.learnMoreLink = recipientId(warningId[17]).getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
  obj4.children = intl2.format(channelId(warningId[15]).t["njJ/Cg"], obj5);
  const items2 = [closure_8(channelId(warningId[18]).Text, obj4), ];
  const obj7 = { variant: "secondary", size: "lg", disabled, text: null, onPress: null };
  const intl3 = channelId(warningId[15]).intl;
  obj7.text = intl3.string(channelId(warningId[15]).t.Xb2REN);
  obj7.onPress = callback;
  items2[1] = closure_8(channelId(warningId[19]).Button, obj7);
  obj3.children = items2;
  const items3 = [closure_9(closure_5, obj3), ];
  const obj8 = { variant: "text-md/medium", style: tmp3.reportFalsePositive, children: null };
  const intl4 = channelId(warningId[15]).intl;
  obj8.children = intl4.format(channelId(warningId[15]).t["2uYViD"], {
    reportFalsePositiveHook(children, arg1) {
      return closure_2_8(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", disabled, onPress, children }, arg1);
    }
  });
  items3[1] = closure_8(channelId(warningId[18]).Text, obj8);
  obj2.children = items3;
  return closure_9(tmp6, obj2);
});