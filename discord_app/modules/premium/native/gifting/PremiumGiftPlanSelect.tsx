// discord_app/modules/premium/native/gifting/PremiumGiftPlanSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import native from "../../../../design/void/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import PremiumGiftFeaturesCardDefault from "PremiumGiftFeaturesCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Pressable: metroRequire,
  View: closure_7,
  ScrollView: closure_8,
} = get_ActivityIndicator);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let items = [,];
({ TIER_2: arr[0], TIER_0: arr[1] } = fn(1373).PremiumTypes);
let c16 = 16;
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles((width, arg1, arg2) => {
  let obj = {
    container: null,
    headerBackground: null,
    headerBackgroundColor: null,
    headerImageContainer: null,
    headerImage: null,
    headerOverlay: null,
    avatar: null,
    title: null,
    description: null,
    carousel: null,
    dmGiftingContent: null,
    loadingContainer: null,
    closeButtonContainer: null,
    closeButton: null,
    closeButtonIcon: null,
    badgeBanner: null,
  };
  obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.container = obj;
  const size = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  obj.headerBackground = size;
  obj = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.headerBackgroundColor = obj;
  obj.headerImageContainer = { position: "absolute", width, height: arg1 / 1.75 };
  obj.headerImage = { width };
  const obj1 = { width, backgroundColor: null };
  let obj5 = _modDef672("#000000");
  obj1.backgroundColor = obj5.alpha(0.8).hex();
  obj.headerOverlay = obj1;
  obj.avatar = { alignSelf: "center" };
  const space = nativeDefault.space;
  const alphaResult = obj5.alpha(0.8);
  obj.title = {
    textAlign: "center",
    marginTop: arg2 ? space.PX_16 : space.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  const space2 = tmp(576).space;
  const obj2 = {
    textAlign: "center",
    marginTop: arg2 ? space.PX_16 : space.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  obj.description = {
    textAlign: "center",
    marginTop: arg2 ? space2.PX_16 : space2.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  const space3 = tmp(576).space;
  obj.carousel = { marginTop: arg2 ? space3.PX_16 : space3.PX_32 };
  const obj3 = {
    textAlign: "center",
    marginTop: arg2 ? space2.PX_16 : space2.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  obj.dmGiftingContent = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
  obj.loadingContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
  obj.closeButtonContainer = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  obj5 = { padding: tmp(576).space.PX_16 };
  obj.closeButton = obj5;
  obj.closeButtonIcon = { width: 24, height: 24, tintColor: "white" };
  const obj4 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
  obj.badgeBanner = { marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 };
  return obj;
});
let closure_18 = {
  code: "function PremiumGiftPlanSelectTsx1(){const{STANDARD_EASING,withTiming,carouselVisibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};}",
};
let closure_19 = {
  code: "function PremiumGiftPlanSelectTsx2(value,index){const{lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep}=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  shouldUseDMWishlistGiftingDesign = shouldUseDMWishlistGiftingDesign.shouldUseDMWishlistGiftingDesign;
  let navigation;
  claimableRewards = undefined;
  let onClose;
  closure_5 = undefined;
  let currentIndex;
  c7 = undefined;
  let num;
  closure_9 = undefined;
  let ref;
  let callback;
  c12 = undefined;
  let callback2;
  let str;
  let sharedValue;
  c16 = undefined;
  c17 = undefined;
  let result1;
  let diff1;
  let obj = navigation(onClose[11]);
  navigation = obj.useNavigation();
  ({ top, bottom } = claimableRewards(onClose[12])());
  const tmp5 = claimableRewards(onClose[12])();
  ({ width, height } = claimableRewards(onClose[13])());
  let obj1 = navigation(onClose[14]);
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
  const selectPremiumGift = obj5.useSelectPremiumGift("PremiumGiftPlanSelect");
  let obj6 = claimableRewards(onClose[19]);
  let enabled = obj6.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  let obj7 = navigation(onClose[17]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items1, () => ({
    nextTier: closure_9.getNextTier(navigation(onClose[20]).BadgeId.GIFTING),
    giftsToNextTier: closure_9.getRemainingToNextTier(navigation(onClose[20]).BadgeId.GIFTING),
  }));
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp13 = c17(width, height, enabled);
  closure_5 = tmp13;
  let obj8 = enabled;
  const tmp14 = selectPremiumGift(enabled.useState(0), 2);
  currentIndex = tmp14[0];
  const tmp6 = claimableRewards(onClose[13])();
  [tmp18, c7] = selectPremiumGift(enabled.useState(false), 2);
  const items2 = [navigation];
  const effect = enabled.useEffect(() => {
    navigation = navigation.addListener("state", () => {
      state = state.getState();
      closure_1_7(state.routes[state.index].name === navigation(onClose[21]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      navigation.removeListener("state", closure_0);
    };
  }, items2);
  const tmp20 = selectPremiumGift(enabled.useState(null), 2);
  num = tmp20[0];
  closure_9 = tmp21;
  ref = enabled.useRef([]);
  const items3 = [shouldUseDMWishlistGiftingDesign];
  let tmp65Result = enabled;
  let length;
  if (claimableRewards != null) {
    length = claimableRewards.length;
  }
  items3[1] = length;
  const effect1 = enabled.useEffect(() => {
    ref.current = [];
    closure_9(null);
  }, items3);
  const items4 = [tmp20[1]];
  callback = obj8.useCallback(() => {
    if (ref.current.length >= items.length) {
      const _Math = Math;
      items = [];
      HermesBuiltin.arraySpread(tmp.current, 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(items, Math);
      const _Number = Number;
      if (!Number.isNaN(applyResult)) {
        closure_9(applyResult);
      }
    }
  }, items4);
  const callback1 = obj8.useCallback(() => {
    claimableRewards(onClose[22])();
  }, []);
  let result = 0.86 * width;
  c12 = result;
  const items5 = [selectPremiumGift, result, ref, callback, num, currentIndex, claimableRewards];
  callback2 = obj8.useCallback((variant) => {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = { forScreenReader: false };
    }
    const forScreenReader = obj.forScreenReader;
    return (item) => {
      item = item.item;
      const index = item.index;
      let obj = { accessible: forScreenReader, accessibilityRole: null, onPress: null, style: null, children: null };
      str = undefined;
      if (forScreenReader) {
        str = "button";
      }
      obj.accessibilityRole = str;
      let fn;
      if (forScreenReader) {
        fn = () => selectPremiumGift(item);
      }
      obj.onPress = fn;
      obj = { paddingVertical: nativeDefault.space.PX_8 };
      obj.style = obj;
      obj = {
        premiumType: item,
        variant,
        onPress() {
          return selectPremiumGift(item);
        },
        style: null,
        onLayout: null,
        claimableRewards: null,
        isSelected: null,
      };
      const size = { height: num, width, alignSelf: null };
      let str2;
      if ("default" === variant) {
        str2 = "center";
      }
      size.alignSelf = str2;
      obj.style = size;
      obj.onLayout = function onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        if (height > 0) {
          num = ref.current[index];
          if (num == null) {
            num = 0;
          }
          ref.current[index] = Math.max(height, num);
          callback();
        }
      };
      obj.claimableRewards = claimableRewards;
      obj.isSelected = first === index;
      obj.children = closure_3_12(PremiumGiftFeaturesCardDefault, obj, index);
      return closure_3_12(forScreenReader ? timestampProducer : React5, obj);
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
    let obj = { easing: native.STANDARD_EASING, duration: 500 };
    num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    obj = { opacity: timing.withTiming(num, obj), transform: null };
    const obj3 = sharedValue;
    let num2 = 100;
    if (obj3.get()) {
      num2 = 0;
    }
    obj = { translateY: timing.withTiming(num2, obj) };
    items = [obj];
    obj.transform = items;
    return obj;
  }
  obj = {
    STANDARD_EASING: tmp(tmp2[26]).STANDARD_EASING,
    withTiming: tmp(tmp2[27]).withTiming,
    carouselVisibility: sharedValue,
  };
  he.__closure = obj;
  he.__workletHash = 2946262965957;
  he.__initData = result1;
  const animatedStyle = navigation(onClose[25]).useAnimatedStyle(he);
  const items9 = [tmp13];
  const sum = result + c16;
  c16 = sum;
  let diff = sharedValue.length - 1;
  c17 = diff;
  result1 = (width - result) / 2;
  diff1 = width - result - c16;
  function fe(arg0, arg1) {
    const diff = arg1 - arg0;
    const bound = Math.max(0, Math.min(1, diff));
    let obj = { transform: null };
    obj = {
      translateX:
        arg0 * c16 + (16 + bound * (result1 - 16) + Math.max(0, Math.min(1, diff - (c17 - 1))) * (diff1 - result1)),
    };
    items = [obj];
    obj.transform = items;
    return obj;
  }
  fe.__closure = { lastItemIndex: diff, leftOffset: 16, centerOffset: result1, rightOffset: diff1, carouselStep: sum };
  fe.__workletHash = 8954351954675;
  fe.__initData = diff1;
  const items10 = [sum, diff, 16, result1, diff1];
  const memo2 = obj8.useMemo(() => {
    const obj = _modDef672(closure_5.headerBackgroundColor.color);
    items = [_modDef672(closure_5.headerBackgroundColor.color).alpha(0).hex()];
    const alphaResult = _modDef672(closure_5.headerBackgroundColor.color).alpha(0);
    const obj3 = _modDef672(closure_5.headerBackgroundColor.color);
    items[1] = _modDef672(closure_5.headerBackgroundColor.color).alpha(1).hex();
    return items;
  }, items9);
  const callback3 = obj8.useCallback(fe, items10);
  if (shouldUseDMWishlistGiftingDesign.isLoadingWishlist) {
    obj = { style: null, children: null };
    const items11 = [,];
    ({ container: arr23[0], loadingContainer: arr23[1] } = tmp13);
    obj.style = items11;
    obj.children = c12(closure_5, { size: "large" });
    let tmp65Result1 = c12(c7, obj);
  } else if (shouldUseDMWishlistGiftingDesign) {
    obj1 = { style: tmp13.container, children: null };
    obj2 = { contentContainerStyle: null, children: null };
    obj3 = { paddingBottom: bottom };
    obj2.contentContainerStyle = obj3;
    if (tmp65Result) {
      obj4 = { style: tmp13.badgeBanner, children: null };
      obj5 = { onPress: callback1, accessibilityRole: "button", children: null };
      obj6 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      let str4 = nextTier.name;
      let tmp4Result = tmp4(tmp2[28]);
      if (str4 == null) {
        str4 = "";
      }
      obj6.nextTierName = str4;
      obj6.nextTierIcon = nextTier.simple_icon_url;
      obj6.analyticsLocation = tmp4(tmp2[29]).PREMIUM_GIFT_PLAN_SELECTION;
      obj5.children = tmp65(tmp4Result, obj6);
      obj4.children = tmp65(currentIndex, obj5);
      tmp65Result = tmp65(tmp66, obj4);
    }
    const items12 = [tmp65Result, ,];
    obj7 = { style: tmp13.dmGiftingContent, children: null };
    if (0 !== stateFromStoresArray.length) {
      if (undefined === claimableRewards) {
        obj7.children = null;
        items12[1] = tmp65(tmp66, obj7);
        tmp65Result = null != recipientUser;
        if (tmp65Result) {
          obj8 = { giftRecipient: recipientUser };
          tmp65Result = tmp65(tmp(tmp2[31]).PremiumGiftWishlistBanner, obj8);
        }
        items12[2] = tmp65Result;
        obj2.children = items12;
        obj1.children = tmp67(tmp68, obj2);
        tmp65Result1 = tmp65(tmp66, obj1);
      }
    }
    if (isScreenReaderEnabled) {
      const obj9 = {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle: null,
        children: null,
      };
      const obj10 = { gap: tmp38, paddingHorizontal: tmp38 };
      obj9.contentContainerStyle = obj10;
      obj9.children = arr12.map((item, index) => callback2(str, { forScreenReader: true })({ item, index }));
      let tmp65Result2 = tmp65(tmp68, obj9);
    } else {
      let size = {
        style: animatedStyle,
        data: arr12,
        renderItem: memo,
        width,
        windowSize: arr12.length,
        height: null,
        onConfigurePanGesture: null,
        loop: false,
        scrollAnimationDuration: 200,
        customAnimation: null,
        onSnapToItem: null,
      };
      tmp4Result = tmp4(tmp2[30]);
      if (num == null) {
        num = 1;
      }
      size.height = num + 2 * tmp4(tmp2[9]).space.PX_8;
      size.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      };
      size.customAnimation = callback3;
      size.onSnapToItem = tmp16;
      tmp65Result2 = tmp65(tmp4Result, size);
    }
    tmp67 = callback2;
  } else {
    if (tmp18) {
      tmp18 = c12(tmp4(tmp2[32]), { animated: true, barStyle: "light-content" });
    }
    const items13 = [tmp18, , , , ,];
    const obj11 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items14 = [tmp13.closeButtonContainer];
    const obj12 = { paddingTop: top };
    items14[1] = obj12;
    obj11.style = items14;
    obj11.onPress = onClose;
    const intl = tmp(tmp2[33]).intl;
    obj11.accessibilityLabel = intl.string(tmp(tmp2[33]).t.cpT0Cq);
    const obj13 = { style: tmp13.closeButton, children: null };
    const obj14 = { size: "md", style: tmp13.closeButtonIcon };
    obj13.children = c12(tmp(tmp2[34]).XSmallIcon, obj14);
    obj11.children = c12(c7, obj13);
    items13[1] = c12(currentIndex, obj11);
    const obj15 = { resizeMode: "cover", style: null, source: null };
    const items15 = [,];
    ({ headerImageContainer: arr16[0], headerImage: arr16[1] } = tmp13);
    obj15.style = items15;
    obj15.source = tmp4(tmp2[36]);
    items13[2] = c12(tmp4(tmp2[35]), obj15);
    const obj16 = { style: null };
    const items16 = [,];
    ({ headerImageContainer: arr17[0], headerOverlay: arr17[1] } = tmp13);
    obj16.style = items16;
    items13[3] = c12(c7, obj16);
    const obj17 = { style: tmp13.headerBackground, start: null, end: null, colors: null };
    ({ START: obj20.start, END: obj20.end } = callback);
    obj17.colors = memo2;
    items13[4] = c12(tmp4(tmp2[37]), obj17);
    const obj18 = { contentContainerStyle: null, children: null };
    const obj19 = { paddingBottom: bottom };
    obj18.contentContainerStyle = obj19;
    const obj20 = { style: null, children: null };
    const obj21 = { paddingTop: top + tmp(tmp2[38]).NAV_BAR_HEIGHT };
    const items17 = [obj21];
    obj20.style = items17;
    if (null == recipientUser) {
      const items18 = [tmp53, , , ,];
      const obj22 = { style: tmp13.title, variant: null, color: "text-overlay-light", children: null };
      let str2 = "heading-xxl/extrabold";
      if (null != recipientUser) {
        str2 = "heading-xl/extrabold";
      }
      obj22.variant = str2;
      if (null != recipientUser) {
        const intl3 = tmp(tmp2[33]).intl;
        let username = recipientUser.globalName;
        if (username == null) {
          username = recipientUser.username;
        }
        const obj23 = { username };
        let formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[33]).t.m5ggvH, obj23);
      } else {
        const intl2 = tmp(tmp2[33]).intl;
        formatToPlainStringResult = intl2.string(tmp(tmp2[33]).t.dqQgZv);
      }
      obj22.children = formatToPlainStringResult;
      items18[1] = tmp47(tmp(tmp2[39]).Text, obj22);
      const obj24 = {
        style: tmp13.description,
        variant: "heading-sm/medium",
        color: "text-overlay-light",
        children: null,
      };
      const intl4 = tmp(tmp2[33]).intl;
      obj24.children = intl4.string(tmp(tmp2[33]).t["30qzrd"]);
      items18[2] = tmp47(tmp(tmp2[39]).Text, obj24);
      let tmp47Result = tmp65Result;
      if (tmp65Result) {
        const obj25 = { style: tmp13.badgeBanner, onPress: callback1, accessibilityRole: "button", children: null };
        const obj26 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
        let str3 = nextTier.name;
        if (str3 == null) {
          str3 = "";
        }
        obj26.nextTierName = str3;
        obj26.nextTierIcon = nextTier.simple_icon_url;
        obj26.analyticsLocation = tmp4(tmp2[29]).PREMIUM_GIFT_PLAN_SELECTION;
        obj25.children = tmp47(tmp4(tmp2[28]), obj26);
        tmp47Result = tmp47(tmp48, obj25);
        const tmp4Result2 = tmp4(tmp2[28]);
      }
      items18[3] = tmp47Result;
      if (0 !== stateFromStoresArray.length) {
        if (undefined === claimableRewards) {
          const obj27 = { children: null };
          items18[4] = null;
          obj20.children = items18;
          obj18.children = tmp44(tmp49, obj20);
          items13[5] = tmp47(tmp52, obj18);
          obj27.children = items13;
          tmp65Result1 = tmp44(tmp45, obj27);
        }
      }
      if (isScreenReaderEnabled) {
        const obj28 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: tmp13.carousel,
          contentContainerStyle: null,
          children: null,
        };
        const obj29 = { gap: tmp38, paddingHorizontal: tmp38 };
        obj28.contentContainerStyle = obj29;
        obj28.children = arr12.map((item, index) => {
          str = "default";
          return callback2(str, { forScreenReader: true })({ item, index });
        });
        tmp47Result = tmp47(tmp52, obj28);
      } else {
        const size1 = {
          style: null,
          data: null,
          renderItem: null,
          width: null,
          height: null,
          onConfigurePanGesture: null,
          loop: false,
          scrollAnimationDuration: 200,
          customAnimation: null,
          mode: "parallax",
          modeConfig: null,
          onSnapToItem: null,
        };
        const items19 = [tmp13.carousel, animatedStyle];
        size1.style = items19;
        size1.data = arr12;
        if (tmp65Result) {
          memo1 = memo;
        }
        size1.renderItem = memo1;
        size1.width = width;
        let sum1;
        if (null != num) {
          sum1 = num + 2 * tmp4(tmp2[9]).space.PX_8;
        }
        size1.height = sum1;
        size1.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
          activeOffsetX.activeOffsetX([-10, 10]);
        };
        let tmp61;
        if (tmp65Result) {
          tmp61 = callback3;
        }
        const obj30 = { children: null };
        size1.customAnimation = tmp61;
        size1.modeConfig = { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 };
        size1.onSnapToItem = tmp16;
        const items20 = [tmp47(tmp4(tmp2[30]), size1)];
        const obj31 = { numberOfItems: arr12.length, currentIndex };
        items20[1] = tmp47(tmp(tmp2[26]).CarouselPagination, obj31);
        obj30.children = items20;
        tmp47Result = tmp44(tmp45, obj30);
        const tmp4Result3 = tmp4(tmp2[30]);
      }
    } else {
      const obj32 = { style: tmp13.avatar, guildId: "r", size: "PX_16", user: null };
      const AvatarSizes = tmp(tmp2[26]).AvatarSizes;
      obj32.size = tmp65Result ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE;
      obj32.user = recipientUser;
      tmp47(tmp(tmp2[26]).Avatar, obj32);
    }
    tmp48 = currentIndex;
    tmp49 = c7;
    const tmp4Result1 = tmp4(tmp2[35]);
  }
  return tmp65Result1;
}
