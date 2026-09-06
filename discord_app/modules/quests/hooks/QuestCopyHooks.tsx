// discord_app/modules/quests/hooks/QuestCopyHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import isActivitySupportedOnClientPlatformDefault from "../../activities/utils/isActivitySupportedOnClientPlatform.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import hooks_QuestHooks from "QuestHooks.tsx";
import useInGameQuestConnectState from "../useInGameQuestConnectState.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const util = v1votF6(1114);
const utils_QuestUtils = v1votF6(7722);
const GameProfileAnalyticUtils = tmp2(8686);
const SponsoredQuestUtils = v1votF6(11776);
require = fn;
function _getQuestsInstructionsToWinReward(arg0) {
  ({ quest, taskDetails, thirdPartyTaskDetails, withoutMarkdown, currentUser, onGameTitleClick } = arg0);
  let v1votF6 = require;
  let obj = dependencyMap;
  ({ sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, needsToConnect } = arg0);
  let obj1 = PremiumTypeUtils;
  const isPremiumResult = obj1.isPremium(currentUser, PremiumTypes.TIER_2);
  let obj2 = QuestRewardUtils;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(quest.config);
  let obj3 = QuestTaskUtils;
  let isConsoleQuestResult = obj3.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = QuestTaskUtils.shouldUsePlayOnDesktopTask(quest);
    const v1votF6Result = QuestTaskUtils;
  }
  const v1votF6Result1 = utils_QuestUtils;
  const isSponsoredPlayQuestResult = utils_QuestUtils.isSponsoredPlayQuest(quest);
  const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, currentUser);
  if (isSponsoredPlayQuestResult) {
    ({ targetMinutes: targetMinutes4, applications } = taskDetails);
    if (withoutMarkdown) {
      const intl12 = util.intl;
      v1votF6 = util.t["1votF6"];
      obj = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: targetMinutes4 };
      let formatToPlainStringResult = intl12.formatToPlainString(v1votF6, obj);
    } else {
      obj = {
        quest,
        sourceQuestContent,
        applications: null,
        popoutTargetElementRef: null,
        onGameSheetOpened: null,
        onGameSheetClosed: null,
      };
      if (applications == null) {
        applications = [];
      }
      obj.applications = applications;
      obj.popoutTargetElementRef = popoutTargetElementRef;
      obj.onGameSheetOpened = onGameSheetOpened;
      obj.onGameSheetClosed = onGameSheetClosed;
      obj = {};
      const gameSheetHook = SponsoredQuestUtils.createGameSheetHook(obj);
      obj[constants2.PACKAGE_ACTION_ADVENTURE] = util.t.H485IA;
      obj[constants2.PACKAGE_RPG_MMO] = util.t["3XS8Ni"];
      obj[constants2.PACKAGE_RACING_SPORTS] = util.t["X+UCju"];
      obj[constants2.PACKAGE_SANDBOX_CREATIVE] = util.t["6o4n1Q"];
      obj[constants2.PACKAGE_FAMILY_FRIENDLY] = util.t.DUsNmf;
      obj[constants2.PACKAGE_HOLIDAY_SEASON] = util.t["cWP8/Z"];
      obj[constants2.PACKAGE_NEW_YEARS] = util.t["8+sIJz"];
      let features = quest.config.features;
      const found = features.find((item) => item in obj);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj[found];
      }
      if (CDeHul == null) {
        CDeHul = util.t.CDeHul;
      }
      const intl11 = util.intl;
      obj1 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: targetMinutes4, gameSheetHook };
      formatToPlainStringResult = intl11.format(CDeHul, obj1);
      const v1votF6Result3 = SponsoredQuestUtils;
    }
  } else if (isConsoleQuestResult) {
    const targetMinutes3 = taskDetails.targetMinutes;
    const result = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
    const v1votF6Result4 = QuestRewardUtils;
    const features4 = quest.config.features;
    const result1 = QuestRewardUtils.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
    const hasItem = features4.includes(constants2.NON_GAMING_PLAY_QUEST);
    if (isPremiumResult) {
      if (result) {
        if (!result1) {
          const t25 = util.t;
          if (hasItem) {
            let v1AcTqm = t25["1AcTqm"];
          } else {
            v1AcTqm = tmp82 ? t25.klYWbT : t25.ziB0HF;
          }
        }
        if (!hasItem) {
          if (null != collectibleQuestRewardDuration) {
            const t27 = util.t;
          } else {
            const t26 = util.t;
          }
        }
        if (null != collectibleQuestRewardDuration) {
          let ztXW8V2 = util.t.u5QXpw;
        } else {
          ztXW8V2 = util.t.ztXW8V;
        }
      }
    }
    if (!result) {
      if (null == collectibleQuestRewardDuration) {
        const t23 = util.t;
        if (hasItem) {
          let prop = t23["e+K3xJ"];
        } else {
          prop = tmp82 ? t23.GFdaUK : t23.NIimTt;
        }
        obj2 = {
          gameTitle: quest.config.messages.gameTitle,
          streamingDurationRequirement: targetMinutes3,
          rewardNameWithArticle: defaultRewardNameWithArticle,
          duration: collectibleQuestRewardDuration,
          targetMinutes: targetMinutes3,
          onGameTitleClick,
        };
        const intl10 = util.intl;
        if (withoutMarkdown) {
          let formatToPlainStringResult1 = intl10.formatToPlainString(prop, obj2);
        } else {
          formatToPlainStringResult1 = intl10.format(prop, obj2);
        }
      }
    }
    const t24 = util.t;
    if (hasItem) {
      let enQ3jU2 = t24.enQ3jU;
    } else {
      enQ3jU2 = tmp82 ? t24["4JS2QJ"] : t24.AwuMRS;
    }
    const v1votF6Result5 = QuestRewardUtils;
  } else {
    if (v1votF6Result6.isConsoleQuest(quest)) {
      const targetMinutes2 = taskDetails.targetMinutes;
      const result2 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
      const v1votF6Result7 = QuestRewardUtils;
      if (isPremiumResult) {
        if (result2) {
          if (!v1votF6Result8.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
            const t20 = util.t;
          }
          if (null == collectibleQuestRewardDuration) {
            const t21 = util.t;
          }
          const t22 = util.t;
        }
      }
      if (!result2) {
        if (null == collectibleQuestRewardDuration) {
          const t18 = util.t;
          const tmp70 = tmp69 ? t18.GFdaUK : t18.NIimTt;
          obj3 = {
            gameTitle: quest.config.messages.gameTitle,
            targetMinutes: targetMinutes2,
            rewardNameWithArticle: defaultRewardNameWithArticle,
            duration: collectibleQuestRewardDuration,
            streamingDurationRequirement: targetMinutes2,
            onGameTitleClick,
          };
          const intl9 = util.intl;
          if (withoutMarkdown) {
            let formatToPlainStringResult2 = intl9.formatToPlainString(tmp70, obj3);
          } else {
            formatToPlainStringResult2 = intl9.format(tmp70, obj3);
          }
        }
      }
      const t19 = util.t;
      v1votF6Result8 = QuestRewardUtils;
    } else {
      if (v1votF6Result9.shouldUsePlayOnDesktopTask(quest)) {
        const result3 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
        const v1votF6Result10 = QuestRewardUtils;
        const features3 = quest.config.features;
        const result4 = QuestRewardUtils.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
        const hasItem1 = features3.includes(constants2.NON_GAMING_PLAY_QUEST);
        if (isPremiumResult) {
          if (result3) {
            if (!result4) {
              const t15 = util.t;
              if (hasItem1) {
                let v1AcTqm1 = t15["1AcTqm"];
              } else {
                v1AcTqm1 = tmp57 ? t15.klYWbT : t15.ziB0HF;
              }
            }
            if (!hasItem1) {
              if (null != collectibleQuestRewardDuration) {
                const t17 = util.t;
              } else {
                const t16 = util.t;
              }
            }
            if (null != collectibleQuestRewardDuration) {
              let ztXW8V = util.t.u5QXpw;
            } else {
              ztXW8V = util.t.ztXW8V;
            }
          }
        }
        if (!result3) {
          if (null == collectibleQuestRewardDuration) {
            const t13 = util.t;
            if (hasItem1) {
              let v03VJqu = t13["03VJqu"];
            } else {
              v03VJqu = tmp57 ? t13.NrD2h8 : t13.FZL5Q5;
            }
            const obj4 = {
              gameTitle: quest.config.messages.gameTitle,
              streamingDurationRequirement: taskDetails.targetMinutes,
              rewardNameWithArticle: defaultRewardNameWithArticle,
              duration: collectibleQuestRewardDuration,
              questReward: defaultRewardNameWithArticle,
              onGameTitleClick,
            };
            const intl8 = util.intl;
            if (withoutMarkdown) {
              let formatToPlainStringResult3 = intl8.formatToPlainString(v03VJqu, obj4);
            } else {
              formatToPlainStringResult3 = intl8.format(v03VJqu, obj4);
            }
          }
        }
        const t14 = util.t;
        if (hasItem1) {
          let enQ3jU = t14.enQ3jU;
        } else {
          enQ3jU = tmp57 ? t14["4JS2QJ"] : t14.AwuMRS;
        }
        const v1votF6Result11 = QuestRewardUtils;
      } else {
        const obj5 = { quest };
        if (v1votF6Result12.isTieredRewardCodeQuest(obj5)) {
          if (null != onGameTitleClick) {
            let HHVg4i = util.t.HHVg4i;
          } else {
            HHVg4i = util.t["a/ia7F"];
          }
          const obj6 = {
            gameTitle: quest.config.messages.gameTitle,
            streamingDurationRequirement: taskDetails.targetMinutes,
            onGameTitleClick,
          };
          const intl7 = util.intl;
          if (withoutMarkdown) {
            let formatToPlainStringResult4 = intl7.formatToPlainString(HHVg4i, obj6);
          } else {
            formatToPlainStringResult4 = intl7.format(HHVg4i, obj6);
          }
        } else {
          const v1votF6Result13 = QuestTaskUtils;
          const v1votF6Result14 = QuestTaskUtils;
          if (hasWatchVideoTasksResult) {
            const defaultWatchVideoTask = v1votF6Result14.getDefaultWatchVideoTask(quest.config);
            let str;
            if (defaultWatchVideoTask != null) {
              str = defaultWatchVideoTask.messages.videoTitle;
            }
            if (str == null) {
              str = "video";
            }
            const result5 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
            const v1votF6Result15 = QuestRewardUtils;
            if (result5) {
              if (isPremiumResult) {
                if (!v1votF6Result16.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                  const prop1 = util.t["vs/xBu"];
                }
                if (null != collectibleQuestRewardDuration) {
                  let tXwfJT = util.t.tXwfJT;
                } else {
                  tXwfJT = util.t["xqX+r5"];
                }
              }
            }
            if (!result5) {
              if (null == collectibleQuestRewardDuration) {
                if (quest.id === React7) {
                  let Rsd5bL = util.t.Rsd5bL;
                } else {
                  Rsd5bL = util.t["g+InPC"];
                }
              }
              const obj7 = {
                videoTitle: str,
                rewardNameWithArticle: defaultRewardNameWithArticle,
                duration: collectibleQuestRewardDuration,
              };
              const intl6 = util.intl;
              if (withoutMarkdown) {
                let formatToPlainStringResult5 = intl6.formatToPlainString(Rsd5bL, obj7);
              } else {
                formatToPlainStringResult5 = intl6.format(Rsd5bL, obj7);
              }
            }
            Rsd5bL = util.t["W/HkLO"];
            v1votF6Result16 = QuestRewardUtils;
          } else if (v1votF6Result14.hasPlayActivityTask(quest)) {
            const targetMinutes = taskDetails.targetMinutes;
            if (!v1votF6Result17.isPlayAnyActivityQuest(quest)) {
              features = quest.config.features;
              if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
                const features2 = quest.config.features;
                if (features2.includes(tmp28.CLOUD_GAMING_PROVIDER_NVIDIA)) {
                  const v0NNM3l = util.t["0NNM3l"];
                  const obj8 = {
                    activityName: quest.config.messages.gameTitle,
                    providerName: "NVIDIA GeForce NOW",
                    providerLink: HelpdeskUtilsDefault.getArticleURL(
                      HelpdeskArticles.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST,
                    ),
                    streamingDurationRequirement: targetMinutes,
                    questReward: defaultRewardNameWithArticle,
                  };
                  const intl4 = util.intl;
                  if (withoutMarkdown) {
                    let formatToPlainStringResult6 = intl4.formatToPlainString(v0NNM3l, obj8);
                  } else {
                    formatToPlainStringResult6 = intl4.format(v0NNM3l, obj8);
                  }
                }
              }
              const UuzHh8 = util.t.UuzHh8;
              const obj9 = {
                activityName: quest.config.messages.gameTitle,
                streamingDurationRequirement: targetMinutes,
                questReward: defaultRewardNameWithArticle,
              };
              const intl3 = util.intl;
              if (withoutMarkdown) {
                let formatToPlainStringResult7 = intl3.formatToPlainString(UuzHh8, obj9);
              } else {
                formatToPlainStringResult7 = intl3.format(UuzHh8, obj9);
              }
              tmp28 = constants2;
            }
            const VYwSSu = util.t.VYwSSu;
            const obj10 = { streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
            const intl5 = util.intl;
            if (withoutMarkdown) {
              let formatToPlainStringResult8 = intl5.formatToPlainString(VYwSSu, obj10);
            } else {
              formatToPlainStringResult8 = intl5.format(VYwSSu, obj10);
            }
            v1votF6Result17 = utils_QuestUtils;
          } else {
            if (v1votF6Result18.hasAchievementInGameTask(quest)) {
              if (null != thirdPartyTaskDetails) {
                const result6 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
                QuestRewardUtils;
                if (needsToConnect) {
                  const t12 = util.t;
                } else {
                  if (isPremiumResult) {
                    if (result6) {
                      if (!tmp17) {
                        if (null != collectibleQuestRewardDuration) {
                          const t9 = util.t;
                        } else {
                          const t8 = util.t;
                        }
                      }
                      if (null == collectibleQuestRewardDuration) {
                        const t10 = util.t;
                      }
                      const t11 = util.t;
                    }
                  }
                  if (!result6) {
                    if (null == collectibleQuestRewardDuration) {
                      const t6 = util.t;
                      const tmp19 = tmp18 ? t6.bxN0nx : t6.thO6iA;
                      const obj11 = {
                        gameTitle: quest.config.messages.gameTitle,
                        objective: thirdPartyTaskDetails.description,
                        duration: collectibleQuestRewardDuration,
                        questReward: defaultRewardNameWithArticle,
                        onGameTitleClick,
                      };
                      const intl2 = util.intl;
                      if (withoutMarkdown) {
                        let formatToPlainStringResult9 = intl2.formatToPlainString(tmp19, obj11);
                      } else {
                        formatToPlainStringResult9 = intl2.format(tmp19, obj11);
                      }
                    }
                  }
                  const t7 = util.t;
                }
                const v1votF6Result19 = QuestRewardUtils;
              }
            }
            if (null != thirdPartyTaskDetails) {
              let description = thirdPartyTaskDetails.description;
            } else {
              const result7 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
              const v1votF6Result21 = QuestRewardUtils;
              if (isPremiumResult) {
                if (result7) {
                  if (!v1votF6Result22.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                    const t3 = util.t;
                  }
                  if (null == collectibleQuestRewardDuration) {
                    const t4 = util.t;
                  }
                  const t5 = util.t;
                }
              }
              if (!result7) {
                if (null == collectibleQuestRewardDuration) {
                  const t = util.t;
                  const tmp10 = tmp100 ? t.ER9rII : t["hkJ+Gs"];
                  const obj12 = {
                    gameTitle: quest.config.messages.gameTitle,
                    streamingDurationRequirement: taskDetails.targetMinutes,
                    duration: collectibleQuestRewardDuration,
                    questReward: defaultRewardNameWithArticle,
                    onGameTitleClick,
                  };
                  const intl = util.intl;
                  if (withoutMarkdown) {
                    description = intl.formatToPlainString(tmp10, obj12);
                  } else {
                    description = intl.format(tmp10, obj12);
                  }
                }
              }
              const t2 = util.t;
              v1votF6Result22 = QuestRewardUtils;
            }
            return description;
          }
          hasWatchVideoTasksResult = QuestTaskUtils.hasWatchVideoTasks(quest);
        }
        v1votF6Result12 = QuestRewardUtils;
      }
      v1votF6Result9 = QuestTaskUtils;
    }
    v1votF6Result6 = QuestTaskUtils;
  }
}
function useQuestsInstructionsToWinReward(arg0) {
  ({ quest, gameProfileSource, withoutMarkdown } = arg0);
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  const tmp = undefined !== withoutMarkdown && withoutMarkdown;
  const inGameQuestConnectState = useInGameQuestConnectState.useInGameQuestConnectState(quest);
  const result = QuestTaskUtils.hasAchievementInGameTask(quest);
  const obj5 = QuestTaskUtils;
  if (result) {
    let inGameApplicationId = obj5.getInGameApplicationId(quest);
  } else {
    const allApplicationIds = obj5.getAllApplicationIds(quest);
    if (allApplicationIds != null) {
      inGameApplicationId = allApplicationIds[0];
    }
  }
  obj = { applicationId: inGameApplicationId, location: constants.QUEST_INSTRUCTIONS, source: null };
  if (gameProfileSource == null) {
    gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestHome;
  }
  obj.source = gameProfileSource;
  useOpenGameProfileModalDefault(obj);
  obj = {};
  const merged = Object.assign(arg0);
  obj.currentUser = stateFromStores;
  obj.withoutMarkdown = tmp;
  obj.thirdPartyTaskDetails = thirdPartyTaskDetails;
  obj.onGameTitleClick = undefined;
  obj.needsToConnect = false === inGameQuestConnectState;
  return _getQuestsInstructionsToWinReward(obj);
}
const QuestConstants = fn(5444);
({ QuestsExperimentLocations: closure_8, ORBS_INTRO_QUEST_ID: closure_9, QuestVariants: c10 } = QuestConstants);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const PremiumTypes = fn(1373).PremiumTypes;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = function useQuestInstructionTitle(
  quest,
  arg1,
  questContent,
  sourceQuestContent,
) {
  let obj = hooks_QuestHooks;
  const targetMinutes = obj.useQuestTaskDetails(quest).targetMinutes;
  let obj1 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj1.useThirdPartyTaskDetails(quest);
  let obj2 = hooks_QuestHooks;
  obj = { quest, questContent, sourceQuestContent };
  const connectedConsoleLinkOnClick = obj2.useConnectedConsoleLinkOnClick(obj);
  let obj4 = utils_QuestUtils;
  const isSponsoredPlayQuestResult = obj4.isSponsoredPlayQuest(quest);
  let obj5 = QuestTaskUtils;
  if (obj5.isConsoleQuest(quest)) {
    let tmpResult = tmp(7724);
    obj = { quest };
    if (!tmpResult.hasPlayOnDesktopTask(obj)) {
      const intl = tmp(1114).intl;
      obj1 = {
        minutes: targetMinutes,
        onClick: connectedConsoleLinkOnClick,
        gameTitle: quest.config.messages.gameTitle,
      };
      return intl.format(tmp(1114).t["l4S+cQ"], obj1);
    }
  }
  tmpResult = tmp(7724);
  if (tmpResult.isConsoleQuest(quest)) {
    const intl7 = tmp(1114).intl;
    const format2 = intl7.format;
    const t3 = tmp(1114).t;
    if (isSponsoredPlayQuestResult) {
      obj2 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
      let format2Result = format2(t3.gbtCpW, obj2);
    } else {
      const obj3 = {
        minutes: targetMinutes,
        onClick: connectedConsoleLinkOnClick,
        gameTitle: quest.config.messages.gameTitle,
      };
      format2Result = format2(t3.Ajlcd7, obj3);
    }
    return format2Result;
  } else if (isSponsoredPlayQuestResult) {
    const intl6 = tmp(1114).intl;
    obj4 = { targetMinutes };
    return intl6.format(tmp(1114).t.Hu8SKW, obj4);
  } else {
    if (tmpResult1.hasWatchVideoTasks(quest)) {
      const defaultWatchVideoTask = tmp(7724).getDefaultWatchVideoTask(quest.config);
      let videoTitle;
      if (defaultWatchVideoTask != null) {
        videoTitle = defaultWatchVideoTask.messages.videoTitle;
      }
      if (null == videoTitle) {
        const intl5 = tmp(1114).intl;
        let stringResult = intl5.string(tmp(1114).t["o+e9yh"]);
      } else {
        const intl4 = tmp(1114).intl;
        obj5 = { videoTitle };
        stringResult = intl4.formatToPlainString(tmp(1114).t["9m9Mna"], obj5);
      }
      return stringResult;
    } else if (null != thirdPartyTaskDetails) {
      return thirdPartyTaskDetails.title;
    } else {
      if (tmpResult3.hasPlayActivityTask(quest)) {
        const result = tmp(7722).isPlayAnyActivityQuest(quest);
        const intl3 = tmp(1114).intl;
        const format = intl3.format;
        const t2 = tmp(1114).t;
        if (result) {
          const obj6 = { minutes: targetMinutes };
          let formatResult = format(t2["1NaRSs"], obj6);
        } else {
          const obj7 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
          formatResult = format(t2.xHXCyf, obj7);
        }
        return formatResult;
      } else {
        const obj8 = { quest };
        if (!tmpResult5.hasPlayOnDesktopTask(obj8)) {
          const intl2 = tmp(1114).intl;
          const obj9 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
          return intl2.format(tmp(1114).t["6zWtV8"], obj9);
        } else {
          const features = quest.config.features;
          const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
          const t = tmp(1114).t;
        }
        tmpResult5 = tmp(7724);
      }
      tmpResult3 = tmp(7724);
    }
    tmpResult1 = tmp(7724);
  }
};
export const getQuestsInstructionsToWinReward = function getQuestsInstructionsToWinReward(currentUser) {
  const obj = {};
  const merged = Object.assign(currentUser);
  currentUser = currentUser.currentUser;
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  obj.currentUser = currentUser;
  return _getQuestsInstructionsToWinReward(obj);
};
export { useQuestsInstructionsToWinReward };
export const useQuestDescription = function useQuestDescription(
  quest,
  sourceQuestContent,
  QUEST_HOME_MOBILE,
  QuestHome,
  popoutTargetElementRef,
) {
  let obj = {
    quest,
    taskDetails: hooks_QuestHooks.useQuestTaskDetails(quest),
    location: QUEST_HOME_MOBILE,
    sourceQuestContent,
    popoutTargetElementRef,
    gameProfileSource: QuestHome,
  };
  let formatToPlainStringResult = useQuestsInstructionsToWinReward(obj);
  const userStatus = quest.userStatus;
  let claimedAt;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  hooks_QuestHooks;
  const userStatus2 = quest.userStatus;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  if (tmp5) {
    const intl = tmp(1114).intl;
    obj = { claimDate: tmp7 };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.lOVr0O, obj);
  }
  return formatToPlainStringResult;
};
export const useQuestBarSubtitle = function useQuestBarSubtitle(arg0) {
  ({ quest, hasAlreadyLinked, onClickGameTitle } = arg0);
  ({ isExpanded, sourceQuestContent, activeScreen, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } =
    arg0);
  let obj = hooks_QuestHooks;
  const questFormattedDate = obj.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  let obj1 = hooks_QuestHooks;
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  let obj2 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  let obj3 = initialize;
  const items = [UserStore];
  const userStatus = quest.userStatus;
  let completedAt;
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let enrolledAt;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  let tmpResult = tmp(11483);
  obj = {
    quest,
    location: constants.QUESTS_BAR,
    taskDetails: questTaskDetails,
    sourceQuestContent,
    popoutTargetElementRef,
    onGameSheetOpened,
    onGameSheetClosed,
    gameProfileSource: null,
  };
  const isQuestProgressing = tmpResult.useIsQuestProgressing(quest);
  obj.gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestBar;
  if (tmp8) {
    const intl9 = tmp(1114).intl;
    obj = { expirationDate: questFormattedDate };
    return intl9.formatToPlainString(tmp(1114).t.APddvF, obj);
  } else {
    tmpResult = tmp(7724);
    if (tmpResult.hasAchievementInGameTask(quest)) {
      if (false === hasAlreadyLinked) {
        const intl8 = tmp(1114).intl;
        return intl8.string(tmp(1114).t.mAdqf7);
      }
    }
    const tmpResult1 = tmp(7724);
    if (isExpanded) {
      if (tmpResult1.hasAchievementInGameTask(quest)) {
        if (true === hasAlreadyLinked) {
          const gameTitle = quest.config.messages.gameTitle;
          if (null != onClickGameTitle) {
            const intl7 = tmp(1114).intl;
            obj1 = { gameTitle, onClickGameTitle };
            let formatResult = intl7.format(tmp(1114).t.X8hBDz, obj1);
          } else {
            const intl6 = tmp(1114).intl;
            obj2 = { gameTitle };
            formatResult = intl6.format(tmp(1114).t.u3mdpP, obj2);
          }
          return formatResult;
        }
      }
      if (activeScreen !== tmp(5447).TaskPlatformScreen.SELECT) {
        if (tmpResult2.isSponsoredPlayQuest(quest)) {
          if (tmp10) {
            if (!tmp11) {
              const defaultRewardNameWithArticle = tmp(11290).getDefaultRewardNameWithArticle(
                quest.config,
                stateFromStores,
              );
              const intl5 = tmp(1114).intl;
              obj3 = {
                rewardNameWithArticle: defaultRewardNameWithArticle,
                targetMinutes: questTaskDetails.targetMinutes,
              };
              return intl5.format(tmp(1114).t["1votF6"], obj3);
            }
          }
        }
        tmpResult2 = tmp(7722);
      }
      return tmp13;
    } else {
      if (tmpResult1.hasWatchVideoTasks(quest)) {
        const intl4 = tmp(1114).intl;
        let stringResult = intl4.string(tmp(1114).t["o+e9yh"]);
      } else if (tmp14 > 0) {
        if (!tmpResult4.hasAchievementInGameTask(quest)) {
          if (isQuestProgressing) {
            const obj4 = { quest, taskDetails: questTaskDetails, thirdPartyTaskDetails };
            let contextualEntrypointHeading = tmp(11295).getContextualEntrypointHeading(obj4);
            const tmpResult5 = tmp(11295);
          } else {
            const intl2 = tmp(1114).intl;
            contextualEntrypointHeading = intl2.string(tmp(1114).t.mOrpXG);
          }
        }
        const intl3 = tmp(1114).intl;
        contextualEntrypointHeading = intl3.string(tmp(1114).t.JkyCIO);
        tmpResult4 = tmp(7724);
      } else {
        const intl = tmp(1114).intl;
        stringResult = intl.string(tmp(1114).t.S6UUc5);
      }
      return stringResult;
    }
  }
  tmp10 = null != enrolledAt;
  tmp11 = questTaskDetails.percentComplete > 0;
  tmp8 = null != completedAt;
};
export const useQuestBarTitle = function useQuestBarTitle(questDockQuest, arg1) {
  let obj = initialize;
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(questDockQuest);
  const userStatus = questDockQuest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmp7 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const intl6 = tmp(1114).intl;
    return intl6.string(tmp(1114).t["ij5E/5"]);
  } else {
    let tmpResult = tmp(7724);
    if (tmpResult.hasAchievementInGameTask(questDockQuest)) {
      if (false === arg1) {
        const intl5 = tmp(1114).intl;
        return intl5.string(tmp(1114).t.s9r2a1);
      }
    }
    tmpResult = tmp(7724);
    if (tmpResult.hasAchievementInGameTask(questDockQuest)) {
      if (true === arg1) {
        if (0 === tmp7) {
          const intl4 = tmp(1114).intl;
          return intl4.string(tmp(1114).t["2+opCy"]);
        }
      }
    }
    const userStatus2 = questDockQuest.userStatus;
    let enrolledAt;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      if (tmp7 > 0) {
        const tmpResult1 = tmp(1880);
        const intl3 = tmp(1114).intl;
        obj = { percent: tmp(1880).formatPercent(stateFromStores, tmp7, { roundingMode: "floor" }) };
        return intl3.formatToPlainString(tmp(1114).t.lVZaXD, obj);
      }
    }
    if (
      _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0] ===
      tmp(5447).TaskPlatformScreen.SELECT
    ) {
      const intl2 = tmp(1114).intl;
      let stringResult = intl2.string(tmp(1114).t.EMrUHQ);
    } else {
      const tmpResult2 = tmp(7724);
      const intl = tmp(1114).intl;
      const string = intl.string;
      const t = tmp(1114).t;
      if (isConsoleQuestResult) {
        stringResult = string(t.mOrpXG);
      } else {
        stringResult = string(t["7e5k7L"]);
      }
      isConsoleQuestResult = tmp(7724).isConsoleQuest(questDockQuest);
    }
    return stringResult;
  }
};
export const usePrimaryCtaCopy = function usePrimaryCtaCopy(showPlayInstantlyLabel) {
  ({ quest, application, shortText } = showPlayInstantlyLabel);
  if (shortText === undefined) {
    shortText = false;
  }
  let flag = showPlayInstantlyLabel.showPlayInstantlyLabel;
  if (flag === undefined) {
    flag = false;
  }
  const items = [quest];
  const memo = noop.useMemo(() => {
    let obj = QuestTaskUtils;
    if (!obj.isConsoleQuest(quest)) {
      let tmp2Result = tmp2(7724);
      if (!tmp2Result.hasPlayActivityTask(tmp)) {
        tmp2Result = tmp2(7724);
        obj = { quest: tmp };
        if (tmp2Result.hasStreamOnDesktopTask(obj)) {
          let PLAY = constants.STREAM;
        } else {
          if (tmp2Result1.hasWatchVideoOnMobileTasks(tmp)) {
            PLAY = constants.WATCH_VIDEO;
          } else {
            PLAY = tmp2(7724).isInGameQuest(tmp) ? tmp4.IN_GAME : tmp4.PLAY;
            const tmp2Result2 = tmp2(7724);
          }
          tmp2Result1 = tmp2(7724);
        }
      }
      return PLAY;
    }
    PLAY = constants.PLAY;
  }, items);
  quest(11483);
  if (constants3.PLAY === memo) {
    const features2 = quest.config.features;
    let hasItem = features2.includes(constants2.MOBILE_ACTIVITY_QUEST);
    if (hasItem) {
      let tmp20Result = null == application;
      if (!tmp20Result) {
        let supported_platforms;
        if (application != null) {
          const embeddedActivityConfig2 = application.embeddedActivityConfig;
          if (embeddedActivityConfig2 != null) {
            supported_platforms = embeddedActivityConfig2.supported_platforms;
          }
        }
        tmp20Result = isActivitySupportedOnClientPlatformDefault(supported_platforms);
      }
      hasItem = tmp20Result;
    }
    if (hasItem) {
      const features3 = quest.config.features;
      if (features3.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
        const intl6 = tmp2(1114).intl;
        const t3 = tmp2(1114).t;
        return intl6.string(flag ? t3.V5Qt9D : t3["+qoymD"]);
      } else {
        let tmp2Result = tmp2(7722);
        if (tmp2Result.canLaunchActivity(quest)) {
          const intl5 = tmp2(1114).intl;
          const t2 = tmp2(1114).t;
          return intl5.string(shortText ? t2.E4kW5O : t2["Ie9++s"]);
        }
      }
    }
    const intl4 = tmp2(1114).intl;
    return intl4.string(tmp2(1114).t.l7E81v);
  } else if (tmp6.STREAM === memo) {
    const intl3 = tmp2(1114).intl;
    return intl3.string(tmp2(1114).t.l7E81v);
  } else if (tmp6.WATCH_VIDEO === memo) {
    tmp2Result = tmp2(11513);
    return tmp2Result.getVideoQuestWatchCtaText(tmp5);
  } else if (tmp6.IN_GAME === memo) {
    if (tmp2Result1.canLaunchActivity(quest)) {
      const features = quest.config.features;
      let hasItem1 = features.includes(constants2.MOBILE_ACTIVITY_QUEST);
      if (hasItem1) {
        let tmp12Result = null == application;
        if (!tmp12Result) {
          let supported_platforms1;
          if (application != null) {
            const embeddedActivityConfig = application.embeddedActivityConfig;
            if (embeddedActivityConfig != null) {
              supported_platforms1 = embeddedActivityConfig.supported_platforms;
            }
          }
          tmp12Result = isActivitySupportedOnClientPlatformDefault(supported_platforms1);
        }
        hasItem1 = tmp12Result;
      }
      if (hasItem1) {
        const intl2 = tmp2(1114).intl;
        const t = tmp2(1114).t;
        intl2.string(shortText ? t.CkUzLd : t["hRIVy+"]);
      }
    }
    const intl = tmp2(1114).intl;
    return intl.string(tmp2(1114).t.l7E81v);
  }
};
export const usePremiumExtendableCopy = function usePremiumExtendableCopy(arg0) {
  _require = arg0;
  const items = [arg0];
  [][0] = arg0;
  const memo = noop.useMemo(() => QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(closure_0), items);
  if (!memo) {
    return null;
  } else {
    const intl = require("util").intl;
    const string = intl.string;
    let t = require("util").t;
    if (tmp2) {
      t = t["hh7Rb/"];
      let stringResult = string(t);
    } else {
      stringResult = string(t.GYGb3A);
    }
  }
};
export const getRewardCodeRedemptionInstructions = function getRewardCodeRedemptionInstructions(arg0) {
  ({ quest, rewardCode } = arg0);
  let obj = QuestRewardUtils;
  let platform;
  const result = obj.isTieredRewardCodeQuest({ quest });
  if (rewardCode != null) {
    platform = rewardCode.platform;
  }
  if (platform == null) {
    platform = tmp(5447).QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  let rewardCodeQuestReward = null;
  if (result) {
    let tmpResult = tmp(11290);
    obj = { quest, idx: null };
    let tier;
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
    obj.idx = tier;
    rewardCodeQuestReward = tmpResult.getRewardCodeQuestReward(obj);
  }
  tmpResult = tmp(11295);
  let prop;
  const defaultReward = tmpResult.getDefaultReward(quest.config);
  if (rewardCodeQuestReward != null) {
    const messages = rewardCodeQuestReward.messages;
    if (messages != null) {
      prop = messages.redemptionInstructionsByPlatform;
    }
  }
  if (prop == null) {
    prop = defaultReward.messages.redemptionInstructionsByPlatform;
  }
  let tmp10;
  if (null != platform) {
    tmp10 = prop[platform];
  }
  return tmp10;
};
export const useModalCtaConfig = function useModalCtaConfig(quest) {
  quest = quest.quest;
  ({
    questContent: importDefault,
    preCtaClick: dependencyMap,
    getImpressionId: asyncGeneratorStep,
    sourceQuestContent: _slicedToArray,
  } = quest);
  noop = async function _defaultOnClickCta(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let tmp10;
            if (dependencyMap != null) {
              tmp10 = dependencyMap();
            }
            c1 = 1;
            dependencyMap = 1;
            const obj1 = { value: tmp10, done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const obj2 = {
            content: closure_128_1,
            ctaContent: tmp4(7728).QuestContentCTA.OPEN_GAME_LINK,
            impressionId: null,
            sourceQuestContent: null,
          };
          let tmp5;
          if (closure_128_3 != null) {
            tmp5 = closure_128_3();
          }
          obj2.impressionId = tmp5;
          obj2.sourceQuestContent = closure_128_4;
          tmp4(11496).openGameLinkDirectly(closure_128_0, obj2);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        dependencyMap = tmp;
        throw tmp11;
      }
    }
  };
  const items = [quest];
  let obj = {
    ctaText: null,
    ctaVariant: "secondary",
    onClickCta: null,
    title: null,
    subtitle: null,
    ctaIconPosition: "end",
  };
  const memo = noop.useMemo(() => {
    let messages = quest;
    const ctaConfig = quest.config.ctaConfig;
    let subtitle;
    if (ctaConfig != null) {
      subtitle = ctaConfig.subtitle;
    }
    if (null != subtitle) {
      return subtitle;
    } else {
      if (obj3.hasAchievementInGameTask(messages)) {
        messages = messages.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages;
        let taskTitle = messages.taskTitle;
      } else {
        let tmp5Result = tmp5(7722);
        const questType = tmp5Result.getQuestType(messages.config);
        if (questType === tmp5(7727).QuestType.GAMEPLAY) {
          const features = messages.config.features;
          if (!features.includes(constants2.NON_GAMING_PLAY_QUEST)) {
            tmp5Result = tmp5(7722);
            if (!tmp5Result.isSponsoredPlayQuest(messages)) {
              const intl = tmp5(1114).intl;
              taskTitle = intl.string(tmp5(1114).t["wirwN+"]);
            }
          }
        }
        const intl2 = tmp5(1114).intl;
        taskTitle = intl2.string(tmp5(1114).t.y8Xf3k);
      }
      obj3 = QuestTaskUtils;
    }
  }, items);
  obj.ctaText = quest(11295).getExternalCtaLabel(quest);
  obj.onClickCta = function defaultOnClickCta() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.title = quest.config.messages.gameTitle;
  obj.subtitle = memo;
  return obj;
};
