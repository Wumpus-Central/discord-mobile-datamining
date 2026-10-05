// discord_app/modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import react from "../../../_runtime/00019_react.js";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let guildId, is_premium_member, ref, subscriptionListing;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let _location;
      let first;
      let tmp10;
      let tmp12;
      let tmp9;
      let tmp = guildId;
      let obj = guildId(_location[4]);
      const cResult = obj.c(14);
      guildId = guildId.guildId;
      const groupListingId = guildId.groupListingId;
      _location = guildId.location;
      const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
      let obj2 = guildId(_location[5]);
      const groupListingsFetchContext = obj2.useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
      const tmp6 = null != groupListingId(_location[6])(groupListingId).activeSubscription;
      is_premium_member = tmp6;
      const tmp5 = groupListingId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [groupListingsFetchContext];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== relevantSubscriptionListingIds) {
        const fn = function l() {
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
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(_location[7]);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult2 = tmp(_location[8]);
        let lastRouteChangeSourceLocationStack = tmpResult2.getLastRouteChangeSourceLocationStack();
        if (lastRouteChangeSourceLocationStack == null) {
          lastRouteChangeSourceLocationStack = [];
        }
        cResult[4] = lastRouteChangeSourceLocationStack;
        tmp12 = lastRouteChangeSourceLocationStack;
      } else {
        tmp12 = cResult[4];
      }
      const analyticsLocations = tmp5(tmp2[9])(tmp12).analyticsLocations;
      ref = relevantSubscriptionListingIds.useRef(false);
      const obj5 = relevantSubscriptionListingIds;
      if (cResult[5] === analyticsLocations) {
        if (cResult[6] === groupListingId) {
          if (cResult[7] === guildId) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === stateFromStoresArray) {
                if (cResult[10] === groupListingsFetchContext) {
                  let tmp13;
                  let tmp14;
                  if (cResult[11] === _location) {
                    tmp13 = cResult[12];
                    tmp14 = cResult[13];
                  }
                  const effect = obj5.useEffect(tmp13, tmp14);
                }
              }
            }
          }
        }
      }
      class R {
        constructor() {
          const tmp =
            groupListingsFetchContext && null != groupListingId && null != stateFromStoresArray && !ref.current;
          if (tmp) {
            ref.current = true;
            const obj = {
              role_subscription_group_listing_id: groupListingId,
              role_subscription_listing_ids: stateFromStoresArray,
              is_premium_member,
              location_stack: analyticsLocations,
              location: _location,
            };
            const track = AnalyticsUtilsDefault.track;
            const ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED =
              AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED;
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj);
          }
        }
      }
      const items2 = [
        guildId,
        groupListingId,
        groupListingsFetchContext,
        _location,
        stateFromStoresArray,
        tmp6,
        analyticsLocations,
      ];
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
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const groupListingId = guildId.groupListingId;
      const _location = guildId.location;
      const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
      let analyticsLocations;
      ref = undefined;
      let obj = guildId(_location[5]);
      const groupListingsFetchContext = obj.useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
      const tmp2 = null != groupListingId(_location[6])(groupListingId).activeSubscription;
      is_premium_member = tmp2;
      let obj2 = guildId(_location[7]);
      let items = [groupListingsFetchContext];
      const items1 = [relevantSubscriptionListingIds];
      const stateFromStoresArray = obj2.useStateFromStoresArray(
        items,
        () => {
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
        },
        items1,
      );
      const tmp4 = groupListingId(_location[9]);
      const obj3 = guildId(_location[8]);
      let lastRouteChangeSourceLocationStack = obj3.getLastRouteChangeSourceLocationStack();
      if (lastRouteChangeSourceLocationStack == null) {
        lastRouteChangeSourceLocationStack = [];
      }
      analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
      ref = relevantSubscriptionListingIds.useRef(false);
      const items2 = [
        guildId,
        groupListingId,
        groupListingsFetchContext,
        _location,
        stateFromStoresArray,
        tmp2,
        analyticsLocations,
      ];
      const effect = relevantSubscriptionListingIds.useEffect(() => {
        const tmp = groupListingsFetchContext && null != groupListingId && null != stateFromStoresArray && !ref.current;
        if (tmp) {
          ref.current = true;
          const obj = {
            role_subscription_group_listing_id: groupListingId,
            role_subscription_listing_ids: stateFromStoresArray,
            is_premium_member,
            location_stack: analyticsLocations,
            location: _location,
          };
          const track = AnalyticsUtilsDefault.track;
          const ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED =
            AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED;
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
          track(ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj);
        }
      }, items2);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx",
);

export default tmp2;
