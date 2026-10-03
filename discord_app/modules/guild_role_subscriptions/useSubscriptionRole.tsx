// === Module 15043: useSubscriptionRole ===

// Module 15043 (useSubscriptionRole)
import GuildRoleStore from "GuildRoleStore" /* 2106 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  const tmp = _require;
  const tmp2 = subscriptionListing;
  subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === subscriptionListing) {
      let tmp7 = cResult[3];
    }
    return tmp(tmp2[4]).useStateFromStores(first, tmp7);
  }
  const fn = function u() {
    let role;
    if (null != closure_0) {
      if (null != subscriptionListing) {
        role = GuildRoleStore.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  };
  cResult[1] = arg0;
  cResult[2] = subscriptionListing;
  cResult[3] = fn;
  tmp7 = fn;
  const obj2 = require("GuildRoleSubscriptionsHooks");
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(arg1);
  const obj = require("GuildRoleSubscriptionsHooks");
  const items = [GuildRoleStore];
  return require("initialize").useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = GuildRoleStore.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
});