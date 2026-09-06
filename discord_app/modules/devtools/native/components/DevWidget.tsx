// discord_app/modules/devtools/native/components/DevWidget.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import StaffBadgeIcon from "../../../../design/components/Icon/native/redesign/generated/StaffBadgeIcon.tsx";
import VEVOODefault from "../../../visual_effect_view/native/overrides/VEVOO.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevToolsSettingsStore from "../../DevToolsSettingsStore.tsx";

require = fn;
function DraggableContainer(children) {
  const x = children.x;
  _require = x;
  const y = children.y;
  importDefault = y;
  const contentWidth = children.contentWidth;
  const contentHeight = children.contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = children.onChangePosition;
  let getClampedPosition;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(x.get());
  let obj1 = require("ReanimatedRexport");
  const sharedValue1 = obj1.useSharedValue(y.get());
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  closure_8 = tmp4;
  const tmp5 = require("useWindowDimensionsSharedValue")();
  closure_9 = tmp5;
  class P {
    constructor(arg0, arg1) {
      value = closure_9.get();
      ({ width, height } = value);
      rect = closure_8.get();
      point = { x: null, y: null };
      obj2 = closure_0(closure_2[6]);
      point.x = obj2.clamp(children, rect.left + c4, width - rect.right - contentWidth - c4);
      obj3 = closure_0(closure_2[6]);
      point.y = obj3.clamp(arg1, rect.top + c4, height - rect.bottom - contentHeight - c4);
      return point;
    }
  }
  obj = {
    windowDimensionsSharedValue: tmp5,
    insetsSharedValue: tmp4,
    clamp: require("ReanimatedRexport").clamp,
    dragBoundsPadding: num,
    contentWidth,
    contentHeight,
  };
  P.__closure = obj;
  P.__workletHash = 729779775192;
  P.__initData = getClampedPosition;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  getClampedPosition = contentHeight.useCallback(P, items);
  const tmp = closure_9();
  obj = { onActivate: null, onUpdate: null, onDeactivate: null };
  class C {
    constructor() {
      result = closure_6.set(closure_0.get());
      result1 = closure_7.set(closure_1.get());
      return;
    }
  }
  C.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  C.__workletHash = 11333606215108;
  C.__initData = __initData;
  obj.onActivate = C;
  const fn = function f(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = closure_0.set(point.x);
    const result1 = closure_1.set(point.y);
  };
  fn.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 10056531764801;
  fn.__initData = __initData2;
  obj.onUpdate = fn;
  class D {
    constructor() {
      obj = closure_0(closure_2[6]);
      point = { x: null, y: null };
      runOnJSResult = obj.runOnJS(onChangePosition);
      point.x = closure_0.get();
      point.y = closure_1.get();
      tmpResult = runOnJSResult(point);
      return;
    }
  }
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  D.__closure = point;
  D.__workletHash = 10003102447058;
  D.__initData = __initData3;
  obj.onDeactivate = D;
  const panGesture = require("LegacyBaseButton").usePanGesture(obj);
  const obj4 = require("LegacyBaseButton");
  class W {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_10(value, closure_1.get());
      obj = { transform: null };
      obj = { translateX: null };
      ({ x, y } = tmp2);
      obj3 = closure_0(closure_2[10]);
      obj.translateX = obj3.withSpring(x, closure_0(closure_2[11]).springUnclamped);
      items = [,];
      items[0] = obj;
      obj1 = { translateY: null };
      obj5 = closure_0(closure_2[10]);
      obj1.translateY = obj5.withSpring(y, closure_0(closure_2[11]).springUnclamped);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const point1 = {
    getClampedPosition,
    x,
    y,
    withSpring: require("spring").withSpring,
    springUnclamped: require("springPresets").springUnclamped,
  };
  W.__closure = point1;
  W.__workletHash = 6251354551691;
  W.__initData = __initData4;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(W);
  obj1 = { gesture: panGesture, children: null };
  let obj2 = { style: null, children: children.children };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj2.style = items1;
  obj1.children = sharedValue(require("ReanimatedRexport").View, obj2);
  return sharedValue(require("LegacyBaseButton").GestureDetector, obj1);
}
const DEV_WIDGET_SIZE = fn(574).DEV_WIDGET_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { widgetContainer: { position: "absolute" }, widget: null };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  justifyContent: "center",
  alignItems: "center",
  height: DEV_WIDGET_SIZE,
  width: DEV_WIDGET_SIZE,
  borderRadius: nativeDefault.radii.xl,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.widget = size;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = {
  code: "function DevWidgetTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}",
};
const __initData = {
  code: "function DevWidgetTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}",
};
const __initData2 = {
  code: "function DevWidgetTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}",
};
const __initData3 = {
  code: "function DevWidgetTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}",
};
const __initData4 = {
  code: "function DevWidgetTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}",
};
let closure_16 = noop.memo(() => {
  const tmp = closure_9();
  return timestampProducer(Pressables.PressableOpacity, {
    style: closure_9().widget,
    accessibilityRole: "button",
    onPress() {
      return require("DevToolsNavigator").navigateToDevTools();
    },
    activeOpacity: 0.5,
    children: timestampProducer(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" }),
  });
});
size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default function DevWidget() {
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
  const sharedValue1 = ReanimatedRexport.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
  obj = { children: null };
  const items = [timestampProducer(VEVOODefault, { x: sharedValue, y: sharedValue1 })];
  const point = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: nativeDefault.space.PX_4,
    onChangePosition(devWidgetPosition) {
      require("DevToolsActionCreators");
      const obj = { devWidgetPosition };
      return obj.updateDevToolsSettings(obj);
    },
    children: timestampProducer(closure_16, {}),
  };
  items[1] = timestampProducer(DraggableContainer, point);
  obj.children = items;
  return React6(React5, obj);
}
