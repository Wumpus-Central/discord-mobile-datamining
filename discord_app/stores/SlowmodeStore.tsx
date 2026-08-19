// === Module 7440: setCooldown ===

// Module 7440 (setCooldown)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;

const require = fn;
function setCooldown(channel, SendMessage, arg2) {
  const _require = channel;
  closure_1 = SendMessage;
  if (null != table[SendMessage][channel.id]) {
    const timer = table[SendMessage][channel.id].timer;
    timer.stop();
    const id = channel.id;
    delete tmp2[tmp];
  }
  obj = _require(7441);
  if (!obj.canBypassSlowmode(channel)) {
    if (arg2 > 0) {
      const _Date = Date;
      const sum = arg2 + Date.now();
      dependencyMap = sum;
      obj = { rateLimitPerUser: null, cooldownMs: null, cooldownEndTimestamp: null, timer: null };
      obj[0] = channel.rateLimitPerUser;
      obj[1] = arg2;
      obj[2] = sum;
      const timeout = new tmp6(4259).Timeout();
      obj[3] = timeout;
      table[SendMessage][channel.id] = obj;
      const timer2 = table[SendMessage][channel.id].timer;
      timer2.start(1000, () => {
        SendMessage(sum[4]);
        obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: id.id, slowmodeType: SendMessage, cooldownMs: Math.max(closure_2 - Date.now(), 0) };
        obj.dispatch(obj);
      }, true);
    }
  }
  tmp6 = _require;
}
function handleUploadCancel(channelId) {
  const channel = store.getChannel(channelId.channelId);
  if (null != channel) {
    setCooldown(channel, obj.SendMessage, 0);
  }
  return null != channel;
}
let obj = { SendMessage: 0, [0]: "SendMessage", CreateThread: 1, [1]: "CreateThread" };
let closure_6 = { [obj.SendMessage]: {}, [obj.CreateThread]: {} };
const Store = initializeDefault.Store;
class SlowmodeStore extends Store {
}
const prototype = SlowmodeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
prototype["getSlowmodeCooldownGuess"] = function getSlowmodeCooldownGuess(id, CreateThread) {
  let SendMessage = CreateThread;
  if (CreateThread == null) {
    SendMessage = obj.SendMessage;
  }
  let num = 0;
  if (null != table[SendMessage][id]) {
    num = tmp3.cooldownMs;
  }
  return num;
};
prototype["isChannelOnCooldown"] = function isChannelOnCooldown(channel, CreateThread) {
  return this.getSlowmodeCooldownGuess(channel.id, CreateThread) > 0 && channel.rateLimitPerUser > 0;
};
SlowmodeStore.displayName = "SlowmodeStore";
obj = {
  SLOWMODE_RESET_COOLDOWN: function handleSlowmodeResetCooldown(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null != channel) {
      let num2 = 0;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * obj132Default.Millis.SECOND + 100;
      }
      setCooldown(channel, channelId.slowmodeType, num2);
    }
    return false;
  },
  SLOWMODE_SET_COOLDOWN: function handleSlowmodeSetCooldown(cooldownMs) {
    cooldownMs = cooldownMs.cooldownMs;
    const channel = store.getChannel(cooldownMs.channelId);
    if (null == channel) {
      return false;
    } else {
      let num2 = 0;
      if (0 !== cooldownMs) {
        num2 = cooldownMs + 100;
      }
      setCooldown(channel, cooldownMs.slowmodeType, num2);
    }
  },
  UPLOAD_START: function handleUploadStart(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null != channel) {
      let num2 = 0;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * obj132Default.Millis.SECOND + 100;
      }
      setCooldown(channel, obj.SendMessage, num2);
    }
    return false;
  },
  UPLOAD_FAIL: handleUploadCancel,
  UPLOAD_CANCEL_REQUEST: handleUploadCancel,
  CHANNEL_UPDATES: function handleUpdateCooldown(channels) {
    channels = channels.channels;
    const items = [, ];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    const item = items.forEach((item, index) => {
      const iter = channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = closure_1_6[item][nextResult.id];
        let tmp6 = tmp5;
        let rateLimitPerUser = nextResult.rateLimitPerUser;
        if (null != tmp5) {
          if (tmp6.rateLimitPerUser !== rateLimitPerUser) {
            let num;
            if (tmp6 != null) {
              num = tmp6.cooldownMs;
            }
            if (num == null) {
              num = 0;
            }
            let tmp9Result = setCooldown(tmp3, item, Math.min(num, rateLimitPerUser * obj132Default.Millis.SECOND));
          }
        }
        continue;
      }
    });
  },
  LOGOUT: function clear() {
    const items = [, ];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    let item = items.forEach((item, index) => {
      closure_0 = item;
      const keys = Object.keys(table[item]);
      item = keys.forEach((item, index) => {
        const timer = closure_1_6[closure_0][item].timer;
        return timer.stop();
      });
      table[item] = {};
    });
  }
};
const slowmodeStore = new SlowmodeStore(dispatcherDefault, obj);
const result = require("obj132").fileFinishedImporting("stores/SlowmodeStore.tsx");

export default slowmodeStore;
export const SlowmodeType = obj;