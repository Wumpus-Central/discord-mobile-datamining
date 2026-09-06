// === Module 7413: UserSettingsPremium ===

// Module 7413 (UserSettingsPremium)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7414 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8062 */;
import UserTrialActionCreatorsDefault from "UserTrialActionCreators" /* 13306 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import IAPStore from "IAPStore" /* 7237 */;

const useMountEffectDefault = tmp(4992);
const AnalyticsLocationDefault = tmp(7182);
const BlockedPaymentsCountryDisplayDefault = tmp(11435);
const PremiumSubscriptionDetailsDefault = tmp(13309);
const PremiumBillingInfoDefault = tmp(13346);
const PremiumAccountCreditDefault = tmp(13348);
const PremiumNitroHomeDefault = tmp(13412);
const PremiumMarketingPageDefault = tmp(13464);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = PremiumConstants);
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
let closure_20 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _slicedToArray, onClose, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = applicationId);
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
  let container = closure_20();
  let tmp33Result = dependencyMap;
  useStoreConnectionErrorAlertDefault();
  if (applicationId.isFromTextSection) {
    let items = [AnalyticsLocationDefault.TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, AnalyticsLocationDefault.PREMIUM_MARKETING];
  analyticsLocations = useAnalyticsLocationsDefault(items2).analyticsLocations;
  let obj = applicationId(6994);
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
  [tmp8, tmp9] = _slicedToArray(obj1.useStateFromStoresArray(items3, () => {
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
  let obj9 = applicationId(504);
  const items9 = [ref];
  const stateFromStores5 = obj9.useStateFromStores(items9, () => {
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
  let obj10 = applicationId(7417);
  const isPaymentsBlocked = obj10.useIsPaymentsBlocked();
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
  const tmp7 = _slicedToArray(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  premiumTrialOffer = applicationId(7447).usePremiumTrialOffer();
  const obj12 = applicationId(7447);
  premiumDiscountOffer = applicationId(10706).usePremiumDiscountOffer();
  const obj13 = applicationId(10706);
  const premiumTrialOfferPremiumType = applicationId(7446).usePremiumTrialOfferPremiumType();
  const items12 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = UserTrialActionCreatorsDefault.acknowledgeUserTrialOffer(tmp);
    }
    if (null != premiumDiscountOffer) {
      UserOfferActionCreators.acknowledgeUserOffer(undefined, tmp5);
    }
  }, items12);
  let tmp33Result3 = null != tmp8 && stateFromStores3 && tmp9;
  let tmp5Result = tmp5(4218);
  const hasTier2Premium = tmp5Result.useHasTier2Premium();
  let tmp26 = hasTier2Premium;
  if (hasTier2Premium) {
    tmp26 = null == premiumFeatureCardOrder;
  }
  let tmp27 = !tmp26;
  if (!tmp26) {
    tmp27 = null == tmp8;
  }
  if (tmp27) {
    tmp27 = null == stateFromStores4;
  }
  if (!tmp27) {
    tmp27 = !stateFromStores3;
  }
  if (!tmp27) {
    tmp27 = !tmp9;
  }
  if (!tmp27) {
    tmp27 = !stateFromStores1;
  }
  state2 = tmp27;
  const items13 = [tmp27];
  const effect3 = obj4.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_0(4233);
        const error = new Error("Premium settings screen load timed out");
        let obj = { tags: null };
        obj = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(closure_0(7415).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(premiumTrialOffer.hasFetchedSubscriptions()), has_fetched_entitlements: null };
        const items = [closure_1_18];
        obj.has_fetched_entitlements = String(premiumDiscountOffer.hasFetchedForApplicationIds(items));
        obj.tags = obj;
        const result = obj.captureBillingException(error, obj);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  tmp5Result = tmp5(13307);
  obj = { userHasSubscription: tmp33Result3, isNitroHomeSurface: tmp26, isConfirmedNonSubscriber: tmp9 };
  const buyNitroExperiment = tmp5Result.useBuyNitroExperiment(obj);
  if (tmp27) {
    if (!buyNitroExperiment.canRenderRedesignUpsellEarly) {
      obj = { style: container.loadingSpinnerContainer, children: <navigation animating size="large" /> };
      return <state style={container.loadingSpinnerContainer}><navigation animating size="large" /></state>;
    }
  }
  if (isPaymentsBlocked) {
    obj1 = { style: null, children: null };
    container = container.container;
    obj1.style = container;
    tmp33Result = <tmp />;
    obj1.children = tmp33Result;
    tmp33Result = <stateFromStores style={null}>{null}</stateFromStores>;
  } else {
    const items14 = [container.root, ];
    let num = 0;
    if (tmp5Result1.isAndroid()) {
      num = useSafeAreaInsetsDefault().bottom;
    }
    obj2 = { style: null, children: null };
    obj3 = { marginBottom: num };
    items14[1] = obj3;
    obj2.style = items14;
    obj4 = { value: analyticsLocations, children: null };
    if (buyNitroExperiment.showRedesignUpsell) {
      obj5 = { onClose, applicationId, initialLoadCompleted: !tmp27, onPaymentSuccess, onPaymentDismiss, initialTier: null };
      if (null == premiumFeatureCardOrder) {
        obj5.initialTier = undefined;
        let tmp33Result1 = <tmp40 {...obj5} />;
      } else if (premiumFeatureCardOrder === tmp5(9362).PremiumFeatureCardOrder.TIER_0_LEADING) {
        let TIER_2 = closure_17.TIER_0;
      } else {
        TIER_2 = closure_17.TIER_2;
      }
    } else {
      if (hasTier2Premium) {
        if (null == premiumFeatureCardOrder) {
          obj6 = { onClose };
          tmp33Result1 = jsx(PremiumNitroHomeDefault, { onClose });
        }
      }
      let TIER_2_LEADING = premiumFeatureCardOrder;
      if (null != premiumFeatureCardOrder) {
        obj7 = { applicationId, userHasSubscription: tmp33Result3, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null };
        let tmp33Result2 = tmp33Result3;
        if (tmp33Result3) {
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
          obj8 = { style: container.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp8 };
          tmp33Result2 = jsx(PremiumSubscriptionDetailsDefault, { style: container.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp8 });
        }
        obj7.subscriptionDetails = tmp33Result2;
        if (tmp33Result3) {
          obj9 = { style: container.billingInfo, subscription: tmp8 };
          tmp33Result3 = jsx(PremiumBillingInfoDefault, { style: container.billingInfo, subscription: tmp8 });
        }
        obj7.billingInfo = tmp33Result3;
        if (stateFromStores3) {
          obj10 = { style: container.accountCredit, currentSubscription: tmp8, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 };
          stateFromStores3 = jsx(PremiumAccountCreditDefault, { style: container.accountCredit, currentSubscription: tmp8, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 });
        }
        obj7.accountCredit = stateFromStores3;
        obj7.onClose = onClose;
        if (TIER_2_LEADING == null) {
          TIER_2_LEADING = tmp5(9362).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
        obj7.premiumFeatureCardOrder = TIER_2_LEADING;
        obj7.entitlements = stateFromStores2;
        obj7.onPaymentSuccess = onPaymentSuccess;
        obj7.onPaymentDismiss = onPaymentDismiss;
        obj7.isFullScreenPresentation = isFullScreenPresentation;
        tmp33Result1 = jsx(PremiumMarketingPageDefault, { applicationId, userHasSubscription: tmp33Result3, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null });
        const tmpResult = PremiumMarketingPageDefault;
      } else if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
        let TIER_2_LEADING2 = tmp5(9362).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else {
        TIER_2_LEADING2 = premiumFeatureCardOrder;
        if (premiumTrialOfferPremiumType === tmp35.TIER_2) {
          TIER_2_LEADING2 = tmp5(9362).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
      }
    }
    obj4.children = tmp33Result1;
    obj2.children = jsx(tmp5(7162).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
    tmp33Result = <state style={null}>{null}</state>;
    tmp5Result1 = tmp5(1115);
  }
  const obj14 = applicationId(7446);
};