// discord_app/modules/user_settings/premium/native/PremiumMarketingPage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import UserSettingsAccountUnverifiedHeaderDefault from "../../account/native/UserSettingsAccountUnverifiedHeader.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import PremiumFeaturesCardsDefault from "PremiumFeaturesCards.tsx";
import _modDef14068 from "../../../../../_runtime/metro/14068__.js";
import MarketingPageBannerTileDefault from "../../../premium/promotions/native/MarketingPageBannerTile.tsx";
import NitroMobileRefreshExperiment from "../../../premium/experiments/NitroMobileRefreshExperiment.tsx";
import PremiumMarketingFloatingSubscribeExperimentDefault from "PremiumMarketingFloatingSubscribeExperiment.tsx";
import PlanSelectHeaderDefault from "../../../premium/plan_select_cards/native/PlanSelectHeader.tsx";
import premium_HeaderDefault from "Header.tsx";
import PlanSelectCardsDefault from "../../../premium/plan_select_cards/native/PlanSelectCards.tsx";
import PremiumMarketingFloatingSubscribeButtonDefault from "PremiumMarketingFloatingSubscribeButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function NitroMobileRefreshGate(children) {
  return closure_1_11(closure_1_10, {
    children: children.children(NitroMobileRefreshExperiment.useIsNitroMobileRefreshEnabled("PremiumMarketingPage")),
  });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const jsxProd = fn(21);
({ Fragment: closure_10, jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5140);
let obj2 = {
  container: { display: "flex" },
  scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 },
  arrowIcon: { tintColor: nativeDefault.colors.TEXT_DEFAULT },
  backButton: null,
  sectionWithTopMargin: { marginTop: 48 },
  sectionWithPadding: { paddingHorizontal: 12 },
  planSelectCardsSection: null,
  sectionWidth: null,
  accountCreditContainer: null,
  accountCreditContainerWithSpacing: null,
  themedBackground: null,
  backButtonBackground: null,
};
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
obj2.themedBackground = { backgroundColor: fn(6833).DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj6 = { backgroundColor: fn(6833).DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj2.backButtonBackground = { backgroundColor: fn(6833).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({
    subscriptionDetails: importDefault,
    billingInfo: dependencyMap,
    accountCredit: _slicedToArray,
    applicationId: noop,
    onClose,
    premiumFeatureCardOrder: closure_5,
    entitlements,
    onPaymentSuccess: closure_6,
    onPaymentDismiss: UserStore,
    isFullScreenPresentation,
  } = userHasSubscription);
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
  let promotionMarketingComponent;
  onClose = undefined;
  closure_25 = undefined;
  c26 = undefined;
  let flag;
  closure_28 = undefined;
  const commonTriggerPoint = userHasSubscription(15627).useCommonTriggerPoint(
    userHasSubscription(15628).OpenNitroTriggerPoint,
  );
  const tmp4 = bottom();
  closure_8 = tmp4;
  let obj = userHasSubscription(15627);
  const navigation = userHasSubscription(1499).useNavigation();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj2 = userHasSubscription(1499);
  [c11, c12] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  let top = userHasSubscription(15629).useYouBarSettingsCustomHeaderPaddingTop();
  const rect = useSafeAreaInsetsDefault();
  bottom = rect.bottom;
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  let obj4 = userHasSubscription(15629);
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
  promotionMarketingComponent = userHasSubscription(15588).usePromotionMarketingComponent(
    tmp(10730).MarketingComponentType.PREMIUM_TAB,
  );
  let items1 = [promotionMarketingComponent];
  const effect = noop.useEffect(() => {
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
  let tmp14 = !userHasSubscription;
  if (!userHasSubscription) {
    const obj5 = { style: null, accessibilityLabel: null, source: null, size: null, iconStyle: null, onPress: null };
    let items2 = [,];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    obj5.style = items2;
    const intl = tmp(1113).intl;
    obj5.accessibilityLabel = intl.string(tmp(1113).t["13/7kX"]);
    obj5.source = _modDef14068;
    obj5.size = tmp(15479).CircularIconButton.Sizes.MEDIUM_32;
    obj5.iconStyle = tmp4.arrowIcon;
    obj5.onPress = function onPress() {
      return onClose();
    };
    tmp14 = c11(tmp(15479).CircularIconButton, obj5);
  }
  closure_25 = tmp14;
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    hasAccountCreditResult = PremiumUtilsDefault.hasAccountCredit(entitlements);
    const tmp6Result2 = PremiumUtilsDefault;
  }
  c26 = hasAccountCreditResult;
  const tmpResult6 = userHasSubscription(15588);
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
  closure_28 = userHasSubscription(15588).usePromotionMarketingComponent(
    tmp(10730).MarketingComponentType.MARKETING_PAGE_BANNER,
  );
  const tmpResult8 = userHasSubscription(15588);
  const premiumTrialOffer = userHasSubscription(7703).usePremiumTrialOffer();
  const tmpResult9 = userHasSubscription(7703);
  let items4 = [, ,];
  ({ container: arr5[0], themedBackground: arr5[1] } = tmp4);
  let num = 0;
  const premiumDiscountOffer = userHasSubscription(8599).usePremiumDiscountOffer();
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
    items = [tmp3, closure_1_1, dependencyMap, , , , , , ,];
    if (!c26) {
      items[3] = null;
      if (arg0) {
        items[4] = null;
        let tmp21 = null != closure_28;
        if (tmp21) {
          tmp21 = "marketingPageBanner" === closure_28.properties.properties.oneofKind;
        }
        if (tmp21) {
          const obj2 = {
            style: null,
            bannerFields: null,
            analyticsPage: "Marketing Page Banner Tile",
            onPaymentSuccess: null,
            onPaymentDismiss: null,
            componentId: null,
            promotionId: null,
          };
          const items1 = [, ,];
          ({ sectionWithPadding: arr4[0], sectionWidth: arr4[1] } = closure_8);
          const obj3 = { marginBottom: nativeDefault.space.PX_24 };
          items1[2] = obj3;
          obj2.style = items1;
          obj2.bannerFields = closure_28.properties.properties.marketingPageBanner;
          obj2.onPaymentSuccess = onPaymentSuccess;
          obj2.onPaymentDismiss = onPaymentDismiss;
          ({ id: obj5.componentId, promotionId: obj5.promotionId } = closure_28);
          tmp21 = closure_2_11(MarketingPageBannerTileDefault, obj2);
        }
        items[5] = tmp21;
        if (arg0) {
          const obj4 = {
            style: null,
            order: null,
            applicationId: null,
            onPaymentSuccess: null,
            onPaymentDismiss: null,
            onLayout: null,
            onFirstCardLayout: null,
          };
          const items2 = [,];
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
          const obj6 = {
            style: null,
            order: null,
            applicationId: null,
            onPaymentSuccess: null,
            onPaymentDismiss: null,
            onLayout: null,
            onFirstCardLayout: null,
          };
          tmp32 = closure_8;
          const items3 = [,];
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
        const items4 = [,];
        ({ sectionWithTopMargin: arr7[0], sectionWidth: arr7[1] } = tmp32);
        obj7.style = items4;
        items[7] = tmp40(tmp42(15646), obj7);
        const obj8 = { style: null, isFractionalOnly: null };
        const items5 = [, ,];
        ({ sectionWithTopMargin: arr8[0], sectionWithPadding: arr8[1], sectionWidth: arr8[2] } = tmp32);
        obj8.style = items5;
        obj8.isFractionalOnly = flag;
        items[8] = tmp40(tmp42(15651), obj8);
        const items6 = [, , ,];
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
        items[9] = tmp40(tmp42(15668), obj10);
        obj11.children = items;
        return application_id(closure_2_10, obj11);
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
      let items8 = [closure_8.accountCreditContainer];
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
  let items5 = [c11(UserSettingsAccountUnverifiedHeaderDefault, {}), ,];
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
    children: null,
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
        let obj9 = {
          style: tmp4.sectionWidth,
          isVisible: sharedValue,
          backgroundColor: tmp4.themedBackground.backgroundColor,
        };
        tmp21Result2 = tmp21(PremiumMarketingFloatingSubscribeButtonDefault, obj9);
      }
      items5[2] = tmp21Result2;
      obj6.children = items5;
      return tmp19(order, obj6);
    }
  }
  renderScrollContentResult = renderScrollContent(false);
  tmp19 = c12;
  const tmpResult10 = userHasSubscription(8599);
}
