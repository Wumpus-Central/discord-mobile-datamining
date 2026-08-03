import _slicedToArray from "_slicedToArray";
import Text from "Text";
import { View } from "SCREEN_READER_ENABLED_GETTER";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "MoreHorizontalIcon";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, containerWithActionSheet: null, title: null, titleWithActionSheet: null, actionSheetButton: null };
createCacheKey = { display: "flex", gap: 6, paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", flexDirection: "row", paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "left", flex: 1 };
createCacheKey[4] = { flexGrow: 0, flexShrink: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", flexDirection: "row", paddingHorizontal: require("Themes").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx");

export default function QuestBottomSheetHeader(arg0) {
  let quest;
  let step;
  let withActionSheet;
  ({ quest, step, withActionSheet } = arg0);
  if (withActionSheet === undefined) {
    withActionSheet = false;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = hasWatchVideoOnMobileTasks();
  let obj = isScreenReaderEnabled(14137);
  isScreenReaderEnabled = quest;
  ref = step;
  let dependencyMap;
  let gameTitle;
  let React;
  let c5;
  let first;
  let targetMinutes;
  let memo;
  hasWatchVideoOnMobileTasks = undefined;
  let defaultRewardNameWithArticle;
  let c11;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  dependencyMap = tmp6;
  gameTitle = quest.config.messages.gameTitle;
  let tmp2Result = tmp2(10505);
  const questTaskDetails = tmp2Result.useQuestTaskDetails(quest);
  tmp2Result = tmp2(6012);
  const hasWatchVideoTasksResult = tmp2Result.hasWatchVideoTasks(quest);
  React = hasWatchVideoTasksResult;
  const actionSheetPressHandler = obj.useActionSheetPressHandler(quest);
  const isInGameQuestResult = isScreenReaderEnabled(6012).isInGameQuest(quest);
  c5 = isInGameQuestResult;
  const tmp2Result1 = isScreenReaderEnabled(6012);
  first = gameTitle(isScreenReaderEnabled(10505).useTaskPlatformScreen(quest, questTaskDetails), 1)[0];
  targetMinutes = questTaskDetails.targetMinutes;
  const items = [quest];
  memo = React.useMemo(() => {
    let obj = isScreenReaderEnabled(_undefined[8]);
    obj = { quest: isScreenReaderEnabled };
    return obj.hasStreamOnDesktopTask(obj);
  }, items);
  const tmp2Result2 = isScreenReaderEnabled(10505);
  hasWatchVideoOnMobileTasks = isScreenReaderEnabled(14136).useHasWatchVideoOnMobileTasks(quest.config);
  const tmp2Result3 = isScreenReaderEnabled(14136);
  const items1 = [first];
  const stateFromStores = isScreenReaderEnabled(589).useStateFromStores(items1, () => first.getCurrentUser());
  const tmp2Result4 = isScreenReaderEnabled(589);
  defaultRewardNameWithArticle = isScreenReaderEnabled(9495).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp2Result5 = isScreenReaderEnabled(9495);
  const isSponsoredPlayQuestResult = isScreenReaderEnabled(6010).isSponsoredPlayQuest(quest);
  c11 = isSponsoredPlayQuestResult;
  const items2 = [null != completedAt, hasWatchVideoTasksResult, step, first, memo, gameTitle, defaultRewardNameWithArticle, targetMinutes, hasWatchVideoOnMobileTasks, isInGameQuestResult, isSponsoredPlayQuestResult, quest.config];
  const memo1 = React.useMemo(() => {
    if (_undefined) {
      const intl7 = isScreenReaderEnabled(_undefined[13]).intl;
      return intl7.string(isScreenReaderEnabled(_undefined[13]).t["ij5E/5"]);
    } else if (c4) {
      const intl6 = isScreenReaderEnabled(_undefined[13]).intl;
      const formatToPlainString = intl6.formatToPlainString;
      const t = isScreenReaderEnabled(_undefined[13]).t;
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
        obj = isScreenReaderEnabled(_undefined[8]);
        const defaultInGameTask = obj.getDefaultInGameTask(isScreenReaderEnabled.config);
        if (null != defaultInGameTask) {
          return defaultInGameTask.messages.taskDescription;
        }
      }
      if (ref === isScreenReaderEnabled(_undefined[14]).QuestBottomSheetStep.TASK_SELECT) {
        const intl5 = isScreenReaderEnabled(_undefined[13]).intl;
        let stringResult = intl5.string(isScreenReaderEnabled(_undefined[13]).t.drVw4T);
      } else if (ref === isScreenReaderEnabled(_undefined[14]).QuestBottomSheetStep.CONSOLE_CONNECT) {
        const intl4 = isScreenReaderEnabled(_undefined[13]).intl;
        stringResult = intl4.string(isScreenReaderEnabled(_undefined[13]).t.svdwbA);
      } else if (c11) {
        const intl3 = isScreenReaderEnabled(_undefined[13]).intl;
        const obj1 = { targetMinutes: null, rewardNameWithArticle: null };
        obj1[0] = targetMinutes;
        obj1[1] = defaultRewardNameWithArticle;
        stringResult = intl3.formatToPlainString(isScreenReaderEnabled(_undefined[13]).t["2GJLK2"], obj1);
      } else {
        if (first === isScreenReaderEnabled(_undefined[15]).TaskPlatformScreen.DESKTOP) {
          if (memo) {
            const intl2 = isScreenReaderEnabled(_undefined[13]).intl;
            const obj2 = { gameTitle: null, questReward: null, streamingDurationRequirement: null };
            obj2[0] = gameTitle;
            obj2[1] = defaultRewardNameWithArticle;
            obj2[2] = targetMinutes;
            stringResult = intl2.formatToPlainString(isScreenReaderEnabled(_undefined[13]).t["hkJ+Gs"], obj2);
          }
        }
        const intl = isScreenReaderEnabled(_undefined[13]).intl;
        const obj3 = { gameTitle: null, rewardNameWithArticle: null, targetMinutes: null };
        obj3[0] = gameTitle;
        obj3[1] = defaultRewardNameWithArticle;
        obj3[2] = targetMinutes;
        stringResult = intl.formatToPlainString(isScreenReaderEnabled(_undefined[13]).t.NIimTt, obj3);
      }
      return stringResult;
    }
  }, items2);
  const tmp2Result6 = isScreenReaderEnabled(6010);
  isScreenReaderEnabled = isScreenReaderEnabled(4590).useIsScreenReaderEnabled();
  ref = React.useRef(null);
  const items3 = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(_undefined[18]);
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
    tmp23Result = targetMinutes(tmp2(4189).Text, obj);
    const tmp23 = targetMinutes;
  }
  const items6 = [tmp23Result, ];
  if (withActionSheet) {
    let obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1236).intl;
    obj1[1] = intl.string(tmp2(1236).t["UKOtz+"]);
    obj1[2] = actionSheetPressHandler;
    obj1[3] = tmp.actionSheetButton;
    let obj2 = { color: null };
    obj2[0] = ref(712).colors.INTERACTIVE_TEXT_DEFAULT;
    obj1[4] = targetMinutes(tmp2(8972).MoreHorizontalIcon, obj2);
    withActionSheet = targetMinutes(tmp2(4721).PressableOpacity, obj1);
  }
  items6[1] = withActionSheet;
  obj[1] = items6;
  return memo(c5, obj);
};