// === Module 13638: set ===

// Module 13638 (set)
import timestampDefault from "timestamp" /* 3 */;
import sleep from "sleep" /* 4589 */;
import prettyPrintTrace_ from "prettyPrintTrace_" /* 13643 */;
import isVoiceServerUpdateImmediateEnabled from "isVoiceServerUpdateImmediateEnabled" /* 13644 */;
import CLOSEDDefault from "CLOSED" /* 13645 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { DISPATCHER_IDEAL_TIME_LIMIT_MS as closure_4 } from "DISPATCHER_STANDARD_TIMEOUT_MS" /* 13639 */;
import set from "set" /* 2 */;

require = arg1;
let closure_5 = new timestampDefault("GatewaySocket");
let set = new Set(["INITIAL_GUILD", "READY"]);
const set1 = new Set(["READY", "INITIAL_GUILD"]);
const set2 = new Set(["VOICE_SERVER_UPDATE", "STREAM_SERVER_UPDATE"]);
const set3 = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
const set4 = new Set(["READY", "INITIAL_GUILD", "READY_SUPPLEMENTAL", "RESUMED", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATE", "VOICE_SERVER_UPDATE", "RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "RTC_CONNECTION_CLIENT_CONNECT", "RTC_CONNECTION_PING", "MEDIA_SESSION_JOINED", "MEDIA_ENGINE_PERMISSION", "SESSIONS_REPLACE", "STREAM_CREATE", "STREAM_SERVER_UPDATE", "STREAM_DELETE", "STREAM_UPDATE"]);
let closure_11 = { NotStarted: 0, [0]: "NotStarted", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let closure_12 = {};
let result = set.fileFinishedImporting("modules/gateway/GatewaySocketDispatcher.tsx");
class GatewaySocketDispatcher {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj = require("_queueIdleCallback");
    obj.scheduler = obj.createDispatcherWorkScheduler();
    obj.queue = [];
    obj.paused = true;
    obj2 = require("prettyPrintTrace_");
    obj.resumeAnalytics = obj2.createResumeAnalytics();
    obj.getDispatchHandler = null;
    obj.flush = function flush(arg0) {
      if (obj.paused) {
        return true;
      } else {
        const _performance = performance;
        let num2 = 0;
        obj = tmp;
        if (0 < tmp.queue.length) {
          let num4 = 0;
          num2 = 0;
          obj = tmp;
          if (tmp.queue[0].status === closure_1_11.Loaded) {
            const sum = num4 + 1;
            num2 = sum;
            while (sum < obj.queue.length) {
              let tmp7 = closure_1_11;
              num4 = sum;
              num2 = sum;
              obj = tmp6;
              if (tmp6.queue[sum].status !== closure_1_11.Loaded) {
                break;
              }
            }
          }
        }
        if (0 === num2) {
          return true;
        } else {
          const queue = obj.queue;
          const spliceResult = queue.splice(0, num2);
          const dispatchMultipleResult = obj.dispatchMultiple(spliceResult, arg0);
          if (dispatchMultipleResult) {
            const telemetry = obj.scheduler.telemetry;
            telemetry.timeEnd(obj(closure_1_2[7]).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
          }
          const _performance2 = performance;
          const diff = performance.now() - nowResult;
          if (tmp13) {
            const _HermesInternal = HermesInternal;
            closure_1_5.log("Dispatched " + spliceResult.length + " messages in " + diff + "ms");
          }
          return dispatchMultipleResult;
        }
        nowResult = performance.now();
      }
    };
    obj.socket = global;
    return obj;
  }
}
const prototype = GatewaySocketDispatcher.prototype;
prototype["hasStuffToDispatchNow"] = function hasStuffToDispatchNow() {
  let tmp = this.queue.length > 0;
  if (tmp) {
    tmp = this.queue[0].status === closure_11.Loaded;
  }
  return tmp;
};
prototype["processFirstQueuedDispatch"] = function processFirstQueuedDispatch(set) {
  const self = this;
  const items = [];
  if (this.queue.length > 0) {
    if (set.has(self.queue[0].type)) {
      if (self.queue[0].status === closure_11.Loaded) {
        const queue = self.queue;
        items.push(queue.shift());
        while (self.queue.length > 0) {
          if (!set.has(self.queue[0].type)) {
            break;
          } else {
            let tmp3 = closure_11;
            if (self.queue[0].status !== closure_11.Loaded) {
              break;
            }
          }
        }
      }
    }
  }
  self.dispatchMultiple(items);
};
prototype["unpauseDispatchQueue"] = function unpauseDispatchQueue() {
  const self = this;
  this.paused = false;
  for (const item10007 of tmp) {
    let maybePreloadResult = self.maybePreload(item10007);
    continue;
  }
  self.flush();
};
prototype["receiveDispatch"] = function receiveDispatch(d, type, arg2) {
  const self = this;
  if (null == this.getDispatchHandler) {
    const _Error = Error;
    throw Error("getDispatchHandler needs to be passed in first!");
  } else {
    const obj = { data: null, type: null, compressionAnalytics: null, status: null, preloadPromise: null, preloadedData: null, receivedAt: null };
    obj[0] = d;
    obj[1] = type;
    obj[2] = arg2;
    obj[3] = closure_11.NotStarted;
    obj[6] = sleep.now();
    const queue = self.queue;
    queue.push(obj);
    if (!self.maybePreload(obj)) {
      self.scheduleFlush(type);
    }
  }
};
prototype["maybePreload"] = function maybePreload(item10007) {
  let self = this;
  self = this;
  closure_0 = item10007;
  if (this.paused) {
    if (!set.has(item10007.type)) {
      return false;
    }
  }
  if (item10007.status === closure_11.NotStarted) {
    const dispatchHandler = self.getDispatchHandler(item10007.type);
    let preloadResult;
    if (dispatchHandler != null) {
      preloadResult = dispatchHandler.preload(item10007.data);
    }
    item10007.status = null == preloadResult ? tmp2.Loaded : tmp2.Loading;
    item10007.preloadPromise = preloadResult;
    if (null != preloadResult) {
      preloadResult.then((preloadedData) => {
        item10007.preloadedData = preloadedData;
        item10007.status = closure_1_11.Loaded;
        self.scheduleFlush(item10007.type);
      }).catch((error) => {
        const socket = self.socket;
        return socket.resetSocketOnDispatchError({ error, action: item10007.type });
      });
      return true;
    }
  }
  return false;
};
prototype["shouldFlushImmediately"] = function shouldFlushImmediately(type) {
  let hasItem = set1.has(type);
  if (!hasItem) {
    let result = set2.has(type);
    if (result) {
      result = isVoiceServerUpdateImmediateEnabled.isVoiceServerUpdateImmediateEnabled("GatewaySocketDispatcher");
      const obj = isVoiceServerUpdateImmediateEnabled;
    }
    hasItem = result;
  }
  return hasItem;
};
prototype["scheduleFlush"] = function scheduleFlush(type) {
  const self = this;
  if (!this.paused) {
    const scheduler = self.scheduler;
    if (self.shouldFlushImmediately(type)) {
      scheduler.clearWorkTimeout();
      self.flush();
    } else if (!scheduler.hasWorkScheduled) {
      const scheduler2 = self.scheduler;
      const workTimeout = scheduler2.requestWorkTimeout(self.flush);
    }
    if (set4.has(type)) {
      const scheduler3 = self.scheduler;
      const result = scheduler3.markCriticalWorkScheduled();
    }
  }
};
prototype["getDispatchTimings"] = function getDispatchTimings() {
  return closure_12;
};
prototype["getSchedulerTelemetry"] = function getSchedulerTelemetry() {
  return this.scheduler.telemetry;
};
prototype["getIsSchedulerBackgrounded"] = function getIsSchedulerBackgrounded() {
  return this.scheduler.isBackgrounded;
};
prototype["toggleRequestIdleCallback"] = function toggleRequestIdleCallback(arg0) {
  const scheduler = this.scheduler;
  const result = scheduler.toggleRequestIdleCallback(arg0);
};
prototype["getIsRequestIdleCallbackEnabled"] = function getIsRequestIdleCallbackEnabled() {
  return this.scheduler.isRequestIdleCallbackEnabled;
};
prototype["dispatchMultiple"] = function dispatchMultiple(items, arg1) {
  let self = this;
  self = this;
  importDefault = items;
  dependencyMap = arg1;
  if (0 === items.length) {
    return true;
  } else {
    const none = "none";
    c4 = false;
    const telemetry2 = self.scheduler.telemetry;
    telemetry2.measure(_require(13642).WorkSchedulerTelemetryMeasurement.COUNT_INITIAL_DISPATCHS_LENGTH, items.length);
    try {
      closure_5 = [];
      if (self.socket.connectionState === CLOSEDDefault.RESUMING) {
        const Emitter = tmp2(504).Emitter;
        Emitter.pause(150);
      }
      _require = 0;
      const Emitter2 = tmp2(504).Emitter;
      Emitter2.batched(() => {
        let arr;
        let obj;
        let sum;
        let tmp6;
        let num = 0;
        if (0 < items.length) {
          while (true) {
            arr = items;
            let tmp = items[num];
            let type = tmp.type;
            let tmp3 = num;
            if (!hasItem) {
              let tmp4 = closure_1_9;
              hasItem = closure_1_9.has(tmp.type);
            }
            let _performance = performance;
            let nowResult = performance.now();
            tmp6 = self;
            let dispatchOneResult = self.dispatchOne(tmp);
            let _performance2 = performance;
            closure_0 = performance.now() - nowResult;
            type = tmp.type;
            items = closure_1_12[type];
            let tmp8 = closure_0;
            let tmp9 = closure_1_12;
            if (items == null) {
              items = [0, 0];
            }
            let tmp10 = none;
            let tmp11 = none(items, 2);
            let tmp12 = tmp11[1];
            let items1 = [(tmp11[0] * tmp12 + tmp8) / (tmp12 + 1), tmp12 + 1];
            tmp9[type] = items1;
            obj = dependencyMap;
            let flag = false;
            if (null != dependencyMap) {
              let diff = arr.length - 1;
              let tmp14 = null;
              if (num < diff) {
                tmp14 = arr[num + 1];
              }
              let num2;
              if (obj != null) {
                num2 = obj.timeRemaining();
              }
              if (num2 == null) {
                num2 = 0;
              }
              type = undefined;
              if (tmp14 != null) {
                type = tmp14.type;
              }
              let tmp16 = null != obj && num2 <= 0 && arr[num].type !== type && num !== diff;
              flag = tmp16;
            }
            sum = num + 1;
            if (flag) {
              break;
            } else {
              num = sum;
            }
          }
          closure_5 = arr.slice(sum);
          if (tmp18) {
            const telemetry = tmp6.scheduler.telemetry;
            telemetry.timeTrack(v0(13642).WorkSchedulerTelemetryTiming.TIME_OVER_DEADLINE, obj.timeSinceExpiration);
          }
          tmp18 = null != obj && obj.timeRemaining() <= 0;
        }
        items(13646).flush();
      });
      if (c4) {
        const Emitter3 = tmp2(504).Emitter;
        Emitter3.resume();
      }
      if (closure_5.length > 0) {
        let telemetry = self.scheduler.telemetry;
        telemetry.measure(tmp21(13642).WorkSchedulerTelemetryMeasurement.COUNT_DISPATCHES_LEFT_AFTER_YIELD, closure_5.length);
        const queue = self.queue;
        const unshift = queue.unshift;
        items = [];
        HermesBuiltin.arraySpread(closure_5, 0);
        HermesBuiltin.apply(items, queue);
        const scheduler = self.scheduler;
        const workTimeout = scheduler.requestWorkTimeout(self.flush, true);
        return false;
      } else {
        return true;
      }
    } catch (tmp18) {
      const socket = tmp.socket;
      let obj = { error: null, action: null };
      obj[0] = tmp18;
      obj[1] = none;
      const result = socket.resetSocketOnDispatchError(obj);
    }
    tmp21 = _require;
  }
};
prototype["dispatchOne"] = function dispatchOne(arg0) {
  const self = this;
  ({ data, type, compressionAnalytics, preloadedData, receivedAt } = arg0);
  const nowResult = performance.now();
  if (this.socket.connectionState !== CLOSEDDefault.RESUMING) {
    tmp2(13646).flush(type, data);
    if ("READY" === type) {
      const readyPayloadByteSizeAnalytics = prettyPrintTrace_.getReadyPayloadByteSizeAnalytics(data);
      const dispatchHandler = self.getDispatchHandler(type);
      if (dispatchHandler != null) {
        dispatchHandler.dispatch(data, type, preloadedData, receivedAt);
      }
      const tmp16Result = prettyPrintTrace_;
      const result = tmp16Result.logReadyPayloadReceived(self.socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics);
      const obj6 = prettyPrintTrace_;
      const tmp16 = require;
    } else if ("RESUMED" === type) {
      const dispatchHandler1 = self.getDispatchHandler(type);
      if (dispatchHandler1 != null) {
        dispatchHandler1.dispatch(data, type, preloadedData, receivedAt);
      }
      prettyPrintTrace_.logResumeAnalytics(self.resumeAnalytics);
      const socket = self.socket;
      const result1 = socket.handleResumeDispatched();
      const obj4 = prettyPrintTrace_;
      self.resumeAnalytics = prettyPrintTrace_.createResumeAnalytics();
      const obj5 = prettyPrintTrace_;
    } else {
      const dispatchHandler2 = self.getDispatchHandler(type);
      if (dispatchHandler2 != null) {
        dispatchHandler2.dispatch(data, type, preloadedData, receivedAt);
      }
    }
    if (self.socket.connectionState === tmp2(13645).RESUMING) {
      const resumeAnalytics3 = self.resumeAnalytics;
      const _performance = performance;
      resumeAnalytics3.dispatchTime = resumeAnalytics3.dispatchTime + (performance.now() - nowResult);
    }
  } else {
    const diff = nowResult - self.resumeAnalytics.lastUpdateTime;
    if (0 === self.resumeAnalytics.numEvents) {
      self.resumeAnalytics.initialWaitTime = diff;
    } else if (diff > self.resumeAnalytics.largestWaitTime) {
      self.resumeAnalytics.largestWaitTime = diff;
    }
    const resumeAnalytics = self.resumeAnalytics;
    resumeAnalytics.totalWaitTime = resumeAnalytics.totalWaitTime + diff;
    self.resumeAnalytics.lastUpdateTime = nowResult;
    const resumeAnalytics2 = self.resumeAnalytics;
    resumeAnalytics2.numEvents = resumeAnalytics2.numEvents + 1;
  }
};
prototype["clear"] = function clear() {
  this.paused = false;
  this.queue.length = 0;
};

export default GatewaySocketDispatcher;