// === Module 14722: QuestBottomSheetHeader ===

// Module 14722 (QuestBottomSheetHeader)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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

export default function QuestBottomSheetHeader(quest) {
  quest = quest.quest;
  ({ step, withActionSheet } = quest);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = hasWatchVideoOnMobileTasks();
  let obj = React;
  const items = [quest];
  const memo = React.useMemo(() => ({ type: quest(ref[16]).AdCreativeType.QUEST, quest }), items);
  obj1 = quest(ref[17]);
  isScreenReaderEnabled = step;
  ref = undefined;
  let gameTitle;
  React = undefined;
  c5 = undefined;
  let first;
  let targetMinutes;
  let memo1;
  hasWatchVideoOnMobileTasks = undefined;
  let defaultRewardNameWithArticle;
  c11 = undefined;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  ref = tmp7;
  gameTitle = quest.config.messages.gameTitle;
  let tmp3Result = tmp3(tmp4[7]);
  const questTaskDetails = tmp3Result.useQuestTaskDetails(quest);
  tmp3Result = tmp3(tmp4[8]);
  const hasWatchVideoTasksResult = tmp3Result.hasWatchVideoTasks(quest);
  React = hasWatchVideoTasksResult;
  const actionSheetPressHandler = obj1.useActionSheetPressHandler(memo);
  const isInGameQuestResult = quest(ref[8]).isInGameQuest(quest);
  c5 = isInGameQuestResult;
  const tmp3Result1 = quest(ref[8]);
  first = gameTitle(quest(ref[7]).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  targetMinutes = questTaskDetails.targetMinutes;
  const items1 = [quest];
  memo1 = obj.useMemo(() => {
    let obj = quest(ref[8]);
    obj = { quest };
    return obj.hasStreamOnDesktopTask(obj);
  }, items1);
  const tmp3Result2 = quest(ref[7]);
  hasWatchVideoOnMobileTasks = quest(ref[9]).useHasWatchVideoOnMobileTasks(quest.config);
  const tmp3Result3 = quest(ref[9]);
  const items2 = [first];
  const stateFromStores = quest(ref[10]).useStateFromStores(items2, () => first.getCurrentUser());
  const tmp3Result4 = quest(ref[10]);
  defaultRewardNameWithArticle = quest(ref[11]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp3Result5 = quest(ref[11]);
  const isSponsoredPlayQuestResult = quest(ref[12]).isSponsoredPlayQuest(quest);
  c11 = isSponsoredPlayQuestResult;
  const items3 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo1, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  const memo2 = obj.useMemo(() => {
    if (ref) {
      const intl7 = quest(ref[13]).intl;
      return intl7.string(quest(ref[13]).t["ij5E/5"]);
    } else if (c4) {
      const intl6 = quest(ref[13]).intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = quest(ref[13]).t;
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
        obj = quest(ref[8]);
        const defaultInGameTask = obj.getDefaultInGameTask(quest.config);
        if (null != defaultInGameTask) {
          return defaultInGameTask.messages.taskDescription;
        }
      }
      if (isScreenReaderEnabled === quest(ref[14]).QuestBottomSheetStep.TASK_SELECT) {
        const intl5 = quest(ref[13]).intl;
        let stringResult = intl5.string(quest(ref[13]).t.drVw4T);
      } else if (isScreenReaderEnabled === quest(ref[14]).QuestBottomSheetStep.CONSOLE_CONNECT) {
        const intl4 = quest(ref[13]).intl;
        stringResult = intl4.string(quest(ref[13]).t.svdwbA);
      } else if (c11) {
        const intl3 = quest(ref[13]).intl;
        obj1 = { targetMinutes: null, rewardNameWithArticle: null };
        obj1[0] = targetMinutes;
        obj1[1] = defaultRewardNameWithArticle;
        stringResult = intl3.formatToPlainString(quest(ref[13]).t["2GJLK2"], obj1);
      } else {
        if (first === quest(ref[15]).TaskPlatformScreen.DESKTOP) {
          if (memo1) {
            const intl2 = quest(ref[13]).intl;
            const obj2 = { gameTitle: null, questReward: null, streamingDurationRequirement: null };
            obj2[0] = gameTitle;
            obj2[1] = defaultRewardNameWithArticle;
            obj2[2] = targetMinutes;
            stringResult = intl2.formatToPlainString(quest(ref[13]).t["hkJ+Gs"], obj2);
          }
        }
        const intl = quest(ref[13]).intl;
        const obj3 = { gameTitle: null, rewardNameWithArticle: null, targetMinutes: null };
        obj3[0] = gameTitle;
        obj3[1] = defaultRewardNameWithArticle;
        obj3[2] = targetMinutes;
        stringResult = intl.formatToPlainString(quest(ref[13]).t.NIimTt, obj3);
      }
      return stringResult;
    }
  }, items3);
  const tmp3Result6 = quest(ref[12]);
  isScreenReaderEnabled = quest(ref[18]).useIsScreenReaderEnabled();
  ref = obj.useRef(null);
  const items4 = [isScreenReaderEnabled];
  const effect = obj.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = quest(ref[19]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items4);
  const items5 = [tmp.container, ];
  let containerWithActionSheet = withActionSheet;
  if (withActionSheet) {
    containerWithActionSheet = tmp.containerWithActionSheet;
  }
  obj = { style: items5, children: null };
  items5[1] = containerWithActionSheet;
  let tmp24Result = null != memo2;
  if (tmp24Result) {
    obj = { ref: null, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: null, children: null };
    obj[0] = ref;
    const items6 = [tmp.title, ];
    let titleWithActionSheet = withActionSheet;
    if (withActionSheet) {
      titleWithActionSheet = tmp.titleWithActionSheet;
    }
    items6[1] = titleWithActionSheet;
    obj[4] = items6;
    obj[5] = memo2;
    tmp24Result = targetMinutes(tmp3(tmp4[20]).Text, obj);
    const tmp24 = targetMinutes;
  }
  const items7 = [tmp24Result, ];
  if (withActionSheet) {
    obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp3(tmp4[13]).intl;
    obj1[1] = intl.string(tmp3(tmp4[13]).t["UKOtz+"]);
    obj1[2] = actionSheetPressHandler;
    obj1[3] = tmp.actionSheetButton;
    let obj2 = { color: null };
    obj2[0] = isScreenReaderEnabled(tmp4[6]).colors.INTERACTIVE_TEXT_DEFAULT;
    obj1[4] = targetMinutes(tmp3(tmp4[22]).MoreHorizontalIcon, obj2);
    withActionSheet = targetMinutes(tmp3(tmp4[21]).PressableOpacity, obj1);
  }
  items7[1] = withActionSheet;
  obj[1] = items7;
  return memo1(c5, obj);
};