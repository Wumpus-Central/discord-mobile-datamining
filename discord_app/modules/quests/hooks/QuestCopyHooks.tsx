// === Module 11926: QuestCopyHooks ===

// Module 11926 (QuestCopyHooks)
import initialize from "initialize" /* 504 */;
import NumberUtils from "NumberUtils" /* 1881 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1886 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import QuestTypes from "QuestTypes" /* 5535 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7838 */;
import QuestType from "QuestType" /* 7841 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8822 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8833 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 9683 */;
import QuestRewardUtils from "QuestRewardUtils" /* 11444 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11449 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11637 */;
import useInGameQuestConnectState from "useInGameQuestConnectState" /* 11928 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2026 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const util = v1votF6(1115);
const utils_QuestUtils = v1votF6(7836);
const SponsoredQuestUtils = v1votF6(11927);
require = fn;
function _getQuestsInstructionsToWinReward(arg0) {
  ({ quest, taskDetails, thirdPartyTaskDetails, withoutMarkdown, currentUser, onGameTitleClick } = arg0);
  let v1votF6 = require;
  let obj = dependencyMap;
  ({ sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, needsToConnect } = arg0);
  const isPremiumResult = PremiumTypeUtils.isPremium(currentUser, PremiumTypes.TIER_2);
  const collectibleQuestRewardDuration = QuestRewardUtils.getCollectibleQuestRewardDuration(quest.config);
  let isConsoleQuestResult = QuestTaskUtils.isConsoleQuest(quest);
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
      const obj5 = { quest, sourceQuestContent, applications: null, popoutTargetElementRef: null, onGameSheetOpened: null, onGameSheetClosed: null };
      if (applications == null) {
        applications = [];
      }
      obj5.applications = applications;
      obj5.popoutTargetElementRef = popoutTargetElementRef;
      obj5.onGameSheetOpened = onGameSheetOpened;
      obj5.onGameSheetClosed = onGameSheetClosed;
      const obj6 = {};
      const gameSheetHook = SponsoredQuestUtils.createGameSheetHook(obj5);
      obj6[constants2.PACKAGE_ACTION_ADVENTURE] = util.t.H485IA;
      obj6[constants2.PACKAGE_RPG_MMO] = util.t["3XS8Ni"];
      obj6[constants2.PACKAGE_RACING_SPORTS] = util.t["X+UCju"];
      obj6[constants2.PACKAGE_SANDBOX_CREATIVE] = util.t["6o4n1Q"];
      obj6[constants2.PACKAGE_FAMILY_FRIENDLY] = util.t.DUsNmf;
      obj6[constants2.PACKAGE_HOLIDAY_SEASON] = util.t["cWP8/Z"];
      obj6[constants2.PACKAGE_NEW_YEARS] = util.t["8+sIJz"];
      const features1 = quest.config.features;
      const found = features1.find((item) => item in obj6);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj6[found];
      }
      if (CDeHul == null) {
        CDeHul = util.t.CDeHul;
      }
      const intl11 = util.intl;
      const obj7 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: targetMinutes4, gameSheetHook };
      formatToPlainStringResult = intl11.format(CDeHul, obj7);
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
        const obj8 = { gameTitle: quest.config.messages.gameTitle, streamingDurationRequirement: targetMinutes3, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration, targetMinutes: targetMinutes3, onGameTitleClick };
        const intl10 = util.intl;
        if (withoutMarkdown) {
          let formatToPlainStringResult1 = intl10.formatToPlainString(prop, obj8);
        } else {
          formatToPlainStringResult1 = intl10.format(prop, obj8);
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
          const obj9 = { gameTitle: quest.config.messages.gameTitle, targetMinutes: targetMinutes2, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration, streamingDurationRequirement: targetMinutes2, onGameTitleClick };
          const intl9 = util.intl;
          if (withoutMarkdown) {
            let formatToPlainStringResult2 = intl9.formatToPlainString(tmp70, obj9);
          } else {
            formatToPlainStringResult2 = intl9.format(tmp70, obj9);
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
            const obj10 = { gameTitle: quest.config.messages.gameTitle, streamingDurationRequirement: taskDetails.targetMinutes, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration, questReward: defaultRewardNameWithArticle, onGameTitleClick };
            const intl8 = util.intl;
            if (withoutMarkdown) {
              let formatToPlainStringResult3 = intl8.formatToPlainString(v03VJqu, obj10);
            } else {
              formatToPlainStringResult3 = intl8.format(v03VJqu, obj10);
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
        const obj11 = { quest };
        if (v1votF6Result12.isTieredRewardCodeQuest(obj11)) {
          if (null != onGameTitleClick) {
            let HHVg4i = util.t.HHVg4i;
          } else {
            HHVg4i = util.t["a/ia7F"];
          }
          const obj12 = { gameTitle: quest.config.messages.gameTitle, streamingDurationRequirement: taskDetails.targetMinutes, onGameTitleClick };
          const intl7 = util.intl;
          if (withoutMarkdown) {
            let formatToPlainStringResult4 = intl7.formatToPlainString(HHVg4i, obj12);
          } else {
            formatToPlainStringResult4 = intl7.format(HHVg4i, obj12);
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
              const obj13 = { videoTitle: str, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration };
              const intl6 = util.intl;
              if (withoutMarkdown) {
                let formatToPlainStringResult5 = intl6.formatToPlainString(Rsd5bL, obj13);
              } else {
                formatToPlainStringResult5 = intl6.format(Rsd5bL, obj13);
              }
            }
            Rsd5bL = util.t["W/HkLO"];
            v1votF6Result16 = QuestRewardUtils;
          } else if (v1votF6Result14.hasPlayActivityTask(quest)) {
            const targetMinutes = taskDetails.targetMinutes;
            if (!v1votF6Result17.isPlayAnyActivityQuest(quest)) {
              const features = quest.config.features;
              if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
                const features2 = quest.config.features;
                if (features2.includes(constants2.CLOUD_GAMING_PROVIDER_NVIDIA)) {
                  const v0NNM3l = util.t["0NNM3l"];
                  const obj14 = { activityName: quest.config.messages.gameTitle, providerName: "NVIDIA GeForce NOW", providerLink: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST), streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
                  const intl4 = util.intl;
                  if (withoutMarkdown) {
                    let formatToPlainStringResult6 = intl4.formatToPlainString(v0NNM3l, obj14);
                  } else {
                    formatToPlainStringResult6 = intl4.format(v0NNM3l, obj14);
                  }
                }
              }
              const UuzHh8 = util.t.UuzHh8;
              const obj15 = { activityName: quest.config.messages.gameTitle, streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
              const intl3 = util.intl;
              if (withoutMarkdown) {
                let formatToPlainStringResult7 = intl3.formatToPlainString(UuzHh8, obj15);
              } else {
                formatToPlainStringResult7 = intl3.format(UuzHh8, obj15);
              }
            }
            const VYwSSu = util.t.VYwSSu;
            const obj16 = { streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
            const intl5 = util.intl;
            if (withoutMarkdown) {
              let formatToPlainStringResult8 = intl5.formatToPlainString(VYwSSu, obj16);
            } else {
              formatToPlainStringResult8 = intl5.format(VYwSSu, obj16);
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
                      const obj17 = { gameTitle: quest.config.messages.gameTitle, objective: thirdPartyTaskDetails.description, duration: collectibleQuestRewardDuration, questReward: defaultRewardNameWithArticle, onGameTitleClick };
                      const intl2 = util.intl;
                      if (withoutMarkdown) {
                        let formatToPlainStringResult9 = intl2.formatToPlainString(tmp19, obj17);
                      } else {
                        formatToPlainStringResult9 = intl2.format(tmp19, obj17);
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
                  const obj18 = { gameTitle: quest.config.messages.gameTitle, streamingDurationRequirement: taskDetails.targetMinutes, duration: collectibleQuestRewardDuration, questReward: defaultRewardNameWithArticle, onGameTitleClick };
                  const intl = util.intl;
                  if (withoutMarkdown) {
                    description = intl.formatToPlainString(tmp10, obj18);
                  } else {
                    description = intl.format(tmp10, obj18);
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
  const v1votF6Result2 = QuestRewardUtils;
}
function useQuestsInstructionsToWinReward(arg0) {
  ({ quest, gameProfileSource, withoutMarkdown } = arg0);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp = undefined !== withoutMarkdown && withoutMarkdown;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
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
  const obj6 = { applicationId: inGameApplicationId, location: constants.QUEST_INSTRUCTIONS, source: null };
  if (gameProfileSource == null) {
    gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestHome;
  }
  obj6.source = gameProfileSource;
  useOpenGameProfileModalDefault(obj6);
  const obj7 = {};
  const merged = Object.assign(arg0);
  obj7.currentUser = stateFromStores;
  obj7.withoutMarkdown = tmp;
  obj7.thirdPartyTaskDetails = thirdPartyTaskDetails;
  obj7.onGameTitleClick = undefined;
  obj7.needsToConnect = false === inGameQuestConnectState;
  return _getQuestsInstructionsToWinReward(obj7);
}
const QuestConstants = fn(5532);
({ QuestsExperimentLocations: closure_8, ORBS_INTRO_QUEST_ID: closure_9, QuestVariants: c10 } = QuestConstants);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const PremiumTypes = fn(1374).PremiumTypes;
const constants3 = { PLAY: 0, [0]: "PLAY", STREAM: 1, [1]: "STREAM", WATCH_VIDEO: 2, [2]: "WATCH_VIDEO", IN_GAME: 3, [3]: "IN_GAME" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = function useQuestInstructionTitle(quest, arg1, questContent, sourceQuestContent) {
  const targetMinutes = hooks_QuestHooks.useQuestTaskDetails(quest).targetMinutes;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  const connectedConsoleLinkOnClick = hooks_QuestHooks.useConnectedConsoleLinkOnClick({ quest, questContent, sourceQuestContent });
  const obj4 = { quest, questContent, sourceQuestContent };
  const isSponsoredPlayQuestResult = utils_QuestUtils.isSponsoredPlayQuest(quest);
  if (obj6.isConsoleQuest(quest)) {
    const obj7 = { quest };
    if (!tmpResult.hasPlayOnDesktopTask(obj7)) {
      const intl = util.intl;
      const obj8 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      return intl.format(util.t["l4S+cQ"], obj8);
    }
    tmpResult = QuestTaskUtils;
  }
  obj6 = QuestTaskUtils;
  if (tmpResult7.isConsoleQuest(quest)) {
    const intl7 = util.intl;
    const format2 = intl7.format;
    const t3 = util.t;
    if (isSponsoredPlayQuestResult) {
      const obj9 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
      let format2Result = format2(t3.gbtCpW, obj9);
    } else {
      const obj10 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      format2Result = format2(t3.Ajlcd7, obj10);
    }
    return format2Result;
  } else if (isSponsoredPlayQuestResult) {
    const intl6 = util.intl;
    const obj11 = { targetMinutes };
    return intl6.format(util.t.Hu8SKW, obj11);
  } else {
    if (tmpResult8.hasWatchVideoTasks(quest)) {
      const defaultWatchVideoTask = QuestTaskUtils.getDefaultWatchVideoTask(quest.config);
      let videoTitle;
      if (defaultWatchVideoTask != null) {
        videoTitle = defaultWatchVideoTask.messages.videoTitle;
      }
      if (null == videoTitle) {
        const intl5 = util.intl;
        let stringResult = intl5.string(util.t["o+e9yh"]);
      } else {
        const intl4 = util.intl;
        const obj12 = { videoTitle };
        stringResult = intl4.formatToPlainString(util.t["9m9Mna"], obj12);
      }
      return stringResult;
    } else if (null != thirdPartyTaskDetails) {
      return thirdPartyTaskDetails.title;
    } else {
      if (tmpResult10.hasPlayActivityTask(quest)) {
        const result = utils_QuestUtils.isPlayAnyActivityQuest(quest);
        const intl3 = util.intl;
        const format = intl3.format;
        const t2 = util.t;
        if (result) {
          const obj13 = { minutes: targetMinutes };
          let formatResult = format(t2["1NaRSs"], obj13);
        } else {
          const obj14 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
          formatResult = format(t2.xHXCyf, obj14);
        }
        return formatResult;
      } else {
        const obj15 = { quest };
        if (!tmpResult12.hasPlayOnDesktopTask(obj15)) {
          const intl2 = util.intl;
          const obj16 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
          return intl2.format(util.t["6zWtV8"], obj16);
        } else {
          const features = quest.config.features;
          const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
          const t = util.t;
        }
        tmpResult12 = QuestTaskUtils;
      }
      tmpResult10 = QuestTaskUtils;
    }
    tmpResult8 = QuestTaskUtils;
  }
  tmpResult7 = QuestTaskUtils;
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
export const useQuestDescription = function useQuestDescription(quest, sourceQuestContent, QUEST_HOME_MOBILE, QuestHome, popoutTargetElementRef) {
  const obj = { quest, taskDetails: hooks_QuestHooks.useQuestTaskDetails(quest), location: QUEST_HOME_MOBILE, sourceQuestContent, popoutTargetElementRef, gameProfileSource: QuestHome };
  let formatToPlainStringResult = useQuestsInstructionsToWinReward(obj);
  const userStatus = quest.userStatus;
  let claimedAt1;
  if (userStatus != null) {
    claimedAt1 = userStatus.claimedAt;
  }
  hooks_QuestHooks;
  const userStatus2 = quest.userStatus;
  if (userStatus2 != null) {
    const claimedAt = userStatus2.claimedAt;
  }
  if (tmp5) {
    const intl = util.intl;
    const obj3 = { claimDate: tmp7 };
    formatToPlainStringResult = intl.formatToPlainString(util.t.lOVr0O, obj3);
  }
  return formatToPlainStringResult;
};
export const useQuestBarSubtitle = function useQuestBarSubtitle(arg0) {
  ({ quest, hasAlreadyLinked, onClickGameTitle } = arg0);
  ({ isExpanded, sourceQuestContent, activeScreen, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  const questFormattedDate = hooks_QuestHooks.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  const items = [UserStore];
  const userStatus = quest.userStatus;
  let completedAt;
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let enrolledAt;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  const tmp10 = null != enrolledAt;
  const tmp11 = questTaskDetails.percentComplete > 0;
  const tmp8 = null != completedAt;
  const isQuestProgressing = hooks_QuestHooks.useIsQuestProgressing(quest);
  { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, gameProfileSource: null }.gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestBar;
  if (tmp8) {
    const intl9 = util.intl;
    const obj6 = { expirationDate: questFormattedDate };
    return intl9.formatToPlainString(util.t.APddvF, obj6);
  } else {
    if (tmpResult7.hasAchievementInGameTask(quest)) {
      if (false === hasAlreadyLinked) {
        const intl8 = util.intl;
        return intl8.string(util.t.mAdqf7);
      }
    }
    const tmpResult8 = QuestTaskUtils;
    if (isExpanded) {
      if (tmpResult8.hasAchievementInGameTask(quest)) {
        if (true === hasAlreadyLinked) {
          const gameTitle = quest.config.messages.gameTitle;
          if (null != onClickGameTitle) {
            const intl7 = util.intl;
            const obj7 = { gameTitle, onClickGameTitle };
            let formatResult = intl7.format(util.t.X8hBDz, obj7);
          } else {
            const intl6 = util.intl;
            const obj8 = { gameTitle };
            formatResult = intl6.format(util.t.u3mdpP, obj8);
          }
          return formatResult;
        }
      }
      if (activeScreen !== QuestTypes.TaskPlatformScreen.SELECT) {
        if (tmpResult9.isSponsoredPlayQuest(quest)) {
          if (tmp10) {
            if (!tmp11) {
              const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
              const intl5 = util.intl;
              const obj9 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: questTaskDetails.targetMinutes };
              return intl5.format(util.t["1votF6"], obj9);
            }
          }
        }
        tmpResult9 = utils_QuestUtils;
      }
      return tmp13;
    } else {
      if (tmpResult8.hasWatchVideoTasks(quest)) {
        const intl4 = util.intl;
        let stringResult = intl4.string(util.t["o+e9yh"]);
      } else if (tmp14 > 0) {
        if (!tmpResult11.hasAchievementInGameTask(quest)) {
          if (isQuestProgressing) {
            const obj10 = { quest, taskDetails: questTaskDetails, thirdPartyTaskDetails };
            let contextualEntrypointHeading = QuestCopyUtils.getContextualEntrypointHeading(obj10);
            const tmpResult12 = QuestCopyUtils;
          } else {
            const intl2 = util.intl;
            contextualEntrypointHeading = intl2.string(util.t.mOrpXG);
          }
        }
        const intl3 = util.intl;
        contextualEntrypointHeading = intl3.string(util.t.JkyCIO);
        tmpResult11 = QuestTaskUtils;
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.S6UUc5);
      }
      return stringResult;
    }
    tmpResult7 = QuestTaskUtils;
  }
  const obj5 = { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, gameProfileSource: null };
  const tmpResult = hooks_QuestHooks;
};
export const useQuestBarTitle = function useQuestBarTitle(questDockQuest, arg1) {
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
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
    const intl6 = util.intl;
    return intl6.string(util.t["ij5E/5"]);
  } else {
    if (tmpResult.hasAchievementInGameTask(questDockQuest)) {
      if (false === arg1) {
        const intl5 = util.intl;
        return intl5.string(util.t.s9r2a1);
      }
    }
    tmpResult = QuestTaskUtils;
    if (tmpResult4.hasAchievementInGameTask(questDockQuest)) {
      if (true === arg1) {
        if (0 === tmp7) {
          const intl4 = util.intl;
          return intl4.string(util.t["2+opCy"]);
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
        const tmpResult5 = NumberUtils;
        const intl3 = util.intl;
        const obj5 = { percent: NumberUtils.formatPercent(stateFromStores, tmp7, { roundingMode: "floor" }) };
        return intl3.formatToPlainString(util.t.lVZaXD, obj5);
      }
    }
    if (_slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0] === QuestTypes.TaskPlatformScreen.SELECT) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.EMrUHQ);
    } else {
      const tmpResult6 = QuestTaskUtils;
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isConsoleQuestResult) {
        stringResult = string(t.mOrpXG);
      } else {
        stringResult = string(t["7e5k7L"]);
      }
      isConsoleQuestResult = QuestTaskUtils.isConsoleQuest(questDockQuest);
    }
    return stringResult;
  }
};
export const usePrimaryCtaCopy = function usePrimaryCtaCopy(arg0) {
  ({ quest, application, shortText } = arg0);
  if (shortText === undefined) {
    shortText = false;
  }
  const items = [quest];
  const memo = noop.useMemo(() => {
    if (!obj.isConsoleQuest(quest)) {
      if (!tmp2Result.hasPlayActivityTask(quest)) {
        const obj2 = { quest };
        if (tmp2Result4.hasStreamOnDesktopTask(obj2)) {
          let PLAY = constants.STREAM;
        } else {
          if (tmp2Result5.hasWatchVideoOnMobileTasks(quest)) {
            PLAY = constants.WATCH_VIDEO;
          } else {
            PLAY = QuestTaskUtils.isInGameQuest(quest) ? constants.IN_GAME : constants.PLAY;
            const tmp2Result6 = QuestTaskUtils;
          }
          tmp2Result5 = QuestTaskUtils;
        }
        tmp2Result4 = QuestTaskUtils;
      }
      return PLAY;
    }
    PLAY = constants.PLAY;
    obj = QuestTaskUtils;
  }, items);
  quest(11637);
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
        const intl6 = quest(1115).intl;
        return intl6.string(quest(1115).t["+qoymD"]);
      } else {
        if (tmp2Result.canLaunchActivity(quest)) {
          const intl5 = quest(1115).intl;
          const t2 = quest(1115).t;
          return intl5.string(shortText ? t2.E4kW5O : t2["Ie9++s"]);
        }
        tmp2Result = quest(7836);
      }
    }
    const intl4 = quest(1115).intl;
    return intl4.string(quest(1115).t.l7E81v);
  } else if (constants3.STREAM === memo) {
    const intl3 = quest(1115).intl;
    return intl3.string(quest(1115).t.l7E81v);
  } else if (constants3.WATCH_VIDEO === memo) {
    return quest(11667).getVideoQuestWatchCtaText(tmp5);
  } else if (constants3.IN_GAME === memo) {
    if (tmp2Result4.canLaunchActivity(quest)) {
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
        const intl2 = quest(1115).intl;
        const t = quest(1115).t;
        intl2.string(shortText ? t.CkUzLd : t["hRIVy+"]);
      }
    }
    const intl = quest(1115).intl;
    return intl.string(quest(1115).t.l7E81v);
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
  let platform;
  const result = QuestRewardUtils.isTieredRewardCodeQuest({ quest });
  if (rewardCode != null) {
    platform = rewardCode.platform;
  }
  if (platform == null) {
    platform = QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  let rewardCodeQuestReward = null;
  if (result) {
    const obj2 = { quest, idx: null };
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
    obj2.idx = tier;
    rewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward(obj2);
    const tmpResult = QuestRewardUtils;
  }
  let prop;
  const defaultReward = QuestCopyUtils.getDefaultReward(quest.config);
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
  ({ questContent: importDefault, preCtaClick: dependencyMap, getImpressionId: asyncGeneratorStep, sourceQuestContent: _slicedToArray } = quest);
  noop = async function _defaultOnClickCta() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp10;
            if (dependencyMap != null) {
              tmp10 = dependencyMap();
            }
            c1 = 1;
            dependencyMap = 1;
            const obj4 = { value: tmp10, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const obj6 = { content: closure_128_1, ctaContent: tmp4(7842).QuestContentCTA.OPEN_GAME_LINK, impressionId: null, sourceQuestContent: null };
          let tmp5;
          if (closure_128_3 != null) {
            tmp5 = closure_128_3();
          }
          obj6.impressionId = tmp5;
          obj6.sourceQuestContent = closure_128_4;
          tmp4(11650).openGameLinkDirectly(closure_128_0, obj6);
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
  let obj = { ctaText: null, ctaVariant: "secondary", onClickCta: null, title: null, subtitle: null, ctaIconPosition: "end" };
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
        const questType = utils_QuestUtils.getQuestType(messages.config);
        if (questType === QuestType.QuestType.GAMEPLAY) {
          const features = messages.config.features;
          if (!features.includes(constants2.NON_GAMING_PLAY_QUEST)) {
            if (!tmp5Result2.isSponsoredPlayQuest(messages)) {
              const intl = util.intl;
              taskTitle = intl.string(util.t["wirwN+"]);
            }
            tmp5Result2 = utils_QuestUtils;
          }
        }
        const intl2 = util.intl;
        taskTitle = intl2.string(util.t.y8Xf3k);
        const tmp5Result = utils_QuestUtils;
      }
      obj3 = QuestTaskUtils;
    }
  }, items);
  obj.ctaText = quest(11449).getExternalCtaLabel(quest);
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