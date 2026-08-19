// discord_app/modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx
import computeRolesForGuild from "SubscriptionRoleStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx");

export const isRoleSubscriptionEmoji = function isRoleSubscriptionEmoji(roles, id) {
  roles = undefined;
  if (roles != null) {
    roles = roles.roles;
  }
  if (null != roles) {
    if (0 !== roles.roles.length) {
      if (null != id) {
        authStore = authStore.getSubscriptionRoles(id);
        roles = roles.roles;
        return roles.some((item, index) => set.has(item));
      }
    }
  }
  return false;
};
export const isPurchasableRoleSubscriptionEmoji = function isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild) {
  let roles;
  if (customEmojiFromJoinedGuild != null) {
    roles = customEmojiFromJoinedGuild.roles;
  }
  if (null != roles) {
    if (0 !== customEmojiFromJoinedGuild.roles.length) {
      if (null != customEmojiFromJoinedGuild.guildId) {
        authStore = authStore.getPurchasableSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
        roles = customEmojiFromJoinedGuild.roles;
        return roles.some((item, index) => set.has(item));
      }
    }
  }
  return false;
};
export const isUnusableRoleSubscriptionEmoji = function isUnusableRoleSubscriptionEmoji(customEmojiFromJoinedGuild, guildId) {
  let roles;
  if (customEmojiFromJoinedGuild != null) {
    roles = customEmojiFromJoinedGuild.roles;
  }
  if (null != roles) {
    if (0 !== customEmojiFromJoinedGuild.roles.length) {
      if (null != customEmojiFromJoinedGuild.guildId) {
        let roles1;
        if (customEmojiFromJoinedGuild != null) {
          roles1 = customEmojiFromJoinedGuild.roles;
        }
        let flag2 = false;
        if (null != roles1) {
          flag2 = false;
          if (0 !== customEmojiFromJoinedGuild.roles.length) {
            flag2 = false;
            if (null != customEmojiFromJoinedGuild.guildId) {
              authStore = authStore.getPurchasableSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
              roles = customEmojiFromJoinedGuild.roles;
              flag2 = roles.some((item, index) => set.has(item));
            }
          }
        }
        if (flag2) {
          authStore = authStore.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
          const roles2 = customEmojiFromJoinedGuild.roles;
          let userIsAdmin = guildId === customEmojiFromJoinedGuild.guildId;
          if (userIsAdmin) {
            userIsAdmin = obj.getUserIsAdmin(customEmojiFromJoinedGuild.guildId);
          }
          if (!someResult) {
            if (!userIsAdmin) {
              return true;
            }
          }
          obj = authStore;
          someResult = roles2.some((item, index) => set.has(item));
        }
        return false;
      }
    }
  }
  return false;
};