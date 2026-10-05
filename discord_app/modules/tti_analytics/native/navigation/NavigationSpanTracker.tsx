// === Module 16483: NavigationSpanTracker ===

// Module 16483 (NavigationSpanTracker)
import LoggerDefault from "Logger" /* 3 */;
import v1 from "v1" /* 1266 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 16482 */;
import NavigationTTIAnalytics from "NavigationTTIAnalytics" /* 16484 */;
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze" /* 16485 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let closure_2 = ["spanComponentName", "measurementSource", "lateLayoutMs"];
let obj = new LoggerDefault("NavTTI");
obj.enableNativeLogger(true);
class NavigationSpanTracker {
  constructor() {
    const merged = Object.assign({ active: null, lastBundle: null, listenersBySurface: null, debugBundleListeners: null });
    merged[2] = new Map();
    new Map();
    merged[3] = new Set();
    new Set();
    return merged;
  }
  getLastBundle() {
    return this.lastBundle;
  }
  getActiveTraceId(definition, navigationKey) {
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
  }
  getActiveTraceElapsedMs(traceId, endMonotonicMs) {
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
  }
  subscribe(definition, destinationKey, arg2) {
    let self = this;
    let closure_1 = arg2;
    const surfaceKey = this.getSurfaceKey(definition, destinationKey);
    let listenersBySurface = this.listenersBySurface;
    const value = listenersBySurface.get(surfaceKey);
    set = value;
    obj = value;
    if (null == value) {
      const _Set = Set;
      self = this;
      const self2 = this;
      set = new Set();
      const listenersBySurface2 = this.listenersBySurface;
      const result = listenersBySurface2.set(surfaceKey, set);
      obj = set;
    }
    obj.add(arg2);
    let c0 = true;
    return () => {
      const tmp = c0;
      if (tmp) {
        c0 = false;
        set.delete(closure_1);
        if (0 === set.size) {
          const listenersBySurface = self.listenersBySurface;
          listenersBySurface.delete(surfaceKey);
        }
      }
    };
  }
  subscribeDebugBundle(arg0) {
    const self = this;
    let closure_0 = arg0;
    let tmp = 0 === this.debugBundleListeners.size && null != self.active;
    let debugBundleListeners = self.debugBundleListeners;
    debugBundleListeners.add(arg0);
    if (tmp) {
      tmp = null != self.active;
    }
    if (tmp) {
      self.lastBundle = self.buildBundle(self.active, false, null);
    }
    return () => {
      const debugBundleListeners = self.debugBundleListeners;
      debugBundleListeners.delete(closure_0);
    };
  }
  beginNavigation(definition) {
    let nowResult;
    let obj2;
    let obj3;
    const self = this;
    if (null != this.active) {
      self.flush("interrupted", { notifySubscribers: false });
    }
    const timestamp = Date.now();
    const active = { traceId: obj2.v4(), navigationSpanId: obj3.v4(), surfaceKey: self.getSurfaceKey(definition.definition, definition.destinationKey), definition: null, destinationKey: null, properties: null, startEpochMs: timestamp, startMonotonicMs: nowResult, components: [], firstPaint: null, deadlineTimer: setTimeout(() => self.flush("deadline_exceeded"), 30000) };
    nowResult = performance.now();
    obj2 = v1;
    ({ definition: obj.definition, destinationKey: obj.destinationKey, properties: obj.properties } = definition);
    self.active = active;
    obj3 = v1;
    self.publishTraceState();
    const traceId = self.active.traceId;
    const obj4 = NavigationTTIDebugFreeze;
    const obj5 = { kind: "milestone", name: "time_start", traceId, destinationKey: self.active.destinationKey };
    const result = obj4.emitNavigationTTIDebugCheckpoint(obj5, () => self.logActiveBundle(traceId));
  }
  recordComponentSpan(trace_id, endMonotonicMs) {
    let obj2;
    const self = this;
    let closure_0 = trace_id;
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
        const tmp2 = null == active.firstPaint;
        const bound = Math.max(0, Math.round(endMonotonicMs.endMonotonicMs - active.startMonotonicMs));
        const components = active.components;
        const push = components.push;
        obj = { spanComponentName: active.definition.componentEventName, trace_id, span_id: obj2.v4(), parent_span_id: active.navigationSpanId, span_name: endMonotonicMs.spanComponent, end_ms: bound, trace_start_timestamp_ms: active.startEpochMs, measurementSource: endMonotonicMs.measurementSource, lateLayoutMs: null };
        obj2 = v1;
        push(obj);
        const tmp7 = null == active.firstPaint || bound < active.firstPaint.atMs;
        if (tmp7) {
          const obj3 = { spanComponent: endMonotonicMs.spanComponent, atMs: bound };
          active.firstPaint = obj3;
        }
        self.publishDebugBundle();
        function logActiveBundle() {
          return self.logActiveBundle(closure_0);
        }
        const obj4 = { kind: "component", spanComponent: endMonotonicMs.spanComponent, traceId: trace_id, destinationKey: active.destinationKey };
        const tmp4Result = NavigationTTIDebugFreeze;
        const result = tmp4Result.emitNavigationTTIDebugCheckpoint(obj4, logActiveBundle);
        if (tmp2) {
          const obj5 = { kind: "milestone", name: "first_paint", traceId: trace_id, destinationKey: active.destinationKey };
          const tmp4Result2 = NavigationTTIDebugFreeze;
          const result1 = tmp4Result2.emitNavigationTTIDebugCheckpoint(obj5, logActiveBundle);
        }
        return true;
      } else {
        return false;
      }
    }
  }
  recordLateComponentLayout(traceId, spanComponent, endMonotonicMs) {
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
          let tmp3;
          while (true) {
            tmp3 = active.components[diff];
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
  }
  publishDebugBundle() {
    const self = this;
    const tmp = null != this.active && 0 !== self.debugBundleListeners.size;
    if (tmp) {
      self.lastBundle = self.buildBundle(self.active, false, null);
      self.notifyDebugBundle();
    }
  }
  logActiveBundle(arg0) {
    let spanComponent;
    const self = this;
    const active = this.active;
    let traceId;
    if (active != null) {
      traceId = active.traceId;
    }
    if (traceId === arg0) {
      const bundle = self.buildBundle(active, false, null);
      obj = { first_paint_component: spanComponent };
      const _JSON = JSON;
      const merged = Object.assign(bundle.navigation.spanTtiProperties);
      const firstPaint = bundle.firstPaint;
      spanComponent = undefined;
      if (firstPaint != null) {
        spanComponent = firstPaint.spanComponent;
      }
      if (spanComponent == null) {
        spanComponent = null;
      }
      ({ settled: obj.settled, components: obj.components } = bundle);
      const json = stringify(obj);
      obj.info(json);
      return json;
    }
  }
  publishTraceState() {
    const self = this;
    if (null != this.active) {
      self.lastBundle = self.buildBundle(self.active, false, null);
      self.notifySurface(self.active.definition, self.active.destinationKey);
      self.notifyDebugBundle();
    }
  }
  flush(arg0) {
    function emitNavigationSpanBundle(bundle) {
      let lateLayoutMs;
      let measurementSource;
      obj = NavigationTTIAnalytics;
      const result = obj.trackNavigationTTISpan(bundle.navigation.spanTtiName, bundle.navigation.spanTtiProperties);
      const components = bundle.components;
      for (const item10016 of components) {
        ({ measurementSource, lateLayoutMs } = item10016);
        let spanComponentName = item10016.spanComponentName;
        let tmp4 = _objectWithoutProperties(item10016, closure_1_2);
        let obj2 = NavigationTTIAnalytics;
        let result1 = obj2.trackNavigationTTISpan(spanComponentName, tmp4);
        continue;
      }
    }
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
      let INTERRUPTED;
      if (null != active.deadlineTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(active.deadlineTimer);
      }
      self.active = null;
      if ("deadline_exceeded" === arg0) {
        INTERRUPTED = NavigationSpanTypes.NavigationSpanStatus.DEADLINE_EXCEEDED;
      } else {
        INTERRUPTED = NavigationSpanTypes.NavigationSpanStatus.INTERRUPTED;
      }
      const bundle = self.buildBundle(active, true, INTERRUPTED);
      self.lastBundle = bundle;
      emitNavigationSpanBundle(bundle);
      if (flag) {
        self.notifySurface(active.definition, active.destinationKey);
      }
      self.notifyDebugBundle();
    }
  }
  getSurfaceKey(definition, destinationKey) {
    return "" + definition.rootEventName + ":" + definition.componentEventName + ":" + destinationKey;
  }
  notifySurface(definition, destinationKey) {
    const listenersBySurface = this.listenersBySurface;
    const value = listenersBySurface.get(this.getSurfaceKey(definition, destinationKey));
    if (null != value) {
      for (const item10013 of value) {
        let item10013Result = item10013();
        continue;
      }
    }
  }
  notifyDebugBundle() {
    const debugBundleListeners = this.debugBundleListeners;
    for (const item10006 of debugBundleListeners) {
      let item10006Result = item10006();
      continue;
    }
  }
  buildBundle(active, settled, INTERRUPTED) {
    let items;
    let navigationSpanId;
    let startEpochMs;
    let traceId;
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
    const spanTtiProperties = { trace_id: traceId, span_id: navigationSpanId, parent_span_id: null, span_name: definition.rootEventName, start_ms: 0, end_ms: bound, first_paint_ms: atMs, first_contentful_paint_ms: null, largest_contentful_paint_ms: null, interactive_ms: null, trace_start_timestamp_ms: startEpochMs, span_status: INTERRUPTED };
    const merged = Object.assign(active.properties);
    const obj2 = { navigation: { spanTtiName: definition.rootEventName, spanTtiProperties }, components: items, firstPaint, settled };
    items = [...active.components];
    return obj2;
  }
}
const prototype = NavigationSpanTracker.prototype;
let merged = Object.assign({ active: null, lastBundle: null, listenersBySurface: null, debugBundleListeners: null });
const map = new Map();
merged[2] = map;
let set = new Set();
merged[3] = set;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationSpanTracker.tsx");

export default merged;
export { NavigationSpanTracker };