// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx
import importAllResult from "getSystemLocale";
import get_ActivityIndicator from "getSanitizedRestrictedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import ME from "ME";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "GuildBoostSlotCooldown";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { create } from "../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import { _fetchAppliedGuildBoostsForGuild } from "../../../../actions/BoostingActionCreators.tsx";
import { fetchSubscriptionPlansForSKU } from "../../../../actions/SubscriptionPlanActionCreators.tsx";
import { FEATURES_PREMIUM_GUILD_USER } from "../../../../components_native/premium/GuildBoostingUpsell.tsx";
import { getTopPatternSource } from "../../../../design/components/Illustration/native/redesign/generated/TopPattern.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";
import { _deletePaymentSource } from "../../../billing/actions/BillingActionCreators.tsx";
import { getSubscriptionPlansLoaded } from "../../../billing/hooks/useSubscriptionPlansLoaded.tsx";
import { handlePress } from "../../../premium/fractional/native/BoostingCountDownPill.tsx";
import { GuildBoostSlotCooldown } from "../../../premium/native/GuildBoostSlotsInventory.tsx";
import { defaultMobileWebNitroManagementSuccessCallback } from "../../../premium/native/utils/PremiumManagementUtils.tsx";
import { handlePress } from "../../../premium/premium_group/native/BoostingUnavailablePill.tsx";

let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let unpackModuleId;
let require = arg1;
let c3 = importAllResult;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ HelpdeskArticles: unpackModuleId, UserSettingsSections: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { upsellSection: { position: "relative" }, background: { position: "absolute", width: "100%" }, scroller: null, subscriptionHeader: null, blurb: null, blurbNotLast: null, boostingUnavailablePill: null, externalManagement: null };
createCacheKey = { flex: 1, backgroundColor: require("result").DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingHorizontal: 16, paddingBottom: 32 };
createCacheKey[4] = { lineHeight: 18 };
createCacheKey[5] = { marginBottom: 8 };
createCacheKey[6] = { marginHorizontal: 16, alignContent: "center" };
createCacheKey[7] = { marginTop: 8 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class UserSettingsPremiumGuildSubscriptions extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { isOnCooldown: false };
    applyArgumentsResult.handleLearnMorePremium = function handleLearnMorePremium() {
      const navigation = applyArgumentsResult.props.navigation;
      const routes = navigation.getState().routes;
      const found = routes.find((name) => name.name === constants.PREMIUM);
      let obj = outer1_1(outer1_2[16]);
      obj.setSection(outer1_12.PREMIUM);
      obj = { destinationPane: outer1_12.PREMIUM };
      const result = applyArgumentsResult(outer1_2[17]).trackUserSettingsPaneViewed(obj);
      if (null != found) {
        navigation.navigate(tmp2.PREMIUM, undefined, { pop: true });
      } else {
        navigation.push(tmp2.PREMIUM);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsPremiumGuildSubscriptions.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (!this.props.hasFetchedSlots) {
    const guildBoostSlots = _fetchAppliedGuildBoostsForGuild.fetchGuildBoostSlots();
    const obj = _fetchAppliedGuildBoostsForGuild;
  }
  if (tmp4) {
    const premiumSubscriptionPlans = fetchSubscriptionPlansForSKU.fetchPremiumSubscriptionPlans();
    const obj2 = fetchSubscriptionPlansForSKU;
  }
  if (!self.props.isFetchingPaymentSources) {
    const paymentSources = _deletePaymentSource.fetchPaymentSources();
    const obj3 = _deletePaymentSource;
  }
};
prototype["renderPremiumGuildSubscriptions"] = function renderPremiumGuildSubscriptions() {
  const tmp = createCacheKey(this.context);
  const props = this.props;
  const externalManagementMessage = props.externalManagementMessage;
  let tmp3Result = null;
  if (props.hasSlots) {
    let obj = { style: null, children: null };
    obj[0] = tmp.subscriptionHeader;
    obj = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    const items = [, ];
    ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
    obj[0] = items;
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t.GwnFO5);
    const items1 = [callback(Text.Text, obj), , ];
    obj = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    obj[0] = tmp.blurb;
    const intl2 = getSystemLocale.intl;
    const obj1 = { helpdeskArticle: null };
    obj1[0] = combined.getArticleURL(constants.GUILD_SUBSCRIPTIONS);
    obj[3] = intl2.format(getSystemLocale.t.A4UTjH, obj1);
    items1[1] = callback(Text.Text, obj);
    let tmp6Result = null != externalManagementMessage;
    if (tmp6Result) {
      const obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj2[0] = tmp.externalManagement;
      obj2[3] = externalManagementMessage;
      tmp6Result = tmp6(tmp7(4338).Text, obj2);
    }
    const obj3 = { children: null };
    items1[2] = tmp6Result;
    obj[1] = items1;
    const items2 = [closure_15(closure_4, obj), callback(GuildBoostSlotCooldown, {})];
    obj3[0] = items2;
    tmp3Result = tmp3(importAllResult.Fragment, obj3);
    const obj5 = combined;
    const tmp5 = closure_4;
    tmp7 = require;
    const tmp9 = importDefault;
  }
  return tmp3Result;
};
prototype["render"] = function render() {
  let fpDurationText;
  let fractionalState;
  let hasAvailableSlots;
  let hasFetchedSubscriptionPlans;
  let isInReverseTrial;
  let premiumGroupRole;
  const self = this;
  const tmp = createCacheKey(this.context);
  const props = this.props;
  ({ fractionalState, isInReverseTrial } = props);
  ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
  if (premiumGroupRole === create.PremiumSubscriptionGroupRole.MEMBER) {
    let obj = { style: null };
    obj[0] = tmp.boostingUnavailablePill;
    let tmp5 = callback(handlePress, obj);
  } else {
    tmp5 = null;
    if (fractionalState !== FractionalPremiumStates.NONE) {
      obj = { fpDurationText: null, isInReverseTrial: null, style: null };
      obj[0] = fpDurationText;
      obj[1] = isInReverseTrial;
      obj[2] = tmp.boostingUnavailablePill;
      tmp5 = callback(handlePress, obj);
    }
  }
  obj = { style: tmp.scroller, children: null };
  const items = [tmp5, self.renderPremiumGuildSubscriptions(), ];
  const obj1 = { style: tmp.upsellSection, children: null };
  const items1 = [callback(getTopPatternSource.TopPattern, { style: tmp.background }), ];
  let tmp13Result = null;
  if (hasFetchedSubscriptionPlans) {
    const obj3 = { onLearnMorePremium: null, fractionalState: null, isInReverseTrial: null, hasAvailableSlots: null };
    obj3[0] = self.handleLearnMorePremium;
    obj3[1] = fractionalState;
    obj3[2] = isInReverseTrial;
    obj3[3] = hasAvailableSlots;
    tmp13Result = callback(FEATURES_PREMIUM_GUILD_USER, obj3);
  }
  items1[1] = tmp13Result;
  obj1[1] = items1;
  items[2] = closure_15(closure_4, obj1);
  obj[1] = items;
  return closure_15(closure_5, obj);
};
UserSettingsPremiumGuildSubscriptions.contextType = require("ManaContext").ThemeContext;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  let c2;
  let endsAt;
  route = route.route;
  let _require;
  let flag;
  let dependencyMap;
  let closure_3;
  let closure_4;
  let obj = _getSubscriptionPlansLoaded;
  _require = obj.useSubscriptionPlansLoaded();
  flag = undefined;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      flag = params.shouldFetchSubscriptionPlans;
    }
  }
  if (flag == null) {
    flag = true;
  }
  ({ fractionalState: c2, endsAt } = flag(6928)({ forceFetch: true }));
  let tmpResult = tmp(8232);
  closure_3 = tmpResult.useIsInReverseTrial();
  const tmp3 = flag(6928)({ forceFetch: true });
  closure_4 = flag(12815)(endsAt, tmp(12815).CountDownMessageTypes.LONG_TIME_LEFT);
  tmpResult = tmp(589);
  const items = [handleGuildBoostsUpdate, handlePaymentSourceCreateEnd, addSubscriptionPlan, mergeGuildAvatar];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    const obj = { hasFetchedSlots: outer1_8.hasFetched, hasSlots: Object.keys(outer1_8.boostSlots).length > 0, hasAvailableSlots: null, hasFetchedSubscriptionPlans: null, isFetchingSubscriptionPlans: null, isFetchingPaymentSources: null, shouldFetchSubscriptionPlans: null, fractionalState: null, isInReverseTrial: null, fpDurationText: null, premiumGroupRole: null };
    const values = Object.values(outer1_8.boostSlots);
    let premiumGroupRole;
    obj[2] = values.filter((isAvailable) => isAvailable.isAvailable()).length > 0;
    obj[3] = closure_0;
    obj[4] = outer1_9.isFetchingForPremiumSKUs();
    obj[5] = outer1_7.isPaymentSourceFetching;
    obj[6] = flag;
    obj[7] = c2;
    obj[8] = closure_3;
    obj[9] = closure_4;
    const currentUser = outer1_6.getCurrentUser();
    if (currentUser != null) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    obj[10] = premiumGroupRole;
    return obj;
  });
  const tmp4 = flag(12815);
  const items1 = [reset];
  const stateFromStores = _initialize.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const tmpResult1 = _initialize;
  const navigation = _useNavigation.useNavigation();
  const tmpResult2 = _useNavigation;
  obj = { navigation, externalManagementMessage: null };
  const externalManagementMessage = _defaultMobileWebNitroManagementSuccessCallback.getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  const tmp10 = UserSettingsPremiumGuildSubscriptions;
  const tmp9 = closure_14;
  const tmpResult3 = _defaultMobileWebNitroManagementSuccessCallback;
  let tmp11 = null;
  if (tmpResult4.isMetaQuest()) {
    tmp11 = externalManagementMessage;
  }
  obj[1] = tmp11;
  const merged = Object.assign(stateFromStoresObject);
  return tmp9(tmp10, obj);
};