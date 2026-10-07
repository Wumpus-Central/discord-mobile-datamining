// discord_app/modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx
import util from "../../../../intl/index.native.tsx";
import user from "../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_BillingActionCreators from "../../../billing/actions/BillingActionCreators.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SubscriptionPlanActionCreators from "../../../../actions/SubscriptionPlanActionCreators.tsx";
import actions_BoostingActionCreators from "../../../../actions/BoostingActionCreators.tsx";
import GuildBoostSlotsInventoryDefault from "../../../premium/native/GuildBoostSlotsInventory.tsx";
import BoostingUnavailablePillDefault from "../../../premium/premium_group/native/BoostingUnavailablePill.tsx";
import BoostingCountDownPillDefault from "../../../premium/fractional/native/BoostingCountDownPill.tsx";
import TopPattern from "../../../../design/components/Illustration/native/redesign/generated/TopPattern.tsx";
import GuildBoostingUpsellDefault from "../../../../components_native/premium/GuildBoostingUpsell.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import BillingInfoStore from "../../../../stores/billing/BillingInfoStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ HelpdeskArticles: closure_11, UserSettingsSections: closure_12 } = Constants);
const FractionalPremiumStates = fn(1379).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  upsellSection: { position: "relative" },
  background: { position: "absolute", width: "100%" },
  scroller: { flex: 1, backgroundColor: fn(5627).DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 },
  subscriptionHeader: { paddingHorizontal: 16, paddingBottom: 32 },
  blurb: { lineHeight: 18 },
  blurbNotLast: { marginBottom: 8 },
  boostingUnavailablePill: { marginHorizontal: 16, alignContent: "center" },
  externalManagement: { marginTop: 8 },
};
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
    const obj2 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    const items = [,];
    ({ blurb: arr[0], blurbNotLast: arr[1] } = tmp);
    obj2.style = items;
    const intl = util.intl;
    obj2.children = intl.string(util.t.GwnFO5);
    const items1 = [state(Text_Text.Text, obj2), ,];
    const obj3 = { style: tmp.blurb, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    const intl2 = util.intl;
    const obj4 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.GUILD_SUBSCRIPTIONS) };
    obj3.children = intl2.format(util.t.A4UTjH, obj4);
    items1[1] = state(Text_Text.Text, obj3);
    let tmp6Result = null != externalManagementMessage;
    if (tmp6Result) {
      const obj6 = {
        style: tmp.externalManagement,
        variant: "text-sm/medium",
        color: "text-default",
        children: externalManagementMessage,
      };
      tmp6Result = state(Text_Text.Text, obj6);
    }
    const obj7 = { children: null };
    items1[2] = tmp6Result;
    obj.children = items1;
    const items2 = [closure_1_15(React4, obj), state(GuildBoostSlotsInventoryDefault, {})];
    obj7.children = items2;
    tmp3Result = closure_1_15(noop.Fragment, obj7);
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
    let tmp5 = state(BoostingUnavailablePillDefault, obj2);
  } else {
    tmp5 = null;
    if (fractionalState !== FractionalPremiumStates.NONE) {
      const obj = { fpDurationText, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp5 = state(BoostingCountDownPillDefault, obj);
    }
  }
  const obj3 = { style: tmp.scroller, children: null };
  const items = [tmp5, self.renderPremiumGuildSubscriptions()];
  const obj4 = { style: tmp.upsellSection, children: null };
  const items1 = [state(TopPattern.TopPattern, { style: tmp.background })];
  let tmp13Result = null;
  if (hasFetchedSubscriptionPlans) {
    const obj6 = {
      onLearnMorePremium: self.handleLearnMorePremium,
      fractionalState,
      isInReverseTrial,
      hasAvailableSlots,
    };
    tmp13Result = state(GuildBoostingUpsellDefault, obj6);
  }
  items1[1] = tmp13Result;
  obj4.children = items1;
  items[2] = closure_1_15(React4, obj4);
  obj3.children = items;
  return closure_1_15(hasOwnProperty, obj3);
};
UserSettingsPremiumGuildSubscriptions.contextType = fn(4595).ThemeContext;
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: fn(5627).DARK_TRANSPARENT_LIGHT_WHITE_500, marginTop: 16 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      const cResult = subscriptionPlansLoaded(fractionalState[28]).c(18);
      route = route.route;
      let obj = subscriptionPlansLoaded(fractionalState[28]);
      subscriptionPlansLoaded = subscriptionPlansLoaded(fractionalState[29]).useSubscriptionPlansLoaded();
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
        let first = obj3;
      } else {
        first = cResult[0];
      }
      const tmp6 = flag(fractionalState[30])(first);
      fractionalState = tmp6.fractionalState;
      const obj2 = subscriptionPlansLoaded(fractionalState[29]);
      const isInReverseTrial = subscriptionPlansLoaded(fractionalState[31]).useIsInReverseTrial();
      const tmpResult = subscriptionPlansLoaded(fractionalState[31]);
      const tmp8Result = flag(fractionalState[32])(
        tmp6.endsAt,
        subscriptionPlansLoaded(fractionalState[32]).CountDownMessageTypes.LONG_TIME_LEFT,
      );
      const fpDurationText = tmp8Result;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
        cResult[1] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === tmp8Result) {
        if (cResult[3] === fractionalState) {
          if (cResult[4] === subscriptionPlansLoaded) {
            if (cResult[5] === isInReverseTrial) {
              if (cResult[6] === flag) {
                let tmp15 = cResult[7];
              }
              const stateFromStoresObject = tmp(tmp2[33]).useStateFromStoresObject(tmp10, tmp15);
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [SubscriptionStore];
                class I {
                  constructor() {
                    return closure_1_10.getPremiumTypeSubscription();
                  }
                }
                cResult[8] = items1;
                cResult[9] = I;
                let tmp18 = I;
                let tmp17 = items1;
              } else {
                tmp17 = cResult[8];
                tmp18 = cResult[9];
              }
              const tmpResult6 = tmp(tmp2[33]);
              const stateFromStores = tmp(tmp2[33]).useStateFromStores(tmp17, tmp18);
              const tmpResult7 = tmp(tmp2[33]);
              const navigation = tmp(tmp2[34]).useNavigation();
              if (cResult[10] !== stateFromStores) {
                const externalManagementMessage = tmp(tmp2[35]).getExternalManagementMessage(stateFromStores, {
                  shouldAllowExternalManagement: true,
                });
                class I {
                  constructor() {
                    return closure_1_10.getPremiumTypeSubscription();
                  }
                }
                cResult[11] = externalManagementMessage;
                let tmp22 = externalManagementMessage;
                const tmpResult9 = tmp(tmp2[35]);
              } else {
                tmp22 = cResult[11];
              }
              if (cResult[12] !== tmp22) {
                let tmp25 = null;
                if (tmpResult10.isMetaQuest()) {
                  tmp25 = tmp22;
                }
                class I {
                  constructor() {
                    return closure_1_10.getPremiumTypeSubscription();
                  }
                }
                cResult[12] = tmp22;
                cResult[13] = tmp25;
                let tmp24 = tmp25;
                tmpResult10 = tmp(tmp2[36]);
              } else {
                tmp24 = cResult[13];
              }
              if (cResult[14] === navigation) {
                if (cResult[15] === stateFromStoresObject) {
                  if (cResult[16] === tmp24) {
                    let tmp26 = cResult[17];
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
              const tmpResult8 = tmp(tmp2[34]);
            }
          }
        }
      }
      const fn = function v() {
        const obj = {
          hasFetchedSlots: GuildBoostSlotStore.hasFetched,
          hasSlots: Object.keys(GuildBoostSlotStore.boostSlots).length > 0,
          hasAvailableSlots: null,
          hasFetchedSubscriptionPlans: null,
          isFetchingSubscriptionPlans: null,
          isFetchingPaymentSources: null,
          shouldFetchSubscriptionPlans: null,
          fractionalState: null,
          isInReverseTrial: null,
          fpDurationText: null,
          premiumGroupRole: null,
        };
        const values = Object.values(GuildBoostSlotStore.boostSlots);
        let premiumGroupRole;
        obj.hasAvailableSlots = values.filter((isAvailable) => isAvailable.isAvailable()).length > 0;
        obj.hasFetchedSubscriptionPlans = subscriptionPlansLoaded;
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
      };
      cResult[2] = tmp8Result;
      cResult[3] = fractionalState;
      cResult[4] = subscriptionPlansLoaded;
      cResult[5] = isInReverseTrial;
      cResult[6] = flag;
      cResult[7] = fn;
      tmp15 = fn;
      const tmp8 = flag(fractionalState[32]);
    }
  : (route) => {
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
      ({ fractionalState: c2, endsAt } = flag(6908)({ forceFetch: true }));
      const tmp3 = flag(6908)({ forceFetch: true });
      isInReverseTrial = require("ReverseTrialUtils").useIsInReverseTrial();
      const tmpResult = require("ReverseTrialUtils");
      fpDurationText = flag(13286)(endsAt, tmp(13286).CountDownMessageTypes.LONG_TIME_LEFT);
      const tmp4 = flag(13286);
      const items = [GuildBoostSlotStore, BillingInfoStore, SubscriptionPlanStore, UserStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
        const obj = {
          hasFetchedSlots: GuildBoostSlotStore.hasFetched,
          hasSlots: Object.keys(GuildBoostSlotStore.boostSlots).length > 0,
          hasAvailableSlots: null,
          hasFetchedSubscriptionPlans: null,
          isFetchingSubscriptionPlans: null,
          isFetchingPaymentSources: null,
          shouldFetchSubscriptionPlans: null,
          fractionalState: null,
          isInReverseTrial: null,
          fpDurationText: null,
          premiumGroupRole: null,
        };
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
      const stateFromStores = require("initialize").useStateFromStores(items1, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      const tmpResult7 = require("initialize");
      const navigation = require("useNavigation").useNavigation();
      const tmpResult8 = require("useNavigation");
      const obj2 = { navigation, externalManagementMessage: null };
      const externalManagementMessage = require("PremiumManagementUtils").getExternalManagementMessage(
        stateFromStores,
        { shouldAllowExternalManagement: true },
      );
      const tmpResult9 = require("PremiumManagementUtils");
      let tmp11 = null;
      if (tmpResult10.isMetaQuest()) {
        tmp11 = externalManagementMessage;
      }
      obj2.externalManagementMessage = tmp11;
      const merged = Object.assign(stateFromStoresObject);
      return closure_14(UserSettingsPremiumGuildSubscriptions, obj2);
    };
