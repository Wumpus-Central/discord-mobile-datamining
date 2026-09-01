// discord_app/modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import computeCanEveryoneInGuildSeeRoleSubscriptions from "../../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx";
import useShouldHideGuildPurchaseEntryPoints from "../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import useGuildEligibleForGuildProducts from "../../guild_products/GuildProductsEligibility.tsx";

const GuildFeatures = ME.GuildFeatures;
let result = set.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts.useGuildEligibleForGuildProducts(id);
  let tmpResult = tmp(6097);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = tmpResult.useRoleSubscriptionsVisibleInGuild(id1);
  tmpResult = tmp(6110);
  const guildShopPreviewVisible = tmpResult.useGuildShopPreviewVisible(id);
  const obj = useGuildEligibleForGuildProducts;
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints =
    useShouldHideGuildPurchaseEntryPoints.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(closure_2, closure_3) {
  let id;
  if (closure_2 != null) {
    id = closure_2.id;
  }
  const result = useGuildEligibleForGuildProducts.isGuildEligibleForGuildProducts(id);
  const obj = useGuildEligibleForGuildProducts;
  const tmp = require;
  let id1;
  if (closure_2 != null) {
    id1 = closure_2.id;
  }
  const result1 = computeCanEveryoneInGuildSeeRoleSubscriptions.areRoleSubscriptionsVisibleInGuild(id1, closure_3);
  return false;
};
