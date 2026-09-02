// === Module 7165: UserSettingsPremium ===

// Module 7165 (UserSettingsPremium)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4945 */;
import contextDefault from "context" /* 5961 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7167 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 8495 */;
import handleCancelSubscriptionDefault from "handleCancelSubscription" /* 13192 */;
import GoogleManagementLinkDefault from "GoogleManagementLink" /* 13229 */;
import AccountCreditTierDefault from "AccountCreditTier" /* 13231 */;
import NitroHomeHeaderDefault from "NitroHomeHeader" /* 13295 */;
import PremiumMarketingPageDefault from "PremiumMarketingPage" /* 13343 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import closure_9 from "addSubscriptionPlan" /* 4144 */;
import closure_10 from "reset" /* 4145 */;
import closure_11 from "addEntitlement" /* 7151 */;
import closure_12 from "getState" /* 7166 */;
import closure_13 from "updateProduct" /* 6092 */;
import ME from "ME" /* 673 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  let obj = applicationId(7168);
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
  obj1 = applicationId(586);
  const items3 = [premiumTrialOffer];
  const tmp4 = contextDefault;
  [tmp8, tmp9] = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = applicationId(1498);
  closure_6 = obj2.useNavigation();
  let obj3 = applicationId(586);
  const items4 = [closure_12];
  stateFromStores = obj3.useStateFromStores(items4, () => state2.getState());
  let obj4 = analyticsLocations;
  closure_8 = analyticsLocations.useRef(stateFromStores);
  let obj5 = applicationId(586);
  const items5 = [premiumDiscountOffer];
  const stateFromStores1 = obj5.useStateFromStores(items5, () => {
    const items = [closure_18];
    return premiumDiscountOffer.hasFetchedForApplicationIds(items);
  });
  let obj6 = applicationId(586);
  const items6 = [premiumDiscountOffer];
  const stateFromStores2 = obj6.useStateFromStores(items6, () => {
    let forApplication = premiumDiscountOffer.getForApplication(closure_18);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(1428).areSetsEqual);
  let obj7 = applicationId(586);
  const items7 = [callback];
  let stateFromStores3 = obj7.useStateFromStores(items7, () => callback.isLoadedForPremiumSKUs());
  let obj8 = applicationId(586);
  const items8 = [closure_13];
  const stateFromStores4 = obj8.useStateFromStores(items8, () => product.getProduct(applicationId(7169).ProductIds.PREMIUM_TIER_2_MONTHLY));
  let obj9 = applicationId(586);
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
  let obj10 = applicationId(7171);
  const isPaymentsBlocked = obj10.useIsPaymentsBlocked();
  callback = analyticsLocations.useCallback(() => {
    callback(706).wait(() => callback(table[26]).init());
    const obj = callback(706);
    const userEntitlementsForApplication = applicationId(7152).fetchUserEntitlementsForApplication(closure_18);
    const obj2 = applicationId(7152);
    const items = [applicationId(7169).ProductIds.PREMIUM_TIER_2_MONTHLY];
    applicationId(8231).ensureSkusLoaded(items);
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
  premiumTrialOffer = applicationId(7201).usePremiumTrialOffer();
  const obj12 = applicationId(7201);
  premiumDiscountOffer = applicationId(10704).usePremiumDiscountOffer();
  const obj13 = applicationId(10704);
  const premiumTrialOfferPremiumType = applicationId(7200).usePremiumTrialOfferPremiumType();
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
  let tmp5Result = tmp5(4139);
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
        let obj = callback(4154);
        error = new Error("Premium settings screen load timed out");
        obj = { tags: null };
        obj = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(callback(7169).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(closure_10.hasFetchedSubscriptions()), has_fetched_entitlements: String(closure_11.hasFetchedForApplicationIds(items)) };
        items = [closure_18];
        obj[0] = obj;
        const result = obj.captureBillingException(error, obj);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  tmp5Result = tmp5(13190);
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
      } else if (premiumFeatureCardOrder === tmp5(8226).PremiumFeatureCardOrder.TIER_0_LEADING) {
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
          TIER_2_LEADING = tmp5(8226).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
        obj7[6] = TIER_2_LEADING;
        obj7[7] = stateFromStores2;
        obj7[8] = onPaymentSuccess;
        obj7[9] = onPaymentDismiss;
        obj7[10] = isFullScreenPresentation;
        tmp33Result1 = tmp33(PremiumMarketingPageDefault, obj7);
        const tmpResult = PremiumMarketingPageDefault;
      } else if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
        let TIER_2_LEADING2 = tmp5(8226).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else {
        TIER_2_LEADING2 = premiumFeatureCardOrder;
        if (premiumTrialOfferPremiumType === tmp35.TIER_2) {
          TIER_2_LEADING2 = tmp5(8226).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
      }
    }
    obj4[1] = tmp33Result1;
    obj2[1] = tmp33(tmp5(5961).AnalyticsLocationProvider, obj4);
    tmp33Result = tmp33(closure_6, obj2);
    const tmp34 = closure_6;
    tmp5Result1 = tmp5(1234);
  }
};