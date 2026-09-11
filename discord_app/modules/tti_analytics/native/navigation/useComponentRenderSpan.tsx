// === Module 16605: useComponentRenderSpan ===

// Module 16605 (useComponentRenderSpan)
import LoggerDefault from "Logger" /* 3 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 16606 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16607 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = new LoggerDefault("NavTTISurface");
let size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx");

export const useComponentRenderSpan = function useComponentRenderSpan(spanComponent) {
  _require = spanComponent;
  let obj = require("NavTTISurfaceContext");
  const navTTISurface = obj.useNavTTISurface();
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
  closure_129_0 = spanComponent;
  closure_129_1 = str;
  closure_129_2 = activeTraceId;
  closure_129_3 = noop.useRef(null);
  closure_129_4 = noop.useRef(null);
  closure_129_5 = noop.useRef(null);
  closure_129_6 = noop.useRef(str);
  const items = [spanComponent];
  const callback = noop.useCallback((traceId, endMonotonicMs, arg2, arg3, measurementSource) => {
    if (arg2 > 0) {
      if (arg3 > 0) {
        current = logger.current;
        traceId = undefined;
        if (current != null) {
          traceId = current.traceId;
        }
        if (traceId !== traceId) {
          let obj = { spanComponent, endMonotonicMs, measurementSource };
          if (obj2.recordComponentSpan(traceId, obj)) {
            obj = { traceId, source: measurementSource };
            logger.current = obj;
          }
          obj2 = NavigationSpanTrackerDefault;
        } else {
          if (tmp7) {
            obj = NavigationSpanTrackerDefault;
            const result = obj.recordLateComponentLayout(traceId, spanComponent, endMonotonicMs);
          }
          tmp7 = measurementSource === NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT && current.source !== measurementSource;
        }
      }
    }
  }, items);
  closure_129_7 = callback;
  const items1 = [activeTraceId, str];
  const layoutEffect = noop.useLayoutEffect(() => {
    ref2.current = current;
    ref3.current = navTTISurface;
  }, items1);
  const items2 = [callback];
  const items3 = [activeTraceId, str, callback];
  const onLayout = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const size = { navigationKey: ref3.current, width: layout.width, height: layout.height };
    ref.current = size;
    current = ref2.current;
    if (null != current) {
      const _performance = performance;
      ({ width, height } = layout);
      closure_1_7(current, performance.now(), width, height, NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT);
      const nowResult = performance.now();
    }
  }, items2);
  const effect = noop.useEffect(() => {
    if (null != closure_2) {
      current = logger.current;
      let traceId;
      if (current != null) {
        traceId = current.traceId;
      }
      if (traceId !== tmp) {
        const current2 = ref.current;
        if (null != current2) {
          if (current2.width > 0) {
            if (current2.height > 0) {
              if (current2.navigationKey === CACHED_PREVIOUS_DESTINATION) {
                CACHED_PREVIOUS_DESTINATION = spanComponent(current[2]).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
              } else {
                CACHED_PREVIOUS_DESTINATION = spanComponent(current[2]).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
              }
              const _requestAnimationFrame = requestAnimationFrame;
              closure_2 = requestAnimationFrame(() => {
                closure_2_7(current, performance.now(), current2.width, current2.height, CACHED_PREVIOUS_DESTINATION);
              });
              return () => cancelAnimationFrame(closure_2);
            }
          }
        }
      }
    }
  }, items3);
  const items4 = [spanComponent, navTTISurface];
  const effect1 = noop.useEffect(() => {
    if (null == navTTISurface) {
      const _HermesInternal = HermesInternal;
      logger.warn("" + closure_0 + " has no NavTTISurfaceProvider; measurement is disabled.");
    }
  }, items4);
  if (null == navTTISurface) {
    obj = {};
  }
  return { onLayout };
};