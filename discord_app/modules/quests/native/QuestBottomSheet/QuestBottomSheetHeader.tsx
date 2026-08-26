// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, containerWithActionSheet: null, title: null, titleWithActionSheet: null, actionSheetButton: null };
createCacheKey = { display: "flex", gap: 6, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", flexDirection: "row", paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "left", flex: 1 };
createCacheKey[4] = { flexGrow: 0, flexShrink: 0 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", flexDirection: "row", paddingHorizontal: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default function QuestBottomSheetHeader(arg0) {
  ({ quest, step, withActionSheet } = arg0);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = hasWatchVideoOnMobileTasks();
  let obj = isScreenReaderEnabled(14615);
  isScreenReaderEnabled = quest;
  ref = step;
  dependencyMap = undefined;
  let gameTitle;
  let React;
  c5 = undefined;
  let first;
  let targetMinutes;
  let memo;
  hasWatchVideoOnMobileTasks = undefined;
  let defaultRewardNameWithArticle;
  c11 = undefined;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  dependencyMap = tmp6;
  gameTitle = quest.config.messages.gameTitle;
  let tmp2Result = tmp2(10599);
  const questTaskDetails = tmp2Result.useQuestTaskDetails(quest);
  tmp2Result = tmp2(7394);
  const hasWatchVideoTasksResult = tmp2Result.hasWatchVideoTasks(quest);
  React = hasWatchVideoTasksResult;
  const actionSheetPressHandler = obj.useActionSheetPressHandler(quest);
  const isInGameQuestResult = isScreenReaderEnabled(7394).isInGameQuest(quest);
  c5 = isInGameQuestResult;
  const tmp2Result1 = isScreenReaderEnabled(7394);
  first = gameTitle(isScreenReaderEnabled(10599).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  targetMinutes = questTaskDetails.targetMinutes;
  const items = [quest];
  memo = React.useMemo(() => {
    let obj = isScreenReaderEnabled(7394);
    obj = { quest: isScreenReaderEnabled };
    return obj.hasStreamOnDesktopTask(obj);
  }, items);
  const tmp2Result2 = isScreenReaderEnabled(10599);
  hasWatchVideoOnMobileTasks = isScreenReaderEnabled(14614).useHasWatchVideoOnMobileTasks(quest.config);
  const tmp2Result3 = isScreenReaderEnabled(14614);
  const items1 = [first];
  const stateFromStores = isScreenReaderEnabled(589).useStateFromStores(items1, () => first.getCurrentUser());
  const tmp2Result4 = isScreenReaderEnabled(589);
  defaultRewardNameWithArticle = isScreenReaderEnabled(10615).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp2Result5 = isScreenReaderEnabled(10615);
  const isSponsoredPlayQuestResult = isScreenReaderEnabled(7392).isSponsoredPlayQuest(quest);
  c11 = isSponsoredPlayQuestResult;
  const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  const memo1 = React.useMemo(() => {
    if (dependencyMap) {
      const intl7 = isScreenReaderEnabled(1236).intl;
      return intl7.string(isScreenReaderEnabled(1236).t["ij5E/5"]);
    } else if (c4) {
      const intl6 = isScreenReaderEnabled(1236).intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = isScreenReaderEnabled(1236).t;
      if (hasWatchVideoOnMobileTasks) {
        let obj = { reward: null };
        obj[0] = defaultRewardNameWithArticle;
        let formatToPlainStringResult = formatToPlainString(t.ttFsLj, obj);
      } else {
        obj = { questReward: null };
        obj[0] = defaultRewardNameWithArticle;
        formatToPlainStringResult = formatToPlainString(t.IpoqqA, obj);
      }
      return formatToPlainStringResult;
    } else {
      if (c5) {
        obj = isScreenReaderEnabled(7394);
        const defaultInGameTask = obj.getDefaultInGameTask(isScreenReaderEnabled.config);
        if (null != defaultInGameTask) {
          return defaultInGameTask.messages.taskDescription;
        }
      }
      if (ref === isScreenReaderEnabled(14643).QuestBottomSheetStep.TASK_SELECT) {
        const intl5 = isScreenReaderEnabled(1236).intl;
        let stringResult = intl5.string(isScreenReaderEnabled(1236).t.drVw4T);
      } else if (ref === isScreenReaderEnabled(14643).QuestBottomSheetStep.CONSOLE_CONNECT) {
        const intl4 = isScreenReaderEnabled(1236).intl;
        stringResult = intl4.string(isScreenReaderEnabled(1236).t.svdwbA);
      } else if (c11) {
        const intl3 = isScreenReaderEnabled(1236).intl;
        obj1 = { targetMinutes: null, rewardNameWithArticle: null };
        obj1[0] = targetMinutes;
        obj1[1] = defaultRewardNameWithArticle;
        stringResult = intl3.formatToPlainString(isScreenReaderEnabled(1236).t["2GJLK2"], obj1);
      } else {
        if (first === isScreenReaderEnabled(5337).TaskPlatformScreen.DESKTOP) {
          if (memo) {
            const intl2 = isScreenReaderEnabled(1236).intl;
            const obj2 = { gameTitle: null, questReward: null, streamingDurationRequirement: null };
            obj2[0] = gameTitle;
            obj2[1] = defaultRewardNameWithArticle;
            obj2[2] = targetMinutes;
            stringResult = intl2.formatToPlainString(isScreenReaderEnabled(1236).t["hkJ+Gs"], obj2);
          }
        }
        const intl = isScreenReaderEnabled(1236).intl;
        const obj3 = { gameTitle: null, rewardNameWithArticle: null, targetMinutes: null };
        obj3[0] = gameTitle;
        obj3[1] = defaultRewardNameWithArticle;
        obj3[2] = targetMinutes;
        stringResult = intl.formatToPlainString(isScreenReaderEnabled(1236).t.NIimTt, obj3);
      }
      return stringResult;
    }
  }, items2);
  const tmp2Result6 = isScreenReaderEnabled(7392);
  isScreenReaderEnabled = isScreenReaderEnabled(4866).useIsScreenReaderEnabled();
  ref = React.useRef(null);
  const items3 = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(4875);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items3);
  const items4 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  obj = { style: items4, children: null };
  items4[1] = containerWithActionSheet;
  let tmp23Result = null != memo1;
  if (tmp23Result) {
    obj = { ref: null, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: null, children: null };
    obj[0] = ref;
    const items5 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items5[1] = titleWithActionSheet;
    obj[4] = items5;
    obj[5] = memo1;
    tmp23Result = targetMinutes(tmp2(4440).Text, obj);
    const tmp23 = targetMinutes;
  }
  const items6 = [tmp23Result, ];
  if (withActionSheet) {
    obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1236).intl;
    obj1[1] = intl.string(tmp2(1236).t["UKOtz+"]);
    obj1[2] = actionSheetPressHandler;
    obj1[3] = tmp.actionSheetButton;
    let obj2 = { color: null };
    obj2[0] = ref(712).colors.INTERACTIVE_TEXT_DEFAULT;
    obj1[4] = targetMinutes(tmp2(8819).MoreHorizontalIcon, obj2);
    withActionSheet = targetMinutes(tmp2(5015).PressableOpacity, obj1);
  }
  items6[1] = withActionSheet;
  obj[1] = items6;
  return memo(c5, obj);
};