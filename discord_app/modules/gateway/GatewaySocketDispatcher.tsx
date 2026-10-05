// === Module 13449: GatewaySocketDispatcher ===

// Module 13449 (GatewaySocketDispatcher)
import LoggerDefault from "Logger" /* 3 */;
import TimeUtils from "TimeUtils" /* 4919 */;
import DispatcherWorkConstants from "DispatcherWorkConstants" /* 13450 */;
import WorkSchedulerTelemetry from "WorkSchedulerTelemetry" /* 13453 */;
import GatewaySocketAnalytics from "GatewaySocketAnalytics" /* 13454 */;
import VoiceServerUpdateImmediateExperiment from "VoiceServerUpdateImmediateExperiment" /* 13455 */;
import ConnectionStateDefault from "ConnectionState" /* 13456 */;
import ActionBatcherDefault from "ActionBatcher" /* 13457 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, closure_5, dependencyMap, importDefault;

let closure_4 = DispatcherWorkConstants.DISPATCHER_IDEAL_TIME_LIMIT_MS;
const tmp2 = new LoggerDefault("GatewaySocket");
const hasOwnProperty = tmp2;
const set = new Set(["INITIAL_GUILD", "READY"]);
const set1 = new Set(["READY", "INITIAL_GUILD"]);
const set2 = new Set(["VOICE_SERVER_UPDATE", "STREAM_SERVER_UPDATE"]);
const set3 = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
const set4 = new Set(["READY", "INITIAL_GUILD", "READY_SUPPLEMENTAL", "RESUMED", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATE", "VOICE_SERVER_UPDATE", "RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "RTC_CONNECTION_CLIENT_CONNECT", "RTC_CONNECTION_PING", "MEDIA_SESSION_JOINED", "MEDIA_ENGINE_PERMISSION", "SESSIONS_REPLACE", "STREAM_CREATE", "STREAM_SERVER_UPDATE", "STREAM_DELETE", "STREAM_UPDATE"]);
const unpackModuleId = { NotStarted: 0, [0]: "NotStarted", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let closure_12 = {};
let result = size.fileFinishedImporting("modules/gateway/GatewaySocketDispatcher.tsx");
class GatewaySocketDispatcher {
  constructor(socket) {
    let logger;
    const obj3 = Object.create(new.target.prototype);
    let obj = obj3(13451);
    obj3.scheduler = obj.createDispatcherWorkScheduler();
    obj3.queue = [];
    obj3.paused = true;
    const obj2 = obj3(13454);
    obj3.resumeAnalytics = obj2.createResumeAnalytics();
    obj3.getDispatchHandler = null;
    obj3.flush = function flush(arg0) {
      if (obj3.paused) {
        return true;
      } else {
        const _performance = performance;
        let num2 = 0;
        let obj = obj3;
        const nowResult = performance.now();
        if (0 < obj3.queue.length) {
          let num4 = 0;
          num2 = 0;
          obj = obj3;
          if (obj3.queue[0].status === closure_11.Loaded) {
            const sum = num4 + 1;
            num2 = sum;
            obj = obj3;
            while (sum < obj3.queue.length) {
              num4 = sum;
              num2 = sum;
              obj = obj3;
              if (obj3.queue[sum].status !== closure_11.Loaded) {
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
            telemetry.timeEnd(WorkSchedulerTelemetry.WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
          }
          const _performance2 = performance;
          const diff = performance.now() - nowResult;
          const tmp13 = diff > closure_4 && !dispatchMultipleResult;
          if (tmp13) {
            const _HermesInternal = HermesInternal;
            logger.log("Dispatched " + spliceResult.length + " messages in " + diff + "ms");
          }
          return dispatchMultipleResult;
        }
      }
    };
    obj3.socket = socket;
    return obj3;
  }
  hasStuffToDispatchNow() {
    return this.queue.length > 0 && this.queue[0].status === closure_11.Loaded;
  }
  processFirstQueuedDispatch(set) {
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
            } else if (self.queue[0].status !== closure_11.Loaded) {
              break;
            }
          }
        }
      }
    }
    self.dispatchMultiple(items);
  }
  unpauseDispatchQueue() {
    const self = this;
    this.paused = false;
    const queue = this.queue;
    for (const item10007 of queue) {
      let maybePreloadResult = self.maybePreload(item10007);
      continue;
    }
    self.flush();
  }
  receiveDispatch(data, type, compressionAnalytics) {
    let obj2;
    const self = this;
    if (null == this.getDispatchHandler) {
      const _Error = Error;
      throw Error("getDispatchHandler needs to be passed in first!");
    } else {
      const obj = { data, type, compressionAnalytics, status: closure_11.NotStarted, preloadPromise: null, preloadedData: null, receivedAt: obj2.now() };
      const queue = self.queue;
      obj2 = TimeUtils;
      queue.push(obj);
      if (!self.maybePreload(obj)) {
        self.scheduleFlush(type);
      }
    }
  }
  maybePreload(item10007) {
    const self = this;
    if (this.paused) {
      if (!set.has(item10007.type)) {
        return false;
      }
    }
    if (item10007.status === Loaded.NotStarted) {
      const dispatchHandler = self.getDispatchHandler(item10007.type);
      let preloadResult;
      if (dispatchHandler != null) {
        preloadResult = dispatchHandler.preload(item10007.data);
      }
      item10007.status = null == preloadResult ? Loaded.Loaded : Loaded.Loading;
      item10007.preloadPromise = preloadResult;
      if (null != preloadResult) {
        const nextPromise = preloadResult.then((preloadedData) => {
          item10007.preloadedData = preloadedData;
          item10007.status = Loaded.Loaded;
          self.scheduleFlush(item10007.type);
        });
        nextPromise.catch((error) => {
          const socket = self.socket;
          const obj = { error, action: item10007.type };
          return socket.resetSocketOnDispatchError(obj);
        });
        return true;
      }
    }
    return false;
  }
  shouldFlushImmediately(type) {
    let hasItem = set1.has(type);
    if (!hasItem) {
      let result = set2.has(type);
      if (result) {
        const obj = VoiceServerUpdateImmediateExperiment;
        result = obj.isVoiceServerUpdateImmediateEnabled("GatewaySocketDispatcher");
      }
      hasItem = result;
    }
    return hasItem;
  }
  scheduleFlush(type) {
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
  }
  getDispatchTimings() {
    return closure_12;
  }
  getSchedulerTelemetry() {
    return this.scheduler.telemetry;
  }
  getIsSchedulerBackgrounded() {
    return this.scheduler.isBackgrounded;
  }
  toggleRequestIdleCallback(arg0) {
    const scheduler = this.scheduler;
    const result = scheduler.toggleRequestIdleCallback(arg0);
  }
  getIsRequestIdleCallbackEnabled() {
    return this.scheduler.isRequestIdleCallbackEnabled;
  }
  dispatchMultiple(items, arg1) {
    let closure_2;
    const self = this;
    importDefault = items;
    dependencyMap = arg1;
    if (0 === items.length) {
      return true;
    } else {
      let type = "none";
      let hasItem = false;
      const telemetry2 = self.scheduler.telemetry;
      telemetry2.measure(require("WorkSchedulerTelemetry").WorkSchedulerTelemetryMeasurement.COUNT_INITIAL_DISPATCHS_LENGTH, items.length);
      const tmp21 = _require;
      try {
        closure_5 = [];
        if (self.socket.connectionState === ConnectionStateDefault.RESUMING) {
          const Emitter = tmp2(504).Emitter;
          let num = 150;
          Emitter.pause(150);
        }
        _require = 0;
        const Emitter2 = tmp2(504).Emitter;
        Emitter2.batched(() => {
          let arr;
          let sum;
          let num = 0;
          if (0 < items.length) {
            while (true) {
              arr = items;
              let tmp = items[num];
              type = tmp.type;
              if (!hasItem) {
                hasItem = set3.has(tmp.type);
              }
              let _performance = performance;
              let nowResult = performance.now();
              let dispatchOneResult = self.dispatchOne(tmp);
              let _performance2 = performance;
              closure_0 = performance.now() - nowResult;
              type = tmp.type;
              items = closure_12[type];
              let tmp8 = closure_0;
              if (items == null) {
                items = [0, 0];
              }
              let tmp11 = _slicedToArray(items, 2);
              let tmp12 = tmp11[1];
              let items1 = [(tmp11[0] * tmp12 + tmp8) / (tmp12 + 1), tmp12 + 1];
              closure_12[type] = items1;
              let flag = false;
              if (null != closure_2) {
                let diff = arr.length - 1;
                let tmp15 = null;
                let tmp13 = arr[num];
                if (num < diff) {
                  tmp15 = arr[num + 1];
                }
                let num2;
                if (closure_2 != null) {
                  num2 = closure_2.timeRemaining();
                }
                if (num2 == null) {
                  num2 = 0;
                }
                let type1;
                let type2 = tmp13.type;
                if (tmp15 != null) {
                  type1 = tmp15.type;
                }
                let tmp17 = null != closure_2 && num2 <= 0 && type2 !== type1 && num !== diff;
                flag = tmp17;
              }
              sum = num + 1;
              if (flag) {
                break;
              } else {
                num = sum;
              }
            }
            closure_5 = arr.slice(sum);
            const tmp19 = null != closure_2 && closure_2.timeRemaining() <= 0;
            if (tmp19) {
              const telemetry = self.scheduler.telemetry;
              telemetry.timeTrack(WorkSchedulerTelemetry.WorkSchedulerTelemetryTiming.TIME_OVER_DEADLINE, closure_2.timeSinceExpiration);
            }
          }
          const obj2 = ActionBatcherDefault;
          obj2.flush();
        });
        const tmp5 = hasItem;
        if (tmp5) {
          const Emitter3 = tmp2(504).Emitter;
          Emitter3.resume();
        }
        if (closure_5.length > 0) {
          let telemetry = self.scheduler.telemetry;
          let tmp8 = closure_5;
          telemetry.measure(tmp21(13453).WorkSchedulerTelemetryMeasurement.COUNT_DISPATCHES_LEFT_AFTER_YIELD, closure_5.length);
          const queue = self.queue;
          const unshift = queue.unshift;
          items = [];
          let tmp11 = items;
          let num2 = 0;
          HermesBuiltin.arraySpread(items, closure_5, 0);
          let tmp13 = unshift;
          let tmp15 = queue;
          HermesBuiltin.apply(unshift, items, queue);
          const scheduler = self.scheduler;
          let flag = true;
          const workTimeout = scheduler.requestWorkTimeout(self.flush, true);
          return false;
        } else {
          return true;
        }
      } catch (tmp18) {
        const socket = self.socket;
        let tmp19 = type;
        const obj = { error: tmp18, action: type };
        const result = socket.resetSocketOnDispatchError(obj);
      }
    }
  }
  dispatchOne(arg0) {
    let compressionAnalytics;
    let data;
    let preloadedData;
    let receivedAt;
    let type;
    const self = this;
    ({ data, type, compressionAnalytics, preloadedData, receivedAt } = arg0);
    const nowResult = performance.now();
    if (this.socket.connectionState === ConnectionStateDefault.RESUMING) {
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
    const tmp2Result = ActionBatcherDefault;
    tmp2Result.flush(type, data);
    if ("READY" === type) {
      const obj6 = GatewaySocketAnalytics;
      const readyPayloadByteSizeAnalytics = obj6.getReadyPayloadByteSizeAnalytics(data);
      const dispatchHandler = self.getDispatchHandler(type);
      if (dispatchHandler != null) {
        dispatchHandler.dispatch(data, type, preloadedData, receivedAt);
      }
      const tmp16Result = GatewaySocketAnalytics;
      const result = tmp16Result.logReadyPayloadReceived(self.socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics);
    } else if ("RESUMED" === type) {
      const dispatchHandler1 = self.getDispatchHandler(type);
      if (dispatchHandler1 != null) {
        dispatchHandler1.dispatch(data, type, preloadedData, receivedAt);
      }
      const obj4 = GatewaySocketAnalytics;
      obj4.logResumeAnalytics(self.resumeAnalytics);
      const socket = self.socket;
      const result1 = socket.handleResumeDispatched();
      const obj5 = GatewaySocketAnalytics;
      self.resumeAnalytics = obj5.createResumeAnalytics();
    } else {
      const dispatchHandler2 = self.getDispatchHandler(type);
      if (dispatchHandler2 != null) {
        dispatchHandler2.dispatch(data, type, preloadedData, receivedAt);
      }
    }
    if (self.socket.connectionState === ConnectionStateDefault.RESUMING) {
      const resumeAnalytics3 = self.resumeAnalytics;
      const _performance = performance;
      resumeAnalytics3.dispatchTime = resumeAnalytics3.dispatchTime + (performance.now() - nowResult);
    }
  }
  clear() {
    this.paused = false;
    this.queue.length = 0;
  }
}
const prototype = GatewaySocketDispatcher.prototype;

export default GatewaySocketDispatcher;