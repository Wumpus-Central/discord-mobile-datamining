// discord_app/modules/quests/hooks/QuestHooks.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import intl7 from "../../../intl/index.native.tsx";
import _modDef1251 from "../../../../_runtime/metro/01251__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import NumberUtils from "../../../../discord_common/js/shared/utils/NumberUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import shared from "../../../design/shared.tsx";
import merged5 from "../../../../_runtime/05075_merged5.js";
import QualtricsActionCreators from "../../qualtrics/QualtricsActionCreators.tsx";
import SurveyActionTypes2 from "../../../../discord_common/js/shared/shared-constants/SurveyActionTypes.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import FirstPartyQuestTaskTypes from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import QuestDataUtils from "../utils/QuestDataUtils.tsx";
import ConsoleQuestUIStore from "../ConsoleQuestUIStore.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import utils_QuestUtils from "../utils/QuestUtils.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import QuestType from "../../../../discord_common/js/shared/shared-constants/QuestType.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import QuestMatchingUtils from "../utils/QuestMatchingUtils.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import QuestOrbMultiplierUtils from "../utils/QuestOrbMultiplierUtils.tsx";
import QuestCopyUtils from "../utils/QuestCopyUtils.tsx";
import DiscordAppStateDefault from "../../app_state/DiscordAppState.native.tsx";
import useFetchCollectiblesProduct from "../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import RenewableEndDateSortExperimentDefault from "../experiments/RenewableEndDateSortExperiment.tsx";
import apexExperiment from "../experiments/index.tsx";
import QuestPlatformUtils from "../utils/QuestPlatformUtils.tsx";
import VideoQuestUtils from "../utils/VideoQuestUtils.tsx";
import QuestConsoleStartError from "../../../../discord_common/js/shared/shared-constants/QuestConsoleStartError.tsx";
import useRefocusOrLaunchActivityDefault from "../../activities/utils/useRefocusOrLaunchActivity.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import AdDeliveryStore_mod from "../../ads/AdDeliveryStore.tsx";
import LocaleStore_mod from "../../user_settings/LocaleStore.tsx";
import ChannelStore_mod from "../../../stores/ChannelStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BountyStore from "../BountyStore.tsx";
import QuestStore from "../QuestStore.tsx";
import QuestConstants from "../QuestConstants.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c4, c5, dependencyMap, importDefault, map, questIds, selectedSortMethod, set;

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
let closure_27;
function defaultSortFn(id, id2, questHomeHero, get) {
  let num6;
  let tmp2 = id.id === closure_21;
  id = id2.id;
  if (tmp2) {
    const userStatus = id.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    tmp2 = null == completedAt;
  }
  let tmp5 = id === closure_21;
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
    const obj10 = QuestDataUtils;
    const userStatus12 = id.userStatus;
    let claimedAt;
    const isQuestExpiredResult = obj10.isQuestExpired(id);
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
    const tmp19 = null != completedAt2;
    if (userStatus7 != null) {
      enrolledAt2 = userStatus7.enrolledAt;
    }
    let tmp21 = null != enrolledAt2 && !tmp19;
    if (tmp21) {
      const _Date = Date;
      const userStatus8 = id.userStatus;
      let enrolledAt3;
      const timestamp = Date.now();
      const _Date2 = Date;
      if (userStatus8 != null) {
        enrolledAt3 = userStatus8.enrolledAt;
      }
      const self = this;
      const self2 = this;
      const _Date21 = new _Date2(enrolledAt3);
      tmp21 = timestamp - _Date21.getTime() > result;
    }
    const userStatus9 = id2.userStatus;
    let completedAt3;
    if (userStatus9 != null) {
      completedAt3 = userStatus9.completedAt;
    }
    const userStatus10 = id2.userStatus;
    let enrolledAt4;
    const tmp28 = null != completedAt3;
    if (userStatus10 != null) {
      enrolledAt4 = userStatus10.enrolledAt;
    }
    let tmp30 = null != enrolledAt4 && !tmp28;
    if (tmp30) {
      const _Date3 = Date;
      const userStatus11 = id2.userStatus;
      let enrolledAt5;
      const timestamp1 = Date.now();
      const _Date4 = Date;
      if (userStatus11 != null) {
        enrolledAt5 = userStatus11.enrolledAt;
      }
      const self3 = this;
      const self4 = this;
      const _Date41 = new _Date4(enrolledAt5);
      tmp30 = timestamp1 - _Date41.getTime() > result;
    }
    if (isQuestExpiredResult) {
      let result1;
      if ((null != claimedAt) !== (null != claimedAt1)) {
        let num17 = 1;
        if (null != claimedAt) {
          num17 = c29;
        }
        result1 = num17;
      } else if ((null != enrolledAt) !== (null != enrolledAt1)) {
        let num16 = 1;
        if (null != enrolledAt) {
          num16 = c29;
        }
        result1 = num16;
      } else {
        const expiresAt3 = id.config.expiresAt;
        let num15 = 1;
        const expiresAt4 = id2.config.expiresAt;
        if (constants10.DESC === constants10.DESC) {
          num15 = c29;
        }
        result1 = expiresAt3.localeCompare(expiresAt4) * num15;
      }
      return result1;
    } else {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          const tmp46Result = utils_QuestUtils;
          const result2 = tmp46Result.isQuestFeaturedByHero(questHomeHero, id.id);
          utils_QuestUtils;
          let num2 = 1;
          if (result2) {
            num2 = c29;
          }
          return num2;
        }
      }
      const isMobileQuestHomeSortPriorityEnabled = questHomeHero.isMobileQuestHomeSortPriorityEnabled;
      const tmp46Result12 = utils_QuestUtils;
      if (isMobileQuestHomeSortPriorityEnabled) {
        const hasVariantResult = tmp46Result12.hasVariant(id, constants6.MOBILE_ACTIVITY_QUEST);
        const tmp46Result13 = utils_QuestUtils;
        if (hasVariantResult !== tmp46Result13.hasVariant(id2, constants6.MOBILE_ACTIVITY_QUEST)) {
          let num14 = 1;
          if (hasVariantResult) {
            num14 = c29;
          }
          return num14;
        } else {
          const tmp46Result14 = QuestTaskUtils;
          const result3 = tmp46Result14.isVideoQuestForMobilePlatformOnly(id);
          const tmp46Result15 = QuestTaskUtils;
          if (result3 !== tmp46Result15.isVideoQuestForMobilePlatformOnly(id2)) {
            let num13 = 1;
            if (result3) {
              num13 = c29;
            }
            return num13;
          } else {
            const tmp46Result16 = QuestTaskUtils;
            const result4 = tmp46Result16.hasWatchVideoOnMobileTasks(id);
            const tmp46Result17 = QuestTaskUtils;
            if (result4 !== tmp46Result17.hasWatchVideoOnMobileTasks(id2)) {
              let num12 = 1;
              if (result4) {
                num12 = c29;
              }
              return num12;
            }
          }
        }
      } else {
        const questType = tmp46Result12.getQuestType(id.config);
        const tmp46Result18 = utils_QuestUtils;
        const questType1 = tmp46Result18.getQuestType(id2.config);
        const tmp46Result19 = QuestTaskUtils;
        const result5 = tmp46Result19.hasWatchVideoOnMobileTasks(id);
        const tmp46Result20 = QuestTaskUtils;
        const result6 = tmp46Result20.hasWatchVideoOnMobileTasks(id2);
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
      }
      if (tmp21 !== tmp30) {
        if (!tmp21) {
          return num6;
        }
        let num11 = 1;
        if (!tmp21) {
          num11 = c29;
        }
        num6 = num11;
      }
      if ((null != claimedAt) !== (null != claimedAt1)) {
        let num10 = 1;
        if (null == claimedAt) {
          num10 = c29;
        }
        num6 = num10;
      } else if ((null != enrolledAt) !== (null != enrolledAt1)) {
        let num9 = 1;
        if (null != enrolledAt) {
          num9 = c29;
        }
        num6 = num9;
      } else {
        const ASC = constants10.ASC;
        const value = get.get(id.id);
        const value2 = get.get(id2.id);
        if (null != value) {
          if (null != value2) {
            let num7;
            if (value !== value2) {
              num7 = value - value2;
            } else {
              num7 = 0;
              if (id.id !== id2.id) {
                let num8 = 1;
                if (id.id < id2.id) {
                  num8 = c29;
                }
                num7 = num8;
              }
            }
            num6 = num7;
          }
        }
        if (null != value) {
          num6 = c29;
        } else {
          let num5 = 1;
          num6 = 1;
          if (null == value2) {
            const expiresAt = id.config.expiresAt;
            const expiresAt2 = id2.config.expiresAt;
            if (ASC === constants10.DESC) {
              num5 = c29;
            }
            num6 = expiresAt.localeCompare(expiresAt2) * num5;
          }
        }
      }
    }
  }
}
function recentSortFn(config, config2) {
  const startsAt = config.config.startsAt;
  let num = 1;
  const startsAt2 = config2.config.startsAt;
  if (constants10.DESC === constants10.DESC) {
    num = c29;
  }
  return startsAt.localeCompare(startsAt2) * num;
}
function recentlyEnrolledSortFn(userStatus, userStatus2) {
  let enrolledAt;
  let num;
  userStatus = userStatus.userStatus;
  let enrolledAt1;
  if (userStatus != null) {
    enrolledAt1 = userStatus.enrolledAt;
  }
  userStatus2 = userStatus2.userStatus;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  if (null == enrolledAt1) {
    if (null == enrolledAt) {
      const expiresAt = userStatus.config.expiresAt;
      let num3 = 1;
      const expiresAt2 = userStatus2.config.expiresAt;
      if (constants10.DESC === constants10.DESC) {
        num3 = c29;
      }
      num = expiresAt.localeCompare(expiresAt2) * num3;
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
  const expiresAt2 = config2.config.expiresAt;
  if (constants10.ASC === constants10.DESC) {
    num = c29;
  }
  return expiresAt.localeCompare(expiresAt2) * num;
}
function doesQuestPassTaskFilter(quest, arg1) {
  if (constants4.VIDEO === arg1) {
    const obj8 = QuestTaskUtils;
    return obj8.hasWatchVideoTasks(quest);
  } else if (tmp.PLAY === arg1) {
    obj2 = { quest };
    const obj = QuestTaskUtils;
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj2);
    if (!hasPlayOnDesktopTaskResult) {
      const obj3 = { quest };
      const tmp2Result = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result.hasStreamOnDesktopTask(obj3);
    }
    if (!hasPlayOnDesktopTaskResult) {
      const tmp2Result4 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result4.hasPlayActivityTask(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      const tmp2Result5 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result5.isConsoleQuest(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      const tmp2Result6 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result6.isInGameQuest(quest);
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config, arg1) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    const obj4 = QuestRewardUtils;
    return obj4.hasVirtualCurrencyReward(config.config);
  } else if (constants5.COLLECTIBLE === arg1) {
    const obj3 = QuestRewardUtils;
    return obj3.hasCollectiblesQuestReward(config.config);
  } else if (constants5.IN_GAME === arg1) {
    const obj = QuestRewardUtils;
    let hasInGameQuestRewardResult = obj.hasInGameQuestReward(config.config);
    if (!hasInGameQuestRewardResult) {
      const tmp2Result = QuestRewardUtils;
      hasInGameQuestRewardResult = tmp2Result.hasQuestRewardCode(config.config);
    }
    return hasInGameQuestRewardResult;
  } else {
    return false;
  }
}
function sortQuests(arr) {
  let filters;
  let sortMethod;
  let tmp8;
  function computeRenewableQuestSortKeys(found, currentUserId, isRenewableEndDateSortEnabled) {
    map = new Map();
    const tmp = isRenewableEndDateSortEnabled;
    if (tmp) {
      if (null != currentUserId) {
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp9 = nextResult;
          obj2 = closure_0(dependencyMap[23]);
          if (obj2.hasVariant(nextResult, constants.RENEWABLE_END_DATE)) {
            let result = map.set(tmp9.id, seededQuestSortKey(currentUserId, tmp9.id));
          }
          continue;
        }
        return map;
      }
    }
    return map;
  }
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
    let num = 0;
    obj = arr;
    if (0 !== filters.length) {
      let found = arr;
      if (0 !== filters.length) {
        obj2 = require("../../../../_runtime/metro/00012__.js");
        _require = obj2.groupBy(filters, "group");
        found = arr.filter((item) => {
          closure_0 = item;
          const entries = Object.entries(closure_0);
          return entries.every((item) => {
            let arr;
            let tmp;
            let tmp2;
            [tmp, arr] = item;
            if ("task" === tmp) {
              tmp2 = closure_2_35;
            } else if ("reward" === tmp) {
              tmp2 = closure_2_36;
            }
            let closure_1 = tmp2;
            const tmp3 = 0 === arr.length || arr.some((item) => closure_1(closure_0, item.filter));
            return tmp3;
          });
        });
      }
      obj = found;
    }
  }
  const tmp6 = computeRenewableQuestSortKeys(obj, tmp2.currentUserId, tmp2.isRenewableEndDateSortEnabled);
  if (constants3.MOST_RECENT === sortMethod) {
    tmp8 = recentSortFn;
  } else if (constants3.RECENTLY_ENROLLED === sortMethod) {
    tmp8 = recentlyEnrolledSortFn;
  } else if (constants3.EXPIRING_SOON === sortMethod) {
    tmp8 = expiringSoonSortFn;
  } else {
    const SUGGESTED = constants3.SUGGESTED;
    tmp8 = defaultSortFn;
  }
  _require = tmp8;
  let closure_1 = tmp2;
  let closure_2 = tmp6;
  return obj.sort((arg0, arg1) => {
    let tmp8;
    const obj = closure_0(dependencyMap[21]);
    const isQuestExpiredResult = obj.isQuestExpired(arg0);
    const tmp2 = !isQuestExpiredResult;
    obj2 = closure_0(dependencyMap[21]);
    if (tmp2 !== !obj2.isQuestExpired(arg1)) {
      let num = 1;
      if (!isQuestExpiredResult) {
        num = closure_2_29;
      }
      tmp8 = num;
    } else {
      tmp8 = closure_0(arg0, arg1, closure_1, closure_2);
    }
    return tmp8;
  });
}
function seededQuestSortKey(currentUserId, id) {
  const obj = _modDef1251;
  return obj.v3("" + currentUserId + ":" + id) >>> 0;
}
function useAllQuests(quests, sortMethod) {
  let ref3;
  const tmp = closure_42();
  const current = tmp;
  const ref = react.useRef([]);
  const ref2 = react.useRef(sortMethod.sortMethod);
  react = react.useRef(sortMethod.filters);
  const ref4 = react.useRef(0);
  const ref5 = react.useRef(tmp);
  const items = [quests, sortMethod, tmp];
  return react.useMemo(() => {
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
      const arr2 = sortQuests(quests, sortMethod, current);
      const mapped = arr2.map((id) => id.id);
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
  const memo = react.useMemo(
    () =>
      quests.filter((userStatus) => {
        let claimedAt;
        userStatus = userStatus.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        let tmp2 = null != completedAt;
        const userStatus2 = userStatus.userStatus;
        if (userStatus2 != null) {
          claimedAt = userStatus2.claimedAt;
        }
        if (tmp2) {
          tmp2 = null != claimedAt;
        }
        return tmp2;
      }),
    items,
  );
  const ref = react.useRef([]);
  const items1 = [memo];
  return react.useMemo(() => {
    if (0 === memo.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref.current.length === memo.length) {
          return ref.current;
        }
      }
      const sorted = memo.sort((userStatus, userStatus2) => {
        let result;
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
          if (null == claimedAt) {
            num2 = closure_1_29;
          }
          result = num2;
        } else {
          const rewardsExpireAt = userStatus.config.rewardsConfig.rewardsExpireAt;
          let num = 1;
          const rewardsExpireAt2 = userStatus2.config.rewardsConfig.rewardsExpireAt;
          if (constants.DESC === constants.DESC) {
            num = closure_1_29;
          }
          result = rewardsExpireAt.localeCompare(rewardsExpireAt2) * num;
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
  const obj = QuestDataUtils;
  let isQuestExpiredResult = obj.isQuestExpired(userStatus);
  if (isQuestExpiredResult) {
    const tmpResult = QuestDataUtils;
    isQuestExpiredResult = !tmpResult.hasUnclaimedReward(userStatus.userStatus);
  }
  return isQuestExpiredResult;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let AdDeliveryStore = AdDeliveryStore_mod;
let LocaleStore = LocaleStore_mod;
let ChannelStore = ChannelStore_mod;
const useConsoleQuestUIStore = ConsoleQuestUIStore.useConsoleQuestUIStore;
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
({
  HelpdeskArticles: closure_24,
  PlatformTypes: closure_25,
  ThemeTypes: closure_26,
  AnalyticEvents: closure_27,
} = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let c29 = -1;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_2;
      let closure_5;
      let lastFetchedCurrentQuests;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp4;
      let tmp7;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(25);
      if (cResult[0] !== arg0) {
        obj2 = arg0;
        if (undefined === arg0) {
          obj2 = { fetchPolicy: "cache-only", callerSource: "unknown" };
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      let obj3 = react;
      const tmp5 = lastFetchedCurrentQuests(react.useState(false), 2);
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
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = require("get initialized");
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [QuestStore];
        class T {
          constructor() {
            const excludedQuests = QuestStore.excludedQuests;
            const items = [...excludedQuests.values()];
            return items;
          }
        }
        cResult[4] = items1;
        cResult[5] = T;
        tmp12 = T;
        tmp11 = items1;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult4 = require("get initialized");
      const stateFromStoresArray1 = tmpResult4.useStateFromStoresArray(tmp11, tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [QuestStore];
        class P {
          constructor() {
            return {
              isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests,
              lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
            };
          }
        }
        cResult[6] = items2;
        cResult[7] = P;
        tmp16 = P;
        tmp15 = items2;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult5 = require("get initialized");
      const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp15, tmp16);
      const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
      lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult6 = require("QuestsEligibility");
        const isEligibleForQuests = tmpResult6.getIsEligibleForQuests();
        class P {
          constructor() {
            return {
              isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests,
              lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
            };
          }
        }
        tmp19 = isEligibleForQuests;
      } else {
        tmp19 = cResult[8];
      }
      react = tmp19;
      if (cResult[9] === first) {
        if (cResult[10] === isFetchingCurrentQuests) {
          if (cResult[11] === lastFetchedCurrentQuests) {
            let tmp21;
            if (cResult[12] === tmp4.fetchPolicy) {
              tmp21 = cResult[13];
            }
            if (cResult[14] === first) {
              if (cResult[15] === isFetchingCurrentQuests) {
                if (cResult[16] === lastFetchedCurrentQuests) {
                  if (cResult[17] === tmp4.callerSource) {
                    let tmp22;
                    if (cResult[18] === tmp4.fetchPolicy) {
                      tmp22 = cResult[19];
                    }
                    const effect = obj3.useEffect(tmp21, tmp22);
                    if (cResult[20] === stateFromStoresArray1) {
                      if (cResult[21] === first) {
                        if (cResult[22] === isFetchingCurrentQuests) {
                          let tmp24;
                          if (cResult[23] === stateFromStoresArray) {
                            tmp24 = cResult[24];
                          }
                          return tmp24;
                        }
                      }
                    }
                    class P {
                      constructor() {
                        return {
                          isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests,
                          lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
                        };
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
            const items3 = [, , , , ,];
            class P {
              constructor() {
                return {
                  isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests,
                  lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
                };
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
          fetchPolicy = fetchPolicy.fetchPolicy;
          if ("cache-only" !== fetchPolicy) {
            let flag;
            if ("cache-or-network" === fetchPolicy) {
              flag = 0 === lastFetchedCurrentQuests;
            } else {
              flag = true;
            }
            if (flag) {
              flag = closure_5;
            }
            if (flag) {
              flag = !first;
            }
            if (flag) {
              flag = !isFetchingCurrentQuests;
            }
            if (flag) {
              closure_2(true);
              const obj = QuestActionCreators;
              const currentQuests = obj.fetchCurrentQuests();
              obj2 = PlatformUtils;
              if (obj2.isMac()) {
                const obj3 = DiscordAppStateDefault;
                const state = obj3.getState();
              }
            }
          }
        }
      }
      cResult[9] = first;
      cResult[10] = isFetchingCurrentQuests;
      cResult[11] = lastFetchedCurrentQuests;
      cResult[12] = tmp4.fetchPolicy;
      cResult[13] = F;
      tmp21 = F;
    }
  : () => {
      let closure_2;
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { fetchPolicy: "cache-only", callerSource: "unknown" };
      }
      let lastFetchedCurrentQuests;
      let isEligibleForQuests;
      const tmp = lastFetchedCurrentQuests(isEligibleForQuests.useState(false), 2);
      const hasFetched = tmp[0];
      dependencyMap = tmp[1];
      obj2 = obj(504);
      let items = [QuestStore];
      let quests = obj2.useStateFromStoresArray(items, () => {
        const quests = QuestStore.quests;
        const items = [...quests.values()];
        return items;
      });
      let obj3 = obj(504);
      const items1 = [QuestStore];
      let excludedQuests = obj3.useStateFromStoresArray(items1, () => {
        const excludedQuests = QuestStore.excludedQuests;
        const items = [...excludedQuests.values()];
        return items;
      });
      const items2 = [QuestStore];
      const obj4 = obj(504);
      const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => ({
        isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests,
        lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
      }));
      const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
      lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
      const obj5 = obj(10912);
      isEligibleForQuests = obj5.getIsEligibleForQuests();
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
          let flag;
          if ("cache-or-network" === fetchPolicy) {
            flag = 0 === lastFetchedCurrentQuests;
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
            obj2 = PlatformUtils;
            if (obj2.isMac()) {
              const obj3 = DiscordAppStateDefault;
              const state = obj3.getState();
            }
          }
        }
      }, items3);
      return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
    };
let closure_30 = tmp4;
let closure_37 = {};
let closure_38 = {
  questHomeHero: null,
  isQuestHomeHeroShelfEnabled: false,
  currentUserId: null,
  isRenewableEndDateSortEnabled: false,
  isMobileQuestHomeSortPriorityEnabled: false,
};
const constants10 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp12;
      let tmp14;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(12);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        obj2 = { location: constants2.QUEST_HOME_MOBILE };
        cResult[4] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[4];
      }
      const obj5 = RenewableEndDateSortExperimentDefault;
      const enabled = obj5.useConfig(tmp12).enabled;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { location: constants2.QUEST_HOME_MOBILE };
        cResult[5] = obj3;
        tmp14 = obj3;
      } else {
        tmp14 = cResult[5];
      }
      const MobileQuestHomeSortPriorityExperiment = apexExperiment.MobileQuestHomeSortPriorityExperiment;
      const enabled2 = MobileQuestHomeSortPriorityExperiment.useConfig(tmp14).enabled;
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === enabled2) {
          if (cResult[8] === enabled) {
            if (cResult[9] === isShelfEnabled) {
              let tmp16;
              if (cResult[10] === stateFromStores) {
                tmp16 = cResult[11];
              }
              return tmp16;
            }
          }
        }
      }
      const obj4 = {
        questHomeHero: stateFromStores,
        isQuestHomeHeroShelfEnabled: isShelfEnabled,
        currentUserId: stateFromStores1,
        isRenewableEndDateSortEnabled: enabled,
        isMobileQuestHomeSortPriorityEnabled: enabled2,
      };
      cResult[6] = stateFromStores1;
      cResult[7] = enabled2;
      cResult[8] = enabled;
      cResult[9] = isShelfEnabled;
      cResult[10] = stateFromStores;
      cResult[11] = obj4;
      tmp16 = obj4;
    }
  : () => {
      let stateFromStores;
      let stateFromStores1;
      const items = [AdDeliveryStore];
      const obj = stateFromStores(stateFromStores1[16]);
      stateFromStores = obj.useStateFromStores(items, () => null);
      const isShelfEnabled = closure_61(stateFromStores).isShelfEnabled;
      const items1 = [UserStore];
      obj2 = stateFromStores(stateFromStores1[16]);
      stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
      const obj3 = isShelfEnabled(stateFromStores1[29]);
      const obj4 = { location: constants2.QUEST_HOME_MOBILE };
      const enabled = obj3.useConfig(obj4).enabled;
      const MobileQuestHomeSortPriorityExperiment = stateFromStores(
        stateFromStores1[30],
      ).MobileQuestHomeSortPriorityExperiment;
      const obj5 = { location: constants2.QUEST_HOME_MOBILE };
      const enabled2 = MobileQuestHomeSortPriorityExperiment.useConfig(obj5).enabled;
      const items2 = [stateFromStores, isShelfEnabled, stateFromStores1, enabled, enabled2];
      return react.useMemo(
        () => ({
          questHomeHero: stateFromStores,
          isQuestHomeHeroShelfEnabled: isShelfEnabled,
          currentUserId: stateFromStores1,
          isRenewableEndDateSortEnabled: enabled,
          isMobileQuestHomeSortPriorityEnabled: enabled2,
        }),
        items2,
      );
    };
const QuestTabs = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, sortMethod) => {
      let excludedQuests;
      let first;
      let hasFetched;
      let isFetchingCurrentQuests;
      let tmp5;
      let tmp = sortMethod;
      const obj = react2;
      const cResult = obj.c(2);
      if (undefined === sortMethod) {
        tmp = closure_37;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        obj2 = { fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" };
        cResult[0] = obj2;
        first = obj2;
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
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      map = new Map(quests.map(tmp5));
      const tmp6 = useAllQuests(quests, tmp);
      let tmp7 = useCompletedAndClaimedQuests(quests);
      if (arg0 === obj.ALL) {
        tmp7 = tmp6;
      }
      const quests1 = [];
      const tmp8 = tmp7[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let value = map.get(tmp9);
        let tmp11 = value;
        let removeExpiredQuests = null != value;
        if (removeExpiredQuests) {
          removeExpiredQuests = arg0 === obj.ALL;
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
    }
  : (arg0) => {
      let excludedQuests;
      let hasFetched;
      let isFetchingCurrentQuests;
      let tmp = sortMethod;
      if (sortMethod === undefined) {
        tmp = closure_37;
      }
      const tmp2 = closure_30({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
      const quests = tmp2.quests;
      ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
      map = new Map(
        quests.map((id) => {
          const items = [id.id, id];
          return items;
        }),
      );
      const tmp3 = useAllQuests(quests, tmp);
      let tmp4 = useCompletedAndClaimedQuests(quests);
      if (arg0 === obj.ALL) {
        tmp4 = tmp3;
      }
      const quests1 = [];
      const tmp5 = tmp4[Symbol.iterator]();
      while (tmp5 !== undefined) {
        let value = map.get(tmp6);
        let tmp8 = value;
        let removeExpiredQuests = null != value && arg0 === obj.ALL && tmp.removeExpiredQuests;
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj3;
      let ref;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(10);
      _require = react.useRef(false);
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
      const tmpResult = require("get initialized");
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [QuestStore];
        const fn2 = function l() {
          return QuestStore.isFetchingClaimedQuests;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        class S {
          constructor() {
            const current = stateFromStores || ref.current;
            if (!current) {
              ref.current = true;
              const obj = QuestActionCreators;
              const claimedQuests = obj.fetchClaimedQuests();
            }
          }
        }
        const items2 = [stateFromStores];
        cResult[4] = stateFromStores;
        cResult[5] = S;
        cResult[6] = items2;
        tmp13 = items2;
      } else {
        class S {
          constructor() {
            const current = stateFromStores || ref.current;
            if (!current) {
              ref.current = true;
              const obj = QuestActionCreators;
              const claimedQuests = obj.fetchClaimedQuests();
            }
          }
        }
        tmp13 = cResult[6];
      }
      const effect = react.useEffect(S, tmp13);
      if (cResult[7] === stateFromStoresArray) {
        class S {
          constructor() {
            const current = stateFromStores || ref.current;
            if (!current) {
              ref.current = true;
              const obj = QuestActionCreators;
              const claimedQuests = obj.fetchClaimedQuests();
            }
          }
        }
        return obj3;
      }
      obj3 = { claimedQuests: stateFromStoresArray, isFetchingClaimedQuests: stateFromStores };
      cResult[7] = stateFromStoresArray;
      cResult[8] = stateFromStores;
      cResult[9] = obj3;
    }
  : () => {
      let ref;
      _require = react.useRef(false);
      let obj = require("get initialized");
      const items = [QuestStore];
      let claimedQuests = obj.useStateFromStoresArray(items, () => {
        const claimedQuests = QuestStore.claimedQuests;
        return Array.from(claimedQuests.values());
      });
      const items1 = [QuestStore];
      obj2 = require("get initialized");
      const isFetchingClaimedQuests = obj2.useStateFromStores(items1, () => QuestStore.isFetchingClaimedQuests);
      const items2 = [isFetchingClaimedQuests];
      const effect = react.useEffect(() => {
        const current = isFetchingClaimedQuests || ref.current;
        if (!current) {
          ref.current = true;
          const obj = QuestActionCreators;
          const claimedQuests = obj.fetchClaimedQuests();
        }
      }, items2);
      return { claimedQuests, isFetchingClaimedQuests };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let expiredQuestsMap;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let expiredQuestsMap;
      const items = [QuestStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (config, arg1) => {
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_47(config);
      if (cResult[0] !== config.config) {
        const tmpResult = QuestRewardUtils;
        const result = tmpResult.hasVirtualCurrencyReward(config.config);
        cResult[0] = config.config;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== config.config) {
        const tmpResult2 = QuestRewardUtils;
        const result1 = tmpResult2.hasPremiumOrbQuantity(config.config);
        cResult[2] = config.config;
        cResult[3] = result1;
        tmp7 = result1;
      } else {
        tmp7 = cResult[3];
      }
      let tmp9 = !tmp4;
      const INELIGIBLE = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
      if (!tmp4) {
        tmp9 = tmp5;
      }
      if (tmp9) {
        tmp9 = tmp7;
      }
      if (tmp9) {
        tmp9 = arg1 !== INELIGIBLE;
      }
      return tmp9;
    }
  : (config, arg1) => {
      const tmp = closure_47(config);
      const obj = QuestRewardUtils;
      const result = obj.hasVirtualCurrencyReward(config.config);
      obj2 = QuestRewardUtils;
      const result1 = obj2.hasPremiumOrbQuantity(config.config);
      let tmp4 = !tmp;
      const INELIGIBLE = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
      if (!tmp) {
        tmp4 = result;
      }
      if (tmp4) {
        tmp4 = result1;
      }
      if (tmp4) {
        tmp4 = arg1 !== INELIGIBLE;
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          const quest = QuestStore.getQuest(closure_0);
          let questOrbMultiplier = null;
          if (null != quest) {
            const obj = QuestRewardUtils;
            questOrbMultiplier = obj.getQuestOrbMultiplier(quest.config);
          }
          return questOrbMultiplier;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [QuestStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          const quest = QuestStore.getQuest(closure_0);
          let questOrbMultiplier = null;
          if (null != quest) {
            const obj = QuestRewardUtils;
            questOrbMultiplier = obj.getQuestOrbMultiplier(quest.config);
          }
          return questOrbMultiplier;
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          const isQuestExpiredResult = null != closure_0 && QuestStore.isQuestExpired(tmp.id);
          return isQuestExpiredResult;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [QuestStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const isQuestExpiredResult = null != closure_0 && QuestStore.isQuestExpired(tmp.id);
          return isQuestExpiredResult;
        },
        items1,
      );
    };
let closure_47 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
    }
  : () => {
      const items = [QuestStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => QuestStore.isQuestAccessSuspended, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, channelId, arg2) => {
      let closure_0;
      let first;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp17;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      channelId = undefined;
      const tmp6 = cResult[1];
      if (channelId != null) {
        channelId = channelId.channelId;
      }
      if (tmp6 !== channelId) {
        let channelId1;
        if (channelId != null) {
          channelId1 = channelId.channelId;
        }
        const fn = function u() {
          channelId = undefined;
          const getChannel = ChannelStore.getChannel;
          if (channelId != null) {
            channelId = channelId.channelId;
          }
          let channel = getChannel(channelId);
          if (channel == null) {
            channel = null;
          }
          return channel;
        };
        cResult[1] = channelId1;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [QuestStore];
        const fn2 = function f() {
          return null != QuestStore.questEnrollmentBlockedUntil;
        };
        const items2 = [];
        cResult[3] = items1;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp13 = items2;
        tmp12 = fn2;
        tmp11 = items1;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult4 = tmp(504);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp12, tmp13);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [UserStore];
        class T {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[6] = items3;
        cResult[7] = T;
        tmp17 = T;
        tmp16 = items3;
      } else {
        tmp16 = cResult[6];
        tmp17 = cResult[7];
      }
      const tmpResult5 = tmp(504);
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp16, tmp17);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [QuestStore];
        class T {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
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
            const isQuestExpiredResult = null != closure_0 && QuestStore.isQuestExpired(tmp.id);
            return isQuestExpiredResult;
          }
        }
        const items5 = [arg0];
        class T {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let id;
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
            const isQuestExpiredResult = null != closure_0 && QuestStore.isQuestExpired(tmp.id);
            return isQuestExpiredResult;
          }
        }
      }
      tmp(504);
      if (null != arg0) {
        class P {
          constructor() {
            const isQuestExpiredResult = null != closure_0 && QuestStore.isQuestExpired(tmp.id);
            return isQuestExpiredResult;
          }
        }
      }
      return false;
    }
  : (userStatus, arg1, arg2) => {
      _require = userStatus;
      let channelId = arg1;
      const tmp = _require;
      const items = [ChannelStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        channelId = undefined;
        const getChannel = ChannelStore.getChannel;
        if (channelId != null) {
          channelId = channelId.channelId;
        }
        let channel = getChannel(channelId);
        if (channel == null) {
          channel = null;
        }
        return channel;
      });
      const items1 = [QuestStore];
      obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => null != QuestStore.questEnrollmentBlockedUntil,
        [],
      );
      const items2 = [UserStore];
      const obj3 = require("get initialized");
      const stateFromStores2 = obj3.useStateFromStores(items2, () => {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      const items3 = [QuestStore];
      const items4 = [userStatus];
      const obj4 = require("get initialized");
      if (null != userStatus) {
        if (!stateFromStores1) {
          if (
            !obj4.useStateFromStores(
              items3,
              () => {
                const isQuestExpiredResult = null != userStatus && QuestStore.isQuestExpired(tmp.id);
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
              const tmpResult = tmp(7206);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, arg1) {
      let locale;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== arg1) {
        obj2 = arg1;
        if (undefined === arg1) {
          obj2 = { dateStyle: "short" };
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function l() {
          return locale.locale;
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp6 = fn;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      let str = "";
      if (null != arg0) {
        if (cResult[4] === arg0) {
          if (cResult[5] === tmp4) {
            let tmp9;
            if (cResult[6] === stateFromStores) {
              tmp9 = cResult[7];
            }
            str = tmp9;
          }
        }
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(arg0);
        const toLocaleDateStringResult = date.toLocaleDateString(stateFromStores, tmp4);
        cResult[4] = arg0;
        cResult[5] = tmp4;
        cResult[6] = stateFromStores;
        cResult[7] = toLocaleDateStringResult;
        tmp9 = toLocaleDateStringResult;
      }
      return str;
    }
  : (arg0) => {
      let closure_0;
      let locale;
      _require = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = { dateStyle: "short" };
      }
      let stateFromStores;
      const items = [LocaleStore];
      obj2 = require("get initialized");
      stateFromStores = obj2.useStateFromStores(items, () => locale.locale);
      const items1 = [arg0, obj, stateFromStores];
      return react.useMemo(function () {
        let str = "";
        if (null != closure_0) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(closure_0);
          str = date.toLocaleDateString(stateFromStores, obj);
        }
        return str;
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let ctaContent;
      let obj = quest(ctaContent[15]);
      const cResult = obj.c(6);
      quest = quest.quest;
      const content = quest.content;
      ctaContent = quest.ctaContent;
      const sourceQuestContent = quest.sourceQuestContent;
      obj2 = quest(ctaContent[32]);
      const getQuestImpressionId = obj2.useGetQuestImpressionId();
      if (cResult[0] === content) {
        if (cResult[1] === ctaContent) {
          if (cResult[2] === getQuestImpressionId) {
            if (cResult[3] === quest) {
              let tmp3;
              if (cResult[4] === sourceQuestContent) {
                tmp3 = cResult[5];
              }
              return tmp3;
            }
          }
        }
      }
      const fn = function s() {
        if (quest.id !== afk) {
          obj2 = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
          const openGameLinkDirectly = QuestPlatformUtils.openGameLinkDirectly;
          QuestPlatformUtils;
          openGameLinkDirectly(tmp, obj2);
        } else {
          const _window = window;
          const obj = HelpdeskUtilsDefault;
          open(obj.getArticleURL(constants.VIRTUAL_CURRENCY_LEARN_MORE));
        }
      };
      cResult[0] = content;
      cResult[1] = ctaContent;
      cResult[2] = getQuestImpressionId;
      cResult[3] = quest;
      cResult[4] = sourceQuestContent;
      cResult[5] = fn;
      tmp3 = fn;
    }
  : (quest) => {
      quest = quest.quest;
      const content = quest.content;
      const ctaContent = quest.ctaContent;
      const sourceQuestContent = quest.sourceQuestContent;
      let obj = quest(ctaContent[32]);
      const getQuestImpressionId = obj.useGetQuestImpressionId();
      const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
      return react.useCallback(() => {
        if (quest.id !== afk) {
          obj2 = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
          const openGameLinkDirectly = QuestPlatformUtils.openGameLinkDirectly;
          QuestPlatformUtils;
          openGameLinkDirectly(tmp, obj2);
        } else {
          const _window = window;
          const obj = HelpdeskUtilsDefault;
          open(obj.getArticleURL(constants.VIRTUAL_CURRENCY_LEARN_MORE));
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp6;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function n() {
          return QuestStore.isProgressingOnDesktop(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let id;
      _require = arg0;
      const items = [QuestStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => QuestStore.isProgressingOnDesktop(id.id));
    };
let closure_48 = tmp15;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== quest) {
        const tmpResult = QuestTaskUtils;
        const result = tmpResult.isQuestProgressingOnConsole(quest);
        cResult[0] = quest;
        cResult[1] = result;
        tmp4 = result;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        const obj = QuestTaskUtils;
        return obj.isQuestProgressingOnConsole(closure_0);
      }, items);
    };
let closure_49 = tmp16;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp6;
      let tmp8;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function n() {
          return QuestStore.getOptimisticProgress(id.id, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== id) {
        const tmpResult2 = require("VideoQuestUtils");
        const result = tmpResult2.isVideoQuestProgressing(id);
        cResult[3] = id;
        cResult[4] = result;
        tmp8 = result;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : (arg0) => {
      let id;
      _require = arg0;
      let obj = require("get initialized");
      const items = [QuestStore];
      const items1 = [
        arg0,
        obj.useStateFromStores(items, () =>
          QuestStore.getOptimisticProgress(id.id, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO),
        ),
      ];
      return react.useMemo(() => {
        const obj = VideoQuestUtils;
        return obj.isVideoQuestProgressing(id);
      }, items1);
    };
let closure_50 = tmp17;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp = closure_48(arg0);
      const tmp2 = closure_49(arg0);
      const tmp3 = closure_50(arg0);
      if (!tmp) {
        tmp = tmp2;
      }
      if (!tmp) {
        tmp = tmp3;
      }
      return tmp;
    }
  : (arg0) => {
      let tmp = closure_48(arg0);
      const tmp2 = closure_49(arg0);
      const tmp3 = closure_50(arg0);
      if (!tmp) {
        tmp = tmp2;
      }
      if (!tmp) {
        tmp = tmp3;
      }
      return tmp;
    };
let closure_51 = tmp18;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_1;
      let closure_3;
      let closure_4;
      let tmp2;
      let tmp3;
      let tmp6;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] !== arg0) {
        const fn = function o() {
          const obj = QuestTaskUtils;
          return obj.getQuestTaskDetails(userStatus);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      importDefault = tmp2;
      if (cResult[2] !== tmp2) {
        const tmp2Result = tmp2();
        cResult[2] = tmp2;
        cResult[3] = tmp2Result;
        tmp3 = tmp2Result;
      } else {
        tmp3 = cResult[3];
      }
      [tmp6, dependencyMap] = react.useState(tmp3);
      _slicedToArray(react.useState(tmp3), 2);
      if (cResult[4] !== tmp2) {
        const fn2 = function c() {
          return dependencyMap(closure_1());
        };
        cResult[4] = tmp2;
        cResult[5] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[5];
      }
      _asyncToGenerator = tmp7;
      const tmp8 = closure_51(arg0);
      _slicedToArray = tmp8;
      if (cResult[6] === tmp8) {
        if (cResult[7] === arg0) {
          let tmp9;
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp9 = cResult[9];
            tmp10 = cResult[10];
          }
          const effect = react.useEffect(tmp9, tmp10);
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
                if (tmp5) {
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
    }
  : (arg0) => {
      let closure_2;
      let closure_4;
      let first;
      let userStatus = arg0;
      const items = [arg0];
      const callback = react.useCallback(() => {
        const obj = QuestTaskUtils;
        return obj.getQuestTaskDetails(userStatus);
      }, items);
      [first, closure_2] = react.useState(callback());
      const items1 = [callback];
      const callback1 = react.useCallback(() => closure_2(callback()), items1);
      const tmp5 = closure_51(arg0);
      _slicedToArray = tmp5;
      const items2 = [arg0, tmp5, callback1];
      const effect = react.useEffect(() => {
        let closure_0;
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
                }, callback(closure_2[22]).Millis.SECOND);
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
      return first;
    };
let closure_52 = tmp19;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (config) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== config) {
        const tmpResult = QuestTaskUtils;
        const thirdPartyTaskDetails = tmpResult.getThirdPartyTaskDetails(config);
        cResult[0] = config;
        cResult[1] = thirdPartyTaskDetails;
        tmp4 = thirdPartyTaskDetails;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        const obj = QuestTaskUtils;
        return obj.getThirdPartyTaskDetails(closure_0);
      }, items);
    };
let closure_53 = tmp20;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let sourceQuestContent;
      let tmp4;
      let tmp = quest;
      let obj = quest(sourceQuestContent[15]);
      const cResult = obj.c(8);
      quest = quest.quest;
      const questContent = quest.questContent;
      const tmp2 = sourceQuestContent;
      sourceQuestContent = quest.sourceQuestContent;
      if (cResult[0] !== quest) {
        obj2 = { quest };
        cResult[0] = quest;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmp5 = closure_56(tmp4);
      let closure_3 = tmp5;
      const tmpResult = tmp(tmp2[32]);
      const getQuestImpressionId = tmpResult.useGetQuestImpressionId();
      if (cResult[2] === getQuestImpressionId) {
        if (cResult[3] === quest) {
          if (cResult[4] === questContent) {
            if (cResult[5] === sourceQuestContent) {
              let tmp7;
              if (cResult[6] === tmp5) {
                tmp7 = cResult[7];
              }
              return tmp7;
            }
          }
        }
      }
      const fn = function l() {
        const tmp = QuestPlatformUtils;
        if (closure_3) {
          obj2 = { quest };
          const openAddConsoleConnectionModal = tmp.openAddConsoleConnectionModal;
          const obj3 = {
            content: questContent,
            ctaContent: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent,
          };
          const result = openAddConsoleConnectionModal(obj2, obj3);
        } else {
          const obj = { quest };
          const openConsoleConnectionSettings = tmp.openConsoleConnectionSettings;
          const obj4 = {
            content: questContent,
            ctaContent: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent,
          };
          const result1 = openConsoleConnectionSettings(obj, obj4);
        }
      };
      cResult[2] = getQuestImpressionId;
      cResult[3] = quest;
      cResult[4] = questContent;
      cResult[5] = sourceQuestContent;
      cResult[6] = tmp5;
      cResult[7] = fn;
      tmp7 = fn;
    }
  : (quest) => {
      let content;
      let sourceQuestContent;
      quest = quest.quest;
      ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
      let closure_3 = closure_56({ quest });
      let obj = quest(10916);
      let closure_4 = obj.useGetQuestImpressionId();
      return () => {
        const tmp = QuestPlatformUtils;
        if (closure_3) {
          obj2 = { quest };
          const openAddConsoleConnectionModal = tmp.openAddConsoleConnectionModal;
          const obj3 = {
            content: importDefault,
            ctaContent: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE_LINK,
            impressionId: closure_4(),
            sourceQuestContent: dependencyMap,
          };
          const result = openAddConsoleConnectionModal(obj2, obj3);
        } else {
          const obj = { quest };
          const openConsoleConnectionSettings = tmp.openConsoleConnectionSettings;
          const obj4 = {
            content: importDefault,
            ctaContent: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK,
            impressionId: closure_4(),
            sourceQuestContent: dependencyMap,
          };
          const result1 = openConsoleConnectionSettings(obj, obj4);
        }
      };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let tmp17;
      let tmp2;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] !== arg0) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        const tmp6 = arg0[Symbol.iterator]();
        while (tmp6 !== undefined) {
          let obj3 = QuestTaskUtils;
          let consoleApplicationId = obj3.getConsoleApplicationId(tmp9);
          if (null != consoleApplicationId) {
            let addResult = set.add(tmp14);
          }
          continue;
        }
        cResult[0] = arg0;
        cResult[1] = set;
        tmp2 = set;
      } else {
        tmp2 = cResult[1];
      }
      if (cResult[2] !== tmp2) {
        const _Array = Array;
        const arr = Array.from(tmp2);
        cResult[2] = tmp2;
        cResult[3] = arr;
        tmp17 = arr;
      } else {
        tmp17 = cResult[3];
      }
      return useGetOrFetchApplicationsDefault(tmp17);
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      const memo = react.useMemo(() => {
        set = new Set();
        const tmp2 = closure_0[Symbol.iterator]();
        while (tmp2 !== undefined) {
          obj2 = QuestTaskUtils;
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
let closure_54 = tmp22;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (config) => {
      let isFetching;
      let product;
      let tmp4;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== config) {
        const tmpResult = QuestRewardUtils;
        const result = tmpResult.hasCollectiblesQuestReward(config);
        cResult[0] = config;
        cResult[1] = result;
        tmp4 = result;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== config) {
        const tmpResult3 = QuestCopyUtils;
        const defaultReward = tmpResult3.getDefaultReward(config);
        cResult[2] = config;
        cResult[3] = defaultReward;
        tmp6 = defaultReward;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult4 = useFetchCollectiblesProduct;
      const fetchCollectiblesProduct = tmpResult4.useFetchCollectiblesProduct(tmp6.skuId);
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
          let tmp10;
          if (cResult[6] === isFetching) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      obj2 = { hasQuestCollectibles: tmp4, avatarDecoration: first, isFetching };
      cResult[4] = first;
      cResult[5] = tmp4;
      cResult[6] = isFetching;
      cResult[7] = obj2;
      tmp10 = obj2;
    }
  : (config) => {
      const obj = QuestRewardUtils;
      const hasQuestCollectibles = obj.hasCollectiblesQuestReward(config);
      obj2 = QuestCopyUtils;
      const defaultReward = obj2.getDefaultReward(config);
      const obj3 = useFetchCollectiblesProduct;
      const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(defaultReward.skuId);
      const product = fetchCollectiblesProduct.product;
      let avatarDecoration;
      const isFetching = fetchCollectiblesProduct.isFetching;
      if (product != null) {
        const items = product.items;
        if (items != null) {
          avatarDecoration = items[0];
        }
      }
      return { hasQuestCollectibles, avatarDecoration, isFetching };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        obj2 = {
          handleComplete() {
            const obj = QuestActionCreators;
            return obj.completeQuestPreview(closure_0);
          },
          handleProgress(random) {
            const obj = QuestActionCreators;
            return obj.completeQuestPreview(closure_0, random);
          },
          handleResetStatusClick() {
            const obj = QuestActionCreators;
            return obj.resetQuestPreviewStatus(closure_0);
          },
          handleResetDismissibilityClick() {
            const obj = QuestActionCreators;
            return obj.resetQuestDismissibilityStatus(closure_0);
          },
          handleOverridePreviewClick(placement) {
            const obj = QuestActionCreators;
            return obj.overrideQuestForPlacement(placement, closure_0);
          },
          handleResetHasBeenSeenClick() {
            const items = [closure_0];
            const obj = QuestActionCreators;
            return obj.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
          },
        };
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      let items = [arg0];
      return react.useMemo(() => {
        let obj = {
          handleComplete() {
            const obj = closure_0(dependencyMap[18]);
            return obj.completeQuestPreview(closure_1_0);
          },
          handleProgress(random) {
            const obj = closure_0(dependencyMap[18]);
            return obj.completeQuestPreview(closure_1_0, random);
          },
          handleResetStatusClick() {
            const obj = closure_0(dependencyMap[18]);
            return obj.resetQuestPreviewStatus(closure_1_0);
          },
          handleResetDismissibilityClick() {
            const obj = closure_0(dependencyMap[18]);
            return obj.resetQuestDismissibilityStatus(closure_1_0);
          },
          handleOverridePreviewClick(placement) {
            const obj = closure_0(dependencyMap[18]);
            return obj.overrideQuestForPlacement(placement, closure_1_0);
          },
          handleResetHasBeenSeenClick() {
            const items = [closure_1_0];
            const obj = closure_0(dependencyMap[18]);
            return obj.markAdContentUnseen(closure_0(dependencyMap[42]).AdCreativeType.QUEST, items);
          },
        };
        return obj;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp25 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let accounts;
      let fetching;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(18);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectedAccountsStore];
        const fn = function s() {
          const obj = { fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
      ({ fetching, accounts } = stateFromStoresObject);
      if (cResult[2] !== accounts) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(revoked) {
              return false === revoked.revoked;
            }
          }
          cResult[6] = E;
        } else {
          class E {
            constructor(revoked) {
              return false === revoked.revoked;
            }
          }
        }
        const found = accounts.filter(E);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(revoked) {
              return false === revoked.revoked;
            }
          }
          cResult[7] = tmp13;
        } else {
          class E {
            constructor(revoked) {
              return false === revoked.revoked;
            }
          }
        }
        const found1 = found.filter(tmp13);
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(type) {
              return type.type === constants.PLAYSTATION;
            }
          }
          cResult[8] = C;
        } else {
          class C {
            constructor(type) {
              return type.type === constants.PLAYSTATION;
            }
          }
        }
        const found2 = found.filter(C);
        const combined = found1.concat(found2);
        cResult[2] = accounts;
        cResult[3] = found2;
        cResult[4] = combined;
        cResult[5] = found1;
        tmp10 = found1;
        tmp9 = combined;
      } else {
        class C {
          constructor(type) {
            return type.type === constants.PLAYSTATION;
          }
        }
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      if (cResult[9] === tmp8) {
        class C {
          constructor(type) {
            return type.type === constants.PLAYSTATION;
          }
        }
      }
      obj2 = { xboxAccounts: tmp10, playstationAccounts: tmp8, xboxAndPlaystationAccounts: tmp9 };
      cResult[9] = tmp8;
      cResult[10] = tmp10;
      cResult[11] = tmp9;
      cResult[12] = obj2;
    }
  : () => {
      let accounts;
      let obj = accounts(504);
      const items = [ConnectedAccountsStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = { fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() };
        return obj;
      });
      accounts = stateFromStoresObject.accounts;
      const items1 = [accounts];
      const fetching = stateFromStoresObject.fetching;
      const memo = react.useMemo(() => {
        const found = accounts.filter((revoked) => false === revoked.revoked);
        const found1 = found.filter((type) => type.type === constants.XBOX);
        const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
        const obj = {
          xboxAccounts: found1,
          playstationAccounts: found2,
          xboxAndPlaystationAccounts: found1.concat(found2),
        };
        return obj;
      }, items1);
      return {
        fetching,
        xboxAccounts: memo.xboxAccounts,
        playstationAccounts: memo.playstationAccounts,
        xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts,
      };
    };
let closure_55 = tmp25;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      const obj = react2;
      const cResult = obj.c(4);
      quest = quest.quest;
      const prop = closure_55().xboxAndPlaystationAccounts;
      const tmp4 = closure_51(quest);
      if ((cResult[0] === 0) === prop.length) {
        if (cResult[1] === tmp4) {
          let tmp6;
          if (cResult[2] === quest) {
            tmp6 = cResult[3];
          }
          return tmp6;
        }
      }
      const tmpResult = QuestTaskUtils;
      const tmp7 = tmpResult.isConsoleQuest(quest) && 0 === prop.length && !tmp4;
      cResult[0] = 0 === prop.length;
      cResult[1] = tmp4;
      cResult[2] = quest;
      cResult[3] = tmp7;
      tmp6 = tmp7;
    }
  : (quest) => {
      quest = quest.quest;
      const prop = closure_55().xboxAndPlaystationAccounts;
      const length = prop.length;
      const tmp = closure_51(quest);
      const obj = QuestTaskUtils;
      const isConsoleQuestResult = obj.isConsoleQuest(quest) && 0 === length && !tmp;
      return isConsoleQuestResult;
    };
let closure_56 = tmp26;
ReactCompilerGating = ReactCompilerGating_mod;
let obj2 = {
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
const tmp27 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = closure_55();
      if (cResult[0] !== tmp4.playstationAccounts.length > 0) {
        obj2 = HelpdeskUtilsDefault;
        const articleURL = obj2.getArticleURL(constants7.QUEST_HOW_TO_PLAYSTATION);
        const obj3 = HelpdeskUtilsDefault;
        const articleURL1 = obj3.getArticleURL(constants7.QUEST_HOW_TO_XBOX);
        const intl = intl7.intl;
        const obj4 = { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 };
        const formatResult = intl.format(intl7.t.beN4DG, obj4);
        const intl2 = intl7.intl;
        const format = intl2.format;
        let tmp16 = articleURL1;
        const HVS7nh = intl7.t.HVS7nh;
        if (tmp4.playstationAccounts.length > 0) {
          tmp16 = articleURL;
        }
        const obj5 = { helpdeskArticle: tmp16 };
        const formatResult1 = format(HVS7nh, obj5);
        cResult[0] = tmp4.playstationAccounts.length > 0;
        cResult[1] = formatResult;
        cResult[2] = articleURL;
        cResult[3] = formatResult1;
        cResult[4] = articleURL1;
        tmp10 = articleURL1;
        tmp9 = formatResult1;
        tmp8 = articleURL;
        tmp7 = formatResult;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      if (tmp4.xboxAccounts.length <= 0) {
        let tmp18 = tmp7;
        if (tmp4.xboxAccounts.length <= 0) {
          tmp18 = tmp7;
        }
        if (cResult[5] === tmp8) {
          if (cResult[6] === tmp18) {
            let tmp19;
            if (cResult[7] === tmp10) {
              tmp19 = cResult[8];
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
    }
  : () => {
      const tmp = closure_55();
      const obj = HelpdeskUtilsDefault;
      const articleURL = obj.getArticleURL(constants7.QUEST_HOW_TO_PLAYSTATION);
      obj2 = HelpdeskUtilsDefault;
      const articleURL1 = obj2.getArticleURL(constants7.QUEST_HOW_TO_XBOX);
      const intl = intl7.intl;
      const formatResult = intl.format(intl7.t.beN4DG, {
        psHelpdeskArticle: articleURL,
        xboxHelpdeskArticle: articleURL1,
      });
      const intl2 = intl7.intl;
      const format = intl2.format;
      let tmp7 = articleURL1;
      const HVS7nh = intl7.t.HVS7nh;
      if (tmp.playstationAccounts.length > 0) {
        tmp7 = articleURL;
      }
      const formatResult1 = format(HVS7nh, { helpdeskArticle: tmp7 });
      if (tmp.xboxAccounts.length <= 0) {
        let tmp9 = formatResult;
        if (tmp.xboxAccounts.length <= 0) {
          tmp9 = formatResult;
        }
        return { message: tmp9, xboxURL: articleURL1, playstationURL: articleURL };
      }
      tmp9 = formatResult1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userStatus) => {
      let IN_PROGRESS;
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
      const tmp4 = null != completedAt;
      if (userStatus3 != null) {
        claimedAt = userStatus3.claimedAt;
      }
      const tmp6 = null != claimedAt;
      if (tmp6) {
        IN_PROGRESS = obj2.CLAIMED;
      } else if (tmp4) {
        IN_PROGRESS = obj2.COMPLETED;
      } else {
        if (tmp7) {
          if (null != enrolledAt) {
            IN_PROGRESS = obj2.IN_PROGRESS;
          }
        }
        IN_PROGRESS = tmp2 ? obj2.ACCEPTED : obj2.UNACCEPTED;
      }
      return IN_PROGRESS;
    }
  : (userStatus) => {
      let IN_PROGRESS;
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
      const tmp4 = null != completedAt;
      if (userStatus3 != null) {
        claimedAt = userStatus3.claimedAt;
      }
      const tmp6 = null != claimedAt;
      if (tmp6) {
        IN_PROGRESS = obj2.CLAIMED;
      } else if (tmp4) {
        IN_PROGRESS = obj2.COMPLETED;
      } else {
        if (tmp7) {
          if (null != enrolledAt) {
            IN_PROGRESS = obj2.IN_PROGRESS;
          }
        }
        IN_PROGRESS = tmp2 ? obj2.ACCEPTED : obj2.UNACCEPTED;
      }
      return IN_PROGRESS;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let locale;
      let tmp11;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function o() {
          return locale.locale;
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
      let percentComplete = closure_52(arg0).percentComplete;
      const tmp9 = closure_53(arg0);
      if (null != tmp9) {
        percentComplete = tmp9.percentComplete;
      }
      const result = 100 * percentComplete;
      if (cResult[2] === percentComplete) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === tmp9) {
            if (cResult[5] === (undefined !== arg1 && arg1)) {
              tmp11 = cResult[6];
            }
            if (cResult[7] === percentComplete) {
              if (cResult[8] === tmp11) {
                let tmp15;
                if (cResult[9] === result) {
                  tmp15 = cResult[10];
                }
                return tmp15;
              }
            }
            obj2 = { completedRatio: percentComplete, percentComplete: result, completedRatioDisplay: tmp11 };
            cResult[7] = percentComplete;
            cResult[8] = tmp11;
            cResult[9] = result;
            cResult[10] = obj2;
            tmp15 = obj2;
          }
        }
      }
      if (null != tmp9) {
        let combined;
        if (!(undefined !== arg1 && arg1)) {
          let progress;
          if (tmp9 != null) {
            progress = tmp9.progress;
          }
          let target;
          if (tmp9 != null) {
            target = tmp9.target;
          }
          const _HermesInternal = HermesInternal;
          combined = "" + progress + "/" + target;
        }
        cResult[2] = percentComplete;
        cResult[3] = stateFromStores;
        cResult[4] = tmp9;
        cResult[5] = undefined !== arg1 && arg1;
        cResult[6] = combined;
        tmp11 = combined;
      }
      const tmpResult2 = NumberUtils;
      combined = tmpResult2.formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
    }
  : (arg0) => {
      let locale;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const items = [LocaleStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      let percentComplete = closure_52(arg0).percentComplete;
      const tmp4 = closure_53(arg0);
      if (null != tmp4) {
        percentComplete = tmp4.percentComplete;
      }
      obj2 = { completedRatio: percentComplete, percentComplete: 100 * percentComplete, completedRatioDisplay: null };
      if (null != tmp4) {
        let combined;
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
          combined = "" + progress + "/" + target;
        }
        obj2.completedRatioDisplay = combined;
        return obj2;
      }
      const tmpResult = NumberUtils;
      combined = tmpResult.formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp8;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(8);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          return QuestStore.selectedTaskPlatform(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== arg0) {
        const fn2 = function u(platform) {
          const obj = QuestActionCreators;
          return obj.selectTaskPlatform(closure_0, platform);
        };
        cResult[3] = arg0;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp8) {
        let tmp9;
        if (cResult[6] === stateFromStores) {
          tmp9 = cResult[7];
        }
        return tmp9;
      }
      const items1 = [stateFromStores, tmp8];
      cResult[5] = tmp8;
      cResult[6] = stateFromStores;
      cResult[7] = items1;
      tmp9 = items1;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [QuestStore];
      const items1 = [obj.useStateFromStores(items, () => QuestStore.selectedTaskPlatform(closure_0))];
      const items2 = [arg0];
      items1[1] = react.useCallback((platform) => {
        const obj = QuestActionCreators;
        return obj.selectTaskPlatform(closure_0, platform);
      }, items2);
      return items1;
    };
let closure_58 = tmp30;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, config) => {
      let CONSOLE;
      let closure_0;
      let fn2;
      let tmp10;
      let tmp5;
      let tmp7;
      const obj = require("react");
      const cResult = obj.c(37);
      [tmp5, r10016] = closure_58(id.id);
      _slicedToArray(closure_58(id.id), 2);
      if (cResult[0] !== id) {
        const tmpResult = require("QuestPlatformUtils");
        const result = tmpResult.supportedTaskPlatforms(id);
        cResult[0] = id;
        cResult[1] = result;
        obj2 = result;
      } else {
        obj2 = cResult[1];
      }
      if (cResult[2] !== obj2) {
        const hasItem = obj2.includes(constants.DESKTOP);
        cResult[2] = obj2;
        cResult[3] = hasItem;
        tmp7 = hasItem;
      } else {
        tmp7 = cResult[3];
      }
      _require = tmp7;
      if (cResult[4] !== obj2) {
        const hasItem1 = obj2.includes(constants.CONSOLE);
        cResult[4] = obj2;
        cResult[5] = hasItem1;
        tmp10 = hasItem1;
      } else {
        tmp10 = cResult[5];
      }
      let closure_1 = tmp10;
      const tmp13 = closure_48(id);
      const tmp14 = closure_49(id);
      if (cResult[6] !== config) {
        let tmp17;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function _() {
            return null;
          };
          cResult[8] = fn;
          tmp17 = fn;
        } else {
          tmp17 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[9] = Q;
        } else {
          class Q {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[10] = P;
        } else {
          class P {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[11] = tmp21;
        } else {
          class P {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[12] = tmp23;
        } else {
          class P {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const _Symbol6 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[13] = O;
        } else {
          class O {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const _Symbol7 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return constants.CONSOLE;
            }
          }
          cResult[14] = A;
        } else {
          class A {
            constructor() {
              return constants.CONSOLE;
            }
          }
        }
        const _Symbol8 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return constants.CONSOLE;
            }
          }
          cResult[15] = tmp27;
        } else {
          class A {
            constructor() {
              return constants.CONSOLE;
            }
          }
        }
        const _Symbol9 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[16] = F;
        } else {
          class F {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const _Symbol10 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              return constants.DESKTOP;
            }
          }
          cResult[17] = I;
        } else {
          class I {
            constructor() {
              return constants.DESKTOP;
            }
          }
        }
        const str2 = require("merged5");
        const match = str2.match(config);
        const obj3 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
        const _with = match.with({ percentComplete: 0 }, tmp17).with;
        match.with({ percentComplete: 0 }, tmp17);
        const obj4 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
        const _with2 = _with(obj3, Q).with;
        _with(obj3, Q);
        const obj5 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.WATCH_VIDEO };
        const _with3 = _with2(obj4, P).with;
        _with2(obj4, P);
        const obj6 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
        const _with4 = _with3(obj5, tmp21).with;
        _with3(obj5, tmp21);
        const obj7 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
        const _with5 = _with4(obj6, tmp23).with;
        _with4(obj6, tmp23);
        const obj8 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
        const _with6 = _with5(obj7, O).with;
        _with5(obj7, O);
        const obj9 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
        const _with7 = _with6(obj8, A).with;
        _with6(obj8, A);
        const obj10 = { taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
        const _with8 = _with7(obj9, tmp27).with;
        _with7(obj9, tmp27);
        const obj11 = {
          taskType: require("FirstPartyQuestTaskTypes").FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY,
        };
        const _with9 = _with8(obj10, F).with;
        _with8(obj10, F);
        const _with9Result = _with9(obj11, I);
        cResult[6] = config;
        cResult[7] = _with9Result.exhaustive();
        const exhaustiveResult = _with9Result.exhaustive();
      } else {
        class I {
          constructor() {
            return constants.DESKTOP;
          }
        }
      }
      if (tmp13) {
        class I {
          constructor() {
            return constants.DESKTOP;
          }
        }
        CONSOLE = constants.DESKTOP;
      } else {
        class I {
          constructor() {
            return constants.DESKTOP;
          }
        }
        if (tmp14) {
          class I {
            constructor() {
              return constants.DESKTOP;
            }
          }
          CONSOLE = constants.CONSOLE;
        }
      }
      if (cResult[18] === CONSOLE) {
        class I {
          constructor() {
            return constants.DESKTOP;
          }
        }
      }
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
        cResult[24] = M;
      } else {
        class M {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
      }
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.DESKTOP;
          }
        }
        cResult[25] = L;
      } else {
        class L {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.DESKTOP;
          }
        }
      }
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
        cResult[26] = N;
      } else {
        class N {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
      }
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
        cResult[27] = tmp45;
      } else {
        class N {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
      }
      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
        cResult[28] = H;
      } else {
        class H {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.CONSOLE;
          }
        }
      }
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.DESKTOP;
          }
        }
        cResult[29] = B;
      } else {
        class B {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.DESKTOP;
          }
        }
      }
      if (cResult[30] === tmp10) {
        class B {
          constructor() {
            return closure_0(dependencyMap[47]).TaskPlatformScreen.DESKTOP;
          }
        }
        const obj12 = { lastPlatformProgress: tmp15, currentProgressingPlatform: CONSOLE, selectedPlatform: tmp5 };
        const str3 = require("merged5");
        const match1 = str3.match(obj12);
        const obj13 = { currentProgressingPlatform: constants.CONSOLE };
        const obj14 = { currentProgressingPlatform: constants.DESKTOP };
        const obj15 = { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE };
        const withResult1 = match1.with(obj13, M);
        const obj16 = { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP };
        const withResult2 = withResult1.with(obj14, L);
        const obj17 = {
          currentProgressingPlatform: null,
          lastPlatformProgress: null,
          selectedPlatform: constants.CONSOLE,
        };
        const withResult3 = withResult2.with(obj15, N);
        const obj18 = {
          currentProgressingPlatform: null,
          lastPlatformProgress: null,
          selectedPlatform: constants.DESKTOP,
        };
        const withResult4 = withResult3.with(obj16, tmp45);
        const withResult5 = withResult4.with(obj17, H);
        const withResult6 = withResult5.with(obj18, B);
        const withResult7 = withResult6.with(
          { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
          fn2,
        );
        cResult[18] = CONSOLE;
        cResult[19] = tmp10;
        cResult[20] = tmp7;
        cResult[21] = tmp15;
        cResult[22] = tmp5;
        cResult[23] = withResult7.exhaustive();
        const exhaustiveResult1 = withResult7.exhaustive();
      }
      fn2 = function q() {
        if (closure_1) {
          let SELECT;
          if (closure_0) {
            SELECT = QuestTypes.TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = QuestTypes.TaskPlatformScreen;
        SELECT = closure_1 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
      };
      cResult[30] = tmp10;
      cResult[31] = tmp7;
      cResult[32] = fn2;
    }
  : (id, arg1) => {
      let DESKTOP;
      let hasItem1;
      let memo1;
      let closure_0 = id;
      let closure_1 = arg1;
      const tmp = hasItem1(closure_58(id.id), 2);
      const selectedPlatform = tmp[0];
      let obj = memo1;
      const items = [id];
      const tmp3 = tmp[1];
      const memo = memo1.useMemo(() => {
        const obj = QuestPlatformUtils;
        return obj.supportedTaskPlatforms(id);
      }, items);
      const hasItem = memo.includes(constants.DESKTOP);
      hasItem1 = memo.includes(constants.CONSOLE);
      const items1 = [arg1];
      const tmp7 = closure_48(id);
      const tmp8 = closure_49(id);
      memo1 = memo1.useMemo(() => {
        const str = merged5;
        const match = str.match(closure_1);
        const withResult = match.with({ percentComplete: 0 }, () => null);
        const obj = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
        const withResult1 = withResult.with(obj, () => constants.DESKTOP);
        obj2 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
        const withResult2 = withResult1.with(obj2, () => constants.DESKTOP);
        const obj3 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO };
        const withResult3 = withResult2.with(obj3, () => constants.DESKTOP);
        const obj4 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
        const withResult4 = withResult3.with(obj4, () => constants.DESKTOP);
        const obj5 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
        const withResult5 = withResult4.with(obj5, () => constants.DESKTOP);
        const obj6 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
        const withResult6 = withResult5.with(obj6, () => constants.CONSOLE);
        const obj7 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
        const withResult7 = withResult6.with(obj7, () => constants.CONSOLE);
        const obj8 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
        const withResult8 = withResult7.with(obj8, () => constants.DESKTOP);
        const obj9 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
        const withResult9 = withResult8.with(obj9, () => constants.DESKTOP);
        return withResult9.exhaustive();
      }, items1);
      if (tmp7) {
        DESKTOP = constants.DESKTOP;
      } else {
        DESKTOP = null;
        if (tmp8) {
          DESKTOP = constants.CONSOLE;
        }
      }
      const items2 = [hasItem1, hasItem, memo1, DESKTOP, selectedPlatform];
      const items3 = [
        obj.useMemo(() => {
          const obj = { lastPlatformProgress: memo1, currentProgressingPlatform: DESKTOP, selectedPlatform };
          const str = merged5;
          const match = str.match(obj);
          obj2 = { currentProgressingPlatform: constants.CONSOLE };
          const obj3 = { currentProgressingPlatform: constants.DESKTOP };
          const obj4 = { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE };
          const withResult = match.with(obj2, () => id(selectedPlatform[47]).TaskPlatformScreen.CONSOLE);
          const obj5 = { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP };
          const withResult1 = withResult.with(obj3, () => id(selectedPlatform[47]).TaskPlatformScreen.DESKTOP);
          const obj6 = {
            currentProgressingPlatform: null,
            lastPlatformProgress: null,
            selectedPlatform: constants.CONSOLE,
          };
          const withResult2 = withResult1.with(obj4, () => id(selectedPlatform[47]).TaskPlatformScreen.CONSOLE);
          const obj7 = {
            currentProgressingPlatform: null,
            lastPlatformProgress: null,
            selectedPlatform: constants.DESKTOP,
          };
          const withResult3 = withResult2.with(obj5, () => id(selectedPlatform[47]).TaskPlatformScreen.DESKTOP);
          const withResult4 = withResult3.with(obj6, () => id(selectedPlatform[47]).TaskPlatformScreen.CONSOLE);
          const withResult5 = withResult4.with(obj7, () => id(selectedPlatform[47]).TaskPlatformScreen.DESKTOP);
          const withResult6 = withResult5.with(
            { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null },
            () => {
              if (hasItem1) {
                let SELECT;
                if (hasItem) {
                  SELECT = id(first[47]).TaskPlatformScreen.SELECT;
                }
                return SELECT;
              }
              const TaskPlatformScreen = id(first[47]).TaskPlatformScreen;
              SELECT = hasItem1 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
            },
          );
          return withResult6.exhaustive();
        }, items2),
        memo,
        tmp3,
      ];
      return items3;
    };
let closure_59 = tmp31;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userStatus) => {
      const obj = react2;
      const cResult = obj.c(14);
      const tmp4 = closure_53(userStatus);
      const tmp5 = closure_52(userStatus);
      const first = _slicedToArray(closure_59(userStatus, tmp5), 1)[0];
      userStatus = userStatus.userStatus;
      let enrolledAt;
      const tmp7 = closure_47(userStatus);
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      let tmp9 = null != enrolledAt;
      const userStatus2 = userStatus.userStatus;
      if (userStatus2 != null) {
        const completedAt = userStatus2.completedAt;
      }
      if (cResult[0] === tmp5.percentComplete) {
        let tmp11;
        if (cResult[1] === tmp5.taskType) {
          tmp11 = cResult[2];
        }
        const percentComplete = tmp5.percentComplete;
        if (tmp9) {
          tmp9 = !tmp10;
        }
        if (tmp9) {
          tmp9 = !tmp7;
        }
        if (tmp9) {
          tmp9 = null == tmp4;
        }
        if (tmp9) {
          if (!tmp11) {
            tmp11 = 0 === percentComplete && first === QuestTypes.TaskPlatformScreen.DESKTOP;
            0 === percentComplete && first === QuestTypes.TaskPlatformScreen.DESKTOP;
          }
          tmp9 = tmp11;
        }
        if (cResult[3] === tmp9) {
          let tmp14;
          if (cResult[4] === userStatus) {
            tmp14 = cResult[5];
          }
          if (cResult[6] === tmp9) {
            let tmp16;
            if (cResult[7] === tmp5.taskType) {
              tmp16 = cResult[8];
            }
            if (cResult[9] === tmp16) {
              let tmp18;
              if (cResult[10] === tmp14) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
            const items = [];
            if (tmp16) {
              let tmp20;
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl7.intl;
                const stringResult = intl.string(intl7.t.MFGxFM);
                cResult[12] = stringResult;
                tmp20 = stringResult;
              } else {
                tmp20 = cResult[12];
              }
              items.push(tmp20);
            }
            if (tmp14) {
              let tmp24;
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = intl7.intl;
                const stringResult1 = intl2.string(intl7.t.BV6xDm);
                cResult[13] = stringResult1;
                tmp24 = stringResult1;
              } else {
                tmp24 = cResult[13];
              }
              items.push(tmp24);
            }
            cResult[9] = tmp16;
            cResult[10] = tmp14;
            cResult[11] = items;
            tmp18 = items;
          }
          const tmpResult = PlatformUtils;
          const isMacResult =
            tmpResult.isMac() &&
            tmp5.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP &&
            tmp9;
          cResult[6] = tmp9;
          cResult[7] = tmp5.taskType;
          cResult[8] = isMacResult;
          tmp16 = isMacResult;
        }
        const tmpResult3 = PlatformUtils;
        let tmp15 = tmpResult3.isWeb() && tmp9;
        if (tmp15) {
          const tmpResult4 = QuestPlatformUtils;
          tmp15 = !tmpResult4.isQuestSupportedOnWeb(userStatus);
        }
        cResult[3] = tmp9;
        cResult[4] = userStatus;
        cResult[5] = tmp15;
        tmp14 = tmp15;
      }
      const DESKTOP = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.DESKTOP;
      const hasItem = DESKTOP.has(tmp5.taskType) && tmp5.percentComplete > 0;
      ({ percentComplete: tmp3[0], taskType: tmp3[1] } = tmp5);
      cResult[2] = hasItem;
      tmp11 = hasItem;
    }
  : (userStatus) => {
      const tmp = closure_53(userStatus);
      const tmp2 = closure_52(userStatus);
      const first = _slicedToArray(closure_59(userStatus, tmp2), 1)[0];
      userStatus = userStatus.userStatus;
      let enrolledAt;
      const tmp4 = closure_47(userStatus);
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      let tmp6 = null != enrolledAt;
      const userStatus2 = userStatus.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      const tmp8 = null != completedAt;
      const DESKTOP = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.DESKTOP;
      let hasItem = DESKTOP.has(tmp2.taskType) && tmp2.percentComplete > 0;
      const percentComplete = tmp2.percentComplete;
      if (tmp6) {
        tmp6 = !tmp8;
      }
      if (tmp6) {
        tmp6 = !tmp4;
      }
      if (tmp6) {
        tmp6 = null == tmp;
      }
      if (tmp6) {
        if (!hasItem) {
          hasItem = 0 === percentComplete && first === QuestTypes.TaskPlatformScreen.DESKTOP;
          0 === percentComplete && first === QuestTypes.TaskPlatformScreen.DESKTOP;
        }
        tmp6 = hasItem;
      }
      const tmp9Result = PlatformUtils;
      let tmp13 = tmp9Result.isWeb() && tmp6;
      if (tmp13) {
        const tmp9Result3 = QuestPlatformUtils;
        tmp13 = !tmp9Result3.isQuestSupportedOnWeb(userStatus);
      }
      const tmp9Result4 = PlatformUtils;
      const items = [];
      const isMacResult =
        tmp9Result4.isMac() &&
        tmp2.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP &&
        tmp6;
      if (isMacResult) {
        const push = items.push;
        const intl = intl7.intl;
        push(intl.string(intl7.t.MFGxFM));
      }
      if (tmp13) {
        const push2 = items.push;
        const intl2 = intl7.intl;
        push2(intl2.string(intl7.t.BV6xDm));
      }
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp33 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let quests;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === arg0) {
        let tmp7;
        if (cResult[3] === stateFromStores) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      let value = stateFromStores.get(arg0);
      if (value == null) {
        value = null;
      }
      cResult[2] = arg0;
      cResult[3] = stateFromStores;
      cResult[4] = value;
      tmp7 = value;
    }
  : (arg0) => {
      let quests;
      const items = [QuestStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
      let value = stateFromStores.get(arg0);
      if (value == null) {
        value = null;
      }
      return value;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questId, arg1) => {
      let stateFromStores;
      _require = questId;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(5);
      obj2 = require("get initialized");
      let items = [QuestStore];
      const items1 = [questId];
      stateFromStores = obj2.useStateFromStores(items, () => QuestStore.getQuest(questId), items1);
      if (stateFromStores == null) {
        stateFromStores = null;
      }
      if (cResult[0] === arg1) {
        if (cResult[1] === stateFromStores) {
          let tmp3;
          let tmp4;
          if (cResult[2] === questId) {
            tmp3 = cResult[3];
            tmp4 = cResult[4];
          }
          const effect = react.useEffect(tmp3, tmp4);
          return stateFromStores;
        }
      }
      const fn = function o() {
        let obj3;
        if (null == stateFromStores) {
          const quests = QuestStore.quests;
          const items = [];
          HermesBuiltin.arraySpread(items, quests.keys(), 0);
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const captureQuestsException = QuestDataUtils.captureQuestsException;
          const self = this;
          const self2 = this;
          QuestDataUtils;
          const error = new Error("Quest unexpectedly missing from store: " + questId);
          const obj = { tags: { source: "useNonNullableQuest" }, extra: obj3 };
          obj3 = {
            questId,
            storeQuestIds: items,
            storeSize: items.length,
            isFetchingCurrentQuests: null,
            lastFetchedCurrentQuests: null,
          };
          ({
            isFetchingCurrentQuests: obj2.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: obj2.lastFetchedCurrentQuests,
          } = QuestStore);
          const result = captureQuestsException(error, obj);
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
    }
  : (questId, arg1) => {
      let stateFromStores;
      _require = questId;
      let closure_1 = arg1;
      let obj = require("get initialized");
      let items = [QuestStore];
      const items1 = [questId];
      stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId), items1);
      if (stateFromStores == null) {
        stateFromStores = null;
      }
      const items2 = [stateFromStores, questId, arg1];
      const effect = react.useEffect(function () {
        let obj3;
        if (null == stateFromStores) {
          const quests = QuestStore.quests;
          const items = [];
          HermesBuiltin.arraySpread(items, quests.keys(), 0);
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const captureQuestsException = QuestDataUtils.captureQuestsException;
          const self = this;
          const self2 = this;
          QuestDataUtils;
          const error = new Error("Quest unexpectedly missing from store: " + questId);
          const obj = { tags: { source: "useNonNullableQuest" }, extra: obj3 };
          obj3 = {
            questId,
            storeQuestIds: items,
            storeSize: items.length,
            isFetchingCurrentQuests: null,
            lastFetchedCurrentQuests: null,
          };
          ({
            isFetchingCurrentQuests: obj2.isFetchingCurrentQuests,
            lastFetchedCurrentQuests: obj2.lastFetchedCurrentQuests,
          } = QuestStore);
          const result = captureQuestsException(error, obj);
          if (closure_1 != null) {
            closure_1();
          }
        }
      }, items2);
      return stateFromStores;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp35 = ReactCompilerGating.isReactCompilerEnabled()
  ? (mode) => {
      let adContentId;
      let closure_2;
      let closure_6;
      let closure_7;
      let ref;
      let tmp4;
      let obj = require("react");
      const cResult = obj.c(19);
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
        tmp4 = tmp7;
      } else {
        _require = cResult[1];
        adCreativeType = cResult[2];
        dependencyMap = cResult[3];
      }
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === questContent) {
            if (cResult[7] === tmp4) {
              let tmp8;
              if (cResult[8] === sourceQuestContent) {
                tmp8 = cResult[9];
              }
              AdDeliveryStore = tmp8;
              if (tmp4 == null) {
                tmp4 = tmp5;
              }
              LocaleStore = tmp4;
              obj2 = sourceQuestContent;
              ChannelStore = sourceQuestContent.useRef(null);
              if (cResult[10] === tmp4) {
                if (cResult[11] === mode) {
                  let tmp10;
                  let tmp11;
                  if (cResult[12] === tmp8) {
                    tmp10 = cResult[13];
                    tmp11 = cResult[14];
                  }
                  const effect = obj2.useEffect(tmp10, tmp11);
                  if (cResult[15] === tmp4) {
                    let tmp13;
                    let tmp14;
                    if (cResult[16] === tmp8) {
                      tmp13 = cResult[17];
                      tmp14 = cResult[18];
                    }
                    const effect1 = obj2.useEffect(tmp13, tmp14);
                  }
                  class C {
                    constructor() {
                      return null != closure_7
                        ? () => {
                            closure_1_6(null, ref.current);
                          }
                        : undefined;
                    }
                  }
                  const items = [tmp4, tmp8];
                  class E {
                    constructor() {
                      const tmp = null != LocaleStore && ref.current !== mode;
                      if (tmp) {
                        closure_6(mode, ref.current);
                        ref.current = mode;
                      }
                    }
                  }
                  cResult[16] = tmp8;
                  cResult[17] = C;
                  cResult[18] = items;
                  tmp14 = items;
                  tmp13 = C;
                }
              }
              class E {
                constructor() {
                  const tmp = null != LocaleStore && ref.current !== mode;
                  if (tmp) {
                    closure_6(mode, ref.current);
                    ref.current = mode;
                  }
                }
              }
              const items1 = [mode, tmp4, tmp8];
              cResult[10] = tmp4;
              cResult[11] = mode;
              cResult[12] = tmp8;
              cResult[13] = E;
              cResult[14] = items1;
              tmp11 = items1;
              tmp10 = E;
            }
          }
        }
      }
      const fn = function a(mode, prevMode) {
        if (null != closure_2) {
          obj2 = { mode, prevMode, questContent, questId: tmp, sourceQuestContent };
          const obj3 = AnalyticsActions;
          const result = obj3.trackQuestContentQuestBarOrDockModeChange(obj2);
        } else {
          const tmp3 = null != adContentId && null != adCreativeType;
          if (tmp3) {
            const obj4 = { adContentId, adCreativeType, mode, prevMode, questContent, sourceQuestContent };
            const obj = AnalyticsActions;
            const result1 = obj.trackAdContentQuestBarOrDockModeChange(obj4);
          }
        }
      };
      cResult[4] = tmp5;
      cResult[5] = tmp6;
      cResult[6] = questContent;
      cResult[7] = tmp4;
      cResult[8] = sourceQuestContent;
      cResult[9] = fn;
      tmp8 = fn;
    }
  : (mode) => {
      let closure_7;
      let tmp;
      let tmp3;
      mode = mode.mode;
      const questContent = mode.questContent;
      const sourceQuestContent = mode.sourceQuestContent;
      if ("questId" in mode) {
        const questId = mode.questId;
        tmp3 = questId;
      } else {
        const adContentId = mode.adContentId;
        const adCreativeType = mode.adCreativeType;
      }
      let obj = sourceQuestContent;
      const items = [questContent, sourceQuestContent, tmp3, tmp, tmp2];
      const callback = sourceQuestContent.useCallback((mode, prevMode) => {
        if (null != questId) {
          obj2 = { mode, prevMode, questContent, questId: tmp, sourceQuestContent };
          const obj3 = AnalyticsActions;
          const result = obj3.trackQuestContentQuestBarOrDockModeChange(obj2);
        } else {
          const tmp3 = null != adContentId && null != adCreativeType;
          if (tmp3) {
            const obj4 = { adContentId, adCreativeType, mode, prevMode, questContent, sourceQuestContent };
            const obj = AnalyticsActions;
            const result1 = obj.trackAdContentQuestBarOrDockModeChange(obj4);
          }
        }
      }, items);
      if (tmp3 == null) {
        tmp3 = tmp;
      }
      LocaleStore = tmp3;
      const ref = obj.useRef(null);
      const items1 = [mode, tmp3, callback];
      const effect = obj.useEffect(() => {
        const tmp = null != LocaleStore && ref.current !== mode;
        if (tmp) {
          callback(mode, ref.current);
          ref.current = mode;
        }
      }, items1);
      const items2 = [tmp3, callback];
      const effect1 = obj.useEffect(
        () =>
          null != LocaleStore
            ? () => {
                callback(null, ref.current);
              }
            : undefined,
        items2,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, DARK) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      let tmp10 = null;
      if (null != stateFromStores) {
        let tmp11 = DARK;
        if (DARK == null) {
          const tmpResult3 = require("shared");
          tmp11 = tmpResult3.isThemeDark(tmp9) ? constants3.DARK : constants3.LIGHT;
        }
        if (cResult[4] === stateFromStores) {
          let tmp13;
          if (cResult[5] === tmp11) {
            tmp13 = cResult[6];
          }
          tmp10 = tmp13;
        }
        const tmpResult4 = require("AssetUtils");
        const questAsset = tmpResult4.getQuestAsset(
          stateFromStores,
          tmp(10000).QuestAssetType.COSPONSOR_LOGO_TYPE,
          tmp11,
        );
        cResult[4] = stateFromStores;
        cResult[5] = tmp11;
        cResult[6] = questAsset;
        tmp13 = questAsset;
      }
      return tmp10;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let stateFromStores;
      _require = arg0;
      importDefault = arg1;
      let obj = require("get initialized");
      const items = [QuestStore];
      const items1 = [arg0];
      stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(closure_0), items1);
      const tmp2 = require("useTheme")();
      let closure_3 = tmp2;
      const items2 = [tmp2, arg1, stateFromStores];
      return react.useMemo(() => {
        if (null == stateFromStores) {
          return null;
        } else {
          let tmp6 = closure_1;
          if (closure_1 == null) {
            const obj = shared;
            tmp6 = obj.isThemeDark(closure_3) ? prioritySpeakerDucking.DARK : prioritySpeakerDucking.LIGHT;
          }
          obj2 = AssetUtils;
          return obj2.getQuestAsset(tmp, AssetUtils.QuestAssetType.COSPONSOR_LOGO_TYPE, tmp6);
        }
      }, items2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp37 = ReactCompilerGating.isReactCompilerEnabled()
  ? (config) => {
      let currentUser;
      let formatToPlainStringResult5;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === stateFromStores) {
        let tmp8;
        let tmp9;
        if (cResult[3] === config) {
          tmp8 = cResult[4];
          tmp9 = cResult[5];
        }
        const _Symbol = Symbol;
        if (tmp9 !== Symbol.for("react.early_return_sentinel")) {
          tmp8 = tmp9;
        }
        return tmp8;
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      const tmpResult7 = QuestRewardUtils;
      const defaultRewardName = tmpResult7.getDefaultRewardName(config, stateFromStores);
      const tmpResult8 = QuestRewardUtils;
      const collectibleQuestRewardDuration = tmpResult8.getCollectibleQuestRewardDuration(config);
      const tmpResult9 = QuestRewardUtils;
      const collectibleQuestRewardExtendableExpirationDate =
        tmpResult9.getCollectibleQuestRewardExtendableExpirationDate(config);
      const tmpResult10 = QuestRewardUtils;
      const result = tmpResult10.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
      const tmpResult11 = QuestRewardUtils;
      const result1 = tmpResult11.isCollectibleQuestRewardPremiumExtendable(config);
      const tmpResult12 = PremiumUtils;
      const isPremiumResult = tmpResult12.isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (null != collectibleQuestRewardDuration) {
        const intl2 = intl7.intl;
        obj2 = { rewardName: defaultRewardName };
        const formatToPlainStringResult = intl2.formatToPlainString(intl7.t.o97tNn, obj2);
        const intl3 = intl7.intl;
        const obj3 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
        const formatToPlainStringResult1 = intl3.formatToPlainString(intl7.t.PkyRZo, obj3);
        const intl4 = intl7.intl;
        const obj4 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
        let formatToPlainStringResult2 = intl4.formatToPlainString(intl7.t.ie4YK0, obj4);
        const intl5 = intl7.intl;
        const obj5 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
        let formatToPlainStringResult3 = intl5.formatToPlainString(intl7.t.yCpc0U, obj5);
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
          const intl6 = intl7.intl;
          const obj6 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
          intl6.formatToPlainString(intl7.t.tTlItm, obj6);
        }
        formatToPlainStringResult5 = forResult;
      } else {
        const intl = intl7.intl;
        const obj7 = { decorationName: defaultRewardName };
        formatToPlainStringResult5 = intl.formatToPlainString(intl7.t.l9uXL8, obj7);
      }
      cResult[2] = stateFromStores;
      cResult[3] = config;
      cResult[4] = tmp18;
      cResult[5] = formatToPlainStringResult5;
      tmp9 = formatToPlainStringResult5;
      tmp8 = tmp18;
    }
  : (config) => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      obj2 = QuestRewardUtils;
      const defaultRewardName = obj2.getDefaultRewardName(config, stateFromStores);
      const obj3 = QuestRewardUtils;
      const collectibleQuestRewardDuration = obj3.getCollectibleQuestRewardDuration(config);
      const obj4 = QuestRewardUtils;
      const collectibleQuestRewardExtendableExpirationDate =
        obj4.getCollectibleQuestRewardExtendableExpirationDate(config);
      const obj5 = QuestRewardUtils;
      const result = obj5.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
      const obj6 = QuestRewardUtils;
      const result1 = obj6.isCollectibleQuestRewardPremiumExtendable(config);
      const obj7 = PremiumUtils;
      const isPremiumResult = obj7.isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (null == collectibleQuestRewardDuration) {
        const intl2 = intl7.intl;
        const obj8 = { decorationName: defaultRewardName };
        return intl2.formatToPlainString(intl7.t.l9uXL8, obj8);
      } else {
        let formatToPlainStringResult4;
        const intl3 = intl7.intl;
        const obj9 = { rewardName: defaultRewardName };
        const formatToPlainStringResult = intl3.formatToPlainString(intl7.t.o97tNn, obj9);
        const intl4 = intl7.intl;
        const obj10 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
        const formatToPlainStringResult1 = intl4.formatToPlainString(intl7.t.PkyRZo, obj10);
        const intl5 = intl7.intl;
        const obj11 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
        let formatToPlainStringResult2 = intl5.formatToPlainString(intl7.t.ie4YK0, obj11);
        const intl6 = intl7.intl;
        const obj12 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
        let formatToPlainStringResult3 = intl6.formatToPlainString(intl7.t.yCpc0U, obj12);
        if (result1) {
          if (result) {
            if (isPremiumResult) {
              formatToPlainStringResult2 = formatToPlainStringResult;
            }
            formatToPlainStringResult3 = formatToPlainStringResult2;
          } else if (isPremiumResult) {
            formatToPlainStringResult3 = formatToPlainStringResult1;
          }
          formatToPlainStringResult4 = formatToPlainStringResult3;
        } else {
          const intl = intl7.intl;
          const obj13 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
          formatToPlainStringResult4 = intl.formatToPlainString(intl7.t.tTlItm, obj13);
        }
        return formatToPlainStringResult4;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp38 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let tmp4;
      let tmp6;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] !== quest) {
        const tmpResult = QuestTaskUtils;
        const activityApplicationId = tmpResult.getActivityApplicationId(quest);
        cResult[0] = quest;
        cResult[1] = activityApplicationId;
        tmp4 = activityApplicationId;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        obj2 = { applicationId: tmp4 };
        cResult[2] = tmp4;
        cResult[3] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[3];
      }
      const tmp7 = useRefocusOrLaunchActivityDefault(tmp6);
      if (cResult[4] !== tmp7) {
        const obj3 = { launchInGameActivity: tmp7 };
        cResult[4] = tmp7;
        cResult[5] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  : (quest) => {
      let activityApplicationId;
      obj2 = { launchInGameActivity: useRefocusOrLaunchActivityDefault({ applicationId: activityApplicationId }) };
      const obj = QuestTaskUtils;
      activityApplicationId = obj.getActivityApplicationId(quest);
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp39 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(5);
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
      const tmpResult = get_initialized;
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresArray) {
        let tmp8;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function u(preview) {
            return preview.preview;
          };
          cResult[4] = fn2;
          tmp8 = fn2;
        } else {
          tmp8 = cResult[4];
        }
        const someResult = stateFromStoresArray.some(tmp8);
        cResult[2] = stateFromStoresArray;
        cResult[3] = someResult;
        tmp7 = someResult;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : () => {
      let items = [QuestStore];
      const obj = get_initialized;
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        quests = quests.quests;
        const items = [...quests.values()];
        return items;
      });
      return stateFromStoresArray.some((preview) => preview.preview);
    };
let closure_60 = tmp39;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp41 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userStatus) => {
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(5);
      if (cResult[0] !== userStatus) {
        let userStatus1;
        if (userStatus != null) {
          userStatus1 = userStatus.userStatus;
        }
        let isDismissedResult = null != userStatus1;
        if (isDismissedResult) {
          const tmpResult = QuestDataUtils;
          isDismissedResult = tmpResult.isDismissed(userStatus.userStatus, QuestTypes.QuestContent.ACTIVITY_PANEL);
        }
        cResult[0] = userStatus;
        cResult[1] = isDismissedResult;
        tmp4 = isDismissedResult;
      } else {
        tmp4 = cResult[1];
      }
      let tmp9 = userStatus;
      if (userStatus == null) {
        tmp9 = null;
      }
      let claimedAt;
      const tmp8Result = closure_47(tmp9);
      if (userStatus != null) {
        userStatus = userStatus.userStatus;
        if (userStatus != null) {
          claimedAt = userStatus.claimedAt;
        }
      }
      const tmp12 = null != claimedAt;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        const fn = function u() {
          return null != QuestStore.questEnrollmentBlockedUntil;
        };
        const items1 = [];
        cResult[2] = items;
        cResult[3] = fn;
        cResult[4] = items1;
        tmp15 = items1;
        tmp14 = fn;
        tmp13 = items;
      } else {
        tmp13 = cResult[2];
        tmp14 = cResult[3];
        tmp15 = cResult[4];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores = tmpResult2.useStateFromStores(tmp13, tmp14, tmp15);
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
    }
  : (userStatus) => {
      let userStatus1;
      if (userStatus != null) {
        userStatus1 = userStatus.userStatus;
      }
      let isDismissedResult = null != userStatus1;
      if (isDismissedResult) {
        const obj = QuestDataUtils;
        isDismissedResult = obj.isDismissed(userStatus.userStatus, QuestTypes.QuestContent.ACTIVITY_PANEL);
      }
      let tmp6 = userStatus;
      if (userStatus == null) {
        tmp6 = null;
      }
      let claimedAt;
      const tmp5Result = closure_47(tmp6);
      if (userStatus != null) {
        userStatus = userStatus.userStatus;
        if (userStatus != null) {
          claimedAt = userStatus.claimedAt;
        }
      }
      const items = [QuestStore];
      const tmp9 = null != claimedAt;
      obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => null != QuestStore.questEnrollmentBlockedUntil, []);
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp42 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(5);
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
      const tmpResult = get_initialized;
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresArray) {
        let tmp8;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function u(preview) {
            return preview.preview;
          };
          cResult[4] = fn2;
          tmp8 = fn2;
        } else {
          tmp8 = cResult[4];
        }
        const found = stateFromStoresArray.filter(tmp8);
        cResult[2] = stateFromStoresArray;
        cResult[3] = found;
        tmp7 = found;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : () => {
      let stateFromStoresArray;
      let items = [QuestStore];
      const obj = stateFromStoresArray(504);
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        quests = quests.quests;
        const items = [...quests.values()];
        return items;
      });
      const items1 = [stateFromStoresArray];
      return react.useMemo(() => stateFromStoresArray.filter((preview) => preview.preview), items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp43 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const mapped = authStore4.map((item) => {
          let tmp2;
          let tmp3;
          const obj = { heading: obj2.getFilterGroupHeadingText(tmp2), options: tmp3 };
          [tmp2, tmp3] = item;
          _slicedToArray(item, 2);
          obj2 = require("QuestCopyUtils");
          return obj;
        });
        cResult[0] = mapped;
        first = mapped;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let closure_0 = closure_18;
      const items = [closure_18];
      return react.useMemo(
        () =>
          closure_0.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            const obj = { heading: obj2.getFilterGroupHeadingText(tmp), options: tmp2 };
            obj2 = closure_1_0(closure_1_2[40]);
            return obj;
          }),
        items,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp44 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp4;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const _Object = Object;
        const keys = Object.keys(closure_17);
        cResult[0] = keys;
        first = keys;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const mapped = first.map((item) => {
          const obj = { label: obj2.getSortMethodText(constants3[item]), value: constants3[item] };
          obj2 = require("QuestCopyUtils");
          return obj;
        });
        cResult[1] = mapped;
        tmp4 = mapped;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () =>
      react.useMemo(() => {
        const keys = Object.keys(constants3);
        return keys.map((item) => {
          const obj = { label: obj2.getSortMethodText(closure_1_17[item]), value: closure_1_17[item] };
          obj2 = closure_1_0(closure_1_2[40]);
          return obj;
        });
      }, []);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp45 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedSortMethod) => {
      let numQuestsVisible;
      let tmp2;
      let tmp3;
      let obj = selectedSortMethod(numQuestsVisible[15]);
      const cResult = obj.c(7);
      selectedSortMethod = selectedSortMethod.selectedSortMethod;
      const selectedFilters = selectedSortMethod.selectedFilters;
      numQuestsVisible = selectedSortMethod.numQuestsVisible;
      const ref = react.useRef(null);
      const ref2 = react.useRef(null);
      if (cResult[0] !== selectedSortMethod) {
        const fn = function s() {
          const obj = AnalyticsUtilsDefault;
          obj2 = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
          obj.track(constants.QUEST_HOME_SORT_METHOD_CHANGED, obj2);
          ref.current = selectedSortMethod;
        };
        const items = [selectedSortMethod];
        cResult[0] = selectedSortMethod;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
      if (cResult[3] === numQuestsVisible) {
        let tmp5;
        let tmp6;
        if (cResult[4] === selectedFilters) {
          tmp5 = cResult[5];
          tmp6 = cResult[6];
        }
        const effect1 = react.useEffect(tmp5, tmp6);
      }
      const fn2 = function u() {
        let current;
        const mapped = selectedFilters.map((item) => item.filter);
        const obj = { filters: mapped, previous_filters: current, num_quests_visible: numQuestsVisible };
        current = ref2.current;
        const track = AnalyticsUtilsDefault.track;
        const QUEST_HOME_FILTERS_CHANGED = constants.QUEST_HOME_FILTERS_CHANGED;
        AnalyticsUtilsDefault;
        if (current == null) {
          current = [];
        }
        track(QUEST_HOME_FILTERS_CHANGED, obj);
        ref2.current = mapped;
      };
      const items1 = [selectedFilters, numQuestsVisible];
      cResult[3] = numQuestsVisible;
      cResult[4] = selectedFilters;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp6 = items1;
      tmp5 = fn2;
    }
  : (selectedSortMethod) => {
      selectedSortMethod = selectedSortMethod.selectedSortMethod;
      const selectedFilters = selectedSortMethod.selectedFilters;
      const numQuestsVisible = selectedSortMethod.numQuestsVisible;
      const ref = react.useRef(null);
      const ref2 = react.useRef(null);
      const items = [selectedSortMethod];
      const effect = react.useEffect(() => {
        const obj = AnalyticsUtilsDefault;
        obj2 = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
        obj.track(constants.QUEST_HOME_SORT_METHOD_CHANGED, obj2);
        ref.current = selectedSortMethod;
      }, items);
      const items1 = [selectedFilters, numQuestsVisible];
      const effect1 = react.useEffect(() => {
        let current;
        const mapped = selectedFilters.map((item) => item.filter);
        const obj = { filters: mapped, previous_filters: current, num_quests_visible: numQuestsVisible };
        current = ref2.current;
        const track = AnalyticsUtilsDefault.track;
        const QUEST_HOME_FILTERS_CHANGED = constants.QUEST_HOME_FILTERS_CHANGED;
        AnalyticsUtilsDefault;
        if (current == null) {
          current = [];
        }
        track(QUEST_HOME_FILTERS_CHANGED, obj);
        ref2.current = mapped;
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp46 = ReactCompilerGating.isReactCompilerEnabled()
  ? (preview) => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const currentUser = UserStore.getCurrentUser();
        let isStaffResult;
        if (currentUser != null) {
          isStaffResult = currentUser.isStaff();
        }
        cResult[0] = isStaffResult;
        first = isStaffResult;
      } else {
        first = cResult[0];
      }
      preview = true === first || preview.preview;
      return preview;
    }
  : (preview) => {
      preview =
        react.useMemo(() => {
          currentUser = currentUser.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          return true === isStaffResult;
        }, []) || preview.preview;
      return preview;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp47 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questIds) => {
      let quests;
      let stateFromStores;
      let tmp4;
      let tmp5;
      let tmp9;
      let obj = stateFromStores(576);
      const cResult = obj.c(12);
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
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      questIds = undefined;
      if (questIds != null) {
        questIds = questIds.questIds;
      }
      if (null != questIds) {
        if (cResult[3] === questIds) {
          let arr2;
          if (cResult[4] === stateFromStores) {
            arr2 = cResult[5];
          }
          if (arr2.length <= 1) {
            let tmp16;
            const _Symbol2 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              obj2 = { shelfQuests: [], isShelfEnabled: false };
              cResult[9] = obj2;
              tmp16 = obj2;
            } else {
              tmp16 = cResult[9];
            }
            tmp9 = tmp16;
          } else {
            let tmp15;
            if (cResult[10] !== arr2) {
              const obj3 = { shelfQuests: arr2, isShelfEnabled: true };
              cResult[10] = arr2;
              cResult[11] = obj3;
              tmp15 = obj3;
            } else {
              tmp15 = cResult[11];
            }
            tmp9 = tmp15;
          }
        }
        if (cResult[6] !== stateFromStores) {
          class S {
            constructor(arg0) {
              return stateFromStores.get(arg0);
            }
          }
          cResult[6] = stateFromStores;
          cResult[7] = S;
        } else {
          class S {
            constructor(arg0) {
              return stateFromStores.get(arg0);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return stateFromStores.get(arg0);
            }
          }
          cResult[8] = tmp13;
        } else {
          class S {
            constructor(arg0) {
              return stateFromStores.get(arg0);
            }
          }
        }
        const mapped = questIds.map(S);
        const found = mapped.filter(tmp(1375).isNotNullish);
        const found1 = found.filter(tmp13);
        cResult[3] = questIds;
        cResult[4] = stateFromStores;
        cResult[5] = found1;
        arr2 = found1;
      } else {
        class S {
          constructor(arg0) {
            return stateFromStores.get(arg0);
          }
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0) {
              return stateFromStores.get(arg0);
            }
          }
          tmp10[0] = [];
          cResult[2] = tmp10;
          tmp9 = tmp10;
        } else {
          class S {
            constructor(arg0) {
              return stateFromStores.get(arg0);
            }
          }
        }
      }
      return tmp9;
    }
  : (questIds) => {
      let quests;
      let stateFromStores;
      let obj = stateFromStores(504);
      const items = [QuestStore];
      stateFromStores = obj.useStateFromStores(items, () => quests.quests);
      questIds = undefined;
      if (questIds != null) {
        questIds = questIds.questIds;
      }
      const items1 = [stateFromStores, questIds];
      return react.useMemo(() => {
        if (null == questIds) {
          return { shelfQuests: [], isShelfEnabled: false };
        } else {
          let obj;
          const mapped = questIds.map((item) => stateFromStores.get(item));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((item) => {
            const obj = stateFromStores(closure_1_2[21]);
            return !obj.isQuestExpired(item);
          });
          if (found1.length <= 1) {
            obj = { shelfQuests: [], isShelfEnabled: false };
            const obj3 = { shelfQuests: [], isShelfEnabled: false };
          } else {
            obj = { shelfQuests: found1, isShelfEnabled: true };
          }
          return obj;
        }
      }, items1);
    };
let closure_61 = tmp47;
let closure_62 = 6 * DurationsDefault.Millis.HOUR;
const MINUTE = DurationsDefault.Millis.MINUTE;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp48 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BountyStore];
        const fn = function s() {
          return {
            questHomeBounties: BountyStore.questHomeBounties,
            isFetching: BountyStore.isFetchingQuestHomeBounties,
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStoresObject(tmp4, tmp5);
    }
  : () => {
      const items = [BountyStore];
      const obj = get_initialized;
      return obj.useStateFromStoresObject(items, () => ({
        questHomeBounties: BountyStore.questHomeBounties,
        isFetching: BountyStore.isFetchingQuestHomeBounties,
      }));
    };
ReactCompilerGating = ReactCompilerGating_mod;
let fn = () => closure_60();
const tmp49 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userStatus) => {
      let closure_2;
      _require = userStatus;
      let obj = require("react");
      const cResult = obj.c(4);
      const DropsOptedOut = require("UserSettings").DropsOptedOut;
      const setting = DropsOptedOut.useSetting();
      userStatus = userStatus.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      dependencyMap = tmp4;
      if (cResult[0] === setting) {
        if ((cResult[1] === null) != enrolledAt) {
          let tmp5;
          if (cResult[2] === userStatus.id) {
            tmp5 = cResult[3];
          }
          return tmp5;
        }
      }
      const fn = function s() {
        if (!closure_2) {
          const SurveyActionTypes = SurveyActionTypes2.SurveyActionTypes;
          obj2 = { quest_id: userStatus.id };
          const tmp5 = setting
            ? SurveyActionTypes.AD_IMPRESSION_QUEST_BAR_OPT_OUT
            : SurveyActionTypes.AD_IMPRESSION_QUEST_BAR_OPT_IN;
          const obj = QualtricsActionCreators;
          obj.fireSurveyAction(tmp5, obj2);
        }
      };
      cResult[0] = setting;
      cResult[1] = null != enrolledAt;
      cResult[2] = userStatus.id;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (userStatus) => {
      let closure_2;
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
      return react.useCallback(() => {
        if (!closure_2) {
          const SurveyActionTypes = SurveyActionTypes2.SurveyActionTypes;
          obj2 = { quest_id: userStatus.id };
          const tmp5 = setting
            ? SurveyActionTypes.AD_IMPRESSION_QUEST_BAR_OPT_OUT
            : SurveyActionTypes.AD_IMPRESSION_QUEST_BAR_OPT_IN;
          const obj = QualtricsActionCreators;
          obj.fireSurveyAction(tmp5, obj2);
        }
      }, items);
    };
let result1 = size.fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export const useQuests = tmp4;
export { sortQuests };
export { QuestTabs };
export const QuestQueryParams = {
  TAB: "tab",
  QUEST_ID: "quest_id",
  SORT: "sort",
  FILTER: "filter",
  AD_CREATIVE_IDS: "ad_creative_ids",
};
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
  let closure_0;
  let quests;
  _require = arg0;
  let obj = require("get initialized");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  const items1 = [arg0, stateFromStores, closure_54(Array.from(stateFromStores.values()))];
  const memo = react.useMemo(() => {
    const obj = utils_QuestUtils;
    const result = obj.filterQuestsForSocialEntrypoints(stateFromStores, authStore3);
    obj2 = QuestMatchingUtils;
    return obj2.getQuestsFromActivities(result, closure_0);
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
  let accounts;
  let closure_5;
  let items3;
  questId = questId.questId;
  const preview = questId.preview;
  let beforeRequest = questId.beforeRequest;
  const afterRequest = questId.afterRequest;
  let startingConsoleQuest;
  react = undefined;
  const tmp = startingConsoleQuest(react.useState(false), 2);
  startingConsoleQuest = tmp[0];
  react = tmp[1];
  let obj = questId(beforeRequest[16]);
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  const tmp4 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  let closure_6 = tmp4;
  const items1 = [questId];
  const callback = react.useCallback((arg0) => {
    const state = useConsoleQuestUIStore.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp4, questId];
  const effect = react.useEffect(() => {
    closure_6(questId, QuestConsoleStartError.QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  obj2 = {
    startConsoleQuest: react.useCallback(
      afterRequest(function* () {
        let closure_0;
        let closure_2;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
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
                let closure_1 = tmp;
                questId = undefined;
                if (!first) {
                  if (beforeRequest != null) {
                    beforeRequest();
                  }
                  v3(true);
                  questId = null;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: obj2.manuallyStartConsoleQuest(questId, preview), done: false };
                  obj2 = questId(beforeRequest[18]);
                  return obj5;
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_129_5(false);
              const tmp18 = beforeRequest;
              if (closure_129_3 != null) {
                closure_129_3();
              }
              throw tmp18;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_5(false);
              if (closure_129_3 != null) {
                closure_129_3();
              }
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              questId = value;
              closure_129_7(questId.errorHints);
              c3 = 0;
              closure_129_5(false);
              if (closure_129_3 != null) {
                closure_129_3();
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp30) {
            beforeRequest = tmp30;
            if (0 === c3) {
              c5 = 3;
              throw tmp30;
            } else {
              c4 = 1;
            }
          }
        }
      }),
      items3,
    ),
    startingConsoleQuest,
  };
  items3 = [startingConsoleQuest, beforeRequest, afterRequest, preview, questId, callback];
  return obj2;
};
export const useWaitingForConsoleConnection = tmp26;
export const useQuestHowToHelpArticle = tmp27;
export const QuestProgressState = obj2;
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
  let c3;
  let isFetching;
  let obj6;
  let questHomeBounties;
  let tmp2;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let enabled2;
  c3 = undefined;
  const QuestHomeBountiesFeatureGateExperiment = previewAdCreativeIds(
    enabled2[56],
  ).QuestHomeBountiesFeatureGateExperiment;
  obj2 = { location: constants2.QUEST_HOME_MOBILE };
  const enabled = QuestHomeBountiesFeatureGateExperiment.useConfig(obj2).enabled;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(
    enabled2[30],
  ).BountyStaleRefreshQuestHomeExperiment;
  let obj3 = { location: constants2.QUEST_HOME_MOBILE };
  enabled2 = BountyStaleRefreshQuestHomeExperiment.useConfig(obj3).enabled;
  const tmp = _slicedToArray(react.useState(enabled), 2);
  [tmp2, c3] = tmp;
  let obj4 = previewAdCreativeIds(enabled2[16]);
  const items = [BountyStore];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => ({
    isFetching: BountyStore.isFetchingQuestHomeBounties,
    questHomeBounties: BountyStore.questHomeBounties,
  }));
  const items1 = [enabled, enabled2, previewAdCreativeIds];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    let _true;
    let interval;
    function loadBounties() {
      return obj(...arguments);
    }
    let obj = function _loadBounties() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        let obj3;
        let obj5;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let v0;
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
                length = tmp;
                const _Date = Date;
                closure_1 = Date.now();
                v0 = 1;
                if (null != length) {
                  if (length.length > 0) {
                    c1 = 3;
                    c4 = 1;
                    const obj6 = {
                      value: obj5.fetchBountyPreview(length, _true(closure_2_2[47]).AdPlacement.VIDEO_MODAL_MOBILE),
                      done: false,
                    };
                    obj5 = _true(closure_2_2[57]);
                    return obj6;
                  }
                }
                c1 = 2;
                c4 = 1;
                const obj7 = {
                  value: obj3.fetchQuestHomeBounties(_true(closure_2_2[47]).AdPlacement.VIDEO_MODAL_MOBILE),
                  done: false,
                };
                obj3 = _true(closure_2_2[57]);
                return obj7;
              }
            } else if (1 === c1) {
              v0 = 0;
              const tmp18 = closure_2;
              if (!closure_128_0) {
                v0(false);
              }
              throw tmp18;
            } else {
              if (2 === c1) {
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
                obj = { value, done: true };
                return obj;
              }
              v0 = 0;
              if (!closure_128_0) {
                v0(false);
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp31) {
            closure_2 = tmp31;
            if (0 === v0) {
              c4 = 3;
              throw tmp31;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (c1) {
      let c0 = false;
      c1 = 0;
      const bounties = loadBounties();
      const tmp2 = interval;
      if (tmp2) {
        const tmp3 = globalThis;
        const _window = window;
        interval = window.setInterval(() => {
          if (Date.now() - c1 > closure_62) {
            loadBounties();
          }
        }, MINUTE);
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
  if (enabled) {
    let obj5 = { questHomeBounties, isLoading: isFetching };
    obj6 = obj5;
  } else {
    obj6 = { questHomeBounties: [], isLoading: false };
  }
  return obj6;
};
export const useQuestHomeBounties = tmp48;
export const useQuestBarImpressionSurvey = tmp49;
