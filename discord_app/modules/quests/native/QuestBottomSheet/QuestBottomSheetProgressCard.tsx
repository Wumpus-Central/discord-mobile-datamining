// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04940_LinearGradient.js";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import PressableCard from "../../../../design/components/Card/native/Card.native.tsx";
import useQuests from "../../hooks/QuestHooks.tsx";
import openQuestAccessSuspendedBottomSheetDefault from "../openQuestAccessSuspendedBottomSheet.tsx";
import COMPLETION_GLOW_SHADOW_RADIUSDefault from "../QuestProgressIndicator.tsx";
import _modDef14762 from "../QuestDock/QuestDockBlurredContentBackground.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { card: { padding: 0 }, cardWatchTask: { justifyContent: "flex-end", height: 210 }, content: null, contentWatchTask: null, footer: null, instructionsText: null, videoPreviewWrapper: null, videoPreview: null, playVideoIconWrapper: null };
createCacheKey = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { alignItems: "flex-end" };
createCacheKey[4] = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
let obj1 = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[5] = { marginTop: ThemesDefault.space.PX_12, textAlign: "center" };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS;
obj3.overflow = "hidden";
createCacheKey[6] = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[7] = {};
let obj2 = { marginTop: ThemesDefault.space.PX_12, textAlign: "center" };
let obj4 = {};
let items = [{ translateX: -30 }, { translateY: -30 }];
createCacheKey[8] = { alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60, transform: items };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj5 = { alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60, transform: items };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = function QuestBottomSheetProgressCardPlayStreamTask(quest) {
  quest = quest.quest;
  let questTaskDetails;
  let isQuestProgressing;
  dependencyMap = undefined;
  let React;
  c4 = undefined;
  let questFormattedDate;
  let gameTitle;
  let defaultRewardName;
  c8 = undefined;
  const tmp = callback();
  let obj = questTaskDetails(11083);
  questTaskDetails = obj.useQuestTaskDetails(quest);
  obj1 = questTaskDetails(11083);
  isQuestProgressing = obj1.useIsQuestProgressing(quest);
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
  React = tmp9;
  let tmp2Result = tmp2(11096);
  const result = tmp2Result.supportedTaskPlatforms(quest);
  c4 = result;
  tmp2Result = tmp2(11083);
  questFormattedDate = tmp2Result.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  const items = [gameTitle];
  const stateFromStores = questTaskDetails(589).useStateFromStores(items, () => gameTitle.getCurrentUser());
  const tmp2Result1 = questTaskDetails(589);
  defaultRewardName = questTaskDetails(10927).getDefaultRewardName(quest.config, stateFromStores);
  const tmp2Result2 = questTaskDetails(10927);
  const isSponsoredPlayQuestResult = questTaskDetails(7467).isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp7, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = React.useMemo(() => {
    if (dependencyMap) {
      if (!closure_3) {
        const intl = questTaskDetails(1236).intl;
        let obj = { rewardHook: null, date: null };
        obj[0] = function rewardHook() {
          return closure_1_7(closure_1_0(closure_1_2[12]).Text, { variant: "text-sm/semibold", color: "text-strong", children: closure_7 });
        };
        obj[1] = questFormattedDate;
        return intl.format(questTaskDetails(1236).t.e3OlfB, obj);
      }
    }
    if (isQuestProgressing) {
      const _Math = Math;
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      const intl7 = questTaskDetails(1236).intl;
      obj = { minutesLeft: null, minutesHook: null };
      obj[0] = rounded;
      obj[1] = function minutesHook(children) {
        return callback2(callback(table[12]).Text, { variant: "text-sm/semibold", color: "text-strong", children });
      };
      return intl7.format(questTaskDetails(1236).t.aFaRso, obj);
    } else {
      if (c8) {
        const intl6 = questTaskDetails(1236).intl;
        let stringResult = intl6.string(questTaskDetails(1236).t["04ateG"]);
      } else if (_undefined.length > 1) {
        const intl5 = questTaskDetails(1236).intl;
        obj = { gameName: null };
        obj[0] = gameTitle;
        stringResult = intl5.formatToPlainString(questTaskDetails(1236).t.E2R8VX, obj);
      } else if (questTaskDetails.taskType === questTaskDetails(5394).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = questTaskDetails(1236).intl;
        obj1 = { gameName: null };
        obj1[0] = gameTitle;
        stringResult = intl4.formatToPlainString(questTaskDetails(1236).t.boMftC, obj1);
      } else if (tmp41.taskType === questTaskDetails(5394).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = questTaskDetails(1236).intl;
        const obj2 = { gameName: null };
        obj2[0] = gameTitle;
        stringResult = intl3.formatToPlainString(questTaskDetails(1236).t["9Peldf"], obj2);
      } else {
        const CONSOLE = questTaskDetails(5394).FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(tmp41.taskType)) {
          const intl2 = questTaskDetails(1236).intl;
          const obj3 = { gameTitle: null };
          obj3[0] = gameTitle;
          stringResult = intl2.formatToPlainString(questTaskDetails(1236).t["+8JB6Y"], obj3);
        }
      }
      return stringResult;
    }
  }, items1);
  obj = { style: tmp.card, border: "subtle", children: null };
  obj = { style: tmp.content, children: null };
  obj1 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: null, hasConfetti: true };
  const tmp2Result3 = questTaskDetails(7467);
  if (!tmp7) {
    tmp7 = isQuestProgressing;
  }
  obj1[3] = !tmp7;
  const items2 = [defaultRewardName(isQuestProgressing(14732), obj1), ];
  let tmp18Result = null != memo;
  if (tmp18Result) {
    let obj2 = { style: null, variant: "text-sm/semibold", color: "text-subtle", children: null };
    obj2[0] = tmp.instructionsText;
    obj2[3] = memo;
    tmp18Result = tmp18(tmp2(4474).Text, obj2);
  }
  items2[1] = tmp18Result;
  obj[1] = items2;
  const items3 = [c8(c4, obj), ];
  if (isQuestProgressing) {
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.footer;
    const obj4 = { color: "text-feedback-positive", variant: "text-sm/semibold", children: null };
    let intl = tmp2(1236).intl;
    const obj5 = { gameName: null };
    obj5[0] = quest.config.messages.gameTitle;
    obj4[2] = intl.format(tmp2(1236).t.lIFg6I, obj5);
    obj3[1] = tmp18(tmp2(4474).Text, obj4);
    isQuestProgressing = tmp18(tmp17, obj3);
  }
  items3[1] = isQuestProgressing;
  obj[2] = items3;
  return c8(questTaskDetails(5601).Card, obj);
};
export const QuestBottomSheetProgressCardWatchTask = function QuestBottomSheetProgressCardWatchTask(quest) {
  quest = quest.quest;
  const tmp = callback();
  let obj = quest(11083);
  const items = [quest];
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const memo = React.useMemo(() => quest(closure_1_2[16]).getQuestAsset(quest, quest(closure_1_2[16]).QuestAssetType.QUEST_BAR_HERO_VIDEO), items);
  const items1 = [quest];
  const memo1 = React.useMemo(() => quest(closure_1_2[16]).getQuestAsset(quest, quest(closure_1_2[16]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items1);
  const items2 = [quest];
  const memo2 = React.useMemo(() => quest(closure_1_2[16]).getQuestAsset(quest, quest(closure_1_2[16]).QuestAssetType.QUEST_BAR_HERO_IMAGE), items2);
  obj1 = quest(14724);
  obj = { questId: quest.id, sourceQuestContent: quest.sourceQuestContent };
  let isHeroVideoSupportedResult = null != memo;
  if (isHeroVideoSupportedResult) {
    let tmp2Result = tmp2(11334);
    isHeroVideoSupportedResult = tmp2Result.isHeroVideoSupported(memo);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
  } else {
  }
  tmp2Result = tmp2(11083);
  let tmp11 = obj1.useWatchTaskPressHandler(obj);
  if (tmp2Result.useIsQuestAccessSuspended()) {
    tmp11 = openQuestAccessSuspendedBottomSheetDefault;
  }
  obj = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp2(1236).intl;
  obj[2] = intl.string(_74KqrR);
  obj1 = { style: items3, border: "subtle", children: null };
  items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  let tmp14Result = isHeroVideoSupportedResult;
  if (isHeroVideoSupportedResult) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.videoPreviewWrapper;
    const obj3 = { style: null, poster: null, posterResizeMode: "cover", source: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj3[0] = tmp.videoPreview;
    let url;
    if (memo1 != null) {
      url = memo1.url;
    }
    obj3[1] = url;
    const obj4 = { uri: null };
    obj4[0] = memo.url;
    obj3[3] = obj4;
    const items4 = [tmp13(tmp2(8602).VideoComponent, obj3), ];
    const obj5 = { start: null, end: null, style: null, colors: null };
    obj5[0] = { x: 0.5, y: 0.5 };
    obj5[1] = { x: 1, y: 1 };
    obj5[2] = StyleSheet.absoluteFill;
    obj5[3] = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
    items4[1] = tmp13(LinearGradientDefault, obj5);
    obj2[1] = items4;
    tmp14Result = tmp14(closure_4, obj2);
    const tmp16 = closure_4;
  }
  const items5 = [tmp14Result, , , ];
  tmp14Result = !isHeroVideoSupportedResult;
  if (!isHeroVideoSupportedResult) {
    tmp14Result = null != memo2;
  }
  if (tmp14Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.videoPreviewWrapper;
    const obj7 = { style: null, source: null, resizeMode: "cover" };
    obj7[0] = tmp.videoPreview;
    const obj8 = { uri: null };
    obj8[0] = memo2.url;
    obj7[1] = obj8;
    const items6 = [tmp13(preloadDefault, obj7), ];
    const obj9 = { start: null, end: null, style: null, colors: null };
    obj9[0] = { x: 0.5, y: 0.5 };
    obj9[1] = { x: 1, y: 1 };
    obj9[2] = StyleSheet.absoluteFill;
    obj9[3] = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
    items6[1] = tmp13(LinearGradientDefault, obj9);
    obj6[1] = items6;
    tmp14Result = tmp14(closure_4, obj6);
  }
  items5[1] = tmp14Result;
  const obj10 = { style: tmp.playVideoIconWrapper, children: null };
  const items7 = [closure_7(_modDef14762, { blurTheme: "light" }), ];
  const watchTaskPressHandler = obj1.useWatchTaskPressHandler(obj);
  items7[1] = closure_7(quest(8578).PlayIcon, { color: ThemesDefault.colors.WHITE });
  obj10[1] = items7;
  items5[2] = closure_8(closure_4, obj10);
  const obj11 = { color: ThemesDefault.colors.WHITE };
  const items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  items5[3] = closure_7(closure_4, { style: items8, children: closure_7(COMPLETION_GLOW_SHADOW_RADIUSDefault, obj13) });
  obj1[2] = items5;
  obj[3] = closure_8(quest(5601).Card, obj1);
  return closure_7(quest(5068).PressableOpacity, obj);
};
export const QuestBottomSheetProgressCardInGameTask = function QuestBottomSheetProgressCardInGameTask(quest) {
  quest = quest.quest;
  const tmp = callback();
  let obj = useQuests;
  const thirdPartyTaskDetails = obj.useThirdPartyTaskDetails(quest);
  obj = { style: tmp.card, border: "subtle", children: null };
  obj = { style: tmp.content, children: null };
  obj1 = { quest, size: "lg", progress: null, hasConfetti: true };
  let num;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  obj1[2] = num;
  obj[1] = closure_7(COMPLETION_GLOW_SHADOW_RADIUSDefault, obj1);
  obj[2] = closure_7(closure_4, obj);
  return closure_7(PressableCard.Card, obj);
};