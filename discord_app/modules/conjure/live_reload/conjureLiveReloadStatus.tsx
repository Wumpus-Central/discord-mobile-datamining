// === Module 16615: conjureLiveReloadStatus ===

// Module 16615 (conjureLiveReloadStatus)
import util from "util" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import size from "module_2" /* 2 */;

function liveReloadProgress(phase, step) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let str = "enable";
  if ("starting" !== phase) {
    if ("stopping" === phase) {
      let tmp3 = "disable";
    } else {
      tmp3 = null;
    }
    str = tmp3;
  }
  let tmp4 = str;
  if (str == null) {
    tmp4 = tmp;
  }
  if (null == tmp4) {
    return null;
  } else {
    let str6 = "reload";
    if (null != str) {
      let tmp5 = step;
      if (!tmp2) {
        let str4 = "snapshot";
        if ("stopping" === phase) {
          str4 = "stopping";
        }
        tmp5 = str4;
      }
      str6 = tmp5;
    }
    obj = { direction: tmp4, title: null, stepLabel: null, stepIndex: null, stepCount: null };
    const intl = util.intl;
    if ("enable" === tmp4) {
      let NeoP8L = _modDef3753.NeoP8L;
    } else {
      NeoP8L = _modDef3753["3+DCLs"];
    }
    obj.title = intl.string(NeoP8L);
    let stringResult = null;
    if (null != str6) {
      const intl2 = util.intl;
      stringResult = intl2.string(obj[str6]);
    }
    obj.stepLabel = stringResult;
    let num2 = 0;
    if (null != str6) {
      const _Math = Math;
      num2 = Math.max(0, arr.indexOf(str6));
    }
    obj.stepIndex = num2;
    obj.stepCount = closure_3[tmp4].length;
    return obj;
  }
}
let closure_3 = { enable: ["sandbox", "files", "packages", "prepare", "build", "server", "reload"], disable: ["snapshot", "stopping", "reload"] };
let obj = { sandbox: _modDef3753.wYBwzU, files: _modDef3753["5hvVF1"], packages: _modDef3753.DKR23W, prepare: _modDef3753.qc4VkW, build: _modDef3753.ZcJIE6, server: _modDef3753.mAXkyS, stopping: _modDef3753.dI8HGD, snapshot: _modDef3753.E3ZRQo, reload: _modDef3753.ZWcCXh };
const result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveReloadStatus.tsx");

export function liveReloadDirection(arg0) {
  let str = "enable";
  if ("starting" !== arg0) {
    if ("stopping" === arg0) {
      let tmp = "disable";
    } else {
      tmp = null;
    }
    str = tmp;
  }
  return str;
}
export function liveReloadSettledDirection(arg0, arg1) {
  let str = "enable";
  if ("live" !== arg0) {
    if ("idle" === arg0) {
      let tmp = "disable";
    } else {
      tmp = null;
      if ("error" === arg0) {
        tmp = null;
      }
    }
    str = tmp;
  }
  return str;
}
export { liveReloadProgress };
export const liveReloadDescription = function liveReloadDescription(stateFromStores) {
  const intl = util.intl;
  const stringResult = intl.string(_modDef3753.xjblZt);
  if ("error" !== stateFromStores.phase) {
    const tmp6 = liveReloadProgress(stateFromStores.phase, stateFromStores.step);
    if (null != tmp6) {
      if (null == tmp6.stepLabel) {
        let title = tmp6.title;
      } else {
        const _HermesInternal2 = HermesInternal;
        title = "" + tmp6.title + " \u00B7 " + tmp6.stepLabel;
      }
    } else {
      let combined = stringResult;
      if ("idle" === stateFromStores.phase) {
        combined = stringResult;
        if (stateFromStores.enabled) {
          const intl2 = util.intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl2.string(_modDef3753.gCey7s) + " \u00B7 " + stringResult;
        }
      }
      return combined;
    }
  }
  const intl3 = util.intl;
  const tmp3Result = _modDef3753;
  let error = stateFromStores.error;
  if (error == null) {
    error = "";
  }
  return intl3.formatToPlainString(stateFromStores.enabled ? tmp3Result["9YJAIN"] : tmp3Result.JUqlqE, { error });
};