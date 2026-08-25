// === Module 15210: hasExceededThreshold ===

// Module 15210 (hasExceededThreshold)
import Storage2 from "Storage" /* 595 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
function hasExceededThreshold(name) {
  let tmp = "anonymous" !== name.name;
  if (tmp) {
    let tmp3 = "" === c7;
    if (!tmp3) {
      tmp3 = name.name === c7;
    }
    if (tmp3) {
      let tmp6 = name.execCount > c6;
      if (!tmp6) {
        tmp6 = name.execTime > c5;
      }
      tmp3 = tmp6;
    }
    tmp = tmp3;
  }
  return tmp;
}
function flushViolators() {
  if (!(function hasViolator() {
    const obj = dependencyMap[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp3 = callback;
      let tmp4 = callback(tmp2, 2);
      let first = tmp4[0];
      let tmp6 = callback2;
      if (callback2(tmp4[1])) {
        let tmp7 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  })()) {
    if ("" === c7) {
      logger.log("No violators found");
    }
    map[Symbol.iterator]();
  }
  (function printViolators() {
    let num;
    num = 34;
    let num2;
    num2 = 20;
    let num3;
    num3 = 20;
    {
      const sum = num + num2 + num3 + 6;
    }
    logger.log(`${"|".padEnd(tmp, "-")}|`);
    logger.log(`${"| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(tmp, " ")}|`);
    logger.log(`${"|".padEnd(tmp, "-")}|`);
    const padEndResult = "Function/Component Name".padEnd(num, " ");
    logger.log("| " + padEndResult + "| " + "Total Exec Time".padEnd(num2, " ") + "| " + "Total Exec Count".padEnd(num3, " ") + "|");
    logger.log(`${"|".padEnd(tmp, "-")}|`);
    const padEndResult1 = "Total Exec Time".padEnd(num2, " ");
    while (tmp10 !== undefined) {
      let tmp12 = callback;
      let tmp13 = callback(tmp11, 2);
      [obj, tmp14] = tmp13;
      let tmp16 = "" !== closure_7;
      if (tmp16) {
        let tmp17 = obj;
        tmp16 = obj === tmp15;
      }
      if (!tmp16) {
        let tmp18 = callback2;
        let tmp19 = tmp14;
        tmp16 = callback2(tmp14);
      }
      if (tmp16) {
        let tmp20 = logger;
        let tmp21 = obj;
        let padEndResult2 = obj.padEnd(num, " ");
        let tmp23 = tmp14;
        let execTime = tmp14.execTime;
        let text = `${execTime.toFixed(2)}ms`;
        let str = tmp14.execCount;
        let padEndResult3 = `${execTime.toFixed(2)}ms`.padEnd(num2, " ");
        str = str.toString();
        let _HermesInternal = HermesInternal;
        let str2 = "| ";
        let tmp26 = padEndResult2;
        let str3 = "| ";
        let str4 = "| ";
        let str5 = "|";
        let logResult5 = logger.log("| " + padEndResult2 + "| " + padEndResult3 + "| " + str.padEnd(num3, " ") + "|");
      }
      continue;
    }
    logger.log(`${"|".padEnd(tmp, "-")}|`);
  })();
}
const logger = new require("log").Logger("useStateFromStores");
let c4 = 60000;
let c5 = 10;
let c6 = 1000;
let c7 = "";
let c8 = false;
let c9;
const map = new Map();
let result = require("set").fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx");

export function getUseStateFromStoresExecutionWindowThresholdMs() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 60000;
  }
  return num;
}
export const setUseStateFromStoresExecutionWindowThresholdMs = function setUseStateFromStoresExecutionWindowThresholdMs(arg0) {
  closure_4 = arg0;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresExecutionWindowThresholdMs", arg0);
  clearInterval(interval);
  if (c8) {
    const _setInterval = setInterval;
    interval = setInterval(flushViolators, closure_4);
  }
};
export function getUseStateFromStoresExecutionTimeWarningThresholdMs() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 10;
  }
  return num;
}
export const setUseStateFromStoresExecutionTimeWarningThresholdMs = function setUseStateFromStoresExecutionTimeWarningThresholdMs(arg0) {
  closure_5 = arg0;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresExecutionTimeWarningThresholdMs", arg0);
};
export function getUseStateFromStoresExecutionCountWarningThreshold() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1000;
  }
  return num;
}
export const setUseStateFromStoresExecutionCountWarningThreshold = function setUseStateFromStoresExecutionCountWarningThreshold(arg0) {
  closure_6 = arg0;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresExecutionCountWarningThreshold", arg0);
};
export const setUseStateFromStoresSpecificHookFilter = function setUseStateFromStoresSpecificHookFilter(first1) {
  closure_7 = first1;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresSpecificHookFilter", first1);
};
export function getUseStateFromStoresSpecificHookFilter() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  return str;
}
export function getUseStateFromStoresDebuggingEnabled() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  return flag;
}
export const setUseStateFromStoresDebuggingEnabled = function setUseStateFromStoresDebuggingEnabled(first) {
  closure_8 = first;
  const Storage = Storage2.Storage;
  const result = Storage.set("useStateFromStoresDebuggingEnabled", first);
  if (closure_8) {
    const _setInterval = setInterval;
    let interval = setInterval(flushViolators, c4);
  } else {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = undefined;
  }
};
export const getUseStateFromStoresHookInfo = function getUseStateFromStoresHookInfo() {
  if (c8) {
    const _Error = Error;
    error = new Error();
    let parts;
    if (error.stack != null) {
      parts = str.split("\n");
    }
    if (null == parts) {
      parts = [];
    }
    let num = 3;
    let str8 = "unknown";
    if (3 < parts.length) {
      while (true) {
        let str9 = parts[num];
        let str10 = str9.trim();
        let tmp7 = str10.split(" ")[1];
        let tmp8 = num;
        if ("useStateFromStores" !== tmp7) {
          if ("useStateFromStoresArray" !== tmp7) {
            str8 = tmp7;
            if ("useStateFromStoresObject" !== tmp7) {
              break;
            }
          }
          break;
        }
        let sum = num + 1;
        num = sum;
        str8 = "unknown";
        if (sum >= parts.length) {
          break;
        }
      }
    }
    let obj = map;
    let value = map.get(str8);
    if (value == null) {
      obj = { name: null, execCount: 0, execTime: 0, warned: false };
      obj[0] = str8;
      value = obj;
    }
    const result = obj.set(str8, value);
    return value;
  }
};
export const trackGetStateFromStoresPerformance = function trackGetStateFromStoresPerformance(execTime) {
  if (c8) {
    if (null != execTime) {
      const _performance = performance;
      const _performance2 = performance;
      const nowResult = performance.now();
      execTime.execTime = execTime.execTime + (performance.now() - nowResult);
      execTime.execCount = execTime.execCount + 1;
      if (false === execTime.warned) {
        let tmp9 = "anonymous" !== execTime.name;
        if (tmp9) {
          let tmp4 = "" === c7;
          if (!tmp4) {
            tmp4 = execTime.name === c7;
          }
          if (tmp4) {
            let tmp7 = execTime.execCount > c6;
            if (!tmp7) {
              tmp7 = execTime.execTime > c5;
            }
            tmp4 = tmp7;
          }
          tmp9 = tmp4;
        }
        if (tmp9) {
          execTime.warned = true;
          const _HermesInternal = HermesInternal;
          logger.log("" + execTime.name + " cumulatively used " + execTime.execTime + "ms of execution time and ran " + execTime.execCount + " times.");
        }
      }
      return arg1();
    }
  }
  return arg1();
};