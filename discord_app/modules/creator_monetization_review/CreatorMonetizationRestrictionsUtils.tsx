// === Module 4501: CreatorMonetizationRestrictionsUtils ===

// Module 4501 (CreatorMonetizationRestrictionsUtils)
import Constants from "Constants" /* 1085 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4502 */;
import CreatorMonetizationReviewConstants from "CreatorMonetizationReviewConstants" /* 4503 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;

const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const constants = CreatorMonetizationReviewConstants.CreatorMonetizationRestrictions;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx");

export const isRestrictedFromShowingGuildPurchaseEntryPoints = function isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions) {
  const hasItem = null != restrictions && restrictions.includes(constants.NEW_PURCHASES_DISABLED);
  return hasItem;
};
export const shouldHideGuildPurchaseEntryPoints = function shouldHideGuildPurchaseEntryPoints(guildId) {
  if (null == guildId) {
    return false;
  } else {
    let flag;
    const monetizationRestrictionsFetchState = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(guildId);
    const monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(guildId);
    const guild = GuildStore.getGuild(guildId);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      const hasItem = null != monetizationRestrictions && monetizationRestrictions.includes(constants.NEW_PURCHASES_DISABLED);
      flag = hasItem;
    } else {
      flag = undefined;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (flag == null) {
        flag = true;
      }
    }
    return flag;
  }
};
export const isRestrictedFromUpdatingCreatorMonetizationSettings = function isRestrictedFromUpdatingCreatorMonetizationSettings(restrictions) {
  const hasItem = null != restrictions && restrictions.includes(constants.SETTINGS_READ_ONLY);
  return hasItem;
};
export const shouldRestrictUpdatingCreatorMonetizationSettings = function shouldRestrictUpdatingCreatorMonetizationSettings(id) {
  if (null == id) {
    return false;
  } else {
    let flag;
    const monetizationRestrictionsFetchState = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id);
    const monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(id);
    const guild = GuildStore.getGuild(id);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      const hasItem = null != monetizationRestrictions && monetizationRestrictions.includes(constants.SETTINGS_READ_ONLY);
      flag = hasItem;
    } else {
      flag = undefined;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (flag == null) {
        flag = true;
      }
    }
    return flag;
  }
};
export const isRestrictedFromMonetizationReapplication = function isRestrictedFromMonetizationReapplication(restrictions) {
  const hasItem = null != restrictions && restrictions.includes(constants.REAPPLICATION_DISABLED);
  return hasItem;
};