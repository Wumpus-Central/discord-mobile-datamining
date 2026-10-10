// discord_app/modules/conjure/debug/ConjureDebugLabels.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3849 from "../intl/ConjureUntranslated.messages.js";
import ConjureDebugFormat from "ConjureDebugFormat.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = {
  db() {
    return _modDef3849["7l+DFG"];
  },
  db_preview() {
    return _modDef3849.FAuffi;
  },
  runtime() {
    return _modDef3849["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3849.ynpJzv;
  },
  bot() {
    return _modDef3849["5/i0cj"];
  },
  bot_preview() {
    return _modDef3849.m2jsnw;
  },
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  const intl = util.intl;
  if ("preview" === env) {
    let eiAi57 = _modDef3849["2yLYlG"];
  } else {
    eiAi57 = _modDef3849.eiAi57;
  }
  return intl.string(eiAi57);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = util.intl;
  const tmp = _modDef3849;
  return intl.string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = util.intl;
        return intl2.string(_modDef3849.IVzfVV);
      } else {
        const intl = util.intl;
        return intl.string(_modDef3849["Um1/8L"]);
      }
    }
  }
  const intl3 = util.intl;
  if ("preview" === id) {
    let eiAi57 = _modDef3849["2yLYlG"];
  } else {
    eiAi57 = _modDef3849.eiAi57;
  }
  return intl3.string(eiAi57);
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
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = util.intl;
    return intl4.string(_modDef3849.wox6Ev);
  } else if ("pending" === stateFromStores3) {
    const intl3 = util.intl;
    return intl3.string(_modDef3849.OcPHQ1);
  } else {
    const formatObservedAtResult = ConjureDebugFormat.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = util.intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3849.BhRjZZ, obj2);
    } else {
      if ("declined" === stateFromStores3.outcome) {
        let ZoUSVK = _modDef3849["o/FKzF"];
      } else if ("busy" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3849.YZb4hK;
      } else {
        ZoUSVK = _modDef3849.ZoUSVK;
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
    return intl5.string(_modDef3849.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = util.intl;
    return intl4.string(_modDef3849.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = util.intl;
    return intl3.string(_modDef3849.KLx6Bb);
  } else {
    if (null != analytics.detail) {
      const intl2 = util.intl;
      const obj = { detail: analytics.detail };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3849.t09Q6q, obj);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(_modDef3849["t+tG59"]);
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
    let formatToPlainStringResult = intl.formatToPlainString(_modDef3849["XO/bN4"], obj2);
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
    return intl2.string(_modDef3849.mlok8D);
  } else if ("pending" === stateFromStores4) {
    const intl = util.intl;
    return intl.string(_modDef3849["1ugSyK"]);
  } else {
    const intl3 = util.intl;
    if ("restarted" === stateFromStores4.outcome) {
      let FiVRoT = _modDef3849["76mfqO"];
    } else {
      FiVRoT = _modDef3849.FiVRoT;
    }
    let str = stateFromStores4.reason;
    if (str == null) {
      str = "";
    }
    const obj = { reason: str, time: ConjureDebugFormat.formatObservedAt(stateFromStores4.observedAt) };
    return intl3.formatToPlainString(FiVRoT, obj);
  }
};
