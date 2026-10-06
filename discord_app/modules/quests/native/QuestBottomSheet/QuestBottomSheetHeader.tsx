// === Module 14939: QuestBottomSheetHeader ===

// Module 14939 (QuestBottomSheetHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import react_native2 from "react-native" /* 5786 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7219 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7221 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10018 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10924 */;
import QuestHooks from "QuestHooks" /* 14908 */;
import QuestBottomSheet from "QuestBottomSheet" /* 14938 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithActionSheet: obj3, title: { textAlign: "center" }, titleWithActionSheet: { textAlign: "left", flex: 1 }, actionSheetButton: { flexGrow: 0, flexShrink: 0 } };
obj2 = { display: "flex", gap: 6, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentUser;
  let quest;
  let step;
  let tmp12;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(25);
  ({ quest, step } = arg0);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const gameTitle = quest.config.messages.gameTitle;
  const tmp5 = null != completedAt;
  const tmpResult = hooks_QuestHooks;
  const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
  const tmpResult10 = QuestTaskUtils;
  const hasWatchVideoTasksResult = tmpResult10.hasWatchVideoTasks(quest);
  const tmpResult11 = QuestTaskUtils;
  const targetMinutes = questTaskDetails.targetMinutes;
  const isInGameQuestResult = tmpResult11.isInGameQuest(quest);
  const tmpResult12 = hooks_QuestHooks;
  const first = _slicedToArray(tmpResult12.useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  const tmpResult13 = QuestTaskUtils;
  const result = tmpResult13.hasStreamOnDesktopTask({ quest });
  const tmpResult14 = QuestHooks;
  const hasWatchVideoOnMobileTasks = tmpResult14.useHasWatchVideoOnMobileTasks(quest.config);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp12 = items;
    tmp13 = fn;
  } else {
    [tmp12, tmp13] = cResult;
  }
  const tmpResult15 = get_initialized;
  const stateFromStores = tmpResult15.useStateFromStores(tmp12, tmp13);
  if (cResult[2] === stateFromStores) {
    let tmp16;
    let taskDescription;
    if (cResult[3] === quest.config) {
      tmp16 = cResult[4];
    }
    utils_QuestUtils;
    if (tmp5) {
      let tmp35;
      const _Symbol3 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl8 = intl9.intl;
        const stringResult = intl8.string(intl9.t["ij5E/5"]);
        cResult[5] = stringResult;
        tmp35 = stringResult;
      } else {
        tmp35 = cResult[5];
      }
      taskDescription = tmp35;
    } else if (hasWatchVideoTasksResult) {
      if (hasWatchVideoOnMobileTasks) {
        let tmp33;
        if (cResult[6] !== tmp16) {
          const intl7 = intl9.intl;
          const obj2 = { reward: tmp16 };
          const formatToPlainStringResult = intl7.formatToPlainString(intl9.t.ttFsLj, obj2);
          cResult[6] = tmp16;
          cResult[7] = formatToPlainStringResult;
          tmp33 = formatToPlainStringResult;
        } else {
          tmp33 = cResult[7];
        }
        taskDescription = tmp33;
      } else {
        let tmp31;
        if (cResult[8] !== tmp16) {
          const intl6 = intl9.intl;
          const obj3 = { questReward: tmp16 };
          const formatToPlainStringResult1 = intl6.formatToPlainString(intl9.t.IpoqqA, obj3);
          cResult[8] = tmp16;
          cResult[9] = formatToPlainStringResult1;
          tmp31 = formatToPlainStringResult1;
        } else {
          tmp31 = cResult[9];
        }
        taskDescription = tmp31;
      }
    } else {
      if (isInGameQuestResult) {
        let tmp20;
        if (cResult[10] !== quest.config) {
          const tmpResult17 = QuestTaskUtils;
          const defaultInGameTask = tmpResult17.getDefaultInGameTask(quest.config);
          cResult[10] = quest.config;
          cResult[11] = defaultInGameTask;
          tmp20 = defaultInGameTask;
        } else {
          tmp20 = cResult[11];
        }
        if (null != tmp20) {
          taskDescription = tmp20.messages.taskDescription;
        }
      }
      if (step !== QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
        if (step !== QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT) {
          if (tmp19) {
            if (cResult[14] === tmp16) {
              let tmp29;
              if (cResult[15] === targetMinutes) {
                tmp29 = cResult[16];
              }
              taskDescription = tmp29;
            }
            const intl5 = intl9.intl;
            const obj4 = { targetMinutes, rewardNameWithArticle: tmp16 };
            const formatToPlainStringResult2 = intl5.formatToPlainString(intl9.t["2GJLK2"], obj4);
            cResult[14] = tmp16;
            cResult[15] = targetMinutes;
            cResult[16] = formatToPlainStringResult2;
            tmp29 = formatToPlainStringResult2;
          } else {
            if (first === QuestTypes.TaskPlatformScreen.DESKTOP) {
              if (result) {
                if (cResult[17] === gameTitle) {
                  if (cResult[18] === tmp16) {
                    let tmp27;
                    if (cResult[19] === targetMinutes) {
                      tmp27 = cResult[20];
                    }
                    taskDescription = tmp27;
                  }
                }
                const intl4 = intl9.intl;
                const obj5 = { gameTitle, questReward: tmp16, streamingDurationRequirement: targetMinutes };
                const formatToPlainStringResult3 = intl4.formatToPlainString(intl9.t["hkJ+Gs"], obj5);
                cResult[17] = gameTitle;
                cResult[18] = tmp16;
                cResult[19] = targetMinutes;
                cResult[20] = formatToPlainStringResult3;
                tmp27 = formatToPlainStringResult3;
              }
            }
            if (cResult[21] === gameTitle) {
              if (cResult[22] === tmp16) {
                let tmp25;
                if (cResult[23] === targetMinutes) {
                  tmp25 = cResult[24];
                }
                taskDescription = tmp25;
              }
            }
            const intl3 = intl9.intl;
            const obj6 = { gameTitle, rewardNameWithArticle: tmp16, targetMinutes };
            const formatToPlainStringResult4 = intl3.formatToPlainString(intl9.t.NIimTt, obj6);
            cResult[21] = gameTitle;
            cResult[22] = tmp16;
            cResult[23] = targetMinutes;
            cResult[24] = formatToPlainStringResult4;
            tmp25 = formatToPlainStringResult4;
          }
        } else {
          let tmp23;
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl9.intl;
            const stringResult1 = intl2.string(intl9.t.svdwbA);
            cResult[13] = stringResult1;
            tmp23 = stringResult1;
          } else {
            tmp23 = cResult[13];
          }
          taskDescription = tmp23;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl9.intl;
          const stringResult2 = intl.string(intl9.t.drVw4T);
          cResult[12] = stringResult2;
          taskDescription = stringResult2;
        } else {
          taskDescription = cResult[12];
        }
      }
    }
    return taskDescription;
  }
  const tmpResult18 = QuestRewardUtils;
  const defaultRewardNameWithArticle = tmpResult18.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  cResult[2] = stateFromStores;
  cResult[3] = quest.config;
  cResult[4] = defaultRewardNameWithArticle;
  tmp16 = defaultRewardNameWithArticle;
}) : ((quest) => {
  let c4;
  let closure_2;
  quest = quest.quest;
  const step = quest.step;
  dependencyMap = undefined;
  let gameTitle;
  react = undefined;
  let c5;
  let first;
  let targetMinutes;
  let memo;
  let hasWatchVideoOnMobileTasks;
  let defaultRewardNameWithArticle;
  let c11;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  dependencyMap = tmp2;
  gameTitle = quest.config.messages.gameTitle;
  let obj = quest(10924);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj2 = quest(7221);
  const hasWatchVideoTasksResult = obj2.hasWatchVideoTasks(quest);
  react = hasWatchVideoTasksResult;
  let obj3 = quest(7221);
  const isInGameQuestResult = obj3.isInGameQuest(quest);
  c5 = isInGameQuestResult;
  let obj4 = quest(10924);
  first = gameTitle(obj4.useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  targetMinutes = questTaskDetails.targetMinutes;
  const items = [quest];
  memo = react.useMemo(() => {
    const obj = QuestTaskUtils;
    const obj2 = { quest };
    return obj.hasStreamOnDesktopTask(obj2);
  }, items);
  let obj5 = quest(14908);
  hasWatchVideoOnMobileTasks = obj5.useHasWatchVideoOnMobileTasks(quest.config);
  let obj6 = quest(504);
  const items1 = [first];
  const stateFromStores = obj6.useStateFromStores(items1, () => first.getCurrentUser());
  const obj7 = quest(10018);
  defaultRewardNameWithArticle = obj7.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const obj8 = quest(7219);
  const isSponsoredPlayQuestResult = obj8.isSponsoredPlayQuest(quest);
  c11 = isSponsoredPlayQuestResult;
  const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  return react.useMemo(() => {
    if (closure_2) {
      const intl7 = intl9.intl;
      return intl7.string(intl9.t["ij5E/5"]);
    } else if (c4) {
      let formatToPlainStringResult;
      const intl6 = intl9.intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = intl9.t;
      if (hasWatchVideoOnMobileTasks) {
        const obj2 = { reward: defaultRewardNameWithArticle };
        formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj2);
      } else {
        const obj3 = { questReward: defaultRewardNameWithArticle };
        formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj3);
      }
      return formatToPlainStringResult;
    } else {
      let stringResult;
      if (c5) {
        const obj = QuestTaskUtils;
        const defaultInGameTask = obj.getDefaultInGameTask(quest.config);
        if (null != defaultInGameTask) {
          return defaultInGameTask.messages.taskDescription;
        }
      }
      if (step === QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
        const intl5 = intl9.intl;
        stringResult = intl5.string(intl9.t.drVw4T);
      } else if (step === QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT) {
        const intl4 = intl9.intl;
        stringResult = intl4.string(intl9.t.svdwbA);
      } else if (c11) {
        const intl3 = intl9.intl;
        const obj4 = { targetMinutes, rewardNameWithArticle: defaultRewardNameWithArticle };
        stringResult = intl3.formatToPlainString(intl9.t["2GJLK2"], obj4);
      } else {
        if (first === QuestTypes.TaskPlatformScreen.DESKTOP) {
          if (memo) {
            const intl2 = intl9.intl;
            const obj5 = { gameTitle, questReward: defaultRewardNameWithArticle, streamingDurationRequirement: targetMinutes };
            stringResult = intl2.formatToPlainString(intl9.t["hkJ+Gs"], obj5);
          }
        }
        const intl = intl9.intl;
        const obj6 = { gameTitle, rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes };
        stringResult = intl.formatToPlainString(intl9.t.NIimTt, obj6);
      }
      return stringResult;
    }
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let MoreHorizontalIcon;
  let _location;
  let intl;
  let isScreenReaderEnabled;
  let items1;
  let items2;
  let obj4;
  let quest;
  let step;
  let withActionSheet;
  let tmp = isScreenReaderEnabled;
  let obj = isScreenReaderEnabled(576);
  const cResult = obj.c(23);
  ({ quest, step, withActionSheet, location: _location } = arg0);
  const tmp5 = closure_9();
  const tmpResult = tmp(14940);
  const questCreative = tmpResult.useQuestCreative(quest);
  const tmpResult3 = tmp(14909);
  const actionSheetPressHandler = tmpResult3.useActionSheetPressHandler(questCreative);
  if (cResult[0] === _location) {
    if (cResult[1] === quest) {
      let tmp8;
      let tmp15;
      let tmp14;
      if (cResult[2] === step) {
        tmp8 = cResult[3];
      }
      const tmp10 = closure_10(tmp8);
      const tmpResult4 = tmp(5777);
      isScreenReaderEnabled = tmpResult4.useIsScreenReaderEnabled();
      const ref = react.useRef(null);
      if (cResult[4] !== isScreenReaderEnabled) {
        const fn = function v() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native2;
            const result = obj.setAccessibilityFocus(obj2);
          }
        };
        const items = [isScreenReaderEnabled];
        cResult[4] = isScreenReaderEnabled;
        cResult[5] = fn;
        cResult[6] = items;
        tmp15 = items;
        tmp14 = fn;
      } else {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect = react.useEffect(tmp14, tmp15);
      if (cResult[7] === tmp5.container) {
        let tmp18;
        if (cResult[8] === (undefined !== withActionSheet && withActionSheet && tmp5.containerWithActionSheet)) {
          tmp18 = cResult[9];
        }
        if (cResult[10] === tmp5.title) {
          if (cResult[11] === tmp5.titleWithActionSheet) {
            if (cResult[12] === tmp10) {
              let tmp19;
              if (cResult[13] === (undefined !== withActionSheet && withActionSheet)) {
                tmp19 = cResult[14];
              }
              if (cResult[15] === actionSheetPressHandler) {
                if (cResult[16] === tmp5.actionSheetButton) {
                  let tmp22;
                  if (cResult[17] === (undefined !== withActionSheet && withActionSheet)) {
                    tmp22 = cResult[18];
                  }
                  if (cResult[19] === tmp18) {
                    if (cResult[20] === tmp19) {
                      let tmp26;
                      if (cResult[21] === tmp22) {
                        tmp26 = cResult[22];
                      }
                      return tmp26;
                    }
                  }
                  let obj2 = { style: tmp18, children: items1 };
                  items1 = [tmp19, tmp22];
                  const tmp29 = closure_8(View, obj2);
                  cResult[19] = tmp18;
                  cResult[20] = tmp19;
                  cResult[21] = tmp22;
                  cResult[22] = tmp29;
                  tmp26 = tmp29;
                }
              }
              let tmp23 = tmp4;
              if (tmp23) {
                const obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(tmp(1126).t["UKOtz+"]), onPress: actionSheetPressHandler, style: tmp5.actionSheetButton, children: closure_7(MoreHorizontalIcon, obj4) };
                const PressableOpacity = tmp(5916).PressableOpacity;
                intl = tmp(1126).intl;
                obj4 = { color: ref(587).colors.INTERACTIVE_TEXT_DEFAULT };
                MoreHorizontalIcon = tmp(7588).MoreHorizontalIcon;
                tmp23 = closure_7(PressableOpacity, obj3);
              }
              cResult[15] = actionSheetPressHandler;
              cResult[16] = tmp5.actionSheetButton;
              cResult[17] = undefined !== withActionSheet && withActionSheet;
              cResult[18] = tmp23;
              tmp22 = tmp23;
            }
          }
        }
        let tmp21Result = null != tmp10;
        if (tmp21Result) {
          const obj5 = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: items2, children: tmp10 };
          items2 = [tmp5.title, ];
          let titleWithActionSheet = tmp4;
          const Text = tmp(4892).Text;
          if (undefined !== withActionSheet && withActionSheet) {
            titleWithActionSheet = tmp5.titleWithActionSheet;
          }
          items2[1] = titleWithActionSheet;
          tmp21Result = closure_7(Text, obj5);
        }
        cResult[10] = tmp5.title;
        cResult[11] = tmp5.titleWithActionSheet;
        cResult[12] = tmp10;
        cResult[13] = undefined !== withActionSheet && withActionSheet;
        cResult[14] = tmp21Result;
        tmp19 = tmp21Result;
      }
      const items3 = [tmp5.container, undefined !== withActionSheet && withActionSheet && tmp5.containerWithActionSheet];
      cResult[7] = tmp5.container;
      cResult[8] = undefined !== withActionSheet && withActionSheet && tmp5.containerWithActionSheet;
      cResult[9] = items3;
      tmp18 = items3;
    }
  }
  const obj7 = { quest, step, location: _location };
  cResult[0] = _location;
  cResult[1] = quest;
  cResult[2] = step;
  cResult[3] = obj7;
  tmp8 = obj7;
}) : ((step) => {
  let MoreHorizontalIcon;
  let intl;
  let items2;
  let items3;
  let obj7;
  let quest;
  let withActionSheet;
  ({ quest, withActionSheet } = step);
  step = step.step;
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  const _location = step.location;
  let tmp = closure_9();
  let obj = isScreenReaderEnabled(14940);
  const questCreative = obj.useQuestCreative(quest);
  let obj2 = isScreenReaderEnabled(14909);
  const actionSheetPressHandler = obj2.useActionSheetPressHandler(questCreative);
  const tmp6 = closure_10({ quest, step, location: _location });
  const obj3 = isScreenReaderEnabled(5777);
  isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  const ref = react.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native2;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [tmp.container, ];
  const containerWithActionSheet = withActionSheet && tmp.containerWithActionSheet;
  const obj4 = { style: items1, children: items3 };
  items1[1] = containerWithActionSheet;
  let tmp13Result = null != tmp6;
  if (tmp13Result) {
    const obj5 = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: items2, children: tmp6 };
    items2 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    const Text = tmp2(4892).Text;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items2[1] = titleWithActionSheet;
    tmp13Result = closure_7(Text, obj5);
  }
  items3 = [tmp13Result, ];
  if (withActionSheet) {
    const obj6 = { accessibilityRole: "button", accessibilityLabel: intl.string(isScreenReaderEnabled(1126).t["UKOtz+"]), onPress: actionSheetPressHandler, style: tmp.actionSheetButton, children: closure_7(MoreHorizontalIcon, obj7) };
    const PressableOpacity = tmp2(5916).PressableOpacity;
    intl = tmp2(1126).intl;
    obj7 = { color: ref(587).colors.INTERACTIVE_TEXT_DEFAULT };
    MoreHorizontalIcon = tmp2(7588).MoreHorizontalIcon;
    withActionSheet = closure_7(PressableOpacity, obj6);
  }
  items3[1] = withActionSheet;
  return closure_8(View, obj4);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default tmp4;