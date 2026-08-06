// discord_app/modules/quests/hooks/QuestHooks.tsx
import set from "set";
import supportedConsoles from "supportedConsoles";
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource";
import _getSystemLocale from "_getSystemLocale";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_10 from "set";
import { useConsoleQuestUIStore } from "useConsoleQuestUIStore";
import initializeState from "initializeState";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import { apply } from "../../../../_runtime/00012_apply.js";
import { MurmurHashV3 } from "../../../../_runtime/01217_MurmurHashV3.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../../../utils/Durations.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
import { shortenAndLocalizeNumber } from "../../../utils/NumberUtils.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";
import { useRefocusOrLaunchActivity } from "../../activities/utils/useRefocusOrLaunchActivity.tsx";
import { useGetOrFetchApplications } from "../../applications/useGetOrFetchApplications.tsx";
import { useFetchCollectiblesProduct } from "../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";
import { QuestsVisibleMessagesChangedSource } from "../QuestTypes.tsx";
import { getContextualEntrypointHeading } from "../utils/QuestCopyUtils.tsx";
import { getQuestDeliveryDataForPlacement } from "../utils/QuestDataUtils.tsx";
import { items } from "../utils/QuestOrbMultiplierUtils.tsx";
import { _getDefaultRewardName } from "../utils/QuestRewardUtils.tsx";
import { getApplicationIdsByTaskTypes } from "../utils/QuestTaskUtils.tsx";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let map1;
let require = arg1;
function useQuests(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { fetchPolicy: "cache-only", callerSource: "unknown" };
  }
  let hasFetched;
  let dependencyMap;
  let isFetchingCurrentQuests;
  let lastFetchedCurrentQuests;
  let isEligibleForQuests;
  const tmp = lastFetchedCurrentQuests(isEligibleForQuests.useState(false), 2);
  hasFetched = tmp[0];
  dependencyMap = tmp[1];
  let items = [initializeState];
  let quests = obj(589).useStateFromStoresArray(items, () => {
    const quests = initializeState.quests;
    const items = [...quests.values()];
    return items;
  });
  let obj2 = obj(589);
  const items1 = [initializeState];
  let excludedQuests = obj(589).useStateFromStoresArray(items1, () => {
    const excludedQuests = initializeState.excludedQuests;
    const items = [...excludedQuests.values()];
    return items;
  });
  let obj3 = obj(589);
  const items2 = [initializeState];
  const stateFromStoresObject = obj(589).useStateFromStoresObject(items2, () => ({ isFetchingCurrentQuests: initializeState.isFetchingCurrentQuests, lastFetchedCurrentQuests: initializeState.lastFetchedCurrentQuests }));
  isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  let obj4 = obj(589);
  isEligibleForQuests = obj(10378).getIsEligibleForQuests();
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
        if (isEligibleForQuests) {
          if (!hasFetched) {
            if (!isFetchingCurrentQuests) {
              dependencyMap(true);
              obj = obj(10379);
              const currentQuests = obj.fetchCurrentQuests();
              if (obj2.isMac()) {
                const obj3 = hasFetched(10387);
              }
              obj2 = obj(500);
              if (!obj4.getConfig({ location: "QuestHookUseQuests" }).enableNewRequestBehavior) {
                const _HermesInternal = HermesInternal;
                const questToDeliver = tmp8(10379).fetchQuestToDeliver(tmp8(5146).AdPlacement.MOBILE_HOME_DOCK_AREA, "use_quests_" + tmp.callerSource);
                const tmp8Result = tmp8(10379);
              }
              obj4 = hasFetched(7096);
            }
          }
        }
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
    const result = 30 * set.Millis.MINUTE;
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
          let tmp50Result = tmp50(7102);
          const result2 = tmp50Result.isQuestFeaturedByHero(questHomeHero, id.id);
          tmp50Result = tmp50(7102);
          let num2 = 1;
          if (result2) {
            num2 = c28;
          }
          return num2;
        }
      }
      const questType = tmp50(7102).getQuestType(id.config);
      const tmp50Result1 = tmp50(7102);
      const questType1 = tmp50(7102).getQuestType(id2.config);
      const tmp50Result2 = tmp50(7102);
      const result3 = tmp50(7104).hasWatchVideoOnMobileTasks(id);
      const tmp50Result3 = tmp50(7104);
      const result4 = tmp50(7104).hasWatchVideoOnMobileTasks(id2);
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
        if (questType === tmp50(7107).QuestType.VIDEO) {
          num3 = c28;
        }
      }
      if (tmp21 === tmp32) {
        if (tmp9 !== tmp11) {
          let num9 = 1;
          if (!tmp9) {
            num9 = c28;
          }
          let num5 = num9;
        } else if (tmp13 !== tmp15) {
          let num8 = 1;
          if (tmp13) {
            num8 = c28;
          }
          num5 = num8;
        } else {
          let value = get.get(id.id);
          value = get.get(id2.id);
          if (null != value) {
            if (null != value) {
              if (value !== value) {
                let num6 = value - value;
              } else {
                num6 = 0;
                if (id.id !== id2.id) {
                  let num7 = 1;
                  if (id.id < id2.id) {
                    num7 = c28;
                  }
                  num6 = num7;
                }
              }
            }
          }
          if (null != value) {
            num5 = c28;
          } else {
            let num4 = 1;
            num5 = 1;
            if (null == value) {
              const expiresAt = id.config.expiresAt;
              if (constants7.ASC === tmp56.DESC) {
                num4 = c28;
              }
              num5 = expiresAt.localeCompare(id2.config.expiresAt) * num4;
            }
          }
          tmp56 = constants7;
        }
      }
      let num10 = 1;
      if (!tmp21) {
        num10 = c28;
      }
      num5 = num10;
      const tmp50Result4 = tmp50(7104);
    }
    const obj9 = getQuestDeliveryDataForPlacement;
    const tmp19 = null != completedAt2;
    const tmp30 = null != completedAt3;
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
    let obj = getApplicationIdsByTaskTypes;
    obj = { quest: null };
    obj[0] = quest;
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
    if (!hasPlayOnDesktopTaskResult) {
      let tmp2Result = tmp2(7104);
      obj = { quest: null };
      obj[0] = quest;
      hasPlayOnDesktopTaskResult = tmp2Result.hasStreamOnDesktopTask(obj);
    }
    if (!hasPlayOnDesktopTaskResult) {
      tmp2Result = tmp2(7104);
      hasPlayOnDesktopTaskResult = tmp2Result.hasPlayActivityTask(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = tmp2(7104).isConsoleQuest(quest);
      const tmp2Result1 = tmp2(7104);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = tmp2(7104).isInGameQuest(quest);
      const tmp2Result2 = tmp2(7104);
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    return _getDefaultRewardName.hasVirtualCurrencyReward(config.config);
  } else if (tmp.COLLECTIBLE === arg1) {
    return _getDefaultRewardName.hasCollectiblesQuestReward(config.config);
  } else if (tmp.IN_GAME === arg1) {
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
function sortQuests(arr) {
  let filters;
  let sortMethod;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_36;
  }
  let tmp2 = arg2;
  if (arg2 === undefined) {
    tmp2 = closure_37;
  }
  ({ sortMethod, filters } = tmp);
  let obj = arr;
  if (null != filters) {
    obj = arr;
    if (0 !== filters.length) {
      let found = arr;
      if (0 !== filters.length) {
        require = apply.groupBy(filters, "group");
        found = arr.filter((arg0) => {
          let closure_0 = arg0;
          const entries = Object.entries(closure_0);
          return entries.every((arg0) => {
            let arr;
            let tmp;
            [tmp, arr] = arg0;
            if ("task" === tmp) {
              let tmp2 = outer1_34;
            } else if ("reward" === tmp) {
              tmp2 = outer1_35;
            }
            let closure_1 = tmp2;
            return 0 === arr.length || arr.some((arg0) => tmp2(closure_0, arg0.filter));
          });
        });
        let obj2 = apply;
      }
      obj = found;
    }
  }
  if (constants3.MOST_RECENT === sortMethod) {
    let tmp8 = recentSortFn;
  } else if (tmp7.RECENTLY_ENROLLED === sortMethod) {
    tmp8 = recentlyEnrolledSortFn;
  } else if (tmp7.EXPIRING_SOON === sortMethod) {
    tmp8 = expiringSoonSortFn;
  } else {
    const SUGGESTED = tmp7.SUGGESTED;
    tmp8 = defaultSortFn;
  }
  require = tmp8;
  const importDefault = tmp2;
  const dependencyMap = (function computeRenewableQuestSortKeys(arr, currentUserId, isRenewableEndDateSortEnabled) {
    const map = new Map();
    if (isRenewableEndDateSortEnabled) {
      if (null != currentUserId) {
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp8 = nextResult;
          let tmp9 = tmp8;
          let tmp10 = tmp6;
          let obj2 = tmp8(tmp6[22]);
          let tmp11 = constants;
          if (obj2.hasVariant(nextResult, constants.RENEWABLE_END_DATE)) {
            let tmp12 = nextResult;
            let tmp13 = callback;
            let result = map.set(tmp8.id, callback(currentUserId, tmp8.id));
          }
          continue;
        }
        return map;
      }
    }
    return map;
  })(obj, tmp2.currentUserId, tmp2.isRenewableEndDateSortEnabled);
  return obj.sort((arg0, arg1) => {
    const isQuestExpiredResult = tmp8(tmp6[20]).isQuestExpired(arg0);
    const obj = tmp8(tmp6[20]);
    const tmp2 = !isQuestExpiredResult;
    if (tmp2 !== !obj2.isQuestExpired(arg1)) {
      let num = 1;
      if (!isQuestExpiredResult) {
        num = outer1_28;
      }
      tmp8 = num;
    } else {
      tmp8 = tmp8(arg0, arg1, closure_1, tmp6);
    }
    return tmp8;
  });
}
function seededQuestSortKey(arg0, arg1) {
  return MurmurHashV3.v3("" + arg0 + ":" + arg1) >>> 0;
}
function useAllQuests(quests, sortMethod) {
  let stateFromStores1 = quests;
  let isShelfEnabled = sortMethod;
  let obj = stateFromStores1(memo[13]);
  const items = [initializeState];
  const stateFromStores = obj.useStateFromStores(items, () => null);
  stateFromStores1 = undefined;
  isShelfEnabled = undefined;
  const items1 = [initializeState];
  stateFromStores1 = stateFromStores1(memo[13]).useStateFromStores(items1, () => quests.quests);
  let questIds;
  if (stateFromStores != null) {
    questIds = stateFromStores.questIds;
  }
  isShelfEnabled = questIds;
  const items2 = [stateFromStores1, questIds];
  isShelfEnabled = React.useMemo(() => {
    if (null == questIds) {
      let obj = { shelfQuests: null, isShelfEnabled: false };
      obj[0] = [];
      return obj;
    } else {
      const mapped = arr.map((arg0) => lib.get(arg0));
      const found = mapped.filter(stateFromStores(outer1_2[52]).isNotNullish);
      const found1 = found.filter((arg0) => !lib(table[20]).isQuestExpired(arg0));
      if (found1.length <= 1) {
        obj = { shelfQuests: null, isShelfEnabled: false };
        obj[0] = [];
      } else {
        obj = { shelfQuests: null, isShelfEnabled: true };
        obj[0] = found1;
      }
      return obj;
    }
    arr = questIds;
  }, items2).isShelfEnabled;
  const obj2 = stateFromStores1(memo[13]);
  const tmp = stateFromStores1;
  const items3 = [mergeGuildAvatar];
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
  const enabled = isShelfEnabled(memo[28]).useConfig(obj).enabled;
  let set = enabled;
  const items4 = [stateFromStores, isShelfEnabled, stateFromStores2, enabled];
  memo = React.useMemo(() => ({ questHomeHero: stateFromStores1, isQuestHomeHeroShelfEnabled: isShelfEnabled, currentUserId: memo, isRenewableEndDateSortEnabled: set }), items4);
  set = React.useRef([]);
  let supportedConsoles = React.useRef(sortMethod.sortMethod);
  React = React.useRef(sortMethod.filters);
  let _getSystemLocale = React.useRef(0);
  let ensureGuildLoaded = React.useRef(memo);
  const items5 = [quests, sortMethod, memo];
  return React.useMemo(() => {
    if (0 === stateFromStores1.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref4.current === arr.length) {
          if (ref2.current === isShelfEnabled.sortMethod) {
            if (ref3.current === tmp3.filters) {
              if (ref5.current === memo) {
                return tmp15.current;
              }
            }
          }
        }
      }
      const mapped = outer1_38(arr, isShelfEnabled, memo).map((id) => id.id);
      ref.current = mapped;
      ref2.current = isShelfEnabled.sortMethod;
      ref3.current = isShelfEnabled.filters;
      ref4.current = arr.length;
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
  const items = [initializeState];
  let stateFromStores = _initialize.useStateFromStores(items, () => outer1_12.isProgressingOnDesktop(quest.id));
  _require = quest;
  const items1 = [quest];
  _require = quest;
  const memo = React.useMemo(() => quest(first[23]).isQuestProgressingOnConsole(quest), items1);
  const obj = _initialize;
  const items2 = [initializeState];
  const items3 = [quest, _initialize.useStateFromStores(items2, () => outer1_12.getOptimisticProgress(quest.id, quest(outer1_2[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  const memo1 = React.useMemo(() => quest(outer1_2[34]).isVideoQuestProgressing(quest), items3);
  if (!stateFromStores) {
    stateFromStores = memo;
  }
  if (!stateFromStores) {
    stateFromStores = memo1;
  }
  return stateFromStores;
}
function useTaskPlatformScreen(quest, questTaskDetails) {
  let _require = quest;
  let closure_1 = questTaskDetails;
  const id = quest.id;
  _require = id;
  const items = [initializeState];
  const items1 = [_require(first[13]).useStateFromStores(items, () => outer1_12.selectedTaskPlatform(closure_0)), ];
  const items2 = [id];
  items1[1] = memo2.useCallback((platform) => quest(first[15]).selectTaskPlatform(quest, platform), items2);
  const tmp = hasItem1(items1, 2);
  first = tmp[0];
  const items3 = [quest];
  const memo = memo2.useMemo(() => quest(first[32]).supportedTaskPlatforms(quest), items3);
  const hasItem = memo.includes(constants.DESKTOP);
  hasItem1 = memo.includes(constants.CONSOLE);
  _require = quest;
  let obj = _require(first[13]);
  let obj2 = memo2;
  const items4 = [initializeState];
  _require = quest;
  const items5 = [quest];
  const stateFromStores = _require(first[13]).useStateFromStores(items4, () => outer1_12.isProgressingOnDesktop(quest.id));
  const items6 = [questTaskDetails];
  const memo1 = memo2.useMemo(() => quest(first[23]).isQuestProgressingOnConsole(quest), items5);
  memo2 = memo2.useMemo(() => {
    const match = quest(first[44]).match(closure_1);
    const str = quest(first[44]);
    let obj = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult = match.with({ percentComplete: 0 }, () => null);
    obj = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult1 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP);
    const withResult2 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP).with(obj, () => constants.DESKTOP);
    const obj1 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO }, () => constants.DESKTOP);
    const obj2 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE }, () => constants.DESKTOP);
    const obj3 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP }, () => constants.DESKTOP);
    const obj4 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX }, () => constants.CONSOLE);
    const obj5 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION }, () => constants.CONSOLE);
    const obj6 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME }, () => constants.DESKTOP);
    const obj7 = { taskType: quest(first[33]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    return withResult8.with({ taskType: quest(first[33]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY }, () => constants.DESKTOP).exhaustive();
  }, items6);
  if (stateFromStores) {
    let DESKTOP = tmp3.DESKTOP;
  } else {
    DESKTOP = null;
    if (memo1) {
      DESKTOP = tmp3.CONSOLE;
    }
  }
  const items7 = [hasItem1, hasItem, memo2, DESKTOP, first];
  const items8 = [
    obj2.useMemo(() => {
      let obj = { lastPlatformProgress: memo2, currentProgressingPlatform: DESKTOP, selectedPlatform: first };
      const match = quest(first[44]).match(obj);
      obj = { currentProgressingPlatform: outer1_13.CONSOLE };
      const str = quest(first[44]);
      obj = { currentProgressingPlatform: outer1_13.DESKTOP };
      const withResult = match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE);
      const obj1 = { currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE };
      const withResult1 = match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE).with(obj, () => callback(5146).TaskPlatformScreen.DESKTOP);
      const obj2 = { currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP };
      const withResult2 = match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE).with(obj, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE);
      const obj3 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.CONSOLE };
      const withResult3 = match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE).with(obj, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(5146).TaskPlatformScreen.DESKTOP);
      const obj4 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.DESKTOP };
      const withResult4 = match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE).with(obj, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE);
      const withResult5 = match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE).with(obj, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.DESKTOP }, () => callback(5146).TaskPlatformScreen.DESKTOP);
      return match.with(obj, () => callback(5146).TaskPlatformScreen.CONSOLE).with(obj, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.CONSOLE }, () => callback(5146).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.DESKTOP }, () => callback(5146).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, () => {
        if (supportedConsoles) {
          if (set) {
            let SELECT = outer1_0(outer1_2[19]).TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = outer1_0(outer1_2[19]).TaskPlatformScreen;
        SELECT = supportedConsoles ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
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
let obj = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
function useQuestTaskDetails(quest) {
  let closure_0 = quest;
  const items = [quest];
  let callback = React.useCallback(() => userStatus(outer1_2[23]).getQuestTaskDetails(userStatus), items);
  const tmp2 = callback(React.useState(callback()), 2);
  let closure_2 = tmp2[1];
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
          if (supportedConsoles) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(outer1_2[21]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              outer1_3();
            };
          }
        }
      }
    }
    callback1();
  }, items2);
  return tmp2[0];
}
obj = { UNACCEPTED: 0, [0]: "UNACCEPTED", ACCEPTED: 1, [1]: "ACCEPTED", IN_PROGRESS: 2, [2]: "IN_PROGRESS", COMPLETED: 3, [3]: "COMPLETED", CLAIMED: 4, [4]: "CLAIMED" };
let closure_48 = 6 * require("set").Millis.HOUR;
const MINUTE = require("set").Millis.MINUTE;
let result = require("noop").fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export { useQuests };
export { sortQuests };
export const QuestTabs = obj;
export const QuestQueryParams = { TAB: "tab", QUEST_ID: "quest_id", SORT: "sort", FILTER: "filter", AD_CREATIVE_IDS: "ad_creative_ids" };
export const useFilteredQuests = function useFilteredQuests(ALL, supportedConsoles) {
  let excludedQuests;
  let hasFetched;
  let isFetchingCurrentQuests;
  let tmp = supportedConsoles;
  if (supportedConsoles === undefined) {
    tmp = closure_36;
  }
  let tmp2 = useQuests({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
  let quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  const map = new Map(quests.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  let tmp4 = (function useCompletedAndClaimedQuests(quests) {
    let closure_0 = quests;
    const items = [quests];
    const memo = React.useMemo(() => quests.filter((userStatus) => {
      userStatus = userStatus.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      let tmp2 = null != completedAt;
      const userStatus2 = userStatus.userStatus;
      if (userStatus2 != null) {
        const claimedAt = userStatus2.claimedAt;
      }
      if (tmp2) {
        tmp2 = null != claimedAt;
      }
      return tmp2;
    }), items);
    let closure_2 = React.useRef([]);
    const items1 = [memo];
    return React.useMemo(() => {
      if (0 === memo.length) {
        return [];
      } else {
        if (ref.current.length > 0) {
          if (tmp.current.length === arr.length) {
            return tmp.current;
          }
        }
        const sorted = arr.sort((userStatus, userStatus2) => {
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
        const mapped = sorted.map((id) => id.id);
        ref.current = mapped;
        return mapped;
      }
    }, items1);
  })(quests);
  if (ALL === obj.ALL) {
    tmp4 = tmp3;
  }
  quests = [];
  tmp3 = useAllQuests(quests, tmp);
  while (tmp5 !== undefined) {
    let value = map.get(tmp6);
    let tmp8 = value;
    let removeExpiredQuests = null != value;
    if (removeExpiredQuests) {
      let tmp9 = obj;
      removeExpiredQuests = ALL === obj.ALL;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = tmp.removeExpiredQuests;
    }
    if (removeExpiredQuests) {
      let tmp10 = isQuestHiddenFromQuestHome;
      let tmp11 = value;
      removeExpiredQuests = isQuestHiddenFromQuestHome(tmp8);
    }
    let tmp12 = removeExpiredQuests;
    let tmp13 = value;
    let tmp14 = null == tmp8 || removeExpiredQuests;
    if (!tmp14) {
      let tmp15 = value;
      let arr = quests.push(tmp8);
    }
    continue;
  }
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
};
export const useClaimedQuests = function useClaimedQuests() {
  const _require = React.useRef(false);
  const items = [initializeState];
  let claimedQuests = _initialize.useStateFromStoresArray(items, () => {
    const claimedQuests = initializeState.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  let obj = _initialize;
  const items1 = [initializeState];
  const isFetchingClaimedQuests = _initialize.useStateFromStores(items1, () => initializeState.isFetchingClaimedQuests);
  const items2 = [isFetchingClaimedQuests];
  const effect = React.useEffect(() => {
    let current = isFetchingClaimedQuests;
    if (!isFetchingClaimedQuests) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const claimedQuests = ref(outer1_2[15]).fetchClaimedQuests();
      const obj = ref(outer1_2[15]);
    }
  }, items2);
  return { claimedQuests, isFetchingClaimedQuests };
};
export const useExpiredQuestsMap = function useExpiredQuestsMap() {
  const items = [initializeState];
  return initialize.useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
};
export const useShouldShowBonusOrbsUX = function useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility) {
  const _require = quest;
  const items = [initializeState];
  const items1 = [quest];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let isQuestExpiredResult = null != closure_0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = outer1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
  const obj = _initialize;
  const result = __getDefaultRewardName.hasVirtualCurrencyReward(quest.config);
  const obj2 = __getDefaultRewardName;
  const result1 = __getDefaultRewardName.hasPremiumOrbQuantity(quest.config);
  let tmp4 = !stateFromStores;
  if (!stateFromStores) {
    tmp4 = result;
  }
  if (tmp4) {
    tmp4 = result1;
  }
  if (tmp4) {
    tmp4 = questOrbMultiplierEligibility !== _items.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  }
  return tmp4;
};
export const useQuestOrbRewardMultiplier = function useQuestOrbRewardMultiplier(questId) {
  const _require = questId;
  const items = [initializeState];
  const items1 = [questId];
  return _initialize.useStateFromStores(items, () => {
    const quest = outer1_12.getQuest(questId);
    let questOrbMultiplier = null;
    if (null != quest) {
      questOrbMultiplier = questId(outer1_2[25]).getQuestOrbMultiplier(quest.config);
      const obj = questId(outer1_2[25]);
    }
    return questOrbMultiplier;
  }, items1);
};
export const useIsQuestExpired = function useIsQuestExpired(deliveredQuest) {
  const _require = deliveredQuest;
  const items = [initializeState];
  const items1 = [deliveredQuest];
  return _initialize.useStateFromStores(items, () => {
    let isQuestExpiredResult = null != closure_0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = outer1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
};
export const useIsQuestAccessSuspended = function useIsQuestAccessSuspended() {
  const items = [initializeState];
  return initialize.useStateFromStores(items, () => obj.isQuestAccessSuspended, []);
};
export const useIsQuestEligibleForMembersListPopout = function useIsQuestEligibleForMembersListPopout(userStatus) {
  const _require = userStatus;
  let closure_1 = arg1;
  const items = [ensureGuildLoaded];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let channelId;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    let channel = outer1_7.getChannel(channelId);
    if (channel == null) {
      channel = null;
    }
    return channel;
  });
  const obj = _initialize;
  const tmp = _require;
  const items1 = [initializeState];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => null != obj.questEnrollmentBlockedUntil, []);
  const obj2 = _initialize;
  const items2 = [mergeGuildAvatar];
  const stateFromStores2 = _initialize.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj3 = _initialize;
  const items3 = [initializeState];
  const items4 = [userStatus];
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (!obj4.useStateFromStores(items3, () => {
        let isQuestExpiredResult = null != closure_0;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = outer1_12.isQuestExpired(tmp.id);
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
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let stateFromStores;
  const items = [_getSystemLocale];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => locale.locale);
  const items1 = [rewardsExpireAt, obj, stateFromStores];
  return React.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      const _Date = Date;
      const date = new Date(tmp);
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
  let getQuestImpressionId;
  getQuestImpressionId = quest(ctaContent[30]).useGetQuestImpressionId();
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return React.useCallback(() => {
    if (quest.id !== outer1_21) {
      let obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj[0] = content;
      obj[1] = ctaContent;
      obj[2] = getQuestImpressionId();
      obj[3] = sourceQuestContent;
      quest(ctaContent[32]).openGameLinkDirectly(tmp, obj);
      const obj2 = quest(ctaContent[32]);
    } else {
      const _window = window;
      obj = content(ctaContent[31]);
      window.open(obj.getArticleURL(outer1_23.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  }, items);
};
export const useIsQuestProgressingOnDesktop = function useIsQuestProgressingOnDesktop(arg0) {
  const _require = arg0;
  const items = [initializeState];
  return _initialize.useStateFromStores(items, () => outer1_12.isProgressingOnDesktop(quest.id));
};
export const useIsQuestProgressingOnConsole = function useIsQuestProgressingOnConsole(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => quest(first[23]).isQuestProgressingOnConsole(quest), items);
};
export const useIsQuestProgressingVideoQuest = function useIsQuestProgressingVideoQuest(arg0) {
  const _require = arg0;
  const items = [initializeState];
  const items1 = [arg0, _initialize.useStateFromStores(items, () => outer1_12.getOptimisticProgress(quest.id, quest(outer1_2[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  return React.useMemo(() => quest(outer1_2[34]).isVideoQuestProgressing(quest), items1);
};
export { useIsQuestProgressing };
export { useQuestTaskDetails };
export const useThirdPartyTaskDetails = function useThirdPartyTaskDetails(quest) {
  let closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => userStatus(outer1_2[23]).getThirdPartyTaskDetails(userStatus), items);
};
export const useConnectedConsoleLinkOnClick = function useConnectedConsoleLinkOnClick(quest) {
  let accounts;
  let dependencyMap;
  let fetching;
  let importDefault;
  let playstationAccounts;
  let xboxAccounts;
  quest = quest.quest;
  accounts = quest;
  ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
  let c3;
  let supportedConsoles;
  accounts = undefined;
  const items = [closure_8];
  const stateFromStoresObject = accounts(589).useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  let obj = accounts(589);
  const tmp = accounts;
  const tmp5 = useIsQuestProgressing(quest);
  let isConsoleQuestResult = accounts(7104).isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === memo.xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp5;
  }
  c3 = isConsoleQuestResult;
  let obj2 = accounts(7104);
  supportedConsoles = tmp(10406).useGetQuestImpressionId();
  return () => {
    let obj = accounts(outer1_2[32]);
    if (c3) {
      obj = { quest: null };
      obj[0] = accounts;
      obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj[0] = closure_1;
      obj[1] = accounts(outer1_2[35]).QuestContentCTA.CONNECT_CONSOLE_LINK;
      obj[2] = callback();
      obj[3] = closure_2;
      const result = obj.openAddConsoleConnectionModal(obj, obj);
    } else {
      const obj1 = { quest: null };
      obj1[0] = accounts;
      const obj2 = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj2[0] = closure_1;
      obj2[1] = accounts(outer1_2[35]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK;
      obj2[2] = callback();
      obj2[3] = closure_2;
      const result1 = obj.openConsoleConnectionSettings(obj1, obj2);
    }
  };
};
export const useGetOrFetchApplicationForConsoleQuests = function useGetOrFetchApplicationForConsoleQuests(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const set = new Set();
    while (tmp2 !== undefined) {
      let tmp4 = memo1;
      let tmp5 = outer1_2;
      let obj2 = memo1(outer1_2[23]);
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let tmp8 = consoleApplicationId;
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items);
  return useGetOrFetchApplications(memo);
};
export const useQuestForMemberListSocialEntryPoint = function useQuestForMemberListSocialEntryPoint(arg0) {
  let memo1 = arg0;
  const items = [initializeState];
  const stateFromStores = memo1(589).useStateFromStores(items, () => quests.quests);
  const arr = Array.from(stateFromStores.values());
  memo1 = arr;
  const items1 = [arr];
  const memo = React.useMemo(() => {
    const set = new Set();
    while (tmp2 !== undefined) {
      let tmp4 = memo1;
      let tmp5 = outer1_2;
      let obj2 = memo1(outer1_2[23]);
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let tmp8 = consoleApplicationId;
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items1);
  const items2 = [arg0, stateFromStores, stateFromStores(5655)(memo)];
  memo1 = React.useMemo(() => {
    const result = memo1(outer1_2[22]).filterQuestsForSocialEntrypoints(stateFromStores, outer1_15);
    const obj = memo1(outer1_2[22]);
    return memo1(outer1_2[37]).getQuestsFromActivities(result, memo1);
  }, items2);
  let obj = memo1(589);
  const items3 = [initializeState];
  const items4 = [memo1];
  let tmp4 = null;
  if (!obj3.useStateFromStores(items3, () => {
    let isQuestExpiredResult = null != closure_0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = outer1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items4)) {
    tmp4 = memo1;
  }
  return tmp4;
};
export const useQuestCollectibles = function useQuestCollectibles(config) {
  const hasQuestCollectibles = _getDefaultRewardName.hasCollectiblesQuestReward(config);
  const obj = _getDefaultRewardName;
  const defaultReward = getContextualEntrypointHeading.getDefaultReward(config);
  const obj2 = getContextualEntrypointHeading;
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
  let closure_0 = id;
  let items = [id];
  return React.useMemo(() => ({
    handleComplete() {
      return outer1_0(outer1_2[15]).completeQuestPreview(closure_0);
    },
    handleProgress(random) {
      return outer1_0(outer1_2[15]).completeQuestPreview(closure_0, random);
    },
    handleResetStatusClick() {
      return outer1_0(outer1_2[15]).resetQuestPreviewStatus(closure_0);
    },
    handleResetDismissibilityClick() {
      return outer1_0(outer1_2[15]).resetQuestDismissibilityStatus(closure_0);
    },
    handleOverridePreviewClick(placement) {
      return outer1_0(outer1_2[15]).overrideQuestForPlacement(placement, closure_0);
    },
    handleResetHasBeenSeenClick(ContextMenu, arg1) {
      const items = [closure_0];
      return outer1_0(outer1_2[15]).markAdContentUnseen(outer1_0(outer1_2[40]).AdCreativeType.QUEST, items);
    }
  }), items);
};
export const useConnectedAccounts = function useConnectedAccounts() {
  let obj = accounts(589);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  accounts = stateFromStoresObject.accounts;
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
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
  let c6;
  let callback;
  const tmp = first(React.useState(false), 2);
  first = tmp[0];
  React = tmp[1];
  let obj = questId(beforeRequest[13]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  const tmp4 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  c6 = tmp4;
  const items1 = [questId];
  callback = React.useCallback((arg0) => {
    const state = outer1_11.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp4, questId];
  const effect = React.useEffect(() => {
    _undefined(questId, questId(beforeRequest[41]).QuestConsoleStartError.EXPIRED_CREDENTIAL);
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
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
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
              let closure_1 = tmp3;
              let errorHints = tmp7;
              errorHints = undefined;
              if (c4) {
                v02 = 3;
              } else {
                if (outer1_2 != null) {
                  outer1_2();
                }
                v02(true);
                errorHints = null;
                let v0 = 1;
                let obj1 = outer1_0(outer1_2[15]);
                c4 = 2;
                v02 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.manuallyStartConsoleQuest(outer1_0, outer1_1);
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
  let accounts;
  let fetching;
  let playstationAccounts;
  let xboxAccounts;
  quest = quest.quest;
  accounts = undefined;
  const items = [closure_8];
  const stateFromStoresObject = accounts(589).useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  const obj = accounts(589);
  const tmp3 = useIsQuestProgressing(quest);
  let isConsoleQuestResult = accounts(7104).isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === memo.xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp3;
  }
  return isConsoleQuestResult;
};
export const useQuestHowToHelpArticle = function useQuestHowToHelpArticle() {
  let accounts;
  let fetching;
  let obj = accounts(589);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  const articleURL = combined.getArticleURL(constants6.QUEST_HOW_TO_PLAYSTATION);
  const obj2 = combined;
  const articleURL1 = combined.getArticleURL(constants6.QUEST_HOW_TO_XBOX);
  const intl = accounts(1236).intl;
  const formatResult = intl.format(accounts(1236).t.beN4DG, { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 });
  const intl2 = accounts(1236).intl;
  let tmp8 = articleURL1;
  if (memo.playstationAccounts.length > 0) {
    tmp8 = articleURL;
  }
  const obj3 = combined;
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
  let closure_0 = quest;
  const items = [quest];
  let callback = React.useCallback(() => userStatus(outer1_2[23]).getQuestTaskDetails(userStatus), items);
  let closure_2 = callback(React.useState(callback()), 2)[1];
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
          if (supportedConsoles) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(outer1_2[21]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              outer1_3();
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
    IN_PROGRESS = tmp2 ? tmp13.ACCEPTED : tmp13.UNACCEPTED;
  }
  return IN_PROGRESS;
};
export const useQuestCompletionDetails = function useQuestCompletionDetails(quest) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = _initialize;
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (typeof useQuestTaskDetails !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = quest;
  const items1 = [quest];
  let callback = React.useCallback(() => userStatus(outer1_2[23]).getQuestTaskDetails(userStatus), items1);
  const tmp5 = callback(React.useState(callback()), 2);
  const dependencyMap = tmp5[1];
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
          if (supportedConsoles) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(outer1_2[21]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              outer1_3();
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
  const memo = React.useMemo(() => userStatus(outer1_2[23]).getThirdPartyTaskDetails(userStatus), items4);
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
  combined = _shortenAndLocalizeNumber.formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
};
export const useSelectedTaskPlatform = function useSelectedTaskPlatform(arg0) {
  const _require = arg0;
  const items = [initializeState];
  const items1 = [_initialize.useStateFromStores(items, () => outer1_12.selectedTaskPlatform(closure_0)), ];
  const items2 = [arg0];
  items1[1] = React.useCallback((platform) => quest(first[15]).selectTaskPlatform(quest, platform), items2);
  return items1;
};
export { useTaskPlatformScreen };
export const useQuestWarningTips = function useQuestWarningTips(userStatus) {
  let dependencyMap;
  let tmp4;
  let _require = userStatus;
  const items = [userStatus];
  const memo = React.useMemo(() => userStatus(outer1_2[23]).getThirdPartyTaskDetails(userStatus), items);
  if (typeof useQuestTaskDetails !== "function") {
    HermesBuiltin.throwTypeError();
  }
  _require = userStatus;
  const items1 = [userStatus];
  let callback = obj.useCallback(() => userStatus(outer1_2[23]).getQuestTaskDetails(userStatus), items1);
  [tmp4, dependencyMap] = callback(React.useState(callback()), 2);
  const items2 = [callback];
  const callback1 = obj.useCallback(() => callback(callback()), items2);
  const tmp6 = useIsQuestProgressing(userStatus);
  callback = tmp6;
  const items3 = [userStatus, tmp6, callback1];
  const effect = obj.useEffect(() => {
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
          if (supportedConsoles) {
            const _window = window;
            userStatus = window.setInterval(() => {
              callback();
            }, callback(outer1_2[21]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              outer1_3();
            };
          }
        }
      }
    }
    callback1();
  }, items3);
  _require = userStatus;
  const tmp3 = callback(React.useState(callback()), 2);
  const items4 = [initializeState];
  const items5 = [userStatus];
  userStatus = userStatus.userStatus;
  let enrolledAt;
  const stateFromStores = _initialize.useStateFromStores(items4, () => {
    let isQuestExpiredResult = null != closure_0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = outer1_12.isQuestExpired(tmp.id);
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
  const DESKTOP = tmp8(5150).FirstPartyQuestTaskTypesSets.DESKTOP;
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
      hasItem = 0 === tmp4.percentComplete && callback(useTaskPlatformScreen(userStatus, tmp4), 1)[0] === tmp8(5146).TaskPlatformScreen.DESKTOP;
      const tmp16 = 0 === tmp4.percentComplete && callback(useTaskPlatformScreen(userStatus, tmp4), 1)[0] === tmp8(5146).TaskPlatformScreen.DESKTOP;
    }
    tmp12 = hasItem;
  }
  let tmp8Result = tmp8(500);
  let tmp17 = tmp8Result.isWeb() && tmp12;
  if (tmp17) {
    tmp8Result = tmp8(10408);
    tmp17 = !tmp8Result.isQuestSupportedOnWeb(userStatus);
  }
  const obj2 = _initialize;
  tmp14 = null != completedAt;
  let isMacResult = _set.isMac();
  if (isMacResult) {
    isMacResult = tmp4.taskType === tmp8(5150).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
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
  const items = [initializeState];
  const stateFromStores = initialize.useStateFromStores(items, () => quests.quests);
  let value = stateFromStores.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const useNonNullableQuest = function useNonNullableQuest(questId, callback) {
  const _require = questId;
  let closure_1 = callback;
  let items = [initializeState];
  const items1 = [questId];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => outer1_12.getQuest(closure_0), items1);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const items2 = [stateFromStores, questId, callback];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const quests = outer1_12.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      let obj = questId(stateFromStores[20]);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Quest unexpectedly missing from store: " + questId);
      obj = { tags: null, extra: null };
      obj[0] = { source: "useNonNullableQuest" };
      obj = { questId: null, storeQuestIds: null, storeSize: null, isFetchingCurrentQuests: null, lastFetchedCurrentQuests: null };
      obj[0] = questId;
      obj[1] = items;
      obj[2] = items.length;
      ({ isFetchingCurrentQuests: obj3[3], lastFetchedCurrentQuests: obj3[4] } = outer1_12);
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
  let supportedConsoles;
  supportedConsoles = React.useRef(null);
  const items = [questId, questContent, mode, sourceQuestContent];
  const effect = React.useEffect(() => {
    let tmp2 = null != questId;
    if (tmp2) {
      tmp2 = ref.current !== mode;
    }
    if (tmp2) {
      let obj = mode(sourceQuestContent[45]);
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
    let obj = outer1_0(outer1_2[45]);
    obj = { mode: null, prevMode: ref.current, questContent: closure_1, questId: set, sourceQuestContent: closure_2 };
    const result = obj.trackQuestBarOrDockModeChange(obj);
  }) : undefined, items1);
};
export const useCosponsoredLogotypeAsset = function useCosponsoredLogotypeAsset(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const items = [initializeState];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => outer1_12.getQuest(closure_0), items1);
  const tmp2 = importDefault(stateFromStores[46])();
  let set = tmp2;
  const items2 = [tmp2, arg1, stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else if (closure_1 != null) {
      return callback(stateFromStores[48]).getQuestAsset(tmp, callback(stateFromStores[48]).QuestAssetType.COSPONSOR_LOGO_TYPE, tmp11);
    } else {
      callback(stateFromStores[47]).isThemeDark(set) ? outer1_25.DARK : outer1_25.LIGHT;
      const obj = callback(stateFromStores[47]);
    }
  }, items2);
};
export const useClaimedCollectibleRewardMessage = function useClaimedCollectibleRewardMessage(config) {
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = _getDefaultRewardName;
  const defaultRewardName = obj1.getDefaultRewardName(config, stateFromStores);
  let obj2 = _getDefaultRewardName;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(config);
  let obj3 = _getDefaultRewardName;
  const collectibleQuestRewardExtendableExpirationDate = obj3.getCollectibleQuestRewardExtendableExpirationDate(config);
  let obj4 = _getDefaultRewardName;
  const result = obj4.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const result1 = _getDefaultRewardName.isCollectibleQuestRewardPremiumExtendable(config);
  const obj6 = _getDefaultRewardName;
  const isPremiumResult = getPremiumPlanItem.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = tmp(1236).intl;
    obj = { decorationName: null };
    obj[0] = defaultRewardName;
    return intl2.formatToPlainString(tmp(1236).t.l9uXL8, obj);
  } else {
    const intl3 = tmp(1236).intl;
    obj = { rewardName: null };
    obj[0] = defaultRewardName;
    const intl4 = tmp(1236).intl;
    obj1 = { rewardName: null, expirationDate: null };
    obj1[0] = defaultRewardName;
    obj1[1] = collectibleQuestRewardExtendableExpirationDate;
    const formatToPlainStringResult = intl3.formatToPlainString(tmp(1236).t.o97tNn, obj);
    const intl5 = tmp(1236).intl;
    obj2 = { rewardName: null, duration: null };
    obj2[0] = defaultRewardName;
    obj2[1] = collectibleQuestRewardDuration;
    let formatToPlainStringResult2 = intl5.formatToPlainString(tmp(1236).t.ie4YK0, obj2);
    const intl6 = tmp(1236).intl;
    obj3 = { duration: null, rewardName: null };
    obj3[0] = collectibleQuestRewardDuration;
    obj3[1] = defaultRewardName;
    let formatToPlainStringResult3 = intl6.formatToPlainString(tmp(1236).t.yCpc0U, obj3);
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
      const intl = tmp(1236).intl;
      obj4 = { duration: null, decorationName: null };
      obj4[0] = collectibleQuestRewardDuration;
      obj4[1] = defaultRewardName;
      return intl.formatToPlainString(tmp(1236).t.tTlItm, obj4);
    }
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp(1236).t.PkyRZo, obj1);
  }
};
export const useLaunchInGameActivityQuest = function useLaunchInGameActivityQuest(quest) {
  let obj = getApplicationIdsByTaskTypes;
  obj = { launchInGameActivity: null };
  const activityApplicationId = obj.getActivityApplicationId(quest);
  obj[0] = useRefocusOrLaunchActivity({ applicationId: activityApplicationId });
  return obj;
};
export const useIsPreviewerOnAnyQuest = function useIsPreviewerOnAnyQuest() {
  const items = [initializeState];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((preview) => preview.preview);
};
export const useShouldShowPreviewToolTab = function useShouldShowPreviewToolTab() {
  let items = [initializeState];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((preview) => preview.preview);
};
export const useShouldShowQuestsActivityPanelItem = function useShouldShowQuestsActivityPanelItem(userStatus) {
  userStatus = undefined;
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    isDismissedResult = getQuestDeliveryDataForPlacement.isDismissed(userStatus.userStatus, QuestsVisibleMessagesChangedSource.QuestContent.ACTIVITY_PANEL);
    const obj = getQuestDeliveryDataForPlacement;
  }
  let tmp5 = userStatus;
  if (userStatus == null) {
    tmp5 = null;
  }
  require = tmp5;
  const items = [initializeState];
  const items1 = [tmp5];
  let claimedAt;
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let isQuestExpiredResult = null != closure_0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = outer1_12.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj2 = initialize;
  const tmp11 = null != claimedAt;
  const tmp6 = require;
  const tmp8 = initializeState;
  const items2 = [tmp8];
  const stateFromStores1 = initialize.useStateFromStores(items2, () => null != obj.questEnrollmentBlockedUntil, []);
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
  let items = [initializeState];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  const items1 = [stateFromStoresArray];
  return React.useMemo(() => stateFromStoresArray.filter((preview) => preview.preview), items1);
};
export const useQuestHomeFilterOptions = function useQuestHomeFilterOptions() {
  let closure_0 = closure_17;
  const items = [closure_17];
  return React.useMemo(() => closure_0.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { heading: null, options: null };
    obj[0] = callback(table[38]).getFilterGroupHeadingText(tmp);
    obj[1] = tmp2;
    return obj;
  }), items);
};
export const useQuestHomeSortOptions = function useQuestHomeSortOptions() {
  return React.useMemo(() => {
    const keys = Object.keys(closure_16);
    return keys.map((arg0) => {
      const obj = { label: null, value: null };
      obj[0] = callback(table[38]).getSortMethodText(dependencyMap[arg0]);
      obj[1] = dependencyMap[arg0];
      return obj;
    });
  }, []);
};
export const useQuestHomeSortingFilteringAnalytics = function useQuestHomeSortingFilteringAnalytics(selectedSortMethod) {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  let set = React.useRef(null);
  let supportedConsoles = React.useRef(null);
  const items = [selectedSortMethod];
  const effect = React.useEffect(() => {
    let obj = selectedFilters(numQuestsVisible[51]);
    obj = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
    obj.track(outer1_26.QUEST_HOME_SORT_METHOD_CHANGED, obj);
    ref.current = selectedSortMethod;
  }, items);
  const items1 = [selectedFilters, numQuestsVisible];
  const effect1 = React.useEffect(() => {
    const mapped = selectedFilters.map((arg0) => arg0.filter);
    let obj = selectedFilters(numQuestsVisible[51]);
    obj = { filters: mapped, previous_filters: null, num_quests_visible: null };
    let current = ref2.current;
    if (current == null) {
      current = [];
    }
    obj[1] = current;
    obj[2] = numQuestsVisible;
    obj.track(outer1_26.QUEST_HOME_FILTERS_CHANGED, obj);
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
  const items = [initializeState];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => quests.quests);
  questIds = undefined;
  if (questIds != null) {
    questIds = questIds.questIds;
  }
  const items1 = [stateFromStores, questIds];
  return React.useMemo(() => {
    if (null == questIds) {
      let obj = { shelfQuests: null, isShelfEnabled: false };
      obj[0] = [];
      return obj;
    } else {
      const mapped = arr.map((arg0) => lib.get(arg0));
      const found = mapped.filter(stateFromStores(outer1_2[52]).isNotNullish);
      const found1 = found.filter((arg0) => !lib(table[20]).isQuestExpired(arg0));
      if (found1.length <= 1) {
        obj = { shelfQuests: null, isShelfEnabled: false };
        obj[0] = [];
      } else {
        obj = { shelfQuests: null, isShelfEnabled: true };
        obj[0] = found1;
      }
      return obj;
    }
    arr = questIds;
  }, items1);
};
export const useFetchQuestHomeBounties = function useFetchQuestHomeBounties(location) {
  let c4;
  let isFetching;
  let questHomeBounties;
  let tmp6;
  let obj = location;
  if (location === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let showBounties;
  let enabled;
  let c3;
  let callback;
  let obj1 = previewAdCreativeIds(enabled[53]);
  const bountiesExperience = obj1.useBountiesExperience(constants2.QUEST_HOME_MOBILE);
  showBounties = bountiesExperience.showBounties;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(enabled[54]).BountyStaleRefreshQuestHomeExperiment;
  obj = { location: constants2.QUEST_HOME_MOBILE };
  enabled = BountyStaleRefreshQuestHomeExperiment.useConfig(obj).enabled;
  const AdPlacement = previewAdCreativeIds(enabled[19]).AdPlacement;
  const tmp4 = bountiesExperience.verticalScrollEnabled ? AdPlacement.VIDEO_MODAL_MOBILE : AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
  c3 = tmp4;
  [tmp6, c4] = callback(React.useState(showBounties), 2);
  let tmp = previewAdCreativeIds;
  const tmp2 = enabled;
  const tmp5 = callback(React.useState(showBounties), 2);
  const items = [closure_10];
  const stateFromStoresObject = previewAdCreativeIds(enabled[13]).useStateFromStoresObject(items, () => ({ isFetching: closure_10.isFetchingQuestHomeBounties, questHomeBounties: closure_10.questHomeBounties }));
  const items1 = [showBounties, enabled, previewAdCreativeIds, tmp4];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    function loadBounties() {
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
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
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
                let closure_0 = tmp3;
                const _Date = Date;
                c1 = Date.now();
                let c3 = 1;
                if (null != outer1_0) {
                  if (arr.length > 0) {
                    c1 = 3;
                    v0 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer2_0(outer2_2[55]).fetchBountyPreview(arr, c3);
                    return obj1;
                  }
                }
                let obj2 = outer2_0(outer2_2[55]);
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
                  if (!outer1_0) {
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
              if (!outer1_0) {
                v0(false);
              }
              v0 = 3;
              return { value: "T", done: null };
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
      const _loadBounties = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (c1) {
      let c0 = false;
      c1 = 0;
      const bounties = loadBounties();
      if (interval) {
        const _window = window;
        interval = window.setInterval(() => {
          if (Date.now() - c1 > outer2_48) {
            loadBounties();
          }
        }, outer1_49);
        return () => {
          let c0 = true;
          window.clearInterval(closure_2);
        };
      } else {
        return () => {
          let c0 = true;
        };
      }
    }
  }, items1);
  if (showBounties) {
    obj = { questHomeBounties: null, isLoading: null };
    obj[0] = questHomeBounties;
    obj[1] = tmp6;
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
  const DropsOptedOut = _explicitContentFromProto.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const userStatus = questCreative.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const dependencyMap = tmp3;
  const items = [setting, null != enrolledAt, questCreative.id];
  return React.useCallback(() => {
    if (!tmp3) {
      let fireSurveyAction = questCreative(tmp3[57]).SurveyActionTypes;
      fireSurveyAction = questCreative(tmp3[58]).fireSurveyAction;
      const obj = { quest_id: null };
      obj[0] = questCreative.id;
      fireSurveyAction(setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN, obj);
      const tmp4 = setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN;
      const tmp7 = questCreative(tmp3[58]);
    }
  }, items);
};