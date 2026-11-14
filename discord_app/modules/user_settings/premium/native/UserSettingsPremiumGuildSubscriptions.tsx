// === Module 15373: UserSettingsPremiumGuildSubscriptions ===

// Module 15373 (UserSettingsPremiumGuildSubscriptions)
import util from "util" /* 1113 */;
import user from "user" /* 1401 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import Text_Text from "Text/Text" /* 5929 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6767 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7272 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7809 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7813 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 9238 */;
import GuildBoostSlotsInventoryDefault from "GuildBoostSlotsInventory" /* 15374 */;
import BoostingUnavailablePillDefault from "BoostingUnavailablePill" /* 15388 */;
import BoostingCountDownPillDefault from "BoostingCountDownPill" /* 15390 */;
import TopPattern from "TopPattern" /* 15392 */;
import GuildBoostingUpsellDefault from "GuildBoostingUpsell" /* 15396 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import BillingInfoStore from "BillingInfoStore" /* 2175 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 9236 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2178 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ HelpdeskArticles: closure_11, UserSettingsSections: closure_12 } = Constants);
const FractionalPremiumStates = fn(1390).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { upsellSection: { position: "relative" }, background: { position: "absolute", width: "100%" }, scroller: { flex: 1, backgroundColor: fn(6961).DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 }, subscriptionHeader: { paddingHorizontal: 16, paddingBottom: 32 }, blurb: { lineHeight: 18 }, blurbNotLast: { marginBottom: 8 }, boostingUnavailablePill: { marginHorizontal: 16, alignContent: "center" }, externalManagement: { marginTop: 8 } };
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
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
      UserSettingsModalActionCreatorsDefault.setSection(constants2.PREMIUM);
      const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants2.PREMIUM });
      if (null != found) {
        navigation.navigate(constants2.PREMIUM, undefined, { pop: true });
      } else {
        navigation.push(constants2.PREMIUM);
      }
      const obj3 = { destinationPane: constants2.PREMIUM };
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsPremiumGuildSubscriptions.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (!this.props.hasFetchedSlots) {
    const guildBoostSlots = actions_BoostingActionCreators.fetchGuildBoostSlots();
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
    const obj = { style: tmp.subscriptionHeader, children: null };
    const obj2 = { style: null, variant: "body-sm/medium", color: "interactive-text-default", children: null };
    items = [, ];
    ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
    obj2.style = items;
    const intl = util.intl;
    obj2.children = intl.string(util.t.GwnFO5);
    const items1 = [gesture(Text_Text.Text, obj2), , ];
    const obj3 = { style: tmp.blurb, variant: "body-sm/medium", color: "interactive-text-default", children: null };
    const intl2 = util.intl;
    const obj4 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.GUILD_SUBSCRIPTIONS) };
    obj3.children = intl2.format(util.t.A4UTjH, obj4);
    items1[1] = gesture(Text_Text.Text, obj3);
    let tmp6Result = null != externalManagementMessage;
    if (tmp6Result) {
      const obj6 = { style: tmp.externalManagement, variant: "body-sm/medium", color: "text-default", children: externalManagementMessage };
      tmp6Result = gesture(Text_Text.Text, obj6);
    }
    const obj7 = { children: null };
    items1[2] = tmp6Result;
    obj.children = items1;
    const items2 = [colors(React4, obj), gesture(GuildBoostSlotsInventoryDefault, {})];
    obj7.children = items2;
    tmp3Result = colors(noop.Fragment, obj7);
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
    const obj2 = { style: tmp.boostingUnavailablePill };
    let tmp5 = gesture(BoostingUnavailablePillDefault, obj2);
  } else {
    tmp5 = null;
    if (fractionalState !== FractionalPremiumStates.NONE) {
      const obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp5 = gesture(BoostingCountDownPillDefault, obj);
    }
  }
  const obj3 = { style: tmp.scroller, children: null };
  items = [tmp5, self.renderPremiumGuildSubscriptions(), ];
  const obj4 = { style: tmp.upsellSection, children: null };
  const items1 = [gesture(TopPattern.TopPattern, { style: tmp.background }), ];
  let tmp13Result = null;
  if (hasFetchedSubscriptionPlans) {
    const obj6 = { onLearnMorePremium: self.handleLearnMorePremium, fractionalState, isInReverseTrial, hasAvailableSlots };
    tmp13Result = gesture(GuildBoostingUpsellDefault, obj6);
  }
  items1[1] = tmp13Result;
  obj4.children = items1;
  items[2] = colors(React4, obj4);
  obj3.children = items;
  return colors(hasOwnProperty, obj3);
};
UserSettingsPremiumGuildSubscriptions.contextType = fn(5377).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default function ConnectedUserSettingsPremiumGuildSubscriptions(route) {
  route = route.route;
  _require = undefined;
  dependencyMap = undefined;
  let isInReverseTrial;
  let fpDurationText;
  _require = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
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
  let obj = require("useSubscriptionPlansLoaded");
  ({ fractionalState: c2, endsAt } = flag(8529)({ forceFetch: true }));
  const tmp3 = flag(8529)({ forceFetch: true });
  isInReverseTrial = require("ReverseTrialUtils").useIsInReverseTrial();
  const tmpResult = require("ReverseTrialUtils");
  fpDurationText = flag(15328)(endsAt, tmp(15328).CountDownMessageTypes.LONG_TIME_LEFT);
  const tmp4 = flag(15328);
  items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
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
  const tmpResult6 = require("initialize");
  const items1 = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const tmpResult7 = require("initialize");
  const navigation = require("useNavigation").useNavigation();
  const tmpResult8 = require("useNavigation");
  const obj2 = { navigation, externalManagementMessage: null };
  const externalManagementMessage = require("PremiumManagementUtils").getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  const tmpResult9 = require("PremiumManagementUtils");
  let tmp11 = null;
  if (tmpResult10.isMetaQuest()) {
    tmp11 = externalManagementMessage;
  }
  obj2.externalManagementMessage = tmp11;
  const merged = Object.assign(stateFromStoresObject);
  return closure_14(UserSettingsPremiumGuildSubscriptions, obj2);
};