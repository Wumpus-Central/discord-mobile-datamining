// === Module 9103: PictureInPicture ===

// Module 9103 (PictureInPicture)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import spring from "spring" /* 5604 */;
import ChannelCallStore from "ChannelCallStore" /* 9086 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import native_mod from "native" /* 1188 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, obj1, str, tmp;

let StyleSheet;
let hasOwnProperty;
let native;
let obj2;
let obj3;
({ StyleSheet, View: hasOwnProperty } = react_native);
const toggleFocus = ChannelCallStore.toggleFocus;
const PictureInPicturePositions = Constants.PictureInPicturePositions;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pipOuterContainer: obj2, pipInnerContainer: obj3, elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS) };
obj2 = { alignItems: "baseline" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { alignItems: "baseline" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
native = native_mod;
let closure_9 = createStyles(obj);
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__closure = {};
getSpringAnimationConfig.__workletHash = 6627401186753;
getSpringAnimationConfig.__initData = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
const __initData = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
const __initData2 = { code: "function PictureInPictureTsx3(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
let TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((preferredPosition) => {
  let channel;
  let children;
  let draggableGridItemStyles;
  let gesture;
  let height;
  let insets;
  let ref;
  let size2;
  let style;
  let tmp10;
  let tmp6;
  let width;
  const tmp2 = ref;
  let obj = insets(ref[9]);
  const cResult = obj.c(42);
  ({ children, style, channel } = preferredPosition);
  if (undefined === preferredPosition.preferredPosition) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const tmp5 = closure_9();
  if (cResult[0] !== channel) {
    let obj2 = { channel };
    cResult[0] = channel;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = insets(tmp2[10]);
  const shouldForcePipOrientation = tmpResult.useShouldForcePipOrientation(tmp6);
  ({ width, height } = require("useWindowDimensions")());
  require("useWindowDimensions")();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[2] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  insets = require("useSafeAreaInsetsKeyboardAware")(tmp10).insets;
  if (cResult[3] === channel.id) {
    let tmp11;
    if (cResult[4] === shouldForcePipOrientation) {
      tmp11 = cResult[5];
    }
    size = require("usePipDimensions")(tmp11);
    if (cResult[6] === height) {
      let tmp12;
      let tmp19;
      if (cResult[7] === width) {
        tmp12 = cResult[8];
      }
      [size2, importDefault] = react.useState(tmp12);
      _slicedToArray(react.useState(tmp12), 2);
      const tmpResult4 = insets(tmp2[14]);
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
      const useAnimatedStyle = tmpResult4.useAnimatedStyle;
      H.__closure = { insets, withSpring: insets(tmp2[15]).withSpring, getSpringAnimationConfig };
      H.__workletHash = 16677290574613;
      H.__initData = __initData;
      const obj4 = { insets, withSpring: insets(tmp2[15]).withSpring, getSpringAnimationConfig };
      const animatedStyle = useAnimatedStyle(H);
      if (cResult[9] !== channel.id) {
        const obj5 = { channelId: channel.id };
        cResult[9] = channel.id;
        cResult[10] = obj5;
        tmp19 = obj5;
      } else {
        tmp19 = cResult[10];
      }
      const tmpResult5 = insets(tmp2[16]);
      const isViewingActivity = tmpResult5.useIsViewingActivity(tmp19);
      let tmp22;
      if (isViewingActivity) {
        tmp22 = toggleFocus;
      }
      if (cResult[11] === size2.height) {
        if (cResult[12] === size2.width) {
          if (cResult[13] === size.height) {
            if (cResult[14] === size.width) {
              if (cResult[15] === !isViewingActivity) {
                let tmp23;
                if (cResult[16] === tmp22) {
                  tmp23 = cResult[17];
                }
                const tmpResult6 = insets(tmp2[17]);
                const draggablePip = tmpResult6.useDraggablePip(tmp23);
                ({ gesture, draggableGridItemStyles } = draggablePip);
                ref = react.useRef(null);
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
              }
            }
          }
        }
      }
      const size1 = { width: null, height: null, containerWidth: null, containerHeight: null, snapToCorners: !isViewingActivity, onPress: tmp22 };
      ({ width: obj11.width, height: obj11.height } = size);
      ({ width: obj11.containerWidth, height: obj11.containerHeight } = size2);
      cResult[11] = size2.height;
      cResult[12] = size2.width;
      cResult[13] = size.height;
      cResult[14] = size.width;
      cResult[15] = !isViewingActivity;
      cResult[16] = tmp22;
      cResult[17] = size1;
      tmp23 = size1;
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
}) : ((preferredPosition) => {
  let c1;
  let children;
  let draggableGridItemStyles;
  let gesture;
  let height;
  let size2;
  let style;
  let tmp12;
  let width;
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let insets;
  importDefault = undefined;
  let ref;
  const tmp2 = closure_9();
  const tmp3 = insets;
  let obj = insets(ref[10]);
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = require("useWindowDimensions")());
  require("useWindowDimensions")();
  insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  size = require("usePipDimensions")(obj2);
  [size2, c1] = react.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 });
  _slicedToArray(react.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
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
  ({ insets, withSpring: insets(ref[15]).withSpring, getSpringAnimationConfig });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj6 = insets(ref[16]);
  const obj7 = { channelId: channel.id };
  const isViewingActivity = obj6.useIsViewingActivity(obj7);
  const size1 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: tmp12 };
  tmp12 = undefined;
  const useDraggablePip = insets(ref[17]).useDraggablePip;
  insets(ref[17]);
  if (isViewingActivity) {
    tmp12 = toggleFocus;
  }
  const draggablePip = useDraggablePip(size1);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = react.useRef(null);
  const items = [tmp2.pipOuterContainer, animatedStyle, style];
  const View = tmp6(tmp4[14]).View;
  const GestureDetector = tmp3(tmp4[19]).GestureDetector;
  const items1 = [draggableGridItemStyles, ];
  const View2 = tmp6(tmp4[14]).View;
  let elevationShadow;
  const tmp3Result = tmp3(ref[18]);
  if (tmp3Result.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  items1[1] = elevationShadow;
  return <View style={items} pointerEvents="box-none">{null}</View>;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = TOP_LEFT;