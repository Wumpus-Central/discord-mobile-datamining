// === Module 13464: PremiumMarketingPage ===

// Module 13464 (PremiumMarketingPage)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 1945 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let FractionalPremiumStates = fn(1373).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 }, arrowIcon: null, backButton: null, sectionWithTopMargin: null, sectionWithPadding: null, sectionWidth: null, accountCreditContainer: null, accountCreditContainerWithSpacing: null, themedBackground: null, backButtonBackground: null, promotionCardHeader: null };
createStyles = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
createStyles.arrowIcon = createStyles;
let obj1 = { transform: null, position: "absolute", left: 16 };
let items = [{ scaleX: -1 }];
obj1.transform = items;
createStyles.backButton = obj1;
createStyles.sectionWithTopMargin = { marginTop: 48 };
createStyles.sectionWithPadding = { paddingHorizontal: 12 };
createStyles.sectionWidth = { maxWidth: 464 };
createStyles.accountCreditContainer = { width: "100%" };
createStyles.accountCreditContainerWithSpacing = { marginTop: 24, marginBottom: 20 };
createStyles.themedBackground = { backgroundColor: fn(5441).DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj2 = { backgroundColor: fn(5441).DARK_PRIMARY_700_LIGHT_WHITE_500 };
createStyles.backButtonBackground = { backgroundColor: fn(5441).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
createStyles.promotionCardHeader = { marginBottom: 16, marginHorizontal: "auto", textAlign: "center" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ applicationId, onClose, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  ({ subscriptionDetails, billingInfo, accountCredit, premiumFeatureCardOrder } = userHasSubscription);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  enabled = undefined;
  FractionalPremiumStates = undefined;
  let sharedValue;
  let promotionMarketingComponent;
  onClose = undefined;
  let obj = userHasSubscription(analyticsLocations[10]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(userHasSubscription(analyticsLocations[11]).OpenNitroTriggerPoint);
  const tmp4 = onClose();
  let obj1 = userHasSubscription(analyticsLocations[12]);
  const navigation = obj1.useNavigation();
  analyticsLocations = navigation(analyticsLocations[13])().analyticsLocations;
  let obj2 = noop;
  [c3, c4] = _slicedToArray(noop.useState(false), 2);
  let obj3 = userHasSubscription(analyticsLocations[14]);
  let top = obj3.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[15])();
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  let tmp6Result = tmp6(tmp2[16]);
  const config = tmp6Result.useConfig({ location: "PremiumMarketingPage" });
  ({ enabled, showAfterLastCard: c5 } = config);
  let tmp9 = !userHasSubscription;
  if (!userHasSubscription) {
    tmp9 = enabled;
  }
  enabled = tmp9;
  obj2.useRef(0);
  obj2.useRef(0);
  FractionalPremiumStates = obj2.useRef(0);
  let tmpResult = tmp(tmp2[17]);
  sharedValue = tmpResult.useSharedValue(false);
  const callback = obj2.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const y = layout.y;
    closure_7.current = y;
    closure_9.current = y + layout.height;
  }, []);
  const items = [navigation, userHasSubscription];
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_8.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  const layoutEffect = obj2.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: userHasSubscription });
  }, items);
  tmpResult = tmp(tmp2[18]);
  promotionMarketingComponent = tmpResult.usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.PREMIUM_TAB);
  const items1 = [promotionMarketingComponent];
  const effect = obj2.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = DismissibleContentUnsafeUtils;
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
    }
  }, items1);
  if (onClose == null) {
    onClose = () => navigation.pop();
  }
  let tmp16 = !userHasSubscription;
  if (!userHasSubscription) {
    obj = { style: null, accessibilityLabel: null, source: null, size: null, iconStyle: null, onPress: null };
    const items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    obj.style = items2;
    const intl = tmp(tmp2[24]).intl;
    obj.accessibilityLabel = intl.string(tmp(tmp2[24]).t["13/7kX"]);
    obj.source = tmp6(tmp2[25]);
    obj.size = tmp(tmp2[23]).CircularIconButton.Sizes.MEDIUM_32;
    obj.iconStyle = tmp4.arrowIcon;
    obj.onPress = function onPress() {
      return onClose();
    };
    tmp16 = sharedValue(tmp(tmp2[23]).CircularIconButton, obj);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    tmp6Result = tmp6(tmp2[26]);
    hasAccountCreditResult = tmp6Result.hasAccountCredit(entitlements);
  }
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const tmp19 = navigation(analyticsLocations[27])({ forceFetch: true });
  let isEligibleForBogoPromotion = userHasSubscription(analyticsLocations[28]).useIsEligibleForBogoPromotion();
  const tmpResult1 = userHasSubscription(analyticsLocations[28]);
  const promotionMarketingComponent1 = userHasSubscription(analyticsLocations[18]).usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items3 = [, , ];
  ({ container: arr4[0], themedBackground: arr4[1] } = tmp4);
  let num = 0;
  if (!userHasSubscription) {
    num = top;
  }
  obj = { style: items3, children: null };
  items3[2] = { paddingTop: num };
  const items4 = [sharedValue(navigation(analyticsLocations[29]), {}), , ];
  obj1 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      let tmp2 = !c3;
      if (!c3) {
        tmp2 = nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      }
      if (tmp2) {
        const obj = { location_stack: analyticsLocations };
        obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
        _undefined(true);
      }
      if (enabled) {
        if (c5) {
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
  const items5 = [tmp16, subscriptionDetails, billingInfo, , , , , , , , , ];
  if (!hasAccountCreditResult) {
    items5[3] = null;
    obj2 = { style: null };
    const items6 = [userHasSubscription ? tmp4.sectionWithTopMargin : {}, tmp4.sectionWidth];
    obj2.style = items6;
    items5[4] = tmp24(tmp6(tmp2[31]), obj2);
    let tmp24Result = isEligibleForBogoPromotion;
    if (isEligibleForBogoPromotion) {
      obj3 = { style: null, children: null };
      const items7 = [, ];
      ({ sectionWithPadding: arr9[0], sectionWidth: arr9[1] } = tmp4);
      obj3.style = items7;
      const obj4 = { style: tmp4.promotionCardHeader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl2 = tmp(tmp2[24]).intl;
      obj4.children = intl2.string(tmp(tmp2[24]).t["QPC/ee"]);
      obj3.children = tmp24(tmp(tmp2[32]).Text, obj4);
      tmp24Result = tmp24(tmp23, obj3);
    }
    items5[5] = tmp24Result;
    if (isEligibleForBogoPromotion) {
      const obj5 = { style: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
      const items8 = [, ];
      ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp4);
      obj5.style = items8;
      obj5.applicationId = applicationId;
      obj5.onPaymentSuccess = onPaymentSuccess;
      obj5.onPaymentDismiss = onPaymentDismiss;
      isEligibleForBogoPromotion = tmp24(tmp6(tmp2[33]), obj5);
    }
    items5[6] = isEligibleForBogoPromotion;
    tmp24Result = null != promotionMarketingComponent1;
    if (tmp24Result) {
      tmp24Result = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
    }
    if (tmp24Result) {
      const obj6 = { style: null, bannerFields: null, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess: null, onPaymentDismiss: null, componentId: null, promotionId: null };
      const items9 = [, , ];
      ({ sectionWithPadding: arr11[0], sectionWidth: arr11[1] } = tmp4);
      const obj7 = { marginBottom: tmp6(tmp2[8]).space.PX_24 };
      items9[2] = obj7;
      obj6.style = items9;
      obj6.bannerFields = promotionMarketingComponent1.properties.properties.marketingPageBanner;
      obj6.onPaymentSuccess = onPaymentSuccess;
      obj6.onPaymentDismiss = onPaymentDismiss;
      ({ id: obj19.componentId, promotionId: obj19.promotionId } = promotionMarketingComponent1);
      tmp24Result = tmp24(tmp6(tmp2[34]), obj6);
      const tmp6Result1 = tmp6(tmp2[34]);
    }
    items5[7] = tmp24Result;
    const obj8 = { style: null, order: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null, onLayout: null, onFirstCardLayout: null };
    const items10 = [, ];
    ({ sectionWithPadding: arr12[0], sectionWidth: arr12[1] } = tmp4);
    obj8.style = items10;
    obj8.order = premiumFeatureCardOrder;
    obj8.applicationId = applicationId;
    obj8.onPaymentSuccess = onPaymentSuccess;
    obj8.onPaymentDismiss = onPaymentDismiss;
    obj8.onLayout = callback;
    obj8.onFirstCardLayout = callback1;
    items5[8] = tmp24(tmp6(tmp2[35]), obj8);
    const obj9 = { style: null };
    const items11 = [, ];
    ({ sectionWithTopMargin: arr13[0], sectionWidth: arr13[1] } = tmp4);
    obj9.style = items11;
    items5[9] = tmp24(tmp6(tmp2[36]), obj9);
    const obj10 = { style: null, isFractionalOnly: null };
    const items12 = [, , ];
    ({ sectionWithTopMargin: arr14[0], sectionWithPadding: arr14[1], sectionWidth: arr14[2] } = tmp4);
    obj10.style = items12;
    obj10.isFractionalOnly = tmp19.fractionalState === FractionalPremiumStates.FP_ONLY;
    items5[10] = tmp24(tmp6(tmp2[37]), obj10);
    const items13 = [, , , ];
    ({ sectionWithTopMargin: arr15[0], sectionWithPadding: arr15[1], sectionWidth: arr15[2] } = tmp4);
    let tmp32 = null;
    if (tmp9) {
      const obj11 = { marginBottom: null };
      const _Math = Math;
      obj11.marginBottom = Math.max(rect.bottom, tmp6(tmp2[8]).space.PX_16) + 48;
      tmp32 = obj11;
    }
    const obj12 = { style: null, showSubscribeButton: null };
    items13[3] = tmp32;
    obj12.style = items13;
    let tmp34 = !userHasSubscription;
    if (!userHasSubscription) {
      tmp34 = !enabled;
    }
    obj12.showSubscribeButton = tmp34;
    items5[11] = tmp24(tmp6(tmp2[38]), obj12);
    obj1.children = items5;
    items4[1] = tmp22(tmp25, obj1);
    let tmp24Result1 = null;
    if (tmp9) {
      const obj13 = { style: tmp4.sectionWidth, isVisible: sharedValue, backgroundColor: tmp4.themedBackground.backgroundColor };
      tmp24Result1 = tmp24(tmp6(tmp2[39]), obj13);
    }
    items4[2] = tmp24Result1;
    obj.children = items4;
    return tmp22(tmp23, obj);
  } else {
    const items14 = [tmp4.accountCreditContainer, ];
    const obj14 = { style: null, children: null };
    items14[1] = userHasSubscription ? {} : tmp4.accountCreditContainerWithSpacing;
    obj14.style = items14;
    obj14.children = accountCredit;
    tmp24(tmp23, obj14);
  }
};