// discord_app/modules/gateway/GatewaySocketDispatcher.tsx
import _slicedToArray from "_slicedToArray";
import { DISPATCHER_IDEAL_TIME_LIMIT_MS as closure_4 } from "DISPATCHER_STANDARD_TIMEOUT_MS";
import set from "timestamp";
import { CLOSED } from "ConnectionState.tsx";
import { prettyPrintTrace_ } from "GatewaySocketAnalytics.tsx";
import { WorkSchedulerTelemetryEvent } from "WorkSchedulerTelemetry.tsx";

const require = arg1;
let c5 = new require("_queueIdleCallback")("GatewaySocket");
let set = new Set(["INITIAL_GUILD", "READY"]);
const set1 = new Set(["READY", "INITIAL_GUILD"]);
const set2 = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
const set3 = new Set(["READY", "INITIAL_GUILD", "READY_SUPPLEMENTAL", "RESUMED", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATE", "VOICE_SERVER_UPDATE", "RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "RTC_CONNECTION_CLIENT_CONNECT", "RTC_CONNECTION_PING", "MEDIA_SESSION_JOINED", "MEDIA_ENGINE_PERMISSION", "SESSIONS_REPLACE", "STREAM_CREATE", "STREAM_SERVER_UPDATE", "STREAM_DELETE", "STREAM_UPDATE"]);
let closure_10 = { NotStarted: 0, [0]: "NotStarted", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let closure_11 = {};
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
          if (tmp.queue[0].status === outer1_10.Loaded) {
            const sum = num4 + 1;
            num2 = sum;
            while (sum < obj.queue.length) {
              let tmp7 = outer1_10;
              num4 = sum;
              num2 = sum;
              obj = tmp6;
              if (tmp6.queue[sum].status !== outer1_10.Loaded) {
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
            telemetry.timeEnd(obj(outer1_2[5]).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
          }
          const _performance2 = performance;
          const diff = performance.now() - nowResult;
          if (tmp13) {
            const _HermesInternal = HermesInternal;
            outer1_5.log("Dispatched " + spliceResult.length + " messages in " + diff + "ms");
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
    tmp = this.queue[0].status === closure_10.Loaded;
  }
  return tmp;
};
prototype["processFirstQueuedDispatch"] = function processFirstQueuedDispatch(set) {
  const self = this;
  const items = [];
  if (this.queue.length > 0) {
    if (set.has(self.queue[0].type)) {
      if (self.queue[0].status === closure_10.Loaded) {
        const queue = self.queue;
        items.push(queue.shift());
        while (self.queue.length > 0) {
          if (!set.has(self.queue[0].type)) {
            break;
          } else {
            let tmp3 = closure_10;
            if (self.queue[0].status !== closure_10.Loaded) {
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
    const obj = { data: null, type: null, compressionAnalytics: null, status: null, preloadPromise: null, preloadedData: null };
    obj[0] = d;
    obj[1] = type;
    obj[2] = arg2;
    obj[3] = closure_10.NotStarted;
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
  let closure_0 = item10007;
  if (this.paused) {
    if (!set.has(item10007.type)) {
      return false;
    }
  }
  if (item10007.status === closure_10.NotStarted) {
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
        item10007.status = outer1_10.Loaded;
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
prototype["scheduleFlush"] = function scheduleFlush(type) {
  const self = this;
  if (!this.paused) {
    const scheduler = self.scheduler;
    if (set1.has(type)) {
      scheduler.clearWorkTimeout();
      self.flush();
    } else if (!scheduler.hasWorkScheduled) {
      const scheduler2 = self.scheduler;
      const workTimeout = scheduler2.requestWorkTimeout(self.flush);
    }
    if (set3.has(type)) {
      const scheduler3 = self.scheduler;
      const result = scheduler3.markCriticalWorkScheduled();
    }
  }
};
prototype["getDispatchTimings"] = function getDispatchTimings() {
  return closure_11;
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
  const importDefault = items;
  const dependencyMap = arg1;
  if (0 === items.length) {
    return true;
  } else {
    const none = "none";
    let c4 = false;
    const telemetry2 = self.scheduler.telemetry;
    telemetry2.measure(_WorkSchedulerTelemetryEvent.WorkSchedulerTelemetryMeasurement.COUNT_INITIAL_DISPATCHS_LENGTH, items.length);
    try {
      let tmp2 = [];
      tmp2 = importDefault;
      if (self.socket.connectionState === CLOSED.RESUMING) {
        const Emitter = tmp2(589).Emitter;
        Emitter.pause(150);
      }
      _require = 0;
      const Emitter2 = tmp2(589).Emitter;
      Emitter2.batched(() => {
        let arr;
        let items;
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
              let tmp4 = outer1_8;
              hasItem = outer1_8.has(tmp.type);
            }
            let _performance = performance;
            let nowResult = performance.now();
            tmp6 = self;
            let dispatchOneResult = self.dispatchOne(tmp);
            let _performance2 = performance;
            let closure_0 = performance.now() - nowResult;
            type = tmp.type;
            items = outer1_11[type];
            let tmp8 = closure_0;
            let tmp9 = outer1_11;
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
          let closure_5 = arr.slice(sum);
          if (tmp18) {
            const telemetry = tmp6.scheduler.telemetry;
            telemetry.timeTrack(v0(12997).WorkSchedulerTelemetryTiming.TIME_OVER_DEADLINE, obj.timeSinceExpiration);
          }
          tmp18 = null != obj && obj.timeRemaining() <= 0;
        }
        items(13000).flush();
      });
      if (c4) {
        const Emitter3 = tmp2(589).Emitter;
        Emitter3.resume();
      }
      if (tmp2.length > 0) {
        let telemetry = self.scheduler.telemetry;
        telemetry.measure(tmp21(12997).WorkSchedulerTelemetryMeasurement.COUNT_DISPATCHES_LEFT_AFTER_YIELD, tmp2.length);
        const queue = self.queue;
        const unshift = queue.unshift;
        items = [];
        HermesBuiltin.arraySpread(tmp2, 0);
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
  let compressionAnalytics;
  let data;
  let preloadedData;
  let type;
  const self = this;
  ({ data, type, compressionAnalytics, preloadedData } = arg0);
  const nowResult = performance.now();
  if (this.socket.connectionState !== CLOSED.RESUMING) {
    tmp2(13000).flush(type, data);
    if ("READY" === type) {
      const readyPayloadByteSizeAnalytics = prettyPrintTrace_.getReadyPayloadByteSizeAnalytics(data);
      const dispatchHandler = self.getDispatchHandler(type);
      if (dispatchHandler != null) {
        dispatchHandler.dispatch(data, type, preloadedData);
      }
      const tmp11Result = prettyPrintTrace_;
      const result = tmp11Result.logReadyPayloadReceived(self.socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics);
      const obj6 = prettyPrintTrace_;
      const tmp11 = require;
    } else if ("RESUMED" === type) {
      const dispatchHandler1 = self.getDispatchHandler(type);
      if (dispatchHandler1 != null) {
        dispatchHandler1.dispatch(data, type, preloadedData);
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
        dispatchHandler2.dispatch(data, type, preloadedData);
      }
    }
    if (self.socket.connectionState === tmp2(12999).RESUMING) {
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