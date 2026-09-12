// === Module 7516: UserSettingsPremium ===

// Module 7516 (UserSettingsPremium)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useMountEffectDefault from "useMountEffect" /* 5073 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7093 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7098 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7265 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7517 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8167 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11568 */;
import UserTrialActionCreatorsDefault from "UserTrialActionCreators" /* 13438 */;
import PremiumSubscriptionDetailsDefault from "PremiumSubscriptionDetails" /* 13439 */;
import PremiumBillingInfoDefault from "PremiumBillingInfo" /* 13476 */;
import PremiumAccountCreditDefault from "PremiumAccountCredit" /* 13478 */;
import PremiumNitroHomeDefault from "PremiumNitroHome" /* 13479 */;
import PremiumMarketingPageDefault from "PremiumMarketingPage" /* 13545 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4299 */;
import SubscriptionStore from "SubscriptionStore" /* 4300 */;
import EntitlementStore from "EntitlementStore" /* 7497 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import IAPStore from "IAPStore" /* 7340 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = PremiumConstants);
const jsx = fn(21).jsx;
fn(4636);
const createStyles = { root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
let closure_20 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _slicedToArray, onClose, premiumFeatureCardOrder, isFullScreenPresentation } = applicationId);
  ({ isFromTextSection, onPaymentSuccess, onPaymentDismiss } = applicationId);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  let navigation;
  let state;
  let stateFromStores;
  let ref;
  let callback;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let state2;
  const tmp = closure_20();
  useStoreConnectionErrorAlertDefault();
  if (isFromTextSection) {
    let items = [AnalyticsLocationDefault.TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, AnalyticsLocationDefault.PREMIUM_MARKETING];
  analyticsLocations = useAnalyticsLocationsDefault(items2).analyticsLocations;
  let obj = applicationId(7097);
  navigation = obj.useSettingNavigationRoute();
  useMountEffectDefault(() => {
    const params = navigation.params;
    let analyticsLocation;
    if (params != null) {
      analyticsLocation = params.analyticsLocation;
    }
    let section;
    if (analyticsLocation != null) {
      section = analyticsLocation.section;
    }
    if (null != section) {
      let obj = { source_section: section };
    } else {
      obj = {};
    }
    obj = { application_id: applicationId, location_stack: analyticsLocations, activity_session_id, channel_id, guild_id };
    const merged = Object.assign(obj);
    AnalyticsUtilsDefault.track(constants.PREMIUM_MARKETING_PAGE_VIEWED, obj);
  });
  let obj1 = applicationId(504);
  const items3 = [premiumTrialOffer];
  [tmp9, tmp10] = _slicedToArray(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = applicationId(1483);
  state = obj2.useNavigation();
  let obj3 = applicationId(504);
  const items4 = [state2];
  stateFromStores = obj3.useStateFromStores(items4, () => state2.getState());
  let obj4 = analyticsLocations;
  ref = analyticsLocations.useRef(stateFromStores);
  let obj5 = applicationId(504);
  const items5 = [premiumDiscountOffer];
  const stateFromStores1 = obj5.useStateFromStores(items5, () => {
    const items = [closure_1_18];
    return premiumDiscountOffer.hasFetchedForApplicationIds(items);
  });
  let obj6 = applicationId(504);
  const items6 = [premiumDiscountOffer];
  const stateFromStores2 = obj6.useStateFromStores(items6, () => {
    let forApplication = premiumDiscountOffer.getForApplication(closure_1_18);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(1974).areSetsEqual);
  let obj7 = applicationId(504);
  const items7 = [callback];
  let stateFromStores3 = obj7.useStateFromStores(items7, () => callback.isLoadedForPremiumSKUs());
  let obj8 = applicationId(504);
  const items8 = [IAPStore];
  const stateFromStores4 = obj8.useStateFromStores(items8, () => product.getProduct(applicationId(channel_id[23]).ProductIds.PREMIUM_TIER_2_MONTHLY));
  const tmp8 = _slicedToArray(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const items9 = [ref];
  const stateFromStores5 = applicationId(504).useStateFromStores(items9, () => {
    const currentUser = ref.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isPremiumWithPremiumGroup();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const obj10 = applicationId(504);
  const isPaymentsBlocked = applicationId(7520).useIsPaymentsBlocked();
  callback = analyticsLocations.useCallback(() => {
    activity_session_id(channel_id[25]).wait(() => activity_session_id(channel_id[26]).init());
    const obj = activity_session_id(channel_id[25]);
    const userEntitlementsForApplication = applicationId(channel_id[27]).fetchUserEntitlementsForApplication(closure_1_18);
    const obj2 = applicationId(channel_id[27]);
    const items = [applicationId(channel_id[23]).ProductIds.PREMIUM_TIER_2_MONTHLY];
    applicationId(channel_id[28]).ensureSkusLoaded(items);
  }, []);
  const items10 = [callback];
  const effect = analyticsLocations.useEffect(() => {
    callback();
  }, items10);
  const items11 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp3 = stateFromStores === constants2.ACTIVE;
    if (tmp3) {
      tmp3 = ref.current === tmp2.BACKGROUND;
    }
    if (tmp3) {
      DispatcherDefault.wait(() => activity_session_id(channel_id[26]).init());
    }
    ref.current = stateFromStores;
  }, items11);
  const obj11 = applicationId(7520);
  premiumTrialOffer = applicationId(7550).usePremiumTrialOffer();
  const obj12 = applicationId(7550);
  premiumDiscountOffer = applicationId(10834).usePremiumDiscountOffer();
  const obj13 = applicationId(10834);
  const premiumTrialOfferPremiumType = applicationId(7549).usePremiumTrialOfferPremiumType();
  const items12 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = UserTrialActionCreatorsDefault.acknowledgeUserTrialOffer(tmp);
    }
    if (null != premiumDiscountOffer) {
      UserOfferActionCreators.acknowledgeUserOffer(undefined, tmp5);
    }
  }, items12);
  let tmp30Result2 = null != tmp9 && stateFromStores3 && tmp10;
  let tmp6Result = tmp6(4294);
  const hasTier2Premium = tmp6Result.useHasTier2Premium();
  let tmp27 = hasTier2Premium;
  if (hasTier2Premium) {
    tmp27 = null == premiumFeatureCardOrder;
  }
  let tmp28 = !tmp27;
  if (!tmp27) {
    tmp28 = null == tmp9;
  }
  if (tmp28) {
    tmp28 = null == stateFromStores4;
  }
  if (!tmp28) {
    tmp28 = !stateFromStores3;
  }
  if (!tmp28) {
    tmp28 = !tmp10;
  }
  if (!tmp28) {
    tmp28 = !stateFromStores1;
  }
  state2 = tmp28;
  const items13 = [tmp28];
  const effect3 = obj4.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_0(4309);
        const error = new Error("Premium settings screen load timed out");
        let obj = { tags: null };
        obj = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(closure_0(7518).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(premiumTrialOffer.hasFetchedSubscriptions()), has_fetched_entitlements: null };
        const items = [closure_1_18];
        obj.has_fetched_entitlements = String(premiumDiscountOffer.hasFetchedForApplicationIds(items));
        obj.tags = obj;
        const result = obj.captureBillingException(error, obj);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  if (tmp28) {
    obj = { style: tmp.loadingSpinnerContainer, children: <navigation animating size="large" /> };
    let tmp30Result = <state style={tmp.loadingSpinnerContainer}><navigation animating size="large" /></state>;
  } else if (isPaymentsBlocked) {
    obj = { style: tmp.container, children: jsx(BlockedPaymentsCountryDisplayDefault, {}) };
    tmp30Result = <stateFromStores style={tmp.container}>{jsx(BlockedPaymentsCountryDisplayDefault, {})}</stateFromStores>;
  } else {
    const items14 = [tmp.root, ];
    tmp6Result = tmp6(1150);
    let num = 0;
    if (tmp6Result.isAndroid()) {
      num = useSafeAreaInsetsDefault().bottom;
    }
    obj1 = { style: null, children: null };
    obj2 = { marginBottom: num };
    items14[1] = obj2;
    obj1.style = items14;
    obj3 = { value: analyticsLocations, children: null };
    if (hasTier2Premium) {
      if (null == premiumFeatureCardOrder) {
        obj4 = { onClose };
        tmp30Result = jsx(PremiumNitroHomeDefault, { onClose });
      }
      obj3.children = tmp30Result;
      obj1.children = <tmp32 {...obj3} />;
      tmp30Result = <tmp31 {...obj1} />;
    }
    let TIER_2_LEADING = premiumFeatureCardOrder;
    if (null != premiumFeatureCardOrder) {
      obj5 = { applicationId, userHasSubscription: tmp30Result2, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null };
      let tmp30Result1 = tmp30Result2;
      if (tmp30Result2) {
        function handleLearnMorePremiumGuild() {
          let arr = state;
          const routes = state.getState().routes;
          const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
          let obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(constants3.GUILD_BOOSTING);
          obj = { destinationPane: constants3.GUILD_BOOSTING };
          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj);
          if (null != found) {
            arr.navigate(constants3.GUILD_BOOSTING, undefined, { pop: true });
          } else {
            arr = arr.push(constants3.GUILD_BOOSTING);
          }
        }
        obj6 = { style: tmp.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp9 };
        tmp30Result1 = jsx(PremiumSubscriptionDetailsDefault, { style: tmp.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp9 });
      }
      obj5.subscriptionDetails = tmp30Result1;
      if (tmp30Result2) {
        obj7 = { style: tmp.billingInfo, subscription: tmp9 };
        tmp30Result2 = jsx(PremiumBillingInfoDefault, { style: tmp.billingInfo, subscription: tmp9 });
      }
      obj5.billingInfo = tmp30Result2;
      if (stateFromStores3) {
        obj8 = { style: tmp.accountCredit, currentSubscription: tmp9, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 };
        stateFromStores3 = jsx(PremiumAccountCreditDefault, { style: tmp.accountCredit, currentSubscription: tmp9, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 });
      }
      obj5.accountCredit = stateFromStores3;
      obj5.onClose = onClose;
      if (TIER_2_LEADING == null) {
        TIER_2_LEADING = tmp6(9492).PremiumFeatureCardOrder.TIER_2_LEADING;
      }
      obj5.premiumFeatureCardOrder = TIER_2_LEADING;
      obj5.entitlements = stateFromStores2;
      obj5.onPaymentSuccess = onPaymentSuccess;
      obj5.onPaymentDismiss = onPaymentDismiss;
      obj5.isFullScreenPresentation = isFullScreenPresentation;
      tmp30Result = jsx(PremiumMarketingPageDefault, { applicationId, userHasSubscription: tmp30Result2, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null });
      const tmp2Result = PremiumMarketingPageDefault;
    } else if (premiumTrialOfferPremiumType === TIER_0.TIER_0) {
      premiumFeatureCardOrder = tmp6(9492).PremiumFeatureCardOrder.TIER_0_LEADING;
    } else if (premiumTrialOfferPremiumType === tmp33.TIER_2) {
      premiumFeatureCardOrder = tmp6(9492).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }
  return tmp30Result;
};