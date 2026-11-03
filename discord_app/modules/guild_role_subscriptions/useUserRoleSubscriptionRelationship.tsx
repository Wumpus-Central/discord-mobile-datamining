// === Module 17340: useUserRoleSubscriptionRelationship ===

// Module 17340 (useUserRoleSubscriptionRelationship)
import initialize from "initialize" /* 504 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5096 */;

require = fn;
const constants = fn(17339).UserGuildRoleSubscriptionRelationship;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  items = [SubscriptionRoleStore];
  return initialize.useStateFromStores(items, () => {
    items = [SubscriptionRoleStore];
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
export function getUserRoleSubscriptionRelationship() {
  let tmp = arg0;
  if (arg0 === undefined) {
    items = [SubscriptionRoleStore];
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
}