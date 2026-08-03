import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "set";
import { toggleFocus } from "VoiceChatDrawerState";
import { PictureInPicturePositions } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import Button from "Button";

let StyleSheet;
let c5;
const require = arg1;
let c4 = importAllResult;
({ StyleSheet, View: c5 } = get_ActivityIndicator);
let obj = { pipOuterContainer: null, pipInnerContainer: null, elevationShadow: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.alignItems = "baseline";
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.alignItems = "baseline";
obj[1] = createCacheKey;
obj[2] = Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = createCacheKey.createStyles(obj);
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__closure = {};
getSpringAnimationConfig.__workletHash = 6627401186753;
getSpringAnimationConfig.__initData = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
let closure_11 = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
const memoResult = importAllResult.memo((preferredPosition) => {
  let c1;
  let children;
  let draggableGridItemStyles;
  let gesture;
  let height;
  let size2;
  let style;
  let width;
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let insets;
  let importDefault;
  let ref;
  const tmp2 = callback2();
  let obj = insets(ref[8]);
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = importDefault(ref[9])());
  insets = importDefault(ref[10])({ includeKeyboardHeight: true }).insets;
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const size = importDefault(ref[11])(obj);
  let obj2 = importAllResult;
  const tmp7 = importDefault(ref[9])();
  [size2, c1] = callback(importAllResult.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  let obj3 = insets(ref[12]);
  const fn = function w() {
    const obj = { marginTop: insets.top, marginBottom: null };
    if (typeof outer1_10 !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    obj[1] = insets(ref[13]).withSpring(insets.bottom, { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity: undefined });
    return obj;
  };
  obj = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig };
  fn.__closure = obj;
  fn.__workletHash = 16677290574613;
  fn.__initData = closure_11;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = insets(ref[14]);
  const isViewingActivity = obj5.useIsViewingActivity({ channelId: channel.id });
  const obj1 = { channelId: channel.id };
  const tmp8 = callback(importAllResult.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  obj2 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: null };
  let tmp11;
  if (isViewingActivity) {
    tmp11 = toggleFocus;
  }
  obj2[5] = tmp11;
  const draggablePip = insets(ref[15]).useDraggablePip(obj2);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = obj2.useRef(null);
  obj3 = { style: items, pointerEvents: "box-none", children: null };
  items = [tmp2.pipOuterContainer, animatedStyle, style];
  const obj4 = {
    ref,
    style: tmp2.pipInnerContainer,
    pointerEvents: "box-none",
    onLayout() {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, width, height, pageX, pageY) => {
          callback({ x: arg0, y: arg1, width, height, pageX, pageY });
        });
      }
    },
    children: null
  };
  obj5 = { gesture, children: null };
  const items1 = [draggableGridItemStyles, ];
  const obj8 = insets(ref[15]);
  let elevationShadow;
  if (tmp3Result.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  tmp3Result = insets(ref[17]);
  items1[1] = elevationShadow;
  obj5[1] = jsx(importDefault(ref[12]).View, { style: items1, children: <closure_5>{children}</closure_5> });
  obj4[4] = jsx(insets(ref[16]).GestureDetector, { gesture, children: null });
  obj3[2] = <closure_5 ref={ref} style={tmp2.pipInnerContainer} pointerEvents="box-none" onLayout={function onLayout() {
    if (null != ref.current) {
      const current = ref.current;
      current.measure((arg0, arg1, width, height, pageX, pageY) => {
        callback({ x: arg0, y: arg1, width, height, pageX, pageY });
      });
    }
  }}>{null}</closure_5>;
  return jsx(importDefault(ref[12]).View, { style: items, pointerEvents: "box-none", children: null });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;