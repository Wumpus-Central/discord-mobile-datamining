// === Module 4093: reset ===

// Module 4093 (reset)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("lib/MuteTimers.tsx");
class MuteTimers {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.timers = {};
    return obj;
  }
}
const prototype = MuteTimers.prototype;
prototype["reset"] = function reset() {
  const values = Object.values(this.timers);
  const item = values.forEach((arg0) => clearTimeout(arg0));
  this.timers = {};
};
prototype["setTimer"] = function setTimer(id, muteConfig, arg2) {
  if (null == id) {
    return false;
  } else if (null == muteConfig) {
    return false;
  } else {
    let diff = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      const _Date2 = Date;
      const time = date.getTime();
      diff = time - Date.now();
    }
    let tmp7 = null != diff;
    if (tmp7) {
      let flag = diff <= 0;
      if (!flag) {
        const self = this;
        const _setTimeout = setTimeout;
        const _Math = Math;
        this.timers[id] = setTimeout(arg2, Math.max(0, diff));
        flag = false;
      }
      tmp7 = flag;
    }
    return tmp7;
  }
};
prototype["clearTimer"] = function clearTimer(arg0) {
  const self = this;
  if (tmp3) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.timers[arg0]);
    const timers = self.timers;
    delete tmp[tmp2];
  }
};

export default MuteTimers;
export const computeIsMuted = function computeIsMuted(mute_config) {
  mute_config = mute_config.mute_config;
  let muted = mute_config.muted;
  if (muted) {
    let tmp3 = null == mute_config || null == mute_config.end_time;
    if (!tmp3) {
      const _Date = Date;
      const date = new Date(mute_config.end_time);
      const _Date2 = Date;
      const date1 = new Date();
      tmp3 = date >= date1;
    }
    muted = tmp3;
  }
  return muted;
};
export const isTemporarilyMuted = function isTemporarilyMuted(mute_config) {
  mute_config = mute_config.mute_config;
  let muted = mute_config.muted;
  if (muted) {
    muted = null != mute_config;
  }
  if (muted) {
    muted = null != mute_config.end_time;
  }
  if (muted) {
    const _Date = Date;
    const date = new Date(mute_config.end_time);
    const _Date2 = Date;
    const date1 = new Date();
    muted = date >= date1;
  }
  return muted;
};