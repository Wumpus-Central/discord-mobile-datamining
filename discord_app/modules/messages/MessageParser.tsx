// discord_app/modules/messages/MessageParser.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import parseRawEmojiObjectDefault from "../emojis/UnicodeEmojis.tsx";
import nameFromUserDefault from "../../utils/UserUtils.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import parseLinkDefault from "../markup/MarkupRules.tsx";
import textRegexpDefault from "../markup/MarkupTextRule.tsx";
import getEmojiToGroupId from "../emojis/EmojiStore.tsx";
import rebuild from "../threads/ActiveJoinedThreadsStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "../../stores/GuildChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import initialize from "../../stores/StreamerModeStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { GAME_MENTION_SENTINEL } from "../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import { EmojiIntention } from "../emojis/EmojiConstants.tsx";
import importDefaultResult from "../../../_runtime/04092_t.js";

function rebuild(arr) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  c3 = "";
  const items = [];
  const item = arr.forEach((item, index) => {
    (function handleEmoji(closure_0, type, f79922) {
      if (null != f79922) {
        if ("customEmoticon" === type.type) {
          f79922(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = callback(4034).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (closure_0.emojiContext) {
                    let emojiContext = closure_0.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f79922(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = callback(4034);
              byId = obj2.getByName(match[2]);
            }
          }
          const obj = callback(4034);
        }
      }
    })(callback, item, f79922);
    if (typeof item.content === "string") {
      const type = item.type;
      if ("emoji" === type) {
        let obj = { position: null, length: null, id: null };
        obj[0] = _var.length;
        obj[1] = item.content.length;
        obj[2] = item.id;
        arr = arr.push(obj);
        _var = _var + item.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    _var = _var + lib(item.content);
                  }
                }
              }
            }
          }
        }
        if (true === callback.isNotification) {
          _var = _var + callback(f79922[26]).isolate(item.content);
          let obj2 = callback(f79922[26]);
        } else {
          _var = _var + item.content;
        }
      }
    } else {
      const _Array = Array;
      if (item.content.constructor === Array) {
        const tmp24 = rebuild(item.content, callback, lib, f79922);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          obj = { position: null, length: null, id: null };
          obj[0] = _var.length + item10008.position;
          ({ length: obj[1], id: obj[2] } = item10008);
          arr = arr.push(obj);
          continue;
        }
        _var = _var + tmp24.content;
      }
    }
  });
  return { content: c3, emoji: items };
}
function createParserState(getGuildId, arr) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    guild = store4.getGuild(guildId);
  }
  importDefault = closure_11.can(constants.MENTION_EVERYONE, getGuildId);
  let isPrivateResult;
  if (getGuildId != null) {
    isPrivateResult = getGuildId.isPrivate();
  }
  if (isPrivateResult) {
    const recipients = getGuildId.recipients;
    const mapped = recipients.map((item, index) => ({ userId: item, nick: null }));
    const currentUser = authStore.getCurrentUser();
    let mapped1 = mapped;
    if (null != currentUser) {
      let obj = { userId: null, nick: null };
      obj[0] = currentUser.id;
      arr = mapped.push(obj);
      mapped1 = mapped;
    }
  } else if (null != guildId) {
    members = members.getMembers(guildId);
    mapped1 = members.map((item, index) => ({ userId: item.userId, nick: item.nick }));
  } else {
    mapped1 = [];
  }
  const tmp11Result = applyDefault(mapped1.reduce((acc, item, index) => {
    const userId = item.userId;
    user = user.getUser(userId);
    if (null != user) {
      const obj = { id: null, text: null };
      obj[0] = userId;
      obj[1] = user.tag;
      acc.push(obj);
    }
    return acc;
  }, []));
  if (null != guild) {
    let sortedRoles = store3.getSortedRoles(guild.id);
  } else {
    sortedRoles = [];
  }
  const found = applyDefault(sortedRoles).filter((item, index) => {
    let mentionable = closure_1;
    if (!closure_1) {
      mentionable = item.mentionable;
    }
    return mentionable;
  });
  const mapped2 = found.map((item, index) => ({ id: item.id, text: item.name }));
  let tmp9Result = tmp9(12);
  const tmp13Result = applyDefault(sortedRoles);
  const mapped3 = tmp9Result(textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)).map((item, index) => ({ id: item.id, text: item.name }));
  if (null != guildId) {
    tmp9Result = tmp9(12);
    const found1 = tmp9Result(guildId(6714).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter((item, index) => item !== closure_7);
    const tmp9Result1Result = tmp9Result(guildId(6714).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const flatMapResult = found1.flatMap((item, index) => closure_1_6.getChannels(guildId)[item].map((item, index) => {
      const channel = item.channel;
      if (!channel.isCategory()) {
        const obj = { id: null, text: null };
        obj[0] = item.channel.id;
        obj[1] = callback(table[14]).computeChannelName(item.channel, closure_14, closure_12);
        let tmp3 = obj;
        const obj2 = callback(table[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }));
    let items = found1.flatMap((item, index) => closure_1_6.getChannels(guildId)[item].map((item, index) => {
      const channel = item.channel;
      if (!channel.isCategory()) {
        const obj = { id: null, text: null };
        obj[0] = item.channel.id;
        obj[1] = callback(table[14]).computeChannelName(item.channel, closure_14, closure_12);
        let tmp3 = obj;
        const obj2 = callback(table[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    })).filter(guildId(1370).isNotNullish).value();
    const iter = found1.flatMap((item, index) => closure_1_6.getChannels(guildId)[item].map((item, index) => {
      const channel = item.channel;
      if (!channel.isCategory()) {
        const obj = { id: null, text: null };
        obj[0] = item.channel.id;
        obj[1] = callback(table[14]).computeChannelName(item.channel, closure_14, closure_12);
        let tmp3 = obj;
        const obj2 = callback(table[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    })).filter(guildId(1370).isNotNullish);
  } else {
    items = [];
  }
  const allActiveJoinedThreads = closure_4.computeAllActiveJoinedThreads(guildId);
  const mapped4 = allActiveJoinedThreads.map((item, index) => {
    const obj = { id: item.id, text: guildId(table[14]).computeChannelName(item, closure_14, closure_12) };
    return obj;
  });
  const disambiguatedEmojiContext = store.getDisambiguatedEmojiContext(guildId);
  const escapedCustomEmoticonNames = disambiguatedEmojiContext.getEscapedCustomEmoticonNames();
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  obj = { inline: true, mentionableRoles: mapped2, guild, users: tmp11Result, games: null, channels: null, emojiContext: null, customEmoticonsRegex: null, customEmoji: null, textExclusions: null, isNotification: false };
  const customEmoticonRegex = disambiguatedEmojiContext.getCustomEmoticonRegex();
  const tmp9ResultResult = tmp9Result(textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId));
  if (null != arr) {
    const _Array = Array;
    arr = Array.from(arr.values());
  } else {
    arr = [];
  }
  const tmp9Result1 = applyDefault;
  obj[4] = applyDefault(arr).map((item, index) => ({ id: item.id, text: item.name }));
  const combined = mapped3.concat(items);
  obj[5] = combined.concat(mapped4);
  obj[6] = disambiguatedEmojiContext;
  obj[7] = customEmoticonRegex;
  obj[8] = customEmoji;
  obj[9] = escapedCustomEmoticonNames;
  return obj;
}
function NOOP(arg0) {
  return arg0;
}
function unparseWithMeta(content, id, isNotification) {
  const channel = store2.getChannel(id);
  let guildId = null;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    guild = store4.getGuild(guildId);
  }
  if (isNotification) {
    let omitResult = obj5;
  } else {
    omitResult = translateSurrogatesToInlineEmoji(12).omit(obj5, ["spoiler", "timestamp"]);
    const obj2 = translateSurrogatesToInlineEmoji(12);
  }
  if (isNotification) {
    translateSurrogatesToInlineEmoji = NOOP;
  } else {
    translateSurrogatesToInlineEmoji = translateSurrogatesToInlineEmoji(4034).translateSurrogatesToInlineEmoji;
  }
  let obj = { inline: true, guild, channelId: id, isNotification };
  const obj4 = translateSurrogatesToInlineEmoji(4092);
  dependencyMap = undefined;
  c3 = "";
  const items = [];
  const item = translateSurrogatesToInlineEmoji(4092).parserFor(omitResult)(content, obj).forEach((item, index) => {
    (function handleEmoji(closure_0, type, f79922) {
      if (null != f79922) {
        if ("customEmoticon" === type.type) {
          f79922(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = callback(4034).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (closure_0.emojiContext) {
                    let emojiContext = closure_0.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f79922(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = callback(4034);
              byId = obj2.getByName(match[2]);
            }
          }
          const obj = callback(4034);
        }
      }
    })(callback, item, f79922);
    if (typeof item.content === "string") {
      const type = item.type;
      if ("emoji" === type) {
        let obj = { position: null, length: null, id: null };
        obj[0] = _var.length;
        obj[1] = item.content.length;
        obj[2] = item.id;
        arr = arr.push(obj);
        _var = _var + item.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    _var = _var + lib(item.content);
                  }
                }
              }
            }
          }
        }
        if (true === callback.isNotification) {
          _var = _var + callback(f79922[26]).isolate(item.content);
          let obj2 = callback(f79922[26]);
        } else {
          _var = _var + item.content;
        }
      }
    } else {
      const _Array = Array;
      if (item.content.constructor === Array) {
        const tmp24 = rebuild(item.content, callback, lib, f79922);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          obj = { position: null, length: null, id: null };
          obj[0] = _var.length + item10008.position;
          ({ length: obj[1], id: obj[2] } = item10008);
          arr = arr.push(obj);
          continue;
        }
        _var = _var + tmp24.content;
      }
    }
  });
  obj = { content: c3, emoji: items };
  return obj;
}
({ Permissions: closure_15, MARKDOWN_SPOILER_REGEXP, MARKDOWN_STATIC_ROUTE_NAME_REGEXP } = ME);
let tmp3 = /^<@!?(\d+)>/;
const tmp4 = /^<@&(\d+)>/;
let tmp5 = /^<#(\d+)>/;
let tmp6 = /^<a?:(\w+):(\d+)>/;
const re18 = /(@everyone|@here|@Clyde)\b/;
const re19 = /^[^\s]+@[^\s]+\.[^\s.]+/;
let obj = { link: null, autolink: null, url: null, inlineCode: null, codeBlock: null, rawUserMention: null, rawRoleMention: null, rawChannelMention: null, rawEmoji: null, mention: null, channel: null, emoticon: null, emoji: null, customEmoticons: null, text: null };
let str = importDefaultResult.defaultRules.link;
obj[0] = {
  order: str.order,
  match: str.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str2 = importDefaultResult.defaultRules.autolink;
obj[1] = {
  order: str2.order,
  match: str2.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
const str3 = importDefaultResult.defaultRules.url;
obj[2] = {
  order: str3.order,
  match: str3.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str4 = parseLinkDefault.RULES.inlineCode;
obj[3] = {
  order: str4.order,
  match: str4.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str5 = parseLinkDefault.RULES.codeBlock;
obj[4] = {
  order: str5.order,
  match: str5.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
obj = {
  match: importDefaultResult.anyScopeRegex(tmp3),
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
obj[5] = obj;
obj = { match: null, parse: null };
obj[0] = importDefaultResult.anyScopeRegex(tmp4);
obj[1] = function parse(content) {
  return { type: "text", content: content[0] };
};
obj[6] = obj;
let obj1 = { match: null, parse: null };
const importDefaultResult1 = importDefaultResult;
obj1[0] = importDefaultResult.anyScopeRegex(tmp5);
obj1[1] = function parse(content) {
  return { type: "text", content: content[0] };
};
obj[7] = obj1;
let obj2 = { match: null, parse: null };
const importDefaultResult2 = importDefaultResult;
obj2[0] = importDefaultResult.anyScopeRegex(tmp6);
obj2[1] = function parse(content) {
  return { type: "text", content: content[0] };
};
obj[8] = obj2;
obj[9] = {
  match(str, games, str2) {
    const parts = str2.split(" ");
    if (regex2.test(parts.pop() + str)) {
      return null;
    } else {
      games = games.games;
      str7 = GAME_MENTION_SENTINEL;
      closure_1 = str;
      let mention = "gameMention";
      closure_3 = undefined;
      let firstResult;
      if ("gameMention"[0] === GAME_MENTION_SENTINEL) {
        closure_3 = str.substring(arr2.length);
        const found = games.sortBy((text) => -text.text.length).filter((item, index) => {
          const formatted = closure_1.toLowerCase();
          return 1 === formatted.indexOf(item.text.toLowerCase());
        });
        const sortByResult = games.sortBy((text) => -text.text.length);
        const mapped = found.sortBy((text) => {
          let num = 1;
          if (text.text === closure_3) {
            num = 0;
          }
          return num;
        }).map((item, index) => {
          const items = [closure_0 + item.text, item.id, channel];
          return items;
        });
        firstResult = mapped.first();
        const sortByResult1 = found.sortBy((text) => {
          let num = 1;
          if (text.text === closure_3) {
            num = 0;
          }
          return num;
        });
      }
      if (null != firstResult) {
        return firstResult;
      } else {
        let users = games.users;
        str7 = "@";
        closure_1 = str;
        mention = "mention";
        closure_3 = undefined;
        let firstResult1;
        if (str[0] === "@") {
          closure_3 = str.substring("@".length);
          const found1 = users.sortBy((text) => -text.text.length).filter((item, index) => {
            const formatted = closure_1.toLowerCase();
            return 1 === formatted.indexOf(item.text.toLowerCase());
          });
          const sortByResult2 = users.sortBy((text) => -text.text.length);
          const mapped1 = found1.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          }).map((item, index) => {
            const items = [closure_0 + item.text, item.id, channel];
            return items;
          });
          firstResult1 = mapped1.first();
          const sortByResult3 = found1.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          });
        }
        if (null != firstResult1) {
          return firstResult1;
        } else {
          const mentionableRoles = games.mentionableRoles;
          str7 = "@";
          closure_1 = str;
          mention = "roleMention";
          closure_3 = undefined;
          let firstResult2;
          if (str[0] === "@") {
            closure_3 = str.substring("@".length);
            const found2 = mentionableRoles.sortBy((text) => -text.text.length).filter((item, index) => {
              const formatted = closure_1.toLowerCase();
              return 1 === formatted.indexOf(item.text.toLowerCase());
            });
            const sortByResult4 = mentionableRoles.sortBy((text) => -text.text.length);
            const mapped2 = found2.sortBy((text) => {
              let num = 1;
              if (text.text === closure_3) {
                num = 0;
              }
              return num;
            }).map((item, index) => {
              const items = [closure_0 + item.text, item.id, channel];
              return items;
            });
            firstResult2 = mapped2.first();
            const sortByResult5 = found2.sortBy((text) => {
              let num = 1;
              if (text.text === closure_3) {
                num = 0;
              }
              return num;
            });
          }
          if (null != firstResult2) {
            return firstResult2;
          } else {
            users = games.users;
            const mapped3 = users.map((item, index) => {
              const obj = {};
              const merged = Object.assign(item);
              obj.text = item.text.split("#")[0];
              return obj;
            });
            str7 = "@";
            closure_1 = str;
            mention = "mention";
            closure_3 = undefined;
            let firstResult3;
            if (str[0] === "@") {
              closure_3 = str.substring("@".length);
              const found3 = mapped3.sortBy((text) => -text.text.length).filter((item, index) => {
                const formatted = closure_1.toLowerCase();
                return 1 === formatted.indexOf(item.text.toLowerCase());
              });
              const sortByResult6 = mapped3.sortBy((text) => -text.text.length);
              const mapped4 = found3.sortBy((text) => {
                let num = 1;
                if (text.text === closure_3) {
                  num = 0;
                }
                return num;
              }).map((item, index) => {
                const items = [closure_0 + item.text, item.id, channel];
                return items;
              });
              firstResult3 = mapped4.first();
              const sortByResult7 = found3.sortBy((text) => {
                let num = 1;
                if (text.text === closure_3) {
                  num = 0;
                }
                return num;
              });
            }
            if (null == firstResult3) {
              return null;
            } else {
              const match = regex.exec(str);
              if (null != match) {
                if (firstResult3[0].length <= match[0].length) {
                  return null;
                }
              }
              if ("" === "") {
                const SILENT_RE = str7(mention[17]).SILENT_RE;
                const match1 = SILENT_RE.exec(str);
                if (null != match1) {
                  if (firstResult3[0].length <= match1[0].length) {
                    return null;
                  }
                }
              }
              return firstResult3;
            }
          }
        }
      }
    }
  },
  parse(arg0) {
    [, tmp, tmp2] = arg0;
    if ("gameMention" === tmp2) {
      let obj = { type: null, content: null };
      obj[0] = tmp2;
      const _HermesInternal2 = HermesInternal;
      obj[1] = "<@$" + tmp + ">";
      return obj;
    } else {
      let str = "@";
      if ("roleMention" === tmp2) {
        str = "@&";
      }
      obj = { type: null, content: null };
      obj[0] = tmp2;
      const _HermesInternal = HermesInternal;
      obj[1] = "<" + str + tmp + ">";
      return obj;
    }
  }
};
obj[10] = {
  match(str, channels) {
    channels = channels.channels;
    str7 = undefined;
    closure_1 = undefined;
    let firstResult1;
    if (str[0] === "#") {
      if ("\"" !== str[1]) {
        str7 = "#";
        closure_1 = str;
        const channel = "channel";
        let firstResult;
        if ("channel"[0] === "#") {
          closure_3 = str.substring("#".length);
          const found = channels.sortBy((text) => -text.text.length).filter((item, index) => {
            const formatted = closure_1.toLowerCase();
            return 1 === formatted.indexOf(item.text.toLowerCase());
          });
          const sortByResult = channels.sortBy((text) => -text.text.length);
          const mapped = found.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          }).map((item, index) => {
            const items = [closure_0 + item.text, item.id, channel];
            return items;
          });
          firstResult = mapped.first();
          const sortByResult1 = found.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          });
        }
        firstResult1 = firstResult;
      } else {
        let num2 = 2;
        let num = 2;
        if (2 < str.length) {
          while (true) {
            if ("\\" !== str[num2]) {
              let sum = num2;
              num = num2;
              if ("\"" === str[num2]) {
                break;
              }
            } else {
              sum = num2 + 1;
            }
            num2 = sum + 1;
            num = num2;
            if (num2 >= str.length) {
              break;
            }
          }
        }
        str7 = str.substring(0, num + 1);
        closure_1 = str7(channel[14]).unescapeChannelName(str.substring(2, num));
        const obj = str7(channel[14]);
        const found1 = channels.sortBy((text) => -text.text.length).filter((item, index) => closure_1 === item.text);
        const mapped1 = found1.map((item, index) => {
          const items = [closure_0, item.id, "channel"];
          return items;
        });
        firstResult1 = mapped1.first();
        const sortByResult2 = channels.sortBy((text) => -text.text.length);
      }
    }
    if (firstResult1 == null) {
      firstResult1 = null;
    }
    return firstResult1;
  },
  parse(arg0) {
    return { type: "text", content: "<#" + arg0[1] + ">" };
  }
};
obj[11] = {
  match(arg0, arg1, arg2) {
    const ConvertEmoticons = str7(4066).ConvertEmoticons;
    if (ConvertEmoticons.getSetting()) {
      if (0 !== arg2.length) {
        if (!obj.test(arg2)) {
          return null;
        }
        obj = /\s$/;
      }
      const EMOJI_SHORTCUT_RE = parseRawEmojiObjectDefault.EMOJI_SHORTCUT_RE;
      const match = EMOJI_SHORTCUT_RE.exec(arg0);
      let tmp9 = null;
      if (null != match) {
        if (match[0].length !== arg0.length) {
          if (" " !== arg0[match[0].length]) {
            tmp9 = null;
          }
        }
        tmp9 = match;
      }
      return tmp9;
    } else {
      return null;
    }
  },
  parse(arg0) {
    const obj = { type: "emoticon", content: parseRawEmojiObjectDefault.convertShortcutToName(arg0[1]), isShortcut: true };
    return obj;
  }
};
const importDefaultResult3 = importDefaultResult;
obj[12] = {
  order: parseLinkDefault.RULES.emoji.order,
  match(arg0) {
    const EMOJI_NAME_RE = parseRawEmojiObjectDefault.EMOJI_NAME_RE;
    return EMOJI_NAME_RE.exec(arg0);
  },
  parse(arg0, arg1, customEmoji) {
    [tmp, tmp2] = arg0;
    customEmoji = customEmoji.customEmoji;
    let value = customEmoji.get(tmp2);
    if (value == null) {
      value = null;
    }
    if (null != value) {
      let str = "";
      if (true === value.animated) {
        str = "a";
      }
      let name = value.originalName;
      if (name == null) {
        name = value.name;
      }
      let obj = { type: "customEmoticon", content: null, emoji: null };
      const _HermesInternal = HermesInternal;
      obj[1] = "<" + str + ":" + name + ":" + value.id + ">";
      obj[2] = value;
    } else {
      obj = { type: "text", content: null };
      obj[1] = tmp;
    }
    return obj;
  }
};
obj[13] = {
  match(arg0, customEmoticonsRegex) {
    customEmoticonsRegex = customEmoticonsRegex.customEmoticonsRegex;
    let match;
    if (customEmoticonsRegex != null) {
      match = customEmoticonsRegex.exec(arg0);
    }
    if (match == null) {
      match = null;
    }
    return match;
  },
  parse(arg0, arg1, emojiContext) {
    [tmp, tmp2] = arg0;
    emojiContext = emojiContext.emojiContext;
    const emoticonByName = emojiContext.getEmoticonByName(tmp2);
    if (null != emoticonByName) {
      let str = "";
      if (true === emoticonByName.animated) {
        str = "a";
      }
      let obj = { type: "customEmoticon", content: null, emoji: null };
      const _HermesInternal = HermesInternal;
      obj[1] = "<" + str + ":" + emoticonByName.name + ":" + emoticonByName.id + ">";
      obj[2] = emoticonByName;
    } else {
      obj = { type: "text", content: null };
      obj[1] = tmp;
    }
    return obj;
  }
};
let obj4 = {};
let merged = Object.assign(textRegexpDefault);
obj4.match = function match(arg0, textExclusions) {
  if (typeof textExclusions.textExclusions === "string") {
    if ("" !== textExclusions.textExclusions) {
      const result = str7(6815).textMarkupPatternWithExclusions(textExclusions.textExclusions);
      let match = result.exec(arg0);
      const obj = str7(6815);
    }
    return match;
  }
  match = null;
  if (null != textRegexpDefault.match) {
    match = textRegexpDefault.match(arg0, textExclusions, "");
  }
};
obj[14] = obj4;
const obj5 = { inlineCode: null, codeBlock: null, mention: null, roleMention: null, channel: null, emoji: null, soundboard: null, spoiler: null, staticRouteLink: null, timestamp: null, text: null };
const str6 = parseLinkDefault.RULES.inlineCode;
obj5[0] = {
  order: str6.order,
  match: str6.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str7 = parseLinkDefault.RULES.codeBlock;
obj5[1] = {
  order: str7.order,
  match: str7.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
const obj6 = { match: null, parse: null };
obj6[0] = importDefaultResult.anyScopeRegex(tmp3);
obj6[1] = function parse(arg0, arg1, channelId) {
  ({ isNotification, guild } = channelId);
  closure_0 = undefined;
  const user = authStore.getUser(arg0[1]);
  if (null == user) {
    let obj = { content: null };
    obj[0] = arg0[0];
    return obj;
  } else {
    let str = "always";
    if (isNotification) {
      str = "always";
      if (enabled.enabled) {
        str = "never";
      }
    }
    obj = { identifiable: null };
    obj[0] = str;
    const str2 = nameFromUserDefault.getUserTag(user, obj);
    if (isNotification) {
      let tmp13Result = getNicknameDefault;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      let nickname = tmp13Result.getNickname(id, channelId.channelId, user);
      if (nickname == null) {
        tmp13Result = nameFromUserDefault;
        nickname = tmp13Result.getGlobalName(user);
      }
      if (null != nickname) {
        const _HermesInternal6 = HermesInternal;
        let combined = "@" + nickname;
      } else {
        const _HermesInternal5 = HermesInternal;
        combined = "@" + str2;
      }
      obj = { content: null };
      obj[0] = combined;
      return obj;
    } else if (user.bot) {
      obj1 = { content: null };
      const _HermesInternal4 = HermesInternal;
      obj1[0] = "@" + str2;
      return obj1;
    } else {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      let str4 = "";
      if (null != id1) {
        closure_0 = str2.toLowerCase();
        let str5 = "";
        if (tmp13Result1.some(store3.getUnsafeMutableRoles(guild.id), (name) => closure_0.startsWith(name.name.toLowerCase()))) {
          const _HermesInternal = HermesInternal;
          const combined1 = "" + user.discriminator;
          const _HermesInternal2 = HermesInternal;
          str5 = "#" + combined1.padStart(4, "0");
        }
        str4 = str5;
        tmp13Result1 = applyDefault;
      }
      const obj2 = { content: null };
      const _HermesInternal3 = HermesInternal;
      obj2[0] = "@" + str2 + str4;
      return obj2;
    }
  }
};
obj5[2] = obj6;
const obj7 = { match: null, parse: null };
const importDefaultResult4 = importDefaultResult;
obj7[0] = importDefaultResult.anyScopeRegex(tmp4);
obj7[1] = function parse(content, arg1, guild) {
  guild = guild.guild;
  if (null != guild) {
    const role = store3.getRole(guild.id, content[1]);
    if (null != role) {
      let obj = { content: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "@" + role.name;
      return obj;
    }
  }
  obj = { content: content[0] };
  return obj;
};
obj5[3] = obj7;
const obj8 = { match: null, parse: null };
const importDefaultResult5 = importDefaultResult;
obj8[0] = importDefaultResult.anyScopeRegex(tmp5);
obj8[1] = function parse(arg0) {
  const channel = store2.getChannel(arg0[1]);
  if (null == channel) {
    let content = arg0[0];
  } else {
    const obj = str7(4984);
    content = obj.computeChannelName(channel, closure_14, closure_12, true, true);
  }
  return { content };
};
obj5[4] = obj8;
const obj9 = { match: null, parse: null };
const importDefaultResult6 = importDefaultResult;
obj9[0] = importDefaultResult.anyScopeRegex(tmp6);
obj9[1] = function parse(arg0, arg1, guild) {
  [, name, tmp] = arg0;
  guild = guild.guild;
  let id = null;
  if (guild) {
    id = guild.id;
  }
  const disambiguatedEmojiContext = store.getDisambiguatedEmojiContext(id);
  const byId = disambiguatedEmojiContext.getById(tmp);
  if (null != byId) {
    name = byId.name;
  }
  return { content: ":" + name + ":", id: tmp };
};
obj5[5] = obj9;
let obj10 = { match: null, parse: null };
const importDefaultResult7 = importDefaultResult;
obj10[0] = importDefaultResult.anyScopeRegex(require("getSoundmojiASTFromString").soundmojiRawFormatRegex);
obj10[1] = function parse(arg0) {
  [, tmp, tmp2] = arg0;
  return { content: "<sound:" + tmp + ":" + tmp2 + ">" };
};
obj5[6] = obj10;
const obj11 = { match: null, parse: null };
const importDefaultResult8 = importDefaultResult;
obj11[0] = importDefaultResult.anyScopeRegex(MARKDOWN_SPOILER_REGEXP);
obj11[1] = function parse() {
  const obj = { content: null };
  const intl = str7(1236).intl;
  obj[0] = "<" + intl.string(str7(1236).t["F+x38C"]).toLowerCase() + ">";
  return obj;
};
obj5[7] = obj11;
const obj12 = { match: null, parse: null };
const importDefaultResult9 = importDefaultResult;
obj12[0] = importDefaultResult.anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP);
obj12[1] = function parse(arg0) {
  return { content: "<id:" + arg0[1] + ">" };
};
obj5[8] = obj12;
const obj13 = {};
const merged1 = Object.assign(parseLinkDefault.RULES.timestamp);
obj13.parse = function parse() {
  const items = [...arguments];
  const timestamp = parseLinkDefault.RULES.timestamp;
  const items1 = [...items];
  const applyResult = timestamp.parse.apply(items1);
  if ("text" === applyResult.type) {
    let obj = { content: null };
    obj[0] = applyResult.content;
  } else {
    obj = { content: null };
    obj[0] = applyResult.formatted;
  }
  return obj;
};
obj5[9] = obj13;
const merged2 = Object.assign(textRegexpDefault);
obj5[10] = {};
let items = [obj, obj5];
let item = items.forEach((item, index) => {
  closure_0 = item;
  const keys = Object.keys(item);
  item = keys.forEach((item, index) => {
    item[item].order = index;
  });
});
const importDefaultResult10 = importDefaultResult;
let closure_21 = importDefaultResult.parserFor(obj);
const re22 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
const importDefaultResult11 = importDefaultResult;
const obj15 = {
  parse(getGuildId, content, arg2, arr) {
    closure_0 = getGuildId;
    let tmp = arg2;
    importDefault = undefined;
    if (tmp == null) {
      tmp = createParserState(getGuildId, arr);
    }
    let obj = { content, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
    importDefault = obj;
    arr = callback(obj.content, tmp);
    closure_0 = tmp;
    importDefault = importDefault(f79922[19]).translateInlineEmojiToSurrogates;
    f79922 = (emoji) => {
      lib(f79922[29]);
      const obj = { emoji, channel: closure_0, intention: EmojiIntention.CHAT };
      if (obj.isEmojiPremiumLocked(obj)) {
        const invalidEmojis = lib.invalidEmojis;
        invalidEmojis.push(emoji);
      } else if (!arg1) {
        const prop = lib.validNonShortcutEmojis;
        prop.push(emoji);
      }
    };
    c3 = "";
    closure_4 = [];
    const item = arr.forEach((item, index) => {
      (function handleEmoji(closure_0, type, f79922) {
        if (null != f79922) {
          if ("customEmoticon" === type.type) {
            f79922(type.emoji, false);
          }
          if ("emoticon" === type.type) {
            const result = callback(4034).translateSurrogatesToInlineEmoji(type.content);
            let match = regex.exec(result);
            if (null !== match) {
              while (true) {
                if (null != match[1]) {
                  if ("" !== match[1]) {
                    let byId;
                    if (closure_0.emojiContext) {
                      let emojiContext = closure_0.emojiContext;
                      byId = emojiContext.getById(match[1]);
                    }
                    if (byId) {
                      let tmp11 = type.isShortcut || false;
                      let tmp12 = f79922(byId, tmp11);
                    }
                    match = regex.exec(result);
                    if (null === match) {
                      break;
                    }
                  }
                }
                let obj2 = callback(4034);
                byId = obj2.getByName(match[2]);
              }
            }
            const obj = callback(4034);
          }
        }
      })(callback, item, f79922);
      if (typeof item.content === "string") {
        const type = item.type;
        if ("emoji" === type) {
          let obj = { position: null, length: null, id: null };
          obj[0] = _var.length;
          obj[1] = item.content.length;
          obj[2] = item.id;
          arr = arr.push(obj);
          _var = _var + item.content;
        } else {
          if ("codeBlock" !== type) {
            if ("inlineCode" !== type) {
              if ("mention" !== type) {
                if ("roleMention" !== type) {
                  if ("gameMention" !== type) {
                    if ("channel" !== type) {
                      _var = _var + lib(item.content);
                    }
                  }
                }
              }
            }
          }
          if (true === callback.isNotification) {
            _var = _var + callback(f79922[26]).isolate(item.content);
            let obj2 = callback(f79922[26]);
          } else {
            _var = _var + item.content;
          }
        }
      } else {
        const _Array = Array;
        if (item.content.constructor === Array) {
          const tmp24 = rebuild(item.content, callback, lib, f79922);
          const emoji = tmp24.emoji;
          for (const item10008 of emoji) {
            obj = { position: null, length: null, id: null };
            obj[0] = _var.length + item10008.position;
            ({ length: obj[1], id: obj[2] } = item10008);
            arr = arr.push(obj);
            continue;
          }
          _var = _var + tmp24.content;
        }
      }
    });
    obj.content = c3;
    return obj;
  },
  parsePreprocessor(getGuildId, arg1) {
    return callback(arg1, createParserState(getGuildId));
  },
  unparse(content, id, isNotification) {
    return unparseWithMeta(content, id, isNotification).content;
  },
  unparseWithMeta
};
let result = require("obj132").fileFinishedImporting("modules/messages/MessageParser.tsx");

export default obj15;
export const parseAndRebuild = function parseAndRebuild(arg0, arg1, arg2) {
  closure_0 = arg1;
  importDefault = parseRawEmojiObjectDefault.translateInlineEmojiToSurrogates;
  dependencyMap = arg2;
  c3 = "";
  closure_4 = [];
  const item = callback(arg0, arg1).forEach((item, index) => {
    (function handleEmoji(closure_0, type, f79922) {
      if (null != f79922) {
        if ("customEmoticon" === type.type) {
          f79922(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = callback(4034).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (closure_0.emojiContext) {
                    let emojiContext = closure_0.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f79922(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = callback(4034);
              byId = obj2.getByName(match[2]);
            }
          }
          const obj = callback(4034);
        }
      }
    })(callback, item, f79922);
    if (typeof item.content === "string") {
      const type = item.type;
      if ("emoji" === type) {
        let obj = { position: null, length: null, id: null };
        obj[0] = _var.length;
        obj[1] = item.content.length;
        obj[2] = item.id;
        arr = arr.push(obj);
        _var = _var + item.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    _var = _var + lib(item.content);
                  }
                }
              }
            }
          }
        }
        if (true === callback.isNotification) {
          _var = _var + callback(f79922[26]).isolate(item.content);
          let obj2 = callback(f79922[26]);
        } else {
          _var = _var + item.content;
        }
      }
    } else {
      const _Array = Array;
      if (item.content.constructor === Array) {
        const tmp24 = rebuild(item.content, callback, lib, f79922);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          obj = { position: null, length: null, id: null };
          obj[0] = _var.length + item10008.position;
          ({ length: obj[1], id: obj[2] } = item10008);
          arr = arr.push(obj);
          continue;
        }
        _var = _var + tmp24.content;
      }
    }
  });
  return c3;
};
export { createParserState };