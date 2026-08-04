// discord_app/modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { CreatorMonetizationRestrictions as closure_3 } from "CreatorMonetizationRestrictions";
import { GuildFeatures } from "ME";

const result = require("CreatorMonetizationRestrictions").fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx");

export const isRestrictedFromShowingGuildPurchaseEntryPoints = function isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions) {
  let hasItem = null != restrictions;
  if (hasItem) {
    hasItem = restrictions.includes(constants.NEW_PURCHASES_DISABLED);
  }
  return hasItem;
};
export const shouldHideGuildPurchaseEntryPoints = function shouldHideGuildPurchaseEntryPoints(guildId) {
  if (null == guildId) {
    return false;
  } else {
    const monetizationRestrictionsFetchState = store.getMonetizationRestrictionsFetchState(guildId);
    const monetizationRestrictions = store.getMonetizationRestrictions(guildId);
    const guild = store2.getGuild(guildId);
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
};
export const isRestrictedFromUpdatingCreatorMonetizationSettings = function isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray) {
  let hasItem = null != stateFromStoresArray;
  if (hasItem) {
    hasItem = stateFromStoresArray.includes(constants.SETTINGS_READ_ONLY);
  }
  return hasItem;
};
export const shouldRestrictUpdatingCreatorMonetizationSettings = function shouldRestrictUpdatingCreatorMonetizationSettings(id) {
  if (null == id) {
    return false;
  } else {
    const monetizationRestrictionsFetchState = store.getMonetizationRestrictionsFetchState(id);
    const monetizationRestrictions = store.getMonetizationRestrictions(id);
    const guild = store2.getGuild(id);
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
};
export const isRestrictedFromMonetizationReapplication = function isRestrictedFromMonetizationReapplication(stateFromStoresArray) {
  let hasItem = null != stateFromStoresArray;
  if (hasItem) {
    hasItem = stateFromStoresArray.includes(constants.REAPPLICATION_DISABLED);
  }
  return hasItem;
};