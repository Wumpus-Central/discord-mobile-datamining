// === Module 17079: VibegrationsDebugFormat ===

// Module 17079 (VibegrationsDebugFormat)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugFormat.tsx");

export function debugLogEnv(source) {
  if ("preview" !== source) {
    if ("stable" !== source) {
      let str2 = "other";
    }
    return str2;
  }
  str2 = source;
}
export const formatBytes = function formatBytes(r2_bytes) {
  if (Number.isFinite(r2_bytes)) {
    if (r2_bytes >= 0) {
      if (r2_bytes < 1024) {
        const _Math4 = Math;
        const _HermesInternal4 = HermesInternal;
        return "" + Math.round(r2_bytes) + " B";
      } else {
        const result = r2_bytes / 1024;
        if (result < 1024) {
          if (100 <= result) {
            const _Math3 = Math;
            let rounded = Math.round(result);
          } else {
            rounded = result.toFixed(1);
          }
          const _HermesInternal3 = HermesInternal;
          return "" + rounded + " KB";
        } else {
          const result1 = result / 1024;
          if (result1 < 1024) {
            if (100 <= result1) {
              const _Math2 = Math;
              let rounded1 = Math.round(result1);
            } else {
              rounded1 = result1.toFixed(1);
            }
            const _HermesInternal2 = HermesInternal;
            return "" + rounded1 + " MB";
          } else {
            const result2 = result1 / 1024;
            if (100 <= result2) {
              const _Math = Math;
              let rounded2 = Math.round(result2);
            } else {
              rounded2 = result2.toFixed(1);
            }
            const _HermesInternal = HermesInternal;
            return "" + rounded2 + " GB";
          }
        }
      }
    }
  }
  return "\u2014";
};
export const formatMs = function formatMs(cpu_ms) {
  if (Number.isFinite(cpu_ms)) {
    if (cpu_ms >= 0) {
      if (cpu_ms < 1) {
        const _HermesInternal4 = HermesInternal;
        return "" + cpu_ms.toFixed(2) + " ms";
      } else if (cpu_ms < 1000) {
        if (cpu_ms >= 100) {
          const _Math4 = Math;
          let rounded = Math.round(cpu_ms);
        } else {
          rounded = cpu_ms.toFixed(1);
        }
        const _HermesInternal3 = HermesInternal;
        return "" + rounded + " ms";
      } else {
        const result = cpu_ms / 1000;
        if (result < 60) {
          if (10 <= result) {
            const _Math3 = Math;
            let rounded1 = Math.round(result);
          } else {
            rounded1 = result.toFixed(1);
          }
          const _HermesInternal2 = HermesInternal;
          const combined = "" + rounded1 + " s";
        } else {
          const _Math = Math;
          const rounded2 = Math.floor(result / 60);
          const _Math2 = Math;
          const _HermesInternal = HermesInternal;
          return "" + rounded2 + " m " + Math.round(result % 60) + " s";
        }
      }
    }
  }
  return "\u2014";
};
export const formatCount = function formatCount(cache_read_input_tokens) {
  let str = "\u2014";
  if (Number.isFinite(cache_read_input_tokens)) {
    str = cache_read_input_tokens.toLocaleString();
  }
  return str;
};
export const formatClockTime = function formatClockTime(observedAt) {
  let combined = observedAt;
  const date = new Date(observedAt);
  if (!Number.isNaN(date.getTime())) {
    const _String = String;
    const padStartResult = String(date.getHours()).padStart(2, "0");
    const _String2 = String;
    const StringResult = String(date.getHours());
    const _String3 = String;
    const StringResult1 = String(date.getMinutes());
    const padStartResult1 = String(date.getMinutes()).padStart(2, "0");
    const _HermesInternal = HermesInternal;
    combined = "" + padStartResult + ":" + padStartResult1 + ":" + String(date.getSeconds()).padStart(2, "0");
    const StringResult2 = String(date.getSeconds());
  }
  return combined;
};
export const formatObservedAt = function formatObservedAt(observedAt) {
  const date = new Date(observedAt);
  if (Number.isNaN(date.getTime())) {
    return observedAt;
  } else {
    const _Date = Date;
    const date1 = new Date();
    const fullYear = date.getFullYear();
    if (fullYear === date1.getFullYear()) {
      const month = date.getMonth();
      if (month === date1.getMonth()) {
        if (date2 === date1.getDate()) {
          let toLocaleTimeStringResult = date.toLocaleTimeString();
        }
        return toLocaleTimeStringResult;
      }
    }
    toLocaleTimeStringResult = date.toLocaleString();
  }
};
export const shortBuildLabel = function shortBuildLabel(build) {
  const parts = build.split("/");
  const found = parts.filter((item) => "" !== item);
  let arr3 = found[found.length - 1];
  if (arr3 == null) {
    arr3 = build;
  }
  let substr = arr3;
  if (arr3.length > 12) {
    substr = arr3.slice(0, 12);
  }
  return substr;
};