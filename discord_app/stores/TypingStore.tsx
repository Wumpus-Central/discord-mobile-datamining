// discord_app/stores/TypingStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SlowmodeStore from "SlowmodeStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let _null, closure_10, closure_11;

function handleTypingStart(arg0) {
  let channelId;
  let customTypingIndicatorConfig;
  let guildId;
  let obj4;
  let userId;
  ({ channelId, userId, guildId, customTypingIndicatorConfig } = arg0);
  let tmp = closure_10[channelId];
  if (tmp == null) {
    tmp = closure_13;
  }
  let obj = {};
  const merged = Object.assign(tmp);
  clearTimeout(obj[userId]);
  const timerId = setTimeout(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "TYPING_STOP", channelId, userId, guildId };
    obj.dispatch(obj2);
  }, closure_8);
  obj[userId] = timerId;
  closure_10[channelId] = obj;
  if (null != guildId) {
    let tmp6 = closure_11[guildId];
    if (tmp6 == null) {
      tmp6 = closure_14;
    }
    let obj2 = {};
    const merged1 = Object.assign(tmp6);
    let tmp10 = obj2[channelId];
    if (tmp10 == null) {
      tmp10 = closure_13;
    }
    const obj3 = {};
    const merged2 = Object.assign(tmp10);
    const _clearTimeout = clearTimeout;
    clearTimeout(obj3[userId]);
    obj3[userId] = timerId;
    obj2[channelId] = obj3;
    closure_11[guildId] = obj2;
  }
  const tmp16 = undefined !== customTypingIndicatorConfig && obj4[userId] !== customTypingIndicatorConfig;
  if (tmp16) {
    obj4 = {};
    const merged3 = Object.assign(obj4);
    obj4[userId] = customTypingIndicatorConfig;
  }
}
function handleTypingStop(arg0) {
  let channelId;
  let guildId;
  let userId;
  ({ channelId, userId, guildId } = arg0);
  if (null != closure_10[channelId]) {
    if (null != closure_10[channelId][userId]) {
      const obj3 = {};
      const merged = Object.assign(tmp);
      const _clearTimeout = clearTimeout;
      clearTimeout(obj3[userId]);
      delete obj5[userId];
      closure_10[channelId] = obj3;
      if (null != guildId) {
        if (null != closure_11[guildId]) {
          if (null != closure_11[guildId][channelId]) {
            if (null != closure_11[guildId][channelId][userId]) {
              const obj = {};
              const merged1 = Object.assign(tmp22);
              delete obj[userId];
              const obj8 = {};
              const merged2 = Object.assign(tmp21);
              const _Object = Object;
              if (0 === Object.keys(obj).length) {
                delete obj2[channelId];
              } else {
                obj8[channelId] = obj;
              }
              const _Object2 = Object;
              if (0 === Object.keys(obj8).length) {
                delete closure_11[guildId];
              } else {
                closure_11[guildId] = obj8;
              }
            }
          }
        }
      }
      if (userId in closure_12) {
        const _Object3 = Object;
        const values = Object.values(closure_10);
        if (!values.some((item) => userId in item)) {
          const obj9 = {};
          const merged3 = Object.assign(closure_12);
          delete obj4[userId];
          closure_12 = obj9;
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
const SlowmodeType = SlowmodeStore.SlowmodeType;
const Endpoints = Constants.Endpoints;
let closure_8 = 10 * DurationsDefault.Millis.SECOND;
let closure_9 = 1.5 * DurationsDefault.Millis.SECOND;
const authStore = {};
const unpackModuleId = {};
let closure_12 = {};
let closure_13 = Object.freeze({});
let closure_14 = Object.freeze({});
const Store = get_initializedDefault.Store;
class TypingStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore);
  }
  getTypingUsers(channelId) {
    let tmp = closure_10[channelId];
    if (tmp == null) {
      tmp = closure_13;
    }
    return tmp;
  }
  getTypingUsersByGuild(arg0) {
    let tmp = closure_11[arg0];
    if (tmp == null) {
      tmp = closure_14;
    }
    return tmp;
  }
  isTyping(id, id2) {
    let tmp = closure_10[id];
    if (tmp == null) {
      tmp = closure_13;
    }
    return null != tmp[id2];
  }
  getCustomTypingIndicatorConfig(arg0) {
    let tmp = closure_12[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
}
const prototype = TypingStore.prototype;
TypingStore.displayName = "TypingStore";
let obj = {
  TYPING_START: handleTypingStart,
  TYPING_STOP: handleTypingStop,
  TYPING_START_LOCAL: function handleTypingStartLocal(channelId) {
    let config;
    let guildId;
    let obj;
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    if (null == id) {
      return false;
    } else if (channelId === channelId(6736).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      return false;
    } else {
      let num3;
      const tmp3 = null != obj && obj.channelId !== channelId;
      if (tmp3) {
        if (null != obj.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj.timeout);
        }
        obj = null;
      }
      const _Date = Date;
      const timestamp = Date.now();
      let num = 0.8;
      const result = 0.8 * closure_8;
      if (null != obj) {
        return false;
      }
      if (null == obj) {
        num3 = closure_9;
      } else {
        let num2 = 2;
        num3 = 0;
      }
      const _setTimeout = setTimeout;
      obj = {
        channelId,
        timeout: setTimeout(() => {
          const tmp =
            null != config &&
            config.channelId === channelId &&
            id === AuthenticationStore.getId() &&
            null != config.timeout;
          if (tmp) {
            config.timeout = null;
            let tmp10 = closure_10[channelId];
            if (tmp10 == null) {
              tmp10 = closure_13;
            }
            let num = 0;
            if (tmp10 !== closure_13) {
              const _Object = Object;
              num = Object.keys(tmp10).length;
            }
            let num2 = 5;
            if (num <= 5) {
              const HTTP = HTTPUtils.HTTP;
              let obj = { url: Endpoints.TYPING(channelId), oldFormErrors: true, rejectWithError: true };
              const post = HTTP.post;
              const postResult = post(obj);
              postResult.then((status) => {
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
                    const obj2 = {
                      type: "SLOWMODE_SET_COOLDOWN",
                      channelId,
                      slowmodeType: SlowmodeType.SendMessage,
                      cooldownMs: num,
                    };
                    const obj = id(dependencyMap[7]);
                    obj.dispatch(obj2);
                  }
                  if (num2 > 0) {
                    const obj4 = {
                      type: "SLOWMODE_SET_COOLDOWN",
                      channelId,
                      slowmodeType: SlowmodeType.CreateThread,
                      cooldownMs: num2,
                    };
                    const obj3 = id(dependencyMap[7]);
                    obj3.dispatch(obj4);
                  }
                }
              });
            }
          }
        }, num3),
        prevSend: timestamp,
      };
      let obj2 = { channelId, userId: id, guildId };
      const channel = ChannelStore.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      handleTypingStart(obj2);
    }
  },
  TYPING_STOP_LOCAL: function handleTypingStopLocal(channelId) {
    let guildId;
    channelId = channelId.channelId;
    const id = AuthenticationStore.getId();
    let tmp2 = null != id;
    if (tmp2) {
      let tmp10Result = null != _null && _null.channelId === channelId && null != _null.timeout;
      if (tmp10Result) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_null.timeout);
        _null = null;
        const obj = { channelId, userId: id, guildId };
        const channel = ChannelStore.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp10Result = handleTypingStop(obj);
      }
      tmp2 = tmp10Result;
    }
    return tmp2;
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    let channelId;
    let guildId;
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
      const obj = { channelId, userId: author.id, guildId };
      if (guildId == null) {
        const channel = ChannelStore.getChannel(channelId);
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        guildId = guildId1;
      }
      tmp9Result = handleTypingStop(obj);
    }
    return tmp9Result;
  },
};
const typingStore = new TypingStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/TypingStore.tsx");

export default typingStore;
