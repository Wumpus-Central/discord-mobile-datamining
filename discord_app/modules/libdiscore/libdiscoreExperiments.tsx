// === Module 1983: libdiscoreExperiments ===

// Module 1983 (libdiscoreExperiments)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import js_shim_shim from "js_shim/shim" /* 1351 */;
import BridgedStore from "BridgedStore" /* 1984 */;
import size from "module_2" /* 2 */;

const ensureValidMode = BridgedStore.ensureValidMode;
const logger = new LoggerDefault("libdiscoreExperiments");
let items = [];
let closure_6 = Symbol("unknown");
class LibdiscoreCachedExperiment {
  constructor(arg0) {
    merged = Object.assign({ inner: null, cachedConfig: null });
    merged[1] = closure_6;
    merged.id = global;
    arr = closure_5.push(merged);
    return merged;
  }
}
const prototype = LibdiscoreCachedExperiment.prototype;
prototype["getEnabledFeatureName"] = function getEnabledFeatureName() {
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
};
prototype["getCachedConfig"] = function getCachedConfig() {
  const self = this;
  if (this.cachedConfig === closure_6) {
    if (obj.isLibdiscoreInitialized()) {
      const experimentCacher = js_shim_shim.getExperimentCacher();
      self.cachedConfig = experimentCacher.getConfig(self.id);
      const tmpResult = js_shim_shim;
    } else {
      self.cachedConfig = undefined;
    }
    obj = js_shim_shim;
  }
  return self.cachedConfig;
};
prototype["setExperiment"] = function setExperiment(apexExperiment) {
  this.inner = apexExperiment;
};
prototype["getCurrentConfig"] = function getCurrentConfig() {
  _modDef38(null != this.inner, "experiment must be set before calling getCurrentConfig");
  const inner = this.inner;
  if ("getCurrentConfig" in this.inner) {
    let currentConfig = inner.getCurrentConfig({ location: "default" });
  } else {
    currentConfig = inner.getConfig({ location: "default" });
  }
  return currentConfig;
};
class LibdiscoreWrapperSimpleExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, arg1) {
    flag = importDefault;
    if (importDefault === undefined) {
      flag = false;
    }
    tmp2 = new LibdiscoreWrapperSimpleExperiment(global, tmp, new.target, new.target);
    tmp2.label = require;
    tmp2.defaultValue = flag;
    return tmp2;
  }
}
const prototype2 = LibdiscoreWrapperSimpleExperiment.prototype;
prototype2["getLabel"] = function getLabel() {
  return this.label;
};
prototype2["getTreatments"] = function getTreatments() {
  items = [{ treatmentId: 0 }, { treatmentId: 1 }];
  return items;
};
prototype2["getCachedEnabled"] = function getCachedEnabled() {
  const cachedConfig = this.getCachedConfig();
  if (null != cachedConfig) {
    if (-1 !== cachedConfig.treatmentId) {
      let defaultValue = 1 === cachedConfig.treatmentId;
    }
    return defaultValue;
  }
  defaultValue = this.defaultValue;
};
class LibdiscoreBridgedStoreExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, arg1, arg2) {
    tmp = new tmp(global, importDefault, new.target);
    tmp.storeName = require;
    return tmp;
  }
}
const prototype3 = LibdiscoreBridgedStoreExperiment.prototype;
prototype3["getCachedBridgedStoreMode"] = function getCachedBridgedStoreMode() {
  const cachedConfig = this.getCachedConfig();
  let num;
  if (cachedConfig != null) {
    num = cachedConfig.treatmentId;
  }
  if (num == null) {
    num = -1;
  }
  if (1 === num) {
    let str = "typescript-libdiscore-dual-read";
  } else {
    str = "libdiscore";
    if (2 !== num) {
      str = "typescript";
    }
  }
  return ensureValidMode(str);
};
prototype3["getEnabledFeatureName"] = function getEnabledFeatureName() {
  const cachedBridgedStoreMode = this.getCachedBridgedStoreMode();
  let combined = null;
  if ("typescript" !== cachedBridgedStoreMode) {
    const _HermesInternal = HermesInternal;
    combined = "BridgedStore[" + this.storeName + "," + cachedBridgedStoreMode + "]";
  }
  return combined;
};
prototype3["getLabel"] = function getLabel() {
  return "libdiscore '" + this.storeName + "' Migration";
};
prototype3["getTreatments"] = function getTreatments() {
  items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
  return items;
};
const tmp8 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp5, tmp4, tmp3, tmp2, tmp, require, dependencyMap);
tmp8.storeName = "batch-store-refactor";
class LibdiscoreTelemetryExperiment extends LibdiscoreCachedExperiment {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.MAX_EMISSIONS_PER_APP_LAUNCH = 5;
    applyArgumentsResult.emissionsCount = 0;
    return applyArgumentsResult;
  }
}
const prototype4 = LibdiscoreTelemetryExperiment.prototype;
prototype4["getLabel"] = function getLabel() {
  return "libdiscore Telemetry";
};
prototype4["getTreatments"] = function getTreatments() {
  items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
  return items;
};
prototype4["getMetricsSampleRate"] = function getMetricsSampleRate() {
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
};
prototype4["didEmit"] = function didEmit() {
  this.emissionsCount = this.emissionsCount + 1;
};
prototype4["shouldCollectMetrics"] = function shouldCollectMetrics() {
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
};
const libdiscoreTelemetryExperiment = new LibdiscoreTelemetryExperiment("2025-09-libdiscore-telemetry");
const tmp10 = new "shouldCollectMetrics"("2025-11-defer-load-late-lazy-cache", undefined, tmp5, tmp4, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8);
tmp10.label = "Allow react to render before lazy cache is loaded";
tmp10.defaultValue = false;
class LibdiscoreCustomTreatmentsExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, arg1, arg2) {
    tmp = new tmp(global, new.target);
    tmp.label = require;
    tmp.treatmentCount = importDefault;
    return tmp;
  }
}
const prototype5 = LibdiscoreCustomTreatmentsExperiment.prototype;
prototype5["getLabel"] = function getLabel() {
  return this.label;
};
function getTreatments() {
  return Array.from({ length: this.treatmentCount }, (arg0, treatmentId) => ({ treatmentId }));
}
prototype5["getTreatments"] = getTreatments;
const tmp11 = new "getTreatments"("2026-01-android-rmle", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment, tmp10, prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", new.target, getTreatments);
tmp11.label = "Android Pull Mode Rendering";
tmp11.treatmentCount = 4;
const tmp12 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment, tmp10, tmp11, "shouldCollectMetrics", "getLabel", "getTreatments", new.target, "Android Pull Mode Rendering");
tmp12.label = "Android Fresco Cache";
tmp12.treatmentCount = 3;
const tmp13 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8);
tmp13.label = "Android Chat Mosaic Shared Pool";
tmp13.defaultValue = false;
const tmp14 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8);
tmp14.label = "Android Hermes Occupancy Target";
tmp14.defaultValue = false;
tmp2 = new tmp2("2026-08-android-rn-reparenting-flag", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8);
tmp2.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp2.defaultValue = false;
tmp3 = new tmp3("2026-08-ios-objc-composed-image-cache", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, new.target, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment, tmp10, tmp11, tmp12, tmp13, tmp14, tmp2, "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions");
tmp3.label = "iOS ObjC Composed Image Cache";
tmp3.treatmentCount = 3;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp8;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp10;
export const AndroidPullModeRenderingExperiment = tmp11;
export const AndroidFrescoCacheExperiment = tmp12;
export const AndroidChatMosaicSharedPoolExperiment = tmp13;
export const AndroidHermesOccupancyTargetExperiment = tmp14;
export const AndroidRNFlagReparenting = tmp2;
export const IOSObjcComposedImageCacheExperiment = tmp3;
export function isExperimentSyncDisabled() {
  return c7;
}
export const clearLibdiscoreExperimentCache = function clearLibdiscoreExperimentCache() {
  if (obj.isLibdiscoreInitialized()) {
    logger.info("Clearing libdiscore experiment cache and disabling sync");
    c7 = true;
    const experimentCacher = js_shim_shim.getExperimentCacher();
    experimentCacher.clearCache();
    const tmpResult = js_shim_shim;
  }
  obj = js_shim_shim;
};