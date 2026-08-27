// === Module 6061: useGuildShopVisibleInGuild ===

// Module 6061 (useGuildShopVisibleInGuild)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import computeCanEveryoneInGuildSeeRoleSubscriptions from "computeCanEveryoneInGuildSeeRoleSubscriptions" /* 6049 */;
import useShouldHideGuildPurchaseEntryPoints from "useShouldHideGuildPurchaseEntryPoints" /* 6052 */;
import useGuildEligibleForGuildProducts from "useGuildEligibleForGuildProducts" /* 6057 */;

const GuildFeatures = ME.GuildFeatures;
let result = set.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts.useGuildEligibleForGuildProducts(id);
  let tmpResult = tmp(6049);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = tmpResult.useRoleSubscriptionsVisibleInGuild(id1);
  tmpResult = tmp(6062);
  const guildShopPreviewVisible = tmpResult.useGuildShopPreviewVisible(id);
  const obj = useGuildEligibleForGuildProducts;
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = useShouldHideGuildPurchaseEntryPoints.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
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