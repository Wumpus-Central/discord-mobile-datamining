// === Module 16631: NavigationSpanTracker ===

// Module 16631 (NavigationSpanTracker)
import LoggerDefault from "Logger" /* 3 */;
import v1 from "v1" /* 1256 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 16630 */;

require = fn;
let obj = new LoggerDefault("NavTTI");
obj.enableNativeLogger(true);
class NavigationSpanTracker {
  constructor() {
    merged = Object.assign({ active: null, lastBundle: null, listenersBySurface: null });
    map = new Map();
    merged[2] = map;
    return merged;
  }
}
const prototype = NavigationSpanTracker.prototype;
prototype["getLastBundle"] = function getLastBundle() {
  return this.lastBundle;
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
prototype["beginNavigation"] = function beginNavigation(definition) {
  const self = this;
  if (null != this.active) {
    self.flush("interrupted", { notifySubscribers: false });
  }
  const timestamp = Date.now();
  const active = { traceId: null, navigationSpanId: null, surfaceKey: null, definition: null, destinationKey: null, properties: null, startEpochMs: null, startMonotonicMs: null, components: null, firstPaint: null, deadlineTimer: null };
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
};
prototype["recordComponentSpan"] = function recordComponentSpan(trace_id, endMonotonicMs) {
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
      let firstPaint = { spanComponentName: active.definition.componentEventName, trace_id, span_id: v1.v4(), parent_span_id: active.navigationSpanId, span_name: endMonotonicMs.spanComponent, end_ms: bound, trace_start_timestamp_ms: active.startEpochMs, measurementSource: endMonotonicMs.measurementSource, lateLayoutMs: null };
      components.push(firstPaint);
      if (tmp6) {
        firstPaint = { spanComponent: endMonotonicMs.spanComponent, atMs: bound };
        active.firstPaint = firstPaint;
      }
      return true;
    } else {
      return false;
    }
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
prototype["publishTraceState"] = function publishTraceState() {
  const self = this;
  if (null != this.active) {
    self.lastBundle = self.buildBundle(self.active, false, null);
    self.notifySurface(self.active.definition, self.active.destinationKey);
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
    self.lastBundle = bundle;
    const spanTtiProperties = bundle.navigation.spanTtiProperties;
    obj = { trace_id: bundle.navigation.spanTtiProperties.trace_id, first_paint_ms: spanTtiProperties.first_paint_ms, first_paint_component: null, to_channel_id: null, end_ms: null, span_status: null, warm_message_cache: null, components: null };
    const firstPaint = bundle.firstPaint;
    let spanComponent;
    ({ to_channel_id, end_ms, span_status, warm_message_cache } = spanTtiProperties);
    if (firstPaint != null) {
      spanComponent = firstPaint.spanComponent;
    }
    if (spanComponent == null) {
      spanComponent = null;
    }
    obj.first_paint_component = spanComponent;
    obj.to_channel_id = to_channel_id;
    obj.end_ms = end_ms;
    obj.span_status = span_status;
    obj.warm_message_cache = warm_message_cache;
    const components = bundle.components;
    obj.components = components.map((span_name) => ({ span_name: span_name.span_name, end_ms: span_name.end_ms, measurement_source: span_name.measurementSource, late_layout_ms: span_name.lateLayoutMs }));
    obj.info(JSON.stringify(obj));
    if (flag) {
      self.notifySurface(active.definition, active.destinationKey);
    }
  }
};
prototype["getSurfaceKey"] = function getSurfaceKey(definition, destinationKey) {
  return "" + definition.rootEventName + ":" + definition.componentEventName + ":" + destinationKey;
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
  let spanTtiProperties = {};
  const merged = Object.assign(active.properties);
  spanTtiProperties.trace_id = traceId;
  spanTtiProperties.span_id = navigationSpanId;
  spanTtiProperties.parent_span_id = null;
  spanTtiProperties.span_name = definition.rootEventName;
  spanTtiProperties.start_ms = 0;
  spanTtiProperties.end_ms = bound;
  spanTtiProperties.first_paint_ms = atMs;
  spanTtiProperties.first_contentful_paint_ms = null;
  spanTtiProperties.largest_contentful_paint_ms = null;
  spanTtiProperties.interactive_ms = null;
  spanTtiProperties.trace_start_timestamp_ms = startEpochMs;
  spanTtiProperties.span_status = INTERRUPTED;
  spanTtiProperties = { navigation: { spanTtiName: definition.rootEventName, spanTtiProperties }, components: null, firstPaint, settled };
  const items = [...active.components];
  spanTtiProperties.components = items;
  return spanTtiProperties;
};
let merged = Object.assign({ active: null, lastBundle: null, listenersBySurface: null });
merged[2] = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationSpanTracker.tsx");

export default merged;
export { NavigationSpanTracker };