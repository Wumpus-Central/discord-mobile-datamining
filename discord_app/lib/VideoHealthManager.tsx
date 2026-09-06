// discord_app/lib/VideoHealthManager.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import Constants from "../Constants.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import shared_PlatformUtils from "../../discord_common/js/shared/lib/PlatformUtils.tsx";
import dispatchAutoDisableVideoDefault from "../modules/media_engine/dispatchAutoDisableVideo.tsx";
import size from "../../_runtime/metro/00002__.js";

const VideoToggleState = Constants.VideoToggleState;
class VideoHealthManager {
  constructor(arg0, arg1, arg2, arg3) {
    merged = Object.assign({
      logger: null,
      disabled: false,
      perUserFpsWindow: null,
      prevFramesCodec: null,
      prevTimestamp: null,
      streamDisabledUsers: null,
      retryBackoffCache: null,
      timeoutIdCache: null,
      currentVideoAutoToggleState: null,
      enableQueue: null,
    });
    tmp2 = new closure_1(closure_2[1])("VideoHealthManager");
    merged[0] = tmp2;
    merged[2] = {};
    merged[3] = {};
    merged[4] = {};
    set = new Set();
    merged[5] = set;
    merged[6] = {};
    merged[7] = {};
    merged[8] = {};
    merged[9] = [];
    merged.windowLength = global;
    merged.fpsThreshold = importDefault;
    merged.fpsWindowBorderlineCount = Math.ceil(global * require);
    merged.backoffTimeSec = importAll;
    logger = merged.logger;
    enableNativeLoggerResult = logger.enableNativeLogger(true);
    logger2 = merged.logger;
    infoResult = logger2.info(
      "constructor with windowLength = " +
        merged.windowLength +
        ",\n      fpsWindowBorderlineCount = " +
        merged.fpsWindowBorderlineCount +
        ",\n      fpsThreshold = " +
        merged.fpsThreshold +
        ",\n      backoffTimeSec = " +
        importAll,
    );
    return merged;
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
  const self = this;
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
            }
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
  const self = this;
  closure_0 = arg0;
  if (!this.disabled) {
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.info("startReenableBackoffTimer for user " + arg0);
    ({ lastBackoffTime, expBackoffFactor } = self.retryBackoffCache[arg0]);
    let num2 = 1;
    if (null !== lastBackoffTime) {
      num2 = 1;
      if (expBackoffFactor <= 16) {
        let obj = TimeUtils;
        num2 = 1;
        if (self.elapsedSeconds(obj.now(), lastBackoffTime) <= 600) {
          num2 = expBackoffFactor * 2;
        }
      }
    }
    obj = { lastBackoffTime: TimeUtils.now(), expBackoffFactor: num2 };
    self.retryBackoffCache[arg0] = obj;
    const result = num2 * self.backoffTimeSec;
    const result1 = result * DurationsDefault.Millis.SECOND;
    const logger2 = self.logger;
    const _HermesInternal2 = HermesInternal;
    logger2.info("starting backoff timer with time = " + result1 + " milliseconds");
    const _setTimeout = setTimeout;
    self.timeoutIdCache[arg0] = setTimeout(() => {
      self.queueReenable(closure_0);
    }, result1);
  }
};
prototype["queueReenable"] = function queueReenable(arg0) {
  const enableQueue = this.enableQueue;
  enableQueue.push(arg0);
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
    logger.info("reenableVideo called for user " + arr + " - time = " + TimeUtils.now());
    const result = self.stateCleanupBeforeEnable(arr);
    self.currentVideoAutoToggleState[arr] = VideoToggleState.AUTO_PROBING;
    self.probingUserId = arr;
    dispatchAutoDisableVideoDefault(arr, VideoToggleState.AUTO_PROBING);
    flag = true;
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
    let deleteUserResult = self.deleteUser(key10004);
    continue;
  }
};
VideoHealthManager.defaultConfig = {
  featureEnabled: shared_PlatformUtils.isMobile,
  windowLength: 5,
  allowedPoorFpsRatio: 1,
  fpsThreshold: 5,
  backoffTimeSec: 15,
};
let result = size.fileFinishedImporting("lib/VideoHealthManager.tsx");

export { VideoHealthManager };
