// === Module 11879: PictureInPicture ===

// Module 11879 (PictureInPicture)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5737 */;
import spring_spring from "spring/spring" /* 5763 */;
import useShouldForcePipOrientation from "useShouldForcePipOrientation" /* 11880 */;
import usePipDimensionsDefault from "usePipDimensions" /* 11883 */;
import useIsViewingActivity from "useIsViewingActivity" /* 11884 */;
import useDraggablePip from "useDraggablePip" /* 11885 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const toggleFocus = fn(11139).toggleFocus;
const PictureInPicturePositions = fn(1072).PictureInPicturePositions;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let obj = { pipOuterContainer: null, pipInnerContainer: null, elevationShadow: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "baseline";
obj.pipOuterContainer = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "baseline";
obj.pipInnerContainer = obj4;
const native = fn(1187);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1187).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = createStyles.createStyles(obj);
let items = [{ code: "(function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,overshootClamping:true,velocity:velocity};})" }];
[tmp5] = items;
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__workletHash = 9813770049776;
getSpringAnimationConfig.__initData = tmp5;
let closure_11 = { code: "(function PictureInPictureTsx2(){let[insets,withSpring,getSpringAnimationConfig]=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default noop.memo(function PictureInPicture(preferredPosition) {
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  const tmp2 = closure_9();
  const shouldForcePipOrientation = useShouldForcePipOrientation.useShouldForcePipOrientation({ channel });
  ({ width, height } = useWindowDimensionsDefault());
  let size = usePipDimensionsDefault({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
  const obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp7 = useWindowDimensionsDefault();
  [size2, c0] = noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 });
  const tmp8 = _slicedToArray(noop.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  items = [closure_11, useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets, spring_spring.withSpring, getSpringAnimationConfig];
  c0 = undefined;
  let ref;
  c2 = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items;
  class PictureInPictureTsx2 {
    constructor() {
      obj = { marginTop: closure_0.top, marginBottom: closure_1(closure_0.bottom, closure_2()) };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12];
  PictureInPictureTsx2.__closure = items1;
  PictureInPictureTsx2.__workletHash = 16667877031596;
  PictureInPictureTsx2.__initData = tmp9;
  const animatedStyle = _mod1652.useAnimatedStyle(PictureInPictureTsx2);
  const isViewingActivity = useIsViewingActivity.useIsViewingActivity({ channelId: channel.id });
  const obj5 = { channelId: channel.id };
  const tmp3Result = useIsViewingActivity;
  const size1 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: null };
  let tmp15;
  if (isViewingActivity) {
    tmp15 = toggleFocus;
  }
  size1.onPress = tmp15;
  const draggablePip = useDraggablePip.useDraggablePip(size1);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = noop.useRef(null);
  const obj6 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp2.pipOuterContainer, animatedStyle, style];
  obj6.style = items2;
  const obj7 = {
    ref,
    style: tmp2.pipInnerContainer,
    pointerEvents: "box-none",
    onLayout() {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((x, y, width, height, pageX, pageY) => {
          const size = { x, y, width, height, pageX, pageY };
          _undefined(size);
        });
      }
    },
    children: null
  };
  const obj8 = { gesture, children: null };
  const items3 = [draggableGridItemStyles, ];
  const tmp3Result3 = useDraggablePip;
  let elevationShadow;
  if (tmp3Result4.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  tmp3Result4 = PlatformUtils;
  items3[1] = elevationShadow;
  obj8.children = jsx(_modDef1652.View, { style: items3, children: <hasOwnProperty>{children}</hasOwnProperty> });
  obj7.children = jsx(LegacyBaseButton.GestureDetector, { gesture, children: null });
  obj6.children = <hasOwnProperty ref={ref} style={tmp2.pipInnerContainer} pointerEvents="box-none" onLayout={function onLayout() {
    if (null != ref.current) {
      const current = ref.current;
      current.measure((x, y, width, height, pageX, pageY) => {
        const size = { x, y, width, height, pageX, pageY };
        _undefined(size);
      });
    }
  }}>{null}</hasOwnProperty>;
  return jsx(_modDef1652.View, { style: null, pointerEvents: "box-none", children: null });
});
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;