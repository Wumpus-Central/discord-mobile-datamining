// === Module 7602: MonitoringAgent ===

// Module 7602 (MonitoringAgent)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ReleaseChannelUtils from "ReleaseChannelUtils" /* 7603 */;
import ReleaseChannels from "ReleaseChannels" /* 7604 */;
import NativeMetricMonitorModule from "NativeMetricMonitorModule" /* 7605 */;
import MonitoringAgentUtils from "MonitoringAgentUtils" /* 7606 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const set = new Set(["darwin", "linux", "win32", "ios", "android"]);
let MetricType = { COUNT: "count", DISTRIBUTION: "distribution" };
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
    tmp4 = closure_0(closure_1[4]);
    ({ NativeModules, NativeEventEmitter } = tmp4);
    obj = closure_0(closure_1[1]);
    if (obj.isAndroid()) {
      MetricMonitor = tmp2(tmp3[5]).default;
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
  obj = { name: name.name, type: COUNT, tags: MonitoringAgentUtils.getGlobalTagsArray() };
  if (null != tags) {
    const item = tags.forEach((item) => {
      const tags = obj.tags;
      tags.push(item);
    });
  }
  let tmpResult = PlatformUtils;
  let str = "web";
  if (!tmpResult.isWeb()) {
    tmpResult = PlatformUtils;
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
  const CurrentReleaseChannel = ReleaseChannelUtils.CurrentReleaseChannel;
  let tmp9 = null;
  if (null != CurrentReleaseChannel) {
    const ALL = ReleaseChannels.ReleaseChannelsSets.ALL;
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
  const self = this;
  if (this._metrics.length > 0) {
    let items = [];
    HermesBuiltin.arraySpread(self._metrics, 0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.METRICS_V2, body: null, retries: 1, rejectWithError: true };
    const body = { metrics: items, client_info: { built_at: "1788585562456", build_number: "6365" } };
    request.body = body;
    HTTP.post(request).catch(() => {
      if (self._metrics.length + items.length < 100) {
        items = [];
        HermesBuiltin.arraySpread(tmp2, HermesBuiltin.arraySpread(self._metrics, 0));
        self._metrics = items;
      }
    });
    const postResult = HTTP.post(request);
  }
  self._metrics = [];
};
MetricType = Object.create(MonitoringAgent.prototype);
let closure_129_0 = MetricType;
MetricType._metrics = [];
MetricType._intervalId = setInterval(() => {
  obj._flush();
}, 120000);
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
if (PlatformUtils.isAndroid()) {
  let MetricMonitor = NativeMetricMonitorModule.default;
} else {
  MetricMonitor = NativeModules.MetricMonitor;
}
let nativeEventEmitter = new NativeEventEmitter(MetricMonitor);
nativeEventEmitter.addListener("logMetric", (arg0) => {
  obj.increment(arg0, false);
});
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgent.tsx");

export default MetricType;
export { MetricType };