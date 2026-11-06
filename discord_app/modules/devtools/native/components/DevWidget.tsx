// === Module 18250: DevWidget ===

// Module 18250 (DevWidget)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import spring_spring from "spring/spring" /* 5791 */;
import springPresets from "springPresets" /* 5792 */;
import Pressables from "Pressables" /* 7068 */;
import useSafeAreaInsetsSharedValueDefault from "useSafeAreaInsetsSharedValue" /* 11402 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13005 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17843 */;
import VEVOODefault from "VEVOO" /* 18251 */;
import noop from "module_19" /* 19 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7962 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function DraggableContainer(arg0) {
  ({ x, y, contentWidth, contentHeight, dragBoundsPadding } = arg0);
  if (dragBoundsPadding === undefined) {
    dragBoundsPadding = 0;
  }
  ({ onChangePosition, children } = arg0);
  const tmp = closure_9();
  const sharedValue = _mod1652.useSharedValue(x.get());
  const sharedValue1 = _mod1652.useSharedValue(y.get());
  const tmp7 = useSafeAreaInsetsSharedValueDefault();
  const tmp8 = useWindowDimensionsSharedValueDefault();
  items = [closure_10, tmp8, tmp7, _mod1652.clamp, dragBoundsPadding, contentWidth, contentHeight];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class DevWidgetTsx1 {
    constructor(arg0, arg1) {
      value = closure_0.get();
      ({ width, height } = value);
      rect = closure_1.get();
      point = { x: closure_2(arg0, rect.left + closure_3, width - rect.right - closure_4 - closure_3), y: closure_2(arg1, rect.top + closure_3, height - rect.bottom - closure_5 - closure_3) };
      return point;
    }
  }
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  DevWidgetTsx1.__closure = items1;
  DevWidgetTsx1.__workletHash = 7329108226657;
  DevWidgetTsx1.__initData = tmp10;
  const items2 = [contentHeight, contentWidth, dragBoundsPadding, tmp7, tmp8];
  const callback = noop.useCallback(DevWidgetTsx1, items2);
  const items3 = [closure_11, sharedValue, x, sharedValue1, y];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22] = items3;
  const obj3 = { onActivate: null, onUpdate: null, onDeactivate: null };
  class DevWidgetTsx2 {
    constructor() {
      result = closure_0.set(closure_1.get());
      result1 = closure_2.set(closure_3.get());
      return;
    }
  }
  const items4 = [tmp19, tmp20, tmp21, tmp22];
  DevWidgetTsx2.__closure = items4;
  DevWidgetTsx2.__workletHash = 13170682718653;
  DevWidgetTsx2.__initData = tmp18;
  obj3.onActivate = DevWidgetTsx2;
  const items5 = [closure_12, callback, sharedValue, sharedValue1, x, y];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items5;
  class DevWidgetTsx3 {
    constructor(arg0) {
      sum = closure_1.get() + arg0.translationX;
      point = closure_0(sum, closure_2.get() + arg0.translationY);
      result = closure_3.set(point.x);
      result1 = closure_4.set(point.y);
      return;
    }
  }
  const items6 = [tmp24, tmp25, tmp26, tmp27, tmp28];
  DevWidgetTsx3.__closure = items6;
  DevWidgetTsx3.__workletHash = 9152627460216;
  DevWidgetTsx3.__initData = tmp23;
  obj3.onUpdate = DevWidgetTsx3;
  const items7 = [closure_13, _mod1705.scheduleOnRN, onChangePosition, x, y];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33] = items7;
  class DevWidgetTsx4 {
    constructor() {
      point = { x: closure_2.get(), y: closure_3.get() };
      tmp = closure_0(closure_1, point);
      return;
    }
  }
  const items8 = [tmp30, tmp31, tmp32, tmp33];
  DevWidgetTsx4.__closure = items8;
  DevWidgetTsx4.__workletHash = 9806948257030;
  DevWidgetTsx4.__initData = tmp29;
  obj3.onDeactivate = DevWidgetTsx4;
  const panGesture = LegacyBaseButton.usePanGesture(obj3);
  const tmp2Result = LegacyBaseButton;
  const items9 = [closure_14, callback, x, y, spring_spring.withSpring, springPresets.springUnclamped];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items9;
  class DevWidgetTsx5 {
    constructor() {
      value = closure_1.get();
      point = closure_0(value, closure_2.get());
      obj = { transform: null };
      obj1 = { translateX: closure_3(point.x, closure_4) };
      items = [, ];
      items[0] = obj1;
      obj4 = { translateY: closure_3(point.y, closure_4) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items10 = [tmp36, tmp37, tmp38, tmp39, tmp40];
  DevWidgetTsx5.__closure = items10;
  DevWidgetTsx5.__workletHash = 4562461506226;
  DevWidgetTsx5.__initData = tmp35;
  const animatedStyle = _mod1652.useAnimatedStyle(DevWidgetTsx5);
  const obj4 = { gesture: panGesture, children: null };
  const obj5 = { style: null, children };
  const items11 = [tmp.widgetContainer, animatedStyle];
  obj5.style = items11;
  obj4.children = timestampProducer(_modDef1652.View, obj5);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj4);
}
const DEV_WIDGET_SIZE = fn(573).DEV_WIDGET_SIZE;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5170);
let obj = { widgetContainer: { position: "absolute" }, widget: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: nativeDefault.radii.xl };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.widget = size;
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "(function DevWidgetTsx1(x,y){let[windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight]=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};})" };
let closure_11 = { code: "(function DevWidgetTsx2(){let[originalX,x,originalY,y]=this.__closure;originalX.set(x.get());originalY.set(y.get());})" };
let closure_12 = { code: "(function DevWidgetTsx3(event){let[getClampedPosition,originalX,originalY,x,y]=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);})" };
let closure_13 = { code: "(function DevWidgetTsx4(){let[scheduleOnRN,onChangePosition,x,y]=this.__closure;scheduleOnRN(onChangePosition,{x:x.get(),y:y.get()});})" };
let closure_14 = { code: "(function DevWidgetTsx5(){let[getClampedPosition,x,y,withSpring,springUnclamped]=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};})" };
let closure_16 = noop.memo(function DevWidgetContent() {
  const tmp = closure_9();
  return timestampProducer(Pressables.PressableOpacity, {
    style: closure_9().widget,
    accessibilityRole: "button",
    onPress() {
      return require("DevToolsNavigator").navigateToDevTools();
    },
    activeOpacity: 0.5,
    children: timestampProducer(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" })
  });
});
size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default function DevWidget() {
  const sharedValue = _mod1652.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
  const sharedValue1 = _mod1652.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
  const obj3 = { children: null };
  items = [timestampProducer(VEVOODefault, { x: sharedValue, y: sharedValue1 }), ];
  const point = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: nativeDefault.space.PX_4,
    onChangePosition(devWidgetPosition) {
      return require("DevToolsActionCreators").updateDevToolsSettings({ devWidgetPosition });
    },
    children: timestampProducer(closure_16, {})
  };
  items[1] = timestampProducer(DraggableContainer, point);
  obj3.children = items;
  return React5(metroImportDefault, obj3);
};