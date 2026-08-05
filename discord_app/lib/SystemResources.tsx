import { getHermesInstrumentedStatsSummary } from "../utils/ProcessUtils.native.tsx";
// discord_app/lib/SystemResources.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
let result = require("getHermesInstrumentedStatsSummary").fileFinishedImporting("lib/SystemResources.tsx");
class SystemResources {
  constructor() {
    obj = Object.create(new.target.prototype);
    histogram = new require("getSamples").Histogram();
    obj[0] = histogram;
    histogram1 = new require("getSamples").Histogram();
    obj[1] = histogram1;
    obj = require("getHermesInstrumentedStatsSummary");
    obj[2] = obj.getCumulativeCPUUsage();
    obj.lastCPU = obj.startCPU;
    obj.lastBattery = null;
    return obj;
  }
}
const prototype = SystemResources.prototype;
prototype["getStats"] = function getStats() {
  const self = this;
  const cpuHistogram = this.cpuHistogram;
  const report = cpuHistogram.getReport();
  const memoryHistogram = this.memoryHistogram;
  const report1 = memoryHistogram.getReport();
  let obj = getHermesInstrumentedStatsSummary;
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
  obj[5] = result;
  obj[6] = report1.percentiles[25];
  obj[7] = report1.percentiles[50];
  obj[8] = report1.percentiles[75];
  obj[9] = report1.percentiles[90];
  obj[10] = report1.percentiles[95];
  ({ min: obj2[11], max: obj2[12], mean: obj2[13] } = report1);
  return obj;
};
prototype["takeSample"] = function takeSample() {
  const self = this;
  const cumulativeCPUUsage = getHermesInstrumentedStatsSummary.getCumulativeCPUUsage();
  const obj = getHermesInstrumentedStatsSummary;
  const tmp = importDefault;
  const currentMemoryUsageKB = getHermesInstrumentedStatsSummary.getCurrentMemoryUsageKB();
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
    const currentCPUUsagePercent = tmp(7055).getCurrentCPUUsagePercent();
    if (null != currentCPUUsagePercent) {
      const cpuHistogram2 = self.cpuHistogram;
      cpuHistogram2.addSample(currentCPUUsagePercent);
    }
    const tmpResult = tmp(7055);
  }
  if (null != currentMemoryUsageKB) {
    const memoryHistogram = self.memoryHistogram;
    memoryHistogram.addSample(currentMemoryUsageKB);
  }
};
prototype["getCurrentBattery"] = function getCurrentBattery() {
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c3 = 1;
            let obj2 = v0(outer1_2[3]);
            c1 = 2;
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj2.getDeviceState({ fallback: false });
            return obj1;
          }
        } else if (1 === tmp6) {
          c3 = 0;
          v0 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v0 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c3 = 0;
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1.batteryLevel;
          return obj;
        }
      } catch (tmp10) {
        let closure_2 = tmp10;
        if (tmp3 === c3) {
          v0 = tmp2;
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
  return callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = outer1_0;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0.getCurrentBattery();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0.lastBattery = arg1;
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
  return callback(function*() {
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
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0.getCurrentBattery();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          if (null != closure_0.lastBattery) {
            if (null != closure_0) {
              obj = { startBattery: null, currentBattery: null, batteryUsageRounded: null };
              obj[0] = closure_0.lastBattery;
              obj[1] = closure_0;
              const _Math = Math;
              obj[2] = Math.round(1000 * (closure_0 - closure_0.lastBattery)) / 1000;
            }
            c3 = 3;
          }
          const obj3 = { startBattery: null, currentBattery: null, batteryUsageRounded: null };
          obj3[0] = closure_0.lastBattery;
          obj3[1] = closure_0;
        }
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  })();
};

export default SystemResources;