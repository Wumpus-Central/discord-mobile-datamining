// === Module 16938: useComponentRenderSpan ===

// Module 16938 (useComponentRenderSpan)
import LoggerDefault from "Logger" /* 3 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 16940 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16941 */;
import NavigationTTIRegionDebugState from "NavigationTTIRegionDebugState" /* 16943 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = new LoggerDefault("NavTTISurface");
let size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx");

export const useNavigationTTIRegionMeasurement = function useNavigationTTIRegionMeasurement(exclude, name) {
  _require = exclude;
  const spanComponent = name;
  navTTISurface = require("NavTTISurfaceContext").useNavTTISurface();
  let str;
  if (navTTISurface != null) {
    str = navTTISurface.navigationKey;
  }
  if (str == null) {
    str = "";
  }
  let activeTraceId;
  if (navTTISurface != null) {
    activeTraceId = navTTISurface.activeTraceId;
  }
  if (activeTraceId == null) {
    activeTraceId = null;
  }
  let flag;
  if (navTTISurface != null) {
    flag = navTTISurface.isVisible;
  }
  if (flag == null) {
    flag = false;
  }
  str.useRef(null);
  str.useRef(null);
  str.useRef(null);
  str.useRef(null);
  str.useRef(str);
  str.useRef(false);
  const items = [name, exclude];
  const callback = str.useCallback((traceId, endMonotonicMs, arg2, arg3, measurementSource) => {
    let isFiniteResult = arg2 > 0 && arg3 > 0;
    if (isFiniteResult) {
      const _Number = Number;
      isFiniteResult = Number.isFinite(arg2);
    }
    if (isFiniteResult) {
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(arg3);
    }
    if (isFiniteResult) {
      const current = ref3.current;
      traceId = undefined;
      if (current != null) {
        traceId = current.traceId;
      }
      if (traceId !== traceId) {
        if ("include" === closure_0) {
          const obj5 = { spanComponent, endMonotonicMs, measurementSource };
          if (obj4.recordComponentSpan(traceId, obj5)) {
            const obj6 = { traceId, source: measurementSource };
            ref3.current = obj6;
          }
          obj4 = NavigationSpanTrackerDefault;
        } else {
          const activeTraceElapsedMs = NavigationSpanTrackerDefault.getActiveTraceElapsedMs(traceId, endMonotonicMs);
          if (null != activeTraceElapsedMs) {
            const result = NavigationTTIRegionDebugState.recordNavigationTTIRegionDebugMeasurement(traceId, spanComponent, activeTraceElapsedMs);
          }
        }
      } else {
        let tmp12 = "include" === closure_0;
        if (tmp12) {
          tmp12 = measurementSource === NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT;
        }
        if (tmp12) {
          tmp12 = current.source !== NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT;
        }
        if (tmp12) {
          const result1 = NavigationSpanTrackerDefault.recordLateComponentLayout(traceId, spanComponent, endMonotonicMs);
        }
      }
    }
  }, items);
  const items1 = [activeTraceId, flag, str];
  const layoutEffect = str.useLayoutEffect(() => {
    if (ref4.current !== activeTraceId) {
      closure_7.current = null;
    }
    ref4.current = activeTraceId;
    closure_10.current = str;
    closure_11.current = flag;
  }, items1);
  const items2 = [callback];
  const items3 = [activeTraceId, flag, str, callback];
  const onLayout = str.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    ({ width, height } = layout);
    let isFiniteResult = width > 0 && height > 0;
    if (isFiniteResult) {
      const _Number = Number;
      isFiniteResult = Number.isFinite(width);
    }
    if (isFiniteResult) {
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(height);
    }
    if (isFiniteResult) {
      const size = { navigationKey: ref5.current, width: null, height: null };
      ({ width: obj.width, height: obj.height } = layout);
      closure_6.current = size;
    }
    const current = ref4.current;
    if (null != current) {
      if (ref6.current) {
        const _performance = performance;
        ({ width: width2, height: height2 } = layout);
        callback(current, performance.now(), width2, height2, NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT);
        const nowResult = performance.now();
      } else if (isFiniteResult) {
        const size1 = { traceId: current, width: null, height: null };
        ({ width: obj2.width, height: obj2.height } = layout);
        closure_7.current = size1;
      }
    }
  }, items2);
  const effect = str.useEffect(() => {
    if (flag) {
      if (null != activeTraceId) {
        const current2 = ref3.current;
        let traceId;
        if (current2 != null) {
          traceId = current2.traceId;
        }
        if (traceId !== activeTraceId) {
          const current3 = ref2.current;
          let traceId1;
          if (current3 != null) {
            traceId1 = current3.traceId;
          }
          if (traceId1 !== activeTraceId) {
            const current = ref.current;
            if (null != current) {
              if (current.navigationKey === str) {
                let CACHED_PREVIOUS_DESTINATION = exclude(navTTISurface[3]).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
              } else {
                CACHED_PREVIOUS_DESTINATION = exclude(navTTISurface[3]).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
              }
              const _requestAnimationFrame = requestAnimationFrame;
              closure_2 = requestAnimationFrame(() => {
                callback(activeTraceId, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
              });
              return () => cancelAnimationFrame(closure_2);
            }
          } else {
            const _performance = performance;
            ({ width, height } = current3);
            callback(activeTraceId, performance.now(), width, height, exclude(navTTISurface[3]).ComponentMeasurementSource.ON_LAYOUT);
            const nowResult = performance.now();
          }
        }
      }
    }
  }, items3);
  const items4 = [navTTISurface, name, exclude];
  const effect1 = str.useEffect(() => {
    let tmp = "include" === closure_0;
    if (tmp) {
      tmp = null == navTTISurface;
    }
    if (tmp) {
      const _HermesInternal = HermesInternal;
      activeTraceId.warn("" + closure_1 + " has no NavTTISurfaceProvider; measurement is disabled.");
    }
  }, items4);
  if ("include" === exclude) {
    return { onLayout };
  }
};