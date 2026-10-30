// === Module 12977: ConjureDebugLabels ===

// Module 12977 (ConjureDebugLabels)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12978 */;
import size from "module_2" /* 2 */;

let closure_3 = {
  db() {
    return _modDef3865["7l+DFG"];
  },
  db_preview() {
    return _modDef3865.FAuffi;
  },
  runtime() {
    return _modDef3865["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3865.ynpJzv;
  },
  bot() {
    return _modDef3865["5/i0cj"];
  },
  bot_preview() {
    return _modDef3865.m2jsnw;
  }
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export function debugEnvLabel(env) {
  const intl = util.intl;
  if ("preview" === env) {
    let eiAi57 = _modDef3865["2yLYlG"];
  } else {
    eiAi57 = _modDef3865.eiAi57;
  }
  return intl.string(eiAi57);
}
export function debugYesNo(connected) {
  const intl = util.intl;
  const tmp = _modDef3865;
  return intl.string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
}
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export function debugLogFilterLabel(id) {
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = util.intl;
        return intl2.string(_modDef3865.IVzfVV);
      } else {
        const intl = util.intl;
        return intl.string(_modDef3865["Um1/8L"]);
      }
    }
  }
  const intl3 = util.intl;
  if ("preview" === id) {
    let eiAi57 = _modDef3865["2yLYlG"];
  } else {
    eiAi57 = _modDef3865.eiAi57;
  }
  return intl3.string(eiAi57);
}
export function isRenderableLog(message) {
  message = message.message;
  let tmp = typeof message === "string";
  if (typeof message === "string") {
    tmp = typeof message.level === "string";
  }
  if (tmp) {
    tmp = typeof message.ts === "string";
  }
  return tmp;
}
export function filterDebugLogs(stateFromStores, arg1, first1) {
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
}
export function forceCompactionStatus(forceState) {
  if ("idle" === forceState) {
    const intl4 = util.intl;
    return intl4.string(_modDef3865.wox6Ev);
  } else if ("pending" === forceState) {
    const intl3 = util.intl;
    return intl3.string(_modDef3865.OcPHQ1);
  } else {
    const formatObservedAtResult = ConjureDebugFormat.formatObservedAt(forceState.observedAt);
    if ("compacted" === forceState.outcome) {
      const intl2 = util.intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3865.BhRjZZ, obj2);
    } else {
      if ("declined" === forceState.outcome) {
        let ZoUSVK = _modDef3865["o/FKzF"];
      } else if ("busy" === forceState.outcome) {
        ZoUSVK = _modDef3865.YZb4hK;
      } else {
        ZoUSVK = _modDef3865.ZoUSVK;
      }
      const intl = util.intl;
      let str2 = forceState.reason;
      if (str2 == null) {
        str2 = "no reason given";
      }
      const obj = { reason: str2, time: formatObservedAtResult };
      return intl.formatToPlainString(ZoUSVK, obj);
    }
  }
}
export function analyticsUnavailableReason(analytics) {
  const reason = analytics.reason;
  if ("local" === reason) {
    const intl5 = util.intl;
    return intl5.string(_modDef3865.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = util.intl;
    return intl4.string(_modDef3865.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = util.intl;
    return intl3.string(_modDef3865.KLx6Bb);
  } else {
    if (null != analytics.detail) {
      const intl2 = util.intl;
      const obj = { detail: analytics.detail };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3865.t09Q6q, obj);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(_modDef3865["t+tG59"]);
    }
    return formatToPlainStringResult;
  }
}
export function analyticsMemoryValue(found) {
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
    let formatToPlainStringResult = intl.formatToPlainString(_modDef3865["XO/bN4"], obj2);
    const tmp2Result = ConjureDebugFormat;
  } else {
    formatToPlainStringResult = null;
  }
  return formatToPlainStringResult;
}
export function analyticsRoleLabel(role) {
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
}
export function sandboxRestartStatus(restartState) {
  if ("idle" === restartState) {
    const intl2 = util.intl;
    return intl2.string(_modDef3865.mlok8D);
  } else if ("pending" === restartState) {
    const intl = util.intl;
    return intl.string(_modDef3865["1ugSyK"]);
  } else {
    const intl3 = util.intl;
    if ("restarted" === restartState.outcome) {
      let FiVRoT = _modDef3865["76mfqO"];
    } else {
      FiVRoT = _modDef3865.FiVRoT;
    }
    let str = restartState.reason;
    if (str == null) {
      str = "";
    }
    const obj = { reason: str, time: ConjureDebugFormat.formatObservedAt(restartState.observedAt) };
    return intl3.formatToPlainString(FiVRoT, obj);
  }
}