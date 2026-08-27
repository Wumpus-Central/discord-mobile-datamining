// === Module 7360: rebuild ===

// Module 7360 (rebuild)
import applyDefault from "apply" /* 12 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4102 */;
import nameFromUserDefault from "nameFromUser" /* 4289 */;
import parseLinkDefault from "parseLink" /* 4903 */;
import textRegexpDefault from "textRegexp" /* 4910 */;
import closure_3 from "getEmojiToGroupId" /* 5353 */;
import closure_4 from "rebuild" /* 5400 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "comparator" /* 1982 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "comparator" /* 1982 */;
import closure_8 from "trackCommunicationDisabled" /* 1992 */;
import closure_9 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_10 from "createGuildRecordFromRust" /* 1910 */;
import closure_11 from "getUncachedChannelPermissions" /* 4089 */;
import closure_12 from "markAllUserIdListsStale" /* 4098 */;
import closure_13 from "initialize" /* 4290 */;
import closure_14 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { GAME_MENTION_SENTINEL } from "regExp" /* 4905 */;
import { EmojiIntention } from "set" /* 1925 */;
import importDefaultResult from "t" /* 4160 */;

let str7 = arg1;
function rebuild(arr) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  c3 = "";
  const items = [];
  const item = arr.forEach((content) => {
    (function handleEmoji(closure_0, type, f80604) {
      if (null != f80604) {
        if ("customEmoticon" === type.type) {
          f80604(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = callback(4102).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              let tmp7 = match;
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (closure_0.emojiContext) {
                    let emojiContext = closure_0.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f80604(byId, tmp11);
                  }
                  let tmp13 = regex;
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let tmp8 = callback;
              let tmp9 = dependencyMap;
              let obj2 = callback(4102);
              byId = obj2.getByName(match[2]);
            }
          }
          const obj = callback(4102);
        }
      }
    })(callback, content, f80604);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        let obj = { position: null, length: null, id: null };
        obj[0] = _var.length;
        obj[1] = content.content.length;
        obj[2] = content.id;
        arr = arr.push(obj);
        _var = _var + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    _var = _var + lib(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === tmp.isNotification) {
          _var = _var + callback(f80604[26]).isolate(content.content);
          let obj2 = callback(f80604[26]);
        } else {
          _var = _var + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = closure_1_23(content.content, tmp, lib, tmp2);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          let tmp5 = arr;
          obj = { position: null, length: null, id: null };
          let tmp6 = _var;
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
    const mapped = recipients.map((userId) => ({ userId, nick: null }));
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
    mapped1 = members.map((userId) => ({ userId: userId.userId, nick: userId.nick }));
  } else {
    mapped1 = [];
  }
  const tmp11 = applyDefault;
  const tmp11Result = applyDefault(mapped1.reduce((arr, userId) => {
    userId = userId.userId;
    user = user.getUser(userId);
    if (null != user) {
      const obj = { id: null, text: null };
      obj[0] = userId;
      obj[1] = user.tag;
      arr.push(obj);
    }
    return arr;
  }, []));
  if (null != guild) {
    let sortedRoles = store3.getSortedRoles(guild.id);
  } else {
    sortedRoles = [];
  }
  const tmp13 = applyDefault;
  const found = applyDefault(sortedRoles).filter((mentionable) => {
    mentionable = closure_1;
    if (!closure_1) {
      mentionable = mentionable.mentionable;
    }
    return mentionable;
  });
  const mapped2 = found.map((id) => ({ id: id.id, text: id.name }));
  let tmp9Result = tmp9(12);
  const tmp13Result = applyDefault(sortedRoles);
  const mapped3 = tmp9Result(textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)).map((id) => ({ id: id.id, text: id.name }));
  if (null != guildId) {
    tmp9Result = tmp9(12);
    const found1 = tmp9Result(guildId(5337).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter((arg0) => arg0 !== closure_7);
    const tmp9Result1Result = tmp9Result(guildId(5337).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const flatMapResult = found1.flatMap((arg0) => closure_1_6.getChannels(guildId)[arg0].map((channel) => {
      channel = channel.channel;
      if (!channel.isCategory()) {
        const obj = { id: null, text: null };
        obj[0] = channel.channel.id;
        obj[1] = callback(table[14]).computeChannelName(channel.channel, closure_14, closure_12);
        let tmp3 = obj;
        const obj2 = callback(table[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }));
    let items = found1.flatMap((arg0) => closure_1_6.getChannels(guildId)[arg0].map((channel) => {
      channel = channel.channel;
      if (!channel.isCategory()) {
        const obj = { id: null, text: null };
        obj[0] = channel.channel.id;
        obj[1] = callback(table[14]).computeChannelName(channel.channel, closure_14, closure_12);
        let tmp3 = obj;
        const obj2 = callback(table[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    })).filter(guildId(1370).isNotNullish).value();
    const iter = found1.flatMap((arg0) => closure_1_6.getChannels(guildId)[arg0].map((channel) => {
      channel = channel.channel;
      if (!channel.isCategory()) {
        const obj = { id: null, text: null };
        obj[0] = channel.channel.id;
        obj[1] = callback(table[14]).computeChannelName(channel.channel, closure_14, closure_12);
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
  const mapped4 = allActiveJoinedThreads.map((id) => {
    const obj = { id: id.id, text: guildId(table[14]).computeChannelName(id, closure_14, closure_12) };
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
  obj[4] = applyDefault(arr).map((id) => ({ id: id.id, text: id.name }));
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
    omitResult = translateSurrogatesToInlineEmoji(12).omit(obj5, ["spoiler", "timestamp", "unicodeEmoji"]);
    const obj2 = translateSurrogatesToInlineEmoji(12);
  }
  if (isNotification) {
    translateSurrogatesToInlineEmoji = NOOP;
  } else {
    translateSurrogatesToInlineEmoji = translateSurrogatesToInlineEmoji(4102).translateSurrogatesToInlineEmoji;
  }
  let obj = { inline: true, guild, channelId: id, isNotification };
  const obj4 = translateSurrogatesToInlineEmoji(4160);
  dependencyMap = undefined;
  c3 = "";
  const items = [];
  const item = translateSurrogatesToInlineEmoji(4160).parserFor(omitResult)(content, obj).forEach((content) => {
    (function handleEmoji(closure_0, type, f80604) {
      if (null != f80604) {
        if ("customEmoticon" === type.type) {
          f80604(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = callback(4102).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              let tmp7 = match;
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (closure_0.emojiContext) {
                    let emojiContext = closure_0.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f80604(byId, tmp11);
                  }
                  let tmp13 = regex;
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let tmp8 = callback;
              let tmp9 = dependencyMap;
              let obj2 = callback(4102);
              byId = obj2.getByName(match[2]);
            }
          }
          const obj = callback(4102);
        }
      }
    })(callback, content, f80604);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        let obj = { position: null, length: null, id: null };
        obj[0] = _var.length;
        obj[1] = content.content.length;
        obj[2] = content.id;
        arr = arr.push(obj);
        _var = _var + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    _var = _var + lib(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === tmp.isNotification) {
          _var = _var + callback(f80604[26]).isolate(content.content);
          let obj2 = callback(f80604[26]);
        } else {
          _var = _var + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = closure_1_23(content.content, tmp, lib, tmp2);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          let tmp5 = arr;
          obj = { position: null, length: null, id: null };
          let tmp6 = _var;
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
str7 = str;
obj[0] = {
  order: str.order,
  match: str.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str2 = importDefaultResult.defaultRules.autolink;
str7 = str2;
obj[1] = {
  order: str2.order,
  match: str2.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
const str3 = importDefaultResult.defaultRules.url;
str7 = str3;
obj[2] = {
  order: str3.order,
  match: str3.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str4 = parseLinkDefault.RULES.inlineCode;
str7 = str4;
obj[3] = {
  order: str4.order,
  match: str4.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
let str5 = parseLinkDefault.RULES.codeBlock;
str7 = str5;
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
      if (str[0] === GAME_MENTION_SENTINEL) {
        closure_3 = str.substring(arr2.length);
        const found = games.sortBy((text) => -text.text.length).filter((text) => {
          const formatted = closure_1.toLowerCase();
          return 1 === formatted.indexOf(text.text.toLowerCase());
        });
        const sortByResult = games.sortBy((text) => -text.text.length);
        const mapped = found.sortBy((text) => {
          let num = 1;
          if (text.text === closure_3) {
            num = 0;
          }
          return num;
        }).map((text) => {
          const items = [closure_0 + text.text, text.id, channel];
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
          const found1 = users.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return 1 === formatted.indexOf(text.text.toLowerCase());
          });
          const sortByResult2 = users.sortBy((text) => -text.text.length);
          const mapped1 = found1.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          }).map((text) => {
            const items = [closure_0 + text.text, text.id, channel];
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
            const found2 = mentionableRoles.sortBy((text) => -text.text.length).filter((text) => {
              const formatted = closure_1.toLowerCase();
              return 1 === formatted.indexOf(text.text.toLowerCase());
            });
            const sortByResult4 = mentionableRoles.sortBy((text) => -text.text.length);
            const mapped2 = found2.sortBy((text) => {
              let num = 1;
              if (text.text === closure_3) {
                num = 0;
              }
              return num;
            }).map((text) => {
              const items = [closure_0 + text.text, text.id, channel];
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
            const mapped3 = users.map((text) => {
              const obj = {};
              const merged = Object.assign(text);
              obj.text = text.text.split("#")[0];
              return obj;
            });
            str7 = "@";
            closure_1 = str;
            mention = "mention";
            closure_3 = undefined;
            let firstResult3;
            if (str[0] === "@") {
              closure_3 = str.substring("@".length);
              const found3 = mapped3.sortBy((text) => -text.text.length).filter((text) => {
                const formatted = closure_1.toLowerCase();
                return 1 === formatted.indexOf(text.text.toLowerCase());
              });
              const sortByResult6 = mapped3.sortBy((text) => -text.text.length);
              const mapped4 = found3.sortBy((text) => {
                let num = 1;
                if (text.text === closure_3) {
                  num = 0;
                }
                return num;
              }).map((text) => {
                const items = [closure_0 + text.text, text.id, channel];
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
              if ("" === str2) {
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
        if (str[0] === "#") {
          closure_3 = str.substring("#".length);
          const found = channels.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return 1 === formatted.indexOf(text.text.toLowerCase());
          });
          const sortByResult = channels.sortBy((text) => -text.text.length);
          const mapped = found.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          }).map((text) => {
            const items = [closure_0 + text.text, text.id, channel];
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
            let tmp2 = num2;
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
        const found1 = channels.sortBy((text) => -text.text.length).filter((text) => closure_1 === text.text);
        const mapped1 = found1.map((id) => {
          const items = [closure_0, id.id, "channel"];
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
    const ConvertEmoticons = str7(4134).ConvertEmoticons;
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
      const result = str7(4910).textMarkupPatternWithExclusions(textExclusions.textExclusions);
      let match = result.exec(arg0);
      const obj = str7(4910);
    }
    return match;
  }
  match = null;
  if (null != textRegexpDefault.match) {
    match = textRegexpDefault.match(arg0, textExclusions, "");
    const str = textRegexpDefault;
  }
};
obj[14] = obj4;
const obj5 = { inlineCode: null, codeBlock: null, mention: null, roleMention: null, channel: null, emoji: null, soundboard: null, unicodeEmoji: null, spoiler: null, staticRouteLink: null, timestamp: null, text: null };
const str6 = parseLinkDefault.RULES.inlineCode;
str7 = str6;
obj5[0] = {
  order: str6.order,
  match: str6.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
str7 = parseLinkDefault.RULES.codeBlock;
obj5[1] = {
  order: str7.order,
  match: str7.match,
  parse(content) {
    return { type: str7.type, content: content[0] };
  }
};
const obj6 = { match: null, parse: null };
const obj3 = {
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
      let tmp13Result = tmp13(4638);
      let id;
      if (guild != null) {
        id = guild.id;
      }
      let nickname = tmp13Result.getNickname(id, channelId.channelId, user);
      if (nickname == null) {
        tmp13Result = tmp13(4289);
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
        tmp13Result1 = tmp13(12);
      }
      const obj2 = { content: null };
      const _HermesInternal3 = HermesInternal;
      obj2[0] = "@" + str2 + str4;
      return obj2;
    }
    const obj10 = nameFromUserDefault;
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
    const obj = str7(4639);
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
obj11[0] = importDefaultResult.anyScopeRegex(parseRawEmojiObjectDefault.EMOJI_NAME_RE);
obj11[1] = function parse(arg0) {
  [tmp, tmp2] = arg0;
  const result = parseRawEmojiObjectDefault.convertNameToSurrogate(tmp2);
  if ("" !== result) {
    const content = result;
  }
  return { content };
};
obj5[7] = obj11;
const obj12 = { match: null, parse: null };
const importDefaultResult9 = importDefaultResult;
obj12[0] = importDefaultResult.anyScopeRegex(MARKDOWN_SPOILER_REGEXP);
obj12[1] = function parse() {
  const obj = { content: null };
  const intl = str7(1236).intl;
  obj[0] = "<" + intl.string(str7(1236).t["F+x38C"]).toLowerCase() + ">";
  return obj;
};
obj5[8] = obj12;
const obj13 = { match: null, parse: null };
const importDefaultResult10 = importDefaultResult;
obj13[0] = importDefaultResult.anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP);
obj13[1] = function parse(arg0) {
  return { content: "<id:" + arg0[1] + ">" };
};
obj5[9] = obj13;
const obj14 = {};
const merged1 = Object.assign(parseLinkDefault.RULES.timestamp);
obj14.parse = function parse() {
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
obj5[10] = obj14;
const merged2 = Object.assign(textRegexpDefault);
obj5[11] = {};
let items = [obj, obj5];
let item = items.forEach((arg0) => {
  closure_0 = arg0;
  const keys = Object.keys(arg0);
  const item = keys.forEach((arg0, order) => {
    table[arg0].order = order;
  });
});
const importDefaultResult11 = importDefaultResult;
const obj15 = {};
let closure_21 = importDefaultResult.parserFor(obj);
const re22 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
const importDefaultResult12 = importDefaultResult;
const obj16 = {
  parse(getGuildId, content, arg2, arr) {
    closure_0 = getGuildId;
    let tmp = arg2;
    importDefault = undefined;
    if (tmp == null) {
      tmp = createParserState(getGuildId, arr);
    }
    let obj = { content, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
    importDefault = obj;
    closure_0 = tmp;
    importDefault = importDefault(f80604[19]).translateInlineEmojiToSurrogates;
    f80604 = (emoji) => {
      let obj = lib(f80604[29]);
      obj = { emoji, channel: closure_0, intention: closure_1_17.CHAT };
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
    const item = callback(obj.content, tmp).forEach((content) => {
      (function handleEmoji(closure_0, type, f80604) {
        if (null != f80604) {
          if ("customEmoticon" === type.type) {
            f80604(type.emoji, false);
          }
          if ("emoticon" === type.type) {
            const result = callback(4102).translateSurrogatesToInlineEmoji(type.content);
            let match = regex.exec(result);
            if (null !== match) {
              while (true) {
                let tmp7 = match;
                if (null != match[1]) {
                  if ("" !== match[1]) {
                    let byId;
                    if (closure_0.emojiContext) {
                      let emojiContext = closure_0.emojiContext;
                      byId = emojiContext.getById(match[1]);
                    }
                    if (byId) {
                      let tmp11 = type.isShortcut || false;
                      let tmp12 = f80604(byId, tmp11);
                    }
                    let tmp13 = regex;
                    match = regex.exec(result);
                    if (null === match) {
                      break;
                    }
                  }
                }
                let tmp8 = callback;
                let tmp9 = dependencyMap;
                let obj2 = callback(4102);
                byId = obj2.getByName(match[2]);
              }
            }
            const obj = callback(4102);
          }
        }
      })(callback, content, f80604);
      if (typeof content.content === "string") {
        const type = content.type;
        if ("emoji" === type) {
          let obj = { position: null, length: null, id: null };
          obj[0] = _var.length;
          obj[1] = content.content.length;
          obj[2] = content.id;
          arr = arr.push(obj);
          _var = _var + content.content;
        } else {
          if ("codeBlock" !== type) {
            if ("inlineCode" !== type) {
              if ("mention" !== type) {
                if ("roleMention" !== type) {
                  if ("gameMention" !== type) {
                    if ("channel" !== type) {
                      _var = _var + lib(content.content);
                    }
                  }
                }
              }
            }
          }
          if (true === tmp.isNotification) {
            _var = _var + callback(f80604[26]).isolate(content.content);
            let obj2 = callback(f80604[26]);
          } else {
            _var = _var + content.content;
          }
        }
      } else {
        const _Array = Array;
        if (content.content.constructor === Array) {
          const tmp24 = closure_1_23(content.content, tmp, lib, tmp2);
          const emoji = tmp24.emoji;
          for (const item10008 of emoji) {
            let tmp5 = arr;
            obj = { position: null, length: null, id: null };
            let tmp6 = _var;
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
let result = require("set").fileFinishedImporting("modules/messages/MessageParser.tsx");

export default obj16;
export const parseAndRebuild = function parseAndRebuild(arg0, arg1, arg2) {
  closure_0 = arg1;
  importDefault = parseRawEmojiObjectDefault.translateInlineEmojiToSurrogates;
  dependencyMap = arg2;
  c3 = "";
  closure_4 = [];
  const item = callback(arg0, arg1).forEach((content) => {
    (function handleEmoji(closure_0, type, f80604) {
      if (null != f80604) {
        if ("customEmoticon" === type.type) {
          f80604(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = callback(4102).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              let tmp7 = match;
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (closure_0.emojiContext) {
                    let emojiContext = closure_0.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f80604(byId, tmp11);
                  }
                  let tmp13 = regex;
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let tmp8 = callback;
              let tmp9 = dependencyMap;
              let obj2 = callback(4102);
              byId = obj2.getByName(match[2]);
            }
          }
          const obj = callback(4102);
        }
      }
    })(callback, content, f80604);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        let obj = { position: null, length: null, id: null };
        obj[0] = _var.length;
        obj[1] = content.content.length;
        obj[2] = content.id;
        arr = arr.push(obj);
        _var = _var + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    _var = _var + lib(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === tmp.isNotification) {
          _var = _var + callback(f80604[26]).isolate(content.content);
          let obj2 = callback(f80604[26]);
        } else {
          _var = _var + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = closure_1_23(content.content, tmp, lib, tmp2);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          let tmp5 = arr;
          obj = { position: null, length: null, id: null };
          let tmp6 = _var;
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