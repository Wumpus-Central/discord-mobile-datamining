// === Module 11486: useNavigationTTIContentPainted ===

// Module 11486 (useNavigationTTIContentPainted)
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 11488 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useNavigationTTIContentPainted.tsx");

export const useNavigationTTIContentPainted = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigationTTIContentPainted() {
  const cResult = navTTISurface(576).c(14);
  let obj = navTTISurface(576);
  navTTISurface = navTTISurface(11487).useNavTTISurface();
  noop.useRef(null);
  let navigationKey;
  if (navTTISurface != null) {
    navigationKey = navTTISurface.navigationKey;
  }
  dependencyMap = noop.useRef(navigationKey);
  noop = obj3.useRef(null);
  noop.useRef(null);
  if (cResult[0] !== navTTISurface) {
    const fn = function t() {
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
    };
    cResult[0] = navTTISurface;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  closure_5 = tmp4;
  let activeTraceId;
  if (navTTISurface != null) {
    activeTraceId = navTTISurface.activeTraceId;
  }
  if (cResult[2] === activeTraceId) {
    let navigationKey1;
    if (navTTISurface != null) {
      navigationKey1 = navTTISurface.navigationKey;
    }
    if (cResult[3] === navigationKey1) {
      let tmp7 = cResult[4];
    }
    let activeTraceId1;
    if (navTTISurface != null) {
      activeTraceId1 = navTTISurface.activeTraceId;
    }
    let navigationKey2;
    if (navTTISurface != null) {
      navigationKey2 = navTTISurface.navigationKey;
    }
    if (cResult[5] === activeTraceId1) {
      if (cResult[6] === navigationKey2) {
        let tmp12 = cResult[7];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp7, tmp12);
      if (cResult[8] !== tmp4) {
        const fn3 = function p() {
          closure_5();
        };
        const items = [tmp4];
        cResult[8] = tmp4;
        cResult[9] = fn3;
        cResult[10] = items;
        let tmp15 = items;
        let tmp14 = fn3;
      } else {
        tmp14 = cResult[9];
        tmp15 = cResult[10];
      }
      const effect = obj3.useEffect(tmp14, tmp15);
      if (cResult[11] === tmp4) {
        let activeTraceId2;
        if (navTTISurface != null) {
          activeTraceId2 = navTTISurface.activeTraceId;
        }
        if (cResult[12] === activeTraceId2) {
          let tmp18 = cResult[13];
        }
        return tmp18;
      }
      cResult[11] = tmp4;
      let activeTraceId3;
      if (navTTISurface != null) {
        activeTraceId3 = navTTISurface.activeTraceId;
      }
      const fn4 = function y(changesetUpdateId) {
        changesetUpdateId = changesetUpdateId.changesetUpdateId;
        const current = ref.current;
        if (null == current) {
          ref.current = changesetUpdateId;
          if (tmp) {
            const obj2 = { monotonicTimestamp: tmp2, changesetUpdateId };
            closure_3.current = obj2;
            closure_5();
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
      };
      cResult[12] = activeTraceId3;
      cResult[13] = fn4;
      tmp18 = fn4;
    }
    const items1 = [activeTraceId1, navigationKey2];
    cResult[5] = activeTraceId1;
    cResult[6] = navigationKey2;
    cResult[7] = items1;
    tmp12 = items1;
  }
  let activeTraceId4;
  if (navTTISurface != null) {
    activeTraceId4 = navTTISurface.activeTraceId;
  }
  cResult[2] = activeTraceId4;
  let navigationKey3;
  if (navTTISurface != null) {
    navigationKey3 = navTTISurface.navigationKey;
  }
  const fn2 = function f() {
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
  };
  cResult[3] = navigationKey3;
  cResult[4] = fn2;
  tmp7 = fn2;
}) : (function useNavigationTTIContentPainted() {
  navTTISurface = navTTISurface(11487).useNavTTISurface();
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
});