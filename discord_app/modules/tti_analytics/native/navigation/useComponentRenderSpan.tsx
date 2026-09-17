// discord_app/modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import NavigationSpanTypes from "NavigationSpanTypes.tsx";
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_4 = new LoggerDefault("NavTTISurface");
let size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx");

export const useComponentRenderSpan = function useComponentRenderSpan(name) {
  _require = name;
  const navTTISurface = require("NavTTISurfaceContext").useNavTTISurface();
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
  closure_129_0 = name;
  closure_129_1 = str;
  closure_129_2 = activeTraceId;
  closure_129_3 = flag;
  closure_129_4 = noop.useRef(null);
  closure_129_5 = noop.useRef(null);
  closure_129_6 = noop.useRef(null);
  closure_129_7 = noop.useRef(null);
  closure_129_8 = noop.useRef(str);
  closure_129_9 = noop.useRef(false);
  const items = [name];
  const callback = noop.useCallback((traceId, endMonotonicMs, arg2, arg3, measurementSource) => {
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
      current = ref2.current;
      traceId = undefined;
      if (current != null) {
        traceId = current.traceId;
      }
      if (traceId !== traceId) {
        const obj3 = { spanComponent, endMonotonicMs, measurementSource };
        if (obj2.recordComponentSpan(traceId, obj3)) {
          const obj4 = { traceId, source: measurementSource };
          ref2.current = obj4;
        }
        obj2 = NavigationSpanTrackerDefault;
      } else {
        if (tmp12) {
          const result = NavigationSpanTrackerDefault.recordLateComponentLayout(traceId, spanComponent, endMonotonicMs);
        }
        tmp12 =
          measurementSource === NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT &&
          current.source !== measurementSource;
      }
    }
  }, items);
  closure_129_10 = callback;
  const items1 = [activeTraceId, flag, str];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (ref3.current !== dependencyMap) {
      ref.current = null;
    }
    ref3.current = dependencyMap;
    ref4.current = navTTISurface;
    ref5.current = current;
  }, items1);
  const items2 = [callback];
  const items3 = [activeTraceId, flag, str, callback];
  const onLayout = noop.useCallback((nativeEvent) => {
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
      const size = { navigationKey: ref4.current, width: null, height: null };
      ({ width: obj.width, height: obj.height } = layout);
      logger.current = size;
    }
    current = ref3.current;
    if (null != current) {
      if (ref5.current) {
        const _performance = performance;
        ({ width: width2, height: height2 } = layout);
        closure_1_10(
          current,
          performance.now(),
          width2,
          height2,
          NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT,
        );
        const nowResult = performance.now();
      } else if (isFiniteResult) {
        const size1 = { traceId: current, width: null, height: null };
        ({ width: obj2.width, height: obj2.height } = layout);
        ref.current = size1;
      }
    }
  }, items2);
  const effect = noop.useEffect(() => {
    if (closure_3) {
      if (null != closure_2) {
        const current2 = ref2.current;
        let traceId;
        if (current2 != null) {
          traceId = current2.traceId;
        }
        if (traceId !== tmp) {
          const current3 = ref.current;
          let traceId1;
          if (current3 != null) {
            traceId1 = current3.traceId;
          }
          if (traceId1 !== tmp) {
            current = logger.current;
            if (null != current) {
              if (current.navigationKey === CACHED_PREVIOUS_DESTINATION) {
                CACHED_PREVIOUS_DESTINATION = spanComponent(16696).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
              } else {
                CACHED_PREVIOUS_DESTINATION =
                  spanComponent(16696).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
              }
              const _requestAnimationFrame = requestAnimationFrame;
              closure_2 = requestAnimationFrame(() => {
                closure_2_10(
                  dependencyMap,
                  performance.now(),
                  current.width,
                  current.height,
                  CACHED_PREVIOUS_DESTINATION,
                );
              });
              return () => cancelAnimationFrame(closure_2);
            }
          } else {
            const _performance = performance;
            ({ width, height } = current3);
            closure_10(
              tmp,
              performance.now(),
              width,
              height,
              spanComponent(16696).ComponentMeasurementSource.ON_LAYOUT,
            );
            const nowResult = performance.now();
          }
        }
      }
    }
  }, items3);
  const items4 = [name, navTTISurface];
  const effect1 = noop.useEffect(() => {
    if (null == navTTISurface) {
      const _HermesInternal = HermesInternal;
      logger.warn("" + closure_0 + " has no NavTTISurfaceProvider; measurement is disabled.");
    }
  }, items4);
  return { onLayout };
};
