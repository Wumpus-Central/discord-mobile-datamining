// discord_app/stores/SlowmodeStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import ChannelStore from "ChannelStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function setCooldown(channel, SendMessage, cooldownMs) {
  let timeout;
  _require = channel;
  const slowmodeType = SendMessage;
  if (null != closure_6[SendMessage][channel.id]) {
    const timer = closure_6[SendMessage][channel.id].timer;
    timer.stop();
    delete closure_6[SendMessage][channel.id];
  }
  let obj = require("SlowmodeUtils");
  const tmp3 = _require;
  if (!obj.canBypassSlowmode(channel)) {
    if (cooldownMs > 0) {
      const _Date = Date;
      const sum = cooldownMs + Date.now();
      dependencyMap = sum;
      const id = channel.id;
      const self = this;
      const self2 = this;
      const obj2 = {
        rateLimitPerUser: channel.rateLimitPerUser,
        cooldownMs,
        cooldownEndTimestamp: sum,
        timer: timeout,
      };
      const tmp8 = closure_6[SendMessage];
      timeout = new tmp3(2046).Timeout();
      tmp8[id] = obj2;
      const timer2 = closure_6[SendMessage][channel.id].timer;
      timer2.start(
        1000,
        () => {
          const dispatch = DispatcherDefault.dispatch;
          const obj = {
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: channel.id,
            slowmodeType,
            cooldownMs: Math.max(dependencyMap - Date.now(), 0),
          };
          dispatch(obj);
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
const SlowmodeType = { SendMessage: 0, [0]: "SendMessage", CreateThread: 1, [1]: "CreateThread" };
let closure_6 = { [SlowmodeType.SendMessage]: {}, [SlowmodeType.CreateThread]: {} };
const Store = get_initializedDefault.Store;
class SlowmodeStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, PermissionStore);
  }
  getSlowmodeCooldownGuess(id, CreateThread) {
    let SendMessage = CreateThread;
    if (CreateThread == null) {
      SendMessage = obj.SendMessage;
    }
    let num = 0;
    if (null != closure_6[SendMessage][id]) {
      num = tmp3.cooldownMs;
    }
    return num;
  }
  isChannelOnCooldown(channel, CreateThread) {
    const tmp = this.getSlowmodeCooldownGuess(channel.id, CreateThread) > 0 && channel.rateLimitPerUser > 0;
    return tmp;
  }
}
const prototype = SlowmodeStore.prototype;
SlowmodeStore.displayName = "SlowmodeStore";
let obj2 = {
  SLOWMODE_RESET_COOLDOWN: function handleSlowmodeResetCooldown(slowmodeType) {
    slowmodeType = slowmodeType.slowmodeType;
    const channel = ChannelStore.getChannel(slowmodeType.channelId);
    if (null != channel) {
      let num2 = 0;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * DurationsDefault.Millis.SECOND + 100;
      }
      setCooldown(channel, slowmodeType, num2);
    }
    return false;
  },
  SLOWMODE_SET_COOLDOWN: function handleSlowmodeSetCooldown(cooldownMs) {
    cooldownMs = cooldownMs.cooldownMs;
    const slowmodeType = cooldownMs.slowmodeType;
    const channel = ChannelStore.getChannel(cooldownMs.channelId);
    if (null == channel) {
      return false;
    } else {
      let num2 = 0;
      if (0 !== cooldownMs) {
        num2 = cooldownMs + 100;
      }
      setCooldown(channel, slowmodeType, num2);
    }
  },
  UPLOAD_START: function handleUploadStart(channelId) {
    const SendMessage = obj.SendMessage;
    const channel = ChannelStore.getChannel(channelId.channelId);
    if (null != channel) {
      let num2 = 0;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * DurationsDefault.Millis.SECOND + 100;
      }
      setCooldown(channel, SendMessage, num2);
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
            let _Math = Math;
            if (tmp6 != null) {
              num = tmp6.cooldownMs;
            }
            if (num == null) {
              num = 0;
            }
            let tmp9Result = setCooldown(tmp3, item, min(num, rateLimitPerUser * DurationsDefault.Millis.SECOND));
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
      let closure_0 = item;
      const keys = Object.keys(closure_6[item]);
      item = keys.forEach((item) => {
        const timer = closure_2_6[closure_0][item].timer;
        return timer.stop();
      });
      closure_6[item] = {};
    });
  },
};
const slowmodeStore = new SlowmodeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/SlowmodeStore.tsx");

export default slowmodeStore;
export { SlowmodeType };
