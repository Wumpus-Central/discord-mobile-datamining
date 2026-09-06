// discord_app/modules/video_calls/native/components/PictureInPicture.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const toggleFocus = fn(9467).toggleFocus;
const PictureInPicturePositions = fn(1074).PictureInPicturePositions;
const jsx = fn(21).jsx;
fn(4560);
let obj = { pipOuterContainer: null, pipInnerContainer: null, elevationShadow: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.alignItems = "baseline";
obj.pipOuterContainer = obj;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.alignItems = "baseline";
obj.pipInnerContainer = createStyles;
const native = fn(1178);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1178).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = createStyles.createStyles(obj);
function getSpringAnimationConfig(velocity) {
  return {
    mass: 0.2,
    damping: 7.5,
    stiffness: 100,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    overshootClamping: true,
    velocity,
  };
}
getSpringAnimationConfig.__closure = {};
getSpringAnimationConfig.__workletHash = 6627401186753;
getSpringAnimationConfig.__initData = {
  code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}",
};
const __initData = {
  code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}",
};
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
  let obj = insets(ref[8]);
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = require("useWindowDimensions")());
  insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  let size = require("usePipDimensions")(obj);
  let obj2 = noop;
  const tmp7 = require("useWindowDimensions")();
  [size2, c1] = _slicedToArray(noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  let obj3 = insets(ref[12]);
  const fn = function w() {
    let obj = { marginTop: insets.top, marginBottom: null };
    spring;
    if (typeof getSpringAnimationConfig === "function") {
      obj = {
        mass: 0.2,
        damping: 7.5,
        stiffness: 100,
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        overshootClamping: true,
        velocity: undefined,
      };
      obj.marginBottom = tmp2(tmp3, obj);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  obj = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig };
  fn.__closure = obj;
  fn.__workletHash = 16677290574613;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = insets(ref[14]);
  const isViewingActivity = obj5.useIsViewingActivity({ channelId: channel.id });
  const obj1 = { channelId: channel.id };
  const tmp8 = _slicedToArray(noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  size = {
    width: size.width,
    height: size.height,
    containerWidth: size2.width,
    containerHeight: size2.height,
    snapToCorners: !isViewingActivity,
    onPress: null,
  };
  let tmp11;
  if (isViewingActivity) {
    tmp11 = toggleFocus;
  }
  size.onPress = tmp11;
  const draggablePip = insets(ref[15]).useDraggablePip(size);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = obj2.useRef(null);
  obj2 = { style: null, pointerEvents: "box-none", children: null };
  const items = [tmp2.pipOuterContainer, animatedStyle, style];
  obj2.style = items;
  obj3 = {
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
    children: null,
  };
  const obj4 = { gesture, children: null };
  const items1 = [draggableGridItemStyles];
  const obj8 = insets(ref[15]);
  let elevationShadow;
  if (tmp3Result.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  obj5 = { style: items1, children: tmp14(tmp15, { children }) };
  items1[1] = elevationShadow;
  obj4.children = jsx(require("ReanimatedRexport").View, { style: items1, children: tmp14(tmp15, { children }) });
  obj3.children = jsx(insets(ref[16]).GestureDetector, { gesture, children: null });
  obj2.children = (
    <closure_5
      ref={ref}
      style={tmp2.pipInnerContainer}
      pointerEvents="box-none"
      onLayout={function onLayout() {
        if (null != ref.current) {
          const current = ref.current;
          current.measure((x, y, width, height, pageX, pageY) => {
            const size = { x, y, width, height, pageX, pageY };
            closure_1_1(size);
          });
        }
      }}
    >
      {null}
    </closure_5>
  );
  return jsx(require("ReanimatedRexport").View, { style: null, pointerEvents: "box-none", children: null });
});
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;
