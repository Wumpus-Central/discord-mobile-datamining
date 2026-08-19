// === Module 10684: useQuests ===

// Module 10684 (useQuests)
import initialize from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1217 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7145 */;
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7451 */;
import isSponsoredPlayQuest from "isSponsoredPlayQuest" /* 7474 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7476 */;
import QuestType from "QuestType" /* 7479 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10376 */;
import _getDefaultRewardName from "_getDefaultRewardName" /* 10491 */;
import getContextualEntrypointHeading from "getContextualEntrypointHeading" /* 10496 */;
import useRefocusOrLaunchActivityDefault from "useRefocusOrLaunchActivity" /* 10709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import set from "set" /* 5221 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import set2 from "set" /* 7452 */;
import { useConsoleQuestUIStore } from "useConsoleQuestUIStore" /* 7454 */;
import initializeState from "initializeState" /* 7453 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;
import ME from "ME" /* 676 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

require = fn;
function useQuests(arg0) {
  obj = arg0;
  if (arg0 === undefined) {
    obj = { fetchPolicy: "cache-only", callerSource: "unknown" };
  }
  let lastFetchedCurrentQuests;
  let isEligibleForQuests;
  const tmp = lastFetchedCurrentQuests(isEligibleForQuests.useState(false), 2);
  const hasFetched = tmp[0];
  dependencyMap = tmp[1];
  let items = [closure_12];
  let quests = obj(589).useStateFromStoresArray(items, () => {
    const quests = closure_12.quests;
    const items = [...quests.values()];
    return items;
  });
  let obj2 = obj(589);
  const items1 = [closure_12];
  let excludedQuests = obj(589).useStateFromStoresArray(items1, () => {
    const excludedQuests = closure_12.excludedQuests;
    const items = [...excludedQuests.values()];
    return items;
  });
  let obj3 = obj(589);
  const items2 = [closure_12];
  const stateFromStoresObject = obj(589).useStateFromStoresObject(items2, () => ({ isFetchingCurrentQuests: closure_12.isFetchingCurrentQuests, lastFetchedCurrentQuests: closure_12.lastFetchedCurrentQuests }));
  const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  const obj4 = obj(589);
  isEligibleForQuests = obj(10685).getIsEligibleForQuests();
  const items3 = [obj.fetchPolicy, isEligibleForQuests, hasFetched, isFetchingCurrentQuests, lastFetchedCurrentQuests, obj.callerSource];
  const effect = isEligibleForQuests.useEffect(() => {
    const fetchPolicy = obj.fetchPolicy;
    if ("cache-only" !== fetchPolicy) {
      if ("cache-or-network" === fetchPolicy) {
        let flag = 0 === lastFetchedCurrentQuests;
      } else {
        flag = true;
        if ("cache-and-network" !== fetchPolicy) {
          const fetchPolicy2 = tmp.fetchPolicy;
        }
      }
      if (flag) {
        flag = isEligibleForQuests;
      }
      if (flag) {
        flag = !hasFetched;
      }
      if (flag) {
        flag = !isFetchingCurrentQuests;
      }
      if (flag) {
        dependencyMap(true);
        obj = obj(10477);
        const currentQuests = obj.fetchCurrentQuests();
        if (obj2.isMac()) {
          const state = hasFetched(10501).getState();
          const obj3 = hasFetched(10501);
        }
        obj2 = obj(500);
      }
    }
  }, items3);
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
}
function defaultSortFn(id, id2, questHomeHero, get) {
  let tmp2 = id.id === closure_20;
  if (tmp2) {
    const userStatus = id.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    tmp2 = null == completedAt;
  }
  let tmp5 = id2.id === closure_20;
  if (tmp5) {
    const userStatus2 = id2.userStatus;
    let completedAt1;
    if (userStatus2 != null) {
      completedAt1 = userStatus2.completedAt;
    }
    tmp5 = null == completedAt1;
  }
  if (tmp2 !== tmp5) {
    let num15 = 1;
    if (tmp2) {
      num15 = c28;
    }
    return num15;
  } else {
    const isQuestExpiredResult = getQuestDeliveryDataForPlacement.isQuestExpired(id);
    const userStatus12 = id.userStatus;
    let claimedAt;
    if (userStatus12 != null) {
      claimedAt = userStatus12.claimedAt;
    }
    const userStatus3 = id2.userStatus;
    let claimedAt1;
    if (userStatus3 != null) {
      claimedAt1 = userStatus3.claimedAt;
    }
    const userStatus4 = id.userStatus;
    let enrolledAt;
    if (userStatus4 != null) {
      enrolledAt = userStatus4.enrolledAt;
    }
    const userStatus5 = id2.userStatus;
    let enrolledAt1;
    if (userStatus5 != null) {
      enrolledAt1 = userStatus5.enrolledAt;
    }
    const result = 30 * obj132Default.Millis.MINUTE;
    const userStatus6 = id.userStatus;
    let completedAt2;
    if (userStatus6 != null) {
      completedAt2 = userStatus6.completedAt;
    }
    const userStatus7 = id.userStatus;
    let enrolledAt2;
    if (userStatus7 != null) {
      enrolledAt2 = userStatus7.enrolledAt;
    }
    let tmp21 = null != enrolledAt2 && null == completedAt2;
    if (tmp21) {
      const _Date = Date;
      const userStatus8 = id.userStatus;
      let enrolledAt3;
      const timestamp = Date.now();
      if (userStatus8 != null) {
        enrolledAt3 = userStatus8.enrolledAt;
      }
      const date = new Date(enrolledAt3);
      tmp21 = timestamp - date.getTime() > result;
    }
    const userStatus9 = id2.userStatus;
    let completedAt3;
    if (userStatus9 != null) {
      completedAt3 = userStatus9.completedAt;
    }
    const userStatus10 = id2.userStatus;
    let enrolledAt4;
    if (userStatus10 != null) {
      enrolledAt4 = userStatus10.enrolledAt;
    }
    let tmp32 = null != enrolledAt4 && null == completedAt3;
    if (tmp32) {
      const _Date2 = Date;
      const userStatus11 = id2.userStatus;
      let enrolledAt5;
      const timestamp1 = Date.now();
      if (userStatus11 != null) {
        enrolledAt5 = userStatus11.enrolledAt;
      }
      const date1 = new Date(enrolledAt5);
      tmp32 = timestamp1 - date1.getTime() > result;
    }
    if (isQuestExpiredResult) {
      if (tmp9 !== tmp11) {
        let num14 = 1;
        if (tmp9) {
          num14 = c28;
        }
        let result1 = num14;
      } else if (tmp13 !== tmp15) {
        let num13 = 1;
        if (tmp13) {
          num13 = c28;
        }
        result1 = num13;
      } else {
        const expiresAt2 = id.config.expiresAt;
        let num12 = 1;
        if (constants7.DESC === constants7.DESC) {
          num12 = c28;
        }
        result1 = expiresAt2.localeCompare(id2.config.expiresAt) * num12;
      }
      return result1;
    } else {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          let tmp50Result = isSponsoredPlayQuest;
          const result2 = tmp50Result.isQuestFeaturedByHero(questHomeHero, id.id);
          tmp50Result = isSponsoredPlayQuest;
          let num2 = 1;
          if (result2) {
            num2 = c28;
          }
          return num2;
        }
      }
      const questType = isSponsoredPlayQuest.getQuestType(id.config);
      const tmp50Result1 = isSponsoredPlayQuest;
      const questType1 = isSponsoredPlayQuest.getQuestType(id2.config);
      const tmp50Result2 = isSponsoredPlayQuest;
      const result3 = getApplicationIdsByTaskTypes.hasWatchVideoOnMobileTasks(id);
      const tmp50Result3 = getApplicationIdsByTaskTypes;
      const result4 = getApplicationIdsByTaskTypes.hasWatchVideoOnMobileTasks(id2);
      if (result3 !== result4) {
        if (!result3) {
          return num3;
        }
        let num11 = 1;
        if (result3) {
          num11 = c28;
        }
        num3 = num11;
      }
      if (questType !== questType1) {
        num3 = 1;
        if (questType === QuestType.QuestType.VIDEO) {
          num3 = c28;
        }
      }
      if (tmp21 === tmp32) {
        if (tmp9 !== tmp11) {
        } else if (tmp13 !== tmp15) {
        } else {
          get.get(id.id);
          const value = get.get(id2.id);
          if (null != value) {
            if (null != value) {
              if (value !== value) {
              } else if (id.id !== id2.id) {
              }
            }
          }
          if (null != value) {
          } else {
            let num4 = 1;
            if (null == value) {
              const expiresAt = id.config.expiresAt;
              if (constants7.ASC === constants7.DESC) {
                num4 = c28;
              }
              const num5 = expiresAt.localeCompare(id2.config.expiresAt) * num4;
            }
          }
        }
      }
      const tmp50Result4 = getApplicationIdsByTaskTypes;
    }
  }
}
function recentSortFn(config, config2) {
  const startsAt = config.config.startsAt;
  let num = 1;
  if (constants7.DESC === constants7.DESC) {
    num = c28;
  }
  return startsAt.localeCompare(config2.config.startsAt) * num;
}
function recentlyEnrolledSortFn(userStatus, userStatus2) {
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  userStatus2 = userStatus2.userStatus;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  if (null == enrolledAt) {
    if (null == enrolledAt) {
      const expiresAt = userStatus.config.expiresAt;
      let num3 = 1;
      if (constants7.DESC === constants7.DESC) {
        num3 = c28;
      }
      let num = expiresAt.localeCompare(userStatus2.config.expiresAt) * num3;
    }
    return num;
  }
  if (null != enrolledAt) {
    if (null == enrolledAt) {
      num = c28;
    }
  }
  if (null != enrolledAt) {
    let num2 = 1;
    if (constants7.DESC === constants7.DESC) {
      num2 = c28;
    }
    num = enrolledAt.localeCompare(enrolledAt) * num2;
  } else {
    num = 1;
  }
}
function expiringSoonSortFn(config, config2) {
  const expiresAt = config.config.expiresAt;
  let num = 1;
  if (constants7.ASC === constants7.DESC) {
    num = c28;
  }
  return expiresAt.localeCompare(config2.config.expiresAt) * num;
}
function doesQuestPassTaskFilter(quest) {
  if (constants4.VIDEO === arg1) {
    return getApplicationIdsByTaskTypes.hasWatchVideoTasks(quest);
  } else if (tmp.PLAY === arg1) {
    obj = { quest: null };
    obj[0] = quest;
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
    if (!hasPlayOnDesktopTaskResult) {
      let tmp2Result = getApplicationIdsByTaskTypes;
      obj = { quest: null };
      obj[0] = quest;
      hasPlayOnDesktopTaskResult = tmp2Result.hasStreamOnDesktopTask(obj);
    }
    if (!hasPlayOnDesktopTaskResult) {
      tmp2Result = getApplicationIdsByTaskTypes;
      hasPlayOnDesktopTaskResult = tmp2Result.hasPlayActivityTask(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = getApplicationIdsByTaskTypes.isConsoleQuest(quest);
      const tmp2Result1 = getApplicationIdsByTaskTypes;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = getApplicationIdsByTaskTypes.isInGameQuest(quest);
      const tmp2Result2 = getApplicationIdsByTaskTypes;
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    return _getDefaultRewardName.hasVirtualCurrencyReward(config.config);
  } else if (constants5.COLLECTIBLE === arg1) {
    return _getDefaultRewardName.hasCollectiblesQuestReward(config.config);
  } else if (constants5.IN_GAME === arg1) {
    let hasInGameQuestRewardResult = _getDefaultRewardName.hasInGameQuestReward(config.config);
    if (!hasInGameQuestRewardResult) {
      hasInGameQuestRewardResult = _getDefaultRewardName.hasQuestRewardCode(config.config);
      const tmp2Result = _getDefaultRewardName;
    }
    return hasInGameQuestRewardResult;
  } else {
    return false;
  }
}
function sortQuests(arr, isShelfEnabled, memo) {
  let tmp = isShelfEnabled;
  if (isShelfEnabled === undefined) {
    tmp = closure_36;
  }
  let tmp2 = memo;
  if (memo === undefined) {
    tmp2 = closure_37;
  }
  ({ sortMethod, filters } = tmp);
  obj = arr;
  if (null != filters) {
    obj = arr;
    if (0 !== filters.length) {
      let found = arr;
      if (0 !== filters.length) {
        _require = _require(12).groupBy(filters, "group");
        found = arr.filter((item, index) => {
          closure_0 = item;
          const entries = Object.entries(closure_0);
          return entries.every((item, index) => {
            [tmp, arr] = item;
            if ("task" === tmp) {
              let tmp2 = closure_1_34;
            } else if ("reward" === tmp) {
              tmp2 = closure_1_35;
            }
            closure_1 = tmp2;
            return 0 === arr.length || arr.some((item, index) => callback(closure_0, item.filter));
          });
        });
        let obj2 = _require(12);
      }
      obj = found;
    }
  }
  if (constants3.MOST_RECENT === sortMethod) {
    let tmp8 = recentSortFn;
  } else if (constants3.RECENTLY_ENROLLED === sortMethod) {
    tmp8 = recentlyEnrolledSortFn;
  } else if (constants3.EXPIRING_SOON === sortMethod) {
    tmp8 = expiringSoonSortFn;
  } else {
    const SUGGESTED = constants3.SUGGESTED;
    tmp8 = defaultSortFn;
  }
  _require = tmp8;
  closure_1 = tmp2;
  dependencyMap = (function computeRenewableQuestSortKeys(found, currentUserId, isRenewableEndDateSortEnabled) {
    const map = new Map();
    if (isRenewableEndDateSortEnabled) {
      if (null != currentUserId) {
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp8 = nextResult;
          let obj2 = callback(7474);
          if (obj2.hasVariant(nextResult, constants.RENEWABLE_END_DATE)) {
            let result = map.set(tmp8.id, callback2(currentUserId, tmp8.id));
          }
          continue;
        }
        return map;
      }
    }
    return map;
  })(obj, tmp2.currentUserId, tmp2.isRenewableEndDateSortEnabled);
  return obj.sort((arg0, arg1) => {
    const isQuestExpiredResult = callback(7451).isQuestExpired(arg0);
    obj = callback(7451);
    const tmp2 = !isQuestExpiredResult;
    if (tmp2 !== !obj2.isQuestExpired(arg1)) {
      let num = 1;
      if (!isQuestExpiredResult) {
        num = closure_1_28;
      }
      let tmp8 = num;
    } else {
      tmp8 = callback(arg0, arg1, closure_1, dependencyMap);
    }
    return tmp8;
  });
}
function seededQuestSortKey(arg0, arg1) {
  return MurmurHashV3Default.v3("" + arg0 + ":" + arg1) >>> 0;
}
function useAllQuests(quests, closure_36) {
  let stateFromStores1 = quests;
  obj = stateFromStores1(memo[13]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => null);
  stateFromStores1 = undefined;
  let isShelfEnabled;
  const items1 = [closure_12];
  stateFromStores1 = stateFromStores1(memo[13]).useStateFromStores(items1, () => quests.quests);
  let questIds;
  if (stateFromStores != null) {
    questIds = stateFromStores.questIds;
  }
  const items2 = [stateFromStores1, questIds];
  isShelfEnabled = React.useMemo(() => {
    if (null == questIds) {
      obj = { shelfQuests: null, isShelfEnabled: false };
      obj[0] = [];
      return obj;
    } else {
      const mapped = questIds.map((item, index) => lib.get(item));
      const found = mapped.filter(stateFromStores(dependencyMap[51]).isNotNullish);
      const found1 = found.filter((item, index) => !lib(table[18]).isQuestExpired(item));
      if (found1.length <= 1) {
        obj = { shelfQuests: null, isShelfEnabled: false };
        obj[0] = [];
      } else {
        obj = { shelfQuests: null, isShelfEnabled: true };
        obj[0] = found1;
      }
      return obj;
    }
  }, items2).isShelfEnabled;
  const obj2 = stateFromStores1(memo[13]);
  const items3 = [closure_9];
  const stateFromStores2 = stateFromStores1(memo[13]).useStateFromStores(items3, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  memo = stateFromStores2;
  const tmpResult = stateFromStores1(memo[13]);
  obj = { location: constants2.QUEST_HOME_MOBILE };
  const enabled = isShelfEnabled(memo[26]).useConfig(obj).enabled;
  const items4 = [stateFromStores, isShelfEnabled, stateFromStores2, enabled];
  memo = React.useMemo(() => ({ questHomeHero: stateFromStores1, isQuestHomeHeroShelfEnabled: isShelfEnabled, currentUserId: memo, isRenewableEndDateSortEnabled: closure_3 }), items4);
  closure_3 = React.useRef([]);
  closure_4 = React.useRef(closure_36.sortMethod);
  React = React.useRef(closure_36.filters);
  closure_6 = React.useRef(0);
  closure_7 = React.useRef(memo);
  const items5 = [quests, closure_36, memo];
  return React.useMemo(() => {
    if (0 === stateFromStores1.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref4.current === stateFromStores1.length) {
          if (ref2.current === isShelfEnabled.sortMethod) {
            if (ref3.current === tmp3.filters) {
              if (ref5.current === memo) {
                return ref.current;
              }
            }
          }
        }
      }
      const mapped = sortQuests(stateFromStores1, isShelfEnabled, memo).map((item, index) => item.id);
      ref.current = mapped;
      ref2.current = isShelfEnabled.sortMethod;
      ref3.current = isShelfEnabled.filters;
      ref4.current = stateFromStores1.length;
      ref5.current = memo;
      return mapped;
    }
  }, items5);
}
function isQuestHiddenFromQuestHome(userStatus) {
  let isQuestExpiredResult = getQuestDeliveryDataForPlacement.isQuestExpired(userStatus);
  if (isQuestExpiredResult) {
    isQuestExpiredResult = !getQuestDeliveryDataForPlacement.hasUnclaimedReward(userStatus.userStatus);
    const tmpResult = getQuestDeliveryDataForPlacement;
  }
  return isQuestExpiredResult;
}
function useIsQuestProgressing(quest) {
  let _require = quest;
  const items = [closure_12];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_12.isProgressingOnDesktop(quest.id));
  const items1 = [quest];
  _require = quest;
  const memo = React.useMemo(() => quest(first[21]).isQuestProgressingOnConsole(quest), items1);
  obj = _require(589);
  const items2 = [closure_12];
  const items3 = [quest, _require(589).useStateFromStores(items2, () => closure_1_12.getOptimisticProgress(quest.id, quest(dependencyMap[31]).FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  const memo1 = React.useMemo(() => quest(dependencyMap[32]).isVideoQuestProgressing(quest), items3);
  if (!stateFromStores) {
    stateFromStores = memo;
  }
  if (!stateFromStores) {
    stateFromStores = memo1;
  }
  return stateFromStores;
}
function useTaskPlatformScreen(quest, questTaskDetails) {
  closure_1 = questTaskDetails;
  const id = quest.id;
  let _require = id;
  const items = [closure_12];
  const items1 = [_require(first[13]).useStateFromStores(items, () => closure_1_12.selectedTaskPlatform(closure_0)), ];
  const items2 = [id];
  items1[1] = memo2.useCallback((platform) => quest(first[15]).selectTaskPlatform(quest, platform), items2);
  const tmp = hasItem1(items1, 2);
  first = tmp[0];
  const items3 = [quest];
  const memo = memo2.useMemo(() => quest(first[30]).supportedTaskPlatforms(quest), items3);
  const hasItem = memo.includes(constants.DESKTOP);
  hasItem1 = memo.includes(constants.CONSOLE);
  _require = quest;
  obj = _require(first[13]);
  let obj2 = memo2;
  const items4 = [closure_12];
  _require = quest;
  const items5 = [quest];
  const stateFromStores = _require(first[13]).useStateFromStores(items4, () => closure_1_12.isProgressingOnDesktop(quest.id));
  const items6 = [questTaskDetails];
  const memo1 = memo2.useMemo(() => quest(first[21]).isQuestProgressingOnConsole(quest), items5);
  memo2 = memo2.useMemo(() => {
    const match = quest(first[42]).match(closure_1);
    const str = quest(first[42]);
    { taskType: quest(first[31]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult = match.with({ percentComplete: 0 }, () => null);
    obj = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult1 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP);
    const withResult2 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP).with(obj, () => constants.DESKTOP);
    obj1 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.WATCH_VIDEO }, () => constants.DESKTOP);
    const obj2 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE }, () => constants.DESKTOP);
    const obj3 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP }, () => constants.DESKTOP);
    const obj4 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX }, () => constants.CONSOLE);
    const obj5 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION }, () => constants.CONSOLE);
    const obj6 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME }, () => constants.DESKTOP);
    const obj7 = { taskType: quest(first[31]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    return withResult8.with({ taskType: quest(first[31]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY }, () => constants.DESKTOP).exhaustive();
  }, items6);
  if (stateFromStores) {
    let DESKTOP = constants.DESKTOP;
  } else {
    DESKTOP = null;
    if (memo1) {
      DESKTOP = constants.CONSOLE;
    }
  }
  const items7 = [hasItem1, hasItem, memo2, DESKTOP, first];
  const items8 = [
    obj2.useMemo(() => {
      obj = { lastPlatformProgress: memo2, currentProgressingPlatform: DESKTOP, selectedPlatform: first };
      const match = quest(first[42]).match(obj);
      const str = quest(first[42]);
      obj = { currentProgressingPlatform: closure_1_13.DESKTOP };
      const withResult = match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE);
      const withResult1 = match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE).with(obj, () => callback(6719).TaskPlatformScreen.DESKTOP);
      const withResult2 = match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE).with(obj, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE);
      const withResult3 = match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE).with(obj, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.DESKTOP }, () => callback(6719).TaskPlatformScreen.DESKTOP);
      const withResult4 = match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE).with(obj, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.DESKTOP }, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE);
      const withResult5 = match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE).with(obj, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.DESKTOP }, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: closure_1_13.DESKTOP }, () => callback(6719).TaskPlatformScreen.DESKTOP);
      return match.with(obj, () => callback(6719).TaskPlatformScreen.CONSOLE).with(obj, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: closure_1_13.DESKTOP }, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: closure_1_13.CONSOLE }, () => callback(6719).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: closure_1_13.DESKTOP }, () => callback(6719).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, () => {
        if (closure_4) {
          if (closure_3) {
            let SELECT = quest(first[43]).TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = quest(first[43]).TaskPlatformScreen;
        SELECT = closure_4 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
      }).exhaustive();
    }, items7),
    memo,
    tmp[1]
  ];
  return items8;
}
({ QuestTaskPlatform: map1, QuestsExperimentLocations: closure_14, MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES: closure_15, QuestHomeSortMethods: closure_16, SORTED_QUEST_HOME_FILTER_GROUPS: closure_17, TaskFilterTypes: closure_18, RewardFilterTypes: closure_19, MOBILE_ORBS_INTRO_QUEST_ID: closure_20, ORBS_INTRO_QUEST_ID: closure_21, QuestVariants: closure_22 } = QuestsExperimentLocations);
({ HelpdeskArticles: closure_23, PlatformTypes: closure_24, ThemeTypes: closure_25, AnalyticEvents: closure_26 } = ME);
let c28 = -1;
let closure_36 = {};
let closure_37 = { questHomeHero: null, isQuestHomeHeroShelfEnabled: false, currentUserId: null, isRenewableEndDateSortEnabled: false };
let closure_39 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
function useQuestTaskDetails(quest) {
  closure_0 = quest;
  const items = [quest];
  let callback = React.useCallback(() => userStatus(dependencyMap[21]).getQuestTaskDetails(userStatus), items);
  const tmp2 = callback(React.useState(callback()), 2);
  closure_2 = tmp2[1];
  const items1 = [callback];
  const callback1 = React.useCallback(() => callback(callback()), items1);
  const tmp4 = useIsQuestProgressing(quest);
  callback = tmp4;
  const items2 = [quest, tmp4, callback1];
  const effect = React.useEffect(() => {
    userStatus = userStatus.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null != enrolledAt) {
      const userStatus2 = tmp.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (null == completedAt) {
        const userStatus3 = tmp.userStatus;
        let claimedAt;
        if (userStatus3 != null) {
          claimedAt = userStatus3.claimedAt;
        }
        if (null == claimedAt) {
          if (closure_4) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(dependencyMap[19]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              callback1();
            };
          }
        }
      }
    }
    callback1();
  }, items2);
  return tmp2[0];
}
let obj = { UNACCEPTED: 0, [0]: "UNACCEPTED", ACCEPTED: 1, [1]: "ACCEPTED", IN_PROGRESS: 2, [2]: "IN_PROGRESS", COMPLETED: 3, [3]: "COMPLETED", CLAIMED: 4, [4]: "CLAIMED" };
let closure_48 = 6 * obj132Default.Millis.HOUR;
const MINUTE = obj132Default.Millis.MINUTE;
let result = require("obj132").fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export { useQuests };
export { sortQuests };
export const QuestTabs = obj;
export const QuestQueryParams = { TAB: "tab", QUEST_ID: "quest_id", SORT: "sort", FILTER: "filter", AD_CREATIVE_IDS: "ad_creative_ids" };
export const useFilteredQuests = function useFilteredQuests(ALL, closure_4) {
  let tmp = closure_4;
  if (closure_4 === undefined) {
    tmp = closure_36;
  }
  let tmp2 = useQuests({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
  let quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  const map = new Map(quests.map((item, index) => {
    const items = [item.id, item];
    return items;
  }));
  const tmp4 = (function useCompletedAndClaimedQuests(quests) {
    closure_0 = quests;
    const items = [quests];
    const memo = React.useMemo(() => quests.filter((item, index) => {
      const userStatus = item.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      let tmp2 = null != completedAt;
      const userStatus2 = item.userStatus;
      if (userStatus2 != null) {
        const claimedAt = userStatus2.claimedAt;
      }
      if (tmp2) {
        tmp2 = null != claimedAt;
      }
      return tmp2;
    }), items);
    closure_2 = React.useRef([]);
    const items1 = [memo];
    return React.useMemo(() => {
      if (0 === memo.length) {
        return [];
      } else {
        if (ref.current.length > 0) {
          if (ref.current.length === memo.length) {
            return ref.current;
          }
        }
        const sorted = memo.sort((userStatus, userStatus2) => {
          userStatus = userStatus.userStatus;
          let claimedAt;
          if (userStatus != null) {
            claimedAt = userStatus.claimedAt;
          }
          userStatus2 = userStatus2.userStatus;
          let claimedAt1;
          if (userStatus2 != null) {
            claimedAt1 = userStatus2.claimedAt;
          }
          if (null == claimedAt !== (null == claimedAt1)) {
            let num2 = 1;
            if (tmp2) {
              num2 = closure_28;
            }
            let result = num2;
          } else {
            const rewardsExpireAt = userStatus.config.rewardsConfig.rewardsExpireAt;
            let num = 1;
            if (constants.DESC === constants.DESC) {
              num = closure_28;
            }
            result = rewardsExpireAt.localeCompare(userStatus2.config.rewardsConfig.rewardsExpireAt) * num;
          }
          return result;
        });
        const mapped = sorted.map((item, index) => item.id);
        ref.current = mapped;
        return mapped;
      }
    }, items1);
  })(quests);
  quests = [];
  const tmp3 = useAllQuests(quests, tmp);
  while (tmp5 !== undefined) {
    let value = map.get(tmp6);
    let tmp8 = value;
    let removeExpiredQuests = null != value;
    if (removeExpiredQuests) {
      removeExpiredQuests = ALL === obj.ALL;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = tmp.removeExpiredQuests;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = isQuestHiddenFromQuestHome(tmp8);
    }
    let tmp14 = null == tmp8 || removeExpiredQuests;
    if (!tmp14) {
      let arr = quests.push(tmp8);
    }
    continue;
  }
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
};
export const useClaimedQuests = function useClaimedQuests() {
  const _require = React.useRef(false);
  const items = [closure_12];
  let claimedQuests = _require(589).useStateFromStoresArray(items, () => {
    const claimedQuests = closure_12.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  obj = _require(589);
  const items1 = [closure_12];
  const isFetchingClaimedQuests = _require(589).useStateFromStores(items1, () => closure_12.isFetchingClaimedQuests);
  const items2 = [isFetchingClaimedQuests];
  const effect = React.useEffect(() => {
    let current = isFetchingClaimedQuests;
    if (!isFetchingClaimedQuests) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const claimedQuests = ref(dependencyMap[15]).fetchClaimedQuests();
      obj = ref(dependencyMap[15]);
    }
  }, items2);
  return { claimedQuests, isFetchingClaimedQuests };
};
export const useExpiredQuestsMap = function useExpiredQuestsMap() {
  const items = [closure_12];
  return initialize.useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
};
export const useShouldShowBonusOrbsUX = function useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility) {
  const _require = quest;
  const items = [closure_12];
  const items1 = [quest];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let isQuestExpiredResult = null != c0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = closure_1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
  obj = _require(589);
  const result = _require(10491).hasVirtualCurrencyReward(quest.config);
  const obj2 = _require(10491);
  const result1 = _require(10491).hasPremiumOrbQuantity(quest.config);
  let tmp4 = !stateFromStores;
  if (!stateFromStores) {
    tmp4 = result;
  }
  if (tmp4) {
    tmp4 = result1;
  }
  if (tmp4) {
    tmp4 = questOrbMultiplierEligibility !== _require(10494).QuestOrbMultiplierEligibilityType.INELIGIBLE;
  }
  return tmp4;
};
export const useQuestOrbRewardMultiplier = function useQuestOrbRewardMultiplier(questId) {
  const _require = questId;
  const items = [closure_12];
  const items1 = [questId];
  return _require(589).useStateFromStores(items, () => {
    const quest = closure_1_12.getQuest(questId);
    let questOrbMultiplier = null;
    if (null != quest) {
      questOrbMultiplier = questId(dependencyMap[23]).getQuestOrbMultiplier(quest.config);
      obj = questId(dependencyMap[23]);
    }
    return questOrbMultiplier;
  }, items1);
};
export const useIsQuestExpired = function useIsQuestExpired(deliveredQuest) {
  const _require = deliveredQuest;
  const items = [closure_12];
  const items1 = [deliveredQuest];
  return _require(589).useStateFromStores(items, () => {
    let isQuestExpiredResult = null != c0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = closure_1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
};
export const useIsQuestAccessSuspended = function useIsQuestAccessSuspended() {
  const items = [closure_12];
  return initialize.useStateFromStores(items, () => obj.isQuestAccessSuspended, []);
};
export const useIsQuestEligibleForMembersListPopout = function useIsQuestEligibleForMembersListPopout(userStatus) {
  const _require = userStatus;
  closure_1 = arg1;
  const items = [closure_7];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let channelId;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    let channel = closure_1_7.getChannel(channelId);
    if (channel == null) {
      channel = null;
    }
    return channel;
  });
  obj = _require(589);
  const items1 = [closure_12];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => null != obj.questEnrollmentBlockedUntil, []);
  const obj2 = _require(589);
  const items2 = [closure_9];
  const stateFromStores2 = _require(589).useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj3 = _require(589);
  const items3 = [closure_12];
  const items4 = [userStatus];
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (!obj4.useStateFromStores(items3, () => {
        let isQuestExpiredResult = null != closure_0;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = closure_1_12.isQuestExpired(tmp.id);
        }
        return isQuestExpiredResult;
      }, items4)) {
        if (stateFromStores2 !== arg2) {
          userStatus = userStatus.userStatus;
          let claimedAt;
          if (userStatus != null) {
            claimedAt = userStatus.claimedAt;
          }
          let tmp8 = null != claimedAt;
          if (tmp8) {
            tmp8 = !tmpResult.isStreamingAndCanWatch(arg1, stateFromStores);
          }
          return !tmp8;
        }
      }
    }
  }
  return false;
};
export const useQuestFormattedDate = function useQuestFormattedDate(rewardsExpireAt, arg1) {
  const _require = rewardsExpireAt;
  obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let stateFromStores;
  const items = [closure_6];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => locale.locale);
  const items1 = [rewardsExpireAt, obj, stateFromStores];
  return React.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      const _Date = Date;
      const date = new Date(closure_0);
      str = date.toLocaleDateString(stateFromStores, obj);
    }
    return str;
  }, items1);
};
export const useOnOpenGameClick = function useOnOpenGameClick(quest) {
  quest = quest.quest;
  const content = quest.content;
  const ctaContent = quest.ctaContent;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(ctaContent[28]).useGetQuestImpressionId();
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return React.useCallback(() => {
    if (quest.id !== closure_1_21) {
      obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj[0] = content;
      obj[1] = ctaContent;
      obj[2] = getQuestImpressionId();
      obj[3] = sourceQuestContent;
      quest(ctaContent[30]).openGameLinkDirectly(tmp, obj);
      const obj2 = quest(ctaContent[30]);
    } else {
      const _window = window;
      obj = content(ctaContent[29]);
      window.open(obj.getArticleURL(closure_1_23.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  }, items);
};
export const useIsQuestProgressingOnDesktop = function useIsQuestProgressingOnDesktop(arg0) {
  const _require = arg0;
  const items = [closure_12];
  return _require(589).useStateFromStores(items, () => closure_1_12.isProgressingOnDesktop(quest.id));
};
export const useIsQuestProgressingOnConsole = function useIsQuestProgressingOnConsole(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => quest(first[21]).isQuestProgressingOnConsole(quest), items);
};
export const useIsQuestProgressingVideoQuest = function useIsQuestProgressingVideoQuest(arg0) {
  const _require = arg0;
  const items = [closure_12];
  const items1 = [arg0, _require(589).useStateFromStores(items, () => closure_1_12.getOptimisticProgress(quest.id, quest(dependencyMap[31]).FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  return React.useMemo(() => quest(dependencyMap[32]).isVideoQuestProgressing(quest), items1);
};
export { useIsQuestProgressing };
export { useQuestTaskDetails };
export const useThirdPartyTaskDetails = function useThirdPartyTaskDetails(quest) {
  closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => userStatus(dependencyMap[21]).getThirdPartyTaskDetails(userStatus), items);
};
export const useConnectedConsoleLinkOnClick = function useConnectedConsoleLinkOnClick(quest) {
  quest = quest.quest;
  ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
  c3 = undefined;
  closure_4 = undefined;
  accounts = undefined;
  const items = [closure_8];
  const stateFromStoresObject = accounts(589).useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((item, index) => false === item.revoked);
    const found1 = found.filter((item, index) => item.type === constants.XBOX);
    const found2 = found.filter((item, index) => item.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  obj = accounts(589);
  const tmp = accounts;
  const tmp5 = useIsQuestProgressing(quest);
  let isConsoleQuestResult = accounts(7476).isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === memo.xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp5;
  }
  c3 = isConsoleQuestResult;
  let obj2 = accounts(7476);
  closure_4 = tmp(10687).useGetQuestImpressionId();
  return () => {
    obj = accounts(dependencyMap[30]);
    if (c3) {
      obj = { quest: null };
      obj[0] = accounts;
      obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj[0] = closure_1;
      obj[1] = accounts(dependencyMap[33]).QuestContentCTA.CONNECT_CONSOLE_LINK;
      obj[2] = callback();
      obj[3] = closure_2;
      const result = obj.openAddConsoleConnectionModal(obj, obj);
    } else {
      obj1 = { quest: null };
      obj1[0] = accounts;
      const obj2 = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj2[0] = closure_1;
      obj2[1] = accounts(dependencyMap[33]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK;
      obj2[2] = callback();
      obj2[3] = closure_2;
      const result1 = obj.openConsoleConnectionSettings(obj1, obj2);
    }
  };
};
export const useGetOrFetchApplicationForConsoleQuests = function useGetOrFetchApplicationForConsoleQuests(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const set = new Set();
    while (tmp2 !== undefined) {
      let obj2 = memo1(dependencyMap[21]);
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items);
  return useGetOrFetchApplicationsDefault(memo);
};
export const useQuestForMemberListSocialEntryPoint = function useQuestForMemberListSocialEntryPoint(arg0) {
  let memo1 = arg0;
  const items = [closure_12];
  const stateFromStores = memo1(589).useStateFromStores(items, () => quests.quests);
  const arr = Array.from(stateFromStores.values());
  const items1 = [arr];
  const memo = React.useMemo(() => {
    const set = new Set();
    while (tmp2 !== undefined) {
      let obj2 = memo1(dependencyMap[21]);
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items1);
  const items2 = [arg0, stateFromStores, stateFromStores(7145)(memo)];
  memo1 = React.useMemo(() => {
    const result = memo1(dependencyMap[20]).filterQuestsForSocialEntrypoints(stateFromStores, closure_1_15);
    obj = memo1(dependencyMap[20]);
    return memo1(dependencyMap[35]).getQuestsFromActivities(result, memo1);
  }, items2);
  obj = memo1(589);
  const items3 = [closure_12];
  const items4 = [memo1];
  let tmp4 = null;
  if (!obj3.useStateFromStores(items3, () => {
    let isQuestExpiredResult = null != c0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = closure_1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items4)) {
    tmp4 = memo1;
  }
  return tmp4;
};
export const useQuestCollectibles = function useQuestCollectibles(config) {
  const hasQuestCollectibles = _getDefaultRewardName.hasCollectiblesQuestReward(config);
  const defaultReward = getContextualEntrypointHeading.getDefaultReward(config);
  const isFetching = useFetchCollectiblesProduct.useFetchCollectiblesProduct(defaultReward.skuId);
  const product = isFetching.product;
  let avatarDecoration;
  if (product != null) {
    const items = product.items;
    if (items != null) {
      avatarDecoration = items[0];
    }
  }
  return { hasQuestCollectibles, avatarDecoration, isFetching: isFetching.isFetching };
};
export const useQuestPreviewActions = function useQuestPreviewActions(id) {
  closure_0 = id;
  let items = [id];
  return React.useMemo(() => ({
    handleComplete() {
      return id(closure_1_2[15]).completeQuestPreview(closure_0);
    },
    handleProgress(random) {
      return id(closure_1_2[15]).completeQuestPreview(closure_0, random);
    },
    handleResetStatusClick() {
      return id(closure_1_2[15]).resetQuestPreviewStatus(closure_0);
    },
    handleResetDismissibilityClick() {
      return id(closure_1_2[15]).resetQuestDismissibilityStatus(closure_0);
    },
    handleOverridePreviewClick(placement) {
      return id(closure_1_2[15]).overrideQuestForPlacement(placement, closure_0);
    },
    handleResetHasBeenSeenClick(ContextMenu, arg1) {
      const items = [closure_0];
      return id(closure_1_2[15]).markAdContentUnseen(id(closure_1_2[38]).AdCreativeType.QUEST, items);
    }
  }), items);
};
export const useConnectedAccounts = function useConnectedAccounts() {
  obj = accounts(589);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  accounts = stateFromStoresObject.accounts;
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((item, index) => false === item.revoked);
    const found1 = found.filter((item, index) => item.type === constants.XBOX);
    const found2 = found.filter((item, index) => item.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  obj = { fetching: stateFromStoresObject.fetching, xboxAccounts: memo.xboxAccounts, playstationAccounts: memo.playstationAccounts, xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts };
  return obj;
};
export const useManuallyStartConsoleQuest = function useManuallyStartConsoleQuest(questId) {
  questId = questId.questId;
  const preview = questId.preview;
  const beforeRequest = questId.beforeRequest;
  const afterRequest = questId.afterRequest;
  let first;
  let React;
  const tmp = first(React.useState(false), 2);
  first = tmp[0];
  React = tmp[1];
  obj = questId(beforeRequest[13]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  const tmp4 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  closure_6 = tmp4;
  const items1 = [questId];
  const callback = React.useCallback((arg0) => {
    const state = useConsoleQuestUIStore.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp4, questId];
  const effect = React.useEffect(() => {
    callback(questId, questId(beforeRequest[39]).QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  obj = {
    startConsoleQuest: React.useCallback(afterRequest(function*() {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v02 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let errorHints = tmp7;
              errorHints = undefined;
              if (c4) {
                v02 = 3;
              } else {
                if (beforeRequest != null) {
                  beforeRequest();
                }
                v02(true);
                errorHints = null;
                let v0 = 1;
                obj1 = questId(beforeRequest[15]);
                c4 = 2;
                v02 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.manuallyStartConsoleQuest(questId, preview);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            v0 = 0;
            v02(false);
            if (v0 != null) {
              v0();
            }
            throw closure_2;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            errorHints = arg1;
            callback(errorHints.errorHints);
            v0 = 0;
            v02(false);
            if (v0 != null) {
              v0();
            }
          }
          v0 = 0;
          v02(false);
          if (v0 != null) {
            v0();
          }
          v02 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp33) {
          closure_2 = tmp33;
          if (tmp4 === v0) {
            v02 = tmp2;
            throw tmp33;
          } else {
            c4 = tmp;
          }
        }
      }
    }), items3),
    startingConsoleQuest: first
  };
  items3 = [first, beforeRequest, afterRequest, preview, questId, callback];
  return obj;
};
export const useWaitingForConsoleConnection = function useWaitingForConsoleConnection(quest) {
  quest = quest.quest;
  accounts = undefined;
  const items = [closure_8];
  const stateFromStoresObject = accounts(589).useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((item, index) => false === item.revoked);
    const found1 = found.filter((item, index) => item.type === constants.XBOX);
    const found2 = found.filter((item, index) => item.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  obj = accounts(589);
  const tmp3 = useIsQuestProgressing(quest);
  let isConsoleQuestResult = accounts(7476).isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === memo.xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp3;
  }
  return isConsoleQuestResult;
};
export const useQuestHowToHelpArticle = function useQuestHowToHelpArticle() {
  obj = accounts(589);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((item, index) => false === item.revoked);
    const found1 = found.filter((item, index) => item.type === constants.XBOX);
    const found2 = found.filter((item, index) => item.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  const articleURL = combinedDefault.getArticleURL(constants6.QUEST_HOW_TO_PLAYSTATION);
  const articleURL1 = combinedDefault.getArticleURL(constants6.QUEST_HOW_TO_XBOX);
  const intl = accounts(1236).intl;
  const formatResult = intl.format(accounts(1236).t.beN4DG, { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 });
  const intl2 = accounts(1236).intl;
  let tmp8 = articleURL1;
  if (memo.playstationAccounts.length > 0) {
    tmp8 = articleURL;
  }
  if (memo.xboxAccounts.length <= 0) {
    let tmp10 = formatResult;
    if (!tmp3) {
      tmp10 = formatResult;
    }
    obj = { message: null, xboxURL: null, playstationURL: null };
    obj[0] = tmp10;
    obj[1] = articleURL1;
    obj[2] = articleURL;
    return obj;
  }
  tmp10 = intl2.format(accounts(1236).t.HVS7nh, { helpdeskArticle: tmp8 });
};
export const QuestProgressState = obj;
export const useProgressState = function useProgressState(quest) {
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const userStatus3 = quest.userStatus;
  let claimedAt;
  if (userStatus3 != null) {
    claimedAt = userStatus3.claimedAt;
  }
  if (typeof useQuestTaskDetails !== "function") {
    HermesBuiltin.throwTypeError();
  }
  closure_0 = quest;
  const items = [quest];
  let callback = React.useCallback(() => userStatus(dependencyMap[21]).getQuestTaskDetails(userStatus), items);
  closure_2 = callback(React.useState(callback()), 2)[1];
  const items1 = [callback];
  const callback1 = React.useCallback(() => callback(callback()), items1);
  const tmp10 = useIsQuestProgressing(quest);
  callback = tmp10;
  const items2 = [quest, tmp10, callback1];
  const effect = React.useEffect(() => {
    userStatus = userStatus.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null != enrolledAt) {
      const userStatus2 = tmp.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (null == completedAt) {
        const userStatus3 = tmp.userStatus;
        let claimedAt;
        if (userStatus3 != null) {
          claimedAt = userStatus3.claimedAt;
        }
        if (null == claimedAt) {
          if (closure_4) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(dependencyMap[19]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              callback1();
            };
          }
        }
      }
    }
    callback1();
  }, items2);
  if (tmp6) {
    let IN_PROGRESS = obj.CLAIMED;
  } else if (tmp4) {
    IN_PROGRESS = obj.COMPLETED;
  } else {
    if (tmp12) {
      if (tmp2) {
        IN_PROGRESS = obj.IN_PROGRESS;
      }
    }
    IN_PROGRESS = tmp2 ? obj.ACCEPTED : obj.UNACCEPTED;
  }
  return IN_PROGRESS;
};
export const useQuestCompletionDetails = function useQuestCompletionDetails(quest) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = _require(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (typeof useQuestTaskDetails !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items1 = [quest];
  let callback = React.useCallback(() => userStatus(dependencyMap[21]).getQuestTaskDetails(userStatus), items1);
  const tmp5 = callback(React.useState(callback()), 2);
  dependencyMap = tmp5[1];
  const items2 = [callback];
  const callback1 = React.useCallback(() => callback(callback()), items2);
  const tmp7 = useIsQuestProgressing(quest);
  callback = tmp7;
  const items3 = [quest, tmp7, callback1];
  const effect = React.useEffect(() => {
    userStatus = userStatus.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null != enrolledAt) {
      const userStatus2 = tmp.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (null == completedAt) {
        const userStatus3 = tmp.userStatus;
        let claimedAt;
        if (userStatus3 != null) {
          claimedAt = userStatus3.claimedAt;
        }
        if (null == claimedAt) {
          if (closure_4) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(dependencyMap[19]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              callback1();
            };
          }
        }
      }
    }
    callback1();
  }, items3);
  let percentComplete = tmp5[0].percentComplete;
  _require = quest;
  const items4 = [quest];
  const memo = React.useMemo(() => userStatus(dependencyMap[21]).getThirdPartyTaskDetails(userStatus), items4);
  if (null != memo) {
    percentComplete = memo.percentComplete;
  }
  obj = { completedRatio: percentComplete, percentComplete: 100 * percentComplete, completedRatioDisplay: null };
  if (null != memo) {
    if (!flag) {
      let progress;
      if (memo != null) {
        progress = memo.progress;
      }
      let target;
      if (memo != null) {
        target = memo.target;
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + progress + "/" + target;
    }
    obj[2] = combined;
    return obj;
  }
  combined = _require(1898).formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
};
export const useSelectedTaskPlatform = function useSelectedTaskPlatform(arg0) {
  const _require = arg0;
  const items = [closure_12];
  const items1 = [_require(589).useStateFromStores(items, () => closure_1_12.selectedTaskPlatform(closure_0)), ];
  const items2 = [arg0];
  items1[1] = React.useCallback((platform) => quest(first[15]).selectTaskPlatform(quest, platform), items2);
  return items1;
};
export { useTaskPlatformScreen };
export const useQuestWarningTips = function useQuestWarningTips(userStatus) {
  let _require = userStatus;
  const items = [userStatus];
  const memo = React.useMemo(() => userStatus(dependencyMap[21]).getThirdPartyTaskDetails(userStatus), items);
  if (typeof useQuestTaskDetails !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items1 = [userStatus];
  let callback = React.useCallback(() => userStatus(dependencyMap[21]).getQuestTaskDetails(userStatus), items1);
  [tmp4, dependencyMap] = callback(React.useState(callback()), 2);
  const items2 = [callback];
  const callback1 = React.useCallback(() => callback(callback()), items2);
  const tmp6 = useIsQuestProgressing(userStatus);
  callback = tmp6;
  const items3 = [userStatus, tmp6, callback1];
  const effect = React.useEffect(() => {
    userStatus = userStatus.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null != enrolledAt) {
      const userStatus2 = tmp.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (null == completedAt) {
        const userStatus3 = tmp.userStatus;
        let claimedAt;
        if (userStatus3 != null) {
          claimedAt = userStatus3.claimedAt;
        }
        if (null == claimedAt) {
          if (closure_4) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(dependencyMap[19]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              callback1();
            };
          }
        }
      }
    }
    callback1();
  }, items3);
  _require = userStatus;
  const tmp3 = callback(React.useState(callback()), 2);
  const items4 = [closure_12];
  const items5 = [userStatus];
  userStatus = userStatus.userStatus;
  let enrolledAt;
  const stateFromStores = _require(589).useStateFromStores(items4, () => {
    let isQuestExpiredResult = null != c0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = closure_1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items5);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp12 = null != enrolledAt;
  let userStatus2 = userStatus.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const DESKTOP = tmp8(6723).FirstPartyQuestTaskTypesSets.DESKTOP;
  let hasItem = DESKTOP.has(tmp4.taskType);
  if (hasItem) {
    hasItem = tmp4.percentComplete > 0;
  }
  if (tmp12) {
    tmp12 = !tmp14;
  }
  if (tmp12) {
    tmp12 = !stateFromStores;
  }
  if (tmp12) {
    tmp12 = null == memo;
  }
  if (tmp12) {
    if (!hasItem) {
      hasItem = 0 === tmp4.percentComplete && callback(useTaskPlatformScreen(userStatus, tmp4), 1)[0] === tmp8(6719).TaskPlatformScreen.DESKTOP;
      const tmp16 = 0 === tmp4.percentComplete && callback(useTaskPlatformScreen(userStatus, tmp4), 1)[0] === tmp8(6719).TaskPlatformScreen.DESKTOP;
    }
    tmp12 = hasItem;
  }
  let tmp8Result = tmp8(500);
  let tmp17 = tmp8Result.isWeb() && tmp12;
  if (tmp17) {
    tmp8Result = tmp8(10689);
    tmp17 = !tmp8Result.isQuestSupportedOnWeb(userStatus);
  }
  const obj2 = _require(589);
  tmp14 = null != completedAt;
  let isMacResult = _require(500).isMac();
  if (isMacResult) {
    isMacResult = tmp4.taskType === tmp8(6723).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
  }
  if (isMacResult) {
    isMacResult = tmp12;
  }
  const items6 = [];
  if (isMacResult) {
    const intl = tmp8(1236).intl;
    items6.push(intl.string(tmp8(1236).t.MFGxFM));
  }
  if (tmp17) {
    const intl2 = tmp8(1236).intl;
    items6.push(intl2.string(tmp8(1236).t.BV6xDm));
  }
  return items6;
};
export const useQuest = function useQuest(arg0) {
  const items = [closure_12];
  const stateFromStores = initialize.useStateFromStores(items, () => quests.quests);
  let value = stateFromStores.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const useNonNullableQuest = function useNonNullableQuest(questId, callback) {
  const _require = questId;
  closure_1 = callback;
  let items = [closure_12];
  const items1 = [questId];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => closure_1_12.getQuest(closure_0), items1);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const items2 = [stateFromStores, questId, callback];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const quests = closure_1_12.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      questId(stateFromStores[18]);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Quest unexpectedly missing from store: " + questId);
      obj = { tags: null, extra: null };
      obj[0] = { source: "useNonNullableQuest" };
      obj = { questId: null, storeQuestIds: null, storeSize: null, isFetchingCurrentQuests: null, lastFetchedCurrentQuests: null };
      obj[0] = questId;
      obj[1] = items;
      obj[2] = items.length;
      ({ isFetchingCurrentQuests: obj3[3], lastFetchedCurrentQuests: obj3[4] } = closure_1_12);
      obj[1] = obj;
      const result = obj.captureQuestsException(error, obj);
      if (callback != null) {
        callback();
      }
    }
  }, items2);
  return stateFromStores;
};
export const useQuestBarOrDockModeChangeTracking = function useQuestBarOrDockModeChangeTracking(mode) {
  mode = mode.mode;
  const questContent = mode.questContent;
  const sourceQuestContent = mode.sourceQuestContent;
  const questId = mode.questId;
  closure_4 = React.useRef(null);
  const items = [questId, questContent, mode, sourceQuestContent];
  const effect = React.useEffect(() => {
    let tmp2 = null != questId;
    if (tmp2) {
      tmp2 = ref.current !== mode;
    }
    if (tmp2) {
      mode(sourceQuestContent[44]);
      obj = { mode: null, prevMode: null, questContent: null, questId: null, sourceQuestContent: null };
      obj[0] = mode;
      obj[1] = ref.current;
      obj[2] = questContent;
      obj[3] = questId;
      obj[4] = sourceQuestContent;
      const result = obj.trackQuestBarOrDockModeChange(obj);
      ref.current = mode;
    }
  }, items);
  const items1 = [questId, questContent, sourceQuestContent];
  const effect1 = React.useEffect(() => null != questId ? (() => {
    mode(sourceQuestContent[44]);
    obj = { mode: null, prevMode: ref.current, questContent: closure_1, questId: closure_3, sourceQuestContent: closure_2 };
    const result = obj.trackQuestBarOrDockModeChange(obj);
  }) : undefined, items1);
};
export const useCosponsoredLogotypeAsset = function useCosponsoredLogotypeAsset(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  const items = [closure_12];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => closure_1_12.getQuest(closure_0), items1);
  const tmp2 = importDefault(stateFromStores[45])();
  closure_3 = tmp2;
  const items2 = [tmp2, arg1, stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else if (closure_1 != null) {
      return callback(stateFromStores[47]).getQuestAsset(tmp, callback(stateFromStores[47]).QuestAssetType.COSPONSOR_LOGO_TYPE, tmp11);
    } else {
      callback(stateFromStores[46]).isThemeDark(closure_3) ? closure_1_25.DARK : closure_1_25.LIGHT;
      obj = callback(stateFromStores[46]);
    }
  }, items2);
};
export const useClaimedCollectibleRewardMessage = function useClaimedCollectibleRewardMessage(config) {
  obj = initialize;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = _getDefaultRewardName;
  const defaultRewardName = obj1.getDefaultRewardName(config, stateFromStores);
  let obj2 = _getDefaultRewardName;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(config);
  let obj3 = _getDefaultRewardName;
  const collectibleQuestRewardExtendableExpirationDate = obj3.getCollectibleQuestRewardExtendableExpirationDate(config);
  let obj4 = _getDefaultRewardName;
  const result = obj4.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const result1 = _getDefaultRewardName.isCollectibleQuestRewardPremiumExtendable(config);
  const isPremiumResult = getPremiumPlanItem.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = getSystemLocale.intl;
    obj = { decorationName: null };
    obj[0] = defaultRewardName;
    return intl2.formatToPlainString(getSystemLocale.t.l9uXL8, obj);
  } else {
    const intl3 = getSystemLocale.intl;
    obj = { rewardName: null };
    obj[0] = defaultRewardName;
    const intl4 = getSystemLocale.intl;
    obj1 = { rewardName: null, expirationDate: null };
    obj1[0] = defaultRewardName;
    obj1[1] = collectibleQuestRewardExtendableExpirationDate;
    const formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.o97tNn, obj);
    const intl5 = getSystemLocale.intl;
    obj2 = { rewardName: null, duration: null };
    obj2[0] = defaultRewardName;
    obj2[1] = collectibleQuestRewardDuration;
    let formatToPlainStringResult2 = intl5.formatToPlainString(getSystemLocale.t.ie4YK0, obj2);
    const intl6 = getSystemLocale.intl;
    obj3 = { duration: null, rewardName: null };
    obj3[0] = collectibleQuestRewardDuration;
    obj3[1] = defaultRewardName;
    let formatToPlainStringResult3 = intl6.formatToPlainString(getSystemLocale.t.yCpc0U, obj3);
    if (result1) {
      if (result) {
        if (isPremiumResult) {
          formatToPlainStringResult2 = formatToPlainStringResult;
        }
        formatToPlainStringResult3 = formatToPlainStringResult2;
      } else if (isPremiumResult) {
        formatToPlainStringResult3 = formatToPlainStringResult1;
      }
    } else {
      const intl = getSystemLocale.intl;
      obj4 = { duration: null, decorationName: null };
      obj4[0] = collectibleQuestRewardDuration;
      obj4[1] = defaultRewardName;
      return intl.formatToPlainString(getSystemLocale.t.tTlItm, obj4);
    }
    formatToPlainStringResult1 = intl4.formatToPlainString(getSystemLocale.t.PkyRZo, obj1);
  }
};
export const useLaunchInGameActivityQuest = function useLaunchInGameActivityQuest(quest) {
  obj = { launchInGameActivity: null };
  const activityApplicationId = obj.getActivityApplicationId(quest);
  obj[0] = useRefocusOrLaunchActivityDefault({ applicationId: activityApplicationId });
  return obj;
};
export const useIsPreviewerOnAnyQuest = function useIsPreviewerOnAnyQuest() {
  const items = [closure_12];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((item, index) => item.preview);
};
export const useShouldShowPreviewToolTab = function useShouldShowPreviewToolTab() {
  let items = [closure_12];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((item, index) => item.preview);
};
export const useShouldShowQuestsActivityPanelItem = function useShouldShowQuestsActivityPanelItem(userStatus) {
  userStatus = undefined;
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    isDismissedResult = _require(7451).isDismissed(userStatus.userStatus, _require(6719).QuestContent.ACTIVITY_PANEL);
    obj = _require(7451);
  }
  let tmp5 = userStatus;
  if (userStatus == null) {
    tmp5 = null;
  }
  _require = tmp5;
  const items = [closure_12];
  const items1 = [tmp5];
  let claimedAt;
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let isQuestExpiredResult = null != c0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = closure_1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj2 = _require(589);
  const tmp11 = null != claimedAt;
  const items2 = [closure_12];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => null != obj.questEnrollmentBlockedUntil, []);
  if (!isDismissedResult) {
    isDismissedResult = stateFromStores;
  }
  if (!isDismissedResult) {
    isDismissedResult = tmp11;
  }
  if (!isDismissedResult) {
    isDismissedResult = stateFromStores1;
  }
  return !isDismissedResult;
};
export const useQuestsWithPreviewAccess = function useQuestsWithPreviewAccess() {
  let items = [closure_12];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  const items1 = [stateFromStoresArray];
  return React.useMemo(() => stateFromStoresArray.filter((item, index) => item.preview), items1);
};
export const useQuestHomeFilterOptions = function useQuestHomeFilterOptions() {
  closure_0 = closure_17;
  const items = [closure_17];
  return React.useMemo(() => closure_0.map((item, index) => {
    [tmp, tmp2] = item;
    obj = { heading: callback(table[36]).getFilterGroupHeadingText(tmp), options: tmp2 };
    return obj;
  }), items);
};
export const useQuestHomeSortOptions = function useQuestHomeSortOptions() {
  return React.useMemo(() => {
    const keys = Object.keys(closure_16);
    return keys.map((item, index) => {
      obj = { label: callback(table[36]).getSortMethodText(dependencyMap[item]), value: dependencyMap[item] };
      return obj;
    });
  }, []);
};
export const useQuestHomeSortingFilteringAnalytics = function useQuestHomeSortingFilteringAnalytics(selectedSortMethod) {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  closure_3 = React.useRef(null);
  closure_4 = React.useRef(null);
  const items = [selectedSortMethod];
  const effect = React.useEffect(() => {
    selectedFilters(numQuestsVisible[50]);
    obj = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
    obj.track(closure_1_26.QUEST_HOME_SORT_METHOD_CHANGED, obj);
    ref.current = selectedSortMethod;
  }, items);
  const items1 = [selectedFilters, numQuestsVisible];
  const effect1 = React.useEffect(() => {
    const mapped = selectedFilters.map((item, index) => item.filter);
    selectedFilters(numQuestsVisible[50]);
    obj = { filters: mapped, previous_filters: null, num_quests_visible: null };
    let current = ref2.current;
    if (current == null) {
      current = [];
    }
    obj[1] = current;
    obj[2] = numQuestsVisible;
    obj.track(closure_1_26.QUEST_HOME_FILTERS_CHANGED, obj);
    ref2.current = mapped;
  }, items1);
};
export const useShouldShowQuestPreviewOverrides = function useShouldShowQuestPreviewOverrides(quest) {
  let preview = React.useMemo(() => {
    currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    return true === isStaffResult;
  }, []);
  if (!preview) {
    preview = quest.preview;
  }
  return preview;
};
export const useQuestHomeHeroShelf = function useQuestHomeHeroShelf(questIds) {
  const items = [closure_12];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => quests.quests);
  questIds = undefined;
  if (questIds != null) {
    questIds = questIds.questIds;
  }
  const items1 = [stateFromStores, questIds];
  return React.useMemo(() => {
    if (null == questIds) {
      obj = { shelfQuests: null, isShelfEnabled: false };
      obj[0] = [];
      return obj;
    } else {
      const mapped = questIds.map((item, index) => lib.get(item));
      const found = mapped.filter(stateFromStores(dependencyMap[51]).isNotNullish);
      const found1 = found.filter((item, index) => !lib(table[18]).isQuestExpired(item));
      if (found1.length <= 1) {
        obj = { shelfQuests: null, isShelfEnabled: false };
        obj[0] = [];
      } else {
        obj = { shelfQuests: null, isShelfEnabled: true };
        obj[0] = found1;
      }
      return obj;
    }
  }, items1);
};
export const useFetchQuestHomeBounties = function useFetchQuestHomeBounties(location) {
  obj = location;
  if (location === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let enabled;
  let callback;
  obj1 = previewAdCreativeIds(enabled[52]);
  const bountiesExperience = obj1.useBountiesExperience(constants2.QUEST_HOME_MOBILE);
  const showBounties = bountiesExperience.showBounties;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(enabled[53]).BountyStaleRefreshQuestHomeExperiment;
  obj = { location: constants2.QUEST_HOME_MOBILE };
  enabled = BountyStaleRefreshQuestHomeExperiment.useConfig(obj).enabled;
  const AdPlacement = previewAdCreativeIds(enabled[43]).AdPlacement;
  const tmp4 = bountiesExperience.verticalScrollEnabled ? AdPlacement.VIDEO_MODAL_MOBILE : AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
  closure_3 = tmp4;
  [tmp6, c4] = callback(React.useState(showBounties), 2);
  const tmp5 = callback(React.useState(showBounties), 2);
  const items = [closure_10];
  const stateFromStoresObject = previewAdCreativeIds(enabled[13]).useStateFromStoresObject(items, () => ({ isFetching: closure_10.isFetchingQuestHomeBounties, questHomeBounties: closure_10.questHomeBounties }));
  const items1 = [showBounties, enabled, previewAdCreativeIds, tmp4];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    function loadBounties(arg0) {
      const self = this;
      const apply = _loadBounties.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _loadBounties() {
      const self = this;
      const tmp = loadBounties(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp3;
                const _Date = Date;
                closure_1 = Date.now();
                c3 = 1;
                if (null != closure_1_0) {
                  if (closure_1_0.length > 0) {
                    c1 = 3;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_2_0(closure_2_2[54]).fetchBountyPreview(closure_1_0, c3);
                    return obj1;
                  }
                }
                let obj2 = closure_2_0(closure_2_2[54]);
                c1 = 2;
                v0 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.fetchQuestHomeBounties(c3);
                return obj2;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              if (!closure_0) {
                v0(false);
              }
              throw closure_2;
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 0;
                  if (!closure_1_0) {
                    v0(false);
                  }
                  v0 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                if (!closure_0) {
                  v0(false);
                }
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c3 = 0;
              if (!closure_1_0) {
                v0(false);
              }
              v0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp32) {
            closure_2 = tmp32;
            if (tmp4 === c3) {
              v0 = tmp2;
              throw tmp32;
            } else {
              c1 = tmp;
            }
          }
        }
      });
      closure_4 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (c1) {
      c0 = false;
      c1 = 0;
      const bounties = loadBounties();
      if (interval) {
        const _window = window;
        interval = window.setInterval(() => {
          if (Date.now() - c1 > closure_2_48) {
            loadBounties();
          }
        }, MINUTE);
        return () => {
          c0 = true;
          window.clearInterval(closure_2);
        };
      } else {
        return () => {
          c0 = true;
        };
      }
    }
  }, items1);
  if (showBounties) {
    obj = { questHomeBounties: null, isLoading: null };
    obj[0] = questHomeBounties;
    obj[1] = isFetching;
    obj1 = obj;
  } else {
    obj1 = { questHomeBounties: null, isLoading: false };
    obj1[0] = [];
  }
  return obj1;
};
export const useQuestHomeBounties = function useQuestHomeBounties() {
  const items = [closure_10];
  return initialize.useStateFromStoresObject(items, () => ({ questHomeBounties: closure_10.questHomeBounties, isFetching: closure_10.isFetchingQuestHomeBounties }));
};
export const useQuestBarImpressionSurvey = function useQuestBarImpressionSurvey(questCreative) {
  const _require = questCreative;
  const DropsOptedOut = _require(4066).DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const userStatus = questCreative.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  dependencyMap = tmp3;
  const items = [setting, null != enrolledAt, questCreative.id];
  return React.useCallback(() => {
    if (!dependencyMap) {
      questCreative(9880).SurveyActionTypes;
      const fireSurveyAction = questCreative(9873).fireSurveyAction;
      obj = { quest_id: null };
      obj[0] = questCreative.id;
      fireSurveyAction(setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN, obj);
      const tmp7 = questCreative(9873);
    }
  }, items);
};