// === Module 9777: SummaryActionCreators ===

// Module 9777 (SummaryActionCreators)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SummaryStore from "SummaryStore" /* 9778 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, closure_3;

function fetchSummary() {
  return obj(...arguments);
}
let obj = function _fetchSummary() {
  obj = _asyncToGenerator(async (channelId, summaryId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let timestamp;
          let aPIError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              timestamp = undefined;
              aPIError = undefined;
              body = undefined;
              if (SummaryStore.shouldFetch(channelId, summaryId)) {
                const _Date2 = Date;
                timestamp = Date.now();
                const obj5 = { type: "REQUEST_CHANNEL_SUMMARY", channelId, summaryId, requestedAt: timestamp };
                const obj3 = DispatcherDefault;
                obj3.dispatch(obj5);
                aPIError = undefined;
                body = undefined;
                c5 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c6 = 2;
                c7 = 1;
                const obj6 = { url: Routes.CHANNEL_SUMMARY(channelId, summaryId), rejectWithError: false };
                const obj7 = { value: get(obj6), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              let closure_5 = body;
              const self = this;
              const self2 = this;
              aPIError = new closure_131_0(closure_131_2[9]).APIError(closure_5);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              if (body != null) {
                body = body.body;
              }
              c5 = 0;
            }
            const _Date = Date;
            const obj8 = { type: "RECEIVE_CHANNEL_SUMMARY", channelId, summary: body, error: aPIError, requestedAt: timestamp, receivedAt: Date.now() };
            const dispatch = closure_131_1(closure_131_2[7]).dispatch;
            closure_131_1(closure_131_2[7]);
            dispatch(obj8);
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp34) {
          body = tmp34;
          if (0 === c5) {
            c7 = 3;
            throw tmp34;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSummaries() {
  obj = _asyncToGenerator(async (channelId) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let timestamp;
          let aPIError;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              timestamp = undefined;
              aPIError = undefined;
              body = undefined;
              summaries = undefined;
              if (SummaryStore.shouldFetch(channelId)) {
                const _Date2 = Date;
                timestamp = Date.now();
                const obj6 = { type: "REQUEST_CHANNEL_SUMMARIES", channelId, requestedAt: timestamp };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj6);
                aPIError = undefined;
                body = undefined;
                c6 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c7 = 2;
                c8 = 1;
                const obj7 = { url: Routes.CHANNEL_SUMMARIES(channelId), rejectWithError: false };
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else {
            if (1 === c7) {
              c6 = 0;
              const self = this;
              const self2 = this;
              aPIError = new closure_132_0(closure_132_2[9]).APIError(closure_5);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              body = value;
              c6 = 0;
            }
            let summaries1;
            if (body != null) {
              body = body.body;
              if (body != null) {
                summaries1 = body.summaries;
              }
            }
            const _Array = Array;
            if (summaries1 instanceof Array) {
              summaries = tmp18.body.summaries;
            } else {
              let body1;
              if (body != null) {
                body1 = tmp18.body;
              }
              closure_1 = body1;
              if (body1 == null) {
                closure_1 = [];
              }
              summaries = closure_1;
            }
            const obj2 = closure_132_1(closure_132_2[10]);
            summaries = obj2.takeRight(summaries, 75);
            const obj9 = { type: "RECEIVE_CHANNEL_SUMMARIES", channelId, summaries, error, requestedAt: timestamp, receivedAt: Date.now() };
            error = aPIError;
            const dispatch = closure_132_1(closure_132_2[7]).dispatch;
            closure_132_1(closure_132_2[7]);
            if (aPIError == null) {
              error = undefined;
            }
            const _Date = Date;
            dispatch(obj9);
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp42) {
          closure_5 = tmp42;
          if (0 === c6) {
            c8 = 3;
            throw tmp42;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchChannelAffinities() {
  return obj(...arguments);
}
obj = function _fetchChannelAffinities() {
  obj = _asyncToGenerator(async function() {
    let error;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let timestamp;
        let aPIError;
        let body;
        let channel_affinities;
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
            let closure_1 = tmp4;
            timestamp = undefined;
            aPIError = undefined;
            body = undefined;
            channel_affinities = undefined;
            if (SummaryStore.shouldFetchChannelAffinities()) {
              const _Date2 = Date;
              timestamp = Date.now();
              const obj5 = { type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: timestamp };
              const obj4 = DispatcherDefault;
              obj4.dispatch(obj5);
              aPIError = undefined;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: HTTP.get({ url: "/users/@me/affinities/channels", rejectWithError: false }), done: false };
              return obj6;
            } else {
              c6 = 3;
              const obj7 = { value: Promise.resolve(null), done: true };
              return obj7;
            }
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            let closure_4 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_130_0(closure_130_2[9]).APIError(closure_4);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            body = value;
            c4 = 0;
          }
          channel_affinities = undefined;
          if (body != null) {
            body = body.body;
            if (body != null) {
              channel_affinities = body.channel_affinities;
            }
          }
          const obj8 = { type: "RECEIVE_CHANNEL_AFFINITIES", affinities: channel_affinities, error, requestedAt: timestamp, receivedAt: Date.now() };
          error = aPIError;
          const dispatch = closure_130_1(closure_130_2[7]).dispatch;
          const tmp21 = closure_130_1(closure_130_2[7]);
          if (aPIError == null) {
            error = undefined;
          }
          const _Date = Date;
          dispatch(obj8);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp34) {
        closure_3 = tmp34;
        if (0 === c4) {
          c6 = 3;
          throw tmp34;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function fetchSummariesBulk() {
  return obj(...arguments);
}
obj = function _fetchSummariesBulk() {
  obj = _asyncToGenerator(async function(arg0) {
    let aPIError;
    let body;
    let closure_4;
    let flag;
    let flag2;
    let obj13;
    let obj9;
    let substr;
    let summaries;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = substr;
    if (substr == null) {
      closure_2 = [];
    }
    substr = closure_2;
    const _Date2 = Date;
    let requestedAt = Date.now();
    const obj6 = { withQuickSwitcher: flag, withChannelAffinities: flag2 };
    const combined = substr.concat(closure_132_7.defaultChannelIds(obj6));
    const found = combined.filter((item) => {
      channel = channel.getChannel(item);
      obj = closure_1_0(closure_1_2[11]);
      return obj.canSeeChannelSummaries(channel, false, true);
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
        return null == lastReceivedAt || timestamp - lastReceivedAt > closure_1_9;
      }
    });
    substr = found1.slice(0, 50);
    if (0 === substr.length) {
      return Promise.resolve(null);
    }
    const obj8 = { type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: substr, requestedAt };
    const obj11 = closure_132_1(closure_132_2[7]);
    obj11.dispatch(obj8);
    const HTTP = closure_132_0(closure_132_2[8]).HTTP;
    const request = { url: closure_132_8.USER_SUMMARIES, body: obj9, rejectWithError: false };
    obj9 = { channel_ids: substr };
    await HTTP.post(request);
    if (2 === c7) {
      let c6 = 0;
      let closure_7 = body;
      const self = this;
      const self2 = this;
      aPIError = new closure_132_0(closure_132_2[9]).APIError(closure_7);
    } else if (arg0 === 1) {
      let c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      body = value;
      c6 = 0;
    }
    if (body != null) {
      summaries = body.body.summaries;
    }
    const obj12 = { type: "RECEIVE_CHANNEL_SUMMARIES_BULK", requestedAt, receivedAt: Date.now(), summaries, requestArgs: obj13, error: aPIError };
    const _Date = Date;
    const dispatch = closure_132_1(closure_132_2[7]).dispatch;
    const tmp21 = closure_132_1(closure_132_2[7]);
    obj13 = { channelIds: substr };
    dispatch(obj12);
    await "IconComponent";
    requestedAt = tmp4;
    substr = closure_0;
    let obj4 = closure_1;
    if (closure_1 === undefined) {
      obj4 = {};
    }
    flag = obj4.useQuickSwitcher ?? true;
    flag2 = obj4.useChannelAffinities ?? true;
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _deleteSummary() {
  obj = _asyncToGenerator(async (summary) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj4 = { url: Routes.CHANNEL_SUMMARY(summary.channelId, summary.id), rejectWithError: false };
              const obj5 = { value: del(obj4), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            const self = this;
            const self2 = this;
            const aPIError = new closure_130_0(closure_130_2[9]).APIError(closure_1);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "DELETE_SUMMARY", summary };
            obj = closure_130_1(closure_130_2[7]);
            obj.dispatch(obj7);
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (0 === c4) {
            c6 = 3;
            throw tmp20;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Routes = Constants.Routes;
let closure_9 = 30 * DurationsDefault.Millis.SECOND;
let closure_10 = {};
let closure_11 = {};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let connected;
  let obj2;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp = stateFromStores;
  obj = stateFromStores(576);
  const cResult = obj.c(10);
  if (cResult[0] !== arg0) {
    let items = arg0;
    if (undefined === arg0) {
      items = [];
    }
    cResult[0] = arg0;
    cResult[1] = items;
    obj2 = items;
  } else {
    obj2 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    const fn = function o() {
      return connected.isConnected();
    };
    cResult[2] = items1;
    cResult[3] = fn;
    tmp5 = fn;
    tmp4 = items1;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const tmpResult = tmp(573);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[4] !== obj2) {
    const joined = obj2.join(",");
    cResult[4] = obj2;
    cResult[5] = joined;
    tmp8 = joined;
  } else {
    tmp8 = cResult[5];
  }
  let closure_1 = tmp8;
  if (cResult[6] === tmp8) {
    let tmp10;
    let tmp11;
    if (cResult[7] === stateFromStores) {
      tmp10 = cResult[8];
      tmp11 = cResult[9];
    }
    const effect = react.useEffect(tmp10, tmp11);
  }
  const fn2 = function p() {
    function fetch() {
      return closure_0(...arguments);
    }
    const tmp = closure_0;
    if (tmp) {
      closure_0 = _asyncToGenerator(async () => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp;
                c3 = 1;
                c1 = 3;
                c4 = 1;
                const obj4 = { value: fetchChannelAffinities(), done: false };
                return obj4;
              }
            } else {
              if (1 === c1) {
                c3 = 0;
              } else if (2 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              c1 = 2;
              c4 = 1;
              const obj6 = { value: fetchSummariesBulk(c1.split(",")), done: false };
              return obj6;
            }
          } catch (tmp10) {
            let closure_2 = tmp10;
            if (0 === c3) {
              c4 = 3;
              throw tmp10;
            } else {
              c1 = 1;
            }
          }
        }
      });
      const tmp3 = fetch();
    }
  };
  const items2 = [tmp8, stateFromStores];
  cResult[6] = tmp8;
  cResult[7] = stateFromStores;
  cResult[8] = fn2;
  cResult[9] = items2;
  tmp11 = items2;
  tmp10 = fn2;
}) : (() => {
  let connected;
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  let memo;
  obj = items(memo[14]);
  const items1 = [GatewayConnectionStore];
  const stateFromStores = obj.useStateFromStores(items1, () => connected.isConnected());
  const items2 = [items];
  memo = react.useMemo(() => items.join(","), items2);
  const items3 = [memo, stateFromStores];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    obj = function _fetch2() {
      obj = _asyncToGenerator(async () => {
        let closure_2;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_0 = tmp;
                c3 = 1;
                c1 = 3;
                c4 = 1;
                const obj4 = { value: closure_2_15(), done: false };
                return obj4;
              }
            } else {
              if (1 === c1) {
                c3 = 0;
              } else if (2 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              c1 = 2;
              c4 = 1;
              const obj6 = { value: closure_2_17(tmp10.split(",")), done: false };
              return obj6;
            }
          } catch (tmp10) {
            if (0 === c3) {
              c4 = 3;
              throw tmp10;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (stateFromStores) {
      fetch();
    }
  }, items3);
});
let closure_19 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelSummaries(channelIds) {
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  obj = react2;
  const cResult = obj.c(5);
  channelIds = channelIds.channelIds;
  if (cResult[0] !== channelIds) {
    let items = channelIds;
    if (undefined === channelIds) {
      items = [];
    }
    cResult[0] = channelIds;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  closure_19(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SummaryStore];
    const fn = function u() {
      return SummaryStore.topSummaries();
    };
    const items2 = [];
    cResult[2] = items1;
    cResult[3] = fn;
    cResult[4] = items2;
    tmp8 = items2;
    tmp7 = fn;
    tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
    tmp8 = cResult[4];
  }
  const tmpResult = useStateFromStores;
  return tmpResult.useStateFromStoresArray(tmp6, tmp7, tmp8);
}) : (function useChannelSummaries(channelIds) {
  channelIds = channelIds.channelIds;
  if (channelIds === undefined) {
    channelIds = [];
  }
  closure_19(channelIds);
  const items = [SummaryStore];
  obj = useStateFromStores;
  return obj.useStateFromStoresArray(items, () => SummaryStore.topSummaries(), []);
});
function fetchSummaries() {
  return obj(...arguments);
}
function setHighlightedSummary(channelId, arg1) {
  let tmp = arg1;
  obj = { type: "SET_HIGHLIGHTED_SUMMARY", channelId, summaryId: tmp };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (arg1 == null) {
    tmp = null;
  }
  dispatch(obj);
}
function setSelectedSummary(c1, c4) {
  let tmp = c4;
  const tmp2 = null != importDefault && null != tmp;
  if (tmp2) {
    fetchSummary(importDefault, tmp);
  }
  obj = { type: "SET_SELECTED_SUMMARY", channelId: importDefault, summaryId: tmp };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (tmp == null) {
    tmp = null;
  }
  dispatch(obj);
}
function updateVisibleMessages(arg0, arg1) {
  let tmp = arg0;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (arg0 == null) {
    tmp = null;
  }
  let tmp3 = arg1;
  obj = { type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: tmp, bottomVisibleMessage: tmp3 };
  if (arg1 == null) {
    tmp3 = null;
  }
  dispatch(obj);
}
function setSummaryFeedback(summary, rating) {
  obj = DispatcherDefault;
  const obj2 = { type: "SET_SUMMARY_FEEDBACK", summary, rating };
  obj.dispatch(obj2);
}
function deleteSummary(arg0) {
  return obj(...arguments);
}
const result = size.fileFinishedImporting("modules/summaries/SummaryActionCreators.tsx");

export default { setSummaryFeedback, updateVisibleMessages, setSelectedSummary, setHighlightedSummary, fetchSummaries, fetchSummariesBulk, useChannelSummaries: tmp3, deleteSummary };
export { fetchSummary };
export { fetchSummaries };
export { setHighlightedSummary };
export const toggleTopicsBar = function toggleTopicsBar() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "TOGGLE_TOPICS_BAR" });
};
export { setSelectedSummary };
export { updateVisibleMessages };
export const stopPolling = function stopPolling(arg0) {
  if (null == closure_10[arg0]) {
    closure_10[arg0] = 0;
  }
  closure_10[arg0] = closure_10[arg0] + -1;
  if (closure_10[arg0] <= 0) {
    if (null == closure_10[arg0]) {
      closure_10[arg0] = 0;
    }
    closure_10[arg0] = closure_10[arg0];
    const _clearInterval = clearInterval;
    clearInterval(closure_11[arg0]);
  }
};
export { setSummaryFeedback };
export { fetchChannelAffinities };
export { fetchSummariesBulk };
export const useMaybeFetchChannelAffinitiesAndSummaries = tmp2;
export const useChannelSummaries = tmp3;
export { deleteSummary };