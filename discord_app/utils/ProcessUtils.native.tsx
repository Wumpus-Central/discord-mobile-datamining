// discord_app/utils/ProcessUtils.native.tsx
import set from "../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";
import ElectronProcessType from "ProcessUtilsBase.tsx";

let closure_1 = function getHermesInstrumentedStatsSummary() {
  const _HermesInternal = HermesInternal;
  if (null != _HermesInternal) {
    if (typeof _HermesInternal === "object") {
      const getInstrumentedStats = _HermesInternal.getInstrumentedStats;
      if (typeof getInstrumentedStats === "function") {
        try {
          const instrumentedStats = getInstrumentedStats();
          if (null != instrumentedStats) {
            if (typeof tmp3 === "object") {
              const _Object = Object;
              const entries = Object.entries(instrumentedStats);
              const found = entries.filter((arg0) => {
                [, tmp] = arg0;
                let isFiniteResult = typeof tmp === "number";
                if (typeof tmp === "number") {
                  const _Number = Number;
                  isFiniteResult = Number.isFinite(tmp);
                }
                return isFiniteResult;
              });
              const substr = found.slice(0, 6);
              const mapped = substr.map((arg0) => {
                [tmp, tmp2] = arg0;
                return "" + tmp + "=" + tmp2;
              });
              let joined;
              if (mapped.length > 0) {
                joined = mapped.join(", ");
              }
              return joined;
            }
          }
        } catch (err) {
          return tmp;
        }
      }
    }
  }
};
const NativeModules = get_ActivityIndicator.NativeModules;
let prop = NativeModules;
const ProcessUtils = ElectronProcessType.ProcessUtils;
class ProcessUtilsIOS extends ProcessUtils {
  constructor() {
    closure_1 = undefined;
    tmp5 = new ProcessUtilsIOS(tmp4, tmp3, new.target, new.target, undefined, tmp2, tmp, ProcessUtilsIOS);
    // ThrowIfThisInitialized (0x7c)
    closure_1 = tmp5;
    tmp5.shouldCollectHermesInstrumentedStats = false;
    prop = undefined;
    if (SystemResourceManager != null) {
      prop = SystemResourceManager.SystemResourceManager;
    }
    SystemResourceManager = prop;
    if (prop != null) {
      getCpuCoreCount = prop.getCpuCoreCount;
      if (getCpuCoreCount != null) {
        cpuCoreCount = getCpuCoreCount((cpuCoreCount) => {
          tmp.cpuCoreCount = cpuCoreCount;
        });
      }
    }
    timerId = setInterval(() => {
      if (prop != null) {
        const getCurrentCpuUsagePercent = tmp2.getCurrentCpuUsagePercent;
        if (getCurrentCpuUsagePercent != null) {
          let currentCpuUsagePercent = getCurrentCpuUsagePercent((arg0) => {
            let tmp3;
            if (tmp2 >= 0) {
              tmp3 = tmp2;
            }
            tmp.cpuPercentage = tmp3;
          });
        }
      }
      if (prop != null) {
        const getCumulativeCpuUsage = tmp2.getCumulativeCpuUsage;
        if (getCumulativeCpuUsage != null) {
          currentCpuUsagePercent = getCumulativeCpuUsage((arg0) => {
            if (arg0 >= 0) {
              const obj = { usage: null, sampleTime: null };
              obj[0] = arg0;
              const _performance = performance;
              obj[1] = performance.now();
              tmp.cumulativeCpuUsage = obj;
              throw tmp;
            }
          });
        }
      }
      if (prop != null) {
        const getCurrentMemoryUsageKb = tmp2.getCurrentMemoryUsageKb;
        if (getCurrentMemoryUsageKb != null) {
          currentCpuUsagePercent = getCurrentMemoryUsageKb((arg0) => {
            let tmp3;
            if (tmp2 >= 0) {
              tmp3 = tmp2;
            }
            tmp.memory = tmp3;
          });
        }
      }
      let tmp4;
      if (tmp.shouldCollectHermesInstrumentedStats) {
        tmp4 = callback();
      }
      currentCpuUsagePercent.hermesInstrumentedStatsSummary = tmp4;
    }, 1000);
    return tmp5;
  }
}
const prototype = ProcessUtilsIOS.prototype;
prototype["getProcessUptime"] = function getProcessUptime() {
  return null;
};
prototype["getCumulativeCPUUsage"] = function getCumulativeCPUUsage() {
  return this.cumulativeCpuUsage;
};
prototype["getCurrentCPUUsagePercent"] = function getCurrentCPUUsagePercent() {
  return this.cpuPercentage;
};
prototype["getCurrentMemoryUsageKB"] = function getCurrentMemoryUsageKB() {
  return this.memory;
};
prototype["setShouldCollectHermesInstrumentedStats"] = function setShouldCollectHermesInstrumentedStats(shouldCollectHermesInstrumentedStats) {
  this.shouldCollectHermesInstrumentedStats = shouldCollectHermesInstrumentedStats;
  let tmp;
  if (shouldCollectHermesInstrumentedStats) {
    tmp = callback();
  }
  this.hermesInstrumentedStatsSummary = tmp;
};
prototype["getCurrentHermesInstrumentedStatsSummary"] = function getCurrentHermesInstrumentedStatsSummary() {
  return this.shouldCollectHermesInstrumentedStats ? this.hermesInstrumentedStatsSummary : undefined;
};
prototype["enablePerfMemoryHooks"] = function enablePerfMemoryHooks() {
  return null;
};
prototype["disablePerfMemoryHooks"] = function disablePerfMemoryHooks() {
  return null;
};
prototype["getPerfAttributedMemory"] = function getPerfAttributedMemory() {
  return null;
};
prototype["getPerfAttributedMemoryCallstacks"] = function getPerfAttributedMemoryCallstacks() {
  return null;
};
prototype["getPerfAttributedMemoryStats"] = function getPerfAttributedMemoryStats() {
  return null;
};
prototype["startCPUProfiling"] = function startCPUProfiling() {
  return null;
};
prototype["stopCPUProfiling"] = function stopCPUProfiling() {
  return Promise.resolve(null);
};
prototype["enablePAMemoryProfiler"] = function enablePAMemoryProfiler() {
  return null;
};
prototype["disablePAMemoryProfiler"] = function disablePAMemoryProfiler() {
  return null;
};
prototype["getPerfAttributedPAMemory"] = function getPerfAttributedPAMemory() {
  return null;
};
prototype["getPerfAttributedPAMemoryCallstacks"] = function getPerfAttributedPAMemoryCallstacks() {
  return null;
};
prototype["getPartitionAllocatorStats"] = function getPartitionAllocatorStats() {
  return null;
};
prototype["enableProfilingV8Heap"] = function enableProfilingV8Heap() {

};
prototype["disableProfilingV8Heap"] = function disableProfilingV8Heap() {

};
prototype["getProfilerV8MemoryCallstacks"] = function getProfilerV8MemoryCallstacks() {
  return null;
};
prototype["getMemoryUsageDetails"] = function getMemoryUsageDetails() {
  return { 0: this.memory };
};
prototype["getMemoryUsageElectronRenderer"] = function getMemoryUsageElectronRenderer() {
  return null;
};
prototype["getMemoryPrivateUsageElectronRenderer"] = function getMemoryPrivateUsageElectronRenderer() {
  return null;
};
prototype["getMemoryUsageElectronRendererUsedHeapSize"] = function getMemoryUsageElectronRendererUsedHeapSize() {
  return null;
};
prototype["getMemoryHeapStats"] = function getMemoryHeapStats() {
  return null;
};
prototype["getBlinkMemoryInfo"] = function getBlinkMemoryInfo() {
  return null;
};
prototype["getMemoryUsageElectronProcessTypeDetails"] = function getMemoryUsageElectronProcessTypeDetails() {
  return null;
};
function getCpuUsageElectronProcessTypeDetails() {
  return null;
}
prototype["getCpuUsageElectronProcessTypeDetails"] = getCpuUsageElectronProcessTypeDetails;
prop = undefined;
closure_1 = undefined;
tmp = new tmp(tmp4, tmp3, tmp2, ProcessUtilsIOS, new.target, undefined, NativeModules, globalThis, getCpuUsageElectronProcessTypeDetails, require, dependencyMap, exports);
// ThrowIfThisInitialized (0x7c)
closure_1 = tmp;
tmp.shouldCollectHermesInstrumentedStats = false;
prop = undefined;
if (NativeModules != null) {
  prop = NativeModules.SystemResourceManager;
}
if (prop != null) {
  let getCpuCoreCount = prop.getCpuCoreCount;
  if (getCpuCoreCount != null) {
    let cpuCoreCount = getCpuCoreCount((cpuCoreCount) => {
      tmp.cpuCoreCount = cpuCoreCount;
    });
  }
}
let timerId = setInterval(() => {
  if (prop != null) {
    const getCurrentCpuUsagePercent = tmp2.getCurrentCpuUsagePercent;
    if (getCurrentCpuUsagePercent != null) {
      let currentCpuUsagePercent = getCurrentCpuUsagePercent((arg0) => {
        let tmp3;
        if (tmp2 >= 0) {
          tmp3 = tmp2;
        }
        tmp.cpuPercentage = tmp3;
      });
    }
  }
  if (prop != null) {
    const getCumulativeCpuUsage = tmp2.getCumulativeCpuUsage;
    if (getCumulativeCpuUsage != null) {
      currentCpuUsagePercent = getCumulativeCpuUsage((arg0) => {
        if (arg0 >= 0) {
          const obj = { usage: null, sampleTime: null };
          obj[0] = arg0;
          const _performance = performance;
          obj[1] = performance.now();
          tmp.cumulativeCpuUsage = obj;
          throw tmp;
        }
      });
    }
  }
  if (prop != null) {
    const getCurrentMemoryUsageKb = tmp2.getCurrentMemoryUsageKb;
    if (getCurrentMemoryUsageKb != null) {
      currentCpuUsagePercent = getCurrentMemoryUsageKb((arg0) => {
        let tmp3;
        if (tmp2 >= 0) {
          tmp3 = tmp2;
        }
        tmp.memory = tmp3;
      });
    }
  }
  let tmp4;
  if (tmp.shouldCollectHermesInstrumentedStats) {
    tmp4 = callback();
  }
  currentCpuUsagePercent.hermesInstrumentedStatsSummary = tmp4;
}, 1000);
const result = set.fileFinishedImporting("utils/ProcessUtils.native.tsx");

export default tmp;