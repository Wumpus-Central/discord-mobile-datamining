// === Module 9556: WishlistButtonBase ===

// Module 9556 (WishlistButtonBase)
import ThemesDefault from "Themes" /* 712 */;
import ManaContext from "ManaContext" /* 4108 */;
import getProductNameAndTypeFromSku from "getProductNameAndTypeFromSku" /* 9498 */;
import getProductPurchaseState from "getProductPurchaseState" /* 9559 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import { ShopCtaEnum } from "items" /* 678 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import { Easing } from "module_4120" /* 4120 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
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
    tmp5 = require("ICON_SIZE").ICON_SIZE[closure_16[size]];
    obj = require("ManaContext");
    theme = obj.useThemeContext().theme;
    obj2 = require("AccessibilityAnnouncer");
    isThemeLightResult = obj2.isThemeLight(theme);
    closure_7 = theme === closure_11.MIDNIGHT;
    dark = isThemeLightResult ? tmp.light : tmp.dark;
    darkPressed = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    obj3 = onTrackPress;
    enabled = onTrackPress.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp7 = style(onTrackPress.useState(false), 2);
    first = tmp7[0];
    closure_11 = first;
    closure_12 = tmp7[1];
    tmp9 = isWishlisted;
    if (!isWishlisted) {
      tmp9 = first;
    }
    closure_13 = tmp9;
    tmp2Result = require("module_4120");
    num = 0;
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = tmp2Result.useSharedValue(num);
    closure_14 = sharedValue;
    items = [, , , , , , ];
    items[0] = disabled;
    items[1] = busy;
    items[2] = onPress;
    items[3] = isWishlisted;
    items[4] = enabled;
    items[5] = first;
    items[6] = onTrackPress;
    items1 = [, , ];
    items1[0] = isWishlisted;
    items1[1] = first;
    items1[2] = sharedValue;
    callback = obj3.useCallback(() => {
      if (disabled) {
        obj = onPress(busy[17]);
        obj = { key: "WISHLIST_DISABLED", content: null };
        const intl = isWishlisted(busy[18]).intl;
        obj[1] = intl.string(isWishlisted(busy[18]).t["50TX9k"]);
        obj.open(obj);
      } else if (!busy) {
        if (onTrackPress == null) {
          let tmp7 = isWishlisted;
          if (!isWishlisted) {
            if (!enabled) {
              callback(true);
            }
            if (onPress != null) {
              tmp13();
            }
          }
          if (tmp7) {
            tmp7 = first;
          }
          if (tmp7) {
            callback(false);
          }
        } else {
          tmp2(isWishlisted ? enabled.REMOVE_FROM_WISHLIST : enabled.ADD_TO_WISHLIST);
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
    items2 = [, ];
    items2[0] = first;
    items2[1] = sharedValue;
    effect1 = obj3.useEffect(() => {
      if (first) {
        let result = sharedValue.set(0);
        const _requestAnimationFrame = requestAnimationFrame;
        closure_0 = requestAnimationFrame(() => {
          obj = callback(closure_1_2[19]);
          const fn = function t(arg0) {
            if (arg0) {
              closure_1_0(closure_1_2[9]).runOnJS(closure_12)(false);
              obj = closure_1_0(closure_1_2[9]);
            }
          };
          obj = { runOnJS: callback(closure_1_2[9]).runOnJS, setIsClickAnimating: closure_12 };
          fn.__closure = obj;
          fn.__workletHash = 13061953734403;
          fn.__initData = closure_1_18;
          const result = closure_14.set(obj.withTiming(1, closure_1_14, "animate-always", fn));
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    tmp2Result1 = require("module_4120");
    class J {
      constructor() {
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        tmp2 = isWishlisted;
        tmp3 = busy;
        obj2 = require("CONFIG_NEVER_ANIMATE");
        num = 1;
        num2 = 1;
        tmp4 = closure_13;
        if (closure_13) {
          num2 = 0;
        }
        obj.opacity = obj2.withSpring(num2, require("SUBTLE_SPRING").SUBTLE_SPRING, "animate-always");
        tmp2Result = require("CONFIG_NEVER_ANIMATE");
        if (tmp4) {
          num = 0.9;
        }
        obj = { scale: tmp2Result.withSpring(num, require("SUBTLE_SPRING").SUBTLE_SPRING, "animate-always") };
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    obj = { styles: tmp, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, showFilled: tmp9, SUBTLE_SPRING: require("SUBTLE_SPRING").SUBTLE_SPRING };
    J.__closure = obj;
    J.__workletHash = 1357254413161;
    J.__initData = closure_19;
    animatedStyle = tmp2Result1.useAnimatedStyle(J);
    tmp2Result2 = require("module_4120");
    class Y {
      constructor() {
        value = closure_14.get();
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        tmp3 = isWishlisted;
        tmp4 = busy;
        obj2 = require("CONFIG_NEVER_ANIMATE");
        num = 0;
        if (closure_13) {
          num = 1;
        }
        obj.opacity = obj2.withSpring(num, require("SUBTLE_SPRING").SUBTLE_SPRING, "animate-always");
        obj = { scale: null };
        tmp3Result = require("module_4120");
        obj[0] = tmp3Result.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], require("module_4120").Extrapolation.CLAMP);
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    obj1 = { animationFillProgress: sharedValue, styles: tmp, withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, showFilled: tmp9, SUBTLE_SPRING: require("SUBTLE_SPRING").SUBTLE_SPRING, interpolate: require("module_4120").interpolate, Extrapolation: require("module_4120").Extrapolation };
    Y.__closure = obj1;
    Y.__workletHash = 15039903885060;
    Y.__initData = closure_20;
    animatedStyle1 = tmp2Result2.useAnimatedStyle(Y);
    tmp2Result3 = require("module_4120");
    class K {
      constructor() {
        value = closure_14.get();
        obj = {};
        merged = Object.assign(closure_6.animationFill);
        num = 0;
        if (closure_13) {
          tmp3 = isWishlisted;
          tmp4 = busy;
          obj2 = require("module_4120");
          tmp5 = isWishlisted;
          tmp6 = busy;
          tmp7 = obj2;
          tmp8 = value;
          num = obj2.interpolate(value, [0, 0.7], [1, 0], require("module_4120").Extrapolation.CLAMP);
        }
        obj.opacity = num;
        obj = { scale: null };
        obj4 = require("module_4120");
        obj[0] = obj4.interpolate(value, [0, 0.625, 1], [0, 1.35, 1], require("module_4120").Extrapolation.CLAMP);
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    obj2 = { animationFillProgress: sharedValue, styles: tmp, showFilled: tmp9, interpolate: require("module_4120").interpolate, Extrapolation: require("module_4120").Extrapolation };
    K.__closure = obj2;
    K.__workletHash = 12429379889426;
    K.__initData = closure_21;
    tmp17 = closure_12;
    obj3 = {
      style(pressed) {
            pressed = pressed.pressed;
            const items = [closure_6.button, closure_8, , , , ];
            let midnight = closure_7;
            if (closure_7) {
              midnight = tmp.midnight;
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
              disabled = tmp.disabled;
            }
            items[4] = disabled;
            items[5] = closure_4;
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
    str = "togglebutton";
    animatedStyle2 = tmp2Result3.useAnimatedStyle(K);
    tmp18 = closure_6;
    if (flag) {
      str = "none";
    }
    obj3[2] = str;
    accessibilityLabel = undefined;
    if (!flag) {
      accessibilityLabel = global.accessibilityLabel;
    }
    obj3[3] = accessibilityLabel;
    tmp20 = undefined;
    if (!flag) {
      obj4 = { checked: null, busy: null, disabled: null };
      obj4[0] = isWishlisted;
      obj4[1] = busy;
      obj4[2] = disabled;
      tmp20 = obj4;
    }
    obj3[4] = tmp20;
    obj3[5] = flag;
    str2 = "auto";
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj3[6] = str2;
    obj5 = { style: items3, children: null };
    items3 = [, ];
    items3[0] = tmp.iconContainer;
    items3[1] = { width: tmp5, height: tmp5 };
    obj6 = { style: animatedStyle, pointerEvents: "none", children: null };
    obj7 = { size: tmp4[size], color: require("Themes").colors.INTERACTIVE_ICON_DEFAULT };
    obj6[2] = tmp17(require("HeartOutlineIcon").HeartOutlineIcon, obj7);
    items4 = [, , ];
    items4[0] = tmp17(require("module_4120").View, obj6);
    obj8 = { style: animatedStyle1, pointerEvents: "none", children: null };
    obj9 = { size: tmp4[size], color: require("Themes").unsafe_rawColors.RED_NEW_50 };
    obj8[2] = tmp17(require("HeartIcon").HeartIcon, obj9);
    items4[1] = tmp17(require("module_4120").View, obj8);
    obj10 = { style: animatedStyle2, pointerEvents: "none", children: tmp17(require("HeartIcon").HeartIcon, obj11) };
    obj11 = { size: tmp4[size], color: "white" };
    items4[2] = tmp17(require("module_4120").View, obj10);
    obj5[1] = items4;
    obj3[7] = closure_13(closure_7, obj5);
    return tmp17(tmp18, obj3);
  }
}
class WishlistButton {
  constructor(arg0) {
    product = global.product;
    closure_0 = product;
    onPress = global.onPress;
    onTrackPress = global.onTrackPress;
    tmp = null;
    merged = Object.assign(global, Object.create(null));
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    isWishlisted = undefined;
    handleToggle = undefined;
    obj = require("initialize");
    items = [];
    items[0] = closure_8;
    stateFromStores = obj.useStateFromStores(items, () => id.getId());
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
    tmp5 = require("useWishlistNUXActionSheet")();
    shouldShowWishlistNUXActionSheet = tmp5.shouldShowWishlistNUXActionSheet;
    closure_3 = shouldShowWishlistNUXActionSheet;
    showWishlistNUXActionSheet = tmp5.showWishlistNUXActionSheet;
    closure_4 = showWishlistNUXActionSheet;
    intl = require("getSystemLocale").intl;
    obj = { productName: product.name };
    items2 = [, , ];
    items2[0] = shouldShowWishlistNUXActionSheet;
    items2[1] = showWishlistNUXActionSheet;
    items2[2] = product;
    formatToPlainStringResult = intl.formatToPlainString(require("getSystemLocale").t["7kFjeK"], obj);
    callback = closure_5.useCallback(() => {
      if (shouldShowWishlistNUXActionSheet) {
        showWishlistNUXActionSheet(closure_0);
      }
    }, items2);
    intl2 = require("getSystemLocale").intl;
    stringResult = intl2.string(require("getSystemLocale").t.F8FvUy);
    closure_5 = stringResult;
    items3 = [];
    items3[0] = stringResult;
    callback1 = closure_5.useCallback(() => {
      obj = onPress(onTrackPress[17]);
      obj = { key: "WISHLIST_ERROR", content: c5 };
      obj.open(obj);
    }, items3);
    obj4 = require("useWishlistButtonState");
    wishlistButtonState = obj4.useWishlistButtonState({ userId: stateFromStores, skuId: global.skuId, onAddSuccess: callback, onError: callback1, skipAddAnnouncement: shouldShowWishlistNUXActionSheet });
    isWishlisted = wishlistButtonState.isWishlisted;
    handleToggle = wishlistButtonState.handleToggle;
    items4 = [, , , ];
    items4[0] = onPress;
    items4[1] = onTrackPress;
    items4[2] = isWishlisted;
    items4[3] = handleToggle;
    if (null != stateFromStores1) {
      tmp12 = jsx;
      tmp13 = WishlistButtonBase;
      obj1 = { isWishlisted: null, onPress: null, busy: null, accessibilityLabel: null };
      obj1[0] = isWishlisted;
      obj1[1] = tmp11;
      obj1[2] = wishlistButtonState.isBusy;
      obj1[3] = formatToPlainStringResult;
      tmp14 = obj1;
      tmp15 = merged;
      merged1 = Object.assign(merged);
      tmp = jsx(WishlistButtonBase, obj1);
    }
    return tmp;
  }
}
({ Pressable: closure_6, View: error } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { duration: 400, easing: null };
obj[1] = Easing.bezier(0.67, 0, 0.26, 1);
obj = { sm: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT, md: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT };
let closure_16 = { sm: "sm", md: "md" };
let closure_17 = createCacheKey.createStyles((arg0) => {
  obj = { button: null, light: null, lightPressed: null, dark: null, darkPressed: null, midnight: null, disabled: null, iconContainer: null, animationFill: null };
  obj = { width: obj[arg0], height: obj[arg0], display: "flex", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, borderWidth: 1, borderColor: ThemesDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
  obj[0] = obj;
  obj = { backgroundColor: null };
  let obj3 = ManaContext;
  obj[0] = obj3.setColorOpacity("white", 0.72);
  obj[1] = obj;
  obj1 = { backgroundColor: ManaContext.setColorOpacity("white", 0.62) };
  obj[2] = obj1;
  const obj6 = ManaContext;
  obj[3] = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj3 = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
  obj[4] = obj3;
  const obj2 = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  obj[5] = { borderColor: ThemesDefault.colors.BORDER_STRONG };
  obj[6] = { opacity: 0.5 };
  obj[7] = { position: "relative", alignItems: "center", justifyContent: "center" };
  obj[8] = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" };
  return obj;
});
let closure_18 = { code: "function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}" };
let closure_19 = { code: "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}" };
let closure_20 = { code: "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let closure_21 = { code: "function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}" };
let result = require("set").fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default function CollectiblesWishlistButton(selectedProduct) {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  const merged = Object.assign(selectedProduct, Object.create(null));
  obj = getProductPurchaseState;
  getProductNameAndTypeFromSku;
  if (!obj.useProductPurchaseState(selectedProduct).isPurchased) {
    obj = { skuId: null, product: null, disabled: null, onTrackPress: null };
    obj[0] = selectedProduct.skuId;
    obj[1] = selectedProduct;
    obj[2] = !tmp4;
    obj[3] = selectedProduct.onTrackPress;
    const merged1 = Object.assign(merged);
    tmp = callback2(WishlistButton, obj);
  }
  return tmp;
};
export { WishlistButtonBase };
export { WishlistButton };