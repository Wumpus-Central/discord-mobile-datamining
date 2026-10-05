// === Module 7786: transformNativeMarkupLink ===

// Module 7786 (transformNativeMarkupLink)
import MarkupTypes from "MarkupTypes" /* 5785 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5791 */;
import MarkupChannelMentionRule from "MarkupChannelMentionRule" /* 5796 */;
import MarkupAttachmentLinkRule from "MarkupAttachmentLinkRule" /* 5799 */;
import transformNativeMarkupMention from "transformNativeMarkupMention" /* 7784 */;
import ChannelLinkUrls from "ChannelLinkUrls" /* 7787 */;
import size from "module_2" /* 2 */;

function stripCredentialsForDisplay(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    uRL.username = "";
    uRL.password = "";
    const obj = UnicodeSanitizationUtils;
    return obj.safelyMakeUrlHumanReadable(uRL);
  } catch (err) {
    return url;
  }
}
const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupLink.tsx");

export const transformNativeLink = function transformNativeLink(value, channelId, transformNativeInline) {
  let items;
  let items1;
  let text;
  let title;
  let tmp8;
  let url;
  ({ text, url, title } = value);
  if (null != text) {
    if (0 !== text.length) {
      const obj = { type: MarkupTypes.AST_KEY.LINK, content: transformNativeInline(text, channelId), target: url, title };
      return obj;
    }
  }
  const obj2 = ChannelLinkUrls;
  const parseChannelLinkUrlResult = obj2.parseChannelLinkUrl(url);
  if (null != parseChannelLinkUrlResult) {
    let handleUnknownChannelResult;
    const tmp4Result = MarkupChannelMentionRule;
    const guildIdFromChannelId = tmp4Result.getGuildIdFromChannelId(channelId.channelId);
    channelId = parseChannelLinkUrlResult.parentChannelId;
    const tmp4Result7 = MarkupChannelMentionRule;
    let channel = tmp4Result7.getChannel(parseChannelLinkUrlResult.channelId, null);
    if (channel == null) {
      let channel1 = null;
      if (null != channelId) {
        const tmp4Result8 = MarkupChannelMentionRule;
        channel1 = tmp4Result8.getChannel(channelId, null);
      }
      channel = channel1;
    }
    if (null == channel) {
      const guildId = parseChannelLinkUrlResult.guildId;
      const handleUnknownChannel = MarkupChannelMentionRule.handleUnknownChannel;
      const tmp4Result9 = MarkupChannelMentionRule;
      if (channelId == null) {
        channelId = parseChannelLinkUrlResult.channelId;
      }
      handleUnknownChannelResult = handleUnknownChannel(guildId, channelId, parseChannelLinkUrlResult.messageId, guildIdFromChannelId, url);
    } else {
      const tmp4Result10 = MarkupChannelMentionRule;
      handleUnknownChannelResult = tmp4Result10.parseChannel(channel, parseChannelLinkUrlResult.messageId, guildIdFromChannelId, url);
    }
    const tmp4Result11 = transformNativeMarkupMention;
    return tmp4Result11.applyChannelMentionIcons(handleUnknownChannelResult);
  } else {
    let obj5;
    const tmp4Result12 = MarkupAttachmentLinkRule;
    const matchAttachmentUrlResult = tmp4Result12.matchAttachmentUrl(url);
    if (null != matchAttachmentUrlResult) {
      const name = matchAttachmentUrlResult.name;
      const obj3 = { type: MarkupTypes.AST_KEY.ATTACHMENT_LINK, content: items, attachmentUrl: url, attachmentName: name };
      items = [{ type: MarkupTypes.AST_KEY.TEXT, content: name }];
      obj5 = obj3;
      const obj4 = { type: MarkupTypes.AST_KEY.TEXT, content: name };
    } else {
      obj5 = { type: MarkupTypes.AST_KEY.LINK, content: items1, target: url, title: "a" };
      const obj6 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp8 };
      items1 = [obj6];
      tmp8 = stripCredentialsForDisplay(url);
    }
    return obj5;
  }
};