// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1940 */;
import combinedDefault from "combined" /* 1993 */;
import _fetchAppliedGuildBoostsForGuild from "_fetchAppliedGuildBoostsForGuild" /* 4270 */;
import _deletePaymentSource from "_deletePaymentSource" /* 4466 */;
import Text from "Text" /* 4734 */;
import fetchSubscriptionPlansForSKU from "fetchSubscriptionPlansForSKU" /* 7223 */;
import GuildBoostSlotCooldownDefault from "GuildBoostSlotCooldown" /* 12932 */;
import handlePressDefault from "handlePress" /* 12946 */;
import handlePressDefault2 from "handlePress" /* 12948 */;
import getTopPatternSource from "getTopPatternSource" /* 12950 */;
import FEATURES_PREMIUM_GUILD_USERDefault from "FEATURES_PREMIUM_GUILD_USER" /* 12954 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import closure_7 from "handlePaymentSourceCreateEnd" /* 4041 */;
import closure_8 from "handleGuildBoostsUpdate" /* 4267 */;
import closure_9 from "addSubscriptionPlan" /* 4044 */;
import closure_10 from "reset" /* 4045 */;
import ME from "ME" /* 676 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { getSubscriptionPlansLoaded } from "../../../billing/hooks/useSubscriptionPlansLoaded.tsx";
import { defaultMobileWebNitroManagementSuccessCallback } from "../../../premium/native/utils/PremiumManagementUtils.tsx";

require = arg1;
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
      const found = routes.find((name) => name.name === constants.PREMIUM);
      let obj = closure_1_1(closure_1_2[16]);
      obj.setSection(closure_1_12.PREMIUM);
      obj = { destinationPane: closure_1_12.PREMIUM };
      const result = applyArgumentsResult(closure_1_2[17]).trackUserSettingsPaneViewed(obj);
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
      tmp6Result = tmp6(tmp7(4734).Text, obj2);
    }
    const obj3 = { children: null };
    items1[2] = tmp6Result;
    obj[1] = items1;
    const items2 = [closure_15(closure_4, obj), callback(GuildBoostSlotCooldownDefault, {})];
    obj3[0] = items2;
    tmp3Result = tmp3(importAllResult.Fragment, obj3);
    const obj5 = combinedDefault;
    const tmp5 = closure_4;
    tmp7 = require;
    const tmp9 = importDefault;
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
  items[2] = closure_15(closure_4, obj1);
  obj[1] = items;
  return closure_15(closure_5, obj);
};
UserSettingsPremiumGuildSubscriptions.contextType = require("ManaContext").ThemeContext;
let result = require("set").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  route = route.route;
  let _require;
  let flag;
  dependencyMap = undefined;
  closure_3 = undefined;
  closure_4 = undefined;
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
    obj[2] = values.filter((isAvailable) => isAvailable.isAvailable()).length > 0;
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