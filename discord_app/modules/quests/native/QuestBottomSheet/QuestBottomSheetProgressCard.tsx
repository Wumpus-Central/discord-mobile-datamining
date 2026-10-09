// === Module 15352: QuestBottomSheetProgressCard ===

// Module 15352 (QuestBottomSheetProgressCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5987 */;
import FastImageDefault from "FastImage" /* 6163 */;
import Card from "Card" /* 6188 */;
import Pressables from "Pressables" /* 6191 */;
import PlayIcon from "PlayIcon" /* 8384 */;
import common_Video from "common/Video" /* 8409 */;
import QuestUtils from "QuestUtils" /* 9146 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9149 */;
import AssetUtils from "AssetUtils" /* 9157 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15311 */;
import QuestBottomSheetHooks from "QuestBottomSheetHooks" /* 15317 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15325 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 15353 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
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
fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
let obj7 = {};
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestBottomSheetProgressCardPlayStreamTask(quest) {
  const cResult = require("c").c(41);
  quest = quest.quest;
  closure_9();
  const obj = require("c");
  const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(quest);
  const obj2 = require("hooks/QuestHooks");
  const isQuestProgressing = require("hooks/QuestHooks").useIsQuestProgressing(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  const obj3 = require("hooks/QuestHooks");
  const tmp10 = null != claimedAt;
  const result = require("QuestPlatformUtils").supportedTaskPlatforms(quest);
  const tmpResult = require("QuestPlatformUtils");
  const questFormattedDate = require("hooks/QuestHooks").useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp15 = items;
    tmp16 = fn;
  } else {
    [tmp15, tmp16] = cResult;
  }
  const tmpResult5 = require("hooks/QuestHooks");
  const stateFromStores = require("initialize").useStateFromStores(tmp15, tmp16);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === quest.config) {
      let tmp19 = cResult[4];
    }
    _require = tmp19;
    tmp(7404).isSponsoredPlayQuest(quest);
    if (tmp8) {
      if (!tmp10) {
        if (cResult[8] !== tmp19) {
          class E {
            constructor() {
              obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
              return jsx(closure_0(closure_2[13]).Text, obj);
            }
          }
          cResult[8] = tmp19;
          cResult[9] = E;
        } else {
          class E {
            constructor() {
              obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
              return jsx(closure_0(closure_2[13]).Text, obj);
            }
          }
        }
        const intl = tmp(1126).intl;
        const obj4 = { rewardHook: E, date: questFormattedDate };
        const formatResult = intl.format(tmp(1126).t.e3OlfB, obj4);
        cResult[5] = questFormattedDate;
        cResult[6] = tmp19;
        cResult[7] = formatResult;
      }
      if (cResult[22] === tmp12) {
        class E {
          constructor() {
            obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
            return jsx(closure_0(closure_2[13]).Text, obj);
          }
        }
      }
      const obj5 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: tmp12, hasConfetti: true };
      const tmp34 = closure_7(QuestProgressIndicatorDefault, obj5);
      cResult[22] = tmp12;
      cResult[23] = quest;
      cResult[24] = questTaskDetails.percentComplete;
      cResult[25] = tmp34;
    }
    if (isQuestProgressing) {
      class E {
        constructor() {
          obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
          return jsx(closure_0(closure_2[13]).Text, obj);
        }
      }
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      if (cResult[10] === rounded) {
        class E {
          constructor() {
            obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
            return jsx(closure_0(closure_2[13]).Text, obj);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
            return jsx(closure_0(closure_2[13]).Text, obj);
          }
        }
        cResult[12] = tmp28;
      } else {
        class E {
          constructor() {
            obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
            return jsx(closure_0(closure_2[13]).Text, obj);
          }
        }
      }
      const intl2 = tmp(1126).intl;
      const obj6 = { minutesLeft: rounded, minutesHook: tmp28 };
      const formatResult1 = intl2.format(tmp(1126).t.aFaRso, obj6);
      cResult[10] = rounded;
      cResult[11] = formatResult1;
    } else {
      class E {
        constructor() {
          obj = { variant: "text-sm/semibold", color: "text-strong", children: closure_0 };
          return jsx(closure_0(closure_2[13]).Text, obj);
        }
      }
    }
    const tmpResult7 = tmp(7404);
  }
  const tmpResult6 = require("initialize");
  const defaultRewardName = require("QuestRewardUtils").getDefaultRewardName(quest.config, stateFromStores);
  cResult[2] = stateFromStores;
  cResult[3] = quest.config;
  cResult[4] = defaultRewardName;
  tmp19 = defaultRewardName;
  const tmpResult8 = require("QuestRewardUtils");
}) : (function QuestBottomSheetProgressCardPlayStreamTask(quest) {
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
  questTaskDetails = questTaskDetails(9149).useQuestTaskDetails(quest);
  let obj = questTaskDetails(9149);
  let isQuestProgressing = questTaskDetails(9149).useIsQuestProgressing(quest);
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
  let obj2 = questTaskDetails(9149);
  const result = questTaskDetails(9176).supportedTaskPlatforms(quest);
  c4 = result;
  const tmp2Result = questTaskDetails(9176);
  questFormattedDate = questTaskDetails(9149).useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  const tmp2Result5 = questTaskDetails(9149);
  const items = [gameTitle];
  const stateFromStores = questTaskDetails(504).useStateFromStores(items, () => gameTitle.getCurrentUser());
  const tmp2Result6 = questTaskDetails(504);
  defaultRewardName = questTaskDetails(9162).getDefaultRewardName(quest.config, stateFromStores);
  const tmp2Result7 = questTaskDetails(9162);
  const isSponsoredPlayQuestResult = questTaskDetails(7404).isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp7, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = noop.useMemo(() => {
    if (dependencyMap) {
      if (!closure_3) {
        const intl = util.intl;
        const obj = {
          rewardHook() {
                return defaultRewardName(questTaskDetails(5087).Text, { variant: "text-sm/semibold", color: "text-strong", children });
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
            return children(questTaskDetails(5087).Text, { variant: "text-sm/semibold", color: "text-strong", children });
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
  const tmp2Result8 = questTaskDetails(7404);
  if (!tmp7) {
    tmp7 = isQuestProgressing;
  }
  obj5.loading = !tmp7;
  const items2 = [defaultRewardName(isQuestProgressing(15325), obj5), ];
  let tmp18Result = null != memo;
  if (tmp18Result) {
    let obj6 = { style: tmp.instructionsText, variant: "text-sm/semibold", color: "text-subtle", children: memo };
    tmp18Result = tmp18(tmp2(5087).Text, obj6);
  }
  items2[1] = tmp18Result;
  obj4.children = items2;
  const items3 = [c8(c4, obj4), ];
  if (isQuestProgressing) {
    const obj7 = { style: tmp.footer, children: null };
    const obj8 = { color: "text-feedback-positive", variant: "text-sm/semibold", children: null };
    let intl = tmp2(1126).intl;
    const obj9 = { gameName: quest.config.messages.gameTitle };
    obj8.children = intl.format(tmp2(1126).t.lIFg6I, obj9);
    obj7.children = tmp18(tmp2(5087).Text, obj8);
    isQuestProgressing = tmp18(tmp17, obj7);
  }
  items3[1] = isQuestProgressing;
  obj3.children = items3;
  return c8(questTaskDetails(6188).Card, obj3);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestBottomSheetProgressCardWatchTask(arg0) {
  const cResult = c.c(50);
  ({ quest, sourceQuestContent } = arg0);
  const tmp4 = closure_9();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  if (cResult[0] !== quest) {
    const questAsset = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO);
    cResult[0] = quest;
    cResult[1] = questAsset;
    let tmp6 = questAsset;
    const tmpResult = AssetUtils;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== quest) {
    const tmpResult6 = AssetUtils;
    const questAsset1 = tmpResult6.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
    cResult[2] = quest;
    cResult[3] = questAsset1;
    let tmp8 = questAsset1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== quest) {
    const questAsset2 = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE);
    cResult[4] = quest;
    cResult[5] = questAsset2;
    let tmp12 = questAsset2;
    const tmpResult7 = AssetUtils;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === quest.id) {
    if (cResult[7] === sourceQuestContent) {
      let tmp14 = cResult[8];
    }
    const tmpResult8 = QuestBottomSheetHooks;
    if (cResult[9] !== tmp6) {
      let isHeroVideoSupportedResult = null != tmp6;
      if (isHeroVideoSupportedResult) {
        isHeroVideoSupportedResult = QuestUtils.isHeroVideoSupported(tmp6.mimetype);
        const tmpResult9 = QuestUtils;
      }
      cResult[9] = tmp6;
      cResult[10] = isHeroVideoSupportedResult;
      let tmp16 = isHeroVideoSupportedResult;
    } else {
      tmp16 = cResult[10];
    }
    let tmp19 = !tmp16;
    if (!tmp16) {
      tmp19 = null != tmp12;
    }
    const userStatus = quest.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    if (null != completedAt) {
      let YsCuyF = util.t.YsCuyF;
    } else {
      YsCuyF = util.t["74KqrR"];
    }
    const watchTaskPressHandler = QuestBottomSheetHooks.useWatchTaskPressHandler(tmp14);
    let tmp24 = watchTaskPressHandler;
    if (tmpResult10.useIsQuestAccessSuspended()) {
      tmp24 = openQuestAccessSuspendedBottomSheetDefault;
    }
    if (cResult[11] !== YsCuyF) {
      const intl = util.intl;
      const stringResult = intl.string(YsCuyF);
      cResult[11] = YsCuyF;
      cResult[12] = stringResult;
      let tmp26 = stringResult;
    } else {
      tmp26 = cResult[12];
    }
    if (cResult[13] === tmp4.card) {
      if (cResult[14] === tmp4.cardWatchTask) {
        let tmp28 = cResult[15];
      }
      if (cResult[16] === tmp16) {
        if (cResult[17] === tmp4.videoPreview) {
          if (cResult[18] === tmp4.videoPreviewWrapper) {
            if (cResult[19] === tmp6) {
              let url;
              if (tmp8 != null) {
                url = tmp8.url;
              }
              if (cResult[20] === url) {
                let tmp30 = cResult[21];
              }
              if (cResult[22] === tmp19) {
                if (cResult[23] === tmp12) {
                  if (cResult[24] === tmp4.videoPreview) {
                    if (cResult[25] === tmp4.videoPreviewWrapper) {
                      let tmp39 = cResult[26];
                    }
                    const _Symbol = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp51 = React5(QuestDockBlurredContentBackgroundDefault, { blurTheme: "light" });
                      const obj3 = { color: nativeDefault.colors.WHITE };
                      const tmp52 = React5(PlayIcon.PlayIcon, obj3);
                      cResult[27] = tmp51;
                      cResult[28] = tmp52;
                      let tmp48 = tmp52;
                      let tmp47 = tmp51;
                    } else {
                      tmp47 = cResult[27];
                      tmp48 = cResult[28];
                    }
                    if (cResult[29] !== tmp4.playVideoIconWrapper) {
                      const obj4 = { style: tmp4.playVideoIconWrapper, children: null };
                      const items = [tmp47, tmp48];
                      obj4.children = items;
                      const tmp56 = closure_1_8(React4, obj4);
                      cResult[29] = tmp4.playVideoIconWrapper;
                      cResult[30] = tmp56;
                      let tmp53 = tmp56;
                    } else {
                      tmp53 = cResult[30];
                    }
                    if (cResult[31] === tmp4.content) {
                      if (cResult[32] === tmp4.contentWatchTask) {
                        let tmp57 = cResult[33];
                      }
                      if (cResult[34] === quest) {
                        if (cResult[35] === questTaskDetails.percentComplete) {
                          let tmp58 = cResult[36];
                        }
                        if (cResult[37] === tmp57) {
                          if (cResult[38] === tmp58) {
                            let tmp62 = cResult[39];
                          }
                          if (cResult[40] === tmp53) {
                            if (cResult[41] === tmp62) {
                              if (cResult[42] === tmp28) {
                                if (cResult[43] === tmp30) {
                                  if (cResult[44] === tmp39) {
                                    let tmp66 = cResult[45];
                                  }
                                  if (cResult[46] === tmp24) {
                                    if (cResult[47] === tmp66) {
                                      if (cResult[48] === tmp26) {
                                        let tmp69 = cResult[49];
                                      }
                                      return tmp69;
                                    }
                                  }
                                  const obj5 = { onPress: tmp24, accessibilityRole: "button", accessibilityLabel: tmp26, children: tmp66 };
                                  const tmp71 = React5(Pressables.PressableOpacity, obj5);
                                  cResult[46] = tmp24;
                                  cResult[47] = tmp66;
                                  cResult[48] = tmp26;
                                  cResult[49] = tmp71;
                                  tmp69 = tmp71;
                                }
                              }
                            }
                          }
                          const obj6 = { style: tmp28, border: "subtle", children: null };
                          const items1 = [tmp30, tmp39, tmp53, tmp62];
                          obj6.children = items1;
                          const tmp68 = closure_1_8(Card.Card, obj6);
                          cResult[40] = tmp53;
                          cResult[41] = tmp62;
                          cResult[42] = tmp28;
                          cResult[43] = tmp30;
                          cResult[44] = tmp39;
                          cResult[45] = tmp68;
                          tmp66 = tmp68;
                        }
                        const obj7 = { style: tmp57, children: tmp58 };
                        const tmp65 = React5(React4, obj7);
                        cResult[37] = tmp57;
                        cResult[38] = tmp58;
                        cResult[39] = tmp65;
                        tmp62 = tmp65;
                      }
                      const obj8 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true };
                      const tmp61 = React5(QuestProgressIndicatorDefault, obj8);
                      cResult[34] = quest;
                      cResult[35] = questTaskDetails.percentComplete;
                      cResult[36] = tmp61;
                      tmp58 = tmp61;
                    }
                    const items2 = [, ];
                    ({ content: arr5[0], contentWatchTask: arr5[1] } = tmp4);
                    cResult[31] = tmp4.content;
                    cResult[32] = tmp4.contentWatchTask;
                    cResult[33] = items2;
                    tmp57 = items2;
                  }
                }
              }
              let tmp40 = tmp19;
              if (tmp19) {
                const obj9 = { style: tmp4.videoPreviewWrapper, children: null };
                const obj10 = { style: tmp4.videoPreview, source: null, resizeMode: "cover" };
                const obj11 = { uri: tmp12.url };
                obj10.source = obj11;
                const items3 = [React5(FastImageDefault, obj10), ];
                const obj12 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
                items3[1] = React5(LinearGradientDefault, obj12);
                obj9.children = items3;
                tmp40 = closure_1_8(React4, obj9);
              }
              cResult[22] = tmp19;
              cResult[23] = tmp12;
              cResult[24] = tmp4.videoPreview;
              cResult[25] = tmp4.videoPreviewWrapper;
              cResult[26] = tmp40;
              tmp39 = tmp40;
            }
          }
        }
      }
      let tmp32Result = tmp16;
      if (tmp16) {
        const obj13 = { style: tmp4.videoPreviewWrapper, children: null };
        const obj14 = { style: tmp4.videoPreview, poster: null, posterResizeMode: "cover", source: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
        let url1;
        if (tmp8 != null) {
          url1 = tmp8.url;
        }
        obj14.poster = url1;
        const obj15 = { uri: tmp6.url };
        obj14.source = obj15;
        const items4 = [React5(common_Video.VideoComponent, obj14), ];
        const obj16 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
        items4[1] = React5(LinearGradientDefault, obj16);
        obj13.children = items4;
        tmp32Result = closure_1_8(React4, obj13);
      }
      cResult[16] = tmp16;
      cResult[17] = tmp4.videoPreview;
      cResult[18] = tmp4.videoPreviewWrapper;
      cResult[19] = tmp6;
      let url2;
      if (tmp8 != null) {
        url2 = tmp8.url;
      }
      cResult[20] = url2;
      cResult[21] = tmp32Result;
      tmp30 = tmp32Result;
    }
    const items5 = [, ];
    ({ card: arr[0], cardWatchTask: arr[1] } = tmp4);
    cResult[13] = tmp4.card;
    cResult[14] = tmp4.cardWatchTask;
    cResult[15] = items5;
    tmp28 = items5;
    tmpResult10 = hooks_QuestHooks;
  }
  const obj17 = { questId: quest.id, sourceQuestContent };
  cResult[6] = quest.id;
  cResult[7] = sourceQuestContent;
  cResult[8] = obj17;
  tmp14 = obj17;
}) : (function QuestBottomSheetProgressCardWatchTask(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest];
  const questTaskDetails = quest(9149).useQuestTaskDetails(quest);
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO), items);
  const items1 = [quest];
  const memo1 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items1);
  const items2 = [quest];
  const memo2 = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE), items2);
  const obj = quest(9149);
  let isHeroVideoSupportedResult = null != memo;
  const obj2 = quest(15317);
  const obj3 = { questId: quest.id, sourceQuestContent: quest.sourceQuestContent };
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = tmp2(9146).isHeroVideoSupported(memo.mimetype);
    const tmp2Result = tmp2(9146);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    let YsCuyF = tmp2(1126).t.YsCuyF;
  } else {
    YsCuyF = tmp2(1126).t["74KqrR"];
  }
  const watchTaskPressHandler = quest(15317).useWatchTaskPressHandler({ questId: quest.id, sourceQuestContent: quest.sourceQuestContent });
  let tmp12 = watchTaskPressHandler;
  if (tmp2Result2.useIsQuestAccessSuspended()) {
    tmp12 = openQuestAccessSuspendedBottomSheetDefault;
  }
  const obj4 = { onPress: tmp12, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp2(1126).intl;
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
    const items4 = [closure_7(tmp2(8409).VideoComponent, obj7), ];
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
  tmp2Result2 = quest(9149);
  items7[1] = closure_7(quest(8384).PlayIcon, { color: nativeDefault.colors.WHITE });
  obj14.children = items7;
  items5[2] = closure_8(closure_4, obj14);
  const obj16 = { style: null, children: closure_7(QuestProgressIndicatorDefault, { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true }) };
  const items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  obj16.style = items8;
  items5[3] = closure_7(closure_4, obj16);
  obj5.children = items5;
  obj4.children = closure_8(quest(6188).Card, obj5);
  return closure_7(quest(6191).PressableOpacity, obj4);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = tmp6;
export const QuestBottomSheetProgressCardWatchTask = tmp7;
export const QuestBottomSheetProgressCardInGameTask = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestBottomSheetProgressCardInGameTask(quest) {
  const cResult = c.c(9);
  quest = quest.quest;
  const tmp4 = closure_9();
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  let num;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  if (cResult[0] === quest) {
    if (cResult[1] === num) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.content) {
      if (cResult[4] === tmp6) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.card) {
        if (cResult[7] === tmp8) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj3 = { style: tmp4.card, border: "subtle", children: tmp8 };
      const tmp14 = React5(Card.Card, obj3);
      cResult[6] = tmp4.card;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: tmp4.content, children: tmp6 };
    const tmp11 = React5(React4, obj4);
    cResult[3] = tmp4.content;
    cResult[4] = tmp6;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = React5(QuestProgressIndicatorDefault, { quest, size: "lg", progress: num, hasConfetti: true });
  cResult[0] = quest;
  cResult[1] = num;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function QuestBottomSheetProgressCardInGameTask(quest) {
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
});