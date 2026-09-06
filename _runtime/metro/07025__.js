// _runtime/metro/07025__.js
import PanGestureHandler from "../07005_PanGestureHandler.js";
import _mod7019 from "07019__.js";
import _mod7020 from "07020__.js";
import _mod7026 from "07026__.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: hasOwnProperty, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = true;
function hasOpacityStyle(arg0) {}
function getAnimateToValue(arg0) {}
function defaultOverlay(style) {
  style = style.style;
  let tmp = null;
  if (style) {
    const obj = { pointerEvents: "none", style: null };
    const items = [closure_14.overlay, style];
    obj.style = items;
    tmp = React6(RN.View, obj);
  }
  return tmp;
}
let obj = {
  container: { flex: 1 },
  overlay: { flex: 1, backgroundColor: "#000" },
  shadow: { position: "absolute" },
  shadowHorizontal: null,
  shadowStart: null,
  shadowEnd: null,
  shadowVertical: null,
  shadowTop: null,
  shadowBottom: null,
};
let rect = { top: 0, bottom: 0, width: 3 };
get_ActivityIndicator = fn(7030);
let merged = Object.assign(
  get_ActivityIndicator.getShadowStyle({ offset: { width: -1, height: 1 }, radius: 5, opacity: 0.3 }),
);
obj.shadowHorizontal = rect;
obj.shadowStart = { start: 0 };
obj.shadowEnd = { end: 0 };
obj = { start: 0, end: 0, height: 3 };
get_ActivityIndicator = fn(7030);
const merged1 = Object.assign(
  get_ActivityIndicator.getShadowStyle({ offset: { width: 1, height: -1 }, radius: 5, opacity: 0.3 }),
);
obj.shadowVertical = obj;
obj.shadowTop = { top: 0 };
obj.shadowBottom = { bottom: 0 };
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
  const next = shadowEnabled.next;
  let current = shadowEnabled.current;
  const gesture = shadowEnabled.gesture;
  const layout = shadowEnabled.layout;
  const insets = shadowEnabled.insets;
  const direction = shadowEnabled.direction;
  const gestureDirection = shadowEnabled.gestureDirection;
  ({
    onOpen: defaultOverlay,
    onClose: closure_14,
    onTransition: closure_15,
    onGestureBegin: closure_16,
    onGestureCanceled: closure_17,
    onGestureEnd: closure_18,
    transitionSpec: closure_19,
    preloaded,
  } = shadowEnabled);
  const styleInterpolator = shadowEnabled.styleInterpolator;
  const contentStyle = shadowEnabled.contentStyle;
  ({ pageOverflowEnabled, children, overlayEnabled, gestureResponseDistance, containerStyle } = shadowEnabled);
  opening.useRef(false);
  opening.useRef(undefined);
  opening.useRef(undefined);
  opening.useRef(undefined);
  opening.useRef(undefined);
  opening.useRef(undefined);
  let closing = interpolationIndex(
    opening.useState(() => {
      value = new closing.Value(0);
      return value;
    }),
    1,
  )[0];
  const first1 = interpolationIndex(
    opening.useState(() => {
      value = new RN.Value(_mod7020.getInvertedMultiplier(gestureDirection, "rtl" === direction));
      return value;
    }),
    1,
  )[0];
  const first2 = interpolationIndex(
    opening.useState(() => {
      const size = { width: null, height: null };
      value = new RN.Value(layout.width);
      size.width = value;
      value = new RN.Value(layout.height);
      size.height = value;
      return size;
    }),
    1,
  )[0];
  const first3 = interpolationIndex(
    opening.useState(() => {
      value = new closing.Value(0);
      return value;
    }),
    1,
  )[0];
  closure_32 = num(1505)(() => {
    if (null == ref3.current) {
      const InteractionManager = _mod7026.InteractionManager;
      let interactionHandle;
      if (InteractionManager != null) {
        interactionHandle = InteractionManager.createInteractionHandle();
      }
      tmp.current = interactionHandle;
    }
  });
  closure_33 = num(1505)(() => {
    if (null != ref3.current) {
      const InteractionManager = _mod7026.InteractionManager;
      if (InteractionManager != null) {
        const result = InteractionManager.clearInteractionHandle(tmp.current);
      }
      tmp.current = undefined;
    }
  });
  let tmp7 = num(1505)((closing) => {
    closing = closing.closing;
    const velocity = closing.velocity;
    let onFinish;
    if (typeof gestureDirection === "function") {
      if (closing) {
        let obj = flag2(dependencyMap[4]);
        num = obj.getDistanceForDirection(tmp, tmp2, "rtl" === tmp3);
      } else {
        num = 0;
      }
      closure_23.current = num;
      let num2 = 0;
      if (closing) {
        num2 = 1;
      }
      first.setValue(num2);
      const tmp11 = closing ? closure_19.close : closure_19.open;
      if ("spring" === tmp11.animation) {
        let timing = closing.spring;
      } else {
        timing = closing.timing;
      }
      const _clearTimeout = clearTimeout;
      clearTimeout(ref5.current);
      if (undefined !== ref4.current) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(tmp17.current);
      }
      if (closure_15 != null) {
        obj = { closing, gesture: undefined !== velocity };
        tmp19(obj);
      }
      onFinish = function onFinish() {};
      if (closure_2) {
        closure_32();
        obj = {};
        const merged = Object.assign(tmp11.config);
        obj.velocity = velocity;
        obj.toValue = num;
        obj.useNativeDriver = insets;
        obj.isInteraction = false;
        timing(gesture, obj).start((finished) => {
          closure_33();
          let _requestAnimationFrame = globalThis;
          clearTimeout(ref.current);
          if (finished.finished) {
            if (typeof onFinish === "function") {
              if (closing) {
                closure_2_14();
              } else {
                defaultOverlay();
              }
              _requestAnimationFrame = _requestAnimationFrame.requestAnimationFrame;
              closure_25.current = _requestAnimationFrame(() => {
                closure_1_37();
              });
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        });
        const timingResult = timing(gesture, obj);
      } else {
        if (closing) {
          closure_14();
        } else {
          closure_13();
        }
        let _requestAnimationFrame = requestAnimationFrame;
        tmp17.current = requestAnimationFrame(() => {
          closure_1_37();
        });
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  closure_34 = tmp7;
  let items = [gestureDirection, direction, first1, , , ,];
  ({ width: arr[3], height: arr[4] } = first2);
  ({ width: arr[5], height: arr[6] } = layout);
  const layoutEffect = opening.useLayoutEffect(() => {
    const width = first2.width;
    width.setValue(layout.width);
    const height = first2.height;
    height.setValue(layout.height);
    first1.setValue(_mod7020.getInvertedMultiplier(gestureDirection, "rtl" === direction));
  }, items);
  opening.useRef(null);
  const effect = opening.useEffect(
    () => () => {
      closure_1_33();
      if (ref.current) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(tmp2.current);
      }
      clearTimeout(ref2.current);
      clearTimeout(ref3.current);
    },
    [],
  );
  opening.useRef(undefined);
  let tmp11 = num(1505)(() => {
    clearTimeout(ref5.current);
    clearTimeout(ref6.current);
    if (ref.current) {
      current = ref7.current;
      if (current != null) {
        opening = current.opening;
      }
      let tmp7 = null;
      if (ref7.current) {
        if (typeof getAnimateToValue === "function") {
          if (tmp5.current.closing) {
            let obj = _mod7019;
            let num2 = obj.getDistanceForDirection(tmp9, tmp10, "rtl" === tmp11);
          } else {
            num2 = 0;
          }
          tmp7 = num2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (typeof getAnimateToValue === "function") {
        if (tmp16) {
          let num3 = _mod7019.getDistanceForDirection(tmp17, tmp18, "rtl" === tmp19);
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
              gesture.setValue(_mod7019.getDistanceForDirection(tmp17, tmp18, "rtl" === tmp19));
              obj = { closing: tmp16 };
              closure_34(obj);
            }
          }
        }
        obj = { closing: tmp16 };
        closure_34(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref8.current);
      const _setTimeout = setTimeout;
      ref8.current = setTimeout(() => {
        ref.current = true;
        closure_1_34({ closing });
      }, 0);
    }
  });
  closure_37 = tmp11;
  const items1 = [tmp7, closing, direction, gesture, gestureDirection, layout, opening, preloaded, tmp11];
  const effect1 = opening.useEffect(() => {
    if (!preloaded) {
      closure_37();
      const obj = { opening, closing, layout, gestureDirection, direction, preloaded: tmp };
      closure_35.current = obj;
    }
  }, items1);
  const items2 = [interpolationIndex, current, next, closing, first3, first1, layout, , , ,];
  ({ top: arr3[7], right: arr3[8], bottom: arr3[9], left: arr3[10] } = insets);
  const memo = opening.useMemo(() => {
    let obj = {
      index: interpolationIndex,
      current: null,
      next: null,
      closing: null,
      swiping: null,
      inverted: null,
      layouts: null,
      insets: null,
    };
    obj = { progress: current };
    obj.current = obj;
    let tmp2 = next;
    if (next) {
      obj = { progress: tmp };
      tmp2 = obj;
    }
    obj.next = tmp2;
    obj.closing = closing;
    obj.swiping = first3;
    obj.inverted = first1;
    obj.layouts = { screen: layout };
    const rect = { top: insets.top, right: insets.right, bottom: insets.bottom, left: insets.left };
    obj.insets = rect;
    return obj;
  }, items2);
  const items3 = [styleInterpolator, memo];
  const memo1 = opening.useMemo(() => styleInterpolator(memo), items3);
  ({ cardStyle, shadowStyle } = memo1);
  const items4 = [gesture, gestureDirection, flag2];
  ({ containerStyle: containerStyle2, overlayStyle } = memo1);
  let obj = contentStyle;
  const memo2 = opening.useMemo(() => {
    if (flag2) {
      if ("vertical" !== gestureDirection) {
        if ("vertical-inverted" !== tmp3) {
          let obj = { translationX: gesture };
        }
        obj = { nativeEvent: null };
        obj.nativeEvent = obj;
        const items = [obj];
        obj = { useNativeDriver };
        tmp2(items, obj);
      }
      const obj1 = { translationY: gesture };
      obj = obj1;
    }
  }, items4);
  if (!contentStyle) {
    obj = {};
  }
  const backgroundColor = next.flatten(obj).backgroundColor;
  let tmp16 = typeof backgroundColor === "string";
  if (typeof backgroundColor === "string") {
    tmp16 = 0 === tmp5(5640)(backgroundColor).alpha();
    const obj14 = tmp5(5640)(backgroundColor);
  }
  obj = { value: memo, children: null };
  const items5 = [gesture(closing.View, { style: { opacity: current }, collapsable: false }), ,];
  let tmp19Result = null;
  if (overlayEnabled) {
    let obj2 = { pointerEvents: "box-none", style: obj.absoluteFill, children: null };
    let obj3 = { style: overlayStyle };
    obj2.children = overlay(obj3);
    tmp19Result = tmp19(current, obj2);
  }
  items5[1] = tmp19Result;
  const obj4 = { pointerEvents: "box-none", style: null, children: null };
  shadowStart = closure_14;
  const items6 = [closure_14.container, containerStyle2, containerStyle];
  obj4.style = items6;
  let tmp23 = 0 !== layout.width;
  if (tmp23) {
    tmp23 = flag2;
  }
  const obj5 = {
    enabled: tmp23,
    onGestureEvent: memo2,
    onHandlerStateChange: num(1505)((nativeEvent) => {
      nativeEvent = nativeEvent.nativeEvent;
      const state = nativeEvent.state;
      if (PanGestureHandler.GestureState.ACTIVE === state) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref5.current);
        const _clearTimeout2 = clearTimeout;
        clearTimeout(ref6.current);
        first3.setValue(1);
        closure_32();
        if (closure_1_16 != null) {
          closure_1_16();
        }
      } else {
        if (tmp(7005).GestureState.CANCELLED !== state) {
          if (tmp(7005).GestureState.FAILED !== state) {
            if (tmp(7005).GestureState.END === state) {
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
                let obj = { closing: tmp8, velocity: velocityY };
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
                if (closure_1_18 != null) {
                  closure_1_18();
                }
                tmpResult = tmp(7020);
              }
              height = layout.height;
              ({ translationY, velocityY } = nativeEvent);
            }
          }
        }
        first3.setValue(0);
        closure_33();
        if ("vertical" !== gestureDirection) {
          if ("vertical-inverted" !== tmp19) {
            let velocityY2 = nativeEvent.velocityX;
          }
          obj = { closing, velocity: velocityY2 };
          closure_34(obj);
          if (closure_1_17 != null) {
            closure_1_17();
          }
        }
        velocityY2 = nativeEvent.velocityY;
      }
    }),
  };
  let obj1 = { style: { opacity: current }, collapsable: false };
  tmp5 = num;
  let tmp8 = num(1505)((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const state = nativeEvent.state;
    if (PanGestureHandler.GestureState.ACTIVE === state) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref5.current);
      const _clearTimeout2 = clearTimeout;
      clearTimeout(ref6.current);
      first3.setValue(1);
      closure_32();
      if (closure_1_16 != null) {
        closure_1_16();
      }
    } else {
      if (tmp(7005).GestureState.CANCELLED !== state) {
        if (tmp(7005).GestureState.FAILED !== state) {
          if (tmp(7005).GestureState.END === state) {
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
              let obj = { closing: tmp8, velocity: velocityY };
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
              if (closure_1_18 != null) {
                closure_1_18();
              }
              tmpResult = tmp(7020);
            }
            height = layout.height;
            ({ translationY, velocityY } = nativeEvent);
          }
        }
      }
      first3.setValue(0);
      closure_33();
      if ("vertical" !== gestureDirection) {
        if ("vertical-inverted" !== tmp19) {
          let velocityY2 = nativeEvent.velocityX;
        }
        obj = { closing, velocity: velocityY2 };
        closure_34(obj);
        if (closure_1_17 != null) {
          closure_1_17();
        }
      }
      velocityY2 = nativeEvent.velocityY;
    }
  });
  let merged = Object.assign(
    flag2(7028).gestureActivationCriteria({ layout, direction, gestureDirection, gestureResponseDistance }),
  );
  if (typeof direction === "function") {
    let flag3 = false;
    if (cardStyle) {
      const flattenResult = obj.flatten(cardStyle);
      flag3 = "opacity" in flattenResult && null != flattenResult.opacity;
      const tmp27 = "opacity" in flattenResult && null != flattenResult.opacity;
    }
    const obj6 = { pointerEvents: "box-none", needsOffscreenAlphaCompositing: flag3, style: null, children: null };
    const items7 = [shadowStart.container, cardStyle];
    obj6.style = items7;
    let tmp28 = null;
    if (flag) {
      tmp28 = null;
      if (shadowStyle) {
        tmp28 = null;
        if (!tmp16) {
          const items8 = [shadowStart.shadow, , ,];
          if ("horizontal" === gestureDirection) {
            const items9 = [,];
            ({ shadowHorizontal: arr13[0], shadowStart } = shadowStart);
            items9[1] = shadowStart;
            let items12 = items9;
          } else if ("horizontal-inverted" === gestureDirection) {
            const items10 = [,];
            ({ shadowHorizontal: arr12[0], shadowEnd: arr12[1] } = shadowStart);
            items12 = items10;
          } else if ("vertical" === gestureDirection) {
            const items11 = [,];
            ({ shadowVertical: arr11[0], shadowTop: arr11[1] } = shadowStart);
            items12 = items11;
          } else {
            items12 = [,];
            ({ shadowVertical: arr10[0], shadowBottom: arr10[1] } = shadowStart);
          }
          const obj7 = { pointerEvents: "none", style: null };
          items8[1] = items12;
          const obj8 = { backgroundColor };
          items8[2] = obj8;
          items8[3] = shadowStyle;
          obj7.style = items8;
          tmp19Result = tmp19(tmp20.View, obj7);
        }
      }
    }
    const items13 = [tmp28];
    const obj9 = { enabled: pageOverflowEnabled, layout, style: contentStyle, children };
    items13[1] = tmp19(tmp18(7029).CardContent, obj9);
    obj6.children = items13;
    obj5.children = tmp17(tmp25, obj6);
    obj4.children = tmp19(tmp18(7005).PanGestureHandler, obj5);
    items5[2] = tmp19(tmp20.View, obj4);
    obj.children = items5;
    return tmp17(flag2(7027).CardAnimationContext.Provider, obj);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp18Result = flag2(7028);
};
