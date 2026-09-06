// === Module 17863: getLastBundle ===

// Module 17863 (getLastBundle)
import set from "set" /* 2 */;

class NavigationSpanTracker {
  constructor() {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[2] = set;
    return obj;
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
  let self = this;
  self = this;
  if (null != this.active) {
    self.flush("interrupted");
  }
  const timestamp = Date.now();
  const obj = { traceId: null, navigationSpanId: null, spanTtiName: null, destinationKey: null, properties: null, startEpochMs: null, startMonotonicMs: null, deadlineTimer: null };
  const nowResult = performance.now();
  obj[0] = self(1256).v4();
  const obj2 = self(1256);
  obj[1] = self(1256).v4();
  ({ spanTtiName: obj[2], destinationKey: obj[3], properties: obj[4] } = arg0);
  obj[5] = timestamp;
  obj[6] = nowResult;
  obj[7] = setTimeout(() => self.flush("deadline_exceeded"), 30000);
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
      let INTERRUPTED = _require(17864).NavigationSpanStatus.DEADLINE_EXCEEDED;
    } else {
      INTERRUPTED = _require(17864).NavigationSpanStatus.INTERRUPTED;
    }
    const bundle = self.buildBundle(str, str.spanTtiName, true, INTERRUPTED);
    self.lastBundle = bundle;
    _require = undefined;
    const navigation = bundle.navigation;
    let items = ["event", navigation.spanTtiName];
    const items1 = [items, ];
    const _String = String;
    const items2 = ["settled", String(bundle.settled)];
    items1[1] = items2;
    const _Object = Object;
    const entries = Object.entries(navigation.spanTtiProperties);
    HermesBuiltin.arraySpread(entries.map((arg0) => {
      [tmp, str] = arg0;
      const items = [tmp, String(str)];
      return items;
    }), 2);
    const _Math = Math;
    const items3 = [5];
    HermesBuiltin.arraySpread(items1.map((arg0) => {
      [arr] = arg0;
      return arr.length;
    }), 1);
    const _Math2 = Math;
    const applyResult = HermesBuiltin.apply(items3, Math);
    _require = applyResult;
    const padEnd = "field".padEnd;
    "field".padEnd(applyResult);
    str = "-";
    const repeat = "-".repeat;
    "-".repeat(applyResult);
    const mapped = items1.map((arg0) => {
      [obj, tmp] = arg0;
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
prototype["buildBundle"] = function buildBundle(active, spanTtiName, arg2, INTERRUPTED) {
  let num = 0;
  ({ startEpochMs, navigationSpanId, traceId } = active);
  if (arg2) {
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
  obj[1] = obj;
  obj[0] = obj;
  obj[1] = arg2;
  return obj;
};
let obj = Object.create(NavigationSpanTracker.prototype);
let set = new Set();
obj[2] = set;
const result = set.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationSpanTracker.tsx");

export default obj;