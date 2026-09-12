// discord_app/modules/markup_v2/native/transformNativeMarkupMention.tsx
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import MarkupRules from "../../markup/MarkupRules.tsx";
import MarkupChannelMentionRule from "../../markup/MarkupChannelMentionRule.tsx";
import PlatformMarkupRules from "../../markup/PlatformMarkupRules.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupMention.tsx");

export const applyChannelMentionIcons = function applyChannelMentionIcons(handleUnknownChannelResult) {
  const obj = {};
  const merged = Object.assign(handleUnknownChannelResult);
  obj.content = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.content);
  obj.inContent = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.inContent);
  return obj;
};
export const transformNativeMention = function transformNativeMention(value, allowGameMentions) {
  const type = value.type;
  if ("user" === type) {
    let str = value.value.toString();
    let obj = { fullMatch: null, id: null, everyoneOrHere: "Array" };
    const _HermesInternal2 = HermesInternal;
    obj.fullMatch = "<@" + str + ">";
    obj.id = str;
    return MarkupRules.hydrateUserMention(obj, allowGameMentions);
  } else if ("everyone" === type) {
    return MarkupRules.hydrateUserMention(
      { fullMatch: "@everyone", id: "accessible", everyoneOrHere: "reType" },
      allowGameMentions,
    );
  } else if ("here" === type) {
    return MarkupRules.hydrateUserMention(
      { fullMatch: "@here", id: "accessible", everyoneOrHere: "reType" },
      allowGameMentions,
    );
  } else if ("role" === type) {
    return MarkupRules.hydrateRoleMention(value.value.toString(), allowGameMentions);
  } else if ("game" === type) {
    const str1 = value.value.toString();
    if (allowGameMentions.allowGameMentions) {
      let hydrateGameMentionResult = PlatformMarkupRules.hydrateGameMention(str1, allowGameMentions);
      const tmp21Result = PlatformMarkupRules;
    } else {
      hydrateGameMentionResult = { type: MarkupTypes.AST_KEY.TEXT, content: null };
      const _HermesInternal = HermesInternal;
      hydrateGameMentionResult.content = "<@$" + str1 + ">";
    }
    return hydrateGameMentionResult;
  } else if ("command" === type) {
    let str2 = value.value.id;
    return MarkupRules.hydrateCommandMention(value.value.name, str2.toString(), allowGameMentions);
  } else if ("channel" === type) {
    str = value.value;
    str2 = str.toString();
    const guildIdFromChannelId = MarkupChannelMentionRule.getGuildIdFromChannelId(allowGameMentions.channelId);
    const channel = MarkupChannelMentionRule.getChannel(str2, allowGameMentions.mentionChannels);
    if (null == channel) {
      let tmp4Result = MarkupChannelMentionRule;
      let handleUnknownChannelResult = tmp4Result.handleUnknownChannel(null, str2, null, guildIdFromChannelId);
    } else {
      tmp4Result = MarkupChannelMentionRule;
      handleUnknownChannelResult = tmp4Result.parseChannel(channel, null, guildIdFromChannelId);
    }
    obj = {};
    const merged = Object.assign(handleUnknownChannelResult);
    obj.content = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.content);
    const tmp4Result1 = PlatformMarkupRules;
    obj.inContent = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.inContent);
    return obj;
  } else {
    obj = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
    return obj;
  }
};
