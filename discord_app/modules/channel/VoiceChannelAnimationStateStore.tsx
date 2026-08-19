// === Module 13235: resetAllState ===

// Module 13235 (resetAllState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;

function resetAllState() {
  (function clearAllTimers() {
    const keys = Object.keys(table);
    for (const item10009 of keys) {
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(table[item10009]);
      continue;
    }
    table = {};
  })();
  closure_4 = {};
}
function updateChannelAnimationState(arg0, arg1) {
  let num;
  if (dependencyMap[arg0] != null) {
    num = tmp4.userCount;
  }
  if (num == null) {
    num = 0;
  }
  const bound = Math.max(0, num + arg1);
  if (0 === num) {
    if (bound > 0) {
      obj = { style: null, userCount: null };
      obj[0] = obj.GENTLE_AMBIENT_WITH_INTRO;
      obj[1] = bound;
      dependencyMap[arg0] = obj;
      closure_0 = arg0;
      if (null != dependencyMap2[arg0]) {
        const _clearTimeout3 = clearTimeout;
        clearTimeout(dependencyMap2[arg0]);
        delete tmp3[tmp2];
      }
      const _setTimeout2 = setTimeout;
      dependencyMap2[arg0] = setTimeout(() => {
        if (null != closure_1_4[closure_0]) {
          obj = {};
          const merged = Object.assign(tmp4);
          obj.style = closure_1_3.GENTLE_AMBIENT;
          closure_1_4[tmp3] = obj;
          voiceChannelAnimationStateStoreClass.emitChange();
        }
        delete tmp[tmp2];
      }, 2000);
      let flag = true;
    }
    return flag;
  }
  if (num > 0) {
    if (bound > num) {
      obj = { style: null, userCount: null };
      obj[0] = obj.HIGH_CONTRAST;
      obj[1] = bound;
      dependencyMap[arg0] = obj;
      closure_0 = arg0;
      if (null != dependencyMap2[arg0]) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(dependencyMap2[arg0]);
        delete tmp3[tmp2];
      }
      const _setTimeout = setTimeout;
      dependencyMap2[arg0] = setTimeout(() => {
        if (null != closure_1_4[closure_0]) {
          obj = {};
          const merged = Object.assign(tmp4);
          obj.style = closure_1_3.GENTLE_AMBIENT;
          closure_1_4[tmp3] = obj;
          voiceChannelAnimationStateStoreClass.emitChange();
        }
        delete tmp[tmp2];
      }, 2000);
      flag = true;
    }
  }
  if (0 === bound) {
    if (null != dependencyMap2[arg0]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap2[arg0]);
      delete tmp[tmp2];
    }
    delete tmp[tmp2];
    flag = true;
  } else {
    flag = null != tmp4 && bound !== num;
    if (flag) {
      obj = {};
      let merged = Object.assign(tmp4);
      obj.userCount = bound;
      dependencyMap[arg0] = obj;
      flag = true;
    }
  }
}
function handleConnectionOpenOrLogout() {
  (function clearAllTimers() {
    const keys = Object.keys(table);
    for (const item10009 of keys) {
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(table[item10009]);
      continue;
    }
    table = {};
  })();
  closure_4 = {};
  return true;
}
let obj = { GENTLE_AMBIENT: "GENTLE_AMBIENT", GENTLE_AMBIENT_WITH_INTRO: "GENTLE_AMBIENT_WITH_INTRO", HIGH_CONTRAST: "HIGH_CONTRAST" };
let closure_4 = {};
let closure_5 = {};
let c6 = null;
const Store = initializeDefault.Store;
class VoiceChannelAnimationStateStoreClass extends Store {
}
const prototype = VoiceChannelAnimationStateStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_1);
};
prototype["getAnimationStyle"] = function getAnimationStyle(arg0) {
  let style;
  if (dependencyMap[arg0] != null) {
    style = tmp.style;
  }
  if (style == null) {
    style = obj.GENTLE_AMBIENT;
  }
  return style;
};
prototype["getUserCount"] = function getUserCount(arg0) {
  let num;
  if (dependencyMap[arg0] != null) {
    num = tmp.userCount;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
VoiceChannelAnimationStateStoreClass.displayName = "VoiceChannelAnimationStateStore";
obj = {
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    guildId = guildId.getGuildId();
    let tmp2 = guildId !== guildId;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    obj = {};
    const iter = arg0.voiceStates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (nextResult.guildId === guildId) {
        if (null != tmp5.oldChannelId) {
          let num = obj[tmp5.oldChannelId];
          if (num == null) {
            num = 0;
          }
          obj[tmp5.oldChannelId] = num - 1;
        }
        if (null != tmp5.channelId) {
          let num2 = obj[tmp5.channelId];
          if (num2 == null) {
            num2 = 0;
          }
          obj[tmp5.channelId] = num2 + 1;
        }
      }
      continue;
    }
    let flag = false;
    const entries = Object.entries(obj);
    while (tmp11 !== undefined) {
      let tmp14 = callback(tmp12, 2);
      if (updateChannelAnimationState(tmp14[0], tmp14[1])) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (guildId === guildId) {
      return false;
    } else if (null == guildId) {
      return false;
    } else {
      resetAllState();
      obj = {};
      const _Object2 = Object;
      const values = Object.values(voiceStates.getVoiceStates(guildId));
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (null != nextResult.channelId) {
          let num = obj[tmp4.channelId];
          if (num == null) {
            num = 0;
          }
          obj[tmp4.channelId] = num + 1;
        }
        continue;
      }
      const _Object = Object;
      const entries = Object.entries(obj);
      const tmp8 = entries[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let tmp13 = callback(tmp10, 2);
        [tmp14, tmp15] = tmp13;
        if (tmp15 > 0) {
          obj = { style: null, userCount: null };
          obj[0] = obj.GENTLE_AMBIENT;
          obj[1] = tmp16;
          closure_4[tmp14] = obj;
        }
        continue;
      }
      return true;
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrLogout,
  LOGOUT: handleConnectionOpenOrLogout
};
const voiceChannelAnimationStateStoreClass = new VoiceChannelAnimationStateStoreClass(dispatcherDefault, obj);
const result = require("obj132").fileFinishedImporting("modules/channel/VoiceChannelAnimationStateStore.tsx");

export default voiceChannelAnimationStateStoreClass;
export const AnimationStyle = obj;