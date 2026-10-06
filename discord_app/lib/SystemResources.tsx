// === Module 7252: SystemResources ===

// Module 7252 (SystemResources)
import ProcessUtilsDefault from "ProcessUtils" /* 1363 */;
import Histogram from "Histogram" /* 7246 */;
import DeviceState from "DeviceState" /* 7253 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c0, c1, c2;

let result = size.fileFinishedImporting("lib/SystemResources.tsx");
class SystemResources {
  constructor() {
    const merged = Object.assign({ cpuHistogram: null, memoryHistogram: null, startCPU: null });
    const histogram = new Histogram.Histogram();
    merged[0] = histogram;
    const histogram1 = new Histogram.Histogram();
    merged[1] = histogram1;
    const obj = ProcessUtilsDefault;
    merged[2] = obj.getCumulativeCPUUsage();
    merged.lastCPU = merged.startCPU;
    merged.lastBattery = null;
    return merged;
  }
  getStats() {
    const self = this;
    const cpuHistogram = this.cpuHistogram;
    const report = cpuHistogram.getReport();
    const memoryHistogram = this.memoryHistogram;
    const report1 = memoryHistogram.getReport();
    const obj = ProcessUtilsDefault;
    const cumulativeCPUUsage = obj.getCumulativeCPUUsage();
    let result;
    if (null != this.startCPU) {
      if (null != cumulativeCPUUsage) {
        result = 100 * (cumulativeCPUUsage.usage - self.startCPU.usage) / ((cumulativeCPUUsage.sampleTime - self.startCPU.sampleTime) / 1000);
      }
    }
    const obj3 = { client_performance_cpu_percentile25: report.percentiles[25], client_performance_cpu_percentile50: report.percentiles[50], client_performance_cpu_percentile75: report.percentiles[75], client_performance_cpu_percentile90: report.percentiles[90], client_performance_cpu_percentile95: report.percentiles[95], client_performance_cpu_mean: result, client_performance_memory_percentile25: report1.percentiles[25], client_performance_memory_percentile50: report1.percentiles[50], client_performance_memory_percentile75: report1.percentiles[75], client_performance_memory_percentile90: report1.percentiles[90], client_performance_memory_percentile95: report1.percentiles[95], client_performance_memory_min: null, client_performance_memory_max: null, client_performance_memory_mean: null };
    if (null == result) {
      result = report.mean;
    }
    ({ min: obj2.client_performance_memory_min, max: obj2.client_performance_memory_max, mean: obj2.client_performance_memory_mean } = report1);
    return obj3;
  }
  takeSample() {
    const self = this;
    const obj = ProcessUtilsDefault;
    const cumulativeCPUUsage = obj.getCumulativeCPUUsage();
    const obj2 = ProcessUtilsDefault;
    const currentMemoryUsageKB = obj2.getCurrentMemoryUsageKB();
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
      const tmpResult = ProcessUtilsDefault;
      const currentCPUUsagePercent = tmpResult.getCurrentCPUUsagePercent();
      if (null != currentCPUUsagePercent) {
        const cpuHistogram2 = self.cpuHistogram;
        cpuHistogram2.addSample(currentCPUUsagePercent);
      }
    }
    if (null != currentMemoryUsageKB) {
      const memoryHistogram = self.memoryHistogram;
      memoryHistogram.addSample(currentMemoryUsageKB);
    }
  }
  getCurrentBattery() {
    return (async () => {
      let obj3;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 1;
              c1 = 2;
              c0 = 1;
              const obj5 = { value: obj3.getDeviceState({ fallback: false }), done: false };
              obj3 = DeviceState;
              return obj5;
            }
          } else if (1 === tmp3) {
            c3 = 0;
            c0 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c0 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 0;
            c0 = 3;
            const obj = { value: value.batteryLevel, done: true };
            return obj;
          }
        } catch (tmp7) {
          let closure_2 = tmp7;
          if (0 === c3) {
            c0 = 3;
            throw tmp7;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  }
  setLastBattery() {
    const self = this;
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = self;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: self.getCurrentBattery(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0.lastBattery = value;
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp6) {
          c2 = 3;
          throw tmp6;
        }
      }
    })();
  }
  getBatteryLevelStats() {
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let currentBattery;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              currentBattery = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: self.getCurrentBattery(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            currentBattery = value;
            if (null != closure_129_0.lastBattery) {
              let obj;
              if (null != currentBattery) {
                obj = { startBattery: closure_129_0.lastBattery, currentBattery, batteryUsageRounded: Math.round(1000 * (currentBattery - closure_129_0.lastBattery)) / 1000 };
                const _Math = Math;
              }
              c3 = 3;
              const obj6 = { value: obj, done: true };
              return obj6;
            }
            const obj7 = { startBattery: closure_129_0.lastBattery, currentBattery, batteryUsageRounded: null };
            obj = obj7;
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    })();
  }
}
const prototype = SystemResources.prototype;

export default SystemResources;