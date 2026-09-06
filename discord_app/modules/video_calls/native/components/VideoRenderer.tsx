// discord_app/modules/video_calls/native/components/VideoRenderer.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensions from "../../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({
  spinner: { height: 32, width: 32 },
  center: { alignItems: "center", justifyContent: "center" },
  zoomLayoutAndroid: { flex: 1 },
});
const ResizeMode = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default noop.memo((gestureEnabled) => {
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
  let obj = resizeMode(9605);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VideoRenderer" });
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
  closure_8 = tmp15;
  [tmp17, c9] = first1(noop.useState(true), 2);
  width(9606)({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp17 });
  onReady = width(9608)({ streamId, userId, videoSpinnerContext, paused, loading: tmp17, streamKey }).onReady;
  noop.useRef(null);
  const ref1 = noop.useRef(null);
  ref = noop.useRef({ width: 0, height: 0 });
  const items = [tmp10[1], tmp13[1]];
  const callback = noop.useCallback((nativeEvent) => {
    ({ width, height } = nativeEvent.nativeEvent);
    const size = useWindowDimensions.getWindowDimensions();
    const bound = Math.min(Math.sqrt((size.width * size.height * 4) / (width * height)), 1);
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
    let isAndroidResult = resizeMode(1115).isAndroid();
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
    const obj = resizeMode(1115);
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
  let obj1 = resizeMode(8332);
  const items3 = [width, first1, first2, first3, memo];
  const store = obj1.useStore((orientation) => orientation.orientation);
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
    const size = {
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
  const memo4 = noop.useMemo(() => {
    const size = { width, height: first1 };
    return size;
  }, items8);
  const items9 = [first2, memo, width, first3, first1];
  let tmp35 = null;
  const memo5 = noop.useMemo(() => {
    const bound = Math.min(first3 * memo, first1);
    const rect = {
      position: "absolute",
      top: first1 / 2 - bound / 2,
      right: first / 2 - Math.min(first2 * memo, first) / 2,
    };
    return rect;
  }, items9);
  if (tmp17) {
    obj = { animate: true, style: tmp2.spinner };
    tmp35 = closure_8(tmp18(9613), obj);
  }
  const tmp37 = store === resizeMode(8332).OrientationType.PORTRAIT;
  const tmp16 = first1(noop.useState(true), 2);
  if (tmp3Result.isAndroid()) {
    obj = { onLayout: callback2, style: null, children: null };
    const items10 = [tmp2.center, closure_6.absoluteFillObject];
    obj.style = items10;
    obj1 = { ref: ref1, style: tmp2.zoomLayoutAndroid, minimumZoomScale: 1, gestureEnabled: flag, children: null };
    const obj2 = { collapsable: false, style: null, children: null };
    let size = { width, height: first1, alignItems: "center", justifyContent: "center" };
    obj2.style = size;
    const obj3 = {
      useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
      streamId,
      onSize: callback,
      onReady: callback1,
      style: memo2,
    };
    const items11 = [closure_8(tmp18(9616), obj3), tmp35];
    obj2.children = items11;
    obj1.children = c9(first2, obj2);
    const items12 = [closure_8(tmp18(9614), obj1)];
    const obj4 = { style: memo5, children: null };
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
    obj4.children = tmp56;
    items12[1] = closure_8(first2, obj4);
    obj.children = items12;
    let tmp43Result = c9(tmp52, obj);
    const tmp18Result = tmp18(9614);
  } else if (flag) {
    const obj5 = {
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
      children: null,
    };
    const obj6 = { collapsable: false, style: memo4, onLayout: callback3, children: null };
    const obj7 = { style: memo3, children: null };
    const obj8 = { children: null };
    const obj9 = {
      useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
      streamId,
      onSize: callback,
      onReady: callback1,
      style: memo1,
    };
    obj8.children = closure_8(tmp18(9616), obj9);
    const items13 = [closure_8(tmp18(4296).View, obj8)];
    let tmp48 = null;
    if (tmp37) {
      let renderTagResult1;
      if (renderTag != null) {
        renderTagResult1 = renderTag();
      }
      tmp48 = renderTagResult1;
    }
    items13[1] = tmp48;
    obj7.children = items13;
    const items14 = [c9(first2, obj7)];
    tmp43Result = null;
    if (null != tmp35) {
      const obj10 = { style: null, children: null };
      const items15 = [tmp45.absoluteFillObject, tmp2.center];
      obj10.style = items15;
      obj10.children = tmp35;
      tmp43Result = tmp43(tmp47, obj10);
    }
    items14[1] = tmp43Result;
    obj6.children = items14;
    obj5.children = c9(first2, obj6);
    tmp43Result = tmp43(first3, obj5);
    tmp45 = closure_6;
  } else {
    const obj11 = { onLayout: callback2, style: null, children: null };
    const items16 = [tmp2.center, closure_6.absoluteFillObject];
    obj11.style = items16;
    const obj12 = {
      useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
      streamId,
      onSize: callback,
      onReady: callback1,
      style: memo1,
    };
    const items17 = [closure_8(tmp18(9616), obj12), tmp35];
    obj11.children = items17;
    tmp43Result = c9(first2, obj11);
  }
  return tmp43Result;
});
export { ResizeMode };
