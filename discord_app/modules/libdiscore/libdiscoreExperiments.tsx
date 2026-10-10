// discord_app/modules/libdiscore/libdiscoreExperiments.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import BridgedStore from "stores/BridgedStore.tsx";
import js_shim_shim from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
prototype["getCurrentConfig"] = function getCurrentConfig(autoTrackExposure) {
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
    let currentConfig = inner.getCurrentConfig({ location: "default" }, obj2);
  } else {
    const obj = { autoTrackExposure: flag };
    currentConfig = inner.getConfig({ location: "default" }, obj);
  }
  return currentConfig;
};
prototype["trackExposureIfCachedConfigMatches"] = function trackExposureIfCachedConfigMatches(currentConfig) {
  const self = this;
  const cachedConfig = this.getCachedConfig();
  let treatmentId;
  if (cachedConfig != null) {
    treatmentId = cachedConfig.treatmentId;
  }
  if (treatmentId === currentConfig.treatmentId) {
    currentConfig = self.getCurrentConfig();
  }
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
    tmp1 = new tmp(global, importDefault, new.target);
    tmp1.storeName = require;
    return tmp1;
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
const tmp11 = new "getEnabledFeatureName"(
  "2026-01-libdiscore-batch-store-refactor",
  undefined,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  require,
  dependencyMap,
);
tmp11.storeName = "batch-store-refactor";
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
const tmp13 = new "shouldCollectMetrics"(
  "2025-11-defer-load-late-lazy-cache",
  undefined,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp3,
  tmp2,
);
tmp13.label = "Allow react to render before lazy cache is loaded";
tmp13.defaultValue = false;
const tmp14 = new "shouldCollectMetrics"(
  "2026-09-react-compiler-mobile",
  undefined,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp2,
);
tmp14.label = "React Compiler for mobile";
tmp14.defaultValue = false;
class LibdiscoreCustomTreatmentsExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, arg1, arg2) {
    tmp1 = new tmp(global, new.target);
    tmp1.label = require;
    tmp1.treatmentCount = importDefault;
    return tmp1;
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
const tmp15 = new "getTreatments"(
  "2026-01-android-rmle",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
  tmp,
  "getCachedBridgedStoreMode",
  prototype4,
  "shouldCollectMetrics",
  "getLabel",
  "getTreatments",
  new.target,
  getTreatments,
);
tmp15.label = "Android Pull Mode Rendering";
tmp15.treatmentCount = 4;
const tmp16 = new "getTreatments"(
  "2026-02-android-fresco-cache",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
  tmp15,
  "getCachedBridgedStoreMode",
  prototype4,
  "shouldCollectMetrics",
  "getLabel",
  "getTreatments",
  new.target,
  "Android Pull Mode Rendering",
);
tmp16.label = "Android Fresco Cache";
tmp16.treatmentCount = 3;
const tmp17 = new "getTreatments"(
  "2026-02-android-chat-mosaic-shared-pool",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
);
tmp17.label = "Android Chat Mosaic Shared Pool";
tmp17.defaultValue = false;
const tmp18 = new "getTreatments"(
  "2026-03-mobile-hermes-occupancy-target",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
);
tmp18.label = "Android Hermes Occupancy Target";
tmp18.defaultValue = false;
const tmp19 = new "getTreatments"(
  "2026-08-android-jank-per-screen",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
);
tmp19.label = "Android Per-Screen Jank Aggregation";
tmp19.defaultValue = false;
const tmp20 = new "getTreatments"(
  "2026-09-ios-callkit-connected-on-rtc",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
);
tmp20.label = "iOS: show CallKit connected only once voice flows";
tmp20.defaultValue = false;
const tmp52 = new tmp5(
  "2026-08-android-rn-reparenting-flag",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  tmp5,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
);
tmp52.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp52.defaultValue = false;
const tmp62 = new tmp6(
  "2026-08-ios-objc-composed-image-cache",
  undefined,
  tmp8,
  LibdiscoreCustomTreatmentsExperiment,
  tmp6,
  new.target,
  undefined,
  require,
  dependencyMap,
  items,
  LibdiscoreCachedExperiment,
  LibdiscoreWrapperSimpleExperiment,
  tmp11,
  libdiscoreTelemetryExperiment,
  tmp13,
  tmp14,
  tmp15,
  tmp16,
  tmp17,
  tmp18,
  tmp19,
  tmp20,
  tmp52,
  "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions",
);
tmp62.label = "iOS ObjC Composed Image Cache";
tmp62.treatmentCount = 3;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp11;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp13;
export const ReactCompilerExperiment = tmp14;
export const AndroidPullModeRenderingExperiment = tmp15;
export const AndroidFrescoCacheExperiment = tmp16;
export const AndroidChatMosaicSharedPoolExperiment = tmp17;
export const AndroidHermesOccupancyTargetExperiment = tmp18;
export const AndroidJankPerScreenExperiment = tmp19;
export const IOSCallKitConnectedOnRTCExperiment = tmp20;
export const AndroidRNFlagReparenting = tmp52;
export const IOSObjcComposedImageCacheExperiment = tmp62;
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
