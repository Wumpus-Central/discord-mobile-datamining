// === Module 1363: ProcessUtils ===

// Module 1363 (ProcessUtils)
import react_native from "react-native" /* 17 */;
import ProcessUtilsBase from "ProcessUtilsBase" /* 1364 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp2;
function getHermesInstrumentedStatsSummary() {
  const _HermesInternal = HermesInternal;
  if (null != _HermesInternal) {
    if (typeof _HermesInternal === "object") {
      const getInstrumentedStats = _HermesInternal.getInstrumentedStats;
      if (typeof getInstrumentedStats === "function") {
        try {
          const instrumentedStats = getInstrumentedStats();
          if (null != instrumentedStats) {
            if (typeof tmp2 === "object") {
              const _Object = Object;
              const entries = Object.entries(instrumentedStats);
              const found = entries.filter((item) => {
                let tmp;
                [, tmp] = item;
                let isFiniteResult = typeof tmp === "number";
                if (typeof tmp === "number") {
                  const _Number = Number;
                  isFiniteResult = Number.isFinite(tmp);
                }
                return isFiniteResult;
              });
              const substr = found.slice(0, 6);
              const mapped = substr.map((item) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = item;
                return "" + tmp + "=" + tmp2;
              });
              let joined;
              const obj = mapped;
              if (mapped.length > 0) {
                joined = obj.join(", ");
              }
              return joined;
            }
          }
        } catch (err) {
        }
      }
    }
  }
}
const NativeModules = react_native.NativeModules;
const ProcessUtils = ProcessUtilsBase.ProcessUtils;
class ProcessUtilsIOS extends ProcessUtils {
  constructor() {
    let tmp2;
    const tmp5 = new ProcessUtilsIOS(tmp4, tmp3, new.target, this, undefined, tmp2, tmp, ProcessUtilsIOS);
    let closure_1 = tmp5;
    tmp5.shouldCollectHermesInstrumentedStats = false;
    let prop;
    if (prop != null) {
      prop = prop.SystemResourceManager;
    }
    if (prop != null) {
      const getCpuCoreCount = prop.getCpuCoreCount;
      if (getCpuCoreCount != null) {
        const cpuCoreCount = getCpuCoreCount((cpuCoreCount) => {
          closure_1.cpuCoreCount = cpuCoreCount;
        });
      }
    }
    const timerId = setInterval(() => {
      if (prop != null) {
        const getCurrentCpuUsagePercent = prop.getCurrentCpuUsagePercent;
        if (getCurrentCpuUsagePercent != null) {
          const currentCpuUsagePercent = getCurrentCpuUsagePercent((arg0) => {
            let tmp2;
            if (arg0 >= 0) {
              tmp2 = arg0;
            }
            closure_1_1.cpuPercentage = tmp2;
          });
        }
      }
      if (prop != null) {
        const getCumulativeCpuUsage = prop.getCumulativeCpuUsage;
        if (getCumulativeCpuUsage != null) {
          const cumulativeCpuUsage = getCumulativeCpuUsage((usage) => {
            if (usage >= 0) {
              const _performance = performance;
              closure_1_1.cumulativeCpuUsage = { usage, sampleTime: performance.now() };
              const obj = { usage, sampleTime: performance.now() };
            }
          });
        }
      }
      if (prop != null) {
        const getCurrentMemoryUsageKb = prop.getCurrentMemoryUsageKb;
        if (getCurrentMemoryUsageKb != null) {
          const currentMemoryUsageKb = getCurrentMemoryUsageKb((arg0) => {
            let tmp2;
            if (arg0 >= 0) {
              tmp2 = arg0;
            }
            closure_1_1.memory = tmp2;
          });
        }
      }
      let tmp6;
      if (closure_1.shouldCollectHermesInstrumentedStats) {
        tmp6 = getHermesInstrumentedStatsSummary();
      }
      closure_1.hermesInstrumentedStatsSummary = tmp6;
    }, 1000);
    return tmp5;
  }
  getProcessUptime() {
    return null;
  }
  getCumulativeCPUUsage() {
    return this.cumulativeCpuUsage;
  }
  getCurrentCPUUsagePercent() {
    return this.cpuPercentage;
  }
  getCurrentMemoryUsageKB() {
    return this.memory;
  }
  setShouldCollectHermesInstrumentedStats(shouldCollectHermesInstrumentedStats) {
    this.shouldCollectHermesInstrumentedStats = shouldCollectHermesInstrumentedStats;
    let tmp;
    if (shouldCollectHermesInstrumentedStats) {
      tmp = getHermesInstrumentedStatsSummary();
    }
    this.hermesInstrumentedStatsSummary = tmp;
  }
  getCurrentHermesInstrumentedStatsSummary() {
    return this.shouldCollectHermesInstrumentedStats ? this.hermesInstrumentedStatsSummary : undefined;
  }
  enablePerfMemoryHooks() {
    return null;
  }
  disablePerfMemoryHooks() {
    return null;
  }
  getPerfAttributedMemory() {
    return null;
  }
  getPerfAttributedMemoryCallstacks() {
    return null;
  }
  getPerfAttributedMemoryStats() {
    return null;
  }
  startCPUProfiling() {
    return null;
  }
  stopCPUProfiling() {
    return Promise.resolve(null);
  }
  enablePAMemoryProfiler() {
    return null;
  }
  disablePAMemoryProfiler() {
    return null;
  }
  getPerfAttributedPAMemory() {
    return null;
  }
  getPerfAttributedPAMemoryCallstacks() {
    return null;
  }
  getPartitionAllocatorStats() {
    return null;
  }
  enableProfilingV8Heap() {

  }
  disableProfilingV8Heap() {

  }
  getProfilerV8MemoryCallstacks() {
    return null;
  }
  getMemoryUsageDetails() {
    return { 0: this.memory };
  }
  getMemoryUsageElectronRenderer() {
    return null;
  }
  getMemoryPrivateUsageElectronRenderer() {
    return null;
  }
  getMemoryUsageElectronRendererUsedHeapSize() {
    return null;
  }
  getMemoryHeapStats() {
    return null;
  }
  getBlinkMemoryInfo() {
    return null;
  }
  getMemoryUsageElectronProcessTypeDetails() {
    return null;
  }
}
function getCpuUsageElectronProcessTypeDetails() {
  return null;
}
ProcessUtilsIOS.prototype["getCpuUsageElectronProcessTypeDetails"] = getCpuUsageElectronProcessTypeDetails;
let tmp5 = new tmp(tmp4, tmp3, tmp2, ProcessUtilsIOS, this, undefined, NativeModules, globalThis, getCpuUsageElectronProcessTypeDetails, require, dependencyMap, exports);
let closure_1 = tmp5;
tmp5.shouldCollectHermesInstrumentedStats = false;
let prop;
if (NativeModules != null) {
  prop = NativeModules.SystemResourceManager;
}
if (prop != null) {
  let getCpuCoreCount = prop.getCpuCoreCount;
  if (getCpuCoreCount != null) {
    let cpuCoreCount = getCpuCoreCount((cpuCoreCount) => {
      closure_1.cpuCoreCount = cpuCoreCount;
    });
  }
}
let timerId = setInterval(() => {
  if (prop != null) {
    const getCurrentCpuUsagePercent = prop.getCurrentCpuUsagePercent;
    if (getCurrentCpuUsagePercent != null) {
      const currentCpuUsagePercent = getCurrentCpuUsagePercent((arg0) => {
        let tmp2;
        if (arg0 >= 0) {
          tmp2 = arg0;
        }
        closure_1_1.cpuPercentage = tmp2;
      });
    }
  }
  if (prop != null) {
    const getCumulativeCpuUsage = prop.getCumulativeCpuUsage;
    if (getCumulativeCpuUsage != null) {
      const cumulativeCpuUsage = getCumulativeCpuUsage((usage) => {
        if (usage >= 0) {
          const _performance = performance;
          closure_1_1.cumulativeCpuUsage = { usage, sampleTime: performance.now() };
          const obj = { usage, sampleTime: performance.now() };
        }
      });
    }
  }
  if (prop != null) {
    const getCurrentMemoryUsageKb = prop.getCurrentMemoryUsageKb;
    if (getCurrentMemoryUsageKb != null) {
      const currentMemoryUsageKb = getCurrentMemoryUsageKb((arg0) => {
        let tmp2;
        if (arg0 >= 0) {
          tmp2 = arg0;
        }
        closure_1_1.memory = tmp2;
      });
    }
  }
  let tmp6;
  if (closure_1.shouldCollectHermesInstrumentedStats) {
    tmp6 = getHermesInstrumentedStatsSummary();
  }
  closure_1.hermesInstrumentedStatsSummary = tmp6;
}, 1000);
const result = size.fileFinishedImporting("utils/ProcessUtils.native.tsx");

export default tmp5;