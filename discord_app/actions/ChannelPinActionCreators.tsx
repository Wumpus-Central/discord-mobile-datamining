// discord_app/actions/ChannelPinActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ChannelPinsStore from "../stores/ChannelPinsStore.tsx";

const require = fn;
const FetchState = fn(11915).FetchState;
const Constants = fn(1074);
({ AbortCodes: metroRequire, Endpoints: closure_7, MAX_PINS_PER_CHANNEL: closure_8 } = Constants);
let obj = {
  pinMessage(channel, id) {
    closure_0 = channel;
    closure_1 = id;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              ({ id: closure_128_0, name: closure_128_1 } = tmp3);
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: tmp2(7967).unarchiveThreadIfNecessary(tmp3.id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = tmp3(1271).HTTP;
            const obj6 = { url: closure_1_7.PIN(closure_128_0, closure_129_1), rejectWithError: true };
            HTTP.put(obj6).catch((error) => {
              const aPIError = new _private(4622).APIError(error);
              const code = aPIError.code;
              const intl = _private(1115).intl;
              const intl2 = _private(1115).intl;
              let stringResult1 = intl2.string(_private(1115).t.fEptJP);
              let stringResult3 = intl.string(_private(1115).t.j2d6Km);
              if (null != code) {
                if (constants.TOO_MANY_PINS_IN_CHANNEL === code) {
                  const intl15 = _private(1115).intl;
                  const stringResult2 = intl15.string(_private(1115).t.HI88Q3);
                  const intl16 = _private(1115).intl;
                  const formatToPlainString = intl16.formatToPlainString;
                  let t = _private(1115).t;
                  if (isPrivateResult) {
                    t = { maxPins };
                    let formatToPlainStringResult = formatToPlainString(t.Q89oQU, t);
                  } else {
                    obj = { maxPins, channelName };
                    formatToPlainStringResult = formatToPlainString(t.NnO1S5, obj);
                  }
                  isPrivateResult = _private.isPrivate();
                } else if (constants.INVALID_ACCESS === code) {
                  const intl13 = _private(1115).intl;
                  stringResult3 = intl13.string(_private(1115).t["25gfQX"]);
                  const intl14 = _private(1115).intl;
                  stringResult1 = intl14.string(_private(1115).t.QNnTwN);
                } else if (constants.INVALID_PIN_MESSAGE_CHANNEL === code) {
                  const intl11 = _private(1115).intl;
                  stringResult3 = intl11.string(_private(1115).t["Q5G6+m"]);
                  const intl12 = _private(1115).intl;
                  stringResult1 = intl12.string(_private(1115).t["5hgPfC"]);
                } else if (constants.INVALID_THREAD_ARCHIVE_STATE === code) {
                  const intl9 = _private(1115).intl;
                  stringResult3 = intl9.string(_private(1115).t.fu6Lbl);
                  const intl10 = _private(1115).intl;
                  stringResult1 = intl10.string(_private(1115).t.FmrcZM);
                } else if (constants.INVALID_ACTION_SYSTEM_MESSAGE === code) {
                  const intl7 = _private(1115).intl;
                  stringResult3 = intl7.string(_private(1115).t["zV0/FC"]);
                  const intl8 = _private(1115).intl;
                  stringResult1 = intl8.string(_private(1115).t.C4a7xI);
                } else if (constants.UNKNOWN_MESSAGE === code) {
                  const intl5 = _private(1115).intl;
                  stringResult3 = intl5.string(_private(1115).t.fkqPro);
                  const intl6 = _private(1115).intl;
                  stringResult1 = intl6.string(_private(1115).t.H6fRIg);
                } else {
                  const intl3 = _private(1115).intl;
                  let anyErrorMessage = aPIError.getAnyErrorMessage();
                  if (anyErrorMessage == null) {
                    const intl4 = _private(1115).intl;
                    anyErrorMessage = intl4.string(_private(1115).t.fEptJP);
                  }
                  stringResult1 = anyErrorMessage;
                  stringResult3 = intl3.string(_private(1115).t.HI88Q3);
                  const stringResult4 = intl3.string(_private(1115).t.HI88Q3);
                }
              }
              const stringResult = intl.string(_private(1115).t.j2d6Km);
              const obj2 = { title: stringResult3, body: stringResult1, confirmText: null };
              const intl17 = _private(1115).intl;
              obj2.confirmText = intl17.string(_private(1115).t.BddRzS);
              channelName(5066).show(obj2);
              const obj4 = channelName(5066);
            });
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  },
  unpinMessage(channel, id) {
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = tmp4;
              channel = tmp4;
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: id(7967).unarchiveThreadIfNecessary(channel.id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = channel(1271).HTTP;
            const obj6 = {
              url: closure_1_7.PIN(closure_129_0.id, closure_129_1),
              oldFormErrors: true,
              rejectWithError: true,
            };
            HTTP.del(obj6).catch(() => {
              const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
              const intl = closure_0(1115).intl;
              obj2.title = intl.string(closure_0(1115).t.xFjByk);
              const intl2 = closure_0(1115).intl;
              obj2.body = intl2.string(closure_0(1115).t["0R/Toc"]);
              const intl3 = closure_0(1115).intl;
              obj2.confirmText = intl3.string(closure_0(1115).t["7NqTJn"]);
              const intl4 = closure_0(1115).intl;
              obj2.cancelText = intl4.string(closure_0(1115).t["ETE/oC"]);
              unpinMessage = unpinMessage.unpinMessage;
              obj2.onConfirm = unpinMessage.bind(unpinMessage, closure_1_0, closure_1_1);
              return closure_1(5066).show(obj2);
            });
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c3 = tmp;
          throw tmp8;
        }
      }
    })();
  },
  ackPins(channelId) {
    DispatcherDefault.dispatch({ type: "CHANNEL_PINS_ACK", channelId });
  },
  fetchPins(channelId, reset) {
    _require = channelId;
    let flag;
    if (reset != null) {
      flag = reset.reset;
    }
    if (flag == null) {
      flag = false;
    }
    let num;
    if (reset != null) {
      num = reset.limit;
    }
    if (num == null) {
      num = 25;
    }
    if (reset != null) {
      const before = reset.before;
    }
    let tmp = flag;
    if (!flag) {
      let length = ChannelPinsStore.getPins(channelId);
      let flag2 = true;
      if (null != length) {
        const state = length.state;
        flag2 = true;
        if (FetchState.FAILED !== state) {
          flag2 = false;
          if (FetchState.LOADING !== state) {
            flag2 = false;
            if (FetchState.LOADED_FINISHED !== state) {
              if (FetchState.LOADED_HAS_MORE === state) {
                if (null == before) {
                  length = length.items.length;
                  let tmp4 = 0 === length;
                } else {
                  const items = length.items;
                  tmp4 = items.at(-1).pinnedAt === before;
                }
              }
            }
          }
        }
      }
      tmp = flag2;
    }
    if (tmp) {
      const obj2 = { type: "LOAD_PINNED_MESSAGES", channelId, reset: flag };
      DispatcherDefault.dispatch(obj2);
      const HTTP = require("HTTPUtils").HTTP;
      const request = {
        url: closure_7.PINS(channelId),
        query: null,
        retries: 2,
        oldFormErrors: true,
        rejectWithError: true,
      };
      const obj3 = { limit: num, before: null };
      let toISOStringResult;
      if (before != null) {
        toISOStringResult = before.toISOString();
      }
      obj3.before = toISOStringResult;
      request.query = obj3;
      value = HTTP.get(request);
      value.then(
        (body) => {
          DispatcherDefault.dispatch({
            type: "LOAD_PINNED_MESSAGES_SUCCESS",
            pins: body.body.items,
            channelId,
            hasMore: body.body.has_more,
          });
        },
        () => {
          DispatcherDefault.dispatch({ type: "LOAD_PINNED_MESSAGES_FAILURE", channelId });
        },
      );
    }
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("actions/ChannelPinActionCreators.tsx");

export default obj;
