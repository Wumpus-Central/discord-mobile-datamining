// === Module 9765: SummaryStore ===

// Module 9765 (SummaryStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import _mod9496 from "module_9496" /* 9496 */;
import SummaryConstants from "SummaryConstants" /* 9766 */;
import ChannelSummariesExperiment from "ChannelSummariesExperiment" /* 9767 */;
import Summary from "Summary" /* 9768 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9495 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_18, dependencyMap, findIndexResult, flag, startId;

function handleQuickSwitcherUpdate() {
  const results = QuickSwitcherStore.getProps().results;
  const found = results.filter((type) => {
    const tmp = type.type === _mod9496.AutocompleterResultTypes.TEXT_CHANNEL && 0 === type.record.type;
    return tmp;
  });
  closure_24 = found.map((record) => record.record.id);
}
const SUMMARY_POLL_INTERVAL = SummaryConstants.SUMMARY_POLL_INTERVAL;
let obj = { FETCHING: "fetching", OK: "ok", ERROR: "error" };
const authStore4 = {};
let closure_19 = {};
let closure_20 = {};
let items = [];
let reduced = {};
let obj2 = { status: obj.OK, lastRequest: null, lastResponse: null };
let closure_24 = [];
let closure_25 = [];
const PersistedStore = get_initializedDefault.PersistedStore;
class SummaryStore extends PersistedStore {
  getState() {
    return { shouldShowTopicsBar: flag };
  }
  initialize(shouldShowTopicsBar) {
    flag = undefined;
    if (shouldShowTopicsBar != null) {
      flag = shouldShowTopicsBar.shouldShowTopicsBar;
    }
    if (flag == null) {
      flag = true;
    }
    this.waitFor(ChannelStore, ExperimentStore, GuildStore, QuickSwitcherStore, ReadStateStore, SelectedChannelStore, UserGuildSettingsStore, UserStore);
    items = [QuickSwitcherStore];
    this.syncWith(items, handleQuickSwitcherUpdate);
  }
  allSummaries() {
    return closure_18;
  }
  topSummaries() {
    const values = Object.values(closure_18);
    const flatResult = values.flat();
    const found = flatResult.filter(function(people) {
      let tmp = people.people.length > 1;
      if (tmp) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        obj = SnowflakeUtilsDefault;
        const extractTimestampResult = obj.extractTimestamp(people.endId);
        const date = new Date();
        const time = date.getTime();
        tmp = extractTimestampResult > time - 5 * DurationsDefault.Millis.HOUR;
      }
      return tmp;
    });
    return found.sort((endId, endId2) => {
      obj = SnowflakeUtilsDefault;
      const extractTimestampResult = obj.extractTimestamp(endId2.endId);
      obj2 = SnowflakeUtilsDefault;
      return extractTimestampResult - obj2.extractTimestamp(endId.endId);
    });
  }
  summaries(channelId) {
    let tmp = closure_18[channelId];
    if (tmp == null) {
      tmp = closure_25;
    }
    return tmp;
  }
  shouldShowTopicsBar() {
    return flag;
  }
  findSummary(channelId, summaryId) {
    let closure_0 = summaryId;
    const summariesResult = this.summaries(channelId);
    let found = summariesResult.find((id) => id.id === summaryId);
    if (found == null) {
      found = null;
    }
    return found;
  }
  selectedSummary(id) {
    let findSummaryResult = null;
    if (null != obj) {
      findSummaryResult = null;
      if (obj.channelId === id) {
        findSummaryResult = null;
        if (null != obj.summaryId) {
          let summaryId;
          const self = this;
          const findSummary = this.findSummary;
          if (obj != null) {
            summaryId = obj.summaryId;
          }
          findSummaryResult = findSummary(id, summaryId);
        }
      }
    }
    return findSummaryResult;
  }
  summaryFeedback(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_20[arg0.id];
    }
    return tmp;
  }
  isFetching(arg0, arg1) {
    let tmp4;
    if (null != arg1) {
      let summaryId;
      if (closure_19[arg0] != null) {
        summaryId = tmp6.summaryId;
      }
      tmp4 = summaryId === arg1;
    } else {
      let fetching;
      if (closure_19[arg0] != null) {
        fetching = tmp2.fetching;
      }
      tmp4 = true === fetching;
    }
    return tmp4;
  }
  status(arg0) {
    return closure_19[arg0];
  }
  shouldFetch(arg0, arg1) {
    const channel = ChannelStore.getChannel(arg0);
    obj = ChannelSummariesExperiment;
    if (obj.canSeeChannelSummaries(channel)) {
      if (null != arg1) {
        let num3;
        if (closure_19[arg0] != null) {
          num3 = tmp.summaryIdLastRequestedAt;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const _Date = Date;
        let summaryId;
        const diff = Date.now() - num3;
        if (closure_19[arg0] != null) {
          summaryId = tmp.summaryId;
        }
        return arg1 !== summaryId || diff > SUMMARY_POLL_INTERVAL;
      } else {
        let num;
        if (closure_19[arg0] != null) {
          num = tmp.lastReceivedAt;
        }
        if (num == null) {
          num = 0;
        }
        let fetching;
        const _Boolean = Boolean;
        if (closure_19[arg0] != null) {
          fetching = tmp.fetching;
        }
        let tmp8 = !_Boolean(fetching);
        _Boolean(fetching);
        if (tmp8) {
          tmp8 = 0 === num;
        }
        return tmp8;
      }
    } else {
      return false;
    }
  }
  channelAffinities() {
    return items;
  }
  channelAffinitiesById() {
    return reduced;
  }
  channelAffinitiesStatus() {
    return obj2;
  }
  shouldFetchChannelAffinities() {
    let tmp = obj2.status !== obj.FETCHING;
    if (tmp) {
      let tmp4 = null != obj2.lastResponse;
      if (tmp4) {
        const _Date = Date;
        const diff = Date.now() - obj2.lastResponse;
        tmp4 = diff < 30 * DurationsDefault.Millis.SECOND;
      }
      tmp = !tmp4;
    }
    return tmp;
  }
  defaultChannelIds(numChannels) {
    let channelMuted;
    let withChannelAffinities;
    let withQuickSwitcher;
    let withUnreads;
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
        const hasUnreadResult = null != channel && !channelMuted.isChannelMuted(channel.guild_id, item) && ReadStateStore.hasUnread(item);
        return hasUnreadResult;
      });
    }
    const found1 = found.filter((item) => {
      const channel = ChannelStore.getChannel(item);
      obj = ChannelSummariesExperiment;
      return obj.canSeeChannelSummaries(channel, false, false);
    });
    return found1.slice(0, num);
  }
  visibleSummaryIndex() {
    return findIndexResult;
  }
}
const prototype = SummaryStore.prototype;
SummaryStore.persistKey = "SummaryStore";
obj2 = {
  CONNECTION_OPEN() {
    return false;
  },
  CHANNEL_SELECT(channelId) {
    let channelId1;
    channelId = channelId.channelId;
    if (obj != null) {
      channelId1 = obj.channelId;
    }
  },
  TOGGLE_TOPICS_BAR() {

  },
  RECEIVE_CHANNEL_SUMMARY(arg0) {
    let channelId;
    let error;
    let receivedAt;
    let summary;
    ({ summary, channelId } = arg0);
    let summaryFromServer;
    ({ error, receivedAt } = arg0);
    if (null != summary) {
      const _Object = Object;
      if (Object.keys(summary).length > 0) {
        obj = Summary;
        summaryFromServer = obj.createSummaryFromServer(summary, channelId);
        items = closure_18[channelId];
        if (items == null) {
          items = [];
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        findIndexResult = items1.findIndex((id) => {
          let id1;
          id = id.id;
          if (summaryFromServer != null) {
            id1 = summaryFromServer.id;
          }
          return id === id1;
        });
        if (findIndexResult > -1) {
          items1[findIndexResult] = summaryFromServer;
        } else {
          items1.push(summaryFromServer);
        }
        closure_18[channelId] = items1;
      }
    }
    obj2 = closure_19[channelId];
    if (obj2 == null) {
      obj2 = { fetching: false };
    }
    const obj3 = { summaryId: undefined, summaryIdLastReceivedAt: receivedAt, summaryIdError: error };
    const merged = Object.assign(obj2);
    closure_19[channelId] = obj3;
  },
  REQUEST_CHANNEL_SUMMARY(channelId) {
    let requestedAt;
    let summaryId;
    channelId = channelId.channelId;
    obj = closure_19[channelId];
    ({ summaryId, requestedAt } = channelId);
    if (obj == null) {
      obj = { fetching: false };
    }
    obj2 = { summaryId, summaryIdLastRequestedAt: requestedAt };
    const merged = Object.assign(obj);
    closure_19[channelId] = obj2;
  },
  RECEIVE_CHANNEL_SUMMARIES(error) {
    let channelId;
    let summaries;
    ({ summaries, channelId } = error);
    error = error.error;
    const receivedAt = error.receivedAt;
    const found = summaries.filter((item) => Object.keys(item).length > 0);
    const mapped = found.map((item) => {
      obj = Summary;
      return obj.createSummaryFromServer(item, channelId);
    });
    if (null != obj) {
      if (obj.channelId === channelId) {
        if (!mapped.some((id) => {
          let summaryId;
          id = id.id;
          if (obj != null) {
            summaryId = obj.summaryId;
          }
          return id === summaryId;
        })) {
          items = closure_18[channelId];
          if (items == null) {
            items = [];
          }
          const found1 = items.find((id) => {
            let summaryId;
            id = id.id;
            if (obj != null) {
              summaryId = obj.summaryId;
            }
            return id === summaryId;
          });
          if (null != found1) {
            mapped.push(found1);
          }
        }
      }
    }
    obj = channelId(12);
    const sortByResult = obj.sortBy(mapped, (startId) => {
      obj = SnowflakeUtilsDefault;
      return obj.extractTimestamp(startId.startId);
    });
    closure_18[channelId] = sortByResult.reverse();
    obj2 = { fetching: false, error: undefined, lastReceivedAt: receivedAt };
    const merged = Object.assign(closure_19[channelId]);
    if (null != error) {
      obj2.error = error;
    }
    closure_19[channelId] = obj2;
  },
  REQUEST_CHANNEL_SUMMARIES(channelId) {
    obj = closure_19[channelId.channelId];
    channelId = channelId.channelId;
    if (obj == null) {
      obj = {};
    }
    obj2 = { fetching: true, lastRequestedAt: channelId.requestedAt };
    const merged = Object.assign(obj);
    closure_19[channelId] = obj2;
  },
  SET_HIGHLIGHTED_SUMMARY(channelId) {
    let summaryId2;
    if (null == obj) {
      if (null == channelId.channelId) {
        return false;
      }
    }
    let channelId1;
    channelId = channelId.channelId;
    if (obj != null) {
      channelId1 = obj.channelId;
    }
    if (channelId === channelId1) {
      let summaryId1;
      let summaryId = channelId.summaryId;
      if (obj != null) {
        summaryId1 = obj.summaryId;
      }
      if (summaryId === summaryId1) {
        return false;
      }
    }
    let tmp3 = null;
    if (null != channelId.channelId) {
      obj = { channelId: null, summaryId: summaryId2 };
      ({ channelId: obj.channelId, summaryId: summaryId2 } = channelId);
      if (summaryId2 == null) {
        summaryId2 = null;
      }
      tmp3 = obj;
    }
    obj = tmp3;
    if (null != tmp3) {
      if (obj.channelId === channelId.channelId) {
        if (null != obj.summaryId) {
          if (closure_18[obj.channelId] != null) {
            closure_18[obj.channelId].findIndex((id) => {
              summaryId = undefined;
              id = id.id;
              if (summaryId != null) {
                summaryId = summaryId.summaryId;
              }
              return id === summaryId;
            });
          }
        }
      }
    }
  },
  UPDATE_VISIBLE_MESSAGES(arg0) {
    let findIndexResult1;
    let summaryId;
    let closure_0 = arg0;
    const channelId = SelectedChannelStore.getChannelId();
    if (null != channelId) {
      if (null != obj) {
        if (obj.channelId === channelId) {
          if (null != obj.summaryId) {
            if (closure_18[obj.channelId] != null) {
              obj2.findIndex((id) => {
                obj = undefined;
                id = id.id;
                if (obj != null) {
                  obj = obj.summaryId;
                }
                return id === obj;
              });
            }
          }
        }
      }
      obj = closure_18[channelId];
      if (obj != null) {
        obj.findIndex((startId) => {
          let bottomVisibleMessage;
          let topVisibleMessage;
          ({ topVisibleMessage, bottomVisibleMessage } = closure_0);
          let tmp = null == topVisibleMessage;
          startId = startId.startId;
          if (!tmp) {
            tmp = topVisibleMessage > startId.endId;
          }
          if (!tmp) {
            tmp = null == bottomVisibleMessage;
          }
          if (!tmp) {
            tmp = bottomVisibleMessage < startId;
          }
          return !tmp;
        });
      }
    }
  },
  SET_SELECTED_SUMMARY(channelId) {
    let summaryId2;
    channelId = channelId.channelId;
    let tmp = null;
    if (null != channelId) {
      let channelId1;
      if (obj != null) {
        channelId1 = obj.channelId;
      }
      let tmp3 = channelId !== channelId1;
      if (!tmp3) {
        let summaryId1;
        const summaryId = channelId.summaryId;
        if (obj != null) {
          summaryId1 = obj.summaryId;
        }
        tmp3 = summaryId !== summaryId1;
      }
      if (tmp3) {
        obj = { channelId, summaryId: summaryId2 };
        summaryId2 = channelId.summaryId;
        if (summaryId2 == null) {
          summaryId2 = null;
        }
      }
      tmp = tmp3;
    }
    return tmp;
  },
  SET_SUMMARY_FEEDBACK(arg0) {
    let rating;
    let summary;
    ({ summary, rating } = arg0);
    if (null != rating) {
      closure_20[summary.id] = rating;
    } else {
      delete closure_20[summary.id];
    }
  },
  REQUEST_CHANNEL_AFFINITIES() {
    obj = { status: obj.FETCHING, lastRequest: Date.now() };
    const merged = Object.assign(obj);
  },
  RECEIVE_CHANNEL_AFFINITIES(affinities) {
    affinities = affinities.affinities;
    if (null != affinities.error) {
      items = [];
      reduced = {};
      obj = { status: obj.ERROR, lastResponse: Date.now() };
      const merged = Object.assign(obj2);
      const _Date2 = Date;
      obj2 = obj;
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
      obj2 = { status: obj.OK, lastResponse: Date.now() };
      const merged1 = Object.assign(obj2);
      const _Date = Date;
    }
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(arg0) {
    let channelIds;
    let lastRequestedAt;
    ({ channelIds, requestedAt: require } = arg0);
    reduced = channelIds.reduce((acc, item) => {
      obj = closure_19[item];
      if (obj == null) {
        obj = {};
      }
      obj2 = { fetching: true, lastRequestedAt: require, error: undefined };
      const merged = Object.assign(obj);
      acc[item] = obj2;
      return acc;
    }, {});
    obj = {};
    let merged = Object.assign(obj);
    const merged1 = Object.assign(reduced);
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(requestArgs) {
    let closure_2;
    let error;
    let lastReceivedAt;
    ({ receivedAt: require, error: importDefault } = requestArgs);
    const channelIds = requestArgs.requestArgs.channelIds;
    const summaries = requestArgs.summaries;
    obj = _modDef12;
    const toPairsResult = obj.toPairs(summaries);
    dependencyMap = toPairsResult.reduce((acc, item) => {
      const tmp = closure_7(item, 2);
      const first = tmp[0];
      const arr = tmp[1];
      obj = error(closure_2[17]);
      const chainResult = obj.chain(arr.map((item) => {
        obj = require("Summary");
        return obj.createSummaryFromServer(item, first);
      }));
      const sortByResult = chainResult.sortBy((startId) => {
        obj = error(closure_1_2[12]);
        return obj.extractTimestamp(startId.startId);
      });
      const takeRightResult = sortByResult.takeRight(75);
      const reversed = takeRightResult.reverse();
      const iter = reversed.filter((item) => Object.keys(item).length > 0);
      acc[first] = iter.value();
      return acc;
    }, {});
    reduced = channelIds.reduce((summariesByChannel, item) => {
      obj = closure_19[item];
      if (obj == null) {
        obj = {};
      }
      if (null != closure_2[item]) {
        summariesByChannel.summariesByChannel[item] = closure_2[item];
      }
      const summaryFetchStatusByChannel = summariesByChannel.summaryFetchStatusByChannel;
      obj2 = { fetching: false, error: importDefault, lastReceivedAt: require };
      const merged = Object.assign(obj);
      summaryFetchStatusByChannel[item] = obj2;
      return summariesByChannel;
    }, { summariesByChannel: {}, summaryFetchStatusByChannel: {} });
    obj2 = {};
    let merged = Object.assign(obj2);
    const merged1 = Object.assign(reduced.summariesByChannel);
    const obj3 = {};
    const merged2 = Object.assign(obj3);
    const merged3 = Object.assign(reduced.summaryFetchStatusByChannel);
  },
  CONVERSATION_SUMMARY_UPDATE(channel_id) {
    channel_id = channel_id.channel_id;
    const summaries = channel_id.summaries;
    const timestamp = Date.now();
    obj = _modDef12;
    const chainResult = obj.chain(summaries);
    const sortByResult = chainResult.sortBy((start_id) => {
      obj = SnowflakeUtilsDefault;
      return obj.extractTimestamp(start_id.start_id);
    });
    const found = sortByResult.filter((item) => Object.keys(item).length > 0);
    const mapped = found.map((item) => {
      obj = Summary;
      return obj.createSummaryFromServer(item, channel_id);
    });
    items = closure_18[channel_id];
    const iter = mapped.reverse();
    const valueResult = iter.value();
    if (items == null) {
      items = [];
    }
    const tmp2Result = _modDef12;
    const chainResult1 = tmp2Result.chain(valueResult);
    const combined = chainResult1.concat(items);
    const sortByResult1 = combined.sortBy((startId) => {
      obj = SnowflakeUtilsDefault;
      return obj.extractTimestamp(startId.startId);
    });
    const takeRightResult = sortByResult1.takeRight(75);
    const uniqByResult = takeRightResult.uniqBy("id");
    const iter2 = uniqByResult.reverse();
    closure_18[channel_id] = iter2.value();
    obj2 = { error: undefined, fetching: flag, lastReceivedAt: timestamp };
    const merged = Object.assign(closure_19[channel_id]);
    flag = undefined;
    if (closure_19[channel_id] != null) {
      flag = tmp7.fetching;
    }
    if (flag == null) {
      flag = false;
    }
    closure_19[channel_id] = obj2;
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    closure_18 = {};
    closure_19 = {};
  },
  DELETE_SUMMARY(summary) {
    const channelId = summary.summary.channelId;
    items = closure_18[channelId];
    if (items == null) {
      items = [];
    }
    const index = items.indexOf(summary.summary);
    if (-1 !== index) {
      const arr2 = closure_18[channelId];
      arr2.splice(index, 1);
    }
  }
};
const summaryStore = new SummaryStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/summaries/SummaryStore.tsx");

export default summaryStore;