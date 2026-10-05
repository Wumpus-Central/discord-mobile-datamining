// discord_app/modules/channel_text_area/PlaintextResolvers.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import Constants from "../../Constants.tsx";
import EmojiConstants from "../emojis/EmojiConstants.tsx";
import GuildChannelStore2 from "../../stores/GuildChannelStore.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../utils/EmojiUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import AutocompleteUtils from "../../utils/AutocompleteUtils.tsx";
import SlateUtils from "slate/SlateUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildChannelStore = GuildChannelStore2;
let activeJoinedThreadsForGuild, guild, members, sortedRoles;

function resolvePlaintextInlineVoid(text, id5, id, arg3) {
  let items;
  function resolveUserOrRole(arr, id5, id, arg3, arg4) {
    let items1;
    let user;
    let str = arr.slice(1);
    let tmp = closure_3(str.split("#", 2), 2);
    const first = tmp[0];
    let closure_1 = tmp3;
    guild = null;
    if (null != id5) {
      guild = guild.getGuild(id5);
    }
    const tmp6 = arg4;
    if (tmp6) {
      if (null == tmp[1]) {
        if (null != guild) {
          sortedRoles = sortedRoles.getSortedRoles(guild.id);
          for (const item10028 of sortedRoles) {
            if (first === item10028.name) {
              let element = { type: "roleMention", roleId: item10028.id, children: items };
              let items = [{ text: "" }];
              obj.return();
              return element;
            }
          }
        }
      }
    }
    const tmp13 = arg3;
    if (tmp13) {
      channel = null;
      if (null != id) {
        channel = channel.getChannel(id);
      }
      if (null == channel) {
        return null;
      } else {
        let recipients;
        if (channel.isPrivate()) {
          recipients = channel.recipients;
        } else {
          members = members.getMembers(id5);
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
              let startsWithResult;
              username = username.username;
              if (flag) {
                startsWithResult = username === first;
              } else {
                startsWithResult = username.startsWith(first);
              }
              if (startsWithResult) {
                const discriminator = username.discriminator;
                if (str == null) {
                  str = "0";
                }
                startsWithResult = discriminator === str;
              }
              tmp4 = startsWithResult;
            }
            tmp = tmp4;
          }
          return tmp;
        });
        if (1 === found.length) {
          const first1 = found[0];
          if (closure_18(first, tmp[1], first1, { requireExact: true })) {
            const element1 = { type: "userMention", userId: first1.id, children: items1 };
            items1 = [{ text: "" }];
            return element1;
          }
        }
      }
    }
    return null;
  }
  function resolveChannel(arr, id5) {
    if (null == id5) {
      return null;
    } else {
      if (arr.length > 3) {
        if ('"' === arr[1]) {
          let unescapeChannelNameResult;
          if ('"' === arr[arr.length - 1]) {
            const obj = useChannelName;
            unescapeChannelNameResult = obj.unescapeChannelName(arr.slice(2, arr.length - 1));
          }
          const textChannelNameDisambiguations = GuildChannelStore.getTextChannelNameDisambiguations(id5);
          const obj2 = SnowflakeUtilsDefault;
          const keys = obj2.keys(textChannelNameDisambiguations);
          for (const item10039 of keys) {
            if (textChannelNameDisambiguations[item10039].name === unescapeChannelNameResult) {
              let element = { type: "channelMention", channelId: item10039, children: items };
              let items = [{ text: "" }];
              obj3.return();
              return element;
            }
          }
          const COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS = AutocompleteUtils.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
          for (const item10057 of COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
            if (item10057 !== closure_1_8) {
              let tmp56 = GuildChannelStore.getChannels(id5)[tmp17];
              for (const item10062 of tmp56) {
                channel = item10062.channel;
                let obj6 = channel;
                let obj7 = useChannelName;
                if (obj7.computeChannelName(channel, UserStore, RelationshipStore) === unescapeChannelNameResult) {
                  let element1 = { type: "channelMention", channelId: obj6.id, children: items1 };
                  let items1 = [{ text: "" }];
                  obj15.return();
                  obj5.return();
                  return element1;
                }
                continue;
              }
            }
            continue;
          }
          activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(id5);
          const obj9 = SnowflakeUtilsDefault;
          const keys1 = obj9.keys(activeJoinedThreadsForGuild);
          for (const item10104 of keys1) {
            let obj11 = SnowflakeUtilsDefault;
            let keys2 = obj11.keys(activeJoinedThreadsForGuild[item10104]);
            for (const item10117 of keys2) {
              let channel2 = activeJoinedThreadsForGuild[item10104][item10117].channel;
              let tmp45 = channel2;
              let obj13 = useChannelName;
              if (obj13.computeChannelName(channel2, UserStore, RelationshipStore) === unescapeChannelNameResult) {
                let element2 = { type: "channelMention", channelId: tmp45.id, children: items2 };
                let items2 = [{ text: "" }];
                obj12.return();
                obj10.return();
                return element2;
              }
            }
            continue;
          }
          return null;
        }
      }
      unescapeChannelNameResult = arr.slice(1);
    }
  }
  let obj = arg3;
  if (arg3 == null) {
    obj = {};
  }
  const allowUsers = obj.allowUsers;
  let tmp = undefined === allowUsers || allowUsers;
  const allowRoles = obj.allowRoles;
  let first = text[0];
  if ("@" === first) {
    const tmp17 = id;
    let tmp19 = tmp2;
    return resolveUserOrRole(text, id5, id, tmp, undefined === allowRoles || allowRoles);
  } else if (":" === first) {
    const EMOJI_NAME_RE = UnicodeEmojisDefault.EMOJI_NAME_RE;
    const match = EMOJI_NAME_RE.exec(text);
    let tmp7 = null;
    if (null != match) {
      const tmp8 = match[1];
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(id5);
      const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
      const value = customEmoji.get(tmp8);
      let channel = null;
      if (null != id) {
        channel = ChannelStore.getChannel(id);
      }
      tmp7 = null;
      if (null != value) {
        let obj2 = { emoji: value, channel, intention: EmojiIntention.CHAT };
        tmp7 = null;
        const tmp4Result = EmojiUtilsDefault;
        if (!tmp4Result.isEmojiFiltered(obj2)) {
          const obj3 = { emojiId: value.id, name: null, animated: null, jumboable: false };
          if ("require_colons" in value) {
            let name;
            if (value.require_colons) {
              const _HermesInternal = HermesInternal;
              name = ":" + value.name + ":";
            }
            let element = { type: "customEmoji", emoji: obj3, children: items };
            obj3.name = name;
            let flag = true;
            obj3.animated = true === value.animated;
            items = [{ text: "" }];
            tmp7 = element;
          }
          name = value.name;
        }
      }
    }
    return tmp7;
  } else {
    let str = "#";
    if ("#" === first) {
      return resolveChannel(text, id5);
    } else {
      return null;
    }
  }
}
function matchesUser(arg0, arg1, username) {
  let flag = requireExact.requireExact;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null != username;
  if (tmp) {
    let startsWithResult;
    username = username.username;
    if (flag) {
      startsWithResult = username === arg0;
    } else {
      startsWithResult = username.startsWith(arg0);
    }
    if (startsWithResult) {
      let str = arg1;
      const discriminator = username.discriminator;
      if (arg1 == null) {
        str = "0";
      }
      startsWithResult = discriminator === str;
    }
    tmp = startsWithResult;
  }
  return tmp;
}
let closure_8 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const EmojiIntention = EmojiConstants.EmojiIntention;
const result = size.fileFinishedImporting("modules/channel_text_area/PlaintextResolvers.tsx");

export { resolvePlaintextInlineVoid };
export const resolveApplicationCommandOption = function resolveApplicationCommandOption(text, id5, id, arg3) {
  const tmp = resolvePlaintextInlineVoid(text, id5, id, arg3);
  let voidToOptionValueResult = null;
  if (null != tmp) {
    const obj = SlateUtils;
    voidToOptionValueResult = obj.voidToOptionValue(tmp);
  }
  return voidToOptionValueResult;
};
