// === Module 7796: MessageParser ===

// Module 7796 (MessageParser)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4292 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4296 */;
import UserUtilsDefault from "UserUtils" /* 4484 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4792 */;
import useChannelName from "useChannelName" /* 4793 */;
import MarkupRulesDefault from "MarkupRules" /* 5085 */;
import MarkupTextRule2 from "MarkupTextRule" /* 5093 */;
import AutocompleteBoundaryUtils from "AutocompleteBoundaryUtils" /* 7797 */;
import parseContentForSuppressNotifications from "parseContentForSuppressNotifications" /* 7798 */;
import IsolateString from "IsolateString" /* 7799 */;
import EmojiStore from "EmojiStore" /* 5547 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5594 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildRoleStore from "GuildRoleStore" /* 2016 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import StreamerModeStore from "StreamerModeStore" /* 4485 */;
import UserStore from "UserStore" /* 1372 */;
import t_mod from "module_4336" /* 4336 */;

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
          const result = obj(4292).translateSurrogatesToInlineEmoji(type.content);
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
              let obj2 = obj(4292);
              byId = obj2.getByName(match[2]);
            }
          }
          obj = obj(4292);
        }
      }
    })(isNotification, content, dependencyMap);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
        ActiveJoinedThreadsStore.push(obj3);
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
          let arr2 = ActiveJoinedThreadsStore.push(obj);
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
  const tmp13Result = _modDef12(sortedRoles);
  const tmp9Result = _modDef12;
  const mapped3 = _modDef12(GuildChannelStore.getTextChannelNameDisambiguations(guildId)).map((id) => ({ id: id.id, text: id.name }));
  if (null != guildId) {
    const tmp9Result3 = tmp9(12);
    const found1 = tmp9(12)(guildId(5530).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter((item) => item !== closure_1_7);
    const tmp9Result1Result = tmp9(12)(guildId(5530).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
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
    })).filter(guildId(1370).isNotNullish).value();
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
    })).filter(guildId(1370).isNotNullish);
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
  let obj2 = { inline: true, mentionableRoles: mapped2, guild, users: tmp11Result, games: null, channels: null, emojiContext: null, customEmoticonsRegex: null, customEmoji: null, textExclusions: null, isNotification: false };
  const customEmoticonRegex = disambiguatedEmojiContext.getCustomEmoticonRegex();
  const tmp9ResultResult = _modDef12(GuildChannelStore.getTextChannelNameDisambiguations(guildId));
  if (null != arr) {
    const _Array = Array;
    let arr2 = Array.from(arr.values());
  } else {
    arr2 = [];
  }
  const tmp9Result4 = _modDef12;
  obj2.games = _modDef12(arr2).map((id) => ({ id: id.id, text: id.name }));
  const combined = mapped3.concat(items);
  obj2.channels = combined.concat(mapped4);
  obj2.emojiContext = disambiguatedEmojiContext;
  obj2.customEmoticonsRegex = customEmoticonRegex;
  obj2.customEmoji = customEmoji;
  obj2.textExclusions = escapedCustomEmoticonNames;
  return obj2;
}
function NOOP(arg0) {
  return arg0;
}
function unparseWithMeta(content1, id, isNotification) {
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
    let omitResult = obj8;
  } else {
    omitResult = translateSurrogatesToInlineEmoji(12).omit(obj8, ["spoiler", "timestamp", "unicodeEmoji"]);
    const obj2 = translateSurrogatesToInlineEmoji(12);
  }
  if (isNotification) {
    translateSurrogatesToInlineEmoji = NOOP;
  } else {
    translateSurrogatesToInlineEmoji = translateSurrogatesToInlineEmoji(4292).translateSurrogatesToInlineEmoji;
  }
  const obj = { inline: true, guild, channelId: id, isNotification };
  const obj4 = translateSurrogatesToInlineEmoji(4336);
  dependencyMap = undefined;
  content = "";
  const items = [];
  const item = translateSurrogatesToInlineEmoji(4336).parserFor(omitResult)(content1, { inline: true, guild, channelId: id, isNotification }).forEach((content) => {
    (function handleEmoji(emojiContext, type, fn) {
      if (null != fn) {
        if ("customEmoticon" === type.type) {
          fn(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          const result = obj(4292).translateSurrogatesToInlineEmoji(type.content);
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
              let obj2 = obj(4292);
              byId = obj2.getByName(match[2]);
            }
          }
          obj = obj(4292);
        }
      }
    })(isNotification, content, dependencyMap);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
        ActiveJoinedThreadsStore.push(obj3);
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
          let arr2 = ActiveJoinedThreadsStore.push(obj);
          continue;
        }
        closure_3 = closure_3 + tmp24.content;
      }
    }
  });
  return { content, emoji: items };
}
let closure_7 = fn(2013).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1074);
({ Permissions: closure_15, MARKDOWN_SPOILER_REGEXP, MARKDOWN_STATIC_ROUTE_NAME_REGEXP } = Constants);
const GAME_MENTION_SENTINEL = fn(5087).GAME_MENTION_SENTINEL;
const EmojiIntention = fn(1375).EmojiIntention;
let tmp3 = /^<@!?(\d+)>/;
const tmp4 = /^<@&(\d+)>/;
const tmp5 = /^<#(\d+)>/;
let tmp6 = /^<a?:(\w+):(\d+)>/;
const re18 = /(@everyone|@here|@Clyde)\b/;
const re19 = /^[^\s]+@[^\s]+\.[^\s.]+/;
let obj = { link: null, autolink: null, url: null, inlineCode: null, codeBlock: null, rawUserMention: null, rawRoleMention: null, rawChannelMention: null, rawEmoji: null, mention: null, channel: null, emoticon: null, emoji: null, customEmoticons: null, text: null };
let str = t.defaultRules.link;
let closure_129_0 = str;
obj.link = {
  order: str.order,
  match: str.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let str2 = t.defaultRules.autolink;
let closure_130_0 = str2;
obj.autolink = {
  order: str2.order,
  match: str2.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const str3 = t.defaultRules.url;
let closure_131_0 = str3;
obj.url = {
  order: str3.order,
  match: str3.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let str4 = MarkupRulesDefault.RULES.inlineCode;
let closure_132_0 = str4;
obj.inlineCode = {
  order: str4.order,
  match: str4.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let str5 = MarkupRulesDefault.RULES.codeBlock;
let closure_133_0 = str5;
obj.codeBlock = {
  order: str5.order,
  match: str5.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
let obj2 = { match: null, parse: null };
let t = t_mod;
obj2.match = t.anyScopeRegex(tmp3);
obj2.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawUserMention = obj2;
let obj3 = { match: null, parse: null };
let t = t_mod;
obj3.match = t.anyScopeRegex(tmp4);
obj3.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawRoleMention = obj3;
let obj4 = { match: null, parse: null };
let t = t_mod;
obj4.match = t.anyScopeRegex(tmp5);
obj4.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawChannelMention = obj4;
let obj5 = { match: null, parse: null };
let t = t_mod;
obj5.match = t.anyScopeRegex(tmp6);
obj5.parse = function parse(content) {
  return { type: "text", content: content[0] };
};
obj.rawEmoji = obj5;
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
      const users = games.users;
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
          const users1 = games.users;
          const mapped3 = users1.map((text) => {
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
      const obj2 = { type: tmp2, content: null };
      const _HermesInternal2 = HermesInternal;
      obj2.content = "<@$" + tmp + ">";
      return obj2;
    } else {
      let str = "@";
      if ("roleMention" === tmp2) {
        str = "@&";
      }
      const obj = { type: tmp2, content: null };
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
      const obj2 = { type: "customEmoticon", content: null, emoji: null };
      const _HermesInternal = HermesInternal;
      obj2.content = "<" + str + ":" + name + ":" + value.id + ">";
      obj2.emoji = value;
      let obj = obj2;
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
      const obj2 = { type: "customEmoticon", content: null, emoji: null };
      const _HermesInternal = HermesInternal;
      obj2.content = "<" + str + ":" + emoticonByName.name + ":" + emoticonByName.id + ">";
      obj2.emoji = emoticonByName;
      let obj = obj2;
    } else {
      obj = { type: "text", content: tmp };
    }
    return obj;
  }
};
const obj7 = {};
Object.assign(MarkupTextRuleDefault);
obj7.match = function match(arg0, textExclusions) {
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
obj.text = obj7;
const obj8 = { inlineCode: null, codeBlock: null, mention: null, roleMention: null, channel: null, emoji: null, soundboard: null, unicodeEmoji: null, spoiler: null, staticRouteLink: null, timestamp: null, text: null };
const str6 = MarkupRulesDefault.RULES.inlineCode;
let closure_134_0 = str6;
obj8.inlineCode = {
  order: str6.order,
  match: str6.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const str7 = MarkupRulesDefault.RULES.codeBlock;
let closure_135_0 = str7;
obj8.codeBlock = {
  order: str7.order,
  match: str7.match,
  parse(content) {
    return { type: require.type, content: content[0] };
  }
};
const obj9 = { match: null, parse: null };
let t = t_mod;
obj9.match = t.anyScopeRegex(tmp3);
obj9.parse = function parse(arg0, arg1, channelId) {
  ({ isNotification, guild } = channelId);
  closure_0 = undefined;
  const user = UserStore.getUser(arg0[1]);
  if (null == user) {
    const obj2 = { content: arg0[0] };
    return obj2;
  } else {
    let str = "always";
    if (isNotification) {
      str = "always";
      if (StreamerModeStore.enabled) {
        str = "never";
      }
    }
    const obj = { identifiable: str };
    const str2 = UserUtilsDefault.getUserTag(user, obj);
    if (isNotification) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      let nickname = NicknameUtilsDefault.getNickname(id, channelId.channelId, user);
      if (nickname == null) {
        nickname = UserUtilsDefault.getGlobalName(user);
        const tmp13Result3 = UserUtilsDefault;
      }
      if (null != nickname) {
        const _HermesInternal6 = HermesInternal;
        let combined = "@" + nickname;
      } else {
        const _HermesInternal5 = HermesInternal;
        combined = "@" + str2;
      }
      const obj3 = { content: combined };
      return obj3;
    } else if (user.bot) {
      const obj4 = { content: null };
      const _HermesInternal4 = HermesInternal;
      obj4.content = "@" + str2;
      return obj4;
    } else {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      let str4 = "";
      if (null != id1) {
        closure_0 = str2.toLowerCase();
        let str5 = "";
        if (tmp13Result4.some(GuildRoleStore.getUnsafeMutableRoles(guild.id), (name) => closure_0.startsWith(name.name.toLowerCase()))) {
          const _HermesInternal = HermesInternal;
          const combined1 = "" + user.discriminator;
          const _HermesInternal2 = HermesInternal;
          str5 = "#" + combined1.padStart(4, "0");
        }
        str4 = str5;
        tmp13Result4 = _modDef12;
      }
      const obj5 = { content: null };
      const _HermesInternal3 = HermesInternal;
      obj5.content = "@" + str2 + str4;
      return obj5;
    }
  }
};
obj8.mention = obj9;
let obj10 = { match: null, parse: null };
let t = t_mod;
obj10.match = t.anyScopeRegex(tmp4);
obj10.parse = function parse(content, arg1, guild) {
  guild = guild.guild;
  if (null != guild) {
    const role = GuildRoleStore.getRole(guild.id, content[1]);
    if (null != role) {
      const obj2 = { content: null };
      const _HermesInternal = HermesInternal;
      obj2.content = "@" + role.name;
      return obj2;
    }
  }
  return { content: content[0] };
};
obj8.roleMention = obj10;
const obj11 = { match: null, parse: null };
let t = t_mod;
obj11.match = t.anyScopeRegex(tmp5);
obj11.parse = function parse(arg0) {
  const channel = ChannelStore.getChannel(arg0[1]);
  if (null == channel) {
    content = arg0[0];
  } else {
    const obj = useChannelName;
    content = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
  }
  return { content };
};
obj8.channel = obj11;
const obj12 = { match: null, parse: null };
let t = t_mod;
obj12.match = t.anyScopeRegex(tmp6);
obj12.parse = function parse(arg0, arg1, guild) {
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
obj8.emoji = obj12;
const obj13 = { match: null, parse: null };
let t = t_mod;
obj13.match = t.anyScopeRegex(fn(5099).soundmojiRawFormatRegex);
obj13.parse = function parse(arg0) {
  [, tmp, tmp2] = arg0;
  return { content: "<sound:" + tmp + ":" + tmp2 + ">" };
};
obj8.soundboard = obj13;
const obj14 = { match: null, parse: null };
let t = t_mod;
obj14.match = t.anyScopeRegex(UnicodeEmojisDefault.EMOJI_NAME_RE);
obj14.parse = function parse(arg0) {
  [tmp, tmp2] = arg0;
  const result = UnicodeEmojisDefault.convertNameToSurrogate(tmp2);
  if ("" !== result) {
    content = result;
  }
  return { content };
};
obj8.unicodeEmoji = obj14;
const obj15 = { match: null, parse: null };
let t = t_mod;
obj15.match = t.anyScopeRegex(MARKDOWN_SPOILER_REGEXP);
obj15.parse = function parse() {
  const obj = { content: null };
  const intl = util.intl;
  obj.content = "<" + intl.string(util.t["F+x38C"]).toLowerCase() + ">";
  return obj;
};
obj8.spoiler = obj15;
const obj16 = { match: null, parse: null };
let t = t_mod;
obj16.match = t.anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP);
obj16.parse = function parse(arg0) {
  return { content: "<id:" + arg0[1] + ">" };
};
obj8.staticRouteLink = obj16;
const obj17 = {};
const merged1 = Object.assign(MarkupRulesDefault.RULES.timestamp);
obj17.parse = function parse() {
  const items = [...arguments];
  const timestamp = MarkupRulesDefault.RULES.timestamp;
  const items1 = [...items];
  const applyResult = timestamp.parse.apply(items1);
  if ("text" === applyResult.type) {
    const obj2 = { content: applyResult.content };
    let obj = obj2;
  } else {
    obj = { content: applyResult.formatted };
  }
  return obj;
};
obj8.timestamp = obj17;
const MarkupTextRule = Object.assign(MarkupTextRuleDefault);
obj8.text = {};
let items = [obj, obj8];
let item = items.forEach((item) => {
  const keys = Object.keys(item);
  item = keys.forEach((item, order) => {
    item[item].order = order;
  });
});
let t = t_mod;
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
    closure_129_1 = obj(4292).translateInlineEmojiToSurrogates;
    closure_129_2 = (emoji, arg1) => {
      obj = EmojiUtilsDefault;
      if (obj.isEmojiPremiumLocked(obj2)) {
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
            const result = obj(4292).translateSurrogatesToInlineEmoji(type.content);
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
                let obj2 = obj(4292);
                byId = obj2.getByName(match[2]);
              }
            }
            obj = obj(4292);
          }
        }
      })(isNotification, content, dependencyMap);
      if (typeof content.content === "string") {
        const type = content.type;
        if ("emoji" === type) {
          const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
          ActiveJoinedThreadsStore.push(obj3);
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
            let arr2 = ActiveJoinedThreadsStore.push(obj);
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
  unparse(content1, id, isNotification) {
    return unparseWithMeta(content1, id, isNotification).content;
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
          const result = obj(4292).translateSurrogatesToInlineEmoji(type.content);
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
              let obj2 = obj(4292);
              byId = obj2.getByName(match[2]);
            }
          }
          obj = obj(4292);
        }
      }
    })(isNotification, content, dependencyMap);
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
        ActiveJoinedThreadsStore.push(obj3);
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
          let arr2 = ActiveJoinedThreadsStore.push(obj);
          continue;
        }
        closure_3 = closure_3 + tmp24.content;
      }
    }
  });
  return c3;
};
export { createParserState };