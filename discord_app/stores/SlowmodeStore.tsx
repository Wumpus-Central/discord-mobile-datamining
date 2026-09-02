// === Module 7441: setCooldown ===

// Module 7441 (setCooldown)
import initializeDefault from "initialize" /* 586 */;
import setDefault from "set" /* 684 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "getUncachedChannelPermissions" /* 4120 */;

const require = arg1;
function setCooldown(channel, SendMessage, arg2) {
  const _require = channel;
  closure_1 = SendMessage;
  if (null != table[SendMessage][channel.id]) {
    const timer = tmp3[SendMessage][channel.id].timer;
    timer.stop();
    const id = channel.id;
    delete tmp2[tmp];
  }
  obj = _require(7442);
  if (!obj.canBypassSlowmode(channel)) {
    if (arg2 > 0) {
      const _Date = Date;
      const sum = arg2 + Date.now();
      dependencyMap = sum;
      obj = { rateLimitPerUser: null, cooldownMs: null, cooldownEndTimestamp: null, timer: null };
      obj[0] = channel.rateLimitPerUser;
      obj[1] = arg2;
      obj[2] = sum;
      const timeout = new _require(4362).Timeout();
      obj[3] = timeout;
      tmp3[SendMessage][channel.id] = obj;
      const timer2 = tmp3[SendMessage][channel.id].timer;
      timer2.start(1000, () => {
        obj = SendMessage(sum[4]);
        obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: id.id, slowmodeType: SendMessage, cooldownMs: Math.max(closure_2 - Date.now(), 0) };
        obj.dispatch(obj);
      }, true);
    }
  }
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
  if (null != closure_6[SendMessage][id]) {
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
        num2 = channel.rateLimitPerUser * setDefault.Millis.SECOND + 100;
      }
      setCooldown(channel, channelId.slowmodeType, num2);
      const tmp2 = setCooldown;
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
        num2 = channel.rateLimitPerUser * setDefault.Millis.SECOND + 100;
      }
      setCooldown(channel, obj.SendMessage, num2);
      const tmp2 = setCooldown;
    }
    return false;
  },
  UPLOAD_FAIL: handleUploadCancel,
  UPLOAD_CANCEL_REQUEST: handleUploadCancel,
  CHANNEL_UPDATES: function handleUpdateCooldown(channels) {
    channels = channels.channels;
    const items = [, ];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    const item = items.forEach((arg0) => {
      const iter = channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = closure_1_6;
        let tmp5 = closure_1_6[arg0][nextResult.id];
        let tmp6 = tmp5;
        let rateLimitPerUser = nextResult.rateLimitPerUser;
        if (null != tmp5) {
          let tmp7 = tmp5;
          let tmp8 = rateLimitPerUser;
          if (tmp6.rateLimitPerUser !== rateLimitPerUser) {
            let tmp10 = nextResult;
            let tmp11 = tmp5;
            let num;
            let tmp9 = closure_1_7;
            if (tmp6 != null) {
              num = tmp6.cooldownMs;
            }
            if (num == null) {
              num = 0;
            }
            let tmp12 = rateLimitPerUser;
            let tmp13 = closure_1_1;
            let tmp14 = closure_1_2;
            let tmp9Result = tmp9(tmp3, arg0, Math.min(num, rateLimitPerUser * closure_1_1(closure_1_2[5]).Millis.SECOND));
          }
        }
        continue;
      }
    });
  },
  LOGOUT: function clear() {
    const items = [, ];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    let item = items.forEach((arg0) => {
      closure_0 = arg0;
      const keys = Object.keys(table[arg0]);
      const item = keys.forEach((arg0) => {
        const timer = closure_1_6[closure_0][arg0].timer;
        return timer.stop();
      });
      table[arg0] = {};
    });
  }
};
const slowmodeStore = new SlowmodeStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("stores/SlowmodeStore.tsx");

export default slowmodeStore;
export const SlowmodeType = obj;