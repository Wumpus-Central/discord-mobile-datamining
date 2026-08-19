// === Module 10259: resolvePlaintextInlineVoid ===

// Module 10259 (resolvePlaintextInlineVoid)
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4038 */;
import createEmptyState from "createEmptyState" /* 7439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import rebuild from "rebuild" /* 5251 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_8 } from "comparator" /* 1980 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;
import { EmojiIntention } from "set" /* 1925 */;

require = fn;
function resolvePlaintextInlineVoid(text, id, id2, intention) {
  let obj = intention;
  if (intention == null) {
    obj = {};
  }
  const allowUsers = obj.allowUsers;
  const allowRoles = obj.allowRoles;
  let first = text[0];
  if ("@" === first) {
    return (function resolveUserOrRole(arr, id, id2, arg3, arg4) {
      let tmp = callback3(arr.slice(1).split("#", 2), 2);
      const first = tmp[0];
      closure_1 = tmp3;
      let guild = null;
      if (null != id) {
        guild = guild.getGuild(id);
      }
      if (arg4) {
        if (null == tmp3) {
          if (null != guild) {
            sortedRoles = sortedRoles.getSortedRoles(guild.id);
            for (const item10028 of sortedRoles) {
              if (first === item10028.name) {
                let obj = { type: "roleMention", roleId: null, children: null };
                obj[1] = item10028.id;
                let items = [{ text: "" }];
                obj[2] = items;
                obj.return();
                return obj;
              }
            }
          }
        }
      }
      if (arg3) {
        let channel = null;
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
            recipients = members.map((item, index) => item.userId);
          }
          const mapped = recipients.map((item, index) => user.getUser(item));
          const found = mapped.filter((item, index) => {
            let tmp = undefined !== item;
            if (tmp) {
              let str = closure_1;
              let flag = {}.requireExact;
              if (flag === undefined) {
                flag = false;
              }
              let tmp4 = null != item;
              if (tmp4) {
                const username = item.username;
                if (flag) {
                  let startsWithResult = username === first;
                } else {
                  startsWithResult = username.startsWith(first);
                }
                if (startsWithResult) {
                  if (str == null) {
                    str = "0";
                  }
                  startsWithResult = item.discriminator === str;
                }
                tmp4 = startsWithResult;
              }
              tmp = tmp4;
            }
            return tmp;
          });
          if (1 === found.length) {
            const first1 = found[0];
            if (callback4(first, tmp3, first1, { requireExact: true })) {
              obj = { type: "userMention", userId: null, children: null };
              obj[1] = first1.id;
              const items1 = [{ text: "" }];
              obj[2] = items1;
              return obj;
            }
          }
        }
      }
      return null;
    })(text, id, id2, tmp, tmp2);
  } else if (":" === first) {
    const EMOJI_NAME_RE = parseRawEmojiObjectDefault.EMOJI_NAME_RE;
    const match = EMOJI_NAME_RE.exec(text);
    let tmp7 = null;
    if (null != match) {
      disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(id);
      const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
      let obj2 = customEmoji.get(match[1]);
      let channel = null;
      if (null != id2) {
        channel = channel.getChannel(id2);
      }
      tmp7 = null;
      if (null != obj2) {
        obj = { emoji: null, channel: null, intention: null };
        obj[0] = obj2;
        obj[1] = channel;
        obj[2] = EmojiIntention.CHAT;
        tmp7 = null;
        if (!tmp4Result.isEmojiFiltered(obj)) {
          obj = { emojiId: null, name: null, animated: null, jumboable: false };
          obj[0] = obj2.id;
          if (!("require_colons" in obj2)) {
            obj1 = { type: "customEmoji", emoji: null, children: null };
            obj[1] = obj2.name;
            obj[2] = true === obj2.animated;
            obj1[1] = obj;
            obj = [];
            obj2 = { text: "" };
            obj[0] = obj2;
            obj1[2] = obj;
          }
          const _HermesInternal = HermesInternal;
          const combined = ":" + obj2.name + ":";
        }
        tmp4Result = getEmojiUnavailableReasonDefault;
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
            const num = callback2(11).keys(textChannelNameDisambiguations);
            num[Symbol.iterator]();
            const obj2 = callback2(11);
          }
          callback(4984).unescapeChannelName(arr.slice(2, arr.length - num));
          const obj = callback(4984);
        }
        const substr = arr.slice(1);
      }
    })(text, id);
  } else {
    return null;
  }
}
function matchesUser(arg0, arg1, username, requireExact) {
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
const result = require("obj132").fileFinishedImporting("modules/channel_text_area/PlaintextResolvers.tsx");

export { resolvePlaintextInlineVoid };
export const resolveApplicationCommandOption = function resolveApplicationCommandOption(text, id, id2, intention) {
  const tmp = resolvePlaintextInlineVoid(text, id, id2, intention);
  let voidToOptionValueResult = null;
  if (null != tmp) {
    voidToOptionValueResult = createEmptyState.voidToOptionValue(tmp);
  }
  return voidToOptionValueResult;
};