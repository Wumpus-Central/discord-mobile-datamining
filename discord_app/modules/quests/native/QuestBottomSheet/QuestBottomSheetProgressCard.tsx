// === Module 15160: QuestBottomSheetProgressCard ===

// Module 15160 (QuestBottomSheetProgressCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5452 */;
import FastImageDefault from "FastImage" /* 5587 */;
import Card from "Card" /* 5607 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11483 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15118 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15131 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 15161 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { card: { padding: 0 }, cardWatchTask: { justifyContent: "flex-end", height: 210 }, content: null, contentWatchTask: null, footer: null, instructionsText: null, videoPreviewWrapper: null, videoPreview: null, playVideoIconWrapper: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.contentWatchTask = { alignItems: "flex-end" };
createStyles.footer = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj1 = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles.instructionsText = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS;
obj3.overflow = "hidden";
createStyles.videoPreviewWrapper = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.videoPreview = {};
let size = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60, transform: null };
let items = [{ translateX: -30 }, { translateY: -30 }];
size.transform = items;
createStyles.playVideoIconWrapper = size;
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = questTaskDetails(11483);
  questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = questTaskDetails(11483);
  let isQuestProgressing = obj1.useIsQuestProgressing(quest);
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
  let tmp2Result = tmp2(11496);
  const result = tmp2Result.supportedTaskPlatforms(quest);
  c4 = result;
  tmp2Result = tmp2(11483);
  questFormattedDate = tmp2Result.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  const items = [gameTitle];
  const stateFromStores = questTaskDetails(504).useStateFromStores(items, () => gameTitle.getCurrentUser());
  const tmp2Result1 = questTaskDetails(504);
  defaultRewardName = questTaskDetails(11290).getDefaultRewardName(quest.config, stateFromStores);
  const tmp2Result2 = questTaskDetails(11290);
  const isSponsoredPlayQuestResult = questTaskDetails(7722).isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp7, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = noop.useMemo(() => {
    if (dependencyMap) {
      if (!closure_3) {
        const intl = util.intl;
        let obj = {
          rewardHook() {
                return defaultRewardName(questTaskDetails(4556).Text, { variant: "text-sm/semibold", color: "text-strong", children });
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
      obj = {
        minutesLeft: rounded,
        minutesHook(children) {
            return children(questTaskDetails(4556).Text, { variant: "text-sm/semibold", color: "text-strong", children });
          }
      };
      return intl7.format(util.t.aFaRso, obj);
    } else {
      if (c8) {
        const intl6 = util.intl;
        let stringResult = intl6.string(util.t["04ateG"]);
      } else if (_undefined.length > 1) {
        const intl5 = util.intl;
        obj = { gameName: gameTitle };
        stringResult = intl5.formatToPlainString(util.t.E2R8VX, obj);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = util.intl;
        const obj1 = { gameName: gameTitle };
        stringResult = intl4.formatToPlainString(util.t.boMftC, obj1);
      } else if (tmp41.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = util.intl;
        const obj2 = { gameName: gameTitle };
        stringResult = intl3.formatToPlainString(util.t["9Peldf"], obj2);
      } else {
        const CONSOLE = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(tmp41.taskType)) {
          const intl2 = util.intl;
          const obj3 = { gameTitle };
          stringResult = intl2.formatToPlainString(util.t["+8JB6Y"], obj3);
        }
      }
      return stringResult;
    }
  }, items1);
  obj = { style: tmp.card, border: "subtle", children: null };
  obj = { style: tmp.content, children: null };
  obj1 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: null, hasConfetti: true };
  const tmp2Result3 = questTaskDetails(7722);
  if (!tmp7) {
    tmp7 = isQuestProgressing;
  }
  obj1.loading = !tmp7;
  const items2 = [defaultRewardName(isQuestProgressing(15131), obj1), ];
  let tmp18Result = null != memo;
  if (tmp18Result) {
    let obj2 = { style: tmp.instructionsText, variant: "text-sm/semibold", color: "text-subtle", children: memo };
    tmp18Result = tmp18(tmp2(4556).Text, obj2);
  }
  items2[1] = tmp18Result;
  obj.children = items2;
  const items3 = [c8(c4, obj), ];
  if (isQuestProgressing) {
    let obj3 = { style: tmp.footer, children: null };
    const obj4 = { color: "text-feedback-positive", variant: "text-sm/semibold", children: null };
    let intl = tmp2(1114).intl;
    const obj5 = { gameName: quest.config.messages.gameTitle };
    obj4.children = intl.format(tmp2(1114).t.lIFg6I, obj5);
    obj3.children = tmp18(tmp2(4556).Text, obj4);
    isQuestProgressing = tmp18(tmp17, obj3);
  }
  items3[1] = isQuestProgressing;
  obj.children = items3;
  return c8(questTaskDetails(5607).Card, obj);
};
export const QuestBottomSheetProgressCardWatchTask = function QuestBottomSheetProgressCardWatchTask(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  let obj = quest(11483);
  const items = [quest];
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO), items);
  const items1 = [quest];
  const memo1 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items1);
  const items2 = [quest];
  const memo2 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE), items2);
  let obj1 = quest(15123);
  obj = { questId: quest.id, sourceQuestContent: quest.sourceQuestContent };
  let isHeroVideoSupportedResult = null != memo;
  if (isHeroVideoSupportedResult) {
    let tmp2Result = tmp2(11767);
    isHeroVideoSupportedResult = tmp2Result.isHeroVideoSupported(memo);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    let YsCuyF = tmp2(1114).t.YsCuyF;
  } else {
    YsCuyF = tmp2(1114).t["74KqrR"];
  }
  tmp2Result = tmp2(11483);
  let tmp12 = obj1.useWatchTaskPressHandler(obj);
  if (tmp2Result.useIsQuestAccessSuspended()) {
    tmp12 = openQuestAccessSuspendedBottomSheetDefault;
  }
  obj = { onPress: tmp12, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp2(1114).intl;
  obj.accessibilityLabel = intl.string(YsCuyF);
  obj1 = { style: null, border: "subtle", children: null };
  const items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  obj1.style = items3;
  let tmp15Result = isHeroVideoSupportedResult;
  if (isHeroVideoSupportedResult) {
    const obj2 = { style: tmp.videoPreviewWrapper, children: null };
    const obj3 = { style: tmp.videoPreview, poster: null, posterResizeMode: "cover", source: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    let url;
    if (memo1 != null) {
      url = memo1.url;
    }
    obj3.poster = url;
    const obj4 = { uri: memo.url };
    obj3.source = obj4;
    const items4 = [tmp14(tmp2(8307).VideoComponent, obj3), ];
    const obj5 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items4[1] = tmp14(LinearGradientDefault, obj5);
    obj2.children = items4;
    tmp15Result = tmp15(closure_4, obj2);
  }
  const items5 = [tmp15Result, , , ];
  tmp15Result = !isHeroVideoSupportedResult;
  if (!isHeroVideoSupportedResult) {
    tmp15Result = null != memo2;
  }
  if (tmp15Result) {
    const obj6 = { style: tmp.videoPreviewWrapper, children: null };
    const obj7 = { style: tmp.videoPreview, source: null, resizeMode: "cover" };
    const obj8 = { uri: memo2.url };
    obj7.source = obj8;
    const items6 = [tmp14(FastImageDefault, obj7), ];
    const obj9 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items6[1] = tmp14(LinearGradientDefault, obj9);
    obj6.children = items6;
    tmp15Result = tmp15(closure_4, obj6);
  }
  items5[1] = tmp15Result;
  const obj10 = { style: tmp.playVideoIconWrapper, children: null };
  const items7 = [closure_7(QuestDockBlurredContentBackgroundDefault, { blurTheme: "light" }), ];
  const watchTaskPressHandler = obj1.useWatchTaskPressHandler(obj);
  items7[1] = closure_7(quest(8274).PlayIcon, { color: nativeDefault.colors.WHITE });
  obj10.children = items7;
  items5[2] = closure_8(closure_4, obj10);
  const obj12 = { style: null, children: closure_7(QuestProgressIndicatorDefault, { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true }) };
  const items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  obj12.style = items8;
  items5[3] = closure_7(closure_4, obj12);
  obj1.children = items5;
  obj.children = closure_8(quest(5607).Card, obj1);
  return closure_7(quest(5123).PressableOpacity, obj);
};
export const QuestBottomSheetProgressCardInGameTask = function QuestBottomSheetProgressCardInGameTask(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  let obj = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj.useThirdPartyTaskDetails(quest);
  obj = { style: tmp.card, border: "subtle", children: null };
  obj = { style: tmp.content, children: null };
  const obj1 = { quest, size: "lg", progress: null, hasConfetti: true };
  let num;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  obj1.progress = num;
  obj.children = React5(QuestProgressIndicatorDefault, obj1);
  obj.children = React5(React4, obj);
  return React5(Card.Card, obj);
};