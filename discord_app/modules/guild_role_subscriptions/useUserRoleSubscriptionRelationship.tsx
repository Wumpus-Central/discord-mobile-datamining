// discord_app/modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx
import computeRolesForGuild from "computeRolesForGuild";
import { UserGuildRoleSubscriptionRelationship as closure_3 } from "MAX_SUBSCRIPTION_TIERS";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  let items = [computeRolesForGuild];
  return initialize /* initialize */.useStateFromStores(items, () => {
    let obj;
    const items = [computeRolesForGuild];
    [obj] = items;
    let c1;
    const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
    c1 = false;
    const item = guildIdsWithPurchasableRoles.forEach((guildId) => {
      if (userSubscriptionRoles.getUserSubscriptionRoles(guildId).size > 0) {
        let c1 = true;
      }
    });
    if (c1) {
      let IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
    } else if (0 === guildIdsWithPurchasableRoles.size) {
      IN_SUBSCRIPTION_SERVER = constants.NONE;
    } else {
      IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
    }
    return IN_SUBSCRIPTION_SERVER;
  });
};
export const getUserRoleSubscriptionRelationship = function getUserRoleSubscriptionRelationship() {
  let obj;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [computeRolesForGuild];
    tmp = items;
  }
  [obj] = tmp;
  let c1;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  c1 = false;
  const item = guildIdsWithPurchasableRoles.forEach((guildId) => {
    if (userSubscriptionRoles.getUserSubscriptionRoles(guildId).size > 0) {
      let c1 = true;
    }
  });
  if (c1) {
    let IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
  } else if (0 === guildIdsWithPurchasableRoles.size) {
    IN_SUBSCRIPTION_SERVER = constants.NONE;
  } else {
    IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
  }
  return IN_SUBSCRIPTION_SERVER;
};