// === Module 14410: LocalMessageCacheManager ===

// Module 14410 (LocalMessageCacheManager)
import LoggerDefault from "Logger" /* 3 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import _modDef4467 from "module_4467" /* 4467 */;
import DateUtils from "DateUtils" /* 4558 */;
import UploadActionCreatorsDefault from "UploadActionCreators" /* 11392 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MessageRecord from "MessageRecord" /* 4526 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import MutexUtils from "MutexUtils" /* 14411 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

let _self, channel, closure_8, set;

function _getKeyForFileId(id) {
  const entries = Object.entries(_getMessages());
  obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    let file = tmp4[1].file;
    id = undefined;
    let first = tmp4[0];
    if (file != null) {
      id = file.id;
    }
    if (id === id) {
      obj.return();
      return first;
    }
  }
}
function removeCachedMessage(arg0) {
  let closure_0 = arg0;
  return closure_10(() => closure_2_17(id, null));
}
function getAllCachedMessages() {
  return closure_10(_getMessages);
}
function messageTimestampIsInInterval(arg0, arg1) {
  if (null != arg0) {
    const tmp4 = _modDef4467();
    const tmp5 = _modDef4467(arg0);
    obj = DateUtils;
    return obj.isWithinInterval(tmp4, tmp5, arg1);
  } else {
    return false;
  }
}
function createFailedMessage(channel_id) {
  let content;
  let file;
  let state;
  let tts;
  channel_id = channel_id.channel_id;
  ({ content, tts, state } = channel_id);
  obj = { channelId: channel_id, content, tts, state: MessageStates.SEND_FAILED };
  const tmp3 = file(7261)(obj);
  const id = tmp3;
  ({ timestamp: tmp3.timestamp, file } = channel_id);
  const obj2 = file(6978);
  const obj3 = { isHydratingExpiredPendingMessage: state === MessageStates.SENDING };
  obj2.receiveMessage(channel_id, tmp3, true, obj3);
  if (null != file) {
    const tmpResult = file(584);
    tmpResult.wait(() => {
      obj = UploadActionCreatorsDefault;
      return obj.restoreFailedUpload(id.id, file);
    });
  }
}
function resumeSendingMessage() {
  return obj(...arguments);
}
let obj = function _resumeSendingMessage() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    const channel_id = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0) {
      let file;
      let items;
      closure_3 = tmp4;
      ({ file, sendMessageOptions: c1 } = channel_id);
      channel = channel.getChannel(channel_id.channel_id);
      if (null == channel) {
        return false;
      }
      if (file != null) {
        items = file.items;
      }
      c1 = items;
      if (items == null) {
        c1 = undefined;
      }
      closure_3 = c1;
      await require("asyncRequire")(paths[17], paths.paths);
      const _default = value.default;
      obj = {};
      const merged = Object.assign(channel_id);
      const self = this;
      const self2 = this;
      const tmp13 = new closure_131_5(obj);
      _default(channel, tmp13, closure_3, c1);
      return true;
    })();
  });
  return obj(...arguments);
};
obj = function _rehydrateFailedMessages() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        let closure_2;
        let closure_3;
        let timestamp;
        let state;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_7 = tmp;
            let closure_6 = tmp2;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            timestamp = undefined;
            state = undefined;
            c8 = 1;
            c9 = 1;
            const obj4 = { value: getAllCachedMessages(), done: false };
            return obj4;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = value;
              const _Object = Object;
              const _HermesInternal4 = HermesInternal;
              closure_135_11.verbose("rehydrateFailedMessages with " + Object.keys(closure_1).length + " messagess");
              closure_2 = closure_1;
              const keys = Object.keys();
              const tmp63 = closure_1;
              if (keys === undefined) {
                let closure_4 = tmp65;
                closure_3 = tmp64;
                closure_2 = tmp61;
                closure_1 = keys;
              } else {
                closure_4 = tmp65;
                closure_3 = tmp64;
                closure_2 = tmp63;
                closure_1 = keys;
              }
              c9 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
          }
          while (closure_1[closure_3] !== undefined) {
            let closure_5 = tmp11;
            closure_4 = tmp9;
            closure_1 = tmp6;
            closure_2 = tmp11;
            closure_3 = closure_1[closure_2];
            if (closure_3.channel_id !== closure_0) {
              continue;
            } else {
              let tmp16 = closure_135_19(closure_2);
              if (null != closure_135_8.getMessage(closure_0, closure_3.id)) {
                continue;
              } else {
                timestamp = closure_3.timestamp;
                state = closure_3.state;
                if (closure_135_21(timestamp, closure_135_14)) {
                  if (state === closure_135_9.SENDING) {
                    if (closure_135_21(timestamp, closure_135_13)) {
                      let tmp44 = globalThis;
                      let _JSON2 = JSON;
                      let _HermesInternal3 = HermesInternal;
                      let str3 = "sending message with data ";
                      let verboseResult1 = closure_135_11.verbose("sending message with data " + JSON.stringify(closure_3));
                      c8 = 2;
                      c9 = 1;
                      let obj6 = { value: closure_135_23(closure_3), done: false };
                      return obj6;
                    }
                  }
                  let tmp35 = globalThis;
                  let _JSON = JSON;
                  let _HermesInternal2 = HermesInternal;
                  let str2 = "failed message with data ";
                  let infoResult = closure_135_11.info("failed message with data " + JSON.stringify(closure_3));
                  let tmp40 = closure_135_22(closure_3);
                  continue;
                } else {
                  let tmp23 = globalThis;
                  let _HermesInternal = HermesInternal;
                  let str = "dropping stale message, timestamp ";
                  let verboseResult2 = closure_135_11.verbose("dropping stale message, timestamp " + timestamp);
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          closure_5 = tmp11;
          closure_4 = tmp9;
          closure_3 = tmp8;
          closure_2 = tmp7;
          closure_1 = tmp6;
        }
      } catch (tmp51) {
        c9 = 3;
        throw tmp51;
      }
    }
  });
  return obj(...arguments);
};
const MessageStates = Constants.MessageStates;
let closure_10 = MutexUtils.createLock();
let tmp2 = new LoggerDefault("LocalMessageCacheManager");
const unpackModuleId = tmp2;
const LocalMessageCacheManagerMessageCacheKey = "LocalMessageCacheManagerMessageCacheKey";
let closure_13 = 5 * DurationsDefault.Millis.MINUTE;
let closure_14 = 14 * DurationsDefault.Millis.DAY;
function _getMessages() {
  const Storage = Storage3.Storage;
  obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
  if (null == obj) {
    obj = {};
  }
  return obj;
}
function _getMessage(arg0) {

}
function _writeMessage(arg0, id) {
  let str;
  id = undefined;
  const verbose = closure_11.verbose;
  if (id != null) {
    id = id.id;
  }
  let channel_id;
  if (id != null) {
    channel_id = id.channel_id;
  }
  verbose("_writeMessage", id, channel_id);
  if (typeof _getMessages === "function") {
    const Storage = Storage3.Storage;
    let obj3 = Storage.get(LocalMessageCacheManagerMessageCacheKey);
    if (null == obj3) {
      obj3 = {};
    }
    if (null != id) {
      const obj4 = { content: str };
      const merged = Object.assign(id);
      str = id.content;
      if (str == null) {
        str = "";
      }
      obj3[arg0] = obj4;
      closure_11.verbose("_writeMessage after write", obj3[arg0].id, obj3[arg0].channel_id);
    } else {
      delete obj2[tmp7];
    }
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(LocalMessageCacheManagerMessageCacheKey, obj3);
    return obj3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
class LocalMessageCacheManager extends LifecycleManager {
  #e;
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    set = new Set();
    if (_e in applyArgumentsResult) {
      let str = "Cannot initialize private field twice.";
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      let tmp5 = set;
      applyArgumentsResult[set] = _e;
      applyArgumentsResult.handlePostConnectionOpen = _asyncToGenerator(async () => {
        let value;
        if (c10 === 2) {
          c10 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c7;
          try {
            let _loop;
            let _undefined;
            let channel_id;
            c10 = 2;
            if (0 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_6 = tmp3;
                applyArgumentsResult = undefined;
                _loop = undefined;
                _undefined = undefined;
                channel_id = undefined;
                let state;
                c9 = 1;
                c10 = 1;
                const obj4 = { value: getAllCachedMessages(), done: false };
                return obj4;
              }
            } else {
              let iter4;
              let next;
              let tmp15;
              let iter3;
              if (1 === c9) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c10 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  applyArgumentsResult = value;
                  _loop = function _loop(channel_id) {
                    closure_0 = channel_id;
                    let c1 = 0;
                    return (function* _loop(arg0) {
                      if (c1 === 2) {
                        c1 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp2 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          let obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        try {
                          c1 = 2;
                          if (arg0 === 1) {
                            c1 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            obj = { value, done: true };
                            return obj;
                          } else {
                            if (state === constants.SENDING) {
                              const _setTimeout = setTimeout;
                              const timerId = setTimeout(() => {
                                obj = closure_2_1(closure_2_2[21]);
                                const obj2 = { channelId };
                                const messages = obj.fetchMessages(obj2);
                              }, 0);
                            }
                            c1 = 3;
                            return { value: "IconComponent", done: null };
                          }
                        } catch (tmp8) {
                          c1 = 3;
                          throw tmp8;
                        }
                      }
                    })();
                  };
                  const _Object = Object;
                  const values = Object.values(applyArgumentsResult);
                  applyArgumentsResult = values[Symbol.iterator]();
                  if (applyArgumentsResult === undefined) {
                    c10 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c7 = 1;
                    _undefined = tmp29;
                    channel_id = _undefined.channel_id;
                    state = _undefined.state;
                    const tmp53 = _loop(channel_id);
                    iter4 = tmp53[tmp42.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter4.next;
                    _undefined = undefined;
                  }
                }
              } else if (2 === c9) {
                c7 = 0;
                applyArgumentsResult.return();
                throw closure_8;
              } else {
                if (3 === c9) {
                  c7 = 2;
                  if (arg0 === 1) {
                    c10 = 3;
                    throw value;
                  } else {
                    _undefined = value;
                    if (arg0 === 2) {
                      _undefined = value;
                      c7 = 1;
                      const method = HermesBuiltin.getMethod("return");
                      if (method === undefined) {
                        c7 = 0;
                        applyArgumentsResult.return();
                        c10 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
                      } else {
                        const iter2 = method(_undefined);
                        HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        if (iter2.done) {
                          c7 = 0;
                          value = iter2.value;
                          applyArgumentsResult.return();
                          c10 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          c9 = 3;
                          c10 = 1;
                          return iter2;
                        }
                      }
                    } else {
                      c7 = 1;
                      tmp15 = value;
                    }
                  }
                } else {
                  c7 = 1;
                  const str = "throw";
                  const method1 = HermesBuiltin.getMethod("throw");
                  const tmp5 = closure_8;
                  if (method1 === undefined) {
                    const method2 = HermesBuiltin.getMethod("return");
                    if (method2 !== undefined) {
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    }
                    throw new TypeError("yield* delegate must have a .throw() method");
                  } else {
                    const tmp8 = iter4;
                    const iter = method1(tmp5);
                    HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                    if (iter.done) {
                      iter3 = iter;
                    } else {
                      c9 = 3;
                      c10 = 1;
                      return iter;
                    }
                  }
                }
                const value2 = iter3.value;
                c7 = 0;
              }
              iter3 = next(tmp15);
              HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter3.done) {
                c9 = 3;
                c10 = 1;
                return iter3;
              }
            }
          } catch (tmp36) {
            closure_8 = tmp36;
            if (0 === c7) {
              c10 = 3;
              throw tmp36;
            } else if (1 === tmp38) {
              c9 = 2;
            } else {
              c9 = 4;
            }
          }
        }
      });
      applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
        id = id.id;
        let tmp = closure_10(() => {
          function _getKeyForMessageId(id) {
            const entries = Object.entries(closure_1_15());
            obj = entries[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp4 = closure_1_4(tmp2, 2);
              if (tmp4[1].id === id) {
                obj.return();
                return tmp5;
              }
            }
          }
          const tmp = _getKeyForMessageId(id);
          if (null != tmp) {
            _writeMessage(tmp, null);
          }
        });
      };
      applyArgumentsResult.handleLogout = function handleLogout() {
        !closure_1_10(() => {
          const Storage = closure_1_0(closure_1_2[10]).Storage;
          return Storage.remove(closure_1_12);
        });
      };
      applyArgumentsResult.handleMessageCreate = function handleMessageCreate(message) {
        let c0;
        let c1;
        let c10;
        let c11;
        let c2;
        let c3;
        let c4;
        let c5;
        let c6;
        let c7;
        let c8;
        let c9;
        let message2;
        message = message.message;
        const author = message.author;
        let id1;
        const sendMessageOptions = message.sendMessageOptions;
        if (author != null) {
          id1 = author.id;
        }
        if (id1 === AuthenticationStore.getId()) {
          let id = message.nonce;
          if (id == null) {
            id = message.id;
          }
          if (message.state !== MessageStates.SENDING) {
            if (message.state !== tmp2.SEND_FAILED) {
              closure_10(() => closure_2_17(id, null));
            }
          }
          obj = require.#e;
          obj.add(message.channel_id);
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          const obj2 = { key: id, message, sendMessageOptions };
          ({ key: c0, message: message2, file: c1, sendMessageOptions: c2 } = obj2);
          c3 = undefined;
          c4 = undefined;
          c5 = undefined;
          c6 = undefined;
          c7 = undefined;
          c8 = undefined;
          c9 = undefined;
          c10 = undefined;
          c11 = undefined;
          ({ content: c3, id: c4, channel_id: c5, tts: c6, nonce: c7, timestamp: c8, type: c9, flags: c10, state: c11 } = message2);
          closure_10(() => {
            let SENDING;
            let sendMessageOptions;
            let tmp18;
            let toISOStringResult;
            if (typeof _getMessage === "function") {
              if (typeof _getMessages === "function") {
                const Storage = Storage3.Storage;
                obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
                if (null == obj) {
                  obj = {};
                }
                const obj2 = { content, type, state: SENDING, channel_id, tts, id, nonce, timestamp: toISOStringResult, flags, file: tmp18, sendMessageOptions };
                SENDING = c11;
                if (c11 == null) {
                  SENDING = constants.SENDING;
                }
                toISOStringResult = _undefined;
                if (typeof _undefined !== "string") {
                  toISOStringResult = _undefined.toISOString();
                }
                tmp18 = closure_1;
                if (closure_1 == null) {
                  let file;
                  if (obj[closure_0] != null) {
                    file = tmp7.file;
                  }
                  tmp18 = file;
                }
                let obj4 = closure_2;
                if (null != closure_2) {
                  if (obj4 == null) {
                    obj4 = {};
                  }
                  const obj5 = {};
                  const merged = Object.assign(obj4);
                  sendMessageOptions = obj5;
                } else if (obj[closure_0] != null) {
                  sendMessageOptions = tmp7.sendMessageOptions;
                }
                _writeMessage(closure_0, obj2);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }
      };
      applyArgumentsResult.handleLoadMessagesSuccess = function handleLoadMessagesSuccess(channelId) {
        require.handleChannelLoaded(channelId.channelId);
      };
      applyArgumentsResult.handleCacheLoaded = function handleCacheLoaded(arg0) {
        const items = [, ];
        ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = arg0);
        for (const item10008 of items) {
          for (const item10013 of item10008) {
            let handleChannelLoadedResult = require.handleChannelLoaded(item10013.id);
            continue;
          }
          continue;
        }
      };
      applyArgumentsResult = _asyncToGenerator(async (arg0) => {
        function rehydrateFailedMessages() {
          return closure_1_25(...arguments);
        }
        closure_0 = arg0;
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (!applyArgumentsResult[closure_1_26].has(closure_0)) {
                applyArgumentsResult[closure_1_26].add(closure_0);
                c2 = 1;
                c1 = 1;
                const obj5 = { value: rehydrateFailedMessages(closure_0), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            }
            c1 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp8) {
            c1 = 3;
            throw tmp8;
          }
        }
      });
      applyArgumentsResult.handleChannelLoaded = function(arg0) {
        return closure_0(...arguments);
      };
      applyArgumentsResult.handleFileUploadStart = function handleFileUploadStart(message) {
        let _undefined;
        let c10;
        let c11;
        let c3;
        let c4;
        let c5;
        let c6;
        let c7;
        let c8;
        let c9;
        let channel_id;
        let closure_0;
        let closure_1;
        let closure_2;
        let content;
        let flags;
        let message2;
        let nonce;
        let tts;
        let type;
        message = message.message;
        if (null != message) {
          let id = message.nonce;
          if (id == null) {
            id = message.id;
          }
          obj = { key: id, message, file: tmp };
          ({ key: closure_0, message: message2, file: closure_1, sendMessageOptions: closure_2 } = obj);
          c3 = undefined;
          c4 = undefined;
          c5 = undefined;
          c6 = undefined;
          c7 = undefined;
          c8 = undefined;
          c9 = undefined;
          c10 = undefined;
          c11 = undefined;
          ({ content: c3, id: c4, channel_id: c5, tts: c6, nonce: c7, timestamp: c8, type: c9, flags: c10, state: c11 } = message2);
          c10(() => {
            let SENDING;
            let sendMessageOptions;
            let tmp18;
            let toISOStringResult;
            if (typeof _getMessage === "function") {
              if (typeof _getMessages === "function") {
                const Storage = Storage3.Storage;
                obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
                if (null == obj) {
                  obj = {};
                }
                const obj2 = { content, type, state: SENDING, channel_id, tts, id, nonce, timestamp: toISOStringResult, flags, file: tmp18, sendMessageOptions };
                SENDING = c11;
                if (c11 == null) {
                  SENDING = constants.SENDING;
                }
                toISOStringResult = _undefined;
                if (typeof _undefined !== "string") {
                  toISOStringResult = _undefined.toISOString();
                }
                tmp18 = closure_1;
                if (closure_1 == null) {
                  let file;
                  if (obj[closure_0] != null) {
                    file = tmp7.file;
                  }
                  tmp18 = file;
                }
                let obj4 = closure_2;
                if (null != closure_2) {
                  if (obj4 == null) {
                    obj4 = {};
                  }
                  const obj5 = {};
                  const merged = Object.assign(obj4);
                  sendMessageOptions = obj5;
                } else if (obj[closure_0] != null) {
                  sendMessageOptions = tmp7.sendMessageOptions;
                }
                _writeMessage(closure_0, obj2);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }
      };
      applyArgumentsResult.handleUploadProgress = function handleUploadProgress(file) {
        file = file.file;
        closure_10(() => {
          const tmp2 = _getKeyForFileId(file.id);
          if (null != tmp2) {
            obj = { file };
            let closure_0 = tmp2;
            closure_2_10(() => {
              if (typeof closure_2_16 === "function") {
                if (typeof closure_2_15 === "function") {
                  const Storage = file(closure_2_2[10]).Storage;
                  obj = Storage.get(closure_2_12);
                  if (null == obj) {
                    obj = {};
                  }
                  if (null != obj[closure_0]) {
                    const obj2 = {};
                    const merged = Object.assign(tmp7);
                    const merged1 = Object.assign(obj);
                    closure_2_17(closure_0, obj2);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
          }
        });
      };
      applyArgumentsResult.handleUploadComplete = function handleUploadComplete(aborted) {
        if (aborted.aborted) {
          const file = aborted.file;
          closure_10(() => {
            const tmp = _getKeyForFileId(file.id);
            if (null != tmp) {
              _writeMessage(tmp, null);
            }
          });
        }
      };
      applyArgumentsResult.handleRestoreFailedUpload = function handleRestoreFailedUpload(file) {
        const messageId = file.messageId;
        closure_10(() => {
          if (typeof closure_2_16 === "function") {
            if (typeof closure_2_15 === "function") {
              const Storage = file(closure_2_2[10]).Storage;
              obj = Storage.get(closure_2_12);
              if (null == obj) {
                obj = {};
              }
              if (null != obj[closure_0]) {
                const obj2 = {};
                const merged = Object.assign(tmp7);
                const merged1 = Object.assign(obj);
                closure_2_17(closure_0, obj2);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      };
      applyArgumentsResult.handleTextMessageFailed = function handleTextMessageFailed(messageId) {
        messageId = messageId.messageId;
        closure_10(() => {
          if (typeof closure_2_16 === "function") {
            if (typeof closure_2_15 === "function") {
              const Storage = file(closure_2_2[10]).Storage;
              obj = Storage.get(closure_2_12);
              if (null == obj) {
                obj = {};
              }
              if (null != obj[closure_0]) {
                const obj2 = {};
                const merged = Object.assign(tmp7);
                const merged1 = Object.assign(obj);
                closure_2_17(closure_0, obj2);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      };
      return applyArgumentsResult;
    }
  }
  _terminate() {
    obj = DispatcherDefault;
    obj.unsubscribe("LOGOUT", this.handleLogout);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("UPLOAD_START", this.handleFileUploadStart);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
    const obj7 = DispatcherDefault;
    obj7.unsubscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
    const obj8 = DispatcherDefault;
    obj8.unsubscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
    const obj9 = DispatcherDefault;
    obj9.unsubscribe("LOAD_MESSAGES_SUCCESS", this.handleLoadMessagesSuccess);
    const obj10 = DispatcherDefault;
    obj10.unsubscribe("CACHE_LOADED", this.handleCacheLoaded);
    const obj11 = DispatcherDefault;
    obj11.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  _initialize() {
    const self = this;
    let verboseResult = closure_11.verbose("cache manager initialize");
    obj = DispatcherDefault;
    let subscription = obj.subscribe("LOGOUT", this.handleLogout);
    let obj2 = DispatcherDefault;
    let subscription1 = obj2.subscribe("MESSAGE_CREATE", this.handleMessageCreate);
    let obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
    let obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("UPLOAD_START", this.handleFileUploadStart);
    let obj5 = DispatcherDefault;
    const subscription4 = obj5.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
    let obj6 = DispatcherDefault;
    const subscription5 = obj6.subscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
    let obj7 = DispatcherDefault;
    const subscription6 = obj7.subscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
    let obj8 = DispatcherDefault;
    const subscription7 = obj8.subscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
    let obj9 = DispatcherDefault;
    const subscription8 = obj9.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    let tmp11 = (async () => {
      let closure_0;
      let value;
      if (c8 === 2) {
        c8 = 3;
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
        while (true) {
          let values;
          let channel_id;
          let closure_3;
          let ready;
          let cached;
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_4 = tmp;
              _self = undefined;
              values = undefined;
              channel_id = undefined;
              closure_3 = undefined;
              ready = undefined;
              cached = undefined;
              c7 = 1;
              c8 = 1;
              let obj6 = { value: getAllCachedMessages(), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj7 = { value, done: true };
                return obj7;
              } else {
                _self = value;
                let _Object = Object;
                let _HermesInternal2 = HermesInternal;
                let verboseResult = closure_1_11.verbose("initialized with " + Object.keys(_self).length + " messages in local cache");
                let _Object2 = Object;
                values = Object.values(_self);
                _self = values[Symbol.iterator]();
                if (_self === undefined) {
                  let obj3 = values(closure_2[15]);
                  let subscription = obj3.subscribe("LOAD_MESSAGES_SUCCESS", closure_132_0.handleLoadMessagesSuccess);
                  let obj4 = values(closure_2[15]);
                  let subscription1 = obj4.subscribe("CACHE_LOADED", closure_132_0.handleCacheLoaded);
                  c8 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  let c6 = 1;
                  values = tmp10;
                  channel_id = values.channel_id;
                  let obj9 = values(closure_2[20]);
                  value = obj9.get(channel_id);
                  closure_2 = value;
                  if (value == null) {
                    closure_2 = { ready: false, cached: false };
                  }
                  closure_3 = closure_2;
                  ready = closure_3.ready;
                  cached = closure_3.cached;
                  let _HermesInternal = HermesInternal;
                  let str = "rehydrating cached messages ";
                  let str2 = " {ready: ";
                  let str3 = ", cached: ";
                  let str4 = "}";
                  let verboseResult1 = closure_1_11.verbose("rehydrating cached messages " + channel_id + " {ready: " + ready + ", cached: " + cached + "}");
                  let tmp21 = ready;
                  if (tmp21) {
                    let verboseResult2 = closure_1_11.verbose("manually invoking handleChannelLoaded");
                    c7 = 3;
                    c8 = 1;
                    let obj8 = { value: closure_132_0.handleChannelLoaded(channel_id), done: false };
                    return obj8;
                  }
                }
              }
            } else if (2 === tmp4) {
              c6 = 0;
              _self.return();
              throw MessageRecord;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              _self.return();
              c8 = 3;
              obj = { value, done: true };
              return obj;
            }
            c6 = 0;
          }
        }
      }
    })();
  }
}
const prototype = LocalMessageCacheManager.prototype;
const localMessageCacheManager = new LocalMessageCacheManager();
let result = size.fileFinishedImporting("modules/local_message_caching/LocalMessageCacheManager.native.tsx");

export default localMessageCacheManager;