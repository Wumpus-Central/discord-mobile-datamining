// discord_app/modules/messages/LegacyCommands.tsx
import MAX_REACTIONS from "../reactions/ReactionUtils.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import collectGuildAnalyticsMetadataDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import trackInviteDefault from "../../actions/MessageActionCreators.tsx";
import checkReactionResponse from "../reactions/ReactionActionCreators.tsx";
import _modDef8461 from "../../actions/ChangeNicknameActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import getEmojiToGroupId from "../emojis/EmojiStore.tsx";
import reinjectEphemerals from "../../stores/MessageStore.tsx";
import ME from "../../Constants.tsx";
import importDefaultResult from "../../../_runtime/04092_t.js";

require = fn;
({ AnalyticEvents: closure_6, MARKDOWN_SPOILER_WRAPPER: error, ME: closure_8 } = ME);
const re9 = /\\([*?+/])/g;
let obj = {
  action(arg0) {
    return { content: "_" + arg0 + "_" };
  }
};
const obj5 = {
  match: importDefaultResult.anyScopeRegex(/^\+:(.+?): *$/),
  action(str, channel) {
    channel = channel.channel;
    if (!channel.isEdit) {
      if (store.hasPresent(channel.id)) {
        const messages = store.getMessages(channel.id);
        const lastResult = messages.last();
        if (null != lastResult) {
          if (null != lastResult.id) {
            disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(channel.guild_id);
            const trimmed = str.trim();
            const byName = disambiguatedEmojiContext.getByName(trimmed.slice(2, -1));
            if (null != byName) {
              const obj3 = checkReactionResponse;
              obj3.addReaction(channel.id, lastResult.id, MAX_REACTIONS.toReactionEmoji(byName));
              return { content: "" };
            }
          }
        }
      }
    }
  }
};
obj[6] = obj5;
const obj6 = { match: null, action: null };
obj6[0] = importDefaultResult.anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/);
obj6[1] = function action(str, channel) {
  channel = channel.channel;
  if (!channel.isEdit) {
    const lastEditableMessage = store.getLastEditableMessage(channel.id);
    if (null != lastEditableMessage) {
      if (null != lastEditableMessage.id) {
        const self = this;
        let match = str.match(this.match.regex);
        if (match == null) {
          match = [];
        }
        [r10014, str, str2, str3] = callback(Array.from(match), 4);
        let parts;
        if (str3 != null) {
          parts = str3.split("");
        }
        if (parts == null) {
          parts = [];
        }
        const replaced = str.replace(closure_9, (arg0, arg1) => arg1);
        const replaced1 = str2.replace(closure_9, (arg0, arg1) => arg1);
        if (parts.includes("g")) {
          let str7 = str6.replaceAll(replaced, replaced1);
        } else {
          str7 = str6.replace(replaced, replaced1);
        }
        if (null == str7) {
          if (0 === lastEditableMessage.attachments.length) {
            obj = trackInviteDefault;
            obj.deleteMessage(channel.id, lastEditableMessage.id);
          }
          return { content: "" };
        }
        if (str7 !== lastEditableMessage.content) {
          obj = { content: null };
          obj[0] = str7;
          trackInviteDefault.editMessage(channel.id, lastEditableMessage.id, obj);
        }
        const tmp5 = callback(Array.from(match), 4);
      }
    }
    return { content: "" };
  }
};
obj[7] = obj6;
obj[8] = {
  action(arg0) {
    obj = { content: callback2(arg0).trim() };
    return obj;
  }
};
Object.setPrototypeOf(obj, null);
const importDefaultResult1 = importDefaultResult;
const result = require("obj132").fileFinishedImporting("modules/messages/LegacyCommands.tsx");

export const COMMANDS = obj;
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
        obj = collectGuildAnalyticsMetadataDefault;
        obj = { command: null };
        obj[0] = key10005;
        let trackWithMetadataResult = obj.trackWithMetadata(constants.SLASH_COMMAND_USED, obj);
        return str.action(arg0, arg1);
      }
    }
    continue;
  }
};