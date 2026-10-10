// === Module 9118: GameProfileFloatingNav ===

// Module 9118 (GameProfileFloatingNav)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Text_Text from "Text/Text" /* 5088 */;
import timing from "timing" /* 5093 */;
import native from "native" /* 8541 */;
import YouBannerDecorations from "YouBannerDecorations" /* 9119 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 13001 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["game"];
get_ActivityIndicator = fn(17);
({ View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const PX_8 = nativeDefault.space.PX_8;
const PX_48 = nativeDefault.space.PX_48;
const PX_6 = nativeDefault.space.PX_6;
let c15 = 320;
const Easing = fn(4850).Easing;
const easing = Easing.inOut(fn(4850).Easing.cubic);
const createStyles = fn(5092);
let closure_17 = createStyles.createStyles((bottom) => {
  const obj = { wrap: null, scrim: null, pill: null, pillBlur: null, pillRow: null, selection: null, item: null, label: null };
  const obj2 = {};
  const merged = Object.assign(closure_1_8.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj.wrap = obj2;
  const merged1 = Object.assign(closure_1_8.absoluteFillObject);
  obj.scrim = {};
  const obj4 = { marginBottom: YouBannerDecorations.getFloatingNavBottomMargin(bottom), padding: PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, flexDirection: "row", alignItems: "center" };
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.pill = obj4;
  const obj6 = {};
  const merged3 = Object.assign(closure_1_8.absoluteFillObject);
  obj6.borderRadius = nativeDefault.radii.lg;
  obj6.overflow = "hidden";
  obj.pillBlur = obj6;
  obj.pillRow = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  const rect = { position: "absolute", top: 0, bottom: 0, insetInlineStart: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.selection = rect;
  const obj3 = {};
  const obj7 = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  obj.item = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 };
  const obj8 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 };
  obj.label = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavItem(arg0) {
  const cResult = c.c(23);
  ({ IconComponent, label, selected, onPress, onLayout } = arg0);
  ({ style, labelStyle } = arg0);
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  ({ containerRef, width } = youScreenNavIconMeasurement);
  if (cResult[0] !== onLayout) {
    const fn = function l(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      onLayout({ x: layout.x, width: layout.width });
    };
    cResult[0] = onLayout;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== width) {
    const obj3 = { width };
    cResult[2] = width;
    cResult[3] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp6) {
      let tmp7 = cResult[6];
    }
    if (cResult[7] !== selected) {
      const obj4 = { selected };
      cResult[7] = selected;
      cResult[8] = obj4;
      let tmp8 = obj4;
    } else {
      tmp8 = cResult[8];
    }
    if (cResult[9] !== IconComponent) {
      const obj5 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
      const tmp12 = options(IconComponent, obj5);
      cResult[9] = IconComponent;
      cResult[10] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[10];
    }
    if (cResult[11] === label) {
      if (cResult[12] === labelStyle) {
        let tmp13 = cResult[13];
      }
      if (cResult[14] === containerRef) {
        if (cResult[15] === tmp5) {
          if (cResult[16] === label) {
            if (cResult[17] === onPress) {
              if (cResult[18] === tmp7) {
                if (cResult[19] === tmp8) {
                  if (cResult[20] === tmp9) {
                    if (cResult[21] === tmp13) {
                      let tmp16 = cResult[22];
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
        }
      }
      const obj6 = { ref: containerRef, style: tmp7, accessibilityRole: "tab", accessibilityLabel: label, accessibilityState: tmp8, onPress, onLayout: tmp5, hitSlop: nativeDefault.space.PX_8, children: null };
      const items = [tmp9, tmp13];
      obj6.children = items;
      const tmp19 = collapsed(native.PressableScale, obj6);
      cResult[14] = containerRef;
      cResult[15] = tmp5;
      cResult[16] = label;
      cResult[17] = onPress;
      cResult[18] = tmp7;
      cResult[19] = tmp8;
      cResult[20] = tmp9;
      cResult[21] = tmp13;
      cResult[22] = tmp19;
      tmp16 = tmp19;
    }
    const obj7 = { style: labelStyle, variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 2, children: label };
    const tmp15 = options(Text_Text.Text, obj7);
    cResult[11] = label;
    cResult[12] = labelStyle;
    cResult[13] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [style, tmp6];
  cResult[4] = style;
  cResult[5] = tmp6;
  cResult[6] = items1;
  tmp7 = items1;
}) : (function NavItem(arg0) {
  ({ label, onLayout } = arg0);
  ({ IconComponent, selected, onPress, style, labelStyle } = arg0);
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  const items = [onLayout];
  ({ containerRef, width } = youScreenNavIconMeasurement);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onLayout({ x: layout.x, width: layout.width });
  }, items);
  const obj2 = { ref: containerRef, style: null, accessibilityRole: "tab", accessibilityLabel: label, accessibilityState: { selected }, onPress, onLayout: callback, hitSlop: nativeDefault.space.PX_8, children: null };
  const items1 = [style, { width }];
  obj2.style = items1;
  const items2 = [options(IconComponent, { size: "md", color: nativeDefault.colors.ICON_STRONG }), options(Text_Text.Text, { style: labelStyle, variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 2, children: label })];
  obj2.children = items2;
  return collapsed(native.PressableScale, obj2);
});
const __initData = { code: "function GameProfileFloatingNavTsx1(){const{selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE}=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};}" };
const __initData2 = { code: "function GameProfileFloatingNavTsx2(){const{selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE}=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};}" };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingNav(arg0) {
  const cResult = selectedTab(576).c(37);
  ({ navigation, onLayout } = arg0);
  selectedTab = navigation.selectedTab;
  const selectTab = navigation.selectTab;
  const tmp5 = closure_17(selectTab(1631)().bottom);
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GameProfileFloatingNav" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = selectedTab(576);
  const isGameProfileCommunitiesMobileEnabled = selectedTab(13007).useIsGameProfileCommunitiesMobileEnabled(first);
  const tmpResult = selectedTab(13007);
  const token = selectedTab(4818).useToken(tmp4(587).colors.BACKGROUND_BASE_LOWEST);
  if (cResult[1] !== token) {
    let obj5 = tmp4(683)(token);
    const hexResult = tmp4(683)(token).alpha(0).hex();
    cResult[1] = token;
    cResult[2] = hexResult;
    let tmp9 = hexResult;
    const alphaResult = tmp4(683)(token).alpha(0);
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === token) {
    if (cResult[4] === tmp9) {
      let tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = {};
      cResult[6] = obj3;
      let tmp12 = obj3;
    } else {
      tmp12 = cResult[6];
    }
    const tmp15 = _slicedToArray(noop.useState(tmp12), 2);
    closure_3 = tmp15[1];
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          tmp = closure_3((arg0) => {
            let x;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = x;
              let tmp6 = obj;
            } else {
              let width;
              if (tmp2 != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
          return;
        }
      }
      cResult[7] = P;
    } else {
      class P {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          tmp = closure_3((arg0) => {
            let x;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = x;
              let tmp6 = obj;
            } else {
              let width;
              if (tmp2 != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
          return;
        }
      }
    }
    closure_4 = P;
    _slicedToArray = tmp17;
    class A {
      constructor() {
        tmp = closure_5;
        if (null == closure_5) {
          obj = { opacity: 0 };
        } else {
          obj = { opacity: 1, width: null, transform: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj2 = closure_0(closure_2[18]);
          obj1 = { duration: null, easing: null };
          tmp4 = c15;
          obj1.duration = c15;
          tmp5 = closure_16;
          obj1.easing = closure_16;
          obj.width = obj2.withTiming(tmp.width, obj1);
          obj7 = { translateX: null };
          obj5 = closure_0(closure_2[18]);
          obj8 = { duration: null, easing: null };
          obj8.duration = c15;
          obj8.easing = closure_16;
          obj7.translateX = obj5.withTiming(tmp.x, obj8);
          items = [];
          items[0] = obj7;
          obj.transform = items;
        }
        return obj;
      }
    }
    let obj4 = { selectedLayout: tmp15[0][selectedTab], withTiming: tmp(5093).withTiming, SELECTION_MS: v320, SELECTION_EASE: easing };
    A.__closure = obj4;
    A.__workletHash = 14859052305644;
    A.__initData = __initData;
    const animatedStyle = tmp(4850).useAnimatedStyle(A);
    if (isGameProfileCommunitiesMobileEnabled) {
      class P {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          tmp = closure_3((arg0) => {
            let x;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = x;
              let tmp6 = obj;
            } else {
              let width;
              if (tmp2 != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
          return;
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            tmp = closure_3((arg0) => {
              let x;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = x;
                let tmp6 = obj;
              } else {
                let width;
                if (tmp2 != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
            return;
          }
        }
        tmp23[0] = tmp(8914).GameProfileNavTab.OVERVIEW;
        tmp23[1] = tmp(9211).GameControllerIcon;
        const intl = tmp(1126).intl;
        tmp23[2] = intl.string(tmp(1126).t.qHmbyh);
        cResult[8] = tmp23;
      } else {
        class P {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            tmp = closure_3((arg0) => {
              let x;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = x;
                let tmp6 = obj;
              } else {
                let width;
                if (tmp2 != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
            return;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            tmp = closure_3((arg0) => {
              let x;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = x;
                let tmp6 = obj;
              } else {
                let width;
                if (tmp2 != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
            return;
          }
        }
        tmp24[0] = tmp23;
        let obj6 = { tab: tmp(8914).GameProfileNavTab.COMMUNITIES, IconComponent: tmp(8216).GroupIcon, label: null };
        const intl2 = tmp(1126).intl;
        obj6.label = intl2.string(tmp(1126).t["3xFZEo"]);
        tmp24[1] = obj6;
        cResult[9] = tmp24;
      } else {
        class P {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            tmp = closure_3((arg0) => {
              let x;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = x;
                let tmp6 = obj;
              } else {
                let width;
                if (tmp2 != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
            return;
          }
        }
      }
      if (cResult[10] === tmp11) {
        class P {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            tmp = closure_3((arg0) => {
              let x;
              if (arg0[closure_0] != null) {
                x = tmp2.x;
              }
              if (x !== x.x) {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = x;
                let tmp6 = obj;
              } else {
                let width;
                if (tmp2 != null) {
                  width = tmp2.width;
                }
                tmp6 = arg0;
              }
              return tmp6;
            });
            return;
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              tmp = closure_3((arg0) => {
                let x;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = x;
                  let tmp6 = obj;
                } else {
                  let width;
                  if (tmp2 != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
              return;
            }
          }
          const tmp29 = closure_9(tmp(8541).BackgroundBlurFill, {});
          cResult[13] = tmp29;
          const tmp28 = tmp29;
        } else {
          class P {
            constructor(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              tmp = closure_3((arg0) => {
                let x;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = x;
                  let tmp6 = obj;
                } else {
                  let width;
                  if (tmp2 != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
              return;
            }
          }
        }
        if (cResult[14] !== tmp5.pillBlur) {
          class P {
            constructor(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              tmp = closure_3((arg0) => {
                let x;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = x;
                  let tmp6 = obj;
                } else {
                  let width;
                  if (tmp2 != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
              return;
            }
          }
          const obj7 = { style: tmp5.pillBlur, pointerEvents: "none", children: tmp28 };
          const tmp32 = closure_9(closure_7, obj7);
          cResult[14] = tmp5.pillBlur;
          cResult[15] = tmp32;
        } else {
          class P {
            constructor(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              tmp = closure_3((arg0) => {
                let x;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = x;
                  let tmp6 = obj;
                } else {
                  let width;
                  if (tmp2 != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
              return;
            }
          }
        }
        if (cResult[16] === animatedStyle) {
          class P {
            constructor(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              tmp = closure_3((arg0) => {
                let x;
                if (arg0[closure_0] != null) {
                  x = tmp2.x;
                }
                if (x !== x.x) {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = x;
                  let tmp6 = obj;
                } else {
                  let width;
                  if (tmp2 != null) {
                    width = tmp2.width;
                  }
                  tmp6 = arg0;
                }
                return tmp6;
              });
              return;
            }
          }
          if (cResult[19] === selectTab) {
            class P {
              constructor(arg0, arg1) {
                closure_0 = arg0;
                closure_1 = arg1;
                tmp = closure_3((arg0) => {
                  let x;
                  if (arg0[closure_0] != null) {
                    x = tmp2.x;
                  }
                  if (x !== x.x) {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_0] = x;
                    let tmp6 = obj;
                  } else {
                    let width;
                    if (tmp2 != null) {
                      width = tmp2.width;
                    }
                    tmp6 = arg0;
                  }
                  return tmp6;
                });
                return;
              }
            }
          }
          const obj8 = {
            children: tmp24.map((IconComponent) => {
                      const tab = IconComponent.tab;
                      return closure_1_9(closure_1_18, {
                        IconComponent: IconComponent.IconComponent,
                        label: IconComponent.label,
                        selected: tab === tab,
                        onPress() {
                          return selectTab(tab);
                        },
                        onLayout(arg0) {
                          return closure_4(tab, arg0);
                        },
                        style: closure_2.item,
                        labelStyle: closure_2.label
                      }, tab);
                    })
          };
          cResult[19] = selectTab;
          cResult[20] = selectedTab;
          cResult[21] = tmp5.item;
          cResult[22] = tmp5.label;
          cResult[23] = closure_9(tmp(13001).YouScreenNavIconMeasurer, obj8);
          class A {
            constructor() {
              tmp = closure_5;
              if (null == closure_5) {
                obj = { opacity: 0 };
              } else {
                obj = { opacity: 1, width: null, transform: null };
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj2 = closure_0(closure_2[18]);
                obj1 = { duration: null, easing: null };
                tmp4 = c15;
                obj1.duration = c15;
                tmp5 = closure_16;
                obj1.easing = closure_16;
                obj.width = obj2.withTiming(tmp.width, obj1);
                obj7 = { translateX: null };
                obj5 = closure_0(closure_2[18]);
                obj8 = { duration: null, easing: null };
                obj8.duration = c15;
                obj8.easing = closure_16;
                obj7.translateX = obj5.withTiming(tmp.x, obj8);
                items = [];
                items[0] = obj7;
                obj.transform = items;
              }
              return obj;
            }
          }
          const tmp37 = closure_9(tmp(13001).YouScreenNavIconMeasurer, obj8);
        }
        const obj9 = { style: null, pointerEvents: "none" };
        let items = [tmp5.selection, animatedStyle];
        obj9.style = items;
        const tmp35 = closure_9(tmp4(4850).View, obj9);
        cResult[16] = animatedStyle;
        cResult[17] = tmp5.selection;
        class A {
          constructor() {
            tmp = closure_5;
            if (null == closure_5) {
              obj = { opacity: 0 };
            } else {
              obj = { opacity: 1, width: null, transform: null };
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[18]);
              obj1 = { duration: null, easing: null };
              tmp4 = c15;
              obj1.duration = c15;
              tmp5 = closure_16;
              obj1.easing = closure_16;
              obj.width = obj2.withTiming(tmp.width, obj1);
              obj7 = { translateX: null };
              obj5 = closure_0(closure_2[18]);
              obj8 = { duration: null, easing: null };
              obj8.duration = c15;
              obj8.easing = closure_16;
              obj7.translateX = obj5.withTiming(tmp.x, obj8);
              items = [];
              items[0] = obj7;
              obj.transform = items;
            }
            return obj;
          }
        }
        cResult[18] = tmp35;
      }
      const obj10 = { colors: tmp11, style: tmp5.scrim, pointerEvents: "none" };
      cResult[10] = tmp11;
      cResult[11] = tmp5.scrim;
      class A {
        constructor() {
          tmp = closure_5;
          if (null == closure_5) {
            obj = { opacity: 0 };
          } else {
            obj = { opacity: 1, width: null, transform: null };
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj2 = closure_0(closure_2[18]);
            obj1 = { duration: null, easing: null };
            tmp4 = c15;
            obj1.duration = c15;
            tmp5 = closure_16;
            obj1.easing = closure_16;
            obj.width = obj2.withTiming(tmp.width, obj1);
            obj7 = { translateX: null };
            obj5 = closure_0(closure_2[18]);
            obj8 = { duration: null, easing: null };
            obj8.duration = c15;
            obj8.easing = closure_16;
            obj7.translateX = obj5.withTiming(tmp.x, obj8);
            items = [];
            items[0] = obj7;
            obj.transform = items;
          }
          return obj;
        }
      }
      const tmp27 = closure_9(tmp4(5391), obj10);
    } else {
      class P {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          tmp = closure_3((arg0) => {
            let x;
            if (arg0[closure_0] != null) {
              x = tmp2.x;
            }
            if (x !== x.x) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = x;
              let tmp6 = obj;
            } else {
              let width;
              if (tmp2 != null) {
                width = tmp2.width;
              }
              tmp6 = arg0;
            }
            return tmp6;
          });
          return;
        }
      }
      return null;
    }
    const tmpResult4 = tmp(4850);
  }
  const items1 = [tmp9, token];
  cResult[3] = token;
  cResult[4] = tmp9;
  cResult[5] = items1;
  tmp11 = items1;
  const tmpResult3 = selectedTab(4818);
}) : (function FloatingNav(navigation) {
  navigation = navigation.navigation;
  c4 = undefined;
  noop = undefined;
  const selectedTab = navigation.selectedTab;
  const selectTab = navigation.selectTab;
  const tmp3 = closure_17(selectTab(1631)().bottom);
  dependencyMap = tmp3;
  const isGameProfileCommunitiesMobileEnabled = selectedTab(13007).useIsGameProfileCommunitiesMobileEnabled({ location: "GameProfileFloatingNav" });
  let obj = selectedTab(13007);
  const token = selectedTab(4818).useToken(selectTab(587).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef683(token);
    const items = [_modDef683(token).alpha(0).hex(), token];
    return items;
  }, items);
  let obj2 = selectedTab(4818);
  [tmp9, c4] = noop.useState({});
  _slicedToArray = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    let x = arg1;
    _undefined((arg0) => {
      let x;
      if (arg0[closure_0] != null) {
        x = tmp2.x;
      }
      if (x !== x.x) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[closure_0] = x;
        let tmp6 = obj;
      } else {
        let width;
        if (tmp2 != null) {
          width = tmp2.width;
        }
        tmp6 = arg0;
      }
      return tmp6;
    });
  }, []);
  noop = tmp10;
  selectedTab(4850);
  const fn = function s() {
    if (null == styles) {
      let obj = { opacity: 0 };
    } else {
      obj = { opacity: 1, width: null, transform: null };
      const obj3 = { duration, easing };
      obj.width = timing.withTiming(styles.width, obj3);
      const obj4 = { translateX: null };
      const obj6 = { duration, easing };
      obj4.translateX = timing.withTiming(styles.x, obj6);
      const items = [obj4];
      obj.transform = items;
    }
    return obj;
  };
  const tmp8 = _slicedToArray(noop.useState({}), 2);
  fn.__closure = { selectedLayout: tmp9[selectedTab], withTiming: selectedTab(5093).withTiming, SELECTION_MS: v320, SELECTION_EASE: easing };
  fn.__workletHash = 5966559078959;
  fn.__initData = __initData2;
  if (isGameProfileCommunitiesMobileEnabled) {
    let obj4 = { tab: tmp4(8914).GameProfileNavTab.OVERVIEW, IconComponent: tmp4(9211).GameControllerIcon, label: null };
    const intl = tmp4(1126).intl;
    obj4.label = intl.string(tmp4(1126).t.qHmbyh);
    const items1 = [obj4, ];
    let obj5 = { tab: tmp4(8914).GameProfileNavTab.COMMUNITIES, IconComponent: tmp4(8216).GroupIcon, label: null };
    const intl2 = tmp4(1126).intl;
    obj5.label = intl2.string(tmp4(1126).t["3xFZEo"]);
    items1[1] = obj5;
    let obj6 = { style: tmp3.wrap, pointerEvents: "box-none", onLayout: navigation.onLayout, children: null };
    const obj7 = { colors: memo, style: tmp3.scrim, pointerEvents: "none" };
    const items2 = [closure_9(tmp(5391), obj7), ];
    const obj8 = { style: tmp3.pill, accessibilityRole: "tablist", children: null };
    const obj9 = { style: tmp3.pillBlur, pointerEvents: "none", children: closure_9(tmp4(8541).BackgroundBlurFill, {}) };
    const items3 = [closure_9(closure_7, obj9), ];
    const obj10 = { style: tmp3.pillRow, children: null };
    const obj11 = { style: null, pointerEvents: "none" };
    const items4 = [tmp3.selection, tmp12];
    obj11.style = items4;
    const items5 = [closure_9(tmp(4850).View, obj11), ];
    const obj12 = {
      children: items1.map((IconComponent) => {
          const tab = IconComponent.tab;
          return closure_1_9(closure_1_18, {
            IconComponent: IconComponent.IconComponent,
            label: IconComponent.label,
            selected: tab === tab,
            onPress() {
              return selectTab(tab);
            },
            onLayout(arg0) {
              return closure_5(tab, arg0);
            },
            style: closure_2.item,
            labelStyle: closure_2.label
          }, tab);
        })
    };
    items5[1] = closure_9(tmp4(13001).YouScreenNavIconMeasurer, obj12);
    obj10.children = items5;
    items3[1] = closure_10(closure_7, obj10);
    obj8.children = items3;
    items2[1] = closure_10(closure_7, obj8);
    obj6.children = items2;
    return closure_10(closure_7, obj6);
  } else {
    return null;
  }
  let obj3 = { selectedLayout: tmp9[selectedTab], withTiming: selectedTab(5093).withTiming, SELECTION_MS: v320, SELECTION_EASE: easing };
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileFloatingNav.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileFloatingNav(game) {
  const cResult = c.c(5);
  if (cResult[0] !== game) {
    game = game.game;
    const tmp6 = _objectWithoutProperties(game, closure_3);
    cResult[0] = game;
    cResult[1] = game;
    cResult[2] = tmp6;
    let tmp3 = tmp6;
    let tmp2 = game;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const communityGuildIds = tmp2.communityGuildIds;
  let num4;
  if (communityGuildIds != null) {
    num4 = communityGuildIds.length;
  }
  if (num4 == null) {
    num4 = 0;
  }
  let num5 = 3;
  if (num4 < 3) {
    return null;
  } else if (cResult[3] !== tmp3) {
    const obj2 = {};
    const merged = Object.assign(tmp3);
    const tmp13 = options(closure_21, obj2);
    cResult[num5] = tmp3;
    num5 = 4;
    cResult[4] = tmp13;
  }
}) : (function GameProfileFloatingNav(game) {
  const merged = Object.assign(game, Object.assign({ game: 0 }));
  const communityGuildIds = game.game.communityGuildIds;
  let num;
  if (communityGuildIds != null) {
    num = communityGuildIds.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp2 = null;
  if (num >= 3) {
    const obj = {};
    const merged1 = Object.assign(merged);
    tmp2 = options(closure_21, obj);
  }
  return tmp2;
});