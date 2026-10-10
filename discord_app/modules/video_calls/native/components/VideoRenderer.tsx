// === Module 10894: VideoRenderer ===

// Module 10894 (VideoRenderer)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useWindowDimensions from "useWindowDimensions" /* 1497 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
createStyles.createStyles({ spinner: { height: 32, width: 32 }, center: { alignItems: "center", justifyContent: "center" }, zoomLayoutAndroid: { flex: 1 } });
const ResizeMode = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoRenderer(arg0) {
  let obj = require("c");
  const cResult = obj.c(116);
  ({ streamId, resizeMode, gestureEnabled, renderTag, videoSpinnerContext, userId, streamKey, paused } = arg0);
  if (undefined === resizeMode) {
    resizeMode = obj.CONTAIN;
  }
  ref2();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "VideoRenderer" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const surfaceDirectRendererExperiment = require("SurfaceDirectRendererExperiment").useSurfaceDirectRendererExperiment(userId, first);
  const tmpResult = require("SurfaceDirectRendererExperiment");
  [tmp10, require] = first2.useState(0);
  const tmp9 = _slicedToArray(first2.useState(0), 2);
  [tmp12, importDefault] = first2.useState(0);
  [first1, _slicedToArray] = first2.useState(0);
  [first2, closure_5] = first2.useState(0);
  const tmp11 = _slicedToArray(first2.useState(0), 2);
  [tmp18, closure_6] = first2.useState(true);
  if (cResult[1] === tmp18) {
    if (cResult[2] === tmp5) {
      if (cResult[3] === streamId) {
        if (cResult[4] === userId) {
          if (cResult[5] === videoSpinnerContext) {
            let tmp19 = cResult[6];
          }
          require("useVideoSpinnerTimer")(tmp19);
          if (cResult[7] === tmp18) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === streamId) {
                if (cResult[10] === streamKey) {
                  if (cResult[11] === userId) {
                    if (cResult[12] === videoSpinnerContext) {
                      let tmp22 = cResult[13];
                    }
                    const onReady = require("useVideoReadyTimeout")(tmp22).onReady;
                    obj4.useRef(null);
                    obj4.useRef(null);
                    const _Symbol = Symbol;
                    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                      let size = { width: 0, height: 0 };
                      cResult[14] = size;
                      let tmp26 = size;
                    } else {
                      tmp26 = cResult[14];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      function ie(nativeEvent) {
                        ({ width, height } = nativeEvent.nativeEvent);
                        const size = useWindowDimensions.getWindowDimensions();
                        const bound = Math.min(Math.sqrt(size.width * size.height * 4 / (width * height)), 1);
                        closure_3(width * bound);
                        closure_5(height * bound);
                      }
                      cResult[15] = ie;
                    }
                    if (cResult[16] !== onReady) {
                      function le() {
                        closure_1_6(false);
                        onReady();
                      }
                      cResult[16] = onReady;
                      cResult[17] = le;
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      function se(nativeEvent) {
                        ({ width, height } = nativeEvent.nativeEvent.layout);
                        _require(width);
                        importDefault(height);
                        closure_10.current = { width, height };
                      }
                      cResult[18] = se;
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                      function de(nativeEvent) {
                        const layout = nativeEvent.nativeEvent.layout;
                        const width = layout.width;
                        const height = layout.height;
                        let isAndroidResult = require("PlatformUtils").isAndroid();
                        if (!isAndroidResult) {
                          isAndroidResult = null == ref.current;
                        }
                        if (!isAndroidResult) {
                          let current = ref.current;
                          if (!tmp5) {
                            let size = { x: 0, y: 0, width, height, animated: false };
                            let result = current.scrollResponderZoomTo(size);
                            current.scrollTo({ x: 0, y: 0, animated: false });
                          }
                          const _requestAnimationFrame = requestAnimationFrame;
                          const animationFrame = requestAnimationFrame(() => {
                            if (null != ref.current) {
                              const current = ref.current;
                              let tmp3 = width <= 0;
                              if (!tmp3) {
                                tmp3 = height <= 0;
                              }
                              if (!tmp3) {
                                const size = { x: 0, y: 0, width, height, animated: false };
                                const result = current.scrollResponderZoomTo(size);
                                current.scrollTo({ x: 0, y: 0, animated: false });
                              }
                            }
                          });
                          tmp5 = width <= 0 || height <= 0;
                        }
                        const obj = require("PlatformUtils");
                      }
                      cResult[19] = de;
                    }
                    let num15 = 0;
                    if (0 !== tmp10) {
                      num15 = 0;
                      if (0 !== tmp12) {
                        num15 = 0;
                        if (0 !== first1) {
                          num15 = 0;
                          if (0 !== first2) {
                            let result = tmp10 / tmp12;
                            const result1 = first1 / first2;
                            if (resizeMode !== obj.AUTO) {
                              if (resizeMode !== tmp33.CONTAIN) {
                                num15 = 0;
                                if (resizeMode === tmp33.COVER) {
                                  num15 = result1 > result ? tmp12 / first2 : tmp10 / first1;
                                }
                              } else {
                                num15 = result > result1 ? tmp12 / first2 : tmp10 / first1;
                              }
                            } else {
                              if (result <= 1) {
                                if (result >= 1) {
                                  const CONTAIN = tmp33.CONTAIN;
                                }
                              }
                              const COVER = tmp33.COVER;
                            }
                          }
                        }
                      }
                    }
                    const _Symbol5 = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      function ve(orientation) {
                        return orientation.orientation;
                      }
                      cResult[20] = ve;
                      let tmp34 = ve;
                    } else {
                      tmp34 = cResult[20];
                    }
                    ref2 = obj4.useRef(tmp26);
                    const _Symbol6 = Symbol;
                    const store = require("DeviceOrientation").useStore(tmp34);
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      function ge() {
                        let isAndroidResult = PlatformUtils.isAndroid();
                        if (isAndroidResult) {
                          isAndroidResult = null != ref1.current;
                        }
                        if (isAndroidResult) {
                          const current = ref1.current;
                          if (current != null) {
                            current.unzoom({ animated: false });
                          }
                        }
                      }
                      cResult[21] = ge;
                      let tmp36 = ge;
                    } else {
                      tmp36 = cResult[21];
                    }
                    if (cResult[22] === tmp12) {
                      if (cResult[23] === tmp10) {
                        if (cResult[24] === num15) {
                          if (cResult[25] === first2) {
                            if (cResult[26] === first1) {
                              let tmp37 = cResult[27];
                            }
                            const layoutEffect = obj4.useLayoutEffect(tmp36, tmp37);
                            if (cResult[28] === first2) {
                              if (cResult[29] === first1) {
                                let tmp39 = cResult[30];
                                let tmp40 = cResult[31];
                              }
                              const layoutEffect1 = obj4.useLayoutEffect(tmp39, tmp40);
                              const result2 = first1 * num15;
                              class Re {
                                constructor() {
                                  obj = closure_0(closure_2[11]);
                                  if (!obj.isAndroid()) {
                                    tmp2 = null;
                                    if (null != closure_8.current) {
                                      tmp3 = closure_2;
                                      num = 0;
                                      if (closure_2 > 0) {
                                        tmp4 = closure_4;
                                        if (closure_4 > 0) {
                                          tmp5 = closure_10;
                                          ({ width, height } = closure_10.current);
                                          current = tmp.current;
                                          tmp6 = width <= 0 || height <= 0;
                                          if (!tmp6) {
                                            size = { x: 0, y: 0, width: null, height: null, animated: false };
                                            size.width = width;
                                            size.height = height;
                                            result = current.scrollResponderZoomTo(size);
                                            scrollToResult = current.scrollTo({ x: 0, y: 0, animated: false });
                                          }
                                        }
                                      }
                                    }
                                  }
                                  return;
                                }
                              }
                              if (cResult[32] === result2) {
                                const result3 = first1 * num15;
                                const result4 = first2 * num15;
                                class Re {
                                  constructor() {
                                    obj = closure_0(closure_2[11]);
                                    if (!obj.isAndroid()) {
                                      tmp2 = null;
                                      if (null != closure_8.current) {
                                        tmp3 = closure_2;
                                        num = 0;
                                        if (closure_2 > 0) {
                                          tmp4 = closure_4;
                                          if (closure_4 > 0) {
                                            tmp5 = closure_10;
                                            ({ width, height } = closure_10.current);
                                            current = tmp.current;
                                            tmp6 = width <= 0 || height <= 0;
                                            if (!tmp6) {
                                              size = { x: 0, y: 0, width: null, height: null, animated: false };
                                              size.width = width;
                                              size.height = height;
                                              result = current.scrollResponderZoomTo(size);
                                              scrollToResult = current.scrollTo({ x: 0, y: 0, animated: false });
                                            }
                                          }
                                        }
                                      }
                                    }
                                    return;
                                  }
                                }
                                const size1 = { width: result3, height: result4 };
                                cResult[35] = result3;
                                cResult[36] = result4;
                                cResult[37] = size1;
                              }
                              const size2 = { width: result2, height: tmp43 };
                              cResult[32] = result2;
                              cResult[33] = tmp43;
                              cResult[34] = size2;
                            }
                            class Re {
                              constructor() {
                                obj = closure_0(closure_2[11]);
                                if (!obj.isAndroid()) {
                                  tmp2 = null;
                                  if (null != closure_8.current) {
                                    tmp3 = closure_2;
                                    num = 0;
                                    if (closure_2 > 0) {
                                      tmp4 = closure_4;
                                      if (closure_4 > 0) {
                                        tmp5 = closure_10;
                                        ({ width, height } = closure_10.current);
                                        current = tmp.current;
                                        tmp6 = width <= 0 || height <= 0;
                                        if (!tmp6) {
                                          size = { x: 0, y: 0, width: null, height: null, animated: false };
                                          size.width = width;
                                          size.height = height;
                                          result = current.scrollResponderZoomTo(size);
                                          scrollToResult = current.scrollTo({ x: 0, y: 0, animated: false });
                                        }
                                      }
                                    }
                                  }
                                }
                                return;
                              }
                            }
                            const items = [first1, first2];
                            cResult[28] = first2;
                            cResult[29] = first1;
                            cResult[30] = Re;
                            cResult[31] = items;
                            tmp40 = items;
                            tmp39 = Re;
                          }
                        }
                      }
                    }
                    const items1 = [tmp10, tmp12, first1, first2, num15];
                    cResult[22] = tmp12;
                    cResult[23] = tmp10;
                    cResult[24] = num15;
                    cResult[25] = first2;
                    cResult[26] = first1;
                    cResult[27] = items1;
                    tmp37 = items1;
                    const tmpResult2 = require("DeviceOrientation");
                  }
                }
              }
            }
          }
          const obj3 = { streamId, userId, videoSpinnerContext, paused: tmp5, loading: tmp18, streamKey };
          cResult[7] = tmp18;
          cResult[8] = tmp5;
          cResult[9] = streamId;
          cResult[10] = streamKey;
          cResult[11] = userId;
          cResult[12] = videoSpinnerContext;
          cResult[13] = obj3;
          tmp22 = obj3;
        }
      }
    }
  }
  const obj5 = { location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused: undefined !== paused && paused, loading: tmp18 };
  cResult[1] = tmp18;
  cResult[2] = undefined !== paused && paused;
  cResult[3] = streamId;
  cResult[4] = userId;
  cResult[5] = videoSpinnerContext;
  cResult[6] = obj5;
  tmp19 = obj5;
  const tmp17 = _slicedToArray(first2.useState(true), 2);
}) : (function VideoRenderer(gestureEnabled) {
  ({ streamId, resizeMode } = gestureEnabled);
  if (resizeMode === undefined) {
    resizeMode = ref.CONTAIN;
  }
  let flag = gestureEnabled.gestureEnabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ renderTag, videoSpinnerContext, userId, paused, streamKey } = gestureEnabled);
  if (paused === undefined) {
    paused = false;
  }
  let first1;
  noop = undefined;
  c9 = undefined;
  let onReady;
  const tmp2 = onReady();
  const surfaceDirectRendererExperiment = resizeMode(5231).useSurfaceDirectRendererExperiment(userId, { location: "VideoRenderer" });
  let tmp6 = first1(noop.useState(0), 2);
  let width = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(noop.useState(0), 2);
  first1 = tmp8[0];
  noop = tmp8[1];
  const tmp10 = first1(noop.useState(0), 2);
  const first2 = tmp10[0];
  closure_6 = tmp12;
  const tmp13 = first1(noop.useState(0), 2);
  const first3 = tmp13[0];
  let obj = resizeMode(5231);
  [tmp17, c9] = first1(noop.useState(true), 2);
  width(10895)({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp17 });
  onReady = width(10896)({ streamId, userId, videoSpinnerContext, paused, loading: tmp17, streamKey }).onReady;
  noop.useRef(null);
  const ref1 = noop.useRef(null);
  ref = noop.useRef({ width: 0, height: 0 });
  const items = [tmp10[1], tmp13[1]];
  const callback = noop.useCallback((nativeEvent) => {
    ({ width, height } = nativeEvent.nativeEvent);
    const size = useWindowDimensions.getWindowDimensions();
    const bound = Math.min(Math.sqrt(size.width * size.height * 4 / (width * height)), 1);
    closure_6(width * bound);
    closure_8(height * bound);
  }, items);
  const items1 = [onReady];
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    onReady();
  }, items1);
  const callback2 = noop.useCallback((nativeEvent) => {
    ({ width, height } = nativeEvent.nativeEvent.layout);
    dependencyMap(width);
    closure_4(height);
    closure_13.current = { width, height };
  }, []);
  const items2 = [width, first1, first2, first3, resizeMode];
  const callback3 = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    width = layout.width;
    const height = layout.height;
    let isAndroidResult = resizeMode(1382).isAndroid();
    if (!isAndroidResult) {
      isAndroidResult = null == ref.current;
    }
    if (!isAndroidResult) {
      let current = ref.current;
      if (!tmp5) {
        let size = { x: 0, y: 0, width, height, animated: false };
        let result = current.scrollResponderZoomTo(size);
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (null != ref.current) {
          const current = ref.current;
          let tmp3 = width <= 0;
          if (!tmp3) {
            tmp3 = height <= 0;
          }
          if (!tmp3) {
            const size = { x: 0, y: 0, width, height, animated: false };
            const result = current.scrollResponderZoomTo(size);
            current.scrollTo({ x: 0, y: 0, animated: false });
          }
        }
      });
      tmp5 = width <= 0 || height <= 0;
    }
    const obj = resizeMode(1382);
  }, []);
  const memo = noop.useMemo(() => {
    if (0 !== first) {
      if (0 !== first1) {
        if (0 !== first2) {
          if (0 !== first3) {
            const result = first / first1;
            const result1 = first2 / first3;
            if (resizeMode !== obj.AUTO) {
              if (resizeMode !== obj.CONTAIN) {
                if (resizeMode !== obj.COVER) {
                  return 0;
                }
              }
            } else {
              if (result <= 1) {
                if (result >= 1) {
                  const CONTAIN = obj.CONTAIN;
                }
              }
              const COVER = obj.COVER;
            }
          }
        }
      }
    }
    return 0;
  }, items2);
  const tmp16 = first1(noop.useState(true), 2);
  const items3 = [width, first1, first2, first3, memo];
  const store = resizeMode(8450).useStore((orientation) => orientation.orientation);
  const layoutEffect = noop.useLayoutEffect(() => {
    let isAndroidResult = PlatformUtils.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = null != ref1.current;
    }
    if (isAndroidResult) {
      const current = ref1.current;
      if (current != null) {
        current.unzoom({ animated: false });
      }
    }
  }, items3);
  const items4 = [first2, first3];
  const layoutEffect1 = noop.useLayoutEffect(() => {
    if (!obj.isAndroid()) {
      if (null != ref.current) {
        if (first2 > 0) {
          if (first3 > 0) {
            ({ width, height } = ref.current);
            const current = tmp.current;
            if (!tmp6) {
              const size = { x: 0, y: 0, width, height, animated: false };
              const result = current.scrollResponderZoomTo(size);
              current.scrollTo({ x: 0, y: 0, animated: false });
            }
            tmp6 = width <= 0 || height <= 0;
          }
        }
      }
    }
    obj = PlatformUtils;
  }, items4);
  const items5 = [memo, first2, first3];
  const memo1 = noop.useMemo(() => {
    const size = { width: first2 * memo, height: first3 * memo };
    return size;
  }, items5);
  const items6 = [memo, first2, first3];
  const items7 = [first2, memo, width, first3, first1];
  const memo2 = noop.useMemo(() => {
    const size = { width: first2 * memo, height: first3 * memo };
    return size;
  }, items6);
  const items8 = [width, first1];
  const memo3 = noop.useMemo(() => {
    const bound = Math.min(first2 * memo, first);
    const bound1 = Math.min(first3 * memo, first1);
    const size = { position: "absolute", left: (first - bound) / 2, top: (first1 - bound1) / 2, width: bound, height: bound1, alignItems: "center", justifyContent: "center", overflow: "hidden" };
    return size;
  }, items7);
  const memo4 = noop.useMemo(() => {
    const size = { width, height: first1 };
    return size;
  }, items8);
  const items9 = [first2, memo, width, first3, first1];
  let tmp35 = null;
  const memo5 = noop.useMemo(() => {
    const bound = Math.min(first3 * memo, first1);
    const rect = { position: "absolute", top: first1 / 2 - bound / 2, right: first / 2 - Math.min(first2 * memo, first) / 2 };
    return rect;
  }, items9);
  if (tmp17) {
    const obj3 = { animate: true, style: tmp2.spinner };
    tmp35 = ref(tmp18(10898), obj3);
  }
  const tmp37 = store === resizeMode(8450).OrientationType.PORTRAIT;
  const obj2 = resizeMode(8450);
  if (tmp3Result.isAndroid()) {
    const obj4 = { onLayout: callback2, style: null, children: null };
    const items10 = [tmp2.center, closure_6.absoluteFillObject];
    obj4.style = items10;
    const obj5 = { ref: ref1, style: tmp2.zoomLayoutAndroid, minimumZoomScale: 1, gestureEnabled: flag, children: null };
    const obj6 = { collapsable: false, style: null, children: null };
    let size = { width, height: first1, alignItems: "center", justifyContent: "center" };
    obj6.style = size;
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo2 };
    const items11 = [ref(tmp18(10899), obj7), tmp35];
    obj6.children = items11;
    obj5.children = c9(first2, obj6);
    const items12 = [ref(tmp18(10901), obj5), ];
    const obj8 = { style: memo5, children: null };
    let tmp56 = null;
    if (!tmp17) {
      tmp56 = null;
      if (flag) {
        tmp56 = null;
        if (tmp37) {
          let renderTagResult;
          if (renderTag != null) {
            renderTagResult = renderTag();
          }
          tmp56 = renderTagResult;
        }
      }
    }
    obj8.children = tmp56;
    items12[1] = ref(first2, obj8);
    obj4.children = items12;
    let tmp43Result1 = c9(tmp52, obj4);
    const tmp18Result = tmp18(10901);
  } else if (flag) {
    const obj9 = { ref, onLayout: callback2, style: closure_6.absoluteFillObject, contentContainerStyle: memo4, bounces: false, pinchGestureEnabled: !tmp17, maximumZoomScale: 8, minimumZoomScale: 1, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, scrollEventThrottle: 16, children: null };
    const obj10 = { collapsable: false, style: memo4, onLayout: callback3, children: null };
    const obj11 = { style: memo3, children: null };
    const obj12 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    const items13 = [ref(tmp18(10899), obj12), ];
    let tmp48 = null;
    if (tmp37) {
      let renderTagResult1;
      if (renderTag != null) {
        renderTagResult1 = renderTag();
      }
      tmp48 = renderTagResult1;
    }
    items13[1] = tmp48;
    obj11.children = items13;
    const items14 = [c9(first2, obj11), ];
    let tmp43Result = null;
    if (null != tmp35) {
      const obj13 = { style: null, children: null };
      const items15 = [tmp45.absoluteFillObject, tmp2.center];
      obj13.style = items15;
      obj13.children = tmp35;
      tmp43Result = tmp43(tmp47, obj13);
    }
    items14[1] = tmp43Result;
    obj10.children = items14;
    obj9.children = c9(first2, obj10);
    tmp43Result1 = tmp43(first3, obj9);
    tmp45 = closure_6;
  } else {
    const obj14 = { onLayout: callback2, style: null, children: null };
    const items16 = [tmp2.center, closure_6.absoluteFillObject];
    obj14.style = items16;
    const obj15 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    const items17 = [ref(tmp18(10899), obj15), tmp35];
    obj14.children = items17;
    tmp43Result1 = c9(first2, obj14);
  }
  return tmp43Result1;
}));
export { ResizeMode };