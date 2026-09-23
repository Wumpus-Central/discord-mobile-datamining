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
({ TIER_2: arr[0], TIER_0: arr[1] } = fn(1374).PremiumTypes);
let c16 = 16;
const createStyles = fn(4827);
let closure_17 = createStyles.createStyles((width, arg1, arg2) => {
  const obj = {
    container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
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
  const size = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  obj.headerBackground = size;
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.headerBackgroundColor = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.headerImageContainer = { position: "absolute", width, height: arg1 / 1.75 };
  obj.headerImage = { width };
  const obj4 = { width, backgroundColor: null };
  const obj3 = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj6 = _modDef672("#000000");
  obj4.backgroundColor = _modDef672("#000000").alpha(0.8).hex();
  obj.headerOverlay = obj4;
  obj.avatar = { alignSelf: "center" };
  const space = nativeDefault.space;
  const alphaResult = _modDef672("#000000").alpha(0.8);
  obj.title = {
    textAlign: "center",
    marginTop: arg2 ? space.PX_16 : space.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  const space2 = nativeDefault.space;
  const obj5 = {
    textAlign: "center",
    marginTop: arg2 ? space.PX_16 : space.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  obj.description = {
    textAlign: "center",
    marginTop: arg2 ? space2.PX_16 : space2.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  const space3 = nativeDefault.space;
  obj.carousel = { marginTop: arg2 ? space3.PX_16 : space3.PX_32 };
  const obj7 = {
    textAlign: "center",
    marginTop: arg2 ? space2.PX_16 : space2.PX_12,
    marginHorizontal: nativeDefault.space.PX_24,
  };
  obj.dmGiftingContent = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
  obj.loadingContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
  obj.closeButtonContainer = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  const obj8 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
  obj.closeButton = { padding: nativeDefault.space.PX_16 };
  obj.closeButtonIcon = { width: 24, height: 24, tintColor: "white" };
  const obj9 = { padding: nativeDefault.space.PX_16 };
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
  let str2;
  let sharedValue;
  c16 = undefined;
  c17 = undefined;
  let result1;
  let diff1;
  navigation = navigation(onClose[11]).useNavigation();
  let obj = navigation(onClose[11]);
  ({ top, bottom } = claimableRewards(onClose[12])());
  const tmp5 = claimableRewards(onClose[12])();
  ({ width, height } = claimableRewards(onClose[13])());
  const tmp6 = claimableRewards(onClose[13])();
  const nativeGiftContext = navigation(onClose[14]).useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  onClose = nativeGiftContext.onClose;
  let obj2 = navigation(onClose[14]);
  const isScreenReaderEnabled = navigation(onClose[15]).useIsScreenReaderEnabled();
  let obj3 = navigation(onClose[15]);
  navigation(onClose[16]).useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  let obj4 = navigation(onClose[16]);
  items = [ref];
  const stateFromStoresArray = navigation(onClose[17]).useStateFromStoresArray(items, () =>
    ref.getGiftPromotionRewardSkuIds(),
  );
  const obj5 = navigation(onClose[17]);
  const selectPremiumGift = navigation(onClose[18]).useSelectPremiumGift("PremiumGiftPlanSelect");
  const obj6 = navigation(onClose[18]);
  let enabled = claimableRewards(onClose[19]).useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  const obj7 = claimableRewards(onClose[19]);
  const items1 = [closure_9];
  const stateFromStoresObject = navigation(onClose[17]).useStateFromStoresObject(items1, () => ({
    nextTier: closure_9.getNextTier(navigation(onClose[20]).BadgeId.GIFTING),
    giftsToNextTier: closure_9.getRemainingToNextTier(navigation(onClose[20]).BadgeId.GIFTING),
  }));
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const obj8 = navigation(onClose[17]);
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const isGiftingBadgeComplexArtEnabled = navigation(onClose[21]).useIsGiftingBadgeComplexArtEnabled(
    `PremiumGiftPlanSelect${str}`,
  );
  const tmp14 = c17(width, height, enabled);
  closure_5 = tmp14;
  const tmp15 = selectPremiumGift(enabled.useState(0), 2);
  currentIndex = tmp15[0];
  let tmpResult = navigation(onClose[21]);
  [tmp19, c7] = selectPremiumGift(enabled.useState(false), 2);
  const items2 = [navigation];
  const effect = enabled.useEffect(() => {
    navigation = navigation.addListener("state", () => {
      state = state.getState();
      closure_1_7(state.routes[state.index].name === navigation(onClose[22]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      navigation.removeListener("state", closure_0);
    };
  }, items2);
  const tmp21 = selectPremiumGift(enabled.useState(null), 2);
  num = tmp21[0];
  closure_9 = tmp22;
  ref = enabled.useRef([]);
  const items3 = [shouldUseDMWishlistGiftingDesign];
  let length;
  if (claimableRewards != null) {
    length = claimableRewards.length;
  }
  items3[1] = length;
  const effect1 = enabled.useEffect(() => {
    ref.current = [];
    closure_9(null);
  }, items3);
  const items4 = [tmp21[1]];
  callback = obj10.useCallback(() => {
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
  const callback1 = obj10.useCallback(() => {
    claimableRewards(onClose[23])();
  }, []);
  let result = 0.86 * width;
  c12 = result;
  const items5 = [selectPremiumGift, result, ref, callback, num, currentIndex, claimableRewards];
  callback2 = obj10.useCallback((variant) => {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = { forScreenReader: false };
    }
    const forScreenReader = obj.forScreenReader;
    return (item) => {
      item = item.item;
      const index = item.index;
      const obj = { accessible: forScreenReader, accessibilityRole: null, onPress: null, style: null, children: null };
      let str;
      if (forScreenReader) {
        str = "button";
      }
      obj.accessibilityRole = str;
      let fn;
      if (forScreenReader) {
        fn = () => selectPremiumGift(item);
      }
      obj.onPress = fn;
      obj.style = { paddingVertical: nativeDefault.space.PX_8 };
      const obj3 = {
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
      const obj2 = { paddingVertical: nativeDefault.space.PX_8 };
      const tmp3 = forScreenReader ? timestampProducer : React5;
      const size = { height: num, width, alignSelf: null };
      str2 = undefined;
      if ("default" === variant) {
        str2 = "center";
      }
      size.alignSelf = str2;
      obj3.style = size;
      obj3.onLayout = function onLayout(nativeEvent) {
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
      obj3.claimableRewards = claimableRewards;
      obj3.isSelected = first === index;
      obj.children = closure_3_12(PremiumGiftFeaturesCardDefault, obj3, index);
      return closure_3_12(tmp3, obj);
    };
  }, items5);
  const tmp18 = selectPremiumGift(enabled.useState(false), 2);
  let tmp31 = null != claimableRewards;
  const isWindowSmall = navigation(onClose[25]).useIsWindowSmall();
  if (tmp31) {
    tmp31 = claimableRewards.length > 0;
  }
  if (isWindowSmall) {
    str2 = "smallCompact";
  } else {
    str2 = "compact";
  }
  const items6 = [callback2, str2];
  const memo = obj10.useMemo(() => callback2(str2), items6);
  const items7 = [callback2];
  let memo1 = obj10.useMemo(() => callback2("default"), items7);
  const tmpResult6 = navigation(onClose[25]);
  sharedValue = navigation(onClose[26]).useSharedValue(false);
  const items8 = [sharedValue, num];
  const effect2 = obj10.useEffect(() => {
    const result = sharedValue.set(null != num);
  }, items8);
  const tmpResult7 = navigation(onClose[26]);
  function fe() {
    const obj = { easing: native.STANDARD_EASING, duration: 500 };
    num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    const obj4 = { opacity: timing.withTiming(num, obj), transform: null };
    let num2 = 100;
    if (sharedValue.get()) {
      num2 = 0;
    }
    const tmpResult = timing;
    items = [{ translateY: timing.withTiming(num2, obj) }];
    obj4.transform = items;
    return obj4;
  }
  const tmpResult8 = navigation(onClose[26]);
  fe.__closure = {
    STANDARD_EASING: navigation(onClose[27]).STANDARD_EASING,
    withTiming: navigation(onClose[28]).withTiming,
    carouselVisibility: sharedValue,
  };
  fe.__workletHash = 2946262965957;
  fe.__initData = result1;
  const animatedStyle = tmpResult8.useAnimatedStyle(fe);
  const items9 = [tmp14];
  const sum = result + c16;
  c16 = sum;
  let diff = sharedValue.length - 1;
  c17 = diff;
  result1 = (width - result) / 2;
  diff1 = width - result - c16;
  function pe(arg0, arg1) {
    const diff = arg1 - arg0;
    const bound = Math.max(0, Math.min(1, diff));
    const obj = { transform: null };
    items = [
      {
        translateX:
          arg0 * c16 + (16 + bound * (result1 - 16) + Math.max(0, Math.min(1, diff - (c17 - 1))) * (diff1 - result1)),
      },
    ];
    obj.transform = items;
    return obj;
  }
  pe.__closure = { lastItemIndex: diff, leftOffset: 16, centerOffset: result1, rightOffset: diff1, carouselStep: sum };
  pe.__workletHash = 8954351954675;
  pe.__initData = diff1;
  const items10 = [sum, diff, 16, result1, diff1];
  const memo2 = obj10.useMemo(() => {
    const obj = _modDef672(closure_5.headerBackgroundColor.color);
    items = [_modDef672(closure_5.headerBackgroundColor.color).alpha(0).hex()];
    const alphaResult = _modDef672(closure_5.headerBackgroundColor.color).alpha(0);
    const obj3 = _modDef672(closure_5.headerBackgroundColor.color);
    items[1] = _modDef672(closure_5.headerBackgroundColor.color).alpha(1).hex();
    return items;
  }, items9);
  const callback3 = obj10.useCallback(pe, items10);
  if (shouldUseDMWishlistGiftingDesign.isLoadingWishlist) {
    const obj11 = { style: null, children: null };
    const items11 = [,];
    ({ container: arr23[0], loadingContainer: arr23[1] } = tmp14);
    obj11.style = items11;
    obj11.children = c12(closure_5, { size: "large" });
    let tmp65Result5 = c12(c7, obj11);
  } else if (shouldUseDMWishlistGiftingDesign) {
    const obj12 = { style: tmp14.container, children: null };
    const obj13 = { contentContainerStyle: null, children: null };
    const obj14 = { paddingBottom: bottom };
    obj13.contentContainerStyle = obj14;
    let tmp65Result = enabled;
    if (enabled) {
      const obj15 = { style: tmp14.badgeBanner, children: null };
      const obj16 = { onPress: callback1, accessibilityRole: "button", children: null };
      const obj17 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      let str5 = nextTier.name;
      if (str5 == null) {
        str5 = "";
      }
      obj17.nextTierName = str5;
      const tmp4Result = tmp4(tmp2[29]);
      const tmp70 = currentIndex;
      obj17.nextTierIcon = tmp(tmp2[21]).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
      obj17.analyticsLocation = tmp4(tmp2[30]).PREMIUM_GIFT_PLAN_SELECTION;
      obj16.children = tmp65(tmp4Result, obj17);
      obj15.children = tmp65(tmp70, obj16);
      tmp65Result = tmp65(tmp66, obj15);
      const tmpResult9 = tmp(tmp2[21]);
    }
    const items12 = [tmp65Result, ,];
    const obj18 = { style: tmp14.dmGiftingContent, children: null };
    if (0 !== stateFromStoresArray.length) {
      if (undefined === claimableRewards) {
        obj18.children = null;
        items12[1] = tmp65(tmp66, obj18);
        let tmp65Result4 = null != recipientUser;
        if (tmp65Result4) {
          const obj19 = { giftRecipient: recipientUser };
          tmp65Result4 = tmp65(tmp(tmp2[32]).PremiumGiftWishlistBanner, obj19);
        }
        items12[2] = tmp65Result4;
        obj13.children = items12;
        obj12.children = tmp67(tmp68, obj13);
        tmp65Result5 = tmp65(tmp66, obj12);
      }
    }
    if (isScreenReaderEnabled) {
      const obj20 = {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle: null,
        children: null,
      };
      const obj22 = { gap: tmp38, paddingHorizontal: tmp38 };
      obj20.contentContainerStyle = obj22;
      obj20.children = arr12.map((item, index) => callback2(str2, { forScreenReader: true })({ item, index }));
      let tmp65Result6 = tmp65(tmp68, obj20);
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
      if (num == null) {
        num = 1;
      }
      size.height = num + 2 * tmp4(tmp2[9]).space.PX_8;
      size.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      };
      size.customAnimation = callback3;
      size.onSnapToItem = tmp17;
      tmp65Result6 = tmp65(tmp4(tmp2[31]), size);
      const tmp4Result5 = tmp4(tmp2[31]);
    }
    tmp67 = callback2;
  } else {
    if (tmp19) {
      tmp19 = c12(tmp4(tmp2[33]), { animated: true, barStyle: "light-content" });
    }
    const items13 = [tmp19, , , , ,];
    const obj23 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items14 = [tmp14.closeButtonContainer];
    const obj24 = { paddingTop: top };
    items14[1] = obj24;
    obj23.style = items14;
    obj23.onPress = onClose;
    const intl = tmp(tmp2[34]).intl;
    obj23.accessibilityLabel = intl.string(tmp(tmp2[34]).t.cpT0Cq);
    const obj25 = { style: tmp14.closeButton, children: null };
    const obj26 = { size: "md", style: tmp14.closeButtonIcon };
    obj25.children = c12(tmp(tmp2[35]).XSmallIcon, obj26);
    obj23.children = c12(c7, obj25);
    items13[1] = c12(currentIndex, obj23);
    const obj27 = { resizeMode: "cover", style: null, source: null };
    const items15 = [,];
    ({ headerImageContainer: arr16[0], headerImage: arr16[1] } = tmp14);
    obj27.style = items15;
    obj27.source = tmp4(tmp2[37]);
    items13[2] = c12(tmp4(tmp2[36]), obj27);
    const obj28 = { style: null };
    const items16 = [,];
    ({ headerImageContainer: arr17[0], headerOverlay: arr17[1] } = tmp14);
    obj28.style = items16;
    items13[3] = c12(c7, obj28);
    const obj29 = { style: tmp14.headerBackground, start: null, end: null, colors: null };
    ({ START: obj21.start, END: obj21.end } = callback);
    obj29.colors = memo2;
    items13[4] = c12(tmp4(tmp2[38]), obj29);
    const obj30 = { contentContainerStyle: null, children: null };
    const obj31 = { paddingBottom: bottom };
    obj30.contentContainerStyle = obj31;
    const obj32 = { style: null, children: null };
    const obj33 = { paddingTop: top + tmp(tmp2[39]).NAV_BAR_HEIGHT };
    const items17 = [obj33];
    obj32.style = items17;
    if (null == recipientUser) {
      const items18 = [tmp53, , , ,];
      const obj34 = { style: tmp14.title, variant: null, color: "text-overlay-light", children: null };
      let str3 = "heading-xxl/extrabold";
      if (null != recipientUser) {
        str3 = "heading-xl/extrabold";
      }
      obj34.variant = str3;
      if (null != recipientUser) {
        const intl3 = tmp(tmp2[34]).intl;
        let username = recipientUser.globalName;
        if (username == null) {
          username = recipientUser.username;
        }
        const obj35 = { username };
        let formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[34]).t.m5ggvH, obj35);
      } else {
        const intl2 = tmp(tmp2[34]).intl;
        formatToPlainStringResult = intl2.string(tmp(tmp2[34]).t.dqQgZv);
      }
      obj34.children = formatToPlainStringResult;
      items18[1] = tmp47(tmp(tmp2[40]).Text, obj34);
      const obj36 = {
        style: tmp14.description,
        variant: "heading-sm/medium",
        color: "text-overlay-light",
        children: null,
      };
      const intl4 = tmp(tmp2[34]).intl;
      obj36.children = intl4.string(tmp(tmp2[34]).t["30qzrd"]);
      items18[2] = tmp47(tmp(tmp2[40]).Text, obj36);
      let tmp47Result = enabled;
      if (enabled) {
        const obj37 = { style: tmp14.badgeBanner, onPress: callback1, accessibilityRole: "button", children: null };
        const obj38 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
        let str4 = nextTier.name;
        if (str4 == null) {
          str4 = "";
        }
        obj38.nextTierName = str4;
        const tmp4Result7 = tmp4(tmp2[29]);
        obj38.nextTierIcon = tmp(tmp2[21]).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
        obj38.analyticsLocation = tmp4(tmp2[30]).PREMIUM_GIFT_PLAN_SELECTION;
        obj37.children = tmp47(tmp4Result7, obj38);
        tmp47Result = tmp47(tmp48, obj37);
        const tmpResult10 = tmp(tmp2[21]);
      }
      items18[3] = tmp47Result;
      if (0 !== stateFromStoresArray.length) {
        if (undefined === claimableRewards) {
          const obj39 = { children: null };
          items18[4] = null;
          obj32.children = items18;
          obj30.children = tmp44(tmp49, obj32);
          items13[5] = tmp47(tmp52, obj30);
          obj39.children = items13;
          tmp65Result5 = tmp44(tmp45, obj39);
        }
      }
      if (isScreenReaderEnabled) {
        const obj40 = {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          style: tmp14.carousel,
          contentContainerStyle: null,
          children: null,
        };
        const obj41 = { gap: tmp38, paddingHorizontal: tmp38 };
        obj40.contentContainerStyle = obj41;
        obj40.children = arr12.map((item, index) => {
          let str = "default";
          if (enabled) {
            str = str2;
          }
          return callback2(str, { forScreenReader: true })({ item, index });
        });
        let tmp47Result3 = tmp47(tmp52, obj40);
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
        const items19 = [tmp14.carousel, animatedStyle];
        size1.style = items19;
        size1.data = arr12;
        if (enabled) {
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
        if (enabled) {
          tmp61 = callback3;
        }
        const obj42 = { children: null };
        size1.customAnimation = tmp61;
        size1.modeConfig = { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 };
        size1.onSnapToItem = tmp17;
        const items20 = [tmp47(tmp4(tmp2[31]), size1)];
        const obj43 = { numberOfItems: arr12.length, currentIndex };
        items20[1] = tmp47(tmp(tmp2[27]).CarouselPagination, obj43);
        obj42.children = items20;
        tmp47Result3 = tmp44(tmp45, obj42);
        const tmp4Result8 = tmp4(tmp2[31]);
      }
    } else {
      const obj44 = { style: tmp14.avatar, guildId: "r", size: "flex", user: null };
      const AvatarSizes = tmp(tmp2[27]).AvatarSizes;
      obj44.size = enabled ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE;
      obj44.user = recipientUser;
      tmp47(tmp(tmp2[27]).Avatar, obj44);
    }
    tmp48 = currentIndex;
    tmp49 = c7;
    const tmp4Result6 = tmp4(tmp2[36]);
  }
  return tmp65Result5;
}
