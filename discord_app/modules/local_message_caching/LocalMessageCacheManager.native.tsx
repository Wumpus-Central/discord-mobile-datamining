// discord_app/modules/local_message_caching/LocalMessageCacheManager.native.tsx
import timestampDefault from "../debug/Logger.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import setDefault from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hooksDefault from "../../../_runtime/04075_hooks.js";
import resetCache from "../../utils/DateUtils.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../records/MessageRecord.tsx";
import closure_6 from "../../stores/AuthenticationStore.tsx";
import closure_7 from "../../stores/ChannelStore.tsx";
import closure_8 from "../../stores/MessageStore.tsx";
import { MessageStates } from "../../Constants.tsx";
import createLock from "../../../discord_common/js/shared/utils/MutexUtils.tsx";

require = arg1;
function _getKeyForFileId(arg0) {
  const entries = Object.entries(_getMessages());
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback2;
    let tmp4 = callback2(tmp2, 2);
    let file = tmp4[1].file;
    let id;
    if (file != null) {
      id = file.id;
    }
    if (id === arg0) {
      let tmp6 = obj;
      obj.return();
      return tmp4[0];
    }
  }
}
function removeCachedMessage(arg0) {
  closure_0 = arg0;
  return callback3(() => closure_1_17(c0, null));
}
function getAllCachedMessages() {
  return callback3(_getMessages);
}
function messageTimestampIsInInterval(arg0, arg1) {
  if (null != arg0) {
    const tmp4 = hooksDefault();
    const tmp5 = hooksDefault(arg0);
    return resetCache.isWithinInterval(tmp4, tmp5, arg1);
  } else {
    return false;
  }
}
function createFailedMessage(channel_id) {
  channel_id = channel_id.channel_id;
  ({ content, tts, state } = channel_id);
  let obj = { channelId: channel_id, content, tts, state: MessageStates.SEND_FAILED };
  const tmp3 = file(7497)(obj);
  closure_0 = tmp3;
  ({ timestamp: tmp3.timestamp, file } = channel_id);
  obj = { isHydratingExpiredPendingMessage: state === MessageStates.SENDING };
  file(7201).receiveMessage(channel_id, tmp3, true, obj);
  if (null != file) {
    file(709).wait(() => file(closure_1_2[16]).restoreFailedUpload(id.id, file));
    const tmpResult = file(709);
  }
}
function resumeSendingMessage() {
  const self = this;
  const apply = _resumeSendingMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resumeSendingMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0) {
      closure_3 = tmp5;
      let channel = tmp2;
      ({ file, sendMessageOptions: c1 } = lib);
      channel = closure_1_7.getChannel(lib.channel_id);
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
      closure_3 = c1;
      yield lib(closure_1_2[18])(closure_1_2[17], closure_1_2.paths);
      const obj = {};
      const merged = Object.assign(lib);
      const tmp16 = new c5(obj);
      arg1.default(channel, tmp16, closure_3, c1);
      return true;
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _rehydrateFailedMessages() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    return (function*(arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          let keys = message;
          if (0 === message) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_7 = tmp2;
              closure_6 = tmp3;
              dependencyMap = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              let timestamp;
              let state;
              message = 1;
              constants = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_20();
              return obj1;
            }
          } else {
            if (1 === keys) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                constants = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                dependencyMap = arg1;
                const _Object = Object;
                const _HermesInternal4 = HermesInternal;
                closure_11.verbose("rehydrateFailedMessages with " + Object.keys(dependencyMap).length + " messagess");
                closure_2 = dependencyMap;
                keys = Object.keys();
                if (keys === undefined) {
                  timestamp = tmp68;
                  closure_3 = tmp67;
                  closure_2 = tmp64;
                  dependencyMap = keys;
                } else {
                  timestamp = tmp68;
                  closure_3 = tmp67;
                  closure_2 = tmp66;
                  dependencyMap = keys;
                }
                constants = 3;
                tmp66 = dependencyMap;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            while (dependencyMap[closure_3] !== undefined) {
              let tmp73 = tmp12;
              state = tmp12;
              let tmp74 = tmp10;
              timestamp = tmp10;
              let tmp75 = tmp9;
              closure_3 = tmp9;
              let tmp76 = tmp8;
              closure_2 = tmp8;
              let tmp77 = tmp7;
              dependencyMap = tmp7;
              let tmp78 = closure_6;
              closure_2 = tmp12;
              let tmp79 = dependencyMap;
              let tmp80 = closure_2;
              closure_3 = dependencyMap[closure_2];
              let tmp81 = closure_3;
              let tmp82 = closure_0;
              if (closure_3.channel_id !== closure_0) {
                continue;
              } else {
                let tmp13 = closure_6;
                let tmp14 = closure_7;
                let tmp15 = callback;
                let tmp16 = closure_2;
                let tmp17 = callback(closure_2);
                let tmp18 = message;
                let tmp19 = closure_0;
                let tmp20 = closure_3;
                let tmp21 = null;
                if (null != message.getMessage(closure_0, closure_3.id)) {
                  continue;
                } else {
                  let tmp83 = closure_6;
                  let tmp84 = closure_7;
                  let tmp85 = closure_3;
                  timestamp = closure_3.timestamp;
                  let tmp86 = closure_3;
                  state = closure_3.state;
                  let tmp87 = callback2;
                  let tmp88 = timestamp;
                  let tmp89 = closure_14;
                  let tmp90 = closure_6;
                  let tmp91 = closure_7;
                  if (callback2(timestamp, closure_14)) {
                    let tmp26 = state;
                    let tmp27 = constants;
                    if (state === constants.SENDING) {
                      let tmp28 = closure_6;
                      let tmp29 = closure_7;
                      let tmp30 = callback2;
                      let tmp31 = timestamp;
                      let tmp32 = closure_13;
                      if (callback2(timestamp, closure_13)) {
                        let tmp42 = closure_6;
                        let tmp43 = closure_7;
                        let tmp44 = closure_11;
                        let tmp45 = globalThis;
                        let _JSON2 = JSON;
                        let tmp46 = closure_3;
                        let _HermesInternal3 = HermesInternal;
                        let str3 = "sending message with data ";
                        let verboseResult1 = closure_11.verbose("sending message with data " + JSON.stringify(closure_3));
                        let tmp48 = callback4;
                        let tmp49 = closure_3;
                        message = 2;
                        let num4 = 1;
                        constants = 1;
                        let obj3 = { value: null, done: false };
                        obj3[0] = callback4(closure_3);
                        return obj3;
                      }
                    }
                    let tmp33 = closure_6;
                    let tmp34 = closure_7;
                    let tmp35 = closure_11;
                    let tmp36 = globalThis;
                    let _JSON = JSON;
                    let tmp37 = closure_3;
                    let _HermesInternal2 = HermesInternal;
                    let str2 = "failed message with data ";
                    let infoResult = closure_11.info("failed message with data " + JSON.stringify(closure_3));
                    let tmp39 = callback3;
                    let tmp40 = closure_3;
                    let tmp41 = callback3(closure_3);
                    continue;
                  } else {
                    let tmp22 = closure_11;
                    let tmp23 = timestamp;
                    let tmp24 = globalThis;
                    let _HermesInternal = HermesInternal;
                    let str = "dropping stale message, timestamp ";
                    let verboseResult2 = closure_11.verbose("dropping stale message, timestamp " + timestamp);
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            state = tmp12;
            timestamp = tmp10;
            closure_3 = tmp9;
            closure_2 = tmp8;
            dependencyMap = tmp7;
          }
        } catch (tmp52) {
          constants = tmp;
          throw tmp52;
        }
      }
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = createLock.createLock();
let closure_11 = new timestampDefault("LocalMessageCacheManager");
const LocalMessageCacheManagerMessageCacheKey = "LocalMessageCacheManagerMessageCacheKey";
let closure_13 = 5 * setDefault.Millis.MINUTE;
let closure_14 = 14 * setDefault.Millis.DAY;
function _getMessages(closure_1_2) {
  const Storage = Storage3.Storage;
  let obj = Storage.get(LocalMessageCacheManagerMessageCacheKey);
  if (null == obj) {
    obj = {};
  }
  return obj;
}
function _getMessage(arg0) {

}
function _writeMessage(arg0, id) {
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
  if (typeof _getMessages !== "function") {
    HermesBuiltin.throwTypeError();
  }
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
    obj[arg0] = obj;
    obj.verbose("_writeMessage after write", obj[arg0].id, obj[arg0].channel_id);
  } else {
    delete tmp[tmp2];
  }
  const Storage2 = Storage3.Storage;
  const result = Storage2.set(LocalMessageCacheManagerMessageCacheKey, obj);
  return obj;
}
initializeDefault;
// CreatePrivateName (0x9e)
class LocalMessageCacheManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    // PrivateIsIn (0x32)
    if (tmp) {
      str = "Cannot initialize private field twice.";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
      return;
    } else {
      tmp5 = tmp4;
      // AddOwnPrivateBySym (0x64)
      tmp6 = closure_3;
      applyArgumentsResult.handlePostConnectionOpen = closure_3(function*() {
        if (c10 === 2) {
          c10 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c10 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_6 = tmp8;
                closure_0 = undefined;
                let values;
                closure_2 = undefined;
                let iter3;
                let next;
                c9 = 1;
                c10 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_20();
                return obj1;
              }
            } else {
              if (1 === tmp8) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c10 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_0 = arg1;
                  values = function _loop(arg0) {
                    closure_0 = arg0;
                    c1 = 0;
                    return (function* _loop(arg0) {
                      if (c1 === 2) {
                        c1 = 3;
                        HermesBuiltin.throwTypeError();
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw arg1;
                        } else if (arg0 === 2) {
                          let obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          return { value: "HermesInternal", done: null };
                        }
                      } else {
                        try {
                          c1 = 2;
                          if (arg0 === 1) {
                            c1 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            if (closure_1_4 === closure_1_9.SENDING) {
                              const _setTimeout = setTimeout;
                              const timerId = setTimeout(() => {
                                let obj = v3(closure_1_2[21]);
                                obj = { channelId: closure_0 };
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
                    })();
                  };
                  const _Object = Object;
                  values = Object.values(closure_0);
                  closure_0 = values[Symbol.iterator]();
                  if (closure_0 === undefined) {
                    c10 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    c7 = 1;
                    closure_2 = tmp35;
                    iter3 = closure_2.channel_id;
                    next = closure_2.state;
                    const iter4 = values(iter3)[tmp50.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter4.next;
                    closure_2 = undefined;
                    const tmp61 = values(iter3);
                  }
                }
              } else if (2 === tmp8) {
                c7 = 0;
                closure_0.return();
                throw closure_8;
              } else {
                if (3 !== tmp8) {
                  c7 = 1;
                  const method = HermesBuiltin.getMethod("throw");
                  if (method === undefined) {
                    const method1 = HermesBuiltin.getMethod("return");
                    if (method1 !== undefined) {
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    }
                    HermesBuiltin.throwTypeError();
                  } else {
                    const iter = method(tmp10);
                    HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                    if (iter.done) {
                      iter3 = iter;
                    } else {
                      c9 = 3;
                      c10 = 1;
                      return iter;
                    }
                  }
                  const value = iter3.value;
                  c7 = 0;
                  tmp10 = closure_8;
                }
                c7 = 2;
                if (arg0 === 1) {
                  c10 = 3;
                  throw arg1;
                } else {
                  closure_2 = arg1;
                  if (arg0 === 2) {
                    closure_2 = arg1;
                    c7 = 1;
                    const method2 = HermesBuiltin.getMethod("return");
                    if (method2 === undefined) {
                      c7 = 0;
                      closure_0.return();
                      c10 = 3;
                      const obj3 = { value: null, done: true };
                      obj3[0] = arg1;
                      return obj3;
                    } else {
                      const iter2 = method2(closure_2);
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                      if (iter2.done) {
                        c7 = 0;
                        closure_0.return();
                        c10 = 3;
                        obj = { value: null, done: true };
                        obj[0] = iter2.value;
                        return obj;
                      } else {
                        c9 = 3;
                        c10 = 1;
                        return iter2;
                      }
                    }
                  } else {
                    c7 = 1;
                    const tmp21 = arg1;
                  }
                }
              }
              iter3 = next(tmp21);
              HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter3.done) {
                c9 = 3;
                c10 = 1;
                return iter3;
              }
            }
          } catch (tmp42) {
            closure_8 = tmp42;
            if (tmp4 === c7) {
              c10 = tmp3;
              throw tmp42;
            } else if (tmp2 === tmp44) {
              c9 = tmp;
            } else {
              c9 = tmp5;
            }
          }
        }
      });
      applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
        id = id.id;
        callback(() => {
          const tmp = (function _getKeyForMessageId(id) {
            const entries = Object.entries(callback2());
            const obj = entries[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp3 = callback;
              let tmp4 = callback(tmp2, 2);
              if (tmp4[1].id === id) {
                let tmp6 = obj;
                obj.return();
                return tmp5;
              }
            }
          })(id);
          if (null != tmp) {
            closure_1_17(tmp, null);
          }
        });
      };
      applyArgumentsResult.handleLogout = function handleLogout() {
        !callback(() => {
          const Storage = callback(table[10]).Storage;
          return Storage.remove(closure_12);
        });
      };
      applyArgumentsResult.handleMessageCreate = function handleMessageCreate(message) {
        message = message.message;
        const author = message.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        if (id === closure_1_6.getId()) {
          id = message.nonce;
          if (id == null) {
            id = message.id;
          }
          const state = message.state;
          if (state !== closure_1_9.SENDING) {
            if (message.state !== tmp2.SEND_FAILED) {
              c0 = id;
              closure_1_10(() => closure_1_17(c0, null));
            }
          }
          // GetOwnPrivateBySym (0x65)
          state.add(message.channel_id);
          const obj = { key: null, message: null, sendMessageOptions: null };
          obj[0] = id;
          obj[1] = message;
          obj[2] = message.sendMessageOptions;
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
          closure_1_10(() => {
            if (typeof closure_1_16 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof closure_1_15 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const Storage = closure_1_0(closure_1_2[10]).Storage;
            let obj = Storage.get(closure_1_12);
            if (null == obj) {
              obj = {};
            }
            obj = { content: c3, type: _undefined, state: null, channel_id: null, tts: null, id: null, nonce: null, timestamp: null, flags: null, file: null, sendMessageOptions: null };
            let SENDING = c11;
            if (c11 == null) {
              SENDING = _undefined.SENDING;
            }
            obj[2] = SENDING;
            obj[3] = c5;
            obj[4] = c6;
            obj[5] = c4;
            obj[6] = c7;
            let toISOStringResult = c8;
            if (typeof c8 !== "string") {
              toISOStringResult = c8.toISOString();
            }
            obj[7] = toISOStringResult;
            obj[8] = c10;
            let tmp6 = closure_1;
            if (closure_1 == null) {
              let file;
              if (tmp2 != null) {
                file = tmp2.file;
              }
              tmp6 = file;
            }
            obj[9] = tmp6;
            obj1 = closure_2;
            if (null != closure_2) {
              if (obj1 == null) {
                obj1 = {};
              }
              const obj2 = {};
              const merged = Object.assign(obj1);
              let sendMessageOptions = obj2;
            } else if (tmp2 != null) {
              sendMessageOptions = tmp2.sendMessageOptions;
            }
            obj[10] = sendMessageOptions;
            closure_1_17(closure_0, obj);
          });
        }
      };
      applyArgumentsResult.handleLoadMessagesSuccess = function handleLoadMessagesSuccess(channelId) {
        closure_0.handleChannelLoaded(channelId.channelId);
      };
      applyArgumentsResult.handleCacheLoaded = function handleCacheLoaded(arg0) {
        const items = [, ];
        ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = arg0);
        for (const item10008 of items) {
          let tmp = item10008;
          let tmp2 = item10008;
          for (const item10013 of item10008) {
            let tmp3 = closure_0;
            let handleChannelLoadedResult = closure_0.handleChannelLoaded(item10013.id);
            continue;
          }
          continue;
        }
      };
      closure_0 = undefined;
      closure_1 = applyArgumentsResult;
      closure_0 = closure_3((arg0) => {
        closure_0 = arg0;
        c2 = 0;
        c1 = 0;
        return (function*(arg0) {
          if (set === 2) {
            set = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              set = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  set = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  set = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  obj1 = set;
                  // GetOwnPrivateBySym (0x65)
                  if (!set.has(closure_0)) {
                    obj1.add(tmp5);
                    c2 = 1;
                    set = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = (function rehydrateFailedMessages(arg0) {
                      const self = this;
                      const apply = closure_25.apply;
                      if (typeof apply === "unknown") {
                        applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(tmp5);
                    return obj1;
                  }
                }
              } else if (arg0 === 1) {
                set = 3;
                throw arg1;
              } else if (arg0 === 2) {
                set = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              set = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp8) {
              set = tmp;
              throw tmp8;
            }
          }
        })();
      });
      applyArgumentsResult.handleChannelLoaded = function(arg0) {
        const self = this;
        const apply = closure_0.apply;
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
          let obj = { key: null, message: null, file: null };
          obj[0] = id;
          obj[1] = message;
          obj[2] = tmp;
          ({ key: closure_0, message: message2, file: closure_1, sendMessageOptions: closure_2 } = obj);
          c3 = undefined;
          c4 = undefined;
          c5 = undefined;
          c6 = undefined;
          c7 = undefined;
          c8 = undefined;
          c9 = undefined;
          let callback;
          c11 = undefined;
          ({ content: c3, id: c4, channel_id: c5, tts: c6, nonce: c7, timestamp: c8, type: c9, flags: c10, state: c11 } = message2);
          callback(() => {
            if (typeof closure_1_16 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof closure_1_15 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const Storage = closure_1_0(closure_1_2[10]).Storage;
            let obj = Storage.get(closure_1_12);
            if (null == obj) {
              obj = {};
            }
            obj = { content: c3, type: _undefined, state: null, channel_id: null, tts: null, id: null, nonce: null, timestamp: null, flags: null, file: null, sendMessageOptions: null };
            let SENDING = c11;
            if (c11 == null) {
              SENDING = _undefined.SENDING;
            }
            obj[2] = SENDING;
            obj[3] = c5;
            obj[4] = c6;
            obj[5] = c4;
            obj[6] = c7;
            let toISOStringResult = c8;
            if (typeof c8 !== "string") {
              toISOStringResult = c8.toISOString();
            }
            obj[7] = toISOStringResult;
            obj[8] = c10;
            let tmp6 = closure_1;
            if (closure_1 == null) {
              let file;
              if (tmp2 != null) {
                file = tmp2.file;
              }
              tmp6 = file;
            }
            obj[9] = tmp6;
            obj1 = closure_2;
            if (null != closure_2) {
              if (obj1 == null) {
                obj1 = {};
              }
              const obj2 = {};
              const merged = Object.assign(obj1);
              let sendMessageOptions = obj2;
            } else if (tmp2 != null) {
              sendMessageOptions = tmp2.sendMessageOptions;
            }
            obj[10] = sendMessageOptions;
            closure_1_17(closure_0, obj);
          });
        }
      };
      applyArgumentsResult.handleUploadProgress = function handleUploadProgress(file) {
        file = file.file;
        callback(() => {
          const tmp2 = closure_1_18(id.id);
          if (null != tmp2) {
            let obj = { file: null };
            obj[0] = id;
            id = tmp2;
            closure_1_10(() => {
              if (typeof closure_1_16 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_1_15 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const Storage = callback(closure_1_2[10]).Storage;
              obj = Storage.get(closure_1_12);
              if (null == obj) {
                obj = {};
              }
              if (null != obj[callback]) {
                obj = {};
                const merged = Object.assign(tmp2);
                const merged1 = Object.assign(obj);
                closure_1_17(tmp, obj);
              }
            });
          }
        });
      };
      applyArgumentsResult.handleUploadComplete = function handleUploadComplete(aborted) {
        if (aborted.aborted) {
          const file = aborted.file;
          callback(() => {
            const tmp = closure_1_18(file.id);
            if (null != tmp) {
              closure_1_17(tmp, null);
            }
          });
        }
      };
      applyArgumentsResult.handleRestoreFailedUpload = function handleRestoreFailedUpload(file) {
        const obj = { file: file.file };
        const messageId = file.messageId;
        callback(() => {
          if (typeof closure_1_16 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof closure_1_15 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const Storage = callback(closure_1_2[10]).Storage;
          obj = Storage.get(closure_1_12);
          if (null == obj) {
            obj = {};
          }
          if (null != obj[callback]) {
            obj = {};
            const merged = Object.assign(tmp2);
            const merged1 = Object.assign(obj);
            closure_1_17(tmp, obj);
          }
        });
      };
      applyArgumentsResult.handleTextMessageFailed = function handleTextMessageFailed(messageId) {
        const obj = { state: constants.SEND_FAILED };
        messageId = messageId.messageId;
        callback(() => {
          if (typeof closure_1_16 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof closure_1_15 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const Storage = callback(closure_1_2[10]).Storage;
          obj = Storage.get(closure_1_12);
          if (null == obj) {
            obj = {};
          }
          if (null != obj[callback]) {
            obj = {};
            const merged = Object.assign(tmp2);
            const merged1 = Object.assign(obj);
            closure_1_17(tmp, obj);
          }
        });
      };
      return applyArgumentsResult;
    }
  }
}
const prototype = LocalMessageCacheManager.prototype;
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("UPLOAD_START", this.handleFileUploadStart);
  const obj4 = dispatcherDefault;
  dispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const obj5 = dispatcherDefault;
  dispatcherDefault.unsubscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
  const obj6 = dispatcherDefault;
  dispatcherDefault.unsubscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
  const obj7 = dispatcherDefault;
  dispatcherDefault.unsubscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
  const obj8 = dispatcherDefault;
  dispatcherDefault.unsubscribe("LOAD_MESSAGES_SUCCESS", this.handleLoadMessagesSuccess);
  const obj9 = dispatcherDefault;
  dispatcherDefault.unsubscribe("CACHE_LOADED", this.handleCacheLoaded);
  const obj10 = dispatcherDefault;
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  closure_11.verbose("cache manager initialize");
  let subscription = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  let obj = dispatcherDefault;
  let subscription1 = dispatcherDefault.subscribe("MESSAGE_CREATE", this.handleMessageCreate);
  let obj2 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
  let obj3 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("UPLOAD_START", this.handleFileUploadStart);
  const obj4 = dispatcherDefault;
  const subscription4 = dispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const obj5 = dispatcherDefault;
  const subscription5 = dispatcherDefault.subscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
  const obj6 = dispatcherDefault;
  const subscription6 = dispatcherDefault.subscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
  const obj7 = dispatcherDefault;
  const subscription7 = dispatcherDefault.subscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
  const obj8 = dispatcherDefault;
  const subscription8 = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  callback(function*() {
    if (c8 === 2) {
      c8 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let num = 2;
        c8 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            let num9 = 3;
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num8 = 3;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let ready = tmp;
            closure_3 = tmp4;
            closure_0 = undefined;
            let values;
            let channel_id;
            closure_3 = undefined;
            ready = undefined;
            let cached;
            let tmp37 = closure_1_20;
            c7 = 1;
            let num7 = 1;
            c8 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_20();
            return obj1;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              let num6 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num5 = 3;
              c8 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let tmp45 = closure_3;
              let tmp46 = ready;
              closure_0 = arg1;
              let tmp47 = closure_1_11;
              let _Object = Object;
              let tmp48 = closure_0;
              let _HermesInternal2 = HermesInternal;
              let verboseResult = closure_1_11.verbose("initialized with " + Object.keys(closure_0).length + " messages in local cache");
              let _Object2 = Object;
              let tmp50 = closure_0;
              values = Object.values(closure_0);
              let tmp52 = values;
              closure_0 = values[Symbol.iterator]();
              let tmp8 = values;
              let tmp9 = closure_0;
              if (closure_0 === undefined) {
                let tmp28 = ready;
                let tmp29 = closure_1_1;
                let tmp30 = closure_1_2;
                obj2 = closure_1_1(closure_1_2[15]);
                let tmp31 = closure_0;
                let subscription = obj2.subscribe("LOAD_MESSAGES_SUCCESS", closure_0.handleLoadMessagesSuccess);
                let tmp33 = closure_1_1;
                let tmp34 = closure_1_2;
                let obj3 = closure_1_1(closure_1_2[15]);
                let tmp35 = closure_0;
                let subscription1 = obj3.subscribe("CACHE_LOADED", closure_0.handleCacheLoaded);
                let num4 = 3;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let tmp53 = closure_3;
                let tmp54 = ready;
                c6 = 1;
                values = tmp10;
                let tmp55 = values;
                channel_id = values.channel_id;
                let tmp56 = closure_1_1;
                let tmp57 = closure_1_2;
                let obj9 = closure_1_1(closure_1_2[20]);
                let tmp58 = channel_id;
                let value = obj9.get(channel_id);
                channel_id = value;
                if (value == null) {
                  channel_id = { ready: false, cached: false };
                }
                let tmp11 = closure_3;
                let tmp12 = ready;
                let tmp13 = channel_id;
                closure_3 = channel_id;
                let tmp14 = closure_3;
                ready = closure_3.ready;
                let tmp15 = closure_3;
                cached = closure_3.cached;
                let tmp16 = closure_1_11;
                let tmp17 = channel_id;
                let tmp18 = ready;
                let tmp19 = cached;
                let _HermesInternal = HermesInternal;
                let str = "rehydrating cached messages ";
                let str2 = " {ready: ";
                let str3 = ", cached: ";
                let str4 = "}";
                let verboseResult1 = closure_1_11.verbose("rehydrating cached messages " + channel_id + " {ready: " + ready + ", cached: " + cached + "}");
                let tmp21 = ready;
                if (ready) {
                  let tmp22 = closure_3;
                  let tmp23 = ready;
                  let tmp24 = closure_1_11;
                  let verboseResult2 = closure_1_11.verbose("manually invoking handleChannelLoaded");
                  let tmp26 = closure_1_0;
                  let tmp27 = channel_id;
                  c7 = 3;
                  let num3 = 1;
                  c8 = 1;
                  obj3 = { value: null, done: false };
                  obj3[0] = closure_1_0.handleChannelLoaded(channel_id);
                  return obj3;
                }
              }
            }
          } else if (2 === tmp4) {
            let tmp5 = cached;
            let tmp6 = cached;
            c6 = 0;
            let tmp7 = closure_0;
            closure_0.return();
            throw cached;
          } else if (arg0 === 1) {
            let num2 = 3;
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            let tmp44 = closure_0;
            closure_0.return();
            let num15 = 3;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c6 = 0;
        }
      }
    }
  })();
};
const localMessageCacheManager = new LocalMessageCacheManager();
let tmp2 = new timestampDefault("LocalMessageCacheManager");
let result = require("set").fileFinishedImporting("modules/local_message_caching/LocalMessageCacheManager.native.tsx");

export default localMessageCacheManager;