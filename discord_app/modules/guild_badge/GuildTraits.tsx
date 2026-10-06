// === Module 8430: GuildTraits ===

// Module 8430 (GuildTraits)
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let set;

let c2;
let c3;
({ GuildFeatures: c2, BoostedGuildTiers: c3 } = Constants);
const GuildVisibility = { PUBLIC: "PUBLIC", INVITE_ONLY: "INVITE_ONLY", APPLY_TO_JOIN: "APPLY_TO_JOIN" };
const result = size.fileFinishedImporting("modules/guild_badge/GuildTraits.tsx");

export { GuildVisibility };
export const getGuildTraits = function getGuildTraits(fromGuildProfileResult) {
  let obj;
  set = new Set(fromGuildProfileResult.features);
  let APPLY_TO_JOIN = obj.INVITE_ONLY;
  if (set.has(constants.COMMUNITY)) {
    let NONE;
    if (set.has(constants.DISCOVERABLE)) {
      APPLY_TO_JOIN = tmp.PUBLIC;
    }
    let tmp5 = null != fromGuildProfileResult;
    if (tmp5) {
      let tmp8;
      const obj2 = GuildRecordUtils;
      if (obj2.isGuildRecord(fromGuildProfileResult)) {
        tmp8 = fromGuildProfileResult.premiumSubscriberCount > 0 || fromGuildProfileResult.premiumTier > constants2.NONE;
        const tmp9 = fromGuildProfileResult.premiumSubscriberCount > 0 || fromGuildProfileResult.premiumTier > constants2.NONE;
      } else {
        tmp8 = null != fromGuildProfileResult.premiumSubscriptionCount && fromGuildProfileResult.premiumSubscriptionCount > 0;
      }
      tmp5 = tmp8;
    }
    let num3 = 0;
    if (tmp5) {
      const obj3 = GuildRecordUtils;
      let num4 = obj3.isGuildRecord(fromGuildProfileResult) ? fromGuildProfileResult.premiumSubscriberCount : fromGuildProfileResult.premiumSubscriptionCount;
      if (num4 == null) {
        num4 = 0;
      }
      num3 = num4;
    }
    const obj4 = GuildRecordUtils;
    if (obj4.isGuildRecord(fromGuildProfileResult)) {
      NONE = fromGuildProfileResult.premiumTier;
    } else {
      NONE = constants2.NONE;
    }
    obj = { verified: set.has(constants.VERIFIED), partnered: set.has(constants.PARTNERED), community: set.has(constants.COMMUNITY), staff: set.has(constants.INTERNAL_EMPLOYEE_ONLY), visibility: APPLY_TO_JOIN, premium: tmp5, premiumSubscriberCount: num3, premiumTier: NONE };
    return obj;
  }
  const tmp3 = set.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL) && set.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  if (tmp3) {
    APPLY_TO_JOIN = tmp.APPLY_TO_JOIN;
  }
};
export const isPremiumGuild = function isPremiumGuild(premiumSubscriberCount) {
  let tmp = null != premiumSubscriberCount;
  if (tmp) {
    let tmp4;
    const obj = GuildRecordUtils;
    if (obj.isGuildRecord(premiumSubscriberCount)) {
      tmp4 = premiumSubscriberCount.premiumSubscriberCount > 0 || premiumSubscriberCount.premiumTier > constants2.NONE;
      const tmp5 = premiumSubscriberCount.premiumSubscriberCount > 0 || premiumSubscriberCount.premiumTier > constants2.NONE;
    } else {
      tmp4 = null != premiumSubscriberCount.premiumSubscriptionCount && premiumSubscriberCount.premiumSubscriptionCount > 0;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const isDiscoverableGuild = function isDiscoverableGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(features.features);
    hasItem = set.has(constants.DISCOVERABLE);
  }
  return hasItem;
};