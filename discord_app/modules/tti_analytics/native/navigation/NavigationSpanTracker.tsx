// === Module 11443: NavigationSpanTracker ===

// Module 11443 (NavigationSpanTracker)
import LoggerDefault from "Logger" /* 3 */;
import v1 from "v1" /* 1279 */;
import NavigationTTIAnalytics from "NavigationTTIAnalytics" /* 11444 */;
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze" /* 11445 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 11446 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_2 = ["spanComponentName", "measurementSource", "lateLayoutMs"];
let obj = new LoggerDefault("NavTTI");
obj.enableNativeLogger(true);
class NavigationSpanTracker {
  constructor() {
    merged = Object.assign({ active: null, lastBundle: null, lastBundleSurfaceKey: null, listenersBySurface: null, debugBundleListeners: null });
    map = new Map();
    merged[3] = map;
    set = new Set();
    merged[4] = set;
    return merged;
  }
}
const prototype = NavigationSpanTracker.prototype;
prototype["getLastBundle"] = function getLastBundle() {
  return this.lastBundle;
};
prototype["getLastBundleForSurface"] = function getLastBundleForSurface(definition, navigationKey) {
  let lastBundle = null;
  if (this.lastBundleSurfaceKey === this.getSurfaceKey(definition, navigationKey)) {
    lastBundle = this.lastBundle;
  }
  return lastBundle;
};
prototype["getActiveTraceId"] = function getActiveTraceId(definition, navigationKey) {
  const self = this;
  const active = this.active;
  if (null == active) {
    return null;
  } else {
    let traceId = null;
    if (active.surfaceKey === self.getSurfaceKey(definition, navigationKey)) {
      traceId = active.traceId;
    }
    return traceId;
  }
};
prototype["getActiveTraceElapsedMs"] = function getActiveTraceElapsedMs(traceId, endMonotonicMs) {
  const active = this.active;
  traceId = undefined;
  if (active != null) {
    traceId = active.traceId;
  }
  let bound = null;
  if (traceId === traceId) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(0, Math.round(endMonotonicMs - this.active.startMonotonicMs));
  }
  return bound;
};
prototype["subscribe"] = function subscribe(definition, destinationKey, arg2) {
  const self = this;
  closure_1 = arg2;
  const surfaceKey = this.getSurfaceKey(definition, destinationKey);
  let listenersBySurface = this.listenersBySurface;
  value = listenersBySurface.get(surfaceKey);
  let set = value;
  obj = value;
  if (null == value) {
    const _Set = Set;
    set = new Set();
    const listenersBySurface2 = this.listenersBySurface;
    const result = listenersBySurface2.set(surfaceKey, set);
    obj = set;
  }
  obj.add(arg2);
  c0 = true;
  return () => {
    if (c0) {
      c0 = false;
      set.delete(closure_1);
      if (0 === set.size) {
        const listenersBySurface = self.listenersBySurface;
        listenersBySurface.delete(surfaceKey);
      }
    }
  };
};
prototype["subscribeDebugBundle"] = function subscribeDebugBundle(arg0) {
  const self = this;
  closure_0 = arg0;
  let tmp = 0 === this.debugBundleListeners.size;
  if (tmp) {
    tmp = null != self.active;
  }
  let debugBundleListeners = self.debugBundleListeners;
  debugBundleListeners.add(arg0);
  if (tmp) {
    tmp = null != self.active;
  }
  if (tmp) {
    ({ setLastBundle, active } = self);
    setLastBundle(active, self.buildBundle(self.active, false, null));
  }
  return () => {
    const debugBundleListeners = self.debugBundleListeners;
    debugBundleListeners.delete(closure_0);
  };
};
prototype["beginNavigation"] = function beginNavigation(definition) {
  const self = this;
  if (null != this.active) {
    self.flush("interrupted", { notifySubscribers: false });
  }
  const timestamp = Date.now();
  const active = { traceId: null, navigationSpanId: null, surfaceKey: null, definition: null, destinationKey: null, properties: null, startEpochMs: null, startMonotonicMs: null, components: null, firstPaint: null, contentReadyAtMonotonicMs: null, contentChangesetRequired: false, minimumContentChangesetUpdateId: null, firstContentfulPaintMs: null, deadlineTimer: null };
  const nowResult = performance.now();
  active.traceId = v1.v4();
  active.navigationSpanId = v1.v4();
  active.surfaceKey = self.getSurfaceKey(definition.definition, definition.destinationKey);
  ({ definition: obj.definition, destinationKey: obj.destinationKey, properties: obj.properties } = definition);
  active.startEpochMs = timestamp;
  active.startMonotonicMs = nowResult;
  active.components = [];
  active.deadlineTimer = setTimeout(() => self.flush("deadline_exceeded"), 30000);
  self.active = active;
  self.publishTraceState();
  const traceId = self.active.traceId;
  const result = NavigationTTIDebugFreeze.emitNavigationTTIDebugCheckpoint({ kind: "milestone", name: "time_start", traceId, destinationKey: self.active.destinationKey }, () => self.logActiveBundle(traceId));
};
prototype["recordComponentSpan"] = function recordComponentSpan(trace_id, endMonotonicMs) {
  const self = this;
  closure_0 = trace_id;
  const active = this.active;
  let traceId;
  if (active != null) {
    traceId = active.traceId;
  }
  if (traceId !== trace_id) {
    return false;
  } else {
    const _Number = Number;
    if (Number.isFinite(endMonotonicMs.endMonotonicMs)) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, Math.round(endMonotonicMs.endMonotonicMs - active.startMonotonicMs));
      const components = active.components;
      obj = { spanComponentName: active.definition.componentEventName, trace_id, span_id: v1.v4(), parent_span_id: active.navigationSpanId, span_name: endMonotonicMs.spanComponent, end_ms: bound, trace_start_timestamp_ms: active.startEpochMs, measurementSource: endMonotonicMs.measurementSource, lateLayoutMs: null };
      components.push(obj);
      if (tmp7) {
        const obj3 = { spanComponent: endMonotonicMs.spanComponent, atMs: bound };
        active.firstPaint = obj3;
      }
      self.publishDebugBundle();
      function logActiveBundle() {
        return self.logActiveBundle(closure_0);
      }
      const tmp2 = null == active.firstPaint && null == active.firstContentfulPaintMs;
      tmp7 = null == active.firstPaint || bound < active.firstPaint.atMs;
      const obj4 = { kind: "component", spanComponent: endMonotonicMs.spanComponent, traceId: trace_id, destinationKey: active.destinationKey };
      const result = NavigationTTIDebugFreeze.emitNavigationTTIDebugCheckpoint(obj4, logActiveBundle);
      if (tmp2) {
        const obj5 = { kind: "milestone", name: "first_paint", traceId: trace_id, destinationKey: active.destinationKey };
        const result1 = NavigationTTIDebugFreeze.emitNavigationTTIDebugCheckpoint(obj5, logActiveBundle);
        const tmp4Result2 = NavigationTTIDebugFreeze;
      }
      const result2 = self.tryRecordContentPainted(active);
      return true;
    } else {
      return false;
    }
  }
};
prototype["requireContentChangeset"] = function requireContentChangeset(activeTraceId) {
  const active = this.active;
  let traceId;
  if (active != null) {
    traceId = active.traceId;
  }
  let flag = traceId === activeTraceId && null == active.firstContentfulPaintMs;
  if (flag) {
    active.contentChangesetRequired = true;
    active.contentReadyAtMonotonicMs = null;
    flag = true;
  }
  return flag;
};
prototype["recordExpectedChangeset"] = function recordExpectedChangeset(activeTraceId, arg1) {
  const active = this.active;
  let traceId;
  if (active != null) {
    traceId = active.traceId;
  }
  let tmp2 = traceId !== activeTraceId || null != active.firstContentfulPaintMs;
  if (!tmp2) {
    const _Number = Number;
    tmp2 = !Number.isInteger(arg1);
  }
  let flag = !tmp2;
  if (!tmp2) {
    active.contentChangesetRequired = true;
    let num = active.minimumContentChangesetUpdateId;
    if (num == null) {
      num = 0;
    }
    active.minimumContentChangesetUpdateId = Math.max(num, arg1);
    active.contentReadyAtMonotonicMs = null;
    flag = true;
  }
  return flag;
};
prototype["recordExpectedChangesetForDestination"] = function recordExpectedChangesetForDestination(CHANNEL_NAVIGATION_TTI, channelId, arg2) {
  const self = this;
  const activeTraceId = this.getActiveTraceId(CHANNEL_NAVIGATION_TTI, channelId);
  let result = null != activeTraceId;
  if (result) {
    result = self.recordExpectedChangeset(activeTraceId, arg2);
  }
  return result;
};
prototype["recordContentPaintedWhenReady"] = function recordContentPaintedWhenReady(activeTraceId, monotonicTimestamp, changesetUpdateId) {
  const self = this;
  const active = this.active;
  let traceId;
  if (active != null) {
    traceId = active.traceId;
  }
  let tmp2 = traceId !== activeTraceId;
  if (!tmp2) {
    const _Number = Number;
    tmp2 = !Number.isFinite(monotonicTimestamp);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    const contentChangesetRequired = active.contentChangesetRequired;
    let flag = !contentChangesetRequired;
    if (contentChangesetRequired) {
      flag = !(null == active.minimumContentChangesetUpdateId || null == changesetUpdateId || changesetUpdateId < active.minimumContentChangesetUpdateId);
      const tmp6 = null == active.minimumContentChangesetUpdateId || null == changesetUpdateId || changesetUpdateId < active.minimumContentChangesetUpdateId;
    }
    if (flag) {
      let bound = monotonicTimestamp;
      if (null != active.contentReadyAtMonotonicMs) {
        const _Math = Math;
        bound = Math.min(active.contentReadyAtMonotonicMs, monotonicTimestamp);
      }
      active.contentReadyAtMonotonicMs = bound;
      const result = self.tryRecordContentPainted(active);
      flag = true;
    }
    tmp4 = flag;
  }
  return tmp4;
};
prototype["clearContentPaintedReadiness"] = function clearContentPaintedReadiness(activeTraceId) {
  const active = this.active;
  let traceId;
  if (active != null) {
    traceId = active.traceId;
  }
  let flag = traceId === activeTraceId && null == active.firstContentfulPaintMs;
  if (flag) {
    active.contentReadyAtMonotonicMs = null;
    flag = true;
  }
  return flag;
};
prototype["tryRecordContentPainted"] = function tryRecordContentPainted(active) {
  ({ contentReadyAtMonotonicMs, firstPaint } = active);
  if (null != contentReadyAtMonotonicMs) {
    if (null != firstPaint) {
      const self = this;
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const result = this.recordContentPaintedOffset(active, Math.max(firstPaint.atMs, Math.max(0, Math.round(contentReadyAtMonotonicMs - active.startMonotonicMs))));
    }
  }
};
prototype["recordContentPaintedOffset"] = function recordContentPaintedOffset(firstContentfulPaintMs, arg1) {
  const self = this;
  firstContentfulPaintMs = firstContentfulPaintMs.firstContentfulPaintMs;
  let bound = arg1;
  if (null != firstContentfulPaintMs) {
    const _Math = Math;
    bound = Math.min(firstContentfulPaintMs, arg1);
  }
  firstContentfulPaintMs.firstContentfulPaintMs = bound;
  self.publishDebugBundle();
  if (null == firstContentfulPaintMs) {
    const traceId = firstContentfulPaintMs.traceId;
    const obj2 = { kind: "milestone", name: "first_contentful_paint", traceId, destinationKey: firstContentfulPaintMs.destinationKey };
    const result = NavigationTTIDebugFreeze.emitNavigationTTIDebugCheckpoint(obj2, () => self.logActiveBundle(traceId));
  }
};
prototype["recordLateComponentLayout"] = function recordLateComponentLayout(traceId, spanComponent, endMonotonicMs) {
  const active = this.active;
  traceId = undefined;
  if (active != null) {
    traceId = active.traceId;
  }
  if (traceId === traceId) {
    const _Number = Number;
    if (Number.isFinite(endMonotonicMs)) {
      let diff = active.components.length - 1;
      if (0 <= diff) {
        while (true) {
          let tmp3 = active.components[diff];
          let span_name;
          if (tmp3 != null) {
            span_name = tmp3.span_name;
          }
          if (span_name === spanComponent) {
            if (tmp3.measurementSource !== NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT) {
              if (null == tmp3.lateLayoutMs) {
                break;
              }
            }
          }
          diff = diff - 1;
        }
        const _Math = Math;
        const _Math2 = Math;
        tmp3.lateLayoutMs = Math.max(0, Math.round(endMonotonicMs - active.startMonotonicMs));
        return true;
      }
      return false;
    }
  }
  return false;
};
prototype["publishDebugBundle"] = function publishDebugBundle() {
  const self = this;
  let tmp = null != this.active;
  if (tmp) {
    tmp = 0 !== self.debugBundleListeners.size;
  }
  if (tmp) {
    ({ setLastBundle, active } = self);
    setLastBundle(active, self.buildBundle(self.active, false, null));
    self.notifyDebugBundle();
  }
};
prototype["logActiveBundle"] = function logActiveBundle(arg0) {
  const self = this;
  const active = this.active;
  let traceId;
  if (active != null) {
    traceId = active.traceId;
  }
  if (traceId === arg0) {
    const bundle = self.buildBundle(active, false, null);
    obj = {};
    const merged = Object.assign(bundle.navigation.spanTtiProperties);
    const firstPaint = bundle.firstPaint;
    let spanComponent;
    if (firstPaint != null) {
      spanComponent = firstPaint.spanComponent;
    }
    if (spanComponent == null) {
      spanComponent = null;
    }
    obj.first_paint_component = spanComponent;
    ({ settled: obj.settled, components: obj.components } = bundle);
    const json = JSON.stringify(obj);
    obj.info(json);
    return json;
  }
};
prototype["publishTraceState"] = function publishTraceState() {
  const self = this;
  if (null != this.active) {
    ({ setLastBundle, active } = self);
    setLastBundle(active, self.buildBundle(self.active, false, null));
    self.notifySurface(self.active.definition, self.active.destinationKey);
    self.notifyDebugBundle();
  }
};
prototype["flush"] = function flush(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.notifySubscribers;
  if (flag === undefined) {
    flag = true;
  }
  const self = this;
  const active = this.active;
  if (null != active) {
    if (null != active.deadlineTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(active.deadlineTimer);
    }
    self.active = null;
    if ("deadline_exceeded" === arg0) {
      let INTERRUPTED = NavigationSpanTypes.NavigationSpanStatus.DEADLINE_EXCEEDED;
    } else {
      INTERRUPTED = NavigationSpanTypes.NavigationSpanStatus.INTERRUPTED;
    }
    const bundle = self.buildBundle(active, true, INTERRUPTED);
    self.setLastBundle(active, bundle);
    (function emitNavigationSpanBundle(bundle) {
      const result = NavigationTTIAnalytics.trackNavigationTTISpan(bundle.navigation.spanTtiName, bundle.navigation.spanTtiProperties);
      for (const item10016 of tmp2) {
        ({ measurementSource, lateLayoutMs } = item10016);
        let tmp5 = _objectWithoutProperties(item10016, closure_1_2);
        let obj2 = NavigationTTIAnalytics;
        let result1 = obj2.trackNavigationTTISpan(item10016.spanComponentName, tmp5);
        continue;
      }
    })(bundle);
    if (flag) {
      self.notifySurface(active.definition, active.destinationKey);
    }
    self.notifyDebugBundle();
  }
};
prototype["getSurfaceKey"] = function getSurfaceKey(definition, destinationKey) {
  return "" + definition.rootEventName + ":" + definition.componentEventName + ":" + destinationKey;
};
prototype["setLastBundle"] = function setLastBundle(active, bundle) {
  this.lastBundle = bundle;
  this.lastBundleSurfaceKey = active.surfaceKey;
};
prototype["notifySurface"] = function notifySurface(definition, destinationKey) {
  const listenersBySurface = this.listenersBySurface;
  value = listenersBySurface.get(this.getSurfaceKey(definition, destinationKey));
  if (null != value) {
    for (const item10013 of value) {
      let item10013Result = item10013();
      continue;
    }
  }
};
prototype["notifyDebugBundle"] = function notifyDebugBundle() {
  for (const item10006 of tmp) {
    let item10006Result = item10006();
    continue;
  }
};
prototype["buildBundle"] = function buildBundle(active, settled, INTERRUPTED) {
  const definition = active.definition;
  let bound = null;
  ({ startEpochMs, navigationSpanId, traceId } = active);
  if (settled) {
    const _performance = performance;
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(0, Math.round(performance.now() - tmp));
  }
  const firstPaint = active.firstPaint;
  let atMs;
  if (firstPaint != null) {
    atMs = firstPaint.atMs;
  }
  if (atMs == null) {
    atMs = null;
  }
  const spanTtiProperties = {};
  const merged = Object.assign(active.properties);
  spanTtiProperties.trace_id = traceId;
  spanTtiProperties.span_id = navigationSpanId;
  spanTtiProperties.parent_span_id = null;
  spanTtiProperties.span_name = definition.rootEventName;
  spanTtiProperties.start_ms = 0;
  spanTtiProperties.end_ms = bound;
  spanTtiProperties.first_paint_ms = atMs;
  spanTtiProperties.first_contentful_paint_ms = active.firstContentfulPaintMs;
  spanTtiProperties.largest_contentful_paint_ms = null;
  spanTtiProperties.interactive_ms = null;
  spanTtiProperties.trace_start_timestamp_ms = startEpochMs;
  spanTtiProperties.span_status = INTERRUPTED;
  const obj2 = { navigation: { spanTtiName: definition.rootEventName, spanTtiProperties }, components: null, firstPaint, settled };
  const items = [...active.components];
  obj2.components = items;
  return obj2;
};
let merged = Object.assign({ active: null, lastBundle: null, lastBundleSurfaceKey: null, listenersBySurface: null, debugBundleListeners: null });
merged[3] = new Map();
let map = new Map();
merged[4] = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationSpanTracker.tsx");

export default merged;
export { NavigationSpanTracker };