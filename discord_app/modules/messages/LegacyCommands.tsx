// discord_app/modules/messages/LegacyCommands.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import ReactionUtils from "../reactions/ReactionUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import ReactionActionCreators from "../reactions/ReactionActionCreators.tsx";
import ChangeNicknameActionCreatorsDefault from "../../actions/ChangeNicknameActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import t from "../../../_runtime/metro/04257__.js";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, MARKDOWN_SPOILER_WRAPPER: closure_7, ME: closure_8 } = Constants);
const re9 = /\\([*?+/])/g;
let COMMANDS = {
  tts: {
    action() {
      obj = { tts: null };
      const EnableTTSCommand = UserSettings.EnableTTSCommand;
      obj.tts = EnableTTSCommand.getSetting();
      return obj;
    },
  },
  me: {
    action(arg0) {
      return { content: "_" + arg0 + "_" };
    },
  },
  tableflip: {
    action(arg0) {
      obj = { content: "" + arg0 + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B".trim() };
      return obj;
    },
  },
  unflip: {
    action(arg0) {
      obj = { content: "" + arg0 + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)".trim() };
      return obj;
    },
  },
  shrug: {
    action(arg0) {
      obj = { content: "" + arg0 + " \u00AF\\_(\u30C4)_/\u00AF".trim() };
      return obj;
    },
  },
  nick: {
    action(arg0, channel) {
      channel = channel.channel;
      if (null != channel.guild_id) {
        obj = ChangeNicknameActionCreatorsDefault;
        obj.changeNickname(channel.guild_id, channel.id, React6, arg0);
        return { content: "" };
      }
    },
  },
  reaction: null,
  searchReplace: null,
  spoiler: null,
};
COMMANDS = { match: null, action: null };
COMMANDS.match = t.anyScopeRegex(/^\+:(.+?): *$/);
COMMANDS.action = function action(str, channel) {
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
COMMANDS.reaction = COMMANDS;
COMMANDS = { match: null, action: null };
COMMANDS.match = t.anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/);
COMMANDS.action = function action(str, channel) {
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
        [r10014, str, str2, str3] = _slicedToArray(Array.from(match), 4);
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
            obj = MessageActionCreatorsDefault;
            obj.deleteMessage(channel.id, lastEditableMessage.id);
          }
          return { content: "" };
        }
        if (str7 !== lastEditableMessage.content) {
          obj = { content: str7 };
          MessageActionCreatorsDefault.editMessage(channel.id, lastEditableMessage.id, obj);
        }
        const tmp5 = _slicedToArray(Array.from(match), 4);
      }
    }
    return { content: "" };
  }
};
COMMANDS.searchReplace = COMMANDS;
COMMANDS.spoiler = {
  action(arg0) {
    obj = { content: React5(arg0).trim() };
    return obj;
  },
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
        obj = AppAnalyticsUtilsDefault;
        obj = { command: key10005 };
        let trackWithMetadataResult = obj.trackWithMetadata(constants.SLASH_COMMAND_USED, obj);
        return str.action(arg0, arg1);
      }
    }
    continue;
  }
};
