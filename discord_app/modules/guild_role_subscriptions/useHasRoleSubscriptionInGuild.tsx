// discord_app/modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";

const require = fn;
function computeHasRoleSubscriptionsInGuild(c0, closure_3, stateFromStores, items) {
  let tmp = stateFromStores;
  if (stateFromStores === undefined) {
    let member = null;
    if (null != c0) {
      member = member.getMember(c0, id.getId());
    }
    tmp = member;
  }
  let tmp5 = items;
  if (items === undefined) {
    items = [closure_5];
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
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default function useHasRoleSubscriptionInGuild(arg0) {
  const _require = arg0;
  let items = [closure_2, closure_3];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => {
    let member = null;
    if (null != closure_0) {
      member = closure_1_3.getMember(tmp, closure_1_2.getId());
    }
    return member;
  });
  const obj = _require(stateFromStores[5]);
  const items1 = [closure_5, closure_4];
  const items2 = [arg0, stateFromStores];
  return _require(stateFromStores[5]).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != closure_0) {
      rolesSnapshot = closure_1_4.getRolesSnapshot(closure_0);
    }
    const items = [closure_1_5];
    return computeHasRoleSubscriptionsInGuild(closure_0, rolesSnapshot, stateFromStores, items);
  }, items2);
};
export { computeHasRoleSubscriptionsInGuild };