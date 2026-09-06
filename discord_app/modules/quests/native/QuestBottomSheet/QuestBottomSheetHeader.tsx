// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import QuestBottomSheet from "QuestBottomSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  containerWithActionSheet: null,
  title: null,
  titleWithActionSheet: null,
  actionSheetButton: null,
};
createStyles = {
  display: "flex",
  gap: 6,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
};
createStyles.container = createStyles;
createStyles.containerWithActionSheet = {
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_8,
};
createStyles.title = { textAlign: "center" };
createStyles.titleWithActionSheet = { textAlign: "left", flex: 1 };
createStyles.actionSheetButton = { flexGrow: 0, flexShrink: 0 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = isScreenReaderEnabled(15102);
  const questCreative = obj.useQuestCreative(quest);
  let obj1 = isScreenReaderEnabled(15092);
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
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  closure_129_2 = tmp7;
  const gameTitle = quest.config.messages.gameTitle;
  closure_129_3 = gameTitle;
  let tmp2Result = tmp2(11483);
  const questTaskDetails = tmp2Result.useQuestTaskDetails(quest);
  tmp2Result = tmp2(7724);
  const hasWatchVideoTasksResult = tmp2Result.hasWatchVideoTasks(quest);
  closure_129_4 = hasWatchVideoTasksResult;
  const actionSheetPressHandler = obj1.useActionSheetPressHandler(questCreative);
  const isInGameQuestResult = isScreenReaderEnabled(7724).isInGameQuest(quest);
  closure_129_5 = isInGameQuestResult;
  const tmp2Result1 = isScreenReaderEnabled(7724);
  const first = _slicedToArray(isScreenReaderEnabled(11483).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  closure_129_6 = first;
  const targetMinutes = questTaskDetails.targetMinutes;
  closure_129_7 = targetMinutes;
  const items = [quest];
  const memo = noop.useMemo(() => {
    const obj = { quest: isScreenReaderEnabled };
    return obj.hasStreamOnDesktopTask(obj);
  }, items);
  closure_129_8 = memo;
  const tmp2Result2 = isScreenReaderEnabled(11483);
  const hasWatchVideoOnMobileTasks = isScreenReaderEnabled(15091).useHasWatchVideoOnMobileTasks(quest.config);
  closure_129_9 = hasWatchVideoOnMobileTasks;
  const tmp2Result3 = isScreenReaderEnabled(15091);
  const items1 = [UserStore];
  const stateFromStores = isScreenReaderEnabled(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp2Result4 = isScreenReaderEnabled(504);
  const defaultRewardNameWithArticle = isScreenReaderEnabled(11290).getDefaultRewardNameWithArticle(
    quest.config,
    stateFromStores,
  );
  closure_129_10 = defaultRewardNameWithArticle;
  const tmp2Result5 = isScreenReaderEnabled(11290);
  const isSponsoredPlayQuestResult = isScreenReaderEnabled(7722).isSponsoredPlayQuest(quest);
  closure_129_11 = isSponsoredPlayQuestResult;
  const items2 = [
    null != completedAt,
    hasWatchVideoTasksResult,
    step,
    first,
    memo,
    gameTitle,
    defaultRewardNameWithArticle,
    targetMinutes,
    hasWatchVideoOnMobileTasks,
    isInGameQuestResult,
    isSponsoredPlayQuestResult,
    quest.config,
  ];
  const memo1 = noop.useMemo(() => {
    if (dependencyMap) {
      const intl7 = util.intl;
      return intl7.string(util.t["ij5E/5"]);
    } else if (noop) {
      const intl6 = util.intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = util.t;
      if (closure_1_9) {
        let obj = { reward: rewardNameWithArticle };
        let formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj);
      } else {
        obj = { questReward: rewardNameWithArticle };
        formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj);
      }
      return formatToPlainStringResult;
    } else {
      if (View) {
        obj = QuestTaskUtils;
        const defaultInGameTask = obj.getDefaultInGameTask(isScreenReaderEnabled.config);
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
        const obj1 = { targetMinutes, rewardNameWithArticle };
        stringResult = intl3.formatToPlainString(util.t["2GJLK2"], obj1);
      } else {
        if (currentUser === QuestTypes.TaskPlatformScreen.DESKTOP) {
          if (closure_1_8) {
            const intl2 = util.intl;
            const obj2 = { gameTitle, questReward: rewardNameWithArticle, streamingDurationRequirement: targetMinutes };
            stringResult = intl2.formatToPlainString(util.t["hkJ+Gs"], obj2);
          }
        }
        const intl = util.intl;
        const obj3 = { gameTitle, rewardNameWithArticle, targetMinutes };
        stringResult = intl.formatToPlainString(util.t.NIimTt, obj3);
      }
      return stringResult;
    }
  }, items2);
  const tmp2Result6 = isScreenReaderEnabled(7722);
  isScreenReaderEnabled = isScreenReaderEnabled(4962).useIsScreenReaderEnabled();
  ref = noop.useRef(null);
  const items3 = [isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items3);
  const items4 = [tmp.container];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  obj = { style: items4, children: null };
  items4[1] = containerWithActionSheet;
  let tmp24Result = null != memo1;
  if (tmp24Result) {
    obj = {
      ref,
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      style: null,
      children: null,
    };
    const items5 = [tmp.title];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items5[1] = titleWithActionSheet;
    obj.style = items5;
    obj.children = memo1;
    tmp24Result = closure_7(tmp2(4556).Text, obj);
  }
  const items6 = [tmp24Result];
  if (withActionSheet) {
    obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1114).intl;
    obj1.accessibilityLabel = intl.string(tmp2(1114).t["UKOtz+"]);
    obj1.onPress = actionSheetPressHandler;
    obj1.style = tmp.actionSheetButton;
    let obj2 = { color: ref(576).colors.INTERACTIVE_TEXT_DEFAULT };
    obj1.children = closure_7(tmp2(8672).MoreHorizontalIcon, obj2);
    withActionSheet = closure_7(tmp2(5123).PressableOpacity, obj1);
  }
  items6[1] = withActionSheet;
  obj.children = items6;
  return closure_8(View, obj);
}
