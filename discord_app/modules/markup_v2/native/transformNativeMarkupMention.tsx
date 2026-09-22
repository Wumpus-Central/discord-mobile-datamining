// discord_app/modules/markup_v2/native/transformNativeMarkupMention.tsx
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import MarkupRules from "../../markup/MarkupRules.tsx";
import MarkupChannelMentionRule from "../../markup/MarkupChannelMentionRule.tsx";
import PlatformMarkupRules from "../../markup/PlatformMarkupRules.native.tsx";
import StaticMentionRoutes from "../StaticMentionRoutes.tsx";
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
    const obj5 = { fullMatch: null, id: null, everyoneOrHere: "Array" };
    const _HermesInternal2 = HermesInternal;
    obj5.fullMatch = "<@" + str1 + ">";
    obj5.id = str1;
    return MarkupRules.hydrateUserMention(obj5, allowGameMentions);
  } else if ("everyone" === type) {
    return MarkupRules.hydrateUserMention(
      { fullMatch: "@everyone", id: "padding", everyoneOrHere: "<string:3460366337>" },
      allowGameMentions,
    );
  } else if ("here" === type) {
    return MarkupRules.hydrateUserMention(
      { fullMatch: "@here", id: "padding", everyoneOrHere: "<string:4215341057>" },
      allowGameMentions,
    );
  } else if ("role" === type) {
    return MarkupRules.hydrateRoleMention(value.value.toString(), allowGameMentions);
  } else if ("game" === type) {
    const str19 = value.value.toString();
    if (allowGameMentions.allowGameMentions) {
      let hydrateGameMentionResult = PlatformMarkupRules.hydrateGameMention(str19, allowGameMentions);
      const tmp25Result = PlatformMarkupRules;
    } else {
      hydrateGameMentionResult = { type: MarkupTypes.AST_KEY.TEXT, content: null };
      const _HermesInternal = HermesInternal;
      hydrateGameMentionResult.content = "<@$" + str19 + ">";
    }
    return hydrateGameMentionResult;
  } else if ("command" === type) {
    return MarkupRules.hydrateCommandMention(value.value.name, value.value.id.toString(), allowGameMentions);
  } else if ("channel" === type) {
    const str20 = value.value.toString();
    const guildIdFromChannelId = MarkupChannelMentionRule.getGuildIdFromChannelId(allowGameMentions.channelId);
    const channel = MarkupChannelMentionRule.getChannel(str20, allowGameMentions.mentionChannels);
    if (null == channel) {
      const tmp8Result = MarkupChannelMentionRule;
      let handleUnknownChannelResult = tmp8Result.handleUnknownChannel(null, str20, null, guildIdFromChannelId);
    } else {
      handleUnknownChannelResult = MarkupChannelMentionRule.parseChannel(channel, null, guildIdFromChannelId);
      const tmp8Result4 = MarkupChannelMentionRule;
    }
    const obj6 = {};
    const merged = Object.assign(handleUnknownChannelResult);
    obj6.content = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.content);
    const tmp8Result5 = PlatformMarkupRules;
    obj6.inContent = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.inContent);
    return obj6;
  } else if ("static" === type) {
    let str21;
    if ("linked_roles" === value.value.type) {
      if (null != value.value.value) {
        str21 = value.value.value.toString();
      }
    }
    return MarkupRules.hydrateStaticRouteLink(
      StaticMentionRoutes.STATIC_ROUTE_ICON_TYPE[value.value.type],
      str21,
      allowGameMentions,
    );
  } else {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
    return obj;
  }
};
