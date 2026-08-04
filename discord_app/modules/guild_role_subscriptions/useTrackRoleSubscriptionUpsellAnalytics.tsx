// discord_app/modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx
import noop from "noop";
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx");

export default function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const _location = guildId.location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  let groupListingsFetchContext;
  let c5;
  let stateFromStoresArray;
  let analyticsLocations;
  let closure_8;
  groupListingsFetchContext = guildId(_location[3]).useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
  const tmp2 = null != groupListingId(_location[4])(groupListingId).activeSubscription;
  c5 = tmp2;
  let obj = guildId(_location[3]);
  let items = [groupListingsFetchContext];
  const items1 = [relevantSubscriptionListingIds];
  stateFromStoresArray = guildId(_location[5]).useStateFromStoresArray(items, () => {
    let items = relevantSubscriptionListingIds;
    if (relevantSubscriptionListingIds == null) {
      items = [];
    }
    return items.filter((editStateId) => {
      subscriptionListing = subscriptionListing.getSubscriptionListing(editStateId);
      let published;
      if (subscriptionListing != null) {
        published = subscriptionListing.published;
      }
      return true === published;
    });
  }, items1);
  const obj2 = guildId(_location[5]);
  const tmp4 = groupListingId(_location[6]);
  let lastRouteChangeSourceLocationStack = guildId(_location[7]).getLastRouteChangeSourceLocationStack();
  if (lastRouteChangeSourceLocationStack == null) {
    lastRouteChangeSourceLocationStack = [];
  }
  analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
  closure_8 = relevantSubscriptionListingIds.useRef(false);
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
      let obj = groupListingId(_location[8]);
      obj = { role_subscription_group_listing_id: null, role_subscription_listing_ids: null, is_premium_member: null, location_stack: null, location: null };
      obj[0] = groupListingId;
      obj[1] = stateFromStoresArray;
      obj[2] = _undefined;
      obj[3] = analyticsLocations;
      obj[4] = _location;
      const merged = Object.assign(guildId(_location[9]).collectGuildAnalyticsMetadata(guildId));
      obj.track(_undefined.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj);
      const obj3 = guildId(_location[9]);
    }
  }, items2);
};