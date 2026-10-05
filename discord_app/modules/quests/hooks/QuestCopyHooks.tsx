// === Module 10955: QuestCopyHooks ===

// Module 10955 (QuestCopyHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7208 */;
import QuestType from "QuestType" /* 7211 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8320 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 9044 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10005 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10010 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10911 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 10941 */;
import useInGameQuestConnectState from "useInGameQuestConnectState" /* 10957 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

const util = v1votF6(1126);
const utils_QuestUtils = v1votF6(7206);
const SponsoredQuestUtils = v1votF6(10956);
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
                if (quest.id === options) {
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
function getSimplifiedQuestTaskType(quest) {
  if (!obj.isConsoleQuest(quest)) {
    if (!tmpResult.hasPlayActivityTask(quest)) {
      const obj2 = { quest };
      if (tmpResult4.hasStreamOnDesktopTask(obj2)) {
        let PLAY = constants3.STREAM;
      } else {
        if (tmpResult5.hasWatchVideoOnMobileTasks(quest)) {
          PLAY = constants3.WATCH_VIDEO;
        } else {
          PLAY = QuestTaskUtils.isInGameQuest(quest) ? constants3.IN_GAME : constants3.PLAY;
          const tmpResult6 = QuestTaskUtils;
        }
        tmpResult5 = QuestTaskUtils;
      }
      tmpResult4 = QuestTaskUtils;
    }
    return PLAY;
  }
  PLAY = constants3.PLAY;
  obj = QuestTaskUtils;
}
const QuestConstants = fn(5623);
({ QuestsExperimentLocations: closure_8, ORBS_INTRO_QUEST_ID: closure_9, QuestVariants: c10 } = QuestConstants);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const PremiumTypes = fn(1379).PremiumTypes;
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
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
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  useInGameQuestConnectState;
  if (cResult[2] !== quest) {
    const result = QuestTaskUtils.hasAchievementInGameTask(quest);
    const tmpResult8 = QuestTaskUtils;
    if (result) {
      let inGameApplicationId = tmpResult8.getInGameApplicationId(quest);
    } else {
      const allApplicationIds = tmpResult8.getAllApplicationIds(quest);
      if (allApplicationIds != null) {
        inGameApplicationId = allApplicationIds[0];
      }
    }
    cResult[2] = quest;
    cResult[3] = inGameApplicationId;
    const tmpResult7 = QuestTaskUtils;
  } else {
    if (gameProfileSource == null) {
      gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestHome;
    }
    if (cResult[4] === cResult[3]) {
      if (cResult[5] === gameProfileSource) {
        let tmp19 = cResult[6];
      }
      useOpenGameProfileModalDefault(tmp19);
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === tmp23) {
          if (cResult[9] === arg0) {
            if (cResult[10] === thirdPartyTaskDetails) {
              if (cResult[11] === undefined) {
                if (cResult[12] === tmp4) {
                  let tmp24 = cResult[13];
                }
                return tmp24;
              }
            }
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.currentUser = stateFromStores;
      obj2.withoutMarkdown = tmp4;
      obj2.thirdPartyTaskDetails = thirdPartyTaskDetails;
      obj2.onGameTitleClick = undefined;
      obj2.needsToConnect = false === tmp11;
      const tmp29 = _getQuestsInstructionsToWinReward(obj2);
      cResult[7] = stateFromStores;
      cResult[8] = false === tmp11;
      cResult[9] = arg0;
      cResult[10] = thirdPartyTaskDetails;
      cResult[11] = undefined;
      cResult[12] = tmp4;
      cResult[13] = tmp29;
      tmp24 = tmp29;
    }
    const obj3 = { applicationId: cResult[3], location: constants.QUEST_INSTRUCTIONS, source: gameProfileSource };
    cResult[4] = cResult[3];
    cResult[5] = gameProfileSource;
    cResult[6] = obj3;
    tmp19 = obj3;
  }
  const tmpResult5 = hooks_QuestHooks;
}) : ((arg0) => {
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
});
let closure_14 = tmp4;
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest, arg1, questContent, sourceQuestContent) => {
  let gbtCpW = require;
  let formatResult1 = dependencyMap;
  const cResult = c.c(30);
  const targetMinutes = hooks_QuestHooks.useQuestTaskDetails(quest).targetMinutes;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
  if (cResult[0] === quest) {
    if (cResult[1] === questContent) {
      if (cResult[2] === sourceQuestContent) {
        let tmp4 = cResult[3];
      }
      const connectedConsoleLinkOnClick = hooks_QuestHooks.useConnectedConsoleLinkOnClick(tmp4);
      const gbtCpWResult = hooks_QuestHooks;
      const isSponsoredPlayQuestResult = utils_QuestUtils.isSponsoredPlayQuest(quest);
      const gbtCpWResult1 = utils_QuestUtils;
      if (gbtCpWResult2.isConsoleQuest(quest)) {
        const obj4 = { quest };
        if (!gbtCpWResult3.hasPlayOnDesktopTask(obj4)) {
          if (cResult[4] === connectedConsoleLinkOnClick) {
            if (cResult[5] === quest.config.messages.gameTitle) {
              if (cResult[6] === targetMinutes) {
                let tmp7 = cResult[7];
              }
              return tmp7;
            }
          }
          const intl = util.intl;
          const obj5 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
          const formatResult = intl.format(util.t["l4S+cQ"], obj5);
          cResult[4] = connectedConsoleLinkOnClick;
          cResult[5] = quest.config.messages.gameTitle;
          cResult[6] = targetMinutes;
          cResult[7] = formatResult;
          tmp7 = formatResult;
        }
        gbtCpWResult3 = QuestTaskUtils;
      }
      gbtCpWResult2 = QuestTaskUtils;
      if (gbtCpWResult4.isConsoleQuest(quest)) {
        if (isSponsoredPlayQuestResult) {
          if (cResult[8] === connectedConsoleLinkOnClick) {
          }
          const intl9 = util.intl;
          gbtCpW = util.t.gbtCpW;
          const obj6 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
          formatResult1 = intl9.format(gbtCpW, obj6);
          cResult[8] = connectedConsoleLinkOnClick;
          cResult[9] = targetMinutes;
          cResult[10] = formatResult1;
        } else {
          if (cResult[11] === connectedConsoleLinkOnClick) {
            if (cResult[12] === quest.config.messages.gameTitle) {
              if (cResult[13] === targetMinutes) {
                let tmp36 = cResult[14];
              }
              return tmp36;
            }
          }
          const intl8 = util.intl;
          const obj7 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
          const formatResult2 = intl8.format(util.t.Ajlcd7, obj7);
          cResult[11] = connectedConsoleLinkOnClick;
          cResult[12] = quest.config.messages.gameTitle;
          cResult[13] = targetMinutes;
          cResult[14] = formatResult2;
          tmp36 = formatResult2;
        }
      } else if (isSponsoredPlayQuestResult) {
        if (cResult[15] !== targetMinutes) {
          const intl7 = util.intl;
          const obj8 = { targetMinutes };
          const formatResult3 = intl7.format(util.t.Hu8SKW, obj8);
          cResult[15] = targetMinutes;
          cResult[16] = formatResult3;
          let tmp34 = formatResult3;
        } else {
          tmp34 = cResult[16];
        }
        return tmp34;
      } else {
        if (gbtCpWResult5.hasWatchVideoTasks(quest)) {
          if (cResult[17] !== quest.config) {
            const _Symbol = Symbol;
            const forResult = Symbol.for("react.early_return_sentinel");
            const defaultWatchVideoTask = QuestTaskUtils.getDefaultWatchVideoTask(quest.config);
            let videoTitle;
            if (defaultWatchVideoTask != null) {
              videoTitle = defaultWatchVideoTask.messages.videoTitle;
            }
            if (null != videoTitle) {
              const intl6 = util.intl;
              const obj9 = { videoTitle };
              const formatToPlainStringResult = intl6.formatToPlainString(util.t["9m9Mna"], obj9);
              let tmp28 = forResult;
            } else {
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = util.intl;
                const stringResult = intl5.string(util.t["o+e9yh"]);
                cResult[20] = stringResult;
                tmp28 = stringResult;
              } else {
                tmp28 = cResult[20];
              }
            }
            cResult[17] = quest.config;
            cResult[18] = formatToPlainStringResult;
            cResult[19] = tmp28;
            const gbtCpWResult6 = QuestTaskUtils;
          } else {
            let tmp21 = cResult[18];
            const _Symbol3 = Symbol;
            if (cResult[19] !== Symbol.for("react.early_return_sentinel")) {
              tmp21 = tmp22;
            }
            return tmp21;
          }
        } else if (null != thirdPartyTaskDetails) {
          return thirdPartyTaskDetails.title;
        } else {
          if (gbtCpWResult7.hasPlayActivityTask(quest)) {
            if (gbtCpWResult8.isPlayAnyActivityQuest(quest)) {
              if (cResult[21] !== targetMinutes) {
                const intl4 = util.intl;
                const obj10 = { minutes: targetMinutes };
                const formatResult4 = intl4.format(util.t["1NaRSs"], obj10);
                cResult[21] = targetMinutes;
                cResult[22] = formatResult4;
              }
            } else {
              if (cResult[23] === quest.config.messages.gameTitle) {
                if (cResult[24] === targetMinutes) {
                  let tmp16 = cResult[25];
                }
                return tmp16;
              }
              const intl3 = util.intl;
              const obj11 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
              const formatResult5 = intl3.format(util.t.xHXCyf, obj11);
              cResult[23] = quest.config.messages.gameTitle;
              cResult[24] = targetMinutes;
              cResult[25] = formatResult5;
              tmp16 = formatResult5;
            }
            gbtCpWResult8 = utils_QuestUtils;
          } else {
            const v6zWtV8 = util.t["6zWtV8"];
            const obj12 = { quest };
            if (!gbtCpWResult9.hasPlayOnDesktopTask(obj12)) {
              if (cResult[26] === quest.config.messages.gameTitle) {
                if (cResult[27] === targetMinutes) {
                  if (cResult[28] === v6zWtV8) {
                    let tmp14 = cResult[29];
                  }
                  return tmp14;
                }
              }
              const intl2 = util.intl;
              const obj13 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
              const formatResult6 = intl2.format(v6zWtV8, obj13);
              cResult[26] = quest.config.messages.gameTitle;
              cResult[27] = targetMinutes;
              cResult[28] = v6zWtV8;
              cResult[29] = formatResult6;
              tmp14 = formatResult6;
            } else {
              const features = quest.config.features;
              const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
              const t = util.t;
            }
            gbtCpWResult9 = QuestTaskUtils;
          }
          gbtCpWResult7 = QuestTaskUtils;
        }
        gbtCpWResult5 = QuestTaskUtils;
      }
      gbtCpWResult4 = QuestTaskUtils;
    }
  }
  const obj14 = { quest, questContent, sourceQuestContent };
  cResult[0] = quest;
  cResult[1] = questContent;
  cResult[2] = sourceQuestContent;
  cResult[3] = obj14;
  tmp4 = obj14;
}) : ((quest, arg1, questContent, sourceQuestContent) => {
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
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest, sourceQuestContent, location, gameProfileSource, popoutTargetElementRef) => {
  let lOVr0O = require;
  let formatToPlainStringResult = dependencyMap;
  const cResult = c.c(9);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  if (cResult[0] === gameProfileSource) {
    if (cResult[1] === location) {
      if (cResult[2] === popoutTargetElementRef) {
        if (cResult[3] === quest) {
          if (cResult[4] === sourceQuestContent) {
            if (cResult[5] === questTaskDetails) {
              let tmp4 = cResult[6];
            }
            const userStatus = quest.userStatus;
            let claimedAt;
            if (userStatus != null) {
              claimedAt = userStatus.claimedAt;
            }
            const tmp6 = closure_14(tmp4);
            const tmp9 = null != claimedAt;
            const userStatus2 = quest.userStatus;
            let claimedAt1;
            if (userStatus2 != null) {
              claimedAt1 = userStatus2.claimedAt;
            }
            const questFormattedDate = hooks_QuestHooks.useQuestFormattedDate(claimedAt1);
            if (!tmp9) {
              return tmp6;
            } else if (cResult[7] !== questFormattedDate) {
              const intl = util.intl;
              lOVr0O = util.t.lOVr0O;
              const obj3 = { claimDate: questFormattedDate };
              formatToPlainStringResult = intl.formatToPlainString(lOVr0O, obj3);
              cResult[7] = questFormattedDate;
              cResult[8] = formatToPlainStringResult;
            }
            const lOVr0OResult = hooks_QuestHooks;
          }
        }
      }
    }
  }
  const obj4 = { quest, taskDetails: questTaskDetails, location, sourceQuestContent, popoutTargetElementRef, gameProfileSource };
  cResult[0] = gameProfileSource;
  cResult[1] = location;
  cResult[2] = popoutTargetElementRef;
  cResult[3] = quest;
  cResult[4] = sourceQuestContent;
  cResult[5] = questTaskDetails;
  cResult[6] = obj4;
  tmp4 = obj4;
}) : ((quest, sourceQuestContent, location, gameProfileSource, popoutTargetElementRef) => {
  let formatToPlainStringResult = closure_14({ quest, taskDetails: hooks_QuestHooks.useQuestTaskDetails(quest), location, sourceQuestContent, popoutTargetElementRef, gameProfileSource });
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
});
ReactCompilerGating = fn(558);
const constants3 = { PLAY: 0, [0]: "PLAY", STREAM: 1, [1]: "STREAM", WATCH_VIDEO: 2, [2]: "WATCH_VIDEO", IN_GAME: 3, [3]: "IN_GAME" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(27);
  ({ quest, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, hasAlreadyLinked, onClickGameTitle, isExpanded, activeScreen } = arg0);
  const questFormattedDate = hooks_QuestHooks.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(quest);
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
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let enrolledAt;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  hooks_QuestHooks;
  if (cResult[2] === onGameSheetClosed) {
    if (cResult[3] === onGameSheetOpened) {
      if (cResult[4] === popoutTargetElementRef) {
        if (cResult[5] === quest) {
          if (cResult[6] === sourceQuestContent) {
            if (tmp12) {
              if (cResult[9] !== questFormattedDate) {
                const intl9 = util.intl;
                const obj5 = { expirationDate: questFormattedDate };
                const formatToPlainStringResult = intl9.formatToPlainString(util.t.APddvF, obj5);
                cResult[9] = questFormattedDate;
                cResult[10] = formatToPlainStringResult;
                let tmp40 = formatToPlainStringResult;
              } else {
                tmp40 = cResult[10];
              }
              return tmp40;
            } else {
              if (tmpResult9.hasAchievementInGameTask(quest)) {
                if (false === hasAlreadyLinked) {
                  const _Symbol5 = Symbol;
                  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl8 = util.intl;
                    const stringResult = intl8.string(util.t.mAdqf7);
                    cResult[11] = stringResult;
                    let tmp38 = stringResult;
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
                    const gameTitle = quest.config.messages.gameTitle;
                    if (cResult[12] === gameTitle) {
                      if (cResult[13] === onClickGameTitle) {
                        return cResult[14];
                      }
                    }
                    if (null != onClickGameTitle) {
                      const intl7 = util.intl;
                      const obj6 = { gameTitle, onClickGameTitle };
                      let formatResult = intl7.format(util.t.X8hBDz, obj6);
                    } else {
                      const intl6 = util.intl;
                      const obj7 = { gameTitle };
                      formatResult = intl6.format(util.t.u3mdpP, obj7);
                    }
                    cResult[12] = gameTitle;
                    cResult[13] = onClickGameTitle;
                    cResult[14] = formatResult;
                  }
                }
                if (activeScreen !== QuestTypes.TaskPlatformScreen.SELECT) {
                  if (tmpResult11.isSponsoredPlayQuest(quest)) {
                    if (tmp14) {
                      if (!tmp15) {
                        if (cResult[15] === stateFromStores) {
                          if (cResult[16] === quest.config) {
                            if (cResult[17] === questTaskDetails.targetMinutes) {
                              let tmp33 = cResult[18];
                            }
                            return tmp33;
                          }
                        }
                        const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
                        const intl5 = util.intl;
                        const obj8 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: questTaskDetails.targetMinutes };
                        const formatResult1 = intl5.format(util.t["1votF6"], obj8);
                        cResult[15] = stateFromStores;
                        cResult[16] = quest.config;
                        cResult[17] = questTaskDetails.targetMinutes;
                        cResult[18] = formatResult1;
                        tmp33 = formatResult1;
                        const tmpResult12 = QuestRewardUtils;
                      }
                    }
                  }
                  tmpResult11 = utils_QuestUtils;
                }
                return tmp20;
              } else if (tmpResult10.hasWatchVideoTasks(quest)) {
                const _Symbol4 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = util.intl;
                  const stringResult1 = intl4.string(util.t["o+e9yh"]);
                  cResult[19] = stringResult1;
                  let tmp31 = stringResult1;
                } else {
                  tmp31 = cResult[19];
                }
                return tmp31;
              } else if (tmp21 > 0) {
                if (tmpResult13.hasAchievementInGameTask(quest)) {
                  if (true === hasAlreadyLinked) {
                    const _Symbol3 = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = util.intl;
                      const stringResult2 = intl3.string(util.t.JkyCIO);
                      cResult[20] = stringResult2;
                      let tmp29 = stringResult2;
                    } else {
                      tmp29 = cResult[20];
                    }
                    return tmp29;
                  }
                }
                if (tmp17) {
                  if (cResult[22] === quest) {
                    if (cResult[23] === tmp26) {
                      if (cResult[24] === questTaskDetails) {
                        let tmp27 = cResult[25];
                      }
                      return tmp27;
                    }
                  }
                  const obj9 = { quest, taskDetails: questTaskDetails, thirdPartyTaskDetails };
                  const contextualEntrypointHeading = QuestCopyUtils.getContextualEntrypointHeading(obj9);
                  cResult[22] = quest;
                  cResult[23] = thirdPartyTaskDetails;
                  cResult[24] = questTaskDetails;
                  cResult[25] = contextualEntrypointHeading;
                  tmp27 = contextualEntrypointHeading;
                  const tmpResult14 = QuestCopyUtils;
                } else {
                  const _Symbol2 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = util.intl;
                    const stringResult3 = intl2.string(util.t.mOrpXG);
                    cResult[21] = stringResult3;
                    let tmp24 = stringResult3;
                  } else {
                    tmp24 = cResult[21];
                  }
                  return tmp24;
                }
                tmpResult13 = QuestTaskUtils;
              } else {
                const _Symbol = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = util.intl;
                  const stringResult4 = intl.string(util.t.S6UUc5);
                  cResult[26] = stringResult4;
                  let tmp22 = stringResult4;
                } else {
                  tmp22 = cResult[26];
                }
                return tmp22;
              }
              tmpResult9 = QuestTaskUtils;
            }
          }
        }
      }
    }
  }
  tmp12 = null != completedAt;
  tmp14 = null != enrolledAt;
  tmp15 = questTaskDetails.percentComplete > 0;
  const tmpResult = initialize;
  cResult[2] = onGameSheetClosed;
  cResult[3] = onGameSheetOpened;
  cResult[4] = popoutTargetElementRef;
  cResult[5] = quest;
  cResult[6] = sourceQuestContent;
  cResult[7] = questTaskDetails;
  cResult[8] = { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, gameProfileSource: GameProfileAnalyticUtils.GameProfileSources.QuestBar };
  const obj10 = { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, gameProfileSource: GameProfileAnalyticUtils.GameProfileSources.QuestBar };
}) : ((arg0) => {
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
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(2);
  if (cResult[0] !== quest) {
    const tmp4 = getSimplifiedQuestTaskType(quest);
    cResult[0] = quest;
    cResult[1] = tmp4;
    let tmp2 = tmp4;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => getSimplifiedQuestTaskType(closure_0), items);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((userStatus, arg1) => {
  const cResult = c.c(11);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const tmpResult = initialize;
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(userStatus);
  const tmpResult8 = hooks_QuestHooks;
  const tmpResult9 = hooks_QuestHooks;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(userStatus);
  userStatus = userStatus.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmp11 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const _Symbol4 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl6 = util.intl;
      const stringResult = intl6.string(util.t["ij5E/5"]);
      cResult[2] = stringResult;
      let tmp27 = stringResult;
    } else {
      tmp27 = cResult[2];
    }
    return tmp27;
  } else {
    if (tmpResult11.hasAchievementInGameTask(userStatus)) {
      if (false === arg1) {
        const _Symbol3 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = util.intl;
          const stringResult1 = intl5.string(util.t.s9r2a1);
          cResult[3] = stringResult1;
          let tmp25 = stringResult1;
        } else {
          tmp25 = cResult[3];
        }
        return tmp25;
      }
    }
    tmpResult11 = QuestTaskUtils;
    if (tmpResult12.hasAchievementInGameTask(userStatus)) {
      if (true === arg1) {
        if (0 === tmp11) {
          const _Symbol2 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult2 = intl4.string(util.t["2+opCy"]);
            cResult[4] = stringResult2;
            let tmp23 = stringResult2;
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
      if (tmp11 > 0) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp11) {
            let tmp20 = cResult[7];
          }
          return tmp20;
        }
        const tmpResult13 = NumberUtils;
        const intl3 = util.intl;
        const obj2 = { percent: NumberUtils.formatPercent(stateFromStores, tmp11, { roundingMode: "floor" }) };
        const formatToPlainStringResult = intl3.formatToPlainString(util.t.lVZaXD, obj2);
        cResult[5] = stateFromStores;
        cResult[6] = tmp11;
        cResult[7] = formatToPlainStringResult;
        tmp20 = formatToPlainStringResult;
        const formatPercentResult = NumberUtils.formatPercent(stateFromStores, tmp11, { roundingMode: "floor" });
      }
    }
    if (_slicedToArray(tmpResult9.useTaskPlatformScreen(userStatus, questTaskDetails), 1)[0] === QuestTypes.TaskPlatformScreen.SELECT) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult3 = intl2.string(util.t.EMrUHQ);
        cResult[8] = stringResult3;
      }
    } else if (cResult[9] !== userStatus) {
      const tmpResult14 = QuestTaskUtils;
      const intl = util.intl;
      const string = intl.string;
      let mOrpXG = util.t;
      if (isConsoleQuestResult) {
        mOrpXG = mOrpXG.mOrpXG;
        let stringResult4 = string(mOrpXG);
      } else {
        stringResult4 = string(mOrpXG["7e5k7L"]);
      }
      cResult[9] = userStatus;
      cResult[10] = stringResult4;
      isConsoleQuestResult = QuestTaskUtils.isConsoleQuest(userStatus);
    } else {
      return cResult[10];
    }
    tmpResult12 = QuestTaskUtils;
  }
  const tmpResult10 = hooks_QuestHooks;
}) : ((userStatus, arg1) => {
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(userStatus);
  const obj3 = hooks_QuestHooks;
  const thirdPartyTaskDetails = hooks_QuestHooks.useThirdPartyTaskDetails(userStatus);
  userStatus = userStatus.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmp7 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const intl6 = util.intl;
    return intl6.string(util.t["ij5E/5"]);
  } else {
    if (tmpResult.hasAchievementInGameTask(userStatus)) {
      if (false === arg1) {
        const intl5 = util.intl;
        return intl5.string(util.t.s9r2a1);
      }
    }
    tmpResult = QuestTaskUtils;
    if (tmpResult4.hasAchievementInGameTask(userStatus)) {
      if (true === arg1) {
        if (0 === tmp7) {
          const intl4 = util.intl;
          return intl4.string(util.t["2+opCy"]);
        }
      }
    }
    const userStatus2 = userStatus.userStatus;
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
    if (_slicedToArray(obj3.useTaskPlatformScreen(userStatus, questTaskDetails), 1)[0] === QuestTypes.TaskPlatformScreen.SELECT) {
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
      isConsoleQuestResult = QuestTaskUtils.isConsoleQuest(userStatus);
    }
    return stringResult;
  }
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ quest, application, shortText } = arg0);
  const tmp5 = closure_17(quest);
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(quest);
  if (constants3.PLAY === tmp5) {
    const features2 = quest.config.features;
    let hasItem = features2.includes(constants2.MOBILE_ACTIVITY_QUEST);
    if (hasItem) {
      let tmp28Result = null == application;
      if (!tmp28Result) {
        let supported_platforms;
        if (application != null) {
          const embeddedActivityConfig2 = application.embeddedActivityConfig;
          if (embeddedActivityConfig2 != null) {
            supported_platforms = embeddedActivityConfig2.supported_platforms;
          }
        }
        tmp28Result = isActivitySupportedOnClientPlatformDefault(supported_platforms);
      }
      hasItem = tmp28Result;
    }
    if (hasItem) {
      const features3 = quest.config.features;
      if (features3.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = util.intl;
          const stringResult = intl6.string(util.t["+qoymD"]);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        if (tmpResult4.canLaunchActivity(quest)) {
          if (cResult[1] !== tmp4) {
            const intl5 = util.intl;
            const t2 = util.t;
            const stringResult1 = intl5.string(tmp4 ? t2.E4kW5O : t2["Ie9++s"]);
            cResult[1] = tmp4;
            cResult[2] = stringResult1;
          } else {
            return cResult[2];
          }
        }
        tmpResult4 = utils_QuestUtils;
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = util.intl;
      const stringResult2 = intl4.string(util.t.l7E81v);
      cResult[3] = stringResult2;
      let tmp31 = stringResult2;
    } else {
      tmp31 = cResult[3];
    }
    return tmp31;
  } else if (constants3.STREAM === tmp5) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult3 = intl3.string(util.t.l7E81v);
      cResult[4] = stringResult3;
      let tmp21 = stringResult3;
    } else {
      tmp21 = cResult[4];
    }
    return tmp21;
  } else if (constants3.WATCH_VIDEO === tmp5) {
    if (cResult[5] !== questTaskDetails) {
      const videoQuestWatchCtaText = MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(questTaskDetails);
      cResult[5] = questTaskDetails;
      cResult[6] = videoQuestWatchCtaText;
      let tmp18 = videoQuestWatchCtaText;
      const tmpResult5 = MobileQuestVideoWatchCtaCopy;
    } else {
      tmp18 = cResult[6];
    }
    return tmp18;
  } else if (constants3.IN_GAME === tmp5) {
    if (cResult[7] === application) {
      if (cResult[8] === quest) {
        if (cResult[9] === tmp4) {
          return cResult[10];
        }
      }
    }
    if (!tmpResult6.canLaunchActivity(quest)) {
      const intl = util.intl;
      const stringResult4 = intl.string(util.t.l7E81v);
      cResult[7] = application;
      cResult[8] = quest;
      cResult[9] = tmp4;
      cResult[10] = stringResult4;
    } else {
      const features = quest.config.features;
      let hasItem1 = features.includes(constants2.MOBILE_ACTIVITY_QUEST);
      if (hasItem1) {
        let tmp13Result = null == application;
        if (!tmp13Result) {
          let supported_platforms1;
          if (application != null) {
            const embeddedActivityConfig = application.embeddedActivityConfig;
            if (embeddedActivityConfig != null) {
              supported_platforms1 = embeddedActivityConfig.supported_platforms;
            }
          }
          tmp13Result = isActivitySupportedOnClientPlatformDefault(supported_platforms1);
        }
        hasItem1 = tmp13Result;
      }
    }
    const intl2 = util.intl;
    const t = util.t;
    intl2.string(tmp4 ? t.CkUzLd : t["hRIVy+"]);
    tmpResult6 = utils_QuestUtils;
  }
  const tmpResult = hooks_QuestHooks;
}) : ((arg0) => {
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
        const intl6 = util.intl;
        return intl6.string(util.t["+qoymD"]);
      } else {
        if (tmp2Result.canLaunchActivity(quest)) {
          const intl5 = util.intl;
          const t2 = util.t;
          return intl5.string(shortText ? t2.E4kW5O : t2["Ie9++s"]);
        }
        tmp2Result = utils_QuestUtils;
      }
    }
    const intl4 = util.intl;
    return intl4.string(util.t.l7E81v);
  } else if (constants3.STREAM === tmp) {
    const intl3 = util.intl;
    return intl3.string(util.t.l7E81v);
  } else if (constants3.WATCH_VIDEO === tmp) {
    return MobileQuestVideoWatchCtaCopy.getVideoQuestWatchCtaText(tmp5);
  } else if (constants3.IN_GAME === tmp) {
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
        const intl2 = util.intl;
        const t = util.t;
        intl2.string(shortText ? t.CkUzLd : t["hRIVy+"]);
      }
    }
    const intl = util.intl;
    return intl.string(util.t.l7E81v);
  }
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  const cResult = c.c(4);
  const result = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(config);
  if (cResult[0] !== config) {
    const result1 = QuestRewardUtils.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
    cResult[0] = config;
    cResult[1] = result1;
    let tmp5 = result1;
    const tmpResult = QuestRewardUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (!result) {
    return null;
  } else {
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
    if (tmp5) {
      t = t["hh7Rb/"];
      let stringResult = string(t);
    } else {
      stringResult = string(t.GYGb3A);
    }
    cResult[2] = tmp5;
    cResult[3] = stringResult;
  }
}) : ((arg0) => {
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = tmp3;
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
export const useQuestsInstructionsToWinReward = tmp4;
export const useQuestDescription = tmp5;
export const useQuestBarSubtitle = tmp6;
export const useQuestBarTitle = tmp7;
export const usePrimaryCtaCopy = tmp8;
export const usePremiumExtendableCopy = tmp9;
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
export const useModalCtaConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = require("c").c(15);
  quest = quest.quest;
  _require = quest;
  const questContent = quest.questContent;
  preCtaClick = quest.preCtaClick;
  const getImpressionId = quest.getImpressionId;
  const sourceQuestContent = quest.sourceQuestContent;
  if (cResult[0] === getImpressionId) {
    if (cResult[1] === preCtaClick) {
      if (cResult[2] === quest) {
        if (cResult[3] === questContent) {
          if (cResult[4] === sourceQuestContent) {
            let tmp4 = cResult[5];
          }
          const ctaConfig = quest.config.ctaConfig;
          let subtitle;
          if (ctaConfig != null) {
            subtitle = ctaConfig.subtitle;
          }
          if (null == subtitle) {
            if (tmpResult.hasAchievementInGameTask(quest)) {
              subtitle = quest.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle;
            } else {
              const questType = tmp(tmp2[12]).getQuestType(quest.config);
              if (questType === tmp(tmp2[29]).QuestType.GAMEPLAY) {
                const features = quest.config.features;
                if (!features.includes(constants2.NON_GAMING_PLAY_QUEST)) {
                  if (!tmpResult5.isSponsoredPlayQuest(quest)) {
                    const _Symbol = Symbol;
                    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(tmp2[8]).intl;
                      const stringResult = intl.string(tmp(tmp2[8]).t["wirwN+"]);
                      cResult[6] = stringResult;
                      let tmp9 = stringResult;
                    } else {
                      tmp9 = cResult[6];
                    }
                    subtitle = tmp9;
                  }
                  tmpResult5 = tmp(tmp2[12]);
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(tmp2[8]).intl;
                const stringResult1 = intl2.string(tmp(tmp2[8]).t.y8Xf3k);
                cResult[7] = stringResult1;
                let tmp12 = stringResult1;
              } else {
                tmp12 = cResult[7];
              }
              subtitle = tmp12;
              const tmpResult4 = tmp(tmp2[12]);
            }
            tmpResult = tmp(tmp2[13]);
          }
          if (cResult[8] !== quest) {
            const externalCtaLabel = tmp(tmp2[23]).getExternalCtaLabel(quest);
            cResult[8] = quest;
            cResult[9] = externalCtaLabel;
            let tmp14 = externalCtaLabel;
            const tmpResult6 = tmp(tmp2[23]);
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp4) {
            if (cResult[11] === subtitle) {
              if (cResult[12] === quest.config.messages.gameTitle) {
                if (cResult[13] === tmp14) {
                  let tmp16 = cResult[14];
                }
                return tmp16;
              }
            }
          }
          let obj2 = { ctaText: tmp14, ctaVariant: "secondary", onClickCta: tmp4, title: quest.config.messages.gameTitle, subtitle, ctaIconPosition: "end" };
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
  _require = getImpressionId(function*() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            let tmp10;
            if (v3 != null) {
              tmp10 = v3();
            }
            content = 1;
            v3 = 1;
            const obj4 = { value: tmp10, done: false };
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
          const obj6 = { content, ctaContent: tmp4(preCtaClick[28]).QuestContentCTA.OPEN_GAME_LINK, impressionId: null, sourceQuestContent: null };
          let tmp5;
          if (getImpressionId != null) {
            tmp5 = getImpressionId();
          }
          obj6.impressionId = tmp5;
          obj6.sourceQuestContent = sourceQuestContent;
          tmp4(preCtaClick[27]).openGameLinkDirectly(tmp4, obj6);
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        v3 = tmp;
        throw tmp11;
      }
    }
  });
  function defaultOnClickCta() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = getImpressionId;
  cResult[1] = preCtaClick;
  cResult[2] = quest;
  cResult[3] = questContent;
  cResult[4] = sourceQuestContent;
  cResult[5] = defaultOnClickCta;
  tmp4 = defaultOnClickCta;
  let obj = require("c");
}) : ((quest) => {
  quest = quest.quest;
  ({ questContent: importDefault, preCtaClick: dependencyMap, getImpressionId: asyncGeneratorStep, sourceQuestContent: _slicedToArray } = quest);
  noop = async function _defaultOnClickCta2() {
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
        return { value: "IconComponent", done: null };
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
          const obj6 = { content: closure_128_1, ctaContent: tmp4(7212).QuestContentCTA.OPEN_GAME_LINK, impressionId: null, sourceQuestContent: null };
          let tmp5;
          if (closure_128_3 != null) {
            tmp5 = closure_128_3();
          }
          obj6.impressionId = tmp5;
          obj6.sourceQuestContent = closure_128_4;
          tmp4(10918).openGameLinkDirectly(closure_128_0, obj6);
          dependencyMap = 3;
          return { value: "IconComponent", done: null };
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
  obj.ctaText = quest(10010).getExternalCtaLabel(quest);
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
});