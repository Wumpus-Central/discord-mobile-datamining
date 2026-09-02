// === Module 13700: calculateFps ===

// Module 13700 (calculateFps)
import set2 from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import ME from "ME" /* 673 */;
import sleep from "sleep" /* 4558 */;
import isTablet from "isTablet" /* 4754 */;
import dispatchAutoDisableVideoDefault from "dispatchAutoDisableVideo" /* 13701 */;

const VideoToggleState = ME.VideoToggleState;
class VideoHealthManager {
  constructor(arg0, arg1, arg2, arg3) {
    obj = Object.create(new.target.prototype);
    tmp2 = new require("timestamp")("VideoHealthManager");
    obj[0] = tmp2;
    obj[2] = {};
    obj[3] = {};
    obj[4] = {};
    set = new Set();
    obj[5] = set;
    obj[6] = {};
    obj[7] = {};
    obj[8] = {};
    obj[9] = [];
    obj.windowLength = global;
    obj.fpsThreshold = importDefault;
    obj.fpsWindowBorderlineCount = Math.ceil(global * require);
    obj.backoffTimeSec = importAll;
    logger = obj.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    logger2 = obj.logger;
    infoResult = logger2.info("constructor with windowLength = " + obj.windowLength + ",\n      fpsWindowBorderlineCount = " + obj.fpsWindowBorderlineCount + ",\n      fpsThreshold = " + obj.fpsThreshold + ",\n      backoffTimeSec = " + importAll);
    return obj;
  }
}
const prototype = VideoHealthManager.prototype;
prototype["calculateFps"] = function calculateFps(arg0, arg1, arg2) {
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
};
prototype["updateFps"] = function updateFps(arg0, arg1, arg2) {
  let self = this;
  self = this;
  if (!this.disabled) {
    const streamDisabledUsers = self.streamDisabledUsers;
    if (!streamDisabledUsers.has(arg0)) {
      const calculateFpsResult = self.calculateFps(arg0, arg1, arg2);
      if (calculateFpsResult >= 0) {
        const _Number = Number;
        if (Number.isFinite(calculateFpsResult)) {
          let arr = self.perUserFpsWindow[arg0];
          arr = arr.push(calculateFpsResult);
          if (self.perUserFpsWindow[arg0].length >= self.windowLength) {
            if (self.perUserFpsWindow[arg0].length > self.windowLength) {
              arr = self.perUserFpsWindow[arg0].shift();
              const arr2 = self.perUserFpsWindow[arg0];
            }
            if (arr3.filter((arg0) => arg0 < self.fpsThreshold).length >= self.fpsWindowBorderlineCount) {
              const logger = self.logger;
              const _HermesInternal = HermesInternal;
              logger.info("" + arg0 + ": detected poor network quality, turning off video");
              const streamDisabledUsers2 = self.streamDisabledUsers;
              streamDisabledUsers2.add(arg0);
              self.currentVideoAutoToggleState[arg0] = VideoToggleState.DISABLED;
              dispatchAutoDisableVideoDefault(arg0, VideoToggleState.DISABLED);
              const result = self.startReenableBackoffTimer(arg0);
            } else if (self.currentVideoAutoToggleState[arg0] === VideoToggleState.AUTO_PROBING) {
              self.currentVideoAutoToggleState[arg0] = tmp7.AUTO_ENABLED;
              const logger2 = self.logger;
              const _HermesInternal2 = HermesInternal;
              logger2.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user " + arg0);
              dispatchAutoDisableVideoDefault(arg0, tmp7.AUTO_ENABLED);
            }
            if (self.probingUserId === arg0) {
              self.probingUserId = undefined;
              self.tryReenableQueue();
            }
            arr3 = self.perUserFpsWindow[arg0];
          }
        }
      }
    }
  }
};
prototype["startReenableBackoffTimer"] = function startReenableBackoffTimer(arg0) {
  let self = this;
  self = this;
  const _require = arg0;
  if (!this.disabled) {
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("startReenableBackoffTimer for user " + arg0);
    ({ lastBackoffTime, expBackoffFactor } = self.retryBackoffCache[arg0]);
    let num2 = 1;
    if (null !== lastBackoffTime) {
      num2 = 1;
      if (expBackoffFactor <= 16) {
        let obj = _require(4558);
        num2 = 1;
        if (self.elapsedSeconds(obj.now(), lastBackoffTime) <= 600) {
          num2 = expBackoffFactor * 2;
        }
      }
    }
    obj = { lastBackoffTime: null, expBackoffFactor: null };
    obj[0] = _require(4558).now();
    obj[1] = num2;
    self.retryBackoffCache[arg0] = obj;
    const result = num2 * self.backoffTimeSec;
    const result1 = result * self(684).Millis.SECOND;
    const logger2 = self.logger;
    const _HermesInternal2 = HermesInternal;
    logger2.info("starting backoff timer with time = " + result1 + " milliseconds");
    const _setTimeout = setTimeout;
    self.timeoutIdCache[arg0] = setTimeout(() => {
      self.queueReenable(closure_0);
    }, result1);
    const obj3 = _require(4558);
  }
};
prototype["queueReenable"] = function queueReenable(closure_0) {
  const enableQueue = this.enableQueue;
  enableQueue.push(closure_0);
  this.tryReenableQueue();
};
prototype["tryReenableQueue"] = function tryReenableQueue() {
  const self = this;
  if (!this.disabled) {
    if (null == self.probingUserId) {
      const enableQueue = self.enableQueue;
      let arr = enableQueue.shift();
      if (null != arr) {
        if (!self.reenableVideo(arr)) {
          const enableQueue1 = self.enableQueue;
          arr = enableQueue1.shift();
          while (null != arr) {
            if (self.reenableVideo(arr)) {
              break;
            }
          }
        }
      }
    }
  }
};
prototype["reenableVideo"] = function reenableVideo(arr) {
  const self = this;
  let flag = arr in this.perUserFpsWindow;
  if (flag) {
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("reenableVideo called for user " + arr + " - time = " + sleep.now());
    const result = self.stateCleanupBeforeEnable(arr);
    self.currentVideoAutoToggleState[arr] = VideoToggleState.AUTO_PROBING;
    self.probingUserId = arr;
    dispatchAutoDisableVideoDefault(arr, VideoToggleState.AUTO_PROBING);
    flag = true;
    const obj = sleep;
  }
  return flag;
};
prototype["elapsedSeconds"] = function elapsedSeconds(arg0, lastBackoffTime) {
  return (arg0 - lastBackoffTime) / 1000;
};
prototype["stateCleanupBeforeEnable"] = function stateCleanupBeforeEnable(arr) {
  const logger = this.logger;
  logger.info("VideoHealthManager::stateCleanupBeforeEnable");
  this.perUserFpsWindow[arr] = [];
  this.prevFramesCodec[arr] = -1;
  const streamDisabledUsers = this.streamDisabledUsers;
  streamDisabledUsers.delete(arr);
};
prototype["getCurrentVideoToggleState"] = function getCurrentVideoToggleState(arg0) {
  return this.currentVideoAutoToggleState[arg0];
};
prototype["createUser"] = function createUser(arg0) {
  const self = this;
  const logger = this.logger;
  logger.info("VideoHealthManager::createUser " + arg0);
  if (!(arg0 in this.perUserFpsWindow)) {
    self.perUserFpsWindow[arg0] = [];
    self.prevFramesCodec[arg0] = -1;
    self.currentVideoAutoToggleState[arg0] = VideoToggleState.NONE;
    self.retryBackoffCache[arg0] = { lastBackoffTime: null, expBackoffFactor: 1 };
  }
};
prototype["deleteUser"] = function deleteUser(key10004) {
  const self = this;
  const logger = this.logger;
  logger.info("VideoHealthManager::deleteUser " + key10004);
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  delete tmp3[tmp2];
  const streamDisabledUsers = this.streamDisabledUsers;
  streamDisabledUsers.delete(key10004);
  if (key10004 === this.probingUserId) {
    self.probingUserId = undefined;
    self.tryReenableQueue();
  }
  clearTimeout(self.timeoutIdCache[key10004]);
  delete tmp[tmp2];
};
prototype["disable"] = function disable() {
  const self = this;
  this.disabled = true;
  for (const key10004 in this.perUserFpsWindow) {
    let tmp = key10004;
    let deleteUserResult = self.deleteUser(key10004);
    continue;
  }
};
VideoHealthManager.defaultConfig = { featureEnabled: isTablet.isMobile, windowLength: 5, allowedPoorFpsRatio: 1, fpsThreshold: 5, backoffTimeSec: 15 };
let obj = { featureEnabled: isTablet.isMobile, windowLength: 5, allowedPoorFpsRatio: 1, fpsThreshold: 5, backoffTimeSec: 15 };
let result = set2.fileFinishedImporting("lib/VideoHealthManager.tsx");

export { VideoHealthManager };