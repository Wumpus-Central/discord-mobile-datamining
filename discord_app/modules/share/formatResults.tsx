// === Module 10943: getChannelIdFromDestinationId ===

// Module 10943 (getChannelIdFromDestinationId)
import sortByMatchScore from "sortByMatchScore" /* 9950 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9961 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "handleConnectionOpen" /* 9949 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "getUncachedChannelPermissions" /* 4120 */;
import closure_7 from "mergeGuildAvatar" /* 1921 */;
import { isAllowedType } from "ALLOWED_TYPES" /* 10944 */;
import ME from "ME" /* 673 */;

require = arg1;
function getChannelIdFromDestinationId(type) {
  if ("channel" === type.type) {
    return type.id;
  } else {
    const dMFromUserId = authStore.getDMFromUserId(type.id);
    let tmp4;
    if (null != dMFromUserId) {
      tmp4 = dMFromUserId;
    }
    return tmp4;
  }
}
function _getOrResolveChannelIdFromDestinationId() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const tmp21 = closure_1_11(closure_0);
              if (null != tmp21) {
                v0 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = tmp21;
                return obj1;
              } else if ("user" === tmp19.type) {
                c4 = 1;
                let obj2 = v0(table[8]);
                table = 2;
                v0 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.getOrEnsurePrivateChannel(tmp19.id);
                return obj2;
              } else {
                v0 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp6) {
            c4 = 0;
            v0 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            v0 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp10) {
          closure_3 = tmp10;
          if (tmp3 === c4) {
            v0 = tmp2;
            throw tmp10;
          } else {
            table = tmp;
          }
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function canShareToChannel(type) {
  if (type.type === sortByMatchScore.AutocompleterResultTypes.USER) {
    let tmp8 = arg1;
    if (!arg1) {
      tmp8 = null != authStore.getDMChannelFromUserId(type.record.id);
    }
    let tmp7 = tmp8;
  } else {
    tmp7 = type.type === sortByMatchScore.AutocompleterResultTypes.GROUP_DM;
    if (!tmp7) {
      let tmp4 = type.record.type !== constants2.GUILD_FORUM && type.record.type !== tmp3.GUILD_MEDIA;
      if (tmp4) {
        tmp4 = closure_6.can(constants.VIEW_CHANNEL, type.record) && closure_6.can(constants.SEND_MESSAGES, type.record);
        const obj = closure_6;
        const tmp5 = constants;
        const tmp6 = closure_6.can(constants.VIEW_CHANNEL, type.record) && closure_6.can(constants.SEND_MESSAGES, type.record);
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
      let tmp19 = nextResult;
      let tmp20 = require;
      let tmp21 = dependencyMap;
      if (tmp9.type === sortByMatchScore.AutocompleterResultTypes.HEADER) {
        let tmp = nextResult;
      } else {
        let tmp10 = nextResult;
        let id = tmp9.record.id;
        let tmp11 = id;
        if (!set.has(id)) {
          let tmp12 = id;
          let addResult1 = set.add(tmp11);
          let tmp14 = tmp;
          if (null != tmp) {
            let tmp15 = tmp;
            let arr = items.push(tmp);
          }
          let tmp17 = nextResult;
          arr = items.push(tmp9);
        }
      }
    }
    continue;
  }
  return items;
}
({ Permissions: c9, ChannelTypes: c10 } = ME);
const result = require("set").fileFinishedImporting("modules/share/formatResults.tsx");

export default function formatResults(hasQuery) {
  ({ results, queryMode } = hasQuery);
  includeMissingDMs = queryMode;
  ({ frequentChannels, targetDestination, selectedDestinations, pinnedDestinations, originDestination } = hasQuery);
  importDefault = originDestination;
  ({ channelFilter, includeMissingDMs } = hasQuery);
  if (hasQuery.hasQuery) {
    if (channelFilter === undefined) {
      channelFilter = canShareToChannel;
    }
    importDefault = channelFilter;
    return mergeAndDedupeResultsWithHeaders(results.filter((type) => {
      let isNotNullishResult = includeMissingDMs(closure_1_2[11]).isNotNullish(type);
      if (isNotNullishResult) {
        let tmp4 = type.type === includeMissingDMs(closure_1_2[7]).AutocompleterResultTypes.HEADER;
        if (!tmp4) {
          let tmp6 = closure_1_8(type);
          if (tmp6) {
            tmp6 = callback(type, includeMissingDMs);
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
              const obj = { type: null, record: null, score: 0 };
              obj[0] = includeMissingDMs(9950).AutocompleterResultTypes.USER;
              obj[1] = user;
              tmp6 = obj;
            }
            let tmp3 = tmp6;
          } else {
            tmp3 = callback(9961)(type.id);
          }
          return tmp3;
        });
      }
      channelHistory = channelHistory.getChannelHistory();
      if (channelHistory.length > 0) {
        let mapped1 = channelHistory.map((arg0) => callback(9961)(arg0));
      } else {
        mapped1 = [];
      }
      if (frequentChannels.length > 0) {
        let mapped2 = frequentChannels.map((id) => callback(9961)(id.id));
      } else {
        mapped2 = [];
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
      if (null == targetDestination) {
        items[arraySpreadResult] = null;
        arraySpreadResult = HermesBuiltin.arraySpread(mapped2, HermesBuiltin.arraySpread(mapped1, arraySpreadResult + 1));
        importDefault = undefined;
        let tmp20 = channelFilter;
        if (channelFilter === undefined) {
          tmp20 = canShareToChannel;
        }
        importDefault = tmp20;
        const found = items.filter((type) => {
          let isNotNullishResult = includeMissingDMs(closure_1_2[11]).isNotNullish(type);
          if (isNotNullishResult) {
            let tmp4 = type.type === includeMissingDMs(closure_1_2[7]).AutocompleterResultTypes.HEADER;
            if (!tmp4) {
              let tmp6 = closure_1_8(type);
              if (tmp6) {
                tmp6 = callback(type, includeMissingDMs);
              }
              tmp4 = tmp6;
            }
            isNotNullishResult = tmp4;
          }
          return isNotNullishResult;
        });
        if (selectedDestinations != null) {
          const found1 = selectedDestinations.find((arg0) => includeMissingDMs(closure_1_2[12]).isEqual(arg0, closure_1));
        }
        if (null != originDestination) {
          if (null == found1) {
            let items1 = [originDestination.id];
          }
          if (null != queryMode) {
            let substr = mergeAndDedupeResultsWithHeaders(found.filter((type) => type.type === includeMissingDMs), items1);
          } else {
            substr = mergeAndDedupeResultsWithHeaders(found, items1).slice(0, 15);
            const arr8 = mergeAndDedupeResultsWithHeaders(found, items1);
          }
          return substr;
        }
        items1 = [];
      } else if ("user" === targetDestination.type) {
        user = user.getUser(targetDestination.id);
        targetDestination = null;
        if (null != user) {
          let obj = { type: null, record: null, score: 0 };
          obj[0] = includeMissingDMs(9950).AutocompleterResultTypes.USER;
          obj[1] = user;
          targetDestination = obj;
        }
        let tmp9 = targetDestination;
      } else {
        tmp9 = createAutocompleterResultForChannelIdDefault(targetDestination.id);
      }
    }
    mapped = [];
  }
};
export const getDestinationIdFromChannelId = function getDestinationIdFromChannelId(channel_id) {
  const channel = authStore.getChannel(channel_id);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  if (type === constants2.DM) {
    let obj = { type: "user", id: null };
    obj[1] = channel.recipients[0];
  } else {
    obj = { type: "channel", id: null };
    obj[1] = channel_id;
  }
  return obj;
};
export const getDestinationIdFromResult = function getDestinationIdFromResult(closure_0) {
  const record = closure_0.record;
  if (closure_0.type === sortByMatchScore.AutocompleterResultTypes.USER) {
    let obj = { type: "user", id: null };
    obj[1] = record.id;
  } else {
    obj = { type: "channel", id: null };
    obj[1] = record.id;
  }
  return obj;
};
export const destinationKey = function destinationKey(destinationIdFromResult) {
  return "" + destinationIdFromResult.type + "-" + destinationIdFromResult.id;
};
export { getChannelIdFromDestinationId };
export const getOrResolveChannelIdFromDestinationId = function getOrResolveChannelIdFromDestinationId(closure_0) {
  const self = this;
  const apply = _getOrResolveChannelIdFromDestinationId.apply;
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
  const intl = queryMode(1233).intl;
  const headerResult = queryMode(9950).createHeaderResult(intl.string(queryMode(1233).t.qm9dSj));
  if (hasNonEmptyQuery.hasNonEmptyQuery) {
    const items2 = [headerResult];
    HermesBuiltin.arraySpread(mergeAndDedupeResultsWithHeaders(results.filter(isAllowedType), items1), 1);
    return items2;
  } else {
    const mapped = frequentChannels.map((id) => callback(table[9])(id.id));
    const found = mapped.filter(tmp(1470).isNotNullish);
    const found1 = found.filter(isAllowedType);
    if (null != queryMode) {
      const items3 = [headerResult];
      HermesBuiltin.arraySpread(found1.filter((type) => type.type === queryMode), 1);
      let items4 = items3;
    } else {
      const intl2 = tmp(1233).intl;
      items4 = [tmp(9950).createHeaderResult(intl2.string(tmp(1233).t["80lOZ1"])), , ];
      let tmp13 = null;
      if (null != selectedChannelId) {
        const tmp7 = createAutocompleterResultForChannelIdDefault(selectedChannelId);
        let tmp8 = null;
        if (null != tmp7) {
          let tmp9 = null;
          if (isAllowedType(tmp7)) {
            let canResult = tmp7.type === tmp(9950).AutocompleterResultTypes.USER;
            if (!canResult) {
              canResult = closure_6.can(constants.VIEW_CHANNEL, tmp7.record);
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
      const tmpResult = tmp(9950);
    }
    return mergeAndDedupeResultsWithHeaders(items4, items1);
  }
  const obj = queryMode(9950);
};