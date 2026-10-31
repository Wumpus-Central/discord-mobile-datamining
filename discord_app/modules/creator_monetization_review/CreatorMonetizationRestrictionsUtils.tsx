// === Module 4938: CreatorMonetizationRestrictionsUtils ===

// Module 4938 (CreatorMonetizationRestrictionsUtils)
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4939 */;
import GuildStore from "GuildStore" /* 4885 */;

const FetchState = fn(4939).FetchState;
const constants = fn(4940).CreatorMonetizationRestrictions;
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx");

export function isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions) {
  let hasItem = null != restrictions;
  if (hasItem) {
    hasItem = restrictions.includes(constants.NEW_PURCHASES_DISABLED);
  }
  return hasItem;
}
export function shouldHideGuildPurchaseEntryPoints(guildId) {
  if (null == guildId) {
    return false;
  } else {
    const monetizationRestrictionsFetchState = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(guildId);
    const monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(guildId);
    const guild = GuildStore.getGuild(guildId);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      let hasItem = null != monetizationRestrictions;
      if (hasItem) {
        hasItem = monetizationRestrictions.includes(constants.NEW_PURCHASES_DISABLED);
      }
      let flag = hasItem;
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
}
export function isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray) {
  let hasItem = null != stateFromStoresArray;
  if (hasItem) {
    hasItem = stateFromStoresArray.includes(constants.SETTINGS_READ_ONLY);
  }
  return hasItem;
}
export function shouldRestrictUpdatingCreatorMonetizationSettings(id) {
  if (null == id) {
    return false;
  } else {
    const monetizationRestrictionsFetchState = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id);
    const monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(id);
    const guild = GuildStore.getGuild(id);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      let hasItem = null != monetizationRestrictions;
      if (hasItem) {
        hasItem = monetizationRestrictions.includes(constants.SETTINGS_READ_ONLY);
      }
      let flag = hasItem;
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
}
export function isRestrictedFromMonetizationReapplication(stateFromStoresArray) {
  let hasItem = null != stateFromStoresArray;
  if (hasItem) {
    hasItem = stateFromStoresArray.includes(constants.REAPPLICATION_DISABLED);
  }
  return hasItem;
}