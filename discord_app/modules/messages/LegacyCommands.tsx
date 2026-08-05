import { ChangeNicknameActionCreators } from "../../actions/ChangeNicknameActionCreators.tsx";
import { trackInvite } from "../../actions/MessageActionCreators.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
import { checkReactionResponse } from "../reactions/ReactionActionCreators.tsx";
import { MAX_REACTIONS } from "../reactions/ReactionUtils.tsx";
import { explicitContentFromProto } from "../user_settings/UserSettings.tsx";
// discord_app/modules/messages/LegacyCommands.tsx
import _slicedToArray from "_slicedToArray";
import getEmojiToGroupId from "getEmojiToGroupId";
import reinjectEphemerals from "reinjectEphemerals";
import ME from "ME";
import importDefaultResult from "t";
import importDefaultResult1 from "t";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: closure_6, MARKDOWN_SPOILER_WRAPPER: error, ME: metroImportAll } = ME);
const re9 = /\\([*?+/])/g;
obj = { tts: obj, me: obj, tableflip: obj1, unflip: obj2, shrug: obj3, nick: obj4, reaction: null, searchReplace: null, spoiler: null };
obj = {
  action() {
    const obj = { tts: null };
    const EnableTTSCommand = explicitContentFromProto /* explicitContentFromProto */.EnableTTSCommand;
    obj[0] = EnableTTSCommand.getSetting();
    return obj;
  }
};
obj = {
  action(arg0) {
    return { content: "_" + arg0 + "_" };
  }
};
const obj5 = { match: null, action: null };
obj5[0] = require("t").anyScopeRegex(/^\+:(.+?): *$/);
obj5[1] = function action(str, channel) {
  channel = channel.channel;
  if (!channel.isEdit) {
    if (reinjectEphemerals.hasPresent(channel.id)) {
      const messages = obj.getMessages(channel.id);
      const lastResult = messages.last();
      if (null != lastResult) {
        if (null != lastResult.id) {
          disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(channel.guild_id);
          const trimmed = str.trim();
          const byName = disambiguatedEmojiContext.getByName(trimmed.slice(2, -1));
          if (null != byName) {
            const obj3 = checkReactionResponse /* checkReactionResponse */;
            obj3.addReaction(channel.id, lastResult.id, MAX_REACTIONS /* MAX_REACTIONS */.toReactionEmoji(byName));
            return { content: "" };
          }
        }
      }
    }
    obj = reinjectEphemerals;
  }
};
obj[6] = obj5;
const obj6 = { match: null, action: null };
obj1 = {
  action(arg0) {
    const obj = { content: null };
    obj[0] = "" + arg0 + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B".trim();
    return obj;
  }
};
obj2 = {
  action(arg0) {
    const obj = { content: null };
    obj[0] = "" + arg0 + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)".trim();
    return obj;
  }
};
obj3 = {
  action(arg0) {
    const obj = { content: null };
    obj[0] = "" + arg0 + " \u00AF\\_(\u30C4)_/\u00AF".trim();
    return obj;
  }
};
obj4 = {
  action(arg0, channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      const obj = ChangeNicknameActionCreators;
      obj.changeNickname(channel.guild_id, channel.id, closure_8, arg0);
      return { content: "" };
    }
  }
};
obj6[0] = require("t").anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/);
obj6[1] = function action(str, channel) {
  let str2;
  let str3;
  channel = channel.channel;
  if (!channel.isEdit) {
    const lastEditableMessage = reinjectEphemerals.getLastEditableMessage(channel.id);
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
            let obj = trackInvite;
            obj.deleteMessage(channel.id, lastEditableMessage.id);
          }
          return { content: "" };
        }
        if (str7 !== lastEditableMessage.content) {
          obj = { content: null };
          obj[0] = str7;
          trackInvite.editMessage(channel.id, lastEditableMessage.id, obj);
          const obj2 = trackInvite;
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
    const obj = { content: null };
    obj[0] = callback2(arg0).trim();
    return obj;
  }
};
Object.setPrototypeOf(obj, null);
const result = require("reinjectEphemerals").fileFinishedImporting("modules/messages/LegacyCommands.tsx");

export const COMMANDS = obj;
export const handleLegacyCommands = function handleLegacyCommands(text, arg1) {
  for (const key10005 in obj) {
    let tmp7 = key10005;
    let tmp8 = obj;
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
        let tmp2 = arg1;
        let tmp3 = importDefault;
        let tmp4 = dependencyMap;
        let obj = collectGuildAnalyticsMetadata;
        let tmp5 = constants;
        obj = { command: null };
        obj[0] = key10005;
        let trackWithMetadataResult = obj.trackWithMetadata(constants.SLASH_COMMAND_USED, obj);
        return str.action(arg0, arg1);
      }
    }
    continue;
  }
};