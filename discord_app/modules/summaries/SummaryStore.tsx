// === Module 11345: SummaryStore ===

// Module 11345 (SummaryStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import ChannelSummariesExperiment from "ChannelSummariesExperiment" /* 11347 */;
import Summary from "Summary" /* 11348 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9834 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleQuickSwitcherUpdate() {
  const results = QuickSwitcherStore.getProps().results;
  const found = results.filter((type) => {
    let tmp = type.type === sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL;
    if (tmp) {
      tmp = 0 === type.record.type;
    }
    return tmp;
  });
  closure_24 = found.map((record) => record.record.id);
}
const SUMMARY_POLL_INTERVAL = fn(11346).SUMMARY_POLL_INTERVAL;
let obj = { FETCHING: "fetching", OK: "ok", ERROR: "error" };
const dependencyMap2 = {};
const dependencyMap3 = {};
let closure_20 = {};
let items = [];
let reduced = {};
obj = { status: obj.OK, lastRequest: null, lastResponse: null };
let closure_24 = [];
let closure_25 = [];
const PersistedStore = initializeDefault.PersistedStore;
class SummaryStore extends PersistedStore {
}
const prototype = SummaryStore.prototype;
prototype["getState"] = function getState() {
  return { shouldShowTopicsBar };
};
prototype["initialize"] = function initialize(shouldShowTopicsBar) {
  let flag;
  if (shouldShowTopicsBar != null) {
    flag = shouldShowTopicsBar.shouldShowTopicsBar;
  }
  if (flag == null) {
    flag = true;
  }
  closure_3 = flag;
  this.waitFor(ChannelStore, ExperimentStore, GuildStore, QuickSwitcherStore, ReadStateStore, SelectedChannelStore, UserGuildSettingsStore, UserStore);
  items = [QuickSwitcherStore];
  this.syncWith(items, handleQuickSwitcherUpdate);
};
prototype["allSummaries"] = function allSummaries() {
  return closure_18;
};
prototype["topSummaries"] = function topSummaries() {
  const values = Object.values(closure_18);
  const found = values.flat().filter((people) => {
    let tmp = people.people.length > 1;
    if (tmp) {
      const _Date = Date;
      const date = new Date();
      const time = date.getTime();
      tmp = SnowflakeUtilsDefault.extractTimestamp(people.endId) > time - 5 * DurationsDefault.Millis.HOUR;
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(people.endId);
    }
    return tmp;
  });
  return found.sort((endId, endId2) => {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(endId2.endId);
    return extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(endId.endId);
  });
};
prototype["summaries"] = function summaries(channelId) {
  let tmp = dependencyMap2[channelId];
  if (tmp == null) {
    tmp = closure_25;
  }
  return tmp;
};
prototype["shouldShowTopicsBar"] = function shouldShowTopicsBar() {
  return closure_3;
};
prototype["findSummary"] = function findSummary(channelId, summaryId) {
  closure_0 = summaryId;
  let found = this.summaries(channelId).find((id) => id.id === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["selectedSummary"] = function selectedSummary(channel_id) {
  let findSummaryResult = null;
  if (null != obj) {
    findSummaryResult = null;
    if (obj.channelId === channel_id) {
      findSummaryResult = null;
      if (null != obj.summaryId) {
        let summaryId;
        const self = this;
        if (obj != null) {
          summaryId = obj.summaryId;
        }
        findSummaryResult = this.findSummary(channel_id, summaryId);
      }
    }
  }
  return findSummaryResult;
};
prototype["summaryFeedback"] = function summaryFeedback(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = closure_20[arg0.id];
  }
  return tmp;
};
prototype["isFetching"] = function isFetching(arg0, arg1) {
  if (null != arg1) {
    let summaryId;
    if (dependencyMap3[arg0] != null) {
      summaryId = tmp6.summaryId;
    }
    let tmp4 = summaryId === arg1;
  } else {
    let fetching;
    if (dependencyMap3[arg0] != null) {
      fetching = tmp2.fetching;
    }
    tmp4 = true === fetching;
  }
  return tmp4;
};
prototype["status"] = function status(arg0) {
  return dependencyMap3[arg0];
};
prototype["shouldFetch"] = function shouldFetch(arg0, arg1) {
  const channel = ChannelStore.getChannel(arg0);
  if (obj.canSeeChannelSummaries(channel)) {
    if (null != arg1) {
      let num3;
      if (tmp != null) {
        num3 = tmp.summaryIdLastRequestedAt;
      }
      if (num3 == null) {
        num3 = 0;
      }
      const _Date = Date;
      let summaryId;
      const diff = Date.now() - num3;
      if (tmp != null) {
        summaryId = tmp.summaryId;
      }
      let tmp12 = arg1 !== summaryId;
      if (!tmp12) {
        tmp12 = diff > SUMMARY_POLL_INTERVAL;
      }
      return tmp12;
    } else {
      let num;
      if (tmp != null) {
        num = tmp.lastReceivedAt;
      }
      if (num == null) {
        num = 0;
      }
      let fetching;
      if (tmp != null) {
        fetching = tmp.fetching;
      }
      const BooleanResult = Boolean(fetching);
      let tmp8 = !BooleanResult;
      if (!BooleanResult) {
        tmp8 = 0 === num;
      }
      return tmp8;
    }
  } else {
    return false;
  }
  obj = ChannelSummariesExperiment;
};
prototype["channelAffinities"] = function channelAffinities() {
  return items;
};
prototype["channelAffinitiesById"] = function channelAffinitiesById() {
  return reduced;
};
prototype["channelAffinitiesStatus"] = function channelAffinitiesStatus() {
  return obj;
};
prototype["shouldFetchChannelAffinities"] = function shouldFetchChannelAffinities() {
  let tmp = obj.status !== obj.FETCHING;
  if (tmp) {
    let tmp4 = null != obj.lastResponse;
    if (tmp4) {
      const _Date = Date;
      const diff = Date.now() - obj.lastResponse;
      tmp4 = diff < 30 * DurationsDefault.Millis.SECOND;
    }
    tmp = !tmp4;
  }
  return tmp;
};
prototype["defaultChannelIds"] = function defaultChannelIds(numChannels) {
  let num = numChannels.numChannels;
  ({ withQuickSwitcher, withChannelAffinities, withUnreads } = numChannels);
  if (num === undefined) {
    num = 25;
  }
  items = [];
  let combined = items;
  if (withQuickSwitcher) {
    combined = items.concat(closure_24);
  }
  let combined1 = combined;
  if (withChannelAffinities) {
    combined1 = combined.concat(items.map((channel_id) => channel_id.channel_id));
  }
  let found = combined1;
  if (withUnreads) {
    found = combined1.filter((item) => {
      const channel = ChannelStore.getChannel(item);
      let hasUnreadResult = null != channel;
      if (hasUnreadResult) {
        hasUnreadResult = !channelMuted.isChannelMuted(channel.guild_id, item);
      }
      if (hasUnreadResult) {
        hasUnreadResult = ReadStateStore.hasUnread(item);
      }
      return hasUnreadResult;
    });
  }
  const found1 = found.filter((item) => {
    const channel = ChannelStore.getChannel(item);
    return ChannelSummariesExperiment.canSeeChannelSummaries(channel, false, false);
  });
  return found1.slice(0, num);
};
prototype["visibleSummaryIndex"] = function visibleSummaryIndex() {
  return findIndexResult;
};
SummaryStore.persistKey = "SummaryStore";
obj = {
  CONNECTION_OPEN() {
    return false;
  },
  CHANNEL_SELECT(channelId) {
    channelId = undefined;
    if (obj != null) {
      channelId = obj.channelId;
    }
  },
  TOGGLE_TOPICS_BAR() {
    closure_3 = !closure_3;
  },
  RECEIVE_CHANNEL_SUMMARY(arg0) {
    ({ summary, channelId } = arg0);
    let summaryFromServer;
    ({ error, receivedAt } = arg0);
    if (null != summary) {
      const _Object = Object;
      if (Object.keys(summary).length > 0) {
        obj = Summary;
        summaryFromServer = obj.createSummaryFromServer(summary, channelId);
        items = dependencyMap2[channelId];
        if (items == null) {
          items = [];
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        findIndexResult = items1.findIndex((id) => {
          id = undefined;
          if (summaryFromServer != null) {
            id = summaryFromServer.id;
          }
          return id.id === id;
        });
        if (findIndexResult > -1) {
          items1[findIndexResult] = summaryFromServer;
        } else {
          items1.push(summaryFromServer);
        }
        findIndexResult = dependencyMap2;
        dependencyMap2[channelId] = items1;
      }
    }
    obj = dependencyMap3[channelId];
    if (obj == null) {
      obj = { fetching: false };
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.summaryId = undefined;
    obj.summaryIdLastReceivedAt = receivedAt;
    obj.summaryIdError = error;
    dependencyMap3[channelId] = obj;
  },
  REQUEST_CHANNEL_SUMMARY(channelId) {
    channelId = channelId.channelId;
    obj = dependencyMap3[channelId];
    ({ summaryId, requestedAt } = channelId);
    if (obj == null) {
      obj = { fetching: false };
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.summaryId = summaryId;
    obj.summaryIdLastRequestedAt = requestedAt;
    dependencyMap3[channelId] = obj;
  },
  RECEIVE_CHANNEL_SUMMARIES(error) {
    ({ summaries, channelId } = error);
    error = error.error;
    const found = summaries.filter((item) => Object.keys(item).length > 0);
    const mapped = found.map((item) => Summary.createSummaryFromServer(item, channelId));
    if (null != obj) {
      if (obj.channelId === channelId) {
        if (!mapped.some((id) => {
          let summaryId;
          if (obj != null) {
            summaryId = obj.summaryId;
          }
          return id.id === summaryId;
        })) {
          items = dependencyMap2[channelId];
          if (items == null) {
            items = [];
          }
          const found1 = items.find((id) => {
            let summaryId;
            if (obj != null) {
              summaryId = obj.summaryId;
            }
            return id.id === summaryId;
          });
          if (null != found1) {
            mapped.push(found1);
          }
        }
      }
    }
    obj = channelId(12);
    dependencyMap2[channelId] = obj.sortBy(mapped, (startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId)).reverse();
    obj = {};
    const merged = Object.assign(dependencyMap3[channelId]);
    obj.fetching = false;
    obj.error = undefined;
    obj.lastReceivedAt = error.receivedAt;
    if (null != error) {
      obj.error = error;
    }
    dependencyMap3[channelId] = obj;
    const sortByResult = obj.sortBy(mapped, (startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId));
  },
  REQUEST_CHANNEL_SUMMARIES(requestedAt) {
    obj = dependencyMap3[requestedAt.channelId];
    if (obj == null) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    obj.fetching = true;
    obj.lastRequestedAt = requestedAt.requestedAt;
    dependencyMap3[requestedAt.channelId] = obj;
  },
  SET_HIGHLIGHTED_SUMMARY(channelId) {
    if (null == obj) {
      if (null == channelId.channelId) {
        return false;
      }
    }
    channelId = undefined;
    if (obj != null) {
      channelId = obj.channelId;
    }
    if (channelId.channelId === channelId) {
      summaryId = undefined;
      if (obj != null) {
        summaryId = obj.summaryId;
      }
      if (channelId.summaryId === summaryId) {
        return false;
      }
    }
    let tmp3 = null;
    if (null != channelId.channelId) {
      obj = { channelId: null, summaryId: null };
      ({ channelId: obj.channelId, summaryId } = channelId);
      if (summaryId == null) {
        summaryId = null;
      }
      obj.summaryId = summaryId;
      tmp3 = obj;
    }
    obj = tmp3;
    if (null != tmp3) {
      if (obj.channelId === channelId.channelId) {
        if (null != obj.summaryId) {
          if (dependencyMap2[obj.channelId] != null) {
            obj2.findIndex((id) => {
              summaryId = undefined;
              if (summaryId != null) {
                summaryId = summaryId.summaryId;
              }
              return id.id === summaryId;
            });
          }
        }
      }
    }
  },
  UPDATE_VISIBLE_MESSAGES(arg0) {
    closure_0 = arg0;
    const channelId = SelectedChannelStore.getChannelId();
    if (null != channelId) {
      if (null != obj) {
        if (obj.channelId === channelId) {
          if (null != obj.summaryId) {
            findIndexResult = undefined;
            if (dependencyMap2[obj.channelId] != null) {
              findIndexResult = obj2.findIndex((id) => {
                summaryId = undefined;
                if (summaryId != null) {
                  summaryId = summaryId.summaryId;
                }
                return id.id === summaryId;
              });
            }
          }
        }
      }
      if (dependencyMap2[channelId] != null) {
        obj.findIndex((endId) => {
          ({ topVisibleMessage, bottomVisibleMessage } = closure_0);
          let tmp = null == topVisibleMessage;
          if (!tmp) {
            tmp = topVisibleMessage > endId.endId;
          }
          if (!tmp) {
            tmp = null == bottomVisibleMessage;
          }
          if (!tmp) {
            tmp = bottomVisibleMessage < endId.startId;
          }
          return !tmp;
        });
      }
    }
  },
  SET_SELECTED_SUMMARY(channelId) {
    channelId = channelId.channelId;
    let tmp = null;
    if (null != channelId) {
      channelId = undefined;
      if (obj != null) {
        channelId = obj.channelId;
      }
      let tmp3 = channelId !== channelId;
      if (!tmp3) {
        let summaryId;
        if (obj != null) {
          summaryId = obj.summaryId;
        }
        tmp3 = channelId.summaryId !== summaryId;
      }
      if (tmp3) {
        obj = { channelId, summaryId: null };
        let summaryId1 = channelId.summaryId;
        if (summaryId1 == null) {
          summaryId1 = null;
        }
        obj.summaryId = summaryId1;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  SET_SUMMARY_FEEDBACK(arg0) {
    ({ summary, rating } = arg0);
    if (null != rating) {
      closure_20[summary.id] = rating;
    } else {
      const id = summary.id;
      delete tmp2[tmp];
    }
  },
  REQUEST_CHANNEL_AFFINITIES() {
    obj = {};
    const merged = Object.assign(obj);
    obj.status = obj.FETCHING;
    obj.lastRequest = Date.now();
  },
  RECEIVE_CHANNEL_AFFINITIES(affinities) {
    affinities = affinities.affinities;
    if (null != affinities.error) {
      items = [];
      reduced = {};
      obj = {};
      const merged = Object.assign(obj);
      obj.status = obj.ERROR;
      const _Date2 = Date;
      obj.lastResponse = Date.now();
    } else {
      items = affinities;
      if (affinities == null) {
        items = [];
      }
      reduced = undefined;
      if (affinities != null) {
        reduced = affinities.reduce((acc, channel_id) => {
          acc[channel_id.channel_id] = channel_id.affinity;
          return acc;
        }, {});
      }
      if (reduced == null) {
        reduced = {};
      }
      obj = {};
      const merged1 = Object.assign(obj);
      obj.status = obj.OK;
      const _Date = Date;
      obj.lastResponse = Date.now();
    }
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(arg0) {
    ({ channelIds, requestedAt: require } = arg0);
    reduced = channelIds.reduce((acc, item) => {
      obj = closure_19[item];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.fetching = true;
      obj.lastRequestedAt = lastRequestedAt;
      obj.error = undefined;
      acc[item] = obj;
      return acc;
    }, {});
    obj = {};
    let merged = Object.assign(obj);
    const merged1 = Object.assign(reduced);
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(requestArgs) {
    ({ receivedAt: require, error: importDefault } = requestArgs);
    const channelIds = requestArgs.requestArgs.channelIds;
    obj = _modDef12;
    dependencyMap = obj.toPairs(requestArgs.summaries).reduce((acc, item) => {
      const tmp = closure_7(item, 2);
      const first = tmp[0];
      obj = error(12);
      const chainResult = error(12).chain(tmp[1].map((item) => lastReceivedAt(11348).createSummaryFromServer(item, first)));
      const sortByResult = error(12).chain(tmp[1].map((item) => lastReceivedAt(11348).createSummaryFromServer(item, first))).sortBy((startId) => error(11).extractTimestamp(startId.startId));
      const reversed = error(12).chain(tmp[1].map((item) => lastReceivedAt(11348).createSummaryFromServer(item, first))).sortBy((startId) => error(11).extractTimestamp(startId.startId)).takeRight(75).reverse();
      const takeRightResult = error(12).chain(tmp[1].map((item) => lastReceivedAt(11348).createSummaryFromServer(item, first))).sortBy((startId) => error(11).extractTimestamp(startId.startId)).takeRight(75);
      acc[first] = reversed.filter((item) => Object.keys(item).length > 0).value();
      return acc;
    }, {});
    reduced = channelIds.reduce((summariesByChannel, item) => {
      obj = closure_19[item];
      if (obj == null) {
        obj = {};
      }
      if (null != dependencyMap[item]) {
        summariesByChannel.summariesByChannel[item] = tmp;
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.fetching = false;
      obj.error = error;
      obj.lastReceivedAt = lastReceivedAt;
      summariesByChannel.summaryFetchStatusByChannel[item] = obj;
      return summariesByChannel;
    }, { summariesByChannel: {}, summaryFetchStatusByChannel: {} });
    obj = {};
    let merged = Object.assign(obj);
    const merged1 = Object.assign(reduced.summariesByChannel);
    obj = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(reduced.summaryFetchStatusByChannel);
  },
  CONVERSATION_SUMMARY_UPDATE(channel_id) {
    channel_id = channel_id.channel_id;
    const timestamp = Date.now();
    obj = _modDef12;
    const chainResult = obj.chain(channel_id.summaries);
    const found = obj.chain(channel_id.summaries).sortBy((start_id) => SnowflakeUtilsDefault.extractTimestamp(start_id.start_id)).filter((item) => Object.keys(item).length > 0);
    const mapped = found.map((item) => Summary.createSummaryFromServer(item, channel_id));
    const sortByResult = obj.chain(channel_id.summaries).sortBy((start_id) => SnowflakeUtilsDefault.extractTimestamp(start_id.start_id));
    items = dependencyMap2[channel_id];
    const iter = mapped.reverse();
    if (items == null) {
      items = [];
    }
    const valueResult = mapped.reverse().value();
    const tmp2Result = _modDef12;
    const combined = _modDef12.chain(valueResult).concat(items);
    const chainResult1 = _modDef12.chain(valueResult);
    const sortByResult1 = combined.sortBy((startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId));
    const takeRightResult = combined.sortBy((startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId)).takeRight(75);
    const uniqByResult = combined.sortBy((startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId)).takeRight(75).uniqBy("id");
    dependencyMap2[channel_id] = combined.sortBy((startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId)).takeRight(75).uniqBy("id").reverse().value();
    obj = {};
    const merged = Object.assign(dependencyMap3[channel_id]);
    obj.error = undefined;
    let flag;
    if (dependencyMap3[channel_id] != null) {
      flag = tmp7.fetching;
    }
    if (flag == null) {
      flag = false;
    }
    obj.fetching = flag;
    obj.lastReceivedAt = timestamp;
    dependencyMap3[channel_id] = obj;
    const iter2 = combined.sortBy((startId) => SnowflakeUtilsDefault.extractTimestamp(startId.startId)).takeRight(75).uniqBy("id").reverse();
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    closure_18 = {};
    closure_19 = {};
  },
  DELETE_SUMMARY(summary) {
    const channelId = summary.summary.channelId;
    items = dependencyMap2[channelId];
    if (items == null) {
      items = [];
    }
    const index = items.indexOf(summary.summary);
    if (-1 !== index) {
      dependencyMap2[channelId].splice(index, 1);
    }
  }
};
const summaryStore = new SummaryStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/summaries/SummaryStore.tsx");

export default summaryStore;