// === Module 15327: QuestBottomSheetHeader ===

// Module 15327 (QuestBottomSheetHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5138 */;
import QuestTypes from "QuestTypes" /* 5617 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7920 */;
import QuestBottomSheet from "QuestBottomSheet" /* 15326 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { display: "flex", gap: 6, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, containerWithActionSheet: null, title: null, titleWithActionSheet: null, actionSheetButton: null };
let obj3 = { display: "flex", gap: 6, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.containerWithActionSheet = { alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.title = { textAlign: "center" };
obj2.titleWithActionSheet = { textAlign: "left", flex: 1 };
obj2.actionSheetButton = { flexGrow: 0, flexShrink: 0 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default function QuestBottomSheetHeader(arg0) {
  ({ quest, step, withActionSheet } = arg0);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = closure_9();
  const questCreative = isScreenReaderEnabled(15308).useQuestCreative(quest);
  let obj = isScreenReaderEnabled(15308);
  closure_129_0 = quest;
  closure_129_1 = step;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  closure_129_7 = undefined;
  closure_129_8 = undefined;
  closure_129_9 = undefined;
  closure_129_10 = undefined;
  closure_129_11 = undefined;
  const userStatus = quest.userStatus;
  let completedAt;
  let obj2 = isScreenReaderEnabled(15298);
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  closure_129_2 = tmp7;
  const gameTitle = quest.config.messages.gameTitle;
  closure_129_3 = gameTitle;
  const actionSheetPressHandler = isScreenReaderEnabled(15298).useActionSheetPressHandler(questCreative);
  const questTaskDetails = isScreenReaderEnabled(11729).useQuestTaskDetails(quest);
  const tmp2Result = isScreenReaderEnabled(11729);
  const hasWatchVideoTasksResult = isScreenReaderEnabled(7920).hasWatchVideoTasks(quest);
  closure_129_4 = hasWatchVideoTasksResult;
  const tmp2Result9 = isScreenReaderEnabled(7920);
  const isInGameQuestResult = isScreenReaderEnabled(7920).isInGameQuest(quest);
  closure_129_5 = isInGameQuestResult;
  const tmp2Result10 = isScreenReaderEnabled(7920);
  const first = _slicedToArray(isScreenReaderEnabled(11729).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  closure_129_6 = first;
  const targetMinutes = questTaskDetails.targetMinutes;
  closure_129_7 = targetMinutes;
  const items = [quest];
  const memo = noop.useMemo(() => QuestTaskUtils.hasStreamOnDesktopTask({ quest: isScreenReaderEnabled }), items);
  closure_129_8 = memo;
  const tmp2Result11 = isScreenReaderEnabled(11729);
  const hasWatchVideoOnMobileTasks = isScreenReaderEnabled(15297).useHasWatchVideoOnMobileTasks(quest.config);
  closure_129_9 = hasWatchVideoOnMobileTasks;
  const tmp2Result12 = isScreenReaderEnabled(15297);
  const items1 = [UserStore];
  const stateFromStores = isScreenReaderEnabled(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp2Result13 = isScreenReaderEnabled(504);
  const defaultRewardNameWithArticle = isScreenReaderEnabled(11542).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  closure_129_10 = defaultRewardNameWithArticle;
  const tmp2Result14 = isScreenReaderEnabled(11542);
  const isSponsoredPlayQuestResult = isScreenReaderEnabled(7918).isSponsoredPlayQuest(quest);
  closure_129_11 = isSponsoredPlayQuestResult;
  const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  const memo1 = noop.useMemo(() => {
    if (dependencyMap) {
      const intl7 = util.intl;
      return intl7.string(util.t["ij5E/5"]);
    } else if (noop) {
      const intl6 = util.intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = util.t;
      if (closure_1_9) {
        const obj2 = { reward: rewardNameWithArticle };
        let formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj2);
      } else {
        const obj3 = { questReward: rewardNameWithArticle };
        formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj3);
      }
      return formatToPlainStringResult;
    } else {
      if (View) {
        const defaultInGameTask = QuestTaskUtils.getDefaultInGameTask(isScreenReaderEnabled.config);
        if (null != defaultInGameTask) {
          return defaultInGameTask.messages.taskDescription;
        }
      }
      if (ref === QuestBottomSheet.QuestBottomSheetStep.TASK_SELECT) {
        const intl5 = util.intl;
        let stringResult = intl5.string(util.t.drVw4T);
      } else if (ref === QuestBottomSheet.QuestBottomSheetStep.CONSOLE_CONNECT) {
        const intl4 = util.intl;
        stringResult = intl4.string(util.t.svdwbA);
      } else if (closure_1_11) {
        const intl3 = util.intl;
        const obj4 = { targetMinutes, rewardNameWithArticle };
        stringResult = intl3.formatToPlainString(util.t["2GJLK2"], obj4);
      } else {
        if (currentUser === QuestTypes.TaskPlatformScreen.DESKTOP) {
          if (closure_1_8) {
            const intl2 = util.intl;
            const obj5 = { gameTitle, questReward: rewardNameWithArticle, streamingDurationRequirement: targetMinutes };
            stringResult = intl2.formatToPlainString(util.t["hkJ+Gs"], obj5);
          }
        }
        const intl = util.intl;
        const obj6 = { gameTitle, rewardNameWithArticle, targetMinutes };
        stringResult = intl.formatToPlainString(util.t.NIimTt, obj6);
      }
      return stringResult;
    }
  }, items2);
  const tmp2Result15 = isScreenReaderEnabled(7918);
  isScreenReaderEnabled = isScreenReaderEnabled(5129).useIsScreenReaderEnabled();
  ref = noop.useRef(null);
  const items3 = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items3);
  const items4 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  let obj3 = { style: items4, children: null };
  items4[1] = containerWithActionSheet;
  let tmp24Result = null != memo1;
  if (tmp24Result) {
    let obj4 = { ref, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: null, children: null };
    const items5 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items5[1] = titleWithActionSheet;
    obj4.style = items5;
    obj4.children = memo1;
    tmp24Result = closure_7(tmp2(4718).Text, obj4);
  }
  const items6 = [tmp24Result, ];
  if (withActionSheet) {
    let obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1115).intl;
    obj5.accessibilityLabel = intl.string(tmp2(1115).t["UKOtz+"]);
    obj5.onPress = actionSheetPressHandler;
    obj5.style = tmp.actionSheetButton;
    let obj6 = { color: ref(576).colors.INTERACTIVE_TEXT_DEFAULT };
    obj5.children = closure_7(tmp2(8142).MoreHorizontalIcon, obj6);
    withActionSheet = closure_7(tmp2(5292).PressableOpacity, obj5);
  }
  items6[1] = withActionSheet;
  obj3.children = items6;
  return closure_8(View, obj3);
};