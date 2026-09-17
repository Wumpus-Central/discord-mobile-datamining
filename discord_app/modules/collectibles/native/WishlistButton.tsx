// discord_app/modules/collectibles/native/WishlistButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import CollectiblesWishlistUtils from "../../wishlists/CollectiblesWishlistUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
class WishlistButtonBase {
  constructor(arg0) {
    isWishlisted = global.isWishlisted;
    onPress = global.onPress;
    busy = global.busy;
    disabled = global.disabled;
    flag = global.accessibilityHidden;
    if (flag === undefined) {
      flag = false;
    }
    ({ style, size } = global);
    if (size === undefined) {
      size = "sm";
    }
    onTrackPress = global.onTrackPress;
    closure_6 = undefined;
    closure_7 = undefined;
    dark = undefined;
    darkPressed = undefined;
    enabled = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    tmp = closure_17(size);
    closure_6 = tmp;
    tmp2 = isWishlisted;
    tmp3 = busy;
    tmp4 = closure_16;
    tmp5 = isWishlisted(busy[14]).ICON_SIZE[closure_16[size]];
    obj = isWishlisted(busy[13]);
    theme = obj.useThemeContext().theme;
    obj2 = isWishlisted(busy[15]);
    isThemeLightResult = obj2.isThemeLight(theme);
    closure_7 = theme === closure_11.ONYX;
    dark = isThemeLightResult ? tmp.light : tmp.dark;
    darkPressed = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    obj3 = onTrackPress;
    enabled = onTrackPress.useContext(tmp2(tmp3[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp7 = style(onTrackPress.useState(false), 2);
    first = tmp7[0];
    closure_11 = first;
    closure_12 = tmp7[1];
    tmp9 = isWishlisted;
    if (!isWishlisted) {
      tmp9 = first;
    }
    closure_13 = tmp9;
    tmp2Result = tmp2(tmp3[9]);
    num = 0;
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = tmp2Result.useSharedValue(num);
    closure_14 = sharedValue;
    items = [, , , , , ,];
    items[0] = disabled;
    items[1] = busy;
    items[2] = onPress;
    items[3] = isWishlisted;
    items[4] = enabled;
    items[5] = first;
    items[6] = onTrackPress;
    items1 = [, ,];
    items1[0] = isWishlisted;
    items1[1] = first;
    items1[2] = sharedValue;
    callback = obj3.useCallback(() => {
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
    effect = obj3.useEffect(() => {
      if (!first) {
        let num = 0;
        if (isWishlisted) {
          num = 1;
        }
        const result = sharedValue.set(num);
      }
    }, items1);
    items2 = [,];
    items2[0] = first;
    items2[1] = sharedValue;
    effect1 = obj3.useEffect(() => {
      if (first) {
        let result = sharedValue.set(0);
        const _requestAnimationFrame = requestAnimationFrame;
        closure_0 = requestAnimationFrame(() => {
          const fn = function t(arg0) {
            if (arg0) {
              closure_0(busy[9]).runOnJS(setIsClickAnimating)(false);
              obj = closure_0(busy[9]);
            }
          };
          obj = isWishlisted(busy[19]);
          fn.__closure = { runOnJS: isWishlisted(busy[9]).runOnJS, setIsClickAnimating };
          fn.__workletHash = 13061953734403;
          fn.__initData = __initData;
          const result = closure_1_14.set(obj.withTiming(1, sharedValue, "animate-always", fn));
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    tmp2Result1 = tmp2(tmp3[9]);
    fn = function z() {
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
    obj1 = {
      styles: tmp,
      withSpring: tmp2(tmp3[20]).withSpring,
      showFilled: tmp9,
      SUBTLE_SPRING: tmp2(tmp3[21]).SUBTLE_SPRING,
    };
    fn.__closure = obj1;
    fn.__workletHash = 1357254413161;
    fn.__initData = closure_19;
    animatedStyle = tmp2Result1.useAnimatedStyle(fn);
    tmp2Result2 = tmp2(tmp3[9]);
    class J {
      constructor() {
        value = closure_14.get();
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj2 = closure_0(closure_2[20]);
        num = 0;
        if (closure_13) {
          num = 1;
        }
        obj.opacity = obj2.withSpring(num, tmp3(tmp4[21]).SUBTLE_SPRING, "animate-always");
        obj1 = { scale: null };
        tmp3Result = tmp3(tmp4[9]);
        obj1.scale = tmp3Result.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], tmp3(tmp4[9]).Extrapolation.CLAMP);
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    obj20 = {
      animationFillProgress: sharedValue,
      styles: tmp,
      withSpring: tmp2(tmp3[20]).withSpring,
      showFilled: tmp9,
      SUBTLE_SPRING: tmp2(tmp3[21]).SUBTLE_SPRING,
      interpolate: tmp2(tmp3[9]).interpolate,
      Extrapolation: tmp2(tmp3[9]).Extrapolation,
    };
    J.__closure = obj20;
    J.__workletHash = 15039903885060;
    J.__initData = closure_20;
    animatedStyle1 = tmp2Result2.useAnimatedStyle(J);
    tmp2Result3 = tmp2(tmp3[9]);
    class X {
      constructor() {
        value = closure_14.get();
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        num = 0;
        if (closure_13) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj2 = closure_0(closure_2[9]);
          tmp5 = closure_0;
          tmp6 = closure_2;
          tmp7 = obj2;
          tmp8 = value;
          num = obj2.interpolate(value, [0, 0.7], [1, 0], closure_0(closure_2[9]).Extrapolation.CLAMP);
        }
        obj.opacity = num;
        obj1 = { scale: null };
        obj4 = closure_0(closure_2[9]);
        obj1.scale = obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], closure_0(closure_2[9]).Extrapolation.CLAMP);
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    obj21 = {
      animationFillProgress: sharedValue,
      styles: tmp,
      showFilled: tmp9,
      interpolate: tmp2(tmp3[9]).interpolate,
      Extrapolation: tmp2(tmp3[9]).Extrapolation,
    };
    X.__closure = obj21;
    X.__workletHash = 12429379889426;
    X.__initData = closure_21;
    tmp17 = closure_12;
    obj22 = {
      style(pressed) {
        pressed = pressed.pressed;
        const items = [closure_6.button, closure_8, , , ,];
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
        items[5] = _slicedToArray;
        return items;
      },
      onPress: callback,
      accessibilityRole: null,
      accessibilityLabel: null,
      accessibilityState: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    str = "togglebutton";
    animatedStyle2 = tmp2Result3.useAnimatedStyle(X);
    tmp18 = closure_6;
    if (flag) {
      str = "none";
    }
    obj22.accessibilityRole = str;
    accessibilityLabel = undefined;
    if (!flag) {
      accessibilityLabel = global.accessibilityLabel;
    }
    obj22.accessibilityLabel = accessibilityLabel;
    tmp20 = undefined;
    if (!flag) {
      obj23 = { checked: null, busy: null, disabled: null };
      obj23.checked = isWishlisted;
      obj23.busy = busy;
      obj23.disabled = disabled;
      tmp20 = obj23;
    }
    obj22.accessibilityState = tmp20;
    obj22.accessibilityElementsHidden = flag;
    str2 = "auto";
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj22.importantForAccessibility = str2;
    obj24 = { style: null, children: null };
    items3 = [,];
    items3[0] = tmp.iconContainer;
    items3[1] = { width: tmp5, height: tmp5 };
    obj24.style = items3;
    obj25 = { style: animatedStyle, pointerEvents: "none", children: null };
    obj26 = { size: tmp4[size], color: onPress(tmp3[12]).colors.INTERACTIVE_ICON_DEFAULT };
    obj25.children = tmp17(tmp2(tmp3[22]).HeartOutlineIcon, obj26);
    items4 = [, ,];
    items4[0] = tmp17(onPress(tmp3[9]).View, obj25);
    obj27 = { style: animatedStyle1, pointerEvents: "none", children: null };
    obj28 = { size: tmp4[size], color: onPress(tmp3[12]).unsafe_rawColors.RED_NEW_50 };
    obj27.children = tmp17(tmp2(tmp3[23]).HeartIcon, obj28);
    items4[1] = tmp17(onPress(tmp3[9]).View, obj27);
    obj29 = { style: animatedStyle2, pointerEvents: "none", children: null };
    obj30 = { size: tmp4[size], color: "white" };
    obj29.children = tmp17(tmp2(tmp3[23]).HeartIcon, obj30);
    items4[2] = tmp17(onPress(tmp3[9]).View, obj29);
    obj24.children = items4;
    obj22.children = closure_13(closure_7, obj24);
    return tmp17(tmp18, obj22);
  }
}
class WishlistButton {
  constructor(arg0) {
    product = global.product;
    closure_0 = product;
    onPress = global.onPress;
    onTrackPress = global.onTrackPress;
    tmp = null;
    merged = Object.assign(global, Object.assign({ skuId: 0, product: 0, onPress: 0, onTrackPress: 0 }));
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    isWishlisted = undefined;
    handleToggle = undefined;
    obj = closure_0(onTrackPress[24]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj.useStateFromStores(items, () => id.getId());
    obj2 = closure_0(onTrackPress[24]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
    tmp5 = onPress(onTrackPress[25])();
    shouldShowWishlistNUXActionSheet = tmp5.shouldShowWishlistNUXActionSheet;
    closure_3 = shouldShowWishlistNUXActionSheet;
    showWishlistNUXActionSheet = tmp5.showWishlistNUXActionSheet;
    closure_4 = showWishlistNUXActionSheet;
    intl = closure_0(onTrackPress[18]).intl;
    obj1 = { productName: product.name };
    items2 = [, ,];
    items2[0] = shouldShowWishlistNUXActionSheet;
    items2[1] = showWishlistNUXActionSheet;
    items2[2] = product;
    formatToPlainStringResult = intl.formatToPlainString(closure_0(onTrackPress[18]).t["7kFjeK"], obj1);
    callback = closure_5.useCallback(() => {
      if (shouldShowWishlistNUXActionSheet) {
        showWishlistNUXActionSheet(product);
      }
    }, items2);
    intl2 = closure_0(onTrackPress[18]).intl;
    stringResult = intl2.string(closure_0(onTrackPress[18]).t.F8FvUy);
    closure_5 = stringResult;
    items3 = [];
    items3[0] = stringResult;
    callback1 = closure_5.useCallback(() => {
      ToastActionCreatorsDefault.open({ key: "WISHLIST_ERROR", content });
    }, items3);
    obj4 = closure_0(onTrackPress[26]);
    wishlistButtonState = obj4.useWishlistButtonState({
      userId: stateFromStores,
      skuId: global.skuId,
      onAddSuccess: callback,
      onError: callback1,
      skipAddAnnouncement: shouldShowWishlistNUXActionSheet,
    });
    isWishlisted = wishlistButtonState.isWishlisted;
    handleToggle = wishlistButtonState.handleToggle;
    items4 = [, , ,];
    items4[0] = onPress;
    items4[1] = onTrackPress;
    items4[2] = isWishlisted;
    items4[3] = handleToggle;
    if (null != stateFromStores1) {
      tmp12 = jsx;
      tmp13 = WishlistButtonBase;
      obj6 = { isWishlisted: null, onPress: null, busy: null, accessibilityLabel: null };
      obj6.isWishlisted = isWishlisted;
      obj6.onPress = tmp11;
      obj6.busy = wishlistButtonState.isBusy;
      obj6.accessibilityLabel = formatToPlainStringResult;
      tmp14 = obj6;
      tmp15 = merged;
      merged1 = Object.assign(merged);
      tmp = jsx(WishlistButtonBase, obj6);
    }
    return tmp;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { duration: 400, easing: null };
const Easing = fn(4376).Easing;
obj.easing = Easing.bezier(0.67, 0, 0.26, 1);
let obj2 = { sm: fn(5067).SMALL_BUTTON_HEIGHT, md: fn(5067).MEDIUM_BUTTON_HEIGHT };
let value = { sm: "sm", md: "md" };
const createStyles = fn(4640);
let closure_17 = createStyles.createStyles((arg0) => {
  obj = {
    button: null,
    light: null,
    lightPressed: null,
    dark: null,
    darkPressed: null,
    midnight: null,
    disabled: null,
    iconContainer: null,
    animationFill: null,
  };
  const size = {
    width: obj2[arg0],
    height: obj2[arg0],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.round,
    borderWidth: 1,
    borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
  };
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
let closure_18 = {
  code: "function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}",
};
let __initData = {
  code: "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}",
};
const __initData2 = {
  code: "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}",
};
__initData = {
  code: "function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default function CollectiblesWishlistButton(selectedProduct) {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  const merged = Object.assign(selectedProduct, Object.assign({ selectedProduct: 0, onTrackPress: 0 }));
  CollectiblesWishlistUtils;
  if (!obj.useProductPurchaseState(selectedProduct).isPurchased) {
    obj2 = {
      skuId: selectedProduct.skuId,
      product: selectedProduct,
      disabled: !tmp4,
      onTrackPress: selectedProduct.onTrackPress,
    };
    const merged1 = Object.assign(merged);
    tmp = closure_1_12(WishlistButton, obj2);
  }
  return tmp;
}
export { WishlistButtonBase };
export { WishlistButton };
