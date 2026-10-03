// discord_app/modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import SubscriptionRoleStore from "SubscriptionRoleStore.tsx";

require = fn;
const constants = fn(15019).UserGuildRoleSubscriptionRelationship;
const ReactCompilerGating = fn(558);
function getUserRoleSubscriptionRelationship() {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [SubscriptionRoleStore];
        const fn = function o() {
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
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
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
export { getUserRoleSubscriptionRelationship };
