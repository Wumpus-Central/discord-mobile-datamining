// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import _fetchAppliedGuildBoostsForGuild from "../../../../actions/BoostingActionCreators.tsx";
import _deletePaymentSource from "../../../billing/actions/BillingActionCreators.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import fetchSubscriptionPlansForSKU from "../../../../actions/SubscriptionPlanActionCreators.tsx";
import dispatcherDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import GuildBoostSlotCooldownDefault from "../../../premium/native/GuildBoostSlotsInventory.tsx";
import handlePressDefault from "../../../premium/premium_group/native/BoostingUnavailablePill.tsx";
import handlePressDefault2 from "../../../premium/fractional/native/BoostingCountDownPill.tsx";
import getTopPatternSource from "../../../../design/components/Illustration/native/redesign/generated/TopPattern.tsx";
import FEATURES_PREMIUM_GUILD_USERDefault from "../../../../components_native/premium/GuildBoostingUpsell.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import handlePaymentSourceCreateEnd from "../../../../stores/billing/BillingInfoStore.tsx";
import handleGuildBoostsUpdate from "../../../../stores/billing/GuildBoostSlotStore.tsx";
import addSubscriptionPlan from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import ME from "../../../../Constants.tsx";
import { FractionalPremiumStates } from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { getSubscriptionPlansLoaded } from "../../../billing/hooks/useSubscriptionPlansLoaded.tsx";
import { defaultMobileWebNitroManagementSuccessCallback } from "../../../premium/native/utils/PremiumManagementUtils.tsx";

require = fn;
let c3 = importAllResult;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ HelpdeskArticles: unpackModuleId, UserSettingsSections: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: require("result").DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingHorizontal: 16, paddingBottom: 32 };
createCacheKey[4] = { lineHeight: 18 };
createCacheKey[5] = { marginBottom: 8 };
createCacheKey[6] = { marginHorizontal: 16, alignContent: "center" };
createCacheKey[7] = { marginTop: 8 };
let closure_16 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class UserSettingsPremiumGuildSubscriptions extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { isOnCooldown: false };
    applyArgumentsResult.handleLearnMorePremium = function handleLearnMorePremium() {
      const navigation = applyArgumentsResult.props.navigation;
      const routes = navigation.getState().routes;
      const found = routes.find((item, index) => item.name === constants.PREMIUM);
      let obj = dispatcherDefault;
      obj.setSection(closure_1_12.PREMIUM);
      obj = { destinationPane: closure_1_12.PREMIUM };
      const result = applyArgumentsResult(dependencyMap[17]).trackUserSettingsPaneViewed(obj);
      if (null != found) {
        navigation.navigate(closure_1_12.PREMIUM, undefined, { pop: true });
      } else {
        navigation.push(closure_1_12.PREMIUM);
      }
      const obj2 = applyArgumentsResult(dependencyMap[17]);
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsPremiumGuildSubscriptions.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (!this.props.hasFetchedSlots) {
    const guildBoostSlots = _fetchAppliedGuildBoostsForGuild.fetchGuildBoostSlots();
  }
  if (tmp4) {
    const premiumSubscriptionPlans = fetchSubscriptionPlansForSKU.fetchPremiumSubscriptionPlans();
  }
  if (!self.props.isFetchingPaymentSources) {
    const paymentSources = _deletePaymentSource.fetchPaymentSources();
  }
  tmp4 = self.props.shouldFetchSubscriptionPlans && !self.props.isFetchingSubscriptionPlans;
};
prototype["renderPremiumGuildSubscriptions"] = function renderPremiumGuildSubscriptions() {
  const tmp = callback2(this.context);
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
    obj1 = { helpdeskArticle: null };
    obj1[0] = combinedDefault.getArticleURL(constants.GUILD_SUBSCRIPTIONS);
    obj[3] = intl2.format(getSystemLocale.t.A4UTjH, obj1);
    items1[1] = callback(Text.Text, obj);
    let tmp6Result = null != externalManagementMessage;
    if (tmp6Result) {
      const obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj2[0] = tmp.externalManagement;
      obj2[3] = externalManagementMessage;
      tmp6Result = callback(Text.Text, obj2);
    }
    const obj3 = { children: null };
    items1[2] = tmp6Result;
    obj[1] = items1;
    const items2 = [callback2(closure_4, obj), callback(GuildBoostSlotCooldownDefault, {})];
    obj3[0] = items2;
    tmp3Result = callback2(importAllResult.Fragment, obj3);
  }
  return tmp3Result;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback2(this.context);
  const props = this.props;
  ({ fractionalState, isInReverseTrial } = props);
  ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
  if (premiumGroupRole === create.PremiumSubscriptionGroupRole.MEMBER) {
    let obj = { style: null };
    obj[0] = tmp.boostingUnavailablePill;
    let tmp5 = callback(handlePressDefault, obj);
  } else {
    tmp5 = null;
    if (fractionalState !== FractionalPremiumStates.NONE) {
      obj = { fpDurationText: null, isInReverseTrial: null, style: null };
      obj[0] = fpDurationText;
      obj[1] = isInReverseTrial;
      obj[2] = tmp.boostingUnavailablePill;
      tmp5 = callback(handlePressDefault2, obj);
    }
  }
  obj = { style: tmp.scroller, children: null };
  const items = [tmp5, self.renderPremiumGuildSubscriptions(), ];
  obj1 = { style: tmp.upsellSection, children: null };
  const items1 = [callback(getTopPatternSource.TopPattern, { style: tmp.background }), ];
  let tmp13Result = null;
  if (hasFetchedSubscriptionPlans) {
    const obj3 = { onLearnMorePremium: null, fractionalState: null, isInReverseTrial: null, hasAvailableSlots: null };
    obj3[0] = self.handleLearnMorePremium;
    obj3[1] = fractionalState;
    obj3[2] = isInReverseTrial;
    obj3[3] = hasAvailableSlots;
    tmp13Result = callback(FEATURES_PREMIUM_GUILD_USERDefault, obj3);
  }
  items1[1] = tmp13Result;
  obj1[1] = items1;
  items[2] = callback2(closure_4, obj1);
  obj[1] = items;
  return callback2(closure_5, obj);
};
UserSettingsPremiumGuildSubscriptions.contextType = require("ManaContext").ThemeContext;
let result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  route = route.route;
  let _require;
  dependencyMap = undefined;
  closure_3 = undefined;
  closure_4 = undefined;
  let obj = getSubscriptionPlansLoaded;
  _require = obj.useSubscriptionPlansLoaded();
  let flag;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      flag = params.shouldFetchSubscriptionPlans;
    }
  }
  if (flag == null) {
    flag = true;
  }
  ({ fractionalState: c2, endsAt } = flag(5356)({ forceFetch: true }));
  let tmpResult = tmp(8278);
  closure_3 = tmpResult.useIsInReverseTrial();
  const tmp3 = flag(5356)({ forceFetch: true });
  closure_4 = flag(12893)(endsAt, tmp(12893).CountDownMessageTypes.LONG_TIME_LEFT);
  tmpResult = tmp(589);
  const items = [closure_8, closure_7, closure_9, closure_6];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    const obj = { hasFetchedSlots: closure_1_8.hasFetched, hasSlots: Object.keys(closure_1_8.boostSlots).length > 0, hasAvailableSlots: null, hasFetchedSubscriptionPlans: null, isFetchingSubscriptionPlans: null, isFetchingPaymentSources: null, shouldFetchSubscriptionPlans: null, fractionalState: null, isInReverseTrial: null, fpDurationText: null, premiumGroupRole: null };
    const values = Object.values(closure_1_8.boostSlots);
    let premiumGroupRole;
    obj[2] = values.filter((item, index) => item.isAvailable()).length > 0;
    obj[3] = closure_0;
    obj[4] = closure_1_9.isFetchingForPremiumSKUs();
    obj[5] = closure_1_7.isPaymentSourceFetching;
    obj[6] = flag;
    obj[7] = c2;
    obj[8] = closure_3;
    obj[9] = closure_4;
    const currentUser = closure_1_6.getCurrentUser();
    if (currentUser != null) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    obj[10] = premiumGroupRole;
    return obj;
  });
  const tmp4 = flag(12893);
  const items1 = [closure_10];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const tmpResult1 = initialize;
  const navigation = require("../../../../design/components/Navigator/native/useNavigation.native.tsx").useNavigation();
  const tmpResult2 = useNavigation;
  obj = { navigation, externalManagementMessage: null };
  const externalManagementMessage = require("../../../premium/native/utils/PremiumManagementUtils.tsx").getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  const tmpResult3 = defaultMobileWebNitroManagementSuccessCallback;
  let tmp11 = null;
  if (tmpResult4.isMetaQuest()) {
    tmp11 = externalManagementMessage;
  }
  obj[1] = tmp11;
  const merged = Object.assign(stateFromStoresObject);
  return callback(UserSettingsPremiumGuildSubscriptions, obj);
};