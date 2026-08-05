// discord_app/modules/user_settings/premium/native/UserSettingsPremium.tsx
import _fetchUserOffer from "_fetchUserOffer";
import expandEventProperties from "expandEventProperties";
import get_ActivityIndicator from "useSettingNavigationRoute";
import mergeGuildAvatar from "mergeGuildAvatar";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import addEntitlement from "addEntitlement";
import getState from "getState";
import updateProduct from "updateProduct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { jsx } from "useNavigation";
import createCacheKey from "createCacheKey";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { useStoreConnectionErrorAlert } from "../../../premium/native/useStoreConnectionErrorAlert.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let error;
const require = arg1;
({ ActivityIndicator: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = GuildFeatures);
let closure_20 = createCacheKey.createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  let _fetchUserOffer;
  let dependencyMap;
  let importDefault;
  let isFullScreenPresentation;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let tmp8;
  let tmp9;
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _fetchUserOffer, onClose, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = applicationId);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  let closure_5;
  let closure_6;
  let stateFromStores;
  let mergeGuildAvatar;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let container = callback2();
  let tmp = importDefault;
  let tmp31Result = dependencyMap;
  useStoreConnectionErrorAlert();
  if (applicationId.isFromTextSection) {
    let items = [tmp(5630).TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, tmp(5630).PREMIUM_MARKETING];
  analyticsLocations = context(items2).analyticsLocations;
  let obj = applicationId(6787);
  closure_5 = obj.useSettingNavigationRoute();
  tmp(4711)(() => {
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
    obj = { application_id: applicationId, location_stack: analyticsLocations, activity_session_id: closure_1, channel_id: closure_2, guild_id: _fetchUserOffer };
    const merged = Object.assign(obj);
    outer1_1(outer1_2[19]).track(outer1_14.PREMIUM_MARKETING_PAGE_VIEWED, obj);
  });
  let obj1 = applicationId(589);
  const items3 = [premiumDiscountOffer];
  const tmp4 = context;
  [tmp8, tmp9] = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = applicationId(1480);
  closure_6 = obj2.useNavigation();
  let obj3 = applicationId(589);
  const items4 = [getState];
  stateFromStores = obj3.useStateFromStores(items4, () => state2.getState());
  mergeGuildAvatar = analyticsLocations.useRef(stateFromStores);
  let obj4 = applicationId(589);
  const items5 = [addEntitlement];
  const stateFromStores1 = obj4.useStateFromStores(items5, () => {
    const items = [closure_18];
    return addEntitlement.hasFetchedForApplicationIds(items);
  });
  let obj5 = applicationId(589);
  const items6 = [addEntitlement];
  const stateFromStores2 = obj5.useStateFromStores(items6, () => {
    let forApplication = addEntitlement.getForApplication(closure_18);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(1414).areSetsEqual);
  let obj6 = applicationId(589);
  const items7 = [premiumTrialOffer];
  let stateFromStores3 = obj6.useStateFromStores(items7, () => premiumTrialOffer.isLoadedForPremiumSKUs());
  let obj7 = applicationId(589);
  const items8 = [updateProduct];
  const stateFromStores4 = obj7.useStateFromStores(items8, () => product.getProduct(applicationId(6788).ProductIds.PREMIUM_TIER_2_MONTHLY));
  let obj8 = applicationId(589);
  const items9 = [mergeGuildAvatar];
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
  let obj9 = applicationId(6790);
  const isPaymentsBlocked = obj9.useIsPaymentsBlocked();
  const effect = analyticsLocations.useEffect(() => {
    callback(709).wait(() => callback(table[26]).init());
    const obj = callback(709);
    const userEntitlementsForApplication = applicationId(6771).fetchUserEntitlementsForApplication(closure_18);
  }, []);
  const items10 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp3 = stateFromStores === outer1_15.ACTIVE;
    if (tmp3) {
      tmp3 = ref.current === tmp2.BACKGROUND;
    }
    if (tmp3) {
      outer1_1(outer1_2[25]).wait(() => callback(table[26]).init());
      const obj = outer1_1(outer1_2[25]);
    }
    ref.current = stateFromStores;
  }, items10);
  let obj10 = applicationId(6820);
  premiumTrialOffer = obj10.usePremiumTrialOffer();
  const tmp7 = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  premiumDiscountOffer = applicationId(7262).usePremiumDiscountOffer();
  const obj12 = applicationId(7262);
  const premiumTrialOfferPremiumType = applicationId(6819).usePremiumTrialOfferPremiumType();
  const items11 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = outer1_1(outer1_2[31]).acknowledgeUserTrialOffer(tmp);
      const obj = outer1_1(outer1_2[31]);
    }
    if (null != premiumDiscountOffer) {
      applicationId(outer1_2[32]).acknowledgeUserOffer(undefined, tmp5);
      const obj2 = applicationId(outer1_2[32]);
    }
  }, items11);
  let tmp31Result3 = null != tmp8 && stateFromStores3 && tmp9;
  let tmp5Result = tmp5(3931);
  const hasTier2Premium = tmp5Result.useHasTier2Premium();
  tmp5Result = tmp5(7515);
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
    tmp = tmp(7326);
    tmp31Result = tmp31(tmp, {});
    obj1[1] = tmp31Result;
    tmp31Result = tmp31(stateFromStores, obj1);
  } else {
    const items12 = [container.root, ];
    let num = 0;
    if (tmp5Result1.isAndroid()) {
      num = useSafeAreaInsets().bottom;
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
        let tmp31Result1 = tmp31(tmp38, obj5);
      } else if (premiumFeatureCardOrder === tmp5(8433).PremiumFeatureCardOrder.TIER_0_LEADING) {
        let TIER_2 = closure_17.TIER_0;
      } else {
        TIER_2 = closure_17.TIER_2;
      }
    } else {
      if (hasTier2Premium) {
        if (null == premiumFeatureCardOrder) {
          obj6 = { onClose: null };
          obj6[0] = onClose;
          tmp31Result1 = tmp31(tmp(12592), obj6);
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
            const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
            let obj = outer1_1(outer1_2[33]);
            obj.setSection(outer1_16.GUILD_BOOSTING);
            obj = { destinationPane: outer1_16.GUILD_BOOSTING };
            const result = applicationId(outer1_2[34]).trackUserSettingsPaneViewed(obj);
            if (null != found) {
              arr.navigate(found);
            } else {
              arr = arr.push(outer1_16.GUILD_BOOSTING);
            }
          }
          obj8 = { style: null, onClickManagePremiumGuild: null, subscription: null };
          obj8[0] = container.subscriptionHeader;
          obj8[1] = handleLearnMorePremiumGuild;
          obj8[2] = tmp8;
          tmp31Result2 = tmp31(tmp(7517), obj8);
        }
        obj7[2] = tmp31Result2;
        if (tmp31Result3) {
          obj9 = { style: null, subscription: null };
          obj9[0] = container.billingInfo;
          obj9[1] = tmp8;
          tmp31Result3 = tmp31(tmp(7557), obj9);
        }
        obj7[3] = tmp31Result3;
        if (stateFromStores3) {
          obj10 = { style: null, currentSubscription: null, entitlements: null, hasPremiumGroup: null };
          obj10[0] = container.accountCredit;
          obj10[1] = tmp8;
          obj10[2] = stateFromStores2;
          obj10[3] = stateFromStores5;
          stateFromStores3 = tmp31(tmp(7559), obj10);
        }
        obj7[4] = stateFromStores3;
        obj7[5] = onClose;
        if (TIER_2_LEADING == null) {
          TIER_2_LEADING = tmp5(8433).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
        obj7[6] = TIER_2_LEADING;
        obj7[7] = stateFromStores2;
        obj7[8] = onPaymentSuccess;
        obj7[9] = onPaymentDismiss;
        obj7[10] = isFullScreenPresentation;
        tmp31Result1 = tmp31(tmp(12640), obj7);
        const tmpResult = tmp(12640);
      } else if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
        let TIER_2_LEADING2 = tmp5(8433).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else {
        TIER_2_LEADING2 = premiumFeatureCardOrder;
        if (premiumTrialOfferPremiumType === tmp33.TIER_2) {
          TIER_2_LEADING2 = tmp5(8433).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
      }
    }
    obj4[1] = tmp31Result1;
    obj2[1] = tmp31(tmp5(5610).AnalyticsLocationProvider, obj4);
    tmp31Result = tmp31(closure_6, obj2);
    const tmp32 = closure_6;
    tmp5Result1 = tmp5(500);
  }
};