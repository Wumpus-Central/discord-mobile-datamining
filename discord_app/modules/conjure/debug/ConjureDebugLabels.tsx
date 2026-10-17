// === Module 12343: ConjureDebugLabels ===

// Module 12343 (ConjureDebugLabels)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12344 */;
import size from "module_2" /* 2 */;

let closure_3 = {
  db() {
    return _modDef3883["7l+DFG"];
  },
  db_preview() {
    return _modDef3883.FAuffi;
  },
  runtime() {
    return _modDef3883["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3883.ynpJzv;
  },
  bot() {
    return _modDef3883["5/i0cj"];
  },
  bot_preview() {
    return _modDef3883.m2jsnw;
  }
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  const intl = util.intl;
  if ("preview" === env) {
    let eiAi57 = _modDef3883["2yLYlG"];
  } else {
    eiAi57 = _modDef3883.eiAi57;
  }
  return intl.string(eiAi57);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = util.intl;
  const tmp = _modDef3883;
  return intl.string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = util.intl;
        return intl2.string(_modDef3883.IVzfVV);
      } else {
        const intl = util.intl;
        return intl.string(_modDef3883["Um1/8L"]);
      }
    }
  }
  const intl3 = util.intl;
  if ("preview" === id) {
    let eiAi57 = _modDef3883["2yLYlG"];
  } else {
    eiAi57 = _modDef3883.eiAi57;
  }
  return intl3.string(eiAi57);
};
export const isRenderableLog = function isRenderableLog(message) {
  message = message.message;
  let tmp = typeof message === "string";
  if (typeof message === "string") {
    tmp = typeof message.level === "string";
  }
  if (tmp) {
    tmp = typeof message.ts === "string";
  }
  return tmp;
};
export const filterDebugLogs = function filterDebugLogs(stateFromStores, arg1, first1) {
  closure_0 = arg1;
  closure_1 = first1.trim().toLowerCase();
  return stateFromStores.filter((log) => {
    log = log.log;
    const message = log.message;
    let tmp = typeof message === "string";
    if (typeof message === "string") {
      tmp = typeof log.level === "string";
    }
    if (tmp) {
      tmp = typeof log.ts === "string";
    }
    let tmp2 = tmp;
    if (tmp2) {
      let tmp4 = "all" === closure_0;
      if (!tmp4) {
        tmp4 = ConjureDebugFormat.debugLogEnv(log.source) === tmp3;
      }
      if (tmp4) {
        let tmp8 = "" === closure_1;
        if (!tmp8) {
          const formatted = log.message.toLowerCase();
          let hasItem = formatted.includes(closure_1);
          if (!hasItem) {
            const level = log.level;
            hasItem = level.includes(closure_1);
          }
          if (!hasItem) {
            let flag;
            if (log.source != null) {
              const formatted1 = str4.toLowerCase();
              flag = formatted1.includes(closure_1);
            }
            if (flag == null) {
              flag = false;
            }
            hasItem = flag;
          }
          tmp8 = hasItem;
        }
        tmp4 = tmp8;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
};
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = util.intl;
    return intl4.string(_modDef3883.wox6Ev);
  } else if ("pending" === stateFromStores3) {
    const intl3 = util.intl;
    return intl3.string(_modDef3883.OcPHQ1);
  } else {
    const formatObservedAtResult = ConjureDebugFormat.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = util.intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3883.BhRjZZ, obj2);
    } else {
      if ("declined" === stateFromStores3.outcome) {
        let ZoUSVK = _modDef3883["o/FKzF"];
      } else if ("busy" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3883.YZb4hK;
      } else {
        ZoUSVK = _modDef3883.ZoUSVK;
      }
      const intl = util.intl;
      let str2 = stateFromStores3.reason;
      if (str2 == null) {
        str2 = "no reason given";
      }
      const obj = { reason: str2, time: formatObservedAtResult };
      return intl.formatToPlainString(ZoUSVK, obj);
    }
  }
};
export const analyticsUnavailableReason = function analyticsUnavailableReason(analytics) {
  const reason = analytics.reason;
  if ("local" === reason) {
    const intl5 = util.intl;
    return intl5.string(_modDef3883.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = util.intl;
    return intl4.string(_modDef3883.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = util.intl;
    return intl3.string(_modDef3883.KLx6Bb);
  } else {
    if (null != analytics.detail) {
      const intl2 = util.intl;
      const obj = { detail: analytics.detail };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3883.t09Q6q, obj);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(_modDef3883["t+tG59"]);
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
    const obj2 = { p50: ConjureDebugFormat.formatBytes(num), p999: null };
    let num2 = found.memory_p999_bytes;
    if (num2 == null) {
      num2 = found.memory_p50_bytes;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj2.p999 = ConjureDebugFormat.formatBytes(num2);
    let formatToPlainStringResult = intl.formatToPlainString(_modDef3883["XO/bN4"], obj2);
    const tmp2Result = ConjureDebugFormat;
  } else {
    formatToPlainStringResult = null;
  }
  return formatToPlainStringResult;
};
export const analyticsRoleLabel = function analyticsRoleLabel(role) {
  let tmp = null;
  if ("agent" !== role) {
    tmp = closure_3[role];
  }
  let stringResult = null;
  if (null != tmp) {
    const intl = util.intl;
    stringResult = intl.string(tmp());
  }
  return stringResult;
};
export const sandboxRestartStatus = function sandboxRestartStatus(stateFromStores4) {
  if ("idle" === stateFromStores4) {
    const intl2 = util.intl;
    return intl2.string(_modDef3883.mlok8D);
  } else if ("pending" === stateFromStores4) {
    const intl = util.intl;
    return intl.string(_modDef3883["1ugSyK"]);
  } else {
    const intl3 = util.intl;
    if ("restarted" === stateFromStores4.outcome) {
      let FiVRoT = _modDef3883["76mfqO"];
    } else {
      FiVRoT = _modDef3883.FiVRoT;
    }
    let str = stateFromStores4.reason;
    if (str == null) {
      str = "";
    }
    const obj = { reason: str, time: ConjureDebugFormat.formatObservedAt(stateFromStores4.observedAt) };
    return intl3.formatToPlainString(FiVRoT, obj);
  }
};