// === Module 17054: useHighlightedCreatorGuildDetails ===

// Module 17054 (useHighlightedCreatorGuildDetails)
import closure_2 from "noop" /* 19 */;
import { MarketingURLs } from "ME" /* 676 */;

let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx");

export default function useHighlightedCreatorGuildDetails(id, arg1, size) {
  importDefault = arg1;
  const tmp3 = importDefault(store_page[2])(id);
  ({ isLoading, highlightedCreatorDetails } = tmp3);
  store_page = undefined;
  if (highlightedCreatorDetails != null) {
    store_page = highlightedCreatorDetails.store_page;
  }
  let obj = memo;
  let role_subscription;
  if (store_page != null) {
    role_subscription = store_page.role_subscription;
  }
  const items = [role_subscription];
  memo = memo.useMemo(() => {
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
        return roles.some((arg0) => set.has(arg0));
      });
    }
    return found;
  }, items);
  let icon_hash;
  if (store_page != null) {
    icon_hash = store_page.guild.icon_hash;
  }
  obj = { id, icon: icon_hash, size };
  const guildIconURL = importDefault(store_page[3]).getGuildIconURL(obj);
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
    obj = { hasAllImperativeDetails: null, isLoading: null, details: null };
    obj[0] = tmp13;
    obj[1] = isLoading;
    obj1 = { guildName: null, guildIcon: null, guildAvatarUrl: null, storePageUrl: null, subscriberCount: null, emojisToShow: null, notShownEmojiCount: null };
    obj1[0] = name;
    obj1[1] = icon_hash;
    obj1[2] = guildIconURL;
    obj1[3] = result;
    obj1[4] = subscriber_count;
    obj1[5] = memo1;
    obj1[6] = diff;
    obj[2] = obj1;
    let obj2 = obj;
  } else {
    obj2 = { hasAllImperativeDetails: null, isLoading: null, error: null };
    obj2[0] = tmp13;
    obj2[1] = isLoading;
    obj2[2] = tmp3.error;
  }
  return obj2;
};