// discord_app/modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import computeCanEveryoneInGuildSeeRoleSubscriptions from "../../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx";
import useShouldHideGuildPurchaseEntryPoints from "../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import useGuildEligibleForGuildProducts from "../../guild_products/GuildProductsEligibility.tsx";
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible.tsx";

const GuildFeatures = ME.GuildFeatures;
let result = obj132.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts.useGuildEligibleForGuildProducts(id);
  let tmpResult = computeCanEveryoneInGuildSeeRoleSubscriptions;
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
  const shouldHideGuildPurchaseEntryPoints = useShouldHideGuildPurchaseEntryPoints.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(closure_2, closure_3) {
  let id;
  if (user != null) {
    id = user.id;
  }
  const result = useGuildEligibleForGuildProducts.isGuildEligibleForGuildProducts(id);
  let id1;
  if (user != null) {
    id1 = user.id;
  }
  const result1 = computeCanEveryoneInGuildSeeRoleSubscriptions.areRoleSubscriptionsVisibleInGuild(id1, closure_3);
  return false;
};