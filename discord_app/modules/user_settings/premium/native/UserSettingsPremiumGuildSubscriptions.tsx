// === Module 13500: UserSettingsPremiumGuildSubscriptions ===

// Module 13500 (UserSettingsPremiumGuildSubscriptions)
import util from "util" /* 1114 */;
import user from "user" /* 1379 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4458 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4884 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7257 */;
import GuildBoostSlotsInventoryDefault from "GuildBoostSlotsInventory" /* 13501 */;
import BoostingUnavailablePillDefault from "BoostingUnavailablePill" /* 13515 */;
import BoostingCountDownPillDefault from "BoostingCountDownPill" /* 13517 */;
import TopPattern from "TopPattern" /* 13519 */;
import GuildBoostingUpsellDefault from "GuildBoostingUpsell" /* 13523 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import BillingInfoStore from "BillingInfoStore" /* 4220 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ HelpdeskArticles: closure_11, UserSettingsSections: closure_12 } = Constants);
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { upsellSection: { position: "relative" }, background: { position: "absolute", width: "100%" }, scroller: null, subscriptionHeader: null, blurb: null, blurbNotLast: null, boostingUnavailablePill: null, externalManagement: null };
createStyles = { flex: 1, backgroundColor: fn(5441).DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
createStyles.scroller = createStyles;
createStyles.subscriptionHeader = { paddingHorizontal: 16, paddingBottom: 32 };
createStyles.blurb = { lineHeight: 18 };
createStyles.blurbNotLast = { marginBottom: 8 };
createStyles.boostingUnavailablePill = { marginHorizontal: 16, alignContent: "center" };
createStyles.externalManagement = { marginTop: 8 };
let closure_16 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class UserSettingsPremiumGuildSubscriptions extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { isOnCooldown: false };
    applyArgumentsResult.handleLearnMorePremium = function handleLearnMorePremium() {
      const navigation = applyArgumentsResult.props.navigation;
      const routes = navigation.getState().routes;
      const found = routes.find((name) => name.name === constants.PREMIUM);
      let obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(constants2.PREMIUM);
      obj = { destinationPane: constants2.PREMIUM };
      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj);
      if (null != found) {
        navigation.navigate(constants2.PREMIUM, undefined, { pop: true });
      } else {
        navigation.push(constants2.PREMIUM);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsPremiumGuildSubscriptions.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (!this.props.hasFetchedSlots) {
    const guildBoostSlots = BoostingActionCreators.fetchGuildBoostSlots();
  }
  if (tmp4) {
    const premiumSubscriptionPlans = SubscriptionPlanActionCreators.fetchPremiumSubscriptionPlans();
  }
  if (!self.props.isFetchingPaymentSources) {
    const paymentSources = actions_BillingActionCreators.fetchPaymentSources();
  }
  tmp4 = self.props.shouldFetchSubscriptionPlans && !self.props.isFetchingSubscriptionPlans;
};
prototype["renderPremiumGuildSubscriptions"] = function renderPremiumGuildSubscriptions() {
  const tmp = closure_16(this.context);
  const props = this.props;
  const externalManagementMessage = props.externalManagementMessage;
  let tmp3Result = null;
  if (props.hasSlots) {
    let obj = { style: tmp.subscriptionHeader, children: null };
    obj = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    const items = [, ];
    ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
    obj.style = items;
    const intl = util.intl;
    obj.children = intl.string(util.t.GwnFO5);
    const items1 = [closure_1_14(Text_Text.Text, obj), , ];
    obj = { style: tmp.blurb, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    const intl2 = util.intl;
    const obj1 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.GUILD_SUBSCRIPTIONS) };
    obj.children = intl2.format(util.t.A4UTjH, obj1);
    items1[1] = closure_1_14(Text_Text.Text, obj);
    let tmp6Result = null != externalManagementMessage;
    if (tmp6Result) {
      const obj2 = { style: tmp.externalManagement, variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
      tmp6Result = closure_1_14(Text_Text.Text, obj2);
    }
    const obj3 = { children: null };
    items1[2] = tmp6Result;
    obj.children = items1;
    const items2 = [__initData(React4, obj), closure_1_14(GuildBoostSlotsInventoryDefault, {})];
    obj3.children = items2;
    tmp3Result = __initData(noop.Fragment, obj3);
  }
  return tmp3Result;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_16(this.context);
  const props = this.props;
  ({ fractionalState, isInReverseTrial } = props);
  ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
  if (premiumGroupRole === user.PremiumSubscriptionGroupRole.MEMBER) {
    let obj = { style: tmp.boostingUnavailablePill };
    let tmp5 = closure_1_14(BoostingUnavailablePillDefault, obj);
  } else {
    tmp5 = null;
    if (fractionalState !== FractionalPremiumStates.NONE) {
      obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp5 = closure_1_14(BoostingCountDownPillDefault, obj);
    }
  }
  obj = { style: tmp.scroller, children: null };
  const items = [tmp5, self.renderPremiumGuildSubscriptions(), ];
  const obj1 = { style: tmp.upsellSection, children: null };
  const items1 = [closure_1_14(TopPattern.TopPattern, { style: tmp.background }), ];
  let tmp13Result = null;
  if (hasFetchedSubscriptionPlans) {
    const obj3 = { onLearnMorePremium: self.handleLearnMorePremium, fractionalState, isInReverseTrial, hasAvailableSlots };
    tmp13Result = closure_1_14(GuildBoostingUpsellDefault, obj3);
  }
  items1[1] = tmp13Result;
  obj1.children = items1;
  items[2] = __initData(React4, obj1);
  obj.children = items;
  return __initData(hasOwnProperty, obj);
};
UserSettingsPremiumGuildSubscriptions.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  route = route.route;
  _require = undefined;
  dependencyMap = undefined;
  let isInReverseTrial;
  let fpDurationText;
  let obj = require("useSubscriptionPlansLoaded");
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
  ({ fractionalState: c2, endsAt } = flag(7393)({ forceFetch: true }));
  let tmpResult = tmp(8065);
  isInReverseTrial = tmpResult.useIsInReverseTrial();
  const tmp3 = flag(7393)({ forceFetch: true });
  fpDurationText = flag(13461)(endsAt, tmp(13461).CountDownMessageTypes.LONG_TIME_LEFT);
  tmpResult = tmp(504);
  const items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    const obj = { hasFetchedSlots: GuildBoostSlotStore.hasFetched, hasSlots: Object.keys(GuildBoostSlotStore.boostSlots).length > 0, hasAvailableSlots: null, hasFetchedSubscriptionPlans: null, isFetchingSubscriptionPlans: null, isFetchingPaymentSources: null, shouldFetchSubscriptionPlans: null, fractionalState: null, isInReverseTrial: null, fpDurationText: null, premiumGroupRole: null };
    const values = Object.values(GuildBoostSlotStore.boostSlots);
    let premiumGroupRole;
    obj.hasAvailableSlots = values.filter((isAvailable) => isAvailable.isAvailable()).length > 0;
    obj.hasFetchedSubscriptionPlans = hasFetchedSubscriptionPlans;
    obj.isFetchingSubscriptionPlans = SubscriptionPlanStore.isFetchingForPremiumSKUs();
    obj.isFetchingPaymentSources = BillingInfoStore.isPaymentSourceFetching;
    obj.shouldFetchSubscriptionPlans = flag;
    obj.fractionalState = fractionalState;
    obj.isInReverseTrial = isInReverseTrial;
    obj.fpDurationText = fpDurationText;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    obj.premiumGroupRole = premiumGroupRole;
    return obj;
  });
  const tmp4 = flag(13461);
  const items1 = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const tmpResult1 = require("initialize");
  const navigation = require("useNavigation").useNavigation();
  const tmpResult2 = require("useNavigation");
  obj = { navigation, externalManagementMessage: null };
  const externalManagementMessage = require("PremiumManagementUtils").getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  const tmpResult3 = require("PremiumManagementUtils");
  let tmp11 = null;
  if (tmpResult4.isMetaQuest()) {
    tmp11 = externalManagementMessage;
  }
  obj.externalManagementMessage = tmp11;
  const merged = Object.assign(stateFromStoresObject);
  return closure_14(UserSettingsPremiumGuildSubscriptions, obj);
};