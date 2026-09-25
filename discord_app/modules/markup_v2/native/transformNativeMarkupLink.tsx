// discord_app/modules/markup_v2/native/transformNativeMarkupLink.tsx
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import UnicodeSanitizationUtils from "../../markup/UnicodeSanitizationUtils.tsx";
import MarkupChannelMentionRule from "../../markup/MarkupChannelMentionRule.tsx";
import MarkupAttachmentLinkRule from "../../markup/MarkupAttachmentLinkRule.tsx";
import transformNativeMarkupMention from "transformNativeMarkupMention.tsx";
import ChannelLinkUrls from "../ChannelLinkUrls.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function stripCredentialsForDisplay(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    uRL.username = "";
    uRL.password = "";
    return UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(uRL);
  } catch (err) {
    return tmp;
  }
}
const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupLink.tsx");

export const transformNativeLink = function transformNativeLink(value, channelId, transformNativeInline) {
  ({ text, url, title } = value);
  if (null != text) {
    if (0 !== text.length) {
      const obj = {
        type: MarkupTypes.AST_KEY.LINK,
        content: transformNativeInline(text, channelId),
        target: url,
        title,
      };
      return obj;
    }
  }
  const parseChannelLinkUrlResult = ChannelLinkUrls.parseChannelLinkUrl(url);
  if (null != parseChannelLinkUrlResult) {
    const guildIdFromChannelId = MarkupChannelMentionRule.getGuildIdFromChannelId(channelId.channelId);
    channelId = parseChannelLinkUrlResult.parentChannelId;
    const tmp4Result = MarkupChannelMentionRule;
    let channel = MarkupChannelMentionRule.getChannel(parseChannelLinkUrlResult.channelId, null);
    if (channel == null) {
      let channel1 = null;
      if (null != channelId) {
        channel1 = MarkupChannelMentionRule.getChannel(channelId, null);
        const tmp4Result8 = MarkupChannelMentionRule;
      }
      channel = channel1;
    }
    if (null == channel) {
      const tmp4Result9 = MarkupChannelMentionRule;
      const guildId = parseChannelLinkUrlResult.guildId;
      if (channelId == null) {
        channelId = parseChannelLinkUrlResult.channelId;
      }
      let handleUnknownChannelResult = tmp4Result9.handleUnknownChannel(
        guildId,
        channelId,
        parseChannelLinkUrlResult.messageId,
        guildIdFromChannelId,
        url,
      );
    } else {
      const tmp4Result10 = MarkupChannelMentionRule;
      handleUnknownChannelResult = tmp4Result10.parseChannel(
        channel,
        parseChannelLinkUrlResult.messageId,
        guildIdFromChannelId,
        url,
      );
    }
    const tmp4Result7 = MarkupChannelMentionRule;
    return transformNativeMarkupMention.applyChannelMentionIcons(handleUnknownChannelResult);
  } else {
    const matchAttachmentUrlResult = MarkupAttachmentLinkRule.matchAttachmentUrl(url);
    if (null != matchAttachmentUrlResult) {
      const name = matchAttachmentUrlResult.name;
      const obj3 = {
        type: MarkupTypes.AST_KEY.ATTACHMENT_LINK,
        content: null,
        attachmentUrl: null,
        attachmentName: null,
      };
      const obj4 = { type: MarkupTypes.AST_KEY.TEXT, content: name };
      const items = [obj4];
      obj3.content = items;
      obj3.attachmentUrl = url;
      obj3.attachmentName = name;
      let obj5 = obj3;
    } else {
      obj5 = { type: MarkupTypes.AST_KEY.LINK, content: null, target: null, title: "flex" };
      const obj6 = { type: MarkupTypes.AST_KEY.TEXT, content: stripCredentialsForDisplay(url) };
      const items1 = [obj6];
      obj5.content = items1;
      obj5.target = url;
      const tmp8 = stripCredentialsForDisplay(url);
    }
    return obj5;
  }
};
