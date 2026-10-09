// === Module 15314: QuestBottomSheetHeader ===

// Module 15314 (QuestBottomSheetHeader)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5370 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7404 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7406 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9149 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9162 */;
import QuestHooks from "QuestHooks" /* 15281 */;
import QuestBottomSheet from "QuestBottomSheet" /* 15313 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { display: "flex", gap: 6, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, containerWithActionSheet: null, title: null, titleWithActionSheet: null, actionSheetButton: null };
let obj3 = { display: "flex", gap: 6, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.containerWithActionSheet = { alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.title = { textAlign: "center" };
obj2.titleWithActionSheet = { textAlign: "left", flex: 1 };
obj2.actionSheetButton = { flexGrow: 0, flexShrink: 0 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHeaderCopy(arg0) {
  let stringResult = dependencyMap;
  const cResult = c.c(25);
  ({ quest, step } = arg0);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const gameTitle = quest.config.messages.gameTitle;
  const tmp5 = null != completedAt;
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  const tmpResult = hooks_QuestHooks;
  const tmpResult10 = QuestTaskUtils;
  const hasWatchVideoTasksResult = QuestTaskUtils.hasWatchVideoTasks(quest);
  const tmpResult11 = QuestTaskUtils;
  const isInGameQuestResult = QuestTaskUtils.isInGameQuest(quest);
  const targetMinutes = questTaskDetails.targetMinutes;
  const tmpResult12 = hooks_QuestHooks;
  const result = QuestTaskUtils.hasStreamOnDesktopTask({ quest });
  const tmpResult13 = QuestTaskUtils;
  const hasWatchVideoOnMobileTasks = QuestHooks.useHasWatchVideoOnMobileTasks(quest.config);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult14 = QuestHooks;
  const stateFromStores = initialize.useStateFromStores(tmp11, tmp12);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === quest.config) {
      let tmp15 = cResult[4];
    }
    utils_QuestUtils;
    if (tmp5) {
      const _Symbol3 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl8 = util.intl;
        stringResult = intl8.string(util.t["ij5E/5"]);
        cResult[5] = stringResult;
      }
    } else {
      if (hasWatchVideoTasksResult) {
        if (hasWatchVideoOnMobileTasks) {
          if (cResult[6] !== tmp15) {
            const intl7 = util.intl;
            const obj2 = { reward: tmp15 };
            const formatToPlainStringResult = intl7.formatToPlainString(util.t.ttFsLj, obj2);
            cResult[6] = tmp15;
            cResult[7] = formatToPlainStringResult;
            let tmp32 = formatToPlainStringResult;
          } else {
            tmp32 = cResult[7];
          }
          let taskDescription = tmp32;
        } else {
          if (cResult[8] !== tmp15) {
            const intl6 = util.intl;
            const obj3 = { questReward: tmp15 };
            const formatToPlainStringResult1 = intl6.formatToPlainString(util.t.IpoqqA, obj3);
            cResult[8] = tmp15;
            cResult[9] = formatToPlainStringResult1;
            let tmp30 = formatToPlainStringResult1;
          } else {
            tmp30 = cResult[9];
          }
          taskDescription = tmp30;
        }
      } else {
        if (isInGameQuestResult) {
          if (cResult[10] !== quest.config) {
            const defaultInGameTask = QuestTaskUtils.getDefaultInGameTask(quest.config);
            cResult[10] = quest.config;
            cResult[11] = defaultInGameTask;
            let tmp19 = defaultInGameTask;
            const tmpResult17 = QuestTaskUtils;
          } else {
            tmp19 = cResult[11];
          }
          if (null != tmp19) {
            taskDescription = tmp19.messages.taskDescription;
          }
        }
        if (step !== QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
          if (step !== QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT) {
            if (tmp18) {
              if (cResult[14] === tmp15) {
                if (cResult[15] === targetMinutes) {
                  let tmp28 = cResult[16];
                }
                taskDescription = tmp28;
              }
              const intl5 = util.intl;
              const obj4 = { targetMinutes, rewardNameWithArticle: tmp15 };
              const formatToPlainStringResult2 = intl5.formatToPlainString(util.t["2GJLK2"], obj4);
              cResult[14] = tmp15;
              cResult[15] = targetMinutes;
              cResult[16] = formatToPlainStringResult2;
              tmp28 = formatToPlainStringResult2;
            } else {
              if (_slicedToArray(tmpResult12.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === QuestTypes.TaskPlatformScreen.DESKTOP) {
                if (result) {
                  if (cResult[17] === gameTitle) {
                    if (cResult[18] === tmp15) {
                      if (cResult[19] === targetMinutes) {
                        let tmp26 = cResult[20];
                      }
                      taskDescription = tmp26;
                    }
                  }
                  const intl4 = util.intl;
                  const obj5 = { gameTitle, questReward: tmp15, streamingDurationRequirement: targetMinutes };
                  const formatToPlainStringResult3 = intl4.formatToPlainString(util.t["hkJ+Gs"], obj5);
                  cResult[17] = gameTitle;
                  cResult[18] = tmp15;
                  cResult[19] = targetMinutes;
                  cResult[20] = formatToPlainStringResult3;
                  tmp26 = formatToPlainStringResult3;
                }
              }
              if (cResult[21] === gameTitle) {
                if (cResult[22] === tmp15) {
                  if (cResult[23] === targetMinutes) {
                    let tmp24 = cResult[24];
                  }
                  taskDescription = tmp24;
                }
              }
              const intl3 = util.intl;
              const obj6 = { gameTitle, rewardNameWithArticle: tmp15, targetMinutes };
              const formatToPlainStringResult4 = intl3.formatToPlainString(util.t.NIimTt, obj6);
              cResult[21] = gameTitle;
              cResult[22] = tmp15;
              cResult[23] = targetMinutes;
              cResult[24] = formatToPlainStringResult4;
              tmp24 = formatToPlainStringResult4;
            }
          } else {
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = util.intl;
              const stringResult1 = intl2.string(util.t.svdwbA);
              cResult[13] = stringResult1;
              let tmp22 = stringResult1;
            } else {
              tmp22 = cResult[13];
            }
            taskDescription = tmp22;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult2 = intl.string(util.t.drVw4T);
            cResult[12] = stringResult2;
            taskDescription = stringResult2;
          } else {
            taskDescription = cResult[12];
          }
        }
      }
      return taskDescription;
    }
  }
  const tmpResult15 = initialize;
  const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  cResult[2] = stateFromStores;
  cResult[3] = quest.config;
  cResult[4] = defaultRewardNameWithArticle;
  tmp15 = defaultRewardNameWithArticle;
  const tmpResult18 = QuestRewardUtils;
}) : (function useHeaderCopy(quest) {
  quest = quest.quest;
  const step = quest.step;
  dependencyMap = undefined;
  let gameTitle;
  noop = undefined;
  c5 = undefined;
  let first;
  let targetMinutes;
  let memo;
  let hasWatchVideoOnMobileTasks;
  let defaultRewardNameWithArticle;
  c11 = undefined;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  dependencyMap = tmp2;
  gameTitle = quest.config.messages.gameTitle;
  const questTaskDetails = quest(9149).useQuestTaskDetails(quest);
  let obj = quest(9149);
  const hasWatchVideoTasksResult = quest(7406).hasWatchVideoTasks(quest);
  noop = hasWatchVideoTasksResult;
  let obj2 = quest(7406);
  const isInGameQuestResult = quest(7406).isInGameQuest(quest);
  c5 = isInGameQuestResult;
  let obj3 = quest(7406);
  first = gameTitle(quest(9149).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  targetMinutes = questTaskDetails.targetMinutes;
  const items = [quest];
  memo = noop.useMemo(() => QuestTaskUtils.hasStreamOnDesktopTask({ quest }), items);
  let obj4 = quest(9149);
  hasWatchVideoOnMobileTasks = quest(15281).useHasWatchVideoOnMobileTasks(quest.config);
  let obj5 = quest(15281);
  const items1 = [first];
  const stateFromStores = quest(504).useStateFromStores(items1, () => first.getCurrentUser());
  let obj6 = quest(504);
  defaultRewardNameWithArticle = quest(9162).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const obj7 = quest(9162);
  const isSponsoredPlayQuestResult = quest(7404).isSponsoredPlayQuest(quest);
  c11 = isSponsoredPlayQuestResult;
  const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  return noop.useMemo(() => {
    if (closure_2) {
      const intl7 = util.intl;
      return intl7.string(util.t["ij5E/5"]);
    } else if (c4) {
      const intl6 = util.intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = util.t;
      if (hasWatchVideoOnMobileTasks) {
        const obj2 = { reward: defaultRewardNameWithArticle };
        let formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj2);
      } else {
        const obj3 = { questReward: defaultRewardNameWithArticle };
        formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj3);
      }
      return formatToPlainStringResult;
    } else {
      if (c5) {
        const defaultInGameTask = QuestTaskUtils.getDefaultInGameTask(quest.config);
        if (null != defaultInGameTask) {
          return defaultInGameTask.messages.taskDescription;
        }
      }
      if (step === QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
        const intl5 = util.intl;
        let stringResult = intl5.string(util.t.drVw4T);
      } else if (step === QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT) {
        const intl4 = util.intl;
        stringResult = intl4.string(util.t.svdwbA);
      } else if (c11) {
        const intl3 = util.intl;
        const obj4 = { targetMinutes, rewardNameWithArticle: defaultRewardNameWithArticle };
        stringResult = intl3.formatToPlainString(util.t["2GJLK2"], obj4);
      } else {
        if (first === QuestTypes.TaskPlatformScreen.DESKTOP) {
          if (memo) {
            const intl2 = util.intl;
            const obj5 = { gameTitle, questReward: defaultRewardNameWithArticle, streamingDurationRequirement: targetMinutes };
            stringResult = intl2.formatToPlainString(util.t["hkJ+Gs"], obj5);
          }
        }
        const intl = util.intl;
        const obj6 = { gameTitle, rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes };
        stringResult = intl.formatToPlainString(util.t.NIimTt, obj6);
      }
      return stringResult;
    }
  }, items2);
});
ReactCompilerGating = fn(558);
let obj4 = { alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestBottomSheetHeader(arg0) {
  const cResult = isScreenReaderEnabled(576).c(23);
  ({ quest, step, withActionSheet, location: _location } = arg0);
  const tmp5 = closure_9();
  let obj = isScreenReaderEnabled(576);
  const questCreative = isScreenReaderEnabled(15315).useQuestCreative(quest);
  const tmpResult = isScreenReaderEnabled(15315);
  const actionSheetPressHandler = isScreenReaderEnabled(15282).useActionSheetPressHandler(questCreative);
  if (cResult[0] === _location) {
    if (cResult[1] === quest) {
      if (cResult[2] === step) {
        let tmp8 = cResult[3];
      }
      const tmp10 = closure_10(tmp8);
      isScreenReaderEnabled = tmp(5361).useIsScreenReaderEnabled();
      const ref = noop.useRef(null);
      if (cResult[4] !== isScreenReaderEnabled) {
        const fn = function v() {
          let tmp = isScreenReaderEnabled;
          if (isScreenReaderEnabled) {
            tmp = null != ref.current;
          }
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
          }
        };
        const items = [isScreenReaderEnabled];
        cResult[4] = isScreenReaderEnabled;
        cResult[5] = fn;
        cResult[6] = items;
        let tmp15 = items;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const effect = noop.useEffect(tmp14, tmp15);
      let containerWithActionSheet = tmp4;
      if (tmp4) {
        containerWithActionSheet = tmp5.containerWithActionSheet;
      }
      if (cResult[7] === tmp5.container) {
        if (cResult[8] === containerWithActionSheet) {
          let tmp17 = cResult[9];
        }
        if (cResult[10] === tmp5.title) {
          if (cResult[11] === tmp5.titleWithActionSheet) {
            if (cResult[12] === tmp10) {
              if (cResult[13] === tmp4) {
                let tmp18 = cResult[14];
              }
              if (cResult[15] === actionSheetPressHandler) {
                if (cResult[16] === tmp5.actionSheetButton) {
                  if (cResult[17] === tmp4) {
                    let tmp21 = cResult[18];
                  }
                  if (cResult[19] === tmp17) {
                    if (cResult[20] === tmp18) {
                      if (cResult[21] === tmp21) {
                        let tmp25 = cResult[22];
                      }
                      return tmp25;
                    }
                  }
                  let obj2 = { style: tmp17, children: null };
                  const items1 = [tmp18, tmp21];
                  obj2.children = items1;
                  const tmp28 = closure_8(View, obj2);
                  cResult[19] = tmp17;
                  cResult[20] = tmp18;
                  cResult[21] = tmp21;
                  cResult[22] = tmp28;
                  tmp25 = tmp28;
                }
              }
              let tmp22 = tmp4;
              if (tmp4) {
                const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
                const intl = tmp(1126).intl;
                obj3.accessibilityLabel = intl.string(tmp(1126).t["UKOtz+"]);
                obj3.onPress = actionSheetPressHandler;
                obj3.style = tmp5.actionSheetButton;
                const obj4 = { color: ref(587).colors.INTERACTIVE_TEXT_DEFAULT };
                obj3.children = closure_7(tmp(9214).MoreHorizontalIcon, obj4);
                tmp22 = closure_7(tmp(6191).PressableOpacity, obj3);
              }
              cResult[15] = actionSheetPressHandler;
              cResult[16] = tmp5.actionSheetButton;
              cResult[17] = tmp4;
              cResult[18] = tmp22;
              tmp21 = tmp22;
            }
          }
        }
        let tmp20Result = null != tmp10;
        if (tmp20Result) {
          const obj5 = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: null, children: null };
          const items2 = [tmp5.title, ];
          let titleWithActionSheet = tmp4;
          if (tmp4) {
            titleWithActionSheet = tmp5.titleWithActionSheet;
          }
          items2[1] = titleWithActionSheet;
          obj5.style = items2;
          obj5.children = tmp10;
          tmp20Result = closure_7(tmp(5087).Text, obj5);
        }
        cResult[10] = tmp5.title;
        cResult[11] = tmp5.titleWithActionSheet;
        cResult[12] = tmp10;
        cResult[13] = tmp4;
        cResult[14] = tmp20Result;
        tmp18 = tmp20Result;
      }
      const items3 = [tmp5.container, containerWithActionSheet];
      cResult[7] = tmp5.container;
      cResult[8] = containerWithActionSheet;
      cResult[9] = items3;
      tmp17 = items3;
      const tmpResult4 = tmp(5361);
    }
  }
  const obj7 = { quest, step, location: _location };
  cResult[0] = _location;
  cResult[1] = quest;
  cResult[2] = step;
  cResult[3] = obj7;
  tmp8 = obj7;
  const tmpResult3 = isScreenReaderEnabled(15282);
}) : (function QuestBottomSheetHeader(step) {
  ({ quest, withActionSheet } = step);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let tmp = closure_9();
  const questCreative = isScreenReaderEnabled(15315).useQuestCreative(quest);
  let obj = isScreenReaderEnabled(15315);
  let obj2 = isScreenReaderEnabled(15282);
  const tmp6 = closure_10({ quest, step: step.step, location: step.location });
  const actionSheetPressHandler = isScreenReaderEnabled(15282).useActionSheetPressHandler(questCreative);
  isScreenReaderEnabled = isScreenReaderEnabled(5361).useIsScreenReaderEnabled();
  const ref = noop.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = containerWithActionSheet;
  let tmp13Result = null != tmp6;
  if (tmp13Result) {
    const obj5 = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: null, children: null };
    const items2 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items2[1] = titleWithActionSheet;
    obj5.style = items2;
    obj5.children = tmp6;
    tmp13Result = closure_7(tmp2(5087).Text, obj5);
  }
  const items3 = [tmp13Result, ];
  if (withActionSheet) {
    const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl = tmp2(1126).intl;
    obj6.accessibilityLabel = intl.string(tmp2(1126).t["UKOtz+"]);
    obj6.onPress = actionSheetPressHandler;
    obj6.style = tmp.actionSheetButton;
    const obj7 = { color: ref(587).colors.INTERACTIVE_TEXT_DEFAULT };
    obj6.children = closure_7(tmp2(9214).MoreHorizontalIcon, obj7);
    withActionSheet = closure_7(tmp2(6191).PressableOpacity, obj6);
  }
  items3[1] = withActionSheet;
  obj4.children = items3;
  return closure_8(View, obj4);
});