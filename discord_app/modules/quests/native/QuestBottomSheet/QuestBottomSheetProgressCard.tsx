// === Module 14666: QuestBottomSheetProgressCard ===

// Module 14666 (QuestBottomSheetProgressCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import LinearGradientDefault from "LinearGradient" /* 5286 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5759 */;
import FastImageDefault from "FastImage" /* 5894 */;
import Card from "Card" /* 5914 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10668 */;
import AssetUtils from "AssetUtils" /* 10676 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 14624 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 14637 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 14667 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { card: { padding: 0 }, cardWatchTask: { justifyContent: "flex-end", height: 210 }, content: { padding: nativeDefault.space.PX_16 }, contentWatchTask: { alignItems: "flex-end" }, footer: null, instructionsText: null, videoPreviewWrapper: null, videoPreview: null, playVideoIconWrapper: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.footer = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj4 = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.instructionsText = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
let obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderRadius = nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS;
obj6.overflow = "hidden";
obj2.videoPreviewWrapper = obj6;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.videoPreview = {};
let size = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60, transform: null };
let items = [{ translateX: -30 }, { translateY: -30 }];
size.transform = items;
obj2.playVideoIconWrapper = size;
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = function QuestBottomSheetProgressCardPlayStreamTask(quest) {
  quest = quest.quest;
  let questTaskDetails;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  let questFormattedDate;
  let gameTitle;
  let defaultRewardName;
  c8 = undefined;
  const tmp = closure_9();
  questTaskDetails = questTaskDetails(10668).useQuestTaskDetails(quest);
  let obj = questTaskDetails(10668);
  let isQuestProgressing = questTaskDetails(10668).useIsQuestProgressing(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp7 = null != completedAt;
  dependencyMap = tmp7;
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  noop = tmp9;
  let obj2 = questTaskDetails(10668);
  const result = questTaskDetails(10706).supportedTaskPlatforms(quest);
  c4 = result;
  const tmp2Result = questTaskDetails(10706);
  questFormattedDate = questTaskDetails(10668).useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  const tmp2Result5 = questTaskDetails(10668);
  const items = [gameTitle];
  const stateFromStores = questTaskDetails(504).useStateFromStores(items, () => gameTitle.getCurrentUser());
  const tmp2Result6 = questTaskDetails(504);
  defaultRewardName = questTaskDetails(10681).getDefaultRewardName(quest.config, stateFromStores);
  const tmp2Result7 = questTaskDetails(10681);
  const isSponsoredPlayQuestResult = questTaskDetails(7130).isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp7, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = noop.useMemo(() => {
    if (dependencyMap) {
      if (!closure_3) {
        const intl = util.intl;
        const obj = {
          rewardHook() {
                return defaultRewardName(questTaskDetails(4825).Text, { variant: "text-sm/semibold", color: "text-strong", children });
              },
          date: questFormattedDate
        };
        return intl.format(util.t.e3OlfB, obj);
      }
    }
    if (isQuestProgressing) {
      const _Math = Math;
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      const intl7 = util.intl;
      const obj2 = {
        minutesLeft: rounded,
        minutesHook(children) {
            return children(questTaskDetails(4825).Text, { variant: "text-sm/semibold", color: "text-strong", children });
          }
      };
      return intl7.format(util.t.aFaRso, obj2);
    } else {
      if (c8) {
        const intl6 = util.intl;
        let stringResult = intl6.string(util.t["04ateG"]);
      } else if (_undefined.length > 1) {
        const intl5 = util.intl;
        const obj3 = { gameName: gameTitle };
        stringResult = intl5.formatToPlainString(util.t.E2R8VX, obj3);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = util.intl;
        const obj4 = { gameName: gameTitle };
        stringResult = intl4.formatToPlainString(util.t.boMftC, obj4);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = util.intl;
        const obj5 = { gameName: gameTitle };
        stringResult = intl3.formatToPlainString(util.t["9Peldf"], obj5);
      } else {
        const CONSOLE = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(questTaskDetails.taskType)) {
          const intl2 = util.intl;
          const obj6 = { gameTitle };
          stringResult = intl2.formatToPlainString(util.t["+8JB6Y"], obj6);
        }
      }
      return stringResult;
    }
  }, items1);
  let obj3 = { style: tmp.card, border: "subtle", children: null };
  let obj4 = { style: tmp.content, children: null };
  let obj5 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: null, hasConfetti: true };
  const tmp2Result8 = questTaskDetails(7130);
  if (!tmp7) {
    tmp7 = isQuestProgressing;
  }
  obj5.loading = !tmp7;
  const items2 = [defaultRewardName(isQuestProgressing(14637), obj5), ];
  let tmp18Result = null != memo;
  if (tmp18Result) {
    let obj6 = { style: tmp.instructionsText, variant: "text-sm/semibold", color: "text-subtle", children: memo };
    tmp18Result = tmp18(tmp2(4825).Text, obj6);
  }
  items2[1] = tmp18Result;
  obj4.children = items2;
  const items3 = [c8(c4, obj4), ];
  if (isQuestProgressing) {
    const obj7 = { style: tmp.footer, children: null };
    const obj8 = { color: "text-feedback-positive", variant: "text-sm/semibold", children: null };
    let intl = tmp2(1115).intl;
    const obj9 = { gameName: quest.config.messages.gameTitle };
    obj8.children = intl.format(tmp2(1115).t.lIFg6I, obj9);
    obj7.children = tmp18(tmp2(4825).Text, obj8);
    isQuestProgressing = tmp18(tmp17, obj7);
  }
  items3[1] = isQuestProgressing;
  obj3.children = items3;
  return c8(questTaskDetails(5914).Card, obj3);
};
export const QuestBottomSheetProgressCardWatchTask = function QuestBottomSheetProgressCardWatchTask(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest];
  const questTaskDetails = quest(10668).useQuestTaskDetails(quest);
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO), items);
  const items1 = [quest];
  const memo1 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items1);
  const items2 = [quest];
  const memo2 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE), items2);
  const obj = quest(10668);
  let isHeroVideoSupportedResult = null != memo;
  const obj2 = quest(14629);
  const obj3 = { questId: quest.id, sourceQuestContent: quest.sourceQuestContent };
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = tmp2(10665).isHeroVideoSupported(memo.mimetype);
    const tmp2Result = tmp2(10665);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    let YsCuyF = tmp2(1115).t.YsCuyF;
  } else {
    YsCuyF = tmp2(1115).t["74KqrR"];
  }
  const watchTaskPressHandler = quest(14629).useWatchTaskPressHandler({ questId: quest.id, sourceQuestContent: quest.sourceQuestContent });
  let tmp12 = watchTaskPressHandler;
  if (tmp2Result2.useIsQuestAccessSuspended()) {
    tmp12 = openQuestAccessSuspendedBottomSheetDefault;
  }
  const obj4 = { onPress: tmp12, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp2(1115).intl;
  obj4.accessibilityLabel = intl.string(YsCuyF);
  const obj5 = { style: null, border: "subtle", children: null };
  const items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  obj5.style = items3;
  let tmp15Result = isHeroVideoSupportedResult;
  if (isHeroVideoSupportedResult) {
    const obj6 = { style: tmp.videoPreviewWrapper, children: null };
    const obj7 = { style: tmp.videoPreview, poster: null, posterResizeMode: "cover", source: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    let url;
    if (memo1 != null) {
      url = memo1.url;
    }
    obj7.poster = url;
    const obj8 = { uri: memo.url };
    obj7.source = obj8;
    const items4 = [closure_7(tmp2(7747).VideoComponent, obj7), ];
    const obj9 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items4[1] = closure_7(LinearGradientDefault, obj9);
    obj6.children = items4;
    tmp15Result = closure_8(closure_4, obj6);
  }
  const items5 = [tmp15Result, , , ];
  let tmp15Result2 = !isHeroVideoSupportedResult;
  if (!isHeroVideoSupportedResult) {
    tmp15Result2 = null != memo2;
  }
  if (tmp15Result2) {
    const obj10 = { style: tmp.videoPreviewWrapper, children: null };
    const obj11 = { style: tmp.videoPreview, source: null, resizeMode: "cover" };
    const obj12 = { uri: memo2.url };
    obj11.source = obj12;
    const items6 = [closure_7(FastImageDefault, obj11), ];
    const obj13 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items6[1] = closure_7(LinearGradientDefault, obj13);
    obj10.children = items6;
    tmp15Result2 = closure_8(closure_4, obj10);
  }
  items5[1] = tmp15Result2;
  const obj14 = { style: tmp.playVideoIconWrapper, children: null };
  const items7 = [closure_7(QuestDockBlurredContentBackgroundDefault, { blurTheme: "light" }), ];
  tmp2Result2 = quest(10668);
  items7[1] = closure_7(quest(7714).PlayIcon, { color: nativeDefault.colors.WHITE });
  obj14.children = items7;
  items5[2] = closure_8(closure_4, obj14);
  const obj16 = { style: null, children: closure_7(QuestProgressIndicatorDefault, { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true }) };
  const items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  obj16.style = items8;
  items5[3] = closure_7(closure_4, obj16);
  obj5.children = items5;
  obj4.children = closure_8(quest(5914).Card, obj5);
  return closure_7(quest(5428).PressableOpacity, obj4);
};
export const QuestBottomSheetProgressCardInGameTask = function QuestBottomSheetProgressCardInGameTask(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  const obj2 = { style: tmp.card, border: "subtle", children: null };
  const obj3 = { style: tmp.content, children: null };
  const obj4 = { quest, size: "lg", progress: null, hasConfetti: true };
  let num;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  obj4.progress = num;
  obj3.children = React5(QuestProgressIndicatorDefault, obj4);
  obj2.children = React5(React4, obj3);
  return React5(Card.Card, obj2);
};