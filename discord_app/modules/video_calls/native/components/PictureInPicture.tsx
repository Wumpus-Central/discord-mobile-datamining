// === Module 8846: PictureInPicture ===

// Module 8846 (PictureInPicture)
import spring from "spring" /* 5280 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const toggleFocus = fn(8829).toggleFocus;
const PictureInPicturePositions = fn(1074).PictureInPicturePositions;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj = { pipOuterContainer: null, pipInnerContainer: null, elevationShadow: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "baseline";
obj.pipOuterContainer = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "baseline";
obj.pipInnerContainer = obj4;
const native = fn(1177);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1177).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = createStyles.createStyles(obj);
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__closure = {};
getSpringAnimationConfig.__workletHash = 6627401186753;
getSpringAnimationConfig.__initData = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
const __initData = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default noop.memo((preferredPosition) => {
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let insets;
  importDefault = undefined;
  let ref;
  const tmp2 = closure_9();
  const shouldForcePipOrientation = insets(ref[8]).useShouldForcePipOrientation({ channel });
  let obj = insets(ref[8]);
  ({ width, height } = require("useWindowDimensions")());
  insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let size = require("usePipDimensions")({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
  let obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp7 = require("useWindowDimensions")();
  [size2, c1] = noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 });
  const tmp8 = _slicedToArray(noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  const fn = function w() {
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
  const obj4 = insets(ref[12]);
  fn.__closure = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig };
  fn.__workletHash = 16677290574613;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig };
  const isViewingActivity = insets(ref[14]).useIsViewingActivity({ channelId: channel.id });
  const obj6 = insets(ref[14]);
  const obj7 = { channelId: channel.id };
  const size1 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: null };
  let tmp11;
  if (isViewingActivity) {
    tmp11 = toggleFocus;
  }
  size1.onPress = tmp11;
  const draggablePip = insets(ref[15]).useDraggablePip(size1);
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
  const obj8 = insets(ref[15]);
  let elevationShadow;
  if (tmp3Result.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  tmp3Result = insets(ref[17]);
  items1[1] = elevationShadow;
  obj11.children = jsx(require("ReanimatedRexport").View, { style: items1, children: <closure_5>{children}</closure_5> });
  obj10.children = jsx(insets(ref[16]).GestureDetector, { gesture, children: null });
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
});
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;