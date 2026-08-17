// discord_app/actions/ChannelPinActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../stores/ChannelPinsStore.tsx";
import { FetchState } from "../stores/ChannelPinsStore.tsx";
import ME from "../Constants.tsx";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const require = arg1;
({ AbortCodes: closure_6, Endpoints: error, MAX_PINS_PER_CHANNEL: closure_8 } = ME);
let obj = {
  pinMessage(id, id2) {
    closure_0 = id;
    closure_1 = id2;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp2;
              c0 = tmp3;
              c0 = undefined;
              c1 = undefined;
              ({ id: c0, name: c1 } = closure_1_0);
              obj1 = closure_1_1(7512);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0.id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = closure_1_0(530).HTTP;
            const obj2 = { url: null, rejectWithError: true };
            obj2[0] = closure_1_7.PIN(c0, c1);
            HTTP.put(obj2).catch((arg0) => {
              const aPIError = new closure_2_0(4273).APIError(arg0);
              const code = aPIError.code;
              const intl = closure_2_0(1236).intl;
              const intl2 = closure_2_0(1236).intl;
              let stringResult1 = intl2.string(closure_2_0(1236).t.fEptJP);
              let stringResult3 = intl.string(closure_2_0(1236).t.j2d6Km);
              if (null != code) {
                if (closure_2_6.TOO_MANY_PINS_IN_CHANNEL === code) {
                  const intl15 = tmp(1236).intl;
                  const stringResult2 = intl15.string(tmp(1236).t.HI88Q3);
                  const intl16 = tmp(1236).intl;
                  const formatToPlainString = intl16.formatToPlainString;
                  let t = tmp(1236).t;
                  if (isPrivateResult) {
                    t = { maxPins: null };
                    t[0] = closure_2_8;
                    let formatToPlainStringResult = formatToPlainString(t.Q89oQU, t);
                  } else {
                    obj = { maxPins: null, channelName: null };
                    obj[0] = closure_2_8;
                    obj[1] = c1;
                    formatToPlainStringResult = formatToPlainString(t.NnO1S5, obj);
                  }
                  isPrivateResult = _undefined.isPrivate();
                } else if (tmp18.INVALID_ACCESS === code) {
                  const intl13 = tmp(1236).intl;
                  stringResult3 = intl13.string(tmp(1236).t["25gfQX"]);
                  const intl14 = tmp(1236).intl;
                  stringResult1 = intl14.string(tmp(1236).t.QNnTwN);
                } else if (tmp18.INVALID_PIN_MESSAGE_CHANNEL === code) {
                  const intl11 = tmp(1236).intl;
                  stringResult3 = intl11.string(tmp(1236).t["Q5G6+m"]);
                  const intl12 = tmp(1236).intl;
                  stringResult1 = intl12.string(tmp(1236).t["5hgPfC"]);
                } else if (tmp18.INVALID_THREAD_ARCHIVE_STATE === code) {
                  const intl9 = tmp(1236).intl;
                  stringResult3 = intl9.string(tmp(1236).t.fu6Lbl);
                  const intl10 = tmp(1236).intl;
                  stringResult1 = intl10.string(tmp(1236).t.FmrcZM);
                } else if (tmp18.INVALID_ACTION_SYSTEM_MESSAGE === code) {
                  const intl7 = tmp(1236).intl;
                  stringResult3 = intl7.string(tmp(1236).t["zV0/FC"]);
                  const intl8 = tmp(1236).intl;
                  stringResult1 = intl8.string(tmp(1236).t.C4a7xI);
                } else if (tmp18.UNKNOWN_MESSAGE === code) {
                  const intl5 = tmp(1236).intl;
                  stringResult3 = intl5.string(tmp(1236).t.fkqPro);
                  const intl6 = tmp(1236).intl;
                  stringResult1 = intl6.string(tmp(1236).t.H6fRIg);
                } else {
                  const intl3 = tmp(1236).intl;
                  let anyErrorMessage = aPIError.getAnyErrorMessage();
                  if (anyErrorMessage == null) {
                    const intl4 = tmp(1236).intl;
                    anyErrorMessage = intl4.string(tmp(1236).t.fEptJP);
                  }
                  stringResult1 = anyErrorMessage;
                  stringResult3 = intl3.string(tmp(1236).t.HI88Q3);
                  const stringResult4 = intl3.string(tmp(1236).t.HI88Q3);
                }
              }
              const stringResult = intl.string(closure_2_0(1236).t.j2d6Km);
              obj = { title: stringResult3, body: stringResult1, confirmText: null };
              const intl17 = tmp(1236).intl;
              obj[2] = intl17.string(closure_2_0(1236).t.BddRzS);
              closure_2_1(4827).show(obj);
            });
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  },
  unpinMessage(id, id2) {
    closure_0 = id;
    closure_1 = id2;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              id = tmp4;
              obj1 = closure_1_1(7512);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(closure_1_0.id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = closure_1_0(530).HTTP;
            const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
            obj2[0] = closure_1_7.PIN(id.id, closure_1);
            HTTP.del(obj2).catch(() => {
              obj = callback2(4827);
              obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
              const intl = callback(1236).intl;
              obj[0] = intl.string(callback(1236).t.xFjByk);
              const intl2 = callback(1236).intl;
              obj[1] = intl2.string(callback(1236).t["0R/Toc"]);
              const intl3 = callback(1236).intl;
              obj[2] = intl3.string(callback(1236).t["7NqTJn"]);
              const intl4 = callback(1236).intl;
              obj[3] = intl4.string(callback(1236).t["ETE/oC"]);
              const unpinMessage = closure_1_9.unpinMessage;
              obj[4] = unpinMessage.bind(closure_1_9, callback, callback2);
              return obj.show(obj);
            });
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp8) {
          c3 = tmp;
          throw tmp8;
        }
      }
    })();
  },
  ackPins(channelId) {
    obj = dispatcherDefault;
    obj = { type: "CHANNEL_PINS_ACK", channelId };
    obj.dispatch(obj);
  },
  fetchPins(channelId, reset) {
    const _require = channelId;
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
      let length = pins.getPins(channelId);
      let flag2 = true;
      if (null != length) {
        const state = length.state;
        flag2 = true;
        if (FetchState.FAILED !== state) {
          flag2 = false;
          if (tmp3.LOADING !== state) {
            flag2 = false;
            if (tmp3.LOADED_FINISHED !== state) {
              if (tmp3.LOADED_HAS_MORE === state) {
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
      obj = dispatcherDefault;
      obj = { type: "LOAD_PINNED_MESSAGES", channelId: null, reset: null };
      obj[1] = channelId;
      obj[2] = flag;
      obj.dispatch(obj);
      const HTTP = _sendRequest.HTTP;
      obj = { url: null, query: null, retries: 2, oldFormErrors: true, rejectWithError: true };
      obj[0] = closure_7.PINS(channelId);
      obj1 = { limit: null, before: null };
      obj1[0] = num;
      let toISOStringResult;
      if (before != null) {
        toISOStringResult = before.toISOString();
      }
      obj1[1] = toISOStringResult;
      obj[1] = obj1;
      const value = HTTP.get(obj);
      value.then((body) => {
        obj = closure_1_1(closure_1_2[8]);
        obj = { type: "LOAD_PINNED_MESSAGES_SUCCESS", pins: body.body.items, channelId: closure_0, hasMore: body.body.has_more };
        obj.dispatch(obj);
      }, () => {
        obj = closure_1_1(closure_1_2[8]);
        obj = { type: "LOAD_PINNED_MESSAGES_FAILURE", channelId: closure_0 };
        obj.dispatch(obj);
      });
    }
  }
};
const result = require("set").fileFinishedImporting("actions/ChannelPinActionCreators.tsx");

export default obj;