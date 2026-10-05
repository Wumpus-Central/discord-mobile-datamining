// discord_app/modules/monitoring/MonitoringAgent.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import ReleaseChannelUtils from "../../utils/ReleaseChannelUtils.native.tsx";
import ReleaseChannels from "../../../discord_common/js/shared/shared-constants/ReleaseChannels.tsx";
import react_native2 from "../../../discord_common/js/packages/rtn-codegen/js/NativeMetricMonitorModule.tsx";
import MonitoringAgentUtils from "MonitoringAgentUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj;

const Endpoints = Constants.Endpoints;
const set = new Set(["darwin", "linux", "win32", "ios", "android"]);
const MetricType = { COUNT: "count", DISTRIBUTION: "distribution" };
class MonitoringAgent {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._metrics = [];
    obj._intervalId = setInterval(() => {
      obj._flush();
    }, 120000);
    const nativeEventEmitter = new react_native.NativeEventEmitter(react_native2.default);
    nativeEventEmitter.addListener("logMetric", (arg0) => {
      obj.increment(arg0, false);
    });
    return obj;
  }
  _getMetricWithDefaults(name, COUNT) {
    let obj2;
    let tags = name.tags;
    obj = { name: name.name, type: COUNT, tags: obj2.getGlobalTagsArray() };
    obj2 = MonitoringAgentUtils;
    if (null != tags) {
      const item = tags.forEach((item) => {
        const tags = obj.tags;
        tags.push(item);
      });
    }
    let str = "web";
    const tmpResult = PlatformUtils;
    if (!tmpResult.isWeb()) {
      const tmpResult2 = PlatformUtils;
      const platformName = tmpResult2.getPlatformName();
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
  }
  increment(name) {
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
  }
  distribution(name, value) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const self = this;
    obj = { value };
    const merged = Object.assign(this._getMetricWithDefaults(name, obj.DISTRIBUTION));
    const _metrics = this._metrics;
    _metrics.push(obj);
    if (!flag) {
      flag = self._metrics.length >= 100;
    }
    if (flag) {
      self._flush();
    }
  }
  _flush() {
    let body;
    const self = this;
    if (this._metrics.length > 0) {
      let items = [];
      HermesBuiltin.arraySpread(items, self._metrics, 0);
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.METRICS_V2, body, retries: 1, rejectWithError: true };
      body = { metrics: items, client_info: { built_at: "1791177533780", build_number: "35020000000000" } };
      const postResult = HTTP.post(request);
      postResult.catch(() => {
        if (self._metrics.length + items.length < 100) {
          items = [];
          HermesBuiltin.arraySpread(items, items, HermesBuiltin.arraySpread(items, self._metrics, 0));
          self._metrics = items;
        }
      });
    }
    self._metrics = [];
  }
}
const prototype = MonitoringAgent.prototype;
let obj2 = Object.create(MonitoringAgent.prototype);
obj2._metrics = [];
obj2._intervalId = setInterval(() => {
  obj._flush();
}, 120000);
let nativeEventEmitter = new react_native.NativeEventEmitter(react_native2.default);
nativeEventEmitter.addListener("logMetric", (arg0) => {
  obj.increment(arg0, false);
});
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgent.tsx");

export default obj2;
export { MetricType };
