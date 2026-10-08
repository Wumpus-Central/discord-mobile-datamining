// === Module 16787: useTrackRoleSubscriptionUpsellAnalytics ===

// Module 16787 (useTrackRoleSubscriptionUpsellAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4700 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  const cResult = guildId(_location[4]).c(14);
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  _location = guildId.location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  let obj = guildId(_location[4]);
  const groupListingsFetchContext = guildId(_location[5]).useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
  const tmp6 = null != groupListingId(_location[6])(groupListingId).activeSubscription;
  is_premium_member = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [groupListingsFetchContext];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== relevantSubscriptionListingIds) {
    const fn = function c() {
      let items = relevantSubscriptionListingIds;
      if (relevantSubscriptionListingIds == null) {
        items = [];
      }
      return items.filter((item) => {
        subscriptionListing = subscriptionListing.getSubscriptionListing(item);
        let published;
        if (subscriptionListing != null) {
          published = subscriptionListing.published;
        }
        return true === published;
      });
    };
    const items1 = [relevantSubscriptionListingIds];
    cResult[1] = relevantSubscriptionListingIds;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let obj2 = guildId(_location[5]);
  const tmp5 = groupListingId;
  const stateFromStoresArray = guildId(_location[7]).useStateFromStoresArray(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let lastRouteChangeSourceLocationStack = tmp(tmp2[8]).getLastRouteChangeSourceLocationStack();
    if (lastRouteChangeSourceLocationStack == null) {
      lastRouteChangeSourceLocationStack = [];
    }
    cResult[4] = lastRouteChangeSourceLocationStack;
    let tmp12 = lastRouteChangeSourceLocationStack;
    const tmpResult2 = tmp(tmp2[8]);
  } else {
    tmp12 = cResult[4];
  }
  const analyticsLocations = tmp5(tmp2[9])(tmp12).analyticsLocations;
  relevantSubscriptionListingIds.useRef(false);
  if (cResult[5] === analyticsLocations) {
    if (cResult[6] === groupListingId) {
      if (cResult[7] === guildId) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === stateFromStoresArray) {
            if (cResult[10] === groupListingsFetchContext) {
              if (cResult[11] === _location) {
                let tmp13 = cResult[12];
                let tmp14 = cResult[13];
              }
              const effect = relevantSubscriptionListingIds.useEffect(tmp13, tmp14);
            }
          }
        }
      }
    }
  }
  class R {
    constructor() {
      tmp = closure_4;
      if (closure_4) {
        tmp2 = groupListingId;
        tmp3 = null;
        tmp = null != groupListingId;
      }
      if (tmp) {
        tmp4 = closure_6;
        tmp5 = null;
        tmp = null != closure_6;
      }
      if (tmp) {
        tmp6 = closure_8;
        tmp = !closure_8.current;
      }
      if (tmp) {
        tmp7 = closure_8;
        flag = true;
        closure_8.current = true;
        tmp8 = closure_1;
        tmp9 = closure_2;
        obj = closure_1(closure_2[10]);
        tmp10 = AnalyticEvents;
        obj1 = { role_subscription_group_listing_id: null, role_subscription_listing_ids: null, is_premium_member: null, location_stack: null, location: null };
        tmp11 = groupListingId;
        obj1.role_subscription_group_listing_id = groupListingId;
        tmp12 = closure_6;
        obj1.role_subscription_listing_ids = closure_6;
        tmp13 = closure_5;
        obj1.is_premium_member = closure_5;
        tmp14 = analyticsLocations;
        obj1.location_stack = analyticsLocations;
        tmp15 = location;
        obj1.location = location;
        tmp16 = closure_0;
        obj3 = closure_0(closure_2[11]);
        tmp17 = guildId;
        tmp18 = obj1;
        merged = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
        trackResult = obj.track(AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj1);
      }
      return;
    }
  }
  const items2 = [guildId, groupListingId, groupListingsFetchContext, _location, stateFromStoresArray, tmp6, analyticsLocations];
  cResult[5] = analyticsLocations;
  cResult[6] = groupListingId;
  cResult[7] = guildId;
  cResult[8] = tmp6;
  cResult[9] = stateFromStoresArray;
  cResult[10] = groupListingsFetchContext;
  cResult[11] = _location;
  cResult[12] = R;
  cResult[13] = items2;
  tmp14 = items2;
  tmp13 = R;
}) : (function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const _location = guildId.location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  let analyticsLocations;
  const groupListingsFetchContext = guildId(_location[5]).useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
  const tmp2 = null != groupListingId(_location[6])(groupListingId).activeSubscription;
  is_premium_member = tmp2;
  let obj = guildId(_location[5]);
  let items = [groupListingsFetchContext];
  const items1 = [relevantSubscriptionListingIds];
  const stateFromStoresArray = guildId(_location[7]).useStateFromStoresArray(items, () => {
    let items = relevantSubscriptionListingIds;
    if (relevantSubscriptionListingIds == null) {
      items = [];
    }
    return items.filter((item) => {
      subscriptionListing = subscriptionListing.getSubscriptionListing(item);
      let published;
      if (subscriptionListing != null) {
        published = subscriptionListing.published;
      }
      return true === published;
    });
  }, items1);
  let obj2 = guildId(_location[7]);
  const tmp4 = groupListingId(_location[9]);
  let lastRouteChangeSourceLocationStack = guildId(_location[8]).getLastRouteChangeSourceLocationStack();
  if (lastRouteChangeSourceLocationStack == null) {
    lastRouteChangeSourceLocationStack = [];
  }
  analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
  relevantSubscriptionListingIds.useRef(false);
  const items2 = [guildId, groupListingId, groupListingsFetchContext, _location, stateFromStoresArray, tmp2, analyticsLocations];
  const effect = relevantSubscriptionListingIds.useEffect(() => {
    let tmp = groupListingsFetchContext;
    if (groupListingsFetchContext) {
      tmp = null != groupListingId;
    }
    if (tmp) {
      tmp = null != stateFromStoresArray;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const obj2 = { role_subscription_group_listing_id: groupListingId, role_subscription_listing_ids: stateFromStoresArray, is_premium_member, location_stack: analyticsLocations, location: _location };
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.track(AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj2);
    }
  }, items2);
});