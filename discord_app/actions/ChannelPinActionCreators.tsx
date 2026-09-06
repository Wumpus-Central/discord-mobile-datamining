// === Module 11674: ChannelPinActionCreators ===

// Module 11674 (ChannelPinActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelPinsStore from "ChannelPinsStore" /* 11675 */;

const require = fn;
const FetchState = fn(11675).FetchState;
const Constants = fn(1074);
({ AbortCodes: metroRequire, Endpoints: closure_7, MAX_PINS_PER_CHANNEL: closure_8 } = Constants);
let query = {
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              ({ id: closure_128_0, name: closure_128_1 } = tmp3);
              let obj1 = tmp2(7765);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.unarchiveThreadIfNecessary(tmp3.id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = tmp3(1272).HTTP;
            const obj2 = { url: closure_1_7.PIN(closure_128_0, closure_129_1), rejectWithError: true };
            HTTP.put(obj2).catch((error) => {
              const aPIError = new _private(4461).APIError(error);
              const code = aPIError.code;
              const intl = _private(1114).intl;
              const intl2 = _private(1114).intl;
              let stringResult1 = intl2.string(_private(1114).t.fEptJP);
              let stringResult3 = intl.string(_private(1114).t.j2d6Km);
              if (null != code) {
                if (constants.TOO_MANY_PINS_IN_CHANNEL === code) {
                  const intl15 = _private(1114).intl;
                  const stringResult2 = intl15.string(_private(1114).t.HI88Q3);
                  const intl16 = _private(1114).intl;
                  const formatToPlainString = intl16.formatToPlainString;
                  let t = _private(1114).t;
                  if (isPrivateResult) {
                    t = { maxPins };
                    let formatToPlainStringResult = formatToPlainString(t.Q89oQU, t);
                  } else {
                    let obj = { maxPins, channelName };
                    formatToPlainStringResult = formatToPlainString(t.NnO1S5, obj);
                  }
                  isPrivateResult = _private.isPrivate();
                } else if (constants.INVALID_ACCESS === code) {
                  const intl13 = _private(1114).intl;
                  stringResult3 = intl13.string(_private(1114).t["25gfQX"]);
                  const intl14 = _private(1114).intl;
                  stringResult1 = intl14.string(_private(1114).t.QNnTwN);
                } else if (constants.INVALID_PIN_MESSAGE_CHANNEL === code) {
                  const intl11 = _private(1114).intl;
                  stringResult3 = intl11.string(_private(1114).t["Q5G6+m"]);
                  const intl12 = _private(1114).intl;
                  stringResult1 = intl12.string(_private(1114).t["5hgPfC"]);
                } else if (constants.INVALID_THREAD_ARCHIVE_STATE === code) {
                  const intl9 = _private(1114).intl;
                  stringResult3 = intl9.string(_private(1114).t.fu6Lbl);
                  const intl10 = _private(1114).intl;
                  stringResult1 = intl10.string(_private(1114).t.FmrcZM);
                } else if (constants.INVALID_ACTION_SYSTEM_MESSAGE === code) {
                  const intl7 = _private(1114).intl;
                  stringResult3 = intl7.string(_private(1114).t["zV0/FC"]);
                  const intl8 = _private(1114).intl;
                  stringResult1 = intl8.string(_private(1114).t.C4a7xI);
                } else if (constants.UNKNOWN_MESSAGE === code) {
                  const intl5 = _private(1114).intl;
                  stringResult3 = intl5.string(_private(1114).t.fkqPro);
                  const intl6 = _private(1114).intl;
                  stringResult1 = intl6.string(_private(1114).t.H6fRIg);
                } else {
                  const intl3 = _private(1114).intl;
                  let anyErrorMessage = aPIError.getAnyErrorMessage();
                  if (anyErrorMessage == null) {
                    const intl4 = _private(1114).intl;
                    anyErrorMessage = intl4.string(_private(1114).t.fEptJP);
                  }
                  stringResult1 = anyErrorMessage;
                  stringResult3 = intl3.string(_private(1114).t.HI88Q3);
                  const stringResult4 = intl3.string(_private(1114).t.HI88Q3);
                }
              }
              const stringResult = intl.string(_private(1114).t.j2d6Km);
              obj = { title: stringResult3, body: stringResult1, confirmText: null };
              const intl17 = _private(1114).intl;
              obj.confirmText = intl17.string(_private(1114).t.BddRzS);
              channelName(4904).show(obj);
              const obj4 = channelName(4904);
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              id = tmp4;
              channel = tmp4;
              let obj1 = id(7765);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.unarchiveThreadIfNecessary(channel.id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = channel(1272).HTTP;
            const obj2 = { url: closure_1_7.PIN(closure_129_0.id, closure_129_1), oldFormErrors: true, rejectWithError: true };
            HTTP.del(obj2).catch(() => {
              closure_1(4904);
              const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
              const intl = closure_0(1114).intl;
              obj.title = intl.string(closure_0(1114).t.xFjByk);
              const intl2 = closure_0(1114).intl;
              obj.body = intl2.string(closure_0(1114).t["0R/Toc"]);
              const intl3 = closure_0(1114).intl;
              obj.confirmText = intl3.string(closure_0(1114).t["7NqTJn"]);
              const intl4 = closure_0(1114).intl;
              obj.cancelText = intl4.string(closure_0(1114).t["ETE/oC"]);
              unpinMessage = unpinMessage.unpinMessage;
              obj.onConfirm = unpinMessage.bind(unpinMessage, closure_1_0, closure_1_1);
              return obj.show(obj);
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
    const obj = { type: "CHANNEL_PINS_ACK", channelId };
    obj.dispatch(obj);
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
      query = { type: "LOAD_PINNED_MESSAGES", channelId, reset: flag };
      query.dispatch(query);
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: closure_7.PINS(channelId), query: null, retries: 2, oldFormErrors: true, rejectWithError: true };
      query = { limit: num, before: null };
      let toISOStringResult;
      if (before != null) {
        toISOStringResult = before.toISOString();
      }
      query.before = toISOStringResult;
      request.query = query;
      value = HTTP.get(request);
      value.then((body) => {
        const obj = { type: "LOAD_PINNED_MESSAGES_SUCCESS", pins: body.body.items, channelId, hasMore: body.body.has_more };
        obj.dispatch(obj);
      }, () => {
        const obj = { type: "LOAD_PINNED_MESSAGES_FAILURE", channelId };
        obj.dispatch(obj);
      });
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("actions/ChannelPinActionCreators.tsx");

export default query;