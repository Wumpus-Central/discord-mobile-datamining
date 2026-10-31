// discord_app/modules/user_settings/premium/native/PremiumMarketingPage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { display: "flex" },
  scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 },
  arrowIcon: { tintColor: nativeDefault.colors.TEXT_DEFAULT },
  backButton: null,
  sectionWithTopMargin: { marginTop: 48 },
  sectionWithPadding: { paddingHorizontal: 12 },
  sectionWidth: { maxWidth: 464 },
  accountCreditContainer: { width: "100%" },
  accountCreditContainerWithSpacing: { marginTop: 24, marginBottom: 20 },
  themedBackground: null,
  backButtonBackground: null,
};
let obj4 = { transform: null, position: "absolute", left: 16 };
let items = [{ scaleX: -1 }];
obj4.transform = items;
obj2.backButton = obj4;
let obj3 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj2.themedBackground = { backgroundColor: fn(6778).DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj5 = { backgroundColor: fn(6778).DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj2.backButtonBackground = { backgroundColor: fn(6778).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
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
  let ref;
  let sharedValue;
  let promotionMarketingComponent;
  onClose = undefined;
  const commonTriggerPoint = userHasSubscription(analyticsLocations[10]).useCommonTriggerPoint(
    userHasSubscription(analyticsLocations[11]).OpenNitroTriggerPoint,
  );
  const tmp4 = onClose();
  let obj = userHasSubscription(analyticsLocations[10]);
  const navigation = userHasSubscription(analyticsLocations[12]).useNavigation();
  analyticsLocations = navigation(analyticsLocations[13])().analyticsLocations;
  let obj2 = userHasSubscription(analyticsLocations[12]);
  [c3, c4] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  let top = userHasSubscription(analyticsLocations[14]).useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[15])();
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  const obj4 = userHasSubscription(analyticsLocations[14]);
  const config = navigation(analyticsLocations[16]).useConfig({ location: "PremiumMarketingPage" });
  ({ enabled, showAfterLastCard: c5 } = config);
  let tmp9 = !userHasSubscription;
  if (!userHasSubscription) {
    tmp9 = enabled;
  }
  enabled = tmp9;
  ref = obj3.useRef(0);
  noop.useRef(0);
  noop.useRef(0);
  const tmp6Result = navigation(analyticsLocations[16]);
  sharedValue = userHasSubscription(analyticsLocations[17]).useSharedValue(false);
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
  const tmpResult = userHasSubscription(analyticsLocations[17]);
  promotionMarketingComponent = userHasSubscription(analyticsLocations[18]).usePromotionMarketingComponent(
    tmp(tmp2[19]).MarketingComponentType.PREMIUM_TAB,
  );
  const items1 = [promotionMarketingComponent];
  const effect = obj3.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        promotionMarketingComponent.promotionId,
      ).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        promotionMarketingComponent.promotionId,
        obj3,
      );
    }
  }, items1);
  if (onClose == null) {
    onClose = () => navigation.pop();
  }
  let tmp16 = !userHasSubscription;
  if (!userHasSubscription) {
    const obj5 = { style: null, accessibilityLabel: null, source: null, size: null, iconStyle: null, onPress: null };
    const items2 = [,];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    obj5.style = items2;
    const intl = tmp(tmp2[24]).intl;
    obj5.accessibilityLabel = intl.string(tmp(tmp2[24]).t["13/7kX"]);
    obj5.source = tmp6(tmp2[25]);
    obj5.size = tmp(tmp2[23]).CircularIconButton.Sizes.MEDIUM_32;
    obj5.iconStyle = tmp4.arrowIcon;
    obj5.onPress = function onPress() {
      return onClose();
    };
    tmp16 = sharedValue(tmp(tmp2[23]).CircularIconButton, obj5);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    hasAccountCreditResult = tmp6(tmp2[26]).hasAccountCredit(entitlements);
    const tmp6Result4 = tmp6(tmp2[26]);
  }
  const tmpResult4 = userHasSubscription(analyticsLocations[18]);
  const items3 = [ref];
  const stateFromStores = userHasSubscription(analyticsLocations[27]).useStateFromStores(items3, () =>
    ref.getCurrentUser(),
  );
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isFractionalPremiumWithNoStandardSub();
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult5 = userHasSubscription(analyticsLocations[27]);
  const promotionMarketingComponent1 = userHasSubscription(analyticsLocations[18]).usePromotionMarketingComponent(
    tmp(tmp2[19]).MarketingComponentType.MARKETING_PAGE_BANNER,
  );
  const items4 = [, ,];
  ({ container: arr5[0], themedBackground: arr5[1] } = tmp4);
  let num = 0;
  if (!userHasSubscription) {
    num = top;
  }
  const obj6 = { style: items4, children: null };
  items4[2] = { paddingTop: num };
  const items5 = [sharedValue(navigation(analyticsLocations[28]), {}), ,];
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
    children: null,
  };
  const items6 = [tmp16, subscriptionDetails, billingInfo, , , , , , ,];
  if (!hasAccountCreditResult) {
    items6[3] = null;
    const obj8 = { style: null };
    const items7 = [userHasSubscription ? tmp4.sectionWithTopMargin : {}, tmp4.sectionWidth];
    obj8.style = items7;
    items6[4] = tmp22(tmp6(tmp2[30]), obj8);
    let tmp22Result = null != promotionMarketingComponent1;
    if (tmp22Result) {
      tmp22Result = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
    }
    if (tmp22Result) {
      const obj9 = {
        style: null,
        bannerFields: null,
        analyticsPage: "Marketing Page Banner Tile",
        onPaymentSuccess: null,
        onPaymentDismiss: null,
        componentId: null,
        promotionId: null,
      };
      const items8 = [, ,];
      ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp4);
      const obj10 = { marginBottom: tmp6(tmp2[8]).space.PX_24 };
      items8[2] = obj10;
      obj9.style = items8;
      obj9.bannerFields = promotionMarketingComponent1.properties.properties.marketingPageBanner;
      obj9.onPaymentSuccess = onPaymentSuccess;
      obj9.onPaymentDismiss = onPaymentDismiss;
      ({ id: obj17.componentId, promotionId: obj17.promotionId } = promotionMarketingComponent1);
      tmp22Result = tmp22(tmp6(tmp2[31]), obj9);
      const tmp6Result5 = tmp6(tmp2[31]);
    }
    items6[5] = tmp22Result;
    const obj11 = {
      style: null,
      order: null,
      applicationId: null,
      onPaymentSuccess: null,
      onPaymentDismiss: null,
      onLayout: null,
      onFirstCardLayout: null,
    };
    const items9 = [,];
    ({ sectionWithPadding: arr11[0], sectionWidth: arr11[1] } = tmp4);
    obj11.style = items9;
    obj11.order = premiumFeatureCardOrder;
    obj11.applicationId = applicationId;
    obj11.onPaymentSuccess = onPaymentSuccess;
    obj11.onPaymentDismiss = onPaymentDismiss;
    obj11.onLayout = callback;
    obj11.onFirstCardLayout = callback1;
    items6[6] = tmp22(tmp6(tmp2[32]), obj11);
    const obj12 = { style: null };
    const items10 = [,];
    ({ sectionWithTopMargin: arr12[0], sectionWidth: arr12[1] } = tmp4);
    obj12.style = items10;
    items6[7] = tmp22(tmp6(tmp2[33]), obj12);
    const obj13 = { style: null, isFractionalOnly: null };
    const items11 = [, ,];
    ({ sectionWithTopMargin: arr13[0], sectionWithPadding: arr13[1], sectionWidth: arr13[2] } = tmp4);
    obj13.style = items11;
    obj13.isFractionalOnly = flag;
    items6[8] = tmp22(tmp6(tmp2[34]), obj13);
    const items12 = [, , ,];
    ({ sectionWithTopMargin: arr14[0], sectionWithPadding: arr14[1], sectionWidth: arr14[2] } = tmp4);
    let tmp28 = null;
    if (tmp9) {
      const obj14 = { marginBottom: null };
      const _Math = Math;
      obj14.marginBottom = Math.max(rect.bottom, tmp6(tmp2[8]).space.PX_16) + 48;
      tmp28 = obj14;
    }
    const obj15 = { style: null, showSubscribeButton: null };
    items12[3] = tmp28;
    obj15.style = items12;
    let tmp30 = !userHasSubscription;
    if (!userHasSubscription) {
      tmp30 = !enabled;
    }
    obj15.showSubscribeButton = tmp30;
    items6[9] = tmp22(tmp6(tmp2[35]), obj15);
    obj7.children = items6;
    items5[1] = tmp20(tmp23, obj7);
    let tmp22Result3 = null;
    if (tmp9) {
      const obj16 = {
        style: tmp4.sectionWidth,
        isVisible: sharedValue,
        backgroundColor: tmp4.themedBackground.backgroundColor,
      };
      tmp22Result3 = tmp22(tmp6(tmp2[36]), obj16);
    }
    items5[2] = tmp22Result3;
    obj6.children = items5;
    return tmp20(tmp21, obj6);
  } else {
    const items13 = [tmp4.accountCreditContainer];
    const obj18 = { style: null, children: null };
    items13[1] = userHasSubscription ? {} : tmp4.accountCreditContainerWithSpacing;
    obj18.style = items13;
    obj18.children = accountCredit;
    tmp22(tmp21, obj18);
  }
}
