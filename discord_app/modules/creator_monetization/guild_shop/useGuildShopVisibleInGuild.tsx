// === Module 6775: useGuildShopVisibleInGuild ===

// Module 6775 (useGuildShopVisibleInGuild)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import useRoleSubscriptionsVisibleInGuild2 from "useRoleSubscriptionsVisibleInGuild" /* 6763 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6766 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 6771 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 6776 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const obj = react;
  obj.c(5);
  id = undefined;
  const useGuildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts;
  GuildProductsEligibility;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts(id);
  let id1;
  const useRoleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild2.useRoleSubscriptionsVisibleInGuild;
  useRoleSubscriptionsVisibleInGuild2;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild(id1);
  const tmpResult3 = useGuildShopPreviewVisible;
  const guildShopPreviewVisible = tmpResult3.useGuildShopPreviewVisible(id);
  let id2;
  const useShouldHideGuildPurchaseEntryPoints = CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints;
  CreatorMonetizationRestrictionsHooks;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
}) : ((id) => {
  id = undefined;
  const useGuildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts;
  GuildProductsEligibility;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts(id);
  let id1;
  const useRoleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild2.useRoleSubscriptionsVisibleInGuild;
  useRoleSubscriptionsVisibleInGuild2;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild(id1);
  const tmpResult3 = useGuildShopPreviewVisible;
  const guildShopPreviewVisible = tmpResult3.useGuildShopPreviewVisible(id);
  let id2;
  const useShouldHideGuildPurchaseEntryPoints = CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints;
  CreatorMonetizationRestrictionsHooks;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
});
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = tmp2;
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(id, unsafeMutableRoles) {
  id = undefined;
  const isGuildEligibleForGuildProducts = GuildProductsEligibility.isGuildEligibleForGuildProducts;
  GuildProductsEligibility;
  if (id != null) {
    id = id.id;
  }
  const result = isGuildEligibleForGuildProducts(id);
  let id1;
  const areRoleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild2.areRoleSubscriptionsVisibleInGuild;
  useRoleSubscriptionsVisibleInGuild2;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};