// discord_app/modules/markup_v2/native/transformNativeMarkupMention.tsx
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import MarkupRules from "../../markup/MarkupRules.tsx";
import MarkupChannelMentionRule from "../../markup/MarkupChannelMentionRule.tsx";
import PlatformMarkupRules from "../../markup/PlatformMarkupRules.native.tsx";
import StaticMentionRoutes from "../StaticMentionRoutes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupMention.tsx");

export const applyChannelMentionIcons = function applyChannelMentionIcons(handleUnknownChannelResult) {
  let obj2;
  let obj3;
  const obj = {
    content: obj2.decorateWithIcon(handleUnknownChannelResult.content),
    inContent: obj3.decorateWithIcon(handleUnknownChannelResult.inContent),
  };
  const merged = Object.assign(handleUnknownChannelResult);
  obj2 = PlatformMarkupRules;
  obj3 = PlatformMarkupRules;
  return obj;
};
export const transformNativeMention = function transformNativeMention(value, allowGameMentions) {
  let tmp8Result5;
  let tmp8Result6;
  const type = value.type;
  if ("user" === type) {
    const str9 = value.value;
    const str1 = str9.toString();
    const _HermesInternal2 = HermesInternal;
    const obj5 = { fullMatch: "<@" + str1 + ">", id: str1, everyoneOrHere: "Array" };
    const hydrateUserMention = MarkupRules.hydrateUserMention;
    MarkupRules;
    return hydrateUserMention(obj5, allowGameMentions);
  } else if ("everyone" === type) {
    const obj15 = MarkupRules;
    return obj15.hydrateUserMention(
      { fullMatch: "@everyone", id: "applicationId", everyoneOrHere: "r" },
      allowGameMentions,
    );
  } else if ("here" === type) {
    const obj14 = MarkupRules;
    return obj14.hydrateUserMention(
      { fullMatch: "@here", id: "applicationId", everyoneOrHere: "r" },
      allowGameMentions,
    );
  } else if ("role" === type) {
    const obj13 = MarkupRules;
    const str8 = value.value;
    return obj13.hydrateRoleMention(str8.toString(), allowGameMentions);
  } else if ("game" === type) {
    let hydrateGameMentionResult;
    const str5 = value.value;
    const str19 = str5.toString();
    if (allowGameMentions.allowGameMentions) {
      const tmp25Result = PlatformMarkupRules;
      hydrateGameMentionResult = tmp25Result.hydrateGameMention(str19, allowGameMentions);
    } else {
      hydrateGameMentionResult = { type: MarkupTypes.AST_KEY.TEXT, content: "<@$" + str19 + ">" };
      const _HermesInternal = HermesInternal;
    }
    return hydrateGameMentionResult;
  } else if ("command" === type) {
    const obj10 = MarkupRules;
    const str4 = value.value.id;
    return obj10.hydrateCommandMention(value.value.name, str4.toString(), allowGameMentions);
  } else if ("channel" === type) {
    let handleUnknownChannelResult;
    const str3 = value.value;
    const str20 = str3.toString();
    const obj3 = MarkupChannelMentionRule;
    const guildIdFromChannelId = obj3.getGuildIdFromChannelId(allowGameMentions.channelId);
    const obj4 = MarkupChannelMentionRule;
    const channel = obj4.getChannel(str20, allowGameMentions.mentionChannels);
    if (null == channel) {
      const tmp8Result = MarkupChannelMentionRule;
      handleUnknownChannelResult = tmp8Result.handleUnknownChannel(null, str20, null, guildIdFromChannelId);
    } else {
      const tmp8Result4 = MarkupChannelMentionRule;
      handleUnknownChannelResult = tmp8Result4.parseChannel(channel, null, guildIdFromChannelId);
    }
    const obj6 = {
      content: tmp8Result5.decorateWithIcon(handleUnknownChannelResult.content),
      inContent: tmp8Result6.decorateWithIcon(handleUnknownChannelResult.inContent),
    };
    const merged = Object.assign(handleUnknownChannelResult);
    tmp8Result5 = PlatformMarkupRules;
    tmp8Result6 = PlatformMarkupRules;
    return obj6;
  } else if ("static" === type) {
    let str21;
    if ("linked_roles" === value.value.type) {
      if (null != value.value.value) {
        const str2 = value.value.value;
        str21 = str2.toString();
      }
    }
    const obj2 = MarkupRules;
    return obj2.hydrateStaticRouteLink(
      StaticMentionRoutes.STATIC_ROUTE_ICON_TYPE[value.value.type],
      str21,
      allowGameMentions,
    );
  } else {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
    return obj;
  }
};
