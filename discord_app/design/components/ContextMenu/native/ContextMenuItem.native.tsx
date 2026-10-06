// === Module 14275: ContextMenuItem ===

// Module 14275 (ContextMenuItem)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import ContextMenuState from "ContextMenuState" /* 7591 */;
import ContextMenuConstants from "ContextMenuConstants" /* 7592 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let obj1;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_8 = createStyles.createStyles((arg0) => {
  let TEXT_STRONG;
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg }, roundedBottom: { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg }, border: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE }, pressed: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, icon: { width: 20, height: 20, tintColor: TEXT_STRONG }, label: { flexShrink: 1 }, trailingIndicator: { marginLeft: "auto" } };
  ({ padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 });
  ({ borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg });
  ({ borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg });
  ({ borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  if ("destructive" === arg0) {
    TEXT_STRONG = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = nativeDefault.colors.TEXT_STRONG;
  }
  return obj;
});
const __initData = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
const __initData2 = { code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous){return;}const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData3 = { code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:\"transparent\",SUBTLE_SPRING,\"animate-always\")};}" };
const __initData4 = { code: "function ContextMenuItemNativeTsx4(){const{activeIndex,index}=this.__closure;activeIndex.set(index);}" };
const __initData5 = { code: "function ContextMenuItemNativeTsx5(){const{pan}=this.__closure;return pan.get();}" };
const __initData6 = { code: "function ContextMenuItemNativeTsx6(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData7 = { code: "function ContextMenuItemNativeTsx7(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}" };
let closure_16 = { code: "function ContextMenuItemNativeTsx8(){const{activeIndex,index}=this.__closure;activeIndex.set(index);}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let accessibilityRole;
  let end;
  let iconSource;
  let index;
  let label;
  let onPress;
  let pan;
  let start;
  let state;
  let tmp11;
  let trailingIndicator;
  let variant;
  let obj = index(pan[8]);
  const cResult = obj.c(42);
  ({ label, IconComponent, trailingIndicator, iconSource, start, end, index } = arg0);
  ({ state, onPress, variant, accessibilityRole } = arg0);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const tmpResult = index(pan[3]);
  const animatedRef = tmpResult.useAnimatedRef();
  const tmp6 = closure_8(str);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  const tmpResult4 = index(pan[3]);
  const sharedValue = tmpResult4.useSharedValue(0);
  let fn = function _() {
    return pan.get();
  };
  fn.__closure = { pan };
  fn.__workletHash = 11852115418144;
  fn.__initData = __initData;
  const fn2 = function n(arg0, arg1) {
    let height;
    let pageX;
    let pageY;
    let width;
    if (null != arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        const measureResult = obj.measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
          const value = itemMeasurements.get();
          value[result + ContextMenuState.INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          const value4 = itemMeasurements.get();
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
  let obj2 = { measure: index(tmp2[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(tmp2[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(tmp2[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(tmp2[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(tmp2[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(tmp2[9]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn2.__closure = obj2;
  fn2.__workletHash = 1414096049732;
  fn2.__initData = __initData2;
  const animatedReaction = tmpResult5.useAnimatedReaction(fn, fn2);
  const backgroundColor = tmp6.pressed.backgroundColor;
  const fn3 = function y() {
    let str = "transparent";
    const tmp = activeIndex.get() === index || 1 === sharedValue.get();
    const withSpring = spring.withSpring;
    spring;
    if (tmp) {
      str = backgroundColor;
    }
    const obj = { backgroundColor: withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  const tmpResult6 = index(pan[3]);
  fn3.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[10]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING };
  fn3.__workletHash = 12424649901967;
  fn3.__initData = __initData3;
  ({ activeIndex, index, pressed: sharedValue, withSpring: index(pan[10]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING });
  const animatedStyle = tmpResult6.useAnimatedStyle(fn3);
  if (cResult[0] === IconComponent) {
    if (cResult[1] === iconSource) {
      let tmp15;
      if (cResult[4] === trailingIndicator) {
        if (cResult[7] === index) {
          if (cResult[10] === activeIndex) {
            if (cResult[13] !== activeIndex) {
              class J {
                constructor() {
                  const result = activeIndex.set(-1);
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
                  const result = activeIndex.set(-1);
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
            if (start) {
              class J {
                constructor() {
                  const result = activeIndex.set(-1);
                }
              }
            }
            if (end) {
              class J {
                constructor() {
                  const result = activeIndex.set(-1);
                }
              }
            }
            if (cResult[15] === animatedStyle) {
              class J {
                constructor() {
                  const result = activeIndex.set(-1);
                }
              }
            }
            const items = [, , , , , ];
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
            const result = activeIndex.set(-1);
          }
        }
        const obj4 = { size: "sm", color: null };
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
        tmp15 = sharedValue(trailingIndicator, obj4);
      }
      cResult[4] = trailingIndicator;
      cResult[5] = tmp6.icon;
      cResult[6] = tmp15;
    }
  }
  if (null != IconComponent) {
    class J {
      constructor() {
        const result = activeIndex.set(-1);
      }
    }
    const obj5 = { size: "sm", color: null };
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
    tmp11 = sharedValue(IconComponent, obj5);
  } else {
    class J {
      constructor() {
        const result = activeIndex.set(-1);
      }
    }
    if (null != iconSource) {
      class J {
        constructor() {
          const result = activeIndex.set(-1);
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
  cResult[0] = IconComponent;
  cResult[1] = iconSource;
  cResult[2] = tmp6.icon;
  cResult[3] = tmp11;
}) : ((accessibilityRole) => {
  let IconComponent;
  let callback2;
  let end;
  let iconSource;
  let index;
  let items3;
  let items4;
  let label;
  let lastInSection;
  let onPress;
  let start;
  let state;
  let str2;
  let tmp8;
  let trailingIndicator;
  let variant;
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
  let obj = index(pan[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp4 = closure_8(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  let obj2 = index(pan[3]);
  const sharedValue = obj2.useSharedValue(0);
  let fn = function p() {
    return pan.get();
  };
  fn.__closure = { pan };
  fn.__workletHash = 7652758346660;
  fn.__initData = __initData5;
  const fn2 = function v(arg0, arg1) {
    let height;
    let pageX;
    let pageY;
    let width;
    if (null != arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        const measureResult = obj.measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
          const value = itemMeasurements.get();
          value[result + ContextMenuState.INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          const value4 = itemMeasurements.get();
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
  fn2.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn2.__workletHash = 5372602195750;
  fn2.__initData = __initData6;
  ({ measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const backgroundColor = tmp4.pressed.backgroundColor;
  const fn3 = function w() {
    let str = "transparent";
    const tmp = activeIndex.get() === index || 1 === sharedValue.get();
    const withSpring = spring.withSpring;
    spring;
    if (tmp) {
      str = backgroundColor;
    }
    const obj = { backgroundColor: withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  const obj5 = index(pan[3]);
  fn3.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[10]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING };
  fn3.__workletHash = 4828133886763;
  fn3.__initData = __initData7;
  ({ activeIndex, index, pressed: sharedValue, withSpring: index(pan[10]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING });
  const animatedStyle = obj5.useAnimatedStyle(fn3);
  if (null != IconComponent) {
    const obj7 = { size: "sm", color: tmp4.icon.tintColor };
    tmp8 = sharedValue(IconComponent, obj7);
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
    let height;
    let width;
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (0 !== height) {
      if (0 !== width) {
        const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
        const value = itemMeasurements.get();
        value[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        const value2 = itemMeasurements.get();
        value2[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
      }
    }
  }, items);
  const items2 = [activeIndex];
  const callback1 = itemMeasurements.useCallback(() => {
    const fn = function t() {
      const result = activeIndex.set(index);
    };
    const obj2 = { activeIndex, index };
    fn.__closure = obj2;
    fn.__workletHash = 5033343607547;
    fn.__initData = __initData;
    const obj = ReanimatedRexport2;
    obj.executeOnUIRuntimeSync(fn)();
  }, items1);
  const obj10 = { ref: animatedRef, style: items3, onLayout: callback, onPressIn: callback1, onPressOut: callback2, onPress, accessibilityRole: str, children: items4 };
  items3 = [, , , , , ];
  ({ container: arr4[0], containerRefresh: arr4[1] } = tmp4);
  let border = !end;
  callback2 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items2);
  const tmp17 = backgroundColor;
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
  items4 = [sharedValue(activeIndex, { children: tmp8 }), , ];
  const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: str2, children: label };
  str2 = "text-strong";
  const Text = index(tmp2[13]).Text;
  const tmp20 = activeIndex;
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  items4[1] = sharedValue(Text, obj11);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(tmp20, obj12);
  }
  items4[2] = tmp19Result;
  return tmp17(closure_7, obj10);
});
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = tmp4;