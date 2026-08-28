// === Module 7294: set ===

// Module 7294 (set)
import ME from "ME" /* 676 */;
import enforcing from "enforcing" /* 7297 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 500 */;

let obj = require;
const Endpoints = ME.Endpoints;
let set = new Set(["darwin", "linux", "win32", "ios", "android"]);
obj = { COUNT: "count", DISTRIBUTION: "distribution" };
class MonitoringAgent {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._metrics = [];
    obj._intervalId = setInterval(() => {
      obj._flush();
    }, 120000);
    tmp2 = closure_0;
    tmp3 = closure_1;
    tmp4 = require("get ActivityIndicator");
    ({ NativeModules, NativeEventEmitter } = tmp4);
    obj = require("set");
    if (obj.isAndroid()) {
      MetricMonitor = require("enforcing").default;
    } else {
      MetricMonitor = NativeModules.MetricMonitor;
    }
    nativeEventEmitter = new NativeEventEmitter(MetricMonitor);
    addListenerResult = nativeEventEmitter.addListener("logMetric", (arg0) => {
      obj.increment(arg0, false);
    });
    return obj;
  }
}
const prototype = MonitoringAgent.prototype;
prototype["_getMetricWithDefaults"] = function _getMetricWithDefaults(name, COUNT) {
  let tags = name.tags;
  obj = { name: name.name, type: COUNT, tags: obj(7298).getGlobalTagsArray() };
  if (null != tags) {
    const item = tags.forEach((arg0) => {
      const tags = obj.tags;
      tags.push(arg0);
    });
  }
  let tmpResult = tmp(500);
  let str = "web";
  if (!tmpResult.isWeb()) {
    tmpResult = tmp(500);
    const platformName = tmpResult.getPlatformName();
    let tmp6 = null;
    if (set.has(platformName)) {
      tmp6 = platformName;
    }
    str = tmp6;
  }
  if (null != str) {
    const tags1 = obj.tags;
    const _HermesInternal = HermesInternal;
    tags1.push("platform:" + str);
  }
  const CurrentReleaseChannel = tmp(7295).CurrentReleaseChannel;
  let tmp9 = null;
  if (null != CurrentReleaseChannel) {
    const ALL = tmp(7296).ReleaseChannelsSets.ALL;
    tmp9 = null;
    if (ALL.has(CurrentReleaseChannel)) {
      tmp9 = CurrentReleaseChannel;
    }
  }
  if (null != tmp9) {
    const tags2 = obj.tags;
    const _HermesInternal2 = HermesInternal;
    tags2.push("release_channel:" + tmp9);
  }
  return obj;
};
prototype["increment"] = function increment(name) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  const _metrics = this._metrics;
  _metrics.push(this._getMetricWithDefaults(name, obj.COUNT));
  if (!flag) {
    flag = self._metrics.length >= 100;
  }
  if (flag) {
    self._flush();
  }
};
prototype["distribution"] = function distribution(name, value) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const self = this;
  obj = {};
  const merged = Object.assign(this._getMetricWithDefaults(name, obj.DISTRIBUTION));
  obj.value = value;
  const _metrics = this._metrics;
  _metrics.push(obj);
  if (!flag) {
    flag = self._metrics.length >= 100;
  }
  if (flag) {
    self._flush();
  }
};
prototype["_flush"] = function _flush() {
  let self = this;
  self = this;
  if (this._metrics.length > 0) {
    let items = [];
    HermesBuiltin.arraySpread(self._metrics, 0);
    const HTTP = items(self[7]).HTTP;
    obj = { url: null, body: null, retries: 1, rejectWithError: true };
    obj[0] = Endpoints.METRICS_V2;
    obj = { metrics: null, client_info: null };
    obj[0] = items;
    obj[1] = { built_at: "1787894347814", build_number: "6302" };
    obj[1] = obj;
    HTTP.post(obj).catch(() => {
      if (self._metrics.length + items.length < 100) {
        items = [];
        HermesBuiltin.arraySpread(tmp2, HermesBuiltin.arraySpread(tmp._metrics, 0));
        tmp._metrics = items;
      }
    });
    const postResult = HTTP.post(obj);
  }
  self._metrics = [];
};
obj = Object.create(MonitoringAgent.prototype);
obj._metrics = [];
obj._intervalId = setInterval(() => {
  obj._flush();
}, 120000);
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
if (set.isAndroid()) {
  let MetricMonitor = enforcing.default;
} else {
  MetricMonitor = NativeModules.MetricMonitor;
}
let nativeEventEmitter = new NativeEventEmitter(MetricMonitor);
nativeEventEmitter.addListener("logMetric", (arg0) => {
  obj.increment(arg0, false);
});
const result = set.fileFinishedImporting("modules/monitoring/MonitoringAgent.tsx");

export default obj;
export const MetricType = obj;