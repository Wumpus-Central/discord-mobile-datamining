// === Module 13634: VideoHealthManager ===

// Module 13634 (VideoHealthManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import TimeUtils from "TimeUtils" /* 4919 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5321 */;
import dispatchAutoDisableVideoDefault from "dispatchAutoDisableVideo" /* 13635 */;
import size from "module_2" /* 2 */;

const VideoToggleState = Constants.VideoToggleState;
class VideoHealthManager {
  constructor(windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec) {
    const merged = Object.assign({ logger: null, disabled: false, perUserFpsWindow: null, prevFramesCodec: null, prevTimestamp: null, streamDisabledUsers: null, retryBackoffCache: null, timeoutIdCache: null, currentVideoAutoToggleState: null, enableQueue: null });
    merged[0] = new LoggerDefault("VideoHealthManager");
    merged[2] = {};
    merged[3] = {};
    merged[4] = {};
    new LoggerDefault("VideoHealthManager");
    merged[5] = new Set();
    merged[6] = {};
    merged[7] = {};
    merged[8] = {};
    merged[9] = [];
    merged.windowLength = windowLength;
    merged.fpsThreshold = fpsThreshold;
    new Set();
    merged.fpsWindowBorderlineCount = Math.ceil(windowLength * allowedPoorFpsRatio);
    merged.backoffTimeSec = backoffTimeSec;
    const logger = merged.logger;
    logger.enableNativeLogger(true);
    const logger2 = merged.logger;
    logger2.info("constructor with windowLength = " + merged.windowLength + ",\n      fpsWindowBorderlineCount = " + merged.fpsWindowBorderlineCount + ",\n      fpsThreshold = " + merged.fpsThreshold + ",\n      backoffTimeSec = " + backoffTimeSec);
    return merged;
  }
  calculateFps(arg0, arg1, arg2) {
    const self = this;
    if (-1 !== this.prevFramesCodec[arg0]) {
      if (arg1 >= self.prevFramesCodec[arg0]) {
        if (arg2 >= self.prevTimestamp[arg0]) {
          if (arg2 <= self.prevTimestamp[arg0] + 1000 * self.windowLength) {
            if (arg2 < self.prevTimestamp[arg0] + 900) {
              return NaN;
            } else {
              self.prevTimestamp[arg0] = arg2;
              self.prevFramesCodec[arg0] = arg1;
              return (arg1 - self.prevFramesCodec[arg0]) / self.elapsedSeconds(arg2, self.prevTimestamp[arg0]);
            }
          }
        }
      }
    }
    self.prevFramesCodec[arg0] = arg1;
    self.prevTimestamp[arg0] = arg2;
    self.perUserFpsWindow[arg0] = [];
    return NaN;
  }
  updateFps(arg0, arg1, arg2) {
    const self = this;
    if (!this.disabled) {
      const streamDisabledUsers = self.streamDisabledUsers;
      if (!streamDisabledUsers.has(arg0)) {
        const calculateFpsResult = self.calculateFps(arg0, arg1, arg2);
        if (calculateFpsResult >= 0) {
          const _Number = Number;
          if (Number.isFinite(calculateFpsResult)) {
            const arr = self.perUserFpsWindow[arg0];
            arr.push(calculateFpsResult);
            if (self.perUserFpsWindow[arg0].length >= self.windowLength) {
              if (self.perUserFpsWindow[arg0].length > self.windowLength) {
                const arr2 = self.perUserFpsWindow[arg0];
                arr2.shift();
              }
              const arr3 = self.perUserFpsWindow[arg0];
              if (arr3.filter((item) => item < self.fpsThreshold).length >= self.fpsWindowBorderlineCount) {
                const logger = self.logger;
                const _HermesInternal = HermesInternal;
                logger.info("" + arg0 + ": detected poor network quality, turning off video");
                const streamDisabledUsers2 = self.streamDisabledUsers;
                streamDisabledUsers2.add(arg0);
                self.currentVideoAutoToggleState[arg0] = VideoToggleState.DISABLED;
                dispatchAutoDisableVideoDefault(arg0, VideoToggleState.DISABLED);
                const result = self.startReenableBackoffTimer(arg0);
              } else if (self.currentVideoAutoToggleState[arg0] === VideoToggleState.AUTO_PROBING) {
                self.currentVideoAutoToggleState[arg0] = VideoToggleState.AUTO_ENABLED;
                const logger2 = self.logger;
                const _HermesInternal2 = HermesInternal;
                logger2.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user " + arg0);
                dispatchAutoDisableVideoDefault(arg0, VideoToggleState.AUTO_ENABLED);
              }
              if (self.probingUserId === arg0) {
                self.probingUserId = undefined;
                self.tryReenableQueue();
              }
            }
          }
        }
      }
    }
  }
  startReenableBackoffTimer(arg0) {
    let expBackoffFactor;
    let lastBackoffTime;
    let obj3;
    const self = this;
    let closure_0 = arg0;
    if (!this.disabled) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("startReenableBackoffTimer for user " + arg0);
      ({ lastBackoffTime, expBackoffFactor } = self.retryBackoffCache[arg0]);
      let num2 = 1;
      if (null !== lastBackoffTime) {
        num2 = 1;
        if (expBackoffFactor <= 16) {
          const elapsedSeconds = self.elapsedSeconds;
          num2 = 1;
          const obj = TimeUtils;
          if (elapsedSeconds(obj.now(), lastBackoffTime) <= 600) {
            num2 = expBackoffFactor * 2;
          }
        }
      }
      const retryBackoffCache = self.retryBackoffCache;
      const obj2 = { lastBackoffTime: obj3.now(), expBackoffFactor: num2 };
      retryBackoffCache[arg0] = obj2;
      const result = num2 * self.backoffTimeSec;
      obj3 = TimeUtils;
      const result1 = result * DurationsDefault.Millis.SECOND;
      const logger2 = self.logger;
      const _HermesInternal2 = HermesInternal;
      logger2.info("starting backoff timer with time = " + result1 + " milliseconds");
      const _setTimeout = setTimeout;
      self.timeoutIdCache[arg0] = setTimeout(() => {
        self.queueReenable(closure_0);
      }, result1);
    }
  }
  queueReenable(arg0) {
    const enableQueue = this.enableQueue;
    enableQueue.push(arg0);
    this.tryReenableQueue();
  }
  tryReenableQueue() {
    const self = this;
    if (!this.disabled) {
      if (null == self.probingUserId) {
        const enableQueue = self.enableQueue;
        const arr = enableQueue.shift();
        if (null != arr) {
          if (!self.reenableVideo(arr)) {
            const enableQueue1 = self.enableQueue;
            const arr2 = enableQueue1.shift();
            while (null != arr2) {
              if (self.reenableVideo(arr2)) {
                break;
              }
            }
          }
        }
      }
    }
  }
  reenableVideo(arr) {
    const self = this;
    let flag = arr in this.perUserFpsWindow;
    if (flag) {
      const logger = self.logger;
      const info = logger.info;
      const _HermesInternal = HermesInternal;
      const obj = TimeUtils;
      info("reenableVideo called for user " + arr + " - time = " + obj.now());
      const result = self.stateCleanupBeforeEnable(arr);
      self.currentVideoAutoToggleState[arr] = VideoToggleState.AUTO_PROBING;
      self.probingUserId = arr;
      dispatchAutoDisableVideoDefault(arr, VideoToggleState.AUTO_PROBING);
      flag = true;
    }
    return flag;
  }
  elapsedSeconds(arg0, lastBackoffTime) {
    return (arg0 - lastBackoffTime) / 1000;
  }
  stateCleanupBeforeEnable(arr) {
    const logger = this.logger;
    logger.info("VideoHealthManager::stateCleanupBeforeEnable");
    this.perUserFpsWindow[arr] = [];
    this.prevFramesCodec[arr] = -1;
    const streamDisabledUsers = this.streamDisabledUsers;
    streamDisabledUsers.delete(arr);
  }
  getCurrentVideoToggleState(arg0) {
    return this.currentVideoAutoToggleState[arg0];
  }
  createUser(arg0) {
    const self = this;
    const logger = this.logger;
    logger.info("VideoHealthManager::createUser " + arg0);
    if (!(arg0 in this.perUserFpsWindow)) {
      self.perUserFpsWindow[arg0] = [];
      self.prevFramesCodec[arg0] = -1;
      self.currentVideoAutoToggleState[arg0] = VideoToggleState.NONE;
      self.retryBackoffCache[arg0] = { lastBackoffTime: null, expBackoffFactor: 1 };
    }
  }
  deleteUser(key10004) {
    const self = this;
    const logger = this.logger;
    logger.info("VideoHealthManager::deleteUser " + key10004);
    delete this.perUserFpsWindow[key10004];
    delete this.prevFramesCodec[key10004];
    delete this.retryBackoffCache[key10004];
    delete this.currentVideoAutoToggleState[key10004];
    const streamDisabledUsers = this.streamDisabledUsers;
    streamDisabledUsers.delete(key10004);
    if (key10004 === this.probingUserId) {
      self.probingUserId = undefined;
      self.tryReenableQueue();
    }
    clearTimeout(self.timeoutIdCache[key10004]);
    delete self.timeoutIdCache[key10004];
  }
  disable() {
    const self = this;
    this.disabled = true;
    for (const key10004 in this.perUserFpsWindow) {
      let deleteUserResult = self.deleteUser(key10004);
      continue;
    }
  }
}
const prototype = VideoHealthManager.prototype;
let obj = { featureEnabled: shared_PlatformUtils.isMobile, windowLength: 5, allowedPoorFpsRatio: 1, fpsThreshold: 5, backoffTimeSec: 15 };
VideoHealthManager.defaultConfig = obj;
let result = size.fileFinishedImporting("lib/VideoHealthManager.tsx");

export { VideoHealthManager };