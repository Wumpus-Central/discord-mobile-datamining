// discord_app/modules/vibegrations/lib/VibegrationsTraceFormat.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3593 from "../intl/VibegrationsUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTraceFormat.tsx");

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
    return intl5.string(_modDef3593["EoY7D+"]);
  } else if ("context" === traceCategoryResult) {
    const intl4 = util.intl;
    return intl4.string(_modDef3593.KVFrD3);
  } else if ("tool" === traceCategoryResult) {
    const intl3 = util.intl;
    return intl3.string(_modDef3593["/N6ZU9"]);
  } else if ("delegated" === traceCategoryResult) {
    const intl2 = util.intl;
    return intl2.string(_modDef3593.HcEbf2);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3593.AhOqQs);
  }
};
export const statusLabel = function statusLabel(status) {
  if ("started" === status) {
    const intl3 = util.intl;
    return intl3.string(_modDef3593.HpKDyl);
  } else if ("error" === status) {
    const intl2 = util.intl;
    return intl2.string(_modDef3593["5T4Dd0"]);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3593.VbEmf0);
  }
};
export const omissionLabel = function omissionLabel(content) {
  if ("prose" === content) {
    const intl3 = util.intl;
    return intl3.string(_modDef3593.xO6bcQ);
  } else if ("content" === content) {
    const intl2 = util.intl;
    return intl2.string(_modDef3593.gpBZRr);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3593.OZvPXt);
  }
};
export const traceRichStatusLabel = function traceRichStatusLabel(vibegrationsTraceDetail) {
  let tmp = null;
  if (null != vibegrationsTraceDetail) {
    tmp = null;
    if ("loaded" !== vibegrationsTraceDetail.status) {
      tmp = null;
      if ("forbidden" !== vibegrationsTraceDetail.status) {
        let tmp5 = dependencyMap;
        const intl = util.intl;
        if ("loading" === vibegrationsTraceDetail.status) {
          tmp5 = _modDef3593;
          let fj5wM8 = tmp5["vBF/0G"];
        } else if ("unavailable" === vibegrationsTraceDetail.status) {
          fj5wM8 = _modDef3593.jEQTot;
        } else {
          fj5wM8 = _modDef3593.fj5wM8;
        }
        intl.string(fj5wM8);
      }
    }
  }
  return tmp;
};
