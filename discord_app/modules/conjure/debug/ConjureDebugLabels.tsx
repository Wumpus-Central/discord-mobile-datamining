// discord_app/modules/conjure/debug/ConjureDebugLabels.tsx
import intl6 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import ConjureDebugFormat from "ConjureDebugFormat.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const set = new Set(["error", "aborted", "length"]);
let closure_4 = {
  db() {
    return _modDef3753["7l+DFG"];
  },
  db_preview() {
    return _modDef3753.FAuffi;
  },
  runtime() {
    return _modDef3753["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3753.ynpJzv;
  },
  bot() {
    return _modDef3753["5/i0cj"];
  },
  bot_preview() {
    return _modDef3753.m2jsnw;
  },
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  let eiAi57;
  const intl = intl6.intl;
  const string = intl.string;
  if ("preview" === env) {
    eiAi57 = _modDef3753["2yLYlG"];
  } else {
    eiAi57 = _modDef3753.eiAi57;
  }
  return string(eiAi57);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = intl6.intl;
  const string = intl.string;
  const tmp = _modDef3753;
  return string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  let eiAi57;
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = intl6.intl;
        return intl2.string(_modDef3753.IVzfVV);
      } else {
        const intl = intl6.intl;
        return intl.string(_modDef3753["Um1/8L"]);
      }
    }
  }
  const intl3 = intl6.intl;
  const string = intl3.string;
  if ("preview" === id) {
    eiAi57 = _modDef3753["2yLYlG"];
  } else {
    eiAi57 = _modDef3753.eiAi57;
  }
  return string(eiAi57);
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
  let found;
  const hasItem = null != call.stopReason && set.has(call.stopReason);
  let formatMsResult = null;
  if (null != call.durationMs) {
    const obj = ConjureDebugFormat;
    formatMsResult = obj.formatMs(call.durationMs);
  }
  const items = [formatMsResult, ,];
  const obj2 = ConjureDebugFormat;
  const formatCountResult = obj2.formatCount(call.inputTokens + call.cacheReadTokens + call.cacheWriteTokens);
  const obj3 = ConjureDebugFormat;
  items[1] = "" + formatCountResult + " \u2192 " + obj3.formatCount(call.outputTokens);
  let stopReason = null;
  if (hasItem) {
    stopReason = call.stopReason;
  }
  items[2] = stopReason;
  const obj4 = { text: found.join(" \u00B7 "), bad: hasItem };
  found = items.filter((item) => null != item);
  return obj4;
};
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3753.wox6Ev);
  } else if ("pending" === stateFromStores3) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3753.OcPHQ1);
  } else {
    const obj3 = ConjureDebugFormat;
    const formatObservedAtResult = obj3.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = intl6.intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3753.BhRjZZ, obj2);
    } else {
      let ZoUSVK;
      if ("declined" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3753["o/FKzF"];
      } else if ("busy" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3753.YZb4hK;
      } else {
        ZoUSVK = _modDef3753.ZoUSVK;
      }
      const intl = intl6.intl;
      let str2 = stateFromStores3.reason;
      const formatToPlainString = intl.formatToPlainString;
      if (str2 == null) {
        str2 = "no reason given";
      }
      const obj = { reason: str2, time: formatObservedAtResult };
      return formatToPlainString(ZoUSVK, obj);
    }
  }
};
export const analyticsUnavailableReason = function analyticsUnavailableReason(analytics) {
  const reason = analytics.reason;
  if ("local" === reason) {
    const intl5 = intl6.intl;
    return intl5.string(_modDef3753.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3753.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3753.KLx6Bb);
  } else {
    let formatToPlainStringResult;
    if (null != analytics.detail) {
      const intl2 = intl6.intl;
      const obj = { detail: analytics.detail };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3753.t09Q6q, obj);
    } else {
      const intl = intl6.intl;
      formatToPlainStringResult = intl.string(_modDef3753["t+tG59"]);
    }
    return formatToPlainStringResult;
  }
};
export const analyticsMemoryValue = function analyticsMemoryValue(found) {
  let formatBytes2;
  let formatToPlainStringResult;
  let num2;
  if (null != found.memory_p50_bytes) {
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = _modDef3753["XO/bN4"];
    let num = found.memory_p50_bytes;
    const formatBytes = ConjureDebugFormat.formatBytes;
    ConjureDebugFormat;
    if (num == null) {
      num = 0;
    }
    const obj = { p50: formatBytes(num), p999: formatBytes2(num2) };
    num2 = found.memory_p999_bytes;
    formatBytes2 = ConjureDebugFormat.formatBytes;
    ConjureDebugFormat;
    if (num2 == null) {
      num2 = found.memory_p50_bytes;
    }
    if (num2 == null) {
      num2 = 0;
    }
    formatToPlainStringResult = formatToPlainString(prop, obj);
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
    const intl = intl6.intl;
    stringResult = intl.string(tmp());
  }
  return stringResult;
};
