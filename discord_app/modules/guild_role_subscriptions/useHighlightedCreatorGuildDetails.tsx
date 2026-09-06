// === Module 17708: useHighlightedCreatorGuildDetails ===

// Module 17708 (useHighlightedCreatorGuildDetails)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useFetchHighlightedCreatorGuildDetailsDefault from "useFetchHighlightedCreatorGuildDetails" /* 17709 */;
import noop from "module_19" /* 19 */;

const MarketingURLs = fn(1074).MarketingURLs;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx");

export default function useHighlightedCreatorGuildDetails(id, arg1, size) {
  closure_0 = arg1;
  const tmp3 = useFetchHighlightedCreatorGuildDetailsDefault(id);
  ({ isLoading, highlightedCreatorDetails } = tmp3);
  let store_page;
  if (highlightedCreatorDetails != null) {
    store_page = highlightedCreatorDetails.store_page;
  }
  let obj = noop;
  let role_subscription;
  if (store_page != null) {
    role_subscription = store_page.role_subscription;
  }
  const items = [role_subscription];
  const memo = noop.useMemo(() => {
    let group_listings;
    if (store_page != null) {
      const role_subscription = tmp.role_subscription;
      if (role_subscription != null) {
        group_listings = role_subscription.group_listings;
      }
    }
    const set = new Set();
    if (group_listings != null) {
      let item = group_listings.forEach((subscription_listings) => {
        const prop = subscription_listings.subscription_listings;
        if (prop != null) {
          const item = prop.forEach((role_id) => {
            set.add(role_id.role_id);
          });
        }
      });
    }
    let benefit_emojis;
    if (store_page != null) {
      const role_subscription2 = tmp.role_subscription;
      if (role_subscription2 != null) {
        benefit_emojis = role_subscription2.benefit_emojis;
      }
    }
    let found;
    if (benefit_emojis != null) {
      found = benefit_emojis.filter((roles) => {
        roles = roles.roles;
        return roles.some((item) => set.has(item));
      });
    }
    return found;
  }, items);
  let icon_hash;
  if (store_page != null) {
    icon_hash = store_page.guild.icon_hash;
  }
  obj = { id, icon: icon_hash, size };
  const guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj);
  const items1 = [memo, arg1];
  let diff = null;
  const memo1 = obj.useMemo(() => {
    let substr = memo;
    if (null != memo) {
      substr = arr;
      if (arr.length > closure_0) {
        substr = arr.slice(0, tmp2);
      }
    }
    return substr;
  }, items1);
  if (null != memo) {
    diff = null;
    if (memo.length > arg1) {
      diff = memo.length - arg1;
    }
  }
  let slug;
  if (highlightedCreatorDetails != null) {
    slug = highlightedCreatorDetails.slug;
  }
  if (null != slug) {
    const result = MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(slug);
  }
  if (store_page != null) {
    const guild = store_page.guild;
    if (guild != null) {
      const name = guild.name;
    }
  }
  if (store_page != null) {
    role_subscription = store_page.role_subscription;
    if (role_subscription != null) {
      const subscriber_count = role_subscription.subscriber_count;
    }
  }
  let tmp13 = !isLoading;
  if (!isLoading) {
    tmp13 = null != name;
  }
  if (tmp13) {
    tmp13 = null != icon_hash;
  }
  if (tmp13) {
    tmp13 = null != guildIconURL;
  }
  if (tmp13) {
    obj = { hasAllImperativeDetails: tmp13, isLoading, details: null };
    const obj1 = { guildName: name, guildIcon: icon_hash, guildAvatarUrl: guildIconURL, storePageUrl: result, subscriberCount: subscriber_count, emojisToShow: memo1, notShownEmojiCount: diff };
    obj.details = obj1;
    let obj2 = obj;
  } else {
    obj2 = { hasAllImperativeDetails: tmp13, isLoading, error: tmp3.error };
  }
  return obj2;
};