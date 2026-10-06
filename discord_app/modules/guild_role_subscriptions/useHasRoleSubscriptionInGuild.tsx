// === Module 6765: useHasRoleSubscriptionInGuild ===

// Module 6765 (useHasRoleSubscriptionInGuild)
import Constants from "Constants" /* 1085 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function computeHasRoleSubscriptionsInGuild(c0, rolesSnapshot) {
  let items;
  let obj;
  let tmp = stateFromStores;
  if (stateFromStores === undefined) {
    let member = null;
    if (null != c0) {
      member = GuildMemberStore.getMember(c0, AuthenticationStore.getId());
    }
    tmp = member;
  }
  let tmp5 = items;
  if (items === undefined) {
    items = [GuildStore];
    tmp5 = items;
  }
  [obj] = tmp5;
  const guild = obj.getGuild(c0);
  if (null != guild) {
    if (null != tmp) {
      const features = guild.features;
      if (features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const roles = tmp.roles;
        for (const item10028 of roles) {
          let tmp11;
          if (rolesSnapshot != null) {
            tmp11 = rolesSnapshot[tmp10];
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
const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let stateFromStores;
  let tmp7;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore, GuildMemberStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[7]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore, GuildRoleStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg0) {
    let tmp12;
    let tmp13;
    if (cResult[5] === stateFromStores) {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    const tmpResult2 = tmp(stateFromStores[7]);
    return tmpResult2.useStateFromStores(tmp9, tmp12, tmp13);
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
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let items = [AuthenticationStore, GuildMemberStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != closure_0) {
      member = GuildMemberStore.getMember(tmp, AuthenticationStore.getId());
    }
    return member;
  });
  const items1 = [GuildStore, GuildRoleStore];
  const items2 = [arg0, stateFromStores];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != closure_0) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(closure_0);
    }
    const items = [GuildStore];
    return computeHasRoleSubscriptionsInGuild(closure_0, rolesSnapshot, stateFromStores, items);
  }, items2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default tmp2;
export { computeHasRoleSubscriptionsInGuild };