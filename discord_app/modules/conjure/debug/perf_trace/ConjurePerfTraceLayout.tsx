// discord_app/modules/conjure/debug/perf_trace/ConjurePerfTraceLayout.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

function walkNodes(findPerfTraceNodeResult, fn) {
  fn(findPerfTraceNodeResult);
  while (tmp2 !== undefined) {
    let tmp5 = walkNodes(tmp3, fn);
    continue;
  }
  tmp2 = findPerfTraceNodeResult.children[Symbol.iterator]();
}
function describeName(name) {
  name = name.name;
  const searchResult = name.search(/[.:]/);
  const name1 = name.name;
  if (-1 === searchResult) {
    let substr = name1;
  } else {
    substr = name1.slice(0, searchResult);
  }
  let str = "";
  if (-1 !== searchResult) {
    const name2 = name.name;
    str = name2.slice(searchResult + 1);
  }
  const str2 = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  const formatted = str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .toLowerCase();
  const attrs = name.attrs;
  let cmd;
  if (attrs != null) {
    cmd = attrs.cmd;
  }
  if (cmd == null) {
    const attrs2 = name.attrs;
    let model;
    if (attrs2 != null) {
      model = attrs2.model;
    }
    cmd = model;
  }
  const obj = { service: substr, operation: null, category: null };
  let combined = formatted;
  if (typeof cmd === "string") {
    combined = formatted;
    if ("" !== cmd) {
      const _HermesInternal = HermesInternal;
      combined = "" + formatted + " \u00B7 " + cmd;
    }
  }
  obj.operation = combined;
  let str5 = closure_1[substr];
  if (str5 == null) {
    str5 = "other";
  }
  obj.category = str5;
  return obj;
}
function foldKey(attrs) {
  attrs = attrs.attrs;
  let str = "";
  if (null != attrs) {
    const _Object = Object;
    const entries = Object.entries(attrs);
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      combined = tmp;
      if (true !== tmp2) {
        const _String = String;
        const _HermesInternal = HermesInternal;
        combined = "" + tmp + "=" + String(tmp2);
      }
      return combined;
    });
    str = mapped.join(" ");
  }
  return "" + attrs.name + " " + str;
}
function childrenByParent(spans) {
  const map = new Map();
  const iter = spans.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let items = map.get(nextResult.parent);
    if (items == null) {
      items = [];
    }
    let arr = items.push(tmp2);
    let result = map.set(tmp2.parent, items);
    continue;
  }
  const values = map.values();
  for (const item10032 of values) {
    let sorted = item10032.sort((start, start2) => start.start - start2.start);
    continue;
  }
  return map;
}
function spanEnd(reported_at, end) {
  reported_at = end.end;
  if (reported_at == null) {
    reported_at = reported_at.reported_at;
  }
  return reported_at;
}
function coveredMs(items, arr, applyResult, applyResult1) {
  let reported_at = items;
  closure_1 = applyResult;
  closure_2 = applyResult1;
  const mapped = arr.map((start) => {
    const items = [Math.max(start.start, closure_1)];
    reported_at = start.end;
    if (reported_at == null) {
      reported_at = reported_at.reported_at;
    }
    items[1] = Math.min(reported_at, closure_2);
    return items;
  });
  const found = mapped.filter((item) => {
    [tmp, tmp2] = item;
    return tmp2 > tmp;
  });
  const sorted = found.sort((arg0, arg1) => arg0[0] - arg1[0]);
  let num = 0;
  let num2 = -Infinity;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7 > num2) {
      let _Math = Math;
      num = num + (tmp7 - Math.max(tmp6, num2));
      num2 = tmp7;
    }
    continue;
  }
  return num;
}
let closure_1 = {
  op: "op",
  ws: "op",
  turn: "op",
  alarm: "op",
  side_chat: "op",
  session: "op",
  step: "op",
  model: "model",
  version_note: "model",
  tool: "tool",
  mcp: "tool",
  sandbox: "sandbox",
  worktree: "worktree",
  build: "build",
  deps: "build",
  api: "platform",
  state: "platform",
  publish: "platform",
  preview: "platform",
  healthcheck: "platform",
  usage: "platform",
  live: "platform",
  replay: "platform",
  template: "setup",
  workspace: "setup",
  declarations: "setup",
  manifest: "setup",
  storage: "setup",
  conversation: "setup",
  runtime: "setup",
  attachments: "setup",
  upstream: "setup",
  remix: "setup",
  repo: "setup",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceLayout.tsx");

export const PERF_CATEGORIES = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"];
export const perfTraceRoot = function perfTraceRoot(spans) {
  spans = spans.spans;
  let found = spans.find((parent) => null == parent.parent);
  if (found == null) {
    found = null;
  }
  return found;
};
export const perfTraceExtent = function perfTraceExtent(trace) {
  const spans = trace.spans;
  const items = [1];
  HermesBuiltin.arraySpread(
    spans.map((end) => {
      let reported_at = end.end;
      if (reported_at == null) {
        reported_at = trace.reported_at;
      }
      return reported_at;
    }),
    1,
  );
  return Math.max.apply(items);
};
export const perfTraceStatus = function perfTraceStatus(trace) {
  const spans = trace.spans;
  let str = "error";
  if (!spans.some((error) => null != error.error)) {
    const spans1 = trace.spans;
    let found = spans1.find((parent) => null == parent.parent);
    if (found == null) {
      found = null;
    }
    let ok;
    if (found != null) {
      const attrs = found.attrs;
      if (attrs != null) {
        ok = attrs.ok;
      }
    }
    str = "error";
    if (false !== ok) {
      const spans2 = trace.spans;
      let str2 = "ok";
      if (spans2.some((end) => null == end.end)) {
        str2 = "started";
      }
      str = str2;
    }
  }
  return str;
};
export const perfTraceTree = function perfTraceTree(spans) {
  closure_0 = spans;
  function isLeaf(buildResult) {
    const hasItem = map.has(buildResult.id);
    let tmp2 = !hasItem;
    if (!hasItem) {
      tmp2 = null != buildResult.end;
    }
    if (tmp2) {
      tmp2 = null == buildResult.error;
    }
    return tmp2;
  }
  childrenByParent(spans);
  spans = spans.spans;
  let found = spans.find((parent) => null == parent.parent);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    return null;
  } else {
    function build(items, arg1, arg2, arg3) {
      let tmp = arg1;
      map = arg1;
      closure_2 = arg2;
      let first = items[0];
      items = [...items.map((start) => start.start)];
      const applyResult = Math.min.apply(items);
      const items1 = [
        ...items.map((end) => {
          let reported_at = end.end;
          if (reported_at == null) {
            reported_at = items.reported_at;
          }
          return reported_at;
        }),
      ];
      let applyResult1 = Math.max.apply(items1);
      let mapped = items.map((end) => {
        let reported_at = end.end;
        if (reported_at == null) {
          reported_at = items.reported_at;
        }
        return reported_at - end.start;
      });
      if (1 === items.length) {
        let items4 = map.get(first.id);
        if (items4 == null) {
          items4 = [];
        }
        let items2 = items4;
      } else {
        items2 = [];
      }
      if (1 === items.length) {
        const _HermesInternal2 = HermesInternal;
        let combined = "span-" + first.id;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "fold-" + first.id;
      }
      const obj = {
        key: combined,
        depth: tmp,
        span: first,
        count: items.length,
        start: applyResult,
        end: applyResult1,
        totalMs: mapped.reduce((acc, item) => acc + item, 0),
        maxMs: null,
        selfMs: null,
        running: null == first.end,
        failed: null != first.error,
        parallel: null,
        outlivedParent: applyResult1 > arg3,
      };
      const items3 = [...mapped];
      obj.maxMs = Math.max.apply(items3);
      const diff = applyResult1 - applyResult;
      obj.selfMs = diff - coveredMs(items, items2, applyResult, applyResult1);
      tmp = null;
      mapped = items.some;
      obj.parallel = mapped((arg0) => {
        closure_0 = arg0;
        return closure_2.some((end) => {
          const hasItem = closure_0.includes(end);
          let tmp2 = !hasItem;
          if (!hasItem) {
            let reported_at = end.end;
            if (reported_at == null) {
              reported_at = closure_0.reported_at;
            }
            let tmp6 = closure_0.start < reported_at;
            if (tmp6) {
              let reported_at2 = closure_0.end;
              if (reported_at2 == null) {
                reported_at2 = closure_0.reported_at;
              }
              tmp6 = end.start < reported_at2;
            }
            tmp2 = tmp6;
          }
          return tmp2;
        });
      });
      const merged = Object.assign(closure_3(first));
      obj.significant = false;
      obj.children = [];
      obj.descendants = 0;
      map = new Map();
      applyResult1 = map;
      first = items2[Symbol.iterator]();
    }
    let items = [found];
    const buildResult = build(items, 0, [], Infinity);
    closure_3 = 0.1 * (buildResult.end - buildResult.start);
    isLeaf(buildResult, (count) => {
      if (count.count > 1) {
        let totalMs = count.totalMs;
      } else {
        totalMs = count.end - count.start;
      }
      count.significant = totalMs >= closure_3;
    });
    return buildResult;
  }
};
export const visiblePerfTraceRows = function visiblePerfTraceRows(cResult, arg1) {
  collapsed = arg1;
  let items = [];
  function walk(key) {
    collapsed = key;
    function flush() {
      if (1 === closure_1.length) {
        walk(closure_1[0]);
      } else if (closure_1.length > 1) {
        const obj = {
          kind: "smaller",
          key: null,
          parentKey: null,
          depth: null,
          count: null,
          start: null,
          end: null,
          totalMs: null,
        };
        const _HermesInternal = HermesInternal;
        obj.key = "smaller-" + closure_1[0].key;
        obj.parentKey = key.key;
        obj.depth = key.depth + 1;
        obj.count = closure_1.reduce((acc, count) => acc + count.count, 0);
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(
          closure_1.map((start) => start.start),
          0,
        );
        const _Math2 = Math;
        obj.start = HermesBuiltin.apply(items, Math);
        const _Math3 = Math;
        const items1 = [];
        HermesBuiltin.arraySpread(
          closure_1.map((end) => end.end),
          0,
        );
        const _Math4 = Math;
        obj.end = HermesBuiltin.apply(items1, Math);
        obj.totalMs = closure_1.reduce((acc, count) => {
          if (count.count > 1) {
            let totalMs = count.totalMs;
          } else {
            totalMs = count.end - count.start;
          }
          return acc + totalMs;
        }, 0);
        items.push(obj);
      }
      closure_1 = [];
    }
    items.push({ kind: "node", key: key.key, node: key });
    collapsed = collapsed.collapsed;
    if (!collapsed.has(key.key)) {
      const revealed = tmp2.revealed;
      items = [];
      const children = key.children;
      const hasItem = revealed.has(key.key);
      const iter = children[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (!hasItem) {
          if (!tmp8.significant) {
            let arr2 = items.push(tmp8);
          }
          continue;
        }
        let flushResult = flush();
        let tmp16 = walk(tmp8);
      }
      flush();
    }
    let obj = { kind: "node", key: key.key, node: key };
    tmp2 = collapsed;
  }
  walk(cResult);
  return items;
};
export const overviewView = function overviewView(children) {
  const obj = { collapsed: null, revealed: null };
  const f127898 = (depth) => {
    let tmp = depth.depth > 0;
    if (tmp) {
      const children = depth.children;
      tmp = !children.some((significant) => significant.significant);
    }
    return tmp;
  };
  const set = new Set();
  function walk(children) {
    let tmp = children.children.length > 0;
    if (tmp) {
      tmp = f127900(children);
    }
    if (tmp) {
      set.add(children.key);
    }
    for (const item10016 of tmp5) {
      let tmp7 = walk(item10016);
      continue;
    }
  }
  walk(children);
  obj.collapsed = set;
  obj.revealed = new Set();
  return obj;
};
export const expandedView = function expandedView(children) {
  const obj = { collapsed: new Set(), revealed: null };
  const f127899 = () => true;
  const set1 = new Set();
  function walk(children) {
    let tmp = children.children.length > 0;
    if (tmp) {
      tmp = f127900(children);
    }
    if (tmp) {
      set.add(children.key);
    }
    for (const item10016 of tmp5) {
      let tmp7 = walk(item10016);
      continue;
    }
  }
  walk(children);
  obj.revealed = set1;
  return obj;
};
export const collapsedView = function collapsedView(children) {
  const obj = { collapsed: null, revealed: null };
  const f127900 = (depth) => depth.depth > 0;
  const set = new Set();
  function walk(children) {
    let tmp = children.children.length > 0;
    if (tmp) {
      tmp = f127900(children);
    }
    if (tmp) {
      set.add(children.key);
    }
    for (const item10016 of tmp5) {
      let tmp7 = walk(item10016);
      continue;
    }
  }
  walk(children);
  obj.collapsed = set;
  obj.revealed = new Set();
  return obj;
};
export const expandSubtree = function expandSubtree(collapsed, findPerfTraceNodeResult) {
  collapsed = new Set(collapsed.collapsed);
  const revealed = new Set(collapsed.revealed);
  walkNodes(findPerfTraceNodeResult, (key) => {
    collapsed.delete(key.key);
    revealed.add(key.key);
  });
  return { collapsed, revealed };
};
export const findPerfTraceNode = function findPerfTraceNode(findPerfTraceNodeResult, arg1) {
  closure_0 = arg1;
  closure_1 = null;
  walkNodes(findPerfTraceNodeResult, (key) => {
    if (key.key === closure_0) {
      closure_1 = key;
    }
  });
  return closure_1;
};
export const perfTraceSelfTimes = function perfTraceSelfTimes(trace, arg1) {
  const map = new Map();
  const iter = trace.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.parent) {
      let tmp15 = spanEnd(trace, tmp2);
      let tmp16 = tmp15;
      let diff = tmp15 - tmp2.start;
      let items1 = obj.get(tmp2.id);
      if (items1 == null) {
        items1 = [];
      }
      let diff1 = diff - coveredMs(trace, items1, tmp2.start, tmp16);
      let tmp9 = describeName(tmp2);
      let _HermesInternal = HermesInternal;
      let combined = "" + tmp9.service + " " + tmp9.operation;
      let num2 = map.get(combined);
      if (num2 == null) {
        num2 = 0;
      }
      let result = map.set(combined, num2 + diff1);
    }
    continue;
  }
  const items = [...map.entries()];
  const mapped = items.map((item) => {
    [tmp, tmp2] = item;
    return { name, ms };
  });
  const sorted = mapped.sort((ms, ms2) => ms2.ms - ms.ms);
  return sorted.slice(0, arg1);
};
export const perfTimelineTicks = function perfTimelineTicks(arg0) {
  const result = arg0 / 6;
  _slicedToArray = result;
  closure_1 = 10 ** Math.floor(Math.log10(result));
  const items = [1, 2, 5, 10];
  const mapped = items.map((item) => item * closure_1);
  let found = mapped.find((item) => item >= result);
  if (found == null) {
    found = result;
  }
  const items1 = [];
  for (let num = 0; num <= arg0; num = num + found) {
    let arr = items1.push(num);
  }
  return items1;
};
export const formatSpanAttrs = function formatSpanAttrs(attrs) {
  let str = "";
  if (null != attrs) {
    const _Object = Object;
    const entries = Object.entries(attrs);
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      combined = tmp;
      if (true !== tmp2) {
        const _String = String;
        const _HermesInternal = HermesInternal;
        combined = "" + tmp + "=" + String(tmp2);
      }
      return combined;
    });
    str = mapped.join(" ");
  }
  return str;
};
