// === Module 17863: NavigationSpanTracker ===

// Module 17863 (NavigationSpanTracker)
import v1 from "v1" /* 1256 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 17864 */;
import size from "module_2" /* 2 */;

class NavigationSpanTracker {
  constructor() {
    merged = Object.assign({ active: null, lastBundle: null, listeners: null });
    set = new Set();
    merged[2] = set;
    return merged;
  }
}
const prototype = NavigationSpanTracker.prototype;
prototype["getLastBundle"] = function getLastBundle() {
  return this.lastBundle;
};
prototype["subscribe"] = function subscribe(arg0) {
  const self = this;
  closure_0 = arg0;
  let listeners = this.listeners;
  listeners.add(arg0);
  return () => {
    const listeners = self.listeners;
    listeners.delete(closure_0);
  };
};
prototype["beginNavigation"] = function beginNavigation(arg0) {
  const self = this;
  if (null != this.active) {
    self.flush("interrupted");
  }
  const timestamp = Date.now();
  const obj = { traceId: null, navigationSpanId: null, spanTtiName: null, destinationKey: null, properties: null, startEpochMs: null, startMonotonicMs: null, deadlineTimer: null };
  const nowResult = performance.now();
  obj.traceId = v1.v4();
  obj.navigationSpanId = v1.v4();
  ({ spanTtiName: obj.spanTtiName, destinationKey: obj.destinationKey, properties: obj.properties } = arg0);
  obj.startEpochMs = timestamp;
  obj.startMonotonicMs = nowResult;
  obj.deadlineTimer = setTimeout(() => self.flush("deadline_exceeded"), 30000);
  self.active = obj;
  self.publishLive();
};
prototype["publishLive"] = function publishLive() {
  const self = this;
  if (null != this.active) {
    self.lastBundle = self.buildBundle(self.active, self.active.spanTtiName, false, null);
    self.notify();
  }
};
prototype["flush"] = function flush(arg0) {
  const self = this;
  let str = this.active;
  if (null != str) {
    if (null != str.deadlineTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(str.deadlineTimer);
    }
    self.active = null;
    if ("deadline_exceeded" === arg0) {
      let INTERRUPTED = NavigationSpanTypes.NavigationSpanStatus.DEADLINE_EXCEEDED;
    } else {
      INTERRUPTED = NavigationSpanTypes.NavigationSpanStatus.INTERRUPTED;
    }
    const bundle = self.buildBundle(str, str.spanTtiName, true, INTERRUPTED);
    self.lastBundle = bundle;
    const navigation = bundle.navigation;
    let items = ["event", navigation.spanTtiName];
    const items1 = [items, ];
    const _String = String;
    const items2 = ["settled", String(bundle.settled)];
    items1[1] = items2;
    const _Object = Object;
    const entries = Object.entries(navigation.spanTtiProperties);
    HermesBuiltin.arraySpread(entries.map((item) => {
      [tmp, str] = item;
      const items = [tmp, String(str)];
      return items;
    }), 2);
    const _Math = Math;
    const items3 = [5];
    HermesBuiltin.arraySpread(items1.map((item) => {
      [arr] = item;
      return arr.length;
    }), 1);
    const _Math2 = Math;
    const applyResult = HermesBuiltin.apply(items3, Math);
    c0 = applyResult;
    const padEnd = "field".padEnd;
    "field".padEnd(applyResult);
    str = "-";
    const repeat = "-".repeat;
    "-".repeat(applyResult);
    const mapped = items1.map((item) => {
      [obj, tmp] = item;
      return "  " + obj.padEnd(c0) + "  " + tmp;
    });
    self.notify();
  }
};
prototype["notify"] = function notify() {
  for (const item10006 of tmp) {
    let item10006Result = item10006();
    continue;
  }
};
prototype["buildBundle"] = function buildBundle(active, spanTtiName, settled, INTERRUPTED) {
  let num = 0;
  ({ startEpochMs, navigationSpanId, traceId } = active);
  if (settled) {
    const _Math = Math;
    const _Math2 = Math;
    const _performance = performance;
    num = Math.max(0, Math.round(performance.now() - tmp));
  }
  let obj = { navigation: null, settled: null };
  obj = { spanTtiName, spanTtiProperties: null };
  obj = {};
  const merged = Object.assign(active.properties);
  obj.trace_id = traceId;
  obj.span_id = navigationSpanId;
  obj.parent_span_id = null;
  obj.span_name = spanTtiName;
  obj.start_ms = 0;
  obj.end_ms = num;
  obj.first_paint_ms = null;
  obj.first_contentful_paint_ms = null;
  obj.largest_contentful_paint_ms = null;
  obj.interactive_ms = null;
  obj.trace_start_timestamp_ms = startEpochMs;
  obj.span_status = INTERRUPTED;
  obj.spanTtiProperties = obj;
  obj.navigation = obj;
  obj.settled = settled;
  return obj;
};
let merged = Object.assign({ active: null, lastBundle: null, listeners: null });
merged[2] = new Set();
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationSpanTracker.tsx");

export default merged;