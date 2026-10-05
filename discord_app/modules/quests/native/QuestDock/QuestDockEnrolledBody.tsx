// discord_app/modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import QuestBottomSheet from "../QuestBottomSheet/QuestBottomSheet.tsx";
import QuestBottomSheetHeaderDefault from "../QuestBottomSheet/QuestBottomSheetHeader.tsx";
import QuestBottomSheetFooterDefault from "../QuestBottomSheet/QuestBottomSheetFooter.tsx";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import QuestStore from "../../QuestStore.tsx";
import QuestDockStore from "QuestDockStore.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import QuestDockConstants from "QuestDockConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;

let QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP;
let QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
let QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
({ QuestDockMode: metroImportAll, QuestsExperimentLocations: c9 } = QuestConstants);
({ QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: c10, QUEST_DOCK_EXPANDED_PADDING_BOTTOM } = QuestDockConstants);
({ QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP } = QuestDockConstants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  wrapper: {
    flexGrow: 0,
    flexShrink: 0,
    paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM,
    paddingTop: QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP,
    paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL,
  },
  headerWrapper: obj2,
  contentWrapper: obj3,
  footer: obj4,
  footerWrapper: obj5,
};
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", gap: nativeDefault.space.PX_16, flexGrow: 0, flexShrink: 0 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
obj5 = {
  marginLeft: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL,
  marginRight: -1 * QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL,
};
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let closure_3;
      let hasWatchVideoOnMobileTasks;
      let items;
      let questDockWrapperSpecs;
      let userStatus2;
      const tmp = quest;
      let obj = quest(questDockWrapperSpecs[11]);
      const cResult = obj.c(34);
      quest = quest.quest;
      const tmp4 = closure_15();
      let obj2 = hasWatchVideoOnMobileTasks;
      const context = hasWatchVideoOnMobileTasks.useContext(
        quest(questDockWrapperSpecs[12]).QuestDockExternalCoordinationContext,
      );
      const setRestingQuestDockMode = context.setRestingQuestDockMode;
      const restingQuestDockMode = context.restingQuestDockMode;
      questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(
        quest(questDockWrapperSpecs[13]).QuestDockGestureContext,
      ).questDockWrapperSpecs;
      const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[14])(restingQuestDockMode);
      _asyncToGenerator = tmp7;
      let obj3 = quest(questDockWrapperSpecs[15]);
      hasWatchVideoOnMobileTasks = obj3.useHasWatchVideoOnMobileTasks(quest.config);
      if (cResult[0] === quest.id) {
        let userStatus = quest.userStatus;
        let completedAt;
        const tmp9 = cResult[1];
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        if (tmp9 === completedAt) {
          if (cResult[2] === questDockWrapperSpecs) {
            if (cResult[3] === tmp7) {
              if (cResult[4] === setRestingQuestDockMode) {
                let tmp12;
                if (cResult[5] === hasWatchVideoOnMobileTasks) {
                  tmp12 = cResult[6];
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
                          let tmp16;
                          let tmp18;
                          if (cResult[12] === completedAt1) {
                            tmp16 = cResult[13];
                          }
                          const effect = obj2.useEffect(tmp12, tmp16);
                          if (cResult[14] !== quest) {
                            let obj4 = {
                              quest,
                              step: tmp(tmp2[19]).QuestBottomSheetStep.TASK_STATUS,
                              withActionSheet: true,
                              location: constants.QUESTS_BAR_MOBILE,
                            };
                            const tmp6Result = setRestingQuestDockMode(questDockWrapperSpecs[18]);
                            const tmp22 = closure_12(tmp6Result, obj4);
                            cResult[14] = quest;
                            cResult[15] = tmp22;
                            tmp18 = tmp22;
                          } else {
                            tmp18 = cResult[15];
                          }
                          if (cResult[16] === tmp4.headerWrapper) {
                            let tmp23;
                            let tmp27;
                            if (cResult[17] === tmp18) {
                              tmp23 = cResult[18];
                            }
                            if (cResult[19] !== quest) {
                              let obj5 = {
                                quest,
                                location: constants.QUESTS_BAR_MOBILE,
                                step: tmp(tmp2[19]).QuestBottomSheetStep.TASK_STATUS,
                                sourceQuestContent: tmp(tmp2[17]).QuestContent.QUEST_BAR_MOBILE,
                              };
                              const QuestBottomSheetContent = tmp(tmp2[19]).QuestBottomSheetContent;
                              const tmp30 = closure_12(QuestBottomSheetContent, obj5);
                              cResult[19] = quest;
                              cResult[20] = tmp30;
                              tmp27 = tmp30;
                            } else {
                              tmp27 = cResult[20];
                            }
                            if (cResult[21] === tmp4.contentWrapper) {
                              let tmp31;
                              if (cResult[22] === tmp27) {
                                tmp31 = cResult[23];
                              }
                              if (cResult[24] === quest) {
                                let tmp35;
                                if (cResult[25] === tmp4.footer) {
                                  tmp35 = cResult[26];
                                }
                                if (cResult[27] === tmp4.footerWrapper) {
                                  let tmp39;
                                  if (cResult[28] === tmp35) {
                                    tmp39 = cResult[29];
                                  }
                                  if (cResult[30] === tmp23) {
                                    if (cResult[31] === tmp31) {
                                      let tmp43;
                                      if (cResult[32] === tmp39) {
                                        tmp43 = cResult[33];
                                      }
                                      return tmp43;
                                    }
                                  }
                                  const obj6 = { children: items };
                                  items = [tmp23, tmp31, tmp39];
                                  const tmp46 = closure_14(closure_13, obj6);
                                  cResult[30] = tmp23;
                                  cResult[31] = tmp31;
                                  cResult[32] = tmp39;
                                  cResult[33] = tmp46;
                                  tmp43 = tmp46;
                                }
                                const obj7 = { style: tmp4.footerWrapper, children: tmp35 };
                                const tmp42 = closure_12(View, obj7);
                                cResult[27] = tmp4.footerWrapper;
                                cResult[28] = tmp35;
                                cResult[29] = tmp42;
                                tmp39 = tmp42;
                              }
                              const obj8 = {
                                quest,
                                step: tmp(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS,
                                style: tmp4.footer,
                                withSafeArea: false,
                                sourceQuestContent: tmp(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE,
                              };
                              const tmp6Result2 = setRestingQuestDockMode(questDockWrapperSpecs[20]);
                              const tmp38 = closure_12(tmp6Result2, obj8);
                              cResult[24] = quest;
                              cResult[25] = tmp4.footer;
                              cResult[26] = tmp38;
                              tmp35 = tmp38;
                            }
                            const obj9 = { style: tmp4.contentWrapper, children: tmp27 };
                            const tmp34 = closure_12(View, obj9);
                            cResult[21] = tmp4.contentWrapper;
                            cResult[22] = tmp27;
                            cResult[23] = tmp34;
                            tmp31 = tmp34;
                          }
                          const obj10 = { style: tmp4.headerWrapper, children: tmp18 };
                          const tmp26 = closure_12(View, obj10);
                          cResult[16] = tmp4.headerWrapper;
                          cResult[17] = tmp18;
                          cResult[18] = tmp26;
                          tmp23 = tmp26;
                        }
                      }
                    }
                  }
                }
                const items1 = [
                  tmp7,
                  questDockWrapperSpecs,
                  quest.id,
                  setRestingQuestDockMode,
                  hasWatchVideoOnMobileTasks,
                  completedAt1,
                ];
                cResult[7] = quest.id;
                cResult[8] = questDockWrapperSpecs;
                cResult[9] = tmp7;
                cResult[10] = setRestingQuestDockMode;
                cResult[11] = hasWatchVideoOnMobileTasks;
                cResult[12] = completedAt1;
                cResult[13] = items1;
                tmp16 = items1;
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
          closure_0 = closure_3(function () {
            /* body not rendered: F153094 */
          });
          tmp = closure_4;
          if (tmp) {
            tmp2 = (function maybeOpenVideoQuestModal() {
              /* body not rendered: F153095 */
            })();
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
      tmp12 = S;
    }
  : (quest) => {
      let QuestBottomSheetContent;
      let hasWatchVideoOnMobileTasks;
      let items1;
      let obj4;
      let obj6;
      let obj8;
      let questDockWrapperSpecs;
      let tmp6Result;
      let tmp6Result2;
      quest = quest.quest;
      const tmp = closure_15();
      const tmp3 = quest;
      const context = hasWatchVideoOnMobileTasks.useContext(
        quest(questDockWrapperSpecs[12]).QuestDockExternalCoordinationContext,
      );
      const setRestingQuestDockMode = context.setRestingQuestDockMode;
      const restingQuestDockMode = context.restingQuestDockMode;
      questDockWrapperSpecs = hasWatchVideoOnMobileTasks.useContext(
        quest(questDockWrapperSpecs[13]).QuestDockGestureContext,
      ).questDockWrapperSpecs;
      const tmp7 = setRestingQuestDockMode(questDockWrapperSpecs[14])(restingQuestDockMode);
      let closure_3 = tmp7;
      let obj = quest(questDockWrapperSpecs[15]);
      hasWatchVideoOnMobileTasks = obj.useHasWatchVideoOnMobileTasks(quest.config);
      const items = [tmp7, questDockWrapperSpecs, quest.id, setRestingQuestDockMode, hasWatchVideoOnMobileTasks];
      let userStatus = quest.userStatus;
      let completedAt;
      const useEffect = hasWatchVideoOnMobileTasks.useEffect;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      items[5] = completedAt;
      const effect = useEffect(() => {
        function maybeOpenVideoQuestModal() {
          return obj(...arguments);
        }
        let obj = function _maybeOpenVideoQuestModal2() {
          obj = _asyncToGenerator(async () => {
            let closure_0;
            let v1;
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                    let tmp11 =
                      c2.get().prevDeltaY < 0 &&
                      closure_1_3 === constants.RESET_TO_PREVIOUS &&
                      closure_2_7.prevRestingQuestDockMode === constants.EXPANDED;
                    if (tmp11) {
                      let tmp15 = !closure_2_6.isQuestAccessSuspended;
                      if (!tmp15) {
                        const userStatus = tmp.userStatus;
                        let completedAt;
                        if (userStatus != null) {
                          completedAt = userStatus.completedAt;
                        }
                        tmp15 = null != completedAt;
                      }
                      tmp11 = tmp15;
                    }
                    if (tmp11) {
                      const obj4 = {
                        questId: tmp.id,
                        sourceQuestContent: closure_2_0(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE,
                      };
                      const tmp21 = setRestingQuestDockMode(questDockWrapperSpecs[16]);
                      v1 = 1;
                      c2 = 1;
                      const obj5 = { value: tmp21(obj4), done: false };
                      return obj5;
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  v1(constants.COLLAPSED);
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp24) {
                c2 = 3;
                throw tmp24;
              }
            }
          });
          return obj(...arguments);
        };
        if (hasWatchVideoOnMobileTasks) {
          maybeOpenVideoQuestModal();
        }
      }, items);
      let obj2 = { children: items1 };
      let obj3 = { style: tmp.headerWrapper, children: closure_12(tmp6Result, obj4) };
      obj4 = {
        quest,
        step: tmp3(tmp4[19]).QuestBottomSheetStep.TASK_STATUS,
        withActionSheet: true,
        location: constants.QUESTS_BAR_MOBILE,
      };
      tmp6Result = setRestingQuestDockMode(questDockWrapperSpecs[18]);
      items1 = [closure_12(View, obj3), ,];
      let obj5 = { style: tmp.contentWrapper, children: closure_12(QuestBottomSheetContent, obj6) };
      obj6 = {
        quest,
        location: constants.QUESTS_BAR_MOBILE,
        step: tmp3(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS,
        sourceQuestContent: tmp3(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE,
      };
      QuestBottomSheetContent = tmp3(tmp4[19]).QuestBottomSheetContent;
      items1[1] = closure_12(View, obj5);
      const obj7 = { style: tmp.footerWrapper, children: closure_12(tmp6Result2, obj8) };
      obj8 = {
        quest,
        step: tmp3(questDockWrapperSpecs[19]).QuestBottomSheetStep.TASK_STATUS,
        style: tmp.footer,
        withSafeArea: false,
        sourceQuestContent: tmp3(questDockWrapperSpecs[17]).QuestContent.QUEST_BAR_MOBILE,
      };
      tmp6Result2 = setRestingQuestDockMode(questDockWrapperSpecs[20]);
      items1[2] = closure_12(View, obj7);
      return closure_14(closure_13, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EnrolledBodyPlayStreamTask(quest) {
      let defibrillator;
      let handleTaskSelect;
      let items;
      let showMicrophone;
      let step;
      let stepActions;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(32);
      quest = quest.quest;
      const tmp4 = closure_15();
      if (cResult[0] !== quest) {
        const obj2 = {
          quest,
          location: constants.QUESTS_BAR_MOBILE,
          sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        };
        cResult[0] = quest;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = QuestBottomSheet;
      const enrolledQuestContentProps = tmpResult.useEnrolledQuestContentProps(tmp5);
      ({ step, defibrillator, stepActions, handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
      if (cResult[2] === quest) {
        let tmp8;
        if (cResult[3] === step) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4.headerWrapper) {
          let tmp10;
          if (cResult[6] === tmp8) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === defibrillator) {
            if (cResult[9] === handleTaskSelect) {
              if (cResult[10] === quest) {
                if (cResult[11] === showMicrophone) {
                  let tmp14;
                  if (cResult[12] === step) {
                    tmp14 = cResult[13];
                  }
                  if (cResult[14] === tmp4.contentWrapper) {
                    let tmp18;
                    if (cResult[15] === tmp14) {
                      tmp18 = cResult[16];
                    }
                    if (cResult[17] === defibrillator.isActive) {
                      if (cResult[18] === defibrillator.start) {
                        if (cResult[19] === quest) {
                          if (cResult[20] === step) {
                            if (cResult[21] === stepActions.onBack) {
                              if (cResult[22] === stepActions.onNext) {
                                let tmp22;
                                if (cResult[23] === tmp4.footer) {
                                  tmp22 = cResult[24];
                                }
                                if (cResult[25] === tmp4.footerWrapper) {
                                  let tmp27;
                                  if (cResult[26] === tmp22) {
                                    tmp27 = cResult[27];
                                  }
                                  if (cResult[28] === tmp10) {
                                    if (cResult[29] === tmp18) {
                                      let tmp31;
                                      if (cResult[30] === tmp27) {
                                        tmp31 = cResult[31];
                                      }
                                      return tmp31;
                                    }
                                  }
                                  const obj3 = { children: items };
                                  items = [tmp10, tmp18, tmp27];
                                  const tmp34 = authStore2(map1, obj3);
                                  cResult[28] = tmp10;
                                  cResult[29] = tmp18;
                                  cResult[30] = tmp27;
                                  cResult[31] = tmp34;
                                  tmp31 = tmp34;
                                }
                                const obj4 = { style: tmp4.footerWrapper, children: tmp22 };
                                const tmp30 = closure_12(View, obj4);
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
                    const obj5 = {
                      quest,
                      step,
                      isDefibrilating: defibrillator.isActive,
                      onBack: stepActions.onBack,
                      onDefib: defibrillator.start,
                      onConnectConsoleNext: stepActions.onNext,
                      style: tmp4.footer,
                      withSafeArea: false,
                      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                    };
                    const tmp25 = QuestBottomSheetFooterDefault;
                    const tmp26 = closure_12(tmp25, obj5);
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
                  const tmp21 = closure_12(View, obj6);
                  cResult[14] = tmp4.contentWrapper;
                  cResult[15] = tmp14;
                  cResult[16] = tmp21;
                  tmp18 = tmp21;
                }
              }
            }
          }
          const obj7 = {
            defibrillator,
            quest,
            handleTaskSelect,
            location: constants.QUESTS_BAR_MOBILE,
            showMicrophone,
            step,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          const QuestBottomSheetContent = QuestBottomSheet.QuestBottomSheetContent;
          const tmp17 = closure_12(QuestBottomSheetContent, obj7);
          cResult[8] = defibrillator;
          cResult[9] = handleTaskSelect;
          cResult[10] = quest;
          cResult[11] = showMicrophone;
          cResult[12] = step;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
        const obj8 = { style: tmp4.headerWrapper, children: tmp8 };
        const tmp13 = closure_12(View, obj8);
        cResult[5] = tmp4.headerWrapper;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const obj9 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
      const tmp9 = closure_12(QuestBottomSheetHeaderDefault, obj9);
      cResult[2] = quest;
      cResult[3] = step;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : function EnrolledBodyPlayStreamTask(quest) {
      let QuestBottomSheetContent;
      let defibrillator;
      let handleTaskSelect;
      let items;
      let obj5;
      let obj7;
      let obj9;
      let showMicrophone;
      let step;
      let stepActions;
      let tmp3;
      quest = quest.quest;
      const tmp = closure_15();
      const obj = QuestBottomSheet;
      const obj2 = {
        quest,
        location: constants.QUESTS_BAR_MOBILE,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      };
      const enrolledQuestContentProps = obj.useEnrolledQuestContentProps(obj2);
      ({ step, defibrillator, stepActions } = enrolledQuestContentProps);
      const obj3 = { children: items };
      ({ handleTaskSelect, showMicrophone } = enrolledQuestContentProps);
      const obj4 = { style: tmp.headerWrapper, children: closure_12(QuestBottomSheetHeaderDefault, obj5) };
      obj5 = { quest, step, withActionSheet: true, location: constants.QUESTS_BAR_MOBILE };
      items = [closure_12(View, obj4), ,];
      const obj6 = { style: tmp.contentWrapper, children: closure_12(QuestBottomSheetContent, obj7) };
      obj7 = {
        defibrillator,
        quest,
        handleTaskSelect,
        location: constants.QUESTS_BAR_MOBILE,
        showMicrophone,
        step,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      };
      QuestBottomSheetContent = QuestBottomSheet.QuestBottomSheetContent;
      items[1] = closure_12(View, obj6);
      const obj8 = { style: tmp.footerWrapper, children: closure_12(tmp3, obj9) };
      obj9 = {
        quest,
        step,
        isDefibrilating: defibrillator.isActive,
        onBack: stepActions.onBack,
        onDefib: defibrillator.start,
        onConnectConsoleNext: stepActions.onNext,
        style: tmp.footer,
        withSafeArea: false,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      };
      tmp3 = QuestBottomSheetFooterDefault;
      items[2] = closure_12(View, obj8);
      return authStore2(map1, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function QuestDockEnrolledBody() {
        let minExpandedContentHeight;
        let tmp4;
        let tmp6;
        const obj = minExpandedContentHeight(576);
        const cResult = obj.c(16);
        const obj2 = minExpandedContentHeight(14925);
        const questDockQuest = obj2.useQuestDockQuest();
        const tmp3 = closure_15();
        minExpandedContentHeight = react.useContext(
          minExpandedContentHeight(14897).QuestDockGestureContext,
        ).minExpandedContentHeight;
        const bottom = useSafeAreaInsetsDefault().bottom;
        if (cResult[0] !== minExpandedContentHeight) {
          const fn = function t(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            if (minExpandedContentHeight.get() !== height) {
              const result = minExpandedContentHeight.set(height);
            }
          };
          cResult[0] = minExpandedContentHeight;
          cResult[1] = fn;
          tmp4 = fn;
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
          tmp6 = items;
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
        const effect = react.useEffect(S, tmp6);
        const wrapper = tmp3.wrapper;
        const bound = Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
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
            let tmp13Result;
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
              tmp13Result = closure_12(closure_16, obj5);
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
          cResult[12] = tmp4;
          cResult[13] = tmp11;
          cResult[14] = tmp12;
          cResult[15] = closure_12(View, obj7);
          const tmp18 = closure_12(View, obj7);
        }
        const items1 = [wrapper, tmp10];
        cResult[7] = tmp3.wrapper;
        cResult[8] = tmp10;
        cResult[9] = items1;
      }
    : function QuestDockEnrolledBody() {
        let items2;
        let minExpandedContentHeight;
        let tmp5Result;
        const obj = minExpandedContentHeight(14925);
        const questDockQuest = obj.useQuestDockQuest();
        const tmp2 = closure_15();
        minExpandedContentHeight = react.useContext(
          minExpandedContentHeight(14897).QuestDockGestureContext,
        ).minExpandedContentHeight;
        const items = [minExpandedContentHeight];
        const bottom = useSafeAreaInsetsDefault().bottom;
        const items1 = [minExpandedContentHeight];
        const callback = react.useCallback((nativeEvent) => {
          const height = nativeEvent.nativeEvent.layout.height;
          if (minExpandedContentHeight.get() !== height) {
            const result = minExpandedContentHeight.set(height);
          }
        }, items);
        const effect = react.useEffect(
          () => () => {
            if (minExpandedContentHeight.get() !== closure_2_10) {
              const result = minExpandedContentHeight.set(tmp);
            }
          },
          items1,
        );
        const obj2 = { style: items2, onLayout: callback, children: tmp5Result };
        items2 = [tmp2.wrapper, { paddingBottom: Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) }];
        ({ paddingBottom: Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) });
        const obj4 = minExpandedContentHeight(7208);
        if (obj4.hasWatchVideoTasks(questDockQuest)) {
          const obj5 = { quest: questDockQuest };
          tmp5Result = closure_12(closure_16, obj5);
        } else {
          const obj6 = { quest: questDockQuest };
          tmp5Result = closure_12(closure_17, obj6);
        }
        return closure_12(View, obj2);
      },
);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx");

export default memoResult;
