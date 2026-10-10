// === Module 10833: PictureInPicture ===

// Module 10833 (PictureInPicture)
import spring from "spring" /* 5378 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const toggleFocus = fn(10353).toggleFocus;
const PictureInPicturePositions = fn(1085).PictureInPicturePositions;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { pipOuterContainer: null, pipInnerContainer: null, elevationShadow: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "baseline";
obj.pipOuterContainer = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "baseline";
obj.pipInnerContainer = obj4;
const native = fn(1200);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1200).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = createStyles.createStyles(obj);
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__closure = {};
getSpringAnimationConfig.__workletHash = 6627401186753;
getSpringAnimationConfig.__initData = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
const __initData = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
const __initData2 = { code: "function PictureInPictureTsx3(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PictureInPicture(preferredPosition) {
  const cResult = insets(ref[9]).c(42);
  ({ children, style, channel } = preferredPosition);
  if (undefined === preferredPosition.preferredPosition) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const tmp5 = closure_9();
  if (cResult[0] !== channel) {
    let obj2 = { channel };
    cResult[0] = channel;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  let obj = insets(ref[9]);
  const shouldForcePipOrientation = insets(ref[10]).useShouldForcePipOrientation(tmp6);
  const tmpResult = insets(ref[10]);
  ({ width, height } = require("useWindowDimensions")());
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[2] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  insets = require("useSafeAreaInsetsKeyboardAware")(tmp10).insets;
  if (cResult[3] === channel.id) {
    if (cResult[4] === shouldForcePipOrientation) {
      let tmp11 = cResult[5];
    }
    let size = require("usePipDimensions")(tmp11);
    if (cResult[6] === height) {
      if (cResult[7] === width) {
        let tmp12 = cResult[8];
      }
      [size2, importDefault] = noop.useState(tmp12);
      const tmp14 = _slicedToArray(noop.useState(tmp12), 2);
      class H {
        constructor() {
          obj = { marginTop: insets.top, marginBottom: null };
          tmp = closure_0(closure_2[15]);
          if (typeof getSpringAnimationConfig === "function") {
            obj1 = { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity: null };
            obj1.velocity = undefined;
            obj.marginBottom = tmp2(tmp3, obj1);
            return obj;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      const obj4 = { insets, withSpring: tmp(tmp2[15]).withSpring, getSpringAnimationConfig };
      H.__closure = obj4;
      H.__workletHash = 16677290574613;
      H.__initData = __initData;
      const animatedStyle = tmp(tmp2[14]).useAnimatedStyle(H);
      if (cResult[9] !== channel.id) {
        const obj5 = { channelId: channel.id };
        cResult[9] = channel.id;
        cResult[10] = obj5;
        let tmp18 = obj5;
      } else {
        tmp18 = cResult[10];
      }
      const tmpResult4 = tmp(tmp2[14]);
      const isViewingActivity = tmp(tmp2[16]).useIsViewingActivity(tmp18);
      let tmp21;
      if (isViewingActivity) {
        tmp21 = toggleFocus;
      }
      if (cResult[11] === size2.height) {
        if (cResult[12] === size2.width) {
          if (cResult[13] === size.height) {
            if (cResult[14] === size.width) {
              if (cResult[15] === tmp20) {
                if (cResult[16] === tmp21) {
                  let tmp22 = cResult[17];
                }
                const draggablePip = tmp(tmp2[17]).useDraggablePip(tmp22);
                ({ gesture, draggableGridItemStyles } = draggablePip);
                ref = noop.useRef(null);
                class H {
                  constructor() {
                    obj = { marginTop: insets.top, marginBottom: null };
                    tmp = closure_0(closure_2[15]);
                    if (typeof getSpringAnimationConfig === "function") {
                      obj1 = { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity: null };
                      obj1.velocity = undefined;
                      obj.marginBottom = tmp2(tmp3, obj1);
                      return obj;
                    } else {
                      str = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
                const items = [tmp5.pipOuterContainer, animatedStyle, style];
                cResult[18] = animatedStyle;
                cResult[19] = style;
                cResult[20] = tmp5.pipOuterContainer;
                cResult[21] = items;
                const tmpResult6 = tmp(tmp2[17]);
              }
            }
          }
        }
      }
      const size1 = { width: null, height: null, containerWidth: null, containerHeight: null, snapToCorners: null, onPress: null };
      ({ width: obj12.width, height: obj12.height } = size);
      ({ width: obj12.containerWidth, height: obj12.containerHeight } = size2);
      size1.snapToCorners = !isViewingActivity;
      size1.onPress = tmp21;
      cResult[11] = size2.height;
      cResult[12] = size2.width;
      cResult[13] = size.height;
      cResult[14] = size.width;
      cResult[15] = !isViewingActivity;
      cResult[16] = tmp21;
      cResult[17] = size1;
      tmp22 = size1;
      const tmpResult5 = tmp(tmp2[16]);
    }
    const size3 = { x: 0, y: 0, width, height, pageX: 0, pageY: 0 };
    cResult[6] = height;
    cResult[7] = width;
    cResult[8] = size3;
    tmp12 = size3;
  }
  const obj6 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  cResult[3] = channel.id;
  cResult[4] = shouldForcePipOrientation;
  cResult[5] = obj6;
  tmp11 = obj6;
  const tmp9 = require("useWindowDimensions")();
}) : (function PictureInPicture(preferredPosition) {
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let insets;
  importDefault = undefined;
  let ref;
  const tmp2 = closure_9();
  const shouldForcePipOrientation = insets(ref[10]).useShouldForcePipOrientation({ channel });
  let obj = insets(ref[10]);
  ({ width, height } = require("useWindowDimensions")());
  insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let size = require("usePipDimensions")({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
  let obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp7 = require("useWindowDimensions")();
  [size2, c1] = noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 });
  const tmp8 = _slicedToArray(noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  const fn = function f() {
    const obj = { marginTop: insets.top, marginBottom: null };
    spring;
    if (typeof getSpringAnimationConfig === "function") {
      const obj2 = { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity: undefined };
      obj.marginBottom = tmp2(tmp3, obj2);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj4 = insets(ref[14]);
  fn.__closure = { insets, withSpring: insets(ref[15]).withSpring, getSpringAnimationConfig };
  fn.__workletHash = 17161470330964;
  fn.__initData = __initData2;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { insets, withSpring: insets(ref[15]).withSpring, getSpringAnimationConfig };
  const isViewingActivity = insets(ref[16]).useIsViewingActivity({ channelId: channel.id });
  const obj6 = insets(ref[16]);
  const obj7 = { channelId: channel.id };
  const size1 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: null };
  let tmp11;
  if (isViewingActivity) {
    tmp11 = toggleFocus;
  }
  size1.onPress = tmp11;
  const draggablePip = insets(ref[17]).useDraggablePip(size1);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = noop.useRef(null);
  const obj9 = { style: null, pointerEvents: "box-none", children: null };
  const items = [tmp2.pipOuterContainer, animatedStyle, style];
  obj9.style = items;
  const obj10 = {
    ref,
    style: tmp2.pipInnerContainer,
    pointerEvents: "box-none",
    onLayout() {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((x, y, width, height, pageX, pageY) => {
          const size = { x, y, width, height, pageX, pageY };
          closure_1_1(size);
        });
      }
    },
    children: null
  };
  const obj11 = { gesture, children: null };
  const items1 = [draggableGridItemStyles, ];
  const obj8 = insets(ref[17]);
  let elevationShadow;
  if (tmp3Result.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  tmp3Result = insets(ref[18]);
  items1[1] = elevationShadow;
  obj11.children = jsx(require("ReanimatedRexport").View, { style: items1, children: <closure_5>{children}</closure_5> });
  obj10.children = jsx(insets(ref[19]).GestureDetector, { gesture, children: null });
  obj9.children = <closure_5 ref={ref} style={tmp2.pipInnerContainer} pointerEvents="box-none" onLayout={function onLayout() {
    if (null != ref.current) {
      const current = ref.current;
      current.measure((x, y, width, height, pageX, pageY) => {
        const size = { x, y, width, height, pageX, pageY };
        closure_1_1(size);
      });
    }
  }}>{null}</closure_5>;
  return jsx(require("ReanimatedRexport").View, { style: null, pointerEvents: "box-none", children: null });
}));
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;