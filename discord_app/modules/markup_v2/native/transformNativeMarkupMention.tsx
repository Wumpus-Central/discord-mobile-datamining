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
    const str1 = value.value.toString();
    const obj4 = { fullMatch: null, id: null, everyoneOrHere: "Array" };
    const _HermesInternal2 = HermesInternal;
    obj4.fullMatch = "<@" + str1 + ">";
    obj4.id = str1;
    return MarkupRules.hydrateUserMention(obj4, allowGameMentions);
  } else if ("everyone" === type) {
    return MarkupRules.hydrateUserMention(
      {
        fullMatch: "@everyone",
        id: "accessible",
        everyoneOrHere: 1758339011332018700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
      },
      allowGameMentions,
    );
  } else if ("here" === type) {
    return MarkupRules.hydrateUserMention(
      { fullMatch: "@here", id: "accessible", everyoneOrHere: "NETWORK" },
      allowGameMentions,
    );
  } else if ("role" === type) {
    return MarkupRules.hydrateRoleMention(value.value.toString(), allowGameMentions);
  } else if ("game" === type) {
    const str16 = value.value.toString();
    if (allowGameMentions.allowGameMentions) {
      let hydrateGameMentionResult = PlatformMarkupRules.hydrateGameMention(str16, allowGameMentions);
      const tmp21Result = PlatformMarkupRules;
    } else {
      hydrateGameMentionResult = { type: MarkupTypes.AST_KEY.TEXT, content: null };
      const _HermesInternal = HermesInternal;
      hydrateGameMentionResult.content = "<@$" + str16 + ">";
    }
    return hydrateGameMentionResult;
  } else if ("command" === type) {
    return MarkupRules.hydrateCommandMention(value.value.name, value.value.id.toString(), allowGameMentions);
  } else if ("channel" === type) {
    const str17 = value.value.toString();
    const guildIdFromChannelId = MarkupChannelMentionRule.getGuildIdFromChannelId(allowGameMentions.channelId);
    const channel = MarkupChannelMentionRule.getChannel(str17, allowGameMentions.mentionChannels);
    if (null == channel) {
      const tmp4Result = MarkupChannelMentionRule;
      let handleUnknownChannelResult = tmp4Result.handleUnknownChannel(null, str17, null, guildIdFromChannelId);
    } else {
      handleUnknownChannelResult = MarkupChannelMentionRule.parseChannel(channel, null, guildIdFromChannelId);
      const tmp4Result4 = MarkupChannelMentionRule;
    }
    const obj5 = {};
    const merged = Object.assign(handleUnknownChannelResult);
    obj5.content = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.content);
    const tmp4Result5 = PlatformMarkupRules;
    obj5.inContent = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.inContent);
    return obj5;
  } else {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
    return obj;
  }
};
