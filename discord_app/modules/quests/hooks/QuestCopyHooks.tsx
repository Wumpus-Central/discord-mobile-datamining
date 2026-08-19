// discord_app/modules/quests/hooks/QuestCopyHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import shortenAndLocalizeNumber from "../../../utils/NumberUtils.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import QuestsVisibleMessagesChangedSource from "../QuestTypes.tsx";
import isSponsoredPlayQuest from "../utils/QuestUtils.tsx";
import getApplicationIdsByTaskTypes from "../utils/QuestTaskUtils.tsx";
import isActivitySupportedOnClientPlatformDefault from "../../activities/utils/isActivitySupportedOnClientPlatform.tsx";
import GameProfileEmbedAction from "../../game_profile/GameProfileAnalyticUtils.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import _getDefaultRewardName from "../utils/QuestRewardUtils.tsx";
import getContextualEntrypointHeading from "../utils/QuestCopyUtils.tsx";
import useQuests from "QuestHooks.tsx";
import useInGameQuestConnectState from "../useInGameQuestConnectState.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import _getSystemLocale from "../../user_settings/LocaleStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";
import { HelpdeskArticles } from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

require = fn;
function _getQuestsInstructionsToWinReward(arg0) {
  ({ quest, taskDetails, thirdPartyTaskDetails, withoutMarkdown, currentUser, onGameTitleClick, needsToConnect } = arg0);
  let v1votF6 = obj;
  obj = dependencyMap;
  ({ sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  obj1 = obj(1945);
  const isPremiumResult = obj1.isPremium(currentUser, PremiumTypes.TIER_2);
  let obj2 = obj(10491);
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(quest.config);
  let obj3 = obj(7476);
  let isConsoleQuestResult = obj3.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = v1votF6(7476).shouldUsePlayOnDesktopTask(quest);
    const v1votF6Result = v1votF6(7476);
  }
  const v1votF6Result1 = v1votF6(7474);
  const isSponsoredPlayQuestResult = v1votF6(7474).isSponsoredPlayQuest(quest);
  const defaultRewardNameWithArticle = v1votF6(10491).getDefaultRewardNameWithArticle(quest.config, currentUser);
  if (isSponsoredPlayQuestResult) {
    ({ targetMinutes: targetMinutes4, applications } = taskDetails);
    if (withoutMarkdown) {
      const intl12 = v1votF6(1236).intl;
      v1votF6 = v1votF6(1236).t["1votF6"];
      obj = { rewardNameWithArticle: null, targetMinutes: null };
      obj[0] = defaultRewardNameWithArticle;
      obj[1] = targetMinutes4;
      let formatToPlainStringResult = intl12.formatToPlainString(v1votF6, obj);
    } else {
      obj = { quest: null, sourceQuestContent: null, applications: null, popoutTargetElementRef: null, onGameSheetOpened: null, onGameSheetClosed: null };
      obj[0] = quest;
      obj[1] = sourceQuestContent;
      if (applications == null) {
        applications = [];
      }
      obj[2] = applications;
      obj[3] = popoutTargetElementRef;
      obj[4] = onGameSheetOpened;
      obj[5] = onGameSheetClosed;
      obj = {};
      const gameSheetHook = v1votF6(10955).createGameSheetHook(obj);
      obj[constants2.PACKAGE_ACTION_ADVENTURE] = v1votF6(1236).t.H485IA;
      obj[constants2.PACKAGE_RPG_MMO] = v1votF6(1236).t["3XS8Ni"];
      obj[constants2.PACKAGE_RACING_SPORTS] = v1votF6(1236).t["X+UCju"];
      obj[constants2.PACKAGE_SANDBOX_CREATIVE] = v1votF6(1236).t["6o4n1Q"];
      obj[constants2.PACKAGE_FAMILY_FRIENDLY] = v1votF6(1236).t.DUsNmf;
      obj[constants2.PACKAGE_HOLIDAY_SEASON] = v1votF6(1236).t["cWP8/Z"];
      obj[constants2.PACKAGE_NEW_YEARS] = v1votF6(1236).t["8+sIJz"];
      let features = quest.config.features;
      const found = features.find((item, index) => item in obj);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj[found];
      }
      if (CDeHul == null) {
        CDeHul = v1votF6(1236).t.CDeHul;
      }
      const intl11 = v1votF6(1236).intl;
      obj1 = { rewardNameWithArticle: null, targetMinutes: null, gameSheetHook: null };
      obj1[0] = defaultRewardNameWithArticle;
      obj1[1] = targetMinutes4;
      obj1[2] = gameSheetHook;
      formatToPlainStringResult = intl11.format(CDeHul, obj1);
      const v1votF6Result3 = v1votF6(10955);
    }
  } else if (isConsoleQuestResult) {
    const targetMinutes3 = taskDetails.targetMinutes;
    const result = v1votF6(10491).isCollectibleQuestRewardPremiumExtendable(quest.config);
    const v1votF6Result4 = v1votF6(10491);
    const features4 = quest.config.features;
    const result1 = v1votF6(10491).isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
    const hasItem = features4.includes(constants2.NON_GAMING_PLAY_QUEST);
    if (isPremiumResult) {
      if (result) {
        if (!result1) {
          const t25 = v1votF6(1236).t;
          if (hasItem) {
            let v1AcTqm = t25["1AcTqm"];
          } else {
            v1AcTqm = tmp84 ? t25.klYWbT : t25.ziB0HF;
          }
        }
        if (!hasItem) {
          if (null != collectibleQuestRewardDuration) {
            const t27 = v1votF6(1236).t;
          } else {
            const t26 = v1votF6(1236).t;
          }
        }
        if (null != collectibleQuestRewardDuration) {
          let ztXW8V2 = v1votF6(1236).t.u5QXpw;
        } else {
          ztXW8V2 = v1votF6(1236).t.ztXW8V;
        }
      }
    }
    if (!result) {
      if (null == collectibleQuestRewardDuration) {
        const t23 = v1votF6(1236).t;
        if (hasItem) {
          let prop = t23["e+K3xJ"];
        } else {
          prop = tmp84 ? t23.GFdaUK : t23.NIimTt;
        }
        obj2 = { gameTitle: null, streamingDurationRequirement: null, rewardNameWithArticle: null, duration: null, targetMinutes: null, onGameTitleClick: null };
        obj2[0] = quest.config.messages.gameTitle;
        obj2[1] = targetMinutes3;
        obj2[2] = defaultRewardNameWithArticle;
        obj2[3] = collectibleQuestRewardDuration;
        obj2[4] = targetMinutes3;
        obj2[5] = onGameTitleClick;
        const intl10 = v1votF6(1236).intl;
        if (withoutMarkdown) {
          let formatToPlainStringResult1 = intl10.formatToPlainString(prop, obj2);
        } else {
          formatToPlainStringResult1 = intl10.format(prop, obj2);
        }
      }
    }
    const t24 = v1votF6(1236).t;
    if (hasItem) {
      let enQ3jU2 = t24.enQ3jU;
    } else {
      enQ3jU2 = tmp84 ? t24["4JS2QJ"] : t24.AwuMRS;
    }
    const v1votF6Result5 = v1votF6(10491);
  } else {
    if (v1votF6Result6.isConsoleQuest(quest)) {
      const targetMinutes2 = taskDetails.targetMinutes;
      const result2 = v1votF6(10491).isCollectibleQuestRewardPremiumExtendable(quest.config);
      const v1votF6Result7 = v1votF6(10491);
      if (isPremiumResult) {
        if (result2) {
          if (!v1votF6Result8.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
            const t20 = v1votF6(1236).t;
          }
          if (null == collectibleQuestRewardDuration) {
            const t21 = v1votF6(1236).t;
          }
          const t22 = v1votF6(1236).t;
        }
      }
      if (!result2) {
        if (null == collectibleQuestRewardDuration) {
          const t18 = v1votF6(1236).t;
          const tmp72 = tmp71 ? t18.GFdaUK : t18.NIimTt;
          obj3 = { gameTitle: null, targetMinutes: null, rewardNameWithArticle: null, duration: null, streamingDurationRequirement: null, onGameTitleClick: null };
          obj3[0] = quest.config.messages.gameTitle;
          obj3[1] = targetMinutes2;
          obj3[2] = defaultRewardNameWithArticle;
          obj3[3] = collectibleQuestRewardDuration;
          obj3[4] = targetMinutes2;
          obj3[5] = onGameTitleClick;
          const intl9 = v1votF6(1236).intl;
          if (withoutMarkdown) {
            let formatToPlainStringResult2 = intl9.formatToPlainString(tmp72, obj3);
          } else {
            formatToPlainStringResult2 = intl9.format(tmp72, obj3);
          }
        }
      }
      const t19 = v1votF6(1236).t;
      v1votF6Result8 = v1votF6(10491);
    } else {
      if (v1votF6Result9.shouldUsePlayOnDesktopTask(quest)) {
        const result3 = v1votF6(10491).isCollectibleQuestRewardPremiumExtendable(quest.config);
        const v1votF6Result10 = v1votF6(10491);
        const features3 = quest.config.features;
        const result4 = v1votF6(10491).isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
        const hasItem1 = features3.includes(constants2.NON_GAMING_PLAY_QUEST);
        if (isPremiumResult) {
          if (result3) {
            if (!result4) {
              const t15 = v1votF6(1236).t;
              if (hasItem1) {
                let v1AcTqm1 = t15["1AcTqm"];
              } else {
                v1AcTqm1 = tmp59 ? t15.klYWbT : t15.ziB0HF;
              }
            }
            if (!hasItem1) {
              if (null != collectibleQuestRewardDuration) {
                const t17 = v1votF6(1236).t;
              } else {
                const t16 = v1votF6(1236).t;
              }
            }
            if (null != collectibleQuestRewardDuration) {
              let ztXW8V = v1votF6(1236).t.u5QXpw;
            } else {
              ztXW8V = v1votF6(1236).t.ztXW8V;
            }
          }
        }
        if (!result3) {
          if (null == collectibleQuestRewardDuration) {
            const t13 = v1votF6(1236).t;
            if (hasItem1) {
              let v03VJqu = t13["03VJqu"];
            } else {
              v03VJqu = tmp59 ? t13.NrD2h8 : t13.FZL5Q5;
            }
            const obj4 = { gameTitle: null, streamingDurationRequirement: null, rewardNameWithArticle: null, duration: null, questReward: null, onGameTitleClick: null };
            obj4[0] = quest.config.messages.gameTitle;
            obj4[1] = taskDetails.targetMinutes;
            obj4[2] = defaultRewardNameWithArticle;
            obj4[3] = collectibleQuestRewardDuration;
            obj4[4] = defaultRewardNameWithArticle;
            obj4[5] = onGameTitleClick;
            const intl8 = v1votF6(1236).intl;
            if (withoutMarkdown) {
              let formatToPlainStringResult3 = intl8.formatToPlainString(v03VJqu, obj4);
            } else {
              formatToPlainStringResult3 = intl8.format(v03VJqu, obj4);
            }
          }
        }
        const t14 = v1votF6(1236).t;
        if (hasItem1) {
          let enQ3jU = t14.enQ3jU;
        } else {
          enQ3jU = tmp59 ? t14["4JS2QJ"] : t14.AwuMRS;
        }
        const v1votF6Result11 = v1votF6(10491);
      } else {
        const obj5 = { quest: null };
        obj5[0] = quest;
        if (v1votF6Result12.isTieredRewardCodeQuest(obj5)) {
          if (null != onGameTitleClick) {
            let HHVg4i = v1votF6(1236).t.HHVg4i;
          } else {
            HHVg4i = v1votF6(1236).t["a/ia7F"];
          }
          const obj6 = { gameTitle: null, streamingDurationRequirement: null, onGameTitleClick: null };
          obj6[0] = quest.config.messages.gameTitle;
          obj6[1] = taskDetails.targetMinutes;
          obj6[2] = onGameTitleClick;
          const intl7 = v1votF6(1236).intl;
          if (withoutMarkdown) {
            let formatToPlainStringResult4 = intl7.formatToPlainString(HHVg4i, obj6);
          } else {
            formatToPlainStringResult4 = intl7.format(HHVg4i, obj6);
          }
        } else {
          const v1votF6Result13 = v1votF6(7476);
          const v1votF6Result14 = v1votF6(7476);
          if (hasWatchVideoTasksResult) {
            const defaultWatchVideoTask = v1votF6Result14.getDefaultWatchVideoTask(quest.config);
            let str3;
            if (defaultWatchVideoTask != null) {
              str3 = defaultWatchVideoTask.messages.videoTitle;
            }
            if (str3 == null) {
              str3 = "video";
            }
            const result5 = v1votF6(10491).isCollectibleQuestRewardPremiumExtendable(quest.config);
            const v1votF6Result15 = v1votF6(10491);
            if (result5) {
              if (isPremiumResult) {
                if (!v1votF6Result16.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                  const prop1 = v1votF6(1236).t["vs/xBu"];
                }
                if (null != collectibleQuestRewardDuration) {
                  let tXwfJT = v1votF6(1236).t.tXwfJT;
                } else {
                  tXwfJT = v1votF6(1236).t["xqX+r5"];
                }
              }
            }
            if (!result5) {
              if (null == collectibleQuestRewardDuration) {
                if (quest.id === closure_9) {
                  let Rsd5bL = v1votF6(1236).t.Rsd5bL;
                } else {
                  Rsd5bL = v1votF6(1236).t["g+InPC"];
                }
              }
              const obj7 = { videoTitle: null, rewardNameWithArticle: null, duration: null };
              obj7[0] = str3;
              obj7[1] = defaultRewardNameWithArticle;
              obj7[2] = collectibleQuestRewardDuration;
              const intl6 = v1votF6(1236).intl;
              if (withoutMarkdown) {
                let formatToPlainStringResult5 = intl6.formatToPlainString(Rsd5bL, obj7);
              } else {
                formatToPlainStringResult5 = intl6.format(Rsd5bL, obj7);
              }
            }
            Rsd5bL = v1votF6(1236).t["W/HkLO"];
            v1votF6Result16 = v1votF6(10491);
          } else if (v1votF6Result14.hasPlayActivityTask(quest)) {
            const targetMinutes = taskDetails.targetMinutes;
            if (!v1votF6Result17.isPlayAnyActivityQuest(quest)) {
              features = quest.config.features;
              if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
                const features2 = quest.config.features;
                if (features2.includes(constants2.CLOUD_GAMING_PROVIDER_NVIDIA)) {
                  const v0NNM3l = v1votF6(1236).t["0NNM3l"];
                  const obj8 = { activityName: null, providerName: "NVIDIA GeForce NOW", providerLink: null, streamingDurationRequirement: null, questReward: null };
                  obj8[0] = quest.config.messages.gameTitle;
                  obj8[2] = combinedDefault.getArticleURL(HelpdeskArticles.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST);
                  obj8[3] = targetMinutes;
                  obj8[4] = defaultRewardNameWithArticle;
                  const intl4 = v1votF6(1236).intl;
                  if (withoutMarkdown) {
                    let formatToPlainStringResult6 = intl4.formatToPlainString(v0NNM3l, obj8);
                  } else {
                    formatToPlainStringResult6 = intl4.format(v0NNM3l, obj8);
                  }
                }
              }
              const UuzHh8 = v1votF6(1236).t.UuzHh8;
              const obj9 = { activityName: null, streamingDurationRequirement: null, questReward: null };
              obj9[0] = quest.config.messages.gameTitle;
              obj9[1] = targetMinutes;
              obj9[2] = defaultRewardNameWithArticle;
              const intl3 = v1votF6(1236).intl;
              if (withoutMarkdown) {
                let formatToPlainStringResult7 = intl3.formatToPlainString(UuzHh8, obj9);
              } else {
                formatToPlainStringResult7 = intl3.format(UuzHh8, obj9);
              }
            }
            const VYwSSu = v1votF6(1236).t.VYwSSu;
            const obj10 = { streamingDurationRequirement: null, questReward: null };
            obj10[0] = targetMinutes;
            obj10[1] = defaultRewardNameWithArticle;
            const intl5 = v1votF6(1236).intl;
            if (withoutMarkdown) {
              let formatToPlainStringResult8 = intl5.formatToPlainString(VYwSSu, obj10);
            } else {
              formatToPlainStringResult8 = intl5.format(VYwSSu, obj10);
            }
            v1votF6Result17 = v1votF6(7474);
          } else {
            if (v1votF6Result18.hasAchievementInGameTask(quest)) {
              if (null != thirdPartyTaskDetails) {
                const result6 = v1votF6(10491).isCollectibleQuestRewardPremiumExtendable(quest.config);
                v1votF6(10491);
                if (needsToConnect) {
                  const t12 = v1votF6(1236).t;
                } else {
                  if (isPremiumResult) {
                    if (result6) {
                      if (!tmp17) {
                        if (null != collectibleQuestRewardDuration) {
                          const t9 = v1votF6(1236).t;
                        } else {
                          const t8 = v1votF6(1236).t;
                        }
                      }
                      if (null == collectibleQuestRewardDuration) {
                        const t10 = v1votF6(1236).t;
                      }
                      const t11 = v1votF6(1236).t;
                    }
                  }
                  if (!result6) {
                    if (null == collectibleQuestRewardDuration) {
                      const t6 = v1votF6(1236).t;
                      const tmp19 = tmp18 ? t6.bxN0nx : t6.thO6iA;
                      const obj11 = { gameTitle: null, objective: null, duration: null, questReward: null, onGameTitleClick: null };
                      obj11[0] = quest.config.messages.gameTitle;
                      let sum = str;
                      if (needsToConnect) {
                        const formatted = str.charAt(0).toLowerCase();
                        sum = formatted + str.slice(1);
                        const str2 = str.charAt(0);
                      }
                      obj11[1] = sum;
                      obj11[2] = collectibleQuestRewardDuration;
                      obj11[3] = defaultRewardNameWithArticle;
                      obj11[4] = onGameTitleClick;
                      const intl2 = v1votF6(1236).intl;
                      if (withoutMarkdown) {
                        let formatToPlainStringResult9 = intl2.formatToPlainString(tmp19, obj11);
                      } else {
                        formatToPlainStringResult9 = intl2.format(tmp19, obj11);
                      }
                    }
                  }
                  const t7 = v1votF6(1236).t;
                }
                const v1votF6Result19 = v1votF6(10491);
              }
            }
            if (null != thirdPartyTaskDetails) {
              let description = thirdPartyTaskDetails.description;
            } else {
              const result7 = v1votF6(10491).isCollectibleQuestRewardPremiumExtendable(quest.config);
              const v1votF6Result21 = v1votF6(10491);
              if (isPremiumResult) {
                if (result7) {
                  if (!v1votF6Result22.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                    const t3 = v1votF6(1236).t;
                  }
                  if (null == collectibleQuestRewardDuration) {
                    const t4 = v1votF6(1236).t;
                  }
                  const t5 = v1votF6(1236).t;
                }
              }
              if (!result7) {
                if (null == collectibleQuestRewardDuration) {
                  const t = v1votF6(1236).t;
                  const tmp10 = tmp102 ? t.ER9rII : t["hkJ+Gs"];
                  const obj12 = { gameTitle: null, streamingDurationRequirement: null, duration: null, questReward: null, onGameTitleClick: null };
                  obj12[0] = quest.config.messages.gameTitle;
                  obj12[1] = taskDetails.targetMinutes;
                  obj12[2] = collectibleQuestRewardDuration;
                  obj12[3] = defaultRewardNameWithArticle;
                  obj12[4] = onGameTitleClick;
                  const intl = v1votF6(1236).intl;
                  if (withoutMarkdown) {
                    description = intl.formatToPlainString(tmp10, obj12);
                  } else {
                    description = intl.format(tmp10, obj12);
                  }
                }
              }
              const t2 = v1votF6(1236).t;
              v1votF6Result22 = v1votF6(10491);
            }
            return description;
          }
          hasWatchVideoTasksResult = v1votF6(7476).hasWatchVideoTasks(quest);
        }
        v1votF6Result12 = v1votF6(10491);
      }
      v1votF6Result9 = v1votF6(7476);
    }
    v1votF6Result6 = v1votF6(7476);
  }
  const v1votF6Result2 = v1votF6(10491);
}
function useQuestsInstructionsToWinReward(arg0) {
  ({ quest, gameProfileSource, withoutMarkdown } = arg0);
  let obj = initialize;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const thirdPartyTaskDetails = useQuests.useThirdPartyTaskDetails(quest);
  const tmp = undefined !== withoutMarkdown && withoutMarkdown;
  const inGameQuestConnectState = useInGameQuestConnectState.useInGameQuestConnectState(quest);
  const result = getApplicationIdsByTaskTypes.hasAchievementInGameTask(quest);
  const obj5 = getApplicationIdsByTaskTypes;
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
    gameProfileSource = GameProfileEmbedAction.GameProfileSources.QuestHome;
  }
  obj[2] = gameProfileSource;
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
({ QuestsExperimentLocations: closure_8, ORBS_INTRO_QUEST_ID: c9, QuestVariants: c10 } = QuestsExperimentLocations);
let closure_15 = { PLAY: 0, [0]: "PLAY", STREAM: 1, [1]: "STREAM", WATCH_VIDEO: 2, [2]: "WATCH_VIDEO", IN_GAME: 3, [3]: "IN_GAME" };
let result = require("obj132").fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = function useQuestInstructionTitle(config, arg1, questContent, sourceQuestContent) {
  let obj = useQuests;
  const targetMinutes = obj.useQuestTaskDetails(config).targetMinutes;
  obj1 = useQuests;
  const thirdPartyTaskDetails = obj1.useThirdPartyTaskDetails(config);
  let obj2 = useQuests;
  obj = { quest: config, questContent, sourceQuestContent };
  const connectedConsoleLinkOnClick = obj2.useConnectedConsoleLinkOnClick(obj);
  let obj4 = isSponsoredPlayQuest;
  const isSponsoredPlayQuestResult = obj4.isSponsoredPlayQuest(config);
  let obj5 = getApplicationIdsByTaskTypes;
  if (obj5.isConsoleQuest(config)) {
    let tmpResult = getApplicationIdsByTaskTypes;
    obj = { quest: null };
    obj[0] = config;
    if (!tmpResult.hasPlayOnDesktopTask(obj)) {
      const intl = getSystemLocale.intl;
      obj1 = { minutes: null, onClick: null, gameTitle: null };
      obj1[0] = targetMinutes;
      obj1[1] = connectedConsoleLinkOnClick;
      obj1[2] = config.config.messages.gameTitle;
      return intl.format(getSystemLocale.t["l4S+cQ"], obj1);
    }
  }
  tmpResult = getApplicationIdsByTaskTypes;
  if (tmpResult.isConsoleQuest(config)) {
    const intl7 = getSystemLocale.intl;
    const format2 = intl7.format;
    const t3 = getSystemLocale.t;
    if (isSponsoredPlayQuestResult) {
      obj2 = { onClick: null, minutes: null };
      obj2[0] = connectedConsoleLinkOnClick;
      obj2[1] = targetMinutes;
      let format2Result = format2(t3.gbtCpW, obj2);
    } else {
      const obj3 = { minutes: null, onClick: null, gameTitle: null };
      obj3[0] = targetMinutes;
      obj3[1] = connectedConsoleLinkOnClick;
      obj3[2] = config.config.messages.gameTitle;
      format2Result = format2(t3.Ajlcd7, obj3);
    }
    return format2Result;
  } else if (isSponsoredPlayQuestResult) {
    const intl6 = getSystemLocale.intl;
    obj4 = { targetMinutes: null };
    obj4[0] = targetMinutes;
    return intl6.format(getSystemLocale.t.Hu8SKW, obj4);
  } else {
    if (tmpResult1.hasWatchVideoTasks(config)) {
      const defaultWatchVideoTask = getApplicationIdsByTaskTypes.getDefaultWatchVideoTask(config.config);
      let videoTitle;
      if (defaultWatchVideoTask != null) {
        videoTitle = defaultWatchVideoTask.messages.videoTitle;
      }
      if (null == videoTitle) {
        const intl5 = getSystemLocale.intl;
        let stringResult = intl5.string(getSystemLocale.t["o+e9yh"]);
      } else {
        const intl4 = getSystemLocale.intl;
        obj5 = { videoTitle: null };
        obj5[0] = videoTitle;
        stringResult = intl4.formatToPlainString(getSystemLocale.t["9m9Mna"], obj5);
      }
      return stringResult;
    } else if (null != thirdPartyTaskDetails) {
      return thirdPartyTaskDetails.title;
    } else {
      if (tmpResult3.hasPlayActivityTask(config)) {
        const result = isSponsoredPlayQuest.isPlayAnyActivityQuest(config);
        const intl3 = getSystemLocale.intl;
        const format = intl3.format;
        const t2 = getSystemLocale.t;
        if (result) {
          const obj6 = { minutes: null };
          obj6[0] = targetMinutes;
          let formatResult = format(t2["1NaRSs"], obj6);
        } else {
          const obj7 = { minutes: null, activityName: null };
          obj7[0] = targetMinutes;
          obj7[1] = config.config.messages.gameTitle;
          formatResult = format(t2.xHXCyf, obj7);
        }
        return formatResult;
      } else {
        const obj8 = { quest: null };
        obj8[0] = config;
        if (!tmpResult5.hasPlayOnDesktopTask(obj8)) {
          const intl2 = getSystemLocale.intl;
          const obj9 = { minutes: null, gameTitle: null };
          obj9[0] = targetMinutes;
          obj9[1] = config.config.messages.gameTitle;
          return intl2.format(getSystemLocale.t["6zWtV8"], obj9);
        } else {
          const features = config.config.features;
          const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
          const t = getSystemLocale.t;
        }
        tmpResult5 = getApplicationIdsByTaskTypes;
      }
      tmpResult3 = getApplicationIdsByTaskTypes;
    }
    tmpResult1 = getApplicationIdsByTaskTypes;
  }
};
export const getQuestsInstructionsToWinReward = function getQuestsInstructionsToWinReward(currentUser) {
  const obj = {};
  const merged = Object.assign(currentUser);
  currentUser = currentUser.currentUser;
  if (currentUser == null) {
    currentUser = currentUser.getCurrentUser();
  }
  obj.currentUser = currentUser;
  return _getQuestsInstructionsToWinReward(obj);
};
export { useQuestsInstructionsToWinReward };
export const useQuestDescription = function useQuestDescription(quest, sourceQuestContent, QUEST_HOME_MOBILE, QuestHome) {
  let obj = { quest, taskDetails: useQuests.useQuestTaskDetails(quest), location: QUEST_HOME_MOBILE, sourceQuestContent, popoutTargetElementRef: arg4, gameProfileSource: QuestHome };
  let formatToPlainStringResult = useQuestsInstructionsToWinReward(obj);
  const userStatus = quest.userStatus;
  let claimedAt;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  useQuests;
  const userStatus2 = quest.userStatus;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  if (tmp5) {
    const intl = getSystemLocale.intl;
    obj = { claimDate: null };
    obj[0] = tmp7;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.lOVr0O, obj);
  }
  return formatToPlainStringResult;
};
export const useQuestBarSubtitle = function useQuestBarSubtitle(arg0) {
  ({ quest, hasAlreadyLinked, onClickGameTitle } = arg0);
  ({ isExpanded, sourceQuestContent, activeScreen, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  let obj = useQuests;
  const questFormattedDate = obj.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  obj1 = useQuests;
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  let obj2 = useQuests;
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  let obj3 = initialize;
  const items = [closure_7];
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
  let tmpResult = useQuests;
  obj = { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, gameProfileSource: null };
  const isQuestProgressing = tmpResult.useIsQuestProgressing(quest);
  obj[7] = GameProfileEmbedAction.GameProfileSources.QuestBar;
  if (tmp8) {
    const intl9 = getSystemLocale.intl;
    obj = { expirationDate: null };
    obj[0] = questFormattedDate;
    return intl9.formatToPlainString(getSystemLocale.t.APddvF, obj);
  } else {
    tmpResult = getApplicationIdsByTaskTypes;
    if (tmpResult.hasAchievementInGameTask(quest)) {
      if (false === hasAlreadyLinked) {
        const intl8 = getSystemLocale.intl;
        return intl8.string(getSystemLocale.t.mAdqf7);
      }
    }
    const tmpResult1 = getApplicationIdsByTaskTypes;
    if (isExpanded) {
      if (tmpResult1.hasAchievementInGameTask(quest)) {
        if (true === hasAlreadyLinked) {
          const gameTitle = quest.config.messages.gameTitle;
          if (null != onClickGameTitle) {
            const intl7 = getSystemLocale.intl;
            obj1 = { gameTitle: null, onClickGameTitle: null };
            obj1[0] = gameTitle;
            obj1[1] = onClickGameTitle;
            let formatResult = intl7.format(getSystemLocale.t.X8hBDz, obj1);
          } else {
            const intl6 = getSystemLocale.intl;
            obj2 = { gameTitle: null };
            obj2[0] = gameTitle;
            formatResult = intl6.format(getSystemLocale.t.u3mdpP, obj2);
          }
          return formatResult;
        }
      }
      if (activeScreen !== QuestsVisibleMessagesChangedSource.TaskPlatformScreen.SELECT) {
        if (tmpResult2.isSponsoredPlayQuest(quest)) {
          if (tmp10) {
            if (!tmp11) {
              const defaultRewardNameWithArticle = _getDefaultRewardName.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
              const intl5 = getSystemLocale.intl;
              obj3 = { rewardNameWithArticle: null, targetMinutes: null };
              obj3[0] = defaultRewardNameWithArticle;
              obj3[1] = questTaskDetails.targetMinutes;
              return intl5.format(getSystemLocale.t["1votF6"], obj3);
            }
          }
        }
        tmpResult2 = isSponsoredPlayQuest;
      }
      return tmp13;
    } else {
      if (tmpResult1.hasWatchVideoTasks(quest)) {
        const intl4 = getSystemLocale.intl;
        let stringResult = intl4.string(getSystemLocale.t["o+e9yh"]);
      } else if (tmp14 > 0) {
        if (!tmpResult4.hasAchievementInGameTask(quest)) {
          if (isQuestProgressing) {
            const obj4 = { quest: null, taskDetails: null, thirdPartyTaskDetails: null };
            obj4[0] = quest;
            obj4[1] = questTaskDetails;
            obj4[2] = thirdPartyTaskDetails;
            let contextualEntrypointHeading = getContextualEntrypointHeading.getContextualEntrypointHeading(obj4);
            const tmpResult5 = getContextualEntrypointHeading;
          } else {
            const intl2 = getSystemLocale.intl;
            contextualEntrypointHeading = intl2.string(getSystemLocale.t.mOrpXG);
          }
        }
        const intl3 = getSystemLocale.intl;
        contextualEntrypointHeading = intl3.string(getSystemLocale.t.JkyCIO);
        tmpResult4 = getApplicationIdsByTaskTypes;
      } else {
        const intl = getSystemLocale.intl;
        stringResult = intl.string(getSystemLocale.t.S6UUc5);
      }
      return stringResult;
    }
  }
  tmp10 = null != enrolledAt;
  tmp11 = questTaskDetails.percentComplete > 0;
  tmp8 = null != completedAt;
};
export const useQuestBarTitle = function useQuestBarTitle(questCreative) {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const questTaskDetails = useQuests.useQuestTaskDetails(questCreative);
  const obj3 = useQuests;
  const thirdPartyTaskDetails = useQuests.useThirdPartyTaskDetails(questCreative);
  const userStatus = questCreative.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmp7 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["ij5E/5"]);
  } else {
    let tmpResult = getApplicationIdsByTaskTypes;
    if (tmpResult.hasAchievementInGameTask(questCreative)) {
      if (false === arg1) {
        const intl5 = getSystemLocale.intl;
        return intl5.string(getSystemLocale.t.s9r2a1);
      }
    }
    tmpResult = getApplicationIdsByTaskTypes;
    if (tmpResult.hasAchievementInGameTask(questCreative)) {
      if (true === arg1) {
        if (0 === tmp7) {
          const intl4 = getSystemLocale.intl;
          return intl4.string(getSystemLocale.t["2+opCy"]);
        }
      }
    }
    const userStatus2 = questCreative.userStatus;
    let enrolledAt;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      if (tmp7 > 0) {
        const tmpResult1 = shortenAndLocalizeNumber;
        const intl3 = getSystemLocale.intl;
        obj = { percent: null };
        obj[0] = shortenAndLocalizeNumber.formatPercent(stateFromStores, tmp7, { roundingMode: "floor" });
        return intl3.formatToPlainString(getSystemLocale.t.lVZaXD, obj);
      }
    }
    if (callback(obj3.useTaskPlatformScreen(questCreative, questTaskDetails), 1)[0] === QuestsVisibleMessagesChangedSource.TaskPlatformScreen.SELECT) {
      const intl2 = getSystemLocale.intl;
      let stringResult = intl2.string(getSystemLocale.t.EMrUHQ);
    } else {
      const tmpResult2 = getApplicationIdsByTaskTypes;
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const t = getSystemLocale.t;
      if (isConsoleQuestResult) {
        stringResult = string(t.mOrpXG);
      } else {
        stringResult = string(t["7e5k7L"]);
      }
      isConsoleQuestResult = getApplicationIdsByTaskTypes.isConsoleQuest(questCreative);
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
  const memo = React.useMemo(() => {
    let obj = quest(dependencyMap[11]);
    if (!obj.isConsoleQuest(quest)) {
      let tmp2Result = quest(dependencyMap[11]);
      if (!tmp2Result.hasPlayActivityTask(quest)) {
        tmp2Result = quest(dependencyMap[11]);
        obj = { quest: null };
        obj[0] = quest;
        if (tmp2Result.hasStreamOnDesktopTask(obj)) {
          let PLAY = closure_1_15.STREAM;
        } else {
          if (tmp2Result1.hasWatchVideoOnMobileTasks(quest)) {
            PLAY = closure_1_15.WATCH_VIDEO;
          } else {
            PLAY = quest(dependencyMap[11]).isInGameQuest(quest) ? closure_1_15.IN_GAME : closure_1_15.PLAY;
            const tmp2Result2 = quest(dependencyMap[11]);
          }
          tmp2Result1 = quest(dependencyMap[11]);
        }
      }
      return PLAY;
    }
    PLAY = closure_1_15.PLAY;
  }, items);
  quest(10684);
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
        const intl6 = quest(1236).intl;
        const t3 = quest(1236).t;
        return intl6.string(flag ? t3.V5Qt9D : t3["+qoymD"]);
      } else {
        let tmp2Result = quest(7474);
        if (tmp2Result.canLaunchActivity(quest)) {
          const intl5 = quest(1236).intl;
          const t2 = quest(1236).t;
          return intl5.string(shortText ? t2.E4kW5O : t2["Ie9++s"]);
        }
      }
    }
    const intl4 = quest(1236).intl;
    return intl4.string(quest(1236).t.l7E81v);
  } else if (constants3.STREAM === memo) {
    const intl3 = quest(1236).intl;
    return intl3.string(quest(1236).t.l7E81v);
  } else if (constants3.WATCH_VIDEO === memo) {
    tmp2Result = quest(10705);
    return tmp2Result.getVideoQuestWatchCtaText(tmp5);
  } else if (constants3.IN_GAME === memo) {
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
        const intl2 = quest(1236).intl;
        const t = quest(1236).t;
        intl2.string(shortText ? t.CkUzLd : t["hRIVy+"]);
      }
    }
    const intl = quest(1236).intl;
    return intl.string(quest(1236).t.l7E81v);
  }
};
export const usePremiumExtendableCopy = function usePremiumExtendableCopy(arg0) {
  const _require = arg0;
  const items = [arg0];
  [][0] = arg0;
  const memo = React.useMemo(() => callback(dependencyMap[12]).isCollectibleQuestRewardPremiumExtendable(callback), items);
  if (!memo) {
    return null;
  } else {
    const intl = require("../../../intl/index.native.tsx").intl;
    const string = intl.string;
    let t = require("../../../intl/index.native.tsx").t;
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
  let obj = _getDefaultRewardName;
  let platform;
  const result = obj.isTieredRewardCodeQuest({ quest });
  if (rewardCode != null) {
    platform = rewardCode.platform;
  }
  if (platform == null) {
    platform = QuestsVisibleMessagesChangedSource.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  let rewardCodeQuestReward = null;
  if (result) {
    let tmpResult = _getDefaultRewardName;
    obj = { quest: null, idx: null };
    obj[0] = quest;
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
    obj[1] = tier;
    rewardCodeQuestReward = tmpResult.getRewardCodeQuestReward(obj);
  }
  tmpResult = getContextualEntrypointHeading;
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
  ({ questContent: importDefault, preCtaClick: dependencyMap, getImpressionId: closure_3, sourceQuestContent: closure_4 } = quest);
  function _defaultOnClickCta() {
    const self = this;
    const tmp = closure_1_3(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              let tmp10;
              if (dependencyMap != null) {
                tmp10 = dependencyMap();
              }
              c1 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp10;
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj2 = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
            obj2[0] = c1;
            obj2[1] = closure_1_0(7480).QuestContentCTA.OPEN_GAME_LINK;
            let tmp5;
            if (callback != null) {
              tmp5 = callback();
            }
            obj2[2] = tmp5;
            obj2[3] = closure_4;
            closure_1_0(10689).openGameLinkDirectly(closure_0, obj2);
            dependencyMap = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          dependencyMap = tmp;
          throw tmp11;
        }
      }
    });
    closure_5 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const items = [quest];
  let obj = { ctaText: null, ctaVariant: "secondary", onClickCta: null, title: null, subtitle: null, ctaIconPosition: "end" };
  const memo = _defaultOnClickCta.useMemo(() => {
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
        let tmp5Result = quest(dependencyMap[10]);
        const questType = tmp5Result.getQuestType(messages.config);
        if (questType === quest(dependencyMap[27]).QuestType.GAMEPLAY) {
          const features = messages.config.features;
          if (!features.includes(closure_1_10.NON_GAMING_PLAY_QUEST)) {
            tmp5Result = quest(dependencyMap[10]);
            if (!tmp5Result.isSponsoredPlayQuest(messages)) {
              const intl = quest(dependencyMap[8]).intl;
              taskTitle = intl.string(quest(dependencyMap[8]).t["wirwN+"]);
            }
          }
        }
        const intl2 = quest(dependencyMap[8]).intl;
        taskTitle = intl2.string(quest(dependencyMap[8]).t.y8Xf3k);
      }
      obj3 = quest(dependencyMap[11]);
    }
  }, items);
  obj[0] = quest(10496).getExternalCtaLabel(quest);
  obj[2] = function defaultOnClickCta() {
    const self = this;
    const apply = _defaultOnClickCta.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj[3] = quest.config.messages.gameTitle;
  obj[4] = memo;
  return obj;
};