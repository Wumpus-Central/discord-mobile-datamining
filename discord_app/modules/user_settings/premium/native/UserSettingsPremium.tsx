// discord_app/modules/user_settings/premium/native/UserSettingsPremium.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useStoreConnectionErrorAlertDefault from "../../../premium/native/useStoreConnectionErrorAlert.tsx";
import UserOfferActionCreators from "../../../premium/UserOfferActionCreators.tsx";
import BlockedPaymentsCountryDisplayDefault from "../../../billing/native/BlockedPaymentsCountryDisplay.tsx";
import UserTrialActionCreatorsDefault from "../../../premium/UserTrialActionCreators.android.tsx";
import PremiumSubscriptionDetailsDefault from "../../../../components_native/premium/PremiumSubscriptionDetails.tsx";
import PremiumBillingInfoDefault from "../../../../components_native/premium/PremiumBillingInfo.tsx";
import PremiumAccountCreditDefault from "../../../premium/native/PremiumAccountCredit.tsx";
import PremiumNitroHomeDefault from "PremiumNitroHome.tsx";
import PremiumMarketingPageDefault from "PremiumMarketingPage.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";
import Constants from "../../../../Constants.tsx";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
({
  AnalyticEvents: closure_14,
  AppStates: closure_15,
  UserSettingsSections: closure_16,
  USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING,
} = Constants);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = PremiumConstants);
const jsx = Fragment.jsx;
let obj = {
  root: { flex: 1 },
  container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING },
  subscriptionHeader: { marginTop: 20, width: "100%" },
  billingInfo: { marginTop: 20, width: "100%" },
  accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" },
  loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" },
};
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
  const f93607 = () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  };
  applicationId = applicationId.applicationId;
  ({
    activitySessionId: importDefault,
    channelId: dependencyMap,
    guildId: _slicedToArray,
    onClose,
    premiumFeatureCardOrder,
    isFullScreenPresentation,
  } = applicationId);
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
  let obj = applicationId(6490);
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
    const obj3 = {
      application_id: applicationId,
      location_stack: analyticsLocations,
      activity_session_id: importDefault,
      channel_id: dependencyMap,
      guild_id: _slicedToArray,
    };
    AnalyticsUtilsDefault;
    const merged = Object.assign(obj);
    track(PREMIUM_MARKETING_PAGE_VIEWED, obj3);
  });
  let obj2 = applicationId(504);
  const items3 = [premiumTrialOffer];
  [tmp9, tmp10] = obj2.useStateFromStoresArray(items3, f93607);
  _slicedToArray(obj2.useStateFromStoresArray(items3, f93607), 2);
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
  const stateFromStores2 = obj7.useStateFromStores(
    items6,
    function () {
      let forApplication = premiumDiscountOffer.getForApplication(closure_1_18);
      if (forApplication == null) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        forApplication = new Set();
      }
      return forApplication;
    },
    [],
    applicationId(2069).areSetsEqual,
  );
  const items7 = [callback];
  const obj8 = applicationId(504);
  let stateFromStores3 = obj8.useStateFromStores(items7, () => callback.isLoadedForPremiumSKUs());
  const items8 = [IAPStore];
  const obj9 = applicationId(504);
  const stateFromStores4 = obj9.useStateFromStores(items8, () =>
    product.getProduct(applicationId(dependencyMap[23]).ProductIds.PREMIUM_TIER_2_MONTHLY),
  );
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
  const obj11 = applicationId(6923);
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
  const obj12 = applicationId(6956);
  premiumTrialOffer = obj12.usePremiumTrialOffer();
  const obj13 = applicationId(10438);
  premiumDiscountOffer = obj13.usePremiumDiscountOffer();
  const obj14 = applicationId(6955);
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
  const tmp6Result = applicationId(4528);
  const hasTier2Premium = tmp6Result.useHasTier2Premium();
  const tmp28 =
    (!(hasTier2Premium && null == premiumFeatureCardOrder) && null == tmp9 && null == stateFromStores4) ||
    !stateFromStores3 ||
    !tmp10 ||
    !stateFromStores1;
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
        obj2 = {
          source: "UserSettingsPremium",
          iap_product_missing: String(
            null == product.getProduct(applicationId(channel_id[23]).ProductIds.PREMIUM_TIER_2_MONTHLY),
          ),
          has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()),
          has_fetched_subscriptions: String(premiumTrialOffer.hasFetchedSubscriptions()),
          has_fetched_entitlements: String(premiumDiscountOffer.hasFetchedForApplicationIds(items)),
        };
        items = [closure_1_18];
        const result = captureBillingException(error, obj);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  if (tmp28) {
    tmp30Result = (
      <state style={tmp.loadingSpinnerContainer}>
        <navigation animating size="large" />
      </state>
    );
  } else if (isPaymentsBlocked) {
    tmp30Result = (
      <stateFromStores style={tmp.container}>{jsx(BlockedPaymentsCountryDisplayDefault, {})}</stateFromStores>
    );
  } else {
    const items14 = [tmp.root];
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
        premiumFeatureCardOrder = tmp6(8867).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else if (premiumTrialOfferPremiumType === tmp33.TIER_2) {
        premiumFeatureCardOrder = tmp6(8867).PremiumFeatureCardOrder.TIER_2_LEADING;
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
      tmp30Result5 = jsx(PremiumSubscriptionDetailsDefault, {
        style: tmp.subscriptionHeader,
        onClickManagePremiumGuild: handleLearnMorePremiumGuild,
        subscription: tmp9,
      });
    }
    if (tmp30Result6) {
      tmp30Result6 = jsx(PremiumBillingInfoDefault, { style: tmp.billingInfo, subscription: tmp9 });
    }
    if (stateFromStores3) {
      stateFromStores3 = jsx(PremiumAccountCreditDefault, {
        style: tmp.accountCredit,
        currentSubscription: tmp9,
        entitlements: stateFromStores2,
        hasPremiumGroup: stateFromStores5,
      });
    }
    if (TIER_2_LEADING == null) {
      TIER_2_LEADING = tmp6(8867).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
    tmp30Result4 = (
      <tmp2Result
        applicationId={applicationId}
        userHasSubscription={tmp30Result6}
        subscriptionDetails={tmp30Result5}
        billingInfo={tmp30Result6}
        accountCredit={stateFromStores3}
        onClose={onClose}
        premiumFeatureCardOrder={TIER_2_LEADING}
        entitlements={stateFromStores2}
        onPaymentSuccess={onPaymentSuccess}
        onPaymentDismiss={onPaymentDismiss}
        isFullScreenPresentation={isFullScreenPresentation}
      />
    );
  }
  return tmp30Result;
}
