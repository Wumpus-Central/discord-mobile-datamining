// discord_app/modules/share/formatResults.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import _mod9496 from "../autocompleter/index.tsx";
import createAutocompleterResultForChannelIdDefault from "../autocompleter/createAutocompleterResultForChannelId.tsx";
import ShareConstants from "ShareConstants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import QuickSwitcherStore from "../quickswitcher/QuickSwitcherStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c1, c2, set;

let c10;
let c9;
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
let obj = function _getOrResolveChannelIdFromDestinationId() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp16 = getChannelIdFromDestinationId(closure_0);
            if (null != tmp16) {
              c1 = 3;
              const obj5 = { value: tmp16, done: true };
              return obj5;
            } else if ("user" === closure_0.type) {
              c4 = 1;
              c2 = 2;
              c1 = 1;
              const obj6 = { value: obj3.getOrEnsurePrivateChannel(closure_0.id), done: false };
              obj3 = ChannelActionCreatorsDefault;
              return obj6;
            } else {
              c1 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c1 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c1 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        let closure_3 = tmp7;
        if (0 === c4) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function canShareToChannel(type, arg1) {
  let tmp7;
  if (type.type === _mod9496.AutocompleterResultTypes.USER) {
    const record = type.record;
    let tmp9 = !record.isSystemUser();
    record.isSystemUser();
    if (tmp9) {
      tmp9 = arg1 || null != ChannelStore.getDMChannelFromUserId(type.record.id);
      const tmp11 = arg1 || null != ChannelStore.getDMChannelFromUserId(type.record.id);
    }
    tmp7 = tmp9;
  } else {
    tmp7 = type.type === _mod9496.AutocompleterResultTypes.GROUP_DM;
    if (!tmp7) {
      let tmp4 = type.record.type !== constants2.GUILD_FORUM && type.record.type !== tmp3.GUILD_MEDIA;
      if (tmp4) {
        tmp4 =
          PermissionStore.can(constants.VIEW_CHANNEL, type.record) &&
          PermissionStore.can(constants.SEND_MESSAGES, type.record);
        PermissionStore.can(constants.VIEW_CHANNEL, type.record) &&
          PermissionStore.can(constants.SEND_MESSAGES, type.record);
      }
      tmp7 = tmp4;
    }
  }
  return tmp7;
}
function mergeAndDedupeResultsWithHeaders(found, items1) {
  set = new Set();
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
      let tmp;
      if (tmp9.type === _mod9496.AutocompleterResultTypes.HEADER) {
        tmp = nextResult;
      } else {
        let id = tmp9.record.id;
        let tmp11 = id;
        if (!set.has(id)) {
          let addResult1 = set.add(tmp11);
          if (null != tmp) {
            let arr = items.push(tmp);
          }
          let arr3 = items.push(tmp9);
        }
      }
    }
    continue;
  }
  return items;
}
const isAllowedType = ShareConstants.isAllowedType;
({ Permissions: c9, ChannelTypes: c10 } = Constants);
const result = size.fileFinishedImporting("modules/share/formatResults.tsx");

export default function formatResults(hasQuery) {
  let channelFilter;
  let frequentChannels;
  let includeMissingDMs;
  let originDestination;
  let pinnedDestinations;
  let queryMode;
  let results;
  let selectedDestinations;
  let targetDestination;
  const f104959 = (type) => {
    obj = queryMode(dependencyMap[11]);
    let isNotNullishResult = obj.isNotNullish(type);
    if (isNotNullishResult) {
      let tmp4 = type.type === queryMode(dependencyMap[7]).AutocompleterResultTypes.HEADER;
      if (!tmp4) {
        tmp4 = isAllowedType(type) && channelFilter(type, includeMissingDMs);
        const tmp6 = isAllowedType(type) && channelFilter(type, includeMissingDMs);
      }
      isNotNullishResult = tmp4;
    }
    return isNotNullishResult;
  };
  ({ results, queryMode } = hasQuery);
  ({ frequentChannels, targetDestination, selectedDestinations, pinnedDestinations, originDestination } = hasQuery);
  ({ channelFilter, includeMissingDMs } = hasQuery);
  if (hasQuery.hasQuery) {
    if (channelFilter === undefined) {
      channelFilter = canShareToChannel;
    }
    return mergeAndDedupeResultsWithHeaders(results.filter(f104959));
  } else {
    if (null != pinnedDestinations) {
      let mapped;
      let mapped1;
      let mapped2;
      let found1;
      if (pinnedDestinations.length > 0) {
        mapped = pinnedDestinations.map((type) => {
          let tmp3;
          if ("user" === type.type) {
            user = user.getUser(type.id);
            let tmp6 = null;
            if (null != user) {
              tmp6 = { type: queryMode(dependencyMap[7]).AutocompleterResultTypes.USER, record: user, score: 0 };
              obj = { type: queryMode(dependencyMap[7]).AutocompleterResultTypes.USER, record: user, score: 0 };
            }
            tmp3 = tmp6;
          } else {
            tmp3 = originDestination(dependencyMap[9])(type.id);
          }
          return tmp3;
        });
      }
      const channelHistory = QuickSwitcherStore.getChannelHistory();
      if (channelHistory.length > 0) {
        mapped1 = channelHistory.map((item) => originDestination(dependencyMap[9])(item));
      } else {
        mapped1 = [];
      }
      if (frequentChannels.length > 0) {
        mapped2 = frequentChannels.map((id) => originDestination(dependencyMap[9])(id.id));
      } else {
        mapped2 = [];
      }
      const items = [];
      let tmp4 = items;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped, 0);
      let tmp7 = null;
      if (null != targetDestination) {
        let tmp10;
        if ("user" === targetDestination.type) {
          let user = UserStore.getUser(targetDestination.id);
          let tmp13 = null;
          if (null != user) {
            obj = { type: queryMode(9496).AutocompleterResultTypes.USER, record: user, score: 0 };
            tmp13 = obj;
          }
          tmp10 = tmp13;
        } else {
          tmp10 = originDestination(9505)(targetDestination.id);
        }
        tmp7 = tmp10;
      }
      items[arraySpreadResult] = tmp7;
      HermesBuiltin.arraySpread(items, mapped2, HermesBuiltin.arraySpread(items, mapped1, arraySpreadResult + 1));
      let closure_1;
      let tmp21 = channelFilter;
      if (channelFilter === undefined) {
        tmp21 = canShareToChannel;
      }
      closure_1 = tmp21;
      const found = items.filter(f104959);
      if (selectedDestinations != null) {
        found1 = selectedDestinations.find((item) => {
          obj = _mod12;
          return obj.isEqual(item, originDestination);
        });
      }
      if (null != originDestination) {
        let items1;
        let substr;
        if (null == found1) {
          items1 = [originDestination.id];
        }
        if (null != queryMode) {
          substr = mergeAndDedupeResultsWithHeaders(
            found.filter((type) => type.type === queryMode),
            items1,
          );
        } else {
          const arr8 = mergeAndDedupeResultsWithHeaders(found, items1);
          substr = arr8.slice(0, 15);
        }
        return substr;
      }
      items1 = [];
    }
    mapped = [];
  }
}
export const getDestinationIdFromChannelId = function getDestinationIdFromChannelId(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  if (type === constants2.DM) {
    obj = { type: "user", id: channel.recipients[0] };
    const obj2 = { type: "user", id: channel.recipients[0] };
  } else {
    obj = { type: "channel", id: channel_id };
  }
  return obj;
};
export const getDestinationIdFromResult = function getDestinationIdFromResult(results) {
  const record = results.record;
  if (results.type === _mod9496.AutocompleterResultTypes.USER) {
    obj = { type: "user", id: record.id };
    const obj2 = { type: "user", id: record.id };
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
  return obj(...arguments);
};
export const formatResultsWithHeaders = function formatResultsWithHeaders(hasNonEmptyQuery) {
  let frequentChannels;
  let items1;
  let queryMode;
  let results;
  let selectedChannelId;
  let selectedResult;
  ({ results, selectedResult, queryMode } = hasNonEmptyQuery);
  ({ selectedChannelId, frequentChannels } = hasNonEmptyQuery);
  hasNonEmptyQuery = hasNonEmptyQuery.hasNonEmptyQuery;
  if (null != selectedResult) {
    const items = [selectedResult.record.id];
    items1 = items;
  } else {
    items1 = [];
  }
  const createHeaderResult = queryMode(9496).createHeaderResult;
  const intl = queryMode(1126).intl;
  const headerResult = createHeaderResult(intl.string(queryMode(1126).t.qm9dSj));
  if (hasNonEmptyQuery) {
    const items2 = [headerResult];
    HermesBuiltin.arraySpread(items2, mergeAndDedupeResultsWithHeaders(results.filter(isAllowedType), items1), 1);
    return items2;
  } else {
    let items4;
    const mapped = frequentChannels.map((id) => createAutocompleterResultForChannelIdDefault(id.id));
    const found = mapped.filter(queryMode(1375).isNotNullish);
    const found1 = found.filter(isAllowedType);
    if (null != queryMode) {
      const items3 = [headerResult];
      HermesBuiltin.arraySpread(
        items3,
        found1.filter((type) => type.type === queryMode),
        1,
      );
      items4 = items3;
    } else {
      const createHeaderResult2 = queryMode(9496).createHeaderResult;
      const intl2 = queryMode(1126).intl;
      items4 = [createHeaderResult2(intl2.string(queryMode(1126).t["80lOZ1"])), ,];
      let tmp15 = null;
      if (null != selectedChannelId) {
        const tmp9 = createAutocompleterResultForChannelIdDefault(selectedChannelId);
        let tmp10 = null;
        if (null != tmp9) {
          let tmp11 = null;
          if (isAllowedType(tmp9)) {
            tmp11 = null;
            const canResult =
              tmp9.type === queryMode(9496).AutocompleterResultTypes.USER ||
              PermissionStore.can(constants.VIEW_CHANNEL, tmp9.record);
            if (canResult) {
              tmp11 = tmp9;
            }
          }
          tmp10 = tmp11;
        }
        tmp15 = tmp10;
      }
      items4[1] = tmp15;
      items4[2] = headerResult;
      HermesBuiltin.arraySpread(items4, found1, 3);
    }
    return mergeAndDedupeResultsWithHeaders(items4, items1);
  }
};
