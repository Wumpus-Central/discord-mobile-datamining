// discord_app/modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx
import Constants from "../../../Constants.tsx";
import useRoleSubscriptionsVisibleInGuild from "../../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx";
import CreatorMonetizationRestrictionsHooks from "../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import GuildProductsEligibility from "../../guild_products/GuildProductsEligibility.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts(id);
  let tmpResult = tmp(7250);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = tmpResult.useRoleSubscriptionsVisibleInGuild(id1);
  tmpResult = tmp(7263);
  const guildShopPreviewVisible = tmpResult.useGuildShopPreviewVisible(id);
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints =
    CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(id, arg1) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = GuildProductsEligibility.isGuildEligibleForGuildProducts(id);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = useRoleSubscriptionsVisibleInGuild.areRoleSubscriptionsVisibleInGuild(id1, arg1);
  return false;
};
