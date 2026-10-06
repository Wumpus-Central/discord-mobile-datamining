// === Module 5650: RoleSubscriptionEmojiUtils ===

// Module 5650 (RoleSubscriptionEmojiUtils)
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5646 */;
import size from "module_2" /* 2 */;

const f90845 = (item) => set.has(item);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx");

export const isRoleSubscriptionEmoji = function isRoleSubscriptionEmoji(roles, id) {
  let roles1;
  if (roles != null) {
    roles1 = roles.roles;
  }
  if (null != roles1) {
    if (0 !== roles.roles.length) {
      if (null != id) {
        const subscriptionRoles = SubscriptionRoleStore.getSubscriptionRoles(id);
        roles = roles.roles;
        return roles.some((item) => set.has(item));
      }
    }
  }
  return false;
};
export const isPurchasableRoleSubscriptionEmoji = function isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild) {
  let roles1;
  if (customEmojiFromJoinedGuild != null) {
    roles1 = customEmojiFromJoinedGuild.roles;
  }
  if (null != roles1) {
    if (0 !== customEmojiFromJoinedGuild.roles.length) {
      if (null != customEmojiFromJoinedGuild.guildId) {
        const purchasableSubscriptionRoles = SubscriptionRoleStore.getPurchasableSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
        const roles = customEmojiFromJoinedGuild.roles;
        return roles.some(f90845);
      }
    }
  }
  return false;
};
export const isUnusableRoleSubscriptionEmoji = function isUnusableRoleSubscriptionEmoji(customEmojiFromJoinedGuild, guildId) {
  let roles1;
  if (customEmojiFromJoinedGuild != null) {
    roles1 = customEmojiFromJoinedGuild.roles;
  }
  if (null != roles1) {
    if (0 !== customEmojiFromJoinedGuild.roles.length) {
      if (null != customEmojiFromJoinedGuild.guildId) {
        let roles3;
        if (customEmojiFromJoinedGuild != null) {
          roles3 = customEmojiFromJoinedGuild.roles;
        }
        let flag2 = false;
        if (null != roles3) {
          flag2 = false;
          if (0 !== customEmojiFromJoinedGuild.roles.length) {
            flag2 = false;
            if (null != customEmojiFromJoinedGuild.guildId) {
              let purchasableSubscriptionRoles = SubscriptionRoleStore.getPurchasableSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
              const roles = customEmojiFromJoinedGuild.roles;
              flag2 = roles.some(f90845);
            }
          }
        }
        if (flag2) {
          purchasableSubscriptionRoles = SubscriptionRoleStore.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
          const roles2 = customEmojiFromJoinedGuild.roles;
          let userIsAdmin = guildId === customEmojiFromJoinedGuild.guildId;
          const someResult = roles2.some((item) => set.has(item));
          if (userIsAdmin) {
            userIsAdmin = SubscriptionRoleStore.getUserIsAdmin(customEmojiFromJoinedGuild.guildId);
          }
          if (!someResult) {
            if (!userIsAdmin) {
              return true;
            }
          }
        }
        return false;
      }
    }
  }
  return false;
};