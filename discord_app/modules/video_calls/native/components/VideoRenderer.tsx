// discord_app/modules/video_calls/native/components/VideoRenderer.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensions from "../../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, ref;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let ref2 = createStyles.createStyles({
  spinner: { height: 32, width: 32 },
  center: { alignItems: "center", justifyContent: "center" },
  zoomLayoutAndroid: { flex: 1 },
});
const ResizeMode = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let COVER;
        let closure_3;
        let closure_5;
        let closure_6;
        let first;
        let first1;
        let first2;
        let gestureEnabled;
        let paused;
        let renderTag;
        let require;
        let resizeMode;
        let streamId;
        let streamKey;
        let tmp10;
        let tmp12;
        let tmp18;
        let userId;
        let videoSpinnerContext;
        let obj = require("react");
        const cResult = obj.c(116);
        ({ streamId, resizeMode, gestureEnabled, renderTag, videoSpinnerContext, userId, streamKey, paused } = arg0);
        if (undefined === resizeMode) {
          resizeMode = obj.CONTAIN;
        }
        let tmp5 = undefined !== paused && paused;
        let tmp6 = ref2();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "VideoRenderer" };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const tmpResult = require("SurfaceDirectRendererExperiment");
        const surfaceDirectRendererExperiment = tmpResult.useSurfaceDirectRendererExperiment(userId, first);
        [tmp10, require] = first2.useState(0);
        _slicedToArray(first2.useState(0), 2);
        [tmp12, importDefault] = first2.useState(0);
        _slicedToArray(first2.useState(0), 2);
        [first1, _slicedToArray] = first2.useState(0);
        [first2, closure_5] = first2.useState(0);
        [tmp18, closure_6] = first2.useState(true);
        _slicedToArray(first2.useState(true), 2);
        if (cResult[1] === tmp18) {
          if (cResult[2] === tmp5) {
            if (cResult[3] === streamId) {
              if (cResult[4] === userId) {
                let tmp19;
                if (cResult[5] === videoSpinnerContext) {
                  tmp19 = cResult[6];
                }
                require("useVideoSpinnerTimer")(tmp19);
                if (cResult[7] === tmp18) {
                  if (cResult[8] === tmp5) {
                    if (cResult[9] === streamId) {
                      if (cResult[10] === streamKey) {
                        if (cResult[11] === userId) {
                          let tmp22;
                          let tmp26;
                          let tmp34;
                          let tmp36;
                          if (cResult[12] === videoSpinnerContext) {
                            tmp22 = cResult[13];
                          }
                          const onReady = require("useVideoReadyTimeout")(tmp22).onReady;
                          ref = obj4.useRef(null);
                          const ref1 = obj4.useRef(null);
                          const _Symbol = Symbol;
                          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                            size = { width: 0, height: 0 };
                            cResult[14] = size;
                            tmp26 = size;
                          } else {
                            tmp26 = cResult[14];
                          }
                          const _Symbol2 = Symbol;
                          ref2 = first2.useRef(tmp26);
                          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                            function ie(nativeEvent) {
                              let height;
                              let width;
                              ({ width, height } = nativeEvent.nativeEvent);
                              const obj = useWindowDimensions;
                              size = obj.getWindowDimensions();
                              const bound = Math.min(Math.sqrt((size.width * size.height * 4) / (width * height)), 1);
                              closure_3(width * bound);
                              closure_5(height * bound);
                            }
                            cResult[15] = ie;
                          }
                          if (cResult[16] !== onReady) {
                            function le() {
                              closure_6(false);
                              onReady();
                            }
                            cResult[16] = onReady;
                            cResult[17] = le;
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                            function se(nativeEvent) {
                              let height;
                              let width;
                              ({ width, height } = nativeEvent.nativeEvent.layout);
                              _require(width);
                              importDefault(height);
                              ref.current = { width, height };
                            }
                            cResult[18] = se;
                          }
                          const _Symbol4 = Symbol;
                          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                            function de(nativeEvent) {
                              const layout = nativeEvent.nativeEvent.layout;
                              const width = layout.width;
                              const height = layout.height;
                              const obj = require("PlatformUtils");
                              let isAndroidResult = obj.isAndroid();
                              if (!isAndroidResult) {
                                let tmp3 = null;
                                isAndroidResult = null == ref.current;
                              }
                              if (!isAndroidResult) {
                                let current = ref.current;
                                const tmp5 = width <= 0 || height <= 0;
                                if (!tmp5) {
                                  size = { x: 0, y: 0, width, height, animated: false };
                                  let result = current.scrollResponderZoomTo(size);
                                  current.scrollTo({ x: 0, y: 0, animated: false });
                                }
                                const _requestAnimationFrame = requestAnimationFrame;
                                const animationFrame = requestAnimationFrame(() => {
                                  if (null != ref.current) {
                                    const current = ref.current;
                                    const tmp3 = width <= 0 || height <= 0;
                                    if (!tmp3) {
                                      size = { x: 0, y: 0, width, height, animated: false };
                                      const result = current.scrollResponderZoomTo(size);
                                      current.scrollTo({ x: 0, y: 0, animated: false });
                                    }
                                  }
                                });
                              }
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
                                  if (resizeMode === obj.AUTO) {
                                    if (result <= 1) {
                                      if (result < 1) {
                                        resizeMode = COVER;
                                      }
                                      COVER = tmp33.CONTAIN;
                                    }
                                    COVER = tmp33.COVER;
                                  }
                                  if (resizeMode !== obj.CONTAIN) {
                                    num15 = 0;
                                    if (resizeMode === obj.COVER) {
                                      num15 = result1 > result ? tmp12 / first2 : tmp10 / first1;
                                    }
                                  } else {
                                    num15 = result > result1 ? tmp12 / first2 : tmp10 / first1;
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
                            tmp34 = ve;
                          } else {
                            tmp34 = cResult[20];
                          }
                          const _Symbol6 = Symbol;
                          const tmpResult2 = require("DeviceOrientation");
                          const store = tmpResult2.useStore(tmp34);
                          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                            function ge() {
                              const obj = PlatformUtils;
                              const isAndroidResult = obj.isAndroid() && null != ref1.current;
                              if (isAndroidResult) {
                                const current = ref1.current;
                                if (current != null) {
                                  current.unzoom({ animated: false });
                                }
                              }
                            }
                            cResult[21] = ge;
                            tmp36 = ge;
                          } else {
                            tmp36 = cResult[21];
                          }
                          if (cResult[22] === tmp12) {
                            if (cResult[23] === tmp10) {
                              if (cResult[24] === num15) {
                                if (cResult[25] === first2) {
                                  let tmp37;
                                  if (cResult[26] === first1) {
                                    tmp37 = cResult[27];
                                  }
                                  const layoutEffect = obj4.useLayoutEffect(tmp36, tmp37);
                                  if (cResult[28] === first2) {
                                    let tmp39;
                                    let tmp40;
                                    if (cResult[29] === first1) {
                                      tmp39 = cResult[30];
                                      tmp40 = cResult[31];
                                    }
                                    const layoutEffect1 = obj4.useLayoutEffect(tmp39, tmp40);
                                    const result2 = first1 * num15;
                                    class Re {
                                      constructor() {
                                        let height;
                                        let width;
                                        const obj = PlatformUtils;
                                        if (!obj.isAndroid()) {
                                          if (null != ref.current) {
                                            if (first1 > 0) {
                                              if (first2 > 0) {
                                                ({ width, height } = ref.current);
                                                const current = tmp.current;
                                                const tmp6 = width <= 0 || height <= 0;
                                                if (!tmp6) {
                                                  size = { x: 0, y: 0, width, height, animated: false };
                                                  const result = current.scrollResponderZoomTo(size);
                                                  current.scrollTo({ x: 0, y: 0, animated: false });
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (cResult[32] === result2) {
                                      const result3 = first1 * num15;
                                      const result4 = first2 * num15;
                                      class Re {
                                        constructor() {
                                          let height;
                                          let width;
                                          const obj = PlatformUtils;
                                          if (!obj.isAndroid()) {
                                            if (null != ref.current) {
                                              if (first1 > 0) {
                                                if (first2 > 0) {
                                                  ({ width, height } = ref.current);
                                                  const current = tmp.current;
                                                  const tmp6 = width <= 0 || height <= 0;
                                                  if (!tmp6) {
                                                    size = { x: 0, y: 0, width, height, animated: false };
                                                    const result = current.scrollResponderZoomTo(size);
                                                    current.scrollTo({ x: 0, y: 0, animated: false });
                                                  }
                                                }
                                              }
                                            }
                                          }
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
                                      let height;
                                      let width;
                                      const obj = PlatformUtils;
                                      if (!obj.isAndroid()) {
                                        if (null != ref.current) {
                                          if (first1 > 0) {
                                            if (first2 > 0) {
                                              ({ width, height } = ref.current);
                                              const current = tmp.current;
                                              const tmp6 = width <= 0 || height <= 0;
                                              if (!tmp6) {
                                                size = { x: 0, y: 0, width, height, animated: false };
                                                const result = current.scrollResponderZoomTo(size);
                                                current.scrollTo({ x: 0, y: 0, animated: false });
                                              }
                                            }
                                          }
                                        }
                                      }
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
        const obj5 = { location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused: tmp5, loading: tmp18 };
        cResult[1] = tmp18;
        cResult[2] = tmp5;
        cResult[3] = streamId;
        cResult[4] = userId;
        cResult[5] = videoSpinnerContext;
        cResult[6] = obj5;
        tmp19 = obj5;
      }
    : (gestureEnabled) => {
        let _undefined;
        let c9;
        let closure_2;
        let closure_4;
        let closure_8;
        let items10;
        let items11;
        let items12;
        let items13;
        let items14;
        let items15;
        let items16;
        let items17;
        let obj10;
        let obj6;
        let paused;
        let renderTag;
        let resizeMode;
        let streamId;
        let streamKey;
        let tmp17;
        let tmp43Result1;
        let tmp56;
        let userId;
        let videoSpinnerContext;
        ({ streamId, resizeMode } = gestureEnabled);
        if (resizeMode === undefined) {
          const tmp = ref;
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
        react = undefined;
        c9 = undefined;
        let onReady;
        let tmp2 = onReady();
        let tmp3 = resizeMode;
        let obj = resizeMode(9106);
        const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, {
          location: "VideoRenderer",
        });
        let tmp6 = first1(react.useState(0), 2);
        let width = tmp6[0];
        dependencyMap = tmp6[1];
        const tmp8 = first1(react.useState(0), 2);
        first1 = tmp8[0];
        react = tmp8[1];
        const tmp10 = first1(react.useState(0), 2);
        const first2 = tmp10[0];
        let closure_6 = tmp12;
        const tmp13 = first1(react.useState(0), 2);
        const first3 = tmp13[0];
        [tmp17, c9] = first1(react.useState(true), 2);
        first1(react.useState(true), 2);
        width(9107)({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp17 });
        onReady = width(9108)({ streamId, userId, videoSpinnerContext, paused, loading: tmp17, streamKey }).onReady;
        react.useRef(null);
        const ref1 = react.useRef(null);
        ref = react.useRef({ width: 0, height: 0 });
        const items = [tmp10[1], tmp13[1]];
        const callback = react.useCallback((nativeEvent) => {
          let height;
          ({ width, height } = nativeEvent.nativeEvent);
          const obj = useWindowDimensions;
          size = obj.getWindowDimensions();
          const bound = Math.min(Math.sqrt((size.width * size.height * 4) / (width * height)), 1);
          closure_6(width * bound);
          closure_8(height * bound);
        }, items);
        const items1 = [onReady];
        const callback1 = react.useCallback(() => {
          _undefined(false);
          onReady();
        }, items1);
        const callback2 = react.useCallback((nativeEvent) => {
          let height;
          ({ width, height } = nativeEvent.nativeEvent.layout);
          closure_2(width);
          closure_4(height);
          ref.current = { width, height };
        }, []);
        const items2 = [width, first1, first2, first3, resizeMode];
        const callback3 = react.useCallback((nativeEvent) => {
          const layout = nativeEvent.nativeEvent.layout;
          width = layout.width;
          const height = layout.height;
          const obj = resizeMode(closure_2[11]);
          let isAndroidResult = obj.isAndroid();
          if (!isAndroidResult) {
            let tmp3 = null;
            isAndroidResult = null == ref.current;
          }
          if (!isAndroidResult) {
            let current = ref.current;
            const tmp5 = width <= 0 || height <= 0;
            if (!tmp5) {
              size = { x: 0, y: 0, width, height, animated: false };
              let result = current.scrollResponderZoomTo(size);
              current.scrollTo({ x: 0, y: 0, animated: false });
            }
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(() => {
              if (null != ref.current) {
                const current = ref.current;
                const tmp3 = width <= 0 || height <= 0;
                if (!tmp3) {
                  size = { x: 0, y: 0, width, height, animated: false };
                  const result = current.scrollResponderZoomTo(size);
                  current.scrollTo({ x: 0, y: 0, animated: false });
                }
              }
            });
          }
        }, []);
        const memo = react.useMemo(() => {
          let COVER;
          if (0 !== first) {
            if (0 !== first1) {
              if (0 !== first2) {
                if (0 !== first3) {
                  let num2;
                  let tmp2 = resizeMode;
                  const result = first / first1;
                  const result1 = first2 / first3;
                  if (resizeMode === obj.AUTO) {
                    if (result <= 1) {
                      if (result < 1) {
                        tmp2 = COVER;
                      }
                      COVER = obj.CONTAIN;
                    }
                    COVER = obj.COVER;
                  }
                  if (tmp2 === obj.CONTAIN) {
                    num2 = result > result1 ? first1 / first3 : first / first2;
                  } else {
                    num2 = 0;
                    if (tmp2 === obj.COVER) {
                      num2 = result1 > result ? first1 / first3 : first / first2;
                    }
                  }
                  return num2;
                }
              }
            }
          }
          return 0;
        }, items2);
        const items3 = [width, first1, first2, first3, memo];
        const obj2 = resizeMode(8008);
        const store = obj2.useStore((orientation) => orientation.orientation);
        const layoutEffect = react.useLayoutEffect(() => {
          const obj = PlatformUtils;
          const isAndroidResult = obj.isAndroid() && null != ref1.current;
          if (isAndroidResult) {
            const current = ref1.current;
            if (current != null) {
              current.unzoom({ animated: false });
            }
          }
        }, items3);
        const items4 = [first2, first3];
        const layoutEffect1 = react.useLayoutEffect(() => {
          let height;
          const obj = PlatformUtils;
          if (!obj.isAndroid()) {
            if (null != ref.current) {
              if (first2 > 0) {
                if (first3 > 0) {
                  ({ width, height } = ref.current);
                  const current = tmp.current;
                  const tmp6 = width <= 0 || height <= 0;
                  if (!tmp6) {
                    size = { x: 0, y: 0, width, height, animated: false };
                    const result = current.scrollResponderZoomTo(size);
                    current.scrollTo({ x: 0, y: 0, animated: false });
                  }
                }
              }
            }
          }
        }, items4);
        const items5 = [memo, first2, first3];
        const memo1 = react.useMemo(() => {
          size = { width: first2 * memo, height: first3 * memo };
          return size;
        }, items5);
        const items6 = [memo, first2, first3];
        const items7 = [first2, memo, width, first3, first1];
        const memo2 = react.useMemo(() => {
          size = { width: first2 * memo, height: first3 * memo };
          return size;
        }, items6);
        const items8 = [width, first1];
        const memo3 = react.useMemo(() => {
          const bound = Math.min(first2 * memo, first);
          const bound1 = Math.min(first3 * memo, first1);
          size = {
            position: "absolute",
            left: (first - bound) / 2,
            top: (first1 - bound1) / 2,
            width: bound,
            height: bound1,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          };
          return size;
        }, items7);
        const memo4 = react.useMemo(() => {
          size = { width, height: first1 };
          return size;
        }, items8);
        const items9 = [first2, memo, width, first3, first1];
        let tmp35 = null;
        const memo5 = react.useMemo(() => {
          const bound = Math.min(first3 * memo, first1);
          const rect = {
            position: "absolute",
            top: first1 / 2 - bound / 2,
            right: first / 2 - Math.min(first2 * memo, first) / 2,
          };
          return rect;
        }, items9);
        if (tmp17) {
          const obj3 = { animate: true, style: tmp2.spinner };
          tmp35 = ref(tmp18(9113), obj3);
        }
        const tmp37 = store === tmp3(8008).OrientationType.PORTRAIT;
        const tmp3Result = tmp3(1369);
        if (tmp3Result.isAndroid()) {
          const obj4 = { onLayout: callback2, style: items10, children: items12 };
          items10 = [tmp2.center, closure_6.absoluteFillObject];
          const obj5 = {
            ref: ref1,
            style: tmp2.zoomLayoutAndroid,
            minimumZoomScale: 1,
            gestureEnabled: flag,
            children: c9(first2, obj6),
          };
          obj6 = { collapsable: false, style: size, children: items11 };
          size = { width, height: first1, alignItems: "center", justifyContent: "center" };
          items11 = [,];
          const obj7 = {
            useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
            streamId,
            onSize: callback,
            onReady: callback1,
            style: memo2,
          };
          const tmp18Result = width(9116);
          items11[0] = ref(width(9114), obj7);
          items11[1] = tmp35;
          items12 = [ref(tmp18Result, obj5)];
          const obj8 = { style: memo5, children: tmp56 };
          tmp56 = null;
          const tmp51 = c9;
          const tmp54 = ref;
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
          items12[1] = tmp54(first2, obj8);
          tmp43Result1 = tmp51(tmp52, obj4);
        } else if (flag) {
          const obj9 = {
            ref,
            onLayout: callback2,
            style: closure_6.absoluteFillObject,
            contentContainerStyle: memo4,
            bounces: false,
            pinchGestureEnabled: !tmp17,
            maximumZoomScale: 8,
            minimumZoomScale: 1,
            showsVerticalScrollIndicator: false,
            showsHorizontalScrollIndicator: false,
            scrollEventThrottle: 16,
            children: c9(first2, obj10),
          };
          obj10 = { collapsable: false, style: memo4, onLayout: callback3, children: items14 };
          const obj11 = { style: memo3, children: items13 };
          const obj12 = {
            useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
            streamId,
            onSize: callback,
            onReady: callback1,
            style: memo1,
          };
          items13 = [ref(width(9114), obj12)];
          let tmp48 = null;
          const tmp44 = first3;
          const tmp45 = closure_6;
          if (tmp37) {
            let renderTagResult1;
            if (renderTag != null) {
              renderTagResult1 = renderTag();
            }
            tmp48 = renderTagResult1;
          }
          items13[1] = tmp48;
          items14 = [c9(first2, obj11)];
          let tmp43Result = null;
          if (null != tmp35) {
            const obj13 = { style: items15, children: tmp35 };
            items15 = [tmp45.absoluteFillObject, tmp2.center];
            tmp43Result = tmp43(tmp47, obj13);
          }
          items14[1] = tmp43Result;
          tmp43Result1 = tmp43(tmp44, obj9);
        } else {
          const obj14 = { onLayout: callback2, style: items16, children: items17 };
          items16 = [tmp2.center, closure_6.absoluteFillObject];
          const obj15 = {
            useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
            streamId,
            onSize: callback,
            onReady: callback1,
            style: memo1,
          };
          items17 = [ref(width(9114), obj15), tmp35];
          tmp43Result1 = c9(first2, obj14);
        }
        return tmp43Result1;
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default memoResult;
export { ResizeMode };
