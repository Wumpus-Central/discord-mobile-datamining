// discord_app/modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx",
);

export default function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const _location = guildId.location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  let analyticsLocations;
  const groupListingsFetchContext = guildId(_location[3]).useGroupListingsFetchContext(
    "useTrackRoleSubscriptionUpsellAnalytics",
  );
  const tmp2 = null != groupListingId(_location[4])(groupListingId).activeSubscription;
  const is_premium_member = tmp2;
  let obj = guildId(_location[3]);
  let items = [groupListingsFetchContext];
  const items1 = [relevantSubscriptionListingIds];
  const stateFromStoresArray = guildId(_location[5]).useStateFromStoresArray(
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
  const obj2 = guildId(_location[5]);
  const tmp4 = groupListingId(_location[6]);
  let lastRouteChangeSourceLocationStack = guildId(_location[7]).getLastRouteChangeSourceLocationStack();
  if (lastRouteChangeSourceLocationStack == null) {
    lastRouteChangeSourceLocationStack = [];
  }
  analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
  relevantSubscriptionListingIds.useRef(false);
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
      const obj = {
        role_subscription_group_listing_id: groupListingId,
        role_subscription_listing_ids: stateFromStoresArray,
        is_premium_member,
        location_stack: analyticsLocations,
        location: _location,
      };
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      obj.track(AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj);
    }
  }, items2);
}
