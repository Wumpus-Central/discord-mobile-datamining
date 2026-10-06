// discord_app/modules/channel/VoiceChannelAnimationStateStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;

function clearAllTimers() {
  const keys = Object.keys(closure_5);
  for (const item10009 of keys) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(closure_5[item10009]);
    continue;
  }
  closure_5 = {};
}
function resetAllState() {
  clearAllTimers();
  closure_4 = {};
}
function updateChannelAnimationState(arg0, arg1) {
  let flag;
  let obj;
  const f115060 = () => {
    if (null != closure_2_4[closure_0]) {
      const obj = { style: constants.GENTLE_AMBIENT };
      const merged = Object.assign(tmp2);
      closure_2_4[closure_0] = obj;
      voiceChannelAnimationStateStoreClass.emitChange();
    }
    delete closure_2_5[closure_0];
  };
  const tmp2 = closure_4[arg0];
  let num;
  if (tmp2 != null) {
    num = tmp2.userCount;
  }
  if (num == null) {
    num = 0;
  }
  const bound = Math.max(0, num + arg1);
  if (0 === num) {
    if (bound > 0) {
      const obj2 = { style: obj.GENTLE_AMBIENT_WITH_INTRO, userCount: bound };
      closure_4[arg0] = obj2;
      let closure_0 = arg0;
      if (null != closure_5[arg0]) {
        const _clearTimeout3 = clearTimeout;
        clearTimeout(closure_5[arg0]);
        delete closure_5[arg0];
      }
      const _setTimeout2 = setTimeout;
      closure_5[arg0] = setTimeout(f115060, 2000);
      flag = true;
    }
    return flag;
  }
  if (num > 0) {
    if (bound > num) {
      const obj3 = { style: obj.HIGH_CONTRAST, userCount: bound };
      closure_4[arg0] = obj3;
      closure_0 = arg0;
      if (null != closure_5[arg0]) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(closure_5[arg0]);
        delete closure_5[arg0];
      }
      const _setTimeout = setTimeout;
      closure_5[arg0] = setTimeout(f115060, 2000);
      flag = true;
    }
  }
  if (0 === bound) {
    if (null != closure_5[arg0]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_5[arg0]);
      delete closure_5[arg0];
    }
    delete closure_4[arg0];
    flag = true;
  } else {
    flag = null != tmp2 && bound !== num;
    if (flag) {
      obj = { userCount: bound };
      let merged = Object.assign(tmp2);
      closure_4[arg0] = obj;
      flag = true;
    }
  }
}
function handleConnectionOpenOrLogout() {
  clearAllTimers();
  closure_4 = {};
  return true;
}
const AnimationStyle = {
  GENTLE_AMBIENT: "GENTLE_AMBIENT",
  GENTLE_AMBIENT_WITH_INTRO: "GENTLE_AMBIENT_WITH_INTRO",
  HIGH_CONTRAST: "HIGH_CONTRAST",
};
const React3 = {};
let closure_5 = {};
let guildId = null;
const Store = get_initializedDefault.Store;
class VoiceChannelAnimationStateStoreClass extends Store {
  initialize() {
    this.waitFor(VoiceStateStore, SelectedGuildStore);
  }
  getAnimationStyle(arg0) {
    let style;
    if (closure_4[arg0] != null) {
      style = tmp.style;
    }
    if (style == null) {
      style = obj.GENTLE_AMBIENT;
    }
    return style;
  }
  getUserCount(arg0) {
    let num;
    if (closure_4[arg0] != null) {
      num = tmp.userCount;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
}
const prototype = VoiceChannelAnimationStateStoreClass.prototype;
VoiceChannelAnimationStateStoreClass.displayName = "VoiceChannelAnimationStateStore";
let obj2 = {
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    guildId = SelectedGuildStore.getGuildId();
    const obj = {};
    const iter = voiceStates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (nextResult.guildId === guildId) {
        if (null != tmp5.oldChannelId) {
          let num = obj[tmp5.oldChannelId];
          let oldChannelId = tmp5.oldChannelId;
          if (num == null) {
            num = 0;
          }
          obj[oldChannelId] = num - 1;
        }
        if (null != tmp5.channelId) {
          let num2 = obj[tmp5.channelId];
          let channelId = tmp5.channelId;
          if (num2 == null) {
            num2 = 0;
          }
          obj[channelId] = num2 + 1;
        }
      }
      continue;
    }
    let flag = false;
    const entries = Object.entries(obj);
    const tmp11 = entries[Symbol.iterator]();
    while (tmp11 !== undefined) {
      let tmp14 = _slicedToArray(tmp12, 2);
      if (updateChannelAnimationState(tmp14[0], tmp14[1])) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    let obj;
    let tmp14;
    let tmp15;
    guildId = guildId.guildId;
    if (guildId === guildId) {
      return false;
    } else if (null == guildId) {
      return false;
    } else {
      resetAllState();
      const obj2 = {};
      const _Object2 = Object;
      const values = Object.values(VoiceStateStore.getVoiceStates(guildId));
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (null != nextResult.channelId) {
          let num = obj2[tmp4.channelId];
          let channelId = tmp4.channelId;
          if (num == null) {
            num = 0;
          }
          obj2[channelId] = num + 1;
        }
        continue;
      }
      const _Object = Object;
      const entries = Object.entries(obj2);
      const tmp8 = entries[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let tmp13 = _slicedToArray(tmp10, 2);
        [tmp14, tmp15] = tmp13;
        if (tmp15 > 0) {
          obj = { style: obj.GENTLE_AMBIENT, userCount: tmp16 };
          closure_4[tmp14] = obj;
        }
        continue;
      }
      return true;
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrLogout,
  LOGOUT: handleConnectionOpenOrLogout,
};
const voiceChannelAnimationStateStoreClass = new VoiceChannelAnimationStateStoreClass(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelAnimationStateStore.tsx");

export default voiceChannelAnimationStateStoreClass;
export { AnimationStyle };
