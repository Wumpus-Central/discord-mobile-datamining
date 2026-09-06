// discord_app/modules/screen_recording/native/ScreenRecordingPip.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  class C {
    constructor(arg0, arg1) {
      value = closure_9.get();
      ({ width, height } = value);
      rect = closure_8.get();
      point = { x: null, y: null };
      obj2 = closure_0(closure_2[7]);
      point.x = obj2.clamp(children, rect.left + c4, width - rect.right - contentWidth - c4);
      obj3 = closure_0(closure_2[7]);
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
  C.__closure = obj;
  C.__workletHash = 5314404716267;
  C.__initData = __initData;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  getClampedPosition = num.useCallback(C, items);
  const tmp = closure_11();
  obj = { onActivate: null, onUpdate: null, onDeactivate: null };
  const fn = function b() {
    const result = sharedValue.set(closure_0.get());
    const result1 = sharedValue1.set(closure_1.get());
  };
  fn.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  fn.__workletHash = 13009482509687;
  fn.__initData = __initData2;
  obj.onActivate = fn;
  const fn2 = function v(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = closure_0.set(point.x);
    const result1 = closure_1.set(point.y);
  };
  fn2.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn2.__workletHash = 3428194988690;
  fn2.__initData = __initData3;
  obj.onUpdate = fn2;
  const fn3 = function f() {
    const point = { x: null, y: null };
    point.x = closure_0.get();
    point.y = closure_1.get();
    ReanimatedRexport.runOnJS(onChangePosition)(point);
  };
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  fn3.__closure = point;
  fn3.__workletHash = 15302036225057;
  fn3.__initData = __initData4;
  obj.onDeactivate = fn3;
  const panGesture = require("LegacyBaseButton").usePanGesture(obj);
  const obj4 = require("LegacyBaseButton");
  class X {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_10(value, closure_1.get());
      obj = { transform: null };
      obj = { translateX: null };
      ({ x, y } = tmp2);
      obj3 = closure_0(closure_2[11]);
      obj.translateX = obj3.withSpring(x, closure_0(closure_2[12]).springUnclamped);
      items = [,];
      items[0] = obj;
      obj1 = { translateY: null };
      obj5 = closure_0(closure_2[11]);
      obj1.translateY = obj5.withSpring(y, closure_0(closure_2[12]).springUnclamped);
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
  X.__closure = point1;
  X.__workletHash = 5273315246744;
  X.__initData = __initData5;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(X);
  obj1 = { gesture: panGesture, children: null };
  let obj2 = { style: null, children: children.children };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj2.style = items1;
  obj1.children = sharedValue1(require("ReanimatedRexport").View, obj2);
  return sharedValue1(require("LegacyBaseButton").GestureDetector, obj1);
}
function ScreenRecordingPip(surveyConfig) {
  surveyConfig = surveyConfig.surveyConfig;
  importDefault = undefined;
  let point;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_11();
  let tmp14Result = point;
  const tmp3 = require("useWindowDimensionsSharedValue")();
  _require = tmp3;
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  importDefault = tmp4;
  const tmp6 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp7 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp3, tmp4];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp6);
  const tmp9 = sharedValue(
    sharedValue1.useState(
      sharedValue1.useCallback(() => {
        const rect = closure_1.get();
        point = { x: null, y: null };
        const diff = closure_0.get().width - rect.right - c10;
        point.x = diff - nativeDefault.space.PX_16;
        point.y = rect.top + nativeDefault.space.PX_16;
        return point;
      }, items),
    ),
    2,
  );
  point = tmp9[0];
  let Button = _require;
  let obj1 = require("ReanimatedRexport");
  sharedValue = obj1.useSharedValue(point.x);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(point.y);
  const items1 = [, , ,];
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
    point = { x: sharedValue, y: sharedValue1 };
    const items2 = [closure_7(tmp2(tmp14Result[16]), point)];
    let point1 = {
      x: sharedValue,
      y: sharedValue1,
      contentWidth: v100,
      contentHeight: v100,
      dragBoundsPadding: tmp2(tmp14Result[6]).space.PX_4,
      onChangePosition: tmp9[1],
      children: null,
    };
    tmp14Result = {
      style: tmp.widget,
      accessibilityRole: "button",
      onPress: tmp13,
      activeOpacity: 0.5,
      children: null,
    };
    const obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.stepText, children: null };
    let str = "Uploading...";
    if (!tmp7) {
      const _HermesInternal = HermesInternal;
      str = "Step " + tmp6 + 1;
    }
    obj.children = str;
    const items3 = [closure_7(Button(tmp14Result[18]).Text, obj)];
    if (tmp7) {
      Button = Button(tmp14Result[19]).Button;
      obj1 = {
        loading: true,
        text: "",
        onPress() {},
      };
      let tmp16Result = closure_7(Button, obj1);
    } else {
      obj2 = { style: null, children: null };
      if (isStepCompleted) {
        obj2.style = tmp.doneButton;
        obj2.children = closure_7(Button(tmp14Result[20]).CheckmarkLargeIcon, { size: "md", color: "status-positive" });
        let tmp21 = obj2;
      } else {
        obj2.style = tmp.stopButton;
        obj2.children = closure_7(Button(tmp14Result[21]).StopIcon, { size: "md", color: "text-feedback-critical" });
        tmp21 = obj2;
      }
      tmp16Result = closure_7(View, tmp21);
    }
    tmp14Result = { children: null };
    items3[1] = tmp16Result;
    tmp14Result.children = items3;
    tmp14Result = closure_8(Button(tmp14Result[17]).PressableOpacity, tmp14Result);
    point1.children = tmp14Result;
    point1 = closure_7(DraggableContainer, point1);
    items2[1] = point1;
    tmp14Result.children = items2;
    tmp14Result = closure_8(closure_9, tmp14Result);
  }
  tmp5 = useScreenRecordingStore((isRecording) => isRecording.isRecording);
}
const View = fn(17).View;
const useScreenRecordingStore = fn(15932).useScreenRecordingStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 100;
fn(4560);
let createStyles = {
  widgetContainer: { position: "absolute" },
  widget: null,
  stepText: null,
  stopButton: null,
  doneButton: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  justifyContent: "center",
  alignItems: "center",
  height: 100,
  width: 100,
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xl,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
createStyles.widget = size;
createStyles.stepText = { textAlign: "center", maxWidth: 68 };
createStyles = {
  padding: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.round,
};
createStyles.stopButton = createStyles;
createStyles.doneButton = { padding: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function ScreenRecordingPipTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}",
};
const __initData2 = {
  code: "function ScreenRecordingPipTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}",
};
const __initData3 = {
  code: "function ScreenRecordingPipTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}",
};
const __initData4 = {
  code: "function ScreenRecordingPipTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}",
};
const __initData5 = {
  code: "function ScreenRecordingPipTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default function ScreenRecordingPipConnected() {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: tmp };
    tmp2 = React5(ScreenRecordingPip, obj);
  }
  return tmp2;
}
