// === Module 15217: PremiumMarketingPage ===

// Module 15217 (PremiumMarketingPage)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 5077 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5285 */;
import UserSettingsAccountUnverifiedHeaderDefault from "UserSettingsAccountUnverifiedHeader" /* 7749 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7852 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 9948 */;
import PremiumFeaturesCardsDefault from "PremiumFeaturesCards" /* 10885 */;
import _modDef14570 from "module_14570" /* 14570 */;
import NitroMobileRefreshExperiment from "NitroMobileRefreshExperiment" /* 15218 */;
import PremiumMarketingFloatingSubscribeExperimentDefault from "PremiumMarketingFloatingSubscribeExperiment" /* 15219 */;
import PlanSelectHeaderDefault from "PlanSelectHeader" /* 15221 */;
import premium_HeaderDefault from "premium/Header" /* 15222 */;
import PlanSelectCardsDefault from "PlanSelectCards" /* 15225 */;
import PremiumMarketingFloatingSubscribeButtonDefault from "PremiumMarketingFloatingSubscribeButton" /* 15255 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function NitroMobileRefreshGate(children) {
  return closure_1_11(refs, { children: children.children(NitroMobileRefreshExperiment.useIsNitroMobileRefreshEnabled("PremiumMarketingPage")) });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsxProd = fn(21);
({ Fragment: closure_10, jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 }, arrowIcon: { tintColor: nativeDefault.colors.TEXT_DEFAULT }, backButton: null, sectionWithTopMargin: { marginTop: 48 }, sectionWithPadding: { paddingHorizontal: 12 }, planSelectCardsSection: null, sectionWidth: null, accountCreditContainer: null, accountCreditContainerWithSpacing: null, themedBackground: null, backButtonBackground: null };
let obj4 = { transform: null, position: "absolute", left: 16 };
let items = [{ scaleX: -1 }];
obj4.transform = items;
obj2.backButton = obj4;
let obj3 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj2.planSelectCardsSection = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sectionWidth = { maxWidth: 464 };
obj2.accountCreditContainer = { width: "100%" };
obj2.accountCreditContainerWithSpacing = { marginTop: 24, marginBottom: 20 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.themedBackground = { backgroundColor: fn(6898).DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj6 = { backgroundColor: fn(6898).DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj2.backButtonBackground = { backgroundColor: fn(6898).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ subscriptionDetails: importDefault, billingInfo: dependencyMap, accountCredit: _slicedToArray, applicationId: noop, onClose, premiumFeatureCardOrder: closure_5, entitlements, onPaymentSuccess: closure_6, onPaymentDismiss: UserStore, isFullScreenPresentation } = userHasSubscription);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  c11 = undefined;
  c12 = undefined;
  let bottom;
  let showAfterLastCard;
  let enabled;
  let sharedValue;
  let onLayout;
  let onFirstCardLayout;
  let promotionMarketingSurface;
  onClose = undefined;
  closure_25 = undefined;
  c26 = undefined;
  let flag;
  let surface;
  const commonTriggerPoint = userHasSubscription(15202).useCommonTriggerPoint(userHasSubscription(15203).OpenNitroTriggerPoint);
  const tmp4 = bottom();
  closure_8 = tmp4;
  let obj = userHasSubscription(15202);
  const navigation = userHasSubscription(1499).useNavigation();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj2 = userHasSubscription(1499);
  [c11, c12] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  let top = userHasSubscription(15212).useYouBarSettingsCustomHeaderPaddingTop();
  const rect = useSafeAreaInsetsDefault();
  bottom = rect.bottom;
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  let obj4 = userHasSubscription(15212);
  const config = PremiumMarketingFloatingSubscribeExperimentDefault.useConfig({ location: "PremiumMarketingPage" });
  enabled = config.enabled;
  showAfterLastCard = config.showAfterLastCard;
  let tmp9 = !userHasSubscription;
  if (!userHasSubscription) {
    tmp9 = enabled;
  }
  enabled = tmp9;
  noop.useRef(0);
  noop.useRef(0);
  noop.useRef(0);
  const tmp6Result = PremiumMarketingFloatingSubscribeExperimentDefault;
  sharedValue = userHasSubscription(1652).useSharedValue(false);
  onLayout = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const y = layout.y;
    closure_17.current = y;
    closure_19.current = y + layout.height;
  }, []);
  onFirstCardLayout = noop.useCallback((nativeEvent) => {
    closure_18.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  items = [navigation, userHasSubscription];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: userHasSubscription });
  }, items);
  const tmpResult = userHasSubscription(1652);
  promotionMarketingSurface = userHasSubscription(9943).usePromotionMarketingSurface(tmp(9560).MarketingSurfaceType.PREMIUM_TAB);
  let items1 = [promotionMarketingSurface];
  const effect = noop.useEffect(() => {
    let isDismissed = null == promotionMarketingSurface;
    if (!isDismissed) {
      isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingSurface.promotionId).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingSurface.promotionId, obj3);
    }
  }, items1);
  if (onClose == null) {
    onClose = () => navigation.pop();
  }
  let tmp14 = !userHasSubscription;
  if (!userHasSubscription) {
    const obj5 = { style: null, accessibilityLabel: null, source: null, size: null, iconStyle: null, onPress: null };
    let items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    obj5.style = items2;
    const intl = tmp(1113).intl;
    obj5.accessibilityLabel = intl.string(tmp(1113).t["13/7kX"]);
    obj5.source = _modDef14570;
    obj5.size = tmp(15220).CircularIconButton.Sizes.MEDIUM_32;
    obj5.iconStyle = tmp4.arrowIcon;
    obj5.onPress = function onPress() {
      return onClose();
    };
    tmp14 = c11(tmp(15220).CircularIconButton, obj5);
  }
  closure_25 = tmp14;
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    hasAccountCreditResult = PremiumUtilsDefault.hasAccountCredit(entitlements);
    const tmp6Result2 = PremiumUtilsDefault;
  }
  c26 = hasAccountCreditResult;
  const tmpResult6 = userHasSubscription(9943);
  let items3 = [UserStore];
  const stateFromStores = userHasSubscription(504).useStateFromStores(items3, () => onPaymentDismiss.getCurrentUser());
  flag = undefined;
  if (stateFromStores != null) {
    flag = stateFromStores.isFractionalPremiumWithNoStandardSub();
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult7 = userHasSubscription(504);
  surface = userHasSubscription(9943).usePromotionMarketingSurface(tmp(9560).MarketingSurfaceType.MARKETING_PAGE_BANNER);
  const tmpResult8 = userHasSubscription(9943);
  const premiumTrialOffer = userHasSubscription(9243).usePremiumTrialOffer();
  const tmpResult9 = userHasSubscription(9243);
  let items4 = [, , ];
  ({ container: arr5[0], themedBackground: arr5[1] } = tmp4);
  let num = 0;
  const premiumDiscountOffer = userHasSubscription(9246).usePremiumDiscountOffer();
  if (!userHasSubscription) {
    num = top;
  }
  function renderScrollContent(arg0) {
    if (arg0) {
      const obj = { style: closure_8.sectionWidth, onBack: onClose };
      let tmp3 = closure_2_11(PlanSelectHeaderDefault, obj);
    } else {
      tmp3 = closure_25;
    }
    items = [tmp3, closure_1_1, dependencyMap, , , , , , , ];
    if (!c26) {
      items[3] = null;
      if (arg0) {
        items[4] = null;
        let tmp21 = null != surface;
        if (tmp21) {
          const obj2 = { style: null, bannerFields: null, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess: null, onPaymentDismiss: null, componentId: null, componentType: null, promotionId: null };
          const items1 = [, , ];
          ({ sectionWithPadding: arr4[0], sectionWidth: arr4[1] } = closure_8);
          const obj3 = { marginBottom: nativeDefault.space.PX_24 };
          items1[2] = obj3;
          obj2.style = items1;
          obj2.bannerFields = surface.surface;
          obj2.onPaymentSuccess = onPaymentSuccess;
          obj2.onPaymentDismiss = onPaymentDismiss;
          ({ id: obj5.componentId, componentType: obj5.componentType, promotionId: obj5.promotionId } = surface);
          tmp21 = closure_2_11(MarketingPageBannerTileDefault, obj2);
        }
        items[5] = tmp21;
        if (arg0) {
          const obj4 = { style: null, order: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null, onLayout: null, onFirstCardLayout: null };
          const items2 = [, ];
          ({ planSelectCardsSection: arr6[0], sectionWidth: arr6[1] } = closure_8);
          obj4.style = items2;
          obj4.order = order;
          obj4.applicationId = applicationId;
          obj4.onPaymentSuccess = onPaymentSuccess;
          obj4.onPaymentDismiss = onPaymentDismiss;
          obj4.onLayout = onLayout;
          obj4.onFirstCardLayout = onFirstCardLayout;
          let tmp29Result = closure_2_11(PlanSelectCardsDefault, obj4);
          let tmp40 = closure_2_11;
          let tmp42 = importDefault;
          let tmp32 = closure_8;
        } else {
          const obj6 = { style: null, order: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null, onLayout: null, onFirstCardLayout: null };
          tmp32 = closure_8;
          const items3 = [, ];
          ({ sectionWithPadding: arr5[0], sectionWidth: arr5[1] } = closure_8);
          obj6.style = items3;
          obj6.order = order;
          obj6.applicationId = applicationId;
          obj6.onPaymentSuccess = onPaymentSuccess;
          obj6.onPaymentDismiss = onPaymentDismiss;
          obj6.onLayout = onLayout;
          obj6.onFirstCardLayout = onFirstCardLayout;
          tmp29Result = closure_2_11(PremiumFeaturesCardsDefault, obj6);
          tmp40 = closure_2_11;
          tmp42 = importDefault;
        }
        items[6] = tmp29Result;
        const obj7 = { style: null };
        const items4 = [, ];
        ({ sectionWithTopMargin: arr7[0], sectionWidth: arr7[1] } = tmp32);
        obj7.style = items4;
        items[7] = tmp40(tmp42(15230), obj7);
        const obj8 = { style: null, isFractionalOnly: null };
        const items5 = [, , ];
        ({ sectionWithTopMargin: arr8[0], sectionWithPadding: arr8[1], sectionWidth: arr8[2] } = tmp32);
        obj8.style = items5;
        obj8.isFractionalOnly = flag;
        items[8] = tmp40(tmp42(15235), obj8);
        const items6 = [, , , ];
        ({ sectionWithTopMargin: arr9[0], sectionWithPadding: arr9[1], sectionWidth: arr9[2] } = tmp32);
        let tmp54 = null;
        if (enabled) {
          const obj9 = { marginBottom: null };
          const _Math = Math;
          obj9.marginBottom = Math.max(bottom, tmp42(575).space.PX_16) + 48;
          tmp54 = obj9;
        }
        const obj10 = { style: null, showSubscribeButton: null };
        items6[3] = tmp54;
        obj10.style = items6;
        let tmp58 = !userHasSubscription;
        if (!userHasSubscription) {
          tmp58 = !enabled;
        }
        const obj11 = { children: null };
        obj10.showSubscribeButton = tmp58;
        items[9] = tmp40(tmp42(15252), obj10);
        obj11.children = items;
        return application_id(refs, obj11);
      } else {
        if (userHasSubscription) {
          let sectionWithTopMargin = closure_8.sectionWithTopMargin;
        } else {
          sectionWithTopMargin = {};
        }
        const obj12 = { style: null };
        const items7 = [sectionWithTopMargin, closure_8.sectionWidth];
        obj12.style = items7;
        closure_2_11(premium_HeaderDefault, obj12);
      }
    } else {
      let items8 = [closure_8.accountCreditContainer, ];
      const obj13 = { style: null, children: null };
      items8[1] = userHasSubscription ? {} : closure_8.accountCreditContainerWithSpacing;
      obj13.style = items8;
      items8 = children;
      obj13.children = children;
      closure_2_11(hasOwnProperty, obj13);
    }
  }
  let obj6 = { style: items4, children: null };
  items4[2] = { paddingTop: num };
  let items5 = [c11(UserSettingsAccountUnverifiedHeaderDefault, {}), , ];
  let obj7 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll: function handleScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      let tmp2 = !c11;
      if (!c11) {
        tmp2 = nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      }
      if (tmp2) {
        const obj2 = { location_stack: analyticsLocations };
        AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
        _undefined(true);
      }
      if (enabled) {
        if (showAfterLastCard) {
          let current = ref3.current;
        } else {
          current = ref.current + ref2.current;
        }
        let tmp15 = current > 0;
        if (tmp15) {
          tmp15 = contentOffset.y > current;
        }
        const result = sharedValue.set(tmp15);
      }
    },
    scrollEventThrottle: 0,
    showsVerticalScrollIndicator: false,
    children: null
  };
  if (!userHasSubscription) {
    if (null == premiumTrialOffer) {
      if (null == premiumDiscountOffer) {
        let obj8 = { children: renderScrollContent };
        let renderScrollContentResult = tmp21(enabled, obj8);
      }
      obj7.children = renderScrollContentResult;
      items5[1] = tmp21(tmp22, obj7);
      let tmp21Result2 = null;
      if (tmp9) {
        let obj9 = { style: tmp4.sectionWidth, isVisible: sharedValue, backgroundColor: tmp4.themedBackground.backgroundColor };
        tmp21Result2 = tmp21(PremiumMarketingFloatingSubscribeButtonDefault, obj9);
      }
      items5[2] = tmp21Result2;
      obj6.children = items5;
      return tmp19(order, obj6);
    }
  }
  renderScrollContentResult = renderScrollContent(false);
  tmp19 = c12;
  const tmpResult10 = userHasSubscription(9246);
};