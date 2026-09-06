// === Module 7682: MessageParser ===

// Module 7682 (MessageParser)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4217 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import useChannelName from "useChannelName" /* 4713 */;
import MarkupRulesDefault from "MarkupRules" /* 4998 */;
import MarkupTextRule2 from "MarkupTextRule" /* 5005 */;
import AutocompleteBoundaryUtils from "AutocompleteBoundaryUtils" /* 7683 */;
import parseContentForSuppressNotifications from "parseContentForSuppressNotifications" /* 7684 */;
import IsolateString from "IsolateString" /* 7685 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5506 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;
import t from "module_4257" /* 4257 */;

const MarkupTextRuleDefault = MarkupTextRule2;

require = fn;
function rebuild(arr, arg1, arg2, arg3) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  content = "";
  const items = [];
  const item = arr.forEach((content) => {
    (function handleEmoji(emojiContext, type, fn) {
      if (null != fn) {
        if ("customEmoticon" === type.type) {
          fn(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = obj(4213).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (emojiContext.emojiContext) {
                    emojiContext = emojiContext.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = fn(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = obj(4213);
              byId = obj2.getByName(match[2]);
            }
          }
          obj = obj(4213);
        }
      }
    })(isNotification, content, dependencyMap);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        obj = { position: closure_3.length, length: content.content.length, id: content.id };
        ActiveJoinedThreadsStore.push(obj);
        closure_3 = closure_3 + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    closure_3 = closure_3 + obj(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === isNotification.isNotification) {
          closure_3 = closure_3 + IsolateString.isolate(content.content);
        } else {
          closure_3 = closure_3 + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = rebuild(content.content, isNotification, obj, dependencyMap);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          obj = { position: null, length: null, id: null };
          obj.position = closure_3.length + item10008.position;
          ({ length: obj.length, id: obj.id } = item10008);
          let arr = ActiveJoinedThreadsStore.push(obj);
          continue;
        }
        closure_3 = closure_3 + tmp24.content;
      }
    }
  });
  return { content, emoji: items };
}
function createParserState(getGuildId, arr) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  importDefault = PermissionStore.can(constants.MENTION_EVERYONE, getGuildId);
  let isPrivateResult;
  if (getGuildId != null) {
    isPrivateResult = getGuildId.isPrivate();
  }
  if (isPrivateResult) {
    const recipients = getGuildId.recipients;
    const mapped = recipients.map((userId) => ({ userId, nick: null }));
    const currentUser = UserStore.getCurrentUser();
    let mapped1 = mapped;
    if (null != currentUser) {
      let obj = { userId: currentUser.id, nick: null };
      arr = mapped.push(obj);
      mapped1 = mapped;
    }
  } else if (null != guildId) {
    const members = GuildMemberStore.getMembers(guildId);
    mapped1 = members.map((userId) => ({ userId: userId.userId, nick: userId.nick }));
  } else {
    mapped1 = [];
  }
  const tmp11Result = _modDef12(mapped1.reduce((arr, userId) => {
    userId = userId.userId;
    user = user.getUser(userId);
    if (null != user) {
      const obj = { id: userId, text: user.tag };
      arr = arr.push(obj);
    }
    return arr;
  }, []));
  if (null != guild) {
    let sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
  } else {
    sortedRoles = [];
  }
  const found = _modDef12(sortedRoles).filter((mentionable) => {
    mentionable = closure_1;
    if (!closure_1) {
      mentionable = mentionable.mentionable;
    }
    return mentionable;
  });
  const mapped2 = found.map((id) => ({ id: id.id, text: id.name }));
  let tmp9Result = tmp9(12);
  const tmp13Result = _modDef12(sortedRoles);
  const mapped3 = tmp9Result(GuildChannelStore.getTextChannelNameDisambiguations(guildId)).map((id) => ({ id: id.id, text: id.name }));
  if (null != guildId) {
    tmp9Result = tmp9(12);
    const found1 = tmp9Result(guildId(5442).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter((item) => item !== closure_1_7);
    const tmp9Result1Result = tmp9Result(guildId(5442).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const flatMapResult = found1.flatMap((item) => GuildChannelStore.getChannels(guildId)[item].map((channel) => {
      channel = channel.channel;
      if (!channel.isCategory()) {
        const obj = { id: channel.channel.id, text: guildId(dependencyMap[14]).computeChannelName(channel.channel, user, closure_1_12) };
        let tmp3 = obj;
        const obj2 = guildId(dependencyMap[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }));
    let items = found1.flatMap((item) => GuildChannelStore.getChannels(guildId)[item].map((channel) => {
      channel = channel.channel;
      if (!channel.isCategory()) {
        const obj = { id: channel.channel.id, text: guildId(dependencyMap[14]).computeChannelName(channel.channel, user, closure_1_12) };
        let tmp3 = obj;
        const obj2 = guildId(dependencyMap[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    })).filter(guildId(1369).isNotNullish).value();
    const iter = found1.flatMap((item) => GuildChannelStore.getChannels(guildId)[item].map((channel) => {
      channel = channel.channel;
      if (!channel.isCategory()) {
        const obj = { id: channel.channel.id, text: guildId(dependencyMap[14]).computeChannelName(channel.channel, user, closure_1_12) };
        let tmp3 = obj;
        const obj2 = guildId(dependencyMap[14]);
      } else {
        tmp3 = null;
      }
      return tmp3;
    })).filter(guildId(1369).isNotNullish);
  } else {
    items = [];
  }
  const allActiveJoinedThreads = ActiveJoinedThreadsStore.computeAllActiveJoinedThreads(guildId);
  const mapped4 = allActiveJoinedThreads.map((id) => {
    const obj = { id: id.id, text: guildId(dependencyMap[14]).computeChannelName(id, user, RelationshipStore) };
    return obj;
  });
  const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
  const escapedCustomEmoticonNames = disambiguatedEmojiContext.getEscapedCustomEmoticonNames();
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  obj = { inline: true, mentionableRoles: mapped2, guild, users: tmp11Result, games: null, channels: null, emojiContext: null, customEmoticonsRegex: null, customEmoji: null, textExclusions: null, isNotification: false };
  const customEmoticonRegex = disambiguatedEmojiContext.getCustomEmoticonRegex();
  const tmp9ResultResult = tmp9Result(GuildChannelStore.getTextChannelNameDisambiguations(guildId));
  if (null != arr) {
    const _Array = Array;
    arr = Array.from(arr.values());
  } else {
    arr = [];
  }
  const tmp9Result1 = _modDef12;
  obj.games = _modDef12(arr).map((id) => ({ id: id.id, text: id.name }));
  const combined = mapped3.concat(items);
  obj.channels = combined.concat(mapped4);
  obj.emojiContext = disambiguatedEmojiContext;
  obj.customEmoticonsRegex = customEmoticonRegex;
  obj.customEmoji = customEmoji;
  obj.textExclusions = escapedCustomEmoticonNames;
  return obj;
}
function NOOP(arg0) {
  return arg0;
}
function unparseWithMeta(content, id, isNotification) {
  const channel = ChannelStore.getChannel(id);
  let guildId = null;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
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
    translateSurrogatesToInlineEmoji = translateSurrogatesToInlineEmoji(4213).translateSurrogatesToInlineEmoji;
  }
  let obj = { inline: true, guild, channelId: id, isNotification };
  const obj4 = translateSurrogatesToInlineEmoji(4257);
  dependencyMap = undefined;
  content = "";
  const items = [];
  const item = translateSurrogatesToInlineEmoji(4257).parserFor(omitResult)(content, obj).forEach((content) => {
    (function handleEmoji(emojiContext, type, fn) {
      if (null != fn) {
        if ("customEmoticon" === type.type) {
          fn(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = obj(4213).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (emojiContext.emojiContext) {
                    emojiContext = emojiContext.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = fn(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = obj(4213);
              byId = obj2.getByName(match[2]);
            }
          }
          obj = obj(4213);
        }
      }
    })(isNotification, content, dependencyMap);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        obj = { position: closure_3.length, length: content.content.length, id: content.id };
        ActiveJoinedThreadsStore.push(obj);
        closure_3 = closure_3 + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    closure_3 = closure_3 + obj(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === isNotification.isNotification) {
          closure_3 = closure_3 + IsolateString.isolate(content.content);
        } else {
          closure_3 = closure_3 + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = rebuild(content.content, isNotification, obj, dependencyMap);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          obj = { position: null, length: null, id: null };
          obj.position = closure_3.length + item10008.position;
          ({ length: obj.length, id: obj.id } = item10008);
          let arr = ActiveJoinedThreadsStore.push(obj);
          continue;
        }
        closure_3 = closure_3 + tmp24.content;
      }
    }
  });
  obj = { content, emoji: items };
  return obj;
}
let closure_7 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1074);
({ Permissions: closure_15, MARKDOWN_SPOILER_REGEXP, MARKDOWN_STATIC_ROUTE_NAME_REGEXP } = Constants);
const GAME_MENTION_SENTINEL = fn(5000).GAME_MENTION_SENTINEL;
const EmojiIntention = fn(1374).EmojiIntention;
let tmp3 = /^<@!?(\d+)>/;
const tmp4 = /^<@&(\d+)>/;
const tmp5 = /^<#(\d+)>/;
let tmp6 = /^<a?:(\w+):(\d+)>/;
const re18 = /(@everyone|@here|@Clyde)\b/;
const re19 = /^[^\s]+@[^\s]+\.[^\s.]+/;
let obj = { escape: null, link: null, autolink: null, url: null, inlineCode: null, codeBlock: null, rawUserMention: null, rawRoleMention: null, rawChannelMention: null, rawEmoji: null, mention: null, channel: null, emoticon: null, emoji: null, customEmoticons: null, text: null };
let str = MarkupRulesDefault.RULES.escape;
let closure_129_0 = str;
obj.escape = {
  order: str.order,
  match: str.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let str2 = t.defaultRules.link;
let closure_130_0 = str2;
obj.link = {
  order: str2.order,
  match: str2.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const str3 = t.defaultRules.autolink;
let closure_131_0 = str3;
obj.autolink = {
  order: str3.order,
  match: str3.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let str4 = t.defaultRules.url;
let closure_132_0 = str4;
obj.url = {
  order: str4.order,
  match: str4.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let str5 = MarkupRulesDefault.RULES.inlineCode;
let closure_133_0 = str5;
obj.inlineCode = {
  order: str5.order,
  match: str5.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const str6 = MarkupRulesDefault.RULES.codeBlock;
let closure_134_0 = str6;
obj.codeBlock = {
  order: str6.order,
  match: str6.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
obj = { match: null, parse: null };
obj.match = t.anyScopeRegex(tmp3);
obj.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawUserMention = obj;
obj = { match: null, parse: null };
obj.match = t.anyScopeRegex(tmp4);
obj.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawRoleMention = obj;
let obj1 = { match: null, parse: null };
obj1.match = t.anyScopeRegex(tmp5);
obj1.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawChannelMention = obj1;
let obj2 = { match: null, parse: null };
obj2.match = t.anyScopeRegex(tmp6);
obj2.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawEmoji = obj2;
obj.mention = {
  match(str, games, str2) {
    const parts = str2.split(" ");
    if (null == tmp3) {
      if (re19.test(tmp2)) {
        return null;
      }
    } else {
      const AUTOCOMPLETE_BOUNDARY_CHARACTERS_SET = AutocompleteBoundaryUtils.AUTOCOMPLETE_BOUNDARY_CHARACTERS_SET;
    }
    games = games.games;
    c0 = GAME_MENTION_SENTINEL;
    closure_1 = str;
    let mention = "gameMention";
    closure_3 = undefined;
    let firstResult;
    if (str[0] === GAME_MENTION_SENTINEL) {
      closure_3 = str.substring(arr.length);
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
      c0 = "@";
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
        c0 = "@";
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
          c0 = "@";
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
            const match = re18.exec(str);
            if (null != match) {
              if (firstResult3[0].length <= match[0].length) {
                return null;
              }
            }
            if ("" === str2) {
              const SILENT_RE = parseContentForSuppressNotifications.SILENT_RE;
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
    tmp3 = str2[str2.length - 1];
  },
  parse(arg0) {
    [, tmp, tmp2] = arg0;
    if ("gameMention" === tmp2) {
      let obj = { type: tmp2, content: null };
      const _HermesInternal2 = HermesInternal;
      obj.content = "<@$" + tmp + ">";
      return obj;
    } else {
      let str = "@";
      if ("roleMention" === tmp2) {
        str = "@&";
      }
      obj = { type: tmp2, content: null };
      const _HermesInternal = HermesInternal;
      obj.content = "<" + str + tmp + ">";
      return obj;
    }
  }
};
obj.channel = {
  match(str, channels) {
    channels = channels.channels;
    closure_0 = undefined;
    closure_1 = undefined;
    let firstResult1;
    if (str[0] === "#") {
      if ("\"" !== str[1]) {
        closure_0 = "#";
        closure_1 = str;
        const channel = "channel";
        let firstResult;
        if ("channel"[0] === "#") {
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
        closure_0 = str.substring(0, num + 1);
        closure_1 = useChannelName.unescapeChannelName(str.substring(2, num));
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
obj.emoticon = {
  match(arg0, arg1, arg2) {
    const ConvertEmoticons = UserSettings.ConvertEmoticons;
    if (ConvertEmoticons.getSetting()) {
      if (0 !== arg2.length) {
        if (!obj.test(arg2)) {
          return null;
        }
        obj = /\s$/;
      }
      const EMOJI_SHORTCUT_RE = UnicodeEmojisDefault.EMOJI_SHORTCUT_RE;
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
    const obj = { type: "emoticon", content: UnicodeEmojisDefault.convertShortcutToName(arg0[1]), isShortcut: true };
    return obj;
  }
};
obj.emoji = {
  order: MarkupRulesDefault.RULES.emoji.order,
  match(arg0) {
    const EMOJI_NAME_RE = UnicodeEmojisDefault.EMOJI_NAME_RE;
    return EMOJI_NAME_RE.exec(arg0);
  },
  parse(arg0, arg1, customEmoji) {
    [tmp, tmp2] = arg0;
    customEmoji = customEmoji.customEmoji;
    value = customEmoji.get(tmp2);
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
      obj.content = "<" + str + ":" + name + ":" + value.id + ">";
      obj.emoji = value;
    } else {
      obj = { type: "text", content: tmp };
    }
    return obj;
  }
};
obj.customEmoticons = {
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
      obj.content = "<" + str + ":" + emoticonByName.name + ":" + emoticonByName.id + ">";
      obj.emoji = emoticonByName;
    } else {
      obj = { type: "text", content: tmp };
    }
    return obj;
  }
};
let obj4 = {};
Object.assign(MarkupTextRuleDefault);
obj4.match = function match(arg0, textExclusions) {
  if (typeof textExclusions.textExclusions === "string") {
    if ("" !== textExclusions.textExclusions) {
      const result = MarkupTextRule2.textMarkupPatternWithExclusions(textExclusions.textExclusions);
      let match = result.exec(arg0);
    }
    return match;
  }
  match = null;
  if (null != MarkupTextRuleDefault.match) {
    match = MarkupTextRuleDefault.match(arg0, textExclusions, "");
  }
};
obj.text = obj4;
const obj5 = { inlineCode: null, codeBlock: null, mention: null, roleMention: null, channel: null, emoji: null, soundboard: null, unicodeEmoji: null, spoiler: null, staticRouteLink: null, timestamp: null, text: null };
const str7 = MarkupRulesDefault.RULES.inlineCode;
let closure_135_0 = str7;
obj5.inlineCode = {
  order: str7.order,
  match: str7.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const str8 = MarkupRulesDefault.RULES.codeBlock;
let closure_136_0 = str8;
obj5.codeBlock = {
  order: str8.order,
  match: str8.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const obj6 = { match: null, parse: null };
obj6.match = t.anyScopeRegex(tmp3);
obj6.parse = function parse(arg0, arg1, channelId) {
  ({ isNotification, guild } = channelId);
  closure_0 = undefined;
  const user = UserStore.getUser(arg0[1]);
  if (null == user) {
    let obj = { content: arg0[0] };
    return obj;
  } else {
    let str = "always";
    if (isNotification) {
      str = "always";
      if (StreamerModeStore.enabled) {
        str = "never";
      }
    }
    obj = { identifiable: str };
    const str2 = UserUtilsDefault.getUserTag(user, obj);
    if (isNotification) {
      let tmp13Result = NicknameUtilsDefault;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      let nickname = tmp13Result.getNickname(id, channelId.channelId, user);
      if (nickname == null) {
        tmp13Result = UserUtilsDefault;
        nickname = tmp13Result.getGlobalName(user);
      }
      if (null != nickname) {
        const _HermesInternal6 = HermesInternal;
        let combined = "@" + nickname;
      } else {
        const _HermesInternal5 = HermesInternal;
        combined = "@" + str2;
      }
      obj = { content: combined };
      return obj;
    } else if (user.bot) {
      const obj1 = { content: null };
      const _HermesInternal4 = HermesInternal;
      obj1.content = "@" + str2;
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
        if (tmp13Result1.some(GuildRoleStore.getUnsafeMutableRoles(guild.id), (name) => closure_0.startsWith(name.name.toLowerCase()))) {
          const _HermesInternal = HermesInternal;
          const combined1 = "" + user.discriminator;
          const _HermesInternal2 = HermesInternal;
          str5 = "#" + combined1.padStart(4, "0");
        }
        str4 = str5;
        tmp13Result1 = _modDef12;
      }
      const obj2 = { content: null };
      const _HermesInternal3 = HermesInternal;
      obj2.content = "@" + str2 + str4;
      return obj2;
    }
  }
};
obj5.mention = obj6;
const obj7 = { match: null, parse: null };
obj7.match = t.anyScopeRegex(tmp4);
obj7.parse = function parse(content, arg1, guild) {
  guild = guild.guild;
  if (null != guild) {
    const role = GuildRoleStore.getRole(guild.id, content[1]);
    if (null != role) {
      let obj = { content: null };
      const _HermesInternal = HermesInternal;
      obj.content = "@" + role.name;
      return obj;
    }
  }
  obj = { content: content[0] };
  return obj;
};
obj5.roleMention = obj7;
const obj8 = { match: null, parse: null };
obj8.match = t.anyScopeRegex(tmp5);
obj8.parse = function parse(arg0) {
  const channel = ChannelStore.getChannel(arg0[1]);
  if (null == channel) {
    content = arg0[0];
  } else {
    const obj = useChannelName;
    content = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
  }
  return { content };
};
obj5.channel = obj8;
const obj9 = { match: null, parse: null };
obj9.match = t.anyScopeRegex(tmp6);
obj9.parse = function parse(arg0, arg1, guild) {
  [, name, tmp] = arg0;
  guild = guild.guild;
  let id = null;
  if (guild) {
    id = guild.id;
  }
  const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(id);
  const byId = disambiguatedEmojiContext.getById(tmp);
  if (null != byId) {
    name = byId.name;
  }
  return { content: ":" + name + ":", id: tmp };
};
obj5.emoji = obj9;
let obj10 = { match: null, parse: null };
obj10.match = t.anyScopeRegex(fn(5011).soundmojiRawFormatRegex);
obj10.parse = function parse(arg0) {
  [, tmp, tmp2] = arg0;
  return { content: "<sound:" + tmp + ":" + tmp2 + ">" };
};
obj5.soundboard = obj10;
const obj11 = { match: null, parse: null };
obj11.match = t.anyScopeRegex(UnicodeEmojisDefault.EMOJI_NAME_RE);
obj11.parse = function parse(arg0) {
  [tmp, tmp2] = arg0;
  const result = UnicodeEmojisDefault.convertNameToSurrogate(tmp2);
  if ("" !== result) {
    content = result;
  }
  return { content };
};
obj5.unicodeEmoji = obj11;
const obj12 = { match: null, parse: null };
obj12.match = t.anyScopeRegex(MARKDOWN_SPOILER_REGEXP);
obj12.parse = function parse() {
  const obj = { content: null };
  const intl = util.intl;
  obj.content = "<" + intl.string(util.t["F+x38C"]).toLowerCase() + ">";
  return obj;
};
obj5.spoiler = obj12;
const obj13 = { match: null, parse: null };
obj13.match = t.anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP);
obj13.parse = function parse(arg0) {
  return { content: "<id:" + arg0[1] + ">" };
};
obj5.staticRouteLink = obj13;
const obj14 = {};
const merged1 = Object.assign(MarkupRulesDefault.RULES.timestamp);
obj14.parse = function parse() {
  const items = [...arguments];
  const timestamp = MarkupRulesDefault.RULES.timestamp;
  const items1 = [...items];
  const applyResult = timestamp.parse.apply(items1);
  if ("text" === applyResult.type) {
    let obj = { content: applyResult.content };
  } else {
    obj = { content: applyResult.formatted };
  }
  return obj;
};
obj5.timestamp = obj14;
const MarkupTextRule = Object.assign(MarkupTextRuleDefault);
obj5.text = {};
let items = [obj, obj5];
let item = items.forEach((item) => {
  const keys = Object.keys(item);
  item = keys.forEach((item, order) => {
    item[item].order = order;
  });
});
let closure_21 = t.parserFor(obj);
const re22 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/MessageParser.tsx");

export default {
  parse(getGuildId, content, arg2) {
    const channel = getGuildId;
    let tmp = arg2;
    let obj;
    if (tmp == null) {
      tmp = createParserState(getGuildId, arr);
    }
    obj = { content, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
    arr = closure_21(obj.content, tmp);
    closure_129_0 = tmp;
    closure_129_1 = obj(4213).translateInlineEmojiToSurrogates;
    closure_129_2 = (emoji, arg1) => {
      obj = { emoji, channel, intention: EmojiIntention.CHAT };
      if (obj.isEmojiPremiumLocked(obj)) {
        const invalidEmojis = obj.invalidEmojis;
        invalidEmojis.push(emoji);
      } else if (!arg1) {
        const prop = obj.validNonShortcutEmojis;
        prop.push(emoji);
      }
    };
    closure_129_3 = "";
    closure_129_4 = [];
    const item = arr.forEach((content) => {
      (function handleEmoji(emojiContext, type, fn) {
        if (null != fn) {
          if ("customEmoticon" === type.type) {
            fn(type.emoji, false);
          }
          if ("emoticon" === type.type) {
            const result = obj(4213).translateSurrogatesToInlineEmoji(type.content);
            let match = regex.exec(result);
            if (null !== match) {
              while (true) {
                if (null != match[1]) {
                  if ("" !== match[1]) {
                    let byId;
                    if (emojiContext.emojiContext) {
                      emojiContext = emojiContext.emojiContext;
                      byId = emojiContext.getById(match[1]);
                    }
                    if (byId) {
                      let tmp11 = type.isShortcut || false;
                      let tmp12 = fn(byId, tmp11);
                    }
                    match = regex.exec(result);
                    if (null === match) {
                      break;
                    }
                  }
                }
                let obj2 = obj(4213);
                byId = obj2.getByName(match[2]);
              }
            }
            obj = obj(4213);
          }
        }
      })(isNotification, content, dependencyMap);
      if (typeof content.content === "string") {
        const type = content.type;
        if ("emoji" === type) {
          obj = { position: closure_3.length, length: content.content.length, id: content.id };
          ActiveJoinedThreadsStore.push(obj);
          closure_3 = closure_3 + content.content;
        } else {
          if ("codeBlock" !== type) {
            if ("inlineCode" !== type) {
              if ("mention" !== type) {
                if ("roleMention" !== type) {
                  if ("gameMention" !== type) {
                    if ("channel" !== type) {
                      closure_3 = closure_3 + obj(content.content);
                    }
                  }
                }
              }
            }
          }
          if (true === isNotification.isNotification) {
            closure_3 = closure_3 + IsolateString.isolate(content.content);
          } else {
            closure_3 = closure_3 + content.content;
          }
        }
      } else {
        const _Array = Array;
        if (content.content.constructor === Array) {
          const tmp24 = rebuild(content.content, isNotification, obj, dependencyMap);
          const emoji = tmp24.emoji;
          for (const item10008 of emoji) {
            obj = { position: null, length: null, id: null };
            obj.position = closure_3.length + item10008.position;
            ({ length: obj.length, id: obj.id } = item10008);
            let arr = ActiveJoinedThreadsStore.push(obj);
            continue;
          }
          closure_3 = closure_3 + tmp24.content;
        }
      }
    });
    obj.content = closure_129_3;
    return obj;
  },
  parsePreprocessor(getGuildId, arg1) {
    return closure_21(arg1, createParserState(getGuildId));
  },
  unparse(content, id, isNotification) {
    return unparseWithMeta(content, id, isNotification).content;
  },
  unparseWithMeta
};
export const parseAndRebuild = function parseAndRebuild(arg0, arg1, arg2) {
  closure_0 = arg1;
  importDefault = UnicodeEmojisDefault.translateInlineEmojiToSurrogates;
  dependencyMap = arg2;
  c3 = "";
  closure_4 = [];
  const item = closure_21(arg0, arg1).forEach((content) => {
    (function handleEmoji(emojiContext, type, fn) {
      if (null != fn) {
        if ("customEmoticon" === type.type) {
          fn(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = obj(4213).translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (emojiContext.emojiContext) {
                    emojiContext = emojiContext.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = fn(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = obj(4213);
              byId = obj2.getByName(match[2]);
            }
          }
          obj = obj(4213);
        }
      }
    })(isNotification, content, dependencyMap);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        obj = { position: closure_3.length, length: content.content.length, id: content.id };
        ActiveJoinedThreadsStore.push(obj);
        closure_3 = closure_3 + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    closure_3 = closure_3 + obj(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === isNotification.isNotification) {
          closure_3 = closure_3 + IsolateString.isolate(content.content);
        } else {
          closure_3 = closure_3 + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = rebuild(content.content, isNotification, obj, dependencyMap);
        const emoji = tmp24.emoji;
        for (const item10008 of emoji) {
          obj = { position: null, length: null, id: null };
          obj.position = closure_3.length + item10008.position;
          ({ length: obj.length, id: obj.id } = item10008);
          let arr = ActiveJoinedThreadsStore.push(obj);
          continue;
        }
        closure_3 = closure_3 + tmp24.content;
      }
    }
  });
  return c3;
};
export { createParserState };