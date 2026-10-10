// === Module 14192: subscriptionSettingsDeepLink ===

// Module 14192 (subscriptionSettingsDeepLink)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;

require = fn;
function openNitroHome() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
}
function openNitroManage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM_MANAGE_PLAN });
}
function openGuildManage() {
  openUserSettings.openUserSettings({ screen: constants2.GUILD_ROLE_SUBSCRIPTIONS });
}
function trackDeepLinkOpened(arg0) {
  let tmp;
  if (null != arg0) {
    ({ hasNitro: obj2.has_premium_subscription, hasGuild: obj2.has_guild_subscription } = arg0);
    tmp = { has_premium_subscription: null, has_guild_subscription: null };
    const obj3 = { has_premium_subscription: null, has_guild_subscription: null };
  }
  AnalyticsUtilsDefault.track(constants.MOBILE_SUBSCRIPTION_DEEP_LINK_OPENED, tmp);
}
let closure_12 = async function _openSubscriptionSettingsFromDeepLink() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          dependencyMap = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          if (!SubscriptionStore.hasFetchedSubscriptions()) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: require("actions/BillingActionCreators").fetchSubscriptions(), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_130_11();
        closure_130_8();
        c5 = 3;
        return { value: "IconComponent", done: "+51" };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        c3 = 0;
      }
      closure_129_0 = null != closure_130_4.getPremiumTypeSubscription();
      const activeGuildSubscriptions = closure_130_4.getActiveGuildSubscriptions();
      let length = activeGuildSubscriptions;
      if (activeGuildSubscriptions == null) {
        length = [];
      }
      closure_129_1 = length.length > 0;
      const obj6 = { hasNitro: closure_129_0, hasGuild: closure_129_1 };
      closure_130_11(obj6);
      if (closure_129_0) {
        if (closure_129_1) {
          (function showSubscriptionPicker() {
            closure_0 = closure_0(5056).default;
            const obj = { key, hasIcons: false, header: null, options: null };
            const obj2 = { title: null, onClose: null };
            const intl = closure_0(1126).intl;
            obj2.title = intl.string(closure_0(1126).t["z5YcJ+"]);
            obj2.onClose = function onClose() {
              closure_0.hideActionSheet(key);
            };
            obj.header = obj2;
            const obj3 = { label: null, onPress: null };
            const intl2 = closure_0(1126).intl;
            obj3.label = intl2.string(closure_0(1126).t["8jmdON"]);
            obj3.onPress = onPress;
            const items = [obj3, ];
            const obj4 = { label: null, onPress: null };
            const intl3 = closure_0(1126).intl;
            obj4.label = intl3.string(closure_0(1126).t["KzCF/6"]);
            obj4.onPress = onPress2;
            items[1] = obj4;
            obj.options = items;
            const result = closure_0(14193).showSimpleActionSheet(obj);
          })();
        }
        c5 = 3;
        closure_130_9();
      }
      if (closure_129_1) {
        closure_130_10();
      } else if (!closure_129_0) {
        closure_130_8();
      }
    } catch (tmp42) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp42;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
let c7 = "subscription-settings-deep-link";
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/native/subscriptionSettingsDeepLink.tsx");

export const openSubscriptionSettingsFromDeepLink = function openSubscriptionSettingsFromDeepLink() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};