// === Module 13590: PremiumMarketingPage ===

// Module 13590 (PremiumMarketingPage)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
let FractionalPremiumStates = fn(1391).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 }, arrowIcon: { tintColor: nativeDefault.colors.TEXT_DEFAULT }, backButton: null, sectionWithTopMargin: { marginTop: 48 }, sectionWithPadding: { paddingHorizontal: 12 }, sectionWidth: { maxWidth: 464 }, accountCreditContainer: { width: "100%" }, accountCreditContainerWithSpacing: { marginTop: 24, marginBottom: 20 }, themedBackground: null, backButtonBackground: null };
let obj4 = { transform: null, position: "absolute", left: 16 };
let items = [{ scaleX: -1 }];
obj4.transform = items;
obj2.backButton = obj4;
let obj3 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj2.themedBackground = { backgroundColor: fn(5974).DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj5 = { backgroundColor: fn(5974).DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj2.backButtonBackground = { backgroundColor: fn(5974).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: fn(5974).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumMarketingPage(userHasSubscription) {
  const cResult = userHasSubscription(analyticsLocations[11]).c(105);
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ subscriptionDetails, billingInfo, accountCredit, applicationId, onClose, premiumFeatureCardOrder, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  let obj = userHasSubscription(analyticsLocations[11]);
  const tmp4 = undefined !== isFullScreenPresentation && isFullScreenPresentation;
  const commonTriggerPoint = userHasSubscription(analyticsLocations[12]).useCommonTriggerPoint(tmp(tmp2[13]).OpenNitroTriggerPoint);
  closure_12();
  const tmpResult = userHasSubscription(analyticsLocations[12]);
  const navigation = userHasSubscription(analyticsLocations[14]).useNavigation();
  analyticsLocations = navigation(tmp2[15])().analyticsLocations;
  const tmp9 = first(noop.useState(false), 2);
  first = tmp9[0];
  noop = tmp9[1];
  const tmp8 = navigation;
  const tmpResult5 = userHasSubscription(analyticsLocations[14]);
  let top = userHasSubscription(analyticsLocations[16]).useYouBarSettingsCustomHeaderPaddingTop();
  const tmpResult6 = userHasSubscription(analyticsLocations[16]);
  if (tmp4) {
    top = tmp11.top;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "PremiumMarketingPage" };
    cResult[0] = obj2;
    let first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  tmp11 = navigation(analyticsLocations[17])();
  const config = tmp8(analyticsLocations[18]).useConfig(first1);
  ({ enabled, showAfterLastCard } = config);
  let tmp14 = !userHasSubscription;
  if (!userHasSubscription) {
    tmp14 = enabled;
  }
  enabled = tmp14;
  noop.useRef(0);
  noop.useRef(0);
  noop.useRef(0);
  const tmp8Result = tmp8(analyticsLocations[18]);
  const sharedValue = userHasSubscription(analyticsLocations[19]).useSharedValue(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        layout = userHasSubscription.nativeEvent.layout;
        y = layout.y;
        closure_7.current = y;
        closure_9.current = y + layout.height;
        return;
      }
    }
    cResult[1] = V;
  } else {
    class V {
      constructor(arg0) {
        layout = userHasSubscription.nativeEvent.layout;
        y = layout.y;
        closure_7.current = y;
        closure_9.current = y + layout.height;
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        layout = userHasSubscription.nativeEvent.layout;
        y = layout.y;
        closure_7.current = y;
        closure_9.current = y + layout.height;
        return;
      }
    }
    cResult[2] = tmp18;
  } else {
    class V {
      constructor(arg0) {
        layout = userHasSubscription.nativeEvent.layout;
        y = layout.y;
        closure_7.current = y;
        closure_9.current = y + layout.height;
        return;
      }
    }
  }
  if (cResult[3] === navigation) {
    class V {
      constructor(arg0) {
        layout = userHasSubscription.nativeEvent.layout;
        y = layout.y;
        closure_7.current = y;
        closure_9.current = y + layout.height;
        return;
      }
    }
    const layoutEffect = obj4.useLayoutEffect(et, items1);
    const promotionMarketingComponent = tmp(tmp2[20]).usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.PREMIUM_TAB);
    if (cResult[7] !== promotionMarketingComponent) {
      class V {
        constructor(arg0) {
          layout = userHasSubscription.nativeEvent.layout;
          y = layout.y;
          closure_7.current = y;
          closure_9.current = y + layout.height;
          return;
        }
      }
      const items = [promotionMarketingComponent];
      cResult[7] = promotionMarketingComponent;
      cResult[8] = tmp23;
      cResult[9] = items;
      let tmp22 = items;
    } else {
      class V {
        constructor(arg0) {
          layout = userHasSubscription.nativeEvent.layout;
          y = layout.y;
          closure_7.current = y;
          closure_9.current = y + layout.height;
          return;
        }
      }
      tmp22 = cResult[9];
    }
    const effect = obj4.useEffect(tmp23, tmp22);
    if (cResult[10] === analyticsLocations) {
      class V {
        constructor(arg0) {
          layout = userHasSubscription.nativeEvent.layout;
          y = layout.y;
          closure_7.current = y;
          closure_9.current = y + layout.height;
          return;
        }
      }
    }
    function handleScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      let tmp2 = !first;
      if (!first) {
        tmp2 = nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      }
      if (tmp2) {
        const obj2 = { location_stack: analyticsLocations };
        AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
        closure_4(true);
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
    }
    cResult[10] = analyticsLocations;
    cResult[11] = first;
    cResult[12] = sharedValue;
    cResult[13] = showAfterLastCard;
    cResult[14] = tmp14;
    cResult[15] = handleScroll;
    const tmpResult8 = tmp(tmp2[20]);
  }
  et = function et() {
    navigation.setOptions({ headerShown: userHasSubscription });
  };
  items1 = [navigation, userHasSubscription];
  cResult[3] = navigation;
  cResult[4] = userHasSubscription;
  cResult[5] = et;
  cResult[6] = items1;
  const tmpResult7 = userHasSubscription(analyticsLocations[19]);
}) : (function PremiumMarketingPage(userHasSubscription) {
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ onClose, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  ({ subscriptionDetails, billingInfo, accountCredit, applicationId, premiumFeatureCardOrder } = userHasSubscription);
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
  const commonTriggerPoint = userHasSubscription(analyticsLocations[12]).useCommonTriggerPoint(userHasSubscription(analyticsLocations[13]).OpenNitroTriggerPoint);
  const tmp4 = onClose();
  let obj = userHasSubscription(analyticsLocations[12]);
  const navigation = userHasSubscription(analyticsLocations[14]).useNavigation();
  analyticsLocations = navigation(analyticsLocations[15])().analyticsLocations;
  let obj2 = userHasSubscription(analyticsLocations[14]);
  [c3, c4] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  let top = userHasSubscription(analyticsLocations[16]).useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[17])();
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  const obj4 = userHasSubscription(analyticsLocations[16]);
  const config = navigation(analyticsLocations[18]).useConfig({ location: "PremiumMarketingPage" });
  ({ enabled, showAfterLastCard: c5 } = config);
  let tmp9 = !userHasSubscription;
  if (!userHasSubscription) {
    tmp9 = enabled;
  }
  enabled = tmp9;
  noop.useRef(0);
  noop.useRef(0);
  FractionalPremiumStates = obj3.useRef(0);
  const tmp6Result = navigation(analyticsLocations[18]);
  sharedValue = userHasSubscription(analyticsLocations[19]).useSharedValue(false);
  const callback = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const y = layout.y;
    closure_7.current = y;
    closure_9.current = y + layout.height;
  }, []);
  const items = [navigation, userHasSubscription];
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_8.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  const layoutEffect = obj3.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: userHasSubscription });
  }, items);
  const tmpResult = userHasSubscription(analyticsLocations[19]);
  promotionMarketingComponent = userHasSubscription(analyticsLocations[20]).usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.PREMIUM_TAB);
  const items1 = [promotionMarketingComponent];
  const effect = obj3.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj3);
    }
  }, items1);
  if (onClose == null) {
    onClose = () => navigation.pop();
  }
  let tmp16 = !userHasSubscription;
  if (!userHasSubscription) {
    const obj5 = { style: null, accessibilityLabel: null, source: null, size: null, iconStyle: null, onPress: null };
    const items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    obj5.style = items2;
    const intl = tmp(tmp2[27]).intl;
    obj5.accessibilityLabel = intl.string(tmp(tmp2[27]).t["13/7kX"]);
    obj5.source = tmp6(tmp2[28]);
    obj5.size = tmp(tmp2[26]).CircularIconButton.Sizes.MEDIUM_32;
    obj5.iconStyle = tmp4.arrowIcon;
    obj5.onPress = function onPress() {
      return onClose();
    };
    tmp16 = sharedValue(tmp(tmp2[26]).CircularIconButton, obj5);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    hasAccountCreditResult = tmp6(tmp2[29]).hasAccountCredit(entitlements);
    const tmp6Result4 = tmp6(tmp2[29]);
  }
  const tmpResult3 = userHasSubscription(analyticsLocations[20]);
  const tmp19 = navigation(analyticsLocations[30])({ forceFetch: true });
  const promotionMarketingComponent1 = userHasSubscription(analyticsLocations[20]).usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items3 = [, , ];
  ({ container: arr4[0], themedBackground: arr4[1] } = tmp4);
  let num = 0;
  if (!userHasSubscription) {
    num = top;
  }
  const obj6 = { style: items3, children: null };
  items3[2] = { paddingTop: num };
  const items4 = [sharedValue(navigation(analyticsLocations[31]), {}), , ];
  const obj7 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll: function handleScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      let tmp2 = !c3;
      if (!c3) {
        tmp2 = nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      }
      if (tmp2) {
        const obj2 = { location_stack: analyticsLocations };
        AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
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
  const items5 = [tmp16, subscriptionDetails, billingInfo, , , , , , , ];
  if (!hasAccountCreditResult) {
    items5[3] = null;
    const obj8 = { style: null };
    const items6 = [userHasSubscription ? tmp4.sectionWithTopMargin : {}, tmp4.sectionWidth];
    obj8.style = items6;
    items5[4] = tmp23(tmp6(tmp2[32]), obj8);
    let tmp23Result = null != promotionMarketingComponent1;
    if (tmp23Result) {
      tmp23Result = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
    }
    if (tmp23Result) {
      const obj9 = { style: null, bannerFields: null, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess: null, onPaymentDismiss: null, componentId: null, promotionId: null };
      const items7 = [, , ];
      ({ sectionWithPadding: arr9[0], sectionWidth: arr9[1] } = tmp4);
      const obj10 = { marginBottom: tmp6(tmp2[8]).space.PX_24 };
      items7[2] = obj10;
      obj9.style = items7;
      obj9.bannerFields = promotionMarketingComponent1.properties.properties.marketingPageBanner;
      obj9.onPaymentSuccess = onPaymentSuccess;
      obj9.onPaymentDismiss = onPaymentDismiss;
      ({ id: obj15.componentId, promotionId: obj15.promotionId } = promotionMarketingComponent1);
      tmp23Result = tmp23(tmp6(tmp2[33]), obj9);
      const tmp6Result5 = tmp6(tmp2[33]);
    }
    items5[5] = tmp23Result;
    const obj11 = { style: null, order: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null, onLayout: null, onFirstCardLayout: null };
    const items8 = [, ];
    ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp4);
    obj11.style = items8;
    obj11.order = premiumFeatureCardOrder;
    obj11.applicationId = applicationId;
    obj11.onPaymentSuccess = onPaymentSuccess;
    obj11.onPaymentDismiss = onPaymentDismiss;
    obj11.onLayout = callback;
    obj11.onFirstCardLayout = callback1;
    items5[6] = tmp23(tmp6(tmp2[34]), obj11);
    const obj12 = { style: null };
    const items9 = [, ];
    ({ sectionWithTopMargin: arr11[0], sectionWidth: arr11[1] } = tmp4);
    obj12.style = items9;
    items5[7] = tmp23(tmp6(tmp2[35]), obj12);
    const obj13 = { style: null, isFractionalOnly: null };
    const items10 = [, , ];
    ({ sectionWithTopMargin: arr12[0], sectionWithPadding: arr12[1], sectionWidth: arr12[2] } = tmp4);
    obj13.style = items10;
    obj13.isFractionalOnly = tmp19.fractionalState === FractionalPremiumStates.FP_ONLY;
    items5[8] = tmp23(tmp6(tmp2[36]), obj13);
    const items11 = [, , , ];
    ({ sectionWithTopMargin: arr13[0], sectionWithPadding: arr13[1], sectionWidth: arr13[2] } = tmp4);
    let tmp30 = null;
    if (tmp9) {
      const obj14 = { marginBottom: null };
      const _Math = Math;
      obj14.marginBottom = Math.max(rect.bottom, tmp6(tmp2[8]).space.PX_16) + 48;
      tmp30 = obj14;
    }
    const obj16 = { style: null, showSubscribeButton: null };
    items11[3] = tmp30;
    obj16.style = items11;
    let tmp32 = !userHasSubscription;
    if (!userHasSubscription) {
      tmp32 = !enabled;
    }
    obj16.showSubscribeButton = tmp32;
    items5[9] = tmp23(tmp6(tmp2[37]), obj16);
    obj7.children = items5;
    items4[1] = tmp21(tmp24, obj7);
    let tmp23Result3 = null;
    if (tmp9) {
      const obj17 = { style: tmp4.sectionWidth, isVisible: sharedValue, backgroundColor: tmp4.themedBackground.backgroundColor };
      tmp23Result3 = tmp23(tmp6(tmp2[38]), obj17);
    }
    items4[2] = tmp23Result3;
    obj6.children = items4;
    return tmp21(tmp22, obj6);
  } else {
    const items12 = [tmp4.accountCreditContainer, ];
    const obj18 = { style: null, children: null };
    items12[1] = userHasSubscription ? {} : tmp4.accountCreditContainerWithSpacing;
    obj18.style = items12;
    obj18.children = accountCredit;
    tmp23(tmp22, obj18);
  }
});