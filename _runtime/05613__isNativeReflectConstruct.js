// _runtime/05613__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let c10;
let c9;
let closure_14;
let map1;
const Card = arg1;
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
let closure_3 = ["styleInterpolator", "interpolationIndex", "current", "gesture", "next", "layout", "insets", "overlay", "overlayEnabled", "shadowEnabled", "gestureEnabled", "gestureDirection", "pageOverflowEnabled", "headerDarkContent", "children", "containerStyle", "contentStyle"];
const metroImportAll = importAllResult;
({ Animated: c9, InteractionManager: c10, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let c16 = true;
class Card {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.isCurrentlyMounted = false;
    value = new Animated.Value(0);
    tmp3Result.isClosing = value;
    value1 = new Animated.Value(require("getInvertedMultiplier")(tmp3Result.props.gestureDirection));
    tmp3Result.inverted = value1;
    obj = { width: null, height: null };
    value2 = new Animated.Value(tmp3Result.props.layout.width);
    obj[0] = value2;
    value3 = new Animated.Value(tmp3Result.props.layout.height);
    obj[1] = value3;
    tmp3Result.layout = obj;
    value4 = new Animated.Value(0);
    tmp3Result.isSwiping = value4;
    tmp3Result.animate = (closing) => {
      let c1;
      let c2;
      let onTransition;
      let transitionSpec;
      closing = closing.closing;
      const velocity = closing.velocity;
      c1 = undefined;
      c2 = undefined;
      let obj = closing;
      const props = closing.props;
      ({ transitionSpec, onOpen: c1, onClose: c2, onTransition } = props);
      obj = {};
      const merged = Object.assign(closing.props);
      obj.closing = closing;
      const animateToValue = closing.getAnimateToValue(obj);
      closing.lastToValue = animateToValue;
      const isClosing = closing.isClosing;
      let num = 0;
      if (closing) {
        num = 1;
      }
      isClosing.setValue(num);
      const tmp4 = closing ? transitionSpec.close : transitionSpec.open;
      if ("spring" === tmp4.animation) {
        let timing = outer1_9.spring;
      } else {
        timing = outer1_9.timing;
      }
      const result = obj.setPointerEventsEnabled(!closing);
      const result1 = obj.handleStartInteraction();
      clearTimeout(obj.pendingGestureCallback);
      if (onTransition != null) {
        obj = { closing: null, gesture: null };
        obj[0] = closing;
        obj[1] = undefined !== velocity;
        onTransition(obj);
      }
      const obj1 = {};
      const merged1 = Object.assign(tmp4.config);
      obj1.velocity = velocity;
      obj1.toValue = animateToValue;
      obj1.useNativeDriver = outer1_16;
      obj1.isInteraction = false;
      timing(props.gesture, obj1).start((finished) => {
        closing.handleEndInteraction();
        clearTimeout(closing.pendingGestureCallback);
        if (finished.finished) {
          if (closing) {
            _undefined2();
          } else {
            _undefined();
          }
          if (obj.isCurrentlyMounted) {
            obj.forceUpdate();
          }
        }
      });
    };
    tmp3Result.getAnimateToValue = (closing) => {
      let num = 0;
      if (closing.closing) {
        num = callback(table[10])(tmp, tmp2);
      }
      return num;
    };
    tmp3Result.setPointerEventsEnabled = (arg0) => {
      let str = "none";
      if (arg0) {
        str = "box-none";
      }
      const current = _undefined.ref.current;
      if (current != null) {
        current.setPointerEvents(str);
      }
    };
    tmp3Result.handleStartInteraction = () => {
      if (undefined === _undefined.interactionHandle) {
        tmp.interactionHandle = outer1_10.createInteractionHandle();
      }
    };
    tmp3Result.handleEndInteraction = () => {
      if (undefined !== _undefined.interactionHandle) {
        const result = outer1_10.clearInteractionHandle(tmp.interactionHandle);
        tmp.interactionHandle = undefined;
      }
    };
    tmp3Result.handleGestureStateChange = (nativeEvent) => {
      let c0;
      let gestureDirection;
      let layout;
      let onGestureBegin;
      let onGestureCanceled;
      let onGestureEnd;
      let translationY;
      let velocityY;
      nativeEvent = nativeEvent.nativeEvent;
      let _undefined;
      let obj = _undefined;
      const props = _undefined.props;
      ({ layout, onClose: c0, onGestureBegin, onGestureCanceled, onGestureEnd, gestureDirection } = props);
      const state = nativeEvent.state;
      if (_undefined(outer1_2[11]).GestureState.ACTIVE === state) {
        const isSwiping2 = obj.isSwiping;
        isSwiping2.setValue(1);
        const result = obj.handleStartInteraction();
        if (onGestureBegin != null) {
          onGestureBegin();
        }
      } else if (tmp(tmp2[11]).GestureState.CANCELLED === state) {
        const isSwiping = obj.isSwiping;
        isSwiping.setValue(0);
        obj.handleEndInteraction();
        if ("vertical" !== gestureDirection) {
          if ("vertical-inverted" !== gestureDirection) {
            let velocityY2 = nativeEvent.velocityX;
          }
          obj = { closing: null, velocity: null };
          obj[0] = obj.props.closing;
          obj[1] = velocityY2;
          obj.animate(obj);
          if (onGestureCanceled != null) {
            onGestureCanceled();
          }
        }
        velocityY2 = nativeEvent.velocityY;
      } else if (tmp(tmp2[11]).GestureState.END === state) {
        const isSwiping3 = obj.isSwiping;
        isSwiping3.setValue(0);
        if ("vertical" !== gestureDirection) {
          if ("vertical-inverted" !== gestureDirection) {
            let height = layout.width;
            ({ translationX: translationY, velocityX: velocityY } = nativeEvent);
          }
          const sum = translationY + velocityY * props.gestureVelocityImpact;
          if (sum * outer1_1(tmp2[9])(gestureDirection) > height / 2) {
            let closing = 0 !== velocityY || 0 !== translationY;
            const tmp5 = 0 !== velocityY || 0 !== translationY;
          } else {
            closing = obj.props.closing;
          }
          obj = { closing: null, velocity: null };
          obj[0] = closing;
          obj[1] = velocityY;
          obj.animate(obj);
          if (closing) {
            const _setTimeout = setTimeout;
            obj.pendingGestureCallback = setTimeout(() => {
              _undefined();
              _undefined.forceUpdate();
            }, 32);
          }
          if (onGestureEnd != null) {
            onGestureEnd();
          }
        }
        height = layout.height;
        ({ translationY, velocityY } = nativeEvent);
      }
    };
    tmp3Result.getInterpolatedStyle = require("memoize")((arg0, arg1) => arg0(arg1));
    tmp3Result.getCardAnimation = require("memoize")((index, progress, arg2, screen, top, right, bottom, left) => {
      obj = { index, current: obj, next: null, closing: null, swiping: null, inverted: null, layouts: null, insets: null };
      obj = { progress };
      let tmp = arg2;
      if (arg2) {
        obj = { progress: null };
        obj[0] = arg2;
        tmp = obj;
      }
      obj[2] = tmp;
      ({ isClosing: obj[3], isSwiping: obj[4], inverted: obj[5] } = c0);
      obj[6] = { screen };
      obj[7] = { top, right, bottom, left };
      return obj;
    });
    tmp3Result.ref = closure_8.createRef();
    return tmp3Result;
  }
}
require("_inherits")(Card, importAllResult.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate({ closing: this.props.closing });
      this.isCurrentlyMounted = true;
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(layout) {
      let gestureDirection;
      let height;
      let width;
      const self = this;
      const props = this.props;
      ({ layout, gestureDirection } = props);
      ({ width, height } = layout);
      if (width !== layout.layout.width) {
        const width2 = self.layout.width;
        width2.setValue(width);
      }
      if (height !== layout.layout.height) {
        const height2 = self.layout.height;
        height2.setValue(height);
      }
      if (gestureDirection !== layout.gestureDirection) {
        const inverted = self.inverted;
        inverted.setValue(importDefault(5614)(gestureDirection));
      }
      const animateToValue = self.getAnimateToValue(self.props);
      if (!tmp7) {
        const obj = { closing: null };
        obj[0] = props.closing;
        self.animate(obj);
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const gesture = this.props.gesture;
      gesture.stopAnimation();
      this.isCurrentlyMounted = false;
      this.handleEndInteraction();
    }
  },
  {
    key: "gestureActivationCriteria",
    value: function gestureActivationCriteria() {
      let gestureDirection;
      let gestureResponseDistance;
      let layout;
      ({ layout, gestureDirection, gestureResponseDistance } = this.props);
      if (undefined === gestureResponseDistance) {
        if ("vertical" === gestureDirection) {
          let num = 135;
        } else {
          num = 50;
        }
        gestureResponseDistance = num;
      }
      if ("vertical" === gestureDirection) {
        let obj = { maxDeltaX: 15, minOffsetY: 5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
        obj = { bottom: null };
        obj[0] = -layout.height + gestureResponseDistance;
        obj[2] = obj;
        return obj;
      } else if ("vertical-inverted" === gestureDirection) {
        const obj1 = { maxDeltaX: 15, minOffsetY: -5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
        const obj2 = { top: null };
        obj2[0] = -layout.height + gestureResponseDistance;
        obj1[2] = obj2;
        return obj1;
      } else {
        const sum = -layout.width + gestureResponseDistance;
        if (1 === importDefault(5614)(gestureDirection)) {
          const obj3 = { minOffsetX: 5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
          const obj4 = { right: null };
          obj4[0] = sum;
          obj3[2] = obj4;
          obj = obj3;
        } else {
          obj = { minOffsetX: -5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
          const obj5 = { left: null };
          obj5[0] = sum;
          obj[2] = obj5;
        }
        return obj;
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let cardStyle;
      let children;
      let containerStyle;
      let contentStyle;
      let current;
      let gesture;
      let gestureDirection;
      let gestureEnabled;
      let headerDarkContent;
      let insets;
      let interpolationIndex;
      let layout;
      let next;
      let overlay;
      let overlayEnabled;
      let pageOverflowEnabled;
      let shadowEnabled;
      let shadowLeft;
      let shadowStyle;
      let styleInterpolator;
      const self = this;
      const props = this.props;
      ({ interpolationIndex, current, gesture, layout, insets, gestureEnabled, gestureDirection, headerDarkContent, contentStyle } = props);
      ({ styleInterpolator, next, overlay, overlayEnabled, shadowEnabled, pageOverflowEnabled, children, containerStyle } = props);
      const tmp = callback(props, closure_3);
      const cardAnimation = this.getCardAnimation(interpolationIndex, current, next, layout, insets.top, insets.right, insets.bottom, insets.left);
      const interpolatedStyle = this.getInterpolatedStyle(styleInterpolator, cardAnimation);
      ({ cardStyle, shadowStyle } = interpolatedStyle);
      if (!gestureEnabled) {
        let obj4 = StyleSheet;
        let obj = contentStyle;
        if (!contentStyle) {
          obj = {};
        }
        const backgroundColor = StyleSheet.flatten(obj).backgroundColor;
        let tmp10 = typeof backgroundColor === "y";
        if (typeof backgroundColor !== "__FORMATJS_LISTFORMAT_DATA__") {
          tmp10 = 0 === importDefault(5616)(backgroundColor).alpha();
          const obj19 = importDefault(5616)(backgroundColor);
        }
        obj = { value: null, children: null };
        obj[0] = cardAnimation;
        const obj1 = { style: null, collapsable: false };
        const obj2 = { opacity: null };
        obj2[0] = current;
        obj1[0] = obj2;
        const items = [null, callback4(RN.View, obj1)];
        const obj3 = { pointerEvents: "box-none", collapsable: false };
        const merged = Object.assign(tmp);
        let tmp14Result = null;
        if (overlayEnabled) {
          obj4 = { pointerEvents: "box-none", style: null, children: null };
          obj4[1] = obj4.absoluteFill;
          const obj5 = { style: null };
          obj5[0] = tmp5;
          obj4[2] = overlay(obj5);
          tmp14Result = tmp14(tmp16, obj4);
        }
        const items1 = [tmp14Result, ];
        const obj6 = { style: null, pointerEvents: "box-none", children: null };
        shadowLeft = closure_17;
        const items2 = [closure_17.container, tmp4, containerStyle];
        obj6[0] = items2;
        let tmp23 = 0 !== layout.width;
        if (tmp23) {
          tmp23 = gestureEnabled;
        }
        const obj7 = { enabled: null, onGestureEvent: null, onHandlerStateChange: null };
        obj7[0] = tmp23;
        obj7[1] = undefined;
        obj7[2] = self.handleGestureStateChange;
        const merged1 = Object.assign(self.gestureActivationCriteria());
        let tmp26 = cardStyle;
        if (tmp26) {
          tmp26 = null != obj4.flatten(cardStyle).opacity;
        }
        const obj8 = { needsOffscreenAlphaCompositing: null, style: null, children: null };
        obj8[0] = tmp26;
        const items3 = [shadowLeft.container, cardStyle];
        obj8[1] = items3;
        let tmp27 = null;
        if (shadowEnabled) {
          tmp27 = null;
          if (shadowStyle) {
            tmp27 = null;
            if (!tmp10) {
              const items4 = [shadowLeft.shadow, , , ];
              if ("horizontal" === gestureDirection) {
                const items5 = [, ];
                ({ shadowHorizontal: arr10[0], shadowLeft } = shadowLeft);
                items5[1] = shadowLeft;
                let items8 = items5;
              } else if ("horizontal-inverted" === gestureDirection) {
                const items6 = [, ];
                ({ shadowHorizontal: arr9[0], shadowRight: arr9[1] } = shadowLeft);
                items8 = items6;
              } else if ("vertical" === gestureDirection) {
                const items7 = [, ];
                ({ shadowVertical: arr8[0], shadowTop: arr8[1] } = shadowLeft);
                items8 = items7;
              } else {
                items8 = [, ];
                ({ shadowVertical: arr7[0], shadowBottom: arr7[1] } = shadowLeft);
              }
              const obj9 = { style: null, pointerEvents: "none" };
              items4[1] = items8;
              const obj10 = { backgroundColor: null };
              obj10[0] = backgroundColor;
              items4[2] = obj10;
              items4[3] = shadowStyle;
              obj9[0] = items4;
              tmp14Result = tmp14(tmp15.View, obj9);
            }
          }
        }
        const items9 = [tmp27, ];
        const obj11 = { ref: null, enabled: null, layout: null, style: null, children: null };
        obj11[0] = self.ref;
        obj11[1] = pageOverflowEnabled;
        obj11[2] = layout;
        obj11[3] = contentStyle;
        obj11[4] = children;
        items9[1] = callback4(importDefault(5625), obj11);
        obj8[2] = items9;
        obj7.children = closure_14(RN.View, obj8);
        obj6[2] = callback4(Card(5579).PanGestureHandler, obj7);
        items1[1] = callback4(RN.View, obj6);
        obj3.children = items1;
        items[2] = closure_14(View, obj3);
        obj[1] = items;
        return closure_14(importDefault(5624).Provider, obj);
      } else {
        if ("vertical" !== gestureDirection) {
          if ("vertical-inverted" !== gestureDirection) {
            obj = { translationX: null };
            obj[0] = gesture;
          }
          const obj12 = { nativeEvent: null };
          obj12[0] = obj;
          const items10 = [obj12];
          const obj13 = { useNativeDriver: null };
          obj13[0] = c16;
          tmp7(items10, obj13);
        }
        const obj14 = { translationY: null };
        obj14[0] = gesture;
        obj = obj14;
      }
    }
  }
];
const importDefaultResultResult = importDefaultResult(Card, items);
importDefaultResultResult.defaultProps = {
  shadowEnabled: false,
  gestureEnabled: true,
  gestureVelocityImpact: 0.3,
  overlay(style) {
    style = style.style;
    let tmp = null;
    if (style) {
      const obj = { pointerEvents: "none", style: null };
      const items = [closure_17.overlay, style];
      obj[1] = items;
      tmp = callback4(RN.View, obj);
    }
    return tmp;
  }
};
const styles = StyleSheet.create({ container: { flex: 1 }, overlay: { flex: 1, backgroundColor: "#000" }, shadow: { position: "absolute", shadowRadius: 5, shadowColor: "#000", shadowOpacity: 0.3 }, shadowHorizontal: { top: 0, bottom: 0, width: 3, shadowOffset: { width: -1, height: 1 } }, shadowLeft: { left: 0 }, shadowRight: { right: 0 }, shadowVertical: { left: 0, right: 0, height: 3, shadowOffset: { width: 1, height: -1 } }, shadowTop: { top: 0 }, shadowBottom: { bottom: 0 } });

export default importDefaultResultResult;
export const getIsModalPresentation = (name) => {
  let tmp = name === Card(5626).forModalPresentationIOS;
  if (!tmp) {
    tmp = "forModalPresentationIOS" === name.name;
  }
  return tmp;
};