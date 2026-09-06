// === Module 11965: TypingStore ===

// Module 11965 (TypingStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function handleTypingStart(arg0) {
  ({ channelId, userId, guildId, customTypingIndicatorConfig } = arg0);
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = closure_13;
  }
  let obj = {};
  const merged = Object.assign(tmp);
  clearTimeout(obj[userId]);
  const timerId = setTimeout(() => {
    const obj = { type: "TYPING_STOP", channelId, userId, guildId };
    obj.dispatch(obj);
  }, closure_8);
  obj[userId] = timerId;
  dependencyMap[channelId] = obj;
  if (null != guildId) {
    let tmp6 = dependencyMap2[guildId];
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    obj = {};
    const merged1 = Object.assign(tmp6);
    let tmp10 = obj[channelId];
    if (tmp10 == null) {
      tmp10 = closure_13;
    }
    obj = {};
    const merged2 = Object.assign(tmp10);
    const _clearTimeout = clearTimeout;
    clearTimeout(obj[userId]);
    obj[userId] = timerId;
    obj[channelId] = obj;
    dependencyMap2[guildId] = obj;
  }
  let tmp16 = undefined !== customTypingIndicatorConfig;
  if (tmp16) {
    tmp16 = obj1[userId] !== customTypingIndicatorConfig;
  }
  if (tmp16) {
    obj1 = {};
    const merged3 = Object.assign(obj1);
    obj1[userId] = customTypingIndicatorConfig;
  }
}
function handleTypingStop(arg0) {
  ({ channelId, userId, guildId } = arg0);
  if (null != dependencyMap[channelId]) {
    if (null != tmp6[userId]) {
      let obj = {};
      const merged = Object.assign(tmp6);
      const _clearTimeout = clearTimeout;
      clearTimeout(obj[userId]);
      delete tmp5[tmp2];
      dependencyMap[channelId] = obj;
      if (null != guildId) {
        if (null != dependencyMap2[guildId]) {
          if (null != tmp27[channelId]) {
            if (null != tmp28[userId]) {
              obj = {};
              const merged1 = Object.assign(tmp28);
              delete tmp5[tmp2];
              obj = {};
              const merged2 = Object.assign(tmp27);
              const _Object = Object;
              if (0 === Object.keys(obj).length) {
                delete tmp4[tmp];
              } else {
                obj[channelId] = obj;
              }
              const _Object2 = Object;
              if (0 === Object.keys(obj).length) {
                delete tmp[tmp3];
              } else {
                dependencyMap2[guildId] = obj;
              }
            }
          }
        }
      }
      if (userId in closure_12) {
        const _Object3 = Object;
        const values = Object.values(dependencyMap);
        if (!values.some((item) => userId in item)) {
          const obj1 = {};
          const merged3 = Object.assign(closure_12);
          delete tmp[tmp2];
          closure_12 = obj1;
        }
      }
    }
  }
  return false;
}
function handleConnectionOpen() {
  closure_10 = {};
  closure_11 = {};
  closure_12 = {};
}
const SlowmodeType = fn(7687).SlowmodeType;
const Endpoints = fn(1074).Endpoints;
let closure_8 = 10 * DurationsDefault.Millis.SECOND;
let closure_9 = 1.5 * DurationsDefault.Millis.SECOND;
const dependencyMap = {};
const dependencyMap2 = {};
let closure_12 = {};
let closure_13 = Object.freeze({});
let closure_14 = Object.freeze({});
const Store = initializeDefault.Store;
class TypingStore extends Store {
}
const prototype = TypingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore);
};
prototype["getTypingUsers"] = function getTypingUsers(channelId) {
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = closure_13;
  }
  return tmp;
};
prototype["getTypingUsersByGuild"] = function getTypingUsersByGuild(arg0) {
  let tmp = dependencyMap2[arg0];
  if (tmp == null) {
    tmp = closure_14;
  }
  return tmp;
};
prototype["isTyping"] = function isTyping(isStage, id) {
  let tmp = dependencyMap[isStage];
  if (tmp == null) {
    tmp = closure_13;
  }
  return null != tmp[id];
};
prototype["getCustomTypingIndicatorConfig"] = function getCustomTypingIndicatorConfig(arg0) {
  let tmp = closure_12[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
TypingStore.displayName = "TypingStore";
const typingStore = new TypingStore(DispatcherDefault, {
  TYPING_START: handleTypingStart,
  TYPING_STOP: handleTypingStop,
  TYPING_START_LOCAL: function handleTypingStartLocal(channelId) {
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else if (channelId === channelId(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      return false;
    } else {
      let tmp3 = null != obj;
      if (tmp3) {
        tmp3 = obj.channelId !== channelId;
      }
      if (tmp3) {
        if (null != obj.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj.timeout);
        }
        obj = null;
      }
      const _Date = Date;
      const timestamp = Date.now();
      const result = 0.8 * closure_8;
      if (null != obj) {
        return false;
      }
      if (null == obj) {
        let num3 = closure_9;
      } else {
        num3 = 0;
      }
      const _setTimeout = setTimeout;
      obj = {
        channelId,
        timeout: setTimeout(() => {
            let tmp = null != c3;
            if (tmp) {
              tmp = c3.channelId === channelId;
            }
            if (tmp) {
              tmp = id === AuthenticationStore.getId();
            }
            if (tmp) {
              tmp = null != c3.timeout;
            }
            if (tmp) {
              c3.timeout = null;
              let tmp10 = closure_10[channelId];
              if (tmp10 == null) {
                tmp10 = closure_13;
              }
              let num = 0;
              if (tmp10 !== closure_13) {
                const _Object = Object;
                num = Object.keys(tmp10).length;
              }
              if (num <= 5) {
                const HTTP = HTTPUtils.HTTP;
                obj = { url: Endpoints.TYPING(channelId), oldFormErrors: true, rejectWithError: true };
                HTTP.post(obj).then((status) => {
                  if (200 === status.status) {
                    let num = status.body.message_send_cooldown_ms;
                    if (num == null) {
                      num = 0;
                    }
                    let num2 = status.body.thread_create_cooldown_ms;
                    if (num2 == null) {
                      num2 = 0;
                    }
                    if (num > 0) {
                      id(573);
                      obj = { type: "SLOWMODE_SET_COOLDOWN", channelId, slowmodeType: SlowmodeType.SendMessage, cooldownMs: num };
                      obj.dispatch(obj);
                    }
                    if (num2 > 0) {
                      obj = { type: "SLOWMODE_SET_COOLDOWN", channelId, slowmodeType: SlowmodeType.CreateThread, cooldownMs: num2 };
                      id(573).dispatch(obj);
                      const obj3 = id(573);
                    }
                  }
                });
                const postResult = HTTP.post(obj);
              }
            }
          }, num3),
        prevSend: timestamp
      };
      obj = { channelId, userId: id, guildId: null };
      const channel = ChannelStore.getChannel(channelId);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      obj.guildId = guildId;
      handleTypingStart(obj);
    }
  },
  TYPING_STOP_LOCAL: function handleTypingStopLocal(channelId) {
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    let tmp2 = null != id;
    if (tmp2) {
      let tmp10Result = null != _null;
      if (tmp10Result) {
        tmp10Result = _null.channelId === channelId;
      }
      if (tmp10Result) {
        tmp10Result = null != _null.timeout;
      }
      if (tmp10Result) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_null.timeout);
        _null = null;
        const obj = { channelId, userId: id, guildId: null };
        const channel = ChannelStore.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        obj.guildId = guildId;
        tmp10Result = handleTypingStop(obj);
      }
      tmp2 = tmp10Result;
    }
    return tmp2;
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    ({ channelId, guildId } = message);
    const author = message.message.author;
    if (message.optimistic) {
      if (null != _null) {
        if (_null.channelId === channelId) {
          if (null != _null.timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(_null.timeout);
          }
          _null = null;
        }
      }
    }
    let tmp9Result = null != author;
    if (tmp9Result) {
      const obj = { channelId, userId: author.id, guildId: null };
      if (guildId == null) {
        const channel = ChannelStore.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
      }
      obj.guildId = guildId;
      tmp9Result = handleTypingStop(obj);
    }
    return tmp9Result;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/TypingStore.tsx");

export default typingStore;