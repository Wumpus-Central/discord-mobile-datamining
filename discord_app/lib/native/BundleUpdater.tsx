// discord_app/lib/native/BundleUpdater.tsx
import timestampDefault from "../../modules/debug/Logger.tsx";
import t from "../../../_runtime/04705_t.js";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../Constants.tsx";

require = arg1;
({ NativeModules, NativeEventEmitter } = get_ActivityIndicator);
let closure_5 = new timestampDefault("BundleUpdater");
const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
const nativeEventEmitter = new NativeEventEmitter(BundleUpdaterManager);
let closure_8 = { downloaded: "BundleDownloaded", otaUpdateChecked: "OtaUpdateChecked" };
let prototype;
prototype = function BundleUpdater() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["getInitialBundleDownloaded"] = function getInitialBundleDownloaded() {
  return BundleUpdaterManager.getInitialBundleDownloaded();
};
prototype["getInitialOtaUpdateChecked"] = function getInitialOtaUpdateChecked() {
  return BundleUpdaterManager.getInitialOtaUpdateChecked();
};
prototype["addEventListener"] = function addEventListener(arg0, arg1) {
  nativeEventEmitter.addListener(table[arg0], arg1);
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
  return callback(function* () {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp2;
            closure_0 = undefined;
            obj1 = closure_1_0(table[4]);
            if (obj1.isIOS()) {
              table = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp14(tmp15[6])(tmp15[5], tmp15.paths);
              return obj1;
            } else {
              c3 = 3;
            }
            tmp14 = closure_1_0;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          closure_0 = _default;
          let result = closure_0.addCustomSourceTransformer((isLoadedFromFileSystem) => {
            if (isLoadedFromFileSystem.isLoadedFromFileSystem()) {
              const result = isLoadedFromFileSystem.scaledAssetURLNearBundle();
              const resolvedOTAAssetURIResult = closure_6.resolvedOTAAssetURI(result.uri);
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
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  })();
};
prototype["emitOtaMetric"] = function emitOtaMetric(item10010) {
  const match = t.match(item10010);
  const str = t;
  const withResult = match.with({ type: "OtaCheckAttempt" }, (result) => {
    closure_5.verbose("OTA check attempt", result);
    let obj = callback(698);
    obj = {
      result: result.result,
      duration_seconds: result.durationSeconds,
      bytes_received: result.bytesReceived,
      error: result.error,
      used_streaming: result.usedStreaming,
    };
    obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj);
    return callback(7347).increment(closure_9.prepareOtaMetricForDatadog(result, ["result"]));
  });
  match
    .with({ type: "OtaCheckAttempt" }, (result) => {
      closure_5.verbose("OTA check attempt", result);
      let obj = callback(698);
      obj = {
        result: result.result,
        duration_seconds: result.durationSeconds,
        bytes_received: result.bytesReceived,
        error: result.error,
        used_streaming: result.usedStreaming,
      };
      obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj);
      return callback(7347).increment(closure_9.prepareOtaMetricForDatadog(result, ["result"]));
    })
    .with({ type: "OtaAssetDownloadAttempt" }, (result) => {
      closure_5.verbose("OTA asset download attempt", result);
      let obj = callback(698);
      obj = {
        result: result.result,
        duration_seconds: result.durationSeconds,
        error: result.error,
        url: result.url,
        status_code: result.statusCode,
        bytes_received: result.bytesReceived,
      };
      obj.track(constants.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT, obj);
      return callback(7347).increment(closure_9.prepareOtaMetricForDatadog(result, ["result", "statusCode"]));
    })
    .exhaustive();
};
prototype["prepareOtaMetricForDatadog"] = function prepareOtaMetricForDatadog(name, arg1) {
  closure_0 = name;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  return { name: name.type, tags: items.map((arg0) => "" + arg0 + ":" + name[arg0]) };
};
const tmp3 = new timestampDefault("BundleUpdater");
let result = require("set").fileFinishedImporting("lib/native/BundleUpdater.tsx");

export default prototype;
