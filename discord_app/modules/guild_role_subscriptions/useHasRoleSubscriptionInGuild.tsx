// === Module 6948: useHasRoleSubscriptionInGuild ===

// Module 6948 (useHasRoleSubscriptionInGuild)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
function computeHasRoleSubscriptionsInGuild(id1, rolesSnapshot) {
  let tmp = stateFromStores;
  if (stateFromStores === undefined) {
    let member = null;
    if (null != id1) {
      member = GuildMemberStore.getMember(id1, AuthenticationStore.getId());
    }
    tmp = member;
  }
  let tmp5 = items;
  if (items === undefined) {
    items = [GuildStore];
    tmp5 = items;
  }
  [obj] = tmp5;
  guild = obj.getGuild(id1);
  if (null != guild) {
    if (null != tmp) {
      const features = guild.features;
      if (features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const roles = tmp.roles;
        for (const item10028 of roles) {
          let tmp11;
          if (arg1 != null) {
            tmp11 = arg1[tmp10];
          }
          let prop;
          if (tmp11 != null) {
            let tags = tmp11.tags;
            if (tags != null) {
              prop = tags.subscription_listing_id;
            }
          }
          if (null != prop) {
            obj2.return();
            let flag = true;
            return true;
          }
        }
        return false;
      }
    }
  }
  return false;
}
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useHasRoleSubscriptionInGuild(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let member = null;
      if (null != closure_0) {
        member = GuildMemberStore.getMember(tmp, AuthenticationStore.getId());
      }
      return member;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore, GuildRoleStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg0) {
    if (cResult[5] === stateFromStores) {
      let tmp12 = cResult[6];
      let tmp13 = cResult[7];
    }
    return tmp(tmp2[7]).useStateFromStores(tmp9, tmp12, tmp13);
  }
  const fn2 = function b() {
    let rolesSnapshot;
    if (null != closure_0) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(closure_0);
    }
    const items = [GuildStore];
    return computeHasRoleSubscriptionsInGuild(closure_0, rolesSnapshot, stateFromStores, items);
  };
  const items2 = [arg0, stateFromStores];
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp13 = items2;
  tmp12 = fn2;
  const tmpResult = require("initialize");
}) : (function useHasRoleSubscriptionInGuild(arg0) {
  _require = arg0;
  let items = [AuthenticationStore, GuildMemberStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let member = null;
    if (null != closure_0) {
      member = GuildMemberStore.getMember(tmp, AuthenticationStore.getId());
    }
    return member;
  });
  const obj = require("initialize");
  const items1 = [GuildStore, GuildRoleStore];
  const items2 = [arg0, stateFromStores];
  return require("initialize").useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != closure_0) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(closure_0);
    }
    const items = [GuildStore];
    return computeHasRoleSubscriptionsInGuild(closure_0, rolesSnapshot, stateFromStores, items);
  }, items2);
});
export { computeHasRoleSubscriptionsInGuild };