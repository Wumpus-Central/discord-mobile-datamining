// === Module 14802: useUserRoleSubscriptionRelationship ===

// Module 14802 (useUserRoleSubscriptionRelationship)
import initialize from "initialize" /* 589 */;
import closure_2 from "computeRolesForGuild" /* 5402 */;
import { UserGuildRoleSubscriptionRelationship as closure_3 } from "MAX_SUBSCRIPTION_TIERS" /* 14801 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  let items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    const items = [closure_2];
    [obj] = items;
    c1 = undefined;
    const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
    c1 = false;
    const item = guildIdsWithPurchasableRoles.forEach((guildId) => {
      if (userSubscriptionRoles.getUserSubscriptionRoles(guildId).size > 0) {
        c1 = true;
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
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [obj] = tmp;
  c1 = undefined;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  c1 = false;
  const item = guildIdsWithPurchasableRoles.forEach((guildId) => {
    if (userSubscriptionRoles.getUserSubscriptionRoles(guildId).size > 0) {
      c1 = true;
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