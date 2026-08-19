// discord_app/modules/user_settings/premium/native/UserSettingsPremium.tsx
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useMountLayoutEffectDefault from "../../../../hooks/useMountEffect.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useStoreConnectionErrorAlertDefault from "../../../premium/native/useStoreConnectionErrorAlert.tsx";
import BlockedPaymentsCountryDisplayDefault from "../../../billing/native/BlockedPaymentsCountryDisplay.tsx";
import _modDef7875 from "../../../premium/UserTrialActionCreators.android.tsx";
import dispatcherDefault2 from "../../../../actions/UserSettingsModalActionCreators.tsx";
import handleCancelSubscriptionDefault from "../../../../components_native/premium/PremiumSubscriptionDetails.tsx";
import GoogleManagementLinkDefault from "../../../../components_native/premium/PremiumBillingInfo.tsx";
import AccountCreditTierDefault from "../../../premium/native/PremiumAccountCredit.tsx";
import NitroHomeHeaderDefault from "PremiumNitroHome.tsx";
import PremiumMarketingPageDefault from "PremiumMarketingPage.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import addSubscriptionPlan from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import addEntitlement from "../../../../stores/game_store/EntitlementStore.tsx";
import getState from "../../../../stores/native/AppStateStore.tsx";
import updateProduct from "../../../../stores/native/IAPStore.android.tsx";
import ME from "../../../../Constants.tsx";
import GuildFeatures from "../../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ ActivityIndicator: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = GuildFeatures);
let closure_20 = createCacheKey.createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

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
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let container = callback2();
  let tmp31Result = dependencyMap;
  useStoreConnectionErrorAlertDefault();
  if (applicationId.isFromTextSection) {
    let items = [QUICK_SWITCHERDefault.TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, QUICK_SWITCHERDefault.PREMIUM_MARKETING];
  analyticsLocations = contextDefault(items2).analyticsLocations;
  let obj = applicationId(7385);
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
    expandEventPropertiesDefault.track(closure_1_14.PREMIUM_MARKETING_PAGE_VIEWED, obj);
  });
  obj1 = applicationId(589);
  const items3 = [premiumDiscountOffer];
  [tmp8, tmp9] = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = applicationId(1500);
  closure_6 = obj2.useNavigation();
  let obj3 = applicationId(589);
  const items4 = [closure_12];
  stateFromStores = obj3.useStateFromStores(items4, () => state2.getState());
  closure_8 = analyticsLocations.useRef(stateFromStores);
  let obj4 = applicationId(589);
  const items5 = [closure_11];
  const stateFromStores1 = obj4.useStateFromStores(items5, () => {
    const items = [closure_18];
    return closure_11.hasFetchedForApplicationIds(items);
  });
  let obj5 = applicationId(589);
  const items6 = [closure_11];
  const stateFromStores2 = obj5.useStateFromStores(items6, () => {
    let forApplication = closure_11.getForApplication(closure_18);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(1433).areSetsEqual);
  let obj6 = applicationId(589);
  const items7 = [premiumTrialOffer];
  let stateFromStores3 = obj6.useStateFromStores(items7, () => premiumTrialOffer.isLoadedForPremiumSKUs());
  let obj7 = applicationId(589);
  const items8 = [closure_13];
  const stateFromStores4 = obj7.useStateFromStores(items8, () => product.getProduct(applicationId(7386).ProductIds.PREMIUM_TIER_2_MONTHLY));
  let obj8 = applicationId(589);
  const items9 = [closure_8];
  const stateFromStores5 = obj8.useStateFromStores(items9, () => {
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
  let obj9 = applicationId(7388);
  const isPaymentsBlocked = obj9.useIsPaymentsBlocked();
  const effect = analyticsLocations.useEffect(() => {
    callback(709).wait(() => callback(table[26]).init());
    const obj = callback(709);
    const userEntitlementsForApplication = applicationId(5358).fetchUserEntitlementsForApplication(closure_18);
  }, []);
  const items10 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp3 = stateFromStores === closure_1_15.ACTIVE;
    if (tmp3) {
      tmp3 = ref.current === tmp2.BACKGROUND;
    }
    if (tmp3) {
      dispatcherDefault.wait(() => callback(table[26]).init());
    }
    ref.current = stateFromStores;
  }, items10);
  let obj10 = applicationId(7418);
  premiumTrialOffer = obj10.usePremiumTrialOffer();
  const tmp7 = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  premiumDiscountOffer = applicationId(7624).usePremiumDiscountOffer();
  const obj12 = applicationId(7624);
  const premiumTrialOfferPremiumType = applicationId(7417).usePremiumTrialOfferPremiumType();
  const items11 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = _modDef7875.acknowledgeUserTrialOffer(tmp);
    }
    if (null != premiumDiscountOffer) {
      applicationId(dependencyMap[32]).acknowledgeUserOffer(undefined, tmp5);
      const obj2 = applicationId(dependencyMap[32]);
    }
  }, items11);
  let tmp31Result3 = null != tmp8 && stateFromStores3 && tmp9;
  let tmp5Result = tmp5(4039);
  const hasTier2Premium = tmp5Result.useHasTier2Premium();
  tmp5Result = tmp5(7878);
  obj = { userHasSubscription: tmp31Result3, isNitroHomeSurface: null, isConfirmedNonSubscriber: null };
  let tmp26 = hasTier2Premium;
  if (hasTier2Premium) {
    tmp26 = null == premiumFeatureCardOrder;
  }
  obj[1] = tmp26;
  obj[2] = tmp9;
  const buyNitroExperiment = tmp5Result.useBuyNitroExperiment(obj);
  if (null == stateFromStores4 || !stateFromStores3 || !tmp9 || !stateFromStores1) {
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
    tmp31Result = <tmp />;
    obj1[1] = tmp31Result;
    tmp31Result = <stateFromStores style={null}>{null}</stateFromStores>;
  } else {
    const items12 = [container.root, ];
    let num = 0;
    if (tmp5Result1.isAndroid()) {
      num = useSafeAreaInsetsDefault().bottom;
    }
    obj2 = { style: null, children: null };
    obj3 = { marginBottom: null };
    obj3[0] = num;
    items12[1] = obj3;
    obj2[0] = items12;
    obj4 = { value: null, children: null };
    obj4[0] = analyticsLocations;
    if (buyNitroExperiment.showRedesignUpsell) {
      obj5 = { onClose: null, applicationId: null, initialLoadCompleted: null, onPaymentSuccess: null, onPaymentDismiss: null, initialTier: null };
      obj5[0] = onClose;
      obj5[1] = applicationId;
      obj5[2] = !tmp24;
      obj5[3] = onPaymentSuccess;
      obj5[4] = onPaymentDismiss;
      if (null == premiumFeatureCardOrder) {
        obj5[5] = undefined;
        let tmp31Result1 = <tmp38 {...obj5} />;
      } else if (premiumFeatureCardOrder === tmp5(9326).PremiumFeatureCardOrder.TIER_0_LEADING) {
        let TIER_2 = closure_17.TIER_0;
      } else {
        TIER_2 = closure_17.TIER_2;
      }
    } else {
      if (hasTier2Premium) {
        if (null == premiumFeatureCardOrder) {
          obj6 = { onClose: null };
          obj6[0] = onClose;
          tmp31Result1 = jsx(NitroHomeHeaderDefault, { onClose: null });
        }
      }
      let TIER_2_LEADING = premiumFeatureCardOrder;
      if (null != premiumFeatureCardOrder) {
        obj7 = { applicationId: null, userHasSubscription: null, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null };
        obj7[0] = applicationId;
        obj7[1] = tmp31Result3;
        let tmp31Result2 = tmp31Result3;
        if (tmp31Result3) {
          function handleLearnMorePremiumGuild() {
            let arr = state;
            const routes = state.getState().routes;
            const found = routes.find((item, index) => item.name === constants.GUILD_BOOSTING);
            let obj = dispatcherDefault2;
            obj.setSection(closure_1_16.GUILD_BOOSTING);
            obj = { destinationPane: closure_1_16.GUILD_BOOSTING };
            const result = applicationId(dependencyMap[34]).trackUserSettingsPaneViewed(obj);
            if (null != found) {
              arr.navigate(closure_1_16.GUILD_BOOSTING, undefined, { pop: true });
            } else {
              arr = arr.push(closure_1_16.GUILD_BOOSTING);
            }
            const obj2 = applicationId(dependencyMap[34]);
          }
          obj8 = { style: null, onClickManagePremiumGuild: null, subscription: null };
          obj8[0] = container.subscriptionHeader;
          obj8[1] = handleLearnMorePremiumGuild;
          obj8[2] = tmp8;
          tmp31Result2 = jsx(handleCancelSubscriptionDefault, { style: null, onClickManagePremiumGuild: null, subscription: null });
        }
        obj7[2] = tmp31Result2;
        if (tmp31Result3) {
          obj9 = { style: null, subscription: null };
          obj9[0] = container.billingInfo;
          obj9[1] = tmp8;
          tmp31Result3 = jsx(GoogleManagementLinkDefault, { style: null, subscription: null });
        }
        obj7[3] = tmp31Result3;
        if (stateFromStores3) {
          obj10 = { style: null, currentSubscription: null, entitlements: null, hasPremiumGroup: null };
          obj10[0] = container.accountCredit;
          obj10[1] = tmp8;
          obj10[2] = stateFromStores2;
          obj10[3] = stateFromStores5;
          stateFromStores3 = jsx(AccountCreditTierDefault, { style: null, currentSubscription: null, entitlements: null, hasPremiumGroup: null });
        }
        obj7[4] = stateFromStores3;
        obj7[5] = onClose;
        if (TIER_2_LEADING == null) {
          TIER_2_LEADING = tmp5(9326).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
        obj7[6] = TIER_2_LEADING;
        obj7[7] = stateFromStores2;
        obj7[8] = onPaymentSuccess;
        obj7[9] = onPaymentDismiss;
        obj7[10] = isFullScreenPresentation;
        tmp31Result1 = jsx(PremiumMarketingPageDefault, { applicationId: null, userHasSubscription: null, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null });
        const tmpResult = PremiumMarketingPageDefault;
      } else if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
        let TIER_2_LEADING2 = tmp5(9326).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else {
        TIER_2_LEADING2 = premiumFeatureCardOrder;
        if (premiumTrialOfferPremiumType === tmp33.TIER_2) {
          TIER_2_LEADING2 = tmp5(9326).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
      }
    }
    obj4[1] = tmp31Result1;
    obj2[1] = jsx(tmp5(7139).AnalyticsLocationProvider, { value: null, children: null });
    tmp31Result = <closure_6 style={null}>{null}</closure_6>;
    tmp5Result1 = tmp5(500);
  }
  const obj13 = applicationId(7417);
};