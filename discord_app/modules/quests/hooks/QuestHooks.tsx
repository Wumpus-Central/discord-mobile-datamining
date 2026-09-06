// discord_app/modules/quests/hooks/QuestHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import MurmurHashV3Default from "../../../../_runtime/01241_MurmurHashV3.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import shared from "../../../design/shared.tsx";
import _mod4745 from "module_4745" /* 4745 */;
import QualtricsActionCreators from "../../qualtrics/QualtricsActionCreators.tsx";
import SurveyActionTypes from "../../../../discord_common/js/shared/shared-constants/SurveyActionTypes.tsx";
import FirstPartyQuestTaskTypes from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import QuestDataUtils from "../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import utils_QuestUtils from "../utils/QuestUtils.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import useFetchCollectiblesProduct from "../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import QuestCopyUtils from "../utils/QuestCopyUtils.tsx";
import DiscordAppStateDefault from "../../app_state/DiscordAppState.native.tsx";
import QuestPlatformUtils from "../utils/QuestPlatformUtils.tsx";
import VideoQuestUtils from "../utils/VideoQuestUtils.tsx";
import QuestMatchingUtils from "../utils/QuestMatchingUtils.tsx";
import QuestConsoleStartError from "../../../../discord_common/js/shared/shared-constants/QuestConsoleStartError.tsx";
import useRefocusOrLaunchActivityDefault from "../../activities/utils/useRefocusOrLaunchActivity.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AdDeliveryStore from "../../ads/AdDeliveryStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BountyStore from "../BountyStore.tsx";
import QuestStore from "../QuestStore.tsx";

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
  let items = [QuestStore];
  let quests = obj(504).useStateFromStoresArray(items, () => {
    const quests = QuestStore.quests;
    const items = [...quests.values()];
    return items;
  });
  let obj2 = obj(504);
  const items1 = [QuestStore];
  let excludedQuests = obj(504).useStateFromStoresArray(items1, () => {
    const excludedQuests = QuestStore.excludedQuests;
    const items = [...excludedQuests.values()];
    return items;
  });
  let obj3 = obj(504);
  const items2 = [QuestStore];
  const stateFromStoresObject = obj(504).useStateFromStoresObject(items2, () => ({
    isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
  }));
  const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  const obj4 = obj(504);
  isEligibleForQuests = obj(11484).getIsEligibleForQuests();
  const items3 = [
    obj.fetchPolicy,
    isEligibleForQuests,
    hasFetched,
    isFetchingCurrentQuests,
    lastFetchedCurrentQuests,
    obj.callerSource,
  ];
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
        closure_2(true);
        obj = QuestActionCreators;
        const currentQuests = obj.fetchCurrentQuests();
        if (obj2.isMac()) {
          const state = DiscordAppStateDefault.getState();
        }
        obj2 = PlatformUtils;
      }
    }
  }, items3);
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
}
function defaultSortFn(id, id2, questHomeHero, get) {
  let tmp2 = id.id === __initData;
  if (tmp2) {
    const userStatus = id.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    tmp2 = null == completedAt;
  }
  let tmp5 = id2.id === __initData;
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
      num15 = c29;
    }
    return num15;
  } else {
    const isQuestExpiredResult = QuestDataUtils.isQuestExpired(id);
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
    const result = 30 * DurationsDefault.Millis.MINUTE;
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
          num14 = c29;
        }
        let result1 = num14;
      } else if (tmp13 !== tmp15) {
        let num13 = 1;
        if (tmp13) {
          num13 = c29;
        }
        result1 = num13;
      } else {
        const expiresAt2 = id.config.expiresAt;
        let num12 = 1;
        if (constants8.DESC === constants8.DESC) {
          num12 = c29;
        }
        result1 = expiresAt2.localeCompare(id2.config.expiresAt) * num12;
      }
      return result1;
    } else {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          let tmp50Result = tmp50(7722);
          const result2 = tmp50Result.isQuestFeaturedByHero(questHomeHero, id.id);
          tmp50Result = tmp50(7722);
          let num2 = 1;
          if (result2) {
            num2 = c29;
          }
          return num2;
        }
      }
      const questType = tmp50(7722).getQuestType(id.config);
      const tmp50Result1 = tmp50(7722);
      const questType1 = tmp50(7722).getQuestType(id2.config);
      const tmp50Result2 = tmp50(7722);
      const result3 = tmp50(7724).hasWatchVideoOnMobileTasks(id);
      const tmp50Result3 = tmp50(7724);
      const result4 = tmp50(7724).hasWatchVideoOnMobileTasks(id2);
      if (result3 !== result4) {
        if (!result3) {
          return num3;
        }
        let num11 = 1;
        if (result3) {
          num11 = c29;
        }
        num3 = num11;
      }
      if (questType !== questType1) {
        num3 = 1;
        if (questType === tmp50(7727).QuestType.VIDEO) {
          num3 = c29;
        }
      }
      if (tmp21 === tmp32) {
        if (tmp9 !== tmp11) {
        } else if (tmp13 !== tmp15) {
        } else {
          get.get(id.id);
          value = get.get(id2.id);
          if (null != value) {
            if (null != value) {
              if (value !== value) {
                const num6 = value - value;
              } else if (id.id !== id2.id) {
              }
            }
          }
          if (null != value) {
          } else {
            let num4 = 1;
            if (null == value) {
              const expiresAt = id.config.expiresAt;
              if (constants8.ASC === tmp56.DESC) {
                num4 = c29;
              }
              const num5 = expiresAt.localeCompare(id2.config.expiresAt) * num4;
            }
          }
          tmp56 = constants8;
        }
      }
      const tmp50Result4 = tmp50(7724);
    }
    const tmp19 = null != completedAt2;
    const tmp30 = null != completedAt3;
  }
}
function recentSortFn(config, config2) {
  const startsAt = config.config.startsAt;
  let num = 1;
  if (constants8.DESC === constants8.DESC) {
    num = c29;
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
      if (constants8.DESC === constants8.DESC) {
        num3 = c29;
      }
      let num = expiresAt.localeCompare(userStatus2.config.expiresAt) * num3;
    }
    return num;
  }
  if (null != enrolledAt) {
    if (null == enrolledAt) {
      num = c29;
    }
  }
  if (null != enrolledAt) {
    let num2 = 1;
    if (constants8.DESC === constants8.DESC) {
      num2 = c29;
    }
    num = enrolledAt.localeCompare(enrolledAt) * num2;
  } else {
    num = 1;
  }
}
function expiringSoonSortFn(config, config2) {
  const expiresAt = config.config.expiresAt;
  let num = 1;
  if (constants8.ASC === constants8.DESC) {
    num = c29;
  }
  return expiresAt.localeCompare(config2.config.expiresAt) * num;
}
function doesQuestPassTaskFilter(quest, arg1) {
  if (constants4.VIDEO === arg1) {
    return QuestTaskUtils.hasWatchVideoTasks(quest);
  } else if (tmp.PLAY === arg1) {
    obj = { quest };
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
    if (!hasPlayOnDesktopTaskResult) {
      let tmp2Result = tmp2(7724);
      obj = { quest };
      hasPlayOnDesktopTaskResult = tmp2Result.hasStreamOnDesktopTask(obj);
    }
    if (!hasPlayOnDesktopTaskResult) {
      tmp2Result = tmp2(7724);
      hasPlayOnDesktopTaskResult = tmp2Result.hasPlayActivityTask(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = tmp2(7724).isConsoleQuest(quest);
      const tmp2Result1 = tmp2(7724);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = tmp2(7724).isInGameQuest(quest);
      const tmp2Result2 = tmp2(7724);
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config, arg1) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    return QuestRewardUtils.hasVirtualCurrencyReward(config.config);
  } else if (tmp.COLLECTIBLE === arg1) {
    return QuestRewardUtils.hasCollectiblesQuestReward(config.config);
  } else if (tmp.IN_GAME === arg1) {
    let hasInGameQuestRewardResult = QuestRewardUtils.hasInGameQuestReward(config.config);
    if (!hasInGameQuestRewardResult) {
      hasInGameQuestRewardResult = QuestRewardUtils.hasQuestRewardCode(config.config);
      const tmp2Result = QuestRewardUtils;
    }
    return hasInGameQuestRewardResult;
  } else {
    return false;
  }
}
function sortQuests(arr, arg1, memo) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_37;
  }
  let tmp2 = memo;
  if (memo === undefined) {
    tmp2 = closure_38;
  }
  ({ sortMethod, filters } = tmp);
  obj = arr;
  if (null != filters) {
    obj = arr;
    if (0 !== filters.length) {
      let found = arr;
      if (0 !== filters.length) {
        _require = require("../../../../_runtime/metro/00012__.js").groupBy(filters, "group");
        found = arr.filter((item) => {
          closure_0 = item;
          const entries = Object.entries(closure_0);
          return entries.every((item) => {
            [tmp, arr] = item;
            if ("task" === tmp) {
              let tmp2 = doesQuestPassTaskFilter;
            } else if ("reward" === tmp) {
              tmp2 = doesQuestPassRewardFilter;
            }
            closure_1 = tmp2;
            return 0 === arr.length || arr.some((item) => closure_1(closure_0, item.filter));
          });
        });
        let obj2 = require("../../../../_runtime/metro/00012__.js");
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
  closure_129_0 = tmp8;
  closure_129_1 = tmp2;
  closure_129_2 = (function computeRenewableQuestSortKeys(found, currentUserId, isRenewableEndDateSortEnabled) {
    const map = new Map();
    if (isRenewableEndDateSortEnabled) {
      if (null != currentUserId) {
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp8 = nextResult;
          let obj2 = closure_0(dependencyMap[21]);
          if (obj2.hasVariant(nextResult, constants.RENEWABLE_END_DATE)) {
            let result = map.set(tmp8.id, seededQuestSortKey(currentUserId, tmp8.id));
          }
          continue;
        }
        return map;
      }
    }
    return map;
  })(obj, tmp2.currentUserId, tmp2.isRenewableEndDateSortEnabled);
  return obj.sort((arg0, arg1) => {
    const isQuestExpiredResult = QuestDataUtils.isQuestExpired(arg0);
    const tmp2 = !isQuestExpiredResult;
    if (tmp2 !== !obj2.isQuestExpired(arg1)) {
      let num = 1;
      if (!isQuestExpiredResult) {
        num = c29;
      }
      let tmp8 = num;
    } else {
      tmp8 = closure_0(arg0, arg1, importDefault, dependencyMap);
    }
    return tmp8;
  });
}
function seededQuestSortKey(arg0, arg1) {
  return MurmurHashV3Default.v3("" + arg0 + ":" + arg1) >>> 0;
}
function useAllQuests(quests, sortMethod) {
  _require = quests;
  importDefault = sortMethod;
  obj = require("initialize");
  const items = [ref3];
  const stateFromStores = obj.useStateFromStores(items, () => null);
  closure_129_0 = stateFromStores;
  closure_130_1 = undefined;
  const items1 = [QuestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => quests.quests);
  closure_130_0 = stateFromStores1;
  let questIds;
  if (stateFromStores != null) {
    questIds = stateFromStores.questIds;
  }
  closure_130_1 = questIds;
  const items2 = [stateFromStores1, questIds];
  const isShelfEnabled = noop.useMemo(() => {
    if (null == questIds) {
      obj = { shelfQuests: [], isShelfEnabled: false };
      return obj;
    } else {
      const mapped = arr.map((item) => stateFromStores.get(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => !stateFromStores(closure_1_2[19]).isQuestExpired(item));
      if (found1.length <= 1) {
        obj = { shelfQuests: [], isShelfEnabled: false };
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
    arr = questIds;
  }, items2).isShelfEnabled;
  closure_129_1 = isShelfEnabled;
  const obj2 = require("initialize");
  const items3 = [UserStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
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
  closure_129_2 = stateFromStores2;
  const tmpResult = require("initialize");
  obj = { location: constants2.QUEST_HOME_MOBILE };
  const enabled = require("RenewableEndDateSortExperiment").useConfig(obj).enabled;
  closure_129_3 = enabled;
  const items4 = [stateFromStores, isShelfEnabled, stateFromStores2, enabled];
  memo = noop.useMemo(
    () => ({ questHomeHero, isQuestHomeHeroShelfEnabled, currentUserId: memo, isRenewableEndDateSortEnabled }),
    items4,
  );
  const isRenewableEndDateSortEnabled = noop.useRef([]);
  noop.useRef(sortMethod.sortMethod);
  noop = noop.useRef(sortMethod.filters);
  const obj4 = require("RenewableEndDateSortExperiment");
  noop.useRef(memo);
  const items5 = [quests, sortMethod, memo];
  return noop.useMemo(() => {
    if (0 === questHomeHero.length) {
      return [];
    } else {
      if (isRenewableEndDateSortEnabled.current.length > 0) {
        if (ref3.current === arr.length) {
          if (ref.current === isQuestHomeHeroShelfEnabled.sortMethod) {
            if (ref2.current === tmp3.filters) {
              if (ref4.current === memo) {
                return tmp15.current;
              }
            }
          }
        }
      }
      const mapped = sortQuests(arr, isQuestHomeHeroShelfEnabled, memo).map((id) => id.id);
      isRenewableEndDateSortEnabled.current = mapped;
      ref.current = isQuestHomeHeroShelfEnabled.sortMethod;
      ref2.current = isQuestHomeHeroShelfEnabled.filters;
      ref3.current = arr.length;
      ref4.current = memo;
      return mapped;
    }
  }, items5);
}
function isQuestHiddenFromQuestHome(userStatus) {
  let isQuestExpiredResult = QuestDataUtils.isQuestExpired(userStatus);
  if (isQuestExpiredResult) {
    isQuestExpiredResult = !QuestDataUtils.hasUnclaimedReward(userStatus.userStatus);
    const tmpResult = QuestDataUtils;
  }
  return isQuestExpiredResult;
}
function useIsQuestProgressing(quest) {
  _require = quest;
  const items = [QuestStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () =>
    QuestStore.isProgressingOnDesktop(quest.id),
  );
  closure_129_0 = quest;
  const items1 = [quest];
  closure_130_0 = quest;
  const memo = noop.useMemo(() => QuestTaskUtils.isQuestProgressingOnConsole(closure_0), items1);
  obj = require("initialize");
  const items2 = [QuestStore];
  const items3 = [
    quest,
    require("initialize").useStateFromStores(items2, () =>
      QuestStore.getOptimisticProgress(quest.id, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO),
    ),
  ];
  const memo1 = noop.useMemo(() => VideoQuestUtils.isVideoQuestProgressing(closure_0), items3);
  if (!stateFromStores) {
    stateFromStores = memo;
  }
  if (!stateFromStores) {
    stateFromStores = memo1;
  }
  return stateFromStores;
}
function useTaskPlatformScreen(quest, questTaskDetails) {
  _require = quest;
  closure_1 = questTaskDetails;
  const id = quest.id;
  closure_129_0 = id;
  const items = [QuestStore];
  const items1 = [require("initialize").useStateFromStores(items, () => QuestStore.selectedTaskPlatform(closure_0))];
  const items2 = [id];
  items1[1] = memo2.useCallback((platform) => QuestActionCreators.selectTaskPlatform(closure_0, platform), items2);
  const tmp = hasItem1(items1, 2);
  selectedPlatform = tmp[0];
  const items3 = [quest];
  const memo = memo2.useMemo(() => QuestPlatformUtils.supportedTaskPlatforms(closure_0), items3);
  const hasItem = memo.includes(constants.DESKTOP);
  hasItem1 = memo.includes(constants.CONSOLE);
  closure_130_0 = quest;
  obj = require("initialize");
  let obj2 = memo2;
  const items4 = [QuestStore];
  closure_131_0 = quest;
  const items5 = [quest];
  const stateFromStores = require("initialize").useStateFromStores(items4, () =>
    QuestStore.isProgressingOnDesktop(quest.id),
  );
  const items6 = [questTaskDetails];
  const memo1 = memo2.useMemo(() => QuestTaskUtils.isQuestProgressingOnConsole(closure_0), items5);
  memo2 = memo2.useMemo(() => {
    const match = _mod4745.match(closure_1);
    obj = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult = match.with({ percentComplete: 0 }, () => null);
    obj = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult1 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP);
    const withResult2 = match
      .with({ percentComplete: 0 }, () => null)
      .with(obj, () => constants.DESKTOP)
      .with(obj, () => constants.DESKTOP);
    const obj1 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with(
      { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO },
      () => constants.DESKTOP,
    );
    const obj2 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with(
      { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE },
      () => constants.DESKTOP,
    );
    const obj3 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with(
      { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP },
      () => constants.DESKTOP,
    );
    const obj4 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with(
      { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX },
      () => constants.CONSOLE,
    );
    const obj5 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with(
      { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION },
      () => constants.CONSOLE,
    );
    const obj6 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with(
      { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME },
      () => constants.DESKTOP,
    );
    const obj7 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    return withResult8
      .with(
        { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY },
        () => constants.DESKTOP,
      )
      .exhaustive();
  }, items6);
  if (stateFromStores) {
    let DESKTOP = tmp3.DESKTOP;
  } else {
    DESKTOP = null;
    if (memo1) {
      DESKTOP = tmp3.CONSOLE;
    }
  }
  const items7 = [hasItem1, hasItem, memo2, DESKTOP, selectedPlatform];
  const items8 = [
    obj2.useMemo(() => {
      obj = { lastPlatformProgress: memo2, currentProgressingPlatform: DESKTOP, selectedPlatform };
      const match = _mod4745.match(obj);
      obj = { currentProgressingPlatform: constants.CONSOLE };
      obj = { currentProgressingPlatform: constants.DESKTOP };
      const withResult = match.with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE);
      const obj1 = { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE };
      const withResult1 = match
        .with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE)
        .with(obj, () => quest(5447).TaskPlatformScreen.DESKTOP);
      const obj2 = { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP };
      const withResult2 = match
        .with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE)
        .with(obj, () => quest(5447).TaskPlatformScreen.DESKTOP)
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        );
      const obj3 = {
        currentProgressingPlatform: null,
        lastPlatformProgress: null,
        selectedPlatform: constants.CONSOLE,
      };
      const withResult3 = match
        .with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE)
        .with(obj, () => quest(5447).TaskPlatformScreen.DESKTOP)
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP },
          () => quest(5447).TaskPlatformScreen.DESKTOP,
        );
      const obj4 = {
        currentProgressingPlatform: null,
        lastPlatformProgress: null,
        selectedPlatform: constants.DESKTOP,
      };
      const withResult4 = match
        .with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE)
        .with(obj, () => quest(5447).TaskPlatformScreen.DESKTOP)
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP },
          () => quest(5447).TaskPlatformScreen.DESKTOP,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        );
      const withResult5 = match
        .with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE)
        .with(obj, () => quest(5447).TaskPlatformScreen.DESKTOP)
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP },
          () => quest(5447).TaskPlatformScreen.DESKTOP,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP },
          () => quest(5447).TaskPlatformScreen.DESKTOP,
        );
      return match
        .with(obj, () => quest(5447).TaskPlatformScreen.CONSOLE)
        .with(obj, () => quest(5447).TaskPlatformScreen.DESKTOP)
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP },
          () => quest(5447).TaskPlatformScreen.DESKTOP,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE },
          () => quest(5447).TaskPlatformScreen.CONSOLE,
        )
        .with(
          { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP },
          () => quest(5447).TaskPlatformScreen.DESKTOP,
        )
        .with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, () => {
          if (hasItem1) {
            if (hasItem) {
              let SELECT = closure_0(first[44]).TaskPlatformScreen.SELECT;
            }
            return SELECT;
          }
          const TaskPlatformScreen = closure_0(first[44]).TaskPlatformScreen;
          SELECT = hasItem1 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
        })
        .exhaustive();
    }, items7),
    memo,
    tmp[1],
  ];
  return items8;
}
const useConsoleQuestUIStore = fn(7704).useConsoleQuestUIStore;
const QuestConstants = fn(5444);
({
  QuestTaskPlatform: closure_14,
  QuestsExperimentLocations: closure_15,
  MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES: closure_16,
  QuestHomeSortMethods: closure_17,
  SORTED_QUEST_HOME_FILTER_GROUPS: closure_18,
  TaskFilterTypes: closure_19,
  RewardFilterTypes: closure_20,
  MOBILE_ORBS_INTRO_QUEST_ID: closure_21,
  ORBS_INTRO_QUEST_ID: closure_22,
  QuestVariants: closure_23,
} = QuestConstants);
const Constants = fn(1074);
({
  HelpdeskArticles: closure_24,
  PlatformTypes: closure_25,
  ThemeTypes: closure_26,
  AnalyticEvents: closure_27,
} = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
let c29 = -1;
let closure_37 = {};
let closure_38 = {
  questHomeHero: null,
  isQuestHomeHeroShelfEnabled: false,
  currentUserId: null,
  isRenewableEndDateSortEnabled: false,
};
const constants8 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
let obj = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
function useQuestTaskDetails(quest) {
  closure_0 = quest;
  const items = [quest];
  const callback = noop.useCallback(() => QuestTaskUtils.getQuestTaskDetails(closure_0), items);
  const tmp2 = _slicedToArray(noop.useState(callback()), 2);
  closure_2 = tmp2[1];
  const items1 = [callback];
  const callback1 = noop.useCallback(() => dependencyMap(importDefault()), items1);
  const tmp4 = useIsQuestProgressing(quest);
  _slicedToArray = tmp4;
  const items2 = [quest, tmp4, callback1];
  const effect = noop.useEffect(() => {
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
              closure_1_3();
            }, DurationsDefault.Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              asyncGeneratorStep();
            };
          }
        }
      }
    }
    closure_3();
  }, items2);
  return tmp2[0];
}
obj = {
  UNACCEPTED: 0,
  [0]: "UNACCEPTED",
  ACCEPTED: 1,
  [1]: "ACCEPTED",
  IN_PROGRESS: 2,
  [2]: "IN_PROGRESS",
  COMPLETED: 3,
  [3]: "COMPLETED",
  CLAIMED: 4,
  [4]: "CLAIMED",
};
let closure_49 = 6 * DurationsDefault.Millis.HOUR;
const MINUTE = DurationsDefault.Millis.MINUTE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export { useQuests };
export { sortQuests };
export const QuestTabs = obj;
export const QuestQueryParams = {
  TAB: "tab",
  QUEST_ID: "quest_id",
  SORT: "sort",
  FILTER: "filter",
  AD_CREATIVE_IDS: "ad_creative_ids",
};
export const useFilteredQuests = function useFilteredQuests(ALL, quests) {
  let tmp = quests;
  if (quests === undefined) {
    tmp = closure_37;
  }
  let tmp2 = useQuests({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
  quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  const map = new Map(
    quests.map((id) => {
      const items = [id.id, id];
      return items;
    }),
  );
  const tmp4 = (function useCompletedAndClaimedQuests(quests) {
    const items = [quests];
    const memo = React.useMemo(
      () =>
        quests.filter((userStatus) => {
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
        }),
      items,
    );
    React.useRef([]);
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
          if ((null == claimedAt) !== (null == claimedAt1)) {
            let num2 = 1;
            if (tmp2) {
              num2 = closure_1_29;
            }
            let result = num2;
          } else {
            const rewardsExpireAt = userStatus.config.rewardsConfig.rewardsExpireAt;
            let num = 1;
            if (constants.DESC === constants.DESC) {
              num = closure_1_29;
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
  quests = [];
  const tmp3 = useAllQuests(quests, tmp);
  while (tmp5 !== undefined) {
    value = map.get(tmp6);
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
  _require = noop.useRef(false);
  const items = [QuestStore];
  let claimedQuests = require("initialize").useStateFromStoresArray(items, () => {
    const claimedQuests = QuestStore.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  obj = require("initialize");
  const items1 = [QuestStore];
  const isFetchingClaimedQuests = require("initialize").useStateFromStores(
    items1,
    () => QuestStore.isFetchingClaimedQuests,
  );
  const items2 = [isFetchingClaimedQuests];
  const effect = noop.useEffect(() => {
    let current = isFetchingClaimedQuests;
    if (!isFetchingClaimedQuests) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const claimedQuests = QuestActionCreators.fetchClaimedQuests();
    }
  }, items2);
  return { claimedQuests, isFetchingClaimedQuests };
};
export const useExpiredQuestsMap = function useExpiredQuestsMap() {
  const items = [QuestStore];
  return initialize.useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
};
export const useShouldShowBonusOrbsUX = function useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility) {
  _require = quest;
  const items = [QuestStore];
  const items1 = [quest];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let isQuestExpiredResult = null != c0;
      if (isQuestExpiredResult) {
        isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
      }
      return isQuestExpiredResult;
    },
    items1,
  );
  obj = require("initialize");
  const result = require("QuestRewardUtils").hasVirtualCurrencyReward(quest.config);
  const obj2 = require("QuestRewardUtils");
  const result1 = require("QuestRewardUtils").hasPremiumOrbQuantity(quest.config);
  let tmp4 = !stateFromStores;
  if (!stateFromStores) {
    tmp4 = result;
  }
  if (tmp4) {
    tmp4 = result1;
  }
  if (tmp4) {
    tmp4 =
      questOrbMultiplierEligibility !== require("QuestOrbMultiplierUtils").QuestOrbMultiplierEligibilityType.INELIGIBLE;
  }
  return tmp4;
};
export const useQuestOrbRewardMultiplier = function useQuestOrbRewardMultiplier(questId) {
  _require = questId;
  const items = [QuestStore];
  const items1 = [questId];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const quest = QuestStore.getQuest(closure_0);
      let questOrbMultiplier = null;
      if (null != quest) {
        questOrbMultiplier = QuestRewardUtils.getQuestOrbMultiplier(quest.config);
      }
      return questOrbMultiplier;
    },
    items1,
  );
};
export const useIsQuestExpired = function useIsQuestExpired(deliveredQuest) {
  _require = deliveredQuest;
  const items = [QuestStore];
  const items1 = [deliveredQuest];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let isQuestExpiredResult = null != c0;
      if (isQuestExpiredResult) {
        isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
      }
      return isQuestExpiredResult;
    },
    items1,
  );
};
export const useIsQuestAccessSuspended = function useIsQuestAccessSuspended() {
  const items = [QuestStore];
  return initialize.useStateFromStores(items, () => QuestStore.isQuestAccessSuspended, []);
};
export const useIsQuestEligibleForMembersListPopout = function useIsQuestEligibleForMembersListPopout(
  userStatus,
  arg1,
  arg2,
) {
  _require = userStatus;
  let channelId = arg1;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    let channel = ChannelStore.getChannel(channelId);
    if (channel == null) {
      channel = null;
    }
    return channel;
  });
  obj = require("initialize");
  const items1 = [QuestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => null != QuestStore.questEnrollmentBlockedUntil,
    [],
  );
  const obj2 = require("initialize");
  const items2 = [UserStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj3 = require("initialize");
  const items3 = [QuestStore];
  const items4 = [userStatus];
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (
        !obj4.useStateFromStores(
          items3,
          () => {
            let isQuestExpiredResult = null != closure_0;
            if (isQuestExpiredResult) {
              isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
            }
            return isQuestExpiredResult;
          },
          items4,
        )
      ) {
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
  _require = rewardsExpireAt;
  obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let stateFromStores;
  const items = [LocaleStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const items1 = [rewardsExpireAt, obj, stateFromStores];
  return noop.useMemo(() => {
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
  const getQuestImpressionId = quest(ctaContent[29]).useGetQuestImpressionId();
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return noop.useCallback(() => {
    if (quest.id !== __initData2) {
      obj = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
      QuestPlatformUtils.openGameLinkDirectly(tmp, obj);
    } else {
      const _window = window;
      obj = HelpdeskUtilsDefault;
      window.open(obj.getArticleURL(constants6.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  }, items);
};
export const useIsQuestProgressingOnDesktop = function useIsQuestProgressingOnDesktop(arg0) {
  _require = arg0;
  const items = [QuestStore];
  return require("initialize").useStateFromStores(items, () => QuestStore.isProgressingOnDesktop(quest.id));
};
export const useIsQuestProgressingOnConsole = function useIsQuestProgressingOnConsole(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => QuestTaskUtils.isQuestProgressingOnConsole(closure_0), items);
};
export const useIsQuestProgressingVideoQuest = function useIsQuestProgressingVideoQuest(arg0) {
  _require = arg0;
  const items = [QuestStore];
  const items1 = [
    arg0,
    require("initialize").useStateFromStores(items, () =>
      QuestStore.getOptimisticProgress(quest.id, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO),
    ),
  ];
  return noop.useMemo(() => VideoQuestUtils.isVideoQuestProgressing(closure_0), items1);
};
export { useIsQuestProgressing };
export { useQuestTaskDetails };
export const useThirdPartyTaskDetails = function useThirdPartyTaskDetails(quest) {
  closure_0 = quest;
  const items = [quest];
  return noop.useMemo(() => QuestTaskUtils.getThirdPartyTaskDetails(closure_0), items);
};
export const useConnectedConsoleLinkOnClick = function useConnectedConsoleLinkOnClick(quest) {
  quest = quest.quest;
  ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
  c3 = undefined;
  closure_4 = undefined;
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = quest(504).useStateFromStoresObject(items, () => ({
    fetching: ConnectedAccountsStore.isFetching(),
    accounts: ConnectedAccountsStore.getAccounts(),
  }));
  ({ fetching, accounts } = stateFromStoresObject);
  closure_129_0 = accounts;
  const items1 = [accounts];
  const memo = noop.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  obj = quest(504);
  const tmp = quest;
  const tmp5 = useIsQuestProgressing(quest);
  let isConsoleQuestResult = quest(7724).isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === memo.xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp5;
  }
  c3 = isConsoleQuestResult;
  let obj2 = quest(7724);
  closure_4 = tmp(11486).useGetQuestImpressionId();
  return () => {
    obj = QuestPlatformUtils;
    if (c3) {
      obj = { quest };
      obj = {
        content,
        ctaContent: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE_LINK,
        impressionId: closure_4(),
        sourceQuestContent,
      };
      const result = obj.openAddConsoleConnectionModal(obj, obj);
    } else {
      const obj1 = { quest };
      const obj2 = {
        content,
        ctaContent: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK,
        impressionId: closure_4(),
        sourceQuestContent,
      };
      const result1 = obj.openConsoleConnectionSettings(obj1, obj2);
    }
  };
};
export const useGetOrFetchApplicationForConsoleQuests = function useGetOrFetchApplicationForConsoleQuests(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const set = new Set();
    while (tmp2 !== undefined) {
      let obj2 = QuestTaskUtils;
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
  _require = arg0;
  const items = [QuestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => quests.quests);
  const arr = Array.from(stateFromStores.values());
  closure_129_0 = arr;
  const items1 = [arr];
  const memo = noop.useMemo(() => {
    const set = new Set();
    while (tmp2 !== undefined) {
      let obj2 = QuestTaskUtils;
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items1);
  const items2 = [arg0, stateFromStores, stateFromStores(7168)(memo)];
  const memo1 = noop.useMemo(() => {
    const result = utils_QuestUtils.filterQuestsForSocialEntrypoints(stateFromStores, value2);
    return QuestMatchingUtils.getQuestsFromActivities(result, closure_0);
  }, items2);
  closure_130_0 = memo1;
  obj = require("initialize");
  const items3 = [QuestStore];
  const items4 = [memo1];
  let tmp4 = null;
  if (
    !obj3.useStateFromStores(
      items3,
      () => {
        let isQuestExpiredResult = null != c0;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
        }
        return isQuestExpiredResult;
      },
      items4,
    )
  ) {
    tmp4 = memo1;
  }
  return tmp4;
};
export const useQuestCollectibles = function useQuestCollectibles(config) {
  const hasQuestCollectibles = QuestRewardUtils.hasCollectiblesQuestReward(config);
  const defaultReward = QuestCopyUtils.getDefaultReward(config);
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
  return noop.useMemo(
    () => ({
      handleComplete() {
        return closure_0(11276).completeQuestPreview(id);
      },
      handleProgress(random) {
        return closure_0(11276).completeQuestPreview(id, random);
      },
      handleResetStatusClick() {
        return closure_0(11276).resetQuestPreviewStatus(id);
      },
      handleResetDismissibilityClick() {
        return closure_0(11276).resetQuestDismissibilityStatus(id);
      },
      handleOverridePreviewClick(placement) {
        return closure_0(11276).overrideQuestForPlacement(placement, id);
      },
      handleResetHasBeenSeenClick() {
        const items = [id];
        return closure_0(11276).markAdContentUnseen(closure_0(5451).AdCreativeType.QUEST, items);
      },
    }),
    items,
  );
};
export const useConnectedAccounts = function useConnectedAccounts() {
  obj = accounts(504);
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    fetching: ConnectedAccountsStore.isFetching(),
    accounts: ConnectedAccountsStore.getAccounts(),
  }));
  accounts = stateFromStoresObject.accounts;
  const items1 = [accounts];
  const memo = noop.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  obj = {
    fetching: stateFromStoresObject.fetching,
    xboxAccounts: memo.xboxAccounts,
    playstationAccounts: memo.playstationAccounts,
    xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts,
  };
  return obj;
};
export const useManuallyStartConsoleQuest = function useManuallyStartConsoleQuest(questId) {
  questId = questId.questId;
  const preview = questId.preview;
  const beforeRequest = questId.beforeRequest;
  const afterRequest = questId.afterRequest;
  let startingConsoleQuest;
  noop = undefined;
  const tmp = startingConsoleQuest(noop.useState(false), 2);
  startingConsoleQuest = tmp[0];
  noop = tmp[1];
  obj = questId(beforeRequest[14]);
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  const tmp4 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  closure_6 = tmp4;
  const items1 = [questId];
  const callback = noop.useCallback((arg0) => {
    const state = useConsoleQuestUIStore.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp4, questId];
  const effect = noop.useEffect(() => {
    closure_6(questId, QuestConsoleStartError.QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  obj = { startConsoleQuest: null, startingConsoleQuest };
  const items3 = [startingConsoleQuest, beforeRequest, afterRequest, preview, questId, callback];
  obj.startConsoleQuest = noop.useCallback(
    afterRequest(function* (arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              questId = tmp7;
              closure_128_0 = undefined;
              if (first) {
                c5 = 3;
              } else {
                if (beforeRequest != null) {
                  beforeRequest();
                }
                v3(true);
                closure_128_0 = null;
                c3 = 1;
                let obj1 = questId(tmp33[16]);
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.manuallyStartConsoleQuest(questId, preview);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_129_5(false);
            if (closure_129_3 != null) {
              closure_129_3();
            }
            throw tmp33;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            closure_129_7(closure_128_0.errorHints);
            c3 = 0;
            closure_129_5(false);
            if (closure_129_3 != null) {
              closure_129_3();
            }
          }
          c3 = 0;
          closure_129_5(false);
          if (closure_129_3 != null) {
            closure_129_3();
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp33) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items3,
  );
  return obj;
};
export const useWaitingForConsoleConnection = function useWaitingForConsoleConnection(quest) {
  quest = quest.quest;
  accounts = undefined;
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = accounts(504).useStateFromStoresObject(items, () => ({
    fetching: ConnectedAccountsStore.isFetching(),
    accounts: ConnectedAccountsStore.getAccounts(),
  }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = noop.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  obj = accounts(504);
  const tmp3 = useIsQuestProgressing(quest);
  let isConsoleQuestResult = accounts(7724).isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === memo.xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp3;
  }
  return isConsoleQuestResult;
};
export const useQuestHowToHelpArticle = function useQuestHowToHelpArticle() {
  obj = accounts(504);
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    fetching: ConnectedAccountsStore.isFetching(),
    accounts: ConnectedAccountsStore.getAccounts(),
  }));
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = noop.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants6.QUEST_HOW_TO_PLAYSTATION);
  const articleURL1 = HelpdeskUtilsDefault.getArticleURL(constants6.QUEST_HOW_TO_XBOX);
  const intl = accounts(1114).intl;
  const formatResult = intl.format(accounts(1114).t.beN4DG, {
    psHelpdeskArticle: articleURL,
    xboxHelpdeskArticle: articleURL1,
  });
  const intl2 = accounts(1114).intl;
  let tmp8 = articleURL1;
  if (memo.playstationAccounts.length > 0) {
    tmp8 = articleURL;
  }
  if (memo.xboxAccounts.length <= 0) {
    let tmp10 = formatResult;
    if (!tmp3) {
      tmp10 = formatResult;
    }
    obj = { message: tmp10, xboxURL: articleURL1, playstationURL: articleURL };
    return obj;
  }
  tmp10 = intl2.format(accounts(1114).t.HVS7nh, { helpdeskArticle: tmp8 });
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
  if (userStatus3 != null) {
    const claimedAt = userStatus3.claimedAt;
  }
  if (typeof useQuestTaskDetails === "function") {
    closure_0 = quest;
    const items = [quest];
    const callback = noop.useCallback(() => QuestTaskUtils.getQuestTaskDetails(closure_0), items);
    const tmp9 = _slicedToArray(noop.useState(callback()), 2);
    closure_2 = tmp9[1];
    const items1 = [callback];
    const first = tmp9[0];
    const callback1 = noop.useCallback(() => dependencyMap(importDefault()), items1);
    const tmp13 = useIsQuestProgressing(quest);
    _slicedToArray = tmp13;
    const items2 = [quest, tmp13, callback1];
    const effect = noop.useEffect(() => {
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
                closure_1_3();
              }, DurationsDefault.Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                asyncGeneratorStep();
              };
            }
          }
        }
      }
      closure_3();
    }, items2);
    if (tmp5) {
      let IN_PROGRESS = obj.CLAIMED;
    } else if (tmp4) {
      IN_PROGRESS = obj.COMPLETED;
    } else {
      if (tmp15) {
        if (tmp2) {
          IN_PROGRESS = obj.IN_PROGRESS;
        }
      }
      IN_PROGRESS = tmp2 ? tmp16.ACCEPTED : tmp16.UNACCEPTED;
    }
    return IN_PROGRESS;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp4 = null != completedAt;
};
export const useQuestCompletionDetails = function useQuestCompletionDetails(quest) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  require("initialize");
  [][0] = LocaleStore;
  if (typeof useQuestTaskDetails === "function") {
    _require = quest;
    const items = [quest];
    const callback = noop.useCallback(() => QuestTaskUtils.getQuestTaskDetails(closure_0), items);
    const tmp9 = _slicedToArray(noop.useState(callback()), 2);
    dependencyMap = tmp9[1];
    const items1 = [callback];
    const callback1 = noop.useCallback(() => dependencyMap(importDefault()), items1);
    const tmp12 = useIsQuestProgressing(quest);
    _slicedToArray = tmp12;
    const items2 = [quest, tmp12, callback1];
    const effect = noop.useEffect(() => {
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
                closure_1_3();
              }, DurationsDefault.Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                asyncGeneratorStep();
              };
            }
          }
        }
      }
      closure_3();
    }, items2);
    let percentComplete = tmp9[0].percentComplete;
    closure_129_0 = quest;
    const items3 = [quest];
    const memo = noop.useMemo(() => QuestTaskUtils.getThirdPartyTaskDetails(closure_0), items3);
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
      obj.completedRatioDisplay = combined;
      return obj;
    }
    combined = require("NumberUtils").formatPercent(tmp4, percentComplete, { roundingMode: "floor" });
    const tmpResult = require("NumberUtils");
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useSelectedTaskPlatform = function useSelectedTaskPlatform(arg0) {
  _require = arg0;
  const items = [QuestStore];
  const items1 = [require("initialize").useStateFromStores(items, () => QuestStore.selectedTaskPlatform(closure_0))];
  const items2 = [arg0];
  items1[1] = noop.useCallback((platform) => QuestActionCreators.selectTaskPlatform(closure_0, platform), items2);
  return items1;
};
export { useTaskPlatformScreen };
export const useQuestWarningTips = function useQuestWarningTips(userStatus) {
  _require = userStatus;
  [][0] = userStatus;
  if (typeof useQuestTaskDetails === "function") {
    closure_129_0 = userStatus;
    const items = [userStatus];
    const callback = obj.useCallback(() => QuestTaskUtils.getQuestTaskDetails(closure_0), items);
    closure_129_1 = callback;
    [tmp5, closure_129_2] = _slicedToArray(obj.useState(callback()), 2);
    const items1 = [callback];
    const callback1 = obj.useCallback(() => dependencyMap(importDefault()), items1);
    closure_129_3 = callback1;
    const tmp8 = useIsQuestProgressing(userStatus);
    closure_129_4 = tmp8;
    const items2 = [userStatus, tmp8, callback1];
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
            if (closure_4) {
              const _window = window;
              userStatus = window.setInterval(() => {
                closure_1_3();
              }, DurationsDefault.Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                asyncGeneratorStep();
              };
            }
          }
        }
      }
      closure_3();
    }, items2);
    closure_130_0 = userStatus;
    const tmp4 = _slicedToArray(obj.useState(callback()), 2);
    const items3 = [QuestStore];
    const items4 = [userStatus];
    userStatus = userStatus.userStatus;
    let enrolledAt;
    const stateFromStores = require("initialize").useStateFromStores(
      items3,
      () => {
        let isQuestExpiredResult = null != c0;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
        }
        return isQuestExpiredResult;
      },
      items4,
    );
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    let tmp17 = null != enrolledAt;
    let userStatus2 = userStatus.userStatus;
    let completedAt;
    if (userStatus2 != null) {
      completedAt = userStatus2.completedAt;
    }
    const DESKTOP = tmp11(5452).FirstPartyQuestTaskTypesSets.DESKTOP;
    let hasItem = DESKTOP.has(tmp5.taskType);
    if (hasItem) {
      hasItem = tmp5.percentComplete > 0;
    }
    if (tmp17) {
      tmp17 = !tmp19;
    }
    if (tmp17) {
      tmp17 = !stateFromStores;
    }
    if (tmp17) {
      tmp17 = null == tmp;
    }
    if (tmp17) {
      if (!hasItem) {
        hasItem =
          0 === tmp5.percentComplete &&
          _slicedToArray(useTaskPlatformScreen(userStatus, tmp5), 1)[0] === tmp11(5447).TaskPlatformScreen.DESKTOP;
        const tmp21 =
          0 === tmp5.percentComplete &&
          _slicedToArray(useTaskPlatformScreen(userStatus, tmp5), 1)[0] === tmp11(5447).TaskPlatformScreen.DESKTOP;
      }
      tmp17 = hasItem;
    }
    let tmp11Result = tmp11(1115);
    let tmp22 = tmp11Result.isWeb() && tmp17;
    if (tmp22) {
      tmp11Result = tmp11(11496);
      tmp22 = !tmp11Result.isQuestSupportedOnWeb(userStatus);
    }
    const obj2 = require("initialize");
    tmp19 = null != completedAt;
    let isMacResult = require("PlatformUtils").isMac();
    if (isMacResult) {
      isMacResult = tmp5.taskType === tmp11(5452).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
    }
    if (isMacResult) {
      isMacResult = tmp17;
    }
    const items5 = [];
    if (isMacResult) {
      const intl = tmp11(1114).intl;
      items5.push(intl.string(tmp11(1114).t.MFGxFM));
    }
    if (tmp22) {
      const intl2 = tmp11(1114).intl;
      items5.push(intl2.string(tmp11(1114).t.BV6xDm));
    }
    return items5;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useQuest = function useQuest(arg0) {
  const items = [QuestStore];
  const stateFromStores = initialize.useStateFromStores(items, () => quests.quests);
  value = stateFromStores.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const useNonNullableQuest = function useNonNullableQuest(questId, callback) {
  _require = questId;
  closure_1 = callback;
  let items = [QuestStore];
  const items1 = [questId];
  stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(closure_0), items1);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const items2 = [stateFromStores, questId, callback];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const quests = QuestStore.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Quest unexpectedly missing from store: " + questId);
      obj = { tags: { source: "useNonNullableQuest" }, extra: null };
      obj = {
        questId,
        storeQuestIds: items,
        storeSize: items.length,
        isFetchingCurrentQuests: null,
        lastFetchedCurrentQuests: null,
      };
      ({
        isFetchingCurrentQuests: obj3.isFetchingCurrentQuests,
        lastFetchedCurrentQuests: obj3.lastFetchedCurrentQuests,
      } = QuestStore);
      obj.extra = obj;
      const result = obj.captureQuestsException(error, obj);
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items2);
  return stateFromStores;
};
export const useQuestBarOrDockModeChangeTracking = function useQuestBarOrDockModeChangeTracking(mode) {
  mode = mode.mode;
  const questContent = mode.questContent;
  const sourceQuestContent = mode.sourceQuestContent;
  if ("questId" in mode) {
    const questId = mode.questId;
    let tmp3 = questId;
  } else {
    const adContentId = mode.adContentId;
    const adCreativeType = mode.adCreativeType;
  }
  const items = [questContent, sourceQuestContent, tmp3, tmp, tmp2];
  const callback = sourceQuestContent.useCallback((mode, prevMode) => {
    if (null != questId) {
      obj = { mode, prevMode, questContent, questId: tmp, sourceQuestContent };
      const result = AnalyticsActions.trackQuestContentQuestBarOrDockModeChange(obj);
    } else {
      let tmp3 = null != adContentId;
      if (tmp3) {
        tmp3 = null != adCreativeType;
      }
      if (tmp3) {
        obj = { adContentId: tmp2, adCreativeType, mode, prevMode, questContent, sourceQuestContent };
        const result1 = obj.trackAdContentQuestBarOrDockModeChange(obj);
      }
      tmp2 = adContentId;
    }
  }, items);
  if (tmp3 == null) {
    tmp3 = tmp;
  }
  LocaleStore = tmp3;
  sourceQuestContent.useRef(null);
  const items1 = [mode, tmp3, callback];
  const effect = obj.useEffect(() => {
    let tmp = null != closure_7;
    if (tmp) {
      tmp = ref.current !== mode;
    }
    if (tmp) {
      callback(mode, ref.current);
      ref.current = mode;
    }
  }, items1);
  const items2 = [tmp3, callback];
  const effect1 = obj.useEffect(
    () =>
      null != closure_7
        ? () => {
            callback(null, ref.current);
          }
        : undefined,
    items2,
  );
};
export const useCosponsoredLogotypeAsset = function useCosponsoredLogotypeAsset(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const items = [QuestStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(closure_0), items1);
  const tmp2 = require("useTheme")();
  closure_3 = tmp2;
  const items2 = [tmp2, arg1, stateFromStores];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else if (closure_1 != null) {
      return AssetUtils.getQuestAsset(tmp, AssetUtils.QuestAssetType.COSPONSOR_LOGO_TYPE, tmp11);
    } else {
      shared.isThemeDark(closure_3) ? constants.DARK : constants.LIGHT;
    }
  }, items2);
};
export const useClaimedCollectibleRewardMessage = function useClaimedCollectibleRewardMessage(config) {
  obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = QuestRewardUtils;
  const defaultRewardName = obj1.getDefaultRewardName(config, stateFromStores);
  let obj2 = QuestRewardUtils;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(config);
  let obj3 = QuestRewardUtils;
  const collectibleQuestRewardExtendableExpirationDate = obj3.getCollectibleQuestRewardExtendableExpirationDate(config);
  let obj4 = QuestRewardUtils;
  const result = obj4.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const result1 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(config);
  const isPremiumResult = PremiumUtils.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = tmp(1114).intl;
    obj = { decorationName: defaultRewardName };
    return intl2.formatToPlainString(tmp(1114).t.l9uXL8, obj);
  } else {
    const intl3 = tmp(1114).intl;
    obj = { rewardName: defaultRewardName };
    const intl4 = tmp(1114).intl;
    obj1 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
    const formatToPlainStringResult = intl3.formatToPlainString(tmp(1114).t.o97tNn, obj);
    const intl5 = tmp(1114).intl;
    obj2 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
    let formatToPlainStringResult2 = intl5.formatToPlainString(tmp(1114).t.ie4YK0, obj2);
    const intl6 = tmp(1114).intl;
    obj3 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
    let formatToPlainStringResult3 = intl6.formatToPlainString(tmp(1114).t.yCpc0U, obj3);
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
      const intl = tmp(1114).intl;
      obj4 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
      return intl.formatToPlainString(tmp(1114).t.tTlItm, obj4);
    }
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp(1114).t.PkyRZo, obj1);
  }
};
export const useLaunchInGameActivityQuest = function useLaunchInGameActivityQuest(quest) {
  obj = { launchInGameActivity: null };
  const activityApplicationId = obj.getActivityApplicationId(quest);
  obj.launchInGameActivity = useRefocusOrLaunchActivityDefault({ applicationId: activityApplicationId });
  return obj;
};
export const useIsPreviewerOnAnyQuest = function useIsPreviewerOnAnyQuest() {
  const items = [QuestStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((preview) => preview.preview);
};
export const useShouldShowPreviewToolTab = function useShouldShowPreviewToolTab() {
  let items = [QuestStore];
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
    isDismissedResult = require("QuestDataUtils").isDismissed(
      userStatus.userStatus,
      require("QuestTypes").QuestContent.ACTIVITY_PANEL,
    );
    obj = require("QuestDataUtils");
  }
  let tmp5 = userStatus;
  if (userStatus == null) {
    tmp5 = null;
  }
  _require = tmp5;
  const items = [QuestStore];
  const items1 = [tmp5];
  let claimedAt;
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let isQuestExpiredResult = null != c0;
      if (isQuestExpiredResult) {
        isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
      }
      return isQuestExpiredResult;
    },
    items1,
  );
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj2 = require("initialize");
  const tmp11 = null != claimedAt;
  const tmp8 = QuestStore;
  const items2 = [tmp8];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => null != QuestStore.questEnrollmentBlockedUntil,
    [],
  );
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
  let items = [QuestStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  const items1 = [stateFromStoresArray];
  return noop.useMemo(() => stateFromStoresArray.filter((preview) => preview.preview), items1);
};
export const useQuestHomeFilterOptions = function useQuestHomeFilterOptions() {
  closure_0 = closure_18;
  const items = [closure_18];
  return noop.useMemo(
    () =>
      closure_0.map((item) => {
        [tmp, tmp2] = item;
        obj = { heading: closure_1_0(closure_1_2[37]).getFilterGroupHeadingText(tmp), options: tmp2 };
        return obj;
      }),
    items,
  );
};
export const useQuestHomeSortOptions = function useQuestHomeSortOptions() {
  return noop.useMemo(() => {
    const keys = Object.keys(constants3);
    return keys.map((item) => {
      obj = { label: closure_1_0(closure_1_2[37]).getSortMethodText(dependencyMap[item]), value: dependencyMap[item] };
      return obj;
    });
  }, []);
};
export const useQuestHomeSortingFilteringAnalytics = function useQuestHomeSortingFilteringAnalytics(
  selectedSortMethod,
) {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  noop.useRef(null);
  noop.useRef(null);
  const items = [selectedSortMethod];
  const effect = noop.useEffect(() => {
    obj = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
    obj.track(constants7.QUEST_HOME_SORT_METHOD_CHANGED, obj);
    ref.current = selectedSortMethod;
  }, items);
  const items1 = [selectedFilters, numQuestsVisible];
  const effect1 = noop.useEffect(() => {
    const mapped = selectedFilters.map((item) => item.filter);
    obj = { filters: mapped, previous_filters: null, num_quests_visible: null };
    let current = ref2.current;
    if (current == null) {
      current = [];
    }
    obj.previous_filters = current;
    obj.num_quests_visible = numQuestsVisible;
    obj.track(constants7.QUEST_HOME_FILTERS_CHANGED, obj);
    ref2.current = mapped;
  }, items1);
};
export const useShouldShowQuestPreviewOverrides = function useShouldShowQuestPreviewOverrides(quest) {
  let preview = noop.useMemo(() => {
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
  const items = [QuestStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => quests.quests);
  questIds = undefined;
  if (questIds != null) {
    questIds = questIds.questIds;
  }
  const items1 = [stateFromStores, questIds];
  return noop.useMemo(() => {
    if (null == questIds) {
      obj = { shelfQuests: [], isShelfEnabled: false };
      return obj;
    } else {
      const mapped = arr.map((item) => stateFromStores.get(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => !stateFromStores(closure_1_2[19]).isQuestExpired(item));
      if (found1.length <= 1) {
        obj = { shelfQuests: [], isShelfEnabled: false };
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
    arr = questIds;
  }, items1);
};
export const useFetchQuestHomeBounties = function useFetchQuestHomeBounties(location) {
  obj = location;
  if (location === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let enabled;
  _slicedToArray = undefined;
  let obj1 = previewAdCreativeIds(enabled[53]);
  const bountiesExperience = obj1.useBountiesExperience(constants2.QUEST_HOME_MOBILE);
  const showBounties = bountiesExperience.showBounties;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(enabled[54]).BountyStaleRefreshQuestHomeExperiment;
  obj = { location: constants2.QUEST_HOME_MOBILE };
  enabled = BountyStaleRefreshQuestHomeExperiment.useConfig(obj).enabled;
  const AdPlacement = previewAdCreativeIds(enabled[44]).AdPlacement;
  const tmp4 = bountiesExperience.verticalScrollEnabled
    ? AdPlacement.VIDEO_MODAL_MOBILE
    : AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
  closure_3 = tmp4;
  [tmp6, c4] = _slicedToArray(noop.useState(showBounties), 2);
  const tmp5 = _slicedToArray(noop.useState(showBounties), 2);
  const items = [BountyStore];
  const stateFromStoresObject = previewAdCreativeIds(enabled[14]).useStateFromStoresObject(items, () => ({
    isFetching: BountyStore.isFetchingQuestHomeBounties,
    questHomeBounties: BountyStore.questHomeBounties,
  }));
  const items1 = [showBounties, enabled, previewAdCreativeIds, tmp4];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    function loadBounties() {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_4 = async function _loadBounties(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp3;
              const _Date = Date;
              closure_1 = Date.now();
              c3 = 1;
              if (null != closure_0) {
                if (arr.length > 0) {
                  c1 = 3;
                  v3 = 1;
                  const obj1 = { value: previewAdCreativeIds(11524).fetchBountyPreview(arr, c3), done: false };
                  return obj1;
                }
              }
              let obj2 = previewAdCreativeIds(11524);
              c1 = 2;
              v3 = 1;
              obj2 = { value: null, done: false };
              obj2.value = obj2.fetchQuestHomeBounties(c3);
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            if (!closure_128_0) {
              v3(false);
            }
            throw closure_2;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (!closure_128_0) {
                  v3(false);
                }
                v3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (!closure_128_0) {
                v3(false);
              }
              v3 = 3;
              obj = { value, done: true };
              return obj;
            }
            c3 = 0;
            if (!closure_128_0) {
              v3(false);
            }
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp32) {
          closure_2 = tmp32;
          if (tmp4 === c3) {
            v3 = tmp2;
            throw tmp32;
          } else {
            c1 = tmp;
          }
        }
      }
    };
    if (c1) {
      c0 = false;
      c1 = 0;
      const bounties = loadBounties();
      if (interval) {
        const _window = window;
        interval = window.setInterval(() => {
          if (Date.now() - c1 > closure_49) {
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
    obj = { questHomeBounties, isLoading: tmp6 };
    obj1 = obj;
  } else {
    obj1 = { questHomeBounties: [], isLoading: false };
  }
  return obj1;
};
export const useQuestHomeBounties = function useQuestHomeBounties() {
  const items = [BountyStore];
  return initialize.useStateFromStoresObject(items, () => ({
    questHomeBounties: BountyStore.questHomeBounties,
    isFetching: BountyStore.isFetchingQuestHomeBounties,
  }));
};
export const useQuestBarImpressionSurvey = function useQuestBarImpressionSurvey(quest) {
  _require = quest;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  dependencyMap = tmp3;
  const items = [setting, null != enrolledAt, quest.id];
  return noop.useCallback(() => {
    if (!closure_2) {
      const fireSurveyAction = QualtricsActionCreators.fireSurveyAction;
      obj = { quest_id: quest.id };
      fireSurveyAction(
        setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN,
        obj,
      );
      const tmp4 = setting
        ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT
        : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN;
    }
  }, items);
};
