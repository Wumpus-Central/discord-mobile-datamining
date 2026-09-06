// === Module 7262: useGuildShopVisibleInGuild ===

// Module 7262 (useGuildShopVisibleInGuild)
import Constants from "Constants" /* 1074 */;
import useRoleSubscriptionsVisibleInGuild from "useRoleSubscriptionsVisibleInGuild" /* 7250 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7253 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 7258 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 7263 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts(id);
  let tmpResult = useRoleSubscriptionsVisibleInGuild;
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = tmpResult.useRoleSubscriptionsVisibleInGuild(id1);
  tmpResult = useGuildShopPreviewVisible;
  const guildShopPreviewVisible = tmpResult.useGuildShopPreviewVisible(id);
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(id, unsafeMutableRoles) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = GuildProductsEligibility.isGuildEligibleForGuildProducts(id);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = useRoleSubscriptionsVisibleInGuild.areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};