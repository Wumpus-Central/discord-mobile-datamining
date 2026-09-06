// discord_app/modules/local_message_caching/LocalMessageCacheManager.native.tsx
import LoggerDefault from "../debug/Logger.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import DateUtils from "../../utils/DateUtils.tsx";
import UploadActionCreatorsDefault from "../../actions/native/UploadActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import MessageRecord from "../../records/MessageRecord.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

require = fn;
function _getKeyForFileId(id) {
  const entries = Object.entries(_getMessages());
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    let file = tmp4[1].file;
    id = undefined;
    if (file != null) {
      id = file.id;
    }
    if (id === id) {
      obj.return();
      return tmp4[0];
    }
  }
}
function removeCachedMessage(arg0) {
  closure_0 = arg0;
  return closure_10(() => _writeMessage(c0, null));
}
function getAllCachedMessages() {
  return closure_10(_getMessages);
}
function messageTimestampIsInInterval(arg0, arg1) {
  if (null != arg0) {
    const tmp4 = _modDef4153();
    const tmp5 = _modDef4153(arg0);
    return DateUtils.isWithinInterval(tmp4, tmp5, arg1);
  } else {
    return false;
  }
}
function createFailedMessage(channel_id) {
  channel_id = channel_id.channel_id;
  ({ content, tts, state } = channel_id);
  let obj = { channelId: channel_id, content, tts, state: MessageStates.SEND_FAILED };
  const tmp3 = file(7752)(obj);
  const id = tmp3;
  ({ timestamp: tmp3.timestamp, file } = channel_id);
  obj = { isHydratingExpiredPendingMessage: state === MessageStates.SENDING };
  file(7456).receiveMessage(channel_id, tmp3, true, obj);
  if (null != file) {
    file(573).wait(() => UploadActionCreatorsDefault.restoreFailedUpload(id.id, file));
    const tmpResult = file(573);
  }
  const obj2 = file(7456);
}
function resumeSendingMessage() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _resumeSendingMessage(arg0) {
  let channel_id = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    closure_3 = tmp5;
    closure_2 = tmp2;
    closure_130_0 = channel_id;
    ({ file, sendMessageOptions: closure_130_1 } = channel_id);
    channel = channel.getChannel(channel_id.channel_id);
    closure_130_2 = channel;
    if (null == channel) {
      return false;
    }
    if (file != null) {
      const items = file.items;
    }
    c1 = items;
    if (items == null) {
      c1 = undefined;
    }
    closure_130_3 = c1;
    await require("asyncRequireImpl")(paths[17], paths.paths);
    const merged = Object.assign(closure_130_0);
    value.default(closure_130_2, new closure_131_5({}), closure_130_3, closure_130_1);
    return true;
  })();
};
let closure_25 = async function _rehydrateFailedMessages(arg0) {
  if (c9 === 2) {
    c9 = 3;
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
      c9 = 2;
      let keys = c8;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_7 = tmp2;
          closure_6 = tmp3;
          closure_134_0 = closure_0;
          closure_134_1 = undefined;
          closure_134_2 = undefined;
          closure_134_3 = undefined;
          let timestamp;
          let state;
          c8 = 1;
          c9 = 1;
          const obj1 = { value: getAllCachedMessages(), done: false };
          return obj1;
        }
      } else {
        if (1 === keys) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_134_1 = value;
            const _Object = Object;
            const _HermesInternal4 = HermesInternal;
            closure_135_11.verbose("rehydrateFailedMessages with " + Object.keys(closure_134_1).length + " messagess");
            closure_2 = closure_134_1;
            keys = Object.keys();
            if (keys === undefined) {
              closure_4 = tmp67;
              closure_3 = tmp66;
              closure_2 = tmp63;
              importDefault = keys;
            } else {
              closure_4 = tmp67;
              closure_3 = tmp66;
              closure_2 = tmp65;
              importDefault = keys;
            }
            c9 = 3;
            tmp65 = closure_134_1;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        }
        while (importDefault[closure_3] !== undefined) {
          closure_5 = tmp12;
          closure_4 = tmp10;
          closure_3 = tmp9;
          closure_2 = tmp8;
          importDefault = tmp7;
          closure_134_2 = tmp12;
          closure_134_3 = closure_134_1[closure_134_2];
          if (closure_134_3.channel_id !== closure_134_0) {
            continue;
          } else {
            let tmp17 = closure_135_19(closure_134_2);
            if (null != closure_135_8.getMessage(closure_134_0, closure_134_3.id)) {
              continue;
            } else {
              timestamp = closure_134_3.timestamp;
              state = closure_134_3.state;
              if (closure_135_21(timestamp, closure_135_14)) {
                if (state === closure_135_9.SENDING) {
                  if (closure_135_21(timestamp, closure_135_13)) {
                    let tmp45 = globalThis;
                    let _JSON2 = JSON;
                    let _HermesInternal3 = HermesInternal;
                    let str3 = "sending message with data ";
                    let verboseResult1 = closure_135_11.verbose("sending message with data " + JSON.stringify(closure_134_3));
                    c8 = 2;
                    c9 = 1;
                    let obj3 = { value: closure_135_23(closure_134_3), done: false };
                    return obj3;
                  }
                }
                let tmp36 = globalThis;
                let _JSON = JSON;
                let _HermesInternal2 = HermesInternal;
                let str2 = "failed message with data ";
                let infoResult = closure_135_11.info("failed message with data " + JSON.stringify(closure_134_3));
                let tmp41 = closure_135_22(closure_134_3);
                continue;
              } else {
                let tmp24 = globalThis;
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
        closure_5 = tmp12;
        closure_4 = tmp10;
        closure_3 = tmp9;
        closure_2 = tmp8;
        importDefault = tmp7;
      }
    } catch (tmp52) {
      c9 = tmp;
      throw tmp52;
    }
  }
};
const MessageStates = fn(1074).MessageStates;
const MutexUtils = fn(14551);
let closure_10 = MutexUtils.createLock();
let closure_11 = new LoggerDefault("LocalMessageCacheManager");
const LocalMessageCacheManagerMessageCacheKey = "LocalMessageCacheManagerMessageCacheKey";
let closure_13 = 5 * DurationsDefault.Millis.MINUTE;
let closure_14 = 14 * DurationsDefault.Millis.DAY;
function _getMessages() {
  const Storage = Storage3.Storage;
  let obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
  if (null == obj) {
    obj = {};
  }
  return obj;
}
function _getMessage(arg0) {

}
function _writeMessage(c0, id) {
  let obj = closure_11;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let channel_id;
  if (id != null) {
    channel_id = id.channel_id;
  }
  closure_11.verbose("_writeMessage", id, channel_id);
  if (typeof _getMessages === "function") {
    const Storage = Storage3.Storage;
    obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
    if (null == obj) {
      obj = {};
    }
    if (null != id) {
      obj = {};
      const merged = Object.assign(id);
      let str = id.content;
      if (str == null) {
        str = "";
      }
      obj.content = str;
      obj[c0] = obj;
      obj.verbose("_writeMessage after write", obj[c0].id, obj[c0].channel_id);
    } else {
      delete tmp[tmp2];
    }
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(LocalMessageCacheManagerMessageCacheKey, obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
class LocalMessageCacheManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = _e;
    set = new Set();
    if (_e in applyArgumentsResult) {
      str = "Cannot initialize private field twice.";
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      tmp5 = set;
      applyArgumentsResult[set] = tmp3;
      tmp6 = closure_3;
      applyArgumentsResult.handlePostConnectionOpen = closure_3(async () => {
        if (c10 === 2) {
          c10 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
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
            c10 = 2;
            if (0 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_6 = tmp8;
                closure_134_0 = undefined;
                closure_134_1 = undefined;
                closure_134_2 = undefined;
                let channel_id;
                let state;
                c9 = 1;
                c10 = 1;
                const obj1 = { value: getAllCachedMessages(), done: false };
                return obj1;
              }
            } else {
              if (1 === tmp8) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c10 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_134_0 = value;
                  closure_134_1 = async function _loop(arg0) {
                    if (c1 === 2) {
                      c1 = 3;
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
                        c1 = 2;
                        if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          if (next === constants.SENDING) {
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(() => {
                              c1(closure_2_2[21]);
                              const obj = { channelId };
                              const messages = obj.fetchMessages(obj);
                            }, 0);
                          }
                          c1 = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      } catch (tmp9) {
                        c1 = tmp;
                        throw tmp9;
                      }
                    }
                  };
                  const _Object = Object;
                  const values = Object.values(closure_134_0);
                  applyArgumentsResult = values[Symbol.iterator]();
                  if (applyArgumentsResult === undefined) {
                    c10 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    c7 = 1;
                    closure_134_2 = tmp34;
                    channel_id = closure_134_2.channel_id;
                    state = closure_134_2.state;
                    const iter4 = closure_134_1(channel_id)[tmp48.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    const next = iter4.next;
                    closure_2 = undefined;
                    const tmp59 = closure_134_1(channel_id);
                  }
                }
              } else if (2 === tmp8) {
                c7 = 0;
                applyArgumentsResult.return();
                throw closure_8;
              } else {
                if (3 === tmp8) {
                  c7 = 2;
                  if (arg0 === 1) {
                    c10 = 3;
                    throw value;
                  } else {
                    closure_2 = value;
                    if (arg0 === 2) {
                      closure_2 = value;
                      c7 = 1;
                      const method = HermesBuiltin.getMethod("return");
                      if (method === undefined) {
                        c7 = 0;
                        applyArgumentsResult.return();
                        c10 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        const iter2 = method(closure_2);
                        HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        if (iter2.done) {
                          c7 = 0;
                          applyArgumentsResult.return();
                          c10 = 3;
                          obj = { value: iter2.value, done: true };
                          return obj;
                        } else {
                          c9 = 3;
                          c10 = 1;
                          return iter2;
                        }
                      }
                    } else {
                      c7 = 1;
                      const tmp20 = value;
                    }
                  }
                } else {
                  c7 = 1;
                  const method1 = HermesBuiltin.getMethod("throw");
                  if (method1 === undefined) {
                    const method2 = HermesBuiltin.getMethod("return");
                    if (method2 !== undefined) {
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    }
                    throw new TypeError("yield* delegate must have a .throw() method");
                  } else {
                    const iter = method1(tmp10);
                    HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                    if (iter.done) {
                      let iter3 = iter;
                    } else {
                      c9 = 3;
                      c10 = 1;
                      return iter;
                    }
                  }
                  tmp10 = closure_8;
                }
                value = iter3.value;
                c7 = 0;
              }
              iter3 = next(tmp20);
              HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter3.done) {
                c9 = 3;
                c10 = 1;
                return iter3;
              }
            }
          } catch (tmp41) {
            closure_8 = tmp41;
            if (tmp4 === c7) {
              c10 = tmp3;
              throw tmp41;
            } else if (tmp2 === tmp43) {
              c9 = tmp;
            } else {
              c9 = tmp5;
            }
          }
        }
      });
      applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
        id = id.id;
        closure_10(() => {
          const tmp = (function _getKeyForMessageId(id) {
            const entries = Object.entries(closure_1_15());
            const obj = entries[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp4 = closure_1_4(tmp2, 2);
              if (tmp4[1].id === id) {
                obj.return();
                return tmp5;
              }
            }
          })(id);
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
        message = message.message;
        const author = message.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        if (id === AuthenticationStore.getId()) {
          id = message.nonce;
          if (id == null) {
            id = message.id;
          }
          if (message.state !== MessageStates.SENDING) {
            if (message.state !== tmp2.SEND_FAILED) {
              c0 = id;
              closure_10(() => _writeMessage(c0, null));
            }
          }
          let obj = applyArgumentsResult.#e;
          obj.add(message.channel_id);
          obj = { key: id, message, sendMessageOptions: message.sendMessageOptions };
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          ({ key: c0, message: message2, file: c1, sendMessageOptions: c2 } = obj);
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
            if (typeof _getMessage === "function") {
              if (typeof _getMessages === "function") {
                const Storage = applyArgumentsResult(dependencyMap[10]).Storage;
                let obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
                if (null == obj) {
                  obj = {};
                }
                obj = { content, type, state: null, channel_id: null, tts: null, id: null, nonce: null, timestamp: null, flags: null, file: null, sendMessageOptions: null };
                let SENDING = c11;
                if (c11 == null) {
                  SENDING = constants.SENDING;
                }
                obj.state = SENDING;
                obj.channel_id = channel_id;
                obj.tts = tts;
                obj.id = id;
                obj.nonce = nonce;
                let toISOStringResult = _undefined;
                if (typeof _undefined !== "string") {
                  toISOStringResult = _undefined.toISOString();
                }
                obj.timestamp = toISOStringResult;
                obj.flags = flags;
                let tmp18 = closure_1_1;
                if (closure_1_1 == null) {
                  let file;
                  if (tmp7 != null) {
                    file = tmp7.file;
                  }
                  tmp18 = file;
                }
                obj.file = tmp18;
                let obj1 = closure_1_2;
                if (null != closure_1_2) {
                  if (obj1 == null) {
                    obj1 = {};
                  }
                  const obj2 = {};
                  const merged = Object.assign(obj1);
                  let sendMessageOptions = obj2;
                } else if (tmp7 != null) {
                  sendMessageOptions = tmp7.sendMessageOptions;
                }
                obj.sendMessageOptions = sendMessageOptions;
                _writeMessage(closure_1_0, obj);
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
        applyArgumentsResult.handleChannelLoaded(channelId.channelId);
      };
      applyArgumentsResult.handleCacheLoaded = function handleCacheLoaded(arg0) {
        const items = [, ];
        ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = arg0);
        for (const item10008 of items) {
          for (const item10013 of item10008) {
            let handleChannelLoadedResult = applyArgumentsResult.handleChannelLoaded(item10013.id);
            continue;
          }
          continue;
        }
      };
      closure_129_0 = undefined;
      closure_129_1 = applyArgumentsResult;
      closure_129_0 = closure_3(async (arg0) => {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let obj1 = importDefault[closure_1_26];
                if (!obj1.has(closure_0)) {
                  obj1.add(closure_0);
                  c2 = 1;
                  c1 = 1;
                  obj1 = {
                    value: (function rehydrateFailedMessages() {
                                const self = this;
                                const apply = closure_1_25.apply;
                                if (typeof apply === "unknown") {
                                  applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(closure_0),
                    done: false
                  };
                  return obj1;
                }
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
            return { value: "HermesInternal", done: null };
          } catch (tmp9) {
            c1 = tmp;
            throw tmp9;
          }
        }
      });
      applyArgumentsResult.handleChannelLoaded = function(arg0) {
        const self = this;
        const apply = applyArgumentsResult.apply;
        if (typeof apply === "unknown") {
          applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      applyArgumentsResult.handleFileUploadStart = function handleFileUploadStart(message) {
        message = message.message;
        if (null != message) {
          let id = message.nonce;
          if (id == null) {
            id = message.id;
          }
          let obj = { key: id, message, file: tmp };
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
            if (typeof _getMessage === "function") {
              if (typeof _getMessages === "function") {
                const Storage = applyArgumentsResult(dependencyMap[10]).Storage;
                let obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
                if (null == obj) {
                  obj = {};
                }
                obj = { content, type, state: null, channel_id: null, tts: null, id: null, nonce: null, timestamp: null, flags: null, file: null, sendMessageOptions: null };
                let SENDING = c11;
                if (c11 == null) {
                  SENDING = constants.SENDING;
                }
                obj.state = SENDING;
                obj.channel_id = channel_id;
                obj.tts = tts;
                obj.id = id;
                obj.nonce = nonce;
                let toISOStringResult = _undefined;
                if (typeof _undefined !== "string") {
                  toISOStringResult = _undefined.toISOString();
                }
                obj.timestamp = toISOStringResult;
                obj.flags = flags;
                let tmp18 = closure_1_1;
                if (closure_1_1 == null) {
                  let file;
                  if (tmp7 != null) {
                    file = tmp7.file;
                  }
                  tmp18 = file;
                }
                obj.file = tmp18;
                let obj1 = closure_1_2;
                if (null != closure_1_2) {
                  if (obj1 == null) {
                    obj1 = {};
                  }
                  const obj2 = {};
                  const merged = Object.assign(obj1);
                  let sendMessageOptions = obj2;
                } else if (tmp7 != null) {
                  sendMessageOptions = tmp7.sendMessageOptions;
                }
                obj.sendMessageOptions = sendMessageOptions;
                _writeMessage(closure_1_0, obj);
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
            { file: null }.file = file;
            closure_0 = tmp2;
            closure_2_10(() => {
              if (typeof closure_2_16 === "function") {
                if (typeof closure_2_15 === "function") {
                  const Storage = file(closure_2_2[10]).Storage;
                  obj = Storage.get(closure_2_12);
                  if (null == obj) {
                    obj = {};
                  }
                  if (null != obj[closure_0]) {
                    obj = {};
                    const merged = Object.assign(tmp7);
                    const merged1 = Object.assign(obj);
                    closure_2_17(closure_0, obj);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            let obj = { file: null };
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
        const obj = { file: file.file };
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
                obj = {};
                const merged = Object.assign(tmp7);
                const merged1 = Object.assign(obj);
                closure_2_17(closure_0, obj);
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
        const obj = { state: constants.SEND_FAILED };
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
                obj = {};
                const merged = Object.assign(tmp7);
                const merged1 = Object.assign(obj);
                closure_2_17(closure_0, obj);
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
}
const prototype = LocalMessageCacheManager.prototype;
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  DispatcherDefault.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate);
  DispatcherDefault.unsubscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
  DispatcherDefault.unsubscribe("UPLOAD_START", this.handleFileUploadStart);
  DispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  DispatcherDefault.unsubscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
  DispatcherDefault.unsubscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
  DispatcherDefault.unsubscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
  DispatcherDefault.unsubscribe("LOAD_MESSAGES_SUCCESS", this.handleLoadMessagesSuccess);
  DispatcherDefault.unsubscribe("CACHE_LOADED", this.handleCacheLoaded);
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  closure_11.verbose("cache manager initialize");
  let subscription = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  let subscription1 = DispatcherDefault.subscribe("MESSAGE_CREATE", this.handleMessageCreate);
  const subscription2 = DispatcherDefault.subscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
  const subscription3 = DispatcherDefault.subscribe("UPLOAD_START", this.handleFileUploadStart);
  const subscription4 = DispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const subscription5 = DispatcherDefault.subscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
  const subscription6 = DispatcherDefault.subscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
  const subscription7 = DispatcherDefault.subscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
  const subscription8 = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  (async () => {
    if (c8 === 2) {
      c8 = 3;
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
      while (true) {
        c8 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp;
            closure_3 = tmp4;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            let channel_id;
            closure_131_3 = undefined;
            let ready;
            let cached;
            c7 = 1;
            c8 = 1;
            let obj1 = { value: getAllCachedMessages(), done: false };
            return obj1;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj2 = { value, done: true };
              return obj2;
            } else {
              closure_131_0 = value;
              let _Object = Object;
              let _HermesInternal2 = HermesInternal;
              let verboseResult = closure_1_11.verbose("initialized with " + Object.keys(closure_131_0).length + " messages in local cache");
              let _Object2 = Object;
              let values = Object.values(closure_131_0);
              _self = values[Symbol.iterator]();
              if (_self === undefined) {
                obj2 = values(573);
                let subscription = obj2.subscribe("LOAD_MESSAGES_SUCCESS", closure_132_0.handleLoadMessagesSuccess);
                let obj3 = values(573);
                let subscription1 = obj3.subscribe("CACHE_LOADED", closure_132_0.handleCacheLoaded);
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c6 = 1;
                closure_131_1 = tmp10;
                channel_id = closure_131_1.channel_id;
                let obj9 = values(5272);
                value = obj9.get(channel_id);
                dependencyMap = value;
                if (value == null) {
                  dependencyMap = { ready: false, cached: false };
                }
                closure_131_3 = dependencyMap;
                ready = closure_131_3.ready;
                cached = closure_131_3.cached;
                let _HermesInternal = HermesInternal;
                let str = "rehydrating cached messages ";
                let str2 = " {ready: ";
                let str3 = ", cached: ";
                let str4 = "}";
                let verboseResult1 = closure_1_11.verbose("rehydrating cached messages " + channel_id + " {ready: " + ready + ", cached: " + cached + "}");
                if (ready) {
                  let verboseResult2 = closure_1_11.verbose("manually invoking handleChannelLoaded");
                  c7 = 3;
                  c8 = 1;
                  obj3 = { value: closure_132_0.handleChannelLoaded(channel_id), done: false };
                  return obj3;
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
};
const localMessageCacheManager = new LocalMessageCacheManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/local_message_caching/LocalMessageCacheManager.native.tsx");

export default localMessageCacheManager;