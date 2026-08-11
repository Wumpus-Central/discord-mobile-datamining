// discord_app/modules/screen_recording/native/ScreenRecordingPip.tsx
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import { View } from "PressableBase";
import { useScreenRecordingStore } from "useScreenRecordingStore";
import jsxProd from "StopIcon";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
function DraggableContainer(children) {
  const x = children.x;
  const _require = x;
  const y = children.y;
  const importDefault = y;
  const contentWidth = children.contentWidth;
  const contentHeight = children.contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = children.onChangePosition;
  let sharedValue;
  let sharedValue1;
  let c8;
  let c9;
  let callback;
  let obj = _require(contentWidth[7]);
  sharedValue = obj.useSharedValue(x.get());
  let obj1 = _require(contentWidth[7]);
  sharedValue1 = obj1.useSharedValue(y.get());
  const tmp4 = importDefault(contentWidth[8])();
  c8 = tmp4;
  const tmp5 = importDefault(contentWidth[9])();
  c9 = tmp5;
  class C {
    constructor(arg0, arg1) {
      value = c9.get();
      ({ width, height } = value);
      rect = c8.get();
      obj = { x: null, y: null };
      obj2 = closure_0(contentWidth[7]);
      obj[0] = obj2.clamp(children, rect.left + c4, width - rect.right - contentWidth - c4);
      obj3 = closure_0(contentWidth[7]);
      obj[1] = obj3.clamp(arg1, rect.top + c4, height - rect.bottom - contentHeight - c4);
      return obj;
    }
  }
  obj = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: _require(contentWidth[7]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  C.__closure = obj;
  C.__workletHash = 5314404716267;
  C.__initData = closure_12;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  callback = num.useCallback(C, items);
  let obj3 = _require(contentWidth[10]);
  obj = { onActivate: fn, onUpdate: fn2, onDeactivate: null };
  fn = function b() {
    const result = sharedValue.set(store.get());
    const result1 = sharedValue1.set(store2.get());
  };
  fn.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  fn.__workletHash = 13009482509687;
  fn.__initData = closure_13;
  fn2 = function v(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = store.set(point.x);
    const result1 = store2.set(point.y);
  };
  fn2.__closure = { getClampedPosition: callback, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn2.__workletHash = 3428194988690;
  fn2.__initData = closure_14;
  const fn3 = function f() {
    let obj = store(contentWidth[7]);
    obj = { x: null, y: null };
    obj[0] = store.get();
    obj[1] = store2.get();
    obj.runOnJS(onChangePosition)(obj);
  };
  obj1 = { runOnJS: _require(contentWidth[7]).runOnJS, onChangePosition, x, y };
  fn3.__closure = obj1;
  fn3.__workletHash = 15302036225057;
  fn3.__initData = closure_15;
  obj[2] = fn3;
  const panGesture = obj3.usePanGesture(obj);
  const tmp = createCacheKey();
  class X {
    constructor() {
      value = closure_0.get();
      tmp2 = c10(value, closure_1.get());
      obj = { transform: null };
      obj = { translateX: null };
      ({ x, y } = tmp2);
      obj3 = closure_0(contentWidth[11]);
      obj[0] = obj3.withSpring(x, closure_0(contentWidth[12]).springUnclamped);
      items = [, ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj5 = closure_0(contentWidth[11]);
      obj1[0] = obj5.withSpring(y, closure_0(contentWidth[12]).springUnclamped);
      items[1] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  const obj7 = _require(contentWidth[7]);
  X.__closure = { getClampedPosition: callback, x, y, withSpring: _require(contentWidth[11]).withSpring, springUnclamped: _require(contentWidth[12]).springUnclamped };
  X.__workletHash = 5273315246744;
  X.__initData = closure_16;
  const animatedStyle = obj7.useAnimatedStyle(X);
  obj3 = { gesture: panGesture, children: null };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj3[1] = sharedValue1(importDefault(contentWidth[7]).View, { style: items1, children: children.children });
  return sharedValue1(_require(contentWidth[10]).GestureDetector, obj3);
}
function ScreenRecordingPip(surveyConfig) {
  surveyConfig = surveyConfig.surveyConfig;
  let _require;
  let importDefault;
  let point;
  let sharedValue;
  let sharedValue1;
  const tmp = createCacheKey();
  let obj = point;
  const tmp3 = importDefault(point[9])();
  _require = tmp3;
  const tmp4 = importDefault(point[8])();
  importDefault = tmp4;
  const tmp6 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp7 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp3, tmp4];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp6);
  const tmp9 = sharedValue(sharedValue1.useState(sharedValue1.useCallback(() => {
    const rect = _undefined2.get();
    const diff = _undefined.get().width - rect.right - outer1_10;
    return { x: diff - _undefined2(point[6]).space.PX_16, y: rect.top + _undefined2(point[6]).space.PX_16 };
  }, items)), 2);
  point = tmp9[0];
  let Button = _require;
  let obj1 = _require(point[7]);
  sharedValue = obj1.useSharedValue(point.x);
  let obj2 = _require(point[7]);
  sharedValue1 = obj2.useSharedValue(point.y);
  const items1 = [, , , ];
  ({ x: arr2[0], y: arr2[1] } = point);
  items1[2] = sharedValue;
  items1[3] = sharedValue1;
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(point.x);
    const result1 = sharedValue1.set(point.y);
  }, items1);
  if (!tmp5) {
    return null;
  } else {
    obj = { x: null, y: null };
    obj[0] = sharedValue;
    obj[1] = sharedValue1;
    const items2 = [callback(tmp2(obj[16]), obj), ];
    obj = { x: null, y: null, contentWidth: null, contentHeight: null, dragBoundsPadding: null, onChangePosition: null, children: null };
    obj[0] = sharedValue;
    obj[1] = sharedValue1;
    obj[2] = c10;
    obj[3] = c10;
    obj[4] = tmp2(obj[6]).space.PX_4;
    obj[5] = tmp9[1];
    obj1 = { style: null, accessibilityRole: "button", onPress: null, activeOpacity: 0.5, children: null };
    obj1[0] = tmp.widget;
    obj1[2] = tmp13;
    obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", style: null, children: null };
    obj2[2] = tmp.stepText;
    let str = "Uploading...";
    if (!tmp7) {
      const _HermesInternal = HermesInternal;
      str = "Step " + tmp6 + 1;
    }
    obj2[3] = str;
    const items3 = [callback(Button(obj[18]).Text, obj2), ];
    if (tmp7) {
      Button = Button(obj[19]).Button;
      const obj3 = { loading: true, text: "", onPress: null };
      obj3[2] = function onPress() {

      };
      let tmp16Result = tmp16(Button, obj3);
    } else {
      const obj4 = { style: null, children: null };
      if (isStepCompleted) {
        obj4[0] = tmp.doneButton;
        obj4[1] = tmp16(Button(obj[20]).CheckmarkLargeIcon, { size: "md", color: "status-positive" });
        let tmp21 = obj4;
      } else {
        obj4[0] = tmp.stopButton;
        obj4[1] = tmp16(Button(obj[21]).StopIcon, { size: "md", color: "text-feedback-critical" });
        tmp21 = obj4;
      }
      tmp16Result = tmp16(View, tmp21);
      const tmp20 = View;
    }
    obj = { children: null };
    items3[1] = tmp16Result;
    obj1[4] = items3;
    obj1 = tmp14(Button(obj[17]).PressableOpacity, obj1);
    obj[6] = obj1;
    obj = tmp16(DraggableContainer, obj);
    items2[1] = obj;
    obj[0] = items2;
    closure_8(closure_9, obj);
    const tmp15 = closure_9;
    const tmp17 = DraggableContainer;
  }
}
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
let c10 = 100;
createCacheKey = { widgetContainer: { position: "absolute" }, widget: null, stepText: null, stopButton: null, doneButton: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: 100, width: 100, gap: require("Themes").space.PX_8, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xl };
const merged = Object.assign(require("Themes").shadows.SHADOW_MOBILE_NAVIGATOR_X);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center", maxWidth: 68 };
createCacheKey[3] = { padding: require("Themes").space.PX_8, borderWidth: 1, borderColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.round };
let obj1 = { padding: require("Themes").space.PX_8, borderWidth: 1, borderColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.round };
createCacheKey[4] = { padding: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function ScreenRecordingPipTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
let closure_13 = { code: "function ScreenRecordingPipTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
let closure_14 = { code: "function ScreenRecordingPipTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
let closure_15 = { code: "function ScreenRecordingPipTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
let closure_16 = { code: "function ScreenRecordingPipTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let obj2 = { padding: require("Themes").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default function ScreenRecordingPipConnected() {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: null };
    obj[0] = tmp;
    tmp2 = callback(ScreenRecordingPip, obj);
  }
  return tmp2;
};