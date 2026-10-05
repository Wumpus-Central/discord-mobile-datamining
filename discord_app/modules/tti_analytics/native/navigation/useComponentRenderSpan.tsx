// discord_app/modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import NavigationSpanTypes from "NavigationSpanTypes.tsx";
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import NavigationTTIRegionDebugState from "debug/NavigationTTIRegionDebugState.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_12, current, ref, ref2, ref3;

let closure_4 = new LoggerDefault("NavTTISurface");
const tmp2 = new LoggerDefault("NavTTISurface");
let current2 = ReactCompilerGating.isReactCompilerEnabled();
let size = size_mod;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx");

export const useNavigationTTIRegionMeasurement = function useNavigationTTIRegionMeasurement(exclude, regionId) {
  let navTTISurface1;
  let tmp = current2;
  if (tmp) {
    _require = exclude;
    let spanComponent = regionId;
    let obj3 = require("react");
    const cResult = obj3.c(25);
    const obj4 = require("NavTTISurfaceContext");
    const navTTISurface = obj4.useNavTTISurface();
    let str2;
    if (navTTISurface != null) {
      str2 = navTTISurface.navigationKey;
    }
    if (str2 == null) {
      str2 = "";
    }
    let activeTraceId;
    if (navTTISurface != null) {
      activeTraceId = navTTISurface.activeTraceId;
    }
    if (activeTraceId == null) {
      activeTraceId = null;
    }
    let flag2;
    if (navTTISurface != null) {
      flag2 = navTTISurface.isVisible;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    const obj5 = current;
    ref = current.useRef(null);
    ref2 = current.useRef(null);
    ref3 = current.useRef(null);
    let ref4 = current.useRef(null);
    let ref5 = current.useRef(str2);
    let ref6 = current.useRef(false);
    if (cResult[0] === regionId) {
      let tmp20;
      if (cResult[1] === exclude) {
        tmp20 = cResult[2];
      }
      closure_12 = tmp20;
      if (cResult[3] === activeTraceId) {
        if (cResult[4] === flag2) {
          let tmp21;
          let tmp22;
          if (cResult[5] === str2) {
            tmp21 = cResult[6];
            tmp22 = cResult[7];
          }
          const layoutEffect = obj5.useLayoutEffect(tmp21, tmp22);
          if (cResult[8] !== tmp20) {
            class R {
              constructor(nativeEvent) {
                let height;
                let height2;
                let width;
                let width2;
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
                  size = { navigationKey: ref5.current, width: null, height: null };
                  ({ width: obj.width, height: obj.height } = layout);
                  ref.current = size;
                }
                current = ref4.current;
                if (null != current) {
                  if (ref6.current) {
                    const _performance = performance;
                    ({ width: width2, height: height2 } = layout);
                    const nowResult = performance.now();
                    closure_12(
                      current,
                      nowResult,
                      width2,
                      height2,
                      require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
                    );
                  } else if (isFiniteResult) {
                    const size1 = { traceId: current, width: null, height: null };
                    ({ width: obj2.width, height: obj2.height } = layout);
                    ref2.current = size1;
                  }
                }
              }
            }
            cResult[8] = tmp20;
            class N {
              constructor() {
                if (ref4.current !== activeTraceId) {
                  ref2.current = null;
                }
                ref4.current = activeTraceId;
                ref5.current = str2;
                ref6.current = flag2;
              }
            }
            class E {
              constructor() {
                let height;
                let width;
                if (flag2) {
                  if (null != activeTraceId) {
                    current2 = ref3.current;
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
                        current = ref.current;
                        if (null != current) {
                          if (current.navigationKey === str2) {
                            let CACHED_PREVIOUS_DESTINATION = closure_0(navTTISurface[5]).ComponentMeasurementSource
                              .CACHED_SAME_DESTINATION;
                          } else {
                            CACHED_PREVIOUS_DESTINATION = closure_0(navTTISurface[5]).ComponentMeasurementSource
                              .CACHED_PREVIOUS_DESTINATION;
                          }
                          const _requestAnimationFrame = requestAnimationFrame;
                          let closure_2 = requestAnimationFrame(() => {
                            closure_12(
                              activeTraceId,
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
                        const nowResult = performance.now();
                        closure_12(
                          activeTraceId,
                          nowResult,
                          width,
                          height,
                          closure_0(navTTISurface[5]).ComponentMeasurementSource.ON_LAYOUT,
                        );
                      }
                    }
                  }
                }
              }
            }
          } else {
            class R {
              constructor(nativeEvent) {
                let height;
                let height2;
                let width;
                let width2;
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
                  size = { navigationKey: ref5.current, width: null, height: null };
                  ({ width: obj.width, height: obj.height } = layout);
                  ref.current = size;
                }
                current = ref4.current;
                if (null != current) {
                  if (ref6.current) {
                    const _performance = performance;
                    ({ width: width2, height: height2 } = layout);
                    const nowResult = performance.now();
                    closure_12(
                      current,
                      nowResult,
                      width2,
                      height2,
                      require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
                    );
                  } else if (isFiniteResult) {
                    const size1 = { traceId: current, width: null, height: null };
                    ({ width: obj2.width, height: obj2.height } = layout);
                    ref2.current = size1;
                  }
                }
              }
            }
          }
          class N {
            constructor() {
              if (ref4.current !== activeTraceId) {
                ref2.current = null;
              }
              ref4.current = activeTraceId;
              ref5.current = str2;
              ref6.current = flag2;
            }
          }
          class E {
            constructor() {
              let height;
              let width;
              if (flag2) {
                if (null != activeTraceId) {
                  current2 = ref3.current;
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
                      current = ref.current;
                      if (null != current) {
                        if (current.navigationKey === str2) {
                          let CACHED_PREVIOUS_DESTINATION = closure_0(navTTISurface[5]).ComponentMeasurementSource
                            .CACHED_SAME_DESTINATION;
                        } else {
                          CACHED_PREVIOUS_DESTINATION = closure_0(navTTISurface[5]).ComponentMeasurementSource
                            .CACHED_PREVIOUS_DESTINATION;
                        }
                        const _requestAnimationFrame = requestAnimationFrame;
                        let closure_2 = requestAnimationFrame(() => {
                          closure_12(
                            activeTraceId,
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
                      const nowResult = performance.now();
                      closure_12(
                        activeTraceId,
                        nowResult,
                        width,
                        height,
                        closure_0(navTTISurface[5]).ComponentMeasurementSource.ON_LAYOUT,
                      );
                    }
                  }
                }
              }
            }
          }
          const items = [activeTraceId, flag2, str2, tmp20];
          cResult[10] = activeTraceId;
          cResult[11] = flag2;
          cResult[12] = str2;
          cResult[13] = tmp20;
          cResult[14] = E;
          cResult[15] = items;
        }
      }
      class N {
        constructor() {
          if (ref4.current !== activeTraceId) {
            ref2.current = null;
          }
          ref4.current = activeTraceId;
          ref5.current = str2;
          ref6.current = flag2;
        }
      }
      tmp23[0] = activeTraceId;
      tmp23[1] = flag2;
      tmp23[2] = str2;
      cResult[3] = activeTraceId;
      cResult[4] = flag2;
      cResult[5] = str2;
      cResult[6] = N;
      cResult[7] = tmp23;
      tmp22 = tmp23;
      tmp21 = N;
    }
    const fn = function c(traceId, endMonotonicMs, arg2, arg3, measurementSource) {
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
        current = ref3.current;
        traceId = undefined;
        if (current != null) {
          traceId = current.traceId;
        }
        if (traceId !== traceId) {
          if ("include" === closure_0) {
            spanComponent(navTTISurface1[6]);
          } else {
            const obj2 = spanComponent(navTTISurface1[6]);
            const activeTraceElapsedMs = obj2.getActiveTraceElapsedMs(traceId, endMonotonicMs);
            if (null != activeTraceElapsedMs) {
              const obj3 = require("NavigationTTIRegionDebugState");
              const result = obj3.recordNavigationTTIRegionDebugMeasurement(
                traceId,
                spanComponent,
                activeTraceElapsedMs,
              );
            }
          }
          const obj6 = { traceId, source: measurementSource };
          ref3.current = obj6;
        } else {
          const tmp12 =
            "include" === closure_0 &&
            measurementSource === require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT &&
            current.source !== require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT;
          if (tmp12) {
            const obj = spanComponent(navTTISurface1[6]);
            const result1 = obj.recordLateComponentLayout(traceId, spanComponent, endMonotonicMs);
          }
        }
      }
    };
    cResult[0] = regionId;
    cResult[1] = exclude;
    cResult[2] = fn;
    tmp20 = fn;
  } else {
    class R {
      constructor(nativeEvent) {
        let height;
        let height2;
        let width;
        let width2;
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
          size = { navigationKey: ref5.current, width: null, height: null };
          ({ width: obj.width, height: obj.height } = layout);
          ref.current = size;
        }
        current = ref4.current;
        if (null != current) {
          if (ref6.current) {
            const _performance = performance;
            ({ width: width2, height: height2 } = layout);
            const nowResult = performance.now();
            closure_12(
              current,
              nowResult,
              width2,
              height2,
              require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
            );
          } else if (isFiniteResult) {
            const size1 = { traceId: current, width: null, height: null };
            ({ width: obj2.width, height: obj2.height } = layout);
            ref2.current = size1;
          }
        }
      }
    }
    spanComponent = regionId;
    class N {
      constructor() {
        if (ref4.current !== activeTraceId) {
          ref2.current = null;
        }
        ref4.current = activeTraceId;
        ref5.current = str2;
        ref6.current = flag2;
      }
    }
    class E {
      constructor() {
        let height;
        let width;
        if (flag2) {
          if (null != activeTraceId) {
            current2 = ref3.current;
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
                current = ref.current;
                if (null != current) {
                  if (current.navigationKey === str2) {
                    let CACHED_PREVIOUS_DESTINATION = closure_0(navTTISurface[5]).ComponentMeasurementSource
                      .CACHED_SAME_DESTINATION;
                  } else {
                    CACHED_PREVIOUS_DESTINATION = closure_0(navTTISurface[5]).ComponentMeasurementSource
                      .CACHED_PREVIOUS_DESTINATION;
                  }
                  const _requestAnimationFrame = requestAnimationFrame;
                  let closure_2 = requestAnimationFrame(() => {
                    closure_12(
                      activeTraceId,
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
                const nowResult = performance.now();
                closure_12(
                  activeTraceId,
                  nowResult,
                  width,
                  height,
                  closure_0(navTTISurface[5]).ComponentMeasurementSource.ON_LAYOUT,
                );
              }
            }
          }
        }
      }
    }
    let obj = require("NavTTISurfaceContext");
    navTTISurface1 = obj.useNavTTISurface();
    if (navTTISurface1 != null) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    if (undefined == null) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    current = tmp5;
    if (navTTISurface1 != null) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    if (undefined == null) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    const logger = tmp6;
    if (navTTISurface1 != null) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    if (undefined == null) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    current2 = tmp7;
    ref = current.useRef(null);
    ref2 = current.useRef(null);
    ref3 = current.useRef(null);
    ref4 = current.useRef(null);
    ref5 = current.useRef(tmp5);
    ref6 = current.useRef(false);
    const items1 = [regionId, exclude];
    const callback = current.useCallback((traceId, endMonotonicMs, arg2, arg3, measurementSource) => {
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
        current = ref3.current;
        traceId = undefined;
        if (current != null) {
          traceId = current.traceId;
        }
        if (traceId !== traceId) {
          if ("include" === _require) {
            NavigationSpanTrackerDefault;
          } else {
            const obj2 = NavigationSpanTrackerDefault;
            const activeTraceElapsedMs = obj2.getActiveTraceElapsedMs(traceId, endMonotonicMs);
            if (null != activeTraceElapsedMs) {
              const obj3 = NavigationTTIRegionDebugState;
              const result = obj3.recordNavigationTTIRegionDebugMeasurement(
                traceId,
                spanComponent,
                activeTraceElapsedMs,
              );
            }
          }
          const obj6 = { traceId, source: measurementSource };
          ref3.current = obj6;
        } else {
          const tmp12 =
            "include" === _require &&
            measurementSource === NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT &&
            current.source !== NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT;
          if (tmp12) {
            const obj = NavigationSpanTrackerDefault;
            const result1 = obj.recordLateComponentLayout(traceId, spanComponent, endMonotonicMs);
          }
        }
      }
    }, items1);
    const items2 = [tmp6, tmp7, tmp5];
    const layoutEffect1 = current.useLayoutEffect(() => {
      if (ref4.current !== logger) {
        ref2.current = null;
      }
      ref4.current = logger;
      ref5.current = current;
      ref6.current = current2;
    }, items2);
    const items3 = [callback];
    const items4 = [tmp6, tmp7, tmp5, callback];
    const callback1 = current.useCallback((nativeEvent) => {
      let height;
      let height2;
      let width;
      let width2;
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
        size = { navigationKey: ref5.current, width: null, height: null };
        ({ width: obj.width, height: obj.height } = layout);
        ref.current = size;
      }
      current = ref4.current;
      if (null != current) {
        if (ref6.current) {
          const _performance = performance;
          ({ width: width2, height: height2 } = layout);
          const nowResult = performance.now();
          callback(current, nowResult, width2, height2, NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT);
        } else if (isFiniteResult) {
          const size1 = { traceId: current, width: null, height: null };
          ({ width: obj2.width, height: obj2.height } = layout);
          ref2.current = size1;
        }
      }
    }, items3);
    const effect = current.useEffect(() => {
      let height;
      let width;
      if (closure_5) {
        if (null != closure_4) {
          current2 = ref3.current;
          let traceId;
          if (current2 != null) {
            traceId = current2.traceId;
          }
          if (traceId !== closure_4) {
            const current3 = ref2.current;
            let traceId1;
            if (current3 != null) {
              traceId1 = current3.traceId;
            }
            if (traceId1 !== closure_4) {
              current = ref.current;
              if (null != current) {
                if (current.navigationKey === closure_3) {
                  let CACHED_PREVIOUS_DESTINATION =
                    require("NavigationSpanTypes").ComponentMeasurementSource.CACHED_SAME_DESTINATION;
                } else {
                  CACHED_PREVIOUS_DESTINATION =
                    require("NavigationSpanTypes").ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
                }
                const _requestAnimationFrame = requestAnimationFrame;
                let closure_2 = requestAnimationFrame(() => {
                  callback(logger, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
                });
                return () => cancelAnimationFrame(closure_2);
              }
            } else {
              const _performance = performance;
              ({ width, height } = current3);
              const nowResult = performance.now();
              callback(
                closure_4,
                nowResult,
                width,
                height,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            }
          }
        }
      }
    }, items4);
    const items5 = [navTTISurface1, regionId, exclude];
    const effect1 = current.useEffect(() => {
      const tmp = "include" === _require && null == navTTISurface1;
      if (tmp) {
        const _HermesInternal = HermesInternal;
        logger.warn("" + spanComponent + " has no NavTTISurfaceProvider; measurement is disabled.");
      }
    }, items5);
    if ("include" === exclude) {
      class R {
        constructor(nativeEvent) {
          let height;
          let height2;
          let width;
          let width2;
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
            size = { navigationKey: ref5.current, width: null, height: null };
            ({ width: obj.width, height: obj.height } = layout);
            ref.current = size;
          }
          current = ref4.current;
          if (null != current) {
            if (ref6.current) {
              const _performance = performance;
              ({ width: width2, height: height2 } = layout);
              const nowResult = performance.now();
              closure_12(
                current,
                nowResult,
                width2,
                height2,
                require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT,
              );
            } else if (isFiniteResult) {
              const size1 = { traceId: current, width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = layout);
              ref2.current = size1;
            }
          }
        }
      }
    }
    let obj2 = { onLayout: callback1 };
  }
};
