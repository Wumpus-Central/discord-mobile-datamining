// === Module 15039: useUserRoleSubscriptionRelationship ===

// Module 15039 (useUserRoleSubscriptionRelationship)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15038 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5646 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionRoleStore];
    const fn = function o() {
      let IN_SUBSCRIPTION_SERVER;
      let obj;
      const items = [SubscriptionRoleStore];
      [obj] = items;
      const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
      let c1 = false;
      const item = guildIdsWithPurchasableRoles.forEach((item) => {
        if (userSubscriptionRoles.getUserSubscriptionRoles(item).size > 0) {
          c1 = true;
        }
      });
      const tmp2 = c1;
      if (tmp2) {
        IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
      } else if (0 === guildIdsWithPurchasableRoles.size) {
        IN_SUBSCRIPTION_SERVER = constants.NONE;
      } else {
        IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
      }
      return IN_SUBSCRIPTION_SERVER;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const obj = get_initialized;
  let items = [SubscriptionRoleStore];
  return obj.useStateFromStores(items, () => {
    let IN_SUBSCRIPTION_SERVER;
    let obj;
    const items = [SubscriptionRoleStore];
    [obj] = items;
    const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
    let c1 = false;
    const item = guildIdsWithPurchasableRoles.forEach((item) => {
      if (userSubscriptionRoles.getUserSubscriptionRoles(item).size > 0) {
        c1 = true;
      }
    });
    const tmp2 = c1;
    if (tmp2) {
      IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
    } else if (0 === guildIdsWithPurchasableRoles.size) {
      IN_SUBSCRIPTION_SERVER = constants.NONE;
    } else {
      IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
    }
    return IN_SUBSCRIPTION_SERVER;
  });
});
function getUserRoleSubscriptionRelationship() {
  let IN_SUBSCRIPTION_SERVER;
  let obj;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [SubscriptionRoleStore];
    tmp = items;
  }
  [obj] = tmp;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  let c1 = false;
  const item = guildIdsWithPurchasableRoles.forEach((item) => {
    if (userSubscriptionRoles.getUserSubscriptionRoles(item).size > 0) {
      c1 = true;
    }
  });
  const tmp4 = c1;
  if (tmp4) {
    IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
  } else if (0 === guildIdsWithPurchasableRoles.size) {
    IN_SUBSCRIPTION_SERVER = constants.NONE;
  } else {
    IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
  }
  return IN_SUBSCRIPTION_SERVER;
}
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default tmp2;
export { getUserRoleSubscriptionRelationship };