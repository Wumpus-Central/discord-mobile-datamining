// discord_app/stores/TypingStore.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SlowmodeType } from "setCooldown";
import { Endpoints } from "ME";
import { Store } from "initialize";

const require = arg1;
function handleTypingStart(arg0) {
  let channelId;
  let guildId;
  let userId;
  ({ channelId, userId, guildId } = arg0);
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = closure_12;
  }
  let obj = {};
  const merged = Object.assign(tmp);
  clearTimeout(obj[userId]);
  const timerId = setTimeout(() => {
    let obj = userId(guildId[7]);
    obj = { type: "TYPING_STOP", channelId, userId, guildId };
    obj.dispatch(obj);
  }, closure_8);
  obj[userId] = timerId;
  dependencyMap[channelId] = obj;
  if (null != guildId) {
    let tmp6 = dependencyMap2[guildId];
    if (tmp6 == null) {
      tmp6 = closure_13;
    }
    obj = {};
    const merged1 = Object.assign(tmp6);
    let tmp10 = obj[channelId];
    if (tmp10 == null) {
      tmp10 = closure_12;
    }
    obj = {};
    const merged2 = Object.assign(tmp10);
    const _clearTimeout = clearTimeout;
    clearTimeout(obj[userId]);
    obj[userId] = timerId;
    obj[channelId] = obj;
    dependencyMap2[guildId] = obj;
  }
}
function handleTypingStop(arg0) {
  let channelId;
  let guildId;
  let userId;
  ({ channelId, userId, guildId } = arg0);
  if (null != dependencyMap[channelId]) {
    if (null != tmp7[userId]) {
      let obj = {};
      const merged = Object.assign(tmp7);
      const _clearTimeout = clearTimeout;
      clearTimeout(obj[userId]);
      delete tmp6[tmp3];
      dependencyMap[channelId] = obj;
      if (null != guildId) {
        if (null != dependencyMap2[guildId]) {
          if (null != tmp23[channelId]) {
            if (null != tmp24[userId]) {
              obj = {};
              const merged1 = Object.assign(tmp24);
              delete tmp5[tmp3];
              obj = {};
              const merged2 = Object.assign(tmp23);
              const _Object = Object;
              if (0 === Object.keys(obj).length) {
                delete tmp3[tmp4];
              } else {
                obj[channelId] = obj;
              }
              const _Object2 = Object;
              if (0 === Object.keys(obj).length) {
                delete tmp[tmp2];
              } else {
                dependencyMap2[guildId] = obj;
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function handleConnectionOpen() {
  let closure_10 = {};
  let closure_11 = {};
}
let closure_8 = 10 * require("set").Millis.SECOND;
let closure_9 = 1.5 * require("set").Millis.SECOND;
let closure_10 = {};
let closure_11 = {};
let closure_12 = Object.freeze({});
let closure_13 = Object.freeze({});
class TypingStore extends Store {
}
const prototype = TypingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded);
};
prototype["getTypingUsers"] = function getTypingUsers(channelId) {
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = closure_12;
  }
  return tmp;
};
prototype["getTypingUsersByGuild"] = function getTypingUsersByGuild(closure_0) {
  let tmp = dependencyMap2[closure_0];
  if (tmp == null) {
    tmp = closure_13;
  }
  return tmp;
};
prototype["isTyping"] = function isTyping(id, id2) {
  let tmp = dependencyMap[id];
  if (tmp == null) {
    tmp = closure_12;
  }
  return null != tmp[id2];
};
TypingStore.displayName = "TypingStore";
const typingStore = new TypingStore(require("dispatcher"), {
  TYPING_START: handleTypingStart,
  TYPING_STOP: handleTypingStop,
  TYPING_START_LOCAL: function handleTypingStartLocal(channelId) {
    channelId = channelId.channelId;
    let id;
    id = store.getId();
    if (null == id) {
      return false;
    } else if (channelId === channelId(5661).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
      obj = { channelId: null, timeout: null, prevSend: null };
      obj[0] = channelId;
      obj[1] = setTimeout(() => {
        let tmp = null != obj;
        if (tmp) {
          tmp = obj.channelId === channelId;
        }
        if (tmp) {
          tmp = id === outer1_4.getId();
        }
        if (tmp) {
          tmp = null != obj.timeout;
        }
        if (tmp) {
          obj.timeout = null;
          let tmp10 = outer1_10[channelId];
          if (tmp10 == null) {
            tmp10 = outer1_12;
          }
          let num = 0;
          if (tmp10 !== outer1_12) {
            const _Object = Object;
            num = Object.keys(tmp10).length;
          }
          if (num <= 5) {
            const HTTP = channelId(outer1_2[6]).HTTP;
            obj = { url: null, oldFormErrors: true, rejectWithError: true };
            obj[0] = outer1_7.TYPING(tmp8);
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
                  let obj = outer1_1(outer1_2[7]);
                  obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: null, slowmodeType: null, cooldownMs: null };
                  obj[1] = closure_0;
                  obj[2] = outer1_6.SendMessage;
                  obj[3] = num;
                  obj.dispatch(obj);
                }
                if (num2 > 0) {
                  obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: null, slowmodeType: null, cooldownMs: null };
                  obj[1] = closure_0;
                  obj[2] = outer1_6.CreateThread;
                  obj[3] = num2;
                  outer1_1(outer1_2[7]).dispatch(obj);
                  const obj3 = outer1_1(outer1_2[7]);
                }
              }
            });
            const postResult = HTTP.post(obj);
          }
          tmp8 = channelId;
        }
      }, num3);
      obj[2] = timestamp;
      obj = { channelId: null, userId: null, guildId: null };
      obj[0] = channelId;
      obj[1] = id;
      const channel = store2.getChannel(channelId);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      obj[2] = guildId;
      handleTypingStart(obj);
    }
  },
  TYPING_STOP_LOCAL: function handleTypingStopLocal(channelId) {
    channelId = channelId.channelId;
    const id = store.getId();
    let tmp2 = null != id;
    if (tmp2) {
      let tmp10Result = null != config;
      if (tmp10Result) {
        tmp10Result = config.channelId === channelId;
      }
      if (tmp10Result) {
        tmp10Result = null != config.timeout;
      }
      if (tmp10Result) {
        const _clearTimeout = clearTimeout;
        clearTimeout(config.timeout);
        config = null;
        const obj = { channelId: null, userId: null, guildId: null };
        obj[0] = channelId;
        obj[1] = id;
        const channel = store2.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        obj[2] = guildId;
        tmp10Result = handleTypingStop(obj);
        const tmp10 = handleTypingStop;
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
      if (null != config) {
        if (config.channelId === channelId) {
          if (null != config.timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(config.timeout);
          }
          config = null;
        }
      }
    }
    let tmp9Result = null != author;
    if (tmp9Result) {
      const obj = { channelId: null, userId: null, guildId: null };
      obj[0] = channelId;
      obj[1] = author.id;
      if (guildId == null) {
        const channel = store2.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
      }
      obj[2] = guildId;
      tmp9Result = handleTypingStop(obj);
      const tmp9 = handleTypingStop;
    }
    return tmp9Result;
  }
});
let result = require("setCooldown").fileFinishedImporting("stores/TypingStore.tsx");

export default typingStore;