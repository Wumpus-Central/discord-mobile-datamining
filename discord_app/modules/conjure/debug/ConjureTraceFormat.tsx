// === Module 17058: debug/ConjureTraceFormat ===

// Module 17058 (debug/ConjureTraceFormat)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/debug/ConjureTraceFormat.tsx");

export const formatDuration = function formatDuration(durationMs) {
  if (durationMs < 1000) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + durationMs + "ms";
  } else {
    const result = durationMs / 1000;
    const _HermesInternal = HermesInternal;
    combined = "" + result.toFixed(1) + "s";
  }
  return combined;
};
export const formatTokens = function formatTokens(promptTokens) {
  if (promptTokens < 1000) {
    const _String = String;
    return String(promptTokens);
  } else {
    const result = promptTokens / 1000;
    if (result < 10) {
      let toFixedResult = result.toFixed(1);
    } else {
      const _Math = Math;
      toFixedResult = Math.round(result);
    }
    const _HermesInternal = HermesInternal;
    return "" + toFixedResult + "k";
  }
};
export const categoryLabel = function categoryLabel(traceCategoryResult) {
  if ("subagent" === traceCategoryResult) {
    const intl5 = util.intl;
    return intl5.string(_modDef3827.PbKt9r);
  } else if ("context" === traceCategoryResult) {
    const intl4 = util.intl;
    return intl4.string(_modDef3827["tNk/P2"]);
  } else if ("tool" === traceCategoryResult) {
    const intl3 = util.intl;
    return intl3.string(_modDef3827.NBOJcw);
  } else if ("delegated" === traceCategoryResult) {
    const intl2 = util.intl;
    return intl2.string(_modDef3827.QgrFdt);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3827.LsLVUy);
  }
};
export const statusLabel = function statusLabel(status) {
  if ("started" === status) {
    const intl3 = util.intl;
    return intl3.string(_modDef3827["2wyRDK"]);
  } else if ("error" === status) {
    const intl2 = util.intl;
    return intl2.string(_modDef3827["2Cu8n+"]);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3827["6kgw6D"]);
  }
};
export const omissionLabel = function omissionLabel(content) {
  if ("prose" === content) {
    const intl3 = util.intl;
    return intl3.string(_modDef3827["6oDpz5"]);
  } else if ("content" === content) {
    const intl2 = util.intl;
    return intl2.string(_modDef3827.kSGhxQ);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3827.JwGtRz);
  }
};
export const traceRichStatusLabel = function traceRichStatusLabel(conjureTraceDetail) {
  let tmp = null;
  if (null != conjureTraceDetail) {
    tmp = null;
    if ("loaded" !== conjureTraceDetail.status) {
      tmp = null;
      if ("forbidden" !== conjureTraceDetail.status) {
        let tmp6 = dependencyMap;
        const intl = util.intl;
        if ("loading" === conjureTraceDetail.status) {
          tmp6 = _modDef3827;
          let SKbSyo = tmp6.SKbSyo;
        } else if ("unavailable" === conjureTraceDetail.status) {
          SKbSyo = _modDef3827.tdq5Zn;
        } else {
          SKbSyo = _modDef3827["Dw1JW/"];
        }
        intl.string(SKbSyo);
      }
    }
  }
  return tmp;
};