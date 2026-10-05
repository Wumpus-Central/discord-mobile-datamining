// discord_app/modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import PriceUtils from "../../../utils/PriceUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildStore_mod from "../../../stores/GuildStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function computeSubscriptionInfo(subscription) {
  let PAST_DUE;
  let hasActiveTrial;
  let status;
  let stringResult;
  subscription = subscription.subscription;
  let str = "";
  const obj = _modDef4461(subscription.currentPeriodEnd);
  const formatResult = obj.format("M/D/YY");
  if (null != subscription.price) {
    const obj2 = PriceUtils;
    str = obj2.formatPrice(subscription.price, subscription.currency);
  }
  const obj3 = _modDef4461(subscription.createdAt);
  const obj4 = {
    memberSince: obj3.format("M/D/YY"),
    nextRenewalDate: formatResult,
    nextRenewalLabel: stringResult,
    subscriptionPrice: str,
    isCancelled: subscription.status === SubscriptionStatusTypes.CANCELED,
    isPastDue: status === PAST_DUE,
    isTrial: hasActiveTrial,
  };
  status = subscription.status;
  PAST_DUE = SubscriptionStatusTypes.PAST_DUE;
  hasActiveTrial = subscription.hasActiveTrial;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (subscription.status === SubscriptionStatusTypes.CANCELED) {
    stringResult = string(t.UAfot2);
  } else {
    stringResult = string(t.CVjLcM);
  }
  return obj4;
}
let GuildStore = GuildStore_mod;
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (items) => {
      let closure_0;
      let closure_5;
      let fetchSubscriptionsSettings;
      let first;
      let stateFromStores1;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp18;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(26);
      if (cResult[0] !== items) {
        const tmpResult = tmp(stateFromStores1[10]);
        const roleSubscriptionPlanId = tmpResult.getRoleSubscriptionPlanId(items);
        cResult[0] = items;
        cResult[1] = roleSubscriptionPlanId;
        tmp4 = roleSubscriptionPlanId;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        items = [fetchSubscriptionsSettings];
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const fn = function p() {
          return GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0);
        };
        cResult[3] = tmp4;
        cResult[4] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      const tmpResult5 = tmp(stateFromStores1[11]);
      const stateFromStores = tmpResult5.useStateFromStores(tmp6, tmp8);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [fetchSubscriptionsSettings];
        cResult[5] = items1;
        tmp10 = items1;
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
        tmp12 = fn2;
      } else {
        tmp12 = cResult[7];
      }
      const tmpResult6 = tmp(stateFromStores1[11]);
      stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp12);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[8] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[8];
      }
      let guild_id;
      const tmp16 = cResult[9];
      if (stateFromStores1 != null) {
        guild_id = stateFromStores1.guild_id;
      }
      if (tmp16 !== guild_id) {
        let guild_id1;
        if (stateFromStores1 != null) {
          guild_id1 = stateFromStores1.guild_id;
        }
        const fn3 = function h() {
          let guild_id;
          const getGuild = GuildStore.getGuild;
          if (stateFromStores1 != null) {
            guild_id = stateFromStores1.guild_id;
          }
          return getGuild(guild_id);
        };
        cResult[9] = guild_id1;
        cResult[10] = fn3;
        tmp18 = fn3;
      } else {
        tmp18 = cResult[10];
      }
      const tmpResult7 = tmp(stateFromStores1[11]);
      const stateFromStores2 = tmpResult7.useStateFromStores(tmp14, tmp18);
      const tmp21 = stateFromStores2(first.useState(false), 2);
      first = tmp21[0];
      GuildStore = tmp21[1];
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
      const tmpResult8 = tmp(stateFromStores1[12]);
      fetchSubscriptionsSettings = tmpResult8.useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
      if (cResult[12] === first) {
        class P {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
      }
      class C {
        constructor() {
          const tmp =
            first &&
            null != stateFromStores2 &&
            null == GuildRoleSubscriptionsStore.getSubscriptionSettings(stateFromStores2.id);
          if (tmp) {
            fetchSubscriptionsSettings(stateFromStores2.id);
          }
        }
      }
      const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
      cResult[12] = first;
      cResult[13] = fetchSubscriptionsSettings;
      cResult[14] = stateFromStores2;
      cResult[15] = C;
      cResult[16] = items3;
    }
  : (subscription) => {
      let closure_0;
      let expanded;
      let fetchSubscriptionsSettings;
      let stateFromStores1;
      const obj = require("subscriptionUtils");
      _require = obj.getRoleSubscriptionPlanId(subscription);
      const items = [fetchSubscriptionsSettings];
      const obj2 = require("get initialized");
      const stateFromStores = obj2.useStateFromStores(items, () =>
        GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0),
      );
      const items1 = [fetchSubscriptionsSettings];
      const obj3 = require("get initialized");
      stateFromStores1 = obj3.useStateFromStores(items1, () => {
        let subscriptionGroupListingForSubscriptionListing = null;
        if (null != stateFromStores) {
          subscriptionGroupListingForSubscriptionListing =
            GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
        }
        return subscriptionGroupListingForSubscriptionListing;
      });
      const items2 = [closure_5];
      const obj4 = require("get initialized");
      const stateFromStores2 = obj4.useStateFromStores(items2, () => {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        return getGuild(guild_id);
      });
      const tmp4 = stateFromStores2(expanded.useState(false), 2);
      expanded = tmp4[0];
      closure_5 = tmp4[1];
      const obj5 = require("GuildRoleSubscriptionsHooks");
      fetchSubscriptionsSettings = obj5.useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
      const items3 = [expanded, stateFromStores2, fetchSubscriptionsSettings];
      const effect = expanded.useEffect(() => {
        const tmp =
          first &&
          null != stateFromStores2 &&
          null == GuildRoleSubscriptionsStore.getSubscriptionSettings(stateFromStores2.id);
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
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx",
);

export default tmp2;
