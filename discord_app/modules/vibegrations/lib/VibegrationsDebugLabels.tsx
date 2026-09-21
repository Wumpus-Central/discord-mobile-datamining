// === Module 17068: VibegrationsDebugLabels ===

// Module 17068 (VibegrationsDebugLabels)
import util from "util" /* 1115 */;
import _modDef3678 from "module_3678" /* 3678 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 17067 */;
import size from "module_2" /* 2 */;

const set = new Set(["error", "aborted", "length"]);
let closure_4 = {
  db() {
    return _modDef3678.r6cciE;
  },
  db_preview() {
    return _modDef3678.JmIyL8;
  },
  runtime() {
    return _modDef3678.bzNyv8;
  },
  runtime_preview() {
    return _modDef3678["LONZ/8"];
  },
  bot() {
    return _modDef3678.jdpw3A;
  },
  bot_preview() {
    return _modDef3678["/g6wUz"];
  }
};
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  const intl = util.intl;
  if ("preview" === env) {
    let kiOVnt = _modDef3678["+m8XM6"];
  } else {
    kiOVnt = _modDef3678.kiOVnt;
  }
  return intl.string(kiOVnt);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = util.intl;
  const tmp = _modDef3678;
  return intl.string(connected ? tmp["9KlveJ"] : tmp["4tYZVa"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = util.intl;
        return intl2.string(_modDef3678.J2TPCe);
      } else {
        const intl = util.intl;
        return intl.string(_modDef3678.humq1B);
      }
    }
  }
  const intl3 = util.intl;
  if ("preview" === id) {
    let kiOVnt = _modDef3678["+m8XM6"];
  } else {
    kiOVnt = _modDef3678.kiOVnt;
  }
  return intl3.string(kiOVnt);
};
export const isRenderableLog = function isRenderableLog(log) {
  const message = log.message;
  let tmp = typeof message === "string";
  if (typeof message === "string") {
    tmp = typeof log.level === "string";
  }
  if (tmp) {
    tmp = typeof log.ts === "string";
  }
  return tmp;
};
export const MAX_MODEL_CALL_ROWS = 30;
export const modelCallOutcome = function modelCallOutcome(call) {
  let hasItem = null != call.stopReason;
  if (hasItem) {
    hasItem = set.has(call.stopReason);
  }
  let formatMsResult = null;
  if (null != call.durationMs) {
    formatMsResult = VibegrationsDebugFormat.formatMs(call.durationMs);
  }
  const items = [formatMsResult, , ];
  const formatCountResult = VibegrationsDebugFormat.formatCount(call.inputTokens + call.cacheReadTokens + call.cacheWriteTokens);
  items[1] = "" + formatCountResult + " \u2192 " + VibegrationsDebugFormat.formatCount(call.outputTokens);
  let stopReason = null;
  if (hasItem) {
    stopReason = call.stopReason;
  }
  const obj4 = { text: null, bad: null };
  items[2] = stopReason;
  const found = items.filter((item) => null != item);
  obj4.text = found.join(" \u00B7 ");
  obj4.bad = hasItem;
  return obj4;
};
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = util.intl;
    return intl4.string(_modDef3678.wBng42);
  } else if ("pending" === stateFromStores3) {
    const intl3 = util.intl;
    return intl3.string(_modDef3678["0tgo31"]);
  } else {
    const formatObservedAtResult = VibegrationsDebugFormat.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = util.intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3678["eL8+rZ"], obj2);
    } else {
      if ("declined" === stateFromStores3.outcome) {
        let v9vZuG6 = _modDef3678["9vZuG6"];
      } else if ("busy" === stateFromStores3.outcome) {
        v9vZuG6 = _modDef3678.GV4sdd;
      } else {
        v9vZuG6 = _modDef3678["Y+0nUb"];
      }
      const intl = util.intl;
      let str2 = stateFromStores3.reason;
      if (str2 == null) {
        str2 = "no reason given";
      }
      const obj = { reason: str2, time: formatObservedAtResult };
      return intl.formatToPlainString(v9vZuG6, obj);
    }
  }
};
export const analyticsUnavailableReason = function analyticsUnavailableReason(analytics) {
  const reason = analytics.reason;
  if ("local" === reason) {
    const intl5 = util.intl;
    return intl5.string(_modDef3678.M7Vn6y);
  } else if ("unconfigured" === reason) {
    const intl4 = util.intl;
    return intl4.string(_modDef3678.QirpMl);
  } else if ("unauthorized" === reason) {
    const intl3 = util.intl;
    return intl3.string(_modDef3678.QZ1e4l);
  } else {
    if (null != analytics.detail) {
      const intl2 = util.intl;
      const obj = { detail: analytics.detail };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3678.zUTHf7, obj);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(_modDef3678.WIAQes);
    }
    return formatToPlainStringResult;
  }
};
export const analyticsMemoryValue = function analyticsMemoryValue(found) {
  if (null != found.memory_p50_bytes) {
    const intl = util.intl;
    let num = found.memory_p50_bytes;
    if (num == null) {
      num = 0;
    }
    const obj2 = { p50: VibegrationsDebugFormat.formatBytes(num), p999: null };
    let num2 = found.memory_p999_bytes;
    if (num2 == null) {
      num2 = found.memory_p50_bytes;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj2.p999 = VibegrationsDebugFormat.formatBytes(num2);
    let formatToPlainStringResult = intl.formatToPlainString(_modDef3678.SBkDIZ, obj2);
    const tmp2Result = VibegrationsDebugFormat;
  } else {
    formatToPlainStringResult = null;
  }
  return formatToPlainStringResult;
};
export const analyticsRoleLabel = function analyticsRoleLabel(role) {
  let tmp = null;
  if ("agent" !== role) {
    tmp = closure_4[role];
  }
  let stringResult = null;
  if (null != tmp) {
    const intl = util.intl;
    stringResult = intl.string(tmp());
  }
  return stringResult;
};