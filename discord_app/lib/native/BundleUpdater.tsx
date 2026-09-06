// === Module 11791: BundleUpdater ===

// Module 11791 (BundleUpdater)
import LoggerDefault from "Logger" /* 3 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _mod4745 from "module_4745" /* 4745 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_5 = new LoggerDefault("BundleUpdater");
const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
const nativeEventEmitter = new NativeEventEmitter(BundleUpdaterManager);
let closure_8 = { downloaded: "BundleDownloaded", otaUpdateChecked: "OtaUpdateChecked" };
const prototype = function BundleUpdater() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["getInitialBundleDownloaded"] = function getInitialBundleDownloaded() {
  return BundleUpdaterManager.getInitialBundleDownloaded();
};
prototype["getInitialOtaUpdateChecked"] = function getInitialOtaUpdateChecked() {
  return BundleUpdaterManager.getInitialOtaUpdateChecked();
};
prototype["addEventListener"] = function addEventListener(arg0, arg1) {
  nativeEventEmitter.addListener(closure_8[arg0], arg1);
};
prototype["checkForUpdateAndReload"] = function checkForUpdateAndReload() {
  const result = BundleUpdaterManager.checkForUpdateAndReload();
};
prototype["verifyOtaFiles"] = function verifyOtaFiles() {
  return BundleUpdaterManager.verifyOtaFiles();
};
prototype["getBuildOverrideCookieContents"] = function getBuildOverrideCookieContents() {
  return BundleUpdaterManager.getBuildOverrideCookieContents();
};
prototype["setBuildOverrideCookieHeader"] = function setBuildOverrideCookieHeader(set_cookie) {
  return BundleUpdaterManager.setBuildOverrideCookieHeader(set_cookie);
};
prototype["getOtaRootPath"] = function getOtaRootPath() {
  return BundleUpdaterManager.getOtaRootPath();
};
prototype["getOtaStatus"] = function getOtaStatus() {
  return BundleUpdaterManager.getOtaStatus();
};
prototype["getManifestInfo"] = function getManifestInfo() {
  return BundleUpdaterManager.getManifestInfo();
};
prototype["setupOTAAssetFallback"] = function setupOTAAssetFallback() {
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = undefined;
            let obj1 = PlatformUtils;
            if (obj1.isIOS()) {
              c2 = 1;
              c3 = 1;
              obj1 = { value: asyncRequireImpl(dependencyMap[5], dependencyMap.paths), done: false };
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_0 = value;
          closure_0 = _default;
          if (closure_129_0.default == null) {
            closure_0 = closure_129_0;
          }
          let result = closure_0.addCustomSourceTransformer((isLoadedFromFileSystem) => {
            if (isLoadedFromFileSystem.isLoadedFromFileSystem()) {
              const result = isLoadedFromFileSystem.scaledAssetURLNearBundle();
              const resolvedOTAAssetURIResult = closure_1_6.resolvedOTAAssetURI(result.uri);
              let tmp5 = null;
              if (resolvedOTAAssetURIResult !== result.uri) {
                const obj = {};
                const merged = Object.assign(result);
                obj.uri = resolvedOTAAssetURIResult;
                tmp5 = obj;
              }
              return tmp5;
            } else {
              return null;
            }
          });
        }
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  })();
};
prototype["emitOtaMetric"] = function emitOtaMetric(item10010) {
  const match = _mod4745.match(item10010);
  const withResult = match.with({ type: "OtaCheckAttempt" }, (result) => {
    closure_1_5.verbose("OTA check attempt", result);
    const obj = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
    obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj);
    return MonitoringAgentDefault.increment(prototype.prepareOtaMetricForDatadog(result, ["result"]));
  });
  match.with({ type: "OtaCheckAttempt" }, (result) => {
    closure_1_5.verbose("OTA check attempt", result);
    const obj = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
    obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj);
    return MonitoringAgentDefault.increment(prototype.prepareOtaMetricForDatadog(result, ["result"]));
  }).with({ type: "OtaAssetDownloadAttempt" }, (result) => {
    closure_1_5.verbose("OTA asset download attempt", result);
    const obj = { result: result.result, duration_seconds: result.durationSeconds, error: result.error, url: result.url, status_code: result.statusCode, bytes_received: result.bytesReceived };
    obj.track(constants.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT, obj);
    return MonitoringAgentDefault.increment(prototype.prepareOtaMetricForDatadog(result, ["result", "statusCode"]));
  }).exhaustive();
};
prototype["prepareOtaMetricForDatadog"] = function prepareOtaMetricForDatadog(name, arg1) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  return { name: name.type, tags: items.map((item) => "" + item + ":" + name[item]) };
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/native/BundleUpdater.tsx");

export default prototype;