// === Module 9415: PlaintextResolvers ===

// Module 9415 (PlaintextResolvers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4217 */;
import useChannelName from "useChannelName" /* 4713 */;
import SlateUtils from "SlateUtils" /* 7686 */;
import _slicedToArray from "module_32" /* 32 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5506 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function resolvePlaintextInlineVoid(text, id, id2, forceIncludeExternalGuilds) {
  let obj = forceIncludeExternalGuilds;
  if (forceIncludeExternalGuilds == null) {
    obj = {};
  }
  const allowUsers = obj.allowUsers;
  const allowRoles = obj.allowRoles;
  let first = text[0];
  if ("@" === first) {
    return (function resolveUserOrRole(arr, id, id2, arg3, arg4) {
      let tmp = closure_3(arr.slice(1).split("#", 2), 2);
      const first = tmp[0];
      closure_1 = tmp3;
      guild = null;
      if (null != id) {
        guild = guild.getGuild(id);
      }
      if (arg4) {
        if (null == tmp3) {
          if (null != guild) {
            sortedRoles = sortedRoles.getSortedRoles(guild.id);
            for (const item10028 of sortedRoles) {
              if (first === item10028.name) {
                let element = { type: "roleMention", roleId: item10028.id, children: null };
                let items = [{ text: "" }];
                element.children = items;
                obj.return();
                return element;
              }
            }
          }
        }
      }
      if (arg3) {
        channel = null;
        if (null != id2) {
          channel = channel.getChannel(id2);
        }
        if (null == channel) {
          return null;
        } else {
          if (channel.isPrivate()) {
            let recipients = channel.recipients;
          } else {
            members = members.getMembers(id);
            recipients = members.map((userId) => userId.userId);
          }
          const mapped = recipients.map((item) => user.getUser(item));
          const found = mapped.filter((username) => {
            let tmp = undefined !== username;
            if (tmp) {
              let str = closure_1;
              let flag = {}.requireExact;
              if (flag === undefined) {
                flag = false;
              }
              let tmp4 = null != username;
              if (tmp4) {
                username = username.username;
                if (flag) {
                  let startsWithResult = username === first;
                } else {
                  startsWithResult = username.startsWith(first);
                }
                if (startsWithResult) {
                  if (str == null) {
                    str = "0";
                  }
                  startsWithResult = username.discriminator === str;
                }
                tmp4 = startsWithResult;
              }
              tmp = tmp4;
            }
            return tmp;
          });
          if (1 === found.length) {
            const first1 = found[0];
            if (closure_18(first, tmp3, first1, { requireExact: true })) {
              const element1 = { type: "userMention", userId: first1.id, children: null };
              const items1 = [{ text: "" }];
              element1.children = items1;
              return element1;
            }
          }
        }
      }
      return null;
    })(text, id, id2, tmp, tmp2);
  } else if (":" === first) {
    const EMOJI_NAME_RE = UnicodeEmojisDefault.EMOJI_NAME_RE;
    const match = EMOJI_NAME_RE.exec(text);
    let tmp7 = null;
    if (null != match) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(id);
      const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
      let obj1 = customEmoji.get(match[1]);
      let channel = null;
      if (null != id2) {
        channel = ChannelStore.getChannel(id2);
      }
      tmp7 = null;
      if (null != obj1) {
        obj = { emoji: obj1, channel, intention: EmojiIntention.CHAT };
        tmp7 = null;
        if (!tmp4Result.isEmojiFiltered(obj)) {
          obj = { emojiId: obj1.id, name: null, animated: null, jumboable: false };
          if (!("require_colons" in obj1)) {
            let element = { type: "customEmoji", emoji: null, children: null };
            obj.name = obj1.name;
            obj.animated = true === obj1.animated;
            element.emoji = obj;
            obj = [];
            obj1 = { text: "" };
            obj[0] = obj1;
            element.children = obj;
          }
          const _HermesInternal = HermesInternal;
          const combined = ":" + obj1.name + ":";
        }
        tmp4Result = EmojiUtilsDefault;
      }
    }
    return tmp7;
  } else if ("#" === first) {
    return (function resolveChannel(arr, id) {
      if (null == id) {
        return null;
      } else {
        if (arr.length > 3) {
          if ("\"" === arr[1]) {
            textChannelNameDisambiguations = textChannelNameDisambiguations.getTextChannelNameDisambiguations(id);
            const num = SnowflakeUtilsDefault.keys(textChannelNameDisambiguations);
            num[Symbol.iterator]();
          }
          useChannelName.unescapeChannelName(arr.slice(2, arr.length - num));
        }
        const substr = arr.slice(1);
      }
    })(text, id);
  } else {
    return null;
  }
}
function matchesUser(arg0, arg1, username) {
  let flag = requireExact.requireExact;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null != username;
  if (tmp) {
    username = username.username;
    if (flag) {
      let startsWithResult = username === arg0;
    } else {
      startsWithResult = username.startsWith(arg0);
    }
    if (startsWithResult) {
      let str = arg1;
      if (arg1 == null) {
        str = "0";
      }
      startsWithResult = username.discriminator === str;
    }
    tmp = startsWithResult;
  }
  return tmp;
}
let closure_8 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1074).Permissions;
const EmojiIntention = fn(1374).EmojiIntention;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_text_area/PlaintextResolvers.tsx");

export { resolvePlaintextInlineVoid };
export const resolveApplicationCommandOption = function resolveApplicationCommandOption(text, id, id2, forceIncludeExternalGuilds) {
  const tmp = resolvePlaintextInlineVoid(text, id, id2, forceIncludeExternalGuilds);
  let voidToOptionValueResult = null;
  if (null != tmp) {
    voidToOptionValueResult = SlateUtils.voidToOptionValue(tmp);
  }
  return voidToOptionValueResult;
};