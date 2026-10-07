// === Module 10924: hooks/QuestHooks ===

// Module 10924 (hooks/QuestHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1251 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import shared from "shared" /* 4735 */;
import _mod5081 from "module_5081" /* 5081 */;
import QualtricsActionCreators from "QualtricsActionCreators" /* 5086 */;
import SurveyActionTypes from "SurveyActionTypes" /* 5094 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5638 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6670 */;
import QuestDataUtils from "QuestDataUtils" /* 7196 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7219 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7221 */;
import QuestType from "QuestType" /* 7224 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 9077 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import AssetUtils from "AssetUtils" /* 10013 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10018 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 10021 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10023 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10028 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10791 */;
import RenewableEndDateSortExperimentDefault from "RenewableEndDateSortExperiment" /* 10926 */;
import apexExperiment from "apexExperiment" /* 10927 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10931 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10953 */;
import QuestConsoleStartError from "QuestConsoleStartError" /* 10956 */;
import useRefocusOrLaunchActivityDefault from "useRefocusOrLaunchActivity" /* 10957 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7197 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;
import UserStore from "UserStore" /* 1377 */;
import BountyStore from "BountyStore" /* 7199 */;
import QuestStore from "QuestStore" /* 7200 */;

const require = globalThis.__r;

const NumberUtils = formatPercent(1888);
require = fn;
function defaultSortFn(id, id2, questHomeHero, get) {
  let tmp2 = id.id === guild;
  if (tmp2) {
    const userStatus = id.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    tmp2 = null == completedAt;
  }
  let tmp5 = id2.id === guild;
  if (tmp5) {
    const userStatus2 = id2.userStatus;
    let completedAt1;
    if (userStatus2 != null) {
      completedAt1 = userStatus2.completedAt;
    }
    tmp5 = null == completedAt1;
  }
  if (tmp2 !== tmp5) {
    let num18 = 1;
    if (tmp2) {
      num18 = c29;
    }
    return num18;
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
        let num17 = 1;
        if (tmp9) {
          num17 = c29;
        }
        let result1 = num17;
      } else if (tmp13 !== tmp15) {
        let num16 = 1;
        if (tmp13) {
          num16 = c29;
        }
        result1 = num16;
      } else {
        const expiresAt2 = id.config.expiresAt;
        let num15 = 1;
        if (constants10.DESC === constants10.DESC) {
          num15 = c29;
        }
        result1 = expiresAt2.localeCompare(id2.config.expiresAt) * num15;
      }
      return result1;
    } else {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          const result2 = utils_QuestUtils.isQuestFeaturedByHero(questHomeHero, id.id);
          utils_QuestUtils;
          let num2 = 1;
          if (result2) {
            num2 = c29;
          }
          return num2;
        }
      }
      const tmp51Result12 = utils_QuestUtils;
      if (questHomeHero.isMobileQuestHomeSortPriorityEnabled) {
        const hasVariantResult = tmp51Result12.hasVariant(id, constants6.MOBILE_ACTIVITY_QUEST);
        if (hasVariantResult !== tmp51Result13.hasVariant(id2, constants6.MOBILE_ACTIVITY_QUEST)) {
          let num14 = 1;
          if (hasVariantResult) {
            num14 = c29;
          }
          return num14;
        } else {
          const result3 = QuestTaskUtils.isVideoQuestForMobilePlatformOnly(id);
          const tmp51Result14 = QuestTaskUtils;
          if (result3 !== tmp51Result15.isVideoQuestForMobilePlatformOnly(id2)) {
            let num13 = 1;
            if (result3) {
              num13 = c29;
            }
            return num13;
          } else {
            const result4 = QuestTaskUtils.hasWatchVideoOnMobileTasks(id);
            const tmp51Result16 = QuestTaskUtils;
            if (result4 !== tmp51Result17.hasWatchVideoOnMobileTasks(id2)) {
              let num12 = 1;
              if (result4) {
                num12 = c29;
              }
              return num12;
            }
            tmp51Result17 = QuestTaskUtils;
          }
          tmp51Result15 = QuestTaskUtils;
        }
        tmp51Result13 = utils_QuestUtils;
      } else {
        const questType = tmp51Result12.getQuestType(id.config);
        const questType1 = utils_QuestUtils.getQuestType(id2.config);
        const tmp51Result18 = utils_QuestUtils;
        const result5 = QuestTaskUtils.hasWatchVideoOnMobileTasks(id);
        const tmp51Result19 = QuestTaskUtils;
        const result6 = QuestTaskUtils.hasWatchVideoOnMobileTasks(id2);
        if (result5 !== result6) {
          let num4 = 1;
          if (result5) {
            num4 = c29;
          }
          return num4;
        }
        if (questType !== questType1) {
          let num3 = 1;
          if (questType === QuestType.QuestType.VIDEO) {
            num3 = c29;
          }
          return num3;
        }
        const tmp51Result20 = QuestTaskUtils;
      }
      if (tmp21 !== tmp32) {
        if (!tmp21) {
          return num6;
        }
        let num11 = 1;
        if (!tmp21) {
          num11 = c29;
        }
        num6 = num11;
      }
      if (tmp9 !== tmp11) {
        let num10 = 1;
        if (!tmp9) {
          num10 = c29;
        }
        num6 = num10;
      } else if (tmp13 !== tmp15) {
        let num9 = 1;
        if (tmp13) {
          num9 = c29;
        }
        num6 = num9;
      } else {
        value = get.get(id.id);
        value2 = get.get(id2.id);
        if (null != value) {
          if (null != value2) {
            if (value !== value2) {
              const num7 = value - value2;
            } else if (id.id !== id2.id) {
            }
          }
        }
        if (null != value) {
          num6 = c29;
        } else {
          let num5 = 1;
          num6 = 1;
          if (null == value2) {
            const expiresAt = id.config.expiresAt;
            if (constants10.ASC === constants10.DESC) {
              num5 = c29;
            }
            num6 = expiresAt.localeCompare(id2.config.expiresAt) * num5;
          }
        }
      }
    }
    const tmp19 = null != completedAt2;
    const tmp30 = null != completedAt3;
  }
}
function recentSortFn(config, config2) {
  const startsAt = config.config.startsAt;
  let num = 1;
  if (constants10.DESC === constants10.DESC) {
    num = c29;
  }
  return startsAt.localeCompare(config2.config.startsAt) * num;
}
function recentlyEnrolledSortFn(userStatus, userStatus2) {
  userStatus = userStatus.userStatus;
  let enrolledAt1;
  if (userStatus != null) {
    enrolledAt1 = userStatus.enrolledAt;
  }
  userStatus2 = userStatus2.userStatus;
  if (userStatus2 != null) {
    const enrolledAt = userStatus2.enrolledAt;
  }
  if (null == enrolledAt1) {
    if (null == enrolledAt) {
      const expiresAt = userStatus.config.expiresAt;
      let num3 = 1;
      if (constants10.DESC === constants10.DESC) {
        num3 = c29;
      }
      let num = expiresAt.localeCompare(userStatus2.config.expiresAt) * num3;
    }
    return num;
  }
  if (null != enrolledAt1) {
    if (null == enrolledAt) {
      num = c29;
    }
  }
  if (null != enrolledAt1) {
    let num2 = 1;
    if (constants10.DESC === constants10.DESC) {
      num2 = c29;
    }
    num = enrolledAt1.localeCompare(enrolledAt) * num2;
  } else {
    num = 1;
  }
}
function expiringSoonSortFn(config, config2) {
  const expiresAt = config.config.expiresAt;
  let num = 1;
  if (constants10.ASC === constants10.DESC) {
    num = c29;
  }
  return expiresAt.localeCompare(config2.config.expiresAt) * num;
}
function doesQuestPassTaskFilter(quest, arg1) {
  if (constants4.VIDEO === arg1) {
    return QuestTaskUtils.hasWatchVideoTasks(quest);
  } else if (tmp.PLAY === arg1) {
    const obj2 = { quest };
    let hasPlayOnDesktopTaskResult = QuestTaskUtils.hasPlayOnDesktopTask(obj2);
    if (!hasPlayOnDesktopTaskResult) {
      obj3 = { quest };
      hasPlayOnDesktopTaskResult = QuestTaskUtils.hasStreamOnDesktopTask(obj3);
      const tmp2Result = QuestTaskUtils;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = QuestTaskUtils.hasPlayActivityTask(quest);
      const tmp2Result4 = QuestTaskUtils;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = QuestTaskUtils.isConsoleQuest(quest);
      const tmp2Result5 = QuestTaskUtils;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = QuestTaskUtils.isInGameQuest(quest);
      const tmp2Result6 = QuestTaskUtils;
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config, arg1) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    return QuestRewardUtils.hasVirtualCurrencyReward(config.config);
  } else if (constants5.COLLECTIBLE === arg1) {
    return QuestRewardUtils.hasCollectiblesQuestReward(config.config);
  } else if (constants5.IN_GAME === arg1) {
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
function sortQuests(arr) {
  let tmp = sortMethod;
  if (sortMethod === undefined) {
    tmp = closure_37;
  }
  let tmp2 = current;
  if (current === undefined) {
    tmp2 = closure_38;
  }
  ({ sortMethod, filters } = tmp);
  let obj = arr;
  if (null != filters) {
    obj = arr;
    if (0 !== filters.length) {
      let found = arr;
      if (0 !== filters.length) {
        _require = require("module_12").groupBy(filters, "group");
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
        let obj2 = require("module_12");
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
          let obj2 = closure_0(dependencyMap[23]);
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
  return obj.sort((stateFromStores, stateFromStores) => {
    const isQuestExpiredResult = QuestDataUtils.isQuestExpired(stateFromStores);
    const tmp2 = !isQuestExpiredResult;
    if (tmp2 !== !obj2.isQuestExpired(stateFromStores)) {
      let num = 1;
      if (!isQuestExpiredResult) {
        num = c29;
      }
      let tmp8 = num;
    } else {
      tmp8 = closure_0(stateFromStores, stateFromStores, importDefault, dependencyMap);
    }
    return tmp8;
  });
}
function seededQuestSortKey(currentUserId, id) {
  return MurmurHashV3Default.v3("" + currentUserId + ":" + id) >>> 0;
}
function useAllQuests(quests, sortMethod) {
  const tmp = closure_42();
  const current = tmp;
  noop.useRef([]);
  noop.useRef(sortMethod.sortMethod);
  noop = noop.useRef(sortMethod.filters);
  noop.useRef(0);
  noop.useRef(tmp);
  const items = [quests, sortMethod, tmp];
  return noop.useMemo(() => {
    if (0 === quests.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref4.current === quests.length) {
          if (ref2.current === sortMethod.sortMethod) {
            if (ref3.current === tmp3.filters) {
              if (ref5.current === current) {
                return ref.current;
              }
            }
          }
        }
      }
      const mapped = sortQuests(quests, sortMethod, current).map((id) => id.id);
      ref.current = mapped;
      ref2.current = sortMethod.sortMethod;
      ref3.current = sortMethod.filters;
      ref4.current = quests.length;
      ref5.current = current;
      return mapped;
    }
  }, items);
}
function useCompletedAndClaimedQuests(quests) {
  const items = [quests];
  const memo = noop.useMemo(() => quests.filter((userStatus) => {
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
  noop.useRef([]);
  const items1 = [memo];
  return noop.useMemo(() => {
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
}
function isQuestHiddenFromQuestHome(userStatus) {
  let isQuestExpiredResult = QuestDataUtils.isQuestExpired(userStatus);
  if (isQuestExpiredResult) {
    isQuestExpiredResult = !QuestDataUtils.hasUnclaimedReward(userStatus.userStatus);
    const tmpResult = QuestDataUtils;
  }
  return isQuestExpiredResult;
}
const useConsoleQuestUIStore = fn(7201).useConsoleQuestUIStore;
const QuestConstants = fn(5630);
({ QuestTaskPlatform: closure_14, QuestsExperimentLocations: closure_15, MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES: closure_16, QuestHomeSortMethods: closure_17, SORTED_QUEST_HOME_FILTER_GROUPS: closure_18, TaskFilterTypes: closure_19, RewardFilterTypes: closure_20, MOBILE_ORBS_INTRO_QUEST_ID: closure_21, ORBS_INTRO_QUEST_ID: closure_22, QuestVariants: closure_23 } = QuestConstants);
const Constants = fn(1085);
({ HelpdeskArticles: closure_24, PlatformTypes: closure_25, ThemeTypes: closure_26, AnalyticEvents: closure_27 } = Constants);
const PremiumTypes = fn(1379).PremiumTypes;
let c29 = -1;
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(25);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = { fetchPolicy: "cache-only", callerSource: "unknown" };
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  const tmp5 = lastFetchedCurrentQuests(noop.useState(false), 2);
  const first = tmp5[0];
  dependencyMap = tmp5[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [QuestStore];
    const fn = function l() {
      const quests = QuestStore.quests;
      const items = [...quests.values()];
      return items;
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  obj3 = noop;
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [QuestStore];
    class T {
      constructor() {
        excludedQuests = closure_1_13.excludedQuests;
        items = [...excludedQuests.values()];
        return items;
      }
    }
    cResult[4] = items1;
    cResult[5] = T;
    let tmp12 = T;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    class P {
      constructor() {
        obj = { isFetchingCurrentQuests: closure_1_13.isFetchingCurrentQuests, lastFetchedCurrentQuests: closure_1_13.lastFetchedCurrentQuests };
        return obj;
      }
    }
    cResult[6] = items2;
    cResult[7] = P;
    let tmp16 = P;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult4 = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp15, tmp16);
  const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = tmp(10925).getIsEligibleForQuests();
    class P {
      constructor() {
        obj = { isFetchingCurrentQuests: closure_1_13.isFetchingCurrentQuests, lastFetchedCurrentQuests: closure_1_13.lastFetchedCurrentQuests };
        return obj;
      }
    }
    let tmp19 = isEligibleForQuests;
    const tmpResult6 = tmp(10925);
  } else {
    tmp19 = cResult[8];
  }
  noop = tmp19;
  if (cResult[9] === first) {
    if (cResult[10] === isFetchingCurrentQuests) {
      if (cResult[11] === lastFetchedCurrentQuests) {
        if (cResult[12] === tmp4.fetchPolicy) {
          let tmp21 = cResult[13];
        }
        if (cResult[14] === first) {
          if (cResult[15] === isFetchingCurrentQuests) {
            if (cResult[16] === lastFetchedCurrentQuests) {
              if (cResult[17] === tmp4.callerSource) {
                if (cResult[18] === tmp4.fetchPolicy) {
                  let tmp22 = cResult[19];
                }
                const effect = obj3.useEffect(tmp21, tmp22);
                if (cResult[20] === stateFromStoresArray1) {
                  if (cResult[21] === first) {
                    if (cResult[22] === isFetchingCurrentQuests) {
                      if (cResult[23] === stateFromStoresArray) {
                        let tmp24 = cResult[24];
                      }
                      return tmp24;
                    }
                  }
                }
                class P {
                  constructor() {
                    obj = { isFetchingCurrentQuests: closure_1_13.isFetchingCurrentQuests, lastFetchedCurrentQuests: closure_1_13.lastFetchedCurrentQuests };
                    return obj;
                  }
                }
                tmp25[0] = stateFromStoresArray;
                tmp25[1] = stateFromStoresArray1;
                tmp25[2] = isFetchingCurrentQuests;
                tmp25[3] = first;
                cResult[20] = stateFromStoresArray1;
                cResult[21] = first;
                cResult[22] = isFetchingCurrentQuests;
                cResult[23] = stateFromStoresArray;
                cResult[24] = tmp25;
                tmp24 = tmp25;
              }
            }
          }
        }
        const items3 = [, , , , , ];
        class P {
          constructor() {
            obj = { isFetchingCurrentQuests: closure_1_13.isFetchingCurrentQuests, lastFetchedCurrentQuests: closure_1_13.lastFetchedCurrentQuests };
            return obj;
          }
        }
        items3[1] = tmp19;
        items3[2] = first;
        items3[3] = isFetchingCurrentQuests;
        items3[4] = lastFetchedCurrentQuests;
        items3[5] = tmp4.callerSource;
        cResult[14] = first;
        cResult[15] = isFetchingCurrentQuests;
        cResult[16] = lastFetchedCurrentQuests;
        cResult[17] = tmp4.callerSource;
        cResult[18] = tmp4.fetchPolicy;
        cResult[19] = items3;
        tmp22 = items3;
      }
    }
  }
  class F {
    constructor() {
      fetchPolicy = closure_0.fetchPolicy;
      if ("cache-only" !== fetchPolicy) {
        str2 = "cache-or-network";
        if ("cache-or-network" === fetchPolicy) {
          tmp = lastFetchedCurrentQuests;
          num = 0;
          flag = 0 === lastFetchedCurrentQuests;
        } else {
          str = "cache-and-network";
          flag = true;
        }
        if (flag) {
          flag = closure_5;
        }
        if (flag) {
          tmp2 = closure_1;
          flag = !closure_1;
        }
        if (flag) {
          tmp3 = isFetchingCurrentQuests;
          flag = !isFetchingCurrentQuests;
        }
        if (flag) {
          tmp4 = closure_2;
          flag2 = true;
          tmp5 = closure_2(true);
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj = closure_0(closure_2[18]);
          currentQuests = obj.fetchCurrentQuests();
          obj2 = closure_0(closure_2[19]);
          if (obj2.isMac()) {
            tmp9 = closure_1;
            obj3 = closure_1(tmp7[20]);
            state = obj3.getState();
          }
        }
        return;
      }
      return;
    }
  }
  cResult[9] = first;
  cResult[10] = isFetchingCurrentQuests;
  cResult[11] = lastFetchedCurrentQuests;
  cResult[12] = tmp4.fetchPolicy;
  cResult[13] = F;
  tmp21 = F;
  const tmpResult5 = require("initialize");
}) : (() => {
  let obj = arg0;
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
  obj3 = obj(504);
  const items2 = [QuestStore];
  const stateFromStoresObject = obj(504).useStateFromStoresObject(items2, () => ({ isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests, lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests }));
  const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  const obj4 = obj(504);
  isEligibleForQuests = obj(10925).getIsEligibleForQuests();
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
        closure_2(true);
        obj = QuestActionCreators;
        const currentQuests = obj.fetchCurrentQuests();
        if (obj2.isMac()) {
          state = DiscordAppStateDefault.getState();
        }
        obj2 = PlatformUtils;
      }
    }
  }, items3);
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
});
let closure_30 = tmp4;
let closure_37 = {};
let closure_38 = { questHomeHero: null, isQuestHomeHeroShelfEnabled: false, currentUserId: null, isRenewableEndDateSortEnabled: false, isMobileQuestHomeSortPriorityEnabled: false };
const constants10 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
ReactCompilerGating = fn(558);
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdDeliveryStore];
    const fn = function s() {
      return null;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const isShelfEnabled = closure_61(stateFromStores).isShelfEnabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function a() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id == null) {
        id = null;
      }
      return id;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: constants2.QUEST_HOME_MOBILE };
    cResult[4] = obj2;
    let tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  const tmpResult2 = initialize;
  const enabled = RenewableEndDateSortExperimentDefault.useConfig(tmp12).enabled;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    obj3 = { location: constants2.QUEST_HOME_MOBILE };
    cResult[5] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[5];
  }
  const MobileQuestHomeSortPriorityExperiment = apexExperiment.MobileQuestHomeSortPriorityExperiment;
  const enabled2 = MobileQuestHomeSortPriorityExperiment.useConfig(tmp14).enabled;
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === enabled2) {
      if (cResult[8] === enabled) {
        if (cResult[9] === isShelfEnabled) {
          if (cResult[10] === stateFromStores) {
            let tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
    }
  }
  const obj4 = { questHomeHero: stateFromStores, isQuestHomeHeroShelfEnabled: isShelfEnabled, currentUserId: stateFromStores1, isRenewableEndDateSortEnabled: enabled, isMobileQuestHomeSortPriorityEnabled: enabled2 };
  cResult[6] = stateFromStores1;
  cResult[7] = enabled2;
  cResult[8] = enabled;
  cResult[9] = isShelfEnabled;
  cResult[10] = stateFromStores;
  cResult[11] = obj4;
  tmp16 = obj4;
}) : (() => {
  const items = [AdDeliveryStore];
  stateFromStores = stateFromStores(stateFromStores1[16]).useStateFromStores(items, () => null);
  const isShelfEnabled = closure_61(stateFromStores).isShelfEnabled;
  const obj = stateFromStores(stateFromStores1[16]);
  const items1 = [UserStore];
  stateFromStores1 = stateFromStores(stateFromStores1[16]).useStateFromStores(items1, () => {
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
  const obj2 = stateFromStores(stateFromStores1[16]);
  const enabled = isShelfEnabled(stateFromStores1[29]).useConfig({ location: constants2.QUEST_HOME_MOBILE }).enabled;
  const MobileQuestHomeSortPriorityExperiment = stateFromStores(stateFromStores1[30]).MobileQuestHomeSortPriorityExperiment;
  const enabled2 = MobileQuestHomeSortPriorityExperiment.useConfig({ location: constants2.QUEST_HOME_MOBILE }).enabled;
  const items2 = [stateFromStores, isShelfEnabled, stateFromStores1, enabled, enabled2];
  return noop.useMemo(() => ({ questHomeHero: stateFromStores, isQuestHomeHeroShelfEnabled: isShelfEnabled, currentUserId: stateFromStores1, isRenewableEndDateSortEnabled: enabled, isMobileQuestHomeSortPriorityEnabled: enabled2 }), items2);
});
let obj3 = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, sortMethod) => {
  let tmp = sortMethod;
  const cResult = c.c(2);
  if (undefined === sortMethod) {
    tmp = closure_37;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp4 = closure_30(first);
  const quests = tmp4.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function a(id) {
      const items = [id.id, id];
      return items;
    };
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const map = new Map(quests.map(tmp5));
  const tmp7 = useCompletedAndClaimedQuests(quests);
  const quests1 = [];
  const tmp6 = useAllQuests(quests, tmp);
  while (tmp8 !== undefined) {
    value = map.get(tmp9);
    let tmp11 = value;
    let removeExpiredQuests = null != value;
    if (removeExpiredQuests) {
      removeExpiredQuests = arg0 === obj3.ALL;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = tmp.removeExpiredQuests;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = isQuestHiddenFromQuestHome(tmp11);
    }
    let tmp17 = null == tmp11 || removeExpiredQuests;
    if (!tmp17) {
      let arr = quests1.push(tmp11);
    }
    continue;
  }
  return { quests: quests1, excludedQuests, isFetchingCurrentQuests, hasFetched };
}) : ((arg0) => {
  let tmp = sortMethod;
  if (sortMethod === undefined) {
    tmp = closure_37;
  }
  const tmp2 = closure_30({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
  const quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  const map = new Map(quests.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  const tmp4 = useCompletedAndClaimedQuests(quests);
  const quests1 = [];
  const tmp3 = useAllQuests(quests, tmp);
  while (tmp5 !== undefined) {
    value = map.get(tmp6);
    let tmp8 = value;
    let removeExpiredQuests = null != value;
    if (removeExpiredQuests) {
      removeExpiredQuests = arg0 === obj3.ALL;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = tmp.removeExpiredQuests;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = isQuestHiddenFromQuestHome(tmp8);
    }
    let tmp14 = null == tmp8 || removeExpiredQuests;
    if (!tmp14) {
      let arr = quests1.push(tmp8);
    }
    continue;
  }
  return { quests: quests1, excludedQuests, isFetchingCurrentQuests, hasFetched };
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(10);
  _require = noop.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function s() {
      const claimedQuests = QuestStore.claimedQuests;
      return Array.from(claimedQuests.values());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [QuestStore];
    const fn2 = function l() {
      return QuestStore.isFetchingClaimedQuests;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        current = closure_1;
        if (!closure_1) {
          tmp = closure_0;
          current = closure_0.current;
        }
        if (!current) {
          tmp2 = closure_0;
          flag = true;
          closure_0.current = true;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          claimedQuests = obj.fetchClaimedQuests();
        }
        return;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = S;
    cResult[6] = items2;
    let tmp13 = items2;
  } else {
    class S {
      constructor() {
        current = closure_1;
        if (!closure_1) {
          tmp = closure_0;
          current = closure_0.current;
        }
        if (!current) {
          tmp2 = closure_0;
          flag = true;
          closure_0.current = true;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          claimedQuests = obj.fetchClaimedQuests();
        }
        return;
      }
    }
    tmp13 = cResult[6];
  }
  const effect = noop.useEffect(S, tmp13);
  if (cResult[7] === stateFromStoresArray) {
    class S {
      constructor() {
        current = closure_1;
        if (!closure_1) {
          tmp = closure_0;
          current = closure_0.current;
        }
        if (!current) {
          tmp2 = closure_0;
          flag = true;
          closure_0.current = true;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          claimedQuests = obj.fetchClaimedQuests();
        }
        return;
      }
    }
    return obj3;
  }
  obj3 = { claimedQuests: stateFromStoresArray, isFetchingClaimedQuests: stateFromStores };
  cResult[7] = stateFromStoresArray;
  cResult[8] = stateFromStores;
  cResult[9] = obj3;
  const tmpResult2 = require("initialize");
}) : (() => {
  _require = noop.useRef(false);
  const items = [QuestStore];
  let claimedQuests = require("initialize").useStateFromStoresArray(items, () => {
    const claimedQuests = QuestStore.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  let obj = require("initialize");
  const items1 = [QuestStore];
  const isFetchingClaimedQuests = require("initialize").useStateFromStores(items1, () => QuestStore.isFetchingClaimedQuests);
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
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function s() {
      return expiredQuestsMap.getExpiredQuestsMap();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [QuestStore];
  return initialize.useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((config, arg1) => {
  const cResult = c.c(4);
  const tmp4 = closure_47(config);
  if (cResult[0] !== config.config) {
    const result = QuestRewardUtils.hasVirtualCurrencyReward(config.config);
    cResult[0] = config.config;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = QuestRewardUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== config.config) {
    const result1 = QuestRewardUtils.hasPremiumOrbQuantity(config.config);
    cResult[2] = config.config;
    cResult[3] = result1;
    let tmp7 = result1;
    const tmpResult2 = QuestRewardUtils;
  } else {
    tmp7 = cResult[3];
  }
  let tmp9 = !tmp4;
  if (!tmp4) {
    tmp9 = tmp5;
  }
  if (tmp9) {
    tmp9 = tmp7;
  }
  if (tmp9) {
    tmp9 = arg1 !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  }
  return tmp9;
}) : ((config, arg1) => {
  const tmp = closure_47(config);
  const result = QuestRewardUtils.hasVirtualCurrencyReward(config.config);
  const result1 = QuestRewardUtils.hasPremiumOrbQuantity(config.config);
  let tmp4 = !tmp;
  if (!tmp) {
    tmp4 = result;
  }
  if (tmp4) {
    tmp4 = result1;
  }
  if (tmp4) {
    tmp4 = arg1 !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      let isQuestExpiredResult = null != closure_0;
      if (isQuestExpiredResult) {
        isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
      }
      return isQuestExpiredResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [QuestStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let isQuestExpiredResult = null != closure_0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
    }
    return isQuestExpiredResult;
  }, items1);
});
let closure_47 = tmp10;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const quest = QuestStore.getQuest(closure_0);
      let questOrbMultiplier = null;
      if (null != quest) {
        questOrbMultiplier = QuestRewardUtils.getQuestOrbMultiplier(quest.config);
      }
      return questOrbMultiplier;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [QuestStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const quest = QuestStore.getQuest(closure_0);
    let questOrbMultiplier = null;
    if (null != quest) {
      questOrbMultiplier = QuestRewardUtils.getQuestOrbMultiplier(quest.config);
    }
    return questOrbMultiplier;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function s() {
      return QuestStore.isQuestAccessSuspended;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5, tmp6);
}) : (() => {
  const items = [QuestStore];
  return initialize.useStateFromStores(items, () => QuestStore.isQuestAccessSuspended, []);
});
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, channelId, arg2) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  channelId = undefined;
  if (channelId != null) {
    channelId = channelId.channelId;
  }
  if (cResult[1] !== channelId) {
    let channelId1;
    if (channelId != null) {
      channelId1 = channelId.channelId;
    }
    const fn = function u() {
      channelId = undefined;
      if (channelId != null) {
        channelId = channelId.channelId;
      }
      let channel = ChannelStore.getChannel(channelId);
      if (channel == null) {
        channel = null;
      }
      return channel;
    };
    cResult[1] = channelId1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [QuestStore];
    const fn2 = function f() {
      return null != QuestStore.questEnrollmentBlockedUntil;
    };
    const items2 = [];
    cResult[3] = items1;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp12 = items2;
    let tmp11 = fn2;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    class T {
      constructor() {
        currentUser = closure_1_10.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[6] = items3;
    cResult[7] = T;
    let tmp16 = T;
    let tmp15 = items3;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp15, tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [QuestStore];
    class T {
      constructor() {
        currentUser = closure_1_10.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[8] = items4;
  }
  if (cResult[9] !== arg0) {
    class P {
      constructor() {
        isQuestExpiredResult = null != closure_0;
        if (isQuestExpiredResult) {
          tmp3 = closure_13;
          isQuestExpiredResult = closure_13.isQuestExpired(tmp.id);
        }
        return isQuestExpiredResult;
      }
    }
    const items5 = [arg0];
    class T {
      constructor() {
        currentUser = closure_1_10.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[9] = arg0;
    cResult[10] = P;
    cResult[11] = items5;
  } else {
    class P {
      constructor() {
        isQuestExpiredResult = null != closure_0;
        if (isQuestExpiredResult) {
          tmp3 = closure_13;
          isQuestExpiredResult = closure_13.isQuestExpired(tmp.id);
        }
        return isQuestExpiredResult;
      }
    }
  }
  require("initialize");
  if (null != arg0) {
    class P {
      constructor() {
        isQuestExpiredResult = null != closure_0;
        if (isQuestExpiredResult) {
          tmp3 = closure_13;
          isQuestExpiredResult = closure_13.isQuestExpired(tmp.id);
        }
        return isQuestExpiredResult;
      }
    }
  }
  return false;
}) : ((userStatus, arg1, arg2) => {
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
  const obj = require("initialize");
  const items1 = [QuestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => null != QuestStore.questEnrollmentBlockedUntil, []);
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
  obj3 = require("initialize");
  const items3 = [QuestStore];
  const items4 = [userStatus];
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (!obj4.useStateFromStores(items3, () => {
        let isQuestExpiredResult = null != closure_0;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = QuestStore.isQuestExpired(tmp.id);
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
});
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(8);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = { dateStyle: "short" };
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let toLocaleDateStringResult = globalThis;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function l() {
      return locale.locale;
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (null == arg0) {
    return "";
  } else {
    if (cResult[4] === arg0) {
      if (cResult[5] === tmp4) {
      }
    }
    const date = new toLocaleDateStringResult.Date(arg0);
    toLocaleDateStringResult = date.toLocaleDateString(stateFromStores, tmp4);
    cResult[4] = arg0;
    cResult[5] = tmp4;
    cResult[6] = stateFromStores;
    cResult[7] = toLocaleDateStringResult;
  }
  const tmpResult = initialize;
}) : ((arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let stateFromStores;
  const items = [LocaleStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => locale.locale);
  const items1 = [arg0, obj, stateFromStores];
  return noop.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      const _Date = Date;
      const date = new Date(closure_0);
      str = date.toLocaleDateString(stateFromStores, obj);
    }
    return str;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function n() {
      return QuestStore.isProgressingOnDesktop(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [QuestStore];
  return require("initialize").useStateFromStores(items, () => QuestStore.isProgressingOnDesktop(id.id));
});
let closure_48 = tmp15;
ReactCompilerGating = fn(558);
let tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(2);
  if (cResult[0] !== quest) {
    const result = QuestTaskUtils.isQuestProgressingOnConsole(quest);
    cResult[0] = quest;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = QuestTaskUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => QuestTaskUtils.isQuestProgressingOnConsole(closure_0), items);
});
let closure_49 = tmp16;
ReactCompilerGating = fn(558);
let tmp17 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function n() {
      return QuestStore.getOptimisticProgress(id.id, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== id) {
    const result = tmp(10953).isVideoQuestProgressing(id);
    cResult[3] = id;
    cResult[4] = result;
    let tmp8 = result;
    const tmpResult2 = tmp(10953);
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((arg0) => {
  _require = arg0;
  const items = [QuestStore];
  const items1 = [arg0, require("initialize").useStateFromStores(items, () => QuestStore.getOptimisticProgress(id.id, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  return noop.useMemo(() => VideoQuestUtils.isVideoQuestProgressing(closure_0), items1);
});
let closure_50 = tmp17;
ReactCompilerGating = fn(558);
let tmp18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = closure_48(arg0);
  const tmp2 = closure_49(arg0);
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
}) : ((arg0) => {
  let tmp = closure_48(arg0);
  const tmp2 = closure_49(arg0);
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
});
let closure_51 = tmp18;
ReactCompilerGating = fn(558);
let tmp19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return QuestTaskUtils.getQuestTaskDetails(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  importDefault = tmp2;
  if (cResult[2] !== tmp2) {
    const tmp2Result = tmp2();
    cResult[2] = tmp2;
    cResult[3] = tmp2Result;
    let tmp3 = tmp2Result;
  } else {
    tmp3 = cResult[3];
  }
  const obj = require("c");
  [tmp6, dependencyMap] = noop.useState(tmp3);
  if (cResult[4] !== tmp2) {
    const fn2 = function c() {
      return dependencyMap(closure_1());
    };
    cResult[4] = tmp2;
    cResult[5] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[5];
  }
  asyncGeneratorStep = tmp7;
  const tmp8 = closure_51(arg0);
  _slicedToArray = tmp8;
  if (cResult[6] === tmp8) {
    if (cResult[7] === arg0) {
      if (cResult[8] === tmp7) {
        let tmp9 = cResult[9];
        let tmp10 = cResult[10];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      return tmp6;
    }
  }
  class C {
    constructor() {
      tmp = closure_0;
      userStatus = closure_0.userStatus;
      enrolledAt = undefined;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      if (null != enrolledAt) {
        userStatus2 = tmp.userStatus;
        completedAt = undefined;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (null == completedAt) {
          userStatus3 = tmp.userStatus;
          claimedAt = undefined;
          if (userStatus3 != null) {
            claimedAt = userStatus3.claimedAt;
          }
          if (null == claimedAt) {
            tmp5 = closure_4;
            if (closure_4) {
              tmp7 = globalThis;
              _window = window;
              tmp8 = closure_1;
              tmp9 = closure_2;
              num = 1;
              closure_0 = window.setInterval(() => {
                closure_1_3();
              }, closure_1(closure_2[22]).Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                closure_3();
              };
            }
          }
        }
      }
      tmp6 = closure_3();
      return;
    }
  }
  const items = [arg0, tmp8, tmp7];
  cResult[6] = tmp8;
  cResult[7] = arg0;
  cResult[8] = tmp7;
  cResult[9] = C;
  cResult[10] = items;
  tmp10 = items;
  tmp9 = C;
  const tmp5 = _slicedToArray(noop.useState(tmp3), 2);
}) : ((arg0) => {
  let userStatus = arg0;
  const items = [arg0];
  const callback = noop.useCallback(() => QuestTaskUtils.getQuestTaskDetails(closure_0), items);
  const tmp2 = _slicedToArray(noop.useState(callback()), 2);
  dependencyMap = tmp2[1];
  const items1 = [callback];
  const callback1 = noop.useCallback(() => dependencyMap(callback()), items1);
  const tmp4 = closure_51(arg0);
  _slicedToArray = tmp4;
  const items2 = [arg0, tmp4, callback1];
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
              callback1();
            }, callback(1102).Millis.SECOND);
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
});
let closure_52 = tmp19;
ReactCompilerGating = fn(558);
const tmp20 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  const cResult = c.c(2);
  if (cResult[0] !== config) {
    const thirdPartyTaskDetails = QuestTaskUtils.getThirdPartyTaskDetails(config);
    cResult[0] = config;
    cResult[1] = thirdPartyTaskDetails;
    let tmp4 = thirdPartyTaskDetails;
    const tmpResult = QuestTaskUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => QuestTaskUtils.getThirdPartyTaskDetails(closure_0), items);
});
let closure_53 = tmp20;
ReactCompilerGating = fn(558);
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(ctaContent[15]).c(6);
  quest = quest.quest;
  const content = quest.content;
  ctaContent = quest.ctaContent;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(ctaContent[15]);
  const getQuestImpressionId = quest(ctaContent[32]).useGetQuestImpressionId();
  if (cResult[0] === content) {
    if (cResult[1] === ctaContent) {
      if (cResult[2] === getQuestImpressionId) {
        if (cResult[3] === quest) {
          if (cResult[4] === sourceQuestContent) {
            let tmp3 = cResult[5];
          }
          return tmp3;
        }
      }
    }
  }
  const fn = function s() {
    if (quest.id !== closure_2_22) {
      obj3 = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
      QuestPlatformUtils.openGameLinkDirectly(tmp, obj3);
    } else {
      const _window = window;
      window.open(HelpdeskUtilsDefault.getArticleURL(constants7.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  };
  cResult[0] = content;
  cResult[1] = ctaContent;
  cResult[2] = getQuestImpressionId;
  cResult[3] = quest;
  cResult[4] = sourceQuestContent;
  cResult[5] = fn;
  tmp3 = fn;
}) : ((quest) => {
  quest = quest.quest;
  const content = quest.content;
  const ctaContent = quest.ctaContent;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(ctaContent[32]).useGetQuestImpressionId();
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return noop.useCallback(() => {
    if (quest.id !== closure_2_22) {
      obj3 = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
      QuestPlatformUtils.openGameLinkDirectly(tmp, obj3);
    } else {
      const _window = window;
      window.open(HelpdeskUtilsDefault.getArticleURL(constants7.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  }, items);
});
ReactCompilerGating = fn(558);
let tmp22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  if (cResult[0] !== arg0) {
    const _Set = Set;
    const set = new Set();
    const tmp8 = arg0[Symbol.iterator]();
    while (tmp8 !== undefined) {
      obj3 = QuestTaskUtils;
      let consoleApplicationId = obj3.getConsoleApplicationId(tmp11);
      if (null != consoleApplicationId) {
        let addResult = set.add(tmp16);
      }
      continue;
    }
    cResult[0] = arg0;
    cResult[1] = set;
    let tmp2 = set;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== tmp2) {
    const _Array = Array;
    const arr = Array.from(tmp2);
    cResult[2] = tmp2;
    cResult[3] = arr;
    let tmp19 = arr;
  } else {
    tmp19 = cResult[3];
  }
  return useGetOrFetchApplicationsDefault(tmp19);
}) : ((arg0) => {
  dependencyMap = arg0;
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
});
let closure_54 = tmp22;
ReactCompilerGating = fn(558);
let tmp21 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(sourceQuestContent[15]).c(8);
  quest = quest.quest;
  const questContent = quest.questContent;
  sourceQuestContent = quest.sourceQuestContent;
  if (cResult[0] !== quest) {
    let obj2 = { quest };
    cResult[0] = quest;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_56(tmp4);
  closure_3 = tmp5;
  let obj = quest(sourceQuestContent[15]);
  const getQuestImpressionId = quest(sourceQuestContent[32]).useGetQuestImpressionId();
  if (cResult[2] === getQuestImpressionId) {
    if (cResult[3] === quest) {
      if (cResult[4] === questContent) {
        if (cResult[5] === sourceQuestContent) {
          if (cResult[6] === tmp5) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
    }
  }
  const fn = function l() {
    const obj = QuestPlatformUtils;
    if (closure_3) {
      const obj2 = { quest };
      obj3 = { content: questContent, ctaContent: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result = obj.openAddConsoleConnectionModal(obj2, obj3);
    } else {
      const obj4 = { quest };
      const obj5 = { content: questContent, ctaContent: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result1 = obj.openConsoleConnectionSettings(obj4, obj5);
    }
  };
  cResult[2] = getQuestImpressionId;
  cResult[3] = quest;
  cResult[4] = questContent;
  cResult[5] = sourceQuestContent;
  cResult[6] = tmp5;
  cResult[7] = fn;
  tmp7 = fn;
}) : ((quest) => {
  quest = quest.quest;
  ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
  closure_3 = closure_56({ quest });
  closure_4 = quest(10929).useGetQuestImpressionId();
  return () => {
    const obj = QuestPlatformUtils;
    if (closure_3) {
      const obj2 = { quest };
      obj3 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE_LINK, impressionId: closure_4(), sourceQuestContent };
      const result = obj.openAddConsoleConnectionModal(obj2, obj3);
    } else {
      const obj4 = { quest };
      const obj5 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK, impressionId: closure_4(), sourceQuestContent };
      const result1 = obj.openConsoleConnectionSettings(obj4, obj5);
    }
  };
});
ReactCompilerGating = fn(558);
let tmp23 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  const cResult = c.c(8);
  if (cResult[0] !== config) {
    const result = QuestRewardUtils.hasCollectiblesQuestReward(config);
    cResult[0] = config;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = QuestRewardUtils;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== config) {
    const defaultReward = QuestCopyUtils.getDefaultReward(config);
    cResult[2] = config;
    cResult[3] = defaultReward;
    let tmp6 = defaultReward;
    const tmpResult3 = QuestCopyUtils;
  } else {
    tmp6 = cResult[3];
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct.useFetchCollectiblesProduct(tmp6.skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  let first;
  if (product != null) {
    const items = product.items;
    if (items != null) {
      first = items[0];
    }
  }
  if (cResult[4] === first) {
    if (cResult[5] === tmp4) {
      if (cResult[6] === isFetching) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const obj2 = { hasQuestCollectibles: tmp4, avatarDecoration: first, isFetching };
  cResult[4] = first;
  cResult[5] = tmp4;
  cResult[6] = isFetching;
  cResult[7] = obj2;
  tmp10 = obj2;
  const tmpResult4 = useFetchCollectiblesProduct;
}) : ((config) => {
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
});
ReactCompilerGating = fn(558);
const tmp25 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    const fn = function s() {
      return { fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
  ({ fetching, accounts } = stateFromStoresObject);
  if (cResult[2] !== accounts) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          return false === arg0.revoked;
        }
      }
      cResult[6] = E;
    } else {
      class E {
        constructor(arg0) {
          return false === arg0.revoked;
        }
      }
    }
    const found = accounts.filter(E);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          return false === arg0.revoked;
        }
      }
      cResult[7] = tmp13;
    } else {
      class E {
        constructor(arg0) {
          return false === arg0.revoked;
        }
      }
    }
    const found1 = found.filter(tmp13);
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.type === closure_1_25.PLAYSTATION;
        }
      }
      cResult[8] = C;
    } else {
      class C {
        constructor(arg0) {
          return arg0.type === closure_1_25.PLAYSTATION;
        }
      }
    }
    const found2 = found.filter(C);
    const combined = found1.concat(found2);
    cResult[2] = accounts;
    cResult[3] = found2;
    cResult[4] = combined;
    cResult[5] = found1;
  } else {
    class C {
      constructor(arg0) {
        return arg0.type === closure_1_25.PLAYSTATION;
      }
    }
    if (cResult[9] === tmp8) {
      class C {
        constructor(arg0) {
          return arg0.type === closure_1_25.PLAYSTATION;
        }
      }
    }
    const obj2 = { xboxAccounts: cResult[5], playstationAccounts: tmp8, xboxAndPlaystationAccounts: cResult[4] };
    cResult[9] = tmp8;
    cResult[10] = cResult[5];
    cResult[11] = cResult[4];
    cResult[12] = obj2;
  }
  const tmpResult = initialize;
}) : (() => {
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = accounts(504).useStateFromStoresObject(items, () => ({ fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() }));
  accounts = stateFromStoresObject.accounts;
  const items1 = [accounts];
  const memo = noop.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  return { fetching: stateFromStoresObject.fetching, xboxAccounts: memo.xboxAccounts, playstationAccounts: memo.playstationAccounts, xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts };
});
let closure_55 = tmp25;
ReactCompilerGating = fn(558);
let tmp26 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(4);
  quest = quest.quest;
  const tmp4 = closure_51(quest);
  const tmp5 = 0 === closure_55().xboxAndPlaystationAccounts.length;
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === quest) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const tmp7 = QuestTaskUtils.isConsoleQuest(quest) && tmp5 && !tmp4;
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = quest;
  cResult[3] = tmp7;
  tmp6 = tmp7;
  const tmpResult = QuestTaskUtils;
}) : ((quest) => {
  quest = quest.quest;
  const tmp = closure_51(quest);
  let isConsoleQuestResult = QuestTaskUtils.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    isConsoleQuestResult = 0 === closure_55().xboxAndPlaystationAccounts.length;
  }
  if (isConsoleQuestResult) {
    isConsoleQuestResult = !tmp;
  }
  return isConsoleQuestResult;
});
let closure_56 = tmp26;
ReactCompilerGating = fn(558);
const obj27 = { UNACCEPTED: 0, [0]: "UNACCEPTED", ACCEPTED: 1, [1]: "ACCEPTED", IN_PROGRESS: 2, [2]: "IN_PROGRESS", COMPLETED: 3, [3]: "COMPLETED", CLAIMED: 4, [4]: "CLAIMED" };
let tmp24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {
      handleComplete() {
          return QuestActionCreators.completeQuestPreview(closure_0);
        },
      handleProgress(random) {
          return QuestActionCreators.completeQuestPreview(closure_0, random);
        },
      handleResetStatusClick() {
          return QuestActionCreators.resetQuestPreviewStatus(closure_0);
        },
      handleResetDismissibilityClick() {
          return QuestActionCreators.resetQuestDismissibilityStatus(closure_0);
        },
      handleOverridePreviewClick(placement) {
          return QuestActionCreators.overrideQuestForPlacement(placement, closure_0);
        },
      handleResetHasBeenSeenClick() {
          const items = [closure_0];
          return QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
        }
    };
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  closure_0 = arg0;
  let items = [arg0];
  return noop.useMemo(() => ({
    handleComplete() {
      return closure_0(10007).completeQuestPreview(closure_1_0);
    },
    handleProgress(random) {
      return closure_0(10007).completeQuestPreview(closure_1_0, random);
    },
    handleResetStatusClick() {
      return closure_0(10007).resetQuestPreviewStatus(closure_1_0);
    },
    handleResetDismissibilityClick() {
      return closure_0(10007).resetQuestDismissibilityStatus(closure_1_0);
    },
    handleOverridePreviewClick(placement) {
      return closure_0(10007).overrideQuestForPlacement(placement, closure_1_0);
    },
    handleResetHasBeenSeenClick() {
      const items = [closure_1_0];
      return closure_0(10007).markAdContentUnseen(closure_0(5637).AdCreativeType.QUEST, items);
    }
  }), items);
});
ReactCompilerGating = fn(558);
const tmp27 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(9);
  const tmp4 = closure_55();
  if (cResult[0] !== tmp4.playstationAccounts.length > 0) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants7.QUEST_HOW_TO_PLAYSTATION);
    const articleURL1 = HelpdeskUtilsDefault.getArticleURL(constants7.QUEST_HOW_TO_XBOX);
    const intl = util.intl;
    const obj4 = { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 };
    const formatResult = intl.format(util.t.beN4DG, obj4);
    const intl2 = util.intl;
    let tmp16 = articleURL1;
    if (tmp6) {
      tmp16 = articleURL;
    }
    const obj5 = { helpdeskArticle: tmp16 };
    const formatResult1 = intl2.format(util.t.HVS7nh, obj5);
    cResult[0] = tmp6;
    cResult[1] = formatResult;
    cResult[2] = articleURL;
    cResult[3] = formatResult1;
    cResult[4] = articleURL1;
    let tmp10 = articleURL1;
    let tmp9 = formatResult1;
    let tmp8 = articleURL;
    let tmp7 = formatResult;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  if (tmp4.xboxAccounts.length <= 0) {
    let tmp18 = tmp7;
    if (!tmp5) {
      tmp18 = tmp7;
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === tmp18) {
        if (cResult[7] === tmp10) {
          let tmp19 = cResult[8];
        }
        return tmp19;
      }
    }
    const obj6 = { message: tmp18, xboxURL: tmp10, playstationURL: tmp8 };
    cResult[5] = tmp8;
    cResult[6] = tmp18;
    cResult[7] = tmp10;
    cResult[8] = obj6;
    tmp19 = obj6;
  }
  tmp18 = tmp9;
}) : (() => {
  const tmp = closure_55();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants7.QUEST_HOW_TO_PLAYSTATION);
  const articleURL1 = HelpdeskUtilsDefault.getArticleURL(constants7.QUEST_HOW_TO_XBOX);
  const intl = util.intl;
  const formatResult = intl.format(util.t.beN4DG, { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 });
  const intl2 = util.intl;
  let tmp7 = articleURL1;
  if (tmp.playstationAccounts.length > 0) {
    tmp7 = articleURL;
  }
  if (tmp.xboxAccounts.length <= 0) {
    let tmp9 = formatResult;
    if (!tmp2) {
      tmp9 = formatResult;
    }
    obj3 = { message: tmp9, xboxURL: articleURL1, playstationURL: articleURL };
    return obj3;
  }
  tmp9 = intl2.format(util.t.HVS7nh, { helpdeskArticle: tmp7 });
});
ReactCompilerGating = fn(558);
const tmp28 = ReactCompilerGating.isReactCompilerEnabled() ? ((userStatus) => {
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const userStatus2 = userStatus.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const userStatus3 = userStatus.userStatus;
  let claimedAt;
  if (userStatus3 != null) {
    claimedAt = userStatus3.claimedAt;
  }
  if (tmp6) {
    let IN_PROGRESS = obj27.CLAIMED;
  } else if (tmp4) {
    IN_PROGRESS = obj27.COMPLETED;
  } else {
    if (tmp7) {
      if (tmp2) {
        IN_PROGRESS = obj27.IN_PROGRESS;
      }
    }
    IN_PROGRESS = tmp2 ? obj27.ACCEPTED : obj27.UNACCEPTED;
  }
  return IN_PROGRESS;
}) : ((userStatus) => {
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const userStatus2 = userStatus.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const userStatus3 = userStatus.userStatus;
  let claimedAt;
  if (userStatus3 != null) {
    claimedAt = userStatus3.claimedAt;
  }
  if (tmp6) {
    let IN_PROGRESS = obj27.CLAIMED;
  } else if (tmp4) {
    IN_PROGRESS = obj27.COMPLETED;
  } else {
    if (tmp7) {
      if (tmp2) {
        IN_PROGRESS = obj27.IN_PROGRESS;
      }
    }
    IN_PROGRESS = tmp2 ? obj27.ACCEPTED : obj27.UNACCEPTED;
  }
  return IN_PROGRESS;
});
ReactCompilerGating = fn(558);
let tmp30 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return QuestStore.selectedTaskPlatform(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== arg0) {
    const fn2 = function u(platform) {
      return QuestActionCreators.selectTaskPlatform(closure_0, platform);
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === stateFromStores) {
      let tmp9 = cResult[7];
    }
    return tmp9;
  }
  const items1 = [stateFromStores, tmp8];
  cResult[5] = tmp8;
  cResult[6] = stateFromStores;
  cResult[7] = items1;
  tmp9 = items1;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [QuestStore];
  const items1 = [require("initialize").useStateFromStores(items, () => QuestStore.selectedTaskPlatform(closure_0)), ];
  const items2 = [arg0];
  items1[1] = noop.useCallback((platform) => QuestActionCreators.selectTaskPlatform(closure_0, platform), items2);
  return items1;
});
let closure_58 = tmp30;
ReactCompilerGating = fn(558);
const tmp31 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, first1) => {
  let withResult16 = _require;
  let exhaustiveResult1 = dependencyMap;
  const cResult = require("c").c(37);
  const obj2 = require("c");
  [tmp4, r10016] = closure_58(id.id);
  if (cResult[0] !== id) {
    const result = withResult16(10931).supportedTaskPlatforms(id);
    cResult[0] = id;
    cResult[1] = result;
    obj3 = result;
    const withResult16Result = withResult16(10931);
  } else {
    obj3 = cResult[1];
  }
  if (cResult[2] !== obj3) {
    const hasItem = obj3.includes(constants.DESKTOP);
    cResult[2] = obj3;
    cResult[3] = hasItem;
    let tmp6 = hasItem;
  } else {
    tmp6 = cResult[3];
  }
  _require = tmp6;
  if (cResult[4] !== obj3) {
    const hasItem1 = obj3.includes(constants.CONSOLE);
    cResult[4] = obj3;
    cResult[5] = hasItem1;
    let tmp9 = hasItem1;
  } else {
    tmp9 = cResult[5];
  }
  closure_1 = tmp9;
  const tmp3 = _slicedToArray(closure_58(id.id), 2);
  if (cResult[6] !== first1) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function _() {
        return null;
      };
      cResult[8] = fn;
      let PLAY_ON_DESKTOP = fn;
    } else {
      PLAY_ON_DESKTOP = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class Q {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[9] = Q;
      let PLAY_ACTIVITY = Q;
    } else {
      class Q {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[10] = P;
      let WATCH_VIDEO = P;
    } else {
      class P {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[11] = tmp16;
      let WATCH_VIDEO_ON_MOBILE = tmp16;
    } else {
      class P {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[12] = tmp17;
      let STREAM_ON_DESKTOP = tmp17;
    } else {
      class P {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[13] = O;
      let PLAY_ON_XBOX = O;
    } else {
      class O {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_1_14.CONSOLE;
        }
      }
      cResult[14] = A;
      let PLAY_ON_PLAYSTATION = A;
    } else {
      class A {
        constructor() {
          return closure_1_14.CONSOLE;
        }
      }
    }
    const _Symbol8 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_1_14.CONSOLE;
        }
      }
      cResult[15] = tmp18;
      let ACHIEVEMENT_IN_GAME = tmp18;
    } else {
      class A {
        constructor() {
          return closure_1_14.CONSOLE;
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[16] = F;
      let ACHIEVEMENT_IN_ACTIVITY = F;
    } else {
      class F {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol10 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      cResult[17] = I;
    } else {
      class I {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const match = withResult16(5081).match(first1);
    const str2 = withResult16(5081);
    const obj = { taskType: null };
    PLAY_ON_DESKTOP = withResult16(5638).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
    obj.taskType = PLAY_ON_DESKTOP;
    const withResult = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP);
    const obj4 = { taskType: null };
    PLAY_ACTIVITY = withResult16(5638).FirstPartyQuestTaskTypes.PLAY_ACTIVITY;
    obj4.taskType = PLAY_ACTIVITY;
    const withResult1 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY);
    const obj5 = { taskType: null };
    WATCH_VIDEO = withResult16(5638).FirstPartyQuestTaskTypes.WATCH_VIDEO;
    obj5.taskType = WATCH_VIDEO;
    const withResult2 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO);
    const obj6 = { taskType: null };
    WATCH_VIDEO_ON_MOBILE = withResult16(5638).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE;
    obj6.taskType = WATCH_VIDEO_ON_MOBILE;
    const withResult3 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE);
    const obj7 = { taskType: null };
    STREAM_ON_DESKTOP = withResult16(5638).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
    obj7.taskType = STREAM_ON_DESKTOP;
    const withResult4 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP);
    const obj8 = { taskType: null };
    PLAY_ON_XBOX = withResult16(5638).FirstPartyQuestTaskTypes.PLAY_ON_XBOX;
    obj8.taskType = PLAY_ON_XBOX;
    const withResult5 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP).with(obj7, PLAY_ON_XBOX);
    const obj9 = { taskType: null };
    PLAY_ON_PLAYSTATION = withResult16(5638).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION;
    obj9.taskType = PLAY_ON_PLAYSTATION;
    const withResult6 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP).with(obj7, PLAY_ON_XBOX).with(obj8, PLAY_ON_PLAYSTATION);
    const obj10 = { taskType: null };
    ACHIEVEMENT_IN_GAME = withResult16(5638).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME;
    obj10.taskType = ACHIEVEMENT_IN_GAME;
    const withResult7 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP).with(obj7, PLAY_ON_XBOX).with(obj8, PLAY_ON_PLAYSTATION).with(obj9, ACHIEVEMENT_IN_GAME);
    const obj11 = { taskType: null };
    ACHIEVEMENT_IN_ACTIVITY = withResult16(5638).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY;
    obj11.taskType = ACHIEVEMENT_IN_ACTIVITY;
    const withResult8 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP).with(obj7, PLAY_ON_XBOX).with(obj8, PLAY_ON_PLAYSTATION).with(obj9, ACHIEVEMENT_IN_GAME).with(obj10, ACHIEVEMENT_IN_ACTIVITY);
    const exhaustiveResult = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP).with(obj7, PLAY_ON_XBOX).with(obj8, PLAY_ON_PLAYSTATION).with(obj9, ACHIEVEMENT_IN_GAME).with(obj10, ACHIEVEMENT_IN_ACTIVITY).with(obj11, I).exhaustive();
    cResult[6] = first1;
    cResult[7] = exhaustiveResult;
    const withResult9 = match.with({ percentComplete: 0 }, PLAY_ON_DESKTOP).with(obj, PLAY_ACTIVITY).with(obj4, WATCH_VIDEO).with(obj5, WATCH_VIDEO_ON_MOBILE).with(obj6, STREAM_ON_DESKTOP).with(obj7, PLAY_ON_XBOX).with(obj8, PLAY_ON_PLAYSTATION).with(obj9, ACHIEVEMENT_IN_GAME).with(obj10, ACHIEVEMENT_IN_ACTIVITY).with(obj11, I);
  } else {
    class I {
      constructor() {
        return closure_1_14.DESKTOP;
      }
    }
    if (tmp12) {
      class I {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      let CONSOLE = constants.DESKTOP;
    } else {
      class I {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
      if (tmp13) {
        class I {
          constructor() {
            return closure_1_14.DESKTOP;
          }
        }
        CONSOLE = constants.CONSOLE;
      }
    }
    if (cResult[18] === CONSOLE) {
      class I {
        constructor() {
          return closure_1_14.DESKTOP;
        }
      }
    }
    const _Symbol11 = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
      cResult[24] = M;
      let DESKTOP = M;
    } else {
      class M {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
    }
    const _Symbol12 = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.DESKTOP;
        }
      }
      cResult[25] = L;
      let CONSOLE2 = L;
    } else {
      class L {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.DESKTOP;
        }
      }
    }
    const _Symbol13 = Symbol;
    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
      cResult[26] = N;
      let DESKTOP2 = N;
    } else {
      class N {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
    }
    const _Symbol14 = Symbol;
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
      cResult[27] = tmp23;
      let CONSOLE3 = tmp23;
    } else {
      class N {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
    }
    const _Symbol15 = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
      cResult[28] = H;
    } else {
      class H {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.CONSOLE;
        }
      }
    }
    const _Symbol16 = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.DESKTOP;
        }
      }
      cResult[29] = B;
    } else {
      class B {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.DESKTOP;
        }
      }
    }
    if (cResult[30] === tmp9) {
      class B {
        constructor() {
          return closure_0(closure_1_2[47]).TaskPlatformScreen.DESKTOP;
        }
      }
      const obj12 = { lastPlatformProgress: tmp14, currentProgressingPlatform: CONSOLE, selectedPlatform: tmp4 };
      const match1 = withResult16(5081).match(obj12);
      const obj13 = { currentProgressingPlatform: constants.CONSOLE };
      const str4 = withResult16(5081);
      const obj14 = { currentProgressingPlatform: null };
      DESKTOP = constants.DESKTOP;
      obj14.currentProgressingPlatform = DESKTOP;
      const withResult10 = match1.with(obj13, DESKTOP);
      const obj15 = { currentProgressingPlatform: null, lastPlatformProgress: null };
      CONSOLE2 = constants.CONSOLE;
      obj15.lastPlatformProgress = CONSOLE2;
      const withResult11 = match1.with(obj13, DESKTOP).with(obj14, CONSOLE2);
      const obj16 = { currentProgressingPlatform: null, lastPlatformProgress: null };
      DESKTOP2 = constants.DESKTOP;
      obj16.lastPlatformProgress = DESKTOP2;
      const withResult12 = match1.with(obj13, DESKTOP).with(obj14, CONSOLE2).with(obj15, DESKTOP2);
      const obj17 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null };
      CONSOLE3 = constants.CONSOLE;
      obj17.selectedPlatform = CONSOLE3;
      const withResult13 = match1.with(obj13, DESKTOP).with(obj14, CONSOLE2).with(obj15, DESKTOP2).with(obj16, CONSOLE3);
      const obj18 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP };
      const withResult14 = match1.with(obj13, DESKTOP).with(obj14, CONSOLE2).with(obj15, DESKTOP2).with(obj16, CONSOLE3).with(obj17, H);
      withResult16 = match1.with(obj13, DESKTOP).with(obj14, CONSOLE2).with(obj15, DESKTOP2).with(obj16, CONSOLE3).with(obj17, H).with(obj18, B).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, tmp26);
      exhaustiveResult1 = withResult16.exhaustive();
      cResult[18] = CONSOLE;
      cResult[19] = tmp9;
      cResult[20] = tmp6;
      cResult[21] = tmp14;
      cResult[22] = tmp4;
      cResult[23] = exhaustiveResult1;
      const withResult15 = match1.with(obj13, DESKTOP).with(obj14, CONSOLE2).with(obj15, DESKTOP2).with(obj16, CONSOLE3).with(obj17, H).with(obj18, B);
    }
    const fn2 = function q() {
      if (closure_1) {
        if (closure_0) {
          let SELECT = QuestTypes.TaskPlatformScreen.SELECT;
        }
        return SELECT;
      }
      const TaskPlatformScreen = QuestTypes.TaskPlatformScreen;
      SELECT = closure_1 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
    };
    cResult[30] = tmp9;
    cResult[31] = tmp6;
    cResult[32] = fn2;
    tmp26 = fn2;
  }
  tmp12 = closure_48(id);
}) : ((id, arg1) => {
  closure_0 = id;
  closure_1 = arg1;
  const tmp = hasItem1(closure_58(id.id), 2);
  const selectedPlatform = tmp[0];
  const items = [id];
  const memo = memo1.useMemo(() => QuestPlatformUtils.supportedTaskPlatforms(closure_0), items);
  const hasItem = memo.includes(constants.DESKTOP);
  hasItem1 = memo.includes(constants.CONSOLE);
  const items1 = [arg1];
  let obj = memo1;
  const tmp6 = closure_48(id);
  memo1 = memo1.useMemo(() => {
    const match = _mod5081.match(closure_1);
    const withResult = match.with({ percentComplete: 0 }, () => null);
    const obj = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult1 = withResult.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP }, () => constants.DESKTOP);
    const obj2 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult2 = withResult1.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY }, () => constants.DESKTOP);
    obj3 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO }, () => constants.DESKTOP);
    const obj4 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE }, () => constants.DESKTOP);
    const obj5 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP }, () => constants.DESKTOP);
    const obj6 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX }, () => constants.CONSOLE);
    const obj7 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION }, () => constants.CONSOLE);
    const obj8 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME }, () => constants.DESKTOP);
    const obj9 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    return withResult8.with({ taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY }, () => constants.DESKTOP).exhaustive();
  }, items1);
  if (tmp6) {
    let DESKTOP = constants.DESKTOP;
  } else {
    DESKTOP = null;
    if (tmp7) {
      DESKTOP = constants.CONSOLE;
    }
  }
  const items2 = [hasItem1, hasItem, memo1, DESKTOP, selectedPlatform];
  const items3 = [
    obj.useMemo(() => {
      const match = _mod5081.match({ lastPlatformProgress: memo1, currentProgressingPlatform: DESKTOP, selectedPlatform });
      const obj = { lastPlatformProgress: memo1, currentProgressingPlatform: DESKTOP, selectedPlatform };
      const obj2 = { currentProgressingPlatform: constants.CONSOLE };
      obj3 = { currentProgressingPlatform: constants.DESKTOP };
      const withResult = match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE);
      const obj4 = { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE };
      const withResult1 = match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP);
      const obj5 = { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP };
      const withResult2 = match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE);
      const obj6 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE };
      const withResult3 = match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP);
      const obj7 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP };
      const withResult4 = match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE);
      const withResult5 = match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP);
      return match.with({ currentProgressingPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE }, () => id(5633).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP }, () => id(5633).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, () => {
        if (hasItem1) {
          if (hasItem) {
            let SELECT = closure_0(first[47]).TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = closure_0(first[47]).TaskPlatformScreen;
        SELECT = hasItem1 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
      }).exhaustive();
    }, items2),
    memo,
    tmp[1]
  ];
  return items3;
});
let closure_59 = tmp31;
ReactCompilerGating = fn(558);
const tmp29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let formatPercent = require;
  let obj = dependencyMap;
  const cResult = c.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function o() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  let percentComplete = closure_52(arg0).percentComplete;
  const tmp7 = closure_53(arg0);
  if (null != tmp7) {
    percentComplete = tmp7.percentComplete;
  }
  const result = 100 * percentComplete;
  if (cResult[2] === percentComplete) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp2) {
          if (cResult[7] === percentComplete) {
            if (cResult[8] === tmp9) {
              if (cResult[9] === result) {
                let tmp15 = cResult[10];
              }
              return tmp15;
            }
          }
          obj3 = { completedRatio: percentComplete, percentComplete: result, completedRatioDisplay: cResult[6] };
          cResult[7] = percentComplete;
          cResult[8] = cResult[6];
          cResult[9] = result;
          cResult[10] = obj3;
          tmp15 = obj3;
        }
      }
    }
  }
  if (null != tmp7) {
    if (!tmp2) {
      let progress;
      if (tmp7 != null) {
        progress = tmp7.progress;
      }
      let target;
      if (tmp7 != null) {
        target = tmp7.target;
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + progress + "/" + target;
    }
    cResult[2] = percentComplete;
    cResult[3] = stateFromStores;
    cResult[4] = tmp7;
    cResult[5] = tmp2;
    cResult[6] = combined;
  }
  const formatPercentResult = initialize;
  formatPercent = NumberUtils.formatPercent;
  obj = { roundingMode: "floor" };
  combined = formatPercent(stateFromStores, percentComplete, obj);
  const formatPercentResult1 = NumberUtils;
}) : ((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
  let percentComplete = closure_52(arg0).percentComplete;
  const tmp4 = closure_53(arg0);
  if (null != tmp4) {
    percentComplete = tmp4.percentComplete;
  }
  const obj2 = { completedRatio: percentComplete, percentComplete: 100 * percentComplete, completedRatioDisplay: null };
  if (null != tmp4) {
    if (!flag) {
      let progress;
      if (tmp4 != null) {
        progress = tmp4.progress;
      }
      let target;
      if (tmp4 != null) {
        target = tmp4.target;
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + progress + "/" + target;
    }
    obj2.completedRatioDisplay = combined;
    return obj2;
  }
  combined = NumberUtils.formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
  const tmpResult = NumberUtils;
});
ReactCompilerGating = fn(558);
let tmp32 = ReactCompilerGating.isReactCompilerEnabled() ? ((userStatus) => {
  const cResult = c.c(14);
  const tmp5 = closure_52(userStatus);
  userStatus = userStatus.userStatus;
  let enrolledAt;
  const tmp4 = closure_53(userStatus);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp8 = null != enrolledAt;
  const userStatus2 = userStatus.userStatus;
  if (userStatus2 != null) {
    const completedAt = userStatus2.completedAt;
  }
  if (cResult[0] === tmp5.percentComplete) {
    if (cResult[1] === tmp5.taskType) {
      let tmp10 = cResult[2];
    }
    if (tmp8) {
      tmp8 = !tmp9;
    }
    if (tmp8) {
      tmp8 = !tmp6;
    }
    if (tmp8) {
      tmp8 = null == tmp4;
    }
    if (tmp8) {
      if (!tmp10) {
        tmp10 = 0 === tmp5.percentComplete && _slicedToArray(closure_59(userStatus, tmp5), 1)[0] === QuestTypes.TaskPlatformScreen.DESKTOP;
        const tmp12 = 0 === tmp5.percentComplete && _slicedToArray(closure_59(userStatus, tmp5), 1)[0] === QuestTypes.TaskPlatformScreen.DESKTOP;
      }
      tmp8 = tmp10;
    }
    if (cResult[3] === tmp8) {
      if (cResult[4] === userStatus) {
        let tmp13 = cResult[5];
      }
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp5.taskType) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] === tmp15) {
          if (cResult[10] === tmp13) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
        const items = [];
        if (!tmp15) {
          if (!tmp13) {
            cResult[9] = tmp15;
            cResult[10] = tmp13;
            cResult[11] = items;
            tmp17 = items;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = util.intl;
              const stringResult = intl2.string(util.t.BV6xDm);
              cResult[13] = stringResult;
              let tmp23 = stringResult;
            } else {
              tmp23 = cResult[13];
            }
            items.push(tmp23);
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult1 = intl.string(util.t.MFGxFM);
            cResult[12] = stringResult1;
            let tmp19 = stringResult1;
          } else {
            tmp19 = cResult[12];
          }
          items.push(tmp19);
        }
      }
      let isMacResult = PlatformUtils.isMac();
      if (isMacResult) {
        isMacResult = tmp5.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
      }
      if (isMacResult) {
        isMacResult = tmp8;
      }
      cResult[6] = tmp8;
      cResult[7] = tmp5.taskType;
      cResult[8] = isMacResult;
      tmp15 = isMacResult;
      const tmpResult = PlatformUtils;
    }
    let tmp14 = PlatformUtils.isWeb() && tmp8;
    if (tmp14) {
      tmp14 = !QuestPlatformUtils.isQuestSupportedOnWeb(userStatus);
      const tmpResult4 = QuestPlatformUtils;
    }
    cResult[3] = tmp8;
    cResult[4] = userStatus;
    cResult[5] = tmp14;
    tmp13 = tmp14;
    const tmpResult3 = PlatformUtils;
  }
  const DESKTOP = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.DESKTOP;
  let hasItem = DESKTOP.has(tmp5.taskType);
  if (hasItem) {
    hasItem = tmp5.percentComplete > 0;
  }
  ({ percentComplete: tmp3[0], taskType: tmp3[1] } = tmp5);
  cResult[2] = hasItem;
  tmp10 = hasItem;
  tmp6 = closure_47(userStatus);
}) : ((userStatus) => {
  const tmp2 = closure_52(userStatus);
  userStatus = userStatus.userStatus;
  let enrolledAt;
  const tmp = closure_53(userStatus);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp5 = null != enrolledAt;
  const userStatus2 = userStatus.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const DESKTOP = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.DESKTOP;
  let hasItem = DESKTOP.has(tmp2.taskType);
  if (hasItem) {
    hasItem = tmp2.percentComplete > 0;
  }
  if (tmp5) {
    tmp5 = !tmp7;
  }
  if (tmp5) {
    tmp5 = !tmp3;
  }
  if (tmp5) {
    tmp5 = null == tmp;
  }
  if (tmp5) {
    if (!hasItem) {
      hasItem = 0 === tmp2.percentComplete && _slicedToArray(closure_59(userStatus, tmp2), 1)[0] === QuestTypes.TaskPlatformScreen.DESKTOP;
      const tmp11 = 0 === tmp2.percentComplete && _slicedToArray(closure_59(userStatus, tmp2), 1)[0] === QuestTypes.TaskPlatformScreen.DESKTOP;
    }
    tmp5 = hasItem;
  }
  tmp3 = closure_47(userStatus);
  tmp7 = null != completedAt;
  let tmp12 = PlatformUtils.isWeb() && tmp5;
  if (tmp12) {
    tmp12 = !QuestPlatformUtils.isQuestSupportedOnWeb(userStatus);
    const tmp8Result3 = QuestPlatformUtils;
  }
  const tmp8Result = PlatformUtils;
  let isMacResult = PlatformUtils.isMac();
  if (isMacResult) {
    isMacResult = tmp2.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
  }
  if (isMacResult) {
    isMacResult = tmp5;
  }
  const items = [];
  if (isMacResult) {
    const intl = util.intl;
    items.push(intl.string(util.t.MFGxFM));
  }
  if (tmp12) {
    const intl2 = util.intl;
    items.push(intl2.string(util.t.BV6xDm));
  }
  return items;
});
ReactCompilerGating = fn(558);
const tmp33 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function n() {
      return quests.quests;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arg0) {
    if (cResult[3] === stateFromStores) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  value = stateFromStores.get(arg0);
  if (value == null) {
    value = null;
  }
  cResult[2] = arg0;
  cResult[3] = stateFromStores;
  cResult[4] = value;
  tmp7 = value;
  const tmpResult = initialize;
}) : ((arg0) => {
  const items = [QuestStore];
  const stateFromStores = initialize.useStateFromStores(items, () => quests.quests);
  value = stateFromStores.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
});
ReactCompilerGating = fn(558);
const tmp34 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId, arg1) => {
  _require = questId;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  let obj = require("c");
  let items = [QuestStore];
  const items1 = [questId];
  stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(closure_0), items1);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  if (cResult[0] === arg1) {
    if (cResult[1] === stateFromStores) {
      if (cResult[2] === questId) {
        let tmp3 = cResult[3];
        let tmp4 = cResult[4];
      }
      const effect = noop.useEffect(tmp3, tmp4);
      return stateFromStores;
    }
  }
  const fn = function o() {
    if (null == stateFromStores) {
      const quests = QuestStore.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Quest unexpectedly missing from store: " + questId);
      const obj2 = { tags: { source: "useNonNullableQuest" }, extra: null };
      const obj5 = { questId, storeQuestIds: items, storeSize: items.length, isFetchingCurrentQuests: null, lastFetchedCurrentQuests: null };
      ({ isFetchingCurrentQuests: obj3.isFetchingCurrentQuests, lastFetchedCurrentQuests: obj3.lastFetchedCurrentQuests } = QuestStore);
      obj2.extra = obj5;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      if (closure_1 != null) {
        closure_1();
      }
    }
  };
  const items2 = [stateFromStores, questId, arg1];
  cResult[0] = arg1;
  cResult[1] = stateFromStores;
  cResult[2] = questId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp4 = items2;
  tmp3 = fn;
  let obj2 = require("initialize");
}) : ((questId, arg1) => {
  _require = questId;
  closure_1 = arg1;
  let items = [QuestStore];
  const items1 = [questId];
  stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(closure_0), items1);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const items2 = [stateFromStores, questId, arg1];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const quests = QuestStore.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Quest unexpectedly missing from store: " + questId);
      const obj2 = { tags: { source: "useNonNullableQuest" }, extra: null };
      const obj5 = { questId, storeQuestIds: items, storeSize: items.length, isFetchingCurrentQuests: null, lastFetchedCurrentQuests: null };
      ({ isFetchingCurrentQuests: obj3.isFetchingCurrentQuests, lastFetchedCurrentQuests: obj3.lastFetchedCurrentQuests } = QuestStore);
      obj2.extra = obj5;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items2);
  return stateFromStores;
});
ReactCompilerGating = fn(558);
const tmp35 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  const cResult = require("c").c(19);
  mode = mode.mode;
  const questContent = mode.questContent;
  const sourceQuestContent = mode.sourceQuestContent;
  if (cResult[0] !== mode) {
    if ("questId" in mode) {
      const questId = mode.questId;
      dependencyMap = questId;
    } else {
      _require = mode.adContentId;
      let adCreativeType = mode.adCreativeType;
    }
    cResult[0] = mode;
    cResult[1] = tmp5;
    cResult[2] = tmp6;
    cResult[3] = tmp7;
  } else {
    _require = tmp2;
    adCreativeType = tmp3;
    let tmp4 = cResult[3];
    dependencyMap = tmp4;
    if (cResult[4] === cResult[1]) {
      if (cResult[5] === tmp3) {
        if (cResult[6] === questContent) {
          if (cResult[7] === tmp4) {
            if (cResult[8] === sourceQuestContent) {
              let tmp11 = cResult[9];
            }
            AdDeliveryStore = tmp11;
            if (tmp4 == null) {
              tmp4 = tmp2;
            }
            closure_7 = tmp4;
            ChannelStore = sourceQuestContent.useRef(null);
            if (cResult[10] === tmp4) {
              if (cResult[11] === mode) {
                if (cResult[12] === tmp11) {
                  let tmp13 = cResult[13];
                  let tmp14 = cResult[14];
                }
                const effect = obj2.useEffect(tmp13, tmp14);
                if (cResult[15] === tmp4) {
                  if (cResult[16] === tmp11) {
                    let tmp16 = cResult[17];
                    let tmp17 = cResult[18];
                  }
                  const effect1 = obj2.useEffect(tmp16, tmp17);
                }
                class C {
                  constructor() {
                    return null != closure_7 ? (() => {
                      closure_1_6(null, ref.current);
                    }) : undefined;
                  }
                }
                const items = [tmp4, tmp11];
                class E {
                  constructor() {
                    tmp = null != closure_7;
                    if (tmp) {
                      tmp2 = closure_8;
                      tmp3 = mode;
                      tmp = closure_8.current !== mode;
                    }
                    if (tmp) {
                      tmp4 = closure_6;
                      tmp5 = mode;
                      tmp6 = closure_8;
                      tmp7 = closure_6(mode, closure_8.current);
                      closure_8.current = mode;
                    }
                    return;
                  }
                }
                cResult[16] = tmp11;
                cResult[17] = C;
                cResult[18] = items;
                tmp17 = items;
                tmp16 = C;
              }
            }
            class E {
              constructor() {
                tmp = null != closure_7;
                if (tmp) {
                  tmp2 = closure_8;
                  tmp3 = mode;
                  tmp = closure_8.current !== mode;
                }
                if (tmp) {
                  tmp4 = closure_6;
                  tmp5 = mode;
                  tmp6 = closure_8;
                  tmp7 = closure_6(mode, closure_8.current);
                  closure_8.current = mode;
                }
                return;
              }
            }
            const items1 = [mode, tmp4, tmp11];
            cResult[10] = tmp4;
            cResult[11] = mode;
            cResult[12] = tmp11;
            cResult[13] = E;
            cResult[14] = items1;
            tmp14 = items1;
            tmp13 = E;
          }
        }
      }
    }
    const fn = function a(mode, prevMode) {
      if (null != closure_2) {
        const obj2 = { mode, prevMode, questContent, questId: tmp, sourceQuestContent };
        const result = AnalyticsActions.trackQuestContentQuestBarOrDockModeChange(obj2);
      } else {
        let tmp3 = null != adContentId;
        if (tmp3) {
          tmp3 = null != adCreativeType;
        }
        if (tmp3) {
          const obj4 = { adContentId, adCreativeType, mode, prevMode, questContent, sourceQuestContent };
          const result1 = AnalyticsActions.trackAdContentQuestBarOrDockModeChange(obj4);
        }
      }
    };
    cResult[4] = cResult[1];
    cResult[5] = cResult[2];
    cResult[6] = questContent;
    cResult[7] = tmp4;
    cResult[8] = sourceQuestContent;
    cResult[9] = fn;
    tmp11 = fn;
  }
  let obj = require("c");
}) : ((mode) => {
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
      const obj2 = { mode, prevMode, questContent, questId: tmp, sourceQuestContent };
      const result = AnalyticsActions.trackQuestContentQuestBarOrDockModeChange(obj2);
    } else {
      let tmp3 = null != adContentId;
      if (tmp3) {
        tmp3 = null != adCreativeType;
      }
      if (tmp3) {
        const obj4 = { adContentId, adCreativeType, mode, prevMode, questContent, sourceQuestContent };
        const result1 = AnalyticsActions.trackAdContentQuestBarOrDockModeChange(obj4);
      }
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
  const effect1 = obj.useEffect(() => null != closure_7 ? (() => {
    callback(null, ref.current);
  }) : undefined, items2);
});
ReactCompilerGating = fn(558);
const tmp36 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, DARK) => {
  _require = arg0;
  let questAsset = dependencyMap;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return QuestStore.getQuest(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (null == stateFromStores) {
    return null;
  } else if (DARK != null) {
    if (cResult[4] === stateFromStores) {
    }
    questAsset = tmp(10013).getQuestAsset(stateFromStores, tmp(10013).QuestAssetType.COSPONSOR_LOGO_TYPE, DARK);
    cResult[4] = stateFromStores;
    cResult[5] = DARK;
    cResult[6] = questAsset;
    const tmpResult3 = tmp(10013);
  } else {
    tmp(4735).isThemeDark(tmp9) ? constants3.DARK : constants3.LIGHT;
    const tmpResult4 = tmp(4735);
  }
  const tmpResult = require("initialize");
}) : ((arg0, arg1) => {
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
      shared.isThemeDark(closure_3) ? constants3.DARK : constants3.LIGHT;
    }
  }, items2);
});
ReactCompilerGating = fn(558);
const tmp37 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === config) {
      let tmp8 = cResult[4];
      const _Symbol = Symbol;
      if (cResult[5] !== Symbol.for("react.early_return_sentinel")) {
        tmp8 = tmp9;
      }
      return tmp8;
    }
  }
  const tmpResult = initialize;
  const forResult = Symbol.for("react.early_return_sentinel");
  const defaultRewardName = QuestRewardUtils.getDefaultRewardName(config, stateFromStores);
  const tmpResult7 = QuestRewardUtils;
  const collectibleQuestRewardDuration = QuestRewardUtils.getCollectibleQuestRewardDuration(config);
  const tmpResult8 = QuestRewardUtils;
  const collectibleQuestRewardExtendableExpirationDate = QuestRewardUtils.getCollectibleQuestRewardExtendableExpirationDate(config);
  const tmpResult9 = QuestRewardUtils;
  const result = QuestRewardUtils.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const tmpResult10 = QuestRewardUtils;
  const result1 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(config);
  const tmpResult11 = QuestRewardUtils;
  const isPremiumResult = PremiumUtils.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl = util.intl;
    const obj2 = { decorationName: defaultRewardName };
    const formatToPlainStringResult = intl.formatToPlainString(util.t.l9uXL8, obj2);
    cResult[2] = stateFromStores;
    cResult[3] = config;
    cResult[4] = undefined;
    cResult[5] = formatToPlainStringResult;
  }
  const intl2 = util.intl;
  const tmpResult12 = PremiumUtils;
  const intl3 = util.intl;
  const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.o97tNn, { rewardName: defaultRewardName });
  const intl4 = util.intl;
  let formatToPlainStringResult3 = intl4.formatToPlainString(util.t.ie4YK0, { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration });
  const intl5 = util.intl;
  intl5.formatToPlainString(util.t.yCpc0U, { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName });
  if (!result1) {
    const intl6 = util.intl;
    obj3 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
    intl6.formatToPlainString(util.t.tTlItm, obj3);
  }
  if (result) {
    if (isPremiumResult) {
      formatToPlainStringResult3 = formatToPlainStringResult1;
    }
  }
  const formatToPlainStringResult2 = intl3.formatToPlainString(util.t.PkyRZo, { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate });
}) : ((config) => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const defaultRewardName = QuestRewardUtils.getDefaultRewardName(config, stateFromStores);
  const collectibleQuestRewardDuration = QuestRewardUtils.getCollectibleQuestRewardDuration(config);
  const collectibleQuestRewardExtendableExpirationDate = QuestRewardUtils.getCollectibleQuestRewardExtendableExpirationDate(config);
  const result = QuestRewardUtils.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const result1 = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(config);
  const isPremiumResult = PremiumUtils.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = util.intl;
    const obj8 = { decorationName: defaultRewardName };
    return intl2.formatToPlainString(util.t.l9uXL8, obj8);
  } else {
    const intl3 = util.intl;
    const obj9 = { rewardName: defaultRewardName };
    const intl4 = util.intl;
    const obj10 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
    const formatToPlainStringResult = intl3.formatToPlainString(util.t.o97tNn, obj9);
    const intl5 = util.intl;
    const obj11 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
    let formatToPlainStringResult2 = intl5.formatToPlainString(util.t.ie4YK0, obj11);
    const intl6 = util.intl;
    const obj12 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
    let formatToPlainStringResult3 = intl6.formatToPlainString(util.t.yCpc0U, obj12);
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
      const intl = util.intl;
      const obj13 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
      return intl.formatToPlainString(util.t.tTlItm, obj13);
    }
    formatToPlainStringResult1 = intl4.formatToPlainString(util.t.PkyRZo, obj10);
  }
});
ReactCompilerGating = fn(558);
const tmp39 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [QuestStore];
    const fn = function s() {
      quests = quests.quests;
      const items = [...quests.values()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u(preview) {
        return preview.preview;
      };
      cResult[4] = fn2;
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[4];
    }
    const someResult = stateFromStoresArray.some(tmp7);
    cResult[2] = stateFromStoresArray;
    cResult[3] = someResult;
  } else {
    return cResult[3];
  }
  const tmpResult = initialize;
}) : (() => {
  let items = [QuestStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((preview) => preview.preview);
});
let closure_60 = tmp39;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
const tmp38 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(6);
  if (cResult[0] !== quest) {
    const activityApplicationId = QuestTaskUtils.getActivityApplicationId(quest);
    cResult[0] = quest;
    cResult[1] = activityApplicationId;
    let tmp4 = activityApplicationId;
    const tmpResult = QuestTaskUtils;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { applicationId: tmp4 };
    cResult[2] = tmp4;
    cResult[3] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  const tmp7 = useRefocusOrLaunchActivityDefault(tmp6);
  if (cResult[4] !== tmp7) {
    obj3 = { launchInGameActivity: tmp7 };
    cResult[4] = tmp7;
    cResult[5] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : ((quest) => {
  const obj2 = { launchInGameActivity: null };
  const activityApplicationId = QuestTaskUtils.getActivityApplicationId(quest);
  obj2.launchInGameActivity = useRefocusOrLaunchActivityDefault({ applicationId: activityApplicationId });
  return obj2;
});
ReactCompilerGating = fn(558);
const tmp41 = ReactCompilerGating.isReactCompilerEnabled() ? ((userStatus) => {
  const cResult = c.c(5);
  if (cResult[0] !== userStatus) {
    let userStatus1;
    if (userStatus != null) {
      userStatus1 = userStatus.userStatus;
    }
    let isDismissedResult = null != userStatus1;
    if (isDismissedResult) {
      isDismissedResult = QuestDataUtils.isDismissed(userStatus.userStatus, QuestTypes.QuestContent.ACTIVITY_PANEL);
      const tmpResult = QuestDataUtils;
    }
    cResult[0] = userStatus;
    cResult[1] = isDismissedResult;
    let tmp4 = isDismissedResult;
  } else {
    tmp4 = cResult[1];
  }
  let tmp9 = userStatus;
  if (userStatus == null) {
    tmp9 = null;
  }
  let claimedAt;
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function u() {
      return null != QuestStore.questEnrollmentBlockedUntil;
    };
    const items1 = [];
    cResult[2] = items;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp15 = items1;
    let tmp14 = fn;
    let tmp13 = items;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
    tmp15 = cResult[4];
  }
  const tmp12 = null != claimedAt;
  const tmp8Result = closure_47(tmp9);
  const stateFromStores = initialize.useStateFromStores(tmp13, tmp14, tmp15);
  if (!tmp4) {
    tmp4 = tmp8Result;
  }
  if (!tmp4) {
    tmp4 = tmp12;
  }
  if (!tmp4) {
    tmp4 = stateFromStores;
  }
  return !tmp4;
}) : ((userStatus) => {
  let userStatus1;
  if (userStatus != null) {
    userStatus1 = userStatus.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    isDismissedResult = QuestDataUtils.isDismissed(userStatus.userStatus, QuestTypes.QuestContent.ACTIVITY_PANEL);
  }
  let tmp6 = userStatus;
  if (userStatus == null) {
    tmp6 = null;
  }
  let claimedAt;
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmp5Result = closure_47(tmp6);
  const tmp9 = null != claimedAt;
  const items = [QuestStore];
  const stateFromStores = initialize.useStateFromStores(items, () => null != QuestStore.questEnrollmentBlockedUntil, []);
  if (!isDismissedResult) {
    isDismissedResult = tmp5Result;
  }
  if (!isDismissedResult) {
    isDismissedResult = tmp9;
  }
  if (!isDismissedResult) {
    isDismissedResult = stateFromStores;
  }
  return !isDismissedResult;
});
ReactCompilerGating = fn(558);
const tmp42 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [QuestStore];
    const fn = function s() {
      quests = quests.quests;
      const items = [...quests.values()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u(preview) {
        return preview.preview;
      };
      cResult[4] = fn2;
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[4];
    }
    const found = stateFromStoresArray.filter(tmp7);
    cResult[2] = stateFromStoresArray;
    cResult[3] = found;
  } else {
    return cResult[3];
  }
  const tmpResult = initialize;
}) : (() => {
  let items = [QuestStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  const items1 = [stateFromStoresArray];
  return noop.useMemo(() => stateFromStoresArray.filter((preview) => preview.preview), items1);
});
ReactCompilerGating = fn(558);
const tmp43 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const mapped = collapsedCategories.map((item) => {
      const obj = { heading: null, options: null };
      [tmp2, tmp3] = item;
      const tmp = _slicedToArray(item, 2);
      obj.heading = require("QuestCopyUtils").getFilterGroupHeadingText(tmp2);
      obj.options = tmp3;
      return obj;
    });
    cResult[0] = mapped;
    let first = mapped;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  closure_0 = closure_18;
  const items = [closure_18];
  return noop.useMemo(() => closure_0.map((item) => {
    [tmp, tmp2] = item;
    const obj = { heading: closure_1_0(closure_1_2[40]).getFilterGroupHeadingText(tmp), options: tmp2 };
    return obj;
  }), items);
});
ReactCompilerGating = fn(558);
const tmp44 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const keys = Object.keys(constants3);
    cResult[0] = keys;
    let first = keys;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const mapped = first.map((item) => {
      const obj = { label: require("QuestCopyUtils").getSortMethodText(dependencyMap[item]), value: dependencyMap[item] };
      return obj;
    });
    cResult[1] = mapped;
    let tmp4 = mapped;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => noop.useMemo(() => {
  const keys = Object.keys(constants3);
  return keys.map((item) => {
    const obj = { label: closure_1_0(closure_1_2[40]).getSortMethodText(dependencyMap[item]), value: dependencyMap[item] };
    return obj;
  });
}, []));
ReactCompilerGating = fn(558);
const tmp45 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedSortMethod) => {
  const cResult = selectedSortMethod(numQuestsVisible[15]).c(7);
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  numQuestsVisible = selectedSortMethod.numQuestsVisible;
  noop.useRef(null);
  noop.useRef(null);
  if (cResult[0] !== selectedSortMethod) {
    const fn = function s() {
      AnalyticsUtilsDefault.track(constants9.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: selectedSortMethod, previous_sort_method: ref.current });
      ref.current = selectedSortMethod;
    };
    const items = [selectedSortMethod];
    cResult[0] = selectedSortMethod;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
  if (cResult[3] === numQuestsVisible) {
    if (cResult[4] === selectedFilters) {
      let tmp5 = cResult[5];
      let tmp6 = cResult[6];
    }
    const effect1 = noop.useEffect(tmp5, tmp6);
  }
  const fn2 = function u() {
    const mapped = selectedFilters.map((item) => item.filter);
    const obj2 = { filters: mapped, previous_filters: null, num_quests_visible: null };
    let current = ref2.current;
    if (current == null) {
      current = [];
    }
    obj2.previous_filters = current;
    obj2.num_quests_visible = numQuestsVisible;
    AnalyticsUtilsDefault.track(constants9.QUEST_HOME_FILTERS_CHANGED, obj2);
    ref2.current = mapped;
  };
  const items1 = [selectedFilters, numQuestsVisible];
  cResult[3] = numQuestsVisible;
  cResult[4] = selectedFilters;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp6 = items1;
  tmp5 = fn2;
  let obj = selectedSortMethod(numQuestsVisible[15]);
}) : ((selectedSortMethod) => {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  noop.useRef(null);
  noop.useRef(null);
  const items = [selectedSortMethod];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants9.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: selectedSortMethod, previous_sort_method: ref.current });
    ref.current = selectedSortMethod;
  }, items);
  const items1 = [selectedFilters, numQuestsVisible];
  const effect1 = noop.useEffect(() => {
    const mapped = selectedFilters.map((item) => item.filter);
    const obj2 = { filters: mapped, previous_filters: null, num_quests_visible: null };
    let current = ref2.current;
    if (current == null) {
      current = [];
    }
    obj2.previous_filters = current;
    obj2.num_quests_visible = numQuestsVisible;
    AnalyticsUtilsDefault.track(constants9.QUEST_HOME_FILTERS_CHANGED, obj2);
    ref2.current = mapped;
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp47 = ReactCompilerGating.isReactCompilerEnabled() ? ((questIds) => {
  let found1 = dependencyMap;
  const cResult = stateFromStores(576).c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function n() {
      return quests.quests;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  questIds = undefined;
  if (questIds != null) {
    questIds = questIds.questIds;
  }
  if (null != questIds) {
    if (cResult[3] === questIds) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5].length <= 1) {
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { shelfQuests: [], isShelfEnabled: false };
            cResult[9] = obj2;
          }
        } else {
          if (cResult[10] !== arr2) {
            obj3 = { shelfQuests: arr2, isShelfEnabled: true };
            cResult[10] = arr2;
            cResult[11] = obj3;
            let tmp14 = obj3;
          } else {
            tmp14 = cResult[11];
          }
          let tmp9 = tmp14;
        }
      }
    }
    if (cResult[6] !== stateFromStores) {
      class S {
        constructor(arg0) {
          return closure_0.get(questIds);
        }
      }
      cResult[6] = stateFromStores;
      cResult[7] = S;
      let mapped = S;
    } else {
      class S {
        constructor(arg0) {
          return closure_0.get(questIds);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          return closure_0.get(questIds);
        }
      }
      cResult[8] = tmp12;
    } else {
      class S {
        constructor(arg0) {
          return closure_0.get(questIds);
        }
      }
    }
    mapped = questIds.map(mapped);
    const found = mapped.filter(tmp(1375).isNotNullish);
    found1 = found.filter(tmp12);
    cResult[3] = questIds;
    cResult[4] = stateFromStores;
    cResult[5] = found1;
  } else {
    class S {
      constructor(arg0) {
        return closure_0.get(questIds);
      }
    }
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          return closure_0.get(questIds);
        }
      }
      tmp10[0] = [];
      cResult[2] = tmp10;
      tmp9 = tmp10;
    } else {
      class S {
        constructor(arg0) {
          return closure_0.get(questIds);
        }
      }
    }
  }
  return tmp9;
}) : ((questIds) => {
  const items = [QuestStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => quests.quests);
  questIds = undefined;
  if (questIds != null) {
    questIds = questIds.questIds;
  }
  const items1 = [stateFromStores, questIds];
  return noop.useMemo(() => {
    if (null == questIds) {
      const obj2 = { shelfQuests: [], isShelfEnabled: false };
      return obj2;
    } else {
      const mapped = questIds.map((item) => stateFromStores.get(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => !stateFromStores(closure_1_2[21]).isQuestExpired(item));
      if (found1.length <= 1) {
        obj3 = { shelfQuests: [], isShelfEnabled: false };
        let obj = obj3;
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
  }, items1);
});
let closure_61 = tmp47;
let closure_62 = 6 * DurationsDefault.Millis.HOUR;
const MINUTE = DurationsDefault.Millis.MINUTE;
ReactCompilerGating = fn(558);
const tmp46 = ReactCompilerGating.isReactCompilerEnabled() ? ((preview) => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    cResult[0] = isStaffResult;
    let first = isStaffResult;
  } else {
    first = cResult[0];
  }
  preview = true === first;
  if (!preview) {
    preview = preview.preview;
  }
  return preview;
}) : ((preview) => {
  preview = noop.useMemo(() => {
    currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    return true === isStaffResult;
  }, []);
  if (!preview) {
    preview = preview.preview;
  }
  return preview;
});
ReactCompilerGating = fn(558);
const tmp48 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BountyStore];
    const fn = function s() {
      return { questHomeBounties: BountyStore.questHomeBounties, isFetching: BountyStore.isFetchingQuestHomeBounties };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStoresObject(tmp4, tmp5);
}) : (() => {
  const items = [BountyStore];
  return initialize.useStateFromStoresObject(items, () => ({ questHomeBounties: BountyStore.questHomeBounties, isFetching: BountyStore.isFetchingQuestHomeBounties }));
});
fn = () => closure_60();
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export const useQuests = tmp4;
export { sortQuests };
export const QuestTabs = obj3;
export const QuestQueryParams = { TAB: "tab", QUEST_ID: "quest_id", SORT: "sort", FILTER: "filter", AD_CREATIVE_IDS: "ad_creative_ids" };
export const useFilteredQuests = tmp5;
export const useClaimedQuests = tmp6;
export const useExpiredQuestsMap = tmp7;
export const useShouldShowBonusOrbsUX = tmp8;
export const useQuestOrbRewardMultiplier = tmp9;
export const useIsQuestExpired = tmp10;
export const useIsQuestAccessSuspended = tmp11;
export const useIsQuestEligibleForMembersListPopout = tmp12;
export const useQuestFormattedDate = tmp13;
export const useOnOpenGameClick = tmp14;
export const useIsQuestProgressingOnDesktop = tmp15;
export const useIsQuestProgressingOnConsole = tmp16;
export const useIsQuestProgressingVideoQuest = tmp17;
export const useIsQuestProgressing = tmp18;
export const useQuestTaskDetails = tmp19;
export const useThirdPartyTaskDetails = tmp20;
export const useConnectedConsoleLinkOnClick = tmp21;
export const useGetOrFetchApplicationForConsoleQuests = tmp22;
export const useQuestForMemberListSocialEntryPoint = function useQuestForMemberListSocialEntryPoint(arg0) {
  _require = arg0;
  const items = [QuestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => quests.quests);
  const items1 = [arg0, stateFromStores, closure_54(Array.from(stateFromStores.values()))];
  const memo = noop.useMemo(() => {
    const result = utils_QuestUtils.filterQuestsForSocialEntrypoints(stateFromStores, value2);
    return QuestMatchingUtils.getQuestsFromActivities(result, closure_0);
  }, items1);
  let tmp2 = null;
  if (!closure_47(memo)) {
    tmp2 = memo;
  }
  return tmp2;
};
export const useQuestCollectibles = tmp23;
export const useQuestPreviewActions = tmp24;
export const useConnectedAccounts = tmp25;
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
  const items = [ConnectedAccountsStore];
  const stateFromStores = questId(beforeRequest[16]).useStateFromStores(items, () => accounts.getAccounts());
  const tmp4 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  closure_6 = tmp4;
  const items1 = [questId];
  const callback = noop.useCallback((arg0) => {
    state = useConsoleQuestUIStore.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp4, questId];
  const effect = noop.useEffect(() => {
    closure_6(questId, QuestConsoleStartError.QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  const obj2 = { startConsoleQuest: null, startingConsoleQuest };
  const items3 = [startingConsoleQuest, beforeRequest, afterRequest, preview, questId, callback];
  obj2.startConsoleQuest = noop.useCallback(afterRequest(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
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
              c4 = 2;
              c5 = 1;
              const obj5 = { value: questId(tmp33[18]).manuallyStartConsoleQuest(questId, preview), done: false };
              return obj5;
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
        const obj = { value, done: true };
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
  }), items3);
  return obj2;
};
export const useWaitingForConsoleConnection = tmp26;
export const useQuestHowToHelpArticle = tmp27;
export const QuestProgressState = obj27;
export const useProgressState = tmp28;
export const useQuestCompletionDetails = tmp29;
export const useSelectedTaskPlatform = tmp30;
export const useTaskPlatformScreen = tmp31;
export const useQuestWarningTips = tmp32;
export const useQuest = tmp33;
export const useNonNullableQuest = tmp34;
export const useQuestBarOrDockModeChangeTracking = tmp35;
export const useCosponsoredLogotypeAsset = tmp36;
export const useClaimedCollectibleRewardMessage = tmp37;
export const useLaunchInGameActivityQuest = tmp38;
export const useIsPreviewerOnAnyQuest = tmp39;
export const useShouldShowPreviewToolTab = fn;
export const useShouldShowQuestsActivityPanelItem = tmp41;
export const useQuestsWithPreviewAccess = tmp42;
export const useQuestHomeFilterOptions = tmp43;
export const useQuestHomeSortOptions = tmp44;
export const useQuestHomeSortingFilteringAnalytics = tmp45;
export const useShouldShowQuestPreviewOverrides = tmp46;
export const useQuestHomeHeroShelf = tmp47;
export const useFetchQuestHomeBounties = function useFetchQuestHomeBounties(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let enabled2;
  c3 = undefined;
  const QuestHomeBountiesFeatureGateExperiment = previewAdCreativeIds(enabled2[56]).QuestHomeBountiesFeatureGateExperiment;
  const enabled = QuestHomeBountiesFeatureGateExperiment.useConfig({ location: constants2.QUEST_HOME_MOBILE }).enabled;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(enabled2[30]).BountyStaleRefreshQuestHomeExperiment;
  enabled2 = BountyStaleRefreshQuestHomeExperiment.useConfig({ location: constants2.QUEST_HOME_MOBILE }).enabled;
  [tmp2, c3] = noop.useState(enabled);
  let obj2 = { location: constants2.QUEST_HOME_MOBILE };
  obj3 = { location: constants2.QUEST_HOME_MOBILE };
  const tmp = _slicedToArray(noop.useState(enabled), 2);
  const items = [BountyStore];
  const stateFromStoresObject = previewAdCreativeIds(enabled2[16]).useStateFromStoresObject(items, () => ({ isFetching: BountyStore.isFetchingQuestHomeBounties, questHomeBounties: BountyStore.questHomeBounties }));
  const items1 = [enabled, enabled2, previewAdCreativeIds];
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
    closure_4 = async function _loadBounties() {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp3;
              const _Date = Date;
              closure_1 = Date.now();
              let v0 = 1;
              if (null != closure_0) {
                if (arr.length > 0) {
                  c1 = 3;
                  c4 = 1;
                  const obj6 = { value: previewAdCreativeIds(10962).fetchBountyPreview(arr, previewAdCreativeIds(5633).AdPlacement.VIDEO_MODAL_MOBILE), done: false };
                  return obj6;
                }
              }
              c1 = 2;
              c4 = 1;
              const obj7 = { value: previewAdCreativeIds(10962).fetchQuestHomeBounties(previewAdCreativeIds(5633).AdPlacement.VIDEO_MODAL_MOBILE), done: false };
              return obj7;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            if (!closure_128_0) {
              v0(false);
            }
            throw closure_2;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                if (!closure_128_0) {
                  v0(false);
                }
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              if (!closure_128_0) {
                v0(false);
              }
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            }
            v0 = 0;
            if (!closure_128_0) {
              v0(false);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          closure_2 = tmp34;
          if (tmp4 === v0) {
            c4 = tmp2;
            throw tmp34;
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
          if (Date.now() - c1 > closure_62) {
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
  if (enabled) {
    const obj5 = { questHomeBounties, isLoading: isFetching };
    let obj6 = obj5;
  } else {
    obj6 = { questHomeBounties: [], isLoading: false };
  }
  return obj6;
};
export const useQuestHomeBounties = tmp48;
export const useQuestBarImpressionSurvey = ReactCompilerGating.isReactCompilerEnabled() ? ((userStatus) => {
  _require = userStatus;
  const cResult = require("c").c(4);
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  dependencyMap = tmp4;
  if (cResult[0] === setting) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === userStatus.id) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const fn = function s() {
    if (!closure_2) {
      const fireSurveyAction = QualtricsActionCreators.fireSurveyAction;
      const obj = { quest_id: userStatus.id };
      fireSurveyAction(setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN, obj);
      const tmp4 = setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN;
    }
  };
  cResult[0] = setting;
  cResult[1] = null != enrolledAt;
  cResult[2] = userStatus.id;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((userStatus) => {
  _require = userStatus;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  dependencyMap = tmp3;
  const items = [setting, null != enrolledAt, userStatus.id];
  return noop.useCallback(() => {
    if (!closure_2) {
      const fireSurveyAction = QualtricsActionCreators.fireSurveyAction;
      const obj = { quest_id: userStatus.id };
      fireSurveyAction(setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN, obj);
      const tmp4 = setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN;
    }
  }, items);
});