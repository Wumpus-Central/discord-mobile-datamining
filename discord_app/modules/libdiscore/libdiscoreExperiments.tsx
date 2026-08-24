// === Module 1914: items ===

// Module 1914 (items)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import ensureValidMode2 from "ensureValidMode" /* 1915 */;
import isBlockedDomain from "isBlockedDomain" /* 1917 */;

const ensureValidMode = ensureValidMode2.ensureValidMode;
let closure_4 = new timestampDefault("libdiscoreExperiments");
let items = [];
let closure_6 = Symbol("unknown");
class LibdiscoreCachedExperiment {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[1] = closure_6;
    obj.id = global;
    arr = closure_5.push(obj);
    return obj;
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
      const experimentCacher = tmp(1917).getExperimentCacher();
      self.cachedConfig = experimentCacher.getConfig(self.id);
      const tmpResult = tmp(1917);
    } else {
      self.cachedConfig = undefined;
    }
    obj = isBlockedDomain;
    tmp = require;
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
    // ThrowIfThisInitialized (0x7c)
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
    // ThrowIfThisInitialized (0x7c)
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
const tmp7 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp4, tmp3, tmp2, tmp, require, dependencyMap, items);
// ThrowIfThisInitialized (0x7c)
tmp7.storeName = "batch-store-refactor";
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
const tmp9 = new "shouldCollectMetrics"("2025-11-defer-load-late-lazy-cache", undefined, tmp4, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp7, libdiscoreTelemetryExperiment);
// ThrowIfThisInitialized (0x7c)
tmp9.label = "Allow react to render before lazy cache is loaded";
tmp9.defaultValue = false;
class LibdiscoreCustomTreatmentsExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, arg1, arg2) {
    tmp = new tmp(global, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.label = require;
    tmp.treatmentCount = importDefault;
    return tmp;
  }
}
const prototype5 = LibdiscoreCustomTreatmentsExperiment.prototype;
prototype5["getLabel"] = function getLabel() {
  return this.label;
};
prototype5["getTreatments"] = function getTreatments() {
  return Array.from({ length: this.treatmentCount }, (arg0, treatmentId) => ({ treatmentId }));
};
const tmp10 = new "getTreatments"("2026-01-android-rmle", undefined, tmp4, tmp3, tmp2, undefined, require);
// ThrowIfThisInitialized (0x7c)
tmp10.label = "Android Pull Mode Rendering";
tmp10.treatmentCount = 4;
const tmp11 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp4, tmp3, tmp2, undefined, require);
// ThrowIfThisInitialized (0x7c)
tmp11.label = "Android Fresco Cache";
tmp11.treatmentCount = 3;
const tmp12 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp4, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp7, libdiscoreTelemetryExperiment);
// ThrowIfThisInitialized (0x7c)
tmp12.label = "Android Chat Mosaic Shared Pool";
tmp12.defaultValue = false;
const tmp13 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp4, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp7, libdiscoreTelemetryExperiment);
// ThrowIfThisInitialized (0x7c)
tmp13.label = "Android Hermes Occupancy Target";
tmp13.defaultValue = false;
tmp2 = new tmp2("2026-06-ios-ota-streaming", undefined, tmp4, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp7, libdiscoreTelemetryExperiment);
// ThrowIfThisInitialized (0x7c)
tmp2.label = "iOS OTA Streaming Download";
tmp2.defaultValue = false;
tmp3 = new tmp3("2026-08-android-rn-reparenting-flag", undefined, tmp4, tmp3, new.target, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp7, libdiscoreTelemetryExperiment);
// ThrowIfThisInitialized (0x7c)
tmp3.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp3.defaultValue = false;
let c7 = false;
const tmp6 = new timestampDefault("libdiscoreExperiments");
const result = set.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp7;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp9;
export const AndroidPullModeRenderingExperiment = tmp10;
export const AndroidFrescoCacheExperiment = tmp11;
export const AndroidChatMosaicSharedPoolExperiment = tmp12;
export const AndroidHermesOccupancyTargetExperiment = tmp13;
export const IOSOtaStreamingExperiment = tmp2;
export const AndroidRNFlagReparenting = tmp3;
export function isExperimentSyncDisabled() {
  return c7;
}
export const clearLibdiscoreExperimentCache = function clearLibdiscoreExperimentCache() {
  if (obj.isLibdiscoreInitialized()) {
    logger.info("Clearing libdiscore experiment cache and disabling sync");
    c7 = true;
    const experimentCacher = isBlockedDomain.getExperimentCacher();
    experimentCacher.clearCache();
    const tmpResult = isBlockedDomain;
  }
};