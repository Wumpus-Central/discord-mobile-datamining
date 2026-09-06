// === Module 5464: isRoleSubscriptionEmoji ===

// Module 5464 (isRoleSubscriptionEmoji)
import closure_0 from "computeRolesForGuild" /* 5460 */;

const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx");

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
        return roles.some((arg0) => set.has(arg0));
      }
    }
  }
  return false;
};
export const isPurchasableRoleSubscriptionEmoji = function isPurchasableRoleSubscriptionEmoji(emoji) {
  let roles;
  if (emoji != null) {
    roles = emoji.roles;
  }
  if (null != roles) {
    if (0 !== emoji.roles.length) {
      if (null != emoji.guildId) {
        authStore = authStore.getPurchasableSubscriptionRoles(emoji.guildId);
        roles = emoji.roles;
        return roles.some((arg0) => set.has(arg0));
      }
    }
  }
  return false;
};
export const isUnusableRoleSubscriptionEmoji = function isUnusableRoleSubscriptionEmoji(emoji, guildId) {
  let roles;
  if (emoji != null) {
    roles = emoji.roles;
  }
  if (null != roles) {
    if (0 !== emoji.roles.length) {
      if (null != emoji.guildId) {
        let roles1;
        if (emoji != null) {
          roles1 = emoji.roles;
        }
        let flag2 = false;
        if (null != roles1) {
          flag2 = false;
          if (0 !== emoji.roles.length) {
            flag2 = false;
            if (null != emoji.guildId) {
              authStore = authStore.getPurchasableSubscriptionRoles(emoji.guildId);
              roles = emoji.roles;
              flag2 = roles.some((arg0) => set.has(arg0));
            }
          }
        }
        if (flag2) {
          authStore = authStore.getUserSubscriptionRoles(emoji.guildId);
          const roles2 = emoji.roles;
          let userIsAdmin = guildId === emoji.guildId;
          if (userIsAdmin) {
            userIsAdmin = obj.getUserIsAdmin(emoji.guildId);
          }
          if (!someResult) {
            if (!userIsAdmin) {
              return true;
            }
          }
          obj = authStore;
          someResult = roles2.some((arg0) => set.has(arg0));
        }
        return false;
      }
    }
  }
  return false;
};