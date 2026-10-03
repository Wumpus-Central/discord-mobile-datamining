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
const createStyles = fn(4890);
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
const __initData4 = { code: "function ContextMenuItemNativeTsx4(){const{pan}=this.__closure;return pan.get();}" };
const __initData5 = {
  code: "function ContextMenuItemNativeTsx5(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}",
};
const __initData6 = {
  code: "function ContextMenuItemNativeTsx6(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = ReactCompilerGating.isReactCompilerEnabled()
  ? (lastInSection) => {
      const cResult = index(pan[8]).c(42);
      ({ label, IconComponent, trailingIndicator, iconSource, start, end, index } = lastInSection);
      ({ state, onPress, variant, accessibilityRole } = lastInSection);
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      let str2 = "button";
      if (undefined !== accessibilityRole) {
        str2 = accessibilityRole;
      }
      let obj = index(pan[8]);
      const animatedRef = index(pan[3]).useAnimatedRef();
      const tmp5 = closure_8(str);
      pan = state.pan;
      const itemMeasurements = state.itemMeasurements;
      const activeIndex = state.activeIndex;
      const tmpResult = index(pan[3]);
      let num = 0;
      const sharedValue = index(pan[3]).useSharedValue(0);
      const tmpResult4 = index(pan[3]);
      const fn = function _() {
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
      const backgroundColor = tmp5.pressed.backgroundColor;
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
      class M {
        constructor() {
          tmp = activeIndex.get() === index;
          if (!tmp) {
            tmp2 = closure_5;
            num = 1;
            tmp = 1 === closure_5.get();
          }
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[10]);
          str = "transparent";
          if (tmp) {
            str = backgroundColor;
          }
          obj1 = { backgroundColor: obj.withSpring(str, tmp3(tmp4[11]).SUBTLE_SPRING, "animate-always") };
          return obj1;
        }
      }
      const tmpResult6 = index(pan[3]);
      M.__closure = {
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      };
      M.__workletHash = 12424649901967;
      M.__initData = __initData3;
      const animatedStyle = tmpResult6.useAnimatedStyle(M);
      if (cResult[0] === IconComponent) {
        if (cResult[1] === iconSource) {
          if (cResult[2] === tmp5.icon) {
            if (cResult[4] === trailingIndicator) {
              if (cResult[5] === tmp5.icon) {
                let tmp15 = cResult[6];
              }
              if (cResult[7] === index) {
                if (cResult[8] === itemMeasurements) {
                  let tmp18 = cResult[9];
                }
                if (cResult[10] === activeIndex) {
                  if (cResult[11] === index) {
                    let tmp20 = cResult[12];
                  }
                  if (cResult[13] !== activeIndex) {
                    const fn3 = function q() {
                      const result = activeIndex.set(-1);
                    };
                    class V {
                      constructor() {
                        result = activeIndex.set(index);
                        return;
                      }
                    }
                    cResult[14] = fn3;
                    let tmp21 = fn3;
                  } else {
                    tmp21 = cResult[14];
                  }
                  class V {
                    constructor() {
                      result = activeIndex.set(index);
                      return;
                    }
                  }
                  if (!end) {
                    let border = !lastInSection.lastInSection;
                  }
                  if (border) {
                    border = tmp5.border;
                  }
                  if (start) {
                    start = tmp5.roundedTop;
                  }
                  if (end) {
                    end = tmp5.roundedBottom;
                  }
                  if (cResult[15] === animatedStyle) {
                    if (cResult[16] === tmp5.container) {
                      if (cResult[17] === tmp5.containerRefresh) {
                        if (cResult[18] === end) {
                          if (cResult[19] === border) {
                            if (cResult[20] === start) {
                              let tmp22 = cResult[21];
                            }
                            if (cResult[22] !== tmp9) {
                              class V {
                                constructor() {
                                  result = activeIndex.set(index);
                                  return;
                                }
                              }
                              tmp26[0] = tmp9;
                              const tmp27 = sharedValue(activeIndex, tmp26);
                              cResult[22] = tmp9;
                              cResult[23] = tmp27;
                              let tmp23 = tmp27;
                            } else {
                              tmp23 = cResult[23];
                            }
                            class V {
                              constructor() {
                                result = activeIndex.set(index);
                                return;
                              }
                            }
                            if (cResult[24] === label) {
                              if (cResult[25] === tmp5.label) {
                                if (cResult[26] === str3) {
                                  let tmp28 = cResult[27];
                                }
                                if (cResult[28] === tmp5.trailingIndicator) {
                                  if (cResult[29] === tmp15) {
                                    let tmp31 = cResult[30];
                                  }
                                  if (cResult[31] === str2) {
                                    if (cResult[32] === tmp18) {
                                      if (cResult[33] === tmp20) {
                                        if (cResult[34] === tmp21) {
                                          if (cResult[35] === onPress) {
                                            if (cResult[36] === animatedRef) {
                                              if (cResult[37] === tmp22) {
                                                if (cResult[38] === tmp23) {
                                                  if (cResult[39] === tmp28) {
                                                    if (cResult[40] === tmp31) {
                                                      let tmp36 = cResult[41];
                                                    }
                                                    return tmp36;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class V {
                                    constructor() {
                                      result = activeIndex.set(index);
                                      return;
                                    }
                                  }
                                  const obj4 = {
                                    ref: animatedRef,
                                    style: tmp22,
                                    onLayout: tmp18,
                                    onPressIn: tmp20,
                                    onPressOut: tmp21,
                                    onPress,
                                    accessibilityRole: str2,
                                    children: null,
                                  };
                                  const items = [tmp23, tmp28, tmp31];
                                  obj4.children = items;
                                  const tmp38 = backgroundColor(closure_7, obj4);
                                  cResult[31] = str2;
                                  cResult[32] = tmp18;
                                  cResult[33] = tmp20;
                                  cResult[34] = tmp21;
                                  cResult[35] = onPress;
                                  cResult[36] = animatedRef;
                                  cResult[37] = tmp22;
                                  cResult[38] = tmp23;
                                  cResult[39] = tmp28;
                                  cResult[40] = tmp31;
                                  cResult[41] = tmp38;
                                  tmp36 = tmp38;
                                }
                                class V {
                                  constructor() {
                                    result = activeIndex.set(index);
                                    return;
                                  }
                                }
                                let tmp32 = null != tmp15;
                                if (tmp32) {
                                  class V {
                                    constructor() {
                                      result = activeIndex.set(index);
                                      return;
                                    }
                                  }
                                  tmp35[0] = tmp5.trailingIndicator;
                                  tmp35[1] = tmp15;
                                  tmp32 = sharedValue(activeIndex, tmp35);
                                }
                                cResult[28] = tmp5.trailingIndicator;
                                cResult[29] = tmp15;
                                cResult[30] = tmp32;
                                tmp31 = tmp32;
                              }
                            }
                            const obj5 = {
                              animated: true,
                              variant: "text-md/medium",
                              style: tmp5.label,
                              color: str3,
                              children: label,
                            };
                            const tmp30 = sharedValue(index(tmp2[13]).Text, obj5);
                            cResult[24] = label;
                            cResult[25] = tmp5.label;
                            cResult[26] = str3;
                            cResult[27] = tmp30;
                            tmp28 = tmp30;
                          }
                        }
                      }
                    }
                  }
                  const items1 = [, , , , ,];
                  ({ container: arr[0], containerRefresh: arr[1] } = tmp5);
                  items1[2] = border;
                  items1[3] = start;
                  items1[4] = end;
                  items1[5] = animatedStyle;
                  cResult[15] = animatedStyle;
                  cResult[16] = tmp5.container;
                  cResult[17] = tmp5.containerRefresh;
                  cResult[18] = end;
                  cResult[19] = border;
                  cResult[20] = start;
                  cResult[21] = items1;
                  tmp22 = items1;
                }
                class V {
                  constructor() {
                    result = activeIndex.set(index);
                    return;
                  }
                }
                cResult[10] = activeIndex;
                cResult[11] = index;
                cResult[12] = V;
                tmp20 = V;
              }
              cResult[7] = index;
              cResult[8] = itemMeasurements;
              cResult[9] = tmp19;
              tmp18 = tmp19;
            }
            if (null != trailingIndicator) {
              class V {
                constructor() {
                  result = activeIndex.set(index);
                  return;
                }
              }
              const tmp16 = sharedValue(trailingIndicator, { size: "sm", color: null });
              const obj6 = { size: "sm", color: null };
            }
            cResult[4] = trailingIndicator;
            cResult[5] = tmp5.icon;
            cResult[6] = tmp16;
            tmp15 = tmp16;
          }
        }
      }
      if (null != IconComponent) {
        class V {
          constructor() {
            result = activeIndex.set(index);
            return;
          }
        }
        let tmp10 = sharedValue(IconComponent, { size: "sm", color: null });
        const obj7 = { size: "sm", color: null };
      } else {
        tmp10 = null;
        if (null != iconSource) {
          class V {
            constructor() {
              result = activeIndex.set(index);
              return;
            }
          }
          tmp13[0] = iconSource;
          tmp13[1] = tmp5.icon;
          tmp10 = sharedValue(animatedRef(tmp2[12]), tmp13);
        }
      }
      cResult[num] = IconComponent;
      cResult[1] = iconSource;
      iconSource = tmp5.icon;
      cResult[2] = iconSource;
      num = 3;
      cResult[3] = tmp10;
      const obj3 = {
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      };
    }
  : (accessibilityRole) => {
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
      const fn = function v() {
        return pan.get();
      };
      fn.__closure = { pan };
      fn.__workletHash = 2673706425541;
      fn.__initData = __initData4;
      const fn2 = function p(arg0, arg1) {
        if (null != arg1) {
          if (arg0 !== arg1) {
            const measureResult = ReanimatedRexport2.measure(animatedRef);
            if (null != measureResult) {
              ({ pageX, pageY, width, height } = measureResult);
              const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
              value = itemMeasurements.get();
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
      fn2.__workletHash = 15529529884805;
      fn2.__initData = __initData5;
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
      class A {
        constructor() {
          tmp = activeIndex.get() === index;
          if (!tmp) {
            tmp2 = closure_5;
            num = 1;
            tmp = 1 === closure_5.get();
          }
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[10]);
          str = "transparent";
          if (tmp) {
            str = backgroundColor;
          }
          obj1 = { backgroundColor: obj.withSpring(str, tmp3(tmp4[11]).SUBTLE_SPRING, "animate-always") };
          return obj1;
        }
      }
      const obj5 = index(pan[3]);
      A.__closure = {
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      };
      A.__workletHash = 3560470743946;
      A.__initData = __initData6;
      const animatedStyle = obj5.useAnimatedStyle(A);
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
        const result = activeIndex.set(index);
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
