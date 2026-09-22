// === Module 17090: VibegrationsTraceSections ===

// Module 17090 (VibegrationsTraceSections)
import size from "module_2" /* 2 */;

let closure_0 = ["arguments", "result", "usage", "diagnostics"];
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTraceSections.tsx");

export const traceDetailSections = function traceDetailSections(findTraceEntryResult, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.childCount;
  if (num === undefined) {
    num = 0;
  }
  let flag = obj.hasParent;
  if (flag === undefined) {
    flag = false;
  }
  const set = new Set();
  if ("tool" === findTraceEntryResult.kind) {
    let tmp5 = null != findTraceEntryResult.fields;
    if (tmp5) {
      tmp5 = findTraceEntryResult.fields.length > 0;
    }
    if (!tmp5) {
      tmp5 = null != findTraceEntryResult.detailId;
    }
    if (tmp5) {
      set.add("arguments");
    }
    if ("started" !== findTraceEntryResult.status) {
      set.add("result");
    }
  } else {
    if (tmp2) {
      set.add("usage");
    }
    tmp2 = null != findTraceEntryResult.promptTokens || null != findTraceEntryResult.inputTokens || null != findTraceEntryResult.outputTokens || null != findTraceEntryResult.cacheReadTokens || null != findTraceEntryResult.costUsd || null != findTraceEntryResult.stopReason;
  }
  if (!flag) {
    flag = num > 0;
  }
  if (!flag) {
    flag = null != findTraceEntryResult.turnId;
  }
  if (!flag) {
    flag = "" !== findTraceEntryResult.startedAt;
  }
  if (!flag) {
    flag = "" !== findTraceEntryResult.id;
  }
  if (flag) {
    set.add("diagnostics");
  }
  return closure_0.filter((item) => set.has(item));
};