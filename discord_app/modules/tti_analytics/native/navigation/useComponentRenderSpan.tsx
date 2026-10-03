// === Module 16476: useComponentRenderSpan ===

// Module 16476 (useComponentRenderSpan)
import LoggerDefault from "Logger" /* 3 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 16478 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16479 */;
import NavigationTTIRegionDebugState from "NavigationTTIRegionDebugState" /* 16482 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = new LoggerDefault("NavTTISurface");
const ReactCompilerGating = fn(558);
let current2 = ReactCompilerGating.isReactCompilerEnabled();
let size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx");

export const useNavigationTTIRegionMeasurement = function useNavigationTTIRegionMeasurement(exclude, regionId) {
  if (current2) {
    closure_129_0 = exclude;
    closure_129_1 = regionId;
    const cResult = require("c").c(25);
    let obj3 = require("c");
    const navTTISurface = require("NavTTISurfaceContext").useNavTTISurface();
    closure_129_2 = navTTISurface;
    let str2;
    if (navTTISurface != null) {
      str2 = navTTISurface.navigationKey;
    }
    if (str2 == null) {
      str2 = "";
    }
    closure_129_3 = str2;
    let activeTraceId;
    if (navTTISurface != null) {
      activeTraceId = navTTISurface.activeTraceId;
    }
    if (activeTraceId == null) {
      activeTraceId = null;
    }
    closure_129_4 = activeTraceId;
    let flag2;
    if (navTTISurface != null) {
      flag2 = navTTISurface.isVisible;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    closure_129_5 = flag2;
    closure_129_6 = current.useRef(null);
    closure_129_7 = current.useRef(null);
    closure_129_8 = current.useRef(null);
    closure_129_9 = current.useRef(null);
    closure_129_10 = current.useRef(str2);
    closure_129_11 = current.useRef(false);
    if (cResult[0] === regionId) {
      if (cResult[1] === exclude) {
        let tmp19 = cResult[2];
      }
      closure_129_12 = tmp19;
      if (cResult[3] === activeTraceId) {
        if (cResult[4] === flag2) {
          if (cResult[5] === str2) {
            let tmp20 = cResult[6];
            let tmp21 = cResult[7];
          }
          const layoutEffect = obj5.useLayoutEffect(tmp20, tmp21);
          if (cResult[8] !== tmp19) {
            class R {
              constructor(arg0) {
                layout = exclude.nativeEvent.layout;
                ({ width, height } = layout);
                isFiniteResult = width > 0 && height > 0;
                if (isFiniteResult) {
                  tmp2 = globalThis;
                  _Number = Number;
                  isFiniteResult = Number.isFinite(width);
                }
                if (isFiniteResult) {
                  tmp3 = globalThis;
                  _Number2 = Number;
                  isFiniteResult = Number.isFinite(height);
                }
                if (isFiniteResult) {
                  tmp4 = closure_6;
                  size = { navigationKey: null, width: null, height: null };
                  tmp5 = closure_10;
                  size.navigationKey = closure_10.current;
                  ({ width: obj.width, height: obj.height } = layout);
                  closure_6.current = size;
                }
                current = closure_9.current;
                if (null != current) {
                  tmp14 = closure_11;
                  if (closure_11.current) {
                    tmp7 = closure_12;
                    tmp8 = globalThis;
                    _performance = performance;
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    nowResult = performance.now();
                    ({ width: width2, height: height2 } = layout);
                    tmp12 = current;
                    tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
                  } else if (isFiniteResult) {
                    tmp6 = closure_7;
                    size1 = { traceId: null, width: null, height: null };
                    size1.traceId = current;
                    ({ width: obj2.width, height: obj2.height } = layout);
                    closure_7.current = size1;
                  }
                }
                return;
              }
            }
            cResult[8] = tmp19;
            class N {
              constructor() {
                tmp = closure_9;
                tmp2 = c4;
                if (closure_9.current !== c4) {
                  tmp3 = closure_7;
                  tmp4 = null;
                  closure_7.current = null;
                }
                tmp.current = tmp2;
                closure_10.current = c3;
                closure_11.current = c5;
                return;
              }
            }
            class E {
              constructor() {
                if (c5) {
                  tmp = c4;
                  tmp2 = null;
                  if (null != c4) {
                    tmp19 = closure_8;
                    current2 = closure_8.current;
                    traceId = undefined;
                    if (current2 != null) {
                      traceId = current2.traceId;
                    }
                    if (traceId !== tmp) {
                      tmp20 = closure_7;
                      current3 = closure_7.current;
                      traceId1 = undefined;
                      if (current3 != null) {
                        traceId1 = current3.traceId;
                      }
                      if (traceId1 !== tmp) {
                        tmp12 = closure_6;
                        current = closure_6.current;
                        if (null != current) {
                          tmp13 = c3;
                          if (current.navigationKey === c3) {
                            tmp16 = closure_0;
                            tmp17 = closure_2;
                            CACHED_PREVIOUS_DESTINATION = closure_0(closure_2[5]).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
                          } else {
                            tmp14 = closure_0;
                            tmp15 = closure_2;
                            CACHED_PREVIOUS_DESTINATION = closure_0(closure_2[5]).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
                          }
                          closure_1 = CACHED_PREVIOUS_DESTINATION;
                          tmp18 = globalThis;
                          _requestAnimationFrame = requestAnimationFrame;
                          closure_2 = requestAnimationFrame(() => {
                            callback(closure_4, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
                          });
                          return () => cancelAnimationFrame(closure_2);
                        }
                      } else {
                        tmp5 = closure_12;
                        tmp6 = globalThis;
                        _performance = performance;
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        nowResult = performance.now();
                        ({ width, height } = current3);
                        tmp10 = tmp;
                        tmp11 = closure_12(tmp, nowResult, width, height, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
                      }
                    }
                  }
                }
                return;
              }
            }
          } else {
            class R {
              constructor(arg0) {
                layout = exclude.nativeEvent.layout;
                ({ width, height } = layout);
                isFiniteResult = width > 0 && height > 0;
                if (isFiniteResult) {
                  tmp2 = globalThis;
                  _Number = Number;
                  isFiniteResult = Number.isFinite(width);
                }
                if (isFiniteResult) {
                  tmp3 = globalThis;
                  _Number2 = Number;
                  isFiniteResult = Number.isFinite(height);
                }
                if (isFiniteResult) {
                  tmp4 = closure_6;
                  size = { navigationKey: null, width: null, height: null };
                  tmp5 = closure_10;
                  size.navigationKey = closure_10.current;
                  ({ width: obj.width, height: obj.height } = layout);
                  closure_6.current = size;
                }
                current = closure_9.current;
                if (null != current) {
                  tmp14 = closure_11;
                  if (closure_11.current) {
                    tmp7 = closure_12;
                    tmp8 = globalThis;
                    _performance = performance;
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    nowResult = performance.now();
                    ({ width: width2, height: height2 } = layout);
                    tmp12 = current;
                    tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
                  } else if (isFiniteResult) {
                    tmp6 = closure_7;
                    size1 = { traceId: null, width: null, height: null };
                    size1.traceId = current;
                    ({ width: obj2.width, height: obj2.height } = layout);
                    closure_7.current = size1;
                  }
                }
                return;
              }
            }
          }
          class N {
            constructor() {
              tmp = closure_9;
              tmp2 = c4;
              if (closure_9.current !== c4) {
                tmp3 = closure_7;
                tmp4 = null;
                closure_7.current = null;
              }
              tmp.current = tmp2;
              closure_10.current = c3;
              closure_11.current = c5;
              return;
            }
          }
          class E {
            constructor() {
              if (c5) {
                tmp = c4;
                tmp2 = null;
                if (null != c4) {
                  tmp19 = closure_8;
                  current2 = closure_8.current;
                  traceId = undefined;
                  if (current2 != null) {
                    traceId = current2.traceId;
                  }
                  if (traceId !== tmp) {
                    tmp20 = closure_7;
                    current3 = closure_7.current;
                    traceId1 = undefined;
                    if (current3 != null) {
                      traceId1 = current3.traceId;
                    }
                    if (traceId1 !== tmp) {
                      tmp12 = closure_6;
                      current = closure_6.current;
                      if (null != current) {
                        tmp13 = c3;
                        if (current.navigationKey === c3) {
                          tmp16 = closure_0;
                          tmp17 = closure_2;
                          CACHED_PREVIOUS_DESTINATION = closure_0(closure_2[5]).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
                        } else {
                          tmp14 = closure_0;
                          tmp15 = closure_2;
                          CACHED_PREVIOUS_DESTINATION = closure_0(closure_2[5]).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
                        }
                        closure_1 = CACHED_PREVIOUS_DESTINATION;
                        tmp18 = globalThis;
                        _requestAnimationFrame = requestAnimationFrame;
                        closure_2 = requestAnimationFrame(() => {
                          callback(closure_4, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
                        });
                        return () => cancelAnimationFrame(closure_2);
                      }
                    } else {
                      tmp5 = closure_12;
                      tmp6 = globalThis;
                      _performance = performance;
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      nowResult = performance.now();
                      ({ width, height } = current3);
                      tmp10 = tmp;
                      tmp11 = closure_12(tmp, nowResult, width, height, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
                    }
                  }
                }
              }
              return;
            }
          }
          const items = [activeTraceId, flag2, str2, tmp19];
          cResult[10] = activeTraceId;
          cResult[11] = flag2;
          cResult[12] = str2;
          cResult[13] = tmp19;
          cResult[14] = E;
          cResult[15] = items;
        }
      }
      class N {
        constructor() {
          tmp = closure_9;
          tmp2 = c4;
          if (closure_9.current !== c4) {
            tmp3 = closure_7;
            tmp4 = null;
            closure_7.current = null;
          }
          tmp.current = tmp2;
          closure_10.current = c3;
          closure_11.current = c5;
          return;
        }
      }
      tmp22[0] = activeTraceId;
      tmp22[1] = flag2;
      tmp22[2] = str2;
      cResult[3] = activeTraceId;
      cResult[4] = flag2;
      cResult[5] = str2;
      cResult[6] = N;
      cResult[7] = tmp22;
      tmp21 = tmp22;
      tmp20 = N;
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
        current = closure_8.current;
        traceId = undefined;
        if (current != null) {
          traceId = current.traceId;
        }
        if (traceId !== traceId) {
          if ("include" === _require) {
            const obj5 = { spanComponent, endMonotonicMs, measurementSource };
            if (obj4.recordComponentSpan(traceId, obj5)) {
              const obj6 = { traceId, source: measurementSource };
              closure_8.current = obj6;
            }
            obj4 = NavigationSpanTrackerDefault;
          } else {
            const activeTraceElapsedMs = NavigationSpanTrackerDefault.getActiveTraceElapsedMs(traceId, endMonotonicMs);
            if (null != activeTraceElapsedMs) {
              const result = NavigationTTIRegionDebugState.recordNavigationTTIRegionDebugMeasurement(traceId, spanComponent, activeTraceElapsedMs);
            }
          }
        } else {
          let tmp12 = "include" === _require;
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
    };
    cResult[0] = regionId;
    cResult[1] = exclude;
    cResult[2] = fn;
    tmp19 = fn;
    let obj4 = require("NavTTISurfaceContext");
    obj5 = current;
  } else {
    class R {
      constructor(arg0) {
        layout = exclude.nativeEvent.layout;
        ({ width, height } = layout);
        isFiniteResult = width > 0 && height > 0;
        if (isFiniteResult) {
          tmp2 = globalThis;
          _Number = Number;
          isFiniteResult = Number.isFinite(width);
        }
        if (isFiniteResult) {
          tmp3 = globalThis;
          _Number2 = Number;
          isFiniteResult = Number.isFinite(height);
        }
        if (isFiniteResult) {
          tmp4 = closure_6;
          size = { navigationKey: null, width: null, height: null };
          tmp5 = closure_10;
          size.navigationKey = closure_10.current;
          ({ width: obj.width, height: obj.height } = layout);
          closure_6.current = size;
        }
        current = closure_9.current;
        if (null != current) {
          tmp14 = closure_11;
          if (closure_11.current) {
            tmp7 = closure_12;
            tmp8 = globalThis;
            _performance = performance;
            tmp10 = closure_0;
            tmp11 = closure_2;
            nowResult = performance.now();
            ({ width: width2, height: height2 } = layout);
            tmp12 = current;
            tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
          } else if (isFiniteResult) {
            tmp6 = closure_7;
            size1 = { traceId: null, width: null, height: null };
            size1.traceId = current;
            ({ width: obj2.width, height: obj2.height } = layout);
            closure_7.current = size1;
          }
        }
        return;
      }
    }
    const spanComponent = regionId;
    class N {
      constructor() {
        tmp = closure_9;
        tmp2 = c4;
        if (closure_9.current !== c4) {
          tmp3 = closure_7;
          tmp4 = null;
          closure_7.current = null;
        }
        tmp.current = tmp2;
        closure_10.current = c3;
        closure_11.current = c5;
        return;
      }
    }
    class E {
      constructor() {
        if (c5) {
          tmp = c4;
          tmp2 = null;
          if (null != c4) {
            tmp19 = closure_8;
            current2 = closure_8.current;
            traceId = undefined;
            if (current2 != null) {
              traceId = current2.traceId;
            }
            if (traceId !== tmp) {
              tmp20 = closure_7;
              current3 = closure_7.current;
              traceId1 = undefined;
              if (current3 != null) {
                traceId1 = current3.traceId;
              }
              if (traceId1 !== tmp) {
                tmp12 = closure_6;
                current = closure_6.current;
                if (null != current) {
                  tmp13 = c3;
                  if (current.navigationKey === c3) {
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    CACHED_PREVIOUS_DESTINATION = closure_0(closure_2[5]).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
                  } else {
                    tmp14 = closure_0;
                    tmp15 = closure_2;
                    CACHED_PREVIOUS_DESTINATION = closure_0(closure_2[5]).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
                  }
                  closure_1 = CACHED_PREVIOUS_DESTINATION;
                  tmp18 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  closure_2 = requestAnimationFrame(() => {
                    callback(closure_4, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
                  });
                  return () => cancelAnimationFrame(closure_2);
                }
              } else {
                tmp5 = closure_12;
                tmp6 = globalThis;
                _performance = performance;
                tmp8 = closure_0;
                tmp9 = closure_2;
                nowResult = performance.now();
                ({ width, height } = current3);
                tmp10 = tmp;
                tmp11 = closure_12(tmp, nowResult, width, height, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
              }
            }
          }
        }
        return;
      }
    }
    navTTISurface1 = require("NavTTISurfaceContext").useNavTTISurface();
    if (navTTISurface1 != null) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
    }
    if (undefined == null) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
    }
    current = tmp4;
    if (navTTISurface1 != null) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
    }
    if (undefined == null) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
    }
    const logger = tmp5;
    if (navTTISurface1 != null) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
    }
    if (undefined == null) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
    }
    current2 = tmp6;
    current.useRef(null);
    current.useRef(null);
    current.useRef(null);
    closure_9 = current.useRef(null);
    current.useRef(undefined);
    current.useRef(false);
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
        current = closure_8.current;
        traceId = undefined;
        if (current != null) {
          traceId = current.traceId;
        }
        if (traceId !== traceId) {
          if ("include" === _require) {
            const obj5 = { spanComponent, endMonotonicMs, measurementSource };
            if (obj4.recordComponentSpan(traceId, obj5)) {
              const obj6 = { traceId, source: measurementSource };
              closure_8.current = obj6;
            }
            obj4 = NavigationSpanTrackerDefault;
          } else {
            const activeTraceElapsedMs = NavigationSpanTrackerDefault.getActiveTraceElapsedMs(traceId, endMonotonicMs);
            if (null != activeTraceElapsedMs) {
              const result = NavigationTTIRegionDebugState.recordNavigationTTIRegionDebugMeasurement(traceId, spanComponent, activeTraceElapsedMs);
            }
          }
        } else {
          let tmp12 = "include" === _require;
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
    }, items1);
    const items2 = [undefined, undefined, undefined];
    const layoutEffect1 = current.useLayoutEffect(() => {
      if (closure_9.current !== current) {
        closure_7.current = null;
      }
      closure_9.current = current;
      closure_10.current = current;
      closure_11.current = current2;
    }, items2);
    const items3 = [callback];
    const items4 = [undefined, undefined, undefined, callback];
    const callback1 = current.useCallback((nativeEvent) => {
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
        const size = { navigationKey: ref3.current, width: null, height: null };
        ({ width: obj.width, height: obj.height } = layout);
        closure_6.current = size;
      }
      current = closure_9.current;
      if (null != current) {
        if (ref4.current) {
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
    }, items3);
    const effect = current.useEffect(() => {
      if (closure_5) {
        if (null != closure_4) {
          current2 = closure_8.current;
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
                  let CACHED_PREVIOUS_DESTINATION = require("NavigationSpanTypes").ComponentMeasurementSource.CACHED_SAME_DESTINATION;
                } else {
                  CACHED_PREVIOUS_DESTINATION = require("NavigationSpanTypes").ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
                }
                const _requestAnimationFrame = requestAnimationFrame;
                closure_2 = requestAnimationFrame(() => {
                  callback(closure_4, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
                });
                return () => cancelAnimationFrame(closure_2);
              }
            } else {
              const _performance = performance;
              ({ width, height } = current3);
              callback(closure_4, performance.now(), width, height, require("NavigationSpanTypes").ComponentMeasurementSource.ON_LAYOUT);
              const nowResult = performance.now();
            }
          }
        }
      }
    }, items4);
    const items5 = [navTTISurface1, regionId, exclude];
    const effect1 = current.useEffect(() => {
      let tmp = "include" === _require;
      if (tmp) {
        tmp = null == navTTISurface1;
      }
      if (tmp) {
        const _HermesInternal = HermesInternal;
        logger.warn("" + closure_1 + " has no NavTTISurfaceProvider; measurement is disabled.");
      }
    }, items5);
    if ("include" === exclude) {
      class R {
        constructor(arg0) {
          layout = exclude.nativeEvent.layout;
          ({ width, height } = layout);
          isFiniteResult = width > 0 && height > 0;
          if (isFiniteResult) {
            tmp2 = globalThis;
            _Number = Number;
            isFiniteResult = Number.isFinite(width);
          }
          if (isFiniteResult) {
            tmp3 = globalThis;
            _Number2 = Number;
            isFiniteResult = Number.isFinite(height);
          }
          if (isFiniteResult) {
            tmp4 = closure_6;
            size = { navigationKey: null, width: null, height: null };
            tmp5 = closure_10;
            size.navigationKey = closure_10.current;
            ({ width: obj.width, height: obj.height } = layout);
            closure_6.current = size;
          }
          current = closure_9.current;
          if (null != current) {
            tmp14 = closure_11;
            if (closure_11.current) {
              tmp7 = closure_12;
              tmp8 = globalThis;
              _performance = performance;
              tmp10 = closure_0;
              tmp11 = closure_2;
              nowResult = performance.now();
              ({ width: width2, height: height2 } = layout);
              tmp12 = current;
              tmp13 = closure_12(current, nowResult, width2, height2, closure_0(closure_2[5]).ComponentMeasurementSource.ON_LAYOUT);
            } else if (isFiniteResult) {
              tmp6 = closure_7;
              size1 = { traceId: null, width: null, height: null };
              size1.traceId = current;
              ({ width: obj2.width, height: obj2.height } = layout);
              closure_7.current = size1;
            }
          }
          return;
        }
      }
      return obj2;
    }
    obj2 = { onLayout: callback1 };
    let obj = require("NavTTISurfaceContext");
  }
};