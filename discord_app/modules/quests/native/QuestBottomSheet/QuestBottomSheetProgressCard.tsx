// === Module 14977: QuestBottomSheetProgressCard ===

// Module 14977 (QuestBottomSheetProgressCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5638 */;
import Pressables from "Pressables" /* 5916 */;
import FastImageDefault from "FastImage" /* 5981 */;
import Card_Card from "Card/Card" /* 6002 */;
import PlayIcon2 from "PlayIcon" /* 7959 */;
import common_Video from "common/Video" /* 7993 */;
import AssetUtils from "AssetUtils" /* 10013 */;
import QuestUtils from "QuestUtils" /* 10921 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10924 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 14936 */;
import QuestBottomSheetHooks from "QuestBottomSheetHooks" /* 14942 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 14950 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 14978 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let StyleSheet;
let closure_4;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: { padding: 0 }, cardWatchTask: { justifyContent: "flex-end", height: 210 }, content: obj2, contentWatchTask: { alignItems: "flex-end" }, footer: obj3, instructionsText: obj4, videoPreviewWrapper: obj5, videoPreview: obj6, playVideoIconWrapper: size };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj4 = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
obj5 = { borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60, transform: items };
items = [{ translateX: -30 }, { translateY: -30 }];
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let _require;
  let currentUser;
  let tmp15;
  let tmp16;
  let obj = require("react");
  const cResult = obj.c(41);
  quest = quest.quest;
  closure_9();
  const obj2 = require("hooks/QuestHooks");
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const obj3 = require("hooks/QuestHooks");
  const isQuestProgressing = obj3.useIsQuestProgressing(quest);
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
  let tmp11 = tmp8;
  const tmp10 = null != claimedAt;
  if (null == completedAt) {
    tmp11 = isQuestProgressing;
  }
  const tmpResult = require("QuestPlatformUtils");
  const result = tmpResult.supportedTaskPlatforms(quest);
  const tmpResult5 = require("hooks/QuestHooks");
  const questFormattedDate = tmpResult5.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
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
  const tmpResult6 = require("get initialized");
  const stateFromStores = tmpResult6.useStateFromStores(tmp15, tmp16);
  if (cResult[2] === stateFromStores) {
    let tmp19;
    if (cResult[3] === quest.config) {
      tmp19 = cResult[4];
    }
    _require = tmp19;
    const tmpResult7 = require("utils/QuestUtils");
    tmpResult7.isSponsoredPlayQuest(quest);
    if (null != completedAt) {
      if (!tmp10) {
        if (cResult[8] !== tmp19) {
          class E {
            constructor() {
              const obj = { variant: "text-sm/semibold", color: "text-strong", children };
              return metroImportDefault(Text_Text.Text, obj);
            }
          }
          cResult[8] = tmp19;
          cResult[9] = E;
        } else {
          class E {
            constructor() {
              const obj = { variant: "text-sm/semibold", color: "text-strong", children };
              return metroImportDefault(Text_Text.Text, obj);
            }
          }
        }
        const intl = tmp(1126).intl;
        const obj4 = { rewardHook: E, date: questFormattedDate };
        cResult[5] = questFormattedDate;
        cResult[6] = tmp19;
        cResult[7] = intl.format(require("intl").t.e3OlfB, obj4);
        const formatResult = intl.format(require("intl").t.e3OlfB, obj4);
      }
      if (cResult[22] === !tmp11) {
        class E {
          constructor() {
            const obj = { variant: "text-sm/semibold", color: "text-strong", children };
            return metroImportDefault(Text_Text.Text, obj);
          }
        }
      }
      const obj5 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: !tmp11, hasConfetti: true };
      cResult[22] = !tmp11;
      cResult[23] = quest;
      cResult[24] = questTaskDetails.percentComplete;
      cResult[25] = closure_7(QuestProgressIndicatorDefault, obj5);
      const tmp32 = closure_7(QuestProgressIndicatorDefault, obj5);
    }
    if (isQuestProgressing) {
      class E {
        constructor() {
          const obj = { variant: "text-sm/semibold", color: "text-strong", children };
          return metroImportDefault(Text_Text.Text, obj);
        }
      }
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      if (cResult[10] !== rounded) {
        class E {
          constructor() {
            const obj = { variant: "text-sm/semibold", color: "text-strong", children };
            return metroImportDefault(Text_Text.Text, obj);
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor(children) {
              const obj = { variant: "text-sm/semibold", color: "text-strong", children };
              return closure_1_7(children(dependencyMap[13]).Text, obj);
            }
          }
          cResult[12] = O;
        } else {
          class O {
            constructor(children) {
              const obj = { variant: "text-sm/semibold", color: "text-strong", children };
              return closure_1_7(children(dependencyMap[13]).Text, obj);
            }
          }
        }
        const intl2 = tmp(1126).intl;
        const obj6 = { minutesLeft: rounded, minutesHook: O };
        const formatResult1 = intl2.format(require("intl").t.aFaRso, obj6);
        cResult[10] = rounded;
        cResult[11] = formatResult1;
      } else {
        class O {
          constructor(children) {
            const obj = { variant: "text-sm/semibold", color: "text-strong", children };
            return closure_1_7(children(dependencyMap[13]).Text, obj);
          }
        }
      }
    } else {
      class O {
        constructor(children) {
          const obj = { variant: "text-sm/semibold", color: "text-strong", children };
          return closure_1_7(children(dependencyMap[13]).Text, obj);
        }
      }
    }
  }
  const tmpResult8 = require("QuestRewardUtils");
  const defaultRewardName = tmpResult8.getDefaultRewardName(quest.config, stateFromStores);
  cResult[2] = stateFromStores;
  cResult[3] = quest.config;
  cResult[4] = defaultRewardName;
  tmp19 = defaultRewardName;
}) : ((quest) => {
  let Text;
  let closure_2;
  let closure_3;
  let intl;
  let items2;
  let items3;
  let length;
  let obj8;
  let obj9;
  quest = quest.quest;
  let questTaskDetails;
  dependencyMap = undefined;
  react = undefined;
  let c4;
  let questFormattedDate;
  let gameTitle;
  let defaultRewardName;
  let c8;
  const tmp = closure_9();
  let obj = questTaskDetails(10924);
  questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj2 = questTaskDetails(10924);
  let isQuestProgressing = obj2.useIsQuestProgressing(quest);
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
  react = tmp9;
  const tmp2Result = questTaskDetails(10931);
  const result = tmp2Result.supportedTaskPlatforms(quest);
  c4 = result;
  const tmp2Result5 = questTaskDetails(10924);
  questFormattedDate = tmp2Result5.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  const items = [gameTitle];
  const tmp2Result6 = questTaskDetails(504);
  const stateFromStores = tmp2Result6.useStateFromStores(items, () => gameTitle.getCurrentUser());
  const tmp2Result7 = questTaskDetails(10018);
  defaultRewardName = tmp2Result7.getDefaultRewardName(quest.config, stateFromStores);
  const tmp2Result8 = questTaskDetails(7219);
  const isSponsoredPlayQuestResult = tmp2Result8.isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp7, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = react.useMemo(() => {
    if (closure_2) {
      if (!closure_3) {
        const intl = intl8.intl;
        let obj = {
          rewardHook() {
                const obj = { variant: "text-sm/semibold", color: "text-strong", children };
                return defaultRewardName(questTaskDetails(closure_2[13]).Text, obj);
              },
          date: questFormattedDate
        };
        return intl.format(intl8.t.e3OlfB, obj);
      }
    }
    if (isQuestProgressing) {
      const _Math = Math;
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      const intl7 = intl8.intl;
      const obj2 = {
        minutesLeft: rounded,
        minutesHook(children) {
            const obj = { variant: "text-sm/semibold", color: "text-strong", children };
            return children(questTaskDetails(closure_1_2[13]).Text, obj);
          }
      };
      return intl7.format(intl8.t.aFaRso, obj2);
    } else {
      let stringResult;
      if (c8) {
        const intl6 = intl8.intl;
        stringResult = intl6.string(intl8.t["04ateG"]);
      } else if (length.length > 1) {
        const intl5 = intl8.intl;
        const obj3 = { gameName: gameTitle };
        stringResult = intl5.formatToPlainString(intl8.t.E2R8VX, obj3);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = intl8.intl;
        const obj4 = { gameName: gameTitle };
        stringResult = intl4.formatToPlainString(intl8.t.boMftC, obj4);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = intl8.intl;
        const obj5 = { gameName: gameTitle };
        stringResult = intl3.formatToPlainString(intl8.t["9Peldf"], obj5);
      } else {
        const CONSOLE = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(questTaskDetails.taskType)) {
          const intl2 = intl8.intl;
          const obj6 = { gameTitle };
          stringResult = intl2.formatToPlainString(intl8.t["+8JB6Y"], obj6);
        }
      }
      return stringResult;
    }
  }, items1);
  let obj3 = { style: tmp.card, border: "subtle", children: items3 };
  let obj4 = { style: tmp.content, children: items2 };
  const Card = tmp2(6002).Card;
  let obj5 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: !tmp7, hasConfetti: true };
  const tmp19 = isQuestProgressing(14950);
  if (!tmp7) {
    tmp7 = isQuestProgressing;
  }
  items2 = [defaultRewardName(tmp19, obj5), ];
  let tmp18Result = null != memo;
  if (tmp18Result) {
    let obj6 = { style: tmp.instructionsText, variant: "text-sm/semibold", color: "text-subtle", children: memo };
    tmp18Result = tmp18(tmp2(4892).Text, obj6);
  }
  items2[1] = tmp18Result;
  items3 = [c8(c4, obj4), ];
  if (isQuestProgressing) {
    const obj7 = { style: tmp.footer, children: defaultRewardName(Text, obj8) };
    obj8 = { color: "text-feedback-positive", variant: "text-sm/semibold", children: intl.format(questTaskDetails(1126).t.lIFg6I, obj9) };
    Text = tmp2(4892).Text;
    intl = tmp2(1126).intl;
    obj9 = { gameName: quest.config.messages.gameTitle };
    isQuestProgressing = tmp18(tmp17, obj7);
  }
  items3[1] = isQuestProgressing;
  return c8(Card, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let items3;
  let items4;
  let obj11;
  let obj15;
  let quest;
  let sourceQuestContent;
  let tmp12;
  let tmp6;
  let tmp8;
  let url1;
  const obj = react2;
  const cResult = obj.c(50);
  ({ quest, sourceQuestContent } = arg0);
  const tmp4 = closure_9();
  const obj2 = hooks_QuestHooks;
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  if (cResult[0] !== quest) {
    const tmpResult = AssetUtils;
    const questAsset = tmpResult.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO);
    cResult[0] = quest;
    cResult[1] = questAsset;
    tmp6 = questAsset;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== quest) {
    const tmpResult6 = AssetUtils;
    const questAsset1 = tmpResult6.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
    cResult[2] = quest;
    cResult[3] = questAsset1;
    tmp8 = questAsset1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== quest) {
    const tmpResult7 = AssetUtils;
    const questAsset2 = tmpResult7.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE);
    cResult[4] = quest;
    cResult[5] = questAsset2;
    tmp12 = questAsset2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === quest.id) {
    let tmp14;
    let tmp16;
    let YsCuyF;
    let tmp26;
    if (cResult[7] === sourceQuestContent) {
      tmp14 = cResult[8];
    }
    const tmpResult8 = QuestBottomSheetHooks;
    const watchTaskPressHandler = tmpResult8.useWatchTaskPressHandler(tmp14);
    if (cResult[9] !== tmp6) {
      let isHeroVideoSupportedResult = null != tmp6;
      if (isHeroVideoSupportedResult) {
        const tmpResult9 = QuestUtils;
        isHeroVideoSupportedResult = tmpResult9.isHeroVideoSupported(tmp6.mimetype);
      }
      cResult[9] = tmp6;
      cResult[10] = isHeroVideoSupportedResult;
      tmp16 = isHeroVideoSupportedResult;
    } else {
      tmp16 = cResult[10];
    }
    const userStatus = quest.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    if (null != completedAt) {
      YsCuyF = intl8.t.YsCuyF;
    } else {
      YsCuyF = intl8.t["74KqrR"];
    }
    let tmp24 = watchTaskPressHandler;
    const tmpResult10 = hooks_QuestHooks;
    if (tmpResult10.useIsQuestAccessSuspended()) {
      tmp24 = openQuestAccessSuspendedBottomSheetDefault;
    }
    if (cResult[11] !== YsCuyF) {
      const intl = intl8.intl;
      const stringResult = intl.string(YsCuyF);
      cResult[11] = YsCuyF;
      cResult[12] = stringResult;
      tmp26 = stringResult;
    } else {
      tmp26 = cResult[12];
    }
    if (cResult[13] === tmp4.card) {
      let tmp28;
      if (cResult[14] === tmp4.cardWatchTask) {
        tmp28 = cResult[15];
      }
      if (cResult[16] === tmp16) {
        if (cResult[17] === tmp4.videoPreview) {
          if (cResult[18] === tmp4.videoPreviewWrapper) {
            if (cResult[19] === tmp6) {
              let tmp31;
              let url;
              const tmp29 = cResult[20];
              if (tmp8 != null) {
                url = tmp8.url;
              }
              if (tmp29 === url) {
                tmp31 = cResult[21];
              }
              if (cResult[22] === (!tmp16 && null != tmp12)) {
                if (cResult[23] === tmp12) {
                  if (cResult[24] === tmp4.videoPreview) {
                    let tmp40;
                    let tmp49;
                    let tmp48;
                    let tmp54;
                    if (cResult[25] === tmp4.videoPreviewWrapper) {
                      tmp40 = cResult[26];
                    }
                    const _Symbol = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp52 = metroImportDefault(QuestDockBlurredContentBackgroundDefault, { blurTheme: "light" });
                      const obj3 = { color: nativeDefault.colors.WHITE };
                      const PlayIcon = PlayIcon2.PlayIcon;
                      const tmp53 = metroImportDefault(PlayIcon, obj3);
                      cResult[27] = tmp52;
                      cResult[28] = tmp53;
                      tmp49 = tmp53;
                      tmp48 = tmp52;
                    } else {
                      tmp48 = cResult[27];
                      tmp49 = cResult[28];
                    }
                    if (cResult[29] !== tmp4.playVideoIconWrapper) {
                      const obj4 = { style: tmp4.playVideoIconWrapper, children: items };
                      items = [tmp48, tmp49];
                      const tmp57 = metroImportAll(React3, obj4);
                      cResult[29] = tmp4.playVideoIconWrapper;
                      cResult[30] = tmp57;
                      tmp54 = tmp57;
                    } else {
                      tmp54 = cResult[30];
                    }
                    if (cResult[31] === tmp4.content) {
                      let tmp58;
                      if (cResult[32] === tmp4.contentWatchTask) {
                        tmp58 = cResult[33];
                      }
                      if (cResult[34] === quest) {
                        let tmp59;
                        if (cResult[35] === questTaskDetails.percentComplete) {
                          tmp59 = cResult[36];
                        }
                        if (cResult[37] === tmp58) {
                          let tmp63;
                          if (cResult[38] === tmp59) {
                            tmp63 = cResult[39];
                          }
                          if (cResult[40] === tmp54) {
                            if (cResult[41] === tmp63) {
                              if (cResult[42] === tmp28) {
                                if (cResult[43] === tmp31) {
                                  let tmp67;
                                  if (cResult[44] === tmp40) {
                                    tmp67 = cResult[45];
                                  }
                                  if (cResult[46] === tmp24) {
                                    if (cResult[47] === tmp67) {
                                      let tmp70;
                                      if (cResult[48] === tmp26) {
                                        tmp70 = cResult[49];
                                      }
                                      return tmp70;
                                    }
                                  }
                                  const obj5 = { onPress: tmp24, accessibilityRole: "button", accessibilityLabel: tmp26, children: tmp67 };
                                  const tmp72 = metroImportDefault(Pressables.PressableOpacity, obj5);
                                  cResult[46] = tmp24;
                                  cResult[47] = tmp67;
                                  cResult[48] = tmp26;
                                  cResult[49] = tmp72;
                                  tmp70 = tmp72;
                                }
                              }
                            }
                          }
                          const obj6 = { style: tmp28, border: "subtle", children: items1 };
                          items1 = [tmp31, tmp40, tmp54, tmp63];
                          const tmp69 = metroImportAll(Card_Card.Card, obj6);
                          cResult[40] = tmp54;
                          cResult[41] = tmp63;
                          cResult[42] = tmp28;
                          cResult[43] = tmp31;
                          cResult[44] = tmp40;
                          cResult[45] = tmp69;
                          tmp67 = tmp69;
                        }
                        const obj7 = { style: tmp58, children: tmp59 };
                        const tmp66 = metroImportDefault(React3, obj7);
                        cResult[37] = tmp58;
                        cResult[38] = tmp59;
                        cResult[39] = tmp66;
                        tmp63 = tmp66;
                      }
                      const obj8 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true };
                      const tmp62 = metroImportDefault(QuestProgressIndicatorDefault, obj8);
                      cResult[34] = quest;
                      cResult[35] = questTaskDetails.percentComplete;
                      cResult[36] = tmp62;
                      tmp59 = tmp62;
                    }
                    const items2 = [, ];
                    ({ content: arr5[0], contentWatchTask: arr5[1] } = tmp4);
                    cResult[31] = tmp4.content;
                    cResult[32] = tmp4.contentWatchTask;
                    cResult[33] = items2;
                    tmp58 = items2;
                  }
                }
              }
              let tmp41 = tmp19;
              if (tmp41) {
                const obj10 = { style: tmp4.videoPreview, source: obj11, resizeMode: "cover" };
                obj11 = { uri: tmp12.url };
                const obj9 = { style: tmp4.videoPreviewWrapper, children: items3 };
                items3 = [metroImportDefault(FastImageDefault, obj10), ];
                const obj12 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
                items3[1] = metroImportDefault(LinearGradientDefault, obj12);
                tmp41 = metroImportAll(React3, obj9);
              }
              cResult[22] = !tmp16 && null != tmp12;
              cResult[23] = tmp12;
              cResult[24] = tmp4.videoPreview;
              cResult[25] = tmp4.videoPreviewWrapper;
              cResult[26] = tmp41;
              tmp40 = tmp41;
            }
          }
        }
      }
      let tmp33Result = tmp16;
      if (tmp33Result) {
        const obj14 = { style: tmp4.videoPreview, poster: url1, posterResizeMode: "cover", source: obj15, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
        url1 = undefined;
        const obj13 = { style: tmp4.videoPreviewWrapper, children: items4 };
        const VideoComponent = common_Video.VideoComponent;
        if (tmp8 != null) {
          url1 = tmp8.url;
        }
        obj15 = { uri: tmp6.url };
        items4 = [metroImportDefault(VideoComponent, obj14), ];
        const obj16 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
        items4[1] = metroImportDefault(LinearGradientDefault, obj16);
        tmp33Result = metroImportAll(React3, obj13);
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
      cResult[21] = tmp33Result;
      tmp31 = tmp33Result;
    }
    const items5 = [, ];
    ({ card: arr[0], cardWatchTask: arr[1] } = tmp4);
    cResult[13] = tmp4.card;
    cResult[14] = tmp4.cardWatchTask;
    cResult[15] = items5;
    tmp28 = items5;
  }
  const obj17 = { questId: quest.id, sourceQuestContent };
  cResult[6] = quest.id;
  cResult[7] = sourceQuestContent;
  cResult[8] = obj17;
  tmp14 = obj17;
}) : ((quest) => {
  let Card;
  let YsCuyF;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj17;
  let obj5;
  let obj8;
  let url;
  quest = quest.quest;
  const sourceQuestContent = quest.sourceQuestContent;
  const tmp = closure_9();
  let obj = quest(10924);
  const items = [quest];
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO);
  }, items);
  const items1 = [quest];
  const memo1 = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
  }, items1);
  const items2 = [quest];
  const memo2 = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE);
  }, items2);
  let isHeroVideoSupportedResult = null != memo;
  const obj2 = quest(14942);
  const obj3 = { questId: quest.id, sourceQuestContent };
  const watchTaskPressHandler = obj2.useWatchTaskPressHandler(obj3);
  if (isHeroVideoSupportedResult) {
    const tmp2Result = quest(10921);
    isHeroVideoSupportedResult = tmp2Result.isHeroVideoSupported(memo.mimetype);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    YsCuyF = tmp2(1126).t.YsCuyF;
  } else {
    YsCuyF = tmp2(1126).t["74KqrR"];
  }
  let tmp12 = watchTaskPressHandler;
  const tmp2Result2 = quest(10924);
  if (tmp2Result2.useIsQuestAccessSuspended()) {
    tmp12 = openQuestAccessSuspendedBottomSheetDefault;
  }
  const obj4 = { onPress: tmp12, accessibilityRole: "button", accessibilityLabel: intl.string(YsCuyF), children: closure_8(Card, obj5) };
  const PressableOpacity = tmp2(5916).PressableOpacity;
  intl = tmp2(1126).intl;
  obj5 = { style: items3, border: "subtle", children: items5 };
  items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  let tmp15Result = isHeroVideoSupportedResult;
  Card = tmp2(6002).Card;
  if (isHeroVideoSupportedResult) {
    const obj7 = { style: tmp.videoPreview, poster: url, posterResizeMode: "cover", source: obj8, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    url = undefined;
    const obj6 = { style: tmp.videoPreviewWrapper, children: items4 };
    const VideoComponent = tmp2(7993).VideoComponent;
    if (memo1 != null) {
      url = memo1.url;
    }
    obj8 = { uri: memo.url };
    items4 = [closure_7(VideoComponent, obj7), ];
    const obj9 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items4[1] = closure_7(LinearGradientDefault, obj9);
    tmp15Result = closure_8(closure_4, obj6);
  }
  items5 = [tmp15Result, , , ];
  let tmp15Result2 = !isHeroVideoSupportedResult && null != memo2;
  if (tmp15Result2) {
    const obj11 = { style: tmp.videoPreview, source: obj12, resizeMode: "cover" };
    const obj10 = { style: tmp.videoPreviewWrapper, children: items6 };
    obj12 = { uri: memo2.url };
    items6 = [closure_7(FastImageDefault, obj11), ];
    const obj13 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items6[1] = closure_7(LinearGradientDefault, obj13);
    tmp15Result2 = closure_8(closure_4, obj10);
  }
  items5[1] = tmp15Result2;
  const obj14 = { style: tmp.playVideoIconWrapper, children: items7 };
  items7 = [closure_7(QuestDockBlurredContentBackgroundDefault, { blurTheme: "light" }), ];
  const obj15 = { color: nativeDefault.colors.WHITE };
  const PlayIcon = tmp2(7959).PlayIcon;
  items7[1] = closure_7(PlayIcon, obj15);
  items5[2] = closure_8(closure_4, obj14);
  const obj16 = { style: items8, children: closure_7(QuestProgressIndicatorDefault, obj17) };
  items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true };
  items5[3] = closure_7(closure_4, obj16);
  return closure_7(PressableOpacity, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const obj = react2;
  const cResult = obj.c(9);
  quest = quest.quest;
  const tmp4 = closure_9();
  const obj2 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  let num;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  if (cResult[0] === quest) {
    let tmp6;
    if (cResult[1] === num) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.content) {
      let tmp8;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.card) {
        let tmp12;
        if (cResult[7] === tmp8) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj3 = { style: tmp4.card, border: "subtle", children: tmp8 };
      const tmp14 = metroImportDefault(Card_Card.Card, obj3);
      cResult[6] = tmp4.card;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: tmp4.content, children: tmp6 };
    const tmp11 = metroImportDefault(React3, obj4);
    cResult[3] = tmp4.content;
    cResult[4] = tmp6;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = metroImportDefault(QuestProgressIndicatorDefault, { quest, size: "lg", progress: num, hasConfetti: true });
  cResult[0] = quest;
  cResult[1] = num;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((quest) => {
  let num;
  let obj3;
  let obj4;
  let tmp5;
  quest = quest.quest;
  const tmp = closure_9();
  const obj = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj.useThirdPartyTaskDetails(quest);
  const obj2 = { style: tmp.card, border: "subtle", children: metroImportDefault(React3, obj3) };
  obj3 = { style: tmp.content, children: metroImportDefault(tmp5, obj4) };
  const Card = Card_Card.Card;
  obj4 = { quest, size: "lg", progress: num, hasConfetti: true };
  num = undefined;
  tmp5 = QuestProgressIndicatorDefault;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  return metroImportDefault(Card, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = tmp7;
export const QuestBottomSheetProgressCardWatchTask = tmp8;
export const QuestBottomSheetProgressCardInGameTask = tmp9;