// === Module 17281: ConjurePerfTraceStats ===

// Module 17281 (ConjurePerfTraceStats)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 13224 */;
import size from "module_2" /* 2 */;

function perfTraceStats(trace) {
  const map = new Map();
  const obj2 = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
  const iter = trace.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let obj5 = ConjurePerfTraceLayout;
    let describePerfSpanResult = obj5.describePerfSpan(nextResult);
    ({ service, category } = describePerfSpanResult);
    let num = map.get(category);
    if (num == null) {
      num = 0;
    }
    let num2 = perfSpanSelfTimesResult.get(tmp2.id);
    if (num2 == null) {
      num2 = 0;
    }
    let result = map.set(category, num + num2);
    if ("model" === service) {
      obj2.calls = obj2.calls + 1;
      obj2.input = obj2.input + numberAttr(tmp2, "in");
      obj2.output = obj2.output + numberAttr(tmp2, "out");
      obj2.cacheRead = obj2.cacheRead + numberAttr(tmp2, "cache_read");
      obj2.cacheWrite = obj2.cacheWrite + numberAttr(tmp2, "cache_write");
      obj2.costUsd = obj2.costUsd + numberAttr(tmp2, "cost_usd");
    }
    continue;
  }
  const PERF_CATEGORIES = ConjurePerfTraceLayout.PERF_CATEGORIES;
  const mapped = PERF_CATEGORIES.map((category) => {
    const obj = { category, ms: null };
    let num = map.get(category);
    if (num == null) {
      num = 0;
    }
    obj.ms = num;
    return obj;
  });
  perfSpanSelfTimesResult = ConjurePerfTraceLayout.perfSpanSelfTimes(trace);
  return { categories: mapped, busyMs: mapped.reduce((acc, ms) => acc + ms.ms, 0), model: obj2 };
}
function numberAttr(attrs, cache_read) {
  attrs = attrs.attrs;
  let tmp;
  if (attrs != null) {
    tmp = attrs[cache_read];
  }
  let num = 0;
  if (typeof tmp === "number") {
    num = tmp;
  }
  return num;
}
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceStats.tsx");

export { perfTraceStats };
export const sumPerfTraceStats = function sumPerfTraceStats(filterPerfTracesResult) {
  const mapped = filterPerfTracesResult.map(perfTraceStats);
  const obj = { categories: null, busyMs: null, model: null };
  const PERF_CATEGORIES = ConjurePerfTraceLayout.PERF_CATEGORIES;
  obj.categories = PERF_CATEGORIES.map((category) => {
    const f149102 = (categories) => {
      categories = categories.categories;
      const found = categories.find((category) => category.category === closure_1_0);
      let num;
      if (found != null) {
        num = found.ms;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    return { category, ms: f128717.reduce((acc, item) => acc + f149102(item), 0) };
  });
  let f128717 = (busyMs) => busyMs.busyMs;
  obj.busyMs = mapped.reduce((acc, item) => acc + f149102(item), 0);
  f128717 = (model) => model.model.costUsd;
  obj.model = { calls: mapped.reduce((acc, item) => acc + f149102(item), 0), input: mapped.reduce((acc, item) => acc + f149102(item), 0), output: mapped.reduce((acc, item) => acc + f149102(item), 0), cacheRead: mapped.reduce((acc, item) => acc + f149102(item), 0), cacheWrite: mapped.reduce((acc, item) => acc + f149102(item), 0), costUsd: mapped.reduce((acc, item) => acc + f149102(item), 0) };
  return obj;
};