// === Module 5309: isMessageMentioned ===

// Module 5309 (isMessageMentioned)
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

function isMentioned(suppressRoles) {
  let channelId;
  let mentionEveryone;
  let mentionRoles;
  let mentionUsers;
  let suppressEveryone;
  let userId;
  ({ userId, mentionUsers, mentionRoles, suppressEveryone } = suppressRoles);
  ({ channelId, mentionEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  let member;
  if (mentionEveryone) {
    if (!suppressEveryone) {
      return true;
    }
  }
  if (mentionUsers.includes(userId)) {
    return true;
  } else {
    if (!flag) {
      if (null != mentionRoles) {
        if (0 !== mentionRoles.length) {
          const channel = ChannelStore.getChannel(channelId);
          if (null == channel) {
            return false;
          } else {
            const guildId = channel.getGuildId();
            if (null == guildId) {
              return false;
            } else if (null == GuildStore.getGuild(guildId)) {
              return false;
            } else {
              member = GuildMemberStore.getMember(guildId, userId);
              const tmp7 = null != member && mentionRoles.some((item) => {
                const roles = member.roles;
                return roles.includes(item);
              });
              return tmp7;
            }
          }
        }
      }
    }
    return false;
  }
}
const result = size.fileFinishedImporting("modules/messages/isMessageMentioned.tsx");

export default function isMessageMentioned(userId) {
  let message;
  let suppressEveryone;
  ({ message, suppressEveryone } = userId);
  userId = userId.userId;
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = userId.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { userId, channelId: message.channel_id, mentionEveryone: message.mentionEveryone, mentionUsers: message.mentions, mentionRoles: message.mentionRoles, suppressEveryone, suppressRoles: flag };
  return isMentioned(obj);
};
export const isRawMessageMentioned = function isRawMessageMentioned(userId) {
  let flag2;
  let mapped;
  let mention_roles;
  let rawMessage;
  let suppressEveryone;
  ({ rawMessage, suppressEveryone } = userId);
  userId = userId.userId;
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = userId.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { userId, channelId: rawMessage.channel_id, mentionEveryone: flag2, mentionUsers: mapped, mentionRoles: mention_roles, suppressEveryone, suppressRoles: flag };
  flag2 = rawMessage.mention_everyone;
  if (flag2 == null) {
    flag2 = false;
  }
  const mentions = rawMessage.mentions;
  mapped = undefined;
  if (mentions != null) {
    mapped = mentions.map((id) => id.id);
  }
  if (mapped == null) {
    mapped = [];
  }
  mention_roles = rawMessage.mention_roles;
  if (mention_roles == null) {
    mention_roles = [];
  }
  return isMentioned(obj);
};
export { isMentioned };