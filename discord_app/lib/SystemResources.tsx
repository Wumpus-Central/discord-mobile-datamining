// === Module 7748: SystemResources ===

// Module 7748 (SystemResources)
import ProcessUtilsDefault from "ProcessUtils" /* 1359 */;
import Histogram from "Histogram" /* 7742 */;
import DeviceState from "DeviceState" /* 7749 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("lib/SystemResources.tsx");
class SystemResources {
  constructor() {
    merged = Object.assign({ cpuHistogram: null, memoryHistogram: null, startCPU: null });
    histogram = new closure_0(closure_2[1]).Histogram();
    merged[0] = histogram;
    histogram1 = new closure_0(closure_2[1]).Histogram();
    merged[1] = histogram1;
    obj = closure_1(closure_2[2]);
    merged[2] = obj.getCumulativeCPUUsage();
    merged.lastCPU = merged.startCPU;
    merged.lastBattery = null;
    return merged;
  }
}
const prototype = SystemResources.prototype;
prototype["getStats"] = function getStats() {
  const self = this;
  const cpuHistogram = this.cpuHistogram;
  const report = cpuHistogram.getReport();
  const memoryHistogram = this.memoryHistogram;
  const report1 = memoryHistogram.getReport();
  let obj = ProcessUtilsDefault;
  const cumulativeCPUUsage = obj.getCumulativeCPUUsage();
  let result;
  if (null != this.startCPU) {
    if (null != cumulativeCPUUsage) {
      result = 100 * (cumulativeCPUUsage.usage - self.startCPU.usage) / ((cumulativeCPUUsage.sampleTime - self.startCPU.sampleTime) / 1000);
    }
  }
  obj = { client_performance_cpu_percentile25: report.percentiles[25], client_performance_cpu_percentile50: report.percentiles[50], client_performance_cpu_percentile75: report.percentiles[75], client_performance_cpu_percentile90: report.percentiles[90], client_performance_cpu_percentile95: report.percentiles[95], client_performance_cpu_mean: null, client_performance_memory_percentile25: null, client_performance_memory_percentile50: null, client_performance_memory_percentile75: null, client_performance_memory_percentile90: null, client_performance_memory_percentile95: null, client_performance_memory_min: null, client_performance_memory_max: null, client_performance_memory_mean: null };
  if (null == result) {
    result = report.mean;
  }
  obj.client_performance_cpu_mean = result;
  obj.client_performance_memory_percentile25 = report1.percentiles[25];
  obj.client_performance_memory_percentile50 = report1.percentiles[50];
  obj.client_performance_memory_percentile75 = report1.percentiles[75];
  obj.client_performance_memory_percentile90 = report1.percentiles[90];
  obj.client_performance_memory_percentile95 = report1.percentiles[95];
  ({ min: obj2.client_performance_memory_min, max: obj2.client_performance_memory_max, mean: obj2.client_performance_memory_mean } = report1);
  return obj;
};
prototype["takeSample"] = function takeSample() {
  const self = this;
  const cumulativeCPUUsage = ProcessUtilsDefault.getCumulativeCPUUsage();
  const currentMemoryUsageKB = ProcessUtilsDefault.getCurrentMemoryUsageKB();
  if (null != cumulativeCPUUsage) {
    let flag = true;
    if (null != self.lastCPU) {
      const diff = cumulativeCPUUsage.sampleTime - self.lastCPU.sampleTime;
      flag = false;
      if (diff >= 1) {
        const cpuHistogram = self.cpuHistogram;
        cpuHistogram.addSample((cumulativeCPUUsage.usage - self.lastCPU.usage) / (diff / 1000) * 100, diff);
        flag = true;
      }
    }
    if (flag) {
      self.lastCPU = cumulativeCPUUsage;
    }
  } else {
    const currentCPUUsagePercent = ProcessUtilsDefault.getCurrentCPUUsagePercent();
    if (null != currentCPUUsagePercent) {
      const cpuHistogram2 = self.cpuHistogram;
      cpuHistogram2.addSample(currentCPUUsagePercent);
    }
    const tmpResult = ProcessUtilsDefault;
  }
  if (null != currentMemoryUsageKB) {
    const memoryHistogram = self.memoryHistogram;
    memoryHistogram.addSample(currentMemoryUsageKB);
  }
};
prototype["getCurrentBattery"] = function getCurrentBattery() {
  return (async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
            let obj2 = DeviceState;
            c1 = 2;
            c0 = 1;
            const obj1 = { value: obj2.getDeviceState({ fallback: false }), done: false };
            return obj1;
          }
        } else if (1 === tmp6) {
          c3 = 0;
          c0 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c0 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          c3 = 0;
          c0 = 3;
          obj = { value: value.batteryLevel, done: true };
          return obj;
        }
      } catch (tmp10) {
        closure_2 = tmp10;
        if (tmp3 === c3) {
          c0 = tmp2;
          throw tmp10;
        } else {
          c1 = tmp;
        }
      }
    }
  })();
};
prototype["setLastBattery"] = function setLastBattery() {
  const self = this;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = self;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: self.getCurrentBattery(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0.lastBattery = value;
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c2 = tmp;
        throw tmp7;
      }
    }
  })();
};
prototype["getBatteryLevelStats"] = function getBatteryLevelStats() {
  const self = this;
  return (async (arg0, value) => {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: self.getCurrentBattery(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          if (null != closure_129_0.lastBattery) {
            if (null != closure_128_0) {
              obj = { startBattery: closure_129_0.lastBattery, currentBattery: closure_128_0, batteryUsageRounded: null };
              const _Math = Math;
              obj.batteryUsageRounded = Math.round(1000 * (closure_128_0 - closure_129_0.lastBattery)) / 1000;
            }
            c3 = 3;
          }
          const obj3 = { startBattery: closure_129_0.lastBattery, currentBattery: closure_128_0, batteryUsageRounded: null };
        }
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  })();
};

export default SystemResources;