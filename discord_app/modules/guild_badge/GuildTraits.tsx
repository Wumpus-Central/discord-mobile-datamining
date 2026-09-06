// discord_app/modules/guild_badge/GuildTraits.tsx
import GuildRecordUtils from "../../utils/GuildRecordUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ GuildFeatures: c2, BoostedGuildTiers: c3 } = Constants);
const GuildVisibility = { PUBLIC: "PUBLIC", INVITE_ONLY: "INVITE_ONLY", APPLY_TO_JOIN: "APPLY_TO_JOIN" };
const result = size.fileFinishedImporting("modules/guild_badge/GuildTraits.tsx");

export { GuildVisibility };
export const getGuildTraits = function getGuildTraits(fromGuildProfileResult) {
  const set = new Set(fromGuildProfileResult.features);
  let APPLY_TO_JOIN = obj.INVITE_ONLY;
  if (set.has(constants.COMMUNITY)) {
    if (set.has(tmp2.DISCOVERABLE)) {
      APPLY_TO_JOIN = tmp.PUBLIC;
    }
    if (null == fromGuildProfileResult) {
      let num3 = 0;
      if (tmp5) {
        let num4 = GuildRecordUtils.isGuildRecord(fromGuildProfileResult)
          ? fromGuildProfileResult.premiumSubscriberCount
          : fromGuildProfileResult.premiumSubscriptionCount;
        if (num4 == null) {
          num4 = 0;
        }
        num3 = num4;
      }
      if (obj4.isGuildRecord(fromGuildProfileResult)) {
        let NONE = fromGuildProfileResult.premiumTier;
      } else {
        NONE = constants2.NONE;
      }
      obj = {
        verified: set.has(tmp2.VERIFIED),
        partnered: set.has(tmp2.PARTNERED),
        community: set.has(tmp2.COMMUNITY),
        staff: set.has(tmp2.INTERNAL_EMPLOYEE_ONLY),
        visibility: APPLY_TO_JOIN,
        premium: tmp5,
        premiumSubscriberCount: num3,
        premiumTier: NONE,
      };
      return obj;
    } else {
      if (obj2.isGuildRecord(fromGuildProfileResult)) {
        let tmp9 = fromGuildProfileResult.premiumSubscriberCount > 0;
        if (!tmp9) {
          tmp9 = fromGuildProfileResult.premiumTier > constants2.NONE;
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = null != fromGuildProfileResult.premiumSubscriptionCount;
        if (tmp8) {
          tmp8 = fromGuildProfileResult.premiumSubscriptionCount > 0;
        }
      }
      obj2 = GuildRecordUtils;
    }
  }
  if (tmp3) {
    APPLY_TO_JOIN = tmp.APPLY_TO_JOIN;
  }
};
export const isPremiumGuild = function isPremiumGuild(has) {
  let premiumTier = has;
  if (null == has) {
    return tmp;
  } else {
    if (obj.isGuildRecord(premiumTier)) {
      let tmp5 = premiumTier.premiumSubscriberCount > 0;
      if (!tmp5) {
        premiumTier = premiumTier.premiumTier;
        tmp5 = premiumTier > constants2.NONE;
      }
      let tmp4 = tmp5;
    } else {
      tmp4 = null != premiumTier.premiumSubscriptionCount;
      if (tmp4) {
        tmp4 = premiumTier.premiumSubscriptionCount > 0;
      }
    }
    obj = GuildRecordUtils;
  }
};
export const isDiscoverableGuild = function isDiscoverableGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    const _Set = Set;
    const set = new Set(features.features);
    hasItem = set.has(constants.DISCOVERABLE);
  }
  return hasItem;
};
