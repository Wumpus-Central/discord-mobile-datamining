// === Module 8493: WishlistButton ===

// Module 8493 (WishlistButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import CollectiblesWishlistUtils from "CollectiblesWishlistUtils" /* 8423 */;
import useWishlistNUXActionSheetDefault from "useWishlistNUXActionSheet" /* 8424 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8496 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
let closure_3 = ["skuId", "product", "onPress", "onTrackPress"];
let closure_4 = ["selectedProduct", "onTrackPress"];
get_ActivityIndicator = fn(17);
({ Pressable: closure_9, View: c10 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1087).ShopCtaEnum;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { duration: 400, easing: null };
const Easing = fn(4612).Easing;
obj.easing = Easing.bezier(0.67, 0, 0.26, 1);
let obj2 = { sm: fn(5600).SMALL_BUTTON_HEIGHT, md: fn(5600).MEDIUM_BUTTON_HEIGHT };
const dependencyMap2 = { sm: "sm", md: "md" };
const createStyles = fn(4890);
let closure_20 = createStyles.createStyles((arg0) => {
  obj = { button: null, light: null, lightPressed: null, dark: null, darkPressed: null, midnight: null, disabled: null, iconContainer: null, animationFill: null };
  const size = { width: obj2[arg0], height: obj2[arg0], display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
  obj.button = size;
  obj2 = { backgroundColor: native.setColorOpacity("white", 0.72) };
  obj.light = obj2;
  const obj3 = { backgroundColor: null };
  obj3.backgroundColor = native.setColorOpacity("white", 0.62);
  obj.lightPressed = obj3;
  obj.dark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  const obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj.darkPressed = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
  const obj7 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
  obj.midnight = { borderColor: nativeDefault.colors.BORDER_STRONG };
  obj.disabled = { opacity: 0.5 };
  obj.iconContainer = { position: "relative", alignItems: "center", justifyContent: "center" };
  obj.animationFill = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" };
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
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isWishlisted) => {
  const cResult = isWishlisted(busy[16]).c(64);
  isWishlisted = isWishlisted.isWishlisted;
  const onPress = isWishlisted.onPress;
  busy = isWishlisted.busy;
  let disabled = isWishlisted.disabled;
  ({ accessibilityHidden, style } = isWishlisted);
  ({ size, onTrackPress } = isWishlisted);
  let tmp4 = undefined !== accessibilityHidden;
  if (tmp4) {
    tmp4 = accessibilityHidden;
  }
  let str = "sm";
  if (undefined !== size) {
    str = size;
  }
  const tmp5 = closure_20(str);
  closure_6 = tmp5;
  isWishlisted(busy[17]).ICON_SIZE[dependencyMap2[str]];
  obj = isWishlisted(busy[16]);
  const theme = isWishlisted(busy[14]).useThemeContext().theme;
  const tmpResult = isWishlisted(busy[14]);
  const isThemeLightResult = isWishlisted(busy[18]).isThemeLight(theme);
  _slicedToArray = theme === sharedValue.ONYX;
  noop = isThemeLightResult ? tmp5.light : tmp5.dark;
  closure_9 = isThemeLightResult ? tmp5.lightPressed : tmp5.darkPressed;
  if (cResult[0] === busy) {
    if (cResult[1] === disabled) {
      const enabled = noop.useContext(tmp(tmp2[19]).AccessibilityPreferencesContext).reducedMotion.enabled;
      [first, UserStore] = noop.useState(false);
      let tmp12 = isWishlisted;
      if (!isWishlisted) {
        tmp12 = first;
      }
      first = tmp12;
      let num2 = 0;
      if (isWishlisted) {
        num2 = 1;
      }
      sharedValue = tmp(tmp2[10]).useSharedValue(num2);
      if (cResult[4] === busy) {
        if (cResult[5] === disabled) {
          if (cResult[6] === first) {
            if (cResult[7] === isWishlisted) {
              if (cResult[8] === onPress) {
                if (cResult[9] === onTrackPress) {
                  if (cResult[12] === sharedValue) {
                    if (cResult[13] === first) {
                      if (cResult[14] === isWishlisted) {
                        let tmp15 = cResult[15];
                        let tmp16 = cResult[16];
                      }
                      const effect = obj5.useEffect(tmp15, tmp16);
                      class Q {
                        constructor() {
                          if (!closure_11) {
                            tmp2 = isWishlisted;
                            num = 0;
                            tmp = closure_14;
                            if (isWishlisted) {
                              num = 1;
                            }
                            result = closure_14.set(num);
                          }
                          return;
                        }
                      }
                      function ee() {
                        if (first) {
                          let result = sharedValue.set(0);
                          const _requestAnimationFrame = requestAnimationFrame;
                          closure_0 = requestAnimationFrame(() => {
                            const fn = function t(arg0) {
                              if (arg0) {
                                closure_0(busy[10]).runOnJS(setIsClickAnimating)(false);
                                obj = closure_0(busy[10]);
                              }
                            };
                            obj = isWishlisted(busy[22]);
                            fn.__closure = { runOnJS: isWishlisted(busy[10]).runOnJS, setIsClickAnimating };
                            fn.__workletHash = 13061953734403;
                            fn.__initData = __initData;
                            const result = sharedValue.set(obj.withTiming(1, closure_2_17, "animate-always", fn));
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
                      if (!closure_11) {
                        tmp2 = isWishlisted;
                        num = 0;
                        tmp = closure_14;
                        if (isWishlisted) {
                          num = 1;
                        }
                        result = closure_14.set(num);
                      }
                      return;
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
          if (disabled) {
            tmp15 = closure_1;
            tmp16 = closure_2;
            obj = closure_1(closure_2[20]);
            obj1 = { key: "WISHLIST_DISABLED", content: null };
            tmp17 = closure_0;
            intl = closure_0(closure_2[21]).intl;
            obj1.content = intl.string(closure_0(closure_2[21]).t["50TX9k"]);
            openResult = obj.open(obj1);
          } else {
            tmp = busy;
            if (!busy) {
              tmp3 = null;
              if (onTrackPress == null) {
                tmp7 = isWishlisted;
                if (!isWishlisted) {
                  tmp8 = enabled;
                  if (!enabled) {
                    tmp9 = closure_12;
                    flag = true;
                    tmp10 = closure_12(true);
                  }
                  if (onPress != null) {
                    tmp13Result = tmp13();
                  }
                }
                if (tmp7) {
                  tmp7 = closure_11;
                }
                if (tmp7) {
                  tmp11 = closure_12;
                  flag2 = false;
                  tmp12 = closure_12(false);
                }
              } else {
                tmp4 = isWishlisted;
                tmp5 = ShopCtaEnum;
                tmp2Result = tmp2(isWishlisted ? tmp5.REMOVE_FROM_WISHLIST : tmp5.ADD_TO_WISHLIST);
              }
            }
          }
          return;
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
      obj5 = noop;
      const tmpResult4 = tmp(tmp2[10]);
    }
  }
  cResult[0] = busy;
  cResult[1] = disabled;
  cResult[2] = isWishlisted;
  cResult[3] = { checked: isWishlisted, busy, disabled };
}) : ((isWishlisted) => {
  isWishlisted = isWishlisted.isWishlisted;
  const onPress = isWishlisted.onPress;
  const busy = isWishlisted.busy;
  let disabled = isWishlisted.disabled;
  let flag = isWishlisted.accessibilityHidden;
  if (flag === undefined) {
    flag = false;
  }
  ({ style: closure_4, size } = isWishlisted);
  if (size === undefined) {
    size = "sm";
  }
  const onTrackPress = isWishlisted.onTrackPress;
  closure_12 = undefined;
  first = undefined;
  let sharedValue;
  const tmp = closure_20(size);
  _objectWithoutProperties = tmp;
  const tmp5 = isWishlisted(busy[17]).ICON_SIZE[dependencyMap2[size]];
  const theme = isWishlisted(busy[14]).useThemeContext().theme;
  obj = isWishlisted(busy[14]);
  const isThemeLightResult = isWishlisted(busy[18]).isThemeLight(theme);
  _slicedToArray = theme === sharedValue.ONYX;
  noop = isThemeLightResult ? tmp.light : tmp.dark;
  closure_9 = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
  const enabled = noop.useContext(tmp2(tmp3[19]).AccessibilityPreferencesContext).reducedMotion.enabled;
  [first, closure_12] = noop.useState(false);
  let tmp9 = isWishlisted;
  if (!isWishlisted) {
    tmp9 = first;
  }
  first = tmp9;
  obj2 = isWishlisted(busy[18]);
  let num = 0;
  if (isWishlisted) {
    num = 1;
  }
  sharedValue = isWishlisted(busy[10]).useSharedValue(num);
  let items = [disabled, busy, onPress, isWishlisted, enabled, first, onTrackPress];
  const items1 = [isWishlisted, first, sharedValue];
  const callback = obj3.useCallback(() => {
    if (disabled) {
      obj2 = { key: "WISHLIST_DISABLED", content: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t["50TX9k"]);
      ToastActionCreatorsDefault.open(obj2);
    } else if (!busy) {
      if (onTrackPress == null) {
        let tmp7 = isWishlisted;
        if (!isWishlisted) {
          if (!enabled) {
            closure_12(true);
          }
          if (onPress != null) {
            tmp13();
          }
        }
        if (tmp7) {
          tmp7 = first;
        }
        if (tmp7) {
          closure_12(false);
        }
      } else {
        tmp2(isWishlisted ? ShopCtaEnum.REMOVE_FROM_WISHLIST : ShopCtaEnum.ADD_TO_WISHLIST);
      }
    }
  }, items);
  const effect = obj3.useEffect(() => {
    if (!first) {
      let num = 0;
      if (isWishlisted) {
        num = 1;
      }
      const result = sharedValue.set(num);
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj3.useEffect(() => {
    if (first) {
      let result = sharedValue.set(0);
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const fn = function t(arg0) {
          if (arg0) {
            closure_0(busy[10]).runOnJS(setIsClickAnimating)(false);
            obj = closure_0(busy[10]);
          }
        };
        obj = isWishlisted(busy[22]);
        fn.__closure = { runOnJS: isWishlisted(busy[10]).runOnJS, setIsClickAnimating };
        fn.__workletHash = 7661742232839;
        fn.__initData = __initData;
        const result = sharedValue.set(obj.withTiming(1, closure_2_17, "animate-always", fn));
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items2);
  let tmp2Result = isWishlisted(busy[10]);
  let fn = function j() {
    obj = {};
    const merged = Object.assign(closure_6.animationFill);
    let num = 1;
    let num2 = 1;
    if (first) {
      num2 = 0;
    }
    obj.opacity = spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always");
    if (first) {
      num = 0.9;
    }
    const tmp2Result = spring;
    const items = [{ scale: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") }];
    obj.transform = items;
    return obj;
  };
  const tmp2Result4 = isWishlisted(busy[10]);
  fn.__closure = { styles: tmp, withSpring: isWishlisted(busy[23]).withSpring, showFilled: tmp9, SUBTLE_SPRING: isWishlisted(busy[24]).SUBTLE_SPRING };
  fn.__workletHash = 13549228956013;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result4.useAnimatedStyle(fn);
  const obj4 = { styles: tmp, withSpring: isWishlisted(busy[23]).withSpring, showFilled: tmp9, SUBTLE_SPRING: isWishlisted(busy[24]).SUBTLE_SPRING };
  class X {
    constructor() {
      value = closure_14.get();
      obj = {};
      merged = Object.assign(closure_6.animationFill);
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj2 = closure_0(closure_2[23]);
      num = 0;
      if (closure_13) {
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, tmp3(tmp4[24]).SUBTLE_SPRING, "animate-always");
      obj1 = { scale: null };
      tmp3Result = tmp3(tmp4[10]);
      obj1.scale = tmp3Result.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], tmp3(tmp4[10]).Extrapolation.CLAMP);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result5 = isWishlisted(busy[10]);
  X.__closure = { animationFillProgress: sharedValue, styles: tmp, withSpring: isWishlisted(busy[23]).withSpring, showFilled: tmp9, SUBTLE_SPRING: isWishlisted(busy[24]).SUBTLE_SPRING, interpolate: isWishlisted(busy[10]).interpolate, Extrapolation: isWishlisted(busy[10]).Extrapolation };
  X.__workletHash = 2843634374912;
  X.__initData = __initData2;
  const animatedStyle1 = tmp2Result5.useAnimatedStyle(X);
  const obj5 = { animationFillProgress: sharedValue, styles: tmp, withSpring: isWishlisted(busy[23]).withSpring, showFilled: tmp9, SUBTLE_SPRING: isWishlisted(busy[24]).SUBTLE_SPRING, interpolate: isWishlisted(busy[10]).interpolate, Extrapolation: isWishlisted(busy[10]).Extrapolation };
  class Y {
    constructor() {
      value = closure_14.get();
      obj = {};
      merged = Object.assign(closure_6.animationFill);
      num = 0;
      if (closure_13) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj2 = closure_0(closure_2[10]);
        tmp5 = closure_0;
        tmp6 = closure_2;
        tmp7 = obj2;
        tmp8 = value;
        num = obj2.interpolate(value, [0, 0.7], [1, 0], closure_0(closure_2[10]).Extrapolation.CLAMP);
      }
      obj.opacity = num;
      obj1 = { scale: null };
      obj4 = closure_0(closure_2[10]);
      obj1.scale = obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], closure_0(closure_2[10]).Extrapolation.CLAMP);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result6 = isWishlisted(busy[10]);
  Y.__closure = { animationFillProgress: sharedValue, styles: tmp, showFilled: tmp9, interpolate: isWishlisted(busy[10]).interpolate, Extrapolation: isWishlisted(busy[10]).Extrapolation };
  Y.__workletHash = 12506449270961;
  Y.__initData = __initData3;
  const obj7 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_6.button, closure_8, , , , ];
      let midnight = closure_7;
      if (closure_7) {
        midnight = closure_6.midnight;
      }
      items[2] = midnight;
      if (pressed) {
        pressed = !disabled;
      }
      if (pressed) {
        pressed = closure_9;
      }
      items[3] = pressed;
      if (disabled) {
        disabled = closure_6.disabled;
      }
      items[4] = disabled;
      items[5] = closure_1_4;
      return items;
    },
    onPress: callback,
    accessibilityRole: null,
    accessibilityLabel: null,
    accessibilityState: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null
  };
  let str = "togglebutton";
  const animatedStyle2 = tmp2Result6.useAnimatedStyle(Y);
  if (flag) {
    str = "none";
  }
  obj7.accessibilityRole = str;
  let accessibilityLabel;
  if (!flag) {
    accessibilityLabel = isWishlisted.accessibilityLabel;
  }
  obj7.accessibilityLabel = accessibilityLabel;
  let tmp20;
  if (!flag) {
    const obj8 = { checked: isWishlisted, busy, disabled };
    tmp20 = obj8;
  }
  obj7.accessibilityState = tmp20;
  obj7.accessibilityElementsHidden = flag;
  let str2 = "auto";
  if (flag) {
    str2 = "no-hide-descendants";
  }
  obj7.importantForAccessibility = str2;
  const obj9 = { style: null, children: null };
  const items3 = [tmp.iconContainer, { width: tmp5, height: tmp5 }];
  obj9.style = items3;
  const obj10 = { style: animatedStyle, pointerEvents: "none", children: null };
  const obj6 = { animationFillProgress: sharedValue, styles: tmp, showFilled: tmp9, interpolate: isWishlisted(busy[10]).interpolate, Extrapolation: isWishlisted(busy[10]).Extrapolation };
  const tmp18 = closure_9;
  obj10.children = closure_15(isWishlisted(busy[25]).HeartOutlineIcon, { size: dependencyMap2[size], color: onPress(busy[13]).colors.INTERACTIVE_ICON_DEFAULT });
  const items4 = [closure_15(onPress(busy[10]).View, obj10), , ];
  const obj12 = { style: animatedStyle1, pointerEvents: "none", children: null };
  const obj11 = { size: dependencyMap2[size], color: onPress(busy[13]).colors.INTERACTIVE_ICON_DEFAULT };
  obj12.children = closure_15(isWishlisted(busy[26]).HeartIcon, { size: dependencyMap2[size], color: onPress(busy[13]).unsafe_rawColors.RED_NEW_50 });
  items4[1] = closure_15(onPress(busy[10]).View, obj12);
  const obj14 = { style: animatedStyle2, pointerEvents: "none", children: closure_15(isWishlisted(busy[26]).HeartIcon, { size: dependencyMap2[size], color: "white" }) };
  items4[2] = closure_15(onPress(busy[10]).View, obj14);
  obj9.children = items4;
  obj7.children = closure_16(enabled, obj9);
  return closure_15(tmp18, obj7);
});
let closure_29 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = require("c").c(34);
  if (cResult[0] !== onPress) {
    ({ skuId, product } = onPress);
    dependencyMap = product;
    onPress = onPress.onPress;
    _require = onPress;
    const onTrackPress = onPress.onTrackPress;
    importDefault = onTrackPress;
    const tmp11 = _objectWithoutProperties(onPress, shouldShowWishlistNUXActionSheet);
    cResult[0] = onPress;
    cResult[1] = onPress;
    cResult[2] = onTrackPress;
    cResult[3] = product;
    cResult[4] = tmp11;
    cResult[5] = skuId;
    let tmp8 = skuId;
    let tmp7 = tmp11;
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
        return closure_1_11.getId();
      }
    }
    cResult[6] = items;
    cResult[7] = I;
    let tmp13 = I;
    let tmp12 = items;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class I {
      constructor() {
        return closure_1_11.getId();
      }
    }
    cResult[8] = items1;
    cResult[9] = tmp19;
    let tmp17 = tmp19;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp16, tmp17);
  const tmp21 = useWishlistNUXActionSheetDefault();
  shouldShowWishlistNUXActionSheet = tmp21.shouldShowWishlistNUXActionSheet;
  const showWishlistNUXActionSheet = tmp21.showWishlistNUXActionSheet;
  if (cResult[10] !== product.name) {
    const intl = tmp(1126).intl;
    class I {
      constructor() {
        return closure_1_11.getId();
      }
    }
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["7kFjeK"], { productName: null });
    cResult[10] = product.name;
    cResult[11] = formatToPlainStringResult;
    let tmp22 = formatToPlainStringResult;
    obj2 = { productName: null };
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === product) {
    if (cResult[13] === shouldShowWishlistNUXActionSheet) {
      if (cResult[14] === showWishlistNUXActionSheet) {
        let tmp24 = cResult[15];
      }
      const _Symbol = Symbol;
      class I {
        constructor() {
          return closure_1_11.getId();
        }
      }
      asyncGeneratorStep = tmp26;
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function x() {
          ToastActionCreatorsDefault.open({ key: "WISHLIST_ERROR", content });
        };
        cResult[17] = fn2;
        class I {
          constructor() {
            return closure_1_11.getId();
          }
        }
      } else {
        const tmp27 = cResult[17];
      }
      if (cResult[18] === stateFromStores) {
        if (cResult[19] === tmp24) {
          if (cResult[20] === shouldShowWishlistNUXActionSheet) {
            if (cResult[21] === tmp8) {
              let tmp28 = cResult[22];
            }
            const wishlistButtonState = tmp(8485).useWishlistButtonState(tmp28);
            class I {
              constructor() {
                return closure_1_11.getId();
              }
            }
            _objectWithoutProperties = tmp30;
            ({ isBusy, handleToggle } = wishlistButtonState);
            if (cResult[23] === handleToggle) {
              if (cResult[24] === tmp30) {
                if (cResult[25] === tmp4) {
                  if (cResult[26] === tmp5) {
                    let tmp31 = cResult[27];
                  }
                  if (null == stateFromStores1) {
                    return null;
                  } else {
                    if (cResult[28] === tmp22) {
                      if (cResult[29] === tmp31) {
                        if (cResult[30] === isBusy) {
                          if (cResult[31] === tmp30) {
                          }
                        }
                      }
                    }
                    class I {
                      constructor() {
                        return closure_1_11.getId();
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
                }
              }
            }
            _require = asyncGeneratorStep(async () => {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                    } else if (c1 == null) {
                      if (c0 != null) {
                        tmp9();
                      }
                      c1 = 1;
                      c0 = 1;
                      const obj4 = { value: handleToggle(), done: false };
                      return obj4;
                    } else {
                      let tmp5Result = ShopCtaEnum;
                      if (_objectWithoutProperties) {
                        let ADD_TO_WISHLIST = tmp5Result.REMOVE_FROM_WISHLIST;
                      } else {
                        ADD_TO_WISHLIST = tmp5Result.ADD_TO_WISHLIST;
                      }
                      tmp5Result = tmp5(ADD_TO_WISHLIST);
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
                  c0 = tmp;
                  throw tmp12;
                }
              }
            });
            const fn3 = function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            cResult[23] = handleToggle;
            cResult[24] = tmp30;
            cResult[25] = tmp4;
            cResult[26] = tmp5;
            cResult[27] = fn3;
            tmp31 = fn3;
            const tmpResult4 = tmp(8485);
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
  const tmpResult3 = require("initialize");
}) : ((skuId) => {
  const product = skuId.product;
  const require = product;
  const onPress = skuId.onPress;
  const onTrackPress = skuId.onTrackPress;
  let tmp = null;
  const merged = Object.assign(skuId, Object.assign({ skuId: 0, product: 0, onPress: 0, onTrackPress: 0 }));
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id.getId());
  obj = require("initialize");
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp5 = onPress(onTrackPress[28])();
  const shouldShowWishlistNUXActionSheet = tmp5.shouldShowWishlistNUXActionSheet;
  const showWishlistNUXActionSheet = tmp5.showWishlistNUXActionSheet;
  const intl = require("util").intl;
  const items2 = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, product];
  obj2 = require("initialize");
  let obj3 = { productName: product.name };
  const callback = noop.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(product);
    }
  }, items2);
  const intl2 = require("util").intl;
  const stringResult = intl2.string(require("util").t.F8FvUy);
  c5 = stringResult;
  const items3 = [stringResult];
  const callback1 = noop.useCallback(() => {
    ToastActionCreatorsDefault.open({ key: "WISHLIST_ERROR", content });
  }, items3);
  const formatToPlainStringResult = intl.formatToPlainString(require("util").t["7kFjeK"], { productName: product.name });
  const wishlistButtonState = require("useWishlistButtonState").useWishlistButtonState({ userId: stateFromStores, skuId: skuId.skuId, onAddSuccess: callback, onError: callback1, skipAddAnnouncement: shouldShowWishlistNUXActionSheet });
  const isWishlisted = wishlistButtonState.isWishlisted;
  const handleToggle = wishlistButtonState.handleToggle;
  const items4 = [onPress, onTrackPress, isWishlisted, handleToggle];
  if (null != stateFromStores1) {
    const obj5 = { isWishlisted, onPress: tmp11, busy: wishlistButtonState.isBusy, accessibilityLabel: formatToPlainStringResult };
    const merged1 = Object.assign(merged);
    tmp = closure_15(closure_29, obj5);
  }
  return tmp;
});
let closure_30 = tmp5;
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  if (cResult[0] !== arg0) {
    ({ selectedProduct, onTrackPress } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = onTrackPress;
    cResult[2] = tmp9;
    cResult[3] = selectedProduct;
    let tmp6 = selectedProduct;
    let tmp5 = tmp9;
    let tmp4 = onTrackPress;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const skuId = tmp6.skuId;
  if (cResult[4] !== tmp6) {
    const result = CollectiblesWishlistUtils.isWishlistableCollectiblesProduct(tmp6);
    cResult[4] = tmp6;
    cResult[5] = result;
    let tmp10 = result;
    const tmpResult2 = CollectiblesWishlistUtils;
  } else {
    tmp10 = cResult[5];
  }
  if (tmpResult.useProductPurchaseState(tmp6).isPurchased) {
    return null;
  } else {
    if (cResult[6] === tmp4) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp12) {
            if (cResult[10] === skuId) {
              let tmp13 = cResult[11];
            }
            return tmp13;
          }
        }
      }
    }
    obj2 = { skuId, product: tmp6, disabled: !tmp10, onTrackPress: tmp4 };
    const merged = Object.assign(tmp5);
    const tmp19 = closure_1_15(closure_30, obj2);
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = tmp6;
    cResult[9] = !tmp10;
    cResult[10] = skuId;
    cResult[11] = tmp19;
    tmp13 = tmp19;
  }
  tmpResult = useProductPurchaseState;
}) : ((selectedProduct) => {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  const merged = Object.assign(selectedProduct, Object.assign({ selectedProduct: 0, onTrackPress: 0 }));
  CollectiblesWishlistUtils;
  if (!obj.useProductPurchaseState(selectedProduct).isPurchased) {
    obj2 = { skuId: selectedProduct.skuId, product: selectedProduct, disabled: !tmp4, onTrackPress: selectedProduct.onTrackPress };
    const merged1 = Object.assign(merged);
    tmp = closure_1_15(closure_30, obj2);
  }
  return tmp;
});
export const WishlistButtonBase = tmp4;
export const WishlistButton = tmp5;