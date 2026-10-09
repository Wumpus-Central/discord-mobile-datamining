// discord_app/modules/conjure/builder/native/ConjureModeTabBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 0.04;
let closure_10 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const TEXT_SPRING = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = fn(5091);
let closure_12 = createStyles.createStyles((borderRadius, arg1) => {
  const obj = {
    scrollContentContainer: { flexGrow: 1 },
    controlsContainer: {
      backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND,
      borderRadius: borderRadius + 4,
      paddingVertical: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" },
    indicator: null,
    indicatorHidden: null,
    item: null,
    itemFirst: null,
    itemLast: null,
    label: null,
    labelText: null,
    prefix: null,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND,
    borderRadius: borderRadius + 4,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  };
  obj.indicator = {
    flex: 1,
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND,
    borderRadius,
  };
  obj.indicatorHidden = { opacity: 0 };
  const obj3 = {
    flex: 1,
    backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND,
    borderRadius,
  };
  obj.item = {
    width: `${(1 / arg1) * 100}%`,
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    justifyContent: "center",
  };
  obj.itemFirst = { marginStart: 4, marginEnd: -4 };
  obj.itemLast = { marginStart: -4, marginEnd: 4 };
  const obj4 = {
    width: `${(1 / arg1) * 100}%`,
    borderRadius: nativeDefault.radii.lg,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    justifyContent: "center",
  };
  obj.label = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%" };
  obj.labelText = { flexShrink: 1 };
  obj.prefix = { flexShrink: 0 };
  return obj;
});
createStyles = fn(5091);
let closure_13 = createStyles.createStyleProperties({
  inactive: nativeDefault.colors.TEXT_MUTED,
  active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
});
const __initData = {
  code: "function ConjureModeTabBarTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}",
};
const __initData2 = {
  code: "function ConjureModeTabBarTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}",
};
const __initData3 = {
  code: "function ConjureModeTabBarTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}",
};
const __initData4 = {
  code: "function ConjureModeTabBarTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING}=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX+direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0){translateX=translateX+SEGMENT_SPACING;}else{if(clampedActiveIndex.get()===itemCount-1){translateX=translateX-SEGMENT_SPACING;}}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};}",
};
const __initData5 = {
  code: "function ConjureModeTabBarTsx5(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}",
};
const __initData6 = {
  code: "function ConjureModeTabBarTsx6(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null)previousIndicatorWidth.set(previous);}",
};
const __initData7 = {
  code: "function ConjureModeTabBarTsx7(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}",
};
const __initData8 = {
  code: "function ConjureModeTabBarTsx8(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING}=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0)translateX+=SEGMENT_SPACING;else if(clampedActiveIndex.get()===itemCount-1)translateX-=SEGMENT_SPACING;const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated)previousIndicatorWidth.set(indicatorWidth.get());return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};}",
};
fn(558);
const __initData9 = {
  code: 'function ConjureModeTabBarTsx9(){const{pressed,colors,index,activeIndex,withSpring,TEXT_SPRING}=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index){color=colors.active;}else{if(pressedIndex<0&&Math.round(activeIndex.get())===index){color=colors.active;}}return{color:withSpring(color,TEXT_SPRING,"animate-always")};}',
};
const __initData10 = {
  code: "function ConjureModeTabBarTsx10(){const{pressed,colors,index,activeIndex,withSpring,TEXT_SPRING}=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index)color=colors.active;else if(pressedIndex<0&&Math.round(activeIndex.get())===index)color=colors.active;return{color:withSpring(color,TEXT_SPRING,'animate-always')};}",
};
let obj3 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
const ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureModeTab(pressed) {
      const cResult = index(pressed[6]).c(53);
      ({ label, index } = pressed);
      ({ itemCount, activeIndex } = pressed);
      pressed = pressed.pressed;
      ({ extras, onSelect } = pressed);
      ({ itemStyle, labelStyle, labelTextStyle, prefixStyle } = pressed);
      let tmp4 = closure_13();
      inactive = tmp4;
      if (cResult[0] !== index) {
        const fn = function n(arg0) {
          return Math.round(arg0) === index;
        };
        cResult[0] = index;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      let obj = index(pressed[6]);
      const derivedStateFromSharedValue = index(pressed[11]).useDerivedStateFromSharedValue(activeIndex, tmp5);
      if (cResult[2] !== index) {
        const fn2 = function y(arg0) {
          return arg0 === index;
        };
        cResult[2] = index;
        cResult[3] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      let tmpResult = index(pressed[11]);
      const derivedStateFromSharedValue1 = index(pressed[11]).useDerivedStateFromSharedValue(pressed, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function w(arg0) {
          return arg0 >= 0;
        };
        cResult[4] = fn3;
      }
      index(pressed[11]);
      if (derivedStateFromSharedValue1) {
        inactive = tmp4.active;
      } else {
        inactive = tmp4.inactive;
      }
      const tmpResult4 = index(pressed[11]);
      class P {
        constructor() {
          value = pressed.get();
          active = closure_4.inactive;
          tmp4 = value === index;
          tmp2 = closure_4;
          if (!tmp4) {
            num = 0;
            tmp5 = value < 0;
            if (tmp5) {
              tmp6 = globalThis;
              _Math = Math;
              tmp7 = activeIndex;
              tmp5 = Math.round(activeIndex.get()) === tmp3;
            }
            tmp4 = tmp5;
          }
          if (tmp4) {
            active = tmp2.active;
          }
          obj = { color: null };
          obj2 = closure_0(closure_2[9]);
          obj.color = obj2.withSpring(active, closure_11, "animate-always");
          return obj;
        }
      }
      const tmpResult6 = index(pressed[8]);
      P.__closure = {
        pressed,
        colors: tmp4,
        index,
        activeIndex,
        withSpring: index(pressed[9]).withSpring,
        TEXT_SPRING,
      };
      P.__workletHash = 3817815187134;
      P.__initData = __initData9;
      const animatedStyle = tmpResult6.useAnimatedStyle(P);
      let onShowMenu;
      if (extras != null) {
        onShowMenu = extras.onShowMenu;
      }
      let menuLabel;
      if (extras != null) {
        menuLabel = extras.menuLabel;
      }
      if (cResult[5] === menuLabel) {
        if (cResult[8] !== onShowMenu) {
          class B {
            constructor(arg0) {
              if ("longpress" === pressed.nativeEvent.actionName) {
                tmp2 = null;
                if (onShowMenu != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
          cResult[8] = onShowMenu;
          cResult[9] = B;
        } else {
          class B {
            constructor(arg0) {
              if ("longpress" === pressed.nativeEvent.actionName) {
                tmp2 = null;
                if (onShowMenu != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
        }
        if (cResult[10] === index) {
          class B {
            constructor(arg0) {
              if ("longpress" === pressed.nativeEvent.actionName) {
                tmp2 = null;
                if (onShowMenu != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
        }
        const fn4 = function j() {
          if (derivedStateFromSharedValue) {
            if (null != onShowMenu) {
              let tmpResult = tmp();
            }
            return tmpResult;
          }
          tmpResult = onSelect(index);
        };
        cResult[10] = index;
        cResult[11] = onSelect;
        cResult[12] = onShowMenu;
        cResult[13] = derivedStateFromSharedValue;
        cResult[14] = fn4;
      }
      let tmp16;
      if (null != onShowMenu) {
        class B {
          constructor(arg0) {
            if ("longpress" === pressed.nativeEvent.actionName) {
              tmp2 = null;
              if (onShowMenu != null) {
                tmpResult = tmp();
              }
            }
            return;
          }
        }
        if (null != menuLabel) {
          class B {
            constructor(arg0) {
              if ("longpress" === pressed.nativeEvent.actionName) {
                tmp2 = null;
                if (onShowMenu != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
          tmp17[1] = menuLabel;
          const items = [tmp17];
          tmp16 = items;
        }
      }
      cResult[5] = menuLabel;
      cResult[6] = onShowMenu;
      cResult[7] = tmp16;
      const obj2 = { pressed, colors: tmp4, index, activeIndex, withSpring: index(pressed[9]).withSpring, TEXT_SPRING };
    }
  : function ConjureModeTab(index) {
      index = index.index;
      const activeIndex = index.activeIndex;
      const pressed = index.pressed;
      ({ extras, onSelect: noop } = index);
      let onShowMenu;
      let menuLabel;
      ({ label, itemCount, itemStyle, labelStyle, labelTextStyle, prefixStyle } = index);
      let tmp = closure_13();
      inactive = tmp;
      const derivedStateFromSharedValue = index(pressed[11]).useDerivedStateFromSharedValue(
        activeIndex,
        (arg0) => Math.round(arg0) === index,
      );
      let obj = index(pressed[11]);
      const derivedStateFromSharedValue1 = index(pressed[11]).useDerivedStateFromSharedValue(
        pressed,
        (arg0) => arg0 === index,
      );
      index(pressed[11]);
      if (derivedStateFromSharedValue1) {
        inactive = tmp.active;
      } else {
        inactive = tmp.inactive;
      }
      const obj2 = index(pressed[11]);
      const fn = function f() {
        value = pressed.get();
        let active = inactive.inactive;
        let tmp4 = value === index;
        if (!tmp4) {
          let tmp5 = value < 0;
          if (tmp5) {
            const _Math = Math;
            tmp5 = Math.round(activeIndex.get()) === tmp3;
          }
          tmp4 = tmp5;
        }
        if (tmp4) {
          active = inactive.active;
        }
        const obj = { color: spring.withSpring(active, closure_11, "animate-always") };
        return obj;
      };
      const tmp2Result = index(pressed[8]);
      fn.__closure = {
        pressed,
        colors: tmp,
        index,
        activeIndex,
        withSpring: index(pressed[9]).withSpring,
        TEXT_SPRING,
      };
      fn.__workletHash = 2267779316288;
      fn.__initData = __initData10;
      onShowMenu = undefined;
      const animatedStyle = tmp2Result.useAnimatedStyle(fn);
      if (extras != null) {
        onShowMenu = extras.onShowMenu;
      }
      menuLabel = undefined;
      if (extras != null) {
        menuLabel = extras.menuLabel;
      }
      let items = [menuLabel, onShowMenu];
      const items1 = [onShowMenu];
      const memo = noop.useMemo(() => {
        let tmp;
        if (null != onShowMenu) {
          if (null != menuLabel) {
            const obj = { name: "longpress", label: tmp2 };
            const items = [obj];
            tmp = items;
          }
        }
        return tmp;
      }, items);
      const obj4 = {
        style: itemStyle,
        onPress() {
          if (derivedStateFromSharedValue) {
            if (null != onShowMenu) {
              let tmpResult = tmp();
            }
            return tmpResult;
          }
          tmpResult = noop(index);
        },
        onLongPress: onShowMenu,
        onPressIn() {
          return pressed.set(index);
        },
        onPressOut() {
          return pressed.set(-1);
        },
        accessibilityRole: "tab",
        accessibilityState: { selected: derivedStateFromSharedValue },
        accessibilityActions: memo,
        onAccessibilityAction: noop.useCallback((nativeEvent) => {
          if ("longpress" === nativeEvent.nativeEvent.actionName) {
            if (onShowMenu != null) {
              tmp();
            }
          }
        }, items1),
        accessibilityHint: null,
        children: null,
      };
      const obj3 = { pressed, colors: tmp, index, activeIndex, withSpring: index(pressed[9]).withSpring, TEXT_SPRING };
      const tmp13 = inactive;
      let formatToPlainStringResult;
      if (tmp2Result2.isAndroid()) {
        const intl = tmp2(tmp3[12]).intl;
        const obj5 = { position: index + 1, tabCount: itemCount };
        formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[12]).t["4EsQA1"], obj5);
      }
      obj4.accessibilityHint = formatToPlainStringResult;
      const obj6 = { style: labelStyle, children: null };
      let prefix;
      if (extras != null) {
        prefix = extras.prefix;
      }
      let tmp12Result = null;
      if (null != prefix) {
        const obj7 = { variant: "text-sm/medium", color: "text-muted", style: prefixStyle, children: extras.prefix };
        tmp12Result = tmp12(tmp2(tmp3[13]).Text, obj7);
      }
      const items2 = [tmp12Result, ,];
      const obj8 = { animated: true, variant: "text-sm/semibold", style: null, lineClamp: 1, children: label };
      const items3 = [labelTextStyle, animatedStyle];
      obj8.style = items3;
      items2[1] = menuLabel(index(pressed[13]).Text, obj8);
      let renderTrailingIconResult;
      if (extras != null) {
        const renderTrailingIcon = extras.renderTrailingIcon;
        if (renderTrailingIcon != null) {
          renderTrailingIconResult = renderTrailingIcon(inactive);
        }
      }
      items2[2] = renderTrailingIconResult;
      obj6.children = items2;
      obj4.children = closure_8(onShowMenu, obj6);
      return menuLabel(tmp13, obj4);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureModeTabBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureModeTabBar(arg0) {
      const cResult = extras(pressedIndex[6]).c(51);
      ({ state, extras } = arg0);
      const activeIndex = state.activeIndex;
      ({ items, pressedIndex } = state);
      prefix = state.setActiveIndex;
      let obj = extras(pressedIndex[6]);
      const length = items.length;
      let tmp4 = closure_12(
        extras(pressedIndex[7]).useToken(activeIndex(pressedIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS),
        length,
      );
      closure_5 = tmp4;
      const obj2 = extras(pressedIndex[7]);
      const sharedValue = extras(pressedIndex[8]).useSharedValue(0);
      const obj3 = extras(pressedIndex[8]);
      const sharedValue1 = extras(pressedIndex[8]).useSharedValue(0);
      const obj4 = extras(pressedIndex[8]);
      const fn = function o() {
        return sharedValue.get();
      };
      fn.__closure = { indicatorWidth: sharedValue };
      fn.__workletHash = 21525623447;
      fn.__initData = __initData;
      const fn2 = function n(arg0, arg1) {
        if (null != arg1) {
          const result = sharedValue1.set(arg1);
        }
      };
      fn2.__closure = { previousIndicatorWidth: sharedValue1 };
      fn2.__workletHash = 4921607418503;
      fn2.__initData = __initData2;
      const animatedReaction = extras(pressedIndex[8]).useAnimatedReaction(fn, fn2);
      if (cResult[0] !== sharedValue) {
        const fn3 = function c(nativeEvent) {
          return sharedValue.set(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = sharedValue;
        cResult[1] = fn3;
        let tmp8 = fn3;
      } else {
        tmp8 = cResult[1];
      }
      closure_8 = tmp8;
      let obj5 = extras(pressedIndex[8]);
      const sharedValue2 = extras(pressedIndex[8]).useSharedValue(activeIndex.get());
      const tmpResult = extras(pressedIndex[8]);
      class G {
        constructor() {
          return Math.min(Math.max(activeIndex.get(), 0), length - 1);
        }
      }
      G.__closure = { activeIndex, itemCount: length };
      G.__workletHash = 5614191421067;
      G.__initData = __initData3;
      const derivedValue = extras(pressedIndex[8]).useDerivedValue(G);
      const tmpResult5 = extras(pressedIndex[8]);
      class O {
        constructor() {
          obj = closure_10;
          value = closure_10.get();
          obj2 = closure_6;
          diff = value - closure_9.get();
          result = diff * closure_6.get();
          obj3 = pressedIndex;
          tmp4 = pressedIndex.get() >= 0;
          if (tmp4) {
            value1 = obj3.get();
            tmp4 = value1 !== obj.get();
          }
          num = 1;
          sum = result;
          if (tmp4) {
            value2 = obj3.get();
            num2 = 1;
            if (value2 < obj.get()) {
              num2 = -1;
            }
            num3 = 0.02;
            sum = result + num2 * obj2.get() * 0.02;
            num = 1.04;
          }
          if (0 === obj.get()) {
            num5 = 4;
            sum1 = sum + 4;
          } else {
            tmp8 = length;
            sum1 = sum;
            if (obj.get() === length - 1) {
              num4 = 4;
              sum1 = sum - 4;
            }
          }
          obj4 = closure_7;
          value3 = obj2.get();
          tmp11 = value3 === closure_7.get();
          if (!tmp11) {
            result1 = obj4.set(obj2.get());
          }
          withSpringResult = sum1;
          if (tmp11) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            obj5 = closure_0(closure_2[9]);
            tmp16 = closure_10;
            withSpringResult = obj5.withSpring(sum1, closure_10);
          }
          obj1 = { transform: null };
          items = [,];
          items[0] = { translateX: withSpringResult };
          obj9 = { scaleX: null };
          obj8 = closure_0(closure_2[9]);
          obj9.scaleX = obj8.withSpring(num, closure_10);
          items[1] = obj9;
          obj1.transform = items;
          return obj1;
        }
      }
      const tmpResult6 = extras(pressedIndex[8]);
      O.__closure = {
        clampedActiveIndex: derivedValue,
        defaultActiveIndex: sharedValue2,
        indicatorWidth: sharedValue,
        pressedIndex,
        PRESSED_TRANSLATE_AMOUNT: sharedValue2,
        SEGMENT_SPACING: 4,
        itemCount: length,
        previousIndicatorWidth: sharedValue1,
        withSpring: extras(pressedIndex[9]).withSpring,
        INDICATOR_SPRING: derivedValue,
      };
      O.__workletHash = 10078056504670;
      O.__initData = __initData4;
      indicatorHidden = tmpResult6.useAnimatedStyle(O);
      if (cResult[2] === sharedValue2) {
        if (cResult[3] === tmp8) {
          if (cResult[4] === indicatorHidden) {
            if (cResult[5] === items) {
              if (cResult[6] === tmp4.indicator) {
                if (cResult[7] === tmp4.indicatorHidden) {
                  if (cResult[15] === activeIndex) {
                    if (cResult[16] === extras) {
                      if (cResult[17] === length) {
                        if (cResult[18] === items) {
                          if (cResult[19] === pressedIndex) {
                            if (cResult[20] === prefix) {
                              if (cResult[21] === tmp4.item) {
                                if (cResult[22] === tmp4.itemFirst) {
                                  if (cResult[23] === tmp4.itemLast) {
                                    if (cResult[24] === tmp4.label) {
                                      if (cResult[25] === tmp4.labelText) {
                                        if (cResult[26] === tmp4.prefix) {
                                          if (cResult[40] === tmp11) {
                                            if (cResult[41] === tmp4.indicatorContainer) {
                                              let tmp19 = cResult[42];
                                            }
                                            if (cResult[43] === tmp15) {
                                              if (cResult[44] === items.length) {
                                                if (cResult[45] === tmp4.controlsContainer) {
                                                  if (cResult[46] === tmp19) {
                                                    let tmp22 = cResult[47];
                                                  }
                                                  if (cResult[48] === tmp4.scrollContentContainer) {
                                                    if (cResult[49] === tmp22) {
                                                      let tmp26 = cResult[50];
                                                    }
                                                    return tmp26;
                                                  }
                                                  class F {
                                                    constructor(arg0, arg1) {
                                                      id = arg0.id;
                                                      if (0 === arg1) {
                                                        tmp3 = closure_5;
                                                        itemLast = closure_5.itemFirst;
                                                      } else {
                                                        tmp = length;
                                                        num = 1;
                                                        if (arg1 === length - 1) {
                                                          tmp2 = closure_5;
                                                          itemLast = closure_5.itemLast;
                                                        }
                                                      }
                                                      obj = {
                                                        label: arg0.label,
                                                        index: arg1,
                                                        itemCount: length,
                                                        activeIndex,
                                                        pressed: pressedIndex,
                                                        extras: null,
                                                        onSelect: null,
                                                        itemStyle: null,
                                                        labelStyle: null,
                                                        labelTextStyle: null,
                                                        prefixStyle: null,
                                                      };
                                                      tmp6 = undefined;
                                                      tmp4 = jsx;
                                                      tmp5 = ConjureModeTab;
                                                      if (extras != null) {
                                                        tmp6 = extras[id];
                                                      }
                                                      obj.extras = tmp6;
                                                      obj.onSelect = setActiveIndex;
                                                      items = [,];
                                                      items[0] = closure_5.item;
                                                      items[1] = itemLast;
                                                      obj.itemStyle = items;
                                                      ({
                                                        label: obj.labelStyle,
                                                        labelText: obj.labelTextStyle,
                                                        prefix: obj.prefixStyle,
                                                      } = closure_5);
                                                      return tmp4(tmp5, obj, id);
                                                    }
                                                  }
                                                  let str2;
                                                  if (tmpResult7.isIOS()) {
                                                    str2 = "tabbar";
                                                  }
                                                  let obj7 = {
                                                    horizontal: true,
                                                    accessibilityRole: str2,
                                                    alwaysBounceHorizontal: false,
                                                    contentContainerStyle: tmp4.scrollContentContainer,
                                                    children: tmp22,
                                                  };
                                                  const tmp27Result = sharedValue1(tmp28, obj7);
                                                  cResult[48] = tmp4.scrollContentContainer;
                                                  cResult[49] = tmp22;
                                                  cResult[50] = tmp27Result;
                                                  tmp26 = tmp27Result;
                                                  tmpResult7 = tmp(tmp2[10]);
                                                }
                                              }
                                            }
                                            class F {
                                              constructor(arg0, arg1) {
                                                id = arg0.id;
                                                if (0 === arg1) {
                                                  tmp3 = closure_5;
                                                  itemLast = closure_5.itemFirst;
                                                } else {
                                                  tmp = length;
                                                  num = 1;
                                                  if (arg1 === length - 1) {
                                                    tmp2 = closure_5;
                                                    itemLast = closure_5.itemLast;
                                                  }
                                                }
                                                obj = {
                                                  label: arg0.label,
                                                  index: arg1,
                                                  itemCount: length,
                                                  activeIndex,
                                                  pressed: pressedIndex,
                                                  extras: null,
                                                  onSelect: null,
                                                  itemStyle: null,
                                                  labelStyle: null,
                                                  labelTextStyle: null,
                                                  prefixStyle: null,
                                                };
                                                tmp6 = undefined;
                                                tmp4 = jsx;
                                                tmp5 = ConjureModeTab;
                                                if (extras != null) {
                                                  tmp6 = extras[id];
                                                }
                                                obj.extras = tmp6;
                                                obj.onSelect = setActiveIndex;
                                                items = [,];
                                                items[0] = closure_5.item;
                                                items[1] = itemLast;
                                                obj.itemStyle = items;
                                                ({
                                                  label: obj.labelStyle,
                                                  labelText: obj.labelTextStyle,
                                                  prefix: obj.prefixStyle,
                                                } = closure_5);
                                                return tmp4(tmp5, obj, id);
                                              }
                                            }
                                            let str;
                                            if (tmpResult8.isAndroid()) {
                                              str = "tablist";
                                            }
                                            const obj8 = {
                                              accessibilityRole: str,
                                              style: tmp4.controlsContainer,
                                              children: null,
                                            };
                                            const items1 = [tmp19, tmp15];
                                            obj8.children = items1;
                                            const tmp23Result = closure_8(tmp24, obj8, items.length);
                                            cResult[43] = tmp15;
                                            cResult[44] = items.length;
                                            cResult[45] = tmp4.controlsContainer;
                                            cResult[46] = tmp19;
                                            cResult[47] = tmp23Result;
                                            tmp22 = tmp23Result;
                                            tmpResult8 = tmp(tmp2[10]);
                                          }
                                          class F {
                                            constructor(arg0, arg1) {
                                              id = arg0.id;
                                              if (0 === arg1) {
                                                tmp3 = closure_5;
                                                itemLast = closure_5.itemFirst;
                                              } else {
                                                tmp = length;
                                                num = 1;
                                                if (arg1 === length - 1) {
                                                  tmp2 = closure_5;
                                                  itemLast = closure_5.itemLast;
                                                }
                                              }
                                              obj = {
                                                label: arg0.label,
                                                index: arg1,
                                                itemCount: length,
                                                activeIndex,
                                                pressed: pressedIndex,
                                                extras: null,
                                                onSelect: null,
                                                itemStyle: null,
                                                labelStyle: null,
                                                labelTextStyle: null,
                                                prefixStyle: null,
                                              };
                                              tmp6 = undefined;
                                              tmp4 = jsx;
                                              tmp5 = ConjureModeTab;
                                              if (extras != null) {
                                                tmp6 = extras[id];
                                              }
                                              obj.extras = tmp6;
                                              obj.onSelect = setActiveIndex;
                                              items = [,];
                                              items[0] = closure_5.item;
                                              items[1] = itemLast;
                                              obj.itemStyle = items;
                                              ({
                                                label: obj.labelStyle,
                                                labelText: obj.labelTextStyle,
                                                prefix: obj.prefixStyle,
                                              } = closure_5);
                                              return tmp4(tmp5, obj, id);
                                            }
                                          }
                                          const obj9 = {
                                            accessible: false,
                                            style: tmp4.indicatorContainer,
                                            children: tmp11,
                                          };
                                          const tmp21 = sharedValue1(sharedValue, obj9);
                                          cResult[40] = tmp11;
                                          cResult[41] = tmp4.indicatorContainer;
                                          cResult[42] = tmp21;
                                          tmp19 = tmp21;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (cResult[28] === activeIndex) {
                    if (cResult[29] === extras) {
                      if (cResult[30] === length) {
                        if (cResult[31] === pressedIndex) {
                          if (cResult[32] === prefix) {
                            if (cResult[33] === tmp4.item) {
                              if (cResult[34] === tmp4.itemFirst) {
                                if (cResult[35] === tmp4.itemLast) {
                                  if (cResult[36] === tmp4.label) {
                                    if (cResult[37] === tmp4.labelText) {
                                      if (cResult[38] === tmp4.prefix) {
                                        let tmp16 = cResult[39];
                                      }
                                      const mapped = items.map(tmp16);
                                      class F {
                                        constructor(arg0, arg1) {
                                          id = arg0.id;
                                          if (0 === arg1) {
                                            tmp3 = closure_5;
                                            itemLast = closure_5.itemFirst;
                                          } else {
                                            tmp = length;
                                            num = 1;
                                            if (arg1 === length - 1) {
                                              tmp2 = closure_5;
                                              itemLast = closure_5.itemLast;
                                            }
                                          }
                                          obj = {
                                            label: arg0.label,
                                            index: arg1,
                                            itemCount: length,
                                            activeIndex,
                                            pressed: pressedIndex,
                                            extras: null,
                                            onSelect: null,
                                            itemStyle: null,
                                            labelStyle: null,
                                            labelTextStyle: null,
                                            prefixStyle: null,
                                          };
                                          tmp6 = undefined;
                                          tmp4 = jsx;
                                          tmp5 = ConjureModeTab;
                                          if (extras != null) {
                                            tmp6 = extras[id];
                                          }
                                          obj.extras = tmp6;
                                          obj.onSelect = setActiveIndex;
                                          items = [,];
                                          items[0] = closure_5.item;
                                          items[1] = itemLast;
                                          obj.itemStyle = items;
                                          ({
                                            label: obj.labelStyle,
                                            labelText: obj.labelTextStyle,
                                            prefix: obj.prefixStyle,
                                          } = closure_5);
                                          return tmp4(tmp5, obj, id);
                                        }
                                      }
                                      cResult[16] = extras;
                                      cResult[17] = length;
                                      cResult[18] = items;
                                      cResult[19] = pressedIndex;
                                      cResult[20] = prefix;
                                      cResult[21] = tmp4.item;
                                      cResult[22] = tmp4.itemFirst;
                                      cResult[23] = tmp4.itemLast;
                                      cResult[24] = tmp4.label;
                                      ({ labelText: tmp3[25], prefix } = tmp4);
                                      cResult[26] = prefix;
                                      cResult[27] = mapped;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class F {
                    constructor(arg0, arg1) {
                      id = arg0.id;
                      if (0 === arg1) {
                        tmp3 = closure_5;
                        itemLast = closure_5.itemFirst;
                      } else {
                        tmp = length;
                        num = 1;
                        if (arg1 === length - 1) {
                          tmp2 = closure_5;
                          itemLast = closure_5.itemLast;
                        }
                      }
                      obj = {
                        label: arg0.label,
                        index: arg1,
                        itemCount: length,
                        activeIndex,
                        pressed: pressedIndex,
                        extras: null,
                        onSelect: null,
                        itemStyle: null,
                        labelStyle: null,
                        labelTextStyle: null,
                        prefixStyle: null,
                      };
                      tmp6 = undefined;
                      tmp4 = jsx;
                      tmp5 = ConjureModeTab;
                      if (extras != null) {
                        tmp6 = extras[id];
                      }
                      obj.extras = tmp6;
                      obj.onSelect = setActiveIndex;
                      items = [,];
                      items[0] = closure_5.item;
                      items[1] = itemLast;
                      obj.itemStyle = items;
                      ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                      return tmp4(tmp5, obj, id);
                    }
                  }
                  cResult[28] = activeIndex;
                  cResult[29] = extras;
                  cResult[30] = length;
                  cResult[31] = pressedIndex;
                  cResult[32] = prefix;
                  cResult[33] = tmp4.item;
                  cResult[34] = tmp4.itemFirst;
                  cResult[35] = tmp4.itemLast;
                  cResult[36] = tmp4.label;
                  cResult[37] = tmp4.labelText;
                  cResult[38] = tmp4.prefix;
                  cResult[39] = F;
                  tmp16 = F;
                }
              }
            }
          }
        }
      }
      if (cResult[9] === sharedValue2) {
        if (cResult[10] === tmp8) {
          if (cResult[11] === indicatorHidden) {
            if (cResult[12] === tmp4.indicator) {
              if (cResult[13] === tmp4.indicatorHidden) {
                let tmp12 = cResult[14];
              }
              const mapped1 = items.map(tmp12);
              class F {
                constructor(arg0, arg1) {
                  id = arg0.id;
                  if (0 === arg1) {
                    tmp3 = closure_5;
                    itemLast = closure_5.itemFirst;
                  } else {
                    tmp = length;
                    num = 1;
                    if (arg1 === length - 1) {
                      tmp2 = closure_5;
                      itemLast = closure_5.itemLast;
                    }
                  }
                  obj = {
                    label: arg0.label,
                    index: arg1,
                    itemCount: length,
                    activeIndex,
                    pressed: pressedIndex,
                    extras: null,
                    onSelect: null,
                    itemStyle: null,
                    labelStyle: null,
                    labelTextStyle: null,
                    prefixStyle: null,
                  };
                  tmp6 = undefined;
                  tmp4 = jsx;
                  tmp5 = ConjureModeTab;
                  if (extras != null) {
                    tmp6 = extras[id];
                  }
                  obj.extras = tmp6;
                  obj.onSelect = setActiveIndex;
                  items = [,];
                  items[0] = closure_5.item;
                  items[1] = itemLast;
                  obj.itemStyle = items;
                  ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                  return tmp4(tmp5, obj, id);
                }
              }
              cResult[3] = tmp8;
              cResult[4] = indicatorHidden;
              cResult[5] = items;
              ({ indicator: tmp3[6], indicatorHidden } = tmp4);
              cResult[7] = indicatorHidden;
              cResult[8] = mapped1;
            }
          }
        }
      }
      class L {
        constructor(arg0, arg1) {
          tmp = closure_9.get() === arg1;
          tmp2 = jsx;
          tmp3 = undefined;
          if (tmp) {
            tmp3 = closure_8;
          }
          obj = { onLayout: tmp3, style: null };
          items = [,];
          items[0] = closure_5.indicator;
          items[1] = tmp ? closure_11 : closure_5.indicatorHidden;
          obj.style = items;
          return tmp2(closure_1(closure_2[8]).View, obj, arg0.id);
        }
      }
      cResult[9] = sharedValue2;
      cResult[10] = tmp8;
      cResult[11] = indicatorHidden;
      cResult[12] = tmp4.indicator;
      cResult[13] = tmp4.indicatorHidden;
      cResult[14] = L;
      tmp12 = L;
    }
  : function ConjureModeTabBar(arg0) {
      ({ state, extras: require } = arg0);
      pressedIndex = undefined;
      let derivedValue;
      closure_11 = undefined;
      const activeIndex = state.activeIndex;
      ({ items, pressedIndex } = state);
      const setActiveIndex = state.setActiveIndex;
      const length = items.length;
      let tmp3 = closure_12(
        require("useToken").useToken(activeIndex(pressedIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS),
        length,
      );
      closure_5 = tmp3;
      let obj = require("useToken");
      const sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const obj2 = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      const obj3 = require("ReanimatedRexport");
      const fn = function x() {
        return sharedValue.get();
      };
      fn.__closure = { indicatorWidth: sharedValue };
      fn.__workletHash = 4450114368275;
      fn.__initData = __initData5;
      const fn2 = function c(arg0, arg1) {
        if (null != arg1) {
          const result = sharedValue1.set(arg1);
        }
      };
      fn2.__closure = { previousIndicatorWidth: sharedValue1 };
      fn2.__workletHash = 14934442796069;
      fn2.__initData = __initData6;
      const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn, fn2);
      const items1 = [sharedValue];
      closure_8 = setActiveIndex.useCallback(
        (nativeEvent) => sharedValue.set(nativeEvent.nativeEvent.layout.width),
        items1,
      );
      const obj4 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(activeIndex.get());
      let obj5 = require("ReanimatedRexport");
      class P {
        constructor() {
          return Math.min(Math.max(activeIndex.get(), 0), length - 1);
        }
      }
      P.__closure = { activeIndex, itemCount: length };
      P.__workletHash = 1185602676239;
      P.__initData = __initData7;
      derivedValue = require("ReanimatedRexport").useDerivedValue(P);
      let obj6 = require("ReanimatedRexport");
      class X {
        constructor() {
          obj = closure_10;
          value = closure_10.get();
          obj2 = closure_6;
          diff = value - closure_9.get();
          result = diff * closure_6.get();
          obj3 = pressedIndex;
          num = 1;
          sum = result;
          if (pressedIndex.get() >= 0) {
            value1 = obj3.get();
            num = 1;
            sum = result;
            if (value1 !== obj.get()) {
              value2 = obj3.get();
              num2 = 1;
              if (value2 < obj.get()) {
                num2 = -1;
              }
              tmp7 = c9;
              num = 1 + c9;
              num3 = 0.02;
              sum = result + num2 * obj2.get() * 0.02;
            }
          }
          if (0 === obj.get()) {
            num5 = 4;
            sum1 = sum + 4;
          } else {
            tmp8 = length;
            sum1 = sum;
            if (obj.get() === length - 1) {
              num4 = 4;
              sum1 = sum - 4;
            }
          }
          obj4 = closure_7;
          value3 = obj2.get();
          tmp11 = value3 === closure_7.get();
          if (!tmp11) {
            result1 = obj4.set(obj2.get());
          }
          withSpringResult = sum1;
          if (tmp11) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            obj5 = closure_0(closure_2[9]);
            tmp16 = closure_10;
            withSpringResult = obj5.withSpring(sum1, closure_10);
          }
          obj1 = { transform: null };
          items = [,];
          items[0] = { translateX: withSpringResult };
          obj9 = { scaleX: null };
          obj8 = closure_0(closure_2[9]);
          obj9.scaleX = obj8.withSpring(num, closure_10);
          items[1] = obj9;
          obj1.transform = items;
          return obj1;
        }
      }
      let obj7 = require("ReanimatedRexport");
      X.__closure = {
        clampedActiveIndex: derivedValue,
        defaultActiveIndex: sharedValue2,
        indicatorWidth: sharedValue,
        pressedIndex,
        PRESSED_TRANSLATE_AMOUNT: sharedValue2,
        SEGMENT_SPACING: 4,
        itemCount: length,
        previousIndicatorWidth: sharedValue1,
        withSpring: require("spring").withSpring,
        INDICATOR_SPRING: derivedValue,
      };
      X.__workletHash = 4191922249789;
      X.__initData = __initData8;
      closure_11 = obj7.useAnimatedStyle(X);
      const mapped = items.map((id, index) => {
        const tmp = sharedValue2.get() === index;
        let tmp3;
        if (tmp) {
          tmp3 = closure_8;
        }
        const obj = { onLayout: tmp3, style: null };
        const items = [closure_5.indicator, tmp ? closure_11 : closure_5.indicatorHidden];
        obj.style = items;
        return React5(ReanimatedRexportDefault.View, obj, id.id);
      });
      const mapped1 = items.map((id, index) => {
        id = id.id;
        if (0 === index) {
          let itemLast = closure_5.itemFirst;
        } else if (index === length - 1) {
          itemLast = closure_5.itemLast;
        }
        const obj = {
          label: id.label,
          index,
          itemCount: length,
          activeIndex,
          pressed: pressedIndex,
          extras: null,
          onSelect: null,
          itemStyle: null,
          labelStyle: null,
          labelTextStyle: null,
          prefixStyle: null,
        };
        let tmp6;
        if (_require != null) {
          tmp6 = _require[id];
        }
        obj.extras = tmp6;
        obj.onSelect = setActiveIndex;
        const items = [closure_5.item, itemLast];
        obj.itemStyle = items;
        ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
        return React5(closure_24, obj, id);
      });
      const obj8 = {
        clampedActiveIndex: derivedValue,
        defaultActiveIndex: sharedValue2,
        indicatorWidth: sharedValue,
        pressedIndex,
        PRESSED_TRANSLATE_AMOUNT: sharedValue2,
        SEGMENT_SPACING: 4,
        itemCount: length,
        previousIndicatorWidth: sharedValue1,
        withSpring: require("spring").withSpring,
        INDICATOR_SPRING: derivedValue,
      };
      const tmp12 = closure_5;
      let str;
      if (obj9.isIOS()) {
        str = "tabbar";
      }
      const obj10 = {
        horizontal: true,
        accessibilityRole: str,
        alwaysBounceHorizontal: false,
        contentContainerStyle: tmp3.scrollContentContainer,
        children: null,
      };
      obj9 = require("PlatformUtils");
      const tmp13 = closure_8;
      let str2;
      if (tmpResult.isAndroid()) {
        str2 = "tablist";
      }
      const obj11 = { accessibilityRole: str2, style: tmp3.controlsContainer, children: null };
      const items2 = [
        sharedValue1(sharedValue, { accessible: false, style: tmp3.indicatorContainer, children: mapped }),
        mapped1,
      ];
      obj11.children = items2;
      obj10.children = tmp13(sharedValue, obj11, items.length);
      return sharedValue1(tmp12, obj10);
    };
