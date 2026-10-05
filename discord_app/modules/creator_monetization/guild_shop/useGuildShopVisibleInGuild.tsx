// discord_app/modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx
import react from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import useRoleSubscriptionsVisibleInGuild2 from "../../guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx";
import CreatorMonetizationRestrictionsHooks from "../../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import GuildProductsEligibility from "../../guild_products/GuildProductsEligibility.tsx";
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
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
      const useShouldHideGuildPurchaseEntryPoints =
        CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints;
      CreatorMonetizationRestrictionsHooks;
      if (id != null) {
        id2 = id.id;
      }
      const shouldHideGuildPurchaseEntryPoints =
        useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
      return false;
    }
  : (id) => {
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
      const useShouldHideGuildPurchaseEntryPoints =
        CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints;
      CreatorMonetizationRestrictionsHooks;
      if (id != null) {
        id2 = id.id;
      }
      const shouldHideGuildPurchaseEntryPoints =
        useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
      return false;
    };
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
