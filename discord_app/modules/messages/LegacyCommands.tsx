// discord_app/modules/messages/LegacyCommands.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import ReactionUtils from "../reactions/ReactionUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import ReactionActionCreators from "../reactions/ReactionActionCreators.tsx";
import ChangeNicknameActionCreatorsDefault from "../../actions/ChangeNicknameActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import Constants from "../../Constants.tsx";
import module_1936_mod from "../../../_runtime/metro/01936__.js";
import size from "../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
let metroRequire;
let module_1936;
let obj2;
let obj3;
({ AnalyticEvents: metroRequire, MARKDOWN_SPOILER_WRAPPER: metroImportDefault, ME: metroImportAll } = Constants);
const re9 = /\\([*?+/])/g;
const COMMANDS = {
  tts: {
    action() {
      let EnableTTSCommand;
      const obj = { tts: EnableTTSCommand.getSetting() };
      EnableTTSCommand = UserSettings.EnableTTSCommand;
      return obj;
    },
  },
  me: {
    action(arg0) {
      const obj = { content: "_" + arg0 + "_" };
      return obj;
    },
  },
  tableflip: {
    action(arg0) {
      let str;
      const obj = { content: str.trim() };
      str = "" + arg0 + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B";
      return obj;
    },
  },
  unflip: {
    action(arg0) {
      let str;
      const obj = { content: str.trim() };
      str = "" + arg0 + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)";
      return obj;
    },
  },
  shrug: {
    action(arg0) {
      let str;
      const obj = { content: str.trim() };
      str = "" + arg0 + " \u00AF\\_(\u30C4)_/\u00AF";
      return obj;
    },
  },
  nick: {
    action(arg0, channel) {
      channel = channel.channel;
      if (null != channel.guild_id) {
        const obj = ChangeNicknameActionCreatorsDefault;
        obj.changeNickname(channel.guild_id, channel.id, metroImportAll, arg0);
        return { content: "" };
      }
    },
  },
  reaction: obj2,
  searchReplace: obj3,
  spoiler: {
    action(View) {
      let str;
      const obj = { content: str.trim() };
      str = metroImportDefault(View);
      return obj;
    },
  },
};
obj2 = {
  match: module_1936.anyScopeRegex(/^\+:(.+?): *$/),
  action(str, channel) {
    channel = channel.channel;
    if (!channel.isEdit) {
      if (MessageStore.hasPresent(channel.id)) {
        const messages = MessageStore.getMessages(channel.id);
        const lastResult = messages.last();
        if (null != lastResult) {
          if (null != lastResult.id) {
            const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(channel.guild_id);
            const getByName = disambiguatedEmojiContext.getByName;
            const trimmed = str.trim();
            const byName = getByName(trimmed.slice(2, -1));
            if (null != byName) {
              const addReaction = ReactionActionCreators.addReaction;
              const id = channel.id;
              const id2 = lastResult.id;
              ReactionActionCreators;
              const obj3 = ReactionUtils;
              addReaction(id, id2, obj3.toReactionEmoji(byName));
              return { content: "" };
            }
          }
        }
      }
    }
  },
};
module_1936 = module_1936_mod;
obj3 = {
  match: module_1936.anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
  action(str, channel) {
    let str2;
    let str3;
    channel = channel.channel;
    if (!channel.isEdit) {
      const lastEditableMessage = MessageStore.getLastEditableMessage(channel.id);
      if (null != lastEditableMessage) {
        if (null != lastEditableMessage.id) {
          let str7;
          const self = this;
          const _Array = Array;
          let match = str.match(this.match.regex);
          if (match == null) {
            match = [];
          }
          [r10014, str, str2, str3] = from(match);
          let parts;
          _slicedToArray(from(match), 4);
          if (str3 != null) {
            parts = str3.split("");
          }
          if (parts == null) {
            parts = [];
          }
          const replaced = str.replace(re9, (arg0, arg1) => arg1);
          const replaced1 = str2.replace(re9, (arg0, arg1) => arg1);
          if (parts.includes("g")) {
            str7 = str6.replaceAll(replaced, replaced1);
          } else {
            str7 = str6.replace(replaced, replaced1);
          }
          if (null == str7) {
            if (0 === lastEditableMessage.attachments.length) {
              const obj = MessageActionCreatorsDefault;
              obj.deleteMessage(channel.id, lastEditableMessage.id);
            }
            return { content: "" };
          }
          if (str7 !== lastEditableMessage.content) {
            const obj3 = { content: str7 };
            const obj2 = MessageActionCreatorsDefault;
            obj2.editMessage(channel.id, lastEditableMessage.id, obj3);
          }
        }
      }
      return { content: "" };
    }
  },
};
module_1936 = module_1936_mod;
Object.setPrototypeOf(COMMANDS, null);
const result = size.fileFinishedImporting("modules/messages/LegacyCommands.tsx");

export { COMMANDS };
export const handleLegacyCommands = function handleLegacyCommands(text, arg1) {
  for (const key10005 in obj) {
    let obj;
    let str = obj[key10005];
    if (null == str.match) {
      continue;
    } else {
      let regex = str.match.regex;
      let isMatch;
      if (regex != null) {
        isMatch = regex.test(text);
      }
      if (!isMatch) {
        continue;
      } else {
        obj = AppAnalyticsUtilsDefault;
        let obj2 = { command: key10005 };
        let trackWithMetadataResult = obj.trackWithMetadata(metroRequire.SLASH_COMMAND_USED, obj2);
        return str.action(text, arg1);
      }
    }
    continue;
  }
};
