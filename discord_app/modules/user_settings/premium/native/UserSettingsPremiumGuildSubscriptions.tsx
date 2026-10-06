// === Module 13324: UserSettingsPremiumGuildSubscriptions ===

// Module 13324 (UserSettingsPremiumGuildSubscriptions)
import intl3 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import user from "user" /* 1385 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import native from "native" /* 4595 */;
import Text_Text from "Text/Text" /* 4892 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5411 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6494 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6498 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6770 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 7679 */;
import GuildBoostSlotsInventoryDefault from "GuildBoostSlotsInventory" /* 13325 */;
import BoostingUnavailablePillDefault from "BoostingUnavailablePill" /* 13339 */;
import BoostingCountDownPillDefault from "BoostingCountDownPill" /* 13341 */;
import TopPattern from "TopPattern" /* 13343 */;
import GuildBoostingUpsellDefault from "GuildBoostingUpsell" /* 13347 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import BillingInfoStore from "BillingInfoStore" /* 4536 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6918 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4539 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import Constants from "Constants" /* 1085 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, dependencyMap, navigation, route;

let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ HelpdeskArticles: unpackModuleId, UserSettingsSections: closure_12 } = Constants);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { upsellSection: { position: "relative" }, background: { position: "absolute", width: "100%" }, scroller: obj2, subscriptionHeader: { paddingHorizontal: 16, paddingBottom: 32 }, blurb: { lineHeight: 18 }, blurbNotLast: { marginBottom: 8 }, boostingUnavailablePill: { marginHorizontal: 16, alignContent: "center" }, externalManagement: { marginTop: 8 } };
obj2 = { flex: 1, backgroundColor: LegacyTokens.DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
const authStore3 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class UserSettingsPremiumGuildSubscriptions extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { isOnCooldown: false };
    applyArgumentsResult.handleLearnMorePremium = function handleLearnMorePremium() {
      navigation = require.props.navigation;
      const routes = navigation.getState().routes;
      const found = routes.find((name) => name.name === constants.PREMIUM);
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(constants.PREMIUM);
      const obj2 = UserSettingsUtils;
      const obj3 = { destinationPane: constants.PREMIUM };
      const result = obj2.trackUserSettingsPaneViewed(obj3);
      if (null != found) {
        navigation.navigate(constants.PREMIUM, undefined, { pop: true });
      } else {
        navigation.push(constants.PREMIUM);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const self = this;
    if (!this.props.hasFetchedSlots) {
      const obj = actions_BoostingActionCreators;
      const guildBoostSlots = obj.fetchGuildBoostSlots();
    }
    const tmp4 = self.props.shouldFetchSubscriptionPlans && !self.props.isFetchingSubscriptionPlans;
    if (tmp4) {
      const obj2 = SubscriptionPlanActionCreators;
      const premiumSubscriptionPlans = obj2.fetchPremiumSubscriptionPlans();
    }
    if (!self.props.isFetchingPaymentSources) {
      const obj3 = actions_BillingActionCreators;
      const paymentSources = obj3.fetchPaymentSources();
    }
  }
  renderPremiumGuildSubscriptions() {
    let A4UTjH;
    let format;
    let intl;
    let items;
    let items1;
    let items2;
    let obj4;
    let obj5;
    const tmp = closure_16(this.context);
    const props = this.props;
    const externalManagementMessage = props.externalManagementMessage;
    let tmp3Result = null;
    if (props.hasSlots) {
      const Fragment = react.Fragment;
      const obj = { style: tmp.subscriptionHeader, children: items1 };
      const obj2 = { style: items, variant: "text-sm/medium", color: "interactive-text-default", children: intl.string(intl3.t.GwnFO5) };
      items = [, ];
      ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [authStore2(Text, obj2), , ];
      const obj3 = { style: tmp.blurb, variant: "text-sm/medium", color: "interactive-text-default", children: format(A4UTjH, obj4) };
      const Text2 = Text_Text.Text;
      const intl2 = intl3.intl;
      format = intl2.format;
      obj4 = { helpdeskArticle: obj5.getArticleURL(unpackModuleId.GUILD_SUBSCRIPTIONS) };
      A4UTjH = intl3.t.A4UTjH;
      obj5 = HelpdeskUtilsDefault;
      items1[1] = authStore2(Text2, obj3);
      let tmp6Result = null != externalManagementMessage;
      if (tmp6Result) {
        const obj6 = { style: tmp.externalManagement, variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
        tmp6Result = authStore2(Text_Text.Text, obj6);
      }
      const obj7 = { children: items2 };
      items1[2] = tmp6Result;
      items2 = [closure_15(React3, obj), authStore2(GuildBoostSlotsInventoryDefault, {})];
      tmp3Result = closure_15(Fragment, obj7);
    }
    return tmp3Result;
  }
  render() {
    let fpDurationText;
    let fractionalState;
    let hasAvailableSlots;
    let hasFetchedSubscriptionPlans;
    let isInReverseTrial;
    let items;
    let items1;
    let premiumGroupRole;
    let tmp5;
    const self = this;
    const tmp = closure_16(this.context);
    const props = this.props;
    ({ fractionalState, isInReverseTrial } = props);
    ({ hasFetchedSubscriptionPlans, hasAvailableSlots, fpDurationText, premiumGroupRole } = props);
    if (premiumGroupRole === user.PremiumSubscriptionGroupRole.MEMBER) {
      const obj2 = { style: tmp.boostingUnavailablePill };
      tmp5 = authStore2(BoostingUnavailablePillDefault, obj2);
    } else {
      tmp5 = null;
      if (fractionalState !== FractionalPremiumStates.NONE) {
        const obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
        tmp5 = authStore2(BoostingCountDownPillDefault, obj);
      }
    }
    const obj3 = { style: tmp.scroller, children: items };
    items = [tmp5, self.renderPremiumGuildSubscriptions(), ];
    const obj4 = { style: tmp.upsellSection, children: items1 };
    items1 = [, ];
    const obj5 = { style: tmp.background };
    items1[0] = authStore2(TopPattern.TopPattern, obj5);
    let tmp13Result = null;
    if (hasFetchedSubscriptionPlans) {
      const obj6 = { onLearnMorePremium: self.handleLearnMorePremium, fractionalState, isInReverseTrial, hasAvailableSlots };
      tmp13Result = authStore2(GuildBoostingUpsellDefault, obj6);
    }
    items1[1] = tmp13Result;
    items[2] = closure_15(React3, obj4);
    return closure_15(hasOwnProperty, obj3);
  }
}
const prototype = UserSettingsPremiumGuildSubscriptions.prototype;
UserSettingsPremiumGuildSubscriptions.contextType = native.ThemeContext;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let first;
  let fractionalState;
  let premiumTypeSubscription;
  let subscriptionPlansLoaded;
  let tmp10;
  let obj = subscriptionPlansLoaded(fractionalState[28]);
  const cResult = obj.c(18);
  route = route.route;
  const obj2 = subscriptionPlansLoaded(fractionalState[29]);
  subscriptionPlansLoaded = obj2.useSubscriptionPlansLoaded();
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
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { forceFetch: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp6 = flag(fractionalState[30])(first);
  fractionalState = tmp6.fractionalState;
  const endsAt = tmp6.endsAt;
  const tmpResult = subscriptionPlansLoaded(fractionalState[31]);
  const isInReverseTrial = tmpResult.useIsInReverseTrial();
  const tmp8 = flag(fractionalState[32]);
  const tmp8Result = tmp8(endsAt, subscriptionPlansLoaded(fractionalState[32]).CountDownMessageTypes.LONG_TIME_LEFT);
  const fpDurationText = tmp8Result;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
    cResult[1] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === tmp8Result) {
    if (cResult[3] === fractionalState) {
      if (cResult[4] === subscriptionPlansLoaded) {
        if (cResult[5] === isInReverseTrial) {
          let tmp15;
          let tmp18;
          let tmp17;
          let tmp22;
          let tmp24;
          if (cResult[6] === flag) {
            tmp15 = cResult[7];
          }
          const tmpResult6 = subscriptionPlansLoaded(fractionalState[33]);
          const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp10, tmp15);
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [SubscriptionStore];
            class I {
              constructor() {
                return premiumTypeSubscription.getPremiumTypeSubscription();
              }
            }
            cResult[8] = items1;
            cResult[9] = I;
            tmp18 = I;
            tmp17 = items1;
          } else {
            tmp17 = cResult[8];
            tmp18 = cResult[9];
          }
          const tmpResult7 = subscriptionPlansLoaded(fractionalState[33]);
          const stateFromStores = tmpResult7.useStateFromStores(tmp17, tmp18);
          const tmpResult8 = subscriptionPlansLoaded(fractionalState[34]);
          navigation = tmpResult8.useNavigation();
          if (cResult[10] !== stateFromStores) {
            const tmpResult9 = subscriptionPlansLoaded(fractionalState[35]);
            const externalManagementMessage = tmpResult9.getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
            class I {
              constructor() {
                return premiumTypeSubscription.getPremiumTypeSubscription();
              }
            }
            cResult[11] = externalManagementMessage;
            tmp22 = externalManagementMessage;
          } else {
            tmp22 = cResult[11];
          }
          if (cResult[12] !== tmp22) {
            let tmp25 = null;
            const tmpResult10 = subscriptionPlansLoaded(fractionalState[36]);
            if (tmpResult10.isMetaQuest()) {
              tmp25 = tmp22;
            }
            class I {
              constructor() {
                return premiumTypeSubscription.getPremiumTypeSubscription();
              }
            }
            cResult[12] = tmp22;
            cResult[13] = tmp25;
            tmp24 = tmp25;
          } else {
            tmp24 = cResult[13];
          }
          if (cResult[14] === navigation) {
            if (cResult[15] === stateFromStoresObject) {
              let tmp26;
              if (cResult[16] === tmp24) {
                tmp26 = cResult[17];
              }
              return tmp26;
            }
          }
          const obj4 = { navigation, externalManagementMessage: tmp24 };
          const merged = Object.assign(stateFromStoresObject);
          const tmp32 = closure_14(UserSettingsPremiumGuildSubscriptions, obj4);
          cResult[14] = navigation;
          cResult[15] = stateFromStoresObject;
          cResult[16] = tmp24;
          cResult[17] = tmp32;
          tmp26 = tmp32;
        }
      }
    }
  }
  const fn = function v() {
    let premiumGroupRole;
    let values;
    const obj = { hasFetchedSlots: GuildBoostSlotStore.hasFetched, hasSlots: Object.keys(GuildBoostSlotStore.boostSlots).length > 0, hasAvailableSlots: values.filter((isAvailable) => isAvailable.isAvailable()).length > 0, hasFetchedSubscriptionPlans: subscriptionPlansLoaded, isFetchingSubscriptionPlans: SubscriptionPlanStore.isFetchingForPremiumSKUs(), isFetchingPaymentSources: BillingInfoStore.isPaymentSourceFetching, shouldFetchSubscriptionPlans: flag, fractionalState, isInReverseTrial, fpDurationText, premiumGroupRole };
    values = Object.values(GuildBoostSlotStore.boostSlots);
    premiumGroupRole = undefined;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    return obj;
  };
  cResult[2] = tmp8Result;
  cResult[3] = fractionalState;
  cResult[4] = subscriptionPlansLoaded;
  cResult[5] = isInReverseTrial;
  cResult[6] = flag;
  cResult[7] = fn;
  tmp15 = fn;
}) : ((route) => {
  let c2;
  let endsAt;
  let fractionalState;
  let hasFetchedSubscriptionPlans;
  let premiumTypeSubscription;
  let tmp11;
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
  ({ fractionalState: c2, endsAt } = flag(6908)({ forceFetch: true }));
  flag(6908)({ forceFetch: true });
  const tmpResult = require("ReverseTrialUtils");
  isInReverseTrial = tmpResult.useIsInReverseTrial();
  const tmp4 = flag(13286);
  fpDurationText = tmp4(endsAt, tmp(13286).CountDownMessageTypes.LONG_TIME_LEFT);
  const items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
  const tmpResult6 = require("get initialized");
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(items, () => {
    let premiumGroupRole;
    let values;
    const obj = { hasFetchedSlots: GuildBoostSlotStore.hasFetched, hasSlots: Object.keys(GuildBoostSlotStore.boostSlots).length > 0, hasAvailableSlots: values.filter((isAvailable) => isAvailable.isAvailable()).length > 0, hasFetchedSubscriptionPlans, isFetchingSubscriptionPlans: SubscriptionPlanStore.isFetchingForPremiumSKUs(), isFetchingPaymentSources: BillingInfoStore.isPaymentSourceFetching, shouldFetchSubscriptionPlans: flag, fractionalState, isInReverseTrial, fpDurationText, premiumGroupRole };
    values = Object.values(GuildBoostSlotStore.boostSlots);
    premiumGroupRole = undefined;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      premiumGroupRole = currentUser.premiumGroupRole;
    }
    return obj;
  });
  const items1 = [SubscriptionStore];
  const tmpResult7 = require("get initialized");
  const stateFromStores = tmpResult7.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const tmpResult8 = require("useNavigation");
  navigation = tmpResult8.useNavigation();
  const obj2 = { navigation, externalManagementMessage: tmp11 };
  const tmpResult9 = require("PremiumManagementUtils");
  const externalManagementMessage = tmpResult9.getExternalManagementMessage(stateFromStores, { shouldAllowExternalManagement: true });
  tmp11 = null;
  const tmpResult10 = require("MetaQuestUtils");
  if (tmpResult10.isMetaQuest()) {
    tmp11 = externalManagementMessage;
  }
  const merged = Object.assign(stateFromStoresObject);
  return closure_14(UserSettingsPremiumGuildSubscriptions, obj2);
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx");

export default tmp6;