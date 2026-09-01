// === Module 10474: items ===

// Module 10474 (items)
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "initialize" /* 8560 */;
import closure_10 from "createEmptyPromotionsByType" /* 10475 */;
import { VerticalGradient } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ ActivityIndicator: c5, Pressable: closure_6, View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = require("GuildFeatures").PremiumTypes);
let c16 = 16;
let closure_17 = createCacheKey.createStyles((width) => {
  let obj = { container: null, headerBackground: null, headerBackgroundColor: null, headerImageContainer: null, headerImage: null, headerOverlay: null, avatar: null, title: null, description: null, carousel: null, dmGiftingContent: null, loadingContainer: null, closeButtonContainer: null, closeButton: null, closeButtonIcon: null, badgeBanner: null };
  obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  obj = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  obj[1] = obj;
  obj[2] = { color: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[3] = { position: "absolute", width, height: arg1 / 1.75 };
  obj[4] = { width };
  const obj2 = { width, backgroundColor: null };
  let obj5 = nDefault("#000000");
  obj1 = { color: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj2[1] = obj5.alpha(0.8).hex();
  obj[5] = obj2;
  obj[6] = { alignSelf: "center" };
  const space = ThemesDefault.space;
  const alphaResult = obj5.alpha(0.8);
  obj[7] = { textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: ThemesDefault.space.PX_24 };
  const space2 = tmp(712).space;
  const obj3 = { textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: ThemesDefault.space.PX_24 };
  obj[8] = { textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: ThemesDefault.space.PX_24 };
  const space3 = tmp(712).space;
  obj[9] = { marginTop: arg2 ? space3.PX_16 : space3.PX_32 };
  obj5 = { paddingTop: tmp(712).space.PX_16, paddingBottom: tmp(712).space.PX_48 };
  obj[10] = obj5;
  obj[11] = { flex: 1, alignItems: "center", justifyContent: "center" };
  obj[12] = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  const obj4 = { textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: ThemesDefault.space.PX_24 };
  obj[13] = { padding: ThemesDefault.space.PX_16 };
  obj[14] = { width: 24, height: 24, tintColor: "white" };
  const obj6 = { padding: ThemesDefault.space.PX_16 };
  obj[15] = { marginTop: ThemesDefault.space.PX_16, marginHorizontal: ThemesDefault.space.PX_16 };
  return obj;
});
let closure_18 = { code: "function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}" };
let closure_19 = { code: "function PremiumGiftPlanSelectTsx2(value,index){const{lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}" };
let result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  shouldUseDMWishlistGiftingDesign = shouldUseDMWishlistGiftingDesign.shouldUseDMWishlistGiftingDesign;
  let navigation;
  claimableRewards = undefined;
  let onClose;
  let selectPremiumGift;
  let enabled;
  closure_5 = undefined;
  let first;
  c7 = undefined;
  let num;
  closure_9 = undefined;
  let ref;
  let callback;
  callback = undefined;
  let callback2;
  let str;
  let sharedValue;
  c16 = undefined;
  callback2 = undefined;
  let result1;
  let diff1;
  let obj = navigation(onClose[11]);
  navigation = obj.useNavigation();
  ({ top, bottom } = claimableRewards(onClose[12])());
  const tmp5 = claimableRewards(onClose[12])();
  ({ width, height } = claimableRewards(onClose[13])());
  obj1 = navigation(onClose[14]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  onClose = nativeGiftContext.onClose;
  let obj2 = navigation(onClose[15]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = navigation(onClose[16]);
  obj3.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  let obj4 = navigation(onClose[17]);
  items = [ref];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items, () => ref.getGiftPromotionRewardSkuIds());
  let obj5 = navigation(onClose[18]);
  selectPremiumGift = obj5.useSelectPremiumGift("PremiumGiftPlanSelect");
  let obj6 = claimableRewards(onClose[19]);
  enabled = obj6.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  let obj7 = navigation(onClose[17]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items1, () => {
    ({ getNextTier, getRemainingToNextTier } = closure_9);
    return { nextTier: getNextTier(navigation(onClose[20]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(navigation(onClose[20]).BadgeId.GIFTING) };
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp13 = callback2(width, height, enabled);
  closure_5 = tmp13;
  let obj8 = enabled;
  const tmp14 = selectPremiumGift(enabled.useState(0), 2);
  first = tmp14[0];
  const tmp6 = claimableRewards(onClose[13])();
  [tmp18, c7] = selectPremiumGift(enabled.useState(false), 2);
  const items2 = [navigation];
  const effect = enabled.useEffect(() => {
    navigation = navigation.addListener("state", () => {
      const state = lib.getState();
      callback(state.routes[state.index].name === lib(closure_1_2[21]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      lib.removeListener("state", lib);
    };
  }, items2);
  const tmp20 = selectPremiumGift(enabled.useState(null), 2);
  num = tmp20[0];
  closure_9 = tmp21;
  ref = enabled.useRef([]);
  const items3 = [shouldUseDMWishlistGiftingDesign, ];
  let tmp65Result = enabled;
  let length;
  if (claimableRewards != null) {
    length = claimableRewards.length;
  }
  items3[1] = length;
  const effect1 = enabled.useEffect(() => {
    ref.current = [];
    callback(null);
  }, items3);
  const items4 = [tmp20[1]];
  callback = obj8.useCallback(() => {
    if (ref.current.length >= sharedValue.length) {
      const _Math = Math;
      items = [];
      HermesBuiltin.arraySpread(tmp.current, 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(items, Math);
      const _Number = Number;
      if (!Number.isNaN(applyResult)) {
        callback(applyResult);
      }
    }
  }, items4);
  const callback1 = obj8.useCallback(() => {
    claimableRewards(onClose[22])();
  }, []);
  let result = 0.86 * width;
  callback = result;
  const items5 = [selectPremiumGift, result, ref, callback, num, first, claimableRewards];
  callback2 = obj8.useCallback((arg0) => {
    closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = { forScreenReader: false };
    }
    const forScreenReader = obj.forScreenReader;
    return (item) => {
      item = item.item;
      const index = item.index;
      let obj = { accessible: index, accessibilityRole: null, onPress: null, style: null, children: null };
      str = undefined;
      if (index) {
        str = "button";
      }
      obj[1] = str;
      let fn;
      if (index) {
        fn = () => closure_1_3(item);
      }
      obj[2] = fn;
      obj = { paddingVertical: claimableRewards(onClose[9]).space.PX_8 };
      obj[3] = obj;
      obj = {
        premiumType: item,
        variant: item,
        onPress() {
          return closure_1_3(item);
        },
        style: null,
        onLayout: null,
        claimableRewards: null,
        isSelected: null
      };
      obj1 = { height: closure_1_8, width: closure_1_12, alignSelf: null };
      let str2;
      if ("default" === item) {
        str2 = "center";
      }
      obj1[2] = str2;
      obj[3] = obj1;
      obj[4] = function onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        if (height > 0) {
          num = closure_1_10.current[index];
          if (num == null) {
            num = 0;
          }
          closure_1_10.current[index] = Math.max(height, num);
          closure_1_11();
          const tmp2 = index;
        }
      };
      obj[5] = forScreenReader;
      obj[6] = closure_1_6 === index;
      obj[4] = c12(claimableRewards(onClose[23]), obj, index);
      return c12(index ? first : c7, obj);
    };
  }, items5);
  let tmpResult = tmp(tmp2[24]);
  let tmp31 = null != claimableRewards;
  const isWindowSmall = tmpResult.useIsWindowSmall();
  if (tmp31) {
    tmp31 = claimableRewards.length > 0;
  }
  if (isWindowSmall) {
    str = "smallCompact";
  } else {
    str = "compact";
  }
  const items6 = [callback2, str];
  const memo = obj8.useMemo(() => callback2(str), items6);
  const items7 = [callback2];
  let memo1 = obj8.useMemo(() => callback2("default"), items7);
  tmpResult = tmp(tmp2[25]);
  sharedValue = tmpResult.useSharedValue(false);
  const items8 = [sharedValue, num];
  const effect2 = obj8.useEffect(() => {
    const result = sharedValue.set(null != num);
  }, items8);
  const tmp17 = selectPremiumGift(enabled.useState(false), 2);
  function he() {
    let obj = { easing: navigation(onClose[26]).STANDARD_EASING, duration: 500 };
    num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    obj = { opacity: navigation(onClose[27]).withTiming(num, obj), transform: null };
    const obj2 = navigation(onClose[27]);
    const obj3 = sharedValue;
    const tmp = navigation;
    const tmp2 = onClose;
    let num2 = 100;
    if (obj3.get()) {
      num2 = 0;
    }
    obj = { translateY: navigation(onClose[27]).withTiming(num2, obj) };
    items = [obj];
    obj[1] = items;
    return obj;
  }
  obj = { STANDARD_EASING: tmp(tmp2[26]).STANDARD_EASING, withTiming: tmp(tmp2[27]).withTiming, carouselVisibility: sharedValue };
  he.__closure = obj;
  he.__workletHash = 2946262965957;
  he.__initData = result1;
  const animatedStyle = navigation(onClose[25]).useAnimatedStyle(he);
  const items9 = [tmp13];
  const sum = result + c16;
  c16 = sum;
  let diff = sharedValue.length - 1;
  callback2 = diff;
  result1 = (width - result) / 2;
  diff1 = width - result - c16;
  function fe(arg0, arg1) {
    const diff = arg1 - arg0;
    const bound = Math.max(0, Math.min(1, diff));
    let obj = { transform: null };
    obj = { translateX: arg0 * c16 + (16 + bound * (result1 - 16) + Math.max(0, Math.min(1, diff - (c17 - 1))) * (diff1 - result1)) };
    items = [obj];
    obj[0] = items;
    return obj;
  }
  fe.__closure = { lastItemIndex: diff, leftOffset: 16, centerOffset: result1, rightOffset: diff1, carouselStep: sum };
  fe.__workletHash = 8954351954675;
  fe.__initData = diff1;
  const items10 = [sum, diff, 16, result1, diff1];
  const memo2 = obj8.useMemo(() => {
    const obj = claimableRewards(onClose[10])(closure_5.headerBackgroundColor.color);
    items = [claimableRewards(onClose[10])(closure_5.headerBackgroundColor.color).alpha(0).hex(), ];
    const alphaResult = claimableRewards(onClose[10])(closure_5.headerBackgroundColor.color).alpha(0);
    const obj3 = claimableRewards(onClose[10])(closure_5.headerBackgroundColor.color);
    items[1] = claimableRewards(onClose[10])(closure_5.headerBackgroundColor.color).alpha(1).hex();
    return items;
  }, items9);
  const callback3 = obj8.useCallback(fe, items10);
  if (shouldUseDMWishlistGiftingDesign.isLoadingWishlist) {
    obj = { style: null, children: null };
    const items11 = [, ];
    ({ container: arr23[0], loadingContainer: arr23[1] } = tmp13);
    obj[0] = items11;
    obj[1] = callback(closure_5, { size: "large" });
    let tmp65Result1 = callback(c7, obj);
  } else if (shouldUseDMWishlistGiftingDesign) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp13.container;
    obj2 = { contentContainerStyle: null, children: null };
    obj3 = { paddingBottom: null };
    obj3[0] = bottom;
    obj2[0] = obj3;
    if (tmp65Result) {
      obj4 = { style: null, children: null };
      obj4[0] = tmp13.badgeBanner;
      obj5 = { onPress: null, accessibilityRole: "button", children: null };
      obj5[0] = callback1;
      obj6 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      obj6[0] = giftsToNextTier;
      let str4 = nextTier.name;
      let tmp4Result = tmp4(tmp2[28]);
      if (str4 == null) {
        str4 = "";
      }
      obj6[1] = str4;
      obj6[2] = nextTier.simple_icon_url;
      obj6[3] = tmp4(tmp2[29]).PREMIUM_GIFT_PLAN_SELECTION;
      obj5[2] = tmp65(tmp4Result, obj6);
      obj4[1] = tmp65(first, obj5);
      tmp65Result = tmp65(tmp66, obj4);
      const tmp69 = first;
    }
    const items12 = [tmp65Result, , ];
    obj7 = { style: null, children: null };
    obj7[0] = tmp13.dmGiftingContent;
    if (0 !== stateFromStoresArray.length) {
      if (undefined === claimableRewards) {
        obj7[1] = null;
        items12[1] = tmp65(tmp66, obj7);
        tmp65Result = null != recipientUser;
        if (tmp65Result) {
          obj8 = { giftRecipient: null };
          obj8[0] = recipientUser;
          tmp65Result = tmp65(tmp(tmp2[31]).PremiumGiftWishlistBanner, obj8);
        }
        items12[2] = tmp65Result;
        obj2[1] = items12;
        obj1[1] = tmp67(tmp68, obj2);
        tmp65Result1 = tmp65(tmp66, obj1);
      }
    }
    if (isScreenReaderEnabled) {
      const obj9 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: null, children: null };
      const obj10 = { gap: null, paddingHorizontal: null };
      obj10[0] = tmp38;
      obj10[1] = tmp38;
      obj9[2] = obj10;
      obj9[3] = arr12.map((item, index) => callback2(str, { forScreenReader: true })({ item, index }));
      let tmp65Result2 = tmp65(tmp68, obj9);
    } else {
      const obj11 = { style: null, data: null, renderItem: null, width: null, windowSize: null, height: null, onConfigurePanGesture: null, loop: false, scrollAnimationDuration: 200, customAnimation: null, onSnapToItem: null };
      obj11[0] = animatedStyle;
      obj11[1] = arr12;
      obj11[2] = memo;
      obj11[3] = width;
      obj11[4] = arr12.length;
      tmp4Result = tmp4(tmp2[30]);
      if (num == null) {
        num = 1;
      }
      obj11[5] = num + 2 * tmp4(tmp2[9]).space.PX_8;
      obj11[6] = function onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      };
      obj11[9] = callback3;
      obj11[10] = tmp16;
      tmp65Result2 = tmp65(tmp4Result, obj11);
    }
    tmp67 = callback2;
  } else {
    if (tmp18) {
      tmp18 = callback(tmp4(tmp2[32]), { animated: true, barStyle: "light-content" });
    }
    const items13 = [tmp18, , , , , ];
    const obj12 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items14 = [tmp13.closeButtonContainer, ];
    const obj13 = { paddingTop: null };
    obj13[0] = top;
    items14[1] = obj13;
    obj12[0] = items14;
    obj12[1] = onClose;
    const intl = tmp(tmp2[33]).intl;
    obj12[3] = intl.string(tmp(tmp2[33]).t.cpT0Cq);
    const obj14 = { style: null, children: null };
    obj14[0] = tmp13.closeButton;
    const obj15 = { size: "md", style: null };
    obj15[1] = tmp13.closeButtonIcon;
    obj14[1] = callback(tmp(tmp2[34]).XSmallIcon, obj15);
    obj12[4] = callback(c7, obj14);
    items13[1] = callback(first, obj12);
    const obj16 = { resizeMode: "cover", style: null, source: null };
    const items15 = [, ];
    ({ headerImageContainer: arr16[0], headerImage: arr16[1] } = tmp13);
    obj16[1] = items15;
    obj16[2] = tmp4(tmp2[36]);
    items13[2] = callback(tmp4(tmp2[35]), obj16);
    const obj17 = { style: null };
    const items16 = [, ];
    ({ headerImageContainer: arr17[0], headerOverlay: arr17[1] } = tmp13);
    obj17[0] = items16;
    items13[3] = callback(c7, obj17);
    const obj18 = { style: null, start: null, end: null, colors: null };
    obj18[0] = tmp13.headerBackground;
    ({ START: obj20[1], END: obj20[2] } = callback);
    obj18[3] = memo2;
    items13[4] = callback(tmp4(tmp2[37]), obj18);
    const obj19 = { contentContainerStyle: null, children: null };
    const obj20 = { paddingBottom: null };
    obj20[0] = bottom;
    obj19[0] = obj20;
    const obj21 = { style: null, children: null };
    const obj22 = { paddingTop: null };
    obj22[0] = top + tmp(tmp2[38]).NAV_BAR_HEIGHT;
    const items17 = [obj22];
    obj21[0] = items17;
    if (null == recipientUser) {
      const items18 = [tmp53, , , , ];
      const obj23 = { style: null, variant: null, color: "text-overlay-light", children: null };
      obj23[0] = tmp13.title;
      let str2 = "heading-xxl/extrabold";
      if (null != recipientUser) {
        str2 = "heading-xl/extrabold";
      }
      obj23[1] = str2;
      if (null != recipientUser) {
        const intl3 = tmp(tmp2[33]).intl;
        let username = recipientUser.globalName;
        if (username == null) {
          username = recipientUser.username;
        }
        const obj24 = { username: null };
        obj24[0] = username;
        let formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[33]).t.m5ggvH, obj24);
      } else {
        const intl2 = tmp(tmp2[33]).intl;
        formatToPlainStringResult = intl2.string(tmp(tmp2[33]).t.dqQgZv);
      }
      obj23[3] = formatToPlainStringResult;
      items18[1] = tmp47(tmp(tmp2[39]).Text, obj23);
      const obj25 = { style: null, variant: "heading-sm/medium", color: "text-overlay-light", children: null };
      obj25[0] = tmp13.description;
      const intl4 = tmp(tmp2[33]).intl;
      obj25[3] = intl4.string(tmp(tmp2[33]).t["30qzrd"]);
      items18[2] = tmp47(tmp(tmp2[39]).Text, obj25);
      let tmp47Result = tmp65Result;
      if (tmp65Result) {
        const obj26 = { style: null, onPress: null, accessibilityRole: "button", children: null };
        obj26[0] = tmp13.badgeBanner;
        obj26[1] = callback1;
        const obj27 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
        obj27[0] = giftsToNextTier;
        let str3 = nextTier.name;
        if (str3 == null) {
          str3 = "";
        }
        obj27[1] = str3;
        obj27[2] = nextTier.simple_icon_url;
        obj27[3] = tmp4(tmp2[29]).PREMIUM_GIFT_PLAN_SELECTION;
        obj26[3] = tmp47(tmp4(tmp2[28]), obj27);
        tmp47Result = tmp47(tmp48, obj26);
        const tmp4Result2 = tmp4(tmp2[28]);
      }
      items18[3] = tmp47Result;
      if (0 !== stateFromStoresArray.length) {
        if (undefined === claimableRewards) {
          const obj28 = { children: null };
          items18[4] = null;
          obj21[1] = items18;
          obj19[1] = tmp44(tmp49, obj21);
          items13[5] = tmp47(tmp52, obj19);
          obj28[0] = items13;
          tmp65Result1 = tmp44(tmp45, obj28);
        }
      }
      if (isScreenReaderEnabled) {
        const obj29 = { horizontal: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
        obj29[2] = tmp13.carousel;
        const obj30 = { gap: null, paddingHorizontal: null };
        obj30[0] = tmp38;
        obj30[1] = tmp38;
        obj29[3] = obj30;
        obj29[4] = arr12.map((item, index) => {
          str = "default";
          return callback2(str, { forScreenReader: true })({ item, index });
        });
        tmp47Result = tmp47(tmp52, obj29);
      } else {
        const obj31 = { style: null, data: null, renderItem: null, width: null, height: null, onConfigurePanGesture: null, loop: false, scrollAnimationDuration: 200, customAnimation: null, mode: "parallax", modeConfig: null, onSnapToItem: null };
        const items19 = [tmp13.carousel, animatedStyle];
        obj31[0] = items19;
        obj31[1] = arr12;
        if (tmp65Result) {
          memo1 = memo;
        }
        obj31[2] = memo1;
        obj31[3] = width;
        let sum1;
        if (null != num) {
          sum1 = num + 2 * tmp4(tmp2[9]).space.PX_8;
        }
        obj31[4] = sum1;
        obj31[5] = function onConfigurePanGesture(activeOffsetX) {
          activeOffsetX.activeOffsetX([-10, 10]);
        };
        let tmp61;
        if (tmp65Result) {
          tmp61 = callback3;
        }
        const obj32 = { children: null };
        obj31[8] = tmp61;
        obj31[10] = { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 };
        obj31[11] = tmp16;
        const items20 = [tmp47(tmp4(tmp2[30]), obj31), ];
        const obj33 = { numberOfItems: null, currentIndex: null };
        obj33[0] = arr12.length;
        obj33[1] = first;
        items20[1] = tmp47(tmp(tmp2[26]).CarouselPagination, obj33);
        obj32[0] = items20;
        tmp47Result = tmp44(tmp45, obj32);
        const tmp4Result3 = tmp4(tmp2[30]);
      }
    } else {
      const obj34 = { style: null, guildId: "r", size: "PX_16", user: null };
      obj34[0] = tmp13.avatar;
      const AvatarSizes = tmp(tmp2[26]).AvatarSizes;
      obj34[2] = tmp65Result ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE;
      obj34[3] = recipientUser;
      tmp47(tmp(tmp2[26]).Avatar, obj34);
    }
    tmp48 = first;
    tmp49 = c7;
    const tmp4Result1 = tmp4(tmp2[35]);
  }
  return tmp65Result1;
};