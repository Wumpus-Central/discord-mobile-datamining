// discord_app/modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
function computeHasRoleSubscriptionsInGuild(id1, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    let member = null;
    if (null != id1) {
      member = GuildMemberStore.getMember(id1, AuthenticationStore.getId());
    }
    tmp = member;
  }
  let tmp5 = arg3;
  if (arg3 === undefined) {
    const items = [GuildStore];
    tmp5 = items;
  }
  [obj] = tmp5;
  const guild = obj.getGuild(id1);
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
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default function useHasRoleSubscriptionInGuild(arg0) {
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
  return require("initialize").useStateFromStores(
    items1,
    () => {
      let rolesSnapshot;
      if (null != closure_0) {
        rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp2);
      }
      const items = [GuildStore];
      return computeHasRoleSubscriptionsInGuild(closure_0, rolesSnapshot, stateFromStores, items);
    },
    items2,
  );
}
export { computeHasRoleSubscriptionsInGuild };
