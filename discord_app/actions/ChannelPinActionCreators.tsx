// discord_app/actions/ChannelPinActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import ChannelPinsStore2 from "../stores/ChannelPinsStore.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ChannelPinsStore = ChannelPinsStore2;
let _require, c2, c3, unpinMessage;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const FetchState = ChannelPinsStore2.FetchState;
({ AbortCodes: metroRequire, Endpoints: metroImportDefault, MAX_PINS_PER_CHANNEL: metroImportAll } = Constants);
let obj = {
  pinMessage(channel, id) {
    let maxPins;
    let closure_0 = channel;
    let closure_1 = id;
    return (async () => {
      let c0;
      let c1;
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c0 = undefined;
              c1 = undefined;
              ({ id: c0, name: c1 } = tmp2);
              let obj2 = tmp(c2[3]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.unarchiveThreadIfNecessary(tmp2.id), done: false };
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
            const HTTP = tmp2(c2[4]).HTTP;
            const obj6 = { url: closure_1_7.PIN(c0, closure_129_1), rejectWithError: true };
            const put = HTTP.put;
            const putResult = put(obj6);
            putResult.catch((error) => {
              let intl17;
              const aPIError = new _private(dependencyMap[5]).APIError(error);
              const code = aPIError.code;
              const intl = _private(dependencyMap[6]).intl;
              const stringResult = intl.string(_private(dependencyMap[6]).t.j2d6Km);
              const intl2 = _private(dependencyMap[6]).intl;
              let stringResult1 = intl2.string(_private(dependencyMap[6]).t.fEptJP);
              let stringResult3 = stringResult;
              if (null != code) {
                if (constants.TOO_MANY_PINS_IN_CHANNEL === code) {
                  let formatToPlainStringResult;
                  const intl15 = _private(dependencyMap[6]).intl;
                  const stringResult2 = intl15.string(_private(dependencyMap[6]).t.HI88Q3);
                  const isPrivateResult = _private.isPrivate();
                  const intl16 = _private(dependencyMap[6]).intl;
                  const formatToPlainString = intl16.formatToPlainString;
                  const t = _private(dependencyMap[6]).t;
                  if (isPrivateResult) {
                    obj = { maxPins };
                    formatToPlainStringResult = formatToPlainString(t.Q89oQU, obj);
                  } else {
                    const obj2 = { maxPins, channelName };
                    formatToPlainStringResult = formatToPlainString(t.NnO1S5, obj2);
                  }
                  stringResult1 = formatToPlainStringResult;
                  stringResult3 = stringResult2;
                } else if (constants.INVALID_ACCESS === code) {
                  const intl13 = _private(dependencyMap[6]).intl;
                  stringResult3 = intl13.string(_private(dependencyMap[6]).t["25gfQX"]);
                  const intl14 = _private(dependencyMap[6]).intl;
                  stringResult1 = intl14.string(_private(dependencyMap[6]).t.QNnTwN);
                } else if (constants.INVALID_PIN_MESSAGE_CHANNEL === code) {
                  const intl11 = _private(dependencyMap[6]).intl;
                  stringResult3 = intl11.string(_private(dependencyMap[6]).t["Q5G6+m"]);
                  const intl12 = _private(dependencyMap[6]).intl;
                  stringResult1 = intl12.string(_private(dependencyMap[6]).t["5hgPfC"]);
                } else if (constants.INVALID_THREAD_ARCHIVE_STATE === code) {
                  const intl9 = _private(dependencyMap[6]).intl;
                  stringResult3 = intl9.string(_private(dependencyMap[6]).t.fu6Lbl);
                  const intl10 = _private(dependencyMap[6]).intl;
                  stringResult1 = intl10.string(_private(dependencyMap[6]).t.FmrcZM);
                } else if (constants.INVALID_ACTION_SYSTEM_MESSAGE === code) {
                  const intl7 = _private(dependencyMap[6]).intl;
                  stringResult3 = intl7.string(_private(dependencyMap[6]).t["zV0/FC"]);
                  const intl8 = _private(dependencyMap[6]).intl;
                  stringResult1 = intl8.string(_private(dependencyMap[6]).t.C4a7xI);
                } else if (constants.UNKNOWN_MESSAGE === code) {
                  const intl5 = _private(dependencyMap[6]).intl;
                  stringResult3 = intl5.string(_private(dependencyMap[6]).t.fkqPro);
                  const intl6 = _private(dependencyMap[6]).intl;
                  stringResult1 = intl6.string(_private(dependencyMap[6]).t.H6fRIg);
                } else {
                  const intl3 = _private(dependencyMap[6]).intl;
                  const stringResult4 = intl3.string(_private(dependencyMap[6]).t.HI88Q3);
                  let anyErrorMessage = aPIError.getAnyErrorMessage();
                  if (anyErrorMessage == null) {
                    const intl4 = _private(dependencyMap[6]).intl;
                    anyErrorMessage = intl4.string(_private(dependencyMap[6]).t.fEptJP);
                  }
                  stringResult1 = anyErrorMessage;
                  stringResult3 = stringResult4;
                }
              }
              const obj3 = {
                title: stringResult3,
                body: stringResult1,
                confirmText: intl17.string(_private(dependencyMap[6]).t.BddRzS),
              };
              const show = channelName(dependencyMap[7]).show;
              channelName(dependencyMap[7]);
              intl17 = _private(dependencyMap[6]).intl;
              show(obj3);
            });
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    })();
  },
  unpinMessage(channel, id) {
    return (async () => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = tmp3;
              channel = tmp3;
              const obj2 = id(c2[3]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.unarchiveThreadIfNecessary(channel.id), done: false };
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
            const HTTP = channel(c2[4]).HTTP;
            const obj6 = {
              url: closure_1_7.PIN(closure_129_0.id, closure_129_1),
              oldFormErrors: true,
              rejectWithError: true,
            };
            const del = HTTP.del;
            const delResult = del(obj6);
            delResult.catch(() => {
              let intl;
              let intl2;
              let intl3;
              let intl4;
              obj = {
                title: intl.string(closure_0(c2[6]).t.xFjByk),
                body: intl2.string(closure_0(c2[6]).t["0R/Toc"]),
                confirmText: intl3.string(closure_0(c2[6]).t["7NqTJn"]),
                cancelText: intl4.string(closure_0(c2[6]).t["ETE/oC"]),
                onConfirm: unpinMessage.bind(unpinMessage, closure_1_0, closure_1_1),
              };
              const show = closure_1(c2[7]).show;
              closure_1(c2[7]);
              intl = closure_0(c2[6]).intl;
              intl2 = closure_0(c2[6]).intl;
              intl3 = closure_0(c2[6]).intl;
              intl4 = closure_0(c2[6]).intl;
              unpinMessage = unpinMessage.unpinMessage;
              return show(obj);
            });
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c3 = 3;
          throw tmp7;
        }
      }
    })();
  },
  ackPins(channelId) {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_PINS_ACK", channelId };
    obj.dispatch(obj2);
  },
  fetchPins(channelId, reset) {
    let before;
    let obj3;
    let toISOStringResult;
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
      before = reset.before;
    }
    let tmp = flag;
    if (!tmp) {
      const pins = ChannelPinsStore.getPins(channelId);
      let flag2 = true;
      if (null != pins) {
        const state = pins.state;
        flag2 = true;
        if (FetchState.FAILED !== state) {
          flag2 = false;
          if (FetchState.LOADING !== state) {
            flag2 = false;
            if (FetchState.LOADED_FINISHED !== state) {
              if (FetchState.LOADED_HAS_MORE === state) {
                let tmp5;
                if (null == before) {
                  tmp5 = 0 === pins.items.length;
                } else {
                  const items = pins.items;
                  tmp5 = items.at(-1).pinnedAt === before;
                }
                flag2 = tmp5;
              }
            }
          }
        }
      }
      tmp = flag2;
    }
    if (tmp) {
      obj = DispatcherDefault;
      let obj2 = { type: "LOAD_PINNED_MESSAGES", channelId, reset: flag };
      obj.dispatch(obj2);
      const HTTP = require("HTTPUtils").HTTP;
      const request = {
        url: closure_7.PINS(channelId),
        query: obj3,
        retries: 2,
        oldFormErrors: true,
        rejectWithError: true,
      };
      const get = HTTP.get;
      obj3 = { limit: num, before: toISOStringResult };
      toISOStringResult = undefined;
      if (before != null) {
        toISOStringResult = before.toISOString();
      }
      const value = get(request);
      value.then(
        (body) => {
          obj = DispatcherDefault;
          const obj2 = {
            type: "LOAD_PINNED_MESSAGES_SUCCESS",
            pins: body.body.items,
            channelId,
            hasMore: body.body.has_more,
          };
          obj.dispatch(obj2);
        },
        () => {
          obj = DispatcherDefault;
          const obj2 = { type: "LOAD_PINNED_MESSAGES_FAILURE", channelId };
          obj.dispatch(obj2);
        },
      );
    }
  },
};
const result = size.fileFinishedImporting("actions/ChannelPinActionCreators.tsx");

export default obj;
