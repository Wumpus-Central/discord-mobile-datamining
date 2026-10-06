// === Module 11414: BundleUpdater ===

// Module 11414 (BundleUpdater)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import merged5 from "merged5" /* 5081 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5416 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c2, c3;

let NativeEventEmitter;
let NativeModules;
({ NativeModules, NativeEventEmitter } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const tmp3 = new LoggerDefault("BundleUpdater");
let closure_5 = tmp3;
const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
const nativeEventEmitter = new NativeEventEmitter(BundleUpdaterManager);
const metroImportAll = { downloaded: "BundleDownloaded", otaUpdateChecked: "OtaUpdateChecked" };
class BundleUpdater {
  static getInitialBundleDownloaded() {
    return BundleUpdaterManager.getInitialBundleDownloaded();
  }
  static getInitialOtaUpdateChecked() {
    return BundleUpdaterManager.getInitialOtaUpdateChecked();
  }
  static addEventListener(arg0, arg1) {
    nativeEventEmitter.addListener(closure_8[arg0], arg1);
  }
  static checkForUpdateAndReload() {
    const result = BundleUpdaterManager.checkForUpdateAndReload();
  }
  static verifyOtaFiles() {
    return BundleUpdaterManager.verifyOtaFiles();
  }
  static getBuildOverrideCookieContents() {
    return BundleUpdaterManager.getBuildOverrideCookieContents();
  }
  static setBuildOverrideCookieHeader(set_cookie) {
    return BundleUpdaterManager.setBuildOverrideCookieHeader(set_cookie);
  }
  static getOtaRootPath() {
    return BundleUpdaterManager.getOtaRootPath();
  }
  static getOtaStatus() {
    return BundleUpdaterManager.getOtaStatus();
  }
  static getManifestInfo() {
    return BundleUpdaterManager.getManifestInfo();
  }
  static setupOTAAssetFallback() {
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
          let closure_0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp;
              closure_0 = undefined;
              const obj2 = PlatformUtils;
              if (obj2.isIOS()) {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: asyncRequire(dependencyMap[5], dependencyMap.paths), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            let tmp5 = closure_1;
            closure_0 = value;
            closure_0 = _default;
            let result = closure_0.addCustomSourceTransformer((isLoadedFromFileSystem) => {
              if (isLoadedFromFileSystem.isLoadedFromFileSystem()) {
                const result = isLoadedFromFileSystem.scaledAssetURLNearBundle();
                const resolvedOTAAssetURIResult = closure_1_6.resolvedOTAAssetURI(result.uri);
                let tmp5 = null;
                if (resolvedOTAAssetURIResult !== result.uri) {
                  const obj = { uri: resolvedOTAAssetURIResult };
                  const merged = Object.assign(result);
                  tmp5 = obj;
                }
                return tmp5;
              } else {
                return null;
              }
            });
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    })();
  }
  static emitOtaMetric(item10010) {
    const str = merged5;
    const match = str.match(item10010);
    const withResult = match.with({ type: "OtaCheckAttempt" }, (result) => {
      closure_1_5.verbose("OTA check attempt", result);
      const obj = AnalyticsUtilsDefault;
      const obj2 = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
      obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj2);
      const obj3 = MonitoringAgentDefault;
      return obj3.increment(BundleUpdater.prepareOtaMetricForDatadog(result, ["result"]));
    });
    const withResult1 = withResult.with({ type: "OtaAssetDownloadAttempt" }, (result) => {
      closure_1_5.verbose("OTA asset download attempt", result);
      const obj = AnalyticsUtilsDefault;
      const obj2 = { result: result.result, duration_seconds: result.durationSeconds, error: result.error, url: result.url, status_code: result.statusCode, bytes_received: result.bytesReceived };
      obj.track(constants.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT, obj2);
      const obj3 = MonitoringAgentDefault;
      return obj3.increment(BundleUpdater.prepareOtaMetricForDatadog(result, ["result", "statusCode"]));
    });
    withResult1.exhaustive();
  }
  static prepareOtaMetricForDatadog(name, arg1) {
    let items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    const obj = { name: name.type, tags: items.map((item) => "" + item + ":" + name[item]) };
    return obj;
  }
}
let result = size.fileFinishedImporting("lib/native/BundleUpdater.tsx");

export default BundleUpdater;