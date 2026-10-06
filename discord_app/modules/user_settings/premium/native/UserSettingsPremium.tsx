// === Module 6930: UserSettingsPremium ===

// Module 6930 (UserSettingsPremium)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6494 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6498 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 6933 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 7744 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11107 */;
import UserTrialActionCreatorsDefault from "UserTrialActionCreators" /* 13175 */;
import PremiumSubscriptionDetailsDefault from "PremiumSubscriptionDetails" /* 13176 */;
import PremiumBillingInfoDefault from "PremiumBillingInfo" /* 13216 */;
import PremiumAccountCreditDefault from "PremiumAccountCredit" /* 13218 */;
import PremiumNitroHomeDefault from "PremiumNitroHome" /* 13219 */;
import PremiumMarketingPageDefault from "PremiumMarketingPage" /* 13289 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4539 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import EntitlementStore from "EntitlementStore" /* 6909 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import IAPStore from "IAPStore" /* 6931 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let navigation;

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = PremiumConstants);
const jsx = Fragment.jsx;
let obj = { root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } };
let closure_20 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  let activity_session_id;
  let channel_id;
  let guild_id;
  let isFromTextSection;
  let isFullScreenPresentation;
  let items1;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let product;
  let tmp10;
  let tmp30Result;
  let tmp9;
  const f93742 = () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  };
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _slicedToArray, onClose, premiumFeatureCardOrder, isFullScreenPresentation } = applicationId);
  ({ isFromTextSection, onPaymentSuccess, onPaymentDismiss } = applicationId);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  navigation = undefined;
  let state;
  let stateFromStores;
  let ref;
  let callback;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let state2;
  let tmp = closure_20();
  useStoreConnectionErrorAlertDefault();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp5 = useAnalyticsLocationsDefault;
  if (isFromTextSection) {
    let items = [AnalyticsLocationDefault.TEXT_AND_IMAGES];
    items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, AnalyticsLocationDefault.PREMIUM_MARKETING];
  analyticsLocations = tmp5(items2).analyticsLocations;
  let obj = applicationId(6497);
  navigation = obj.useSettingNavigationRoute();
  useMountEffectDefault(() => {
    let obj;
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
      obj = { source_section: section };
      const obj2 = { source_section: section };
    } else {
      obj = {};
    }
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_MARKETING_PAGE_VIEWED = constants.PREMIUM_MARKETING_PAGE_VIEWED;
    const obj3 = { application_id: applicationId, location_stack: analyticsLocations, activity_session_id: importDefault, channel_id: dependencyMap, guild_id: _slicedToArray };
    AnalyticsUtilsDefault;
    const merged = Object.assign(obj);
    track(PREMIUM_MARKETING_PAGE_VIEWED, obj3);
  });
  let obj2 = applicationId(504);
  const items3 = [premiumTrialOffer];
  [tmp9, tmp10] = obj2.useStateFromStoresArray(items3, f93742);
  _slicedToArray(obj2.useStateFromStoresArray(items3, f93742), 2);
  let obj3 = applicationId(1490);
  state = obj3.useNavigation();
  const items4 = [state2];
  const obj4 = applicationId(504);
  stateFromStores = obj4.useStateFromStores(items4, () => state2.getState());
  ref = analyticsLocations.useRef(stateFromStores);
  const items5 = [premiumDiscountOffer];
  const obj6 = applicationId(504);
  const stateFromStores1 = obj6.useStateFromStores(items5, () => {
    const items = [closure_1_18];
    return premiumDiscountOffer.hasFetchedForApplicationIds(items);
  });
  const items6 = [premiumDiscountOffer];
  const obj7 = applicationId(504);
  const stateFromStores2 = obj7.useStateFromStores(items6, function() {
    let forApplication = premiumDiscountOffer.getForApplication(closure_1_18);
    if (forApplication == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(2069).areSetsEqual);
  const items7 = [callback];
  const obj8 = applicationId(504);
  let stateFromStores3 = obj8.useStateFromStores(items7, () => callback.isLoadedForPremiumSKUs());
  const items8 = [IAPStore];
  const obj9 = applicationId(504);
  const stateFromStores4 = obj9.useStateFromStores(items8, () => product.getProduct(applicationId(dependencyMap[23]).ProductIds.PREMIUM_TIER_2_MONTHLY));
  const items9 = [ref];
  const obj10 = applicationId(504);
  const stateFromStores5 = obj10.useStateFromStores(items9, () => {
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
  const obj11 = applicationId(6936);
  const isPaymentsBlocked = obj11.useIsPaymentsBlocked();
  callback = analyticsLocations.useCallback(() => {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = activity_session_id(channel_id[26]);
      return obj.init();
    });
    const obj2 = applicationId(dependencyMap[27]);
    const userEntitlementsForApplication = obj2.fetchUserEntitlementsForApplication(closure_1_18);
    const ensureSkusLoaded = applicationId(dependencyMap[28]).ensureSkusLoaded;
    const items = [];
    applicationId(dependencyMap[28]);
    items[0] = applicationId(dependencyMap[23]).ProductIds.PREMIUM_TIER_2_MONTHLY;
    ensureSkusLoaded(items);
  }, []);
  const items10 = [callback];
  const effect = analyticsLocations.useEffect(() => {
    callback();
  }, items10);
  const items11 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    const tmp3 = stateFromStores === constants2.ACTIVE && ref.current === tmp2.BACKGROUND;
    if (tmp3) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = activity_session_id(channel_id[26]);
        return obj.init();
      });
    }
    ref.current = stateFromStores;
  }, items11);
  const obj12 = applicationId(6969);
  premiumTrialOffer = obj12.usePremiumTrialOffer();
  const obj13 = applicationId(10451);
  premiumDiscountOffer = obj13.usePremiumDiscountOffer();
  const obj14 = applicationId(6968);
  const premiumTrialOfferPremiumType = obj14.usePremiumTrialOfferPremiumType();
  const items12 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const obj = UserTrialActionCreatorsDefault;
      const result = obj.acknowledgeUserTrialOffer(tmp);
    }
    if (null != premiumDiscountOffer) {
      const obj2 = UserOfferActionCreators;
      obj2.acknowledgeUserOffer(undefined, tmp5);
    }
  }, items12);
  let tmp30Result6 = null != tmp9 && stateFromStores3 && tmp10;
  const tmp6Result = applicationId(4534);
  const hasTier2Premium = tmp6Result.useHasTier2Premium();
  const tmp28 = !(hasTier2Premium && null == premiumFeatureCardOrder) && null == tmp9 && null == stateFromStores4 || !stateFromStores3 || !tmp10 || !stateFromStores1;
  state2 = tmp28;
  const items13 = [tmp28];
  const effect3 = analyticsLocations.useEffect(() => {
    let loadedForPremiumSKUs;
    if (state2) {
      const tmp = globalThis;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        let items;
        let obj2;
        const captureBillingException = applicationId(channel_id[37]).captureBillingException;
        applicationId(channel_id[37]);
        const error = new Error("Premium settings screen load timed out");
        const obj = { tags: obj2 };
        obj2 = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(applicationId(channel_id[23]).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(premiumTrialOffer.hasFetchedSubscriptions()), has_fetched_entitlements: String(premiumDiscountOffer.hasFetchedForApplicationIds(items)) };
        items = [closure_1_18];
        const result = captureBillingException(error, obj);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  if (tmp28) {
    tmp30Result = <state style={tmp.loadingSpinnerContainer}><navigation animating size="large" /></state>;
  } else if (isPaymentsBlocked) {
    tmp30Result = <stateFromStores style={tmp.container}>{jsx(BlockedPaymentsCountryDisplayDefault, {})}</stateFromStores>;
  } else {
    const items14 = [tmp.root, ];
    let num = 0;
    const tmp6Result2 = applicationId(1369);
    if (tmp6Result2.isAndroid()) {
      num = bottom;
    }
    const obj17 = { style: items14, children: null };
    const obj18 = { marginBottom: num };
    items14[1] = obj18;
    const obj19 = { value: analyticsLocations, children: null };
    if (hasTier2Premium) {
      let tmp30Result4;
      if (null == premiumFeatureCardOrder) {
        tmp30Result4 = jsx(PremiumNitroHomeDefault, { onClose });
      }
      obj19.children = tmp30Result4;
      obj17.children = <tmp32 {...obj19} />;
      tmp30Result = <tmp31 {...obj17} />;
    }
    let TIER_2_LEADING = premiumFeatureCardOrder;
    if (null == premiumFeatureCardOrder) {
      if (premiumTrialOfferPremiumType === TIER_0.TIER_0) {
        premiumFeatureCardOrder = tmp6(8896).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else if (premiumTrialOfferPremiumType === tmp33.TIER_2) {
        premiumFeatureCardOrder = tmp6(8896).PremiumFeatureCardOrder.TIER_2_LEADING;
      }
      TIER_2_LEADING = premiumFeatureCardOrder;
    }
    let tmp30Result5 = tmp30Result6;
    PremiumMarketingPageDefault;
    if (tmp30Result6) {
      function handleLearnMorePremiumGuild() {
        const routes = state.getState().routes;
        const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
        const obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(constants3.GUILD_BOOSTING);
        const obj2 = UserSettingsUtils;
        const obj3 = { destinationPane: constants3.GUILD_BOOSTING };
        const result = obj2.trackUserSettingsPaneViewed(obj3);
        if (null != found) {
          state.navigate(constants3.GUILD_BOOSTING, undefined, { pop: true });
        } else {
          state.push(constants3.GUILD_BOOSTING);
        }
      }
      tmp30Result5 = jsx(PremiumSubscriptionDetailsDefault, { style: tmp.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp9 });
    }
    if (tmp30Result6) {
      tmp30Result6 = jsx(PremiumBillingInfoDefault, { style: tmp.billingInfo, subscription: tmp9 });
    }
    if (stateFromStores3) {
      stateFromStores3 = jsx(PremiumAccountCreditDefault, { style: tmp.accountCredit, currentSubscription: tmp9, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 });
    }
    if (TIER_2_LEADING == null) {
      TIER_2_LEADING = tmp6(8896).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
    tmp30Result4 = <tmp2Result applicationId={applicationId} userHasSubscription={tmp30Result6} subscriptionDetails={tmp30Result5} billingInfo={tmp30Result6} accountCredit={stateFromStores3} onClose={onClose} premiumFeatureCardOrder={TIER_2_LEADING} entitlements={stateFromStores2} onPaymentSuccess={onPaymentSuccess} onPaymentDismiss={onPaymentDismiss} isFullScreenPresentation={isFullScreenPresentation} />;
  }
  return tmp30Result;
};