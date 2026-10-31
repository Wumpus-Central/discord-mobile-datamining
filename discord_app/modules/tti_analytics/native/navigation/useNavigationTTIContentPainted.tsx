// === Module 13313: useNavigationTTIContentPainted ===

// Module 13313 (useNavigationTTIContentPainted)
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 13315 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useNavigationTTIContentPainted.tsx");

export function useNavigationTTIContentPainted() {
  navTTISurface = navTTISurface(13314).useNavTTISurface();
  noop.useRef(null);
  let navigationKey;
  if (navTTISurface != null) {
    navigationKey = navTTISurface.navigationKey;
  }
  dependencyMap = noop.useRef(navigationKey);
  noop = obj2.useRef(null);
  noop.useRef(null);
  const items = [navTTISurface];
  const callback = obj2.useCallback(() => {
    if (null != navTTISurface) {
      const activeTraceId = navTTISurface.activeTraceId;
      if (null != activeTraceId) {
        if (ref4.current !== activeTraceId) {
          const current = ref3.current;
          let result = null != current;
          if (result) {
            result = NavigationSpanTrackerDefault.recordContentPaintedWhenReady(activeTraceId, current.monotonicTimestamp, current.changesetUpdateId);
          }
          if (result) {
            tmp.current = activeTraceId;
          }
        }
      }
    }
  }, items);
  let activeTraceId;
  if (navTTISurface != null) {
    activeTraceId = navTTISurface.activeTraceId;
  }
  const items1 = [activeTraceId, ];
  let navigationKey1;
  if (navTTISurface != null) {
    navigationKey1 = navTTISurface.navigationKey;
  }
  items1[1] = navigationKey1;
  const layoutEffect = obj2.useLayoutEffect(() => {
    let navigationKey;
    if (navTTISurface != null) {
      navigationKey = navTTISurface.navigationKey;
    }
    if (ref2.current !== navigationKey) {
      ref2.current = navigationKey;
      closure_3.current = null;
      closure_4.current = null;
      let activeTraceId;
      if (navTTISurface != null) {
        activeTraceId = navTTISurface.activeTraceId;
      }
      if (null != activeTraceId) {
        const result = NavigationSpanTrackerDefault.requireContentChangeset(activeTraceId);
      }
    }
  }, items1);
  const items2 = [callback];
  const effect = obj2.useEffect(() => {
    callback();
  }, items2);
  const items3 = [callback, ];
  let activeTraceId1;
  if (navTTISurface != null) {
    activeTraceId1 = navTTISurface.activeTraceId;
  }
  items3[1] = activeTraceId1;
  return noop.useCallback((changesetUpdateId) => {
    changesetUpdateId = changesetUpdateId.changesetUpdateId;
    const current = ref.current;
    if (null == current) {
      ref.current = changesetUpdateId;
      if (tmp) {
        const obj2 = { monotonicTimestamp: tmp2, changesetUpdateId };
        closure_3.current = obj2;
        callback();
      } else {
        closure_3.current = null;
        let activeTraceId;
        if (navTTISurface != null) {
          activeTraceId = navTTISurface.activeTraceId;
        }
        if (null != activeTraceId) {
          const result = NavigationSpanTrackerDefault.clearContentPaintedReadiness(activeTraceId);
        }
        closure_4.current = null;
      }
    }
  }, items3);
}