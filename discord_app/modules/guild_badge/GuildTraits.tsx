// discord_app/modules/guild_badge/GuildTraits.tsx
import set2 from "../../../_runtime/00002_set.js";
import fromGuildPropertiesWithAdditionalFields from "../../utils/GuildRecordUtils.tsx";
import ME from "../../Constants.tsx";

({ GuildFeatures: obj1, BoostedGuildTiers: c3 } = ME);
let obj = { PUBLIC: "PUBLIC", INVITE_ONLY: "INVITE_ONLY", APPLY_TO_JOIN: "APPLY_TO_JOIN" };
const result = set2.fileFinishedImporting("modules/guild_badge/GuildTraits.tsx");

export const GuildVisibility = obj;
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
        let num4 = fromGuildPropertiesWithAdditionalFields.isGuildRecord(fromGuildProfileResult)
          ? fromGuildProfileResult.premiumSubscriberCount
          : fromGuildProfileResult.premiumSubscriptionCount;
        if (num4 == null) {
          num4 = 0;
        }
        num3 = num4;
        const obj3 = fromGuildPropertiesWithAdditionalFields;
      }
      if (obj4.isGuildRecord(fromGuildProfileResult)) {
        let NONE = fromGuildProfileResult.premiumTier;
      } else {
        NONE = constants2.NONE;
      }
      obj = {
        verified: null,
        partnered: null,
        community: null,
        staff: null,
        visibility: null,
        premium: null,
        premiumSubscriberCount: null,
        premiumTier: null,
      };
      obj[0] = set.has(tmp2.VERIFIED);
      obj[1] = set.has(tmp2.PARTNERED);
      obj[2] = set.has(tmp2.COMMUNITY);
      obj[3] = set.has(tmp2.INTERNAL_EMPLOYEE_ONLY);
      obj[4] = APPLY_TO_JOIN;
      obj[5] = tmp5;
      obj[6] = num3;
      obj[7] = NONE;
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
      obj2 = fromGuildPropertiesWithAdditionalFields;
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
    obj = fromGuildPropertiesWithAdditionalFields;
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
