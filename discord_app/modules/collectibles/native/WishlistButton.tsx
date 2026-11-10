// === Module 9624: WishlistButton ===

// Module 9624 (WishlistButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import native from "native" /* 5201 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import CollectiblesWishlistUtils from "CollectiblesWishlistUtils" /* 9553 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
class WishlistButtonBase {
  constructor(arg0) {
    isWishlisted = global.isWishlisted;
    closure_0 = isWishlisted;
    onPress = global.onPress;
    closure_1 = onPress;
    busy = global.busy;
    closure_2 = busy;
    disabled = global.disabled;
    closure_3 = disabled;
    flag = global.accessibilityHidden;
    if (flag === undefined) {
      flag = false;
    }
    ({ style: closure_4, size } = global);
    if (size === undefined) {
      size = "sm";
    }
    onTrackPress = global.onTrackPress;
    closure_5 = onTrackPress;
    closure_6 = undefined;
    closure_7 = undefined;
    dark = undefined;
    darkPressed = undefined;
    enabled = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    tmp = closure_17(size);
    closure_6 = tmp;
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp4 = closure_16;
    tmp5 = closure_0(closure_2[14]).ICON_SIZE[closure_16[size]];
    obj = closure_0(closure_2[13]);
    theme = obj.useThemeContext().theme;
    obj2 = closure_0(closure_2[15]);
    isThemeLightResult = obj2.isThemeLight(theme);
    closure_7 = theme === closure_11.ONYX;
    dark = isThemeLightResult ? tmp.light : tmp.dark;
    darkPressed = isThemeLightResult ? tmp.lightPressed : tmp.darkPressed;
    obj3 = closure_5;
    enabled = closure_5.useContext(tmp2(tmp3[16]).AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp7 = closure_4(closure_5.useState(false), 2);
    first = tmp7[0];
    closure_11 = first;
    closure_12 = tmp7[1];
    tmp9 = isWishlisted;
    if (!isWishlisted) {
      tmp9 = first;
    }
    tmp2Result = tmp2(tmp3[9]);
    num = 0;
    if (isWishlisted) {
      num = 1;
    }
    sharedValue = tmp2Result.useSharedValue(num);
    closure_13 = sharedValue;
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
      if (c3) {
        obj2 = { text: null };
        const intl = util.intl;
        obj2.text = intl.string(util.t["50TX9k"]);
        ToastActionCreatorsDefault.open("WISHLIST_DISABLED", obj2);
      } else if (!c2) {
        if (c5 == null) {
          let tmp7 = c0;
          if (!c0) {
            if (!enabled) {
              closure_12(true);
            }
            if (c1 != null) {
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
          tmp2(c0 ? ShopCtaEnum.REMOVE_FROM_WISHLIST : ShopCtaEnum.ADD_TO_WISHLIST);
        }
      }
    }, items);
    effect = obj3.useEffect(() => {
      if (!first) {
        let num = 0;
        if (c0) {
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
          items = [closure_2_18, c0(1705).scheduleOnRN, closure_1_12];
          c0 = undefined;
          c1 = undefined;
          [tmp3, tmp4, tmp5] = items;
          class WishlistButtonTsx1 {
            constructor(arg0) {
              if (arg0) {
                tmp = closure_0;
                tmp2 = closure_1;
                flag = false;
                tmp3 = closure_0(closure_1, false);
              }
              return;
            }
          }
          const items1 = [tmp4, tmp5];
          WishlistButtonTsx1.__closure = items1;
          WishlistButtonTsx1.__workletHash = 12515096529687;
          WishlistButtonTsx1.__initData = tmp3;
          const result = sharedValue.set(c0(5372).withTiming(1, obj, "animate-always", WishlistButtonTsx1));
          obj = c0(5372);
        });
        return () => cancelAnimationFrame(closure_0);
      }
    }, items2);
    tmp2Result1 = tmp2(tmp3[9]);
    items3 = [, , , , ];
    items3[0] = closure_19;
    items3[1] = tmp;
    items3[2] = tmp2(tmp3[21]).withSpring;
    items3[3] = tmp9;
    items3[4] = tmp2(tmp3[22]).SUBTLE_SPRING;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items3;
    class WishlistButtonTsx2 {
      constructor() {
        obj = {};
        merged = Object.assign(closure_0.animationFill);
        tmp2 = closure_1;
        num = 1;
        num2 = 1;
        tmp3 = closure_2;
        if (closure_2) {
          num2 = 0;
        }
        tmp4 = closure_3;
        obj.opacity = tmp2(num2, closure_3, "animate-always");
        if (tmp3) {
          num = 0.9;
        }
        obj1 = { scale: tmp2(num, tmp4, "animate-always") };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    items4 = [, , , ];
    items4[0] = tmp15;
    items4[1] = tmp16;
    items4[2] = tmp17;
    items4[3] = tmp18;
    WishlistButtonTsx2.__closure = items4;
    WishlistButtonTsx2.__workletHash = 5411045007536;
    WishlistButtonTsx2.__initData = tmp14;
    animatedStyle = tmp2Result1.useAnimatedStyle(WishlistButtonTsx2);
    tmp2Result2 = tmp2(tmp3[9]);
    items5 = [, , , , , , , ];
    items5[0] = closure_20;
    items5[1] = sharedValue;
    items5[2] = tmp;
    items5[3] = tmp2(tmp3[21]).withSpring;
    items5[4] = tmp9;
    items5[5] = tmp2(tmp3[22]).SUBTLE_SPRING;
    items5[6] = tmp2(tmp3[9]).interpolate;
    items5[7] = tmp2(tmp3[9]).Extrapolation;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items5;
    class WishlistButtonTsx3 {
      constructor() {
        value = closure_0.get();
        obj = {};
        merged = Object.assign(closure_1.animationFill);
        num = 0;
        tmp3 = closure_2;
        if (closure_3) {
          num = 1;
        }
        obj.opacity = tmp3(num, closure_4, "animate-always");
        obj1 = { scale: closure_5(value, [0, 0.625, 1], [0, 1.35, 1], closure_6.CLAMP) };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    items6 = [, , , , , , ];
    items6[0] = tmp21;
    items6[1] = tmp22;
    items6[2] = tmp23;
    items6[3] = tmp24;
    items6[4] = tmp25;
    items6[5] = tmp26;
    items6[6] = tmp27;
    WishlistButtonTsx3.__closure = items6;
    WishlistButtonTsx3.__workletHash = 698204376317;
    WishlistButtonTsx3.__initData = tmp20;
    animatedStyle1 = tmp2Result2.useAnimatedStyle(WishlistButtonTsx3);
    tmp2Result3 = tmp2(tmp3[9]);
    items7 = [, , , , , ];
    items7[0] = closure_21;
    items7[1] = sharedValue;
    items7[2] = tmp;
    items7[3] = tmp9;
    items7[4] = tmp2(tmp3[9]).interpolate;
    items7[5] = tmp2(tmp3[9]).Extrapolation;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items7;
    class WishlistButtonTsx4 {
      constructor() {
        value = closure_0.get();
        obj = {};
        merged = Object.assign(closure_1.animationFill);
        num = 0;
        if (closure_2) {
          tmp3 = closure_3;
          tmp4 = closure_4;
          tmp5 = value;
          num = closure_3(value, [0, 0.7], [1, 0], closure_4.CLAMP);
        }
        obj.opacity = num;
        obj1 = { scale: closure_3(value, [0, 0.625, 1], [0, 1.35, 1], closure_4.CLAMP) };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    items8 = [, , , , ];
    items8[0] = tmp30;
    items8[1] = tmp31;
    items8[2] = tmp32;
    items8[3] = tmp33;
    items8[4] = tmp34;
    WishlistButtonTsx4.__closure = items8;
    WishlistButtonTsx4.__workletHash = 2275753545643;
    WishlistButtonTsx4.__initData = tmp29;
    tmp36 = closure_12;
    obj1 = {
      style(pressed) {
            pressed = pressed.pressed;
            items = [_undefined6.button, closure_8, , , , ];
            let midnight = closure_7;
            if (closure_7) {
              midnight = _undefined6.midnight;
            }
            items[2] = midnight;
            if (pressed) {
              pressed = !c3;
            }
            if (pressed) {
              pressed = closure_9;
            }
            items[3] = pressed;
            let disabled = c3;
            if (c3) {
              disabled = _undefined6.disabled;
            }
            items[4] = disabled;
            items[5] = c4;
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
    animatedStyle2 = tmp2Result3.useAnimatedStyle(WishlistButtonTsx4);
    tmp37 = closure_6;
    if (flag) {
      str = "none";
    }
    obj1.accessibilityRole = str;
    accessibilityLabel = undefined;
    if (!flag) {
      accessibilityLabel = global.accessibilityLabel;
    }
    obj1.accessibilityLabel = accessibilityLabel;
    tmp39 = undefined;
    if (!flag) {
      obj17 = { checked: null, busy: null, disabled: null };
      obj17.checked = isWishlisted;
      obj17.busy = busy;
      obj17.disabled = disabled;
      tmp39 = obj17;
    }
    obj1.accessibilityState = tmp39;
    obj1.accessibilityElementsHidden = flag;
    str2 = "auto";
    if (flag) {
      str2 = "no-hide-descendants";
    }
    obj1.importantForAccessibility = str2;
    obj18 = { style: null, children: null };
    items9 = [, ];
    items9[0] = tmp.iconContainer;
    items9[1] = { width: tmp5, height: tmp5 };
    obj18.style = items9;
    obj19 = { style: animatedStyle, pointerEvents: "none", children: null };
    obj20 = { size: tmp4[size], color: closure_1(tmp3[12]).colors.INTERACTIVE_ICON_DEFAULT };
    obj19.children = tmp36(tmp2(tmp3[23]).HeartOutlineIcon, obj20);
    items10 = [, , ];
    items10[0] = tmp36(closure_1(tmp3[9]).View, obj19);
    obj21 = { style: animatedStyle1, pointerEvents: "none", children: null };
    obj22 = { size: tmp4[size], color: closure_1(tmp3[12]).unsafe_rawColors.RED_NEW_50 };
    obj21.children = tmp36(tmp2(tmp3[24]).HeartIcon, obj22);
    items10[1] = tmp36(closure_1(tmp3[9]).View, obj21);
    obj23 = { style: animatedStyle2, pointerEvents: "none", children: null };
    obj24 = { size: tmp4[size], color: "white" };
    obj23.children = tmp36(tmp2(tmp3[24]).HeartIcon, obj24);
    items10[2] = tmp36(closure_1(tmp3[9]).View, obj23);
    obj18.children = items10;
    obj1.children = closure_13(closure_7, obj18);
    return tmp36(tmp37, obj1);
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
    obj = closure_0(onTrackPress[25]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj.useStateFromStores(items, () => id.getId());
    obj2 = closure_0(onTrackPress[25]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
    tmp5 = onPress(onTrackPress[26])();
    shouldShowWishlistNUXActionSheet = tmp5.shouldShowWishlistNUXActionSheet;
    closure_3 = shouldShowWishlistNUXActionSheet;
    showWishlistNUXActionSheet = tmp5.showWishlistNUXActionSheet;
    closure_4 = showWishlistNUXActionSheet;
    intl = closure_0(onTrackPress[18]).intl;
    obj1 = { productName: product.name };
    items2 = [, , ];
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
      ToastActionCreatorsDefault.open("WISHLIST_ERROR", { text });
    }, items3);
    obj4 = closure_0(onTrackPress[27]);
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
({ Pressable: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const ShopCtaEnum = fn(1074).ShopCtaEnum;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { duration: 400, easing: null };
const Easing = fn(1652).Easing;
obj.easing = Easing.bezier(0.67, 0, 0.26, 1);
let obj2 = { sm: fn(5766).SMALL_BUTTON_HEIGHT, md: fn(5766).MEDIUM_BUTTON_HEIGHT };
const value2 = { sm: "sm", md: "md" };
const createStyles = fn(5142);
let closure_17 = createStyles.createStyles((arg0) => {
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
let closure_18 = { code: "(function WishlistButtonTsx1(done){let[scheduleOnRN,setIsClickAnimating]=this.__closure;if(done){scheduleOnRN(setIsClickAnimating,false);}})" };
let closure_19 = { code: "(function WishlistButtonTsx2(){let[styles,withSpring,showFilled,SUBTLE_SPRING]=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};})" };
let closure_20 = { code: "(function WishlistButtonTsx3(){let[animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation]=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};})" };
let closure_21 = { code: "(function WishlistButtonTsx4(){let[animationFillProgress,styles,showFilled,interpolate,Extrapolation]=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/WishlistButton.tsx");

export default function CollectiblesWishlistButton(selectedProduct) {
  selectedProduct = selectedProduct.selectedProduct;
  let tmp = null;
  const merged = Object.assign(selectedProduct, Object.assign({ selectedProduct: 0, onTrackPress: 0 }));
  CollectiblesWishlistUtils;
  if (!obj.useProductPurchaseState(selectedProduct).isPurchased) {
    obj2 = { skuId: selectedProduct.skuId, product: selectedProduct, disabled: !tmp4, onTrackPress: selectedProduct.onTrackPress };
    const merged1 = Object.assign(merged);
    tmp = application_id(WishlistButton, obj2);
  }
  return tmp;
};
export { WishlistButtonBase };
export { WishlistButton };