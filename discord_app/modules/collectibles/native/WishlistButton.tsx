// === Module 8526: WishlistButton ===

// Module 8526 (WishlistButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import Constants from "Constants" /* 1096 */;
import intl3 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import CollectiblesWishlistUtils from "CollectiblesWishlistUtils" /* 8456 */;
import useWishlistNUXActionSheetDefault from "useWishlistNUXActionSheet" /* 8457 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8529 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, c0, c1, closure_12, dependencyMap, importDefault, set;

let Easing;
let c10;
let c9;
let closure_15;
let closure_16;
let closure_3 = ["skuId", "product", "onPress", "onTrackPress"];
let closure_4 = ["selectedProduct", "onTrackPress"];
let _asyncToGenerator = _asyncToGenerator_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: c9, View: c10 } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { duration: 400, easing: Easing.bezier(0.67, 0, 0.26, 1) };
Easing = ReanimatedRexport.Easing;
let obj2 = { sm: ButtonConstants.SMALL_BUTTON_HEIGHT, md: ButtonConstants.MEDIUM_BUTTON_HEIGHT };
let closure_19 = { sm: "sm", md: "md" };
let closure_20 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj4;
  let obj6;
  obj = { button: size, light: obj2, lightPressed: obj3, dark: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT }, darkPressed: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE }, midnight: { borderColor: nativeDefault.colors.BORDER_STRONG }, disabled: { opacity: 0.5 }, iconContainer: { position: "relative", alignItems: "center", justifyContent: "center" }, animationFill: { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" } };
  size = { width: obj2[arg0], height: obj2[arg0], display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
  obj2 = { backgroundColor: obj4.setColorOpacity("white", 0.72) };
  obj4 = native;
  obj3 = { backgroundColor: obj6.setColorOpacity("white", 0.62) };
  obj6 = native;
  ({ backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT });
  ({ backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE });
  ({ borderColor: nativeDefault.colors.BORDER_STRONG });
  return obj;
});
let closure_21 = { code: "function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}" };
let closure_22 = { code: "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,\"animate-always\"),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,\"animate-always\")}]};}" };
let closure_23 = { code: "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,\"animate-always\"),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let closure_24 = { code: "function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress_0=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress_0,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress_0,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let closure_25 = { code: "function WishlistButtonTsx5(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}" };
const __initData = { code: "function WishlistButtonTsx6(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}" };
const __initData2 = { code: "function WishlistButtonTsx7(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
const __initData3 = { code: "function WishlistButtonTsx8(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress_0=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress_0,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress_0,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isWishlisted) => {
  let accessibilityHidden;
  let busy;
  let closure_7;
  let closure_8;
  let first;
  let onTrackPress;
  let sharedValue;
  let style;
  let tmp = isWishlisted;
  obj = isWishlisted(busy[16]);
  const cResult = obj.c(64);
  isWishlisted = isWishlisted.isWishlisted;
  const onPress = isWishlisted.onPress;
  busy = isWishlisted.busy;
  const disabled = isWishlisted.disabled;
  ({ accessibilityHidden, style } = isWishlisted);
  ({ size, onTrackPress } = isWishlisted);
  const tmp4 = undefined !== accessibilityHidden && accessibilityHidden;
  let str = "sm";
  if (undefined !== size) {
    str = size;
  }
  const tmp5 = closure_20(str);
  let closure_6 = tmp5;
  tmp(busy[17]).ICON_SIZE[closure_19[str]];
  const tmpResult = tmp(busy[14]);
  const theme = tmpResult.useThemeContext().theme;
  const tmpResult3 = tmp(busy[18]);
  const isThemeLightResult = tmpResult3.isThemeLight(theme);
  _slicedToArray = theme === sharedValue.ONYX;
  react = isThemeLightResult ? tmp5.light : tmp5.dark;
  let closure_9 = isThemeLightResult ? tmp5.lightPressed : tmp5.darkPressed;
  if (cResult[0] === busy) {
    if (cResult[1] === disabled) {
      if (cResult[2] === isWishlisted) {
        let tmp8 = cResult[3];
      }
      const enabled = react.useContext(tmp(tmp2[19]).AccessibilityPreferencesContext).reducedMotion.enabled;
      let num = 2;
      [first, UserStore] = react.useState(false);
      let closure_13 = isWishlisted || first;
      let num2 = 0;
      const useSharedValue = tmp(busy[10]).useSharedValue;
      tmp(busy[10]);
      const obj5 = react;
      if (isWishlisted) {
        num2 = 1;
      }
      sharedValue = useSharedValue(num2);
      if (cResult[4] === busy) {
        if (cResult[5] === disabled) {
          if (cResult[6] === first) {
            if (cResult[7] === isWishlisted) {
              if (cResult[8] === onPress) {
                if (cResult[9] === onTrackPress) {
                  if (cResult[10] === enabled) {
                    let tmp14 = cResult[11];
                  }
                  if (cResult[12] === sharedValue) {
                    if (cResult[13] === first) {
                      let tmp15;
                      let tmp16;
                      if (cResult[14] === isWishlisted) {
                        tmp15 = cResult[15];
                        tmp16 = cResult[16];
                      }
                      const effect = obj5.useEffect(tmp15, tmp16);
                      class Q {
                        constructor() {
                          if (!first) {
                            let num = 0;
                            set = sharedValue.set;
                            if (isWishlisted) {
                              num = 1;
                            }
                            const result = set(num);
                          }
                        }
                      }
                      function ee() {
                        let setIsClickAnimating;
                        if (first) {
                          let result = sharedValue.set(0);
                          const _requestAnimationFrame = requestAnimationFrame;
                          let closure_0 = requestAnimationFrame(() => {
                            obj = isWishlisted(busy[22]);
                            const fn = function t(arg0) {
                              const tmp = arg0;
                              if (tmp) {
                                obj = closure_0(busy[10]);
                                obj.runOnJS(setIsClickAnimating)(false);
                              }
                            };
                            fn.__closure = { runOnJS: isWishlisted(busy[10]).runOnJS, setIsClickAnimating };
                            fn.__workletHash = 13061953734403;
                            fn.__initData = __initData;
                            ({ runOnJS: isWishlisted(busy[10]).runOnJS, setIsClickAnimating });
                            const result = set(obj.withTiming(1, closure_2_17, "animate-always", fn));
                          });
                          return () => cancelAnimationFrame(closure_0);
                        }
                      }
                      let items = [first, sharedValue];
                      cResult[17] = sharedValue;
                      cResult[18] = first;
                      cResult[19] = ee;
                      cResult[20] = items;
                    }
                  }
                  class Q {
                    constructor() {
                      if (!first) {
                        let num = 0;
                        set = sharedValue.set;
                        if (isWishlisted) {
                          num = 1;
                        }
                        const result = set(num);
                      }
                    }
                  }
                  const items1 = [isWishlisted, first, sharedValue];
                  cResult[12] = sharedValue;
                  cResult[13] = first;
                  cResult[14] = isWishlisted;
                  cResult[15] = Q;
                  cResult[16] = items1;
                  tmp16 = items1;
                  tmp15 = Q;
                }
              }
            }
          }
        }
      }
      class V {
        constructor() {
          let intl;
          if (disabled) {
            obj = { key: "WISHLIST_DISABLED", content: intl.string(intl3.t["50TX9k"]) };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl3.intl;
            open(obj);
          } else if (!busy) {
            if (onTrackPress != null) {
              tmp3(isWishlisted ? ShopCtaEnum.REMOVE_FROM_WISHLIST : ShopCtaEnum.ADD_TO_WISHLIST);
            }
            let tmp8 = isWishlisted;
            if (!tmp8) {
              if (!enabled) {
                closure_12(true);
              }
              if (onPress != null) {
                tmp14();
              }
            }
            if (tmp8) {
              tmp8 = first;
            }
            if (tmp8) {
              closure_12(false);
            }
          }
        }
      }
      cResult[4] = busy;
      cResult[5] = disabled;
      cResult[6] = first;
      cResult[7] = isWishlisted;
      cResult[8] = onPress;
      cResult[9] = onTrackPress;
      cResult[10] = enabled;
      cResult[11] = V;
      tmp14 = V;
    }
  }
  obj2 = { checked: isWishlisted, busy, disabled };
  cResult[0] = busy;
  cResult[1] = disabled;
  cResult[2] = isWishlisted;
  cResult[3] = obj2;
}) : ((isWishlisted) => {
  let HeartIcon;
  let HeartOutlineIcon;
  let closure_6;
  let closure_7;
  let closure_8;
  let first;
  let items3;
  let items4;
  let obj11;
  let obj13;
  let obj15;
  let obj9;
  let str;
  let str2;
  let tmp20;
  let tmp21;
  isWishlisted = isWishlisted.isWishlisted;
  const onPress = isWishlisted.onPress;
  const busy = isWishlisted.busy;
  const disabled = isWishlisted.disabled;
  let flag = isWishlisted.accessibilityHidden;
  const accessibilityLabel = isWishlisted.accessibilityLabel;
  if (flag === undefined) {
    flag = false;
  }
  ({ style: closure_4, size } = isWishlisted);
  if (size === undefined) {
    size = "sm";
  }
  const onTrackPress = isWishlisted.onTrackPress;
  first = undefined;
  closure_12 = undefined;
  let sharedValue;
  let tmp = closure_20(size);
  _objectWithoutProperties = tmp;
  const tmp3 = busy;
  const tmp5 = isWishlisted(busy[17]).ICON_SIZE[closure_19[size]];
  obj = isWishlisted(busy[14]);
  const theme = obj.useThemeContext().theme;
  obj2 = isWishlisted(busy[18]);
  const isThemeLightResult = obj2.isThemeLight(theme);
  _slicedToArray = theme === sharedValue.ONYX;
  react = isThemeLightResult ? tmp.light : tmp.dark;
  let closure_9 = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
  let obj3 = react;
  const enabled = react.useContext(tmp2(tmp3[19]).AccessibilityPreferencesContext).reducedMotion.enabled;
  [first, closure_12] = react.useState(false);
  let closure_13 = tmp9;
  const tmp2Result = tmp2(tmp3[10]);
  let num = 0;
  const useSharedValue = tmp2Result.useSharedValue;
  if (isWishlisted) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [disabled, busy, onPress, isWishlisted, enabled, first, onTrackPress];
  const items1 = [isWishlisted, first, sharedValue];
  const callback = obj3.useCallback(() => {
    let intl;
    if (disabled) {
      obj = { key: "WISHLIST_DISABLED", content: intl.string(intl3.t["50TX9k"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open(obj);
    } else if (!busy) {
      if (onTrackPress != null) {
        tmp3(isWishlisted ? ShopCtaEnum.REMOVE_FROM_WISHLIST : ShopCtaEnum.ADD_TO_WISHLIST);
      }
      let tmp8 = isWishlisted;
      if (!tmp8) {
        if (!enabled) {
          closure_12(true);
        }
        if (onPress != null) {
          tmp14();
        }
      }
      if (tmp8) {
        tmp8 = first;
      }
      if (tmp8) {
        closure_12(false);
      }
    }
  }, items);
  const effect = obj3.useEffect(() => {
    if (!first) {
      let num = 0;
      set = sharedValue.set;
      if (isWishlisted) {
        num = 1;
      }
      const result = set(num);
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj3.useEffect(() => {
    let setIsClickAnimating;
    if (first) {
      let result = sharedValue.set(0);
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
        obj = isWishlisted(busy[22]);
        const fn = function t(arg0) {
          const tmp = arg0;
          if (tmp) {
            obj = closure_0(busy[10]);
            obj.runOnJS(setIsClickAnimating)(false);
          }
        };
        fn.__closure = { runOnJS: isWishlisted(busy[10]).runOnJS, setIsClickAnimating };
        fn.__workletHash = 7661742232839;
        fn.__initData = __initData;
        ({ runOnJS: isWishlisted(busy[10]).runOnJS, setIsClickAnimating });
        const result = set(obj.withTiming(1, closure_2_17, "animate-always", fn));
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items2);
  let fn = function j() {
    let items;
    let num2;
    let withSpring;
    obj = { opacity: withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
    const merged = Object.assign(closure_6.animationFill);
    let num = 1;
    num2 = 1;
    withSpring = spring.withSpring;
    spring;
    if (closure_13) {
      num2 = 0;
    }
    const withSpring2 = spring.withSpring;
    spring;
    if (closure_13) {
      num = 0.9;
    }
    items = [{ scale: withSpring2(num, springPresets.SUBTLE_SPRING, "animate-always") }];
    ({ scale: withSpring2(num, springPresets.SUBTLE_SPRING, "animate-always") });
    return obj;
  };
  const tmp2Result4 = isWishlisted(tmp3[10]);
  let obj4 = { styles: tmp, withSpring: tmp2(tmp3[23]).withSpring, showFilled: tmp9, SUBTLE_SPRING: tmp2(tmp3[24]).SUBTLE_SPRING };
  fn.__closure = obj4;
  fn.__workletHash = 13549228956013;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result4.useAnimatedStyle(fn);
  const tmp2Result5 = isWishlisted(tmp3[10]);
  class X {
    constructor() {
      let items;
      let num;
      let tmp3Result;
      let withSpring;
      const value = sharedValue.get();
      obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), transform: items };
      const merged = Object.assign(closure_6.animationFill);
      num = 0;
      withSpring = spring.withSpring;
      spring;
      if (closure_13) {
        num = 1;
      }
      obj2 = { scale: tmp3Result.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], ReanimatedRexport.Extrapolation.CLAMP) };
      items = [obj2];
      tmp3Result = ReanimatedRexport;
      return obj;
    }
  }
  X.__closure = { animationFillProgress: sharedValue, styles: tmp, withSpring: isWishlisted(tmp3[23]).withSpring, showFilled: isWishlisted || first, SUBTLE_SPRING: isWishlisted(tmp3[24]).SUBTLE_SPRING, interpolate: isWishlisted(tmp3[10]).interpolate, Extrapolation: isWishlisted(tmp3[10]).Extrapolation };
  X.__workletHash = 2843634374912;
  X.__initData = __initData2;
  ({ animationFillProgress: sharedValue, styles: tmp, withSpring: isWishlisted(tmp3[23]).withSpring, showFilled: isWishlisted || first, SUBTLE_SPRING: isWishlisted(tmp3[24]).SUBTLE_SPRING, interpolate: isWishlisted(tmp3[10]).interpolate, Extrapolation: isWishlisted(tmp3[10]).Extrapolation });
  const animatedStyle1 = tmp2Result5.useAnimatedStyle(X);
  const tmp2Result6 = isWishlisted(tmp3[10]);
  class Y {
    constructor() {
      let items;
      let num;
      let obj4;
      const value = sharedValue.get();
      obj = { opacity: num, transform: items };
      const merged = Object.assign(closure_6.animationFill);
      num = 0;
      if (closure_13) {
        obj2 = ReanimatedRexport;
        num = obj2.interpolate(value, [0, 0.7], [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
      }
      const obj3 = { scale: obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], ReanimatedRexport.Extrapolation.CLAMP) };
      items = [obj3];
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  Y.__closure = { animationFillProgress: sharedValue, styles: tmp, showFilled: isWishlisted || first, interpolate: isWishlisted(tmp3[10]).interpolate, Extrapolation: isWishlisted(tmp3[10]).Extrapolation };
  Y.__workletHash = 12506449270961;
  Y.__initData = __initData3;
  const obj7 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_6.button, closure_8, closure_7 && closure_6.midnight, , , ];
      if (pressed) {
        pressed = !disabled;
      }
      if (pressed) {
        pressed = closure_9;
      }
      items[3] = pressed;
      items[4] = disabled && closure_6.disabled;
      items[5] = closure_4;
      return items;
    },
    onPress: callback,
    accessibilityRole: str,
    accessibilityLabel: tmp20,
    accessibilityState: tmp21,
    accessibilityElementsHidden: flag,
    importantForAccessibility: str2,
    children: closure_16(enabled, obj9)
  };
  str = "togglebutton";
  ({ animationFillProgress: sharedValue, styles: tmp, showFilled: isWishlisted || first, interpolate: isWishlisted(tmp3[10]).interpolate, Extrapolation: isWishlisted(tmp3[10]).Extrapolation });
  const animatedStyle2 = tmp2Result6.useAnimatedStyle(Y);
  const tmp19 = closure_9;
  if (flag) {
    str = "none";
  }
  tmp20 = undefined;
  if (!flag) {
    tmp20 = accessibilityLabel;
  }
  tmp21 = undefined;
  if (!flag) {
    tmp21 = { checked: isWishlisted, busy, disabled };
    const obj8 = { checked: isWishlisted, busy, disabled };
  }
  str2 = "auto";
  if (flag) {
    str2 = "no-hide-descendants";
  }
  obj9 = { style: items3, children: items4 };
  items3 = [tmp.iconContainer, { width: tmp5, height: tmp5 }];
  const obj10 = { style: animatedStyle, pointerEvents: "none", children: closure_15(HeartOutlineIcon, obj11) };
  const View = onPress(tmp3[10]).View;
  obj11 = { size: closure_19[size], color: onPress(tmp3[13]).colors.INTERACTIVE_ICON_DEFAULT };
  HeartOutlineIcon = tmp2(tmp3[25]).HeartOutlineIcon;
  items4 = [closure_15(View, obj10), , ];
  const obj12 = { style: animatedStyle1, pointerEvents: "none", children: closure_15(HeartIcon, obj13) };
  const View2 = onPress(tmp3[10]).View;
  obj13 = { size: closure_19[size], color: onPress(tmp3[13]).unsafe_rawColors.RED_NEW_50 };
  HeartIcon = tmp2(tmp3[26]).HeartIcon;
  items4[1] = closure_15(View2, obj12);
  const obj14 = { style: animatedStyle2, pointerEvents: "none", children: closure_15(isWishlisted(tmp3[26]).HeartIcon, obj15) };
  const View3 = onPress(tmp3[10]).View;
  obj15 = { size: closure_19[size], color: "white" };
  items4[2] = closure_15(View3, obj14);
  return closure_15(tmp19, obj7);
});
let closure_29 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_6;
  let content;
  let currentUser;
  let handleToggle;
  let id;
  let isBusy;
  let product;
  let shouldShowWishlistNUXActionSheet;
  let skuId;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp22;
  let tmp4;
  let tmp7;
  let tmp8;
  const tmp2 = dependencyMap;
  obj = require("react");
  const cResult = obj.c(34);
  if (cResult[0] !== onPress) {
    ({ skuId, product } = onPress);
    dependencyMap = product;
    onPress = onPress.onPress;
    _require = onPress;
    const onTrackPress = onPress.onTrackPress;
    importDefault = onTrackPress;
    const tmp9 = _objectWithoutProperties;
    const tmp11 = _objectWithoutProperties(onPress, shouldShowWishlistNUXActionSheet);
    cResult[0] = onPress;
    cResult[1] = onPress;
    cResult[2] = onTrackPress;
    cResult[3] = product;
    cResult[4] = tmp11;
    cResult[5] = skuId;
    tmp8 = skuId;
    tmp7 = tmp11;
    tmp4 = onPress;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class I {
      constructor() {
        return id.getId();
      }
    }
    cResult[6] = items;
    cResult[7] = I;
    tmp13 = I;
    tmp12 = items;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class I {
      constructor() {
        return id.getId();
      }
    }
    cResult[8] = items1;
    cResult[9] = tmp19;
    tmp17 = tmp19;
    tmp16 = items1;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp16, tmp17);
  const tmp21 = useWishlistNUXActionSheetDefault();
  shouldShowWishlistNUXActionSheet = tmp21.shouldShowWishlistNUXActionSheet;
  const showWishlistNUXActionSheet = tmp21.showWishlistNUXActionSheet;
  if (cResult[10] !== product.name) {
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    obj2 = { productName: null };
    class I {
      constructor() {
        return id.getId();
      }
    }
    const formatToPlainStringResult = formatToPlainString(require("intl").t["7kFjeK"], obj2);
    cResult[10] = product.name;
    cResult[11] = formatToPlainStringResult;
    tmp22 = formatToPlainStringResult;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === product) {
    if (cResult[13] === shouldShowWishlistNUXActionSheet) {
      let tmp24;
      let tmp27;
      if (cResult[14] === showWishlistNUXActionSheet) {
        tmp24 = cResult[15];
      }
      const _Symbol = Symbol;
      class I {
        constructor() {
          return id.getId();
        }
      }
      _asyncToGenerator = tmp26;
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function x() {
          obj = ToastActionCreatorsDefault;
          obj2 = { key: "WISHLIST_ERROR", content: _asyncToGenerator };
          obj.open(obj2);
        };
        cResult[17] = fn2;
        class I {
          constructor() {
            return id.getId();
          }
        }
      } else {
        tmp27 = cResult[17];
      }
      if (cResult[18] === stateFromStores) {
        if (cResult[19] === tmp24) {
          if (cResult[20] === shouldShowWishlistNUXActionSheet) {
            let tmp28;
            if (cResult[21] === tmp8) {
              tmp28 = cResult[22];
            }
            const tmpResult4 = require("useWishlistButtonState");
            const wishlistButtonState = tmpResult4.useWishlistButtonState(tmp28);
            class I {
              constructor() {
                return id.getId();
              }
            }
            _objectWithoutProperties = tmp30;
            ({ isBusy, handleToggle } = wishlistButtonState);
            if (cResult[23] === handleToggle) {
              if (cResult[24] === tmp30) {
                if (cResult[25] === tmp4) {
                  let tmp31;
                  if (cResult[26] === tmp5) {
                    tmp31 = cResult[27];
                  }
                  if (null != stateFromStores1) {
                    class I {
                      constructor() {
                        return id.getId();
                      }
                    }
                    tmp37[0] = tmp30;
                    tmp37[1] = tmp31;
                    tmp37[2] = isBusy;
                    tmp37[3] = tmp22;
                    const merged = Object.assign(tmp7);
                    const tmp41 = closure_15(closure_29, tmp37);
                    cResult[28] = tmp22;
                    cResult[29] = tmp31;
                    cResult[30] = isBusy;
                    cResult[31] = tmp30;
                    cResult[32] = tmp7;
                    cResult[33] = tmp41;
                  }
                  class I {
                    constructor() {
                      return id.getId();
                    }
                  }
                }
              }
            }
            _require = _asyncToGenerator(async () => {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      if (c1 != null) {
                        let ADD_TO_WISHLIST;
                        if (closure_1_6) {
                          ADD_TO_WISHLIST = constants.REMOVE_FROM_WISHLIST;
                        } else {
                          ADD_TO_WISHLIST = constants.ADD_TO_WISHLIST;
                        }
                        tmp4(ADD_TO_WISHLIST);
                      }
                      if (c0 != null) {
                        tmp9();
                      }
                      c1 = 1;
                      c0 = 1;
                      const obj4 = { value: handleToggle(), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    c0 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp12) {
                  c0 = 3;
                  throw tmp12;
                }
              }
            });
            const fn3 = function() {
              return closure_0(...arguments);
            };
            cResult[23] = handleToggle;
            cResult[24] = tmp30;
            cResult[25] = tmp4;
            cResult[26] = tmp5;
            cResult[27] = fn3;
            tmp31 = fn3;
          }
        }
      }
      let obj3 = { userId: stateFromStores, skuId: tmp8, onAddSuccess: tmp24, onError: tmp27, skipAddAnnouncement: shouldShowWishlistNUXActionSheet };
      cResult[18] = stateFromStores;
      cResult[19] = tmp24;
      cResult[20] = shouldShowWishlistNUXActionSheet;
      cResult[21] = tmp8;
      cResult[22] = obj3;
      tmp28 = obj3;
    }
  }
  const fn = function k() {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(closure_2);
    }
  };
  cResult[12] = product;
  cResult[13] = shouldShowWishlistNUXActionSheet;
  cResult[14] = showWishlistNUXActionSheet;
  cResult[15] = fn;
  tmp24 = fn;
}) : ((product) => {
  let content;
  let currentUser;
  let id;
  product = product.product;
  const require = product;
  const onPress = product.onPress;
  const onTrackPress = product.onTrackPress;
  let tmp = null;
  const skuId = product.skuId;
  const merged = Object.assign(product, Object.assign({ skuId: 0, product: 0, onPress: 0, onTrackPress: 0 }));
  obj = require("get initialized");
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  obj2 = require("get initialized");
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp5 = onPress(onTrackPress[28])();
  const shouldShowWishlistNUXActionSheet = tmp5.shouldShowWishlistNUXActionSheet;
  const showWishlistNUXActionSheet = tmp5.showWishlistNUXActionSheet;
  const intl = require("intl").intl;
  let obj3 = { productName: product.name };
  const items2 = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, product];
  const formatToPlainStringResult = intl.formatToPlainString(require("intl").t["7kFjeK"], obj3);
  const callback = react.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(require);
    }
  }, items2);
  const intl2 = require("intl").intl;
  const stringResult = intl2.string(require("intl").t.F8FvUy);
  let c5 = stringResult;
  const items3 = [stringResult];
  const callback1 = react.useCallback(() => {
    obj = ToastActionCreatorsDefault;
    obj2 = { key: "WISHLIST_ERROR", content };
    obj.open(obj2);
  }, items3);
  let obj4 = require("useWishlistButtonState");
  const wishlistButtonState = obj4.useWishlistButtonState({ userId: stateFromStores, skuId, onAddSuccess: callback, onError: callback1, skipAddAnnouncement: shouldShowWishlistNUXActionSheet });
  const isWishlisted = wishlistButtonState.isWishlisted;
  const handleToggle = wishlistButtonState.handleToggle;
  const isBusy = wishlistButtonState.isBusy;
  const items4 = [onPress, onTrackPress, isWishlisted, handleToggle];
  if (null != stateFromStores1) {
    const obj5 = { isWishlisted, onPress: tmp11, busy: isBusy, accessibilityLabel: formatToPlainStringResult };
    const merged1 = Object.assign(merged);
    tmp = closure_15(closure_29, obj5);
  }
  return tmp;
});
let closure_30 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onTrackPress;
  let selectedProduct;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== arg0) {
    ({ selectedProduct, onTrackPress } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = onTrackPress;
    cResult[2] = tmp9;
    cResult[3] = selectedProduct;
    tmp6 = selectedProduct;
    tmp5 = tmp9;
    tmp4 = onTrackPress;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const skuId = tmp6.skuId;
  const tmpResult = useProductPurchaseState;
  const isPurchased = tmpResult.useProductPurchaseState(tmp6).isPurchased;
  if (cResult[4] !== tmp6) {
    const tmpResult2 = CollectiblesWishlistUtils;
    const result = tmpResult2.isWishlistableCollectiblesProduct(tmp6);
    cResult[4] = tmp6;
    cResult[5] = result;
    tmp10 = result;
  } else {
    tmp10 = cResult[5];
  }
  if (isPurchased) {
    return null;
  } else {
    if (cResult[6] === tmp4) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === !tmp10) {
            let tmp13;
            if (cResult[10] === skuId) {
              tmp13 = cResult[11];
            }
            return tmp13;
          }
        }
      }
    }
    obj2 = { skuId, product: tmp6, disabled: !tmp10, onTrackPress: tmp4 };
    const merged = Object.assign(tmp5);
    const tmp19 = closure_15(closure_30, obj2);
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = tmp6;
    cResult[9] = !tmp10;
    cResult[10] = skuId;
    cResult[11] = tmp19;
    tmp13 = tmp19;
  }
}) : ((selectedProduct) => {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  const onTrackPress = selectedProduct.onTrackPress;
  const merged = Object.assign(selectedProduct, Object.assign({ selectedProduct: 0, onTrackPress: 0 }));
  const skuId = selectedProduct.skuId;
  obj = useProductPurchaseState;
  const isPurchased = obj.useProductPurchaseState(selectedProduct).isPurchased;
  CollectiblesWishlistUtils;
  if (!isPurchased) {
    obj2 = { skuId, product: selectedProduct, disabled: !tmp4, onTrackPress };
    const merged1 = Object.assign(merged);
    tmp = closure_15(closure_30, obj2);
  }
  return tmp;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default tmp6;
export const WishlistButtonBase = tmp4;
export const WishlistButton = tmp5;