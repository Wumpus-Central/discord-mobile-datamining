// === Module 10981: formatResults ===

// Module 10981 (formatResults)
import _mod12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9844 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9834 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getChannelIdFromDestinationId(type) {
  if ("channel" === type.type) {
    return type.id;
  } else {
    const dMFromUserId = ChannelStore.getDMFromUserId(type.id);
    let tmp4;
    if (null != dMFromUserId) {
      tmp4 = dMFromUserId;
    }
    return tmp4;
  }
}
let closure_12 = async function _getOrResolveChannelIdFromDestinationId(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const tmp20 = getChannelIdFromDestinationId(closure_0);
          if (null != tmp20) {
            c1 = 3;
            const obj1 = { value: tmp20, done: true };
            return obj1;
          } else if ("user" === tmp18.type) {
            c4 = 1;
            let obj2 = ChannelActionCreatorsDefault;
            c2 = 2;
            c1 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.getOrEnsurePrivateChannel(tmp18.id);
            return obj2;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c1 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c1 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp10) {
      closure_3 = tmp10;
      if (tmp3 === c4) {
        c1 = tmp2;
        throw tmp10;
      } else {
        c2 = tmp;
      }
    }
  }
};
function canShareToChannel(type, arg1) {
  if (type.type === sortByMatchScore.AutocompleterResultTypes.USER) {
    let tmp8 = arg1;
    if (!arg1) {
      tmp8 = null != ChannelStore.getDMChannelFromUserId(type.record.id);
    }
    let tmp7 = tmp8;
  } else {
    tmp7 = type.type === sortByMatchScore.AutocompleterResultTypes.GROUP_DM;
    if (!tmp7) {
      let tmp4 = type.record.type !== constants2.GUILD_FORUM && type.record.type !== tmp3.GUILD_MEDIA;
      if (tmp4) {
        tmp4 = PermissionStore.can(constants.VIEW_CHANNEL, type.record) && PermissionStore.can(constants.SEND_MESSAGES, type.record);
        const tmp6 = PermissionStore.can(constants.VIEW_CHANNEL, type.record) && PermissionStore.can(constants.SEND_MESSAGES, type.record);
      }
      tmp7 = tmp4;
    }
  }
  return tmp7;
}
function mergeAndDedupeResultsWithHeaders(found, items1) {
  const set = new Set();
  if (null != items1) {
    const tmp3 = items1[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let addResult = set.add(tmp5);
      continue;
    }
  }
  const items = [];
  const iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    if (null != nextResult) {
      if (tmp9.type === sortByMatchScore.AutocompleterResultTypes.HEADER) {
        let tmp = nextResult;
      } else {
        let id = tmp9.record.id;
        let tmp11 = id;
        if (!set.has(id)) {
          let addResult1 = set.add(tmp11);
          if (null != tmp) {
            let arr = items.push(tmp);
          }
          arr = items.push(tmp9);
        }
      }
    }
    continue;
  }
  return items;
}
const isAllowedType = fn(10982).isAllowedType;
const Constants = fn(1074);
({ Permissions: closure_9, ChannelTypes: c10 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/formatResults.tsx");

export default function formatResults(hasQuery) {
  ({ results, queryMode } = hasQuery);
  ({ frequentChannels, targetDestination, selectedDestinations, pinnedDestinations, originDestination } = hasQuery);
  ({ channelFilter, includeMissingDMs } = hasQuery);
  if (hasQuery.hasQuery) {
    closure_130_0 = includeMissingDMs;
    if (channelFilter === undefined) {
      channelFilter = canShareToChannel;
    }
    closure_130_1 = channelFilter;
    return mergeAndDedupeResultsWithHeaders(results.filter((type) => {
      let isNotNullishResult = GlobalUtils.isNotNullish(type);
      if (isNotNullishResult) {
        let tmp4 = type.type === sortByMatchScore.AutocompleterResultTypes.HEADER;
        if (!tmp4) {
          let tmp6 = isAllowedType(type);
          if (tmp6) {
            tmp6 = originDestination(type, queryMode);
          }
          tmp4 = tmp6;
        }
        isNotNullishResult = tmp4;
      }
      return isNotNullishResult;
    }));
  } else {
    if (null != pinnedDestinations) {
      if (pinnedDestinations.length > 0) {
        let mapped = pinnedDestinations.map((type) => {
          if ("user" === type.type) {
            user = user.getUser(type.id);
            let tmp6 = null;
            if (null != user) {
              const obj = { type: queryMode(9835).AutocompleterResultTypes.USER, record: user, score: 0 };
              tmp6 = obj;
            }
            let tmp3 = tmp6;
          } else {
            tmp3 = originDestination(9844)(type.id);
          }
          return tmp3;
        });
      }
      const channelHistory = QuickSwitcherStore.getChannelHistory();
      if (channelHistory.length > 0) {
        let mapped1 = channelHistory.map((item) => originDestination(9844)(item));
      } else {
        mapped1 = [];
      }
      if (frequentChannels.length > 0) {
        let mapped2 = frequentChannels.map((id) => originDestination(9844)(id.id));
      } else {
        mapped2 = [];
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
      if (null == targetDestination) {
        items[arraySpreadResult] = null;
        arraySpreadResult = HermesBuiltin.arraySpread(mapped2, HermesBuiltin.arraySpread(mapped1, arraySpreadResult + 1));
        closure_129_1 = undefined;
        closure_129_0 = includeMissingDMs;
        let tmp20 = channelFilter;
        if (channelFilter === undefined) {
          tmp20 = canShareToChannel;
        }
        closure_129_1 = tmp20;
        const found = items.filter((type) => {
          let isNotNullishResult = GlobalUtils.isNotNullish(type);
          if (isNotNullishResult) {
            let tmp4 = type.type === sortByMatchScore.AutocompleterResultTypes.HEADER;
            if (!tmp4) {
              let tmp6 = isAllowedType(type);
              if (tmp6) {
                tmp6 = originDestination(type, queryMode);
              }
              tmp4 = tmp6;
            }
            isNotNullishResult = tmp4;
          }
          return isNotNullishResult;
        });
        if (selectedDestinations != null) {
          const found1 = selectedDestinations.find((item) => _mod12.isEqual(item, originDestination));
        }
        if (null != originDestination) {
          if (null == found1) {
            let items1 = [originDestination.id];
          }
          if (null != queryMode) {
            let substr = mergeAndDedupeResultsWithHeaders(found.filter((type) => type.type === queryMode), items1);
          } else {
            substr = mergeAndDedupeResultsWithHeaders(found, items1).slice(0, 15);
            const arr8 = mergeAndDedupeResultsWithHeaders(found, items1);
          }
          return substr;
        }
        items1 = [];
      } else if ("user" === targetDestination.type) {
        let user = UserStore.getUser(targetDestination.id);
        targetDestination = null;
        if (null != user) {
          let obj = { type: queryMode(9835).AutocompleterResultTypes.USER, record: user, score: 0 };
          targetDestination = obj;
        }
      } else {
        const tmp9 = originDestination(9844)(targetDestination.id);
      }
    }
    mapped = [];
  }
};
export const getDestinationIdFromChannelId = function getDestinationIdFromChannelId(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  if (type === constants2.DM) {
    let obj = { type: "user", id: channel.recipients[0] };
  } else {
    obj = { type: "channel", id: channel_id };
  }
  return obj;
};
export const getDestinationIdFromResult = function getDestinationIdFromResult(results) {
  const record = results.record;
  if (results.type === sortByMatchScore.AutocompleterResultTypes.USER) {
    let obj = { type: "user", id: record.id };
  } else {
    obj = { type: "channel", id: record.id };
  }
  return obj;
};
export const destinationKey = function destinationKey(destinationIdFromResult) {
  return "" + destinationIdFromResult.type + "-" + destinationIdFromResult.id;
};
export { getChannelIdFromDestinationId };
export const getOrResolveChannelIdFromDestinationId = function getOrResolveChannelIdFromDestinationId() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const formatResultsWithHeaders = function formatResultsWithHeaders(hasNonEmptyQuery) {
  ({ results, selectedResult, queryMode } = hasNonEmptyQuery);
  ({ selectedChannelId, frequentChannels } = hasNonEmptyQuery);
  if (null != selectedResult) {
    const items = [selectedResult.record.id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const intl = queryMode(1114).intl;
  const headerResult = queryMode(9835).createHeaderResult(intl.string(queryMode(1114).t.qm9dSj));
  if (hasNonEmptyQuery.hasNonEmptyQuery) {
    const items2 = [headerResult];
    HermesBuiltin.arraySpread(mergeAndDedupeResultsWithHeaders(results.filter(isAllowedType), items1), 1);
    return items2;
  } else {
    const mapped = frequentChannels.map((id) => createAutocompleterResultForChannelIdDefault(id.id));
    const found = mapped.filter(tmp(1369).isNotNullish);
    const found1 = found.filter(isAllowedType);
    if (null != queryMode) {
      const items3 = [headerResult];
      HermesBuiltin.arraySpread(found1.filter((type) => type.type === queryMode), 1);
      let items4 = items3;
    } else {
      const intl2 = tmp(1114).intl;
      items4 = [tmp(9835).createHeaderResult(intl2.string(tmp(1114).t["80lOZ1"])), , ];
      let tmp13 = null;
      if (null != selectedChannelId) {
        const tmp7 = createAutocompleterResultForChannelIdDefault(selectedChannelId);
        let tmp8 = null;
        if (null != tmp7) {
          let tmp9 = null;
          if (isAllowedType(tmp7)) {
            let canResult = tmp7.type === tmp(9835).AutocompleterResultTypes.USER;
            if (!canResult) {
              canResult = PermissionStore.can(constants.VIEW_CHANNEL, tmp7.record);
            }
            tmp9 = null;
            if (canResult) {
              tmp9 = tmp7;
            }
          }
          tmp8 = tmp9;
        }
        tmp13 = tmp8;
      }
      items4[1] = tmp13;
      items4[2] = headerResult;
      HermesBuiltin.arraySpread(found1, 3);
      const tmpResult = tmp(9835);
    }
    return mergeAndDedupeResultsWithHeaders(items4, items1);
  }
  const obj = queryMode(9835);
};