// === Module 12247: LegacyCommands ===

// Module 12247 (LegacyCommands)
import UserSettings from "UserSettings" /* 2019 */;
import ReactionUtils from "ReactionUtils" /* 4407 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4936 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7696 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8004 */;
import ChangeNicknameActionCreatorsDefault from "ChangeNicknameActionCreators" /* 9416 */;
import _slicedToArray from "module_32" /* 32 */;
import EmojiStore from "EmojiStore" /* 5671 */;
import MessageStore from "MessageStore" /* 4976 */;
import t_mod from "module_1929" /* 1929 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, MARKDOWN_SPOILER_WRAPPER: closure_7, ME: closure_8 } = Constants);
const re9 = /\\([*?+/])/g;
const COMMANDS = {
  tts: {
    action() {
      const obj = { tts: null };
      const EnableTTSCommand = UserSettings.EnableTTSCommand;
      obj.tts = EnableTTSCommand.getSetting();
      return obj;
    }
  },
  me: {
    action(arg0) {
      return { content: "_" + arg0 + "_" };
    }
  },
  tableflip: {
    action(arg0) {
      const obj = { content: "" + arg0 + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B".trim() };
      return obj;
    }
  },
  unflip: {
    action(arg0) {
      const obj = { content: "" + arg0 + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)".trim() };
      return obj;
    }
  },
  shrug: {
    action(arg0) {
      const obj = { content: "" + arg0 + " \u00AF\\_(\u30C4)_/\u00AF".trim() };
      return obj;
    }
  },
  nick: {
    action(arg0, channel) {
      channel = channel.channel;
      if (null != channel.guild_id) {
        const obj = ChangeNicknameActionCreatorsDefault;
        obj.changeNickname(channel.guild_id, channel.id, React6, arg0);
        return { content: "" };
      }
    }
  },
  reaction: null,
  searchReplace: null,
  spoiler: null
};
let obj2 = { match: null, action: null };
let t = t_mod;
obj2.match = t.anyScopeRegex(/^\+:(.+?): *$/);
obj2.action = function action(str, channel) {
  channel = channel.channel;
  if (!channel.isEdit) {
    if (MessageStore.hasPresent(channel.id)) {
      const messages = MessageStore.getMessages(channel.id);
      const lastResult = messages.last();
      if (null != lastResult) {
        if (null != lastResult.id) {
          const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(channel.guild_id);
          const trimmed = str.trim();
          const byName = disambiguatedEmojiContext.getByName(trimmed.slice(2, -1));
          if (null != byName) {
            const obj3 = ReactionActionCreators;
            obj3.addReaction(channel.id, lastResult.id, ReactionUtils.toReactionEmoji(byName));
            return { content: "" };
          }
        }
      }
    }
  }
};
COMMANDS.reaction = obj2;
let obj3 = { match: null, action: null };
let t = t_mod;
obj3.match = t.anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/);
obj3.action = function action(str, channel) {
  channel = channel.channel;
  if (!channel.isEdit) {
    const lastEditableMessage = MessageStore.getLastEditableMessage(channel.id);
    if (null != lastEditableMessage) {
      if (null != lastEditableMessage.id) {
        const self = this;
        let match = str.match(this.match.regex);
        if (match == null) {
          match = [];
        }
        [r10014, str, str2, str3] = Array.from(match);
        let parts;
        if (str3 != null) {
          parts = str3.split("");
        }
        if (parts == null) {
          parts = [];
        }
        const replaced = str.replace(re9, (arg0, arg1) => arg1);
        const replaced1 = str2.replace(re9, (arg0, arg1) => arg1);
        if (parts.includes("g")) {
          let str7 = str6.replaceAll(replaced, replaced1);
        } else {
          str7 = str6.replace(replaced, replaced1);
        }
        if (null == str7) {
          if (0 === lastEditableMessage.attachments.length) {
            MessageActionCreatorsDefault.deleteMessage(channel.id, lastEditableMessage.id);
          }
          return { content: "" };
        }
        if (str7 !== lastEditableMessage.content) {
          const obj3 = { content: str7 };
          MessageActionCreatorsDefault.editMessage(channel.id, lastEditableMessage.id, obj3);
        }
        const tmp5 = _slicedToArray(Array.from(match), 4);
      }
    }
    return { content: "" };
  }
};
COMMANDS.searchReplace = obj3;
COMMANDS.spoiler = {
  action(arg0) {
    const obj = { content: React5(arg0).trim() };
    return obj;
  }
};
Object.setPrototypeOf(COMMANDS, null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/LegacyCommands.tsx");

export { COMMANDS };
export const handleLegacyCommands = function handleLegacyCommands(text, arg1) {
  for (const key10005 in obj) {
    let str = obj[key10005];
    if (null == str.match) {
      continue;
    } else {
      let regex = str.match.regex;
      let isMatch;
      if (regex != null) {
        isMatch = regex.test(arg0);
      }
      if (!isMatch) {
        continue;
      } else {
        let obj = AppAnalyticsUtilsDefault;
        let obj2 = { command: key10005 };
        let trackWithMetadataResult = obj.trackWithMetadata(constants.SLASH_COMMAND_USED, obj2);
        return str.action(arg0, arg1);
      }
    }
    continue;
  }
};