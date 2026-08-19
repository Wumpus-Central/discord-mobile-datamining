// === Module 7228: useGuildShopVisibleInGuild ===

// Module 7228 (useGuildShopVisibleInGuild)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import computeCanEveryoneInGuildSeeRoleSubscriptions from "computeCanEveryoneInGuildSeeRoleSubscriptions" /* 7216 */;
import useShouldHideGuildPurchaseEntryPoints from "useShouldHideGuildPurchaseEntryPoints" /* 7219 */;
import useGuildEligibleForGuildProducts from "useGuildEligibleForGuildProducts" /* 7224 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 7229 */;

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