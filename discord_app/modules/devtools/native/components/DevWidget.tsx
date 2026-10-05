// discord_app/modules/devtools/native/components/DevWidget.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import StaffBadgeIcon from "../../../../design/components/Icon/native/redesign/generated/StaffBadgeIcon.tsx";
import VEVOODefault from "../../../visual_effect_view/native/overrides/VEVOO.tsx";
import react from "../../../../../_runtime/00019_react.js";
import DevToolsSettingsStore from "../../DevToolsSettingsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
const DEV_WIDGET_SIZE = Constants.DEV_WIDGET_SIZE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { widgetContainer: { position: "absolute" }, widget: size };
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  justifyContent: "center",
  alignItems: "center",
  height: DEV_WIDGET_SIZE,
  width: DEV_WIDGET_SIZE,
  borderRadius: nativeDefault.radii.xl,
};
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
let closure_9 = createStyles(obj);
let __initData = {
  code: "function DevWidgetTsx1(x_0,y_0){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x_0,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y_0,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}",
};
const __initData2 = {
  code: "function DevWidgetTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}",
};
const __initData3 = {
  code: "function DevWidgetTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}",
};
const __initData4 = {
  code: "function DevWidgetTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}",
};
const __initData5 = {
  code: "function DevWidgetTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}",
};
const __initData6 = {
  code: "function DevWidgetTsx6(x_0,y_0){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x_0,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y_0,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}",
};
const __initData7 = {
  code: "function DevWidgetTsx7(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}",
};
const __initData8 = {
  code: "function DevWidgetTsx8(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}",
};
const __initData9 = {
  code: "function DevWidgetTsx9(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}",
};
const __initData10 = {
  code: "function DevWidgetTsx10(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_1;
      let closure_10;
      let contentWidth;
      let dragBoundsPadding;
      let onChangePosition;
      const tmp2 = contentWidth;
      let obj = require("react");
      const cResult = obj.c(34);
      const x = arg0.x;
      _require = x;
      let y = arg0.y;
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
      const tmpResult = require("ReanimatedRexport");
      const sharedValue = tmpResult.useSharedValue(x.get());
      const tmpResult3 = require("ReanimatedRexport");
      const sharedValue1 = tmpResult3.useSharedValue(y.get());
      const tmp8 = require("useSafeAreaInsetsSharedValue")();
      let closure_8 = tmp8;
      const tmp9 = require("useWindowDimensionsSharedValue")();
      closure_9 = tmp9;
      const tmp7 = importDefault;
      if (cResult[0] === contentHeight) {
        if (cResult[1] === contentWidth) {
          if (cResult[2] === num) {
            if (cResult[3] === tmp8) {
              let tmp10;
              if (cResult[4] === tmp9) {
                tmp10 = cResult[5];
              }
              __initData = tmp10;
              if (cResult[6] === sharedValue) {
                if (cResult[7] === sharedValue1) {
                  if (cResult[8] === x) {
                    let tmp11;
                    if (cResult[9] === y) {
                      tmp11 = cResult[10];
                    }
                    if (cResult[11] === tmp10) {
                      if (cResult[12] === sharedValue) {
                        if (cResult[13] === sharedValue1) {
                          if (cResult[14] === x) {
                            let tmp14;
                            if (cResult[15] === y) {
                              tmp14 = cResult[16];
                            }
                            if (cResult[17] === onChangePosition) {
                              if (cResult[18] === x) {
                                let tmp17;
                                if (cResult[19] === y) {
                                  tmp17 = cResult[20];
                                }
                                if (cResult[21] === tmp11) {
                                  if (cResult[22] === tmp14) {
                                    require("LegacyBaseButton");
                                    class T {
                                      constructor(translationX) {
                                        const sum = sharedValue.get() + translationX.translationX;
                                        const point = closure_10(sum, sharedValue1.get() + translationX.translationY);
                                        const y = point.y;
                                        const result = closure_0.set(point.x);
                                        const result1 = closure_1.set(y);
                                      }
                                    }
                                    class B {
                                      constructor() {
                                        const result = sharedValue.set(closure_0.get());
                                        const result1 = sharedValue1.set(closure_1.get());
                                      }
                                    }
                                    class R {
                                      constructor() {
                                        let items;
                                        let obj3;
                                        let obj5;
                                        let x;
                                        let y;
                                        const value = closure_0.get();
                                        const obj = { transform: items };
                                        const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
                                        ({ x, y } = closure_10(value, closure_1.get()));
                                        closure_10(value, closure_1.get());
                                        items = [obj2];
                                        obj3 = spring;
                                        const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
                                        items[1] = obj4;
                                        obj5 = spring;
                                        return obj;
                                      }
                                    }
                                    let point = {
                                      getClampedPosition: tmp10,
                                      x,
                                      y,
                                      withSpring: require("spring").withSpring,
                                      springUnclamped: require("springPresets").springUnclamped,
                                    };
                                    const useAnimatedStyle = tmp25.useAnimatedStyle;
                                    R.__closure = point;
                                    R.__workletHash = 6251354551691;
                                    R.__initData = __initData5;
                                    const animatedStyle = useAnimatedStyle(R);
                                    if (cResult[25] === animatedStyle) {
                                      let tmp28;
                                      if (cResult[26] === tmp4.widgetContainer) {
                                        tmp28 = cResult[27];
                                      }
                                      if (cResult[28] === children) {
                                        let tmp29;
                                        if (cResult[29] === tmp28) {
                                          tmp29 = cResult[30];
                                        }
                                        if (cResult[31] === tmp24) {
                                          let tmp32;
                                          if (cResult[32] === tmp29) {
                                            tmp32 = cResult[33];
                                          }
                                          return tmp32;
                                        }
                                        class T {
                                          constructor(translationX) {
                                            const sum = sharedValue.get() + translationX.translationX;
                                            const point = closure_10(
                                              sum,
                                              sharedValue1.get() + translationX.translationY,
                                            );
                                            const y = point.y;
                                            const result = closure_0.set(point.x);
                                            const result1 = closure_1.set(y);
                                          }
                                        }
                                        class B {
                                          constructor() {
                                            const result = sharedValue.set(closure_0.get());
                                            const result1 = sharedValue1.set(closure_1.get());
                                          }
                                        }
                                        class R {
                                          constructor() {
                                            let items;
                                            let obj3;
                                            let obj5;
                                            let x;
                                            let y;
                                            const value = closure_0.get();
                                            const obj = { transform: items };
                                            const obj2 = {
                                              translateX: obj3.withSpring(x, springPresets.springUnclamped),
                                            };
                                            ({ x, y } = closure_10(value, closure_1.get()));
                                            closure_10(value, closure_1.get());
                                            items = [obj2];
                                            obj3 = spring;
                                            const obj4 = {
                                              translateY: obj5.withSpring(y, springPresets.springUnclamped),
                                            };
                                            items[1] = obj4;
                                            obj5 = spring;
                                            return obj;
                                          }
                                        }
                                        tmp33[1] = tmp29;
                                        const tmp34 = sharedValue(require("LegacyBaseButton").GestureDetector, tmp33);
                                        cResult[31] = tmp24;
                                        cResult[32] = tmp29;
                                        cResult[33] = tmp34;
                                        tmp32 = tmp34;
                                      }
                                      class T {
                                        constructor(translationX) {
                                          const sum = sharedValue.get() + translationX.translationX;
                                          const point = closure_10(sum, sharedValue1.get() + translationX.translationY);
                                          const y = point.y;
                                          const result = closure_0.set(point.x);
                                          const result1 = closure_1.set(y);
                                        }
                                      }
                                      class B {
                                        constructor() {
                                          const result = sharedValue.set(closure_0.get());
                                          const result1 = sharedValue1.set(closure_1.get());
                                        }
                                      }
                                      class R {
                                        constructor() {
                                          let items;
                                          let obj3;
                                          let obj5;
                                          let x;
                                          let y;
                                          const value = closure_0.get();
                                          const obj = { transform: items };
                                          const obj2 = {
                                            translateX: obj3.withSpring(x, springPresets.springUnclamped),
                                          };
                                          ({ x, y } = closure_10(value, closure_1.get()));
                                          closure_10(value, closure_1.get());
                                          items = [obj2];
                                          obj3 = spring;
                                          const obj4 = {
                                            translateY: obj5.withSpring(y, springPresets.springUnclamped),
                                          };
                                          items[1] = obj4;
                                          obj5 = spring;
                                          return obj;
                                        }
                                      }
                                      tmp30[1] = children;
                                      const tmp31 = sharedValue(tmp7(tmp2[8]).View, tmp30);
                                      cResult[28] = children;
                                      cResult[29] = tmp28;
                                      cResult[30] = tmp31;
                                      tmp29 = tmp31;
                                    }
                                    let items = [tmp4.widgetContainer, animatedStyle];
                                    cResult[25] = animatedStyle;
                                    cResult[26] = tmp4.widgetContainer;
                                    cResult[27] = items;
                                    tmp28 = items;
                                  }
                                }
                                class T {
                                  constructor(translationX) {
                                    const sum = sharedValue.get() + translationX.translationX;
                                    const point = closure_10(sum, sharedValue1.get() + translationX.translationY);
                                    const y = point.y;
                                    const result = closure_0.set(point.x);
                                    const result1 = closure_1.set(y);
                                  }
                                }
                                class B {
                                  constructor() {
                                    const result = sharedValue.set(closure_0.get());
                                    const result1 = sharedValue1.set(closure_1.get());
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
                              constructor(translationX) {
                                const sum = sharedValue.get() + translationX.translationX;
                                const point = closure_10(sum, sharedValue1.get() + translationX.translationY);
                                const y = point.y;
                                const result = closure_0.set(point.x);
                                const result1 = closure_1.set(y);
                              }
                            }
                            class B {
                              constructor() {
                                const result = sharedValue.set(closure_0.get());
                                const result1 = sharedValue1.set(closure_1.get());
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
                      constructor(translationX) {
                        const sum = sharedValue.get() + translationX.translationX;
                        const point = closure_10(sum, sharedValue1.get() + translationX.translationY);
                        const y = point.y;
                        const result = closure_0.set(point.x);
                        const result1 = closure_1.set(y);
                      }
                    }
                    class B {
                      constructor() {
                        const result = sharedValue.set(closure_0.get());
                        const result1 = sharedValue1.set(closure_1.get());
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
                  const result = sharedValue.set(closure_0.get());
                  const result1 = sharedValue1.set(closure_1.get());
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
        let height;
        let obj2;
        let obj3;
        let width;
        const value = closure_9.get();
        ({ width, height } = value);
        const rect = closure_8.get();
        const point = {
          x: obj2.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num),
          y: obj3.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num),
        };
        obj2 = ReanimatedRexport;
        obj3 = ReanimatedRexport;
        return point;
      };
      let obj2 = {
        windowDimensionsSharedValue: tmp9,
        insetsSharedValue: tmp8,
        clamp: tmp(tmp2[8]).clamp,
        dragBoundsPadding: num,
        contentWidth,
        contentHeight,
      };
      fn.__closure = obj2;
      fn.__workletHash = 8868377446840;
      fn.__initData = __initData;
      cResult[0] = contentHeight;
      cResult[1] = contentWidth;
      cResult[2] = num;
      cResult[3] = tmp8;
      cResult[4] = tmp9;
      cResult[5] = fn;
      tmp10 = fn;
    }
  : (arg0) => {
      let closure_0;
      let closure_1;
      let fn2;
      let fn3;
      let items1;
      let obj8;
      const x = arg0.x;
      _require = x;
      let y = arg0.y;
      importDefault = y;
      const contentWidth = arg0.contentWidth;
      const contentHeight = arg0.contentHeight;
      let num = arg0.dragBoundsPadding;
      if (num === undefined) {
        num = 0;
      }
      const onChangePosition = arg0.onChangePosition;
      closure_9 = undefined;
      const children = arg0.children;
      const tmp = closure_9();
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(x.get());
      let obj2 = require("ReanimatedRexport");
      const sharedValue1 = obj2.useSharedValue(y.get());
      const tmp4 = require("useSafeAreaInsetsSharedValue")();
      let closure_8 = tmp4;
      const tmp5 = require("useWindowDimensionsSharedValue")();
      closure_9 = tmp5;
      const fn = function x(arg0, arg1) {
        let height;
        let obj2;
        let obj3;
        let width;
        const value = closure_9.get();
        ({ width, height } = value);
        const rect = closure_8.get();
        const point = {
          x: obj2.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num),
          y: obj3.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num),
        };
        obj2 = ReanimatedRexport;
        obj3 = ReanimatedRexport;
        return point;
      };
      let obj3 = {
        windowDimensionsSharedValue: tmp5,
        insetsSharedValue: tmp4,
        clamp: require("ReanimatedRexport").clamp,
        dragBoundsPadding: num,
        contentWidth,
        contentHeight,
      };
      fn.__closure = obj3;
      fn.__workletHash = 15133838620767;
      fn.__initData = __initData6;
      let items = [contentHeight, contentWidth, num, tmp4, tmp5];
      const getClampedPosition = contentHeight.useCallback(fn, items);
      let obj4 = require("LegacyBaseButton");
      let obj5 = { onActivate: D, onUpdate: fn2, onDeactivate: fn3 };
      class D {
        constructor() {
          const result = sharedValue.set(closure_0.get());
          const result1 = sharedValue1.set(closure_1.get());
        }
      }
      D.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
      D.__workletHash = 3823207054753;
      D.__initData = __initData7;
      fn2 = function w(translationX) {
        const sum = sharedValue.get() + translationX.translationX;
        const point = callback(sum, sharedValue1.get() + translationX.translationY);
        const y = point.y;
        const result = closure_0.set(point.x);
        const result1 = closure_1.set(y);
      };
      fn2.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
      fn2.__workletHash = 16953011811242;
      fn2.__initData = __initData8;
      fn3 = function y() {
        const point = { x: closure_0.get(), y: closure_1.get() };
        const obj = ReanimatedRexport;
        const runOnJSResult = obj.runOnJS(onChangePosition);
        runOnJSResult(point);
      };
      let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
      fn3.__closure = point;
      fn3.__workletHash = 14613432779967;
      fn3.__initData = __initData9;
      const panGesture = obj4.usePanGesture(obj5);
      const obj7 = require("ReanimatedRexport");
      class W {
        constructor() {
          let items;
          let obj3;
          let obj5;
          let x;
          let y;
          const value = closure_0.get();
          const obj = { transform: items };
          const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
          ({ x, y } = callback(value, closure_1.get()));
          callback(value, closure_1.get());
          items = [obj2];
          obj3 = spring;
          const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
          items[1] = obj4;
          obj5 = spring;
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
      W.__workletHash = 6153276059519;
      W.__initData = __initData10;
      const animatedStyle = obj7.useAnimatedStyle(W);
      const obj6 = { gesture: panGesture, children: sharedValue(require("ReanimatedRexport").View, obj8) };
      const GestureDetector = require("LegacyBaseButton").GestureDetector;
      obj8 = { style: items1, children };
      items1 = [tmp.widgetContainer, animatedStyle];
      return sharedValue(GestureDetector, obj6);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let tmp6;
        let tmp9;
        let obj = react2;
        const cResult = obj.c(4);
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t() {
            const obj = require("DevToolsNavigator");
            return obj.navigateToDevTools();
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = metroRequire(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" });
          cResult[1] = tmp8;
          tmp6 = tmp8;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] !== tmp4.widget) {
          const obj2 = {
            style: tmp4.widget,
            accessibilityRole: "button",
            onPress: first,
            activeOpacity: 0.5,
            children: tmp6,
          };
          const tmp11 = metroRequire(Pressables.PressableOpacity, obj2);
          cResult[2] = tmp4.widget;
          cResult[3] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[3];
        }
        return tmp9;
      }
    : () => {
        let obj = {
          style: closure_9().widget,
          accessibilityRole: "button",
          onPress() {
            const obj = require("DevToolsNavigator");
            return obj.navigateToDevTools();
          },
          activeOpacity: 0.5,
          children: metroRequire(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" }),
        };
        closure_9();
        const PressableOpacity = Pressables.PressableOpacity;
        return metroRequire(PressableOpacity, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let obj = react2;
      const cResult = obj.c(11);
      let obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
      const obj3 = ReanimatedRexport;
      const sharedValue1 = obj3.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
      if (cResult[0] === sharedValue) {
        let tmp5;
        let tmp9;
        let tmp8;
        if (cResult[1] === sharedValue1) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(devWidgetPosition) {
            const obj = require("DevToolsActionCreators");
            const obj2 = { devWidgetPosition };
            return obj.updateDevToolsSettings(obj2);
          };
          const tmp12 = metroRequire(closure_21, {});
          cResult[3] = fn;
          cResult[4] = tmp12;
          tmp9 = tmp12;
          tmp8 = fn;
        } else {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        if (cResult[5] === sharedValue) {
          let tmp13;
          if (cResult[6] === sharedValue1) {
            tmp13 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            let tmp19;
            if (cResult[9] === tmp13) {
              tmp19 = cResult[10];
            }
            return tmp19;
          }
          const obj4 = { children: items };
          items = [tmp5, tmp13];
          const tmp22 = metroImportAll(metroImportDefault, obj4);
          cResult[8] = tmp5;
          cResult[9] = tmp13;
          cResult[10] = tmp22;
          tmp19 = tmp22;
        }
        const point = {
          x: sharedValue,
          y: sharedValue1,
          contentWidth: DEV_WIDGET_SIZE,
          contentHeight: DEV_WIDGET_SIZE,
          dragBoundsPadding: nativeDefault.space.PX_4,
          onChangePosition: tmp8,
          children: tmp9,
        };
        const tmp18 = metroRequire(closure_20, point);
        cResult[5] = sharedValue;
        cResult[6] = sharedValue1;
        cResult[7] = tmp18;
        tmp13 = tmp18;
      }
      const tmp6 = metroRequire(VEVOODefault, { x: sharedValue, y: sharedValue1 });
      cResult[0] = sharedValue;
      cResult[1] = sharedValue1;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : () => {
      let items;
      let obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
      let obj2 = ReanimatedRexport;
      const sharedValue1 = obj2.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
      const obj3 = { children: items };
      items = [metroRequire(VEVOODefault, { x: sharedValue, y: sharedValue1 })];
      const point = {
        x: sharedValue,
        y: sharedValue1,
        contentWidth: DEV_WIDGET_SIZE,
        contentHeight: DEV_WIDGET_SIZE,
        dragBoundsPadding: nativeDefault.space.PX_4,
        onChangePosition(devWidgetPosition) {
          const obj = require("DevToolsActionCreators");
          const obj2 = { devWidgetPosition };
          return obj.updateDevToolsSettings(obj2);
        },
        children: metroRequire(closure_21, {}),
      };
      items[1] = metroRequire(closure_20, point);
      return metroImportAll(metroImportDefault, obj3);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default tmp6;
