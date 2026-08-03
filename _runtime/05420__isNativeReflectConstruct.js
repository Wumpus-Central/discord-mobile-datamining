// === Module 5420: _isNativeReflectConstruct ===

// Module 5420 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
let DrawerLayout = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ Animated: error, StyleSheet, View: metroImportAll, Keyboard: c9, StatusBar: c10, I18nManager: unpackModuleId } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const Idle = "Idle";
const Dragging = "Dragging";
const Settling = "Settling";
class DrawerLayout {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.accessibilityIsModalView = noop.createRef();
    tmp3Result.pointerEventsView = noop.createRef();
    tmp3Result.panGestureHandler = noop.createRef();
    tmp3Result.drawerShown = false;
    tmp3Result.updateAnimatedEvent = (drawerWidth, drawerTranslation) => {
      let add;
      let containerWidth;
      let dragX;
      let multiply;
      let touchX;
      drawerWidth = drawerWidth.drawerWidth;
      ({ dragX, touchX, containerWidth } = drawerTranslation);
      if ("left" !== drawerWidth.drawerPosition) {
        let value = new outer1_7.Value(-1);
        let multiplyResult = outer1_7.multiply(value, dragX);
        value = new outer1_7.Value(containerWidth);
        const value1 = new outer1_7.Value(-1);
        let addResult = outer1_7.add(value, outer1_7.multiply(value1, touchX));
        touchX.setValue(containerWidth);
      } else {
        touchX.setValue(0);
        addResult = touchX;
        multiplyResult = dragX;
      }
      let addResult2 = multiplyResult;
      if ("front" === drawerWidth.drawerType) {
        ({ add, multiply } = outer1_7);
        const value2 = new outer1_7.Value(-1);
        let obj = { inputRange: null, outputRange: null };
        const items = [drawerWidth - 1, drawerWidth, drawerWidth + 1];
        obj[0] = items;
        obj[1] = [0, 0, 1];
        addResult2 = outer1_7.add(multiplyResult, add(addResult, multiply(value2, multiplyResult)).interpolate(obj));
        const addResult1 = add(addResult, multiply(value2, multiplyResult));
      }
      const items1 = [0, drawerWidth];
      tmp3Result.openValue = outer1_7.add(addResult2, drawerTranslation.drawerTranslation).interpolate({ inputRange: items1, outputRange: [0, 1], extrapolate: "clamp" });
      obj = { useNativeDriver: drawerWidth.useNativeAnimations };
      if (tmp3Result.props.onDrawerSlide) {
        obj.listener = (nativeEvent) => {
          const props = closure_0.props;
          const onDrawerSlide = props.onDrawerSlide;
          if (onDrawerSlide != null) {
            onDrawerSlide(Math.floor(Math.abs(nativeEvent.nativeEvent.translationX)) / closure_0.state.containerWidth);
          }
        };
      }
      const items2 = [{ nativeEvent: { translationX: dragX, x: touchX } }];
      tmp3Result.onGestureEvent = outer1_7.event(items2, obj);
    };
    tmp3Result.handleContainerLayout = (containerWidth) => {
      tmp3Result.setState({ containerWidth: containerWidth.nativeEvent.layout.width });
    };
    tmp3Result.emitStateChanged = (arg0, arg1) => {
      const props = tmp3Result.props;
      const onDrawerStateChanged = props.onDrawerStateChanged;
      if (onDrawerStateChanged != null) {
        onDrawerStateChanged(arg0, arg1);
      }
    };
    tmp3Result.openingHandlerStateChange = (nativeEvent) => {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.oldState === tmp3Result(outer1_2[8]).State.ACTIVE) {
        let obj = { nativeEvent: null };
        obj[0] = nativeEvent;
        tmp3Result.handleRelease(obj);
      } else if (nativeEvent.state === tmp3Result(outer1_2[8]).State.ACTIVE) {
        tmp3Result.emitStateChanged(outer1_16, false);
        obj = { drawerState: null };
        obj[0] = outer1_16;
        tmp3Result.setState(obj);
        if ("on-drag" === tmp3Result.props.keyboardDismissMode) {
          outer1_9.dismiss();
        }
        if (tmp3Result.props.hideStatusBar) {
          let str = tmp9.props.statusBarAnimation;
          if (!str) {
            str = "slide";
          }
          outer1_10.setHidden(true, str);
        }
      }
    };
    tmp3Result.onTapHandlerStateChange = (nativeEvent) => {
      let drawerShown = tmp3Result.drawerShown;
      if (drawerShown) {
        drawerShown = nativeEvent.nativeEvent.oldState === tmp3Result(outer1_2[8]).State.ACTIVE;
      }
      if (drawerShown) {
        drawerShown = "locked-open" !== obj.props.drawerLockMode;
      }
      if (drawerShown) {
        obj.closeDrawer();
      }
    };
    tmp3Result.handleRelease = (nativeEvent) => {
      let translationX;
      let velocityX;
      let x;
      const props = tmp3Result.props;
      const drawerWidth = props.drawerWidth;
      ({ translationX, velocityX, x } = nativeEvent.nativeEvent);
      let diff = x;
      let tmp3 = velocityX;
      let tmp4 = translationX;
      if ("left" !== props.drawerPosition) {
        tmp4 = -translationX;
        diff = tmp - x;
        tmp3 = -velocityX;
      }
      const diff1 = diff - tmp4;
      let num = 0;
      if ("front" === props.drawerType) {
        let num2 = 0;
        if (diff1 > drawerWidth) {
          num2 = diff1 - drawerWidth;
        }
        num = num2;
      }
      let num3 = 0;
      const sum = tmp4 + num;
      if (tmp3Result.drawerShown) {
        num3 = drawerWidth;
      }
      const sum1 = sum + num3;
      if (sum1 + 0.05 * tmp3 > drawerWidth / 2) {
        obj.animateDrawer(sum1, drawerWidth, tmp3);
      } else {
        obj.animateDrawer(sum1, 0, tmp3);
      }
    };
    tmp3Result.updateShowing = (drawerShown) => {
      tmp3Result.drawerShown = drawerShown;
      const current = tmp3Result.accessibilityIsModalView.current;
      if (current != null) {
        let obj = { accessibilityViewIsModal: null };
        obj[0] = drawerShown;
        current.setNativeProps(obj);
      }
      const current2 = tmp.pointerEventsView.current;
      if (current2 != null) {
        let str = "none";
        if (drawerShown) {
          str = "auto";
        }
        obj = { pointerEvents: null };
        obj[0] = str;
        current2.setNativeProps(obj);
      }
      const props = tmp.props;
      const edgeWidth = props.edgeWidth;
      let num = -1;
      if ("left" === props.drawerPosition) {
        num = 1;
      }
      let num2 = 1;
      if (tmp3Result.drawerShown) {
        num2 = -1;
      }
      if ("left" === props.drawerPosition) {
        let tmp6;
        if (!drawerShown) {
          tmp6 = edgeWidth;
        }
        obj = { left: 0, width: null };
        obj[1] = tmp6;
        let obj1 = obj;
      } else {
        let tmp5;
        if (!drawerShown) {
          tmp5 = edgeWidth;
        }
        obj1 = { right: 0, width: null };
        obj1[1] = tmp5;
      }
      const current3 = tmp.panGestureHandler.current;
      if (current3 != null) {
        const obj2 = { hitSlop: null, activeOffsetX: null };
        obj2[0] = obj1;
        obj2[1] = num * num2 * props.minSwipeDistance;
        current3.setNativeProps(obj2);
      }
    };
    tmp3Result.animateDrawer = (arg0, toValue, velocity) => {
      let obj = tmp3Result;
      const dragX = tmp3Result.state.dragX;
      dragX.setValue(0);
      const touchX = tmp3Result.state.touchX;
      let num = 0;
      if ("left" !== tmp3Result.props.drawerPosition) {
        num = obj.state.containerWidth;
      }
      let sum = arg0;
      touchX.setValue(num);
      if (null != arg0) {
        if (!obj.props.useNativeAnimations) {
          const drawerTranslation = obj.state.drawerTranslation;
          drawerTranslation.setValue(sum);
        } else {
          if (sum >= toValue) {
            let bound = sum;
            if (tmp4) {
              const _Math = Math;
              bound = Math.max(sum + velocity / 60, toValue);
            }
            tmp4 = sum > toValue && velocity < 0;
          }
          const _Math2 = Math;
          sum = sum + velocity / 60;
          bound = Math.min(sum, toValue);
        }
      }
      obj.updateShowing(0 !== toValue);
      obj.emitStateChanged(outer1_17, 0 !== toValue);
      obj = { drawerState: outer1_17 };
      obj.setState(obj);
      if (obj.props.hideStatusBar) {
        let str = obj.props.statusBarAnimation;
        if (!str) {
          str = "slide";
        }
        outer1_10.setHidden(tmp10, str);
      }
      obj = { velocity, bounciness: 0, toValue, useNativeDriver: obj.props.useNativeAnimations, speed: null };
      obj[4] = arg3;
      outer1_7.spring(obj.state.drawerTranslation, obj).start((finished) => {
        if (finished.finished) {
          let obj = tmp10;
          tmp10.emitStateChanged(outer2_15, tmp10);
          obj = { drawerOpened: null };
          obj[0] = tmp10;
          tmp10.setState(obj);
          if (tmp10.state.drawerState !== outer2_16) {
            obj = { drawerState: null };
            obj[0] = tmp;
            obj.setState(obj);
          }
          const props = obj.props;
          if (tmp2) {
            const onDrawerOpen = props.onDrawerOpen;
            if (onDrawerOpen != null) {
              onDrawerOpen();
            }
          } else {
            const onDrawerClose = props.onDrawerClose;
            if (onDrawerClose != null) {
              onDrawerClose();
            }
          }
          tmp = outer2_15;
          tmp2 = tmp10;
        }
      });
    };
    tmp3Result.openDrawer = () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let num = 0;
      if (obj.velocity) {
        num = obj.velocity;
      }
      tmp3Result.animateDrawer(undefined, tmp3Result.props.drawerWidth, num, obj.speed);
      tmp3Result.forceUpdate();
    };
    tmp3Result.closeDrawer = () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let num = 0;
      if (obj.velocity) {
        num = obj.velocity;
      }
      tmp3Result.animateDrawer(undefined, 0, num, obj.speed);
      tmp3Result.forceUpdate();
    };
    tmp3Result.renderOverlay = () => {
      outer1_1(outer1_2[9])(tmp3Result.openValue, "should be set");
      if (tmp3Result.state.drawerState !== outer1_15) {
        let num = tmp2.openValue;
      } else {
        num = 0;
        if (tmp2.state.drawerOpened) {
          num = 1;
        }
      }
      let obj = { opacity: num, backgroundColor: tmp2.props.overlayColor };
      obj = { onHandlerStateChange: tmp2.onTapHandlerStateChange, children: null };
      let str = "none";
      if (tmp3Result.drawerShown) {
        str = "auto";
      }
      obj = { pointerEvents: str, ref: tmp2.pointerEventsView, style: items };
      items = [outer1_18.overlay, obj];
      obj[1] = outer1_12(outer1_7.View, obj);
      return outer1_12(tmp3Result(outer1_2[10]).TapGestureHandler, obj);
    };
    tmp3Result.renderDrawer = () => {
      let View;
      let View2;
      let contentContainerStyle;
      let drawerBackgroundColor;
      let drawerContainerStyle;
      let drawerType;
      let drawerWidth;
      let obj = tmp3Result;
      const props = tmp3Result.props;
      ({ drawerWidth, drawerType } = props);
      let tmp2 = tmp;
      ({ drawerBackgroundColor, drawerContainerStyle, contentContainerStyle } = props);
      if (!outer1_11.isRTL) {
        tmp2 = !tmp;
      }
      const openValue = obj.openValue;
      outer1_1(outer1_2[9])(openValue, "should be set");
      if ("front" === drawerType) {
        if ("back" === drawerType) {
          obj = { transform: null, flexDirection: null };
          obj = { translateX: null };
          obj[0] = 0;
          const items = [obj];
          obj[0] = items;
          let str2 = "row";
          if (tmp2) {
            str2 = "row-reverse";
          }
          obj[1] = str2;
          const obj1 = { style: null, onLayout: null, children: null };
          obj1[0] = outer1_18.main;
          obj1[1] = obj.handleContainerLayout;
          const obj2 = { style: null, importantForAccessibility: null, children: null };
          const items1 = ["front" === drawerType ? outer1_18.containerOnBack : outer1_18.containerInFront, undefined, contentContainerStyle];
          obj2[0] = items1;
          let str3 = "yes";
          ({ View, View: View2 } = outer1_7);
          if (obj.drawerShown) {
            str3 = "no-hide-descendants";
          }
          obj2[1] = str3;
          if (typeof obj.props.children === "error") {
            const props2 = obj.props;
            let children = props2.children(obj.openValue);
          } else {
            children = obj.props.children;
          }
          const items2 = [children, obj.renderOverlay()];
          obj2[2] = items2;
          const items3 = [outer1_13(View2, obj2), ];
          const obj3 = { pointerEvents: "box-none", ref: null, accessibilityViewIsModal: null, style: null, children: null };
          ({ accessibilityIsModalView: obj9[1], drawerShown: obj9[2] } = obj);
          const items4 = [outer1_18.drawerContainer, obj, drawerContainerStyle];
          obj3[3] = items4;
          const obj4 = { style: null, children: null };
          obj4[0] = { backgroundColor: drawerBackgroundColor, width: drawerWidth };
          const props3 = obj.props;
          obj4[1] = props3.renderNavigationView(obj.openValue);
          obj3[4] = outer1_12(outer1_8, obj4);
          items3[1] = outer1_12(outer1_7.View, obj3);
          obj1[2] = items3;
          return outer1_13(View, obj1);
        } else {
          let tmp6 = drawerWidth;
          if (tmp) {
            tmp6 = -drawerWidth;
          }
          if (obj.state.drawerState !== outer1_15) {
            const obj5 = { inputRange: null, outputRange: null, extrapolate: "clamp" };
            obj5[0] = [0, 1];
            const items5 = [tmp6, 0];
            obj5[1] = items5;
            let num3 = openValue.interpolate(obj5);
          } else {
            num3 = 0;
            if (!obj.state.drawerOpened) {
              num3 = tmp6;
            }
          }
        }
      } else {
        let obj6 = { inputRange: null, outputRange: null, extrapolate: "clamp" };
        obj6[0] = [0, 1];
        let items6 = [0];
        if (tmp) {
          items6[1] = drawerWidth;
          let tmp4 = items6;
        } else {
          items6[1] = -drawerWidth;
          tmp4 = items6;
        }
        items6 = { transform: null };
        const obj7 = { translateX: null };
        obj6[1] = tmp4;
        obj7[0] = openValue.interpolate(obj6);
        obj6 = [obj7];
        items6[0] = obj6;
      }
    };
    tmp3Result.setPanGestureRef = (current) => {
      tmp3Result.panGestureHandler.current = current;
      const props = tmp3Result.props;
      const onGestureRef = props.onGestureRef;
      if (onGestureRef != null) {
        onGestureRef(current);
      }
    };
    value = new Animated.Value(0);
    value1 = new Animated.Value(0);
    value2 = new Animated.Value(0);
    obj = { dragX: value, touchX: value1, drawerTranslation: value2, containerWidth: 0, drawerState: Idle, drawerOpened: false };
    tmp3Result.state = obj;
    updateAnimatedEventResult = tmp3Result.updateAnimatedEvent(global, tmp3Result.state);
    return tmp3Result;
  }
}
require("_inherits")(DrawerLayout, require("noop").Component);
let obj = {
  key: "shouldComponentUpdate",
  value: function shouldComponentUpdate(drawerPosition, containerWidth) {
    const self = this;
    let tmp = this.props.drawerPosition === drawerPosition.drawerPosition && self.props.drawerWidth === drawerPosition.drawerWidth && self.props.drawerType === drawerPosition.drawerType;
    if (tmp) {
      tmp = self.state.containerWidth === containerWidth.containerWidth;
    }
    if (!tmp) {
      self.updateAnimatedEvent(drawerPosition, containerWidth);
    }
    return true;
  }
};
let items = [
  obj,
  {
    key: "render",
    value: function render() {
      let drawerLockMode;
      let edgeWidth;
      const self = this;
      const props = this.props;
      ({ drawerLockMode, edgeWidth } = props);
      let num = -1;
      if ("left" === props.drawerPosition) {
        num = 1;
      }
      let num2 = 1;
      if (self.drawerShown) {
        num2 = -1;
      }
      if ("left" === props.drawerPosition) {
        let tmp3;
        if (!self.drawerShown) {
          tmp3 = edgeWidth;
        }
        let obj = { left: 0, width: null };
        obj[1] = tmp3;
      } else {
        let tmp2;
        if (!self.drawerShown) {
          tmp2 = edgeWidth;
        }
        obj = { right: 0, width: null };
        obj[1] = tmp2;
      }
      const result = num * num2;
      obj = { userSelect: self.props.userSelect, activeCursor: self.props.activeCursor, mouseButton: self.props.mouseButton, enableContextMenu: self.props.enableContextMenu, ref: self.setPanGestureRef, hitSlop: obj, activeOffsetX: result * props.minSwipeDistance, failOffsetY: [-15, 15], onGestureEvent: self.onGestureEvent, onHandlerStateChange: self.openingHandlerStateChange, enableTrackpadTwoFingerGesture: self.props.enableTrackpadTwoFingerGesture, enabled: null, children: null };
      let tmp6 = "locked-closed" !== drawerLockMode;
      if (tmp6) {
        tmp6 = "locked-open" !== drawerLockMode;
      }
      obj[11] = tmp6;
      obj[12] = self.renderDrawer();
      return closure_12(DrawerLayout(5369).PanGestureHandler, obj);
    }
  }
];
const importDefaultResultResult = importDefaultResult(DrawerLayout, items);
importDefaultResultResult.defaultProps = { drawerWidth: 200, drawerPosition: "left", useNativeAnimations: true, drawerType: "front", edgeWidth: 20, minSwipeDistance: 3, overlayColor: "rgba(0, 0, 0, 0.7)", drawerLockMode: "unlocked", enableTrackpadTwoFingerGesture: false };
importDefaultResultResult.positions = { Left: "left", Right: "right" };
obj = { drawerContainer: null, containerInFront: null, containerOnBack: null, main: null, overlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFill);
obj.zIndex = 1001;
obj.flexDirection = "row";
obj[0] = obj;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFill);
obj1.zIndex = 1002;
obj[1] = obj1;
const merged2 = Object.assign(StyleSheet.absoluteFill);
obj[2] = {};
obj[3] = { flex: 1, zIndex: 0, overflow: "hidden" };
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFill);
obj3.zIndex = 1000;
obj[4] = obj3;
const styles = StyleSheet.create(obj);

export default importDefaultResultResult;