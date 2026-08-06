// discord_app/modules/summaries/SummaryActionCreators.tsx
import ME from "ME";
import noop from "noop";
import _handleConnectionOpen from "_handleConnectionOpen";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleQuickSwitcherUpdate from "handleQuickSwitcherUpdate";
import { Routes } from "ME";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function fetchSummary(c1, c4) {
  const self = this;
  const apply = _fetchSummary.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSummary() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c7 = 2;
          let dispatchResult1 = c6;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let aPIError = dispatchResult1;
              let timestamp;
              aPIError = undefined;
              body = undefined;
              body = undefined;
              if (c7.shouldFetch(callback, timestamp)) {
                const _Date2 = Date;
                timestamp = Date.now();
                let obj3 = callback2(outer1_2[7]);
                let obj1 = { type: "REQUEST_CHANNEL_SUMMARY", channelId: null, summaryId: null, requestedAt: null };
                obj1[1] = tmp47;
                obj1[2] = tmp48;
                obj1[3] = timestamp;
                obj3.dispatch(obj1);
                aPIError = undefined;
                body = undefined;
                let c5 = 1;
                const HTTP = callback(outer1_2[8]).HTTP;
                const obj2 = { url: null, rejectWithError: false };
                obj2[0] = outer1_8.CHANNEL_SUMMARY(tmp47, tmp48);
                c6 = 2;
                c7 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else {
            if (1 === dispatchResult1) {
              c5 = 0;
              c5 = body;
              aPIError = new callback(aPIError[9]).APIError(c5);
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              body = arg1;
              body = undefined;
              if (body != null) {
                body = body.body;
              }
              c5 = 0;
            }
            obj1 = timestamp(aPIError[7]);
            const obj4 = { type: "RECEIVE_CHANNEL_SUMMARY", channelId: null, summary: null, error: null, requestedAt: null, receivedAt: null };
            obj4[1] = callback;
            obj4[2] = body;
            obj4[3] = aPIError;
            obj4[4] = timestamp;
            const _Date = Date;
            obj4[5] = Date.now();
            dispatchResult1 = obj1.dispatch(obj4);
          }
          c7 = 3;
        } catch (tmp37) {
          body = tmp37;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp37;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _fetchSummary = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchSummaries(channelId) {
  const self = this;
  const apply = _fetchSummaries.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSummaries() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c8 = 2;
          let dispatchResult1 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let noop = tmp3;
              let body = dispatchResult1;
              let callback2;
              let dependencyMap;
              body = undefined;
              noop = undefined;
              if (c7.shouldFetch(callback)) {
                const _Date2 = Date;
                const timestamp = Date.now();
                callback2 = timestamp;
                let obj4 = outer1_1(outer1_2[7]);
                let obj1 = { type: "REQUEST_CHANNEL_SUMMARIES", channelId: null, requestedAt: null };
                obj1[1] = tmp55;
                obj1[2] = timestamp;
                obj4.dispatch(obj1);
                dependencyMap = undefined;
                body = undefined;
                let c6 = 1;
                const HTTP = callback(outer1_2[8]).HTTP;
                let obj2 = { url: null, rejectWithError: false };
                obj2[0] = c8.CHANNEL_SUMMARIES(tmp55);
                c7 = 2;
                c8 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else {
            if (1 === dispatchResult1) {
              c6 = 0;
              const aPIError = new callback(4184).APIError(_handleConnectionOpen);
              dependencyMap = aPIError;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              body = arg1;
              c6 = 0;
            }
            let summaries;
            if (body != null) {
              body = body.body;
              if (body != null) {
                summaries = body.summaries;
              }
            }
            const _Array = Array;
            if (summaries instanceof Array) {
              summaries = tmp23.body.summaries;
            } else {
              body = undefined;
              if (tmp23 != null) {
                body = tmp23.body;
              }
              callback2 = body;
              if (body == null) {
                callback2 = [];
              }
              summaries = callback2;
            }
            noop = summaries;
            obj1 = callback2(12);
            noop = obj1.takeRight(noop, 75);
            obj2 = callback2(709);
            obj4 = { type: "RECEIVE_CHANNEL_SUMMARIES", channelId: null, summaries: null, error: null, requestedAt: null, receivedAt: null };
            obj4[1] = callback;
            obj4[2] = noop;
            if (dependencyMap == null) {
              dependencyMap = undefined;
            }
            obj4[3] = dependencyMap;
            obj4[4] = callback2;
            const _Date = Date;
            obj4[5] = Date.now();
            dispatchResult1 = obj2.dispatch(obj4);
          }
          c8 = 3;
        } catch (tmp45) {
          _handleConnectionOpen = tmp45;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp45;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _fetchSummaries = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function setHighlightedSummary(channelId) {
  let tmp = arg1;
  let obj = dispatcher;
  obj = { type: "SET_HIGHLIGHTED_SUMMARY", channelId, summaryId: null };
  if (arg1 == null) {
    tmp = null;
  }
  obj[2] = tmp;
  obj.dispatch(obj);
}
function setSelectedSummary(c1, c4) {
  let tmp = c4;
  if (tmp2) {
    fetchSummary(c1, tmp);
  }
  let obj = dispatcher;
  obj = { type: "SET_SELECTED_SUMMARY", channelId: c1, summaryId: null };
  if (tmp == null) {
    tmp = null;
  }
  obj[2] = tmp;
  obj.dispatch(obj);
}
function updateVisibleMessages(arg0, arg1) {
  let tmp = arg0;
  let obj = dispatcher;
  if (arg0 == null) {
    tmp = null;
  }
  let tmp2 = arg1;
  obj = { type: "UPDATE_VISIBLE_MESSAGES", topVisibleMessage: tmp, bottomVisibleMessage: null };
  if (arg1 == null) {
    tmp2 = null;
  }
  obj[2] = tmp2;
  obj.dispatch(obj);
}
function setSummaryFeedback(summary, rating) {
  let obj = dispatcher;
  obj = { type: "SET_SUMMARY_FEEDBACK", summary, rating };
  obj.dispatch(obj);
}
function fetchChannelAffinities() {
  const self = this;
  const apply = _fetchChannelAffinities.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchChannelAffinities() {
  const self = this;
  const tmp = callback(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let body = tmp3;
            let aPIError = tmp7;
            let callback;
            aPIError = undefined;
            body = undefined;
            let channel_affinities;
            if (outer1_7.shouldFetchChannelAffinities()) {
              const _Date2 = Date;
              const timestamp = Date.now();
              callback = timestamp;
              let obj4 = outer1_1(outer1_2[7]);
              let obj1 = { type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: null };
              obj1[1] = timestamp;
              obj4.dispatch(obj1);
              aPIError = undefined;
              body = undefined;
              let c4 = 1;
              const HTTP = outer1_0(outer1_2[8]).HTTP;
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get({ url: "/users/@me/affinities/channels", rejectWithError: false });
              return obj2;
            } else {
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = Promise.resolve(null);
              return obj3;
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            c4 = channel_affinities;
            aPIError = new callback(body[9]).APIError(c4);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            body = arg1;
            c4 = 0;
          }
          channel_affinities = undefined;
          if (body != null) {
            body = body.body;
            if (body != null) {
              channel_affinities = body.channel_affinities;
            }
          }
          obj1 = aPIError(body[7]);
          obj4 = { type: "RECEIVE_CHANNEL_AFFINITIES", affinities: null, error: null, requestedAt: null, receivedAt: null };
          obj4[1] = channel_affinities;
          callback = aPIError;
          if (aPIError == null) {
            callback = undefined;
          }
          obj4[2] = callback;
          obj4[3] = callback;
          const _Date = Date;
          obj4[4] = Date.now();
          obj1.dispatch(obj4);
          c6 = 3;
          return { value: "T", done: null };
        }
      } catch (tmp38) {
        channel_affinities = tmp38;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp38;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const _fetchChannelAffinities = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchSummariesBulk() {
  const self = this;
  const apply = _fetchSummariesBulk.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSummariesBulk() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let aPIError = tmp3;
              let ME = tmp7;
              let flag;
              let dependencyMap;
              let obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.useQuickSwitcher;
              if (flag === undefined) {
                flag = true;
              }
              let flag2 = obj1.useChannelAffinities;
              if (flag2 === undefined) {
                flag2 = true;
              }
              dependencyMap = flag2;
              ME = undefined;
              aPIError = undefined;
              let body;
              let summaries;
              c7 = 1;
              constants = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              dependencyMap = substr;
              if (substr == null) {
                dependencyMap = [];
              }
              substr = dependencyMap;
              const _Date2 = Date;
              ME = Date.now();
              const obj3 = { withQuickSwitcher: null, withChannelAffinities: null };
              obj3[0] = flag;
              obj3[1] = dependencyMap;
              const combined = substr.concat(c7.defaultChannelIds(obj3));
              const found = combined.filter((arg0) => {
                const channel = summaries.getChannel(arg0);
                return substr(table[11]).canSeeChannelSummaries(channel, false, true);
              });
              const found1 = found.filter((arg0) => {
                const timestamp = Date.now();
                const statusResult = tmp.status(arg0);
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
                    tmp5 = timestamp - lastReceivedAt > closure_9;
                  }
                  return tmp5;
                }
              });
              substr = found1.slice(0, 50);
              if (0 === substr.length) {
                constants = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = Promise.resolve(null);
                return obj4;
              } else {
                const obj5 = { type: "REQUEST_CHANNEL_SUMMARIES_BULK", channelIds: null, requestedAt: null };
                obj5[1] = closure_0;
                obj5[2] = outer1_3;
                flag(709).dispatch(obj5);
                let outer1_4;
                let outer1_5;
                summaries = 1;
                const HTTP = substr(530).HTTP;
                const obj6 = { url: null, body: null, rejectWithError: false };
                obj6[0] = constants.USER_SUMMARIES;
                const obj7 = { channel_ids: null };
                obj7[0] = substr;
                obj6[1] = obj7;
                c7 = 3;
                constants = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = HTTP.post(obj6);
                return obj8;
              }
            }
          } else {
            if (2 === tmp7) {
              summaries = 0;
              c7 = body;
              aPIError = new substr(4184).APIError(c7);
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              summaries = 0;
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              body = arg1;
              summaries = 0;
            }
            summaries = undefined;
            if (body != null) {
              summaries = body.body.summaries;
            }
            obj1 = flag(709);
            const obj9 = { type: "RECEIVE_CHANNEL_SUMMARIES_BULK", requestedAt: null, receivedAt: null, summaries: null, requestArgs: null, error: null };
            obj9[1] = ME;
            const _Date = Date;
            obj9[2] = Date.now();
            obj9[3] = summaries;
            const obj10 = { channelIds: null };
            obj10[0] = substr;
            obj9[4] = obj10;
            obj9[5] = aPIError;
            obj1.dispatch(obj9);
            constants = 3;
            return { value: "T", done: null };
          }
        } catch (tmp39) {
          body = tmp39;
          if (tmp4 === summaries) {
            constants = tmp2;
            throw tmp39;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchSummariesBulk = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function useChannelSummaries(channelIds) {
  channelIds = channelIds.channelIds;
  if (channelIds === undefined) {
    channelIds = [];
  }
  if (channelIds === undefined) {
    channelIds = [];
  }
  let stateFromStores;
  let memo;
  const items = [_handleConnectionOpen];
  stateFromStores = channelIds(memo[12]).useStateFromStores(items, () => connected.isConnected());
  const items1 = [channelIds];
  memo = React.useMemo(() => channelIds.join(","), items1);
  const items2 = [memo, stateFromStores];
  const effect = React.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = outer2_3(function*() {
        let closure_0 = tmp3;
        let c3 = 1;
        yield outer2_15();
        if (1 === tmp7) {
          c3 = 0;
          outer2_17(outer1_2.split(","));
          let c1 = 2;
          let c4 = 1;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c4 = 3;
            return { value: "T", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      });
      const _fetch = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (stateFromStores) {
      (function fetch() {
        const self = this;
        const apply = _fetch.apply;
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
  const items3 = [handleQuickSwitcherUpdate];
  return channelIds(memo[12]).useStateFromStoresArray(items3, () => handleQuickSwitcherUpdate.topSummaries(), []);
}
function deleteSummary(arg0) {
  const self = this;
  const apply = _deleteSummary.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteSummary() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let callback = tmp7;
              let c4 = 1;
              const HTTP = lib(outer1_2[8]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_8.CHANNEL_SUMMARY(lib.channelId, lib.id);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = ME;
            const aPIError = new lib(4184).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            obj = callback(709);
            const obj4 = { type: "DELETE_SUMMARY", summary: null };
            obj4[1] = lib;
            obj.dispatch(obj4);
            c4 = 0;
            c6 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp25) {
          ME = tmp25;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp25;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _deleteSummary = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = 30 * require("set").Millis.SECOND;
let closure_10 = {};
let closure_11 = {};
const result = require("_handleConnectionOpen").fileFinishedImporting("modules/summaries/SummaryActionCreators.tsx");

export default { setSummaryFeedback, updateVisibleMessages, setSelectedSummary, setHighlightedSummary, fetchSummaries, fetchSummariesBulk, useChannelSummaries, deleteSummary };
export { fetchSummary };
export { fetchSummaries };
export { setHighlightedSummary };
export const toggleTopicsBar = function toggleTopicsBar() {
  dispatcher.dispatch({ type: "TOGGLE_TOPICS_BAR" });
};
export { setSelectedSummary };
export { updateVisibleMessages };
export const stopPolling = function stopPolling(arg0) {
  if (null == table[arg0]) {
    tmp[arg0] = 0;
  }
  table[arg0] = table[arg0] + -1;
  if (table[arg0] <= 0) {
    if (null == tmp[arg0]) {
      tmp[arg0] = 0;
    }
    tmp[arg0] = tmp[arg0];
    const _clearInterval = clearInterval;
    clearInterval(table2[arg0]);
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
  let stateFromStores;
  let memo;
  const items1 = [_handleConnectionOpen];
  stateFromStores = items(memo[12]).useStateFromStores(items1, () => connected.isConnected());
  const items2 = [items];
  memo = React.useMemo(() => channelIds.join(","), items2);
  const items3 = [memo, stateFromStores];
  const effect = React.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = outer2_3(function*() {
        let closure_0 = tmp3;
        let c3 = 1;
        yield outer2_15();
        if (1 === tmp7) {
          c3 = 0;
          outer2_17(outer1_2.split(","));
          let c1 = 2;
          let c4 = 1;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c4 = 3;
            return { value: "T", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      });
      const _fetch = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (stateFromStores) {
      (function fetch() {
        const self = this;
        const apply = _fetch.apply;
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