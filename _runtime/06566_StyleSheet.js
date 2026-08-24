// _runtime/06566_StyleSheet.js
import closure_3 from "metro/00032__slicedToArray.js";
import closure_4 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";
import getShadowStyle from "06571_getShadowStyle.js";

const require = arg1;
({ Animated: c5, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let c10 = true;
function hasOpacityStyle(arg0) {

}
function getAnimateToValue(arg0) {

}
function defaultOverlay(style) {
  style = style.style;
  let tmp = null;
  if (style) {
    const obj = { pointerEvents: "none", style: null };
    const items = [closure_14.overlay, style];
    obj[1] = items;
    tmp = callback(RN.View, obj);
  }
  return tmp;
}
let obj = { container: { flex: 1 }, overlay: { flex: 1, backgroundColor: "#000" }, shadow: { position: "absolute" }, shadowHorizontal: null, shadowStart: null, shadowEnd: null, shadowVertical: null, shadowTop: null, shadowBottom: null };
obj = { top: 0, bottom: 0, width: 3 };
let merged = Object.assign(getShadowStyle.getShadowStyle({ offset: { width: -1, height: 1 }, radius: 5, opacity: 0.3 }));
obj[3] = obj;
obj[4] = { start: 0 };
obj[5] = { end: 0 };
obj = { start: 0, end: 0, height: 3 };
const merged1 = Object.assign(getShadowStyle.getShadowStyle({ offset: { width: 1, height: -1 }, radius: 5, opacity: 0.3 }));
obj[6] = obj;
obj[7] = { top: 0 };
obj[8] = { bottom: 0 };
const styles = StyleSheet.create(obj);

export const Card = function Card(shadowEnabled) {
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
  let closing = shadowEnabled.closing;
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
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  closure_26 = undefined;
  closure_27 = undefined;
  let first;
  let first1;
  let first2;
  let first3;
  closure_32 = undefined;
  closure_33 = undefined;
  closure_34 = undefined;
  closure_35 = undefined;
  closure_36 = undefined;
  closure_37 = undefined;
  let memo;
  ({ pageOverflowEnabled, children, overlayEnabled, gestureResponseDistance, containerStyle } = shadowEnabled);
  closure_22 = opening.useRef(false);
  closure_23 = opening.useRef(undefined);
  closure_24 = opening.useRef(undefined);
  closure_25 = opening.useRef(undefined);
  closure_26 = opening.useRef(undefined);
  closure_27 = opening.useRef(undefined);
  first = interpolationIndex(opening.useState(() => {
    const value = new closing.Value(0);
    return value;
  }), 1)[0];
  first1 = interpolationIndex(opening.useState(() => {
    const value = new closing.Value(flag2(closure_1_2[5]).getInvertedMultiplier(gestureDirection, "rtl" === direction));
    return value;
  }), 1)[0];
  first2 = interpolationIndex(opening.useState(() => {
    const obj = { width: null, height: null };
    let value = new closing.Value(layout.width);
    obj[0] = value;
    value = new closing.Value(layout.height);
    obj[1] = value;
    return obj;
  }), 1)[0];
  first3 = interpolationIndex(opening.useState(() => {
    const value = new closing.Value(0);
    return value;
  }), 1)[0];
  closure_32 = num(1522)(() => {
    if (null == ref3.current) {
      const InteractionManager = flag2(closure_1_2[7]).InteractionManager;
      let interactionHandle;
      if (InteractionManager != null) {
        interactionHandle = InteractionManager.createInteractionHandle();
      }
      tmp.current = interactionHandle;
    }
  });
  closure_33 = num(1522)(() => {
    if (null != ref3.current) {
      const InteractionManager = flag2(closure_1_2[7]).InteractionManager;
      if (InteractionManager != null) {
        const result = InteractionManager.clearInteractionHandle(tmp.current);
      }
      tmp.current = undefined;
    }
  });
  let tmp7 = num(1522)((closing) => {
    closing = closing.closing;
    const velocity = closing.velocity;
    let onFinish;
    if (typeof gestureDirection !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (closing) {
      let obj = flag2(closure_1_2[4]);
      num = obj.getDistanceForDirection(layout, gestureDirection, "rtl" === direction);
    } else {
      num = 0;
    }
    closure_23.current = num;
    let num2 = 0;
    if (closing) {
      num2 = 1;
    }
    first.setValue(num2);
    const tmp10 = closing ? closure_19.close : closure_19.open;
    if ("spring" === tmp10.animation) {
      let timing = closing.spring;
    } else {
      timing = closing.timing;
    }
    clearTimeout(ref5.current);
    if (undefined !== ref4.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(tmp14.current);
    }
    if (closure_15 != null) {
      obj = { closing: null, gesture: null };
      obj[0] = closing;
      obj[1] = undefined !== velocity;
      tmp16(obj);
    }
    onFinish = function onFinish() {

    };
    if (closure_2) {
      callback6();
      obj = {};
      const merged = Object.assign(tmp10.config);
      obj.velocity = velocity;
      obj.toValue = num;
      obj.useNativeDriver = insets;
      obj.isInteraction = false;
      timing(gesture, obj).start((finished) => {
        closure_1_33();
        let _requestAnimationFrame = globalThis;
        clearTimeout(closure_1_26.current);
        if (finished.finished) {
          if (typeof onFinish !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (closing) {
            closure_1_14();
          } else {
            closure_1_13();
          }
          _requestAnimationFrame = _requestAnimationFrame.requestAnimationFrame;
          closure_1_25.current = _requestAnimationFrame(() => {
            callback();
          });
        }
      });
      const timingResult = timing(gesture, obj);
    } else {
      if (closing) {
        callback2();
      } else {
        callback();
      }
      let _requestAnimationFrame = requestAnimationFrame;
      tmp14.current = requestAnimationFrame(() => {
        callback();
      });
    }
  });
  closure_34 = tmp7;
  let items = [gestureDirection, direction, first1, , , , ];
  ({ width: arr[3], height: arr[4] } = first2);
  ({ width: arr[5], height: arr[6] } = layout);
  const layoutEffect = opening.useLayoutEffect(() => {
    const width = first2.width;
    width.setValue(layout.width);
    const height = first2.height;
    height.setValue(layout.height);
    first1.setValue(flag2(closure_1_2[5]).getInvertedMultiplier(gestureDirection, "rtl" === direction));
  }, items);
  closure_35 = opening.useRef(null);
  const effect = opening.useEffect(() => () => {
    callback();
    if (ref.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(tmp2.current);
    }
    clearTimeout(ref2.current);
    clearTimeout(ref3.current);
  }, []);
  closure_36 = opening.useRef(undefined);
  const tmp11 = num(1522)(() => {
    clearTimeout(ref5.current);
    clearTimeout(ref6.current);
    if (ref.current) {
      current = ref7.current;
      if (current != null) {
        opening = current.opening;
      }
      let tmp7 = null;
      if (ref7.current) {
        if (typeof gestureDirection !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (tmp5.current.closing) {
          let obj = flag2(closure_1_2[4]);
          let num2 = obj.getDistanceForDirection(tmp9, tmp10, "rtl" === tmp11);
        } else {
          num2 = 0;
        }
        tmp7 = num2;
      }
      if (typeof gestureDirection !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (closing) {
        let num3 = flag2(closure_1_2[4]).getDistanceForDirection(tmp17, tmp18, "rtl" === tmp19);
        const obj2 = flag2(closure_1_2[4]);
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
            gesture.setValue(flag2(closure_1_2[4]).getDistanceForDirection(tmp17, tmp18, "rtl" === tmp19));
            obj = { closing: null };
            obj[0] = tmp16;
            callback8(obj);
            const obj3 = flag2(closure_1_2[4]);
          }
        }
      }
      obj = { closing: null };
      obj[0] = closing;
      callback8(obj);
      const tmp20 = preloaded;
    } else {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref8.current);
      const _setTimeout = setTimeout;
      ref8.current = setTimeout(() => {
        closure_22.current = true;
        callback({ closing: closure_5 });
      }, 0);
    }
  });
  closure_37 = tmp11;
  const items1 = [tmp7, closing, direction, gesture, gestureDirection, layout, opening, preloaded, tmp11];
  const effect1 = opening.useEffect(() => {
    if (!preloaded) {
      callback9();
      const obj = { opening: null, closing: null, layout: null, gestureDirection: null, direction: null, preloaded: null };
      obj[0] = opening;
      obj[1] = closing;
      obj[2] = layout;
      obj[3] = gestureDirection;
      obj[4] = direction;
      obj[5] = tmp;
      closure_35.current = obj;
    }
  }, items1);
  const items2 = [interpolationIndex, current, next, first, first3, first1, layout, , , , ];
  ({ top: arr3[7], right: arr3[8], bottom: arr3[9], left: arr3[10] } = insets);
  memo = opening.useMemo(() => {
    obj = { index: interpolationIndex, current: obj, next: null, closing: null, swiping: null, inverted: null, layouts: null, insets: null };
    obj = { progress: current };
    let tmp2 = next;
    if (next) {
      obj = { progress: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    obj[2] = tmp2;
    obj[3] = first;
    obj[4] = first3;
    obj[5] = first1;
    obj[6] = { screen: layout };
    obj[7] = { top: insets.top, right: insets.right, bottom: insets.bottom, left: insets.left };
    return obj;
  }, items2);
  const items3 = [styleInterpolator, memo];
  const memo1 = opening.useMemo(() => styleInterpolator(memo), items3);
  ({ cardStyle, shadowStyle } = memo1);
  const items4 = [gesture, gestureDirection, flag2];
  ({ containerStyle: containerStyle2, overlayStyle } = memo1);
  let obj = next;
  obj = contentStyle;
  const memo2 = opening.useMemo(() => {
    if (flag2) {
      if ("vertical" !== gestureDirection) {
        if ("vertical-inverted" !== tmp3) {
          let obj = { translationX: null };
          obj[0] = gesture;
        }
        obj = { nativeEvent: null };
        obj[0] = obj;
        const items = [obj];
        obj = { useNativeDriver: null };
        obj[0] = insets;
        tmp2(items, obj);
      }
      obj1 = { translationY: null };
      obj1[0] = gesture;
      obj = obj1;
    }
  }, items4);
  if (!contentStyle) {
    obj = {};
  }
  const backgroundColor = next.flatten(obj).backgroundColor;
  let tmp16 = typeof backgroundColor === "string";
  if (typeof backgroundColor === "string") {
    tmp16 = 0 === tmp5(6359)(backgroundColor).alpha();
    const obj12 = tmp5(6359)(backgroundColor);
  }
  obj = { value: memo, children: null };
  const items5 = [gesture(closing.View, { style: { opacity: current }, collapsable: false }), , ];
  let tmp19Result = null;
  if (overlayEnabled) {
    obj1 = { pointerEvents: "box-none", style: null, children: null };
    obj1[1] = obj.absoluteFill;
    let obj2 = { style: null };
    obj2[0] = overlayStyle;
    obj1[2] = overlay(obj2);
    tmp19Result = tmp19(current, obj1);
  }
  items5[1] = tmp19Result;
  let obj3 = { pointerEvents: "box-none", style: items6, children: null };
  shadowStart = closure_14;
  items6 = [closure_14.container, containerStyle2, containerStyle];
  let tmp23 = 0 !== layout.width;
  if (tmp23) {
    tmp23 = flag2;
  }
  const obj4 = {
    enabled: tmp23,
    onGestureEvent: memo2,
    onHandlerStateChange: num(1522)((nativeEvent) => {
      nativeEvent = nativeEvent.nativeEvent;
      const state = nativeEvent.state;
      if (flag2(closure_1_2[8]).GestureState.ACTIVE === state) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref5.current);
        const _clearTimeout2 = clearTimeout;
        clearTimeout(ref6.current);
        first3.setValue(1);
        callback6();
        if (callback3 != null) {
          callback3();
        }
      } else {
        if (tmp(tmp2[8]).GestureState.CANCELLED !== state) {
          if (tmp(tmp2[8]).GestureState.FAILED !== state) {
            if (tmp(tmp2[8]).GestureState.END === state) {
              first3.setValue(0);
              if ("vertical" !== gestureDirection) {
                if ("vertical-inverted" !== tmp38) {
                  let height = layout.width;
                  ({ translationX: translationY, velocityX: velocityY } = nativeEvent);
                }
                const sum = translationY + velocityY * num;
                if (sum * tmpResult.getInvertedMultiplier(tmp38, "rtl" === direction) > height / 2) {
                  let tmp8 = 0 !== velocityY || 0 !== translationY;
                  const tmp9 = 0 !== velocityY || 0 !== translationY;
                } else {
                  tmp8 = closing;
                }
                let obj = { closing: null, velocity: null };
                obj[0] = tmp8;
                obj[1] = velocityY;
                callback8(obj);
                if (tmp8) {
                  const _setTimeout = setTimeout;
                  ref5.current = setTimeout(() => {
                    callback();
                    closure_27.current = setTimeout(() => {
                      callback();
                    }, 32);
                  }, 16);
                }
                if (callback5 != null) {
                  callback5();
                }
                tmpResult = tmp(tmp2[5]);
              }
              height = layout.height;
              ({ translationY, velocityY } = nativeEvent);
            }
          }
        }
        first3.setValue(0);
        callback7();
        if ("vertical" !== gestureDirection) {
          if ("vertical-inverted" !== tmp19) {
            let velocityY2 = nativeEvent.velocityX;
          }
          obj = { closing: null, velocity: null };
          obj[0] = closing;
          obj[1] = velocityY2;
          callback8(obj);
          if (callback4 != null) {
            callback4();
          }
        }
        velocityY2 = nativeEvent.velocityY;
      }
    })
  };
  tmp5 = num;
  let tmp8 = num(1522)((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const state = nativeEvent.state;
    if (flag2(closure_1_2[8]).GestureState.ACTIVE === state) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref5.current);
      const _clearTimeout2 = clearTimeout;
      clearTimeout(ref6.current);
      first3.setValue(1);
      callback6();
      if (callback3 != null) {
        callback3();
      }
    } else {
      if (tmp(tmp2[8]).GestureState.CANCELLED !== state) {
        if (tmp(tmp2[8]).GestureState.FAILED !== state) {
          if (tmp(tmp2[8]).GestureState.END === state) {
            first3.setValue(0);
            if ("vertical" !== gestureDirection) {
              if ("vertical-inverted" !== tmp38) {
                let height = layout.width;
                ({ translationX: translationY, velocityX: velocityY } = nativeEvent);
              }
              const sum = translationY + velocityY * num;
              if (sum * tmpResult.getInvertedMultiplier(tmp38, "rtl" === direction) > height / 2) {
                let tmp8 = 0 !== velocityY || 0 !== translationY;
                const tmp9 = 0 !== velocityY || 0 !== translationY;
              } else {
                tmp8 = closing;
              }
              let obj = { closing: null, velocity: null };
              obj[0] = tmp8;
              obj[1] = velocityY;
              callback8(obj);
              if (tmp8) {
                const _setTimeout = setTimeout;
                ref5.current = setTimeout(() => {
                  callback();
                  closure_27.current = setTimeout(() => {
                    callback();
                  }, 32);
                }, 16);
              }
              if (callback5 != null) {
                callback5();
              }
              tmpResult = tmp(tmp2[5]);
            }
            height = layout.height;
            ({ translationY, velocityY } = nativeEvent);
          }
        }
      }
      first3.setValue(0);
      callback7();
      if ("vertical" !== gestureDirection) {
        if ("vertical-inverted" !== tmp19) {
          let velocityY2 = nativeEvent.velocityX;
        }
        obj = { closing: null, velocity: null };
        obj[0] = closing;
        obj[1] = velocityY2;
        callback8(obj);
        if (callback4 != null) {
          callback4();
        }
      }
      velocityY2 = nativeEvent.velocityY;
    }
  });
  let merged = Object.assign(flag2(6569).gestureActivationCriteria({ layout, direction, gestureDirection, gestureResponseDistance }));
  if (typeof direction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let flag3 = false;
  if (cardStyle) {
    const flattenResult = obj.flatten(cardStyle);
    flag3 = "opacity" in flattenResult && null != flattenResult.opacity;
    const tmp26 = "opacity" in flattenResult && null != flattenResult.opacity;
  }
  const obj5 = { pointerEvents: "box-none", needsOffscreenAlphaCompositing: flag3, style: items7, children: null };
  items7 = [shadowStart.container, cardStyle];
  let tmp27 = null;
  if (flag) {
    tmp27 = null;
    if (shadowStyle) {
      tmp27 = null;
      if (!tmp16) {
        const items8 = [shadowStart.shadow, , , ];
        if ("horizontal" === gestureDirection) {
          const items9 = [, ];
          ({ shadowHorizontal: arr13[0], shadowStart } = shadowStart);
          items9[1] = shadowStart;
          let items12 = items9;
        } else if ("horizontal-inverted" === gestureDirection) {
          const items10 = [, ];
          ({ shadowHorizontal: arr12[0], shadowEnd: arr12[1] } = shadowStart);
          items12 = items10;
        } else if ("vertical" === gestureDirection) {
          const items11 = [, ];
          ({ shadowVertical: arr11[0], shadowTop: arr11[1] } = shadowStart);
          items12 = items11;
        } else {
          items12 = [, ];
          ({ shadowVertical: arr10[0], shadowBottom: arr10[1] } = shadowStart);
        }
        const obj6 = { pointerEvents: "none", style: null };
        items8[1] = items12;
        const obj7 = { backgroundColor: null };
        obj7[0] = backgroundColor;
        items8[2] = obj7;
        items8[3] = shadowStyle;
        obj6[1] = items8;
        tmp19Result = tmp19(tmp20.View, obj6);
      }
    }
  }
  const items13 = [tmp27, gesture(flag2(6570).CardContent, { enabled: pageOverflowEnabled, layout, style: contentStyle, children })];
  obj5[3] = items13;
  obj4.children = layout(closing.View, obj5);
  obj3[2] = gesture(flag2(6405).PanGestureHandler, obj4);
  items5[2] = gesture(closing.View, obj3);
  obj[1] = items5;
  return layout(flag2(6568).CardAnimationContext.Provider, obj);
};