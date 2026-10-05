// discord_app/lib/MuteTimers.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/MuteTimers.tsx");
class MuteTimers {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.timers = {};
    return obj;
  }
  reset() {
    const values = Object.values(this.timers);
    const item = values.forEach((item) => clearTimeout(item));
    this.timers = {};
  }
  setTimer(id2, muteConfig, arg2) {
    if (null == id2) {
      return false;
    } else if (null == muteConfig) {
      return false;
    } else {
      let diff = null;
      if (null != muteConfig.end_time) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const date = new Date(muteConfig.end_time);
        const time = date.getTime();
        diff = time - Date.now();
      }
      let tmp5 = null != diff;
      if (tmp5) {
        let flag = diff <= 0;
        if (!flag) {
          const self3 = this;
          const _setTimeout = setTimeout;
          const _Math = Math;
          this.timers[id2] = setTimeout(arg2, Math.max(0, diff));
          flag = false;
        }
        tmp5 = flag;
      }
      return tmp5;
    }
  }
  clearTimer(arg0) {
    const self = this;
    let tmp2 = null != arg0;
    const tmp = arg0;
    if (tmp2) {
      tmp2 = arg0 in self.timers;
    }
    if (tmp2) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.timers[arg0]);
      delete self.timers[tmp];
    }
  }
}
const prototype = MuteTimers.prototype;

export default MuteTimers;
export const computeIsMuted = function computeIsMuted(mute_config) {
  mute_config = mute_config.mute_config;
  let muted = mute_config.muted;
  if (muted) {
    let tmp3 = null == mute_config || null == mute_config.end_time;
    if (!tmp3) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(mute_config.end_time);
      tmp3 = date >= new Date();
      const date1 = new Date();
    }
    muted = tmp3;
  }
  return muted;
};
export const isTemporarilyMuted = function isTemporarilyMuted(mute_config) {
  mute_config = mute_config.mute_config;
  let muted = mute_config.muted && null != mute_config && null != mute_config.end_time;
  if (muted) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date(mute_config.end_time);
    muted = date >= new Date();
    const date1 = new Date();
  }
  return muted;
};
