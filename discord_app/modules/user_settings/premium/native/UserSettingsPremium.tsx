// === Module 7413: UserSettingsPremium ===

// Module 7413 (UserSettingsPremium)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4992 */;
import contextDefault from "context" /* 7162 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7182 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7414 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11435 */;
import handleCancelSubscriptionDefault from "handleCancelSubscription" /* 13309 */;
import GoogleManagementLinkDefault from "GoogleManagementLink" /* 13346 */;
import AccountCreditTierDefault from "AccountCreditTier" /* 13348 */;
import NitroHomeHeaderDefault from "NitroHomeHeader" /* 13412 */;
import PremiumMarketingPageDefault from "PremiumMarketingPage" /* 13464 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import closure_9 from "addSubscriptionPlan" /* 4223 */;
import closure_10 from "reset" /* 4224 */;
import closure_11 from "addEntitlement" /* 7394 */;
import closure_12 from "getState" /* 1895 */;
import closure_13 from "updateProduct" /* 7237 */;
import ME from "ME" /* 1074 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ ActivityIndicator: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = GuildFeatures);
let closure_20 = createCacheKey.createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = require("set").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: closure_3, onClose, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = applicationId);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  closure_5 = undefined;
  closure_6 = undefined;
  let stateFromStores;
  closure_8 = undefined;
  let callback;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  closure_12 = undefined;
  let container = callback2();
  let tmp = importDefault;
  let tmp33Result = dependencyMap;
  useStoreConnectionErrorAlertDefault();
  if (applicationId.isFromTextSection) {
    let items = [QUICK_SWITCHERDefault.TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, QUICK_SWITCHERDefault.PREMIUM_MARKETING];
  analyticsLocations = contextDefault(items2).analyticsLocations;
  let obj = applicationId(6994);
  closure_5 = obj.useSettingNavigationRoute();
  useMountLayoutEffectDefault(() => {
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
      let obj = { source_section: null };
      obj[0] = section;
    } else {
      obj = {};
    }
    obj = { application_id: applicationId, location_stack: analyticsLocations, activity_session_id: closure_1, channel_id: closure_2, guild_id: closure_3 };
    const merged = Object.assign(obj);
    closure_1_1(closure_1_2[19]).track(closure_1_14.PREMIUM_MARKETING_PAGE_VIEWED, obj);
  });
  obj1 = applicationId(504);
  const items3 = [premiumTrialOffer];
  const tmp4 = contextDefault;
  [tmp8, tmp9] = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = applicationId(1483);
  closure_6 = obj2.useNavigation();
  let obj3 = applicationId(504);
  const items4 = [closure_12];
  stateFromStores = obj3.useStateFromStores(items4, () => state2.getState());
  let obj4 = analyticsLocations;
  closure_8 = analyticsLocations.useRef(stateFromStores);
  let obj5 = applicationId(504);
  const items5 = [premiumDiscountOffer];
  const stateFromStores1 = obj5.useStateFromStores(items5, () => {
    const items = [closure_18];
    return premiumDiscountOffer.hasFetchedForApplicationIds(items);
  });
  let obj6 = applicationId(504);
  const items6 = [premiumDiscountOffer];
  const stateFromStores2 = obj6.useStateFromStores(items6, () => {
    let forApplication = premiumDiscountOffer.getForApplication(closure_18);
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
  const items8 = [closure_13];
  const stateFromStores4 = obj8.useStateFromStores(items8, () => product.getProduct(applicationId(7415).ProductIds.PREMIUM_TIER_2_MONTHLY));
  let obj9 = applicationId(504);
  const items9 = [closure_8];
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
    callback(573).wait(() => callback(table[26]).init());
    const obj = callback(573);
    const userEntitlementsForApplication = applicationId(7400).fetchUserEntitlementsForApplication(closure_18);
    const obj2 = applicationId(7400);
    const items = [applicationId(7415).ProductIds.PREMIUM_TIER_2_MONTHLY];
    applicationId(9367).ensureSkusLoaded(items);
  }, []);
  const items10 = [callback];
  const effect = analyticsLocations.useEffect(() => {
    callback();
  }, items10);
  const items11 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp3 = stateFromStores === closure_1_15.ACTIVE;
    if (tmp3) {
      tmp3 = ref.current === tmp2.BACKGROUND;
    }
    if (tmp3) {
      closure_1_1(closure_1_2[25]).wait(() => callback(table[26]).init());
      const obj = closure_1_1(closure_1_2[25]);
    }
    ref.current = stateFromStores;
  }, items11);
  const tmp7 = callback(obj1.useStateFromStoresArray(items3, () => {
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
      const result = closure_1_1(closure_1_2[32]).acknowledgeUserTrialOffer(tmp);
      const obj = closure_1_1(closure_1_2[32]);
    }
    if (null != premiumDiscountOffer) {
      applicationId(closure_1_2[33]).acknowledgeUserOffer(undefined, tmp5);
      const obj2 = applicationId(closure_1_2[33]);
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
  closure_12 = tmp27;
  const items13 = [tmp27];
  const effect3 = obj4.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        let obj = callback(4233);
        error = new Error("Premium settings screen load timed out");
        obj = { tags: null };
        obj = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(callback(7415).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(closure_10.hasFetchedSubscriptions()), has_fetched_entitlements: String(closure_11.hasFetchedForApplicationIds(items)) };
        items = [closure_18];
        obj[0] = obj;
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
      obj = { style: null, children: null };
      obj[0] = container.loadingSpinnerContainer;
      obj[1] = <closure_5 animating size="large" />;
      return <closure_6 style={null}>{null}</closure_6>;
    }
  }
  if (isPaymentsBlocked) {
    obj1 = { style: null, children: null };
    container = container.container;
    obj1[0] = container;
    tmp = BlockedPaymentsCountryDisplayDefault;
    tmp33Result = tmp33(tmp, {});
    obj1[1] = tmp33Result;
    tmp33Result = tmp33(stateFromStores, obj1);
  } else {
    const items14 = [container.root, ];
    let num = 0;
    if (tmp5Result1.isAndroid()) {
      num = useSafeAreaInsetsDefault().bottom;
    }
    obj2 = { style: null, children: null };
    obj3 = { marginBottom: null };
    obj3[0] = num;
    items14[1] = obj3;
    obj2[0] = items14;
    obj4 = { value: null, children: null };
    obj4[0] = analyticsLocations;
    if (buyNitroExperiment.showRedesignUpsell) {
      obj5 = { onClose: null, applicationId: null, initialLoadCompleted: null, onPaymentSuccess: null, onPaymentDismiss: null, initialTier: null };
      obj5[0] = onClose;
      obj5[1] = applicationId;
      obj5[2] = !tmp27;
      obj5[3] = onPaymentSuccess;
      obj5[4] = onPaymentDismiss;
      if (null == premiumFeatureCardOrder) {
        obj5[5] = undefined;
        let tmp33Result1 = tmp33(tmp40, obj5);
      } else if (premiumFeatureCardOrder === tmp5(9362).PremiumFeatureCardOrder.TIER_0_LEADING) {
        let TIER_2 = closure_17.TIER_0;
      } else {
        TIER_2 = closure_17.TIER_2;
      }
    } else {
      if (hasTier2Premium) {
        if (null == premiumFeatureCardOrder) {
          obj6 = { onClose: null };
          obj6[0] = onClose;
          tmp33Result1 = tmp33(NitroHomeHeaderDefault, obj6);
        }
      }
      let TIER_2_LEADING = premiumFeatureCardOrder;
      if (null != premiumFeatureCardOrder) {
        obj7 = { applicationId: null, userHasSubscription: null, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null };
        obj7[0] = applicationId;
        obj7[1] = tmp33Result3;
        let tmp33Result2 = tmp33Result3;
        if (tmp33Result3) {
          function handleLearnMorePremiumGuild() {
            let arr = state;
            const routes = state.getState().routes;
            const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
            let obj = closure_1_1(closure_1_2[34]);
            obj.setSection(closure_1_16.GUILD_BOOSTING);
            obj = { destinationPane: closure_1_16.GUILD_BOOSTING };
            const result = applicationId(closure_1_2[35]).trackUserSettingsPaneViewed(obj);
            if (null != found) {
              arr.navigate(tmp2.GUILD_BOOSTING, undefined, { pop: true });
            } else {
              arr = arr.push(tmp2.GUILD_BOOSTING);
            }
          }
          obj8 = { style: null, onClickManagePremiumGuild: null, subscription: null };
          obj8[0] = container.subscriptionHeader;
          obj8[1] = handleLearnMorePremiumGuild;
          obj8[2] = tmp8;
          tmp33Result2 = tmp33(handleCancelSubscriptionDefault, obj8);
        }
        obj7[2] = tmp33Result2;
        if (tmp33Result3) {
          obj9 = { style: null, subscription: null };
          obj9[0] = container.billingInfo;
          obj9[1] = tmp8;
          tmp33Result3 = tmp33(GoogleManagementLinkDefault, obj9);
        }
        obj7[3] = tmp33Result3;
        if (stateFromStores3) {
          obj10 = { style: null, currentSubscription: null, entitlements: null, hasPremiumGroup: null };
          obj10[0] = container.accountCredit;
          obj10[1] = tmp8;
          obj10[2] = stateFromStores2;
          obj10[3] = stateFromStores5;
          stateFromStores3 = tmp33(AccountCreditTierDefault, obj10);
        }
        obj7[4] = stateFromStores3;
        obj7[5] = onClose;
        if (TIER_2_LEADING == null) {
          TIER_2_LEADING = tmp5(9362).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
        obj7[6] = TIER_2_LEADING;
        obj7[7] = stateFromStores2;
        obj7[8] = onPaymentSuccess;
        obj7[9] = onPaymentDismiss;
        obj7[10] = isFullScreenPresentation;
        tmp33Result1 = tmp33(PremiumMarketingPageDefault, obj7);
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
    obj4[1] = tmp33Result1;
    obj2[1] = tmp33(tmp5(7162).AnalyticsLocationProvider, obj4);
    tmp33Result = tmp33(closure_6, obj2);
    const tmp34 = closure_6;
    tmp5Result1 = tmp5(1115);
  }
};