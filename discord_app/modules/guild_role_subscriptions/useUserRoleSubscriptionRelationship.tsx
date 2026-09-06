// === Module 15206: useUserRoleSubscriptionRelationship ===

// Module 15206 (useUserRoleSubscriptionRelationship)
import initialize from "initialize" /* 504 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5460 */;

require = fn;
const constants = fn(15205).UserGuildRoleSubscriptionRelationship;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  let items = [SubscriptionRoleStore];
  return initialize.useStateFromStores(items, () => {
    const items = [SubscriptionRoleStore];
    [obj] = items;
    const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
    c1 = false;
    const item = guildIdsWithPurchasableRoles.forEach((item) => {
      if (userSubscriptionRoles.getUserSubscriptionRoles(item).size > 0) {
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
    const items = [SubscriptionRoleStore];
    tmp = items;
  }
  [obj] = tmp;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  c1 = false;
  const item = guildIdsWithPurchasableRoles.forEach((item) => {
    if (userSubscriptionRoles.getUserSubscriptionRoles(item).size > 0) {
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