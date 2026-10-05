// === Module 559: libdiscoreExperiments ===

// Module 559 (libdiscoreExperiments)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import BridgedStore from "BridgedStore" /* 560 */;
import shim from "shim" /* 562 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
const ensureValidMode = BridgedStore.ensureValidMode;
const logger = new LoggerDefault("libdiscoreExperiments");
let items = [];
new LoggerDefault("libdiscoreExperiments");
let closure_6 = Symbol("unknown");
class LibdiscoreCachedExperiment {
  constructor(id) {
    const merged = Object.assign({ inner: null, cachedConfig: null });
    merged[1] = closure_6;
    merged.id = id;
    items.push(merged);
    return merged;
  }
  getEnabledFeatureName() {
    const cachedConfig = this.getCachedConfig();
    let combined = null;
    if (undefined !== cachedConfig) {
      combined = null;
      if (cachedConfig.treatmentId > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + this.id + ":" + cachedConfig.treatmentId;
      }
    }
    return combined;
  }
  getCachedConfig() {
    const self = this;
    if (this.cachedConfig === closure_6) {
      const obj = shim;
      if (obj.isLibdiscoreInitialized()) {
        const tmpResult = shim;
        const experimentCacher = tmpResult.getExperimentCacher();
        self.cachedConfig = experimentCacher.getConfig(self.id);
      } else {
        self.cachedConfig = undefined;
      }
    }
    return self.cachedConfig;
  }
  setExperiment(apexExperiment) {
    this.inner = apexExperiment;
  }
  getCurrentConfig(autoTrackExposure) {
    let currentConfig;
    const self = this;
    _modDef38(null != this.inner, "experiment must be set before reading the current config");
    let flag;
    if (autoTrackExposure != null) {
      flag = autoTrackExposure.autoTrackExposure;
    }
    if (flag == null) {
      flag = true;
    }
    const inner = self.inner;
    if ("getCurrentConfig" in self.inner) {
      const obj2 = { autoTrackExposure: flag };
      currentConfig = inner.getCurrentConfig({ location: "default" }, obj2);
    } else {
      const obj = { autoTrackExposure: flag };
      currentConfig = inner.getConfig({ location: "default" }, obj);
    }
    return currentConfig;
  }
  trackExposureIfCachedConfigMatches(currentConfig) {
    const self = this;
    const cachedConfig = this.getCachedConfig();
    let treatmentId;
    if (cachedConfig != null) {
      treatmentId = cachedConfig.treatmentId;
    }
    if (treatmentId === currentConfig.treatmentId) {
      currentConfig = self.getCurrentConfig();
    }
  }
}
const prototype = LibdiscoreCachedExperiment.prototype;
class LibdiscoreWrapperSimpleExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, label, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const tmp2 = new LibdiscoreWrapperSimpleExperiment(arg0, tmp, new.target, this);
    tmp2.label = label;
    tmp2.defaultValue = flag;
    return tmp2;
  }
  getLabel() {
    return this.label;
  }
  getTreatments() {
    items = [{ treatmentId: 0 }, { treatmentId: 1 }];
    return items;
  }
  getCachedEnabled() {
    const cachedConfig = this.getCachedConfig();
    if (null != cachedConfig) {
      let defaultValue;
      if (-1 !== cachedConfig.treatmentId) {
        defaultValue = 1 === cachedConfig.treatmentId;
      }
      return defaultValue;
    }
    defaultValue = this.defaultValue;
  }
}
const prototype2 = LibdiscoreWrapperSimpleExperiment.prototype;
class LibdiscoreBridgedStoreExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, storeName, arg2) {
    const tmp2 = new tmp(arg0, arg2, new.target);
    tmp2.storeName = storeName;
    return tmp2;
  }
  getCachedBridgedStoreMode() {
    let str;
    const cachedConfig = this.getCachedConfig();
    let num;
    if (cachedConfig != null) {
      num = cachedConfig.treatmentId;
    }
    if (num == null) {
      num = -1;
    }
    if (1 === num) {
      str = "typescript-libdiscore-dual-read";
    } else {
      str = "libdiscore";
      if (2 !== num) {
        str = "typescript";
      }
    }
    return ensureValidMode(str);
  }
  getEnabledFeatureName() {
    const cachedBridgedStoreMode = this.getCachedBridgedStoreMode();
    let combined = null;
    if ("typescript" !== cachedBridgedStoreMode) {
      const _HermesInternal = HermesInternal;
      combined = "BridgedStore[" + this.storeName + "," + cachedBridgedStoreMode + "]";
    }
    return combined;
  }
  getLabel() {
    return "libdiscore '" + this.storeName + "' Migration";
  }
  getTreatments() {
    items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
    return items;
  }
}
const prototype3 = LibdiscoreBridgedStoreExperiment.prototype;
const tmp9 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp6, tmp5, tmp4, tmp3, tmp2, require, dependencyMap);
tmp9.storeName = "batch-store-refactor";
class LibdiscoreTelemetryExperiment extends LibdiscoreCachedExperiment {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.MAX_EMISSIONS_PER_APP_LAUNCH = 5;
    applyArgumentsResult.emissionsCount = 0;
    return applyArgumentsResult;
  }
  getLabel() {
    return "libdiscore Telemetry";
  }
  getTreatments() {
    items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
    return items;
  }
  getMetricsSampleRate() {
    const cachedConfig = this.getCachedConfig();
    let treatmentId;
    if (cachedConfig != null) {
      treatmentId = cachedConfig.treatmentId;
    }
    if (1 === treatmentId) {
      return 0.01;
    } else if (2 === treatmentId) {
      return 0.05;
    } else if (3 === treatmentId) {
      return 1;
    } else {
      return 0;
    }
  }
  didEmit() {
    this.emissionsCount = this.emissionsCount + 1;
  }
  shouldCollectMetrics() {
    const self = this;
    const metricsSampleRate = this.getMetricsSampleRate();
    let tmp2 = 0 !== metricsSampleRate;
    if (tmp2) {
      let tmp3 = 1 === metricsSampleRate;
      if (!tmp3) {
        let tmp4 = self.emissionsCount < self.MAX_EMISSIONS_PER_APP_LAUNCH;
        if (tmp4) {
          const _Math = Math;
          tmp4 = Math.random() < metricsSampleRate;
        }
        tmp3 = tmp4;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
}
const prototype4 = LibdiscoreTelemetryExperiment.prototype;
const libdiscoreTelemetryExperiment = new LibdiscoreTelemetryExperiment("2025-09-libdiscore-telemetry");
const tmp11 = new "shouldCollectMetrics"("2025-11-defer-load-late-lazy-cache", undefined, tmp6, tmp5, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp);
tmp11.label = "Allow react to render before lazy cache is loaded";
tmp11.defaultValue = false;
const tmp12 = new "shouldCollectMetrics"("2026-09-react-compiler-mobile", undefined, tmp6, tmp5, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11);
tmp12.label = "React Compiler for mobile";
tmp12.defaultValue = false;
class LibdiscoreCustomTreatmentsExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, label, treatmentCount) {
    const tmp2 = new tmp(arg0, new.target);
    tmp2.label = label;
    tmp2.treatmentCount = treatmentCount;
    return tmp2;
  }
  getLabel() {
    return this.label;
  }
}
function getTreatments() {
  const obj = { length: this.treatmentCount };
  return Array.from(obj, (arg0, treatmentId) => ({ treatmentId }));
}
LibdiscoreCustomTreatmentsExperiment.prototype["getTreatments"] = getTreatments;
const tmp13 = new "getTreatments"("2026-01-android-rmle", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11, tmp12, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, getTreatments);
tmp13.label = "Android Pull Mode Rendering";
tmp13.treatmentCount = 4;
const tmp14 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11, tmp12, tmp13, prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, "Android Pull Mode Rendering");
tmp14.label = "Android Fresco Cache";
tmp14.treatmentCount = 3;
const tmp15 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11);
tmp15.label = "Android Chat Mosaic Shared Pool";
tmp15.defaultValue = false;
const tmp16 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11);
tmp16.label = "Android Hermes Occupancy Target";
tmp16.defaultValue = false;
const tmp17 = new "getTreatments"("2026-08-android-jank-per-screen", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11);
tmp17.label = "Android Per-Screen Jank Aggregation";
tmp17.defaultValue = false;
const tmp32 = new tmp3("2026-08-android-rn-reparenting-flag", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, tmp3, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11);
tmp32.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp32.defaultValue = false;
const tmp42 = new tmp4("2026-08-ios-objc-composed-image-cache", undefined, tmp6, LibdiscoreCustomTreatmentsExperiment, tmp4, this, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp9, libdiscoreTelemetryExperiment, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp32, "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions");
tmp42.label = "iOS ObjC Composed Image Cache";
tmp42.treatmentCount = 3;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp9;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp11;
export const ReactCompilerExperiment = tmp12;
export const AndroidPullModeRenderingExperiment = tmp13;
export const AndroidFrescoCacheExperiment = tmp14;
export const AndroidChatMosaicSharedPoolExperiment = tmp15;
export const AndroidHermesOccupancyTargetExperiment = tmp16;
export const AndroidJankPerScreenExperiment = tmp17;
export const AndroidRNFlagReparenting = tmp32;
export const IOSObjcComposedImageCacheExperiment = tmp42;
export function isExperimentSyncDisabled() {
  return c7;
}
export const clearLibdiscoreExperimentCache = function clearLibdiscoreExperimentCache() {
  const obj = shim;
  if (obj.isLibdiscoreInitialized()) {
    logger.info("Clearing libdiscore experiment cache and disabling sync");
    c7 = true;
    const tmpResult = shim;
    const experimentCacher = tmpResult.getExperimentCacher();
    experimentCacher.clearCache();
  }
};