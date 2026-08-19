// discord_app/modules/messages/isMessageMentioned.tsx
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";

function isMentioned(suppressRoles) {
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
          const channel = member.getChannel(channelId);
          if (null == channel) {
            return false;
          } else {
            const guildId = channel.getGuildId();
            if (null == guildId) {
              return false;
            } else if (null == guild.getGuild(guildId)) {
              return false;
            } else {
              member = member.getMember(guildId, userId);
              return null != member && mentionRoles.some((item, index) => {
                const roles = member.roles;
                return roles.includes(item);
              });
            }
          }
        }
      }
    }
    return false;
  }
}
const result = require("obj132").fileFinishedImporting("modules/messages/isMessageMentioned.tsx");

export default function isMessageMentioned(suppressRoles) {
  ({ message, suppressEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  return isMentioned({ userId: suppressRoles.userId, channelId: message.channel_id, mentionEveryone: message.mentionEveryone, mentionUsers: message.mentions, mentionRoles: message.mentionRoles, suppressEveryone, suppressRoles: flag });
};
export const isRawMessageMentioned = function isRawMessageMentioned(suppressRoles) {
  ({ rawMessage, suppressEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { userId: suppressRoles.userId, channelId: rawMessage.channel_id, mentionEveryone: null, mentionUsers: null, mentionRoles: null, suppressEveryone: null, suppressRoles: null };
  let flag2 = rawMessage.mention_everyone;
  if (flag2 == null) {
    flag2 = false;
  }
  obj[2] = flag2;
  const mentions = rawMessage.mentions;
  let mapped;
  if (mentions != null) {
    mapped = mentions.map((item, index) => item.id);
  }
  if (mapped == null) {
    mapped = [];
  }
  obj[3] = mapped;
  let mention_roles = rawMessage.mention_roles;
  if (mention_roles == null) {
    mention_roles = [];
  }
  obj[4] = mention_roles;
  obj[5] = suppressEveryone;
  obj[6] = flag;
  return isMentioned(obj);
};
export { isMentioned };