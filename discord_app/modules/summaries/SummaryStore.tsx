// discord_app/modules/summaries/SummaryStore.tsx
import _slicedToArray from "_slicedToArray";
import getHash from "getHash";
import handleConnectionOpen from "handleConnectionOpen";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import closure_13 from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SUMMARY_POLL_INTERVAL } from "result";
import { PersistedStore } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";
import { canSeeChannelSummaries } from "../../experiments/ChannelSummariesExperiment.tsx";
import { set } from "../../utils/Durations.tsx";

const require = arg1;
function handleQuickSwitcherUpdate() {
  const results = props.getProps().results;
  const found = results.filter((type) => {
    let tmp = type.type === callback(table[10]).AutocompleterResultTypes.TEXT_CHANNEL;
    if (tmp) {
      tmp = 0 === type.record.type;
    }
    return tmp;
  });
  let closure_24 = found.map((record) => record.record.id);
}
let obj = { FETCHING: "fetching", OK: "ok", ERROR: "error" };
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = [];
let closure_22 = {};
let closure_23 = { status: obj.OK, lastRequest: null, lastResponse: null };
let closure_24 = [];
let closure_25 = [];
class SummaryStore extends PersistedStore {
}
const prototype = SummaryStore.prototype;
prototype["getState"] = function getState() {
  return { shouldShowTopicsBar: closure_3 };
};
prototype["initialize"] = function initialize(shouldShowTopicsBar) {
  let flag;
  if (shouldShowTopicsBar != null) {
    flag = shouldShowTopicsBar.shouldShowTopicsBar;
  }
  if (flag == null) {
    flag = true;
  }
  this.waitFor(ensureGuildLoaded, getHash, createGuildRecordFromRust, handleConnectionOpen, generateOldThreadCutoff, closure_13, updateUserGuildSettingsInternal, mergeGuildAvatar);
  const items = [handleConnectionOpen];
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
      const obj = callback(11);
      const date = new Date();
      const time = date.getTime();
      tmp = callback(11).extractTimestamp(people.endId) > time - 5 * callback(687).Millis.HOUR;
      const extractTimestampResult = callback(11).extractTimestamp(people.endId);
    }
    return tmp;
  });
  return found.sort((endId, endId2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(endId2.endId);
    return extractTimestampResult - callback(11).extractTimestamp(endId.endId);
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
  let closure_0 = summaryId;
  let found = this.summaries(channelId).find((id) => id.id === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["selectedSummary"] = function selectedSummary(id) {
  let findSummaryResult = null;
  if (null != closure_6) {
    findSummaryResult = null;
    if (closure_6.channelId === id) {
      findSummaryResult = null;
      if (null != closure_6.summaryId) {
        let summaryId;
        const self = this;
        if (closure_6 != null) {
          summaryId = closure_6.summaryId;
        }
        findSummaryResult = this.findSummary(id, summaryId);
      }
    }
  }
  return findSummaryResult;
};
prototype["summaryFeedback"] = function summaryFeedback(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = table[arg0.id];
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
  channel = channel.getChannel(arg0);
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
  obj = canSeeChannelSummaries;
};
prototype["channelAffinities"] = function channelAffinities() {
  return closure_21;
};
prototype["channelAffinitiesById"] = function channelAffinitiesById() {
  return closure_22;
};
prototype["channelAffinitiesStatus"] = function channelAffinitiesStatus() {
  return closure_23;
};
prototype["shouldFetchChannelAffinities"] = function shouldFetchChannelAffinities() {
  let tmp = closure_23.status !== obj.FETCHING;
  if (tmp) {
    let tmp4 = null != closure_23.lastResponse;
    if (tmp4) {
      const _Date = Date;
      const diff = Date.now() - closure_23.lastResponse;
      tmp4 = diff < 30 * set.Millis.SECOND;
    }
    tmp = !tmp4;
  }
  return tmp;
};
prototype["defaultChannelIds"] = function defaultChannelIds(numChannels) {
  let withChannelAffinities;
  let withQuickSwitcher;
  let withUnreads;
  let num = numChannels.numChannels;
  ({ withQuickSwitcher, withChannelAffinities, withUnreads } = numChannels);
  if (num === undefined) {
    num = 25;
  }
  const items = [];
  let combined = items;
  if (withQuickSwitcher) {
    combined = items.concat(closure_24);
  }
  let combined1 = combined;
  if (withChannelAffinities) {
    combined1 = combined.concat(closure_21.map((channel_id) => channel_id.channel_id));
  }
  let found = combined1;
  if (withUnreads) {
    found = combined1.filter((id) => {
      const channel = store.getChannel(id);
      let hasUnreadResult = null != channel;
      if (hasUnreadResult) {
        hasUnreadResult = !channelMuted.isChannelMuted(channel.guild_id, id);
      }
      if (hasUnreadResult) {
        hasUnreadResult = generateOldThreadCutoff.hasUnread(id);
      }
      return hasUnreadResult;
    });
  }
  const found1 = found.filter((arg0) => {
    const channel = store.getChannel(arg0);
    return callback(table[14]).canSeeChannelSummaries(channel, false, false);
  });
  return found1.slice(0, num);
};
prototype["visibleSummaryIndex"] = function visibleSummaryIndex() {
  return closure_5;
};
SummaryStore.persistKey = "SummaryStore";
obj = {
  CONNECTION_OPEN() {
    return false;
  },
  CHANNEL_SELECT(channelId) {
    channelId = undefined;
    if (c6 != null) {
      channelId = c6.channelId;
    }
    if (channelId !== channelId.channelId) {
      c6 = null;
    }
  },
  TOGGLE_TOPICS_BAR() {
    closure_3 = !closure_3;
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
        let obj = summaryFromServer(10329);
        summaryFromServer = obj.createSummaryFromServer(summary, channelId);
        let items = dependencyMap2[channelId];
        if (items == null) {
          items = [];
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        let findIndexResult = items1.findIndex((id) => {
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
    let requestedAt;
    let summaryId;
    channelId = channelId.channelId;
    let obj = dependencyMap3[channelId];
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
    let channelId;
    let summaries;
    ({ summaries, channelId } = error);
    error = error.error;
    const found = summaries.filter((arg0) => Object.keys(arg0).length > 0);
    const mapped = found.map((summary) => channelId(outer1_2[16]).createSummaryFromServer(summary, channelId));
    if (null != closure_6) {
      if (closure_6.channelId === channelId) {
        if (!mapped.some((id) => {
          let summaryId;
          if (closure_6 != null) {
            summaryId = closure_6.summaryId;
          }
          return id.id === summaryId;
        })) {
          let items = dependencyMap2[channelId];
          if (items == null) {
            items = [];
          }
          const found1 = items.find((id) => {
            let summaryId;
            if (closure_6 != null) {
              summaryId = closure_6.summaryId;
            }
            return id.id === summaryId;
          });
          if (null != found1) {
            mapped.push(found1);
          }
        }
      }
    }
    let obj = channelId(12);
    dependencyMap2[channelId] = obj.sortBy(mapped, (startId) => callback(table[12]).extractTimestamp(startId.startId)).reverse();
    obj = {};
    const merged = Object.assign(dependencyMap3[channelId]);
    obj.fetching = false;
    obj.error = undefined;
    obj.lastReceivedAt = error.receivedAt;
    if (null != error) {
      obj.error = error;
    }
    dependencyMap3[channelId] = obj;
  },
  REQUEST_CHANNEL_SUMMARIES(requestedAt) {
    let obj = dependencyMap3[requestedAt.channelId];
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
    let summaryId;
    if (null == closure_4) {
      if (null == channelId.channelId) {
        return false;
      }
    }
    channelId = undefined;
    if (closure_4 != null) {
      channelId = closure_4.channelId;
    }
    if (channelId.channelId === channelId) {
      summaryId = undefined;
      if (closure_4 != null) {
        summaryId = closure_4.summaryId;
      }
      if (channelId.summaryId === summaryId) {
        return false;
      }
    }
    let tmp3 = null;
    if (null != channelId.channelId) {
      const obj = { channelId: null, summaryId: null };
      ({ channelId: obj[0], summaryId } = channelId);
      if (summaryId == null) {
        summaryId = null;
      }
      obj[1] = summaryId;
      tmp3 = obj;
    }
    closure_4 = tmp3;
    if (null != tmp3) {
      if (closure_4.channelId === channelId.channelId) {
        if (null != closure_4.summaryId) {
          let findIndexResult;
          if (dependencyMap2[closure_4.channelId] != null) {
            findIndexResult = obj2.findIndex((id) => {
              let summaryId;
              if (tmp3 != null) {
                summaryId = tmp3.summaryId;
              }
              return id.id === summaryId;
            });
          }
          let closure_5 = findIndexResult;
        }
      }
    }
  },
  UPDATE_VISIBLE_MESSAGES(arg0) {
    let closure_0 = arg0;
    channelId = channelId.getChannelId();
    if (null != channelId) {
      if (null != closure_4) {
        if (closure_4.channelId === channelId) {
          if (null != closure_4.summaryId) {
            let findIndexResult;
            if (dependencyMap2[closure_4.channelId] != null) {
              findIndexResult = obj2.findIndex((id) => {
                let summaryId;
                if (summaryId != null) {
                  summaryId = summaryId.summaryId;
                }
                return id.id === summaryId;
              });
            }
            let findIndexResult1 = findIndexResult;
          }
        }
      }
      findIndexResult1 = undefined;
      if (dependencyMap2[channelId] != null) {
        findIndexResult1 = obj.findIndex((endId) => {
          let bottomVisibleMessage;
          let topVisibleMessage;
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
        obj = { channelId: null, summaryId: null };
        obj[0] = channelId;
        let summaryId1 = channelId.summaryId;
        if (summaryId1 == null) {
          summaryId1 = null;
        }
        obj[1] = summaryId1;
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
      const id = summary.id;
      delete tmp2[tmp];
    }
  },
  REQUEST_CHANNEL_AFFINITIES() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.status = obj.FETCHING;
    obj.lastRequest = Date.now();
  },
  RECEIVE_CHANNEL_AFFINITIES(affinities) {
    affinities = affinities.affinities;
    if (null != affinities.error) {
      let items = [];
      let reduced = {};
      let obj = {};
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
        reduced = affinities.reduce((arg0, channel_id) => {
          arg0[channel_id.channel_id] = channel_id.affinity;
          return arg0;
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
    let channelIds;
    let require;
    ({ channelIds, requestedAt: require } = arg0);
    const reduced = channelIds.reduce((arg0, arg1) => {
      obj = obj[arg1];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.fetching = true;
      obj.lastRequestedAt = closure_0;
      obj.error = undefined;
      arg0[arg1] = obj;
      return arg0;
    }, {});
    let obj = {};
    let merged = Object.assign(obj);
    const merged1 = Object.assign(reduced);
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(requestArgs) {
    let importDefault;
    let require;
    ({ receivedAt: require, error: importDefault } = requestArgs);
    const channelIds = requestArgs.requestArgs.channelIds;
    let dependencyMap;
    let obj = apply;
    dependencyMap = obj.toPairs(requestArgs.summaries).reduce((arg0, arg1) => {
      const tmp = callback2(arg1, 2);
      const first = tmp[0];
      const arr = tmp[1];
      const obj = callback(12);
      const chainResult = callback(12).chain(tmp[1].map((summary) => first(outer1_2[16]).createSummaryFromServer(summary, first)));
      const sortByResult = callback(12).chain(tmp[1].map((summary) => first(outer1_2[16]).createSummaryFromServer(summary, first))).sortBy((startId) => callback(table[12]).extractTimestamp(startId.startId));
      const reversed = callback(12).chain(tmp[1].map((summary) => first(outer1_2[16]).createSummaryFromServer(summary, first))).sortBy((startId) => callback(table[12]).extractTimestamp(startId.startId)).takeRight(75).reverse();
      const takeRightResult = callback(12).chain(tmp[1].map((summary) => first(outer1_2[16]).createSummaryFromServer(summary, first))).sortBy((startId) => callback(table[12]).extractTimestamp(startId.startId)).takeRight(75);
      arg0[first] = reversed.filter((arg0) => Object.keys(arg0).length > 0).value();
      return arg0;
    }, {});
    const reduced = channelIds.reduce((summariesByChannel) => {
      obj = obj[arg1];
      if (obj == null) {
        obj = {};
      }
      if (null != dependencyMap[arg1]) {
        summariesByChannel.summariesByChannel[arg1] = tmp;
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.fetching = false;
      obj.error = closure_1;
      obj.lastReceivedAt = closure_0;
      summariesByChannel.summaryFetchStatusByChannel[arg1] = obj;
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
    let obj = apply;
    const chainResult = obj.chain(channel_id.summaries);
    const tmp2 = importDefault;
    const found = obj.chain(channel_id.summaries).sortBy((start_id) => callback(11).extractTimestamp(start_id.start_id)).filter((arg0) => Object.keys(arg0).length > 0);
    const mapped = found.map((summary) => channel_id(outer1_2[16]).createSummaryFromServer(summary, channel_id));
    const sortByResult = obj.chain(channel_id.summaries).sortBy((start_id) => callback(11).extractTimestamp(start_id.start_id));
    let items = dependencyMap2[channel_id];
    const iter = mapped.reverse();
    if (items == null) {
      items = [];
    }
    const valueResult = mapped.reverse().value();
    const tmp2Result = tmp2(12);
    const combined = tmp2(12).chain(valueResult).concat(items);
    const chainResult1 = tmp2(12).chain(valueResult);
    const sortByResult1 = combined.sortBy((startId) => callback(11).extractTimestamp(startId.startId));
    const takeRightResult = combined.sortBy((startId) => callback(11).extractTimestamp(startId.startId)).takeRight(75);
    const uniqByResult = combined.sortBy((startId) => callback(11).extractTimestamp(startId.startId)).takeRight(75).uniqBy("id");
    dependencyMap2[channel_id] = combined.sortBy((startId) => callback(11).extractTimestamp(startId.startId)).takeRight(75).uniqBy("id").reverse().value();
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
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    let closure_18 = {};
    let closure_19 = {};
  },
  DELETE_SUMMARY(summary) {
    const channelId = summary.summary.channelId;
    let items = dependencyMap2[channelId];
    if (items == null) {
      items = [];
    }
    const index = items.indexOf(summary.summary);
    if (-1 !== index) {
      dependencyMap2[channelId].splice(index, 1);
      const arr2 = dependencyMap2[channelId];
    }
  }
};
const summaryStore = new SummaryStore(require("dispatcher"), obj);
const result = require("handleConnectionOpen").fileFinishedImporting("modules/summaries/SummaryStore.tsx");

export default summaryStore;