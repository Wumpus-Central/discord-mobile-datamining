// === Module 15286: DraggableContainer ===

// Module 15286 (DraggableContainer)
import ThemesDefault from "Themes" /* 712 */;
import _mod4120 from "module_4120" /* 4120 */;
import PressableBase from "PressableBase" /* 4949 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 14976 */;
import VisualEffectViewOverrideOverlay_Default from "VisualEffectViewOverrideOverlay_" /* 15287 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "initialize" /* 7323 */;
import { DEV_WIDGET_SIZE } from "STORAGE_KEY_LOG_DISPATCHES" /* 710 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function DraggableContainer(children) {
  const x = children.x;
  const _require = x;
  const y = children.y;
  importDefault = y;
  const contentWidth = children.contentWidth;
  const contentHeight = children.contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = children.onChangePosition;
  let sharedValue;
  let sharedValue1;
  closure_8 = undefined;
  let callback3;
  let callback;
  let obj = _require(contentWidth[6]);
  sharedValue = obj.useSharedValue(x.get());
  obj1 = _require(contentWidth[6]);
  sharedValue1 = obj1.useSharedValue(y.get());
  const tmp4 = importDefault(contentWidth[7])();
  closure_8 = tmp4;
  const tmp5 = importDefault(contentWidth[8])();
  callback3 = tmp5;
  class P {
    constructor(arg0, arg1) {
      value = closure_9.get();
      ({ width, height } = value);
      rect = closure_8.get();
      obj = { x: null, y: null };
      obj2 = closure_0(contentWidth[6]);
      obj[0] = obj2.clamp(children, rect.left + c4, width - rect.right - contentWidth - c4);
      obj3 = closure_0(contentWidth[6]);
      obj[1] = obj3.clamp(arg1, rect.top + c4, height - rect.bottom - contentHeight - c4);
      return obj;
    }
  }
  obj = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: _require(contentWidth[6]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  P.__closure = obj;
  P.__workletHash = 729779775192;
  P.__initData = callback;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  callback = contentHeight.useCallback(P, items);
  let obj3 = _require(contentWidth[9]);
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
  C.__initData = closure_11;
  obj[0] = C;
  const fn = function f(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = store.set(point.x);
    const result1 = store2.set(point.y);
  };
  fn.__closure = { getClampedPosition: callback, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 10056531764801;
  fn.__initData = closure_12;
  obj[1] = fn;
  class D {
    constructor() {
      obj = closure_0(contentWidth[6]);
      obj = { x: null, y: null };
      runOnJSResult = obj.runOnJS(onChangePosition);
      obj[0] = closure_0.get();
      obj[1] = closure_1.get();
      tmpResult = runOnJSResult(obj);
      return;
    }
  }
  obj1 = { runOnJS: _require(contentWidth[6]).runOnJS, onChangePosition, x, y };
  D.__closure = obj1;
  D.__workletHash = 10003102447058;
  D.__initData = closure_13;
  obj[2] = D;
  const panGesture = obj3.usePanGesture(obj);
  const tmp = callback3();
  class W {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_10(value, closure_1.get());
      obj = { transform: null };
      obj = { translateX: null };
      ({ x, y } = tmp2);
      obj3 = closure_0(contentWidth[10]);
      obj[0] = obj3.withSpring(x, closure_0(contentWidth[11]).springUnclamped);
      items = [, ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj5 = closure_0(contentWidth[10]);
      obj1[0] = obj5.withSpring(y, closure_0(contentWidth[11]).springUnclamped);
      items[1] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  const obj7 = _require(contentWidth[6]);
  W.__closure = { getClampedPosition: callback, x, y, withSpring: _require(contentWidth[10]).withSpring, springUnclamped: _require(contentWidth[11]).springUnclamped };
  W.__workletHash = 6251354551691;
  W.__initData = closure_14;
  const animatedStyle = obj7.useAnimatedStyle(W);
  obj3 = { gesture: panGesture, children: sharedValue(importDefault(contentWidth[6]).View, { style: items1, children: children.children }) };
  items1 = [tmp.widgetContainer, animatedStyle];
  return sharedValue(_require(contentWidth[9]).GestureDetector, obj3);
}
let c3 = importAllResult;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let obj = { widgetContainer: { position: "absolute" }, widget: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: ThemesDefault.radii.xl };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj[1] = obj;
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function DevWidgetTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
let closure_11 = { code: "function DevWidgetTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
let closure_12 = { code: "function DevWidgetTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
let closure_13 = { code: "function DevWidgetTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
let closure_14 = { code: "function DevWidgetTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let closure_16 = importAllResult.memo(() => {
  const tmp = callback3();
  return callback(PressableBase.PressableOpacity, {
    style: callback3().widget,
    accessibilityRole: "button",
    onPress() {
      return callback(table[13]).navigateToDevTools();
    },
    activeOpacity: 0.5,
    children: callback(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" })
  });
});
let result = require("set").fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default function DevWidget() {
  let obj = _mod4120;
  const sharedValue = obj.useSharedValue(closure_4.devWidgetPosition.x);
  const sharedValue1 = _mod4120.useSharedValue(closure_4.devWidgetPosition.y);
  obj = { children: null };
  const items = [callback(VisualEffectViewOverrideOverlay_Default, { x: sharedValue, y: sharedValue1 }), ];
  obj = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: ThemesDefault.space.PX_4,
    onChangePosition(devWidgetPosition) {
      let obj = callback(table[16]);
      obj = { devWidgetPosition };
      return obj.updateDevToolsSettings(obj);
    },
    children: callback(closure_16, {})
  };
  items[1] = callback(DraggableContainer, obj);
  obj[0] = items;
  return callback2(closure_7, obj);
};