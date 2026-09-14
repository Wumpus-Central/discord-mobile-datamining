// === Module 11478: SummaryActionCreators ===

// Module 11478 (SummaryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1270 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SummaryStore from "SummaryStore" /* 11479 */;

require = fn;
function fetchSummary() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _fetchSummary() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        dispatchResult1 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp3;
            closure_130_0 = channelId;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            if (SummaryStore.shouldFetch(channelId, summaryId)) {
              const _Date2 = Date;
              const timestamp = Date.now();
              closure_130_1 = timestamp;
              const obj6 = { type: "REQUEST_CHANNEL_SUMMARY", channelId, summaryId, requestedAt: timestamp };
              DispatcherDefault.dispatch(obj6);
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj7 = { url: Routes.CHANNEL_SUMMARY(channelId, summaryId), rejectWithError: false };
              c6 = 2;
              c7 = 1;
              const obj8 = { value: HTTP.get(obj7), done: false };
              return obj8;
            }
          }
        } else {
          if (1 === dispatchResult1) {
            c5 = 0;
            closure_130_5 = closure_4;
            const aPIError = new closure_131_0(closure_131_2[9]).APIError(closure_130_5);
            closure_130_2 = aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_130_4 = value;
            let body;
            if (closure_130_4 != null) {
              body = closure_130_4.body;
            }
            closure_130_3 = body;
            c5 = 0;
          }
          const obj9 = { type: "RECEIVE_CHANNEL_SUMMARY", channelId: closure_130_0, summary: closure_130_3, error: closure_130_2, requestedAt: closure_130_1, receivedAt: null };
          const _Date = Date;
          obj9.receivedAt = Date.now();
          dispatchResult1 = closure_131_1(closure_131_2[7]).dispatch(obj9);
          const obj2 = closure_131_1(closure_131_2[7]);
        }
        c7 = 3;
      } catch (tmp37) {
        closure_4 = tmp37;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp37;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
function fetchSummaries() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _fetchSummaries() {
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        dispatchResult1 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_4 = tmp3;
            closure_131_0 = channelId;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            if (SummaryStore.shouldFetch(channelId)) {
              const _Date2 = Date;
              const timestamp = Date.now();
              closure_131_1 = timestamp;
              const obj7 = { type: "REQUEST_CHANNEL_SUMMARIES", channelId, requestedAt: timestamp };
              DispatcherDefault.dispatch(obj7);
              closure_131_2 = undefined;
              closure_131_3 = undefined;
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj8 = { url: Routes.CHANNEL_SUMMARIES(channelId), rejectWithError: false };
              c7 = 2;
              c8 = 1;
              const obj9 = { value: HTTP.get(obj8), done: false };
              return obj9;
            }
          }
        } else {
          if (1 === dispatchResult1) {
            c6 = 0;
            closure_131_5 = closure_5;
            const aPIError = new closure_132_0(closure_132_2[9]).APIError(closure_131_5);
            closure_131_2 = aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_131_3 = value;
            c6 = 0;
          }
          let summaries1;
          if (closure_131_3 != null) {
            const body = closure_131_3.body;
            if (body != null) {
              summaries1 = body.summaries;
            }
          }
          const _Array = Array;
          if (summaries1 instanceof Array) {
            let summaries = tmp23.body.summaries;
          } else {
            let body1;
            if (tmp23 != null) {
              body1 = tmp23.body;
            }
            closure_1 = body1;
            if (body1 == null) {
              closure_1 = [];
            }
            summaries = closure_1;
          }
          closure_131_4 = summaries;
          closure_131_4 = closure_132_1(closure_132_2[10]).takeRight(closure_131_4, 75);
          const obj2 = closure_132_1(closure_132_2[10]);
          const obj10 = { type: "RECEIVE_CHANNEL_SUMMARIES", channelId: closure_131_0, summaries: closure_131_4, error: null, requestedAt: null, receivedAt: null };
          error = closure_131_2;
          if (closure_131_2 == null) {
            error = undefined;
          }
          obj10.error = error;
          obj10.requestedAt = closure_131_1;
          const _Date = Date;
          obj10.receivedAt = Date.now();
          dispatchResult1 = closure_132_1(closure_132_2[7]).dispatch(obj10);
          const obj3 = closure_132_1(closure_132_2[7]);
        }
        c8 = 3;
      } catch (tmp45) {
        closure_5 = tmp45;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp45;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
function setHighlightedSummary(channelId, arg1) {
  let tmp = arg1;
  const obj2 = { type: "SET_HIGHLIGHTED_SUMMARY", channelId, summaryId: null };
  if (arg1 == null) {
    tmp = null;
  }
  obj2.summaryId = tmp;
  DispatcherDefault.dispatch(obj2);
}
function setSelectedSummary(channelId, summaryId) {
  let tmp = summaryId;
  if (tmp2) {
    fetchSummary(channelId, tmp);
  }
  const obj2 = { type: "SET_SELECTED_SUMMARY", channelId, summaryId: null };
  if (tmp == null) {
    tmp = null;
  }
  obj2.summaryId = tmp;
  DispatcherDefault.dispatch(obj2);
  tmp2 = null != channelId && null != tmp;
}
function updateVisibleMessages(arg0, arg1) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = null;
  }
  let tmp2 = arg1;
  const obj2 = { type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: tmp, bottomVisibleMessage: null };
  if (arg1 == null) {
    tmp2 = null;
  }
  obj2.bottomVisibleMessage = tmp2;
  DispatcherDefault.dispatch(obj2);
}
function setSummaryFeedback(summary, rating) {
  DispatcherDefault.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary, rating });
}
function fetchChannelAffinities() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _fetchChannelAffinities() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          if (SummaryStore.shouldFetchChannelAffinities()) {
            const _Date2 = Date;
            const timestamp = Date.now();
            closure_129_0 = timestamp;
            const obj6 = { type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: timestamp };
            DispatcherDefault.dispatch(obj6);
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.get({ url: "/users/@me/affinities/channels", rejectWithError: false }), done: false };
            return obj7;
          } else {
            c6 = 3;
            const obj8 = { value: Promise.resolve(null), done: true };
            return obj8;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_129_4 = closure_3;
          const aPIError = new closure_130_0(closure_130_2[9]).APIError(closure_129_4);
          closure_129_1 = aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_129_2 = value;
          c4 = 0;
        }
        let channel_affinities;
        if (closure_129_2 != null) {
          const body = closure_129_2.body;
          if (body != null) {
            channel_affinities = body.channel_affinities;
          }
        }
        closure_129_3 = channel_affinities;
        const obj9 = { type: "RECEIVE_CHANNEL_AFFINITIES", affinities: closure_129_3, error: null, requestedAt: null, receivedAt: null };
        let error = closure_129_1;
        if (closure_129_1 == null) {
          error = undefined;
        }
        obj9.error = error;
        obj9.requestedAt = closure_129_0;
        const _Date = Date;
        obj9.receivedAt = Date.now();
        closure_130_1(closure_130_2[7]).dispatch(obj9);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp38) {
      closure_3 = tmp38;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp38;
      } else {
        c5 = tmp;
      }
    }
  }
};
function fetchSummariesBulk() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _fetchSummariesBulk(arg0) {
  closure_2 = closure_131_0;
  if (closure_131_0 == null) {
    closure_2 = [];
  }
  closure_131_0 = closure_2;
  const _Date2 = Date;
  closure_131_3 = Date.now();
  const combined = closure_131_0.concat(closure_132_7.defaultChannelIds({ withQuickSwitcher: closure_131_1, withChannelAffinities: closure_131_2 }));
  const found = combined.filter((item) => {
    channel = channel.getChannel(item);
    return closure_1_0(closure_1_2[11]).canSeeChannelSummaries(channel, false, true);
  });
  const found1 = found.filter((item) => {
    const timestamp = Date.now();
    const statusResult = closure_1_7.status(item);
    let fetching;
    if (statusResult != null) {
      fetching = statusResult.fetching;
    }
    if (fetching) {
      return false;
    } else {
      let lastReceivedAt;
      if (statusResult != null) {
        lastReceivedAt = statusResult.lastReceivedAt;
      }
      let tmp5 = null == lastReceivedAt;
      if (!tmp5) {
        tmp5 = timestamp - lastReceivedAt > closure_1_9;
      }
      return tmp5;
    }
  });
  const substr = found1.slice(0, 50);
  closure_131_0 = substr;
  if (0 === substr.length) {
    return Promise.resolve(null);
  }
  closure_132_1(closure_132_2[7]).dispatch({ type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: closure_131_0, requestedAt: closure_131_3 });
  const HTTP = closure_132_0(closure_132_2[8]).HTTP;
  const request = { url: closure_132_8.USER_SUMMARIES, body: { channel_ids: closure_131_0 }, rejectWithError: false };
  await HTTP.post(request);
  if (2 === tmp7) {
    c6 = 0;
    closure_131_7 = closure_5;
    const aPIError = new closure_132_0(closure_132_2[9]).APIError(closure_131_7);
    closure_131_4 = aPIError;
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c6 = 0;
    c8 = 3;
    return { value, done: true };
  } else {
    closure_131_5 = value;
    c6 = 0;
  }
  if (closure_131_5 != null) {
    const summaries = closure_131_5.body.summaries;
  }
  closure_131_6 = summaries;
  const _Date = Date;
  closure_132_1(closure_132_2[7]).dispatch({ type: "RECEIVE_CHANNEL_SUMMARIES_BULK", requestedAt: closure_131_3, receivedAt: Date.now(), summaries: closure_131_6, requestArgs: { channelIds: closure_131_0 }, error: closure_131_4 });
  await "HermesInternal";
  closure_4 = tmp3;
  closure_131_0 = closure_0;
  let obj5 = closure_1;
  if (closure_1 === undefined) {
    obj5 = {};
  }
  let flag = obj5.useQuickSwitcher;
  if (flag === undefined) {
    flag = true;
  }
  closure_131_1 = flag;
  let flag2 = obj5.useChannelAffinities;
  if (flag2 === undefined) {
    flag2 = true;
  }
  closure_131_2 = flag2;
  return "PX_16";
};
function useChannelSummaries(channelIds) {
  channelIds = channelIds.channelIds;
  if (channelIds === undefined) {
    channelIds = [];
  }
  if (channelIds === undefined) {
    channelIds = [];
  }
  let memo;
  const items = [GatewayConnectionStore];
  const stateFromStores = channelIds(memo[12]).useStateFromStores(items, () => connected.isConnected());
  const items1 = [channelIds];
  memo = noop.useMemo(() => channelIds.join(","), items1);
  const items2 = [memo, stateFromStores];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch() {
      closure_0 = tmp3;
      await closure_2_15();
      if (1 === tmp7) {
        c3 = 0;
        fetchSummariesBulk(tmp14.split(","));
        c1 = 2;
        c4 = 1;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
    };
    if (stateFromStores) {
      (function fetch() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items2);
  const obj = channelIds(memo[12]);
  const items3 = [SummaryStore];
  return channelIds(memo[12]).useStateFromStoresArray(items3, () => SummaryStore.topSummaries(), []);
}
function deleteSummary(arg0) {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _deleteSummary(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = _require;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Routes.CHANNEL_SUMMARY(_require.channelId, _require.id), rejectWithError: false };
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.del(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const aPIError = new closure_130_0(closure_130_2[9]).APIError(closure_129_1);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const obj7 = { type: "DELETE_SUMMARY", summary: closure_129_0 };
        closure_130_1(closure_130_2[7]).dispatch(obj7);
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Routes = fn(1074).Routes;
let closure_9 = 30 * DurationsDefault.Millis.SECOND;
const dependencyMap = {};
let closure_11 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/summaries/SummaryActionCreators.tsx");

export default { setSummaryFeedback, updateVisibleMessages, setSelectedSummary, setHighlightedSummary, fetchSummaries, fetchSummariesBulk, useChannelSummaries, deleteSummary };
export { fetchSummary };
export { fetchSummaries };
export { setHighlightedSummary };
export const toggleTopicsBar = function toggleTopicsBar() {
  DispatcherDefault.dispatch({ type: "TOGGLE_TOPICS_BAR" });
};
export { setSelectedSummary };
export { updateVisibleMessages };
export const stopPolling = function stopPolling(arg0) {
  if (null == dependencyMap[arg0]) {
    dependencyMap[arg0] = 0;
  }
  dependencyMap[arg0] = dependencyMap[arg0] + -1;
  if (dependencyMap[arg0] <= 0) {
    if (null == dependencyMap[arg0]) {
      dependencyMap[arg0] = 0;
    }
    dependencyMap[arg0] = dependencyMap[arg0];
    const _clearInterval = clearInterval;
    clearInterval(closure_11[arg0]);
  }
};
export { setSummaryFeedback };
export { fetchChannelAffinities };
export { fetchSummariesBulk };
export const useMaybeFetchChannelAffinitiesAndSummaries = function useMaybeFetchChannelAffinitiesAndSummaries() {
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  let memo;
  const items1 = [GatewayConnectionStore];
  const stateFromStores = items(memo[12]).useStateFromStores(items1, () => connected.isConnected());
  const items2 = [items];
  memo = noop.useMemo(() => channelIds.join(","), items2);
  const items3 = [memo, stateFromStores];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch() {
      closure_0 = tmp3;
      await closure_2_15();
      if (1 === tmp7) {
        c3 = 0;
        fetchSummariesBulk(tmp14.split(","));
        c1 = 2;
        c4 = 1;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
    };
    if (stateFromStores) {
      (function fetch() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items3);
};
export { useChannelSummaries };
export { deleteSummary };