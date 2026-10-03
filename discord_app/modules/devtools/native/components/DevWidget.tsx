// === Module 15836: DevWidget ===

// Module 15836 (DevWidget)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import Pressables from "Pressables" /* 5909 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15401 */;
import VEVOODefault from "VEVOO" /* 15837 */;
import noop from "module_19" /* 19 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7203 */;

const require = globalThis.__r;

require = fn;
const DEV_WIDGET_SIZE = fn(585).DEV_WIDGET_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = { widgetContainer: { position: "absolute" }, widget: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: nativeDefault.radii.xl };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.widget = size;
let closure_9 = createStyles.createStyles(obj);
let __initData = { code: "function DevWidgetTsx1(x_0,y_0){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x_0,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y_0,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
const __initData2 = { code: "function DevWidgetTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
const __initData3 = { code: "function DevWidgetTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
const __initData4 = { code: "function DevWidgetTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
const __initData5 = { code: "function DevWidgetTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
const __initData6 = { code: "function DevWidgetTsx6(x_0,y_0){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x_0,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y_0,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
const __initData7 = { code: "function DevWidgetTsx7(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
const __initData8 = { code: "function DevWidgetTsx8(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
const __initData9 = { code: "function DevWidgetTsx9(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
const __initData10 = { code: "function DevWidgetTsx10(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(34);
  const x = arg0.x;
  _require = x;
  const y = arg0.y;
  importDefault = y;
  contentWidth = arg0.contentWidth;
  const contentHeight = arg0.contentHeight;
  ({ dragBoundsPadding, onChangePosition } = arg0);
  const children = arg0.children;
  let num = 0;
  if (undefined !== dragBoundsPadding) {
    num = dragBoundsPadding;
  }
  const tmp4 = closure_9();
  let obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(x.get());
  const tmpResult = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(y.get());
  const tmp8 = require("useSafeAreaInsetsSharedValue")();
  closure_8 = tmp8;
  const tmp9 = require("useWindowDimensionsSharedValue")();
  closure_9 = tmp9;
  if (cResult[0] === contentHeight) {
    if (cResult[1] === contentWidth) {
      if (cResult[2] === num) {
        if (cResult[3] === tmp8) {
          if (cResult[4] === tmp9) {
            let tmp10 = cResult[5];
          }
          __initData = tmp10;
          if (cResult[6] === sharedValue) {
            if (cResult[7] === sharedValue1) {
              if (cResult[8] === x) {
                if (cResult[9] === y) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] === tmp10) {
                  if (cResult[12] === sharedValue) {
                    if (cResult[13] === sharedValue1) {
                      if (cResult[14] === x) {
                        if (cResult[15] === y) {
                          let tmp14 = cResult[16];
                        }
                        if (cResult[17] === onChangePosition) {
                          if (cResult[18] === x) {
                            if (cResult[19] === y) {
                              let tmp17 = cResult[20];
                            }
                            if (cResult[21] === tmp11) {
                              if (cResult[22] === tmp14) {
                                tmp(tmp2[11]);
                                class T {
                                  constructor(arg0) {
                                    sum = closure_6.get() + arg0.translationX;
                                    point = closure_10(sum, closure_7.get() + arg0.translationY);
                                    result = closure_0.set(point.x);
                                    result1 = closure_1.set(point.y);
                                    return;
                                  }
                                }
                                class B {
                                  constructor() {
                                    result = closure_6.set(closure_0.get());
                                    result1 = closure_7.set(closure_1.get());
                                    return;
                                  }
                                }
                                class R {
                                  constructor() {
                                    value = closure_0.get();
                                    tmp2 = closure_10(value, closure_1.get());
                                    obj = { transform: null };
                                    obj1 = { translateX: null };
                                    ({ x, y } = tmp2);
                                    obj3 = closure_0(closure_2[12]);
                                    obj1.translateX = obj3.withSpring(x, closure_0(closure_2[13]).springUnclamped);
                                    items = [, ];
                                    items[0] = obj1;
                                    obj6 = { translateY: null };
                                    obj5 = closure_0(closure_2[12]);
                                    obj6.translateY = obj5.withSpring(y, closure_0(closure_2[13]).springUnclamped);
                                    items[1] = obj6;
                                    obj.transform = items;
                                    return obj;
                                  }
                                }
                                let point = { getClampedPosition: tmp10, x, y, withSpring: tmp(tmp2[12]).withSpring, springUnclamped: tmp(tmp2[13]).springUnclamped };
                                R.__closure = point;
                                R.__workletHash = 6251354551691;
                                R.__initData = __initData5;
                                const animatedStyle = obj5.useAnimatedStyle(R);
                                if (cResult[25] === animatedStyle) {
                                  if (cResult[26] === tmp4.widgetContainer) {
                                    let tmp27 = cResult[27];
                                  }
                                  if (cResult[28] === children) {
                                    if (cResult[29] === tmp27) {
                                      let tmp28 = cResult[30];
                                    }
                                    if (cResult[31] === tmp24) {
                                      if (cResult[32] === tmp28) {
                                        let tmp31 = cResult[33];
                                      }
                                      return tmp31;
                                    }
                                    class T {
                                      constructor(arg0) {
                                        sum = closure_6.get() + arg0.translationX;
                                        point = closure_10(sum, closure_7.get() + arg0.translationY);
                                        result = closure_0.set(point.x);
                                        result1 = closure_1.set(point.y);
                                        return;
                                      }
                                    }
                                    class B {
                                      constructor() {
                                        result = closure_6.set(closure_0.get());
                                        result1 = closure_7.set(closure_1.get());
                                        return;
                                      }
                                    }
                                    class R {
                                      constructor() {
                                        value = closure_0.get();
                                        tmp2 = closure_10(value, closure_1.get());
                                        obj = { transform: null };
                                        obj1 = { translateX: null };
                                        ({ x, y } = tmp2);
                                        obj3 = closure_0(closure_2[12]);
                                        obj1.translateX = obj3.withSpring(x, closure_0(closure_2[13]).springUnclamped);
                                        items = [, ];
                                        items[0] = obj1;
                                        obj6 = { translateY: null };
                                        obj5 = closure_0(closure_2[12]);
                                        obj6.translateY = obj5.withSpring(y, closure_0(closure_2[13]).springUnclamped);
                                        items[1] = obj6;
                                        obj.transform = items;
                                        return obj;
                                      }
                                    }
                                    tmp32[1] = tmp28;
                                    const tmp33 = sharedValue(tmp(tmp2[11]).GestureDetector, tmp32);
                                    cResult[31] = tmp24;
                                    cResult[32] = tmp28;
                                    cResult[33] = tmp33;
                                    tmp31 = tmp33;
                                  }
                                  class T {
                                    constructor(arg0) {
                                      sum = closure_6.get() + arg0.translationX;
                                      point = closure_10(sum, closure_7.get() + arg0.translationY);
                                      result = closure_0.set(point.x);
                                      result1 = closure_1.set(point.y);
                                      return;
                                    }
                                  }
                                  class B {
                                    constructor() {
                                      result = closure_6.set(closure_0.get());
                                      result1 = closure_7.set(closure_1.get());
                                      return;
                                    }
                                  }
                                  class R {
                                    constructor() {
                                      value = closure_0.get();
                                      tmp2 = closure_10(value, closure_1.get());
                                      obj = { transform: null };
                                      obj1 = { translateX: null };
                                      ({ x, y } = tmp2);
                                      obj3 = closure_0(closure_2[12]);
                                      obj1.translateX = obj3.withSpring(x, closure_0(closure_2[13]).springUnclamped);
                                      items = [, ];
                                      items[0] = obj1;
                                      obj6 = { translateY: null };
                                      obj5 = closure_0(closure_2[12]);
                                      obj6.translateY = obj5.withSpring(y, closure_0(closure_2[13]).springUnclamped);
                                      items[1] = obj6;
                                      obj.transform = items;
                                      return obj;
                                    }
                                  }
                                  tmp29[1] = children;
                                  const tmp30 = sharedValue(tmp7(tmp2[8]).View, tmp29);
                                  cResult[28] = children;
                                  cResult[29] = tmp27;
                                  cResult[30] = tmp30;
                                  tmp28 = tmp30;
                                }
                                let items = [tmp4.widgetContainer, animatedStyle];
                                cResult[25] = animatedStyle;
                                cResult[26] = tmp4.widgetContainer;
                                cResult[27] = items;
                                tmp27 = items;
                              }
                            }
                            class T {
                              constructor(arg0) {
                                sum = closure_6.get() + arg0.translationX;
                                point = closure_10(sum, closure_7.get() + arg0.translationY);
                                result = closure_0.set(point.x);
                                result1 = closure_1.set(point.y);
                                return;
                              }
                            }
                            class B {
                              constructor() {
                                result = closure_6.set(closure_0.get());
                                result1 = closure_7.set(closure_1.get());
                                return;
                              }
                            }
                            tmp22[2] = tmp17;
                            cResult[21] = tmp11;
                            cResult[22] = tmp14;
                            cResult[23] = tmp17;
                            cResult[24] = tmp22;
                          }
                        }
                        class T {
                          constructor(arg0) {
                            sum = closure_6.get() + arg0.translationX;
                            point = closure_10(sum, closure_7.get() + arg0.translationY);
                            result = closure_0.set(point.x);
                            result1 = closure_1.set(point.y);
                            return;
                          }
                        }
                        class B {
                          constructor() {
                            result = closure_6.set(closure_0.get());
                            result1 = closure_7.set(closure_1.get());
                            return;
                          }
                        }
                        tmp19[1] = onChangePosition;
                        tmp19[2] = x;
                        tmp19[3] = y;
                        tmp18.__closure = tmp19;
                        tmp18.__workletHash = 10003102447058;
                        tmp18.__initData = __initData4;
                        cResult[17] = onChangePosition;
                        cResult[18] = x;
                        cResult[19] = y;
                        cResult[20] = tmp18;
                        tmp17 = tmp18;
                      }
                    }
                  }
                }
                class T {
                  constructor(arg0) {
                    sum = closure_6.get() + arg0.translationX;
                    point = closure_10(sum, closure_7.get() + arg0.translationY);
                    result = closure_0.set(point.x);
                    result1 = closure_1.set(point.y);
                    return;
                  }
                }
                class B {
                  constructor() {
                    result = closure_6.set(closure_0.get());
                    result1 = closure_7.set(closure_1.get());
                    return;
                  }
                }
                tmp15[1] = sharedValue;
                tmp15[2] = sharedValue1;
                tmp15[3] = x;
                tmp15[4] = y;
                T.__closure = tmp15;
                T.__workletHash = 10056531764801;
                T.__initData = __initData3;
                cResult[11] = tmp10;
                cResult[12] = sharedValue;
                cResult[13] = sharedValue1;
                cResult[14] = x;
                cResult[15] = y;
                cResult[16] = T;
                tmp14 = T;
              }
            }
          }
          class B {
            constructor() {
              result = closure_6.set(closure_0.get());
              result1 = closure_7.set(closure_1.get());
              return;
            }
          }
          tmp12[0] = sharedValue;
          tmp12[1] = x;
          tmp12[2] = sharedValue1;
          tmp12[3] = y;
          B.__closure = tmp12;
          B.__workletHash = 11333606215108;
          B.__initData = __initData2;
          cResult[6] = sharedValue;
          cResult[7] = sharedValue1;
          cResult[8] = x;
          cResult[9] = y;
          cResult[10] = B;
          tmp11 = B;
        }
      }
    }
  }
  const fn = function o(arg0, arg1) {
    value = closure_9.get();
    ({ width, height } = value);
    const rect = closure_8.get();
    const point = { x: ReanimatedRexport.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: null };
    point.y = ReanimatedRexport.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num);
    return point;
  };
  tmp7 = importDefault;
  const tmpResult3 = require("ReanimatedRexport");
  fn.__closure = { windowDimensionsSharedValue: tmp9, insetsSharedValue: tmp8, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  fn.__workletHash = 8868377446840;
  fn.__initData = __initData;
  cResult[0] = contentHeight;
  cResult[1] = contentWidth;
  cResult[2] = num;
  cResult[3] = tmp8;
  cResult[4] = tmp9;
  cResult[5] = fn;
  tmp10 = fn;
  let obj2 = { windowDimensionsSharedValue: tmp9, insetsSharedValue: tmp8, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
}) : ((children) => {
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
  closure_9 = undefined;
  const tmp = closure_9();
  const sharedValue = require("ReanimatedRexport").useSharedValue(x.get());
  let obj = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(y.get());
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  closure_8 = tmp4;
  const tmp5 = require("useWindowDimensionsSharedValue")();
  closure_9 = tmp5;
  const fn = function x(arg0, arg1) {
    value = closure_9.get();
    ({ width, height } = value);
    const rect = closure_8.get();
    const point = { x: ReanimatedRexport.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: null };
    point.y = ReanimatedRexport.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num);
    return point;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  fn.__workletHash = 15133838620767;
  fn.__initData = __initData6;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  const getClampedPosition = contentHeight.useCallback(fn, items);
  let obj3 = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  const obj5 = { onActivate: null, onUpdate: null, onDeactivate: null };
  class D {
    constructor() {
      result = closure_6.set(closure_0.get());
      result1 = closure_7.set(closure_1.get());
      return;
    }
  }
  D.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  D.__workletHash = 3823207054753;
  D.__initData = __initData7;
  obj5.onActivate = D;
  const fn2 = function w(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = closure_0.set(point.x);
    const result1 = closure_1.set(point.y);
  };
  fn2.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn2.__workletHash = 16953011811242;
  fn2.__initData = __initData8;
  obj5.onUpdate = fn2;
  const fn3 = function y() {
    const point = { x: null, y: null };
    point.x = closure_0.get();
    point.y = closure_1.get();
    ReanimatedRexport.runOnJS(onChangePosition)(point);
  };
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  fn3.__closure = point;
  fn3.__workletHash = 14613432779967;
  fn3.__initData = __initData9;
  obj5.onDeactivate = fn3;
  const panGesture = require("LegacyBaseButton").usePanGesture(obj5);
  let obj4 = require("LegacyBaseButton");
  class W {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_10(value, closure_1.get());
      obj = { transform: null };
      obj1 = { translateX: null };
      ({ x, y } = tmp2);
      obj3 = closure_0(closure_2[12]);
      obj1.translateX = obj3.withSpring(x, closure_0(closure_2[13]).springUnclamped);
      items = [, ];
      items[0] = obj1;
      obj6 = { translateY: null };
      obj5 = closure_0(closure_2[12]);
      obj6.translateY = obj5.withSpring(y, closure_0(closure_2[13]).springUnclamped);
      items[1] = obj6;
      obj.transform = items;
      return obj;
    }
  }
  const point1 = { getClampedPosition, x, y, withSpring: require("spring").withSpring, springUnclamped: require("springPresets").springUnclamped };
  W.__closure = point1;
  W.__workletHash = 6153276059519;
  W.__initData = __initData10;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(W);
  const obj6 = { gesture: panGesture, children: null };
  const obj8 = { style: null, children: children.children };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj8.style = items1;
  obj6.children = sharedValue(require("ReanimatedRexport").View, obj8);
  return sharedValue(require("LegacyBaseButton").GestureDetector, obj6);
});
ReactCompilerGating = fn(558);
let closure_21 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return require("DevToolsNavigator").navigateToDevTools();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = timestampProducer(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.widget) {
    const obj2 = { style: tmp4.widget, accessibilityRole: "button", onPress: first, activeOpacity: 0.5, children: tmp6 };
    const tmp11 = timestampProducer(Pressables.PressableOpacity, obj2);
    cResult[2] = tmp4.widget;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
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
}));
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(11);
  const sharedValue = ReanimatedRexport.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
  const sharedValue1 = ReanimatedRexport.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === sharedValue1) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(devWidgetPosition) {
        return require("DevToolsActionCreators").updateDevToolsSettings({ devWidgetPosition });
      };
      const tmp12 = timestampProducer(closure_21, {});
      cResult[3] = fn;
      cResult[4] = tmp12;
      let tmp9 = tmp12;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    if (cResult[5] === sharedValue) {
      if (cResult[6] === sharedValue1) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp13) {
          let tmp19 = cResult[10];
        }
        return tmp19;
      }
      const obj4 = { children: null };
      const items = [tmp5, tmp13];
      obj4.children = items;
      const tmp22 = closure_1_8(React5, obj4);
      cResult[8] = tmp5;
      cResult[9] = tmp13;
      cResult[10] = tmp22;
      tmp19 = tmp22;
    }
    const point = { x: sharedValue, y: sharedValue1, contentWidth: DEV_WIDGET_SIZE, contentHeight: DEV_WIDGET_SIZE, dragBoundsPadding: nativeDefault.space.PX_4, onChangePosition: tmp8, children: tmp9 };
    const tmp18 = timestampProducer(closure_20, point);
    cResult[5] = sharedValue;
    cResult[6] = sharedValue1;
    cResult[7] = tmp18;
    tmp13 = tmp18;
  }
  const tmp6 = timestampProducer(VEVOODefault, { x: sharedValue, y: sharedValue1 });
  cResult[0] = sharedValue;
  cResult[1] = sharedValue1;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (() => {
  const sharedValue = ReanimatedRexport.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
  const sharedValue1 = ReanimatedRexport.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
  const obj3 = { children: null };
  const items = [timestampProducer(VEVOODefault, { x: sharedValue, y: sharedValue1 }), ];
  const point = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: nativeDefault.space.PX_4,
    onChangePosition(devWidgetPosition) {
      return require("DevToolsActionCreators").updateDevToolsSettings({ devWidgetPosition });
    },
    children: timestampProducer(closure_21, {})
  };
  items[1] = timestampProducer(closure_20, point);
  obj3.children = items;
  return closure_1_8(React5, obj3);
});