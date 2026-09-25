// === Module 16385: VibegrationsTraceUtils ===

// Module 16385 (VibegrationsTraceUtils)
import size from "module_2" /* 2 */;

function traceCategory(entry) {
  let str = "model";
  if ("model" === entry.kind) {
    let str4 = "context";
    if ("compaction" !== entry.agent) {
      if ("subagent" === entry.agent) {
        str = "subagent";
      }
      str4 = str;
    }
    let str2 = str4;
  } else {
    str2 = "tool";
    if ("subagent" === entry.agent) {
      str2 = "delegated";
    }
  }
  return str2;
}
function groupSpanMs(entries) {
  const iter = entries[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let _Date = Date;
    let parsed = Date.parse(nextResult.startedAt);
    let tmp4 = parsed;
    let _Number = Number;
    if (!Number.isNaN(parsed)) {
      let _Math = Math;
      POSITIVE_INFINITY = Math.min(POSITIVE_INFINITY, tmp4);
      if (null != tmp2.durationMs) {
        let _Math2 = Math;
        NEGATIVE_INFINITY = Math.max(NEGATIVE_INFINITY, tmp4 + tmp2.durationMs);
      }
    }
    continue;
  }
  let bound = null;
  if (Number.isFinite(POSITIVE_INFINITY)) {
    const _Number2 = Number;
    bound = null;
    if (Number.isFinite(NEGATIVE_INFINITY)) {
      const _Math3 = Math;
      bound = Math.max(0, NEGATIVE_INFINITY - POSITIVE_INFINITY);
    }
  }
  return bound;
}
function traceSearchText(kind) {
  let str = "model";
  if ("model" === kind.kind) {
    items = [, , , ];
    ({ model: arr2[0], agent: arr2[1], stopReason } = kind);
    if (stopReason == null) {
      stopReason = "";
    }
    items[2] = stopReason;
    let str3 = kind.error;
    if (str3 == null) {
      str3 = "";
    }
    items[3] = str3;
    let items1 = items;
  } else {
    items1 = [, , , ];
    ({ tool: arr[0], agent: arr[1], summary } = kind);
    if (summary == null) {
      summary = "";
    }
    items1[2] = summary;
    let str2 = kind.error;
    if (str2 == null) {
      str2 = "";
    }
    items1[3] = str2;
  }
  if (str === kind.kind) {
    let str6 = "context";
    if ("compaction" !== kind.agent) {
      if ("subagent" === kind.agent) {
        str = "subagent";
      }
      str6 = str;
    }
    let str4 = str6;
  } else {
    str4 = "tool";
    if ("subagent" === kind.agent) {
      str4 = "delegated";
    }
  }
  items1.push(str4);
  return items1.join(" ").toLowerCase();
}
let items = ["model", "tool", "subagent", "delegated", "context"];
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTraceUtils.tsx");

export { traceCategory };
export const TRACE_CATEGORIES = items;
export const traceCategoryTotals = function traceCategoryTotals(entries) {
  let obj = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
  const obj2 = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
  const iter = entries[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = traceCategory(nextResult);
    let tmp4 = tmp3;
    let num = nextResult.durationMs;
    if (num == null) {
      num = 0;
    }
    obj[tmp3] = obj[tmp3] + num;
    obj2[tmp4] = obj2[tmp4] + 1;
    continue;
  }
  return items.map((category) => {
    obj = { category, ms: obj[category], calls: obj2[category] };
    return obj;
  });
};
export const groupTraceByTurn = function groupTraceByTurn(stateFromStoresArray) {
  items = [];
  let tmp = null;
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let turnId = nextResult.turnId;
    if (turnId == null) {
      turnId = null;
    }
    let tmp5 = turnId;
    let tmp7 = null != tmp;
    if (tmp7) {
      tmp7 = tmp.turnId === tmp5;
    }
    if (!tmp7) {
      let obj = { turnId: null, entries: null };
      obj.turnId = tmp5;
      obj.entries = [];
      tmp = obj;
      let obj2 = { turnId: tmp5, entries: obj.entries, startedAt: null, spanMs: null };
      obj2.startedAt = tmp3.startedAt;
      let arr = items.push(obj2);
    }
    let entries = tmp.entries;
    let arr2 = entries.push(tmp3);
    continue;
  }
  return items.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.spanMs = groupSpanMs(item.entries);
    return obj;
  });
};
export { traceSearchText };
export const filterTrace = function filterTrace(entries, str) {
  str = str.trim();
  const formatted = str.toLowerCase();
  let found = entries;
  if ("" !== formatted) {
    found = entries.filter((item) => traceSearchText(item).includes(formatted));
  }
  return found;
};
export const traceChildren = function traceChildren(stateFromStoresArray, id) {
  closure_0 = id;
  return stateFromStoresArray.filter((kind) => {
    let tmp = "tool" === kind.kind;
    if (tmp) {
      tmp = kind.parentId === closure_0;
    }
    return tmp;
  });
};
export const findTraceEntry = function findTraceEntry(stateFromStoresArray, entryId) {
  closure_0 = entryId;
  let tmp = null;
  if (null != entryId) {
    let found = stateFromStoresArray.find((id) => id.id === closure_0);
    if (found == null) {
      found = null;
    }
    tmp = found;
  }
  return tmp;
};
export const traceExportPayload = function traceExportPayload(projectId, stateFromStoresArray, date) {
  return JSON.stringify({ kind: "vibegrations.trace", version: 1, project_id: projectId, exported_at: date, note: "Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked \"estimated\" are a chars/4 heuristic measured before sending.", entries: stateFromStoresArray }, null, 2);
};
export const isToolEntry = function isToolEntry(kind) {
  return "tool" === kind.kind;
};
export const isModelEntry = function isModelEntry(kind) {
  return "model" === kind.kind;
};