import _slicedToArray from "_slicedToArray";
import getEmojiToGroupId from "getEmojiToGroupId";
import rebuild from "rebuild";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_8 } from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";
import { EmojiIntention } from "set";

const require = arg1;
function resolvePlaintextInlineVoid(text, throwTypeErrorResult, id, intention) {
  let obj = intention;
  if (intention == null) {
    obj = {};
  }
  const allowUsers = obj.allowUsers;
  const allowRoles = obj.allowRoles;
  let first = text[0];
  if ("@" === first) {
    return (function resolveUserOrRole(arr, throwTypeErrorResult, id, arg3, arg4) {
      let tmp = callback3(arr.slice(1).split("#", 2), 2);
      const first = tmp[0];
      let closure_1 = tmp3;
      let guild = null;
      if (null != throwTypeErrorResult) {
        guild = guild.getGuild(throwTypeErrorResult);
      }
      if (arg4) {
        if (null == tmp3) {
          if (null != guild) {
            sortedRoles = sortedRoles.getSortedRoles(guild.id);
            for (const item10028 of sortedRoles) {
              let tmp10 = item10028;
              if (first === item10028.name) {
                let obj = { type: "roleMention", roleId: null, children: null };
                obj[1] = item10028.id;
                let items = [{ text: "" }];
                obj[2] = items;
                let tmp11 = obj;
                obj.return();
                return obj;
              }
            }
          }
        }
      }
      if (arg3) {
        let channel = null;
        if (null != id) {
          channel = channel.getChannel(id);
        }
        if (null == channel) {
          return null;
        } else {
          if (channel.isPrivate()) {
            let recipients = channel.recipients;
          } else {
            members = members.getMembers(throwTypeErrorResult);
            recipients = members.map((userId) => userId.userId);
          }
          const mapped = recipients.map((arg0) => user.getUser(arg0));
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
                  let startsWithResult = username === tmp2;
                } else {
                  startsWithResult = username.startsWith(tmp2);
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
    })(text, throwTypeErrorResult, id, tmp, tmp2);
  } else if (":" === first) {
    const EMOJI_NAME_RE = importDefault(3926).EMOJI_NAME_RE;
    const match = EMOJI_NAME_RE.exec(text);
    let tmp7 = null;
    if (null != match) {
      disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(throwTypeErrorResult);
      const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
      let obj2 = customEmoji.get(match[1]);
      let channel = null;
      if (null != id) {
        channel = channel.getChannel(id);
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
            const obj1 = { type: "customEmoji", emoji: null, children: null };
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
        tmp4Result = importDefault(3930);
      }
    }
    return tmp7;
  } else if ("#" === first) {
    return (function resolveChannel(arr, throwTypeErrorResult) {
      if (null == throwTypeErrorResult) {
        return null;
      } else {
        if (arr.length > 3) {
          if ("\"" === arr[1]) {
            let num = 1;
            textChannelNameDisambiguations = textChannelNameDisambiguations.getTextChannelNameDisambiguations(throwTypeErrorResult);
            num = callback2(11).keys(textChannelNameDisambiguations);
            num[Symbol.iterator]();
            const obj2 = callback2(11);
          }
          callback(4475).unescapeChannelName(arr.slice(2, arr.length - num));
          const obj = callback(4475);
        }
        const substr = arr.slice(1);
      }
    })(text, throwTypeErrorResult);
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
const result = require("rebuild").fileFinishedImporting("modules/channel_text_area/PlaintextResolvers.tsx");

export { resolvePlaintextInlineVoid };
export const resolveApplicationCommandOption = function resolveApplicationCommandOption(text, throwTypeErrorResult, id, intention) {
  const tmp = resolvePlaintextInlineVoid(text, throwTypeErrorResult, id, intention);
  let voidToOptionValueResult = null;
  if (null != tmp) {
    voidToOptionValueResult = require(7065) /* createEmptyState */.voidToOptionValue(tmp);
    const obj = require(7065) /* createEmptyState */;
  }
  return voidToOptionValueResult;
};