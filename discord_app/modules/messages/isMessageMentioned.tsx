// discord_app/modules/messages/isMessageMentioned.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

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
              return (
                null != member &&
                mentionRoles.some((item) => {
                  const roles = member.roles;
                  return roles.includes(item);
                })
              );
            }
          }
        }
      }
    }
    return false;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/isMessageMentioned.tsx");

export default function isMessageMentioned(suppressRoles) {
  ({ message, suppressEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  return isMentioned({
    userId: suppressRoles.userId,
    channelId: message.channel_id,
    mentionEveryone: message.mentionEveryone,
    mentionUsers: message.mentions,
    mentionRoles: message.mentionRoles,
    suppressEveryone,
    suppressRoles: flag,
  });
}
export const isRawMessageMentioned = function isRawMessageMentioned(suppressRoles) {
  ({ rawMessage, suppressEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  const obj = {
    userId: suppressRoles.userId,
    channelId: rawMessage.channel_id,
    mentionEveryone: null,
    mentionUsers: null,
    mentionRoles: null,
    suppressEveryone: null,
    suppressRoles: null,
  };
  let flag2 = rawMessage.mention_everyone;
  if (flag2 == null) {
    flag2 = false;
  }
  obj.mentionEveryone = flag2;
  const mentions = rawMessage.mentions;
  let mapped;
  if (mentions != null) {
    mapped = mentions.map((id) => id.id);
  }
  if (mapped == null) {
    mapped = [];
  }
  obj.mentionUsers = mapped;
  let mention_roles = rawMessage.mention_roles;
  if (mention_roles == null) {
    mention_roles = [];
  }
  obj.mentionRoles = mention_roles;
  obj.suppressEveryone = suppressEveryone;
  obj.suppressRoles = flag;
  return isMentioned(obj);
};
export { isMentioned };
