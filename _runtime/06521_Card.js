// === Module 6521: Card ===

// Module 6521 (Card)
import PanGestureHandler2 from "PanGestureHandler" /* 6501 */;
import _mod6515 from "module_6515" /* 6515 */;
import _mod6516 from "module_6516" /* 6516 */;
import react_native from "react-native" /* 6522 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2_mod from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native2_mod2 from "react-native" /* 6526 */;

let finished, nativeEvent, size;

let Platform;
let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let obj2;
let rect;
let react_native2 = react_native2_mod2;
({ Animated: hasOwnProperty, Platform, StyleSheet } = react_native2);
let View = react_native2.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = true;
function hasOpacityStyle(arg0) {

}
function getAnimateToValue(arg0) {

}
function defaultOverlay(style) {
  let items;
  style = style.style;
  let tmp = null;
  if (style) {
    const obj = { pointerEvents: "none", style: items };
    items = [closure_14.overlay, style];
    tmp = metroImportAll(hasOwnProperty.View, obj);
  }
  return tmp;
}
let obj = { container: { flex: 1 }, overlay: { flex: 1, backgroundColor: "#000" }, shadow: { position: "absolute" }, shadowHorizontal: rect, shadowStart: { start: 0 }, shadowEnd: { end: 0 }, shadowVertical: obj2, shadowTop: { top: 0 }, shadowBottom: { bottom: 0 } };
rect = { top: 0, bottom: 0, width: 3 };
const create = StyleSheet.create;
react_native2 = react_native2_mod2;
let merged = Object.assign(react_native2.getShadowStyle({ offset: { width: -1, height: 1 }, radius: 5, opacity: 0.3 }));
obj2 = { start: 0, end: 0, height: 3 };
react_native2 = react_native2_mod2;
const merged1 = Object.assign(react_native2.getShadowStyle({ offset: { width: 1, height: -1 }, radius: 5, opacity: 0.3 }));
let closure_14 = create(obj);

export const Card = function Card(shadowEnabled) {
  let cardStyle;
  let children;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let containerStyle;
  let containerStyle2;
  let gestureResponseDistance;
  let interpolationIndex;
  let items13;
  let items6;
  let items7;
  let obj6;
  let overlayEnabled;
  let overlayStyle;
  let pageOverflowEnabled;
  let preloaded;
  let shadowStyle;
  let useNativeDriver;
  let flag = shadowEnabled.shadowEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = shadowEnabled.gestureEnabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let num = shadowEnabled.gestureVelocityImpact;
  if (num === undefined) {
    num = 0.3;
  }
  let overlay = shadowEnabled.overlay;
  if (overlay === undefined) {
    overlay = defaultOverlay;
  }
  ({ animated: dependencyMap, interpolationIndex } = shadowEnabled);
  let opening = shadowEnabled.opening;
  const next = shadowEnabled.next;
  let current = shadowEnabled.current;
  const gesture = shadowEnabled.gesture;
  const layout = shadowEnabled.layout;
  const insets = shadowEnabled.insets;
  const direction = shadowEnabled.direction;
  const gestureDirection = shadowEnabled.gestureDirection;
  ({ onOpen: defaultOverlay, onClose: closure_14, onTransition: closure_15, onGestureBegin: closure_16, onGestureCanceled: closure_17, onGestureEnd: closure_18, transitionSpec: closure_19, preloaded } = shadowEnabled);
  const styleInterpolator = shadowEnabled.styleInterpolator;
  const contentStyle = shadowEnabled.contentStyle;
  ({ pageOverflowEnabled, children, overlayEnabled, gestureResponseDistance, containerStyle } = shadowEnabled);
  const ref = opening.useRef(false);
  const ref2 = opening.useRef(undefined);
  const ref3 = opening.useRef(undefined);
  const ref4 = opening.useRef(undefined);
  const ref5 = opening.useRef(undefined);
  const ref6 = opening.useRef(undefined);
  let closing = interpolationIndex(opening.useState(() => {
    const value = new closing.Value(0);
    return value;
  }), 1)[0];
  const first1 = interpolationIndex(opening.useState(() => {
    const Value = hasOwnProperty.Value;
    const obj = _mod6516;
    const value = new Value(obj.getInvertedMultiplier(gestureDirection, "rtl" === direction));
    return value;
  }), 1)[0];
  const first2 = interpolationIndex(opening.useState(() => {
    let value;
    let value2;
    size = { width: value, height: value2 };
    value = new hasOwnProperty.Value(layout.width);
    value2 = new hasOwnProperty.Value(layout.height);
    return size;
  }), 1)[0];
  const first3 = interpolationIndex(opening.useState(() => {
    const value = new closing.Value(0);
    return value;
  }), 1)[0];
  let closure_32 = num(1512)(() => {
    if (null == ref3.current) {
      const InteractionManager = react_native.InteractionManager;
      let interactionHandle;
      if (InteractionManager != null) {
        interactionHandle = InteractionManager.createInteractionHandle();
      }
      tmp.current = interactionHandle;
    }
  });
  let closure_33 = num(1512)(() => {
    if (null != ref3.current) {
      const InteractionManager = react_native.InteractionManager;
      if (InteractionManager != null) {
        const result = InteractionManager.clearInteractionHandle(ref3.current);
      }
      ref3.current = undefined;
    }
  });
  let tmp7 = num(1512)((closing) => {
    const f151044 = () => {
      closure_1_37();
    };
    closing = closing.closing;
    const velocity = closing.velocity;
    let onFinish;
    if (typeof gestureDirection === "function") {
      let timing;
      if (closing) {
        const obj = flag2(dependencyMap[4]);
        num = obj.getDistanceForDirection(tmp, tmp2, "rtl" === tmp3);
      } else {
        num = 0;
      }
      closure_23.current = num;
      let num2 = 0;
      const setValue = first.setValue;
      if (closing) {
        num2 = 1;
      }
      setValue(num2);
      const tmp11 = closing ? closure_19.close : closure_19.open;
      if ("spring" === tmp11.animation) {
        timing = closing.spring;
      } else {
        timing = closing.timing;
      }
      const _clearTimeout = clearTimeout;
      clearTimeout(ref5.current);
      if (undefined !== ref4.current) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(ref4.current);
      }
      if (closure_15 != null) {
        const obj2 = { closing, gesture: undefined !== velocity };
        tmp19(obj2);
      }
      onFinish = function onFinish() {

      };
      if (dependencyMap) {
        closure_32();
        const obj3 = { velocity, toValue: num, useNativeDriver: insets, isInteraction: false };
        const merged = Object.assign(tmp11.config);
        const timingResult = timing(gesture, obj3);
        timingResult.start((finished) => {
          finished = finished.finished;
          closure_33();
          clearTimeout(ref.current);
          if (finished) {
            if (typeof onFinish === "function") {
              if (closing) {
                closure_14();
              } else {
                defaultOverlay();
              }
              const _requestAnimationFrame = requestAnimationFrame;
              ref4.current = requestAnimationFrame(f151044);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        });
      } else {
        if (closing) {
          closure_14();
        } else {
          closure_13();
        }
        let _requestAnimationFrame = requestAnimationFrame;
        ref4.current = requestAnimationFrame(f151044);
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  let closure_34 = tmp7;
  let items = [gestureDirection, direction, first1, , , , ];
  ({ width: arr[3], height: arr[4] } = first2);
  ({ width: arr[5], height: arr[6] } = layout);
  let tmp8 = num(1512)((nativeEvent) => {
    let translationY;
    let velocityY;
    nativeEvent = nativeEvent.nativeEvent;
    const state = nativeEvent.state;
    if (PanGestureHandler2.GestureState.ACTIVE === state) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref5.current);
      const _clearTimeout2 = clearTimeout;
      clearTimeout(ref6.current);
      first3.setValue(1);
      closure_32();
      if (closure_16 != null) {
        closure_16();
      }
    } else {
      if (PanGestureHandler2.GestureState.CANCELLED !== state) {
        if (PanGestureHandler2.GestureState.FAILED !== state) {
          if (PanGestureHandler2.GestureState.END === state) {
            first3.setValue(0);
            if ("vertical" !== gestureDirection) {
              let height;
              let tmp8;
              if ("vertical-inverted" !== gestureDirection) {
                height = layout.width;
                ({ translationX: translationY, velocityX: velocityY } = nativeEvent);
              }
              const sum = translationY + velocityY * num;
              const tmpResult = _mod6516;
              if (sum * tmpResult.getInvertedMultiplier(gestureDirection, "rtl" === direction) > height / 2) {
                tmp8 = 0 !== velocityY || 0 !== translationY;
              } else {
                tmp8 = closing;
              }
              const obj = { closing: tmp8, velocity: velocityY };
              closure_34(obj);
              if (tmp8) {
                const _setTimeout = setTimeout;
                ref5.current = setTimeout(() => {
                  closure_1_14();
                  ref6.current = setTimeout(() => {
                    closure_1_37();
                  }, 32);
                }, 16);
              }
              if (closure_18 != null) {
                closure_18();
              }
            }
            height = layout.height;
            ({ translationY, velocityY } = nativeEvent);
          }
        }
      }
      first3.setValue(0);
      closure_33();
      if ("vertical" !== gestureDirection) {
        let velocityY2;
        if ("vertical-inverted" !== tmp19) {
          velocityY2 = nativeEvent.velocityX;
        }
        const obj2 = { closing, velocity: velocityY2 };
        closure_34(obj2);
        if (closure_17 != null) {
          closure_17();
        }
      }
      velocityY2 = nativeEvent.velocityY;
    }
  });
  const layoutEffect = opening.useLayoutEffect(() => {
    const width = first2.width;
    width.setValue(layout.width);
    const height = first2.height;
    height.setValue(layout.height);
    const setValue = first1.setValue;
    const obj = _mod6516;
    setValue(obj.getInvertedMultiplier(gestureDirection, "rtl" === direction));
  }, items);
  const ref7 = opening.useRef(null);
  const effect = opening.useEffect(() => () => {
    closure_1_33();
    if (ref.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(tmp2.current);
    }
    clearTimeout(ref2.current);
    clearTimeout(ref3.current);
  }, []);
  const ref8 = opening.useRef(undefined);
  let tmp11 = num(1512)(() => {
    clearTimeout(ref5.current);
    clearTimeout(ref6.current);
    if (ref.current) {
      current = ref7.current;
      if (current != null) {
        opening = current.opening;
      }
      let tmp7 = null;
      if (ref7.current) {
        const current2 = ref7.current;
        if (typeof getAnimateToValue === "function") {
          let num2;
          if (current2.closing) {
            let obj = _mod6515;
            num2 = obj.getDistanceForDirection(tmp9, tmp10, "rtl" === tmp11);
          } else {
            num2 = 0;
          }
          tmp7 = num2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (typeof getAnimateToValue === "function") {
        let num3;
        if (closing) {
          const obj2 = _mod6515;
          num3 = obj2.getDistanceForDirection(layout, gestureDirection, "rtl" === direction);
        } else {
          num3 = 0;
        }
        if (tmp7 === num3) {
          if (ref2.current === num3) {
            let tmp24 = typeof opening === "boolean";
            if (typeof opening === "boolean") {
              tmp24 = opening;
            }
            if (tmp24) {
              tmp24 = !opening;
            }
            if (tmp24) {
              const setValue = gesture.setValue;
              const obj3 = _mod6515;
              setValue(obj3.getDistanceForDirection(layout, gestureDirection, "rtl" === direction));
              const obj4 = { closing };
              closure_34(obj4);
            }
          }
        }
        const obj5 = { closing };
        closure_34(obj5);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref8.current);
      const _setTimeout = setTimeout;
      ref8.current = setTimeout(() => {
        ref.current = true;
        const obj = { closing };
        closure_1_34(obj);
      }, 0);
    }
  });
  let closure_37 = tmp11;
  const items1 = [tmp7, closing, direction, gesture, gestureDirection, layout, opening, preloaded, tmp11];
  const effect1 = opening.useEffect(() => {
    if (!preloaded) {
      closure_37();
      const obj = { opening, closing, layout, gestureDirection, direction, preloaded: tmp };
      ref7.current = obj;
    }
  }, items1);
  const items2 = [interpolationIndex, current, next, closing, first3, first1, layout, , , , ];
  ({ top: arr3[7], right: arr3[8], bottom: arr3[9], left: arr3[10] } = insets);
  const memo = opening.useMemo(() => {
    let obj2;
    let rect;
    let tmp2;
    const obj = { index: interpolationIndex, current: obj2, next: tmp2, closing, swiping: first3, inverted: first1, layouts: obj4, insets: rect };
    tmp2 = next;
    obj2 = { progress: current };
    if (tmp2) {
      tmp2 = { progress: tmp };
      const obj3 = { progress: tmp };
    }
    rect = { top: insets.top, right: insets.right, bottom: insets.bottom, left: insets.left };
    return obj;
  }, items2);
  const items3 = [styleInterpolator, memo];
  const memo1 = opening.useMemo(() => styleInterpolator(memo), items3);
  ({ cardStyle, shadowStyle } = memo1);
  const items4 = [gesture, gestureDirection, flag2];
  ({ containerStyle: containerStyle2, overlayStyle } = memo1);
  let obj = next;
  let obj2 = contentStyle;
  const memo2 = opening.useMemo(() => {
    let tmp;
    if (flag2) {
      if ("vertical" !== gestureDirection) {
        let obj;
        if ("vertical-inverted" !== tmp4) {
          obj = { translationX: gesture };
        }
        const items = [{ nativeEvent: obj }];
        const obj2 = { nativeEvent: obj };
        const obj3 = { useNativeDriver };
        tmp = tmp3(items, obj3);
      }
      obj = { translationY: gesture };
      const obj4 = { translationY: gesture };
    }
    return tmp;
  }, items4);
  const flatten = next.flatten;
  const tmp5 = num;
  if (!contentStyle) {
    obj2 = {};
  }
  const backgroundColor = flatten(obj2).backgroundColor;
  let tmp16 = typeof backgroundColor === "string";
  if (typeof backgroundColor === "string") {
    let num2 = 0;
    const obj14 = tmp5(6028)(backgroundColor);
    tmp16 = 0 === obj14.alpha();
  }
  let obj3 = { value: memo, children: null };
  const tmp19 = gesture;
  let obj4 = { style: { opacity: current }, collapsable: false };
  const Provider = flag2(6523).CardAnimationContext.Provider;
  const items5 = [gesture(closing.View, obj4), , ];
  let tmp19Result = null;
  if (overlayEnabled) {
    let obj5 = { pointerEvents: "box-none", style: obj.absoluteFill, children: overlay(obj6) };
    obj6 = { style: overlayStyle };
    tmp19Result = tmp19(current, obj5);
  }
  items5[1] = tmp19Result;
  const obj7 = { pointerEvents: "box-none", style: items6, children: null };
  items6 = [closure_14.container, containerStyle2, containerStyle];
  View = tmp20.View;
  let tmp24 = 0 !== layout.width;
  const PanGestureHandler = flag2(6501).PanGestureHandler;
  if (tmp24) {
    tmp24 = flag2;
  }
  const obj8 = { enabled: tmp24, onGestureEvent: memo2, onHandlerStateChange: tmp8 };
  const tmp18Result = flag2(6524);
  let merged = Object.assign(tmp18Result.gestureActivationCriteria({ layout, direction, gestureDirection, gestureResponseDistance }));
  if (typeof direction === "function") {
    let flag3 = false;
    if (cardStyle) {
      const flattenResult = obj.flatten(cardStyle);
      const str = "opacity";
      flag3 = "opacity" in flattenResult && null != flattenResult.opacity;
      const tmp28 = "opacity" in flattenResult && null != flattenResult.opacity;
    }
    const obj9 = { pointerEvents: "box-none", needsOffscreenAlphaCompositing: flag3, style: items7, children: items13 };
    items7 = [closure_14.container, cardStyle];
    let tmp19Result2 = null;
    if (flag) {
      tmp19Result2 = null;
      if (shadowStyle) {
        tmp19Result2 = null;
        if (!tmp16) {
          let items12;
          const items8 = [closure_14.shadow, , , ];
          const View2 = tmp20.View;
          if ("horizontal" === gestureDirection) {
            const items9 = [, ];
            ({ shadowHorizontal: arr13[0], shadowStart: arr13[1] } = closure_14);
            items12 = items9;
          } else if ("horizontal-inverted" === gestureDirection) {
            const items10 = [, ];
            ({ shadowHorizontal: arr12[0], shadowEnd: arr12[1] } = closure_14);
            items12 = items10;
          } else if ("vertical" === gestureDirection) {
            const items11 = [, ];
            ({ shadowVertical: arr11[0], shadowTop: arr11[1] } = closure_14);
            items12 = items11;
          } else {
            items12 = [, ];
            ({ shadowVertical: arr10[0], shadowBottom: arr10[1] } = closure_14);
          }
          const obj10 = { pointerEvents: "none", style: items8 };
          items8[1] = items12;
          const obj11 = { backgroundColor };
          items8[2] = obj11;
          items8[3] = shadowStyle;
          tmp19Result2 = tmp19(View2, obj10);
        }
      }
    }
    items13 = [tmp19Result2, ];
    const obj12 = { enabled: pageOverflowEnabled, layout, style: contentStyle, children };
    items13[1] = tmp19(flag2(6525).CardContent, obj12);
    obj8.children = layout(tmp26, obj9);
    obj7.children = tmp19(PanGestureHandler, obj8);
    items5[2] = tmp19(View, obj7);
    obj3.children = items5;
    return layout(Provider, obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};