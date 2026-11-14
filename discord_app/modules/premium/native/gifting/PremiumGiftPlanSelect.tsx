// === Module 11663: PremiumGiftPlanSelect ===

// Module 11663 (PremiumGiftPlanSelect)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import GiftingBadgeExperimentDefault from "GiftingBadgeExperiment" /* 11673 */;
import PremiumGiftFeaturesCardDefault from "PremiumGiftFeaturesCard" /* 11681 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8547 */;
import PromotionsStore from "PromotionsStore" /* 9623 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Pressable: closure_6, View: metroImportDefault, ScrollView: closure_8 } = get_ActivityIndicator);
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = fn(1390).PremiumTypes);
let c16 = 16;
const createStyles = fn(5306);
let closure_17 = createStyles.createStyles((width, arg1, arg2) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, headerBackground: null, headerBackgroundColor: null, headerImageContainer: null, headerImage: null, headerOverlay: null, avatar: null, title: null, description: null, carousel: null, dmGiftingContent: null, loadingContainer: null, closeButtonContainer: null, closeButton: null, closeButtonIcon: null, badgeBanner: null };
  const size = { position: "absolute", width, height: 0.1 * arg1, top: arg1 / 1.75 - 0.1 * arg1 };
  obj.headerBackground = size;
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.headerBackgroundColor = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.headerImageContainer = { position: "absolute", width, height: arg1 / 1.75 };
  obj.headerImage = { width };
  const obj4 = { width, backgroundColor: null };
  const obj3 = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj6 = _modDef671("#000000");
  obj4.backgroundColor = _modDef671("#000000").alpha(0.8).hex();
  obj.headerOverlay = obj4;
  obj.avatar = { alignSelf: "center" };
  const space = nativeDefault.space;
  const alphaResult = _modDef671("#000000").alpha(0.8);
  obj.title = { textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: nativeDefault.space.PX_24 };
  const space2 = nativeDefault.space;
  const obj5 = { textAlign: "center", marginTop: arg2 ? space.PX_16 : space.PX_12, marginHorizontal: nativeDefault.space.PX_24 };
  obj.description = { textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: nativeDefault.space.PX_24 };
  const space3 = nativeDefault.space;
  obj.carousel = { marginTop: arg2 ? space3.PX_16 : space3.PX_32 };
  const obj7 = { textAlign: "center", marginTop: arg2 ? space2.PX_16 : space2.PX_12, marginHorizontal: nativeDefault.space.PX_24 };
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
let closure_18 = { code: "(function PremiumGiftPlanSelectTsx1(){let[STANDARD_EASING,withTiming,carouselVisibility]=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:500};return{opacity:withTiming(carouselVisibility.get()?1:0,animationSettings),transform:[{translateY:withTiming(carouselVisibility.get()?0:100,animationSettings)}]};})" };
let closure_19 = { code: "(function PremiumGiftPlanSelectTsx2(value,index){let[lastItemIndex,leftOffset,centerOffset,rightOffset,carouselStep]=this.__closure;const activeIndex=index-value;const leftT=Math.max(0,Math.min(1,activeIndex));const rightT=Math.max(0,Math.min(1,activeIndex-(lastItemIndex-1)));const offset=leftOffset+leftT*(centerOffset-leftOffset)+rightT*(rightOffset-centerOffset);return{transform:[{translateX:value*carouselStep+offset}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelect.tsx");

export default function PremiumGiftPlanSelect(shouldUseDMWishlistGiftingDesign) {
  shouldUseDMWishlistGiftingDesign = shouldUseDMWishlistGiftingDesign.shouldUseDMWishlistGiftingDesign;
  let _require;
  noop = undefined;
  closure_5 = undefined;
  currentIndex = undefined;
  c7 = undefined;
  let num;
  closure_9 = undefined;
  let ref;
  let callback;
  c12 = undefined;
  let callback2;
  let str;
  let sharedValue;
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  let obj = require("useNavigation");
  ({ top, bottom } = useSafeAreaInsetsDefault());
  const tmp5 = useSafeAreaInsetsDefault();
  ({ width, height } = useWindowDimensionsDefault());
  const tmp6 = useWindowDimensionsDefault();
  const nativeGiftContext = require("NativeGiftContext").useNativeGiftContext();
  ({ recipientUser, claimableRewards } = nativeGiftContext);
  importDefault = claimableRewards;
  const onClose = nativeGiftContext.onClose;
  dependencyMap = onClose;
  let obj2 = require("NativeGiftContext");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  let obj3 = require("useIsScreenReaderEnabled");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    _undefined2();
    return true;
  });
  const obj4 = require("useNavigatorBackPressHandler");
  items = [ref];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => ref.getGiftPromotionRewardSkuIds());
  const obj5 = require("initialize");
  const selectPremiumGift = require("useSelectPremiumGift").useSelectPremiumGift("PremiumGiftPlanSelect");
  _slicedToArray = selectPremiumGift;
  const obj6 = require("useSelectPremiumGift");
  let enabled = GiftingBadgeExperimentDefault.useConfig({ location: "PremiumGiftPlanSelect" }).enabled;
  const items1 = [closure_9];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ nextTier: closure_9.getNextTier(easing(_undefined2[20]).BadgeId.GIFTING), giftsToNextTier: closure_9.getRemainingToNextTier(easing(_undefined2[20]).BadgeId.GIFTING) }));
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  noop = enabled;
  const tmp13 = closure_17(width, height, enabled);
  closure_5 = tmp13;
  [currentIndex] = noop.useState(0);
  const obj8 = require("initialize");
  [tmp18, c7] = noop.useState(false);
  const items2 = [navigation];
  const effect = noop.useEffect(() => {
    easing = easing.addListener("state", () => {
      state = closure_0.getState();
      closure_1_7(state.routes[state.index].name === c0(c2[21]).PremiumGiftScreens.PLAN_SELECT);
    });
    return () => {
      c0.removeListener("state", closure_0);
    };
  }, items2);
  const tmp20 = _slicedToArray(noop.useState(null), 2);
  num = tmp20[0];
  closure_9 = tmp21;
  ref = noop.useRef([]);
  const items3 = [shouldUseDMWishlistGiftingDesign, ];
  let tmp75Result = enabled;
  length = undefined;
  if (claimableRewards != null) {
    length = claimableRewards.length;
  }
  items3[1] = length;
  const effect1 = noop.useEffect(() => {
    ref.current = [];
    closure_9(null);
  }, items3);
  const items4 = [tmp20[1]];
  callback = obj9.useCallback(() => {
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
  const callback1 = obj9.useCallback(() => {
    _undefined(_undefined2[22])();
  }, []);
  let result = 0.86 * width;
  c12 = result;
  const items5 = [selectPremiumGift, result, ref, callback, num, currentIndex, claimableRewards];
  callback2 = obj9.useCallback((variant) => {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = { forScreenReader: false };
    }
    const forScreenReader = obj.forScreenReader;
    return function PremiumGiftCarouselItem(item) {
      item = item.item;
      const index = item.index;
      const obj = { accessible: forScreenReader, accessibilityRole: null, onPress: null, style: null, children: null };
      str = undefined;
      if (forScreenReader) {
        str = "button";
      }
      obj.accessibilityRole = str;
      let fn;
      if (forScreenReader) {
        fn = () => closure_2_3(item);
      }
      obj.onPress = fn;
      obj.style = { paddingVertical: nativeDefault.space.PX_8 };
      const obj3 = {
        premiumType: item,
        variant,
        onPress() {
          return closure_2_3(item);
        },
        style: null,
        onLayout: null,
        claimableRewards: null,
        isSelected: null
      };
      const obj2 = { paddingVertical: nativeDefault.space.PX_8 };
      const tmp3 = forScreenReader ? timestampProducer : metroImportDefault;
      const size = { height: num, width, alignSelf: null };
      let str2;
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
      obj.children = application_id(PremiumGiftFeaturesCardDefault, obj3, index);
      return application_id(tmp3, obj);
    };
  }, items5);
  const tmp17 = _slicedToArray(noop.useState(false), 2);
  let tmp31 = null != claimableRewards;
  const isWindowSmall = require("useIsWindowSmall").useIsWindowSmall();
  if (tmp31) {
    tmp31 = claimableRewards.length > 0;
  }
  if (isWindowSmall) {
    str = "smallCompact";
  } else {
    str = "compact";
  }
  const items6 = [callback2, str];
  const memo = obj9.useMemo(() => callback2(str), items6);
  const items7 = [callback2];
  let memo1 = obj9.useMemo(() => callback2("default"), items7);
  const tmpResult = require("useIsWindowSmall");
  sharedValue = require("module_1655").useSharedValue(false);
  const items8 = [sharedValue, num];
  const effect2 = obj9.useEffect(() => {
    const result = sharedValue.set(null != num);
  }, items8);
  const tmpResult5 = require("module_1655");
  const items9 = [closure_18, require("native").STANDARD_EASING, require("timing/timing").withTiming, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp36, tmp37, tmp38, tmp39] = items9;
  class PremiumGiftPlanSelectTsx1 {
    constructor() {
      obj = { easing: closure_0, duration: 500 };
      tmp = closure_1;
      obj2 = closure_2;
      num = 0;
      if (closure_2.get()) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, obj), transform: null };
      num2 = 100;
      if (obj2.get()) {
        num2 = 0;
      }
      obj5 = { translateY: tmp(num2, obj) };
      items = [];
      items[0] = obj5;
      obj1.transform = items;
      return obj1;
    }
  }
  const items10 = [tmp37, tmp38, tmp39];
  PremiumGiftPlanSelectTsx1.__closure = items10;
  PremiumGiftPlanSelectTsx1.__workletHash = 4508908176572;
  PremiumGiftPlanSelectTsx1.__initData = tmp36;
  const animatedStyle = require("module_1655").useAnimatedStyle(PremiumGiftPlanSelectTsx1);
  const items11 = [tmp13];
  const sum = result + v16;
  let diff = sharedValue.length - 1;
  const result1 = (width - result) / 2;
  const diff1 = width - result - v16;
  const items12 = [closure_19, diff, 16, result1, diff1, sum];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items12;
  class PremiumGiftPlanSelectTsx2 {
    constructor(arg0, arg1) {
      diff = arg1 - shouldUseDMWishlistGiftingDesign;
      bound = Math.max(0, Math.min(1, diff));
      obj = { transform: null };
      obj1 = { translateX: shouldUseDMWishlistGiftingDesign * closure_4 + (closure_1 + bound * (closure_2 - closure_1) + Math.max(0, Math.min(1, diff - (closure_0 - 1))) * (closure_3 - closure_2)) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items13 = [tmp48, tmp49, tmp50, tmp51, tmp52];
  PremiumGiftPlanSelectTsx2.__closure = items13;
  PremiumGiftPlanSelectTsx2.__workletHash = 287869632170;
  PremiumGiftPlanSelectTsx2.__initData = tmp47;
  const items14 = [sum, diff, 16, result1, diff1];
  const memo2 = obj9.useMemo(() => {
    const obj = _modDef671(closure_5.headerBackgroundColor.color);
    items = [_modDef671(closure_5.headerBackgroundColor.color).alpha(0).hex(), ];
    const alphaResult = _modDef671(closure_5.headerBackgroundColor.color).alpha(0);
    const obj3 = _modDef671(closure_5.headerBackgroundColor.color);
    items[1] = _modDef671(closure_5.headerBackgroundColor.color).alpha(1).hex();
    return items;
  }, items11);
  const callback3 = obj9.useCallback(PremiumGiftPlanSelectTsx2, items14);
  if (shouldUseDMWishlistGiftingDesign.isLoadingWishlist) {
    const obj10 = { style: null, children: null };
    const items15 = [, ];
    ({ container: arr26[0], loadingContainer: arr26[1] } = tmp13);
    obj10.style = items15;
    obj10.children = c12(closure_5, { size: "large" });
    let tmp75Result5 = c12(c7, obj10);
  } else if (shouldUseDMWishlistGiftingDesign) {
    const obj11 = { style: tmp13.container, children: null };
    const obj12 = { contentContainerStyle: null, children: null };
    const obj13 = { paddingBottom: bottom };
    obj12.contentContainerStyle = obj13;
    if (tmp75Result) {
      const obj14 = { style: tmp13.badgeBanner, children: null };
      const obj15 = { onPress: callback1, accessibilityRole: "button", children: null };
      const obj16 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      let str4 = nextTier.name;
      if (str4 == null) {
        str4 = "";
      }
      obj16.nextTierName = str4;
      const tmp4Result = tmp4(11688);
      const tmp79 = currentIndex;
      obj16.nextTierIcon = tmp(11678).getGiftingBadgeTierIconUrl(nextTier);
      obj16.analyticsLocation = tmp4(7937).PREMIUM_GIFT_PLAN_SELECTION;
      obj15.children = tmp75(tmp4Result, obj16);
      obj14.children = tmp75(tmp79, obj15);
      tmp75Result = tmp75(tmp76, obj14);
      const tmpResult7 = tmp(11678);
    }
    const items16 = [tmp75Result, , ];
    const obj17 = { style: tmp13.dmGiftingContent, children: null };
    if (0 !== stateFromStoresArray.length) {
      if (undefined === claimableRewards) {
        obj17.children = null;
        items16[1] = tmp75(tmp76, obj17);
        let tmp75Result4 = null != recipientUser;
        if (tmp75Result4) {
          const obj18 = { giftRecipient: recipientUser };
          tmp75Result4 = tmp75(tmp(11723).PremiumGiftWishlistBanner, obj18);
        }
        items16[2] = tmp75Result4;
        obj12.children = items16;
        obj11.children = tmp77(tmp78, obj12);
        tmp75Result5 = tmp75(tmp76, obj11);
      }
    }
    if (isScreenReaderEnabled) {
      const obj20 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: null, children: null };
      const obj21 = { gap: v16, paddingHorizontal: v16 };
      obj20.contentContainerStyle = obj21;
      obj20.children = arr14.map((item, index) => callback2(str, { forScreenReader: true })({ item, index }));
      let tmp75Result6 = tmp75(tmp78, obj20);
    } else {
      let size = { style: animatedStyle, data: arr14, renderItem: memo, width, windowSize: arr14.length, height: null, onConfigurePanGesture: null, loop: false, scrollAnimationDuration: 200, customAnimation: null, onSnapToItem: null };
      if (num == null) {
        num = 1;
      }
      size.height = num + 2 * tmp4(575).space.PX_8;
      size.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
        activeOffsetX.activeOffsetX([-10, 10]);
      };
      size.customAnimation = callback3;
      size.onSnapToItem = tmp16;
      tmp75Result6 = tmp75(tmp4(11689), size);
      const tmp4Result5 = tmp4(11689);
    }
    tmp77 = callback2;
  } else {
    if (tmp18) {
      tmp18 = c12(tmp4(11827), { animated: true, barStyle: "light-content" });
    }
    const items17 = [tmp18, , , , , ];
    const obj22 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items18 = [tmp13.closeButtonContainer, ];
    const obj23 = { paddingTop: top };
    items18[1] = obj23;
    obj22.style = items18;
    obj22.onPress = onClose;
    const intl = tmp(1113).intl;
    obj22.accessibilityLabel = intl.string(tmp(1113).t.cpT0Cq);
    const obj24 = { style: tmp13.closeButton, children: null };
    const obj25 = { size: "md", style: tmp13.closeButtonIcon };
    obj24.children = c12(tmp(7549).XSmallIcon, obj25);
    obj22.children = c12(c7, obj24);
    items17[1] = c12(currentIndex, obj22);
    const obj26 = { resizeMode: "cover", style: null, source: null };
    const items19 = [, ];
    ({ headerImageContainer: arr20[0], headerImage: arr20[1] } = tmp13);
    obj26.style = items19;
    obj26.source = tmp4(11829);
    items17[2] = c12(tmp4(6020), obj26);
    const obj27 = { style: null };
    const items20 = [, ];
    ({ headerImageContainer: arr21[0], headerOverlay: arr21[1] } = tmp13);
    obj27.style = items20;
    items17[3] = c12(c7, obj27);
    const obj28 = { style: tmp13.headerBackground, start: null, end: null, colors: null };
    ({ START: obj19.start, END: obj19.end } = callback);
    obj28.colors = memo2;
    items17[4] = c12(tmp4(5893), obj28);
    const obj29 = { contentContainerStyle: null, children: null };
    const obj30 = { paddingBottom: bottom };
    obj29.contentContainerStyle = obj30;
    const obj31 = { style: null, children: null };
    const obj32 = { paddingTop: top + tmp(5892).NAV_BAR_HEIGHT };
    obj31.style = obj32;
    if (null == recipientUser) {
      const items21 = [tmp63, , , , ];
      const obj33 = { style: tmp13.title, variant: null, color: "text-overlay-light", children: null };
      let str2 = "heading-xxl/semibold";
      if (null != recipientUser) {
        str2 = "heading-xl/semibold";
      }
      obj33.variant = str2;
      if (null != recipientUser) {
        const intl3 = tmp(1113).intl;
        let username = recipientUser.globalName;
        if (username == null) {
          username = recipientUser.username;
        }
        const obj34 = { username };
        let formatToPlainStringResult = intl3.formatToPlainString(tmp(1113).t.m5ggvH, obj34);
      } else {
        const intl2 = tmp(1113).intl;
        formatToPlainStringResult = intl2.string(tmp(1113).t.dqQgZv);
      }
      obj33.children = formatToPlainStringResult;
      items21[1] = tmp57(tmp(5929).Text, obj33);
      const obj35 = { style: tmp13.description, variant: "heading-xs/medium", color: "text-overlay-light", children: null };
      const intl4 = tmp(1113).intl;
      obj35.children = intl4.string(tmp(1113).t["30qzrd"]);
      items21[2] = tmp57(tmp(5929).Text, obj35);
      let tmp57Result = tmp75Result;
      if (tmp75Result) {
        const obj36 = { style: tmp13.badgeBanner, onPress: callback1, accessibilityRole: "button", children: null };
        const obj37 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
        let str3 = nextTier.name;
        if (str3 == null) {
          str3 = "";
        }
        obj37.nextTierName = str3;
        const tmp4Result7 = tmp4(11688);
        obj37.nextTierIcon = tmp(11678).getGiftingBadgeTierIconUrl(nextTier);
        obj37.analyticsLocation = tmp4(7937).PREMIUM_GIFT_PLAN_SELECTION;
        obj36.children = tmp57(tmp4Result7, obj37);
        tmp57Result = tmp57(tmp58, obj36);
        const tmpResult8 = tmp(11678);
      }
      items21[3] = tmp57Result;
      if (0 !== stateFromStoresArray.length) {
        if (undefined === claimableRewards) {
          const obj38 = { children: null };
          items21[4] = null;
          obj31.children = items21;
          obj29.children = tmp54(tmp59, obj31);
          items17[5] = tmp57(tmp62, obj29);
          obj38.children = items17;
          tmp75Result5 = tmp54(tmp55, obj38);
        }
      }
      if (isScreenReaderEnabled) {
        const obj39 = { horizontal: true, showsHorizontalScrollIndicator: false, style: tmp13.carousel, contentContainerStyle: null, children: null };
        const obj40 = { gap: v16, paddingHorizontal: v16 };
        obj39.contentContainerStyle = obj40;
        obj39.children = arr14.map((item, index) => callback2("default", { forScreenReader: true })({ item, index }));
        let tmp57Result3 = tmp57(tmp62, obj39);
      } else {
        const size1 = { style: null, data: null, renderItem: null, width: null, height: null, onConfigurePanGesture: null, loop: false, scrollAnimationDuration: 200, customAnimation: null, mode: "parallax", modeConfig: null, onSnapToItem: null };
        const items22 = [tmp13.carousel, animatedStyle];
        size1.style = items22;
        size1.data = arr14;
        if (tmp75Result) {
          memo1 = memo;
        }
        size1.renderItem = memo1;
        size1.width = width;
        let sum1;
        if (null != num) {
          sum1 = num + 2 * tmp4(575).space.PX_8;
        }
        size1.height = sum1;
        size1.onConfigurePanGesture = function onConfigurePanGesture(activeOffsetX) {
          activeOffsetX.activeOffsetX([-10, 10]);
        };
        let tmp71;
        if (tmp75Result) {
          tmp71 = callback3;
        }
        const obj41 = { children: null };
        size1.customAnimation = tmp71;
        size1.modeConfig = { parallaxScrollingScale: 1, parallaxScrollingOffset: 40 };
        size1.onSnapToItem = tmp16;
        const items23 = [tmp57(tmp4(11689), size1), ];
        const obj42 = { numberOfItems: arr14.length, currentIndex };
        items23[1] = tmp57(tmp(1187).CarouselPagination, obj42);
        obj41.children = items23;
        tmp57Result3 = tmp54(tmp55, obj41);
        const tmp4Result8 = tmp4(11689);
      }
    } else {
      const obj43 = { style: tmp13.avatar, guildId: "r", size: "Promise", user: null };
      const AvatarSizes = tmp(1187).AvatarSizes;
      obj43.size = tmp75Result ? AvatarSizes.LARGE_48 : AvatarSizes.XLARGE;
      obj43.user = recipientUser;
      tmp57(tmp(1187).Avatar, obj43);
    }
    const tmp4Result6 = tmp4(6020);
    tmp58 = currentIndex;
    tmp59 = c7;
  }
  return tmp75Result5;
};