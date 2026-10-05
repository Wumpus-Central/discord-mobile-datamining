// discord_app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ReanimatedRexport = ReanimatedRexport2;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_8 = createStyles.createStyles((arg0) => {
  let TEXT_STRONG;
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
    roundedTop: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg },
    roundedBottom: { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg },
    border: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE },
    pressed: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
    icon: { width: 20, height: 20, tintColor: TEXT_STRONG },
    label: { flexShrink: 1 },
    trailingIndicator: { marginLeft: "auto" },
  };
  ({
    padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING,
    minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  });
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let IconComponent;
      let accessibilityRole;
      let end;
      let iconSource;
      let index;
      let items;
      let label;
      let onPress;
      let pan;
      let start;
      let state;
      let tmp10;
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
      let str2 = "button";
      if (undefined !== accessibilityRole) {
        str2 = accessibilityRole;
      }
      const tmpResult = index(pan[3]);
      const animatedRef = tmpResult.useAnimatedRef();
      const tmp5 = closure_8(str);
      pan = state.pan;
      const itemMeasurements = state.itemMeasurements;
      const activeIndex = state.activeIndex;
      const tmpResult4 = index(pan[3]);
      const sharedValue = tmpResult4.useSharedValue(0);
      const fn = function _() {
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
      ({
        measure: index(pan[3]).measure,
        ref: animatedRef,
        index,
        INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET,
        itemMeasurements,
        INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET,
        INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET,
        INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET,
        INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET,
      });
      const animatedReaction = tmpResult5.useAnimatedReaction(fn, fn2);
      const backgroundColor = tmp5.pressed.backgroundColor;
      const tmpResult6 = index(pan[3]);
      class M {
        constructor() {
          let str = "transparent";
          const tmp = activeIndex.get() === index || 1 === sharedValue.get();
          const withSpring = spring.withSpring;
          spring;
          if (tmp) {
            str = backgroundColor;
          }
          const obj = { backgroundColor: withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
          return obj;
        }
      }
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
      ({
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      });
      const animatedStyle = tmpResult6.useAnimatedStyle(M);
      if (cResult[0] === IconComponent) {
        if (cResult[1] === iconSource) {
          let tmp9;
          let tmp16;
          if (cResult[2] === tmp5.icon) {
            tmp9 = cResult[3];
          }
          if (cResult[4] === trailingIndicator) {
            let tmp15;
            if (cResult[5] === tmp5.icon) {
              tmp15 = cResult[6];
            }
            if (cResult[7] === index) {
              let tmp18;
              if (cResult[8] === itemMeasurements) {
                tmp18 = cResult[9];
              }
              if (cResult[10] === activeIndex) {
                let tmp20;
                let tmp21;
                if (cResult[11] === index) {
                  tmp20 = cResult[12];
                }
                if (cResult[13] !== activeIndex) {
                  const fn3 = function q() {
                    const result = activeIndex.set(-1);
                  };
                  class V {
                    constructor() {
                      const result = activeIndex.set(index);
                    }
                  }
                  cResult[14] = fn3;
                  tmp21 = fn3;
                } else {
                  tmp21 = cResult[14];
                }
                class V {
                  constructor() {
                    const result = activeIndex.set(index);
                  }
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
                        if (cResult[19] === tmp22) {
                          let tmp23;
                          let tmp24;
                          if (cResult[20] === start) {
                            tmp23 = cResult[21];
                          }
                          if (cResult[22] !== tmp9) {
                            class V {
                              constructor() {
                                const result = activeIndex.set(index);
                              }
                            }
                            tmp27[0] = tmp9;
                            const tmp28 = sharedValue(activeIndex, tmp27);
                            cResult[22] = tmp9;
                            cResult[23] = tmp28;
                            tmp24 = tmp28;
                          } else {
                            tmp24 = cResult[23];
                          }
                          class V {
                            constructor() {
                              const result = activeIndex.set(index);
                            }
                          }
                          if (cResult[24] === label) {
                            if (cResult[25] === tmp5.label) {
                              let tmp29;
                              if (cResult[26] === str3) {
                                tmp29 = cResult[27];
                              }
                              if (cResult[28] === tmp5.trailingIndicator) {
                                let tmp32;
                                if (cResult[29] === tmp15) {
                                  tmp32 = cResult[30];
                                }
                                if (cResult[31] === str2) {
                                  if (cResult[32] === tmp18) {
                                    if (cResult[33] === tmp20) {
                                      if (cResult[34] === tmp21) {
                                        if (cResult[35] === onPress) {
                                          if (cResult[36] === animatedRef) {
                                            if (cResult[37] === tmp23) {
                                              if (cResult[38] === tmp24) {
                                                if (cResult[39] === tmp29) {
                                                  let tmp37;
                                                  if (cResult[40] === tmp32) {
                                                    tmp37 = cResult[41];
                                                  }
                                                  return tmp37;
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
                                    const result = activeIndex.set(index);
                                  }
                                }
                                const obj4 = {
                                  ref: animatedRef,
                                  style: tmp23,
                                  onLayout: tmp18,
                                  onPressIn: tmp20,
                                  onPressOut: tmp21,
                                  onPress,
                                  accessibilityRole: str2,
                                  children: items,
                                };
                                items = [tmp24, tmp29, tmp32];
                                const tmp39 = backgroundColor(closure_7, obj4);
                                cResult[31] = str2;
                                cResult[32] = tmp18;
                                cResult[33] = tmp20;
                                cResult[34] = tmp21;
                                cResult[35] = onPress;
                                cResult[36] = animatedRef;
                                cResult[37] = tmp23;
                                cResult[38] = tmp24;
                                cResult[39] = tmp29;
                                cResult[40] = tmp32;
                                cResult[41] = tmp39;
                                tmp37 = tmp39;
                              }
                              class V {
                                constructor() {
                                  const result = activeIndex.set(index);
                                }
                              }
                              let tmp33 = null != tmp15;
                              if (tmp33) {
                                class V {
                                  constructor() {
                                    const result = activeIndex.set(index);
                                  }
                                }
                                tmp36[0] = tmp5.trailingIndicator;
                                tmp36[1] = tmp15;
                                tmp33 = sharedValue(activeIndex, tmp36);
                              }
                              cResult[28] = tmp5.trailingIndicator;
                              cResult[29] = tmp15;
                              cResult[30] = tmp33;
                              tmp32 = tmp33;
                            }
                          }
                          const obj5 = {
                            animated: true,
                            variant: "text-md/medium",
                            style: tmp5.label,
                            color: str3,
                            children: label,
                          };
                          const tmp31 = sharedValue(index(pan[13]).Text, obj5);
                          cResult[24] = label;
                          cResult[25] = tmp5.label;
                          cResult[26] = str3;
                          cResult[27] = tmp31;
                          tmp29 = tmp31;
                        }
                      }
                    }
                  }
                }
                const items1 = [, , , , ,];
                ({ container: arr[0], containerRefresh: arr[1] } = tmp5);
                items1[2] = tmp22;
                items1[3] = start;
                items1[4] = end;
                items1[5] = animatedStyle;
                cResult[15] = animatedStyle;
                cResult[16] = tmp5.container;
                cResult[17] = tmp5.containerRefresh;
                cResult[18] = end;
                cResult[19] = tmp22;
                cResult[20] = start;
                cResult[21] = items1;
                tmp23 = items1;
              }
              class V {
                constructor() {
                  const result = activeIndex.set(index);
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
            const obj6 = { size: "sm", color: null };
            class V {
              constructor() {
                const result = activeIndex.set(index);
              }
            }
            tmp16 = sharedValue(trailingIndicator, obj6);
          }
          cResult[4] = trailingIndicator;
          cResult[5] = tmp5.icon;
          cResult[6] = tmp16;
          tmp15 = tmp16;
        }
      }
      if (null != IconComponent) {
        const obj7 = { size: "sm", color: null };
        class V {
          constructor() {
            const result = activeIndex.set(index);
          }
        }
        tmp10 = sharedValue(IconComponent, obj7);
      } else {
        tmp10 = null;
        if (null != iconSource) {
          class V {
            constructor() {
              const result = activeIndex.set(index);
            }
          }
          tmp13[0] = iconSource;
          tmp13[1] = tmp5.icon;
          tmp10 = sharedValue(animatedRef(tmp2[12]), tmp13);
        }
      }
      cResult[0] = IconComponent;
      cResult[1] = iconSource;
      cResult[2] = tmp5.icon;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : (accessibilityRole) => {
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
      const obj2 = index(pan[3]);
      const sharedValue = obj2.useSharedValue(0);
      const fn = function v() {
        return pan.get();
      };
      fn.__closure = { pan };
      fn.__workletHash = 2673706425541;
      fn.__initData = __initData4;
      const fn2 = function p(arg0, arg1) {
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
      ({
        measure: index(pan[3]).measure,
        ref: animatedRef,
        index,
        INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET,
        itemMeasurements,
        INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET,
        INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET,
        INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET,
        INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET,
      });
      const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
      const backgroundColor = tmp4.pressed.backgroundColor;
      const obj5 = index(pan[3]);
      class A {
        constructor() {
          let str = "transparent";
          const tmp = activeIndex.get() === index || 1 === sharedValue.get();
          const withSpring = spring.withSpring;
          spring;
          if (tmp) {
            str = backgroundColor;
          }
          const obj = { backgroundColor: withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
          return obj;
        }
      }
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
      ({
        activeIndex,
        index,
        pressed: sharedValue,
        withSpring: index(pan[10]).withSpring,
        backgroundColor,
        SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING,
      });
      const animatedStyle = obj5.useAnimatedStyle(A);
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
        const result = activeIndex.set(index);
      }, items1);
      const obj10 = {
        ref: animatedRef,
        style: items3,
        onLayout: callback,
        onPressIn: callback1,
        onPressOut: callback2,
        onPress,
        accessibilityRole: str,
        children: items4,
      };
      items3 = [, , , , ,];
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
      items4 = [sharedValue(activeIndex, { children: tmp8 }), ,];
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
    };
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = tmp4;
