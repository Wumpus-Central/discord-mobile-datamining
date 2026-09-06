// discord_app/stores/SlowmodeStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import ChannelStore from "ChannelStore.tsx";
import PermissionStore from "PermissionStore.tsx";

const require = fn;
function setCooldown(channel, SendMessage, cooldownMs) {
  _require = channel;
  const slowmodeType = SendMessage;
  if (null != dependencyMap[SendMessage][channel.id]) {
    const timer = tmp3[SendMessage][channel.id].timer;
    timer.stop();
    const id = channel.id;
    delete tmp2[tmp];
  }
  let obj = require("SlowmodeUtils");
  if (!obj.canBypassSlowmode(channel)) {
    if (cooldownMs > 0) {
      const _Date = Date;
      const sum = cooldownMs + Date.now();
      dependencyMap = sum;
      obj = { rateLimitPerUser: channel.rateLimitPerUser, cooldownMs, cooldownEndTimestamp: sum, timer: null };
      const timeout = new require("Timers").Timeout();
      obj.timer = timeout;
      tmp3[SendMessage][channel.id] = obj;
      const timer2 = tmp3[SendMessage][channel.id].timer;
      timer2.start(
        1000,
        () => {
          const obj = {
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: id.id,
            slowmodeType,
            cooldownMs: Math.max(sum - Date.now(), 0),
          };
          obj.dispatch(obj);
        },
        true,
      );
    }
  }
}
function handleUploadCancel(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null != channel) {
    setCooldown(channel, obj.SendMessage, 0);
  }
  return null != channel;
}
let SlowmodeType = { SendMessage: 0, [0]: "SendMessage", CreateThread: 1, [1]: "CreateThread" };
let dependencyMap = { [SlowmodeType.SendMessage]: {}, [SlowmodeType.CreateThread]: {} };
const Store = initializeDefault.Store;
class SlowmodeStore extends Store {}
const prototype = SlowmodeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, PermissionStore);
};
prototype["getSlowmodeCooldownGuess"] = function getSlowmodeCooldownGuess(id, CreateThread) {
  let SendMessage = CreateThread;
  if (CreateThread == null) {
    SendMessage = obj.SendMessage;
  }
  let num = 0;
  if (null != dependencyMap[SendMessage][id]) {
    num = tmp3.cooldownMs;
  }
  return num;
};
prototype["isChannelOnCooldown"] = function isChannelOnCooldown(channel, CreateThread) {
  return this.getSlowmodeCooldownGuess(channel.id, CreateThread) > 0 && channel.rateLimitPerUser > 0;
};
SlowmodeStore.displayName = "SlowmodeStore";
SlowmodeType = {
  SLOWMODE_RESET_COOLDOWN: function handleSlowmodeResetCooldown(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    if (null != channel) {
      let num2 = 0;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * DurationsDefault.Millis.SECOND + 100;
      }
      setCooldown(channel, channelId.slowmodeType, num2);
    }
    return false;
  },
  SLOWMODE_SET_COOLDOWN: function handleSlowmodeSetCooldown(cooldownMs) {
    cooldownMs = cooldownMs.cooldownMs;
    const channel = ChannelStore.getChannel(cooldownMs.channelId);
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
    const channel = ChannelStore.getChannel(channelId.channelId);
    if (null != channel) {
      let num2 = 0;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * DurationsDefault.Millis.SECOND + 100;
      }
      setCooldown(channel, obj.SendMessage, num2);
    }
    return false;
  },
  UPLOAD_FAIL: handleUploadCancel,
  UPLOAD_CANCEL_REQUEST: handleUploadCancel,
  CHANNEL_UPDATES: function handleUpdateCooldown(channels) {
    channels = channels.channels;
    const items = [,];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    const item = items.forEach((item) => {
      const iter = channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = closure_6[item][nextResult.id];
        let tmp6 = tmp5;
        let rateLimitPerUser = nextResult.rateLimitPerUser;
        if (null != tmp5) {
          if (tmp6.rateLimitPerUser !== rateLimitPerUser) {
            let num;
            let tmp9 = setCooldown;
            if (tmp6 != null) {
              num = tmp6.cooldownMs;
            }
            if (num == null) {
              num = 0;
            }
            let tmp9Result = tmp9(tmp3, item, Math.min(num, rateLimitPerUser * DurationsDefault.Millis.SECOND));
          }
        }
        continue;
      }
    });
  },
  LOGOUT: function clear() {
    const items = [,];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    let item = items.forEach((item) => {
      closure_0 = item;
      const keys = Object.keys(dependencyMap[item]);
      item = keys.forEach((item) => {
        const timer = dependencyMap[closure_0][item].timer;
        return timer.stop();
      });
      dependencyMap[item] = {};
    });
  },
};
const slowmodeStore = new SlowmodeStore(DispatcherDefault, SlowmodeType);
const size = fn(2);
const result = size.fileFinishedImporting("stores/SlowmodeStore.tsx");

export default slowmodeStore;
export { SlowmodeType };
