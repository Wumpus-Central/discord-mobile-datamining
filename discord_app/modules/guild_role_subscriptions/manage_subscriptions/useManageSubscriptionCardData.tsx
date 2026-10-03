// discord_app/modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import PriceUtils from "../../../utils/PriceUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";

const require = globalThis.__r;

require = fn;
function computeSubscriptionInfo(subscription) {
  subscription = subscription.subscription;
  let str = "";
  const obj = _modDef4461(subscription.currentPeriodEnd);
  if (null != subscription.price) {
    str = PriceUtils.formatPrice(subscription.price, subscription.currency);
  }
  const formatResult = _modDef4461(subscription.currentPeriodEnd).format("M/D/YY");
  const obj4 = {
    memberSince: _modDef4461(subscription.createdAt).format("M/D/YY"),
    nextRenewalDate: formatResult,
    nextRenewalLabel: null,
    subscriptionPrice: null,
    isCancelled: null,
    isPastDue: null,
    isTrial: null,
  };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (subscription.status === SubscriptionStatusTypes.CANCELED) {
    let stringResult = string(t.UAfot2);
  } else {
    stringResult = string(t.CVjLcM);
  }
  obj4.nextRenewalLabel = stringResult;
  obj4.subscriptionPrice = str;
  obj4.isCancelled = subscription.status === SubscriptionStatusTypes.CANCELED;
  obj4.isPastDue = subscription.status === SubscriptionStatusTypes.PAST_DUE;
  obj4.isTrial = subscription.hasActiveTrial;
  return obj4;
}
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (items) => {
      const cResult = require("c").c(26);
      if (cResult[0] !== items) {
        const roleSubscriptionPlanId = tmp(tmp2[10]).getRoleSubscriptionPlanId(items);
        cResult[0] = items;
        cResult[1] = roleSubscriptionPlanId;
        let tmp4 = roleSubscriptionPlanId;
        const tmpResult = tmp(tmp2[10]);
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        items = [fetchSubscriptionsSettings];
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const fn = function p() {
          return GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0);
        };
        cResult[3] = tmp4;
        cResult[4] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp8);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [fetchSubscriptionsSettings];
        cResult[5] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== stateFromStores) {
        const fn2 = function _() {
          let subscriptionGroupListingForSubscriptionListing = null;
          if (null != stateFromStores) {
            subscriptionGroupListingForSubscriptionListing =
              GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
          }
          return subscriptionGroupListingForSubscriptionListing;
        };
        cResult[6] = stateFromStores;
        cResult[7] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[7];
      }
      const tmpResult5 = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp12);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[8] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[8];
      }
      let guild_id;
      if (stateFromStores1 != null) {
        guild_id = stateFromStores1.guild_id;
      }
      if (cResult[9] !== guild_id) {
        let guild_id1;
        if (stateFromStores1 != null) {
          guild_id1 = stateFromStores1.guild_id;
        }
        const fn3 = function h() {
          let guild_id;
          if (stateFromStores1 != null) {
            guild_id = stateFromStores1.guild_id;
          }
          return GuildStore.getGuild(guild_id);
        };
        cResult[9] = guild_id1;
        cResult[10] = fn3;
        let tmp17 = fn3;
      } else {
        tmp17 = cResult[10];
      }
      const tmpResult6 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp14, tmp17);
      const tmp20 = stateFromStores2(first.useState(false), 2);
      first = tmp20[0];
      GuildStore = tmp20[1];
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
        cResult[11] = P;
      } else {
        class P {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
      }
      const tmpResult7 = require("initialize");
      fetchSubscriptionsSettings =
        require("GuildRoleSubscriptionsHooks").useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
      if (cResult[12] === first) {
        class P {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
      }
      class C {
        constructor() {
          tmp = closure_4;
          if (closure_4) {
            tmp2 = closure_3;
            tmp3 = null;
            tmp = null != closure_3;
          }
          if (tmp) {
            tmp4 = closure_6;
            tmp5 = closure_3;
            tmp6 = null;
            tmp = null == closure_6.getSubscriptionSettings(closure_3.id);
          }
          if (tmp) {
            tmp7 = closure_6;
            tmp8 = closure_3;
            tmp9 = closure_6(closure_3.id);
          }
          return;
        }
      }
      const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
      cResult[12] = first;
      cResult[13] = fetchSubscriptionsSettings;
      cResult[14] = stateFromStores2;
      cResult[15] = C;
      cResult[16] = items3;
      const tmpResult8 = require("GuildRoleSubscriptionsHooks");
    }
  : (subscription) => {
      _require = require("subscriptionUtils").getRoleSubscriptionPlanId(subscription);
      const obj = require("subscriptionUtils");
      const items = [fetchSubscriptionsSettings];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0),
      );
      const obj2 = require("initialize");
      const items1 = [fetchSubscriptionsSettings];
      stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
        let subscriptionGroupListingForSubscriptionListing = null;
        if (null != stateFromStores) {
          subscriptionGroupListingForSubscriptionListing =
            GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
        }
        return subscriptionGroupListingForSubscriptionListing;
      });
      const obj3 = require("initialize");
      const items2 = [closure_5];
      const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
        let guild_id;
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        return GuildStore.getGuild(guild_id);
      });
      const tmp4 = stateFromStores2(expanded.useState(false), 2);
      expanded = tmp4[0];
      closure_5 = tmp4[1];
      const obj4 = require("initialize");
      fetchSubscriptionsSettings =
        require("GuildRoleSubscriptionsHooks").useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
      const items3 = [expanded, stateFromStores2, fetchSubscriptionsSettings];
      const effect = expanded.useEffect(() => {
        let tmp = first;
        if (first) {
          tmp = null != stateFromStores2;
        }
        if (tmp) {
          tmp = null == GuildRoleSubscriptionsStore.getSubscriptionSettings(stateFromStores2.id);
        }
        if (tmp) {
          fetchSubscriptionsSettings(stateFromStores2.id);
        }
      }, items3);
      let tmp7;
      if (null != stateFromStores) {
        const obj6 = { subscription };
        tmp7 = computeSubscriptionInfo(obj6);
      }
      return {
        guild: stateFromStores2,
        expanded,
        handleToggleExpanded() {
          return closure_5((arg0) => !arg0);
        },
        listing: stateFromStores,
        groupListing: stateFromStores1,
        subscriptionInfo: tmp7,
      };
    };
