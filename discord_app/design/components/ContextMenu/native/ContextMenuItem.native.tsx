// discord_app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = {
    container: {
      padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING,
      minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
    },
    containerRefresh: { justifyContent: "flex-start" },
    roundedTop: null,
    roundedBottom: null,
    border: null,
    pressed: null,
    icon: null,
    label: null,
    trailingIndicator: null,
  };
  const obj2 = {
    padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING,
    minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  };
  obj.roundedTop = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  obj.roundedBottom = {
    borderBottomLeftRadius: nativeDefault.radii.lg,
    borderBottomRightRadius: nativeDefault.radii.lg,
  };
  const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.pressed = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  if ("destructive" === arg0) {
    let TEXT_STRONG = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = nativeDefault.colors.TEXT_STRONG;
  }
  obj.icon = { width: 20, height: 20, tintColor: TEXT_STRONG };
  obj.label = { flexShrink: 1 };
  obj.trailingIndicator = { marginLeft: "auto" };
  return obj;
});
const __initData = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
const __initData2 = {
  code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous){return;}const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}",
};
const __initData3 = {
  code: 'function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:"transparent",SUBTLE_SPRING,"animate-always")};}',
};
const __initData4 = {
  code: "function ContextMenuItemNativeTsx4(){const{activeIndex,index}=this.__closure;activeIndex.set(index);}",
};
const __initData5 = { code: "function ContextMenuItemNativeTsx5(){const{pan}=this.__closure;return pan.get();}" };
const __initData6 = {
  code: "function ContextMenuItemNativeTsx6(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}",
};
const __initData7 = {
  code: "function ContextMenuItemNativeTsx7(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}",
};
let closure_16 = {
  code: "function ContextMenuItemNativeTsx8(){const{activeIndex,index}=this.__closure;activeIndex.set(index);}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContextMenuItem(arg0) {
      const cResult = index(pan[8]).c(42);
      ({ label, IconComponent, trailingIndicator, iconSource, start, end, index } = arg0);
      ({ state, onPress, variant, accessibilityRole } = arg0);
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      let obj = index(pan[8]);
      const animatedRef = index(pan[3]).useAnimatedRef();
      const tmp6 = closure_8(str);
      pan = state.pan;
      const itemMeasurements = state.itemMeasurements;
      const activeIndex = state.activeIndex;
      const tmpResult = index(pan[3]);
      let num = 0;
      const sharedValue = index(pan[3]).useSharedValue(0);
      const tmpResult4 = index(pan[3]);
      let fn = function _() {
        return pan.get();
      };
      fn.__closure = { pan };
      fn.__workletHash = 11852115418144;
      fn.__initData = __initData;
      const fn2 = function n(arg0, arg1) {
        if (null != arg1) {
          if (arg0 !== arg1) {
            const measureResult = ReanimatedRexport2.measure(animatedRef);
            if (null != measureResult) {
              ({ pageX, pageY, width, height } = measureResult);
              const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
              value = itemMeasurements.get();
              value[result + ContextMenuState.INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
              value4 = itemMeasurements.get();
              value4[result + ContextMenuState.INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
              const value5 = itemMeasurements.get();
              value5[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
              const value6 = itemMeasurements.get();
              value6[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
            }
          }
        }
      };
      const tmpResult5 = index(pan[3]);
      fn2.__closure = {
        measure: index(pan[3]).measure,
        ref: animatedRef,
        index,
        INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET,
        itemMeasurements,
        INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET,
        INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET,
        INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET,
        INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET,
      };
      fn2.__workletHash = 1414096049732;
      fn2.__initData = __initData2;
      const animatedReaction = tmpResult5.useAnimatedReaction(fn, fn2);
      const backgroundColor = tmp6.pressed.backgroundColor;
      const obj2 = {
        measure: index(pan[3]).measure,
        ref: animatedRef,
        index,
        INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET,
        itemMeasurements,
        INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET,
        INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET,
        INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET,
        INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET,
      };
      const fn3 = function y() {
        let tmp = activeIndex.get() === index;
        if (!tmp) {
          tmp = 1 === sharedValue.get();
        }
        let str = "transparent";
        if (tmp) {
          str = backgroundColor;
        }
        return { backgroundColor: spring.withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
      };
      const tmpResult6 = index(pan[3]);
      fn3.__closure = {
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      };
      fn3.__workletHash = 12424649901967;
      fn3.__initData = __initData3;
      const animatedStyle = tmpResult6.useAnimatedStyle(fn3);
      if (cResult[0] === IconComponent) {
        if (cResult[1] === iconSource) {
          if (cResult[2] === tmp6.icon) {
            if (cResult[4] === trailingIndicator) {
              if (cResult[7] === index) {
                if (cResult[10] === activeIndex) {
                  if (cResult[13] !== activeIndex) {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                    class K {
                      constructor() {
                        obj = closure_0(closure_2[3]);
                        fn = function t() {
                          const result = activeIndex.set(index);
                        };
                        obj1 = { activeIndex, index };
                        fn.__closure = obj1;
                        fn.__workletHash = 14761332236151;
                        fn.__initData = closure_12;
                        tmp = obj.executeOnUIRuntimeSync(fn)();
                        return;
                      }
                    }
                    cResult[14] = J;
                  } else {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                  }
                  class K {
                    constructor() {
                      obj = closure_0(closure_2[3]);
                      fn = function t() {
                        const result = activeIndex.set(index);
                      };
                      obj1 = { activeIndex, index };
                      fn.__closure = obj1;
                      fn.__workletHash = 14761332236151;
                      fn.__initData = closure_12;
                      tmp = obj.executeOnUIRuntimeSync(fn)();
                      return;
                    }
                  }
                  if (!end) {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                  }
                  if (tmp20) {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                  }
                  if (start) {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                  }
                  if (end) {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                  }
                  if (cResult[15] === animatedStyle) {
                    class J {
                      constructor() {
                        result = activeIndex.set(-1);
                        return;
                      }
                    }
                  }
                  const items = [, , , , ,];
                  ({ container: arr[0], containerRefresh: arr[1] } = tmp6);
                  items[2] = tmp20;
                  items[3] = start;
                  items[4] = end;
                  items[5] = animatedStyle;
                  cResult[15] = animatedStyle;
                  cResult[16] = tmp6.container;
                  cResult[17] = tmp6.containerRefresh;
                  cResult[18] = end;
                  cResult[19] = tmp20;
                  cResult[20] = start;
                  cResult[21] = items;
                }
                class K {
                  constructor() {
                    obj = closure_0(closure_2[3]);
                    fn = function t() {
                      const result = activeIndex.set(index);
                    };
                    obj1 = { activeIndex, index };
                    fn.__closure = obj1;
                    fn.__workletHash = 14761332236151;
                    fn.__initData = closure_12;
                    tmp = obj.executeOnUIRuntimeSync(fn)();
                    return;
                  }
                }
                cResult[10] = activeIndex;
                cResult[11] = index;
                cResult[12] = K;
              }
              cResult[7] = index;
              cResult[8] = itemMeasurements;
              cResult[9] = tmp17;
            }
            if (null != trailingIndicator) {
              class J {
                constructor() {
                  result = activeIndex.set(-1);
                  return;
                }
              }
              class K {
                constructor() {
                  obj = closure_0(closure_2[3]);
                  fn = function t() {
                    const result = activeIndex.set(index);
                  };
                  obj1 = { activeIndex, index };
                  fn.__closure = obj1;
                  fn.__workletHash = 14761332236151;
                  fn.__initData = closure_12;
                  tmp = obj.executeOnUIRuntimeSync(fn)();
                  return;
                }
              }
              const tmp15 = sharedValue(trailingIndicator, { size: "sm", color: null });
              const obj4 = { size: "sm", color: null };
            }
            cResult[4] = trailingIndicator;
            cResult[5] = tmp6.icon;
            cResult[6] = tmp15;
          }
        }
      }
      if (null != IconComponent) {
        class J {
          constructor() {
            result = activeIndex.set(-1);
            return;
          }
        }
        class K {
          constructor() {
            obj = closure_0(closure_2[3]);
            fn = function t() {
              const result = activeIndex.set(index);
            };
            obj1 = { activeIndex, index };
            fn.__closure = obj1;
            fn.__workletHash = 14761332236151;
            fn.__initData = closure_12;
            tmp = obj.executeOnUIRuntimeSync(fn)();
            return;
          }
        }
        let tmp11 = sharedValue(IconComponent, { size: "sm", color: null });
        const obj5 = { size: "sm", color: null };
      } else {
        class J {
          constructor() {
            result = activeIndex.set(-1);
            return;
          }
        }
        if (null != iconSource) {
          class J {
            constructor() {
              result = activeIndex.set(-1);
              return;
            }
          }
          class K {
            constructor() {
              obj = closure_0(closure_2[3]);
              fn = function t() {
                const result = activeIndex.set(index);
              };
              obj1 = { activeIndex, index };
              fn.__closure = obj1;
              fn.__workletHash = 14761332236151;
              fn.__initData = closure_12;
              tmp = obj.executeOnUIRuntimeSync(fn)();
              return;
            }
          }
          tmp13[0] = iconSource;
          tmp13[1] = tmp6.icon;
          tmp11 = sharedValue(animatedRef(tmp2[12]), tmp13);
        }
      }
      cResult[num] = IconComponent;
      cResult[1] = iconSource;
      iconSource = tmp6.icon;
      cResult[2] = iconSource;
      num = 3;
      cResult[3] = tmp11;
      const obj3 = {
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      };
    }
  : function ContextMenuItem(accessibilityRole) {
      ({ IconComponent, trailingIndicator, iconSource, start, end, index } = accessibilityRole);
      ({ state, variant } = accessibilityRole);
      ({ label, lastInSection, onPress } = accessibilityRole);
      if (variant === undefined) {
        variant = "default";
      }
      let str = accessibilityRole.accessibilityRole;
      if (str === undefined) {
        str = "button";
      }
      let pan;
      const animatedRef = index(pan[3]).useAnimatedRef();
      const tmp4 = closure_8(variant);
      pan = state.pan;
      const itemMeasurements = state.itemMeasurements;
      const activeIndex = state.activeIndex;
      let obj = index(pan[3]);
      const sharedValue = index(pan[3]).useSharedValue(0);
      const obj2 = index(pan[3]);
      let fn = function p() {
        return pan.get();
      };
      fn.__closure = { pan };
      fn.__workletHash = 7652758346660;
      fn.__initData = __initData5;
      const fn2 = function v(arg0, arg1) {
        if (null != arg1) {
          if (arg0 !== arg1) {
            const measureResult = ReanimatedRexport2.measure(animatedRef);
            if (null != measureResult) {
              ({ pageX, pageY, width, height } = measureResult);
              const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
              value = itemMeasurements.get();
              value[result + ContextMenuState.INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
              value4 = itemMeasurements.get();
              value4[result + ContextMenuState.INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
              const value5 = itemMeasurements.get();
              value5[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
              const value6 = itemMeasurements.get();
              value6[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
            }
          }
        }
      };
      const obj3 = index(pan[3]);
      fn2.__closure = {
        measure: index(pan[3]).measure,
        ref: animatedRef,
        index,
        INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET,
        itemMeasurements,
        INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET,
        INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET,
        INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET,
        INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET,
      };
      fn2.__workletHash = 5372602195750;
      fn2.__initData = __initData6;
      const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
      const backgroundColor = tmp4.pressed.backgroundColor;
      const obj4 = {
        measure: index(pan[3]).measure,
        ref: animatedRef,
        index,
        INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET,
        itemMeasurements,
        INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET,
        INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET,
        INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET,
        INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET,
      };
      const fn3 = function w() {
        let tmp = activeIndex.get() === index;
        if (!tmp) {
          tmp = 1 === sharedValue.get();
        }
        let str = "transparent";
        if (tmp) {
          str = backgroundColor;
        }
        return { backgroundColor: spring.withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
      };
      const obj5 = index(pan[3]);
      fn3.__closure = {
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      };
      fn3.__workletHash = 4828133886763;
      fn3.__initData = __initData7;
      const animatedStyle = obj5.useAnimatedStyle(fn3);
      if (null != IconComponent) {
        const obj7 = { size: "sm", color: tmp4.icon.tintColor };
        let tmp8 = sharedValue(IconComponent, obj7);
      } else {
        tmp8 = null;
        if (null != iconSource) {
          const obj8 = { source: iconSource, style: tmp4.icon };
          tmp8 = sharedValue(animatedRef(tmp2[12]), obj8);
        }
      }
      let tmp12 = null;
      if (null != trailingIndicator) {
        const obj9 = { size: "sm", color: tmp4.icon.tintColor };
        tmp12 = sharedValue(trailingIndicator, obj9);
      }
      const items = [index, itemMeasurements];
      const items1 = [activeIndex, index];
      const callback = itemMeasurements.useCallback((nativeEvent) => {
        ({ height, width } = nativeEvent.nativeEvent.layout);
        if (0 !== height) {
          if (0 !== width) {
            const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
            value = itemMeasurements.get();
            value[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
            value2 = itemMeasurements.get();
            value2[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
          }
        }
      }, items);
      const items2 = [activeIndex];
      const callback1 = itemMeasurements.useCallback(() => {
        const fn = function t() {
          const result = activeIndex.set(index);
        };
        fn.__closure = { activeIndex, index };
        fn.__workletHash = 5033343607547;
        fn.__initData = __initData;
        ReanimatedRexport2.executeOnUIRuntimeSync(fn)();
      }, items1);
      const obj10 = {
        ref: animatedRef,
        style: null,
        onLayout: null,
        onPressIn: null,
        onPressOut: null,
        onPress: null,
        accessibilityRole: null,
        children: null,
      };
      const items3 = [, , , , ,];
      ({ container: arr4[0], containerRefresh: arr4[1] } = tmp4);
      let border = !end;
      const callback2 = itemMeasurements.useCallback(() => {
        const result = activeIndex.set(-1);
      }, items2);
      if (!end) {
        border = !lastInSection;
      }
      if (border) {
        border = tmp4.border;
      }
      items3[2] = border;
      if (start) {
        start = tmp4.roundedTop;
      }
      items3[3] = start;
      if (end) {
        end = tmp4.roundedBottom;
      }
      items3[4] = end;
      items3[5] = animatedStyle;
      obj10.style = items3;
      obj10.onLayout = callback;
      obj10.onPressIn = callback1;
      obj10.onPressOut = callback2;
      obj10.onPress = onPress;
      obj10.accessibilityRole = str;
      const items4 = [sharedValue(activeIndex, { children: tmp8 }), ,];
      const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: null, children: null };
      let str2 = "text-strong";
      if ("destructive" === variant) {
        str2 = "text-feedback-critical";
      }
      obj11.color = str2;
      obj11.children = label;
      items4[1] = sharedValue(index(pan[13]).Text, obj11);
      let tmp19Result = null != tmp12;
      if (tmp19Result) {
        const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
        tmp19Result = tmp19(activeIndex, obj12);
      }
      items4[2] = tmp19Result;
      obj10.children = items4;
      return backgroundColor(closure_7, obj10);
    };
