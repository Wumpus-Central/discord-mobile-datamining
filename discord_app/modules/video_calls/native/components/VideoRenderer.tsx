import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ spinner: { height: 32, width: 32 }, center: { alignItems: "center", justifyContent: "center" }, zoomLayoutAndroid: { flex: 1 } });
let obj = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
const memoResult = importAllResult.memo((gestureEnabled) => {
  let c9;
  let paused;
  let renderTag;
  let resizeMode;
  let streamId;
  let streamKey;
  let tmp17;
  let userId;
  let videoSpinnerContext;
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
  let first;
  let dependencyMap;
  let first1;
  let importAllResult;
  let first2;
  let c6;
  let first3;
  let callback;
  let callback2;
  let onReady;
  ref = undefined;
  let ref1;
  let closure_13;
  let memo;
  const tmp2 = onReady();
  let obj = resizeMode(10603);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VideoRenderer" });
  let tmp6 = first1(importAllResult.useState(0), 2);
  first = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(importAllResult.useState(0), 2);
  first1 = tmp8[0];
  importAllResult = tmp8[1];
  const tmp10 = first1(importAllResult.useState(0), 2);
  first2 = tmp10[0];
  c6 = tmp12;
  const tmp13 = first1(importAllResult.useState(0), 2);
  first3 = tmp13[0];
  callback = tmp15;
  [tmp17, c9] = first1(importAllResult.useState(true), 2);
  first(10604)({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp17 });
  onReady = first(10606)({ streamId, userId, videoSpinnerContext, paused, loading: tmp17, streamKey }).onReady;
  ref = importAllResult.useRef(null);
  ref1 = importAllResult.useRef(null);
  closure_13 = importAllResult.useRef({ width: 0, height: 0 });
  const items = [tmp10[1], tmp13[1]];
  callback = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    const size = resizeMode(1474).getWindowDimensions();
    const bound = Math.min(Math.sqrt(size.width * size.height * 4 / (width * height)), 1);
    _undefined(width * bound);
    _undefined2(height * bound);
  }, items);
  const items1 = [onReady];
  const callback1 = importAllResult.useCallback(() => {
    _undefined3(false);
    onReady();
  }, items1);
  callback2 = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent.layout);
    dependencyMap(width);
    callback(height);
    closure_13.current = { width, height };
  }, []);
  const items2 = [first, first1, first2, first3, resizeMode];
  const callback3 = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const width = layout.width;
    const height = layout.height;
    let obj = resizeMode(500);
    let isAndroidResult = obj.isAndroid();
    if (!isAndroidResult) {
      isAndroidResult = null == ref.current;
    }
    if (!isAndroidResult) {
      let current = ref.current;
      if (!tmp5) {
        obj = { x: 0, y: 0, width: null, height: null, animated: false };
        obj[2] = width;
        obj[3] = height;
        let result = current.scrollResponderZoomTo(obj);
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (null != outer1_11.current) {
          const current = outer1_11.current;
          let tmp3 = width <= 0;
          if (!tmp3) {
            tmp3 = tmp2 <= 0;
          }
          if (!tmp3) {
            const obj = { x: 0, y: 0, width: null, height: null, animated: false };
            obj[2] = tmp;
            obj[3] = tmp2;
            const result = current.scrollResponderZoomTo(obj);
            current.scrollTo({ x: 0, y: 0, animated: false });
          }
          tmp = width;
        }
      });
      tmp5 = width <= 0 || height <= 0;
    }
  }, []);
  memo = importAllResult.useMemo(() => {
    if (0 !== first) {
      if (0 !== first1) {
        if (0 !== first2) {
          if (0 !== first3) {
            const result = tmp / tmp4;
            const result1 = tmp5 / tmp6;
            if (resizeMode !== ref.AUTO) {
              if (tmp7 !== tmp10.CONTAIN) {
                if (tmp7 !== tmp10.COVER) {
                  return 0;
                }
              }
            } else {
              if (result <= 1) {
                if (result >= 1) {
                  const CONTAIN = tmp10.CONTAIN;
                }
              }
              const COVER = tmp10.COVER;
            }
          }
        }
      }
    }
    return 0;
  }, items2);
  let obj1 = resizeMode(8817);
  const items3 = [first, first1, first2, first3, memo];
  const store = obj1.useStore((orientation) => orientation.orientation);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let isAndroidResult = resizeMode(500).isAndroid();
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
  const layoutEffect1 = importAllResult.useLayoutEffect(() => {
    let height;
    let width;
    let obj = resizeMode(500);
    if (!obj.isAndroid()) {
      if (null != ref.current) {
        if (first2 > 0) {
          if (first3 > 0) {
            ({ width, height } = ref.current);
            const current = tmp.current;
            if (!tmp6) {
              obj = { x: 0, y: 0, width: null, height: null, animated: false };
              obj[2] = width;
              obj[3] = height;
              const result = current.scrollResponderZoomTo(obj);
              current.scrollTo({ x: 0, y: 0, animated: false });
            }
            tmp6 = width <= 0 || height <= 0;
          }
        }
      }
    }
  }, items4);
  const items5 = [memo, first2, first3];
  const memo1 = importAllResult.useMemo(() => ({ width: first2 * memo, height: first3 * memo }), items5);
  const items6 = [memo, first2, first3];
  const items7 = [first2, memo, first, first3, first1];
  const memo2 = importAllResult.useMemo(() => ({ width: first2 * memo, height: first3 * memo }), items6);
  const items8 = [first, first1];
  const memo3 = importAllResult.useMemo(() => {
    const bound = Math.min(first2 * memo, first);
    const bound1 = Math.min(first3 * memo, first1);
    return { position: "absolute", left: (first - bound) / 2, top: (first1 - bound1) / 2, width: bound, height: bound1, alignItems: "center", justifyContent: "center", overflow: "hidden" };
  }, items7);
  const memo4 = importAllResult.useMemo(() => ({ width: first, height: first1 }), items8);
  const items9 = [first2, memo, first, first3, first1];
  let tmp35 = null;
  const memo5 = importAllResult.useMemo(() => {
    const bound = Math.min(first3 * memo, first1);
    return { position: "absolute", top: first1 / 2 - bound / 2, right: first / 2 - Math.min(first2 * memo, first) / 2 };
  }, items9);
  if (tmp17) {
    obj = { animate: true, style: null };
    obj[1] = tmp2.spinner;
    tmp35 = callback(tmp18(10610), obj);
  }
  const tmp37 = store === resizeMode(8817).OrientationType.PORTRAIT;
  const tmp16 = first1(importAllResult.useState(true), 2);
  if (tmp3Result.isAndroid()) {
    obj = { onLayout: null, style: null, children: null };
    obj[0] = callback2;
    const items10 = [tmp2.center, c6.absoluteFillObject];
    obj[1] = items10;
    obj1 = { ref: null, style: null, minimumZoomScale: 1, gestureEnabled: null, children: null };
    obj1[0] = ref1;
    obj1[1] = tmp2.zoomLayoutAndroid;
    obj1[3] = flag;
    const obj2 = { collapsable: false, style: null, children: null };
    const obj3 = { width: null, height: null, alignItems: "center", justifyContent: "center" };
    obj3[0] = first;
    obj3[1] = first1;
    obj2[1] = obj3;
    const obj4 = { useSurfaceDirectRenderer: null, streamId: null, onSize: null, onReady: null, style: null };
    obj4[0] = surfaceDirectRendererExperiment;
    obj4[1] = streamId;
    obj4[2] = callback;
    obj4[3] = callback1;
    obj4[4] = memo2;
    const items11 = [callback(tmp18(10613), obj4), tmp35];
    obj2[2] = items11;
    obj1[4] = callback2(first2, obj2);
    const items12 = [callback(tmp18(10611), obj1), ];
    const obj5 = { style: null, children: null };
    obj5[0] = memo5;
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
    obj5[1] = tmp56;
    items12[1] = callback(first2, obj5);
    obj[2] = items12;
    let tmp43Result = callback2(tmp52, obj);
    const tmp18Result = tmp18(10611);
    const tmp51 = callback2;
    const tmp54 = callback;
  } else if (flag) {
    const obj6 = { ref: null, onLayout: null, style: null, contentContainerStyle: null, bounces: false, pinchGestureEnabled: null, maximumZoomScale: 8, minimumZoomScale: 1, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, scrollEventThrottle: 16, children: null };
    obj6[0] = ref;
    obj6[1] = callback2;
    obj6[2] = c6.absoluteFillObject;
    obj6[3] = memo4;
    obj6[5] = !tmp17;
    const obj7 = { collapsable: false, style: null, onLayout: null, children: null };
    obj7[1] = memo4;
    obj7[2] = callback3;
    const obj8 = { style: null, children: null };
    obj8[0] = memo3;
    const obj9 = { children: null };
    const obj10 = { useSurfaceDirectRenderer: null, streamId: null, onSize: null, onReady: null, style: null };
    obj10[0] = surfaceDirectRendererExperiment;
    obj10[1] = streamId;
    obj10[2] = callback;
    obj10[3] = callback1;
    obj10[4] = memo1;
    obj9[0] = callback(tmp18(10613), obj10);
    const items13 = [callback(tmp18(4146).View, obj9), ];
    let tmp48 = null;
    if (tmp37) {
      let renderTagResult1;
      if (renderTag != null) {
        renderTagResult1 = renderTag();
      }
      tmp48 = renderTagResult1;
    }
    items13[1] = tmp48;
    obj8[1] = items13;
    const items14 = [callback2(first2, obj8), ];
    tmp43Result = null;
    if (null != tmp35) {
      const obj11 = { style: null, children: null };
      const items15 = [tmp45.absoluteFillObject, tmp2.center];
      obj11[0] = items15;
      obj11[1] = tmp35;
      tmp43Result = tmp43(tmp47, obj11);
    }
    items14[1] = tmp43Result;
    obj7[3] = items14;
    obj6[11] = callback2(first2, obj7);
    tmp43Result = tmp43(first3, obj6);
    const tmp44 = first3;
    tmp45 = c6;
  } else {
    const obj12 = { onLayout: null, style: null, children: null };
    obj12[0] = callback2;
    const items16 = [tmp2.center, c6.absoluteFillObject];
    obj12[1] = items16;
    const obj13 = { useSurfaceDirectRenderer: null, streamId: null, onSize: null, onReady: null, style: null };
    obj13[0] = surfaceDirectRendererExperiment;
    obj13[1] = streamId;
    obj13[2] = callback;
    obj13[3] = callback1;
    obj13[4] = memo1;
    const items17 = [callback(tmp18(10613), obj13), tmp35];
    obj12[2] = items17;
    tmp43Result = callback2(first2, obj12);
  }
  return tmp43Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default memoResult;
export const ResizeMode = obj;