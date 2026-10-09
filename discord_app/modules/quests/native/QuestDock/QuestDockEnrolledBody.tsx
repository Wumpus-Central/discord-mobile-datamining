// === Module 15390: QuestDockEnrolledBody ===

// Module 15390 (QuestDockEnrolledBody)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import QuestBottomSheet from "QuestBottomSheet" /* 15313 */;
import QuestBottomSheetHeaderDefault from "QuestBottomSheetHeader" /* 15314 */;
import QuestBottomSheetFooterDefault from "QuestBottomSheetFooter" /* 15316 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7384 */;
import QuestDockStore from "QuestDockStore" /* 15283 */;

require = fn;
const View = fn(17).View;
const QuestConstants = fn(5979);
({ QuestDockMode: closure_8, QuestsExperimentLocations: closure_9 } = QuestConstants);
const QuestDockConstants = fn(15285);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: c10, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QuestDockConstants);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj = { wrapper: { flexGrow: 0, flexShrink: 0, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM, paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP, paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL }, headerWrapper: { marginBottom: nativeDefault.space.PX_16 }, contentWrapper: null, footer: null, footerWrapper: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.contentWrapper = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
let obj4 = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
obj.footer = { marginTop: nativeDefault.space.PX_16 };
obj.footerWrapper = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnrolledBodyWatchTask(quest) {
  const cResult = quest(questDockWrapperSpecs[11]).c(34);
  quest = quest.quest;
  const tmp4 = closure_15();
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[12]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[13]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[14])(context.restingQuestDockMode);
  asyncGeneratorStep = tmp7;
  let obj = quest(questDockWrapperSpecs[11]);
  let obj2 = hasWatchVideoOnMobileTasks;
  hasWatchVideoOnMobileTasks = quest(questDockWrapperSpecs[15]).useHasWatchVideoOnMobileTasks(quest.config);
  if (cResult[0] === quest.id) {
    let userStatus = quest.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    if (cResult[1] === completedAt) {
      if (cResult[2] === questDockWrapperSpecs) {
        if (cResult[3] === tmp7) {
          if (cResult[4] === setRestingQuestDockMode) {
            if (cResult[5] === hasWatchVideoOnMobileTasks) {
              let tmp11 = cResult[6];
            }
            const userStatus3 = quest.userStatus;
            let completedAt1;
            if (userStatus3 != null) {
              completedAt1 = userStatus3.completedAt;
            }
            if (cResult[7] === quest.id) {
              if (cResult[8] === questDockWrapperSpecs) {
                if (cResult[9] === tmp7) {
                  if (cResult[10] === setRestingQuestDockMode) {
                    if (cResult[11] === hasWatchVideoOnMobileTasks) {
                      if (cResult[12] === completedAt1) {
                        let tmp15 = cResult[13];
                      }
                      const effect = obj2.useEffect(tmp11, tmp15);
                      if (cResult[14] !== quest) {
                        let obj4 = { quest, step: tmp(tmp2[19]).QuestBottomSheetStep.TASK_STATUS, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
                        const tmp21 = closure_12(tmp6(tmp2[18]), obj4);
                        cResult[14] = quest;
                        cResult[15] = tmp21;
                        let tmp17 = tmp21;
                        const tmp6Result = tmp6(tmp2[18]);
                      } else {
                        tmp17 = cResult[15];
                      }
                      if (cResult[16] === tmp4.headerWrapper) {
                        if (cResult[17] === tmp17) {
                          let tmp22 = cResult[18];
                        }
                        if (cResult[19] !== quest) {
                          let obj5 = { quest, location: constants.QUESTS_BAR_MOBILE, step: tmp(tmp2[19]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: tmp(tmp2[17]).QuestContent.QUEST_BAR_MOBILE };
                          const tmp29 = closure_12(tmp(tmp2[19]).QuestBottomSheetContent, obj5);
                          cResult[19] = quest;
                          cResult[20] = tmp29;
                          let tmp26 = tmp29;
                        } else {
                          tmp26 = cResult[20];
                        }
                        if (cResult[21] === tmp4.contentWrapper) {
                          if (cResult[22] === tmp26) {
                            let tmp30 = cResult[23];
                          }
                          if (cResult[24] === quest) {
                            if (cResult[25] === tmp4.footer) {
                              let tmp34 = cResult[26];
                            }
                            if (cResult[27] === tmp4.footerWrapper) {
                              if (cResult[28] === tmp34) {
                                let tmp38 = cResult[29];
                              }
                              if (cResult[30] === tmp22) {
                                if (cResult[31] === tmp30) {
                                  if (cResult[32] === tmp38) {
                                    let tmp42 = cResult[33];
                                  }
                                  return tmp42;
                                }
                              }
                              const obj6 = { children: null };
                              const items = [tmp22, tmp30, tmp38];
                              obj6.children = items;
                              const tmp45 = closure_14(closure_13, obj6);
                              cResult[30] = tmp22;
                              cResult[31] = tmp30;
                              cResult[32] = tmp38;
                              cResult[33] = tmp45;
                              tmp42 = tmp45;
                            }
                            const obj7 = { style: tmp4.footerWrapper, children: tmp34 };
                            const tmp41 = closure_12(View, obj7);
                            cResult[27] = tmp4.footerWrapper;
                            cResult[28] = tmp34;
                            cResult[29] = tmp41;
                            tmp38 = tmp41;
                          }
                          const obj8 = { quest, step: tmp(tmp2[19]).QuestBottomSheetStep.TASK_STATUS, style: tmp4.footer, withSafeArea: false, sourceQuestContent: tmp(tmp2[17]).QuestContent.QUEST_BAR_MOBILE };
                          const tmp37 = closure_12(tmp6(tmp2[20]), obj8);
                          cResult[24] = quest;
                          cResult[25] = tmp4.footer;
                          cResult[26] = tmp37;
                          tmp34 = tmp37;
                          const tmp6Result2 = tmp6(tmp2[20]);
                        }
                        const obj9 = { style: tmp4.contentWrapper, children: tmp26 };
                        const tmp33 = closure_12(View, obj9);
                        cResult[21] = tmp4.contentWrapper;
                        cResult[22] = tmp26;
                        cResult[23] = tmp33;
                        tmp30 = tmp33;
                      }
                      const obj10 = { style: tmp4.headerWrapper, children: tmp17 };
                      const tmp25 = closure_12(View, obj10);
                      cResult[16] = tmp4.headerWrapper;
                      cResult[17] = tmp17;
                      cResult[18] = tmp25;
                      tmp22 = tmp25;
                    }
                  }
                }
              }
            }
            const items1 = [tmp7, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks, completedAt1];
            cResult[7] = quest.id;
            cResult[8] = questDockWrapperSpecs;
            cResult[9] = tmp7;
            cResult[10] = setRestingQuestDockMode;
            cResult[11] = hasWatchVideoOnMobileTasks;
            cResult[12] = completedAt1;
            cResult[13] = items1;
            tmp15 = items1;
          }
        }
      }
    }
  }
  ({ id: tmp3[0], userStatus: userStatus2 } = quest);
  let completedAt2;
  if (userStatus2 != null) {
    completedAt2 = userStatus2.completedAt;
  }
  class S {
    constructor() {
      closure_0 = closure_3(/* F155197 */ function() { ... });
      if (closure_4) {
        tmp = (function maybeOpenVideoQuestModal() { ... })();
      }
      return;
    }
  }
  cResult[1] = completedAt2;
  cResult[2] = questDockWrapperSpecs;
  cResult[3] = tmp7;
  cResult[4] = setRestingQuestDockMode;
  cResult[5] = hasWatchVideoOnMobileTasks;
  cResult[6] = S;
  tmp11 = S;
  let obj3 = quest(questDockWrapperSpecs[15]);
}) : (function EnrolledBodyWatchTask(quest) {
  quest = quest.quest;
  const tmp = closure_15();
  const context = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[12]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(quest(questDockWrapperSpecs[13]).QuestDockGestureContext).questDockWrapperSpecs;
  const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[14])(context.restingQuestDockMode);
  closure_3 = tmp7;
  hasWatchVideoOnMobileTasks = quest(questDockWrapperSpecs[15]).useHasWatchVideoOnMobileTasks(quest.config);
  const items = [tmp7, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks, ];
  let userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  items[5] = completedAt;
  const effect = hasWatchVideoOnMobileTasks.useEffect(() => {
    closure_0 = async function _maybeOpenVideoQuestModal2() {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp12 = c2.get().prevDeltaY < 0;
              if (tmp12) {
                tmp12 = closure_1_3 === constants.RESET_TO_PREVIOUS;
              }
              if (tmp12) {
                tmp12 = QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED;
              }
              if (tmp12) {
                const isQuestAccessSuspended = QuestStore.isQuestAccessSuspended;
                let tmp16 = !isQuestAccessSuspended;
                if (isQuestAccessSuspended) {
                  const userStatus = tmp2.userStatus;
                  let completedAt;
                  if (userStatus != null) {
                    completedAt = userStatus.completedAt;
                  }
                  tmp16 = null != completedAt;
                }
                tmp12 = tmp16;
              }
              if (tmp12) {
                const obj4 = { questId: tmp2.id, sourceQuestContent: quest(5982).QuestContent.QUEST_BAR_MOBILE };
                v1 = 1;
                c2 = 1;
                const obj5 = { value: setRestingQuestDockMode(15318)(obj4), done: false };
                return obj5;
              } else {
                c2 = 3;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 !== 2) {
            v1(constants.COLLAPSED);
          }
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp25) {
          c2 = tmp;
          throw tmp25;
        }
      }
    };
    if (hasWatchVideoOnMobileTasks) {
      (function maybeOpenVideoQuestModal() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items);
  let obj2 = { children: null };
  let obj3 = { style: tmp.headerWrapper, children: null };
  let obj4 = { quest, step: null, withActionSheet: true, location: null };
  let obj = quest(questDockWrapperSpecs[15]);
  obj4.step = quest(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS;
  obj4.location = constants.QUESTS_BAR_MOBILE;
  obj3.children = closure_12(setRestingQuestDockMode(questDockWrapperSpecs[18]), obj4);
  const items1 = [closure_12(View, obj3), , ];
  let obj5 = { style: tmp.contentWrapper, children: null };
  const tmp6Result = setRestingQuestDockMode(questDockWrapperSpecs[18]);
  obj5.children = closure_12(quest(questDockWrapperSpecs[19]).QuestBottomSheetContent, { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE });
  items1[1] = closure_12(View, obj5);
  const obj7 = { style: tmp.footerWrapper, children: null };
  const obj8 = { quest, step: null, style: null, withSafeArea: false, sourceQuestContent: null };
  const obj6 = { quest, location: constants.QUESTS_BAR_MOBILE, step: quest(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS, sourceQuestContent: quest(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE };
  obj8.step = quest(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS;
  obj8.style = tmp.footer;
  obj8.sourceQuestContent = quest(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE;
  obj7.children = closure_12(setRestingQuestDockMode(questDockWrapperSpecs[20]), obj8);
  items1[2] = closure_12(View, obj7);
  obj2.children = items1;
  return closure_14(closure_13, obj2);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnrolledBodyPlayStreamTask(quest) {
  const cResult = c.c(32);
  quest = quest.quest;
  const tmp4 = closure_15();
  if (cResult[0] !== quest) {
    const obj2 = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    cResult[0] = quest;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const enrolledQuestContentProps = QuestBottomSheet.useEnrolledQuestContentProps(tmp5);
  ({ step, defibrillator, stepActions, handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  if (cResult[2] === quest) {
    if (cResult[3] === step) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.headerWrapper) {
      if (cResult[6] === tmp8) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === defibrillator) {
        if (cResult[9] === handleTaskSelect) {
          if (cResult[10] === quest) {
            if (cResult[11] === showMicrophone) {
              if (cResult[12] === step) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4.contentWrapper) {
                if (cResult[15] === tmp14) {
                  let tmp18 = cResult[16];
                }
                if (cResult[17] === defibrillator.isActive) {
                  if (cResult[18] === defibrillator.start) {
                    if (cResult[19] === quest) {
                      if (cResult[20] === step) {
                        if (cResult[21] === stepActions.onBack) {
                          if (cResult[22] === stepActions.onNext) {
                            if (cResult[23] === tmp4.footer) {
                              let tmp22 = cResult[24];
                            }
                            if (cResult[25] === tmp4.footerWrapper) {
                              if (cResult[26] === tmp22) {
                                let tmp27 = cResult[27];
                              }
                              if (cResult[28] === tmp10) {
                                if (cResult[29] === tmp18) {
                                  if (cResult[30] === tmp27) {
                                    let tmp31 = cResult[31];
                                  }
                                  return tmp31;
                                }
                              }
                              const obj3 = { children: null };
                              const items = [tmp10, tmp18, tmp27];
                              obj3.children = items;
                              const tmp34 = state(__initData2, obj3);
                              cResult[28] = tmp10;
                              cResult[29] = tmp18;
                              cResult[30] = tmp27;
                              cResult[31] = tmp34;
                              tmp31 = tmp34;
                            }
                            const obj4 = { style: tmp4.footerWrapper, children: tmp22 };
                            const tmp30 = __initData(View, obj4);
                            cResult[25] = tmp4.footerWrapper;
                            cResult[26] = tmp22;
                            cResult[27] = tmp30;
                            tmp27 = tmp30;
                          }
                        }
                      }
                    }
                  }
                }
                const obj5 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp4.footer, withSafeArea: false, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                const tmp26 = __initData(QuestBottomSheetFooterDefault, obj5);
                cResult[17] = defibrillator.isActive;
                cResult[18] = defibrillator.start;
                cResult[19] = quest;
                cResult[20] = step;
                cResult[21] = stepActions.onBack;
                cResult[22] = stepActions.onNext;
                cResult[23] = tmp4.footer;
                cResult[24] = tmp26;
                tmp22 = tmp26;
              }
              const obj6 = { style: tmp4.contentWrapper, children: tmp14 };
              const tmp21 = __initData(View, obj6);
              cResult[14] = tmp4.contentWrapper;
              cResult[15] = tmp14;
              cResult[16] = tmp21;
              tmp18 = tmp21;
            }
          }
        }
      }
      const obj7 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const tmp17 = __initData(QuestBottomSheet.QuestBottomSheetContent, obj7);
      cResult[8] = defibrillator;
      cResult[9] = handleTaskSelect;
      cResult[10] = quest;
      cResult[11] = showMicrophone;
      cResult[12] = step;
      cResult[13] = tmp17;
      tmp14 = tmp17;
    }
    const obj8 = { style: tmp4.headerWrapper, children: tmp8 };
    const tmp13 = __initData(View, obj8);
    cResult[5] = tmp4.headerWrapper;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const tmp9 = __initData(QuestBottomSheetHeaderDefault, { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE });
  cResult[2] = quest;
  cResult[3] = step;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj9 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  const tmpResult = QuestBottomSheet;
}) : (function EnrolledBodyPlayStreamTask(quest) {
  quest = quest.quest;
  const tmp = closure_15();
  const obj = QuestBottomSheet;
  const enrolledQuestContentProps = obj.useEnrolledQuestContentProps({ quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
  const obj3 = { children: null };
  const obj4 = { style: tmp.headerWrapper, children: __initData(QuestBottomSheetHeaderDefault, { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE }) };
  ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
  const items = [__initData(View, obj4), , ];
  const obj6 = { style: tmp.contentWrapper, children: null };
  const obj2 = { quest, location: constants.QUESTS_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const obj5 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
  obj6.children = __initData(QuestBottomSheet.QuestBottomSheetContent, { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  items[1] = __initData(View, obj6);
  const obj8 = { style: tmp.footerWrapper, children: null };
  const obj9 = { quest, step, isDefibrilating: defibrillator.isActive, onBack: stepActions.onBack, onDefib: defibrillator.start, onConnectConsoleNext: stepActions.onNext, style: tmp.footer, withSafeArea: false, sourceQuestContent: null };
  const obj7 = { defibrillator, quest, handleTaskSelect, location: constants.QUESTS_BAR_MOBILE, showMicrophone, step, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  obj9.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj8.children = __initData(QuestBottomSheetFooterDefault, obj9);
  items[2] = __initData(View, obj8);
  obj3.children = items;
  return state(__initData2, obj3);
});
ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_16 };
let obj6 = { marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockEnrolledBody() {
  const cResult = minExpandedContentHeight(576).c(16);
  const obj = minExpandedContentHeight(576);
  const questDockQuest = minExpandedContentHeight(15315).useQuestDockQuest();
  const tmp3 = closure_15();
  minExpandedContentHeight = noop.useContext(minExpandedContentHeight(15286).QuestDockGestureContext).minExpandedContentHeight;
  if (cResult[0] !== minExpandedContentHeight) {
    const fn = function t(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      if (minExpandedContentHeight.get() !== height) {
        const result = minExpandedContentHeight.set(height);
      }
    };
    cResult[0] = minExpandedContentHeight;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== minExpandedContentHeight) {
    class S {
      constructor() {
        return () => {
          if (minExpandedContentHeight.get() !== closure_2_10) {
            const result = minExpandedContentHeight.set(tmp);
          }
        };
      }
    }
    const items = [minExpandedContentHeight];
    cResult[2] = minExpandedContentHeight;
    cResult[3] = S;
    cResult[4] = items;
    let tmp6 = items;
  } else {
    class S {
      constructor() {
        return () => {
          if (minExpandedContentHeight.get() !== closure_2_10) {
            const result = minExpandedContentHeight.set(tmp);
          }
        };
      }
    }
    tmp6 = cResult[4];
  }
  const effect = noop.useEffect(S, tmp6);
  const bound = Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  if (cResult[5] !== bound) {
    class S {
      constructor() {
        return () => {
          if (minExpandedContentHeight.get() !== closure_2_10) {
            const result = minExpandedContentHeight.set(tmp);
          }
        };
      }
    }
    tmp10[0] = bound;
    cResult[5] = bound;
    cResult[6] = tmp10;
  } else {
    class S {
      constructor() {
        return () => {
          if (minExpandedContentHeight.get() !== closure_2_10) {
            const result = minExpandedContentHeight.set(tmp);
          }
        };
      }
    }
  }
  if (cResult[7] === tmp3.wrapper) {
    class S {
      constructor() {
        return () => {
          if (minExpandedContentHeight.get() !== closure_2_10) {
            const result = minExpandedContentHeight.set(tmp);
          }
        };
      }
    }
    if (cResult[10] !== questDockQuest) {
      class S {
        constructor() {
          return () => {
            if (minExpandedContentHeight.get() !== closure_2_10) {
              const result = minExpandedContentHeight.set(tmp);
            }
          };
        }
      }
      if (obj4.hasWatchVideoTasks(questDockQuest)) {
        class S {
          constructor() {
            return () => {
              if (minExpandedContentHeight.get() !== closure_2_10) {
                const result = minExpandedContentHeight.set(tmp);
              }
            };
          }
        }
        const obj5 = { quest: questDockQuest };
        let tmp13Result = closure_12(closure_16, obj5);
      } else {
        class S {
          constructor() {
            return () => {
              if (minExpandedContentHeight.get() !== closure_2_10) {
                const result = minExpandedContentHeight.set(tmp);
              }
            };
          }
        }
        const obj6 = { quest: questDockQuest };
        tmp13Result = closure_12(closure_17, obj6);
      }
      cResult[10] = questDockQuest;
      cResult[11] = tmp13Result;
    } else {
      class S {
        constructor() {
          return () => {
            if (minExpandedContentHeight.get() !== closure_2_10) {
              const result = minExpandedContentHeight.set(tmp);
            }
          };
        }
      }
      if (cResult[12] === tmp4) {
        class S {
          constructor() {
            return () => {
              if (minExpandedContentHeight.get() !== closure_2_10) {
                const result = minExpandedContentHeight.set(tmp);
              }
            };
          }
        }
      }
      const obj7 = { style: tmp11, onLayout: tmp4, children: tmp12 };
      const tmp19 = closure_12(View, obj7);
      cResult[12] = tmp4;
      cResult[13] = tmp11;
      cResult[14] = tmp12;
      cResult[15] = tmp19;
    }
  }
  const items1 = [tmp3.wrapper, tmp10];
  cResult[7] = tmp3.wrapper;
  cResult[8] = tmp10;
  cResult[9] = items1;
  const obj2 = minExpandedContentHeight(15315);
}) : (function QuestDockEnrolledBody() {
  const questDockQuest = minExpandedContentHeight(15315).useQuestDockQuest();
  const obj = minExpandedContentHeight(15315);
  minExpandedContentHeight = noop.useContext(minExpandedContentHeight(15286).QuestDockGestureContext).minExpandedContentHeight;
  const items = [minExpandedContentHeight];
  const items1 = [minExpandedContentHeight];
  const callback = noop.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (minExpandedContentHeight.get() !== height) {
      const result = minExpandedContentHeight.set(height);
    }
  }, items);
  const effect = noop.useEffect(() => () => {
    if (minExpandedContentHeight.get() !== closure_2_10) {
      const result = minExpandedContentHeight.set(tmp);
    }
  }, items1);
  const obj2 = { style: null, onLayout: null, children: null };
  const items2 = [closure_15().wrapper, ];
  const tmp2 = closure_15();
  items2[1] = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  obj2.style = items2;
  obj2.onLayout = callback;
  const obj3 = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  if (obj4.hasWatchVideoTasks(questDockQuest)) {
    const obj5 = { quest: questDockQuest };
    let tmp5Result = closure_12(closure_16, obj5);
  } else {
    const obj6 = { quest: questDockQuest };
    tmp5Result = closure_12(closure_17, obj6);
  }
  obj2.children = tmp5Result;
  return closure_12(View, obj2);
}));