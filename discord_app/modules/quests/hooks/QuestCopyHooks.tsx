// discord_app/modules/quests/hooks/QuestCopyHooks.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl13 from "../../../intl/index.native.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import NumberUtils from "../../../../discord_common/js/shared/utils/NumberUtils.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import QuestTypes from "../QuestTypes.tsx";
import utils_QuestUtils from "../utils/QuestUtils.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import QuestType from "../../../../discord_common/js/shared/shared-constants/QuestType.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import isActivitySupportedOnClientPlatformDefault from "../../activities/utils/isActivitySupportedOnClientPlatform.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import QuestCopyUtils from "../utils/QuestCopyUtils.tsx";
import hooks_QuestHooks from "QuestHooks.tsx";
import MobileQuestVideoWatchCtaCopy from "../utils/MobileQuestVideoWatchCtaCopy.tsx";
import SponsoredQuestUtils from "../SponsoredQuestUtils.native.tsx";
import useInGameQuestConnectState from "../useInGameQuestConnectState.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import QuestConstants from "../QuestConstants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2;

let c10;
let c9;
let metroImportAll;
function _getQuestsInstructionsToWinReward(arg0) {
  let applications;
  let currentUser;
  let description;
  let needsToConnect;
  let obj20;
  let onGameSheetClosed;
  let onGameSheetOpened;
  let onGameTitleClick;
  let popoutTargetElementRef;
  let quest;
  let sourceQuestContent;
  let targetMinutes6;
  let taskDetails;
  let thirdPartyTaskDetails;
  let withoutMarkdown;
  ({ quest, taskDetails, thirdPartyTaskDetails, withoutMarkdown, currentUser, onGameTitleClick } = arg0);
  ({ sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, needsToConnect } = arg0);
  let obj = PremiumTypeUtils;
  const isPremiumResult = obj.isPremium(currentUser, PremiumTypes.TIER_2);
  const obj2 = QuestRewardUtils;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(quest.config);
  const obj3 = QuestTaskUtils;
  let isConsoleQuestResult = obj3.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    const tmpResult = QuestTaskUtils;
    isConsoleQuestResult = tmpResult.shouldUsePlayOnDesktopTask(quest);
  }
  const tmpResult23 = utils_QuestUtils;
  const isSponsoredPlayQuestResult = tmpResult23.isSponsoredPlayQuest(quest);
  const tmpResult24 = QuestRewardUtils;
  const defaultRewardNameWithArticle = tmpResult24.getDefaultRewardNameWithArticle(quest.config, currentUser);
  if (isSponsoredPlayQuestResult) {
    let formatToPlainStringResult;
    ({ targetMinutes: targetMinutes6, applications } = taskDetails);
    if (withoutMarkdown) {
      const intl12 = intl13.intl;
      const obj4 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: targetMinutes6 };
      formatToPlainStringResult = intl12.formatToPlainString(intl13.t["1votF6"], obj4);
    } else {
      const obj5 = {
        quest,
        sourceQuestContent,
        applications,
        popoutTargetElementRef,
        onGameSheetOpened,
        onGameSheetClosed,
      };
      const createGameSheetHook = SponsoredQuestUtils.createGameSheetHook;
      SponsoredQuestUtils;
      if (applications == null) {
        applications = [];
      }
      const obj6 = {};
      const gameSheetHook = createGameSheetHook(obj5);
      obj6[constants2.PACKAGE_ACTION_ADVENTURE] = intl13.t.H485IA;
      obj6[constants2.PACKAGE_RPG_MMO] = intl13.t["3XS8Ni"];
      obj6[constants2.PACKAGE_RACING_SPORTS] = intl13.t["X+UCju"];
      obj6[constants2.PACKAGE_SANDBOX_CREATIVE] = intl13.t["6o4n1Q"];
      obj6[constants2.PACKAGE_FAMILY_FRIENDLY] = intl13.t.DUsNmf;
      obj6[constants2.PACKAGE_HOLIDAY_SEASON] = intl13.t["cWP8/Z"];
      obj6[constants2.PACKAGE_NEW_YEARS] = intl13.t["8+sIJz"];
      const features1 = quest.config.features;
      const found = features1.find((item) => item in obj6);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj6[found];
      }
      if (CDeHul == null) {
        CDeHul = intl13.t.CDeHul;
      }
      const intl11 = intl13.intl;
      const obj7 = {
        rewardNameWithArticle: defaultRewardNameWithArticle,
        targetMinutes: targetMinutes6,
        gameSheetHook,
      };
      formatToPlainStringResult = intl11.format(CDeHul, obj7);
    }
    description = formatToPlainStringResult;
  } else if (isConsoleQuestResult) {
    let prop;
    let enQ3jU2;
    const targetMinutes5 = taskDetails.targetMinutes;
    const gameTitle5 = quest.config.messages.gameTitle;
    const tmpResult26 = QuestRewardUtils;
    const result = tmpResult26.isCollectibleQuestRewardPremiumExtendable(quest.config);
    const features4 = quest.config.features;
    const tmpResult27 = QuestRewardUtils;
    const result1 = tmpResult27.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
    const hasItem = features4.includes(constants2.NON_GAMING_PLAY_QUEST);
    if (isPremiumResult) {
      let formatToPlainStringResult1;
      if (result) {
        let v1AcTqm;
        if (result1) {
          let tmp65;
          if (hasItem) {
            let ztXW8V2;
            if (null != collectibleQuestRewardDuration) {
              ztXW8V2 = intl13.t.u5QXpw;
            } else {
              ztXW8V2 = intl13.t.ztXW8V;
            }
            tmp65 = ztXW8V2;
          } else if (null != collectibleQuestRewardDuration) {
            const t27 = intl13.t;
            tmp65 = tmp62 ? t27["/4XT0b"] : t27["0hwcvM"];
          } else {
            const t26 = intl13.t;
            tmp65 = tmp62 ? t26.tQoqXX : t26["eb/Sna"];
          }
          v1AcTqm = tmp65;
        } else {
          const t25 = intl13.t;
          if (hasItem) {
            v1AcTqm = t25["1AcTqm"];
          } else {
            v1AcTqm = tmp62 ? t25.klYWbT : t25.ziB0HF;
          }
        }
        prop = v1AcTqm;
      }
      const obj8 = {
        gameTitle: gameTitle5,
        streamingDurationRequirement: targetMinutes5,
        rewardNameWithArticle: defaultRewardNameWithArticle,
        duration: collectibleQuestRewardDuration,
        targetMinutes: targetMinutes5,
        onGameTitleClick,
      };
      const intl10 = intl13.intl;
      if (withoutMarkdown) {
        formatToPlainStringResult1 = intl10.formatToPlainString(prop, obj8);
      } else {
        formatToPlainStringResult1 = intl10.format(prop, obj8);
      }
      description = formatToPlainStringResult1;
    }
    if (!result) {
      if (null == collectibleQuestRewardDuration) {
        const t23 = intl13.t;
        if (hasItem) {
          prop = t23["e+K3xJ"];
        } else {
          prop = tmp62 ? t23.GFdaUK : t23.NIimTt;
        }
      }
    }
    const t24 = intl13.t;
    if (hasItem) {
      enQ3jU2 = t24.enQ3jU;
    } else {
      enQ3jU2 = tmp62 ? t24["4JS2QJ"] : t24.AwuMRS;
    }
    prop = enQ3jU2;
  } else {
    const tmpResult28 = QuestTaskUtils;
    if (tmpResult28.isConsoleQuest(quest)) {
      let tmp53;
      const targetMinutes4 = taskDetails.targetMinutes;
      const gameTitle4 = quest.config.messages.gameTitle;
      const tmpResult29 = QuestRewardUtils;
      const result2 = tmpResult29.isCollectibleQuestRewardPremiumExtendable(quest.config);
      const tmpResult30 = QuestRewardUtils;
      if (isPremiumResult) {
        let formatToPlainStringResult2;
        if (result2) {
          let tmp54;
          if (tmpResult30.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
            let tmp55;
            if (null != collectibleQuestRewardDuration) {
              const t22 = intl13.t;
              tmp55 = tmp52 ? t22["/4XT0b"] : t22["0hwcvM"];
            } else {
              const t21 = intl13.t;
              tmp55 = tmp52 ? t21.tQoqXX : t21["eb/Sna"];
            }
            tmp54 = tmp55;
          } else {
            const t20 = intl13.t;
            tmp54 = tmp52 ? t20.klYWbT : t20.ziB0HF;
          }
          tmp53 = tmp54;
        }
        const obj9 = {
          gameTitle: gameTitle4,
          targetMinutes: targetMinutes4,
          rewardNameWithArticle: defaultRewardNameWithArticle,
          duration: collectibleQuestRewardDuration,
          streamingDurationRequirement: targetMinutes4,
          onGameTitleClick,
        };
        const intl9 = intl13.intl;
        if (withoutMarkdown) {
          formatToPlainStringResult2 = intl9.formatToPlainString(tmp53, obj9);
        } else {
          formatToPlainStringResult2 = intl9.format(tmp53, obj9);
        }
        description = formatToPlainStringResult2;
      }
      if (!result2) {
        if (null == collectibleQuestRewardDuration) {
          const t18 = intl13.t;
          tmp53 = tmp52 ? t18.GFdaUK : t18.NIimTt;
        }
      }
      const t19 = intl13.t;
      tmp53 = tmp52 ? t19["4JS2QJ"] : t19.AwuMRS;
    } else {
      const tmpResult31 = QuestTaskUtils;
      if (tmpResult31.shouldUsePlayOnDesktopTask(quest)) {
        let v03VJqu;
        let enQ3jU;
        const targetMinutes3 = taskDetails.targetMinutes;
        const gameTitle3 = quest.config.messages.gameTitle;
        const tmpResult32 = QuestRewardUtils;
        const result3 = tmpResult32.isCollectibleQuestRewardPremiumExtendable(quest.config);
        const features3 = quest.config.features;
        const tmpResult33 = QuestRewardUtils;
        const result4 = tmpResult33.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
        const hasItem1 = features3.includes(constants2.NON_GAMING_PLAY_QUEST);
        if (isPremiumResult) {
          let formatToPlainStringResult3;
          if (result3) {
            let v1AcTqm1;
            if (result4) {
              let tmp48;
              if (hasItem1) {
                let ztXW8V;
                if (null != collectibleQuestRewardDuration) {
                  ztXW8V = intl13.t.u5QXpw;
                } else {
                  ztXW8V = intl13.t.ztXW8V;
                }
                tmp48 = ztXW8V;
              } else if (null != collectibleQuestRewardDuration) {
                const t17 = intl13.t;
                tmp48 = tmp45 ? t17["/4XT0b"] : t17["0hwcvM"];
              } else {
                const t16 = intl13.t;
                tmp48 = tmp45 ? t16.tQoqXX : t16["eb/Sna"];
              }
              v1AcTqm1 = tmp48;
            } else {
              const t15 = intl13.t;
              if (hasItem1) {
                v1AcTqm1 = t15["1AcTqm"];
              } else {
                v1AcTqm1 = tmp45 ? t15.klYWbT : t15.ziB0HF;
              }
            }
            v03VJqu = v1AcTqm1;
          }
          const obj10 = {
            gameTitle: gameTitle3,
            streamingDurationRequirement: targetMinutes3,
            rewardNameWithArticle: defaultRewardNameWithArticle,
            duration: collectibleQuestRewardDuration,
            questReward: defaultRewardNameWithArticle,
            onGameTitleClick,
          };
          const intl8 = intl13.intl;
          if (withoutMarkdown) {
            formatToPlainStringResult3 = intl8.formatToPlainString(v03VJqu, obj10);
          } else {
            formatToPlainStringResult3 = intl8.format(v03VJqu, obj10);
          }
          description = formatToPlainStringResult3;
        }
        if (!result3) {
          if (null == collectibleQuestRewardDuration) {
            const t13 = intl13.t;
            if (hasItem1) {
              v03VJqu = t13["03VJqu"];
            } else {
              v03VJqu = tmp45 ? t13.NrD2h8 : t13.FZL5Q5;
            }
          }
        }
        const t14 = intl13.t;
        if (hasItem1) {
          enQ3jU = t14.enQ3jU;
        } else {
          enQ3jU = tmp45 ? t14["4JS2QJ"] : t14.AwuMRS;
        }
        v03VJqu = enQ3jU;
      } else {
        const obj11 = { quest };
        const tmpResult34 = QuestRewardUtils;
        if (tmpResult34.isTieredRewardCodeQuest(obj11)) {
          let HHVg4i;
          let formatToPlainStringResult4;
          const targetMinutes2 = taskDetails.targetMinutes;
          const gameTitle2 = quest.config.messages.gameTitle;
          if (null != onGameTitleClick) {
            HHVg4i = intl13.t.HHVg4i;
          } else {
            HHVg4i = intl13.t["a/ia7F"];
          }
          const obj12 = { gameTitle: gameTitle2, streamingDurationRequirement: targetMinutes2, onGameTitleClick };
          const intl7 = intl13.intl;
          if (withoutMarkdown) {
            formatToPlainStringResult4 = intl7.formatToPlainString(HHVg4i, obj12);
          } else {
            formatToPlainStringResult4 = intl7.format(HHVg4i, obj12);
          }
          description = formatToPlainStringResult4;
        } else {
          const tmpResult35 = QuestTaskUtils;
          const hasWatchVideoTasksResult = tmpResult35.hasWatchVideoTasks(quest);
          const tmpResult36 = QuestTaskUtils;
          if (hasWatchVideoTasksResult) {
            let Rsd5bL;
            const defaultWatchVideoTask = tmpResult36.getDefaultWatchVideoTask(quest.config);
            let str;
            if (defaultWatchVideoTask != null) {
              str = defaultWatchVideoTask.messages.videoTitle;
            }
            if (str == null) {
              str = "video";
            }
            const tmpResult37 = QuestRewardUtils;
            const result5 = tmpResult37.isCollectibleQuestRewardPremiumExtendable(quest.config);
            const tmpResult38 = QuestRewardUtils;
            if (result5) {
              let formatToPlainStringResult5;
              if (isPremiumResult) {
                let prop1;
                if (tmpResult38.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                  let tXwfJT;
                  if (null != collectibleQuestRewardDuration) {
                    tXwfJT = intl13.t.tXwfJT;
                  } else {
                    tXwfJT = intl13.t["xqX+r5"];
                  }
                  prop1 = tXwfJT;
                } else {
                  prop1 = intl13.t["vs/xBu"];
                }
                Rsd5bL = prop1;
              }
              const obj13 = {
                videoTitle: str,
                rewardNameWithArticle: defaultRewardNameWithArticle,
                duration: collectibleQuestRewardDuration,
              };
              const intl6 = intl13.intl;
              if (withoutMarkdown) {
                formatToPlainStringResult5 = intl6.formatToPlainString(Rsd5bL, obj13);
              } else {
                formatToPlainStringResult5 = intl6.format(Rsd5bL, obj13);
              }
              description = formatToPlainStringResult5;
            }
            if (!result5) {
              if (null == collectibleQuestRewardDuration) {
                if (quest.id === React4) {
                  Rsd5bL = intl13.t.Rsd5bL;
                } else {
                  Rsd5bL = intl13.t["g+InPC"];
                }
              }
            }
            Rsd5bL = intl13.t["W/HkLO"];
          } else if (tmpResult36.hasPlayActivityTask(quest)) {
            let formatToPlainStringResult8;
            const targetMinutes = taskDetails.targetMinutes;
            const tmpResult39 = utils_QuestUtils;
            if (tmpResult39.isPlayAnyActivityQuest(quest)) {
              let formatToPlainStringResult6;
              const VYwSSu = intl13.t.VYwSSu;
              const obj14 = { streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
              const intl5 = intl13.intl;
              if (withoutMarkdown) {
                formatToPlainStringResult6 = intl5.formatToPlainString(VYwSSu, obj14);
              } else {
                formatToPlainStringResult6 = intl5.format(VYwSSu, obj14);
              }
              formatToPlainStringResult8 = formatToPlainStringResult6;
            } else {
              const features = quest.config.features;
              if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
                const features2 = quest.config.features;
                if (features2.includes(constants2.CLOUD_GAMING_PROVIDER_NVIDIA)) {
                  let formatToPlainStringResult7;
                  const v0NNM3l = intl13.t["0NNM3l"];
                  const obj15 = {
                    activityName: quest.config.messages.gameTitle,
                    providerName: "NVIDIA GeForce NOW",
                    providerLink: obj20.getArticleURL(HelpdeskArticles.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                    streamingDurationRequirement: targetMinutes,
                    questReward: defaultRewardNameWithArticle,
                  };
                  obj20 = HelpdeskUtilsDefault;
                  const intl4 = intl13.intl;
                  if (withoutMarkdown) {
                    formatToPlainStringResult7 = intl4.formatToPlainString(v0NNM3l, obj15);
                  } else {
                    formatToPlainStringResult7 = intl4.format(v0NNM3l, obj15);
                  }
                  formatToPlainStringResult8 = formatToPlainStringResult7;
                }
              }
              const UuzHh8 = intl13.t.UuzHh8;
              const obj16 = {
                activityName: quest.config.messages.gameTitle,
                streamingDurationRequirement: targetMinutes,
                questReward: defaultRewardNameWithArticle,
              };
              const intl3 = intl13.intl;
              if (withoutMarkdown) {
                formatToPlainStringResult8 = intl3.formatToPlainString(UuzHh8, obj16);
              } else {
                formatToPlainStringResult8 = intl3.format(UuzHh8, obj16);
              }
            }
            description = formatToPlainStringResult8;
          } else {
            const tmpResult40 = QuestTaskUtils;
            if (tmpResult40.hasAchievementInGameTask(quest)) {
              if (null != thirdPartyTaskDetails) {
                let tmp18;
                let formatToPlainStringResult9;
                const gameTitle = quest.config.messages.gameTitle;
                const tmpResult41 = QuestRewardUtils;
                const result6 = tmpResult41.isCollectibleQuestRewardPremiumExtendable(quest.config);
                QuestRewardUtils;
                if (needsToConnect) {
                  const t12 = intl13.t;
                  tmp18 = tmp17 ? t12["0SLl/G"] : t12.BlfaHK;
                } else {
                  if (isPremiumResult) {
                    if (result6) {
                      let tmp19;
                      if (tmp16) {
                        let tmp20;
                        if (null != collectibleQuestRewardDuration) {
                          const t11 = intl13.t;
                          tmp20 = tmp17 ? t11.uLVYG5 : t11.NdXW5c;
                        } else {
                          const t10 = intl13.t;
                          tmp20 = tmp17 ? t10["2Ctf1d"] : t10["8066TK"];
                        }
                        tmp19 = tmp20;
                      } else if (null != collectibleQuestRewardDuration) {
                        const t9 = intl13.t;
                        tmp19 = tmp17 ? t9.yMEn77 : t9["6FOKAX"];
                      } else {
                        const t8 = intl13.t;
                        tmp19 = tmp17 ? t8.bxN0nx : t8.thO6iA;
                      }
                      tmp18 = tmp19;
                    }
                  }
                  if (!result6) {
                    if (null == collectibleQuestRewardDuration) {
                      const t6 = intl13.t;
                      tmp18 = tmp17 ? t6.bxN0nx : t6.thO6iA;
                    }
                  }
                  const t7 = intl13.t;
                  tmp18 = tmp17 ? t7.ojhBxZ : t7["IACEB/"];
                }
                const obj17 = {
                  gameTitle,
                  objective: thirdPartyTaskDetails.description,
                  duration: collectibleQuestRewardDuration,
                  questReward: defaultRewardNameWithArticle,
                  onGameTitleClick,
                };
                const intl2 = intl13.intl;
                if (withoutMarkdown) {
                  formatToPlainStringResult9 = intl2.formatToPlainString(tmp18, obj17);
                } else {
                  formatToPlainStringResult9 = intl2.format(tmp18, obj17);
                }
                description = formatToPlainStringResult9;
              }
            }
            if (null != thirdPartyTaskDetails) {
              description = thirdPartyTaskDetails.description;
            } else {
              let tmp11;
              const targetMinutes7 = taskDetails.targetMinutes;
              const gameTitle6 = quest.config.messages.gameTitle;
              const tmpResult43 = QuestRewardUtils;
              const result7 = tmpResult43.isCollectibleQuestRewardPremiumExtendable(quest.config);
              const tmpResult44 = QuestRewardUtils;
              if (isPremiumResult) {
                if (result7) {
                  let tmp12;
                  if (tmpResult44.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                    let tmp13;
                    if (null != collectibleQuestRewardDuration) {
                      const t5 = intl13.t;
                      tmp13 = tmp75 ? t5["3RwRv8"] : t5.TmKqHw;
                    } else {
                      const t4 = intl13.t;
                      tmp13 = tmp75 ? t4.l9yxDa : t4["X8Yt/1"];
                    }
                    tmp12 = tmp13;
                  } else {
                    const t3 = intl13.t;
                    tmp12 = tmp75 ? t3.eEuma3 : t3.smG9ql;
                  }
                  tmp11 = tmp12;
                }
                const obj18 = {
                  gameTitle: gameTitle6,
                  streamingDurationRequirement: targetMinutes7,
                  duration: collectibleQuestRewardDuration,
                  questReward: defaultRewardNameWithArticle,
                  onGameTitleClick,
                };
                const intl = intl13.intl;
                if (withoutMarkdown) {
                  description = intl.formatToPlainString(tmp11, obj18);
                } else {
                  description = intl.format(tmp11, obj18);
                }
              }
              if (!result7) {
                if (null == collectibleQuestRewardDuration) {
                  const t = intl13.t;
                  tmp11 = tmp75 ? t.ER9rII : t["hkJ+Gs"];
                }
              }
              const t2 = intl13.t;
              tmp11 = tmp75 ? t2.Cko4a4 : t2.BLyDvO;
            }
          }
        }
      }
    }
  }
  return description;
}
function getSimplifiedQuestTaskType(quest) {
  const obj = QuestTaskUtils;
  if (!obj.isConsoleQuest(quest)) {
    let PLAY;
    const tmpResult = QuestTaskUtils;
    if (!tmpResult.hasPlayActivityTask(quest)) {
      const obj2 = { quest };
      const tmpResult4 = QuestTaskUtils;
      if (tmpResult4.hasStreamOnDesktopTask(obj2)) {
        PLAY = constants3.STREAM;
      } else {
        const tmpResult5 = QuestTaskUtils;
        if (tmpResult5.hasWatchVideoOnMobileTasks(quest)) {
          PLAY = constants3.WATCH_VIDEO;
        } else {
          const tmpResult6 = QuestTaskUtils;
          PLAY = tmpResult6.isInGameQuest(quest) ? constants3.IN_GAME : constants3.PLAY;
        }
      }
    }
    return PLAY;
  }
  PLAY = constants3.PLAY;
}
({ QuestsExperimentLocations: metroImportAll, ORBS_INTRO_QUEST_ID: c9, QuestVariants: c10 } = QuestConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest, arg1, questContent, sourceQuestContent) => {
      const obj = react2;
      const cResult = obj.c(30);
      const obj2 = hooks_QuestHooks;
      const targetMinutes = obj2.useQuestTaskDetails(quest).targetMinutes;
      const obj3 = hooks_QuestHooks;
      const thirdPartyTaskDetails = obj3.useThirdPartyTaskDetails(quest);
      if (cResult[0] === quest) {
        if (cResult[1] === questContent) {
          let tmp5;
          if (cResult[2] === sourceQuestContent) {
            tmp5 = cResult[3];
          }
          const tmpResult = hooks_QuestHooks;
          const connectedConsoleLinkOnClick = tmpResult.useConnectedConsoleLinkOnClick(tmp5);
          const tmpResult10 = utils_QuestUtils;
          const isSponsoredPlayQuestResult = tmpResult10.isSponsoredPlayQuest(quest);
          const tmpResult11 = QuestTaskUtils;
          if (tmpResult11.isConsoleQuest(quest)) {
            const obj4 = { quest };
            const tmpResult12 = QuestTaskUtils;
            if (!tmpResult12.hasPlayOnDesktopTask(obj4)) {
              if (cResult[4] === connectedConsoleLinkOnClick) {
                if (cResult[5] === quest.config.messages.gameTitle) {
                  let tmp8;
                  if (cResult[6] === targetMinutes) {
                    tmp8 = cResult[7];
                  }
                  return tmp8;
                }
              }
              const intl = intl13.intl;
              const obj5 = {
                minutes: targetMinutes,
                onClick: connectedConsoleLinkOnClick,
                gameTitle: quest.config.messages.gameTitle,
              };
              const formatResult = intl.format(intl13.t["l4S+cQ"], obj5);
              cResult[4] = connectedConsoleLinkOnClick;
              cResult[5] = quest.config.messages.gameTitle;
              cResult[6] = targetMinutes;
              cResult[7] = formatResult;
              tmp8 = formatResult;
            }
          }
          const tmpResult13 = QuestTaskUtils;
          if (tmpResult13.isConsoleQuest(quest)) {
            let tmp33;
            if (isSponsoredPlayQuestResult) {
              if (cResult[8] === connectedConsoleLinkOnClick) {
                let tmp35;
                if (cResult[9] === targetMinutes) {
                  tmp35 = cResult[10];
                }
                tmp33 = tmp35;
              }
              const intl9 = intl13.intl;
              const obj6 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
              const formatResult1 = intl9.format(intl13.t.gbtCpW, obj6);
              cResult[8] = connectedConsoleLinkOnClick;
              cResult[9] = targetMinutes;
              cResult[10] = formatResult1;
              tmp35 = formatResult1;
            } else {
              if (cResult[11] === connectedConsoleLinkOnClick) {
                if (cResult[12] === quest.config.messages.gameTitle) {
                  if (cResult[13] === targetMinutes) {
                    tmp33 = cResult[14];
                  }
                }
              }
              const intl8 = intl13.intl;
              const obj7 = {
                minutes: targetMinutes,
                onClick: connectedConsoleLinkOnClick,
                gameTitle: quest.config.messages.gameTitle,
              };
              const formatResult2 = intl8.format(intl13.t.Ajlcd7, obj7);
              cResult[11] = connectedConsoleLinkOnClick;
              cResult[12] = quest.config.messages.gameTitle;
              cResult[13] = targetMinutes;
              cResult[14] = formatResult2;
              tmp33 = formatResult2;
            }
            return tmp33;
          } else if (isSponsoredPlayQuestResult) {
            let tmp31;
            if (cResult[15] !== targetMinutes) {
              const intl7 = intl13.intl;
              const obj8 = { targetMinutes };
              const formatResult3 = intl7.format(intl13.t.Hu8SKW, obj8);
              cResult[15] = targetMinutes;
              cResult[16] = formatResult3;
              tmp31 = formatResult3;
            } else {
              tmp31 = cResult[16];
            }
            return tmp31;
          } else {
            const tmpResult14 = QuestTaskUtils;
            if (tmpResult14.hasWatchVideoTasks(quest)) {
              let tmp21;
              let tmp20;
              if (cResult[17] !== quest.config) {
                let formatToPlainStringResult;
                let tmp27;
                const _Symbol = Symbol;
                const forResult = Symbol.for("react.early_return_sentinel");
                const tmpResult15 = QuestTaskUtils;
                const defaultWatchVideoTask = tmpResult15.getDefaultWatchVideoTask(quest.config);
                let videoTitle;
                if (defaultWatchVideoTask != null) {
                  videoTitle = defaultWatchVideoTask.messages.videoTitle;
                }
                if (null != videoTitle) {
                  const intl6 = intl13.intl;
                  const obj9 = { videoTitle };
                  formatToPlainStringResult = intl6.formatToPlainString(intl13.t["9m9Mna"], obj9);
                  tmp27 = forResult;
                } else {
                  const _Symbol2 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = intl13.intl;
                    const stringResult = intl5.string(intl13.t["o+e9yh"]);
                    cResult[20] = stringResult;
                    tmp27 = stringResult;
                  } else {
                    tmp27 = cResult[20];
                  }
                }
                cResult[17] = quest.config;
                cResult[18] = formatToPlainStringResult;
                cResult[19] = tmp27;
                tmp21 = tmp27;
                tmp20 = formatToPlainStringResult;
              } else {
                tmp20 = cResult[18];
                tmp21 = cResult[19];
              }
              const _Symbol3 = Symbol;
              if (tmp21 !== Symbol.for("react.early_return_sentinel")) {
                tmp20 = tmp21;
              }
              return tmp20;
            } else if (null != thirdPartyTaskDetails) {
              return thirdPartyTaskDetails.title;
            } else {
              const tmpResult16 = QuestTaskUtils;
              if (tmpResult16.hasPlayActivityTask(quest)) {
                let tmp16;
                const tmpResult17 = utils_QuestUtils;
                if (tmpResult17.isPlayAnyActivityQuest(quest)) {
                  let tmp18;
                  if (cResult[21] !== targetMinutes) {
                    const intl4 = intl13.intl;
                    const obj10 = { minutes: targetMinutes };
                    const formatResult4 = intl4.format(intl13.t["1NaRSs"], obj10);
                    cResult[21] = targetMinutes;
                    cResult[22] = formatResult4;
                    tmp18 = formatResult4;
                  } else {
                    tmp18 = cResult[22];
                  }
                  tmp16 = tmp18;
                } else {
                  if (cResult[23] === quest.config.messages.gameTitle) {
                    if (cResult[24] === targetMinutes) {
                      tmp16 = cResult[25];
                    }
                  }
                  const intl3 = intl13.intl;
                  const obj11 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
                  const formatResult5 = intl3.format(intl13.t.xHXCyf, obj11);
                  cResult[23] = quest.config.messages.gameTitle;
                  cResult[24] = targetMinutes;
                  cResult[25] = formatResult5;
                  tmp16 = formatResult5;
                }
                return tmp16;
              } else {
                let v6zWtV8 = intl13.t["6zWtV8"];
                const obj12 = { quest };
                const tmpResult18 = QuestTaskUtils;
                if (tmpResult18.hasPlayOnDesktopTask(obj12)) {
                  const features = quest.config.features;
                  const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
                  const t = intl13.t;
                  v6zWtV8 = hasItem ? t.fe7Xec : t["wmOh/q"];
                }
                if (cResult[26] === quest.config.messages.gameTitle) {
                  if (cResult[27] === targetMinutes) {
                    let tmp14;
                    if (cResult[28] === v6zWtV8) {
                      tmp14 = cResult[29];
                    }
                    return tmp14;
                  }
                }
                const intl2 = intl13.intl;
                const obj13 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
                const formatResult6 = intl2.format(v6zWtV8, obj13);
                cResult[26] = quest.config.messages.gameTitle;
                cResult[27] = targetMinutes;
                cResult[28] = v6zWtV8;
                cResult[29] = formatResult6;
                tmp14 = formatResult6;
              }
            }
          }
        }
      }
      const obj14 = { quest, questContent, sourceQuestContent };
      cResult[0] = quest;
      cResult[1] = questContent;
      cResult[2] = sourceQuestContent;
      cResult[3] = obj14;
      tmp5 = obj14;
    }
  : (quest, arg1, questContent, sourceQuestContent) => {
      const obj = hooks_QuestHooks;
      const targetMinutes = obj.useQuestTaskDetails(quest).targetMinutes;
      const obj2 = hooks_QuestHooks;
      const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
      const obj3 = hooks_QuestHooks;
      const obj4 = { quest, questContent, sourceQuestContent };
      const connectedConsoleLinkOnClick = obj3.useConnectedConsoleLinkOnClick(obj4);
      const obj5 = utils_QuestUtils;
      const isSponsoredPlayQuestResult = obj5.isSponsoredPlayQuest(quest);
      const obj6 = QuestTaskUtils;
      if (obj6.isConsoleQuest(quest)) {
        const obj7 = { quest };
        const tmpResult = QuestTaskUtils;
        if (!tmpResult.hasPlayOnDesktopTask(obj7)) {
          const intl = intl13.intl;
          const obj8 = {
            minutes: targetMinutes,
            onClick: connectedConsoleLinkOnClick,
            gameTitle: quest.config.messages.gameTitle,
          };
          return intl.format(intl13.t["l4S+cQ"], obj8);
        }
      }
      const tmpResult7 = QuestTaskUtils;
      if (tmpResult7.isConsoleQuest(quest)) {
        let format2Result;
        const intl7 = intl13.intl;
        const format2 = intl7.format;
        const t3 = intl13.t;
        if (isSponsoredPlayQuestResult) {
          const obj9 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
          format2Result = format2(t3.gbtCpW, obj9);
        } else {
          const obj10 = {
            minutes: targetMinutes,
            onClick: connectedConsoleLinkOnClick,
            gameTitle: quest.config.messages.gameTitle,
          };
          format2Result = format2(t3.Ajlcd7, obj10);
        }
        return format2Result;
      } else if (isSponsoredPlayQuestResult) {
        const intl6 = intl13.intl;
        const obj11 = { targetMinutes };
        return intl6.format(intl13.t.Hu8SKW, obj11);
      } else {
        const tmpResult8 = QuestTaskUtils;
        if (tmpResult8.hasWatchVideoTasks(quest)) {
          let stringResult;
          const tmpResult9 = QuestTaskUtils;
          const defaultWatchVideoTask = tmpResult9.getDefaultWatchVideoTask(quest.config);
          let videoTitle;
          if (defaultWatchVideoTask != null) {
            videoTitle = defaultWatchVideoTask.messages.videoTitle;
          }
          if (null == videoTitle) {
            const intl5 = intl13.intl;
            stringResult = intl5.string(intl13.t["o+e9yh"]);
          } else {
            const intl4 = intl13.intl;
            const obj12 = { videoTitle };
            stringResult = intl4.formatToPlainString(intl13.t["9m9Mna"], obj12);
          }
          return stringResult;
        } else if (null != thirdPartyTaskDetails) {
          return thirdPartyTaskDetails.title;
        } else {
          const tmpResult10 = QuestTaskUtils;
          if (tmpResult10.hasPlayActivityTask(quest)) {
            let formatResult;
            const tmpResult11 = utils_QuestUtils;
            const result = tmpResult11.isPlayAnyActivityQuest(quest);
            const intl3 = intl13.intl;
            const format = intl3.format;
            const t2 = intl13.t;
            if (result) {
              const obj13 = { minutes: targetMinutes };
              formatResult = format(t2["1NaRSs"], obj13);
            } else {
              const obj14 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
              formatResult = format(t2.xHXCyf, obj14);
            }
            return formatResult;
          } else {
            let v6zWtV8 = intl13.t["6zWtV8"];
            const obj15 = { quest };
            const tmpResult12 = QuestTaskUtils;
            if (tmpResult12.hasPlayOnDesktopTask(obj15)) {
              const features = quest.config.features;
              const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
              const t = intl13.t;
              v6zWtV8 = hasItem ? t.fe7Xec : t["wmOh/q"];
            }
            const intl2 = intl13.intl;
            const obj16 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
            return intl2.format(v6zWtV8, obj16);
          }
        }
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentUser;
      let gameProfileSource;
      let quest;
      let tmp11;
      let tmp5;
      let tmp6;
      let withoutMarkdown;
      const obj = react2;
      const cResult = obj.c(14);
      ({ quest, gameProfileSource, withoutMarkdown } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmpResult5 = hooks_QuestHooks;
      const thirdPartyTaskDetails = tmpResult5.useThirdPartyTaskDetails(quest);
      const tmpResult6 = useInGameQuestConnectState;
      const inGameQuestConnectState = tmpResult6.useInGameQuestConnectState(quest);
      if (cResult[2] !== quest) {
        let inGameApplicationId;
        const tmpResult7 = QuestTaskUtils;
        const result = tmpResult7.hasAchievementInGameTask(quest);
        const tmpResult8 = QuestTaskUtils;
        if (result) {
          inGameApplicationId = tmpResult8.getInGameApplicationId(quest);
        } else {
          const allApplicationIds = tmpResult8.getAllApplicationIds(quest);
          if (allApplicationIds != null) {
            inGameApplicationId = allApplicationIds[0];
          }
        }
        cResult[2] = quest;
        cResult[3] = inGameApplicationId;
        tmp11 = inGameApplicationId;
      } else {
        tmp11 = cResult[3];
      }
      if (gameProfileSource == null) {
        gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestHome;
      }
      if (cResult[4] === tmp11) {
        let tmp16;
        if (cResult[5] === gameProfileSource) {
          tmp16 = cResult[6];
        }
        useOpenGameProfileModalDefault(tmp16);
        if (cResult[7] === stateFromStores) {
          if ((cResult[8] === false) === inGameQuestConnectState) {
            if (cResult[9] === arg0) {
              if (cResult[10] === thirdPartyTaskDetails) {
                if (cResult[11] === undefined) {
                  let tmp20;
                  if (cResult[12] === (undefined !== withoutMarkdown && withoutMarkdown)) {
                    tmp20 = cResult[13];
                  }
                  return tmp20;
                }
              }
            }
          }
        }
        const obj2 = {
          currentUser: stateFromStores,
          withoutMarkdown: undefined !== withoutMarkdown && withoutMarkdown,
          thirdPartyTaskDetails,
          onGameTitleClick: undefined,
          needsToConnect: false === inGameQuestConnectState,
        };
        const merged = Object.assign(arg0);
        const tmp25 = _getQuestsInstructionsToWinReward(obj2);
        cResult[7] = stateFromStores;
        cResult[8] = false === inGameQuestConnectState;
        cResult[9] = arg0;
        cResult[10] = thirdPartyTaskDetails;
        cResult[11] = undefined;
        cResult[12] = undefined !== withoutMarkdown && withoutMarkdown;
        cResult[13] = tmp25;
        tmp20 = tmp25;
      }
      const obj3 = { applicationId: tmp11, location: metroImportAll.QUEST_INSTRUCTIONS, source: gameProfileSource };
      cResult[4] = tmp11;
      cResult[5] = gameProfileSource;
      cResult[6] = obj3;
      tmp16 = obj3;
    }
  : (arg0) => {
      let currentUser;
      let gameProfileSource;
      let inGameApplicationId;
      let quest;
      let withoutMarkdown;
      ({ quest, gameProfileSource, withoutMarkdown } = arg0);
      const items = [UserStore];
      const tmp = undefined !== withoutMarkdown && withoutMarkdown;
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = hooks_QuestHooks;
      const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
      const obj3 = useInGameQuestConnectState;
      const inGameQuestConnectState = obj3.useInGameQuestConnectState(quest);
      const obj4 = QuestTaskUtils;
      const result = obj4.hasAchievementInGameTask(quest);
      const obj5 = QuestTaskUtils;
      if (result) {
        inGameApplicationId = obj5.getInGameApplicationId(quest);
      } else {
        const allApplicationIds = obj5.getAllApplicationIds(quest);
        if (allApplicationIds != null) {
          inGameApplicationId = allApplicationIds[0];
        }
      }
      const obj6 = {
        applicationId: inGameApplicationId,
        location: metroImportAll.QUEST_INSTRUCTIONS,
        source: gameProfileSource,
      };
      const tmp11 = useOpenGameProfileModalDefault;
      if (gameProfileSource == null) {
        gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestHome;
      }
      tmp11(obj6);
      const obj7 = {
        currentUser: stateFromStores,
        withoutMarkdown: tmp,
        thirdPartyTaskDetails,
        onGameTitleClick: undefined,
        needsToConnect: false === inGameQuestConnectState,
      };
      const merged = Object.assign(arg0);
      return _getQuestsInstructionsToWinReward(obj7);
    };
let closure_14 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest, sourceQuestContent, location, gameProfileSource, popoutTargetElementRef) => {
      const obj = react2;
      const cResult = obj.c(9);
      const obj2 = hooks_QuestHooks;
      const questTaskDetails = obj2.useQuestTaskDetails(quest);
      if (cResult[0] === gameProfileSource) {
        if (cResult[1] === location) {
          if (cResult[2] === popoutTargetElementRef) {
            if (cResult[3] === quest) {
              if (cResult[4] === sourceQuestContent) {
                let tmp5;
                if (cResult[5] === questTaskDetails) {
                  tmp5 = cResult[6];
                }
                let tmp7 = closure_14(tmp5);
                const userStatus = quest.userStatus;
                let claimedAt;
                if (userStatus != null) {
                  claimedAt = userStatus.claimedAt;
                }
                const userStatus2 = quest.userStatus;
                let claimedAt1;
                const tmp10 = null != claimedAt;
                const useQuestFormattedDate = hooks_QuestHooks.useQuestFormattedDate;
                hooks_QuestHooks;
                if (userStatus2 != null) {
                  claimedAt1 = userStatus2.claimedAt;
                }
                const questFormattedDate = useQuestFormattedDate(claimedAt1);
                if (tmp10) {
                  let tmp14;
                  if (cResult[7] !== questFormattedDate) {
                    const intl = intl13.intl;
                    const obj3 = { claimDate: questFormattedDate };
                    const formatToPlainStringResult = intl.formatToPlainString(intl13.t.lOVr0O, obj3);
                    cResult[7] = questFormattedDate;
                    cResult[8] = formatToPlainStringResult;
                    tmp14 = formatToPlainStringResult;
                  } else {
                    tmp14 = cResult[8];
                  }
                  tmp7 = tmp14;
                }
                return tmp7;
              }
            }
          }
        }
      }
      const obj4 = {
        quest,
        taskDetails: questTaskDetails,
        location,
        sourceQuestContent,
        popoutTargetElementRef,
        gameProfileSource,
      };
      cResult[0] = gameProfileSource;
      cResult[1] = location;
      cResult[2] = popoutTargetElementRef;
      cResult[3] = quest;
      cResult[4] = sourceQuestContent;
      cResult[5] = questTaskDetails;
      cResult[6] = obj4;
      tmp5 = obj4;
    }
  : (quest, sourceQuestContent, location, gameProfileSource, popoutTargetElementRef) => {
      const obj = hooks_QuestHooks;
      const obj2 = {
        quest,
        taskDetails: obj.useQuestTaskDetails(quest),
        location,
        sourceQuestContent,
        popoutTargetElementRef,
        gameProfileSource,
      };
      let formatToPlainStringResult = closure_14(obj2);
      const userStatus = quest.userStatus;
      let claimedAt1;
      if (userStatus != null) {
        claimedAt1 = userStatus.claimedAt;
      }
      const tmp5 = null != claimedAt1;
      hooks_QuestHooks;
      const userStatus2 = quest.userStatus;
      if (userStatus2 != null) {
        const claimedAt = userStatus2.claimedAt;
      }
      if (tmp5) {
        const intl = intl13.intl;
        const obj3 = { claimDate: tmp7 };
        formatToPlainStringResult = intl.formatToPlainString(intl13.t.lOVr0O, obj3);
      }
      return formatToPlainStringResult;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activeScreen;
      let currentUser;
      let hasAlreadyLinked;
      let isExpanded;
      let onClickGameTitle;
      let onGameSheetClosed;
      let onGameSheetOpened;
      let popoutTargetElementRef;
      let quest;
      let sourceQuestContent;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(27);
      ({
        quest,
        sourceQuestContent,
        popoutTargetElementRef,
        onGameSheetOpened,
        onGameSheetClosed,
        hasAlreadyLinked,
        onClickGameTitle,
        isExpanded,
        activeScreen,
      } = arg0);
      const rewardsExpireAt = quest.config.rewardsConfig.rewardsExpireAt;
      const obj2 = hooks_QuestHooks;
      const questFormattedDate = obj2.useQuestFormattedDate(rewardsExpireAt);
      const obj3 = hooks_QuestHooks;
      const questTaskDetails = obj3.useQuestTaskDetails(quest);
      const obj4 = hooks_QuestHooks;
      const thirdPartyTaskDetails = obj4.useThirdPartyTaskDetails(quest);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const userStatus = quest.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const userStatus2 = quest.userStatus;
      let enrolledAt;
      const tmp12 = null != completedAt;
      if (userStatus2 != null) {
        enrolledAt = userStatus2.enrolledAt;
      }
      const tmp14 = null != enrolledAt;
      const tmp15 = questTaskDetails.percentComplete > 0;
      hooks_QuestHooks;
      if (cResult[2] === onGameSheetClosed) {
        if (cResult[3] === onGameSheetOpened) {
          if (cResult[4] === popoutTargetElementRef) {
            if (cResult[5] === quest) {
              if (cResult[6] === sourceQuestContent) {
                if (tmp12) {
                  let tmp40;
                  if (cResult[9] !== questFormattedDate) {
                    const intl9 = intl13.intl;
                    const obj5 = { expirationDate: questFormattedDate };
                    const formatToPlainStringResult = intl9.formatToPlainString(intl13.t.APddvF, obj5);
                    cResult[9] = questFormattedDate;
                    cResult[10] = formatToPlainStringResult;
                    tmp40 = formatToPlainStringResult;
                  } else {
                    tmp40 = cResult[10];
                  }
                  return tmp40;
                } else {
                  const tmpResult9 = QuestTaskUtils;
                  if (tmpResult9.hasAchievementInGameTask(quest)) {
                    if (false === hasAlreadyLinked) {
                      let tmp38;
                      const _Symbol5 = Symbol;
                      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl8 = intl13.intl;
                        const stringResult = intl8.string(intl13.t.mAdqf7);
                        cResult[11] = stringResult;
                        tmp38 = stringResult;
                      } else {
                        tmp38 = cResult[11];
                      }
                      return tmp38;
                    }
                  }
                  const tmpResult10 = QuestTaskUtils;
                  if (isExpanded) {
                    if (tmpResult10.hasAchievementInGameTask(quest)) {
                      if (true === hasAlreadyLinked) {
                        let formatResult;
                        const gameTitle = quest.config.messages.gameTitle;
                        if (cResult[12] === gameTitle) {
                          let tmp36;
                          if (cResult[13] === onClickGameTitle) {
                            tmp36 = cResult[14];
                          }
                          return tmp36;
                        }
                        if (null != onClickGameTitle) {
                          const intl7 = intl13.intl;
                          const obj6 = { gameTitle, onClickGameTitle };
                          formatResult = intl7.format(intl13.t.X8hBDz, obj6);
                        } else {
                          const intl6 = intl13.intl;
                          const obj7 = { gameTitle };
                          formatResult = intl6.format(intl13.t.u3mdpP, obj7);
                        }
                        cResult[12] = gameTitle;
                        cResult[13] = onClickGameTitle;
                        cResult[14] = formatResult;
                        tmp36 = formatResult;
                      }
                    }
                    if (activeScreen !== QuestTypes.TaskPlatformScreen.SELECT) {
                      const tmpResult11 = utils_QuestUtils;
                      if (tmpResult11.isSponsoredPlayQuest(quest)) {
                        if (tmp14) {
                          if (!tmp15) {
                            if (cResult[15] === stateFromStores) {
                              if (cResult[16] === quest.config) {
                                let tmp33;
                                if (cResult[17] === questTaskDetails.targetMinutes) {
                                  tmp33 = cResult[18];
                                }
                                return tmp33;
                              }
                            }
                            const tmpResult12 = QuestRewardUtils;
                            const defaultRewardNameWithArticle = tmpResult12.getDefaultRewardNameWithArticle(
                              quest.config,
                              stateFromStores,
                            );
                            const intl5 = intl13.intl;
                            const obj8 = {
                              rewardNameWithArticle: defaultRewardNameWithArticle,
                              targetMinutes: questTaskDetails.targetMinutes,
                            };
                            const formatResult1 = intl5.format(intl13.t["1votF6"], obj8);
                            cResult[15] = stateFromStores;
                            cResult[16] = quest.config;
                            cResult[17] = questTaskDetails.targetMinutes;
                            cResult[18] = formatResult1;
                            tmp33 = formatResult1;
                          }
                        }
                      }
                    }
                    return tmp20;
                  } else if (tmpResult10.hasWatchVideoTasks(quest)) {
                    let tmp31;
                    const _Symbol4 = Symbol;
                    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = intl13.intl;
                      const stringResult1 = intl4.string(intl13.t["o+e9yh"]);
                      cResult[19] = stringResult1;
                      tmp31 = stringResult1;
                    } else {
                      tmp31 = cResult[19];
                    }
                    return tmp31;
                  } else if (tmp21 > 0) {
                    const tmpResult13 = QuestTaskUtils;
                    if (tmpResult13.hasAchievementInGameTask(quest)) {
                      if (true === hasAlreadyLinked) {
                        let tmp29;
                        const _Symbol3 = Symbol;
                        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = intl13.intl;
                          const stringResult2 = intl3.string(intl13.t.JkyCIO);
                          cResult[20] = stringResult2;
                          tmp29 = stringResult2;
                        } else {
                          tmp29 = cResult[20];
                        }
                        return tmp29;
                      }
                    }
                    if (tmp17) {
                      if (cResult[22] === quest) {
                        if (cResult[23] === thirdPartyTaskDetails) {
                          let tmp27;
                          if (cResult[24] === questTaskDetails) {
                            tmp27 = cResult[25];
                          }
                          return tmp27;
                        }
                      }
                      const obj9 = { quest, taskDetails: questTaskDetails, thirdPartyTaskDetails };
                      const tmpResult14 = QuestCopyUtils;
                      const contextualEntrypointHeading = tmpResult14.getContextualEntrypointHeading(obj9);
                      cResult[22] = quest;
                      cResult[23] = thirdPartyTaskDetails;
                      cResult[24] = questTaskDetails;
                      cResult[25] = contextualEntrypointHeading;
                      tmp27 = contextualEntrypointHeading;
                    } else {
                      let tmp24;
                      const _Symbol2 = Symbol;
                      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl2 = intl13.intl;
                        const stringResult3 = intl2.string(intl13.t.mOrpXG);
                        cResult[21] = stringResult3;
                        tmp24 = stringResult3;
                      } else {
                        tmp24 = cResult[21];
                      }
                      return tmp24;
                    }
                  } else {
                    let tmp22;
                    const _Symbol = Symbol;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = intl13.intl;
                      const stringResult4 = intl.string(intl13.t.S6UUc5);
                      cResult[26] = stringResult4;
                      tmp22 = stringResult4;
                    } else {
                      tmp22 = cResult[26];
                    }
                    return tmp22;
                  }
                }
              }
            }
          }
        }
      }
      cResult[2] = onGameSheetClosed;
      cResult[3] = onGameSheetOpened;
      cResult[4] = popoutTargetElementRef;
      cResult[5] = quest;
      cResult[6] = sourceQuestContent;
      cResult[7] = questTaskDetails;
      cResult[8] = {
        quest,
        location: metroImportAll.QUESTS_BAR,
        taskDetails: questTaskDetails,
        sourceQuestContent,
        popoutTargetElementRef,
        onGameSheetOpened,
        onGameSheetClosed,
        gameProfileSource: GameProfileAnalyticUtils.GameProfileSources.QuestBar,
      };
      ({
        quest,
        location: metroImportAll.QUESTS_BAR,
        taskDetails: questTaskDetails,
        sourceQuestContent,
        popoutTargetElementRef,
        onGameSheetOpened,
        onGameSheetClosed,
        gameProfileSource: GameProfileAnalyticUtils.GameProfileSources.QuestBar,
      });
    }
  : (arg0) => {
      let activeScreen;
      let currentUser;
      let hasAlreadyLinked;
      let isExpanded;
      let onClickGameTitle;
      let onGameSheetClosed;
      let onGameSheetOpened;
      let popoutTargetElementRef;
      let quest;
      let sourceQuestContent;
      ({ quest, hasAlreadyLinked, onClickGameTitle } = arg0);
      ({ isExpanded, sourceQuestContent, activeScreen, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } =
        arg0);
      const rewardsExpireAt = quest.config.rewardsConfig.rewardsExpireAt;
      const obj = hooks_QuestHooks;
      const questFormattedDate = obj.useQuestFormattedDate(rewardsExpireAt);
      const obj2 = hooks_QuestHooks;
      const questTaskDetails = obj2.useQuestTaskDetails(quest);
      const obj3 = hooks_QuestHooks;
      const thirdPartyTaskDetails = obj3.useThirdPartyTaskDetails(quest);
      const items = [UserStore];
      const userStatus = quest.userStatus;
      let completedAt;
      const obj4 = get_initialized;
      const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const userStatus2 = quest.userStatus;
      let enrolledAt;
      const tmp8 = null != completedAt;
      if (userStatus2 != null) {
        enrolledAt = userStatus2.enrolledAt;
      }
      const tmp10 = null != enrolledAt;
      const tmp11 = questTaskDetails.percentComplete > 0;
      ({
        quest,
        location: metroImportAll.QUESTS_BAR,
        taskDetails: questTaskDetails,
        sourceQuestContent,
        popoutTargetElementRef,
        onGameSheetOpened,
        onGameSheetClosed,
        gameProfileSource: GameProfileAnalyticUtils.GameProfileSources.QuestBar,
      });
      const tmpResult = hooks_QuestHooks;
      const isQuestProgressing = tmpResult.useIsQuestProgressing(quest);
      if (tmp8) {
        const intl9 = intl13.intl;
        const obj6 = { expirationDate: questFormattedDate };
        return intl9.formatToPlainString(intl13.t.APddvF, obj6);
      } else {
        const tmpResult7 = QuestTaskUtils;
        if (tmpResult7.hasAchievementInGameTask(quest)) {
          if (false === hasAlreadyLinked) {
            const intl8 = intl13.intl;
            return intl8.string(intl13.t.mAdqf7);
          }
        }
        const tmpResult8 = QuestTaskUtils;
        if (isExpanded) {
          if (tmpResult8.hasAchievementInGameTask(quest)) {
            if (true === hasAlreadyLinked) {
              let formatResult;
              const gameTitle = quest.config.messages.gameTitle;
              if (null != onClickGameTitle) {
                const intl7 = intl13.intl;
                const obj7 = { gameTitle, onClickGameTitle };
                formatResult = intl7.format(intl13.t.X8hBDz, obj7);
              } else {
                const intl6 = intl13.intl;
                const obj8 = { gameTitle };
                formatResult = intl6.format(intl13.t.u3mdpP, obj8);
              }
              return formatResult;
            }
          }
          if (activeScreen !== QuestTypes.TaskPlatformScreen.SELECT) {
            const tmpResult9 = utils_QuestUtils;
            if (tmpResult9.isSponsoredPlayQuest(quest)) {
              if (tmp10) {
                if (!tmp11) {
                  const tmpResult10 = QuestRewardUtils;
                  const defaultRewardNameWithArticle = tmpResult10.getDefaultRewardNameWithArticle(
                    quest.config,
                    stateFromStores,
                  );
                  const intl5 = intl13.intl;
                  const obj9 = {
                    rewardNameWithArticle: defaultRewardNameWithArticle,
                    targetMinutes: questTaskDetails.targetMinutes,
                  };
                  return intl5.format(intl13.t["1votF6"], obj9);
                }
              }
            }
          }
          return tmp13;
        } else {
          let stringResult;
          if (tmpResult8.hasWatchVideoTasks(quest)) {
            const intl4 = intl13.intl;
            stringResult = intl4.string(intl13.t["o+e9yh"]);
          } else if (tmp14 > 0) {
            let stringResult1;
            const tmpResult11 = QuestTaskUtils;
            if (tmpResult11.hasAchievementInGameTask(quest)) {
              if (true === hasAlreadyLinked) {
                const intl3 = intl13.intl;
                stringResult1 = intl3.string(intl13.t.JkyCIO);
              }
              stringResult = stringResult1;
            }
            if (isQuestProgressing) {
              const obj10 = { quest, taskDetails: questTaskDetails, thirdPartyTaskDetails };
              const getContextualEntrypointHeading = QuestCopyUtils.getContextualEntrypointHeading;
              QuestCopyUtils;
              stringResult1 = getContextualEntrypointHeading(obj10);
            } else {
              const intl2 = intl13.intl;
              stringResult1 = intl2.string(intl13.t.mOrpXG);
            }
          } else {
            const intl = intl13.intl;
            stringResult = intl.string(intl13.t.S6UUc5);
          }
          return stringResult;
        }
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const constants3 = {
  PLAY: 0,
  [0]: "PLAY",
  STREAM: 1,
  [1]: "STREAM",
  WATCH_VIDEO: 2,
  [2]: "WATCH_VIDEO",
  IN_GAME: 3,
  [3]: "IN_GAME",
};
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userStatus, arg1) => {
      let locale;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function u() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmpResult8 = hooks_QuestHooks;
      const questTaskDetails = tmpResult8.useQuestTaskDetails(userStatus);
      const tmpResult9 = hooks_QuestHooks;
      const first = _slicedToArray(tmpResult9.useTaskPlatformScreen(userStatus, questTaskDetails), 1)[0];
      const tmpResult10 = hooks_QuestHooks;
      const thirdPartyTaskDetails = tmpResult10.useThirdPartyTaskDetails(userStatus);
      userStatus = userStatus.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const tmp12 =
        null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
      if (null != completedAt) {
        let tmp27;
        const _Symbol4 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = intl13.intl;
          const stringResult = intl6.string(intl13.t["ij5E/5"]);
          cResult[2] = stringResult;
          tmp27 = stringResult;
        } else {
          tmp27 = cResult[2];
        }
        return tmp27;
      } else {
        let tmp15;
        const tmpResult11 = QuestTaskUtils;
        if (tmpResult11.hasAchievementInGameTask(userStatus)) {
          if (false === arg1) {
            let tmp25;
            const _Symbol3 = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = intl13.intl;
              const stringResult1 = intl5.string(intl13.t.s9r2a1);
              cResult[3] = stringResult1;
              tmp25 = stringResult1;
            } else {
              tmp25 = cResult[3];
            }
            return tmp25;
          }
        }
        const tmpResult12 = QuestTaskUtils;
        if (tmpResult12.hasAchievementInGameTask(userStatus)) {
          if (true === arg1) {
            if (0 === tmp12) {
              let tmp23;
              const _Symbol2 = Symbol;
              if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = intl13.intl;
                const stringResult2 = intl4.string(intl13.t["2+opCy"]);
                cResult[4] = stringResult2;
                tmp23 = stringResult2;
              } else {
                tmp23 = cResult[4];
              }
              return tmp23;
            }
          }
        }
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        if (null != enrolledAt) {
          if (tmp12 > 0) {
            if (cResult[5] === stateFromStores) {
              let tmp20;
              if (cResult[6] === tmp12) {
                tmp20 = cResult[7];
              }
              return tmp20;
            }
            const tmpResult13 = NumberUtils;
            const formatPercentResult = tmpResult13.formatPercent(stateFromStores, tmp12, { roundingMode: "floor" });
            const intl3 = intl13.intl;
            const obj2 = { percent: formatPercentResult };
            const formatToPlainStringResult = intl3.formatToPlainString(intl13.t.lVZaXD, obj2);
            cResult[5] = stateFromStores;
            cResult[6] = tmp12;
            cResult[7] = formatToPlainStringResult;
            tmp20 = formatToPlainStringResult;
          }
        }
        if (first === QuestTypes.TaskPlatformScreen.SELECT) {
          let tmp18;
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl13.intl;
            const stringResult3 = intl2.string(intl13.t.EMrUHQ);
            cResult[8] = stringResult3;
            tmp18 = stringResult3;
          } else {
            tmp18 = cResult[8];
          }
          tmp15 = tmp18;
        } else if (cResult[9] !== userStatus) {
          let stringResult4;
          const tmpResult14 = QuestTaskUtils;
          const isConsoleQuestResult = tmpResult14.isConsoleQuest(userStatus);
          const intl = intl13.intl;
          const string = intl.string;
          const t = intl13.t;
          if (isConsoleQuestResult) {
            stringResult4 = string(t.mOrpXG);
          } else {
            stringResult4 = string(t["7e5k7L"]);
          }
          cResult[9] = userStatus;
          cResult[10] = stringResult4;
          tmp15 = stringResult4;
        } else {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
    }
  : (userStatus, arg1) => {
      let locale;
      const items = [LocaleStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      const obj2 = hooks_QuestHooks;
      const questTaskDetails = obj2.useQuestTaskDetails(userStatus);
      const obj3 = hooks_QuestHooks;
      const first = _slicedToArray(obj3.useTaskPlatformScreen(userStatus, questTaskDetails), 1)[0];
      const obj4 = hooks_QuestHooks;
      const thirdPartyTaskDetails = obj4.useThirdPartyTaskDetails(userStatus);
      userStatus = userStatus.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      const tmp8 =
        null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
      if (null != completedAt) {
        const intl6 = intl13.intl;
        return intl6.string(intl13.t["ij5E/5"]);
      } else {
        let stringResult;
        const tmpResult = QuestTaskUtils;
        if (tmpResult.hasAchievementInGameTask(userStatus)) {
          if (false === arg1) {
            const intl5 = intl13.intl;
            return intl5.string(intl13.t.s9r2a1);
          }
        }
        const tmpResult4 = QuestTaskUtils;
        if (tmpResult4.hasAchievementInGameTask(userStatus)) {
          if (true === arg1) {
            if (0 === tmp8) {
              const intl4 = intl13.intl;
              return intl4.string(intl13.t["2+opCy"]);
            }
          }
        }
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        if (null != enrolledAt) {
          if (tmp8 > 0) {
            const tmpResult5 = NumberUtils;
            const formatPercentResult = tmpResult5.formatPercent(stateFromStores, tmp8, { roundingMode: "floor" });
            const intl3 = intl13.intl;
            const obj5 = { percent: formatPercentResult };
            return intl3.formatToPlainString(intl13.t.lVZaXD, obj5);
          }
        }
        if (first === QuestTypes.TaskPlatformScreen.SELECT) {
          const intl2 = intl13.intl;
          stringResult = intl2.string(intl13.t.EMrUHQ);
        } else {
          const tmpResult6 = QuestTaskUtils;
          const isConsoleQuestResult = tmpResult6.isConsoleQuest(userStatus);
          const intl = intl13.intl;
          const string = intl.string;
          const t = intl13.t;
          if (isConsoleQuestResult) {
            stringResult = string(t.mOrpXG);
          } else {
            stringResult = string(t["7e5k7L"]);
          }
        }
        return stringResult;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== quest) {
        const tmp4 = getSimplifiedQuestTaskType(quest);
        cResult[0] = quest;
        cResult[1] = tmp4;
        tmp2 = tmp4;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => getSimplifiedQuestTaskType(closure_0), items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let application;
      let quest;
      let shortText;
      const obj = react2;
      const cResult = obj.c(11);
      ({ quest, application, shortText } = arg0);
      const tmp5 = closure_17(quest);
      const tmpResult = hooks_QuestHooks;
      const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
      if (constants3.PLAY === tmp5) {
        let tmp30;
        const features2 = quest.config.features;
        let hasItem = features2.includes(constants2.MOBILE_ACTIVITY_QUEST);
        if (hasItem) {
          let tmp27Result = null == application;
          if (!tmp27Result) {
            let supported_platforms;
            const tmp27 = isActivitySupportedOnClientPlatformDefault;
            if (application != null) {
              const embeddedActivityConfig2 = application.embeddedActivityConfig;
              if (embeddedActivityConfig2 != null) {
                supported_platforms = embeddedActivityConfig2.supported_platforms;
              }
            }
            tmp27Result = tmp27(supported_platforms);
          }
          hasItem = tmp27Result;
        }
        if (hasItem) {
          const features3 = quest.config.features;
          if (features3.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
            let first;
            const _Symbol3 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = intl13.intl;
              const stringResult = intl6.string(intl13.t["+qoymD"]);
              cResult[0] = stringResult;
              first = stringResult;
            } else {
              first = cResult[0];
            }
            return first;
          } else {
            const tmpResult4 = utils_QuestUtils;
            if (tmpResult4.canLaunchActivity(quest)) {
              let tmp32;
              if (cResult[1] !== (undefined !== shortText && shortText)) {
                const intl5 = intl13.intl;
                const string2 = intl5.string;
                const t2 = intl13.t;
                const string2Result = string2(undefined !== shortText && shortText ? t2.E4kW5O : t2["Ie9++s"]);
                cResult[1] = undefined !== shortText && shortText;
                cResult[2] = string2Result;
                tmp32 = string2Result;
              } else {
                tmp32 = cResult[2];
              }
              return tmp32;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl13.intl;
          const stringResult1 = intl4.string(intl13.t.l7E81v);
          cResult[3] = stringResult1;
          tmp30 = stringResult1;
        } else {
          tmp30 = cResult[3];
        }
        return tmp30;
      } else if (constants3.STREAM === tmp5) {
        let tmp20;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl13.intl;
          const stringResult2 = intl3.string(intl13.t.l7E81v);
          cResult[4] = stringResult2;
          tmp20 = stringResult2;
        } else {
          tmp20 = cResult[4];
        }
        return tmp20;
      } else if (constants3.WATCH_VIDEO === tmp5) {
        let tmp17;
        if (cResult[5] !== questTaskDetails) {
          const tmpResult5 = MobileQuestVideoWatchCtaCopy;
          const videoQuestWatchCtaText = tmpResult5.getVideoQuestWatchCtaText(questTaskDetails);
          cResult[5] = questTaskDetails;
          cResult[6] = videoQuestWatchCtaText;
          tmp17 = videoQuestWatchCtaText;
        } else {
          tmp17 = cResult[6];
        }
        return tmp17;
      } else if (constants3.IN_GAME === tmp5) {
        let tmp8;
        if (cResult[7] === application) {
          if (cResult[8] === quest) {
            if (cResult[9] === (undefined !== shortText && shortText)) {
              tmp8 = cResult[10];
            }
            return tmp8;
          }
        }
        const tmpResult6 = utils_QuestUtils;
        if (tmpResult6.canLaunchActivity(quest)) {
          let stringResult3;
          const features = quest.config.features;
          let hasItem1 = features.includes(constants2.MOBILE_ACTIVITY_QUEST);
          if (hasItem1) {
            let tmp14Result = null == application;
            if (!tmp14Result) {
              let supported_platforms1;
              const tmp14 = isActivitySupportedOnClientPlatformDefault;
              if (application != null) {
                const embeddedActivityConfig = application.embeddedActivityConfig;
                if (embeddedActivityConfig != null) {
                  supported_platforms1 = embeddedActivityConfig.supported_platforms;
                }
              }
              tmp14Result = tmp14(supported_platforms1);
            }
            hasItem1 = tmp14Result;
          }
          if (hasItem1) {
            const intl2 = intl13.intl;
            const string = intl2.string;
            const t = intl13.t;
            stringResult3 = string(tmp4 ? t.CkUzLd : t["hRIVy+"]);
          }
          cResult[7] = application;
          cResult[8] = quest;
          cResult[9] = undefined !== shortText && shortText;
          cResult[10] = stringResult3;
          tmp8 = stringResult3;
        }
        const intl = intl13.intl;
        stringResult3 = intl.string(intl13.t.l7E81v);
      }
    }
  : (arg0) => {
      let application;
      let quest;
      let shortText;
      ({ quest, application, shortText } = arg0);
      if (shortText === undefined) {
        shortText = false;
      }
      const tmp = closure_17(quest);
      hooks_QuestHooks;
      if (constants3.PLAY === tmp) {
        const features2 = quest.config.features;
        let hasItem = features2.includes(constants2.MOBILE_ACTIVITY_QUEST);
        if (hasItem) {
          let tmp20Result = null == application;
          if (!tmp20Result) {
            let supported_platforms;
            const tmp20 = isActivitySupportedOnClientPlatformDefault;
            if (application != null) {
              const embeddedActivityConfig2 = application.embeddedActivityConfig;
              if (embeddedActivityConfig2 != null) {
                supported_platforms = embeddedActivityConfig2.supported_platforms;
              }
            }
            tmp20Result = tmp20(supported_platforms);
          }
          hasItem = tmp20Result;
        }
        if (hasItem) {
          const features3 = quest.config.features;
          if (features3.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
            const intl6 = intl13.intl;
            return intl6.string(intl13.t["+qoymD"]);
          } else {
            const tmp2Result = utils_QuestUtils;
            if (tmp2Result.canLaunchActivity(quest)) {
              const intl5 = intl13.intl;
              const string2 = intl5.string;
              const t2 = intl13.t;
              return string2(shortText ? t2.E4kW5O : t2["Ie9++s"]);
            }
          }
        }
        const intl4 = intl13.intl;
        return intl4.string(intl13.t.l7E81v);
      } else if (constants3.STREAM === tmp) {
        const intl3 = intl13.intl;
        return intl3.string(intl13.t.l7E81v);
      } else if (constants3.WATCH_VIDEO === tmp) {
        const tmp2Result3 = MobileQuestVideoWatchCtaCopy;
        return tmp2Result3.getVideoQuestWatchCtaText(tmp5);
      } else if (constants3.IN_GAME === tmp) {
        const tmp2Result4 = utils_QuestUtils;
        if (tmp2Result4.canLaunchActivity(quest)) {
          let stringResult;
          const features = quest.config.features;
          let hasItem1 = features.includes(constants2.MOBILE_ACTIVITY_QUEST);
          if (hasItem1) {
            let tmp12Result = null == application;
            if (!tmp12Result) {
              let supported_platforms1;
              const tmp12 = isActivitySupportedOnClientPlatformDefault;
              if (application != null) {
                const embeddedActivityConfig = application.embeddedActivityConfig;
                if (embeddedActivityConfig != null) {
                  supported_platforms1 = embeddedActivityConfig.supported_platforms;
                }
              }
              tmp12Result = tmp12(supported_platforms1);
            }
            hasItem1 = tmp12Result;
          }
          if (hasItem1) {
            const intl2 = intl13.intl;
            const string = intl2.string;
            const t = intl13.t;
            stringResult = string(shortText ? t.CkUzLd : t["hRIVy+"]);
          }
          return stringResult;
        }
        const intl = intl13.intl;
        stringResult = intl.string(intl13.t.l7E81v);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (config) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(4);
      const obj2 = QuestRewardUtils;
      const result = obj2.isCollectibleQuestRewardPremiumExtendable(config);
      if (cResult[0] !== config) {
        const tmpResult = QuestRewardUtils;
        const result1 = tmpResult.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
        cResult[0] = config;
        cResult[1] = result1;
        tmp5 = result1;
      } else {
        tmp5 = cResult[1];
      }
      let tmp7 = null;
      if (result) {
        let tmp8;
        if (cResult[2] !== tmp5) {
          let stringResult;
          const intl = intl13.intl;
          const string = intl.string;
          const t = intl13.t;
          if (tmp5) {
            stringResult = string(t["hh7Rb/"]);
          } else {
            stringResult = string(t.GYGb3A);
          }
          cResult[2] = tmp5;
          cResult[3] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        tmp7 = tmp8;
      }
      return tmp7;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [arg0];
      [][0] = arg0;
      const memo = react.useMemo(() => {
        const obj = QuestRewardUtils;
        return obj.isCollectibleQuestRewardPremiumExtendable(closure_0);
      }, items);
      let tmp3 = null;
      if (memo) {
        let stringResult;
        const intl = require("intl").intl;
        const string = intl.string;
        const t = require("intl").t;
        if (tmp2) {
          stringResult = string(t["hh7Rb/"]);
        } else {
          stringResult = string(t.GYGb3A);
        }
        tmp3 = stringResult;
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let preCtaClick;
      const tmp2 = preCtaClick;
      let obj = quest(preCtaClick[10]);
      const cResult = obj.c(15);
      quest = quest.quest;
      const questContent = quest.questContent;
      preCtaClick = quest.preCtaClick;
      const getImpressionId = quest.getImpressionId;
      const sourceQuestContent = quest.sourceQuestContent;
      if (cResult[0] === getImpressionId) {
        if (cResult[1] === preCtaClick) {
          if (cResult[2] === quest) {
            if (cResult[3] === questContent) {
              let tmp4;
              let tmp14;
              if (cResult[4] === sourceQuestContent) {
                tmp4 = cResult[5];
              }
              const ctaConfig = quest.config.ctaConfig;
              let subtitle;
              if (ctaConfig != null) {
                subtitle = ctaConfig.subtitle;
              }
              if (null == subtitle) {
                const tmpResult = quest(tmp2[13]);
                if (tmpResult.hasAchievementInGameTask(quest)) {
                  subtitle = quest.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle;
                } else {
                  let tmp12;
                  const tmpResult4 = quest(tmp2[12]);
                  const questType = tmpResult4.getQuestType(quest.config);
                  if (questType === quest(tmp2[29]).QuestType.GAMEPLAY) {
                    const features = quest.config.features;
                    if (!features.includes(constants2.NON_GAMING_PLAY_QUEST)) {
                      const tmpResult5 = quest(tmp2[12]);
                      if (!tmpResult5.isSponsoredPlayQuest(quest)) {
                        let tmp9;
                        const _Symbol = Symbol;
                        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = tmp(tmp2[8]).intl;
                          const stringResult = intl.string(quest(tmp2[8]).t["wirwN+"]);
                          cResult[6] = stringResult;
                          tmp9 = stringResult;
                        } else {
                          tmp9 = cResult[6];
                        }
                        subtitle = tmp9;
                      }
                    }
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[8]).intl;
                    const stringResult1 = intl2.string(quest(tmp2[8]).t.y8Xf3k);
                    cResult[7] = stringResult1;
                    tmp12 = stringResult1;
                  } else {
                    tmp12 = cResult[7];
                  }
                  subtitle = tmp12;
                }
              }
              if (cResult[8] !== quest) {
                const tmpResult6 = quest(tmp2[23]);
                const externalCtaLabel = tmpResult6.getExternalCtaLabel(quest);
                cResult[8] = quest;
                cResult[9] = externalCtaLabel;
                tmp14 = externalCtaLabel;
              } else {
                tmp14 = cResult[9];
              }
              if (cResult[10] === tmp4) {
                if (cResult[11] === subtitle) {
                  if (cResult[12] === quest.config.messages.gameTitle) {
                    let tmp16;
                    if (cResult[13] === tmp14) {
                      tmp16 = cResult[14];
                    }
                    return tmp16;
                  }
                }
              }
              let obj2 = {
                ctaText: tmp14,
                ctaVariant: "secondary",
                onClickCta: tmp4,
                title: quest.config.messages.gameTitle,
                subtitle,
                ctaIconPosition: "end",
              };
              cResult[10] = tmp4;
              cResult[11] = subtitle;
              cResult[12] = quest.config.messages.gameTitle;
              cResult[13] = tmp14;
              cResult[14] = obj2;
              tmp16 = obj2;
            }
          }
        }
      }
      let closure_0 = getImpressionId(function* () {
        let content;
        let tmp4;
        let v3;
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            v3 = 2;
            if (0 === content) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let tmp9;
                if (v3 != null) {
                  tmp9 = v3();
                }
                content = 1;
                v3 = 1;
                const obj4 = { value: tmp9, done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const obj5 = {
                content,
                ctaContent: tmp3(preCtaClick[28]).QuestContentCTA.OPEN_GAME_LINK,
                impressionId: tmp4,
                sourceQuestContent,
              };
              const openGameLinkDirectly = tmp3(preCtaClick[27]).openGameLinkDirectly;
              const tmp17 = tmp3(preCtaClick[27]);
              tmp4 = undefined;
              if (getImpressionId != null) {
                tmp4 = getImpressionId();
              }
              openGameLinkDirectly(tmp3, obj5);
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            v3 = 3;
            throw tmp10;
          }
        }
      });
      function defaultOnClickCta() {
        return closure_0(...arguments);
      }
      cResult[0] = getImpressionId;
      cResult[1] = preCtaClick;
      cResult[2] = quest;
      cResult[3] = questContent;
      cResult[4] = sourceQuestContent;
      cResult[5] = defaultOnClickCta;
      tmp4 = defaultOnClickCta;
    }
  : (quest) => {
      let memo;
      let obj2;
      quest = quest.quest;
      ({
        questContent: importDefault,
        preCtaClick: dependencyMap,
        getImpressionId: _asyncToGenerator,
        sourceQuestContent: _slicedToArray,
      } = quest);
      let obj = function _defaultOnClickCta2() {
        obj = _asyncToGenerator(async () => {
          let closure_0;
          let tmp4;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let tmp9;
                  if (dependencyMap != null) {
                    tmp9 = dependencyMap();
                  }
                  c1 = 1;
                  c2 = 1;
                  const obj4 = { value: tmp9, done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const obj5 = {
                  content: closure_128_1,
                  ctaContent: tmp3(c2[28]).QuestContentCTA.OPEN_GAME_LINK,
                  impressionId: tmp4,
                  sourceQuestContent: closure_128_4,
                };
                const openGameLinkDirectly = tmp3(c2[27]).openGameLinkDirectly;
                const tmp17 = tmp3(c2[27]);
                tmp4 = undefined;
                if (closure_128_3 != null) {
                  tmp4 = closure_128_3();
                }
                openGameLinkDirectly(closure_128_0, obj5);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp10) {
              c2 = 3;
              throw tmp10;
            }
          }
        });
        return obj(...arguments);
      };
      const items = [quest];
      obj = {
        ctaText: obj2.getExternalCtaLabel(quest),
        ctaVariant: "secondary",
        onClickCta: function defaultOnClickCta() {
          return obj(...arguments);
        },
        title: quest.config.messages.gameTitle,
        subtitle: memo,
        ctaIconPosition: "end",
      };
      memo = obj.useMemo(() => {
        const ctaConfig = quest.config.ctaConfig;
        let subtitle;
        if (ctaConfig != null) {
          subtitle = ctaConfig.subtitle;
        }
        if (null == subtitle) {
          let taskTitle;
          const obj3 = QuestTaskUtils;
          if (obj3.hasAchievementInGameTask(quest)) {
            taskTitle = quest.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle;
          } else {
            const tmp5Result = utils_QuestUtils;
            const questType = tmp5Result.getQuestType(quest.config);
            if (questType === QuestType.QuestType.GAMEPLAY) {
              const features = quest.config.features;
              if (!features.includes(constants.NON_GAMING_PLAY_QUEST)) {
                const tmp5Result2 = utils_QuestUtils;
                if (!tmp5Result2.isSponsoredPlayQuest(quest)) {
                  const intl = intl13.intl;
                  taskTitle = intl.string(intl13.t["wirwN+"]);
                }
              }
            }
            const intl2 = intl13.intl;
            taskTitle = intl2.string(intl13.t.y8Xf3k);
          }
          subtitle = taskTitle;
        }
        return subtitle;
      }, items);
      obj2 = quest(10023);
      return obj;
    };
let result = size.fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = tmp3;
export const getQuestsInstructionsToWinReward = function getQuestsInstructionsToWinReward(currentUser) {
  const obj = { currentUser };
  const merged = Object.assign(currentUser);
  currentUser = currentUser.currentUser;
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return _getQuestsInstructionsToWinReward(obj);
};
export const useQuestsInstructionsToWinReward = tmp4;
export const useQuestDescription = tmp5;
export const useQuestBarSubtitle = tmp6;
export const useQuestBarTitle = tmp7;
export const usePrimaryCtaCopy = tmp8;
export const usePremiumExtendableCopy = tmp9;
export const getRewardCodeRedemptionInstructions = function getRewardCodeRedemptionInstructions(arg0) {
  let quest;
  let rewardCode;
  let tier;
  ({ quest, rewardCode } = arg0);
  let platform;
  const obj = QuestRewardUtils;
  const result = obj.isTieredRewardCodeQuest({ quest });
  if (rewardCode != null) {
    platform = rewardCode.platform;
  }
  if (platform == null) {
    platform = QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  let rewardCodeQuestReward = null;
  if (result) {
    const obj2 = { quest, idx: tier };
    tier = undefined;
    const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
    QuestRewardUtils;
    if (rewardCode != null) {
      tier = rewardCode.tier;
    }
    if (tier == null) {
      const userStatus = quest.userStatus;
      let claimedTier;
      if (userStatus != null) {
        claimedTier = userStatus.claimedTier;
      }
      tier = claimedTier;
    }
    rewardCodeQuestReward = getRewardCodeQuestReward(obj2);
  }
  let prop;
  const tmpResult2 = QuestCopyUtils;
  const defaultReward = tmpResult2.getDefaultReward(quest.config);
  if (rewardCodeQuestReward != null) {
    const messages = rewardCodeQuestReward.messages;
    if (messages != null) {
      prop = messages.redemptionInstructionsByPlatform;
    }
  }
  if (prop == null) {
    prop = defaultReward.messages.redemptionInstructionsByPlatform;
  }
  let tmp11;
  if (null != platform) {
    tmp11 = prop[platform];
  }
  return tmp11;
};
export const useModalCtaConfig = tmp10;
